# ChainParlay

Crypto sportsbook comparison site focused on parlay/combo bettors. Next.js
14 (App Router) + Tailwind + Supabase + Resend — same stack shape as
Cryptoffiliate.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in Supabase + Resend keys
npm run dev
```

## Project structure

```
app/
  layout.tsx              root layout, fonts, header/footer
  page.tsx                homepage: hero, chain visualization, explainer, top-4 table, guides
  calculator/page.tsx      interactive parlay calculator (flagship tool, see below)
  compare/page.tsx         full comparison (sorted by founding year) + odds-alert signup
  platforms/[slug]/page.tsx individual book review (stable facts + volatile terms split)
  guides/page.tsx           guides index
  guides/decimal-vs-american-odds/page.tsx
  guides/what-a-parlay-boost-changes/page.tsx
  guides/crypto-deposit-speed-by-network/page.tsx
  affiliate-disclosure/    methodology + commission disclosure
  responsible-gambling/    current NCPG helpline info + parlay-specific guidance
  privacy/                 matches actual data flows (Supabase leads, affiliate click attribution)
  api/newsletter/route.ts  odds-alert signup → Supabase + Resend
components/
  Header.tsx, Footer.tsx
  ParlayChain.tsx          illustrative hero visualization (chain of legs → multiplier)
  ParlayCalculator.tsx     interactive client tool — enter legs + per-book odds, compare payouts
  ComparisonTable.tsx       shows stable facts directly; flags unverified volatile terms
  AffiliateButton.tsx       outbound CTA (nofollow sponsored)
  OddsAlertForm.tsx         client-side lead form
  GuideArticle.tsx          shared header/typography shell for guide pages
lib/
  platforms.ts             stable facts are sourced (see in-file SOURCES comment);
                            volatile terms (boost %, leg limits, bonuses) are
                            unverified placeholders — see below
  guides.ts                guide metadata for cross-linking
  supabase.ts              anon + service-role clients
types/
  platform.ts              Platform.stable (sourced) vs Platform.volatile (unverified)
```

## The calculator

`/calculator` is the flagship interactive tool — the thing meant to make
people return to the site rather than read it once and leave. Users enter
each parlay leg once, then the odds each book quotes for that same leg
(loads with a 2-leg demo prefilled so it's never empty on first view).
For each book it computes the combined multiplier and payout, highlights
whichever book pays the most, and — once a platform's `volatile.verified`
is `true` — layers in that book's combo boost on top of the base payout.
Until terms are verified, boosted figures show a flagged "Verify on site"
label instead of a number, consistent with how `ComparisonTable` handles
the same data.

This intentionally doesn't pull live odds from any book (no odds-feed API
is wired up) — it's a side-by-side calculator for odds the user already
has in front of them across tabs, not a live odds aggregator. Worth
revisiting once/if a live odds API is in scope.

## Design tokens

Defined in `tailwind.config.ts` / `app/globals.css`:

| Token    | Hex      | Use                                  |
| -------- | -------- | ------------------------------------ |
| ink      | #0C1210  | page background                      |
| surface  | #16201D  | cards, table header rows             |
| chalk    | #F2EFE6  | primary text                         |
| muted    | #8FA39C  | secondary text                       |
| brass    | #D4A24E  | primary accent, odds, CTAs           |
| steel    | #6FA8AE  | chain-link connectors, secondary CTA |
| win/alert| #7FB88A / #C9694B | sparingly, form feedback   |

Fonts: Bricolage Grotesque (display), Inter (body), IBM Plex Mono (odds,
multipliers, data labels via `.tabular` / `.eyebrow` utility classes).

## Data model: stable vs. volatile

Operator data in `lib/platforms.ts` is split deliberately:

- **`stable`** — founding year, operator entity, license authority/number,
  coins accepted, payout-speed reputation. Sourced from official license
  pages and cross-checked reviews (citations in the file's header
  comment). Safe to publish as-is; recheck every few months.
- **`volatile`** — rating, max parlay legs, combo boost %, min odds per
  leg, deposit bonus. Currently all `null` with `verified: false`. These
  are regulated marketing claims that change often and conflicted across
  sources during research (e.g. whether BC.Game currently runs a standing
  parlay boost at all). `ComparisonTable` and the platform review page
  render `null`/unverified volatile fields as a flagged
  "Verify on site" label rather than guessing a number.

To bring a platform's volatile terms live: check the operator's current
terms page (or affiliate portal), fill in the real numbers, set
`verified: true`, and set `lastVerified` to today's date.

## Before launch — remaining

1. **Verify volatile terms** per platform (see above) — this is the main
   remaining content gap.
2. **Supabase table** for the lead form:
   ```sql
   create table leads (
     id uuid primary key default gen_random_uuid(),
     email text unique not null,
     source text,
     created_at timestamptz default now()
   );
   ```
3. **Affiliate links.** Swap the `example.com/go/...` placeholders in
   `lib/platforms.ts` for real tracked affiliate links.
4. **Legal pages.** `affiliate-disclosure`, `responsible-gambling`, and
   `privacy` now reflect this site's actual methodology and data flows,
   but still need a real contact method and any jurisdiction-specific
   helpline numbers or consent banner copy before launch.
5. **Resend domain.** Verify `chainparlay.com` (or chosen sending domain)
   in Resend before `RESEND_FROM_EMAIL` will deliver.

## Notes

- `ParlayChain` is pure CSS animation (staggered `animation-delay`), respects
  `prefers-reduced-motion`. No client JS needed for the hero.
- Table on `/compare` scrolls horizontally below `md`; consider a stacked
  card layout for mobile once volatile terms are verified and columns are
  finalized.
- Guide articles (`/guides/*`) are intentionally written to explain
  mechanics (odds conversion, boost math, block-time tradeoffs) without
  citing any specific operator's current promo terms, since those are the
  volatile data points called out above.
