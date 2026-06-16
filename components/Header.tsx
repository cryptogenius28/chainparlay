import Link from "next/link";

function LinkMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className="text-brass"
    >
      <rect
        x="2"
        y="9"
        width="14"
        height="10"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="12"
        y="9"
        width="14"
        height="10"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
        className="text-steel"
        strokeOpacity="0.9"
      />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="border-b border-hairline">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <LinkMark />
          <span className="font-display text-lg font-semibold tracking-tight text-chalk">
            Chain<span className="text-brass">Parlay</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/calculator"
            className="font-body text-sm text-muted transition hover:text-chalk"
          >
            Calculator
          </Link>
          <Link
            href="/compare"
            className="font-body text-sm text-muted transition hover:text-chalk"
          >
            Compare books
          </Link>
          <Link
            href="/#how-it-works"
            className="font-body text-sm text-muted transition hover:text-chalk"
          >
            How chains work
          </Link>
          <Link
            href="/guides"
            className="font-body text-sm text-muted transition hover:text-chalk"
          >
            Guides
          </Link>
        </nav>

        <Link
          href="/calculator"
          className="rounded-link border border-brass px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-brass transition hover:bg-brass hover:text-ink"
        >
          Build a parlay
        </Link>
      </div>
    </header>
  );
}
