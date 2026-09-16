import type { Metadata } from "next";
import { TimerClient } from "./timer-client";

const PAGE_URL = "https://vipassana.cool/timer";

export const metadata: Metadata = {
  title: "Meditation Timer",
  description:
    "A free, distraction-free meditation timer for a daily Vipassana sit. Pick your duration, choose a gong or chant to open and close, add metta, and see the whole session as one timer.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Meditation Timer | Vipassana.cool",
    description:
      "A free, distraction-free meditation timer for a daily Vipassana sit. Gong or chant markers, optional metta, one continuous session timer.",
    url: PAGE_URL,
    siteName: "Vipassana.cool",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function TimerPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Meditation Timer
        </h1>
        <p className="mt-2 text-muted">
          One continuous timer for your daily sit. Set the length, choose how it
          opens and closes, and the opening, meditation, closing, and metta
          segments all run inside the same session clock.
        </p>
      </header>
      <TimerClient />
    </div>
  );
}
