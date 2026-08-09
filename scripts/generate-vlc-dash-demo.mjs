import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.join(process.cwd(), "public", "app-review");
const playlistPath = path.join(outputDirectory, "viewaro-vlc-dash.m3u8");

const channels = [
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

const lines = ["#EXTM3U"];

for (const channel of channels) {
  lines.push(
    `#EXTINF:-1 tvg-id="${channel.id}" tvg-name="${channel.name}" group-title="VLC DASH Test",${channel.name}`,
    channel.streamURL
  );
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(playlistPath, `${lines.join("\n")}\n`, "utf8");

console.log(`Generated ${channels.length} VLC/DASH test channels.`);
