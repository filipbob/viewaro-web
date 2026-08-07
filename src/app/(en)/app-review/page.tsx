import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const playlistURL =
  "https://viewaro.itquotes.hr/app-review/viewaro-demo.m3u8";
const guideURL = "https://viewaro.itquotes.hr/app-review/viewaro-demo.xml";

export const metadata: Metadata = {
  title: "Viewaro App Review Demo",
  description: "Public sample playlist and review instructions for Viewaro.",
  robots: {
    index: false,
    follow: false,
  },
};

const reviewChecks = [
  ["Home", "Browse the fictional channels grouped into demo categories."],
  ["Search", "Search for News, Nature, Travel, Cinema, or Music."],
  ["Live TV", "Open a channel and inspect its current and upcoming guide data."],
  ["Favorites", "Mark any demo channel as a favorite and open the Favorites section."],
  ["Player", "Play any channel. Every entry uses the same authorized public sample stream."],
] as const;

export default function AppReviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b0b14] text-zinc-100">
      <header className="mx-auto flex w-full max-w-4xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Viewaro home">
          <Image src="/logo.png" alt="" width={34} height={34} className="rounded-[8px]" />
          <span className="text-lg font-semibold tracking-tight">Viewaro</span>
        </Link>
        <span className="rounded-full border border-indigo-300/20 bg-indigo-300/10 px-3 py-1.5 text-xs font-medium text-indigo-200">
          App Review Demo
        </span>
      </header>

      <main className="mx-auto w-full max-w-4xl flex-1 px-6 pb-24 pt-12 sm:pt-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
            No account required
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Review Viewaro with a ready-made playlist.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Viewaro has no sign-in and does not provide commercial television content. This
            public review fixture populates the app with six fictional channels, categories,
            and current XMLTV guide data.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-indigo-400/15 text-sm font-bold text-indigo-200">
              1
            </span>
            <h2 className="text-xl font-semibold">Import the demo playlist</h2>
          </div>
          <ol className="mt-6 space-y-3 pl-5 text-zinc-300 [list-style:decimal] marker:font-semibold marker:text-indigo-300">
            <li className="pl-2">Open Viewaro and go to Settings → Sources.</li>
            <li className="pl-2">Choose Add Playlist.</li>
            <li className="pl-2">Use “Viewaro Review Demo” as the playlist name.</li>
            <li className="pl-2">Paste the playlist address below and choose Add.</li>
            <li className="pl-2">Keep the import sheet open until playlist and EPG import finish.</li>
          </ol>

          <div className="mt-7 rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Playlist address
            </p>
            <code className="mt-2 block break-all text-sm leading-6 text-indigo-200">
              {playlistURL}
            </code>
            <a
              href={playlistURL}
              className="mt-4 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white"
            >
              Open demo playlist
            </a>
          </div>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            The playlist declares its XMLTV guide automatically. The direct guide address is{" "}
            <a className="break-all text-zinc-400 underline underline-offset-4" href={guideURL}>
              {guideURL}
            </a>
            .
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-full bg-indigo-400/15 text-sm font-bold text-indigo-200">
              2
            </span>
            <h2 className="text-xl font-semibold">Check the app sections</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {reviewChecks.map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                <h3 className="font-semibold text-zinc-200">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="mt-8 border-l-2 border-indigo-300/40 pl-5 text-sm leading-6 text-zinc-500">
          The demo contains no provider credentials or third-party television service. All six
          fictional entries point to one public HLS developer sample hosted by Apple and exist
          only to make Viewaro&apos;s import, browse, guide, favorites, search, and playback flows
          reviewable.
        </aside>
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-8 text-center text-xs text-zinc-600">
        © 2026 ITQuotes. Viewaro App Review fixture.
      </footer>
    </div>
  );
}
