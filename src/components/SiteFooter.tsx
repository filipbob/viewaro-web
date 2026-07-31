import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={28} height={28} className="rounded-[7px]" />
            <div>
              <p className="text-sm font-semibold">Viewaro</p>
              <p className="text-xs text-zinc-500">Your content. Your screen.</p>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-zinc-400">
            <Link href="/#features" className="transition-colors hover:text-zinc-100">
              Features
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-zinc-100">
              Privacy Policy
            </Link>
            <Link href="/support" className="transition-colors hover:text-zinc-100">
              Support
            </Link>
            <Link href="/terms" className="transition-colors hover:text-zinc-100">
              Terms of Use
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start gap-2 border-t border-white/[0.06] pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 ITQuotes. All rights reserved.</span>
          <a
            href="https://itquotes.hr"
            className="transition-colors hover:text-zinc-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            An itQuotes product — itquotes.hr
          </a>
        </div>
      </div>
    </footer>
  );
}
