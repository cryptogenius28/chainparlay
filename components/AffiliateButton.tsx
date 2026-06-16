type AffiliateButtonProps = {
  href: string;
  platformName: string;
  className?: string;
};

export default function AffiliateButton({
  href,
  platformName,
  className = "",
}: AffiliateButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      aria-label={`Visit ${platformName} (opens in a new tab)`}
      className={`inline-flex items-center justify-center rounded-link bg-brass px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-ink transition hover:bg-brass-dim ${className}`}
    >
      Visit {platformName}
    </a>
  );
}
