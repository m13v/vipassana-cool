import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 8 — Deepening Equanimity & Subtle Sensations",
  description:
    "Day 8 of Vipassana: the practice deepens, subtle sensations become accessible, and equanimity is tested at new levels.",
};

export default function Day8Page() {
  return (
    <DayPage day={8} title="Deepening Equanimity & Subtle Sensations">
      <p>
        Day 8 is a deepening. Not a dramatic shift like Day 4, not a crisis like Day 3 — a quiet intensification of everything you&apos;ve been developing. Your concentration is sharper, your body awareness is more refined, and the practice of equanimity faces increasingly subtle tests.
      </p>

      <h2 className="text-xl font-bold text-foreground">Subtle Sensations</h2>
      <p>
        The body scan now picks up sensations you couldn&apos;t have imagined feeling on Day 1. The subtle vibration of your fingertips. A wave of warmth that passes through your abdomen. The faintest tingling at the top of your skull. Your awareness has become a precision instrument.
      </p>
      <p>
        The technique on Day 8 may include scanning multiple body parts simultaneously or sweeping attention through the body more rapidly. The instructions vary by course, but the principle remains: systematic, equanimous observation of whatever arises.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Equanimity Refinement</h2>
      <p>
        At this stage, the gross forms of craving and aversion are relatively manageable. You&apos;re no longer desperately wanting the pain to stop or clinging to pleasant experiences. But subtler forms emerge.
      </p>
      <p>
        You might notice a very faint preference for scanning certain areas of the body where sensations are clearer. Or a slight impatience when moving through areas that remain dull. Or a subtle pride in how well your concentration has developed. These are the refined forms of craving and aversion — harder to spot, but important to observe.
      </p>
      <p>
        This is why the technique emphasizes impermanence (anicca). Every sensation, no matter how pleasant or unpleasant, subtle or gross, is arising and passing away. The moment you understand this — not intellectually, but through direct observation — clinging and aversion naturally weaken.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Afternoon Insight</h2>
      <p>
        Day 8 afternoons sometimes bring what meditators call &quot;insight&quot; — not a mystical vision, but a clear, direct understanding of some aspect of your mental life. You might suddenly see a habitual pattern of thinking with total clarity. Or you might understand, at a gut level, why a particular relationship dynamic keeps repeating.
      </p>
      <p>
        These insights arise not from thinking but from the depth of equanimous observation. They don&apos;t need to be dramatic to be valuable. Sometimes the most useful insight is simply: &quot;I now understand how much energy I spend resisting what is.&quot;
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        Goenka discusses the application of Vipassana to daily life — how the equanimity developed in meditation translates to relationships, work, and life challenges. He emphasizes that Vipassana is not a retreat from the world but a preparation for engaging with it more skillfully. Two days from now, you&apos;ll return to your life. The practice you take with you matters more than anything that happens on the cushion.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 8</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Watch for subtle craving and aversion. They&apos;re sneakier than the gross versions.</li>
        <li>Maintain the systematic approach. Don&apos;t skip areas or rush through them.</li>
        <li>Two days left. Don&apos;t coast — this is the time to deepen, not relax.</li>
        <li>Notice how your capacity for equanimity has grown since Day 1.</li>
        <li>Start thinking (during breaks, not meditation) about how to maintain daily practice at home.</li>
      </ul>
    </DayPage>
  );
}
