import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {updated && (
            <p className="mt-3 text-sm text-zinc-500">Last updated: {updated}</p>
          )}
          <div className="legal mt-10">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
