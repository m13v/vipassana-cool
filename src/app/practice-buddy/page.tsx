import type { Metadata } from "next";
import { PageComments } from "@/components/comments";
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

export default function PracticeBuddyPage() {
  return (
    <>
      <PracticeBuddyClient />
      <PageComments pageId="practice-buddy" />
    </>
  );
}
