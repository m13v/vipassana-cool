import { createGuideChatHandler } from "@seo/components/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const POST = createGuideChatHandler({
  app: "vipassana",
  brand: "Vipassana.cool",
  siteDescription:
    "Vipassana.cool is an unofficial guide to S.N. Goenka Vipassana meditation and dhamma.org 10-day courses. It also matches meditators with daily-practice buddies for accountability over Google Meet.",
  contentDir: "src/app/t",
});
