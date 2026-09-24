import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const playlistURL =
  "https://viewaro.itquotes.hr/app-review/viewaro-demo.m3u8";
const guideURL = "https://viewaro.itquotes.hr/app-review/viewaro-demo.xml";
const tvheadendURL = "https://tvh.viewaro.itquotes.hr";
const xtreamURL = "https://xtream.viewaro.itquotes.hr";

export const metadata: Metadata = {
  title: "Viewaro App Review Demo",
  description: "Demo sources and review instructions for Viewaro.",
  robots: {
    index: false,
    follow: false,
  },
};

const reviewChecks = [
  ["Home", "Browse the active source. With the Xtream demo, Home also shows the films and the series."],
  ["Search", "Search for Cinema with any demo, or for Sintel with the Xtream demo."],
  ["Live TV", "Open a channel and inspect its current and upcoming guide data."],
  ["Movies and Series", "With the Xtream demo, open a film, then the series and one of its episodes."],
  ["Favorites", "Mark any demo channel as a favorite and open the Favorites section."],
  ["Player", "Play a channel, a film, or an episode."],
  ["Settings → Playback", "Choose the default player: Automatic, System Player, or Compatibility Player."],
  ["Settings → TV Guide", "Review the current guide, its channel coverage, and the guide countries."],
] as const;

function StepHeading({
  number,
  title,
  badge,
}: {
  number: number;
  title: string;
  badge?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="flex size-8 items-center justify-center rounded-full bg-indigo-400/15 text-sm font-bold text-indigo-200">
        {number}
      </span>
      <h2 className="text-xl font-semibold">{title}</h2>
      {badge ? (
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-medium text-zinc-400">
          {badge}
        </span>
      ) : null}
    </div>
  );
}

function Steps({ children }: { children: ReactNode }) {
  return (
    <ol className="mt-6 space-y-3 pl-5 text-zinc-300 [list-style:decimal] marker:font-semibold marker:text-indigo-300">
      {children}
    </ol>
  );
}

function Address({
  label,
  value,
  children,
}: {
  label: string;
  value: string;
  children?: ReactNode;
}) {
  return (
    <div className="mt-7 rounded-2xl border border-white/10 bg-black/25 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</p>
      <code className="mt-2 block select-all break-all text-sm leading-6 text-indigo-200">
        {value}
      </code>
      {children}
    </div>
  );
}

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
            Three demo sources
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Review every source type Viewaro supports.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Viewaro needs no Viewaro account and provides no television content: people add
            their own playlists, Tvheadend servers, and Xtream providers. One demo below covers
            each source type, and all of them play openly licensed or generated material.
          </p>
        </div>

        <section className="mt-12 rounded-3xl border border-indigo-300/20 bg-indigo-300/[0.06] p-6 sm:p-8">
          <h2 className="text-lg font-semibold">Before you start</h2>
          <ul className="mt-4 space-y-3 pl-5 text-sm leading-6 text-zinc-300 [list-style:disc] marker:text-indigo-300">
            <li className="pl-1">
              The free tier holds one source at a time. To try the next demo, remove the current
              one in Settings → Sources with its trash button and confirm Remove. A Sandbox
              subscription lifts the limit if you prefer to keep all three.
            </li>
            <li className="pl-1">
              The Tvheadend and Xtream demos share one account. Its user name and password are in
              the sign-in information of App Review Information in App Store Connect; they are not
              published on this page.
            </li>
            <li className="pl-1">
              Keep Settings → Playback → Default Player on Automatic (Recommended). The Tvheadend
              demo streams continuous MPEG-TS, which only the Compatibility Player opens.
            </li>
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8">
          <StepHeading number={1} title="M3U playlist" badge="No account" />
          <Steps>
            <li className="pl-2">Open Viewaro and go to Settings → Sources.</li>
            <li className="pl-2">Choose Add Playlist….</li>
            <li className="pl-2">Use “Viewaro Review Demo” as the playlist name.</li>
            <li className="pl-2">Paste the playlist address below as the Playlist URL and choose Import.</li>
            <li className="pl-2">Keep the import sheet open until playlist and guide import finish.</li>
          </Steps>

          <Address label="Playlist address" value={playlistURL}>
            <a
              href={playlistURL}
              className="mt-4 inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white"
            >
              Open demo playlist
            </a>
          </Address>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Six fictional channels in demo categories, with current XMLTV guide data. The playlist
            declares its guide automatically; the direct guide address is{" "}
            <a className="break-all text-zinc-400 underline underline-offset-4" href={guideURL}>
              {guideURL}
            </a>
            .
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <StepHeading number={2} title="Tvheadend server" badge="Demo account" />
          <Steps>
            <li className="pl-2">In Settings → Sources, choose Add Tvheadend Server….</li>
            <li className="pl-2">Use “Viewaro Review Tvheadend” as the server name.</li>
            <li className="pl-2">Paste the server address below.</li>
            <li className="pl-2">
              Under Account, enter the user name and password from App Review Information.
            </li>
            <li className="pl-2">Choose Import.</li>
          </Steps>

          <Address label="Server address" value={tvheadendURL} />

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            A real Tvheadend 4.3 server with four channels, numbered 1 to 4, in the categories
            Movies, Animation, and Test, and the server&apos;s own programme guide. The guide
            matches what is on screen.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <StepHeading number={3} title="Xtream provider" badge="Demo account" />
          <Steps>
            <li className="pl-2">In Settings → Sources, choose Add Xtream Provider….</li>
            <li className="pl-2">Use “Viewaro Review Xtream” as the provider name.</li>
            <li className="pl-2">Paste the server address below as the Server URL.</li>
            <li className="pl-2">
              Under Account, enter the same user name and password from App Review Information.
            </li>
            <li className="pl-2">Choose Import.</li>
          </Steps>

          <Address label="Server URL" value={xtreamURL} />

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            The same four live channels with their guide, plus four films under Movies and one
            series, “Blender Open Movie Collection”, with four episodes under Series. This is the
            only demo that fills Movies and Series: playlists and Tvheadend servers carry live
            channels only.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
          <StepHeading number={4} title="Check the app sections" />
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {reviewChecks.map(([title, detail]) => (
              <div key={title} className="rounded-2xl border border-white/[0.07] bg-black/20 p-4">
                <h3 className="font-semibold text-zinc-200">{title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-500">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <aside className="mt-8 space-y-3 border-l-2 border-indigo-300/40 pl-5 text-sm leading-6 text-zinc-500">
          <p>
            The Tvheadend and Xtream demos play four open movies by the Blender Foundation: Big
            Buck Bunny, Sintel, and Tears of Steel under CC BY 3.0, and Elephants Dream under CC BY
            2.5, plus a generated test card. The attribution is in every guide entry and
            description. The demo account can browse and stream only; it cannot record or change
            either server.
          </p>
          <p>
            The six playlist entries point to one public HLS developer sample hosted by Apple. None
            of the demos includes a commercial television service; they exist only to make
            Viewaro&apos;s import, browse, guide, favorites, search, and playback flows reviewable.
          </p>
        </aside>
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-8 text-center text-xs text-zinc-600">
        © 2026 ITQuotes. Viewaro App Review fixture.
      </footer>
    </div>
  );
}
