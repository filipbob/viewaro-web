#!/usr/bin/env python3
"""Xtream Codes-compatible demo server for App Review.

Serves the same openly licensed films and live channels as the Tvheadend
demo through the subset of the Xtream API that Viewaro's client uses:

    /player_api.php          account handshake and the eight catalog actions
    /xmltv.php               the demo guide, for a manual XMLTV override
    /live/U/P/<id>.m3u8      live channels as HLS, one ffmpeg remux each
    /movie/U/P/<id>.mp4      films, with byte ranges for AVPlayer
    /series/U/P/<id>.mp4     episodes of the demo series
    /art/<name>.jpg          posters and backdrops, without the account

The account is one username with a PBKDF2 hash in /demo/xtream/account.json,
written by `--set-password` (reads the password on stdin) and re-read when it
changes. Nothing here logs a password: request logs drop the query string and
mask the credential segments of stream paths.
"""

import argparse
import hashlib
import hmac
import json
import os
import re
import shutil
import subprocess
import sys
import threading
import time
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from importlib.machinery import SourceFileLoader
from importlib.util import module_from_spec, spec_from_loader
from urllib.parse import unquote, urlsplit

APP = "/demo/app"
MEDIA = "/demo/media"
RUNTIME = os.path.join(MEDIA, "runtime")
OUT = os.path.join(MEDIA, "out")
ART = os.path.join(MEDIA, "art")
HLS = "/demo/hls"
ACCOUNT = "/demo/xtream/account.json"
GRABBER = "/demo/bin/tv_grab_viewaro_demo"
PUBLIC_URL = os.environ.get(
    "XTREAM_DEMO_PUBLIC_URL", "https://xtream.viewaro.itquotes.hr"
).rstrip("/")
ICON_URL = "https://viewaro.itquotes.hr/app-review/tvheadend/{}.png"
PORT = 8080
PBKDF2_ITERATIONS = 200_000
STREAM_PATH = re.compile(
    r"^/(?P<kind>live|movie|series)/(?P<user>[^/]+)/(?P<password>[^/]+)/(?P<rest>.+)$"
)


def log(message):
    print(message, flush=True)


def load_json(path):
    with open(path, encoding="utf-8") as handle:
        return json.load(handle)


def load_grabber():
    loader = SourceFileLoader("tv_grab_viewaro_demo", GRABBER)
    module = module_from_spec(spec_from_loader(loader.name, loader))
    loader.exec_module(module)
    return module


def query_values(query):
    # Viewaro sends `+` literally (URLComponents does not escape it), so this
    # decodes percent escapes only, never `+` as a space.
    values = {}
    for pair in query.split("&"):
        key, _, value = pair.partition("=")
        if key:
            values.setdefault(unquote(key), unquote(value))
    return values


def clock(seconds):
    return f"{seconds // 3600}:{seconds % 3600 // 60:02d}:{seconds % 60:02d}"


