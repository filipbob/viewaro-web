import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import en from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: `${en.legal.terms.title} — Viewaro`,
  description: en.legal.terms.metaDescription,
  openGraph: {
    title: `${en.legal.terms.title} — Viewaro`,
    description: en.legal.terms.metaDescription,
  },
};

export default function TermsPage() {
  return <LegalShell locale="en" path="/terms" dict={en} page={en.legal.terms} />;
}
