import type { Metadata } from "next";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { PracticeBuddyClient } from "./practice-buddy/client";

export const metadata: Metadata = {
  title: "Sit Every Morning With the Same Vipassana Buddy | Vipassana.cool",
  description:
    "Get matched 1-on-1 with the same fellow old student in your time zone and sit together at the same time every day over Google Meet. Not a group sit, not an app, no streaks. Free, silent, tradition-respectful. For students of S.N. Goenka 10-day courses.",
  alternates: { canonical: "https://vipassana.cool" },
  openGraph: {
    title: "Sit Every Morning With the Same Vipassana Buddy",
    description:
      "Matched 1-on-1 with a fellow old student in your time zone. Same person, same time, same Google Meet link, every day. Free, silent, tradition-respectful.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What if my buddy stops showing up or goes quiet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send us a note and we will re-match you. Your Google Meet link stays the same; only the person on the other side changes. If two people stop showing up, we hold the next pairing until someone with similar consistency lands in your time band.",
      },
    },
    {
      "@type": "Question",
      name: "How long until I get matched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually within a few days, sometimes the same day if there is already someone in your morning hour. We do not auto-pair just to clear the queue. If your time zone or sit hour is sparse, we will tell you and you stay on the waitlist (free) until a real fit appears.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to talk during the sit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Most pairs join the Meet, exchange a brief good morning, mute, play their preferred Goenka recording on their own device, and sit in silence together. Camera optional. Many pairs leave the Meet running with cameras off and never speak.",
      },
    },
    {
      "@type": "Question",
      name: "Is this run by a Vipassana center or an assistant teacher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This is a peer project built by an old student. We do not teach the technique, prescribe a schedule, or interpret instructions. For anything operational about your practice, refer to dhamma.org or speak with an authorized assistant teacher at a 10-day course.",
      },
    },
    {
      "@type": "Question",
      name: "What about my privacy? I see names on the waitlist.",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Names and emails on the public waitlist are masked. Only your matched buddy receives your real first name and time zone, sent in a single intro email. No public profile, no leaderboard, no retargeting.",
      },
    },
    {
      "@type": "Question",
      name: "What if I take a break, travel, or my schedule shifts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tell your buddy and email us. Pauses are normal: courses, work travel, illness, family. You can come back to the same Meet link, or get re-paired if your hour shifts permanently. There are no streaks to break, because we do not use streaks.",
      },
    },
    {
      "@type": "Question",
      name: "Is it really free? What is the catch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Free forever, in the spirit of Dana. No subscription, no premium tier, no upsell, no paid course recommendations. Operating costs are covered by the founder; if a donation page ever appears it will be optional and matching will stay free.",
      },
    },
    {
      "@type": "Question",
      name: "I have not sat a 10-day course yet, can I still apply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Practice Buddy matching is reserved for old students of S.N. Goenka 10-day courses, because it relies on shared technique and shared retreat experience. If you have not sat one yet, the right next step is to apply for a course at dhamma.org and come back once you have completed it.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PracticeBuddyClient />
      <PageComments pageId="home" />
    </>
  );
}
