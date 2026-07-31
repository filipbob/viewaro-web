import type { Metadata } from "next";
import { geistMono, geistSans } from "@/i18n/fonts";
import en from "@/i18n/dictionaries/en";
import "../globals.css";

export const metadata: Metadata = {
  title: en.home.metaTitle,
  description: en.home.metaDescription,
  metadataBase: new URL("https://viewaro.itquotes.hr"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: en.home.metaTitle,
    description: en.home.metaDescription,
    url: "https://viewaro.itquotes.hr",
    siteName: "Viewaro",
    images: ["/logo.png"],
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  themeColor: "#0b0b14",
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0b14] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
