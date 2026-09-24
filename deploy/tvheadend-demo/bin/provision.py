#!/usr/bin/env python3
"""Configure the demo Tvheadend from runtime/schedule.json. Safe to re-run.

Runs inside the container, where requests come from 127.0.0.1:

    docker exec tvheadend-demo python3 /demo/bin/provision.py

The image starts Tvheadend with --firstrun, which leaves one wildcard admin
entry open to every address until something replaces it. This script narrows
that entry to 127.0.0.1 (so provisioning and the health check keep working
from inside the container) and adds the App Review account with streaming
rights only. The account's password is never handled here: the owner sets it
with set-review-password.sh, which feeds it to --set-review-password on stdin.
"""

import argparse
import json
import sys
import time
import urllib.parse
import urllib.request

API = "http://127.0.0.1:9981/api/"
SCHEDULE = "/demo/media/runtime/schedule.json"
NETWORK = "Viewaro Demo"
GRABBER = "Viewaro review demo schedule"
REVIEW_USER = "appreview"
REVIEW_CONNECTIONS = 2
# Viewaro fetches channel artwork without the account, and Tvheadend's
# imagecache requires one, so the icons are plain files on the public site.
ICON_URL = "https://viewaro.itquotes.hr/app-review/tvheadend/{}.png"
LOCAL_ONLY = "127.0.0.1/32,::1/128"


def call(path, **params):
    form = {key: json.dumps(value) if isinstance(value, (dict, list)) else value
            for key, value in params.items()}
    data = urllib.parse.urlencode(form).encode()
    with urllib.request.urlopen(API + path, data=data, timeout=30) as response:
        body = response.read()
    return json.loads(body) if body.strip() else {}


def grid(path):
    return call(path, limit=100000).get("entries", [])


def save(uuid, **fields):
    call("idnode/save", node={"uuid": uuid, **fields})


def wait_for(description, probe, timeout=180):
    deadline = time.time() + timeout
    while time.time() < deadline:
        try:
            result = probe()
        except OSError:
            result = None
        if result:
            return result
        time.sleep(3)
    sys.exit(f"timed out waiting for {description}")


def log(message):
    print(message, flush=True)


def configure_server():
    # digest 2 = plain and digest: VLC sends Basic in its first request and
    # URLSession answers the Digest challenge. TLS ends at nginx.
    call("config/save", node={"server_name": "Viewaro Demo", "digest": 2,
                              "digest_algo": 0, "prefer_picon": False,
                              "chiconpath": "", "piconpath": ""})
    # Off: with it on, Tvheadend would fetch the icons itself and hand out
    # imagecache/<n> links that need an account.
    call("imagecache/config/save", node={"enabled": False})
    log("server settings saved")


def ensure_tags(schedule):
    wanted = {}
    for channel in schedule["channels"]:
        wanted.setdefault(channel["tag"], len(wanted) + 1)
    existing = {tag["name"]: tag["uuid"] for tag in grid("channeltag/grid")}
    uuids = {}
    for name, index in wanted.items():
        conf = {"enabled": True, "name": name, "index": index,
                "internal": False, "private": False}
        if name in existing:
            save(existing[name], **conf)
            uuids[name] = existing[name]
        else:
            uuids[name] = call("channeltag/create", conf=conf)["uuid"]
    log(f"tags: {', '.join(wanted)}")
    return uuids


def ensure_network():
    for network in grid("mpegts/network/grid"):
        if network.get("networkname") == NETWORK:
            return network["uuid"]
    return call("mpegts/network/create", **{"class": "iptv_network"},
                conf={"networkname": NETWORK, "max_streams": 4,
                      "max_timeout": 15, "skipinitscan": False,
                      "idlescan": False})["uuid"]


def ensure_muxes(schedule, network):
    existing = {mux.get("iptv_muxname"): mux["uuid"]
                for mux in grid("mpegts/mux/grid")
                if mux.get("network_uuid") == network}
    muxes = {}
    for channel in schedule["channels"]:
        conf = {"enabled": 1, "epg": 0,
                "iptv_url": f"pipe:///demo/bin/viewaro-demo-channel {channel['id']}",
                "iptv_muxname": channel["name"], "iptv_sname": channel["name"],
                "iptv_respawn": True, "channel_number": channel["number"]}
        if channel["name"] in existing:
            save(existing[channel["name"]], **conf)
            muxes[channel["id"]] = existing[channel["name"]]
        else:
            muxes[channel["id"]] = call("mpegts/network/mux_create",
                                        uuid=network, conf=conf)["uuid"]
    log(f"muxes: {len(muxes)}")
    return muxes


