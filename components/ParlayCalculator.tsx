"use client";

import { useState } from "react";
import { platforms } from "@/lib/platforms";

type Leg = {
  id: string;
  label: string;
  oddsByPlatform: Record<string, string>;
};

function emptyOdds(): Record<string, string> {
  const obj: Record<string, string> = {};
  platforms.forEach((p) => (obj[p.slug] = ""));
  return obj;
}

const demoLegs: Leg[] = [
  {
    id: "leg-1",
    label: "Lakers ML",
    oddsByPlatform: {
      stake: "1.85",
      "bc-game": "1.83",
      cloudbet: "1.87",
      "sportsbet-io": "1.84",
    },
  },
  {
    id: "leg-2",
    label: "Over 220.5 total pts",
    oddsByPlatform: {
      stake: "1.91",
      "bc-game": "1.89",
      cloudbet: "1.92",
      "sportsbet-io": "1.90",
    },
  },
];

export default function ParlayCalculator() {
  const [stake, setStake] = useState("10");
  const [legs, setLegs] = useState<Leg[]>(demoLegs);

  function addLeg() {
    setLegs((prev) => [
      ...prev,
      {
        id: `leg-${Date.now()}`,
        label: `Leg ${prev.length + 1}`,
        oddsByPlatform: emptyOdds(),
      },
    ]);
  }

  function removeLeg(id: string) {
    setLegs((prev) => prev.filter((l) => l.id !== id));
  }

  function updateLabel(id: string, label: string) {
    setLegs((prev) =>
      prev.map((l) => (l.id === id ? { ...l, label } : l))
    );
  }

  function updateOdds(id: string, slug: string, value: string) {
    setLegs((prev) =>
      prev.map((l) =>
        l.id === id
          ? { ...l, oddsByPlatform: { ...l.oddsByPlatform, [slug]: value } }
          : l
      )
    );
  }

  function loadExample() {
    setLegs(demoLegs);
    setStake("10");
  }

  function clearAll() {
    setLegs([{ id: `leg-${Date.now()}`, label: "Leg 1", oddsByPlatform: emptyOdds() }]);
  }

  const stakeNum = parseFloat(stake) || 0;

  const results = platforms.map((platform) => {
    const oddsList = legs.map((leg) =>
      parseFloat(leg.oddsByPlatform[platform.slug])
    );
    const incomplete =
      legs.length === 0 || oddsList.some((o) => !o || isNaN(o) || o < 1.01);
    const combinedOdds = incomplete
      ? null
      : oddsList.reduce((acc, o) => acc * o, 1);
    const payout = combinedOdds !== null ? stakeNum * combinedOdds : null;
    const profit = payout !== null ? payout - stakeNum : null;

    let boostedPayout: number | null = null;
    if (
      payout !== null &&
      profit !== null &&
      platform.volatile.verified &&
      platform.volatile.parlayBoostPct !== null
    ) {
      const boostedProfit =
        profit * (1 + platform.volatile.parlayBoostPct / 100);
      boostedPayout = stakeNum + boostedProfit;
    }

    const exceedsMaxLegs =
      platform.volatile.maxParlayLegs !== null &&
      legs.length > platform.volatile.maxParlayLegs;

    return { platform, incomplete, combinedOdds, payout, boostedPayout, exceedsMaxLegs };
  });

  const complete = results.filter((r) => !r.incomplete);
  const sorted = [...results].sort((a, b) => {
    const aPay = a.boostedPayout ?? a.payout ?? -Infinity;
    const bPay = b.boostedPayout ?? b.payout ?? -Infinity;
    return bPay - aPay;
  });
  const bestSlug = complete.length > 0 ? sorted[0].platform.slug : null;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label htmlFor="stake" className="eyebrow mb-2 block">
            Stake (USD)
          </label>
          <input
            id="stake"
            type="number"
            min="0"
            step="1"
            value={stake}
            onChange={(e) => setStake(e.target.value)}
            className="w-32 rounded-link border border-hairline bg-ink px-3 py-2 font-mono text-sm text-chalk focus:border-steel"
          />
        </div>
        <button
          onClick={addLeg}
          className="rounded-link border border-hairline px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-muted transition hover:border-steel hover:text-chalk"
        >
          + Add leg
        </button>
        <button
          onClick={loadExample}
          className="font-mono text-xs uppercase tracking-widest2 text-steel transition hover:text-chalk"
        >
          Load example
        </button>
        <button
          onClick={clearAll}
          className="font-mono text-xs uppercase tracking-widest2 text-muted transition hover:text-alert"
        >
          Clear all
        </button>
      </div>

      <div className="overflow-x-auto rounded-link border border-hairline">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-hairline bg-surface">
              <th className="eyebrow px-4 py-3">Leg</th>
              {platforms.map((p) => (
                <th key={p.slug} className="eyebrow px-4 py-3">
                  {p.name}
                </th>
              ))}
              <th className="eyebrow px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {legs.map((leg, i) => (
              <tr key={leg.id} className="border-b border-hairline last:border-0">
                <td className="px-4 py-3">
                  <input
                    value={leg.label}
                    onChange={(e) => updateLabel(leg.id, e.target.value)}
                    placeholder={`Leg ${i + 1}`}
                    aria-label={`Leg ${i + 1} description`}
                    className="w-40 border-b border-hairline bg-transparent font-body text-sm text-chalk placeholder:text-muted focus:border-steel focus:outline-none"
                  />
                </td>
                {platforms.map((p) => (
                  <td key={p.slug} className="px-4 py-3">
                    <input
                      type="number"
                      step="0.01"
                      min="1.01"
                      value={leg.oddsByPlatform[p.slug] ?? ""}
                      onChange={(e) => updateOdds(leg.id, p.slug, e.target.value)}
                      placeholder="1.90"
                      aria-label={`${p.name} odds for ${leg.label || `leg ${i + 1}`}`}
                      className="w-20 rounded-link border border-hairline bg-ink px-2 py-1.5 tabular text-sm text-chalk placeholder:text-muted/50 focus:border-steel"
                    />
                  </td>
                ))}
                <td className="px-4 py-3">
                  <button
                    onClick={() => removeLeg(leg.id)}
                    aria-label={`Remove ${leg.label || `leg ${i + 1}`}`}
                    className="font-mono text-xs text-muted transition hover:text-alert"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <p className="eyebrow mb-3">Payout by book</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sorted.map((r) => (
            <div
              key={r.platform.slug}
              className={`rounded-link border p-4 ${
                r.platform.slug === bestSlug
                  ? "border-brass bg-surface-raised"
                  : "border-hairline bg-surface"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-base font-semibold text-chalk">
                  {r.platform.name}
                </p>
                {r.platform.slug === bestSlug && (
                  <span className="font-mono text-xs uppercase tracking-widest2 text-brass">
                    Best
                  </span>
                )}
              </div>

              {r.incomplete ? (
                <p className="mt-3 text-sm text-muted">
                  Add odds for every leg to see this book&apos;s payout.
                </p>
              ) : (
                <>
                  <p className="mt-3 tabular text-2xl text-chalk">
                    {r.combinedOdds!.toFixed(2)}×
                  </p>
                  <p className="mt-1 tabular text-sm text-muted">
                    ${stakeNum.toFixed(2)} → ${r.payout!.toFixed(2)}
                  </p>
                  {r.boostedPayout !== null ? (
                    <p className="mt-2 tabular text-sm text-win">
                      +{r.platform.volatile.parlayBoostPct}% boost → $
                      {r.boostedPayout.toFixed(2)}
                    </p>
                  ) : (
                    <p className="mt-2 font-mono text-xs uppercase tracking-widest2 text-alert">
                      Boost: verify on site
                    </p>
                  )}
                  {r.exceedsMaxLegs && (
                    <p className="mt-2 text-xs text-alert">
                      Exceeds this book&apos;s max leg limit — verify before
                      betting.
                    </p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-muted">
        Figures above are based on the odds you enter for each leg — they
        aren&apos;t pulled live from any book. Boost percentages only apply
        once we&apos;ve verified that book&apos;s current terms; see the{" "}
        <a href="/compare" className="text-steel hover:text-chalk">
          comparison table
        </a>{" "}
        for what&apos;s confirmed.
      </p>
    </div>
  );
}
