import GuideArticle from "@/components/GuideArticle";

export const metadata = {
  title: "Decimal vs. American odds, explained | ChainParlay",
  description:
    "How to read odds from any crypto book and convert between decimal and American formats.",
};

export default function Page() {
  return (
    <GuideArticle
      eyebrow="Guide"
      title="Decimal vs. American odds, explained"
      dek="How to read odds from any crypto book and convert between formats in your head."
    >
      <p>
        Most crypto sportsbooks default to decimal odds, while American
        bettors are used to seeing moneyline-style numbers like{" "}
        <strong>+150</strong> or <strong>-200</strong>. Almost every book
        lets you switch formats in a settings menu, but knowing the
        conversion means you can sanity-check a number on sight, without
        waiting for the page to reload.
      </p>

      <h2>What decimal odds actually mean</h2>
      <p>
        A decimal number is your total return per 1 unit staked, including
        your original stake. Odds of <strong>2.00</strong> mean a $10 bet
        returns $20 total — $10 profit plus your $10 back. Odds of{" "}
        <strong>1.50</strong> return $15 total on a $10 stake: $5 profit.
        Anything below 2.00 means the bet is considered more likely than not
        to win; anything above 2.00 means it&apos;s considered an underdog.
      </p>

      <h2>What American odds mean</h2>
      <p>
        American odds are built around a $100 reference bet. A{" "}
        <strong>positive</strong> number like +150 shows how much profit a
        $100 stake would earn — $150 profit, $250 total. A{" "}
        <strong>negative</strong> number like -200 shows how much you&apos;d
        need to stake to profit $100 — $200 to win $100, $300 total.
      </p>

      <h2>Converting between them</h2>
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Formula</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Decimal</td>
            <td>American (favorite, decimal &lt; 2.00)</td>
            <td>-100 / (decimal - 1)</td>
          </tr>
          <tr>
            <td>Decimal</td>
            <td>American (underdog, decimal ≥ 2.00)</td>
            <td>(decimal - 1) × 100</td>
          </tr>
          <tr>
            <td>American (positive)</td>
            <td>Decimal</td>
            <td>(American / 100) + 1</td>
          </tr>
          <tr>
            <td>American (negative)</td>
            <td>Decimal</td>
            <td>(100 / |American|) + 1</td>
          </tr>
        </tbody>
      </table>

      <p>
        Worked example: decimal odds of 1.91 (a typical -110 line). Since
        1.91 is under 2.00, use the favorite formula: -100 / (1.91 - 1) =
        -100 / 0.91 ≈ -110. That matches the standard -110 you&apos;d see
        at most American sportsbooks for a near-even-money line.
      </p>

      <h2>Why this matters for chains</h2>
      <p>
        When you&apos;re stacking legs into a parlay, every leg&apos;s
        decimal odds multiply together directly — there&apos;s no clean way
        to multiply American odds the same way without converting first.
        If you&apos;re comparing the same parlay priced on two different
        crypto books, converting everything to decimal first is the fastest
        way to spot which book is actually offering the better combined
        price.
      </p>
    </GuideArticle>
  );
}
