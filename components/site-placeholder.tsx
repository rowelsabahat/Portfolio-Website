import { site } from "../data/site";

export function SitePlaceholder() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <div className="border-t border-mint pt-6">
        <p className="font-mono text-sm tracking-widest text-mint uppercase">
          {site.status}
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {site.name}
        </h1>
      </div>
    </main>
  );
}