def wait_for_services(muxes):
    def probe():
        found = {}
        for service in grid("mpegts/service/grid"):
            for channel_id, mux in muxes.items():
                if service.get("multiplex_uuid") == mux:
                    found[channel_id] = service["uuid"]
        return found if len(found) == len(muxes) else None
    services = wait_for("every mux to expose its service", probe)
    log(f"services: {len(services)}")
    return services


def ensure_channels(schedule, services, tags):
    existing = {channel["name"]: channel["uuid"] for channel in grid("channel/grid")}
    uuids = {}
    for channel in schedule["channels"]:
        conf = {"enabled": True, "autoname": False, "name": channel["name"],
                "number": channel["number"], "epgauto": False,
                "icon": ICON_URL.format(channel["id"]),
                "services": [services[channel["id"]]],
                "tags": [tags[channel["tag"]]]}
        if channel["name"] in existing:
            save(existing[channel["name"]], **conf)
            uuids[channel["id"]] = existing[channel["name"]]
        else:
            uuids[channel["id"]] = call("channel/create", conf=conf)["uuid"]
    log(f"channels: {len(uuids)}")
    return uuids


def rerun_grabber():
    call("epggrab/internal/rerun", rerun=1)


def ensure_guide(schedule, channels):
    module = next(m for m in call("epggrab/module/list")["entries"]
                  if GRABBER in m.get("title", ""))
    save(module["uuid"], enabled=True)
    call("epggrab/config/save", node={
        "cron": "# Every six hours\n7 */6 * * *", "int_initial": True,
        "ota_initial": False, "channel_rename": False,
        "channel_renumber": False, "channel_reicon": False})
    rerun_grabber()

    wanted = {f"{channel['id']}.viewaro-demo": channel["id"]
              for channel in schedule["channels"]}

    def probe():
        found = {entry["id"]: entry["uuid"] for entry in grid("epggrab/channel/grid")
                 if entry.get("id") in wanted}
        return found if len(found) == len(wanted) else None
    epg_channels = wait_for("the grabber's channels", probe)
    for xmltv_id, epg_uuid in epg_channels.items():
        save(channels[wanted[xmltv_id]], epggrab=[epg_uuid])
    # The first import ran before the links existed; import again into them.
    rerun_grabber()

    def events():
        counts = {}
        for channel in schedule["channels"]:
            counts[channel["name"]] = call("epg/events/grid",
                                           channel=channels[channel["id"]],
                                           limit=1).get("totalCount", 0)
        return counts if all(counts.values()) else None
    log(f"guide events: {wait_for('guide events on every channel', events)}")


def ensure_access():
    pass_profile = next(entry["key"] for entry in call("profile/list")["entries"]
                        if entry["val"] == "pass")
    entries = grid("access/entry/grid")
    wildcard = [entry for entry in entries if entry.get("username") == "*"]
    for entry in wildcard:
        save(entry["uuid"], prefix=LOCAL_ONLY,
             comment="Local admin: provisioning and health check from inside "
                     "the container only")
    review = {"enabled": True, "username": REVIEW_USER,
              "prefix": "0.0.0.0/0,::/0", "change": [], "uilevel": 0,
              "streaming": ["basic"], "profile": [pass_profile], "dvr": [],
              "webui": False, "admin": False, "conn_limit_type": 1,
              "conn_limit": REVIEW_CONNECTIONS, "channel_tag": [],
              "comment": "App Review account: streaming only. Password is set "
                         "with set-review-password.sh."}
    existing = [entry for entry in entries if entry.get("username") == REVIEW_USER]
    if existing:
        save(existing[0]["uuid"], **review)
    else:
        call("access/entry/create", conf=review)
    log(f"access: wildcard admin limited to {LOCAL_ONLY}; {REVIEW_USER} streaming only")


def set_review_password():
    password = sys.stdin.read()
    if len(password) < 12:
        sys.exit("refusing a review password shorter than 12 characters")
    conf = {"enabled": True, "username": REVIEW_USER, "password": password,
            "comment": "App Review account"}
    existing = [entry for entry in grid("passwd/entry/grid")
                if entry.get("username") == REVIEW_USER]
    if existing:
        save(existing[0]["uuid"], password=password, enabled=True)
    else:
        call("passwd/entry/create", conf=conf)
    log(f"password for {REVIEW_USER} saved")


def main():
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--set-review-password", action="store_true",
                        help="read the review account's password from stdin")
    args = parser.parse_args()
    wait_for("the Tvheadend API", lambda: call("serverinfo"))
    if args.set_review_password:
        set_review_password()
        return

    with open(SCHEDULE, encoding="utf-8") as handle:
        schedule = json.load(handle)
    configure_server()
    tags = ensure_tags(schedule)
    muxes = ensure_muxes(schedule, ensure_network())
    services = wait_for_services(muxes)
    channels = ensure_channels(schedule, services, tags)
    ensure_guide(schedule, channels)
    ensure_access()


if __name__ == "__main__":
    main()
