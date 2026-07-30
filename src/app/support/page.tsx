import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Support — Viewaro",
  description: "Get help with Viewaro.",
};

const topics = [
  {
    q: "My playlist won't load",
    a: "Double-check the URL with your provider — it must point to an M3U/M3U8 file or a valid Xtream Codes server. If the playlist loads in a browser but not in the app, your provider may be blocking app access; contact them.",
  },
  {
    q: "A channel won't play",
    a: "Stream availability is controlled entirely by your provider. Try the same channel later, or verify it works in your provider's own portal. Viewaro's \"skip broken channels\" option can hide channels that repeatedly fail.",
  },
  {
    q: "The programme guide is empty",
    a: "EPG data comes from an XMLTV source. If your playlist doesn't advertise one, add the EPG URL manually in source settings, then refresh the guide.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are managed by Apple or Google, not by us. On Apple devices: Settings → your name → Subscriptions. On Android: Play Store → Payments & subscriptions.",
  },
  {
    q: "How do I delete my account?",
    a: "In the app, open the account section and choose Delete account. This permanently removes your account and all synced data.",
  },
];

export default function SupportPage() {
  return (
    <LegalShell title="Support">
      <p>
        Viewaro is currently in development. Once it launches, this page will
        be the fastest way to get help. Common questions are answered below —
        for anything else, get in touch.
      </p>

      <h2>Contact</h2>
      <p>
        Email us at <a href="mailto:support@itquotes.hr">support@itquotes.hr</a>{" "}
        and include your device, OS version and a short description of the
        problem. Please never include your playlist URL or provider credentials
        in an email.
      </p>

      <h2>Common questions</h2>
      {topics.map(({ q, a }) => (
        <div key={q}>
          <h3>{q}</h3>
          <p>{a}</p>
        </div>
      ))}

      <h2>A note on content</h2>
      <p>
        Viewaro is a player only — it includes no channels or streams, and we
        cannot help with questions about any specific provider&apos;s content,
        pricing or account. For anything related to the channels themselves,
        contact your provider.
      </p>
    </LegalShell>
  );
}
