export type Platform = {
  slug: string;
  name: string;
  tagline: string;
  affiliateUrl: string;
  notes: string;

  /**
   * STABLE FACTS — founding, ownership, licensing, coins supported.
   * These change rarely (months/years) and are sourced from official
   * license pages and cross-checked review sites. See SOURCES in
   * lib/platforms.ts for citations.
   */
  stable: {
    foundedYear: number;
    operatorEntity: string;
    licenseAuthority: string;
    licenseNumber: string;
    coinsAccepted: string[];
    payoutSpeedReputation: string; // qualitative, sourced description
  };

  /**
   * VOLATILE TERMS — exact numbers that operators change frequently
   * and that vary by region/promo cycle (boost %, leg limits, bonus
   * terms, internal rating). DO NOT trust these until `verified` is
   * true and `lastVerified` is set — confirm against the operator's
   * live terms page first.
   */
  volatile: {
    rating: number | null; // 0-5, one decimal
    maxParlayLegs: number | null;
    parlayBoostPct: number | null; // combo/parlay boost, %
    minOddsPerLeg: number | null; // decimal odds
    depositBonus: string | null;
    verified: boolean;
    lastVerified: string | null; // ISO date
  };
};

export type ChainLeg = {
  label: string;
  odds: number; // decimal odds for this leg
};
