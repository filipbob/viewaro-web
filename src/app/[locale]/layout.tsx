import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { geistMono, geistSans } from "@/i18n/fonts";
import { getDictionary } from "@/i18n/dictionaries";
import { locales, type Locale } from "@/i18n/locales";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const ogLocaleMap: Record<Locale, string> = {
  de: "de_DE",
  nl: "nl_NL",
  es: "es_ES",
  it: "it_IT",
  hr: "hr_HR",
  pt: "pt_PT",
  zh: "zh_CN",
  ja: "ja_JP",
  fr: "fr_FR",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return {
    title: dict.home.metaTitle,
    description: dict.home.metaDescription,
    metadataBase: new URL("https://viewaro.itquotes.hr"),
    icons: {
      icon: "/logo.png",
      apple: "/logo.png",
    },
    openGraph: {
      title: dict.home.metaTitle,
      description: dict.home.metaDescription,
      url: `https://viewaro.itquotes.hr/${locale}`,
      siteName: "Viewaro",
      images: ["/logo.png"],
      type: "website",
      locale: ogLocaleMap[locale as Locale],
    },
  };
}

export const viewport = {
  themeColor: "#0b0b14",
};

export default async function LocaleRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0b14] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
