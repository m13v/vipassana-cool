import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 4 — The Technique Changes Everything",
  description:
    "Day 4 is when Vipassana begins. The technique shifts from Anapana to body scanning, and something genuinely shifts. What the transition feels like and why it matters.",
};

export default function Day4Page() {
  return (
    <DayPage day={4} title="The Technique Changes Everything">
      <p>
        Day 4 is the pivot point of the entire course. After three and a half days of Anapana — sharpening your attention by observing the breath — you finally learn the actual Vipassana technique. And it changes everything.
      </p>

      <h2 className="text-xl font-bold text-foreground">From Breath to Body</h2>
      <p>
        The instruction shifts: instead of observing the small area below your nostrils, you begin scanning your entire body, part by part, from head to feet and back again. Start at the top of the head. Move to the forehead. Eyes. Cheeks. Lips. Chin. Neck. Shoulders. Each arm. The torso, front and back. Abdomen. Hips. Each leg, down to the toes. Then back up.
      </p>
      <p>
        The task is to observe sensations — any sensations — in each area as you move through it. Heat, cold, tingling, pressure, pain, itching, pulsing, heaviness, lightness. And to observe them with equanimity: without craving pleasant sensations or developing aversion to unpleasant ones.
      </p>

      <h2 className="text-xl font-bold text-foreground">Adhitthana: Strong Determination</h2>
      <p>
        Day 4 also introduces &quot;adhitthana&quot; — sittings of strong determination. Three times a day (morning, afternoon, and evening), you commit to sitting for the full hour without opening your eyes, moving your hands, or uncrossing your legs. No adjustment, no shifting, no stretching.
      </p>
      <p>
        This sounds masochistic. It isn&apos;t — or at least, that&apos;s not the point. The purpose is to give you a laboratory for equanimity. When your knee is screaming and you choose to observe the sensation instead of reacting, you&apos;re training a fundamental skill: the ability to experience discomfort without automatically reacting.
      </p>
      <p>
        This is the skill that transfers to daily life. Not sitting still for an hour — but the capacity to meet difficulty without immediately reacting.
      </p>

      <h2 className="text-xl font-bold text-foreground">The First Body Scan</h2>
      <p>
        I remember my first real body scan clearly. Moving attention from head to feet, I was amazed at what I could feel. The top of my head was tingling. My left shoulder had a deep, heavy ache. My stomach was warm. My right shin had a strange buzzing sensation I&apos;d never noticed in my entire life.
      </p>
      <p>
        For the first time, I understood what Goenka meant by &quot;the reality of the present moment as it manifests in the body.&quot; We live our entire lives in our heads — in thoughts, plans, memories, fantasies. The body is just a vehicle we ignore. Vipassana turns the lights on.
      </p>

      <h2 className="text-xl font-bold text-foreground">Blind Spots</h2>
      <p>
        Some areas of the body will be &quot;blank&quot; — you move your attention there and feel nothing. This is normal. These are areas where your awareness hasn&apos;t yet developed. The instruction is to stay in that area for a minute, observe whatever is there (even if it feels like nothing), and move on. With practice, these blind spots fill in.
      </p>
      <p>
        Don&apos;t get frustrated by blank areas and don&apos;t get excited by areas with strong sensations. Both reactions are traps. Equanimity means treating every part of the body, every sensation (or lack of sensation), with the same balanced attention.
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        Day 4&apos;s discourse is one of the most important. Goenka explains the theoretical framework behind the technique: how sensations arise and pass away, how our reactions to sensations create mental patterns (sankhara), and how observing without reacting begins to break these patterns. He introduces the concept of anicca — impermanence — which becomes the central theme of the remaining days.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 4</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>The technique change brings new energy. Lean into it.</li>
        <li>During strong determination sittings, focus on observing the pain rather than enduring it. There&apos;s a subtle but important difference.</li>
        <li>Don&apos;t try to create sensations. Observe what&apos;s already there.</li>
        <li>Move through the body systematically — don&apos;t skip areas even if they feel blank.</li>
        <li>This is the day many people go from &quot;this is terrible&quot; to &quot;something is actually happening here.&quot;</li>
      </ul>
    </DayPage>
  );
}
