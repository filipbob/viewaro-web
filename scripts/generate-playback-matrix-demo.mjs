import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.join(process.cwd(), "public", "app-review");
const playlistPath = path.join(
  outputDirectory,
  "viewaro-playback-matrix.m3u8"
);
const baseURL = "https://viewaro.itquotes.hr/app-review/playback-matrix";

const channels = [
  {
    id: "viewaro.test.matrix-hls",
    name: "Matrix HLS",
    streamURL: `${baseURL}/hls/master.m3u8`,
  },
  {
    id: "viewaro.test.matrix-ts",
    name: "Matrix MPEG-TS",
    streamURL: `${baseURL}/sample.ts`,
  },
  {
    id: "viewaro.test.matrix-mp4",
    name: "Matrix MP4",
    streamURL: `${baseURL}/sample.mp4`,
  },
  {
    id: "viewaro.test.matrix-mkv",
    name: "Matrix MKV",
    streamURL: `${baseURL}/sample.mkv`,
  },
];

const lines = ["#EXTM3U"];

for (const channel of channels) {
  lines.push(
    `#EXTINF:-1 tvg-id="${channel.id}" tvg-name="${channel.name}" group-title="VLC Playback Matrix",${channel.name}`,
    channel.streamURL
  );
}

await mkdir(outputDirectory, { recursive: true });
await writeFile(playlistPath, `${lines.join("\n")}\n`, "utf8");

console.log(`Generated ${channels.length} playback-matrix test channels.`);
