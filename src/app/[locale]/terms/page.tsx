import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalShell from "@/components/LegalShell";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/locales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  return {
    title: `${dict.legal.terms.title} — Viewaro`,
    description: dict.legal.terms.metaDescription,
    openGraph: {
      title: `${dict.legal.terms.title} — Viewaro`,
      description: dict.legal.terms.metaDescription,
    },
  };
}

export default async function LocaleTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  return (
    <LegalShell locale={locale as Locale} path="/terms" dict={dict} page={dict.legal.terms} />
  );
}
