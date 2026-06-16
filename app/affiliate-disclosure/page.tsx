export const metadata = {
  title: "Affiliate disclosure | ChainParlay",
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <p className="eyebrow">Disclosure</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk">
        Affiliate disclosure
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          ChainParlay earns referral commissions when readers sign up with
          some of the operators listed on this site, at no extra cost to
          you. These commissions help cover the cost of researching and
          maintaining our comparisons. Commission arrangements do not
          determine our rankings or which book appears first.
        </p>
        <p>
          Every operator profile on this site separates two kinds of
          information. Founding date, operating entity, license number,
          and supported coins are sourced from official license pages and
          cross-checked against multiple independent reviews, with a
          citation trail we keep on file. Combo boost percentages, leg
          limits, minimum odds requirements, and deposit bonuses change
          often and are treated as unverified until we&apos;ve checked them
          against the operator&apos;s live terms page — any figure not yet
          confirmed is marked &quot;Verify on site&quot; rather than
          presented as fact.
        </p>
        <p>
          We recheck verified terms periodically, since boost and bonus
          terms in this industry change more often than most. If you spot
          a figure that&apos;s gone stale, we&apos;d rather hear about it
          than have it sit wrong.
        </p>
      </div>
    </section>
  );
}
