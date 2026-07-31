import type { AnyLocale } from "@/i18n/locales";
import type { Dictionary, LegalPage } from "@/i18n/types";
import Inline from "./Inline";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function LegalShell({
  locale,
  path,
  dict,
  page,
}: {
  locale: AnyLocale;
  path: string;
  dict: Dictionary;
  page: LegalPage;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader locale={locale} path={path} nav={dict.nav} />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.title}</h1>
          {page.updated && (
            <p className="mt-3 text-sm text-zinc-500">
              {dict.legal.updatedLabel} {page.updated}
            </p>
          )}
          <div className="legal mt-10">
            {page.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs?.map((p, j) => (
                  <p key={j}>
                    <Inline text={p} />
                  </p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item, j) => (
                      <li key={j}>
                        <Inline text={item} />
                      </li>
                    ))}
                  </ul>
                )}
                {section.topics?.map((topic, j) => (
                  <div key={j}>
                    <h3>{topic.q}</h3>
                    <p>
                      <Inline text={topic.a} />
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} footer={dict.footer} />
    </div>
  );
}
