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
      updated: "July 31, 2026",
      sections: [
        {
          paragraphs: [
            "Viewaro is provided by **ITQuotes** (\"Viewaro\", \"we\", \"us\", or \"our\"). This Privacy Policy explains how the Viewaro macOS application and the Viewaro support website handle information.",
          ],
        },
        {
          list: [
            "Email: [support@itquotes.hr](mailto:support@itquotes.hr)",
            "Postal address: Zagreb, Croatia",
          ],
        },
        {
          heading: "Summary",
          paragraphs: [
            "Viewaro is a bring-your-own-content IPTV player. It does not provide channels, playlists, or media subscriptions. Playlist data and playback preferences are stored locally on your Mac. We do not use advertising trackers and we do not sell personal data.",
            "If subscriptions are enabled in the version you use, Apple processes the payment and RevenueCat processes limited purchase and technical information to validate the purchase and determine whether Premium features are available.",
          ],
        },
        {
          heading: "Information stored on your Mac",
          paragraphs: ["Viewaro may store the following locally:"],
        },
        {
          list: [
            "playlist names and addresses you enter",
            "playlist credentials or tokens contained in those addresses",
            "imported channel catalog information",
            "app settings and playback-related preferences",
            "an anonymous subscription identifier and cached entitlement state when subscriptions are enabled",
          ],
        },
        {
          paragraphs: [
            "Sensitive playlist addresses are stored in an encrypted local vault. The vault key is protected by the macOS Keychain. This information is not sent to Viewaro or ITQuotes servers.",
            "You can remove imported sources from within the app. macOS may retain Keychain items after an application is removed, so uninstalling the app is not a guaranteed method of erasing every Keychain item.",
          ],
        },
        {
          heading: "Network connections to your provider",
          paragraphs: [
            "When you import a playlist or play a stream, your Mac connects directly to the address you supplied. That provider can receive information normally included in a network connection, such as your IP address, request time, requested path, and any credentials included in the provider URL.",
            "We do not control your provider and do not receive those requests. Your provider's own privacy policy and terms apply. Viewaro requires HTTPS for the current playlist and AVPlayer paths and does not transmit playlist credentials over unencrypted HTTP.",
          ],
        },
        {
          heading: "Apple HLS Demo",
          paragraphs: [
            "The built-in playback demo connects directly to a public HLS sample hosted by Apple. Apple may receive standard network request information such as your IP address and request time under Apple's privacy terms.",
          ],
        },
        {
          heading: "Purchases and RevenueCat",
          paragraphs: [
            "Purchases are made through Apple's In-App Purchase system. We do not receive your payment card or bank details.",
            "When subscriptions are enabled, Viewaro uses RevenueCat to validate Apple receipts and provide Premium entitlement status. RevenueCat may process:",
          ],
        },
        {
          list: [
            "a randomly generated anonymous App User ID",
            "Apple receipt and purchase or subscription history",
            "device type, operating-system information, app version, and last-seen time",
          ],
        },
        {
          paragraphs: [
            "This information is used for purchase validation, fraud prevention, subscription functionality, and aggregate subscription analytics. Viewaro does not send playlist addresses, provider credentials, channel names, or viewing history to RevenueCat. We do not use RevenueCat data for cross-app advertising tracking.",
            "See [RevenueCat's Privacy Policy](https://www.revenuecat.com/privacy) for its processing, retention, and international-transfer practices.",
          ],
        },
        {
          heading: "Support communications",
          paragraphs: [
            "If you contact support, we receive the information you choose to provide, such as your email address, message, app version, and diagnostic details. Do not send playlist URLs, usernames, passwords, tokens, or other provider credentials.",
            "We use support information to answer your request, investigate problems, and meet legal obligations. We retain it only as long as reasonably necessary for those purposes.",
          ],
        },
        {
          heading: "Analytics, advertising, and tracking",
          paragraphs: [
            "Viewaro does not include advertising SDKs or behavioral analytics in the current release. We do not track your activity across apps or websites and we do not sell personal data.",
            "Purchase information processed by RevenueCat is used only as described in the Purchases and RevenueCat section above. This policy and the App Store privacy disclosure will be updated before any materially different analytics or third-party SDK is enabled.",
          ],
        },
        {
          heading: "Data sharing",
          paragraphs: ["We share information only when necessary:"],
        },
        {
          list: [
            "with Apple to process purchases and distribute the app",
            "with RevenueCat to validate purchases and manage subscription entitlements",
            "with service providers used to operate the public support website or email",
            "when required by law or necessary to protect users, our rights, or the public",
          ],
        },
        {
          paragraphs: [
            "We do not give service providers permission to use Viewaro information for their own advertising.",
          ],
        },
        {
          heading: "Your choices and rights",
          paragraphs: [
            "You can remove playlists and other local app data using Viewaro's controls. You can manage or cancel an Apple subscription in your Apple Account settings. You can contact us to ask about support information we hold about you or to exercise rights available under applicable privacy law.",
            "Because playlist and playback data remain on your Mac, we generally cannot access, export, or delete that local data remotely.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "Viewaro is not directed to children and does not knowingly collect personal information from children. Users are responsible for ensuring that the content they access is appropriate and lawful.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We use technical measures designed to protect information, including the macOS App Sandbox, Keychain protection, and encrypted local storage for playlist secrets. No security measure can guarantee absolute protection.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We may update this policy when Viewaro's functionality, service providers, or legal obligations change. The current version and effective date will be posted on this page.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions or privacy requests can be sent to [support@itquotes.hr](mailto:support@itquotes.hr) or to ITQuotes, Zagreb, Croatia.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms of Use",
      metaDescription: "Terms of use for the Viewaro app.",
      updated: "July 31, 2026",
      sections: [
        {
          paragraphs: [
            "These Terms of Use (\"Terms\") apply to the Viewaro macOS application and related support website provided by **ITQuotes** (\"Viewaro\", \"we\", \"us\", or \"our\").",
          ],
        },
        {
          heading: "Apple license terms",
          paragraphs: [
            "The application is licensed through the Mac App Store, not sold. Unless a custom end-user license agreement is shown in App Store Connect, the [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/) governs the application license. These Terms supplement the Apple Standard EULA for Viewaro-specific services and acceptable use. Mandatory consumer rights in your country remain unaffected.",
          ],
        },
        {
          heading: "Bring your own content",
          paragraphs: [
            "Viewaro is a media player. It does not provide, host, sell, recommend, or verify television channels, playlists, media subscriptions, or access credentials.",
            "You may use Viewaro only with sources and content that you are legally authorized to access. You are responsible for:",
          ],
        },
        {
          list: [
            "the legality and accuracy of playlist addresses and credentials you enter",
            "obtaining all necessary subscriptions, licenses, and permissions",
            "complying with your provider's terms and applicable law",
            "ensuring that content is appropriate for each person using your Mac",
          ],
        },
        {
          paragraphs: [
            "You must not use Viewaro to infringe copyright, bypass access controls or DRM, gain unauthorized access to a service, share stolen credentials, or facilitate illegal distribution.",
          ],
        },
        {
          heading: "Third-party providers and services",
          paragraphs: [
            "Viewaro connects directly to providers selected by you. We do not control those providers and do not guarantee their availability, security, legality, compatibility, content, or performance. Your relationship with each provider is governed by its own terms and privacy policy.",
            "The Apple HLS Demo is a public sample used only to demonstrate playback. It is not a Viewaro content service.",
          ],
        },
        {
          heading: "Free and Premium features",
          paragraphs: [
            "Viewaro may offer a free feature set and optional Premium features through an auto-renewable subscription. Before purchase, the app will display:",
          ],
        },
        {
          list: [
            "the Premium functionality included",
            "the subscription duration",
            "the localized price",
            "whether a trial or introductory offer applies",
            "that the subscription renews automatically until canceled",
          ],
        },
        {
          paragraphs: [
            "Payment is charged to your Apple Account after confirmation. Renewal, billing, refunds, and cancellation are handled by Apple under its applicable terms. You can manage or cancel the subscription in your Apple Account settings. Deleting Viewaro does not automatically cancel a subscription.",
            "Premium access depends on a valid Apple purchase and entitlement. Viewaro provides a Restore Purchases action for eligible purchases. Prices, durations, and offers shown by the App Store are controlling if they differ from website copy.",
          ],
        },
        {
          heading: "Updates and availability",
          paragraphs: [
            "We may update Viewaro to add, change, or remove functionality, maintain security, comply with law, or remain compatible with macOS and third-party services. We do not guarantee that every provider, playlist format, codec, or stream will work.",
            "We may suspend access to Viewaro-specific online services when necessary for security, maintenance, legal compliance, or abuse prevention. This does not change rights Apple provides for an active subscription period.",
          ],
        },
        {
          heading: "Privacy and security",
          paragraphs: [
            "Our handling of information is described in the [Viewaro Privacy Policy](/privacy). You must keep provider credentials confidential and avoid including them in support messages.",
          ],
        },
        {
          heading: "Disclaimer and liability",
          paragraphs: [
            'The Apple Standard EULA contains the warranty and liability terms applicable to the application license. To the maximum extent permitted by applicable law, Viewaro is provided on an "as is" and "as available" basis. We are not responsible for third-party content, provider outages, playlist changes, or unauthorized use of sources entered by a user.',
            "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limits mandatory consumer rights.",
          ],
        },
        {
          heading: "Termination",
          paragraphs: [
            "You may stop using Viewaro at any time. Your rights under these Terms end if you materially violate them, subject to applicable law and the Apple Standard EULA. Sections that by their nature should survive termination remain effective, including intellectual-property, disclaimer, and liability provisions.",
          ],
        },
        {
          heading: "Changes to these Terms",
          paragraphs: [
            "We may update these Terms when Viewaro, applicable law, or our service providers change. The current version and effective date will be posted on this page. Material changes will be communicated when required by law.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about these Terms can be sent to [support@itquotes.hr](mailto:support@itquotes.hr) or to ITQuotes, Zagreb, Croatia.",
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
            "Viewaro is a native IPTV player for macOS. It plays compatible streams from an M3U playlist that you provide. Viewaro does not include channels, playlists, or media-service subscriptions.",
          ],
        },
        {
          heading: "Contact",
          list: [
            "Support email: [support@itquotes.hr](mailto:support@itquotes.hr)",
            "Provider: ITQuotes",
            "Postal address: Zagreb, Croatia",
          ],
        },
        {
          paragraphs: ["When contacting support, include:"],
        },
        {
          list: [
            "your Viewaro version",
            "your macOS version",
            "the step that failed",
            "the exact error message, if one was shown",
          ],
        },
        {
          paragraphs: [
            "Never send playlist URLs, usernames, passwords, tokens, screenshots containing credentials, or other provider secrets.",
          ],
        },
        {
          heading: "Common questions",
          topics: [
            {
              q: "Where do I get a playlist?",
              a: "Viewaro does not sell or recommend IPTV services. Ask a provider you are legally authorized to use for a compatible M3U playlist address.",
            },
            {
              q: "Why does an HTTP playlist fail?",
              a: "Playlist addresses and stream URLs can contain credentials. Viewaro tries HTTPS first and does not send those credentials over unencrypted HTTP in the current release. Ask your provider for an HTTPS address.",
            },
            {
              q: "How do I verify that playback works?",
              a: "Open Live TV and use Apple HLS Demo. It plays a public Apple sample without requiring provider credentials.",
            },
            {
              q: "What does the free version include?",
              a: "The free version supports one IPTV source and basic playback. If subscriptions are enabled, Premium can unlock multiple sources. The app shows the exact features, duration, and localized price before purchase.",
            },
            {
              q: "How do I restore or cancel Premium?",
              a: "Use Restore Purchases in Viewaro to restore an eligible Apple purchase. Manage or cancel an active subscription from your Apple Account subscription settings. Deleting Viewaro does not automatically cancel a subscription.",
            },
            {
              q: "Does Viewaro upload my playlist?",
              a: "Viewaro stores playlist information locally on your Mac and connects directly to the provider address you supplied. See the [Privacy Policy](/privacy) for details.",
            },
          ],
        },
        {
          heading: "Legal",
          list: [
            "[Privacy Policy](/privacy)",
            "[Terms of Use](/terms)",
            "[Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/)",
          ],
        },
      ],
    },
  },
};

export default en;
