import type { Metadata } from "next";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { PracticeBuddyClient } from "./client";

export const metadata: Metadata = {
  title: "Practice Buddy — Find an Accountability Partner for Daily Vipassana",
  description:
    "Get matched with a fellow Vipassana meditator for daily practice accountability. Free, tradition-respectful, no gamification — just one human supporting another.",
  alternates: { canonical: "https://vipassana.cool/practice-buddy" },
  openGraph: {
    title: "Practice Buddy — Vipassana Accountability Partners",
    description:
      "Get matched with a fellow Vipassana meditator for daily practice accountability. Free, tradition-respectful, no gamification.",
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Practice Buddy — Vipassana Accountability Partners",
  url: "https://vipassana.cool/practice-buddy",
  description:
    "Get matched with a fellow Vipassana meditator for daily practice accountability. Free, tradition-respectful, no gamification.",
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

export default function PracticeBuddyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Practice Buddy", url: "https://vipassana.cool/practice-buddy" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <PracticeBuddyClient />
      <PageComments pageId="practice-buddy" />
    </>
  );
}
