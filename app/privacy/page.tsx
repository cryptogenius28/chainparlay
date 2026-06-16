export const metadata = {
  title: "Privacy policy | ChainParlay",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk">
        Privacy policy
      </h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
        <p>
          ChainParlay collects one piece of personal information directly:
          the email address you submit through the odds-alert signup form
          on the comparison page. That address is stored so we can send
          you the alert emails you signed up for, and is not sold or
          shared with the sportsbooks listed on this site.
        </p>
        <p>
          When you click through to an operator&apos;s site from one of
          our &quot;Visit&quot; buttons, that click may be recorded for
          affiliate attribution — which operator, which page, and when —
          without collecting any personal information beyond what&apos;s
          already in our systems via the alert form.
        </p>
        <p>
          We don&apos;t control what happens after you leave our site.
          Each operator has its own privacy policy and KYC requirements
          once you create an account with them — review those separately
          before signing up.
        </p>
        <p>
          To request your data be removed from our odds-alert list,
          unsubscribe via the link in any alert email, or contact us
          directly. (Add a specific contact address/method here before
          this page goes live, along with any cookie-consent banner
          copy your jurisdiction requires.)
        </p>
      </div>
    </section>
  );
}
