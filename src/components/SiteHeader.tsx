import Image from "next/image";
import Link from "next/link";
import { localePrefix, type AnyLocale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader({
  locale,
  path,
  nav,
}: {
  locale: AnyLocale;
  /** "" for home, "/privacy", "/terms", "/support" — used for the language switcher */
  path: string;
  nav: Dictionary["nav"];
}) {
  const home = localePrefix(locale) || "/";
  const supportHref = `${localePrefix(locale)}/support`;

  return (
    <header className="sticky top-4 z-20 mx-auto mt-4 flex w-[calc(100%-2rem)] max-w-3xl items-center justify-between gap-3 rounded-full border border-white/10 bg-[#0b0b14]/70 px-5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <Link href={home} className="flex items-center gap-2.5">
        <Image src="/logo.png" alt="" width={26} height={26} className="rounded-[6px]" />
        <span className="text-[15px] font-semibold tracking-tight">Viewaro</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm text-zinc-400 sm:flex">
        <Link href={`${home}#features`} className="transition-colors hover:text-zinc-100">
          {nav.features}
        </Link>
        <Link href={`${home}#faq`} className="transition-colors hover:text-zinc-100">
          {nav.faq}
        </Link>
        <Link href={supportHref} className="transition-colors hover:text-zinc-100">
          {nav.support}
        </Link>
      </nav>
      <div className="flex items-center gap-2.5">
        <LanguageSwitcher locale={locale} path={path} />
        <span className="hidden rounded-full bg-zinc-100 px-3.5 py-1.5 text-xs font-semibold text-zinc-900 sm:inline-block">
          {nav.comingSoon}
        </span>
      </div>
    </header>
  );
}
