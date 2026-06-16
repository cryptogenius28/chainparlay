import Link from "next/link";
import AffiliateButton from "@/components/AffiliateButton";
import OddsAlertForm from "@/components/OddsAlertForm";
import { platforms } from "@/lib/platforms";

export const metadata = {
  title: "Parlay & combo boost tracker | ChainParlay",
  description:
    "Current parlay and combo boost status across crypto sportsbooks, checked against each operator's own terms.",
};

function boostLabel(pct: number | null): string {
  if (pct === null) return "—";
  if (pct === 0) return "None";
  return `+${pct}%`;
}

export default function BoostsPage() {
  const verifiedCount = platforms.filter((p) => p.volatile.verified).length;
  const mostRecentCheck = platforms
    .map((p) => p.volatile.lastVerified)
    .filter((d): d is string => d !== null)
    .sort()
    .at(-1);

  // Verified books first, then unverified — within each group, keep
  // the array's existing order rather than inventing a ranking.
  const sorted = [...platforms].sort((a, b) => {
    if (a.volatile.verified === b.volatile.verified) return 0;
    return a.volatile.verified ? -1 : 1;
  });

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <p className="eyebrow">Boost tracker</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk md:text-4xl">
        Who&apos;s actually boosting parlays right now
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted md:text-base">
        Combo and parlay boosts get added, removed, and capped without much
        notice. Rather than re-checking four operators&apos; promo pages
        every time, this page tracks what we&apos;ve confirmed directly
        against each book&apos;s own terms, and flags what we haven&apos;t
        checked yet.
      </p>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest2 text-steel">
        {verifiedCount} of {platforms.length} books verified
        {mostRecentCheck ? ` — most recent check ${mostRecentCheck}` : ""}
      </p>

      <div className="mt-10 space-y-4">
        {sorted.map((platform) => {
          const { volatile } = platform;
          return (
            <div
              key={platform.slug}
              className="flex flex-col gap-4 rounded-link border border-hairline bg-surface p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/platforms/${platform.slug}`}
                    className="font-display text-lg font-semibold text-chalk hover:text-brass"
                  >
                    {platform.name}
                  </Link>
                  {!volatile.verified && (
                    <span className="font-mono text-xs uppercase tracking-widest2 text-alert">
                      Verify on site
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">{platform.tagline}</p>

                {volatile.verified ? (
                  <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-1">
                    <div>
                      <p className="eyebrow text-[0.6rem]">Combo boost</p>
                      <p
                        className={`tabular text-lg ${
                          volatile.parlayBoostPct && volatile.parlayBoostPct > 0
                            ? "text-win"
                            : "text-chalk"
                        }`}
                      >
                        {boostLabel(volatile.parlayBoostPct)}
                      </p>
                    </div>
                    <div>
                      <p className="eyebrow text-[0.6rem]">Max legs</p>
                      <p className="tabular text-lg text-chalk">
                        {volatile.maxParlayLegs ?? "—"}
                      </p>
                    </div>
                    <p className="text-xs text-muted">
                      Verified {volatile.lastVerified}
                    </p>
                  </div>
                ) : (
                  <p className="mt-3 text-sm text-muted">
                    Not yet checked against {platform.name}&apos;s current
                    terms — don&apos;t rely on third-party figures for this
                    one yet.
                  </p>
                )}
              </div>

              <AffiliateButton
                href={platform.affiliateUrl}
                platformName={platform.name}
                className="shrink-0"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-12">
        <OddsAlertForm />
      </div>
    </section>
  );
}
