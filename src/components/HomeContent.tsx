import Image from "next/image";
import type { SVGProps } from "react";
import type { AnyLocale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/types";
import Reveal from "./Reveal";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

function IconGuide(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 5v14" strokeLinecap="round" />
    </svg>
  );
}

function IconSource(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" strokeLinecap="round" />
    </svg>
  );
}

function IconStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path
        d="M12 3.5l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.7z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLocalStorage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
    </svg>
  );
}

function IconLock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" strokeLinecap="round" />
    </svg>
  );
}

function IconMac(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" strokeLinecap="round" />
    </svg>
  );
}

const featureIcons = [IconGuide, IconSource, IconStar, IconLocalStorage, IconLock, IconMac];

export default function HomeContent({
  locale,
  dict,
}: {
  locale: AnyLocale;
  dict: Dictionary;
}) {
  const { home } = dict;

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader locale={locale} path="" nav={dict.nav} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[600px] w-[900px] max-w-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_65%)]"
          />
          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-24 pt-24 text-center sm:pt-32">
            <Reveal>
              <Image
                src="/logo.png"
                alt="Viewaro"
                width={84}
                height={84}
                priority
                className="animate-float mb-9 rounded-[21px] border border-white/10 shadow-[0_0_80px_-10px_rgba(129,140,248,0.45)]"
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.25em] text-indigo-300/80">
                {home.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <h1 className="text-5xl font-black leading-[1.04] tracking-tight sm:text-7xl">
                {home.heroLine1}
                <br />
                <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-indigo-200 bg-clip-text text-transparent">
                  {home.heroLine2}
                </span>
              </h1>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-zinc-400">
                {home.heroSub}
              </p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-300 transition-colors duration-300 hover:border-amber-400/40 hover:bg-white/[0.06]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                {home.badge}
              </div>
            </Reveal>
            <Reveal delay={480}>
              <p className="mt-12 max-w-2xl text-sm leading-relaxed text-zinc-500">
                {home.plannedPlatforms}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto w-full max-w-5xl px-6 py-24">
            <Reveal>
              <p className="text-center text-[13px] font-semibold uppercase tracking-[0.25em] text-indigo-300/80">
                {home.featuresEyebrow}
              </p>
              <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                {home.featuresHeading}
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {home.features.map(({ title, body }, i) => {
                const Icon = featureIcons[i];
                return (
                  <Reveal key={title} delay={(i % 3) * 100}>
                    <div className="group h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/30 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.35)]">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-indigo-300 transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-400/40 group-hover:text-indigo-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integrations (roadmap) */}
        <section className="border-t border-white/[0.06]">
          <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center">
            <Reveal>
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-indigo-300/80">
                {home.integrationsEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {home.integrationsHeading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400">
                {home.integrationsSub}
              </p>
            </Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              {home.integrations.map(({ name, body }, i) => (
                <Reveal key={name} delay={i * 100}>
                  <div className="group flex w-64 flex-col items-center gap-2 rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.02] px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.04]">
                    <span className="text-sm font-semibold tracking-tight text-zinc-200 transition-colors duration-300 group-hover:text-indigo-200">
                      {name}
                    </span>
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                      {home.plannedLabel}
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-white/[0.06]">
          <div className="mx-auto w-full max-w-5xl px-6 py-24">
            <Reveal>
              <p className="text-center text-[13px] font-semibold uppercase tracking-[0.25em] text-indigo-300/80">
                {home.howEyebrow}
              </p>
              <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                {home.howHeading}
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {home.steps.map(({ step, title, body }, i) => (
                <Reveal key={step} delay={i * 140}>
                  <div className="group text-center sm:text-left">
                    <span className="inline-block bg-gradient-to-r from-indigo-300 to-sky-300 bg-clip-text font-mono text-sm font-bold text-transparent transition-transform duration-300 group-hover:scale-125">
                      {step}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold transition-colors duration-300 group-hover:text-indigo-200">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-white/[0.06]">
          <div className="mx-auto w-full max-w-3xl px-6 py-24">
            <Reveal>
              <p className="text-center text-[13px] font-semibold uppercase tracking-[0.25em] text-indigo-300/80">
                {home.faqEyebrow}
              </p>
              <h2 className="mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
                {home.faqHeading}
              </h2>
            </Reveal>
            <div className="mt-12 space-y-3">
              {home.faqs.map(({ q, a }, i) => (
                <Reveal key={q} delay={i * 80}>
                  <details className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] px-6 py-4 transition-colors duration-300 open:bg-white/[0.04] hover:border-indigo-400/25">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-zinc-100 [&::-webkit-details-marker]:hidden">
                      {q}
                      <span className="text-zinc-500 transition-transform duration-300 group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/[0.06]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[400px] w-[800px] max-w-full bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.14),transparent_65%)]"
          />
          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-28 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {home.ctaHeading}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-base leading-relaxed text-zinc-400">
                {home.ctaBody}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} footer={dict.footer} />
    </div>
  );
}
