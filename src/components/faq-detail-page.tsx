import Link from "next/link";
import { PageComments } from "@/components/comments";
import { FaqSchema } from "@/components/faq-schema";

export function FaqDetailPage({
  pageId,
  title,
  description,
  schemaFaqs,
  relatedLinks,
  children,
}: {
  pageId: string;
  title: string;
  description: string;
  schemaFaqs: { question: string; answer: string }[];
  relatedLinks: { href: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <FaqSchema faqs={schemaFaqs} />
      <Link
        href="/faq"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to FAQ
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        FAQ
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mb-12 text-lg text-muted">{description}</p>

      <div className="space-y-8 text-muted">{children}</div>

      {/* Related links */}
      {relatedLinks.length > 0 && (
        <div className="mt-12 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 font-semibold text-foreground">Related</h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <PageComments pageId={pageId} />
    </article>
  );
}