class Catalog:
    """Every response body, built once from channels.json and xtream.json."""

    def __init__(self):
        channels = load_json(os.path.join(APP, "channels.json"))
        xtream = load_json(os.path.join(APP, "xtream.json"))
        self.schedule = load_json(os.path.join(RUNTIME, "schedule.json"))
        self.grabber = load_grabber()
        media = channels["media"]
        seconds = {
            item["media"]: round(item["durationMs"] / 1000)
            for channel in self.schedule["channels"]
            for item in channel["items"]
        }
        added = str(int(datetime.fromisoformat(
            xtream["added"].replace("Z", "+00:00")).timestamp()))

        def art(media_id, kind):
            return f"{PUBLIC_URL}/art/{media_id}-{kind}.jpg"

        def plot(media_id):
            return f"{media[media_id]['description']} {media[media_id]['attribution']}"

        tag_ids = {tag["name"]: str(index + 1)
                   for index, tag in enumerate(channels["tags"])}
        self.live_categories = [
            {"category_id": tag_ids[tag["name"]], "category_name": tag["name"],
             "parent_id": 0}
            for tag in channels["tags"]
        ]
        self.live_streams = [
            {"num": channel["number"], "name": channel["name"],
             "stream_type": "live", "stream_id": channel["serviceId"],
             "stream_icon": ICON_URL.format(channel["id"]),
             "epg_channel_id": f"{channel['id']}.viewaro-demo",
             "added": added, "category_id": tag_ids[channel["tag"]],
             "tv_archive": 0}
            for channel in channels["channels"]
        ]
        self.live_channel_ids = {
            str(channel["serviceId"]): channel["id"]
            for channel in channels["channels"]
        }

        self.vod_categories = [
            {"category_id": category["id"], "category_name": category["name"],
             "parent_id": 0}
            for category in xtream["vodCategories"]
        ]
        self.vod_streams = []
        self.vod_info = {}
        self.movie_files = {}
        for number, movie in enumerate(xtream["movies"], start=1):
            media_id = movie["media"]
            film = media[media_id]
            stream_id = str(movie["streamId"])
            self.vod_streams.append({
                "num": number, "name": film["title"], "stream_type": "movie",
                "stream_id": movie["streamId"],
                "stream_icon": art(media_id, "poster"),
                "added": added, "category_id": movie["category"],
                "container_extension": "mp4", "year": film["year"],
                "genre": film["category"], "duration_secs": seconds[media_id],
            })
            self.vod_info[stream_id] = {
                "info": {
                    "name": film["title"], "plot": plot(media_id),
                    "cover_big": art(media_id, "poster"),
                    "movie_image": art(media_id, "poster"),
                    "backdrop_path": [art(media_id, "backdrop")],
                    "releasedate": str(film["year"]), "genre": film["category"],
                    "duration_secs": seconds[media_id],
                    "duration": clock(seconds[media_id]),
                },
                "movie_data": {
                    "stream_id": movie["streamId"], "name": film["title"],
                    "added": added, "category_id": movie["category"],
                    "container_extension": "mp4",
                },
            }
            self.movie_files[stream_id] = os.path.join(OUT, f"{media_id}.mp4")

        self.series_categories = [
            {"category_id": category["id"], "category_name": category["name"],
             "parent_id": 0}
            for category in xtream["seriesCategories"]
        ]
        self.series = []
        self.series_info = {}
        self.episode_files = {}
        for number, show in enumerate(xtream["series"], start=1):
            listing = {
                "num": number, "name": show["name"],
                "series_id": show["seriesId"],
                "cover": art(show["artMedia"], "poster"),
                "backdrop_path": [art(show["artMedia"], "backdrop")],
                "plot": show["plot"], "releaseDate": show["releaseDate"],
                "genre": show["genre"], "last_modified": added,
                "category_id": show["category"],
            }
            self.series.append(listing)
            seasons, episodes = [], {}
            for season in show["seasons"]:
                seasons.append({
                    "season_number": season["number"], "name": season["name"],
                    "episode_count": len(season["episodes"]),
                    "cover_big": art(show["artMedia"], "poster"),
                })
                rows = []
                for episode_number, episode in enumerate(season["episodes"], start=1):
                    media_id = episode["media"]
                    rows.append({
                        "id": str(episode["id"]), "episode_num": episode_number,
                        "title": media[media_id]["title"],
                        "container_extension": "mp4",
                        "season": season["number"], "added": added,
                        "info": {
                            "plot": plot(media_id),
                            "movie_image": art(media_id, "backdrop"),
                            "duration_secs": seconds[media_id],
                            "duration": clock(seconds[media_id]),
                        },
                    })
                    self.episode_files[str(episode["id"])] = os.path.join(
                        OUT, f"{media_id}.mp4")
                episodes[str(season["number"])] = rows
            info = {key: listing[key] for key in (
                "name", "cover", "backdrop_path", "plot", "releaseDate", "genre",
                "last_modified")}
            info["cover_big"] = listing["cover"]
            self.series_info[str(show["seriesId"])] = {
                "seasons": seasons, "info": info, "episodes": episodes,
            }


class Account:
    """One username and a PBKDF2 hash, re-read when the file changes."""

    def __init__(self):
        self._lock = threading.Lock()
        self._stamp = None
        self._record = None
        self._verified = set()

    def _refresh(self):
        try:
            stat = os.stat(ACCOUNT)
        except FileNotFoundError:
            self._stamp, self._record, self._verified = None, None, set()
            return
        if (stat.st_mtime_ns, stat.st_size) != self._stamp:
            self._record = load_json(ACCOUNT)
            self._stamp = (stat.st_mtime_ns, stat.st_size)
            self._verified = set()

    def check(self, username, password):
        if not username or not password:
            return False
        with self._lock:
            self._refresh()
            record = self._record
            if record is None or not hmac.compare_digest(
                    username.encode(), record["username"].encode()):
                return False
            salt = bytes.fromhex(record["salt"])
            # A verified password is remembered as a salted digest, so HLS
            # segment requests do not each pay for PBKDF2.
            token = hashlib.sha256(salt + password.encode()).hexdigest()
            if token in self._verified:
                return True
            derived = hashlib.pbkdf2_hmac(
                "sha256", password.encode(), salt, record["iterations"]).hex()
            if hmac.compare_digest(derived, record["hash"]):
                self._verified.add(token)
                return True
            return False


