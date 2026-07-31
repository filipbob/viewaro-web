import Image from "next/image";
import Link from "next/link";
import { localePrefix, type AnyLocale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";

export default function SiteFooter({
  locale,
  footer,
}: {
  locale: AnyLocale;
  footer: Dictionary["footer"];
}) {
  const prefix = localePrefix(locale);
  const home = prefix || "/";

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={28} height={28} className="rounded-[7px]" />
            <div>
              <p className="text-sm font-semibold">Viewaro</p>
              <p className="text-xs text-zinc-500">{footer.tagline}</p>
            </div>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm text-zinc-400">
            <Link href={`${home}#features`} className="transition-colors hover:text-zinc-100">
              {footer.features}
            </Link>
            <Link href={`${prefix}/privacy`} className="transition-colors hover:text-zinc-100">
              {footer.privacy}
            </Link>
            <Link href={`${prefix}/support`} className="transition-colors hover:text-zinc-100">
              {footer.support}
            </Link>
            <Link href={`${prefix}/terms`} className="transition-colors hover:text-zinc-100">
              {footer.terms}
            </Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start gap-2 border-t border-white/[0.06] pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.copyright}</span>
          <a
            href="https://itquotes.hr"
            className="transition-colors hover:text-zinc-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            {footer.madeBy}
          </a>
        </div>
      </div>
    </footer>
  );
}
