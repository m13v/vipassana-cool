import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 10 — Noble Silence Breaks & Metta Bhavana",
  description:
    "Day 10 of Vipassana: Noble Silence breaks, metta (loving-kindness) meditation is introduced, and you reconnect with the people you've been meditating alongside.",
};

export default function Day10Page() {
  return (
    <DayPage day={10} title="Noble Silence Breaks & Metta Bhavana">
      <p>
        Day 10 is the transition day — the bridge between the intense, inward-focused world of the course and the noisy, complex world you&apos;re about to re-enter. It starts with one of the most memorable moments of the entire experience: the silence breaks.
      </p>

      <h2 className="text-xl font-bold text-foreground">Metta Bhavana: Loving-Kindness</h2>
      <p>
        The morning begins with a new practice: Metta Bhavana, or loving-kindness meditation. After nine days of rigorous, objective body scanning, you&apos;re asked to generate feelings of goodwill and compassion — first for yourself, then for all beings.
      </p>
      <p>
        This isn&apos;t just a nice add-on. After days of deep, sometimes difficult inner work, metta serves as a balm. You&apos;ve been observing pain, discomfort, and difficult emotions with equanimity. Now you consciously radiate warmth and kindness. Many people find this surprisingly emotional.
      </p>
      <p>
        The technique is simple: at the end of a body scan, when your mind is calm and concentrated, you wish well for yourself, then expand that wish outward — to the people in the room, the center, the town, the country, the world. May all beings be happy. May all beings be free from suffering.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Silence Breaks</h2>
      <p>
        Around 10 AM, after the morning meditation session, Noble Silence is lifted. The teacher makes an announcement, and suddenly — you can talk.
      </p>
      <p>
        This moment is extraordinary. You&apos;ve been sitting, eating, walking, and living alongside these people for nine days, sharing an incredibly intimate experience, without exchanging a single word. Now voices fill the hall.
      </p>
      <p>
        The first thing you notice: talking feels strange. Your voice sounds different. Words come slowly. After nine days of silence, language feels clunky and inadequate. You want to describe what you&apos;ve experienced, but the words don&apos;t quite capture it.
      </p>
      <p>
        The second thing you notice: every person around you has a story. The guy you&apos;d been sitting next to, who you&apos;d imagined was having a peaceful, easy time? He nearly left on Day 3 and spent Day 6 in tears. The woman who always seemed so composed? She was fighting anxiety the entire course. Everyone was going through their own private battle. This realization — that everyone is fighting a hard fight — stays with you.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Flood of Conversation</h2>
      <p>
        Within minutes, the dining hall transforms. People are laughing, sharing experiences, exchanging contact information. It&apos;s like the first day of school, but with fifty people who&apos;ve just been through something intense together. The energy is joyful and slightly manic.
      </p>
      <p>
        Some people talk nonstop for hours. Others find they prefer small doses of conversation with quiet breaks in between. Listen to what your body and mind need. If the noise feels overwhelming, step outside. You don&apos;t have to participate in every conversation.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Final Meditation Sessions</h2>
      <p>
        There are still meditation sessions on Day 10, and they feel different. The hall has a lighter energy. People are smiling. The practice continues, but with a softer quality. These sessions often integrate metta with body scanning — a combination that will become your daily practice.
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        Goenka&apos;s final discourse summarizes the technique and lays out the path forward. He emphasizes the importance of daily practice — morning and evening — and of taking at least one course per year. He also introduces the concept of &quot;old student&quot; courses and service opportunities. The talk ends with his characteristic chanting, and the course is officially over.
      </p>

      <h2 className="text-xl font-bold text-foreground">Leaving the Center</h2>
      <p>
        On Day 11 (the morning after), you pack your bags, eat breakfast, and leave. Getting your phone back is a shock — the flood of notifications, the brightness of the screen, the pull to check everything immediately. Take it slowly. Some people don&apos;t turn their phones on until they get home.
      </p>
      <p>
        The drive or ride home is surreal. Traffic, billboards, radio chatter — the world feels louder and faster than you remembered. This heightened sensitivity fades over a few days, but it gives you a window into how much stimulation you normally process without noticing.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 10</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Embrace the metta practice. It&apos;s a beautiful complement to the body scanning.</li>
        <li>When the silence breaks, ease into conversation. Don&apos;t overwhelm yourself.</li>
        <li>Exchange contact info with people whose experiences resonated with you. Course friendships can be valuable.</li>
        <li>Plan your first day back carefully. Give yourself a buffer day before returning to work.</li>
        <li>Commit to daily practice before you leave. The course is just the beginning.</li>
      </ul>
    </DayPage>
  );
}
