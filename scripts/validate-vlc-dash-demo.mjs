import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const fixturePath = "app-review/viewaro-vlc-dash.m3u8";
const expectedChannels = [
  {
    id: "viewaro.test.dash-live",
    name: "DASH Live",
    streamURL: "https://storage.googleapis.com/shaka-live-assets/player-source.mpd",
  },
  {
    id: "viewaro.test.angel-one",
    name: "Angel One",
    streamURL: "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd",
  },
  {
    id: "viewaro.test.big-buck-bunny",
    name: "Big Buck Bunny",
    streamURL: "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd",
  },
];
const remoteBaseURLArgument = process.argv.find((argument) =>
  argument.startsWith("--base-url=")
);

async function loadPlaylist() {
  if (!remoteBaseURLArgument) {
    return readFile(path.join(process.cwd(), "public", fixturePath), "utf8");
  }

  const baseURL = remoteBaseURLArgument.slice("--base-url=".length);
  const response = await fetch(
    new URL(fixturePath, `${baseURL.replace(/\/$/, "")}/`),
    { redirect: "follow" }
  );
  assert.equal(response.ok, true, `${response.url} returned HTTP ${response.status}`);

  const contentType = response.headers.get("content-type")?.split(";", 1)[0] ?? "";
  assert.ok(
    [
      "application/mpegurl",
      "application/vnd.apple.mpegurl",
      "audio/mpegurl",
      "text/plain",
    ].includes(contentType),
    `${response.url} returned unsupported Content-Type ${contentType || "<missing>"}`
  );
  return response.text();
}

function validatePlaylist(playlist) {
  const lines = playlist.trim().split(/\r?\n/);
  assert.equal(lines[0], "#EXTM3U");
  assert.equal(lines.length, 1 + expectedChannels.length * 2);

  for (const [index, channel] of expectedChannels.entries()) {
    const metadata = lines[index * 2 + 1];
    const streamURL = lines[index * 2 + 2];
    assert.match(metadata, new RegExp(`\\btvg-id="${channel.id}"`));
    assert.match(metadata, new RegExp(`\\btvg-name="${channel.name}"`));
    assert.match(metadata, /\bgroup-title="VLC DASH Test"/);
    assert.ok(metadata.endsWith(`,${channel.name}`));
    assert.equal(streamURL, channel.streamURL);

    const parsedURL = new URL(streamURL);
    assert.equal(parsedURL.protocol, "https:");
    assert.ok(parsedURL.pathname.endsWith(".mpd"));
  }
}

async function validateRemoteManifests() {
  if (!remoteBaseURLArgument) {
    return;
  }

  for (const channel of expectedChannels) {
    const response = await fetch(channel.streamURL, { redirect: "follow" });
    assert.equal(
      response.ok,
      true,
      `${channel.name} manifest returned HTTP ${response.status}`
    );
    const manifest = await response.text();
    assert.match(manifest, /<MPD(?:\s|>)/, `${channel.name} did not return DASH XML`);
  }
}

validatePlaylist(await loadPlaylist());
await validateRemoteManifests();

console.log(
  `Validated VLC/DASH demo from ${remoteBaseURLArgument ? "remote deployment" : "local files"}.`
);
