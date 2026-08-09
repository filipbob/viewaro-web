import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const fixturePath = "app-review/viewaro-playback-matrix.m3u8";
const mediaRoot = "app-review/playback-matrix";
const baseURL = "https://viewaro.itquotes.hr/app-review/playback-matrix";
const channels = [
  ["viewaro.test.matrix-hls", "Matrix HLS", `${baseURL}/hls/master.m3u8`],
  ["viewaro.test.matrix-ts", "Matrix MPEG-TS", `${baseURL}/sample.ts`],
  ["viewaro.test.matrix-mp4", "Matrix MP4", `${baseURL}/sample.mp4`],
  ["viewaro.test.matrix-mkv", "Matrix MKV", `${baseURL}/sample.mkv`],
];
const localMediaPaths = [
  `${mediaRoot}/sample.ts`,
  `${mediaRoot}/sample.mp4`,
  `${mediaRoot}/sample.mkv`,
];
const remoteBaseURLArgument = process.argv.find((argument) =>
  argument.startsWith("--base-url=")
);

function remoteURL(assetPath) {
  const remoteBaseURL = remoteBaseURLArgument.slice("--base-url=".length);
  return new URL(assetPath, `${remoteBaseURL.replace(/\/$/, "")}/`);
}

async function loadText(assetPath) {
  if (!remoteBaseURLArgument) {
    return readFile(path.join(process.cwd(), "public", assetPath), "utf8");
  }

  const response = await fetch(remoteURL(assetPath), { redirect: "follow" });
  assert.equal(response.ok, true, `${response.url} returned HTTP ${response.status}`);
  return response.text();
}

function validatePlaylist(playlist) {
  const lines = playlist.trim().split(/\r?\n/);
  assert.equal(lines[0], "#EXTM3U");
  assert.equal(lines.length, 1 + channels.length * 2);

  for (const [index, [id, name, streamURL]] of channels.entries()) {
    const metadata = lines[index * 2 + 1];
    assert.match(metadata, new RegExp(`\\btvg-id="${id}"`));
    assert.match(metadata, new RegExp(`\\btvg-name="${name}"`));
    assert.match(metadata, /\bgroup-title="VLC Playback Matrix"/);
    assert.ok(metadata.endsWith(`,${name}`));
    assert.equal(lines[index * 2 + 2], streamURL);
    assert.equal(new URL(streamURL).protocol, "https:");
  }
}

async function validateLocalMedia() {
  if (remoteBaseURLArgument) {
    return;
  }

  for (const mediaPath of localMediaPaths) {
    const metadata = await stat(path.join(process.cwd(), "public", mediaPath));
    assert.ok(metadata.size > 20_000, `${mediaPath} is unexpectedly small`);
  }

  const hlsManifest = await loadText(`${mediaRoot}/hls/master.m3u8`);
  assert.match(hlsManifest, /^#EXTM3U/m);
  assert.match(hlsManifest, /#EXT-X-ENDLIST/);
  const segments = hlsManifest
    .split(/\r?\n/)
    .filter((line) => line.endsWith(".ts"));
  assert.ok(segments.length >= 4, "HLS fixture must contain at least four segments");
  for (const segment of segments) {
    const metadata = await stat(
      path.join(process.cwd(), "public", mediaRoot, "hls", segment)
    );
    assert.ok(metadata.size > 10_000, `${segment} is unexpectedly small`);
  }
}

async function validateRemoteMedia() {
  if (!remoteBaseURLArgument) {
    return;
  }

  const streamURLs = channels.map(([, , streamURL]) => streamURL);
  for (const streamURL of streamURLs) {
    const deployedURL = remoteURL(new URL(streamURL).pathname.slice(1));
    const response = await fetch(deployedURL, {
      redirect: "follow",
      headers: { Range: "bytes=0-1023" },
    });
    assert.ok(
      response.status === 200 || response.status === 206,
      `${response.url} returned HTTP ${response.status}`
    );
    const payload = new Uint8Array(await response.arrayBuffer());
    assert.ok(payload.byteLength > 0, `${response.url} returned an empty payload`);
  }
}

validatePlaylist(await loadText(fixturePath));
await validateLocalMedia();
await validateRemoteMedia();

console.log(
  `Validated playback matrix from ${remoteBaseURLArgument ? "remote deployment" : "local files"}.`
);
