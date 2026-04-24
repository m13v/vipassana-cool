import { createBookCallHandler } from "@seo/components/server";

export const POST = createBookCallHandler({
  site: "vipassana",
  // Same audience as /api/newsletter — one Resend audience per client.
  audienceId: process.env.RESEND_AUDIENCE_ID || "",
  fromEmail: "Matt from Vipassana <matt@vipassana.cool>",
  brand: "Vipassana",
  siteUrl: "https://vipassana.cool",
  redirectBaseUrl: "https://vipassana.cool/go/book",
});
