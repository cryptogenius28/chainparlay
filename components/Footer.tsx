import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-lg font-semibold text-chalk">
              Chain<span className="text-brass">Parlay</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Independent comparisons of crypto sportsbooks for combo and
              parlay bettors. We track leg limits, boost terms, and payout
              speed so you don&apos;t have to read every operator&apos;s fine
              print.
            </p>
          </div>

          <div>
            <p className="eyebrow">Site</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link className="hover:text-chalk" href="/calculator">
                  Calculator
                </Link>
              </li>
              <li>
                <Link className="hover:text-chalk" href="/boosts">
                  Boost tracker
                </Link>
              </li>
              <li>
                <Link className="hover:text-chalk" href="/compare">
                  Compare books
                </Link>
              </li>
              <li>
                <Link className="hover:text-chalk" href="/#how-it-works">
                  How chain parlays work
                </Link>
              </li>
              <li>
                <Link className="hover:text-chalk" href="/guides">
                  Guides
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Disclosures</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link className="hover:text-chalk" href="/affiliate-disclosure">
                  Affiliate disclosure
                </Link>
              </li>
              <li>
                <Link className="hover:text-chalk" href="/responsible-gambling">
                  Responsible gambling
                </Link>
              </li>
              <li>
                <Link className="hover:text-chalk" href="/privacy">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-hairline pt-6 text-xs text-muted">
          <p>
            ChainParlay is an independent comparison site and earns referral
            commissions from some operators listed. This does not affect our
            rankings. Odds, boosts, and bonus terms change frequently —
            confirm details on the operator&apos;s site before betting.
          </p>
          <p className="mt-2">
            18+ (21+ where required). Gambling can be addictive — please bet
            responsibly and only with funds you can afford to lose.
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} ChainParlay. A Dgenius Co LLC
            property.
          </p>
        </div>
      </div>
    </footer>
  );
}
