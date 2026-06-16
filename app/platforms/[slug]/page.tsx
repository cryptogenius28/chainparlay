import { notFound } from "next/navigation";
import AffiliateButton from "@/components/AffiliateButton";
import { platforms, getPlatformBySlug } from "@/lib/platforms";

export function generateStaticParams() {
  return platforms.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const platform = getPlatformBySlug(params.slug);
  if (!platform) return {};
  return {
    title: `${platform.name} review for crypto parlay bettors | ChainParlay`,
    description: platform.tagline,
  };
}

export default function PlatformPage({
  params,
}: {
  params: { slug: string };
}) {
  const platform = getPlatformBySlug(params.slug);
  if (!platform) notFound();

  const { stable, volatile } = platform;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="eyebrow">Book review</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk md:text-4xl">
        {platform.name}
      </h1>
      <p className="mt-2 text-muted">{platform.tagline}</p>

      <p className="mt-8 eyebrow">Sourced &amp; dated</p>
      <div className="mt-3 overflow-hidden rounded-link border border-hairline">
        {[
          { label: "Operating since", value: String(stable.foundedYear) },
          { label: "Operator", value: stable.operatorEntity },
          { label: "License", value: stable.licenseAuthority },
          { label: "License number", value: stable.licenseNumber },
          { label: "Coins accepted", value: stable.coinsAccepted.join(", ") },
          { label: "Payout speed", value: stable.payoutSpeedReputation },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`flex flex-col gap-1 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between ${
              i % 2 === 0 ? "bg-surface" : ""
            }`}
          >
            <span className="text-muted">{row.label}</span>
            <span className="text-chalk sm:text-right">{row.value}</span>
          </div>
        ))}
      </div>

      <p className="mt-8 eyebrow">Combo terms</p>
      <div className="mt-3 overflow-hidden rounded-link border border-hairline">
        {[
          {
            label: "Max parlay legs",
            display:
              volatile.maxParlayLegs !== null
                ? String(volatile.maxParlayLegs)
                : null,
          },
          {
            label: "Combo boost",
            display:
              volatile.parlayBoostPct === null
                ? null
                : volatile.parlayBoostPct > 0
                ? `+${volatile.parlayBoostPct}%`
                : "None",
          },
          {
            label: "Min odds per leg",
            display:
              volatile.minOddsPerLeg !== null
                ? volatile.minOddsPerLeg.toFixed(2)
                : null,
          },
          { label: "Deposit bonus", display: volatile.depositBonus },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between gap-4 px-4 py-3 text-sm ${
              i % 2 === 0 ? "bg-surface" : ""
            }`}
          >
            <span className="text-muted">{row.label}</span>
            {!volatile.verified ? (
              <span className="font-mono text-xs uppercase tracking-widest2 text-alert">
                Verify on site
              </span>
            ) : row.display === null ? (
              <span className="text-muted">—</span>
            ) : (
              <span className="tabular text-right text-chalk">
                {row.display}
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">
        {volatile.verified && volatile.lastVerified
          ? `Verified against the operator's own help center / terms on ${volatile.lastVerified}.`
          : "Not yet verified against the operator's live terms — confirm before publishing."}
      </p>

      <p className="mt-6 text-sm text-muted">{platform.notes}</p>

      <div className="mt-8">
        <AffiliateButton
          href={platform.affiliateUrl}
          platformName={platform.name}
        />
      </div>
    </section>
  );
}
