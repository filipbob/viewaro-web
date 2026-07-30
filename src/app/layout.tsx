import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viewaro — Live TV, done right",
  description:
    "Viewaro is a fast, elegant IPTV player for iPhone, iPad, Mac, Apple TV, Android and Android TV. M3U, Xtream and manual sources, live EPG, favorites and parental controls — coming soon.",
  metadataBase: new URL("https://viewaro.itquotes.hr"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Viewaro — Live TV, done right",
    description:
      "A fast, elegant IPTV player for iPhone, iPad, Mac, Apple TV, Android and Android TV.",
    url: "https://viewaro.itquotes.hr",
    siteName: "Viewaro",
    images: ["/logo.png"],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b0b14",
};

export default function RootLayout({
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
