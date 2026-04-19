import { createNewsletterHandler } from "@seo/components/server";

export const POST = createNewsletterHandler({
  audienceId: process.env.RESEND_AUDIENCE_ID || "",
  fromEmail: "Matt from Vipassana <matt@vipassana.cool>",
  brand: "Vipassana",
  siteUrl: "https://vipassana.cool",
});
