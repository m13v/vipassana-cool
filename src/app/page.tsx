import type { Metadata } from "next";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { PracticeBuddyClient } from "./practice-buddy/client";

export const metadata: Metadata = {
  title: "Sit Every Morning With Another Vipassana Meditator | Vipassana.cool",
  description:
    "Get matched with a fellow old student in your time zone and sit together every day over Google Meet. Free, silent, tradition-respectful. For students of S.N. Goenka 10-day courses.",
  alternates: { canonical: "https://vipassana.cool" },
  openGraph: {
    title: "Sit Every Morning With Another Vipassana Meditator",
    description:
      "Get matched with a fellow old student in your time zone and sit together every day over Google Meet. Free, silent, tradition-respectful.",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Practice Buddy — Vipassana Accountability Partners",
  url: "https://vipassana.cool",
  description:
    "Get matched with a fellow Vipassana meditator for daily practice accountability over Google Meet. Free, tradition-respectful, no gamification.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Person",
    name: "Matthew Diakonov",
    url: "https://m13v.com",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <PracticeBuddyClient />
      <PageComments pageId="home" />
    </>
  );
}
