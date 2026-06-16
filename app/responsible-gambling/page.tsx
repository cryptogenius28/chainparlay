export const metadata = {
  title: "Responsible gambling | ChainParlay",
};

export default function ResponsibleGamblingPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <p className="eyebrow">Responsible gambling</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk">
        Bet within your limits
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          Parlays and combo bets carry higher variance than single bets —
          every leg has to win, and one loss returns nothing on the full
          stake. A 5-leg parlay at even odds on each leg has roughly a 3%
          chance of hitting. Treat the multiplier on any chain as a
          long-shot payout, not an expected outcome, no matter how
          confident each individual leg feels.
        </p>
        <p>
          A combo or parlay boost (where offered) only increases your
          payout after every leg has already won — it doesn&apos;t improve
          your odds of getting there. See our{" "}
          <a
            href="/guides/what-a-parlay-boost-changes"
            className="text-steel hover:text-chalk"
          >
            guide to parlay boosts
          </a>{" "}
          for more on how that math works.
        </p>
        <p>
          Only wager what you can afford to lose. Set a budget before you
          start, and avoid chasing losses by adding legs or stake to a
          parlay that&apos;s already in progress.
        </p>
        <p>
          If gambling stops being fun, or you&apos;re finding it hard to
          stop, free and confidential support is available 24/7:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            National Problem Gambling Helpline (US): call or text{" "}
            <strong className="text-chalk">1-800-MY-RESET</strong>, or the
            longstanding <strong className="text-chalk">1-800-522-4700</strong>{" "}
            line, both still active.
          </li>
          <li>BeGambleAware (UK): begambleaware.org</li>
          <li>GamCare (UK): gamcare.org.uk</li>
        </ul>
        <p>
          If ChainParlay targets jurisdictions beyond the US and UK, add
          the relevant local helpline (e.g. ConnexOntario in Ontario, or
          the equivalent body for any EU market served) before this page
          goes live, and confirm what each operator&apos;s own license
          requires you to disclose.
        </p>
      </div>
    </section>
  );
}
