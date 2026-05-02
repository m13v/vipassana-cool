"use client";

import { SeoPageComments, SeoPageReactions } from "@m13v/seo-components";

const SITE = "vipassana.cool";
const API_ORIGIN =
  process.env.NEXT_PUBLIC_AUTOPOSTER_API || "https://s4l.ai";

export function PageComments({ pageId }: { pageId: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 border-t border-border space-y-8">
      <SeoPageReactions
        site={SITE}
        pageSlug={pageId}
        apiOrigin={API_ORIGIN}
      />
      <SeoPageComments
        site={SITE}
        pageSlug={pageId}
        apiOrigin={API_ORIGIN}
      />
    </section>
  );
}
