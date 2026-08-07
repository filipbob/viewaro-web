import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseURL = "https://viewaro.itquotes.hr/app-review";
const guideURL = `${baseURL}/viewaro-demo.xml`;
const sampleStreamURL =
  "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_adv_example_hevc/master.m3u8";
const outputDirectory = path.join(process.cwd(), "public", "app-review");
const dayDurationMilliseconds = 24 * 60 * 60 * 1_000;
const slotDurationMilliseconds = dayDurationMilliseconds / 6;

const channels = [
  {
    id: "viewaro.demo.news",
    name: "Review News",
    group: "Demo News",
    programmes: ["Morning Brief", "World Update", "Review Desk", "Evening Report"],
  },
  {
    id: "viewaro.demo.world",
    name: "Global Report",
    group: "Demo News",
    programmes: ["Around the World", "Global Stories", "City Focus", "Night Report"],
  },
  {
    id: "viewaro.demo.nature",
    name: "Nature Lens",
    group: "Demo Life",
    programmes: ["Wild Horizons", "Ocean Life", "Forest Stories", "Planet at Night"],
  },
  {
    id: "viewaro.demo.travel",
    name: "Travel Routes",
    group: "Demo Life",
    programmes: ["Weekend Routes", "Coastal Journeys", "Hidden Cities", "Night Train"],
  },
  {
    id: "viewaro.demo.cinema",
    name: "Cinema Preview",
    group: "Demo Entertainment",
    programmes: ["Studio Preview", "Classic Stories", "Behind the Scene", "Late Feature"],
  },
  {
    id: "viewaro.demo.music",
    name: "Music Sessions",
    group: "Demo Entertainment",
    programmes: ["Morning Sessions", "Live Studio", "Acoustic Hour", "Night Sessions"],
  },
];

function xmlEscape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function xmltvTimestamp(date) {
  return date
    .toISOString()
    .replace(/[-:T]/g, "")
    .replace(/\.\d{3}Z$/, " +0000");
}

function utcDayStart(date) {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
}

function generatePlaylist() {
  const lines = [`#EXTM3U x-tvg-url="${guideURL}"`];

  for (const channel of channels) {
    lines.push(
      `#EXTINF:-1 tvg-id="${channel.id}" tvg-name="${channel.name}" group-title="${channel.group}",${channel.name}`,
      sampleStreamURL
    );
  }

  return `${lines.join("\n")}\n`;
}

function generateGuide(now = new Date()) {
  const scheduleStart = utcDayStart(
    new Date(now.getTime() - dayDurationMilliseconds)
  );
  const scheduleEnd = new Date(
    scheduleStart.getTime() + 182 * dayDurationMilliseconds
  );
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<tv generator-info-name="Viewaro Review Demo">',
  ];

  for (const channel of channels) {
    lines.push(
      `  <channel id="${xmlEscape(channel.id)}">`,
      `    <display-name lang="en">${xmlEscape(channel.name)}</display-name>`,
      "  </channel>"
    );
  }

  for (const [channelIndex, channel] of channels.entries()) {
    let slotIndex = 0;
    for (
      let startsAt = scheduleStart;
      startsAt < scheduleEnd;
      startsAt = new Date(startsAt.getTime() + slotDurationMilliseconds)
    ) {
      const endsAt = new Date(startsAt.getTime() + slotDurationMilliseconds);
      const programmeIndex =
        (slotIndex + channelIndex) % channel.programmes.length;
      const title = channel.programmes[programmeIndex];
      lines.push(
        `  <programme start="${xmltvTimestamp(startsAt)}" stop="${xmltvTimestamp(endsAt)}" channel="${xmlEscape(channel.id)}">`,
        `    <title lang="en">${xmlEscape(title)}</title>`,
        `    <sub-title lang="en">${xmlEscape(channel.name)}</sub-title>`,
        "    <desc lang=\"en\">Fictional programme data for Viewaro App Review testing.</desc>",
        "  </programme>"
      );
      slotIndex += 1;
    }
  }

  lines.push("</tv>");
  return `${lines.join("\n")}\n`;
}

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(path.join(outputDirectory, "viewaro-demo.m3u8"), generatePlaylist(), "utf8"),
  writeFile(path.join(outputDirectory, "viewaro-demo.xml"), generateGuide(), "utf8"),
]);

console.log(`Generated ${channels.length} review-demo channels and 182 days of XMLTV data.`);
