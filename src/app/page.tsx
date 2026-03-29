import type { Metadata } from "next";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { PracticeBuddyClient } from "./practice-buddy/client";

export const metadata: Metadata = {
  title: "Vipassana.cool — Find a Daily Meditation Practice Buddy",
  description:
    "Get matched with a fellow Vipassana meditator for daily practice over Google Meet. Free, tradition-respectful, and based on real accountability — not an app.",
  alternates: { canonical: "https://vipassana.cool" },
  openGraph: {
    title: "Vipassana.cool — Find a Daily Meditation Practice Buddy",
    description:
      "Get matched with a fellow Vipassana meditator for daily practice over Google Meet. Free, tradition-respectful accountability.",
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
