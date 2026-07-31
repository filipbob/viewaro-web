import Link from "next/link";
import {
  allLocales,
  localeNames,
  localePrefix,
  type AnyLocale,
} from "@/i18n/locales";

export default function LanguageSwitcher({
  locale,
  path,
}: {
  locale: AnyLocale;
  /** "" for home, "/privacy", "/terms", "/support" */
  path: string;
}) {
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-zinc-100 [&::-webkit-details-marker]:hidden">
        {localeNames[locale]}
        <svg
          viewBox="0 0 24 24"
          width="11"
          height="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="transition-transform duration-300 group-open:rotate-180"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full z-30 mt-2 max-h-80 w-40 overflow-y-auto rounded-2xl border border-white/10 bg-[#111119] p-1.5 shadow-2xl">
        {allLocales.map((l) => {
          const href = `${localePrefix(l)}${path}` || "/";
          const active = l === locale;
          return (
            <Link
              key={l}
              href={href}
              aria-current={active ? "true" : undefined}
              className={`block rounded-xl px-3 py-2 text-sm transition-colors ${
                active
                  ? "bg-white/[0.06] text-zinc-100"
                  : "text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100"
              }`}
            >
              {localeNames[l]}
            </Link>
          );
        })}
      </div>
    </details>
  );
}
