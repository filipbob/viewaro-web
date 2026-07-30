import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Viewaro",
  description: "How Viewaro handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="July 30, 2026">
      <p>
        Viewaro is built on a simple principle: <strong>your content is your
        business.</strong> The app is a player for playlists you provide — we
        have no interest in what you watch, and the app is designed to keep it
        that way.
      </p>

      <h2>What Viewaro stores on your device</h2>
      <ul>
        <li>
          <strong>Playlist sources</strong>&nbsp;&mdash; the M3U URLs, Xtream Codes server
          details and manually added channels you configure. Credentials are
          stored in the operating system&apos;s secure storage (Keychain on
          Apple platforms, Keystore-backed storage on Android).
        </li>
        <li>
          <strong>Preferences</strong> — favorites, recently watched channels,
          layout and playback settings, parental control PIN.
        </li>
        <li>
          <strong>Programme guide data</strong> — EPG (XMLTV) data downloaded
          from the URL you configure, cached locally.
        </li>
      </ul>
      <p>
        Playback happens directly between your device and the servers in your
        playlist. Your streams are never proxied through, recorded by, or
        reported to us.
      </p>

      <h2>Optional account &amp; cloud sync</h2>
      <p>
        Viewaro works fully without an account. If you choose to create one (to
        sync sources, favorites and settings across devices), we store:
      </p>
      <ul>
        <li>your email address (or the identifier provided by Sign in with
        Apple / Google);</li>
        <li>the synced data itself: your sources, favorites and settings.</li>
      </ul>
      <p>
        This data is used solely to provide sync. You can delete your account
        and all synced data at any time from within the app.
      </p>

      <h2>Purchases</h2>
      <p>
        Subscriptions are processed by Apple (App Store) or Google (Google
        Play). We never see your payment details. We use RevenueCat, a
        subscription management service, to validate purchase entitlements; it
        receives an anonymous app user identifier and purchase receipts, not
        your identity.
      </p>

      <h2>Analytics</h2>
      <p>
        We may collect anonymous, aggregated usage statistics (such as which
        screens are used and whether playback errors occur) to improve the app.
        These statistics contain no personal information, no account
        identifiers, and nothing about the content of your playlists or what
        you watch.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell or share your data with third parties for
        marketing.</li>
        <li>We do not track what you watch.</li>
        <li>We do not show ads and do not use advertising SDKs.</li>
        <li>We do not collect your location.</li>
      </ul>

      <h2>Data retention &amp; deletion</h2>
      <p>
        On-device data stays on your device and is removed when you delete the
        app. Account data is kept only while your account exists — deleting
        your account from within the app removes it permanently.
      </p>

      <h2>Children</h2>
      <p>
        Viewaro is not directed at children. The parental controls feature
        exists so adults can restrict access to channels on shared screens.
      </p>

      <h2>Changes</h2>
      <p>
        We will update this policy as the app evolves and note the date of the
        latest revision at the top of this page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Visit our <a href="/support">support page</a>{" "}
        or write to us — details are listed there.
      </p>
    </LegalShell>
  );
}
