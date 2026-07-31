// English is the default locale: it lives at the unprefixed routes (/,
// /privacy, /terms, /support) because the native apps hardcode those exact
// paths in their Settings/About screens — that contract must not change.
// Every other locale is prefixed (/de, /de/privacy, ...).
export const defaultLocale = "en" as const;

export const locales = [
  "de",
  "nl",
  "es",
  "it",
  "hr",
  "pt",
  "zh",
  "ja",
  "fr",
] as const;

export type Locale = (typeof locales)[number];
export type AnyLocale = Locale | typeof defaultLocale;

export const localeNames: Record<AnyLocale, string> = {
  en: "English",
  de: "Deutsch",
  nl: "Nederlands",
  es: "Español",
  it: "Italiano",
  hr: "Hrvatski",
  pt: "Português",
  zh: "中文",
  ja: "日本語",
  fr: "Français",
};

export const allLocales: AnyLocale[] = [defaultLocale, ...locales];

/** Path prefix for a locale: "" for the default (English), "/de" etc. otherwise. */
export function localePrefix(locale: AnyLocale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}
