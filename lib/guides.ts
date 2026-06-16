export type Guide = {
  slug: string;
  title: string;
  dek: string;
};

export const guides: Guide[] = [
  {
    slug: "decimal-vs-american-odds",
    title: "Decimal vs. American odds, explained",
    dek: "How to read odds from any crypto book and convert between formats in your head.",
  },
  {
    slug: "what-a-parlay-boost-changes",
    title: "What a parlay boost actually changes",
    dek: "Boosts apply to your payout, not the odds you're shown — here's the difference.",
  },
  {
    slug: "crypto-deposit-speed-by-network",
    title: "Crypto deposit speed by network",
    dek: "Why your deposit clears in seconds on one chain and minutes on another.",
  },
];
