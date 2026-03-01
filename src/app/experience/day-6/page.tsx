import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 6 — Deep Sensations & Emotional Waves",
  description:
    "Day 6 of Vipassana: deeper body awareness, emotional releases, and the practice of equanimity through intense sensations.",
};

export default function Day6Page() {
  return (
    <DayPage day={6} title="Deep Sensations & Emotional Waves">
      <p>
        Day 6 is when the practice begins to reach deeper layers. The surface-level body scan you started on Day 4 has been refined enough that you&apos;re now picking up subtler sensations, and some of what surfaces is unexpected.
      </p>

      <h2 className="text-xl font-bold text-foreground">Going Deeper</h2>
      <p>
        The instructions evolve: instead of scanning only the surface of the body, you&apos;re encouraged to feel sensations inside — the internal organs, the spine, the joints. This isn&apos;t imagination or visualization. With enough concentration, you genuinely start to feel internal sensations you&apos;ve never noticed: your heartbeat in your chest, a subtle vibration in your abdomen, the temperature inside your hands.
      </p>
      <p>
        For some people, the body starts to feel less solid. This isn&apos;t a hallucination — it&apos;s your awareness becoming fine enough to notice that what feels like a solid mass is actually a field of constantly changing sensations. This is the experiential understanding of what physicists have long known: at a subtle level, everything is in motion.
      </p>

      <h2 className="text-xl font-bold text-foreground">Emotional Waves</h2>
      <p>
        Day 6 is often when the deepest emotional material surfaces. The practice has broken through surface-level mental patterns, and what lies beneath can be intense. Waves of grief, anger, or fear may arise during sitting without any apparent trigger.
      </p>
      <p>
        During my second course, Day 6 was the day I suddenly understood — viscerally, not intellectually — a relationship pattern that had caused me problems for years. There was no dramatic revelation, no voice from above. Just a clear, quiet understanding that arose from observing sensations. That&apos;s how Vipassana insight works: not through thinking, but through observing.
      </p>
      <p>
        If intense emotions arise, the practice remains the same: observe the sensations in the body that accompany the emotion, maintain equanimity, and let them pass. They always pass.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Equanimity Challenge</h2>
      <p>
        By Day 6, you understand intellectually that equanimity means not reacting with craving or aversion. But the real test comes when you have a deeply pleasant or deeply unpleasant experience during meditation. A beautiful flow of sensations — and you want more. A sharp, searing pain — and you want it to stop.
      </p>
      <p>
        The practice isn&apos;t about suppressing these reactions. It&apos;s about observing them. You notice the craving or aversion arise, you observe it as another sensation, and you continue your body scan. Over time, the reactions weaken — not through willpower, but through understanding.
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        Goenka talks about the law of impermanence — anicca — and how understanding this at an experiential level (not just intellectually) is transformative. He tells a story about a king who commissioned a ring engraved with the phrase &quot;This too shall pass.&quot; The purpose: to remind himself of impermanence during both good times and bad.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 6</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Trust the process. The deeper the practice goes, the more unexpected things may surface.</li>
        <li>Don&apos;t analyze what comes up. Observe the sensations, not the stories.</li>
        <li>If you cry during meditation, let it happen. It&apos;s a release, not a breakdown.</li>
        <li>Strong determination sittings are getting easier. Notice how your capacity for stillness has grown.</li>
        <li>You&apos;re more than halfway through. The hardest part is far behind you.</li>
      </ul>
    </DayPage>
  );
}
