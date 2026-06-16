import { Platform } from "@/types/platform";
import AffiliateButton from "./AffiliateButton";

type ComparisonTableProps = {
  platforms: Platform[];
};

function VolatileCell({
  value,
  suffix = "",
  verified,
}: {
  value: string | number | null;
  suffix?: string;
  verified: boolean;
}) {
  if (value === null || !verified) {
    return (
      <span className="font-mono text-xs uppercase tracking-widest2 text-alert">
        Verify on site
      </span>
    );
  }
  return (
    <span className="tabular text-sm text-chalk">
      {value}
      {suffix}
    </span>
  );
}

export default function ComparisonTable({ platforms }: ComparisonTableProps) {
  return (
    <div>
      <p className="mb-3 text-xs text-muted">
        Founding, licensing, and coin support below are sourced and dated.
        Combo boost, leg limits, and bonus terms change frequently — fields
        marked{" "}
        <span className="font-mono text-alert">Verify on site</span> have
        not yet been confirmed against the operator&apos;s live terms.
      </p>
      <div className="overflow-x-auto rounded-link border border-hairline">
        <table className="w-full min-w-[920px] border-collapse text-left">
          <thead>
            <tr className="border-b border-hairline bg-surface">
              <th className="eyebrow px-4 py-3">#</th>
              <th className="eyebrow px-4 py-3">Book</th>
              <th className="eyebrow px-4 py-3">Since</th>
              <th className="eyebrow px-4 py-3">License</th>
              <th className="eyebrow px-4 py-3">Max legs</th>
              <th className="eyebrow px-4 py-3">Combo boost</th>
              <th className="eyebrow px-4 py-3">Deposit bonus</th>
              <th className="eyebrow px-4 py-3">Payout speed</th>
              <th className="eyebrow px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform, i) => (
              <tr
                key={platform.slug}
                className="border-b border-hairline last:border-0 even:bg-surface/40"
              >
                <td className="px-4 py-4 font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </td>
                <td className="px-4 py-4">
                  <p className="font-display text-base font-semibold text-chalk">
                    {platform.name}
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {platform.tagline}
                  </p>
                </td>
                <td className="px-4 py-4 tabular text-sm text-chalk">
                  {platform.stable.foundedYear}
                </td>
                <td className="px-4 py-4 text-sm text-muted">
                  {platform.stable.licenseAuthority}
                </td>
                <td className="px-4 py-4">
                  <VolatileCell
                    value={platform.volatile.maxParlayLegs}
                    verified={platform.volatile.verified}
                  />
                </td>
                <td className="px-4 py-4">
                  <VolatileCell
                    value={platform.volatile.parlayBoostPct}
                    suffix="%"
                    verified={platform.volatile.verified}
                  />
                </td>
                <td className="px-4 py-4">
                  <VolatileCell
                    value={platform.volatile.depositBonus}
                    verified={platform.volatile.verified}
                  />
                </td>
                <td className="px-4 py-4 text-sm text-muted">
                  {platform.stable.payoutSpeedReputation}
                </td>
                <td className="px-4 py-4">
                  <AffiliateButton
                    href={platform.affiliateUrl}
                    platformName={platform.name}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
