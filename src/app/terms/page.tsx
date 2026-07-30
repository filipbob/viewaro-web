import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Use — Viewaro",
  description: "Terms of use for the Viewaro app.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" updated="July 30, 2026">
      <p>
        These terms apply to the Viewaro application on all supported platforms
        (iPhone, iPad, Mac, Apple TV, Android and Android TV). By using
        Viewaro you agree to them.
      </p>

      <h2>1. Viewaro is a player, not a content service</h2>
      <p>
        Viewaro does <strong>not</strong> provide, sell, host, or bundle any
        television channels, streams, videos or other media content. The app
        plays content exclusively from sources that <strong>you</strong>{" "}
        configure — your own playlists, servers and subscriptions from
        third-party providers.
      </p>
      <p>
        You are solely responsible for the sources you add and for ensuring
        that you have the legal right to access and view that content in your
        country. Viewaro and its developer have no affiliation with any content
        provider and accept no liability for third-party content, its legality,
        availability or quality.
      </p>

      <h2>2. License</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable license to use
        Viewaro on devices you own or control, as permitted by the App Store or
        Google Play terms through which you obtained it. On Apple platforms,
        Apple&apos;s standard{" "}
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Licensed Application End User License Agreement
        </a>{" "}
        applies where not superseded by these terms.
      </p>

      <h2>3. Subscriptions</h2>
      <p>
        Some features may require a paid subscription. Subscriptions are billed
        through your App Store or Google Play account, renew automatically
        unless cancelled at least 24 hours before the end of the current
        period, and can be managed or cancelled in your store account settings.
        Prices are shown in the app before purchase. Refunds are handled by
        Apple or Google according to their policies.
      </p>

      <h2>4. Acceptable use</h2>
      <ul>
        <li>Do not use Viewaro to access content you are not legally entitled
        to view.</li>
        <li>Do not attempt to reverse engineer, resell or redistribute the
        app.</li>
        <li>Do not use the app in any way that violates applicable law.</li>
      </ul>

      <h2>5. Disclaimer &amp; limitation of liability</h2>
      <p>
        Viewaro is provided &quot;as is&quot; without warranties of any kind.
        To the maximum extent permitted by law, the developer is not liable for
        any damages arising from your use of the app, including from
        third-party content or the unavailability of your sources.
      </p>

      <h2>6. Changes</h2>
      <p>
        We may update these terms as the app evolves. Continued use after an
        update constitutes acceptance. The revision date is shown at the top of
        this page.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about these terms? Visit our{" "}
        <a href="/support">support page</a>.
      </p>
    </LegalShell>
  );
}
