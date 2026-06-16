import { ChainLeg } from "@/types/platform";

const demoChain: ChainLeg[] = [
  { label: "Lakers ML", odds: 1.85 },
  { label: "Over 220.5 total pts", odds: 1.91 },
  { label: "Celtics -4.5", odds: 1.95 },
  { label: "Tatum 25+ PTS", odds: 1.72 },
];

const stake = 10;

function ChainLinkIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-steel"
    >
      <rect
        x="2"
        y="9"
        width="14"
        height="10"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="12"
        y="9"
        width="14"
        height="10"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.55"
      />
    </svg>
  );
}

export default function ParlayChain() {
  let running = 1;

  return (
    <div className="rounded-link border border-hairline bg-surface p-5 md:p-8">
      <div className="flex items-center justify-between gap-4 pb-6">
        <p className="eyebrow">Live parlay chain — illustration</p>
        <p className="font-mono text-xs text-muted">
          ${stake.toFixed(2)} stake
        </p>
      </div>

      <div className="flex flex-col gap-4 overflow-x-auto md:flex-row md:items-center md:gap-3">
        {demoChain.map((leg, i) => {
          running *= leg.odds;
          const isLast = i === demoChain.length - 1;

          return (
            <div key={leg.label} className="flex items-center gap-3 md:gap-3">
              <div
                className="min-w-[12rem] animate-link-in rounded-link border border-hairline bg-surface-raised p-4 opacity-0 md:min-w-[10.5rem]"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <p className="eyebrow text-[0.6rem]">Leg {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-body text-sm text-chalk">{leg.label}</p>
                <p className="mt-2 tabular text-lg text-brass">
                  {leg.odds.toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col items-center gap-1 md:flex-col">
                <ChainLinkIcon />
                <p
                  className="animate-multiplier-tick whitespace-nowrap font-mono text-xs text-muted opacity-0"
                  style={{ animationDelay: `${i * 120 + 80}ms` }}
                >
                  {running.toFixed(2)}×
                </p>
              </div>

              {isLast && (
                <div
                  className="min-w-[12rem] animate-link-in rounded-link border border-brass bg-surface-raised p-4 opacity-0 md:min-w-[11rem]"
                  style={{ animationDelay: `${(i + 1) * 120}ms` }}
                >
                  <p className="eyebrow text-[0.6rem] text-brass">Payout</p>
                  <p className="mt-1 font-display text-2xl font-semibold text-chalk">
                    {running.toFixed(2)}×
                  </p>
                  <p className="mt-2 tabular text-sm text-muted">
                    ${stake.toFixed(2)} → ${(running * stake).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-muted">
        Each leg&apos;s odds multiply into the next — one loss breaks the
        chain. Figures above are illustrative; live odds come from the books
        compared below.
      </p>
    </div>
  );
}
