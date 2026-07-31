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
    title: `${dict.legal.support.title} — Viewaro`,
    description: dict.legal.support.metaDescription,
  };
}

export default async function LocaleSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);
  return (
    <LegalShell locale={locale as Locale} path="/support" dict={dict} page={dict.legal.support} />
  );
}
