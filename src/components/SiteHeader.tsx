import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-4 z-20 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-3xl items-center justify-between rounded-full border border-white/10 bg-[#0b0b14]/70 px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <Link href="/" className="flex items-center gap-2.5">
        <Image src="/logo.png" alt="" width={26} height={26} className="rounded-[6px]" />
        <span className="text-[15px] font-semibold tracking-tight">Viewaro</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
        <Link href="/#features" className="transition-colors hover:text-zinc-100">
          Features
        </Link>
        <Link href="/#faq" className="transition-colors hover:text-zinc-100">
          FAQ
        </Link>
        <Link href="/support" className="transition-colors hover:text-zinc-100">
          Support
        </Link>
      </nav>
      <span className="rounded-full bg-zinc-100 px-3.5 py-1.5 text-xs font-semibold text-zinc-900">
        Coming soon
      </span>
    </header>
  );
}
