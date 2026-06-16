import ComparisonTable from "@/components/ComparisonTable";
import OddsAlertForm from "@/components/OddsAlertForm";
import { platforms } from "@/lib/platforms";

export const metadata = {
  title: "Compare crypto parlay & combo odds | ChainParlay",
  description:
    "Full side-by-side comparison of crypto sportsbooks for parlay and combo bettors.",
};

export default function ComparePage() {
  // Sorted oldest-first as a neutral, stable ordering until verified
  // ratings exist. Swap to volatile.rating once terms are confirmed.
  const sorted = [...platforms].sort(
    (a, b) => a.stable.foundedYear - b.stable.foundedYear
  );

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow">Full comparison</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk md:text-4xl">
        Crypto sportsbooks, ranked for parlay bettors
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted md:text-base">
        Sorted by our combo-betting score, which weighs leg limits, boost
        terms, minimum odds per leg, and payout speed. Sign-up bonuses are
        shown for reference but aren&apos;t the main factor — most are
        consumed long before a parlay habit pays off.
      </p>

      <div className="mt-8">
        <ComparisonTable platforms={sorted} />
      </div>

      <div className="mt-12">
        <OddsAlertForm />
      </div>
    </section>
  );
}
