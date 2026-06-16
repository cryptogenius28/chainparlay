import { Platform } from "@/types/platform";

/**
 * SOURCES for `stable` fields (checked June 2026):
 * - Stake: stake.com/licenses (Medium Rare N.V., Curaçao Gaming Authority
 *   license OGL/2024/1451/0918, founded 2017); coin count cross-checked
 *   via canadasportsbetting.ca and cryptopolitan.com reviews.
 * - BC.Game: blog.bc.game licensing post + newswire.com filing (BlockDance
 *   B.V., Curaçao CIL sub-license 5536/JAZ, founded 2017); coin count via
 *   bcoriginals.com and worldpokerdeals.com.
 * - Cloudbet: cloudbet.com/en/about-us/license (Halcyon Super Holdings
 *   B.V., Curaçao Gaming Authority license OGL/2024/328/0599, founded
 *   2013); coin count and payout-speed reputation cross-checked via
 *   cryptoslate.com and tech-insider.org reviews.
 * - Sportsbet.io: everybodywiki.com entry citing Curaçao license validator
 *   (mBet Solutions N.V., part of Coingaming Group, Curaçao eGaming
 *   license 1668/JAZ, founded 2016); coin list and payout speed
 *   cross-checked via bitcoin.com and cryptoadventure.com reviews.
 *
 * `volatile` fields (rating, max legs, boost %, min odds/leg, bonus) are
 * UNVERIFIED placeholders. Sources directly contradicted each other here —
 * e.g. one review states BC.Game has no parlay/accumulator bonus, another
 * describes a 5-leg "Acca Boost." These terms change often and are
 * regulated marketing claims: confirm each one on the operator's live
 * terms page (or affiliate portal) before publishing, then set
 * `verified: true` and `lastVerified` to today's date.
 */
export const platforms: Platform[] = [
  {
    slug: "stake",
    name: "Stake",
    tagline: "Deep market coverage, crypto-only cashier",
    affiliateUrl: "https://example.com/go/stake",
    notes:
      "Largest market depth of the four for live parlay legs across major sports. Crypto-only deposits (fiat purchasable in-app via Moonpay).",
    stable: {
      foundedYear: 2017,
      operatorEntity: "Medium Rare N.V.",
      licenseAuthority: "Curaçao Gaming Authority",
      licenseNumber: "OGL/2024/1451/0918",
      coinsAccepted: ["BTC", "ETH", "USDT", "LTC", "DOGE", "+15 more"],
      payoutSpeedReputation:
        "Widely reported as same-day; most reviews cite under 24 hours.",
    },
    volatile: {
      rating: null,
      maxParlayLegs: null,
      parlayBoostPct: null,
      minOddsPerLeg: null,
      depositBonus: null,
      verified: false,
      lastVerified: null,
    },
  },
  {
    slug: "bc-game",
    name: "BC.Game",
    tagline: "Largest coin list, gamified rewards",
    affiliateUrl: "https://example.com/go/bc-game",
    notes:
      "Reviews disagree on whether a standing parlay/Acca boost exists — confirm current promo terms directly before publishing any boost figure.",
    stable: {
      foundedYear: 2017,
      operatorEntity: "BlockDance B.V.",
      licenseAuthority: "Curaçao (CIL sub-license, master 5536/JAZ)",
      licenseNumber: "5536/JAZ",
      coinsAccepted: ["BTC", "ETH", "USDT", "BNB", "TRX", "+45 more"],
      payoutSpeedReputation:
        "Reviews describe withdrawals as fast/near-instant for crypto; no independently verified median time found.",
    },
    volatile: {
      rating: null,
      maxParlayLegs: null,
      parlayBoostPct: null,
      minOddsPerLeg: null,
      depositBonus: null,
      verified: false,
      lastVerified: null,
    },
  },
  {
    slug: "cloudbet",
    name: "Cloudbet",
    tagline: "Longest track record, high-limit sportsbook",
    affiliateUrl: "https://example.com/go/cloudbet",
    notes:
      "Operating since 2013 — the longest-running of the four. Reviews note occasional zero-margin sportsbook promos, which is a genuine edge for combo bettors if confirmed live.",
    stable: {
      foundedYear: 2013,
      operatorEntity: "Halcyon Super Holdings B.V.",
      licenseAuthority: "Curaçao Gaming Authority",
      licenseNumber: "OGL/2024/328/0599",
      coinsAccepted: ["BTC", "ETH", "USDT", "USDC", "LTC", "+35 more"],
      payoutSpeedReputation:
        "Multiple reviews cite a median of roughly 10 minutes once a withdrawal is processed.",
    },
    volatile: {
      rating: null,
      maxParlayLegs: null,
      parlayBoostPct: null,
      minOddsPerLeg: null,
      depositBonus: null,
      verified: false,
      lastVerified: null,
    },
  },
  {
    slug: "sportsbet-io",
    name: "Sportsbet.io",
    tagline: "Sponsorship-backed, fiat + crypto hybrid",
    affiliateUrl: "https://example.com/go/sportsbet-io",
    notes:
      "Part of Coingaming Group. One of the few crypto books that also takes fiat/card deposits, which may matter for bettors who want both rails.",
    stable: {
      foundedYear: 2016,
      operatorEntity: "mBet Solutions N.V. (Coingaming Group)",
      licenseAuthority: "Curaçao eGaming",
      licenseNumber: "1668/JAZ",
      coinsAccepted: ["BTC", "ETH", "LTC", "TRX", "USDT", "+ fiat options"],
      payoutSpeedReputation:
        "Several reviews cite withdrawals processing in minutes for crypto; treat exact figures as unverified until confirmed live.",
    },
    volatile: {
      rating: null,
      maxParlayLegs: null,
      parlayBoostPct: null,
      minOddsPerLeg: null,
      depositBonus: null,
      verified: false,
      lastVerified: null,
    },
  },
];

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}
