import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata = {
  title: "Guides | ChainParlay",
  description: "Plain-language guides to odds, boosts, and crypto payout speed for parlay bettors.",
};

export default function GuidesIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow">Guides</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk md:text-4xl">
        Understand the chain before you bet it
      </h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-link border border-hairline bg-surface p-6 transition hover:border-steel"
          >
            <h2 className="font-display text-lg font-semibold text-chalk">
              {guide.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{guide.dek}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest2 text-steel">
              Read guide →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
