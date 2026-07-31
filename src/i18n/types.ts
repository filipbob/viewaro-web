export type LegalTopic = { q: string; a: string };

export type LegalSection = {
  heading?: string;
  /**
   * Each string supports a tiny inline syntax (see components/Inline.tsx):
   * **bold** and [link text](href). hrefs are not translated — copy them
   * unchanged into every locale, only the bracketed label text changes.
   */
  paragraphs?: string[];
  list?: string[];
  topics?: LegalTopic[];
};

export type LegalPage = {
  title: string;
  metaDescription: string;
  updated?: string;
  sections: LegalSection[];
};

export type Dictionary = {
  nav: {
    features: string;
    faq: string;
    support: string;
    comingSoon: string;
  };
  footer: {
    tagline: string;
    features: string;
    privacy: string;
    support: string;
    terms: string;
    copyright: string;
    madeBy: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    heroLine1: string;
    heroLine2: string;
    heroSub: string;
    badge: string;
    featuresEyebrow: string;
    featuresHeading: string;
    features: { title: string; body: string }[];
    integrationsEyebrow: string;
    integrationsHeading: string;
    integrationsSub: string;
    integrations: { name: string; body: string }[];
    plannedLabel: string;
    howEyebrow: string;
    howHeading: string;
    steps: { step: string; title: string; body: string }[];
    faqEyebrow: string;
    faqHeading: string;
    faqs: { q: string; a: string }[];
    ctaHeading: string;
    ctaBody: string;
  };
  legal: {
    updatedLabel: string;
    privacy: LegalPage;
    terms: LegalPage;
    support: LegalPage;
  };
};
