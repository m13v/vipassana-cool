import { PageComments } from "@/components/comments";
import { FaqSchema } from "@/components/faq-schema";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { TrackedLink } from "@/components/tracked-events";
import { BreadcrumbNav } from "./breadcrumb-nav";

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
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "FAQ", url: "https://vipassana.cool/faq" },
          { name: title, url: `https://vipassana.cool/faq/${pageId.replace(/^faq-/, "")}` },
        ]}
      />
      <FaqSchema faqs={schemaFaqs} />
      <BreadcrumbNav
        items={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
          { label: title },
        ]}
      />
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
              <TrackedLink
                key={link.href}
                href={link.href}
                event="related_link_click"
                properties={{ from: pageId, to: link.href }}
                className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </TrackedLink>
            ))}
          </div>
        </div>
      )}

      <PageComments pageId={pageId} />
    </article>
  );
}
