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

      <p className="mt-8 eyebrow">Combo terms — needs verification</p>
      <div className="mt-3 overflow-hidden rounded-link border border-hairline">
        {[
          { label: "Max parlay legs", value: volatile.maxParlayLegs },
          {
            label: "Combo boost",
            value:
              volatile.parlayBoostPct !== null
                ? `+${volatile.parlayBoostPct}%`
                : null,
          },
          { label: "Min odds per leg", value: volatile.minOddsPerLeg },
          { label: "Deposit bonus", value: volatile.depositBonus },
        ].map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center justify-between px-4 py-3 text-sm ${
              i % 2 === 0 ? "bg-surface" : ""
            }`}
          >
            <span className="text-muted">{row.label}</span>
            {row.value !== null && volatile.verified ? (
              <span className="tabular text-chalk">{row.value}</span>
            ) : (
              <span className="font-mono text-xs uppercase tracking-widest2 text-alert">
                Verify on site
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-muted">
        {volatile.lastVerified
          ? `Last verified ${volatile.lastVerified}.`
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
