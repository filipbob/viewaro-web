import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
import en from "@/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: `${en.legal.privacy.title} — Viewaro`,
  description: en.legal.privacy.metaDescription,
};

export default function PrivacyPage() {
  return <LegalShell locale="en" path="/privacy" dict={en} page={en.legal.privacy} />;
}
