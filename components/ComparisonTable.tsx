import { Platform } from "@/types/platform";
import AffiliateButton from "./AffiliateButton";

type ComparisonTableProps = {
  platforms: Platform[];
};

function VolatileCell({
  display,
  verified,
}: {
  display: string | null;
  verified: boolean;
}) {
  if (!verified) {
    return (
      <span className="font-mono text-xs uppercase tracking-widest2 text-alert">
        Verify on site
      </span>
    );
  }
  if (display === null) {
    return <span className="text-sm text-muted">—</span>;
  }
  return <span className="tabular text-sm text-chalk">{display}</span>;
}

export default function ComparisonTable({ platforms }: ComparisonTableProps) {
  return (
    <div>
      <p className="mb-3 text-xs text-muted">
        Founding, licensing, and coin support below are sourced and dated.
        Combo boost, leg limits, and bonus terms change frequently —{" "}
        <span className="font-mono text-alert">Verify on site</span> means
        we haven&apos;t checked that book&apos;s current terms yet; a dash
        (—) means we checked and the operator doesn&apos;t publish that
        figure.
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
                    display={
                      platform.volatile.maxParlayLegs !== null
                        ? String(platform.volatile.maxParlayLegs)
                        : null
                    }
                    verified={platform.volatile.verified}
                  />
                </td>
                <td className="px-4 py-4">
                  <VolatileCell
                    display={
                      platform.volatile.parlayBoostPct === null
                        ? null
                        : platform.volatile.parlayBoostPct > 0
                        ? `+${platform.volatile.parlayBoostPct}%`
                        : "None"
                    }
                    verified={platform.volatile.verified}
                  />
                </td>
                <td className="px-4 py-4">
                  <VolatileCell
                    display={platform.volatile.depositBonus}
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
