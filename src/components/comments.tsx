"use client";

import { Comments } from "@hyvor/hyvor-talk-react";

const WEBSITE_ID = 14989;

export function PageComments({ pageId }: { pageId: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-12 border-t border-border">
      <h2 className="mb-6 text-xl font-bold">Comments</h2>
      <Comments website-id={WEBSITE_ID} page-id={pageId} />
    </section>
  );
}
