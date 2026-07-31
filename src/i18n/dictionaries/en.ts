import type { Dictionary } from "../types";

const en: Dictionary = {
  nav: {
    features: "Features",
    faq: "FAQ",
    support: "Support",
    comingSoon: "Coming soon",
  },
  footer: {
    tagline: "Your content. Your screen.",
    features: "Features",
    privacy: "Privacy Policy",
    support: "Support",
    terms: "Terms of Use",
    copyright: "© 2026 ITQuotes. All rights reserved.",
    madeBy: "An itQuotes product — itquotes.hr",
  },
  home: {
    metaTitle: "Viewaro — Live TV, done right",
    metaDescription:
      "Viewaro is a fast, elegant IPTV player for iPhone, iPad, Mac, Apple TV, Android and Android TV. M3U, Xtream and manual sources, live EPG, favorites and parental controls — coming soon.",
    eyebrow: "Viewaro Player",
    heroLine1: "Your content.",
    heroLine2: "Your screen.",
    heroSub:
      "A fast, elegant IPTV player for your phone, your Mac and your TV. Bring your own playlist — Viewaro handles the rest.",
    badge: "Coming soon to the App Store & Google Play",
    featuresEyebrow: "Features",
    featuresHeading: "Everything a live TV app should be.",
    features: [
      {
        title: "Live TV & guide",
        body: "An inline programme guide with live progress and what's on next — no separate screen to dig through.",
      },
      {
        title: "Any source",
        body: "Connect an M3U playlist, an Xtream Codes account, or add channels one by one. Mix several sources at once.",
      },
      {
        title: "Favorites & search",
        body: "Build a personal channel list and find anything instantly, across every source you've added.",
      },
      {
        title: "Cloud sync",
        body: "Sources, favorites and settings follow you from phone to TV. Sign in once, or skip it — guest mode works too.",
      },
      {
        title: "Parental controls",
        body: "Lock individual channels behind a PIN, so the remote can be handed over without worry.",
      },
      {
        title: "Built for every screen",
        body: "A phone-first player that's just as at home on Apple TV and Android TV, full remote navigation included.",
      },
    ],
    integrationsEyebrow: "On the roadmap",
    integrationsHeading: "Movies & series are coming.",
    integrationsSub:
      "A metadata-enriched catalog on top of Live TV — planned integrations, not live yet.",
    integrations: [
      {
        name: "TMDB",
        body: "Poster art, cast and descriptions for the movies & series catalog.",
      },
      {
        name: "Trakt",
        body: "Watch history and progress sync, if you already track there.",
      },
    ],
    plannedLabel: "Planned",
    howEyebrow: "How it works",
    howHeading: "Up and running in a minute.",
    steps: [
      {
        step: "01",
        title: "Install Viewaro",
        body: "On your phone, tablet, Mac or TV. One app, the same experience everywhere.",
      },
      {
        step: "02",
        title: "Add your playlist",
        body: "Paste an M3U link or sign in with your Xtream account. Your channels appear in seconds.",
      },
      {
        step: "03",
        title: "Start watching",
        body: "Live TV with a full programme guide, favorites and instant zapping. That's it.",
      },
    ],
    faqEyebrow: "FAQ",
    faqHeading: "Good questions.",
    faqs: [
      {
        q: "Does Viewaro include any channels or streams?",
        a: "No. Viewaro is a player — it contains no channels, streams or subscriptions of any kind. You connect your own playlist from your own provider, and Viewaro gives it a beautiful home.",
      },
      {
        q: "Which platforms are supported?",
        a: "Viewaro is being built for iPhone, iPad, Mac, Apple TV, Android and Android TV.",
      },
      {
        q: "What playlist formats can I use?",
        a: "M3U / M3U8 playlists and Xtream Codes accounts, plus manually added channels. EPG data is supported via XMLTV, either auto-discovered from your playlist or added manually.",
      },
      {
        q: "Do I need an account?",
        a: "No — everything works in guest mode. An optional free account adds cloud sync, so your sources, favorites and settings follow you across devices.",
      },
      {
        q: "When is it launching?",
        a: "Viewaro is currently in development and testing across all platforms. Launch details will appear here first.",
      },
    ],
    ctaHeading: "Launching soon.",
    ctaBody:
      "Viewaro is being built and tested across all five platforms. Check back soon for launch details.",
  },
  legal: {
    updatedLabel: "Last updated:",
    privacy: {
      title: "Privacy Policy",
      metaDescription: "How Viewaro handles your data.",
      updated: "July 30, 2026",
      sections: [
        {
          paragraphs: [
            "Viewaro is built on a simple principle: **your content is your business.** The app is a player for playlists you provide — we have no interest in what you watch, and the app is designed to keep it that way.",
          ],
        },
        {
          heading: "What Viewaro stores on your device",
          list: [
            "**Playlist sources** — the M3U URLs, Xtream Codes server details and manually added channels you configure. Credentials are stored in the operating system's secure storage (Keychain on Apple platforms, Keystore-backed storage on Android).",
            "**Preferences** — favorites, recently watched channels, layout and playback settings, parental control PIN.",
            "**Programme guide data** — EPG (XMLTV) data downloaded from the URL you configure, cached locally.",
          ],
        },
        {
          paragraphs: [
            "Playback happens directly between your device and the servers in your playlist. Your streams are never proxied through, recorded by, or reported to us.",
          ],
        },
        {
          heading: "Optional account & cloud sync",
          paragraphs: [
            "Viewaro works fully without an account. If you choose to create one (to sync sources, favorites and settings across devices), we store:",
          ],
        },
        {
          list: [
            "your email address (or the identifier provided by Sign in with Apple / Google);",
            "the synced data itself: your sources, favorites and settings.",
          ],
        },
        {
          paragraphs: [
            "This data is used solely to provide sync. You can delete your account and all synced data at any time from within the app.",
          ],
        },
        {
          heading: "Purchases",
          paragraphs: [
            "Subscriptions are processed by Apple (App Store) or Google (Google Play). We never see your payment details. We use RevenueCat, a subscription management service, to validate purchase entitlements; it receives an anonymous app user identifier and purchase receipts, not your identity.",
          ],
        },
        {
          heading: "Analytics",
          paragraphs: [
            "We may collect anonymous, aggregated usage statistics (such as which screens are used and whether playback errors occur) to improve the app. These statistics contain no personal information, no account identifiers, and nothing about the content of your playlists or what you watch.",
          ],
        },
        {
          heading: "What we do not do",
          list: [
            "We do not sell or share your data with third parties for marketing.",
            "We do not track what you watch.",
            "We do not show ads and do not use advertising SDKs.",
            "We do not collect your location.",
          ],
        },
        {
          heading: "Data retention & deletion",
          paragraphs: [
            "On-device data stays on your device and is removed when you delete the app. Account data is kept only while your account exists — deleting your account from within the app removes it permanently.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "Viewaro is not directed at children. The parental controls feature exists so adults can restrict access to channels on shared screens.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We will update this policy as the app evolves and note the date of the latest revision at the top of this page.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about privacy? Visit our [support page](/support) or write to us — details are listed there.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      metaDescription: "Terms of use for the Viewaro app.",
      updated: "July 30, 2026",
      sections: [
        {
          paragraphs: [
            "These terms apply to the Viewaro application on all supported platforms (iPhone, iPad, Mac, Apple TV, Android and Android TV). By using Viewaro you agree to them.",
          ],
        },
        {
          heading: "1. Viewaro is a player, not a content service",
          paragraphs: [
            "Viewaro does **not** provide, sell, host, or bundle any television channels, streams, videos or other media content. The app plays content exclusively from sources that **you** configure — your own playlists, servers and subscriptions from third-party providers.",
            "You are solely responsible for the sources you add and for ensuring that you have the legal right to access and view that content in your country. Viewaro and its developer have no affiliation with any content provider and accept no liability for third-party content, its legality, availability or quality.",
          ],
        },
        {
          heading: "2. License",
          paragraphs: [
            "We grant you a personal, non-exclusive, non-transferable license to use Viewaro on devices you own or control, as permitted by the App Store or Google Play terms through which you obtained it. On Apple platforms, Apple's standard [Licensed Application End User License Agreement](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) applies where not superseded by these terms.",
          ],
        },
        {
          heading: "3. Subscriptions",
          paragraphs: [
            "Some features may require a paid subscription. Subscriptions are billed through your App Store or Google Play account, renew automatically unless cancelled at least 24 hours before the end of the current period, and can be managed or cancelled in your store account settings. Prices are shown in the app before purchase. Refunds are handled by Apple or Google according to their policies.",
          ],
        },
        {
          heading: "4. Acceptable use",
          list: [
            "Do not use Viewaro to access content you are not legally entitled to view.",
            "Do not attempt to reverse engineer, resell or redistribute the app.",
            "Do not use the app in any way that violates applicable law.",
          ],
        },
        {
          heading: "5. Disclaimer & limitation of liability",
          paragraphs: [
            'Viewaro is provided "as is" without warranties of any kind. To the maximum extent permitted by law, the developer is not liable for any damages arising from your use of the app, including from third-party content or the unavailability of your sources.',
          ],
        },
        {
          heading: "6. Changes",
          paragraphs: [
            "We may update these terms as the app evolves. Continued use after an update constitutes acceptance. The revision date is shown at the top of this page.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            "Questions about these terms? Visit our [support page](/support).",
          ],
        },
      ],
    },
    support: {
      title: "Support",
      metaDescription: "Get help with Viewaro.",
      sections: [
        {
          paragraphs: [
            "Viewaro is currently in development. Once it launches, this page will be the fastest way to get help. Common questions are answered below — for anything else, get in touch.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Email us at [support@itquotes.hr](mailto:support@itquotes.hr) and include your device, OS version and a short description of the problem. Please never include your playlist URL or provider credentials in an email.",
          ],
        },
        {
          heading: "Common questions",
          topics: [
            {
              q: "My playlist won't load",
              a: "Double-check the URL with your provider — it must point to an M3U/M3U8 file or a valid Xtream Codes server. If the playlist loads in a browser but not in the app, your provider may be blocking app access; contact them.",
            },
            {
              q: "A channel won't play",
              a: 'Stream availability is controlled entirely by your provider. Try the same channel later, or verify it works in your provider\'s own portal. Viewaro\'s "skip broken channels" option can hide channels that repeatedly fail.',
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
          ],
        },
        {
          heading: "A note on content",
          paragraphs: [
            "Viewaro is a player only — it includes no channels or streams, and we cannot help with questions about any specific provider's content, pricing or account. For anything related to the channels themselves, contact your provider.",
          ],
        },
      ],
    },
  },
};

export default en;
