import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const expectedChannels = [
  ["viewaro.demo.news", "Review News"],
  ["viewaro.demo.world", "Global Report"],
  ["viewaro.demo.nature", "Nature Lens"],
  ["viewaro.demo.travel", "Travel Routes"],
  ["viewaro.demo.cinema", "Cinema Preview"],
  ["viewaro.demo.music", "Music Sessions"],
];
const expectedChannelIDs = expectedChannels.map(([id]) => id);
const expectedStreamURL =
  "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8";
const expectedGuideURL =
  "https://viewaro.itquotes.hr/app-review/viewaro-demo.xml";
const playlistPath = "app-review/viewaro-demo.m3u8";
const guidePath = "app-review/viewaro-demo.xml";
const dayDurationMilliseconds = 24 * 60 * 60 * 1_000;
const remoteBaseURLArgument = process.argv.find((argument) =>
  argument.startsWith("--base-url=")
);

async function loadAsset(assetPath, acceptedContentTypes) {
  if (remoteBaseURLArgument) {
    const baseURL = remoteBaseURLArgument.slice("--base-url=".length);
    const response = await fetch(new URL(assetPath, `${baseURL.replace(/\/$/, "")}/`), {
      redirect: "follow",
    });
    assert.equal(response.ok, true, `${response.url} returned HTTP ${response.status}`);

    const contentType = response.headers.get("content-type")?.split(";", 1)[0] ?? "";
    assert.ok(
      acceptedContentTypes.includes(contentType),
      `${response.url} returned unsupported Content-Type ${contentType || "<missing>"}`
    );
    return response.text();
  }

  return readFile(path.join(process.cwd(), "public", assetPath), "utf8");
}

function parseXMLTVTimestamp(value) {
  const match = value.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2}) \+0000$/);
  assert.ok(match, `Invalid XMLTV timestamp: ${value}`);
  const [, year, month, day, hour, minute, second] = match;
  return new Date(
    Date.UTC(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second)
    )
  );
}

function validatePlaylist(playlist) {
  const lines = playlist.trim().split(/\r?\n/);
  assert.equal(
    lines[0],
    `#EXTM3U x-tvg-url="${expectedGuideURL}"`,
    "Playlist must advertise the production XMLTV guide URL"
  );

  const metadataLines = lines.filter((line) => line.startsWith("#EXTINF:"));
  const streamLines = lines.filter((line) => /^https:\/\//.test(line));
  assert.equal(metadataLines.length, expectedChannelIDs.length);
  assert.equal(streamLines.length, expectedChannelIDs.length);

  const playlistChannels = metadataLines.map((line) => {
    const idMatch = line.match(/\btvg-id="([^"]+)"/);
    const nameMatch = line.match(/,([^,]+)$/);
    assert.ok(idMatch, `Missing tvg-id in ${line}`);
    assert.ok(nameMatch, `Missing channel name in ${line}`);
    assert.match(line, /\bgroup-title="[^"]+"/);
    return [idMatch[1], nameMatch[1]];
  });
  assert.deepEqual(playlistChannels, expectedChannels);
  const uniqueChannelIDs = new Set(playlistChannels.map(([id]) => id));
  assert.equal(uniqueChannelIDs.size, expectedChannels.length);

  const monograms = playlistChannels.map(([, name]) =>
    name
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("")
  );
  assert.equal(
    new Set(monograms).size,
    expectedChannels.length,
    "Demo channel cards must have distinct fallback monograms"
  );

  for (const streamURL of streamLines) {
    assert.equal(streamURL, expectedStreamURL);
    const parsedURL = new URL(streamURL);
    assert.equal(parsedURL.protocol, "https:");
    assert.equal(parsedURL.hostname, "devstreaming-cdn.apple.com");
  }
}

function validateGuide(guide) {
  assert.match(guide, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(guide, /<tv generator-info-name="Viewaro Review Demo">/);
  assert.match(guide, /<\/tv>\s*$/);

  const guideChannelIDs = [...guide.matchAll(/<channel id="([^"]+)">/g)].map(
    (match) => match[1]
  );
  assert.deepEqual(guideChannelIDs, expectedChannelIDs);

  const programmeMatches = [...guide.matchAll(
    /<programme start="([^"]+)" stop="([^"]+)" channel="([^"]+)">/g
  )];
  assert.ok(programmeMatches.length > 4_000, "Guide contains too few programme entries");

  const now = new Date();
  const latestStopByChannel = new Map();
  const hasCurrentProgramme = new Set();

  for (const [, startValue, stopValue, channelID] of programmeMatches) {
    assert.ok(expectedChannelIDs.includes(channelID), `Unknown programme channel ${channelID}`);
    const startsAt = parseXMLTVTimestamp(startValue);
    const stopsAt = parseXMLTVTimestamp(stopValue);
    assert.ok(startsAt < stopsAt, `Invalid interval for ${channelID}`);
    if (startsAt <= now && now < stopsAt) {
      hasCurrentProgramme.add(channelID);
    }
    if (!latestStopByChannel.has(channelID) || stopsAt > latestStopByChannel.get(channelID)) {
      latestStopByChannel.set(channelID, stopsAt);
    }
  }

  for (const channelID of expectedChannelIDs) {
    assert.ok(hasCurrentProgramme.has(channelID), `${channelID} has no current programme`);
    const remainingDays =
      (latestStopByChannel.get(channelID).getTime() - now.getTime()) /
      dayDurationMilliseconds;
    assert.ok(remainingDays >= 170, `${channelID} guide expires too soon`);
  }
}

const [playlist, guide] = await Promise.all([
  loadAsset(playlistPath, [
    "application/mpegurl",
    "application/vnd.apple.mpegurl",
    "audio/mpegurl",
    "text/plain",
  ]),
  loadAsset(guidePath, [
    "application/xml",
    "text/xml",
    "application/octet-stream",
  ]),
]);

validatePlaylist(playlist);
validateGuide(guide);
console.log(
  `Validated review demo from ${remoteBaseURLArgument ? "remote deployment" : "local files"}.`
);
