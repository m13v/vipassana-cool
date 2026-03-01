import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 7 — Finding Flow & the Quiet Mind",
  description:
    "Day 7 of Vipassana: extended periods of concentration, mental quiet, and the body scan becoming second nature.",
};

export default function Day7Page() {
  return (
    <DayPage day={7} title="Finding Flow & the Quiet Mind">
      <p>
        Day 7 often brings something you couldn&apos;t have imagined on Day 2: peace. Not the dramatic, ecstatic kind — a quiet, steady peace that comes from sustained practice. Your mind has become noticeably calmer. The mental chatter hasn&apos;t stopped, but it&apos;s softer, less insistent, easier to let pass.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Scan Becomes Fluid</h2>
      <p>
        By Day 7, the body scan is approaching fluidity. You can move through your entire body in 15-20 minutes with clear awareness of sensations everywhere. Blind spots are rare. The movement of attention becomes smooth rather than jerky — flowing from head to feet like water running downhill.
      </p>
      <p>
        Some sittings will have a quality of effortlessness. The attention moves, sensations are observed, equanimity is maintained — and the hour passes in what feels like twenty minutes. These are the sittings that show you what the practice can be.
      </p>

      <h2 className="text-xl font-bold text-foreground">Mental Quiet</h2>
      <p>
        The most remarkable change by Day 7 is the quality of the mind. For perhaps the first time in your adult life, there are extended periods of genuine mental quiet. Not emptiness — awareness is heightened — but the constant narration, planning, and commenting has significantly diminished.
      </p>
      <p>
        When thoughts do arise, you notice them more quickly. Instead of getting lost in a ten-minute mental tangent before realizing you&apos;ve been distracted, you catch thoughts within seconds. This is the sharpened awareness from seven days of practice.
      </p>
      <p>
        Walking during breaks takes on a different quality. You notice the feel of the ground, the temperature of the air, the sound of birds, with a vividness that borders on surreal. The world hasn&apos;t changed — your perception has.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Oscillation Continues</h2>
      <p>
        Day 7 isn&apos;t uniformly peaceful. There are still difficult sittings — periods of restlessness, pain, or emotional intensity. The difference is how you meet them. What would have triggered panic or despair on Day 3 is now met with something closer to curiosity. &quot;Interesting — a wave of agitation. Let me observe what sensations accompany it.&quot;
      </p>
      <p>
        This shift in perspective is the fruit of the practice. Not that difficulties stop arising, but that your response to them transforms.
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        Goenka discusses metta — loving-kindness — and how Vipassana naturally develops compassion. As you become more aware of your own suffering and the mental patterns that cause it, you develop genuine empathy for others who are caught in the same patterns. This isn&apos;t taught as a separate practice at this stage but described as a natural consequence of the work.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 7</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Don&apos;t get complacent. Peaceful sittings can lead to dullness if you&apos;re not vigilant.</li>
        <li>Maintain the systematic body scan even when free flow makes it tempting to just bask in pleasant sensations.</li>
        <li>Notice the changes in your perception during daily activities — eating, walking, resting.</li>
        <li>Three days left. Stay committed to the practice.</li>
        <li>If you have a difficult sitting after several peaceful ones, don&apos;t be discouraged. Oscillation is normal.</li>
      </ul>
    </DayPage>
  );
}
