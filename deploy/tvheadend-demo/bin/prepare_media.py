#!/usr/bin/env python3
"""Build the demo channels' media and runtime schedule.

Runs in a one-off container from the pinned Tvheadend image, so the ffmpeg
that encodes here is the same ffmpeg that streams later:

    docker compose run --rm prepare

For every film in channels.json it downloads the official file once, refuses
it unless the SHA-256 matches, unpacks it when it is a zip, and re-encodes it
to one uniform H.264/AAC 1280x720 24 fps profile. The uniform profile is what
lets the channel script concatenate films with stream copy, so streaming costs
almost no CPU. Finally it measures every output and writes
runtime/schedule.json plus one ffconcat list per channel; the pipe script and
the XMLTV grabber both read that file, which is what keeps the guide in step
with the picture.
"""

import argparse
import hashlib
import json
import os
import subprocess
import sys
import urllib.request
import zipfile
import math
from datetime import datetime

APP = "/demo/app"
MEDIA = "/demo/media"
SOURCES = os.path.join(MEDIA, "src")
WORK = os.path.join(MEDIA, "work")
OUT = os.path.join(MEDIA, "out")
RUNTIME = os.path.join(MEDIA, "runtime")

VIDEO_FILTER = (
    "scale=1280:720:force_original_aspect_ratio=decrease,"
    "pad=1280:720:(ow-iw)/2:(oh-ih)/2:color=black,"
    "fps=24,format=yuv420p,setsar=1"
)
ENCODE = [
    "-c:v", "libx264", "-preset", "veryfast", "-profile:v", "high",
    "-level:v", "4.0", "-crf", "23", "-maxrate", "2500k", "-bufsize", "5000k",
    "-g", "48", "-keyint_min", "48", "-sc_threshold", "0",
    "-c:a", "aac", "-b:a", "128k", "-ar", "48000", "-ac", "2",
    "-movflags", "+faststart", "-threads", "2",
    # No timecode track or source metadata: the extra data stream would
    # travel into the concatenated channel and confuse its demuxer.
    "-map_metadata", "-1", "-map_chapters", "-1", "-write_tmcd", "0",
]
# The channel script cannot use -stream_loop: combined with its starting
# offset it breaks timestamps at the wrap. Each channel's list repeats the
# cycle for at least this long instead; when ffmpeg reaches the end,
# Tvheadend respawns the pipe, which picks up the wall clock again.
LIST_SPAN_MS = 30 * 3_600_000


def log(message):
    print(message, flush=True)


def sha256(path):
    digest = hashlib.sha256()
    with open(path, "rb") as handle:
        for block in iter(lambda: handle.read(1 << 20), b""):
            digest.update(block)
    return digest.hexdigest()


def fetch(source):
    path = os.path.join(SOURCES, source["file"])
    if not os.path.exists(path):
        log(f"download {source['url']}")
        partial = path + ".part"
        urllib.request.urlretrieve(source["url"], partial)
        os.replace(partial, path)
    actual = sha256(path)
    if actual != source["sha256"]:
        sys.exit(f"checksum mismatch for {source['file']}: {actual}")
    if "member" not in source:
        return path
    unpacked = os.path.join(WORK, source["member"])
    if not os.path.exists(unpacked):
        log(f"unpack {source['member']}")
        with zipfile.ZipFile(path) as archive:
            archive.extract(source["member"], WORK)
    return unpacked


def ffmpeg(arguments):
    command = ["nice", "-n", "19", "ffmpeg", "-hide_banner", "-nostdin",
               "-loglevel", "error", "-y", *arguments]
    subprocess.run(command, check=True)


def encode_film(media_id, source, output):
    log(f"encode {media_id}")
    ffmpeg(["-i", fetch(source), "-map", "0:v:0", "-map", "0:a:0",
            "-vf", VIDEO_FILTER, *ENCODE, output])


def generate_test_card(seconds, output):
    log("generate testcard")
    ffmpeg(["-f", "lavfi", "-i", "testsrc2=size=1280x720:rate=24",
            "-f", "lavfi", "-i", "sine=frequency=1000:sample_rate=48000",
            "-t", str(seconds), "-map", "0:v", "-map", "1:a",
            "-vf", "format=yuv420p,setsar=1", *ENCODE, output])


def duration_ms(path):
    probe = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=noprint_wrappers=1:nokey=1", path],
        check=True, capture_output=True, text=True)
    return round(float(probe.stdout.strip()) * 1000)


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--force", action="store_true",
                        help="re-encode outputs that already exist")
    args = parser.parse_args()

    with open(os.path.join(APP, "channels.json"), encoding="utf-8") as handle:
        config = json.load(handle)
    for directory in (SOURCES, WORK, OUT, RUNTIME):
        os.makedirs(directory, exist_ok=True)

    durations = {}
    for media_id, media in config["media"].items():
        output = os.path.join(OUT, f"{media_id}.mp4")
        if args.force or not os.path.exists(output):
            partial = output + ".part.mp4"
            if "generate" in media:
                generate_test_card(media["generate"]["seconds"], partial)
            else:
                encode_film(media_id, media["source"], partial)
            os.replace(partial, output)
        durations[media_id] = duration_ms(output)
        log(f"{media_id}: {durations[media_id]} ms")

    anchor = datetime.fromisoformat(config["anchor"].replace("Z", "+00:00"))
    channels = []
    for channel in config["channels"]:
        items = []
        for media_id in channel["programmes"]:
            media = config["media"][media_id]
            items.append({
                "media": media_id,
                "title": media["title"],
                "year": media.get("year"),
                "category": media["category"],
                "description": f"{media['description']} {media['attribution']}",
                "durationMs": durations[media_id],
            })
        cycle_ms = sum(item["durationMs"] for item in items)
        # One extra cycle covers the starting offset into the first one.
        repeats = math.ceil(LIST_SPAN_MS / cycle_ms) + 1
        lines = ["ffconcat version 1.0"]
        for _ in range(repeats):
            for item in items:
                lines.append(f"file '{os.path.join(OUT, item['media'] + '.mp4')}'")
                lines.append(f"duration {item['durationMs'] / 1000:.3f}")
        with open(os.path.join(RUNTIME, f"{channel['id']}.ffconcat"), "w",
                  encoding="utf-8") as handle:
            handle.write("\n".join(lines) + "\n")
        entry = {key: channel[key]
                 for key in ("id", "number", "name", "tag", "serviceId")}
        entry["cycleMs"] = cycle_ms
        entry["items"] = items
        if "guideBlockMinutes" in channel:
            entry["guideBlockMs"] = channel["guideBlockMinutes"] * 60_000
        channels.append(entry)

    schedule = {"anchorMs": int(anchor.timestamp() * 1000),
                "channels": channels}
    partial = os.path.join(RUNTIME, "schedule.json.part")
    with open(partial, "w", encoding="utf-8") as handle:
        json.dump(schedule, handle, indent=2)
    os.replace(partial, os.path.join(RUNTIME, "schedule.json"))
    log("schedule written")


if __name__ == "__main__":
    main()
