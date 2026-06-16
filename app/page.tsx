import Link from "next/link";
import ParlayChain from "@/components/ParlayChain";
import ComparisonTable from "@/components/ComparisonTable";
import { platforms } from "@/lib/platforms";
import { guides } from "@/lib/guides";

const steps = [
  {
    n: "01",
    title: "Pick your legs",
    body: "Choose two or more outcomes — across one game or several — to combine into a single bet.",
  },
  {
    n: "02",
    title: "Odds multiply",
    body: "Each leg's decimal odds multiply together into one combined price for the whole chain.",
  },
  {
    n: "03",
    title: "Every leg has to hit",
    body: "One loss breaks the chain and the bet pays nothing — that's the trade for a bigger multiplier.",
  },
];

export default function HomePage() {
  const topPlatforms = platforms.slice(0, 4);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24">
        <p className="eyebrow">Crypto parlay &amp; combo comparison</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-chalk md:text-6xl">
          Stack the legs. We compare what happens to the odds.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
          ChainParlay tracks leg limits, combo boosts, and payout speed across
          crypto sportsbooks — so you can build bigger parlays without
          digging through every operator&apos;s terms page.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/calculator"
            className="rounded-link bg-brass px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition hover:bg-brass-dim"
          >
            Build a parlay
          </Link>
          <Link
            href="/compare"
            className="rounded-link border border-hairline px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-muted transition hover:border-steel hover:text-chalk"
          >
            Compare all books
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <ParlayChain />
        <div className="mt-4 flex justify-end">
          <Link
            href="/calculator"
            className="font-mono text-xs uppercase tracking-widest2 text-steel transition hover:text-chalk"
          >
            Build this with your own legs and odds →
          </Link>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow">How chain parlays work</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-link border border-hairline bg-surface p-6"
            >
              <p className="font-mono text-sm text-steel">{step.n}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-chalk">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Top crypto books for parlays</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-chalk md:text-3xl">
              Licensing and coin support, verified — combo terms in progress
            </h2>
          </div>
          <Link
            href="/compare"
            className="font-mono text-xs uppercase tracking-widest2 text-steel hover:text-chalk"
          >
            View full comparison →
          </Link>
        </div>
        <div className="mt-6">
          <ComparisonTable platforms={topPlatforms} />
        </div>
        <div className="mt-4">
          <Link
            href="/boosts"
            className="font-mono text-xs uppercase tracking-widest2 text-steel hover:text-chalk"
          >
            See current parlay boost status →
          </Link>
        </div>
      </section>

      <section id="guides" className="mx-auto max-w-6xl px-6 py-16">
        <p className="eyebrow">Guides</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-chalk md:text-3xl">
          Understand the chain before you bet it
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="rounded-link border border-hairline bg-surface p-6 transition hover:border-steel"
            >
              <h3 className="font-display text-lg font-semibold text-chalk">
                {guide.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{guide.dek}</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-widest2 text-steel">
                Read guide →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
