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
 * SOURCES for `volatile` fields:
 * - Cloudbet (verified 2026-06-16): max legs (15) confirmed via Cloudbet's
 *   own Help Centre, "How to place a parlay bet (an accumulator)"
 *   (cloudbet.com/en/support/articles/103314). No parlay/combo boost
 *   confirmed via Cloudbet's own blog, "How to Make Winning Parlay Bets"
 *   (cloudbet.com/en/blog/sports/what-is-a-parlay-bet, dated March 2026),
 *   which states plainly there is no bonus or boost on parlays. Deposit
 *   bonus is a "Welcome Package" (rakeback + daily/weekly cash drops +
 *   Cash Vault unlocked day 30) per Cloudbet's own landing page
 *   (cloudbet.com/en/lp/welcome-package) — independent reviews
 *   consistently cite a ~$2,500 total value, though it is not a simple
 *   percentage deposit match. Minimum odds per leg: not found published
 *   anywhere, including official sources — left blank rather than guessed.
 * - Stake, BC.Game, Sportsbet.io: still unverified for specific numbers, but
 *   each has a documented finding below rather than a blank slate:
 *   - Stake's own Help Centre ("What is a Multi Bet?",
 *     help.stake.com/en/articles/5648214) documents straightforward odds
 *     multiplication and void-leg handling, with no mention anywhere of a
 *     leg cap or a standing parlay/combo boost. The "25 selections" figure
 *     repeated across review sites traces to none of Stake's own pages —
 *     treat it as unconfirmed.
 *   - BC.Game's own sportsbook terms page (bc.game/help/terms-sports) lists
 *     "combo boost" among its own meta keywords, confirming the feature
 *     exists — which contradicts one third-party review claiming BC.Game
 *     has no parlay bonus at all. The page is a JS-rendered app that didn't
 *     return actual figures on fetch, and third-party sites give mutually
 *     contradictory numbers for the boost scale (one cites 2%/10%/15% for
 *     3/4/5 legs; another cites an unrelated 1.05x–1.5x scale for 4–15
 *     legs) — none of these specific numbers are trustworthy yet.
 *   - Sportsbet.io's own help center documents a "Price Boost" (single-bet
 *     odds enhancer, requires 1.3+ odds and a crypto-currency bet, refreshes
 *     every 24h — not parlay-specific) and a "Multi Insurance" feature
 *     (partial stake refund if a 5+ leg multi loses — insurance, not a
 *     boost). No official source confirms a parlay/combo payout-boost
 *     percentage; one review describes a scaling "Multibet price boost"
 *     with specific seasonal numbers that aren't corroborated anywhere else.
 *   Confirm directly on each platform's live bet slip/terms before setting
 *   `verified: true` — the Cloudbet entry is the bar to clear.
 */
export const platforms: Platform[] = [
  {
    slug: "stake",
    name: "Stake",
    tagline: "Deep market coverage, crypto-only cashier",
    affiliateUrl: "https://example.com/go/stake",
    notes:
      "Largest market depth of the four for live parlay legs across major sports. Crypto-only deposits (fiat purchasable in-app via Moonpay). Stake's own Help Centre documents Multi bets as plain odds multiplication with no mention of a leg cap or standing boost — the '25 selections' figure seen elsewhere isn't sourced to Stake itself.",
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
      "BC.Game's own terms page confirms a 'combo boost' feature exists (contradicting one review that claimed there's no parlay bonus at all), but the specific percentage and leg requirements weren't accessible — third-party sites quote mutually contradictory numbers for the boost scale, so none of them should be trusted yet.",
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
      "No standing parlay boost — Cloudbet's own blog confirms parlay payouts are pure multiplication of leg odds, nothing added. Up to 15 legs per parlay. The welcome offer is structured as rakeback and cash drops over 30 days rather than a single deposit match.",
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
      maxParlayLegs: 15,
      parlayBoostPct: 0,
      minOddsPerLeg: null,
      depositBonus:
        "Welcome Package up to ~$2,500 over 30 days via rakeback + daily/weekly cash drops + Cash Vault (day 30) — not a simple deposit match",
      verified: true,
      lastVerified: "2026-06-16",
    },
  },
  {
    slug: "sportsbet-io",
    name: "Sportsbet.io",
    tagline: "Sponsorship-backed, fiat + crypto hybrid",
    affiliateUrl: "https://example.com/go/sportsbet-io",
    notes:
      "Part of Coingaming Group. Its own help center documents a 'Price Boost' (single-bet odds enhancer, not parlay-specific) and a 'Multi Insurance' refund on 5+ leg losing multis, but no official source confirms a parlay/combo payout-boost percentage — don't confuse the two documented features for one.",
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
