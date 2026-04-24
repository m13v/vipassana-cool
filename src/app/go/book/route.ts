import { createBookCallRedirectHandler } from "@seo/components/server";

export const GET = createBookCallRedirectHandler({
  site: "vipassana",
  fallbackBookingUrl: "https://cal.com/team/mediar/vipassana",
});
