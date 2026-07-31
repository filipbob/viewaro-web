import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import en from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: `${en.legal.privacy.title} — Viewaro`,
  description: en.legal.privacy.metaDescription,
  // Explicit openGraph so this doesn't inherit the homepage's og:description
  // from the root layout (Next.js metadata only merges title/description
  // by default, not openGraph fields).
  openGraph: {
    title: `${en.legal.privacy.title} — Viewaro`,
    description: en.legal.privacy.metaDescription,
  },
};

export default function PrivacyPage() {
  return <LegalShell locale="en" path="/privacy" dict={en} page={en.legal.privacy} />;
}