def set_password(username):
    password = sys.stdin.read()
    if len(password) < 12:
        sys.exit("refusing a password shorter than 12 characters")
    salt = os.urandom(16)
    record = {
        "username": username, "salt": salt.hex(),
        "iterations": PBKDF2_ITERATIONS,
        "hash": hashlib.pbkdf2_hmac(
            "sha256", password.encode(), salt, PBKDF2_ITERATIONS).hex(),
    }
    partial = ACCOUNT + ".part"
    descriptor = os.open(partial, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(descriptor, "w", encoding="utf-8") as handle:
        json.dump(record, handle)
    os.replace(partial, ACCOUNT)
    log(f"password for {username} saved")


class LiveChannels:
    """Keeps one HLS remux per channel running, restarted if it ever ends."""

    def __init__(self, schedule):
        self.schedule = schedule

    def start(self):
        for channel in self.schedule["channels"]:
            threading.Thread(target=self._run, args=(channel,), daemon=True).start()

    def _run(self, channel):
        directory = os.path.join(HLS, str(channel["serviceId"]))
        while True:
            shutil.rmtree(directory, ignore_errors=True)
            os.makedirs(directory, exist_ok=True)
            offset_ms = (int(time.time() * 1000) - self.schedule["anchorMs"]) \
                % channel["cycleMs"]
            process = subprocess.run([
                "ffmpeg", "-hide_banner", "-nostdin", "-loglevel", "error",
                "-re", "-ss", f"{offset_ms / 1000:.3f}",
                "-f", "concat", "-safe", "0",
                "-i", os.path.join(RUNTIME, f"{channel['id']}.ffconcat"),
                "-map", "0:v:0", "-map", "0:a:0", "-c", "copy",
                "-f", "hls", "-hls_time", "4", "-hls_list_size", "8",
                "-hls_flags",
                "delete_segments+omit_endlist+independent_segments+temp_file",
                "-hls_base_url", f"{channel['serviceId']}/",
                "-hls_segment_filename", os.path.join(directory, "seg%06d.ts"),
                os.path.join(directory, "index.m3u8"),
            ], check=False)
            log(f"live {channel['id']} remux ended ({process.returncode}); restarting")
            time.sleep(2)


def masked(path):
    match = STREAM_PATH.match(path)
    if match:
        return f"/{match['kind']}/-/-/{match['rest']}"
    return path


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "ViewaroXtreamDemo"
    sys_version = ""
    catalog = None
    account = None

    def log_message(self, format, *args):  # noqa: A002 - BaseHTTPRequestHandler API
        path = masked(urlsplit(getattr(self, "path", "")).path)
        status = args[1] if len(args) > 1 else ""
        log(f"{getattr(self, 'command', '-')} {path} {status}")

    def do_HEAD(self):
        self.do_GET(head=True)

    def do_GET(self, head=False):
        self.head = head
        url = urlsplit(self.path)
        path = url.path
        query = query_values(url.query)
        if path == "/health":
            return self.send_bytes(b"ok\n", "text/plain")
        if path == "/player_api.php":
            return self.player_api(query)
        if path == "/xmltv.php":
            return self.xmltv(query)
        if path.startswith("/art/"):
            return self.art(path[len("/art/"):])
        match = STREAM_PATH.match(path)
        if match:
            # Split first, decode after: a `%2F` in the password stays inside
            # its own segment.
            if not self.account.check(unquote(match["user"]),
                                      unquote(match["password"])):
                return self.send_json({"error": "unauthorized"}, HTTPStatus.UNAUTHORIZED)
            return self.stream(match["kind"], match["rest"])
        return self.send_json({"error": "not found"}, HTTPStatus.NOT_FOUND)

    def player_api(self, query):
        signed_in = self.account.check(query.get("username"), query.get("password"))
        action = query.get("action")
        if action is None:
            if not signed_in:
                return self.send_json({"user_info": {"auth": 0}})
            now = int(time.time())
            return self.send_json({
                "user_info": {
                    "username": query["username"], "auth": 1,
                    "status": "Active", "exp_date": None, "is_trial": "0",
                    "active_cons": "0", "max_connections": "3",
                    "allowed_output_formats": ["m3u8", "ts"],
                },
                "server_info": {
                    "url": urlsplit(PUBLIC_URL).hostname, "port": "443",
                    "https_port": "443", "server_protocol": "https",
                    "timezone": "UTC", "timestamp_now": now,
                    "time_now": datetime.fromtimestamp(now, timezone.utc)
                    .strftime("%Y-%m-%d %H:%M:%S"),
                },
            })
        if not signed_in:
            return self.send_json({"user_info": {"auth": 0}}, HTTPStatus.UNAUTHORIZED)
        catalog = self.catalog
        lists = {
            "get_live_categories": catalog.live_categories,
            "get_live_streams": catalog.live_streams,
            "get_vod_categories": catalog.vod_categories,
            "get_vod_streams": catalog.vod_streams,
            "get_series_categories": catalog.series_categories,
            "get_series": catalog.series,
        }
        if action in lists:
            rows = lists[action]
            category = query.get("category_id")
            if category:
                rows = [row for row in rows if row.get("category_id") == category]
            return self.send_json(rows)
        details = {
            "get_vod_info": (catalog.vod_info, "vod_id"),
            "get_series_info": (catalog.series_info, "series_id"),
        }
        if action in details:
            table, key = details[action]
            info = table.get(query.get(key, "").strip())
            if info is None:
                return self.send_json({"error": "not found"}, HTTPStatus.NOT_FOUND)
            return self.send_json(info)
        return self.send_json([])

    def xmltv(self, query):
        if not self.account.check(query.get("username"), query.get("password")):
            return self.send_json({"user_info": {"auth": 0}}, HTTPStatus.UNAUTHORIZED)
        grabber = self.catalog.grabber
        now = int(time.time() * 1000)
        document = grabber.render(self.catalog.schedule, now - 6 * grabber.HOUR_MS,
                                  now + 2 * grabber.DAY_MS)
        return self.send_bytes(document.encode(), "application/xml; charset=utf-8")

    def art(self, name):
        if not re.fullmatch(r"[a-z0-9-]+\.jpg", name):
            return self.send_json({"error": "not found"}, HTTPStatus.NOT_FOUND)
        return self.send_file(os.path.join(ART, name), "image/jpeg",
                              cache="public, max-age=86400")

    def stream(self, kind, rest):
        if kind == "live":
            playlist = re.fullmatch(r"(\d+)\.m3u8", rest)
            segment = re.fullmatch(r"(\d+)/(seg\d+\.ts)", rest)
            if playlist and playlist[1] in self.catalog.live_channel_ids:
                # Read whole: ffmpeg replaces the playlist every few seconds.
                try:
                    with open(os.path.join(HLS, playlist[1], "index.m3u8"), "rb") as handle:
                        data = handle.read()
                except OSError:
                    return self.send_json({"error": "starting"},
                                          HTTPStatus.SERVICE_UNAVAILABLE)
                return self.send_bytes(data, "application/vnd.apple.mpegurl")
            if segment and segment[1] in self.catalog.live_channel_ids:
                return self.send_file(os.path.join(HLS, segment[1], segment[2]),
                                      "video/mp2t", cache="no-cache")
        else:
            item = re.fullmatch(r"(\d+)\.mp4", rest)
            files = (self.catalog.movie_files if kind == "movie"
                     else self.catalog.episode_files)
            if item and item[1] in files:
                return self.send_file(files[item[1]], "video/mp4",
                                      cache="private, max-age=3600")
        return self.send_json({"error": "not found"}, HTTPStatus.NOT_FOUND)

    def send_json(self, body, status=HTTPStatus.OK):
        return self.send_bytes(json.dumps(body).encode(), "application/json", status)

    def send_bytes(self, data, content_type, status=HTTPStatus.OK):
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        if not self.head:
            self.wfile.write(data)

    def send_file(self, path, content_type, cache):
        try:
            size = os.path.getsize(path)
        except OSError:
            return self.send_json({"error": "not found"}, HTTPStatus.NOT_FOUND)
        start, end, status = 0, size - 1, HTTPStatus.OK
        requested = self.headers.get("Range")
        if requested:
            match = re.fullmatch(r"\s*bytes=(\d*)-(\d*)\s*", requested)
            if not match or match[1] == match[2] == "":
                return self.send_unsatisfiable(size)
            if match[1] == "":
                start = max(0, size - int(match[2]))
            else:
                start = int(match[1])
                end = min(int(match[2]), size - 1) if match[2] else size - 1
            if start >= size or end < start:
                return self.send_unsatisfiable(size)
            status = HTTPStatus.PARTIAL_CONTENT
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(end - start + 1))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Cache-Control", cache)
        if status == HTTPStatus.PARTIAL_CONTENT:
            self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.end_headers()
        if self.head:
            return None
        remaining = end - start + 1
        try:
            with open(path, "rb") as handle:
                handle.seek(start)
                while remaining > 0:
                    chunk = handle.read(min(1 << 20, remaining))
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    remaining -= len(chunk)
        except (BrokenPipeError, ConnectionResetError):
            pass
        return None

    def send_unsatisfiable(self, size):
        self.send_response(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
        self.send_header("Content-Range", f"bytes */{size}")
        self.send_header("Content-Length", "0")
        self.end_headers()


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--set-password", action="store_true",
                        help="store the account's password, read from stdin")
    parser.add_argument("--username", default="appreview")
    args = parser.parse_args()
    if args.set_password:
        set_password(args.username)
        return

    Handler.catalog = Catalog()
    Handler.account = Account()
    LiveChannels(Handler.catalog.schedule).start()
    server = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    server.daemon_threads = True
    log(f"xtream demo listening on {PORT} for {PUBLIC_URL}")
    server.serve_forever()


if __name__ == "__main__":
    main()
