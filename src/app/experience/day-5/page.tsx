import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 5 — Settling Into the Practice",
  description:
    "Day 5 of Vipassana: the body scanning deepens, pain becomes workable, and you find your rhythm. What the middle of the course feels like.",
};

export default function Day5Page() {
  return (
    <DayPage day={5} title="Settling Into the Practice">
      <p>
        Day 5 is when the course shifts from survival to exploration. The crisis of Days 2-3 is behind you, the excitement of learning Vipassana on Day 4 has settled into something steadier, and you begin to find your rhythm. The schedule that felt punishing a few days ago now feels almost natural.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Body Scan Deepens</h2>
      <p>
        By Day 5, the body scan becomes smoother. You can move through your entire body in 30-40 minutes where yesterday it took the full hour. Blind spots start to fill in — areas that were numb or blank yesterday now have faint sensations. Your awareness is becoming more refined.
      </p>
      <p>
        You might start to experience what meditators call &quot;free flow&quot; — moments where sensations seem to ripple or flow through large areas of the body. Your arms might feel like they&apos;re vibrating. Your torso might feel warm and light. These experiences can be pleasant, even blissful.
      </p>
      <p>
        This is where the equanimity practice becomes crucial. The temptation is to chase these pleasant experiences — to try to recreate them, to hold onto them. But the instruction is clear: observe with equanimity. Pleasant or unpleasant, all sensations arise and pass away. Clinging to pleasant sensations is just as much a trap as reacting to unpleasant ones.
      </p>

      <h2 className="text-xl font-bold text-foreground">Pain Becomes Workable</h2>
      <p>
        Something interesting happens with physical pain by Day 5: it doesn&apos;t disappear, but your relationship to it changes. You can sit with discomfort that would have been unbearable on Day 2. Not because you&apos;re tougher — because you&apos;ve learned to observe pain as a collection of sensations rather than fighting it as a monolithic enemy.
      </p>
      <p>
        During strong determination sittings, you begin to notice that pain isn&apos;t constant. It intensifies and fades in waves. Sometimes it shifts location. Sometimes it transforms — what felt like burning becomes tingling, then pressure, then disappears entirely. Observing this teaches you something profound about the nature of suffering: much of it is our reaction to the sensation, not the sensation itself.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Rhythm of the Day</h2>
      <p>
        By now you&apos;ve internalized the schedule. The 4 AM gong doesn&apos;t shock you anymore — your body wakes up on its own. You know which cushion arrangement works, which spot in the dining hall you prefer, which walking path you like during breaks. There&apos;s a strange comfort in this extreme simplicity.
      </p>
      <p>
        Meals taste better than they have any right to. When your world shrinks to this degree — no screens, no conversations, no choices beyond what to wear — the simple act of eating becomes vivid. You notice textures and flavors you&apos;d normally miss entirely.
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        Goenka delves deeper into the theory of sankhara — the mental formations or patterns that Vipassana is designed to address. He explains how every sensation you observe without reacting weakens an old reactive pattern. The metaphor he uses is compelling: you&apos;re cleaning out the closet of the mind, and some of what comes out has been stored for a very long time.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 5</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Don&apos;t chase pleasant sensations. Equanimity toward pleasure is just as important as equanimity toward pain.</li>
        <li>If you&apos;re experiencing &quot;free flow,&quot; enjoy it without attachment. It will pass.</li>
        <li>You&apos;re past the midpoint. The practice deepens from here.</li>
        <li>Use the rest periods wisely. A short nap after lunch can sustain your afternoon energy.</li>
        <li>Notice how the silence feels natural now. What once seemed impossible has become comfortable.</li>
      </ul>
    </DayPage>
  );
}
