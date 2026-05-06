import { createNewsletterHandler } from "@seo/components/server";
import { neon } from "@neondatabase/serverless";

const FROM_EMAIL = "Matt from Vipassana <matt@inbound.vipassana.cool>";
const SUBJECT = "Welcome to Vipassana";

export const POST = createNewsletterHandler({
  audienceId: process.env.RESEND_AUDIENCE_ID || "",
  fromEmail: FROM_EMAIL,
  brand: "Vipassana",
  siteUrl: "https://vipassana.cool",
  onSignup: async (email, resendEmailId) => {
    if (!process.env.DATABASE_URL) return;
    try {
      const sql = neon(process.env.DATABASE_URL);
      await sql`
        INSERT INTO vipassana_emails (resend_id, direction, from_email, to_email, subject, status)
        VALUES (${resendEmailId}, 'outbound', ${FROM_EMAIL}, ${email}, ${SUBJECT}, ${resendEmailId ? "sent" : "failed"})
      `;
    } catch (err) {
      console.error("[newsletter] outbound log failed", err);
    }
  },
});
