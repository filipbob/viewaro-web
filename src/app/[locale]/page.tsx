import { notFound } from "next/navigation";
import HomeContent from "@/components/HomeContent";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/locales";

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <HomeContent locale={locale as Locale} dict={getDictionary(locale as Locale)} />;
}
