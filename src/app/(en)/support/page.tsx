import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import en from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: `${en.legal.support.title} — Viewaro`,
  description: en.legal.support.metaDescription,
  openGraph: {
    title: `${en.legal.support.title} — Viewaro`,
    description: en.legal.support.metaDescription,
  },
};

export default function SupportPage() {
  return <LegalShell locale="en" path="/support" dict={en} page={en.legal.support} />;
}
