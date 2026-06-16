import Link from "next/link";

type GuideArticleProps = {
  eyebrow: string;
  title: string;
  dek: string;
  children: React.ReactNode;
};

export default function GuideArticle({
  eyebrow,
  title,
  dek,
  children,
}: GuideArticleProps) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link
        href="/guides"
        className="font-mono text-xs uppercase tracking-widest2 text-steel hover:text-chalk"
      >
        ← All guides
      </Link>
      <p className="eyebrow mt-6">{eyebrow}</p>
      <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-chalk md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base text-muted">{dek}</p>

      <div className="mt-10 space-y-6 text-[0.95rem] leading-relaxed text-chalk [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-chalk [&_p]:text-muted [&_li]:text-muted [&_strong]:text-chalk [&_table]:w-full [&_table]:border-collapse [&_th]:eyebrow [&_th]:border-b [&_th]:border-hairline [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_td]:border-b [&_td]:border-hairline [&_td]:px-3 [&_td]:py-2 [&_td]:tabular">
        {children}
      </div>
    </article>
  );
}
