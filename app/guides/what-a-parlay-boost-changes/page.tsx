import GuideArticle from "@/components/GuideArticle";

export const metadata = {
  title: "What a parlay boost actually changes | ChainParlay",
  description:
    "Parlay and combo boosts increase your payout, not your true odds of winning — here's how to evaluate one.",
};

export default function Page() {
  return (
    <GuideArticle
      eyebrow="Guide"
      title="What a parlay boost actually changes"
      dek="Boosts apply to your payout, not the odds you're shown — here's the difference."
    >
      <p>
        A parlay boost (sometimes called an &quot;acca boost&quot; or
        &quot;combo boost&quot;) increases the payout on a winning parlay by
        a fixed percentage, usually scaled to how many legs you add. It
        feels like better odds, but it&apos;s a separate layer applied{" "}
        <strong>after</strong> the parlay already wins — it doesn&apos;t
        change your probability of winning at all.
      </p>

      <h2>The mechanic, step by step</h2>
      <p>
        Say a 5-leg parlay has combined decimal odds of 12.00 and you stake
        $20. Without a boost, a win pays $240 total ($220 profit). If the
        book applies a 10% boost for 5+ leg parlays, the profit portion is
        increased by 10%: $220 × 1.10 = $242 profit, for a $262 total
        payout. The boost only touches the profit, and only after every
        single leg has already hit.
      </p>

      <h2>Why this doesn&apos;t fix the math</h2>
      <p>
        Every leg you add to a parlay multiplies your odds but also
        compounds the book&apos;s margin on each individual line. A 10%
        boost on a 5-leg parlay sounds generous, but it&apos;s being applied
        to a bet whose true win probability dropped sharply with each added
        leg. The boost narrows the gap between the parlay&apos;s payout and
        its true odds — it doesn&apos;t close it. Treat a boost as shaving a
        few points off the house edge, not as a path to positive expected
        value on its own.
      </p>

      <h2>Questions worth asking before you rely on one</h2>
      <ul>
        <li>
          <strong>Does it apply to every leg, or only specific markets?</strong>{" "}
          Many boosts exclude same-game parlays, props, or certain sports.
        </li>
        <li>
          <strong>Is there a minimum odds requirement per leg?</strong> A
          boost that only counts legs at 1.50+ pushes you toward riskier
          individual picks to qualify.
        </li>
        <li>
          <strong>Is the boost capped?</strong> Some operators cap the
          maximum bonus payout regardless of stake size.
        </li>
        <li>
          <strong>Is it a standing feature or a limited promo?</strong>{" "}
          Acca/combo boosts are sometimes seasonal — confirm it&apos;s
          currently active before building a parlay around it.
        </li>
      </ul>

      <p>
        Because these terms vary by operator and change often, we keep a
        live{" "}
        <a href="/boosts" className="text-steel hover:text-chalk">
          boost tracker
        </a>{" "}
        rather than baking specific numbers into this guide. One concrete
        example of why that matters: Cloudbet&apos;s own blog states
        outright that parlay payouts there are pure multiplication, with no
        added boost — a useful reminder that &quot;does this book even
        offer a boost&quot; is itself worth checking before &quot;how big
        is it.&quot;
      </p>
    </GuideArticle>
  );
}
