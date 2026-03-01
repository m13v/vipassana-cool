import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 1 — Arrival, Anapana & the First Sit",
  description:
    "What happens on day 1 of a Vipassana course: arrival, orientation, your first Anapana meditation session, and how to survive the initial hours of silence.",
};

export default function Day1Page() {
  return (
    <DayPage day={1} title="Arrival, Anapana & the First Sit">
      <p>
        Day 1 technically starts the evening before. You arrive at the center between 2 and 5 PM on &quot;Day 0,&quot; register, get assigned a room, and hand over your phone, books, and any writing materials. That evening, Noble Silence begins. The last conversation you have is probably with a stranger in the dining hall — then nothing for nine days.
      </p>

      <h2 className="text-xl font-bold text-foreground">The First Morning</h2>
      <p>
        The gong sounds at 4:00 AM. It&apos;s still dark. You stumble to the meditation hall with fifty other half-awake people and sit down on a cushion. The assistant teacher presses play on a recording, and S.N. Goenka&apos;s voice fills the hall.
      </p>
      <p>
        The instruction is simple: observe your breath. Not control it, not breathe deeply, not visualize anything. Just observe the natural breath as it flows in and out of the nostrils. This is Anapana — the technique you&apos;ll practice for the first three and a half days.
      </p>

      <h2 className="text-xl font-bold text-foreground">What Anapana Actually Feels Like</h2>
      <p>
        It sounds easy. It isn&apos;t. Within two minutes, your mind has replayed a conversation from three years ago, planned your grocery list, composed an email, and started writing a novel. You notice you&apos;ve been distracted, bring your attention back to the breath, and within seconds you&apos;re gone again.
      </p>
      <p>
        This is completely normal. The point isn&apos;t to have a perfectly concentrated mind on Day 1 — it&apos;s to begin the process of sharpening your attention. Every time you notice you&apos;ve wandered and bring your attention back, that&apos;s one rep. You&apos;ll do thousands of these reps over the next ten days.
      </p>

      <h2 className="text-xl font-bold text-foreground">Physical Challenges</h2>
      <p>
        Your body is not used to sitting for this long. By the afternoon session, your knees ache, your back is stiff, and you&apos;re constantly shifting position. The meditation hall has cushions, benches, and back supports available — use them. There&apos;s no prize for suffering through pain you could easily address with a different cushion arrangement.
      </p>
      <p>
        One thing that helped me: during breaks, do gentle stretches. Hip openers, gentle twists, walking. Your body will adapt over the next few days, but Day 1 is the steepest learning curve physically.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Silence</h2>
      <p>
        The silence is strange at first. You eat breakfast across from someone and don&apos;t make eye contact. You walk past people on the path and don&apos;t acknowledge them. Every social instinct says this is wrong.
      </p>
      <p>
        But by the end of Day 1, you start to feel the first hints of relief. No small talk, no social performance, no need to be interesting or interested. You just exist. For many people — especially extroverts — this is the first time they&apos;ve ever experienced this.
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        At 7 PM, everyone gathers to watch a recorded video discourse by S.N. Goenka. These nightly talks become the highlight of each day. Goenka is warm, humorous, and surprisingly relatable. On Day 1, he explains the technique, the rules, and why they exist. He acknowledges that the whole thing probably seems a bit mad.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 1</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Don&apos;t fight the mental chatter. Just keep gently returning to the breath.</li>
        <li>Experiment with your sitting position early. Find what works before your body gets sore.</li>
        <li>Eat a solid breakfast and lunch — there&apos;s no dinner, only fruit and tea at 5 PM.</li>
        <li>Use the breaks to walk and stretch. Don&apos;t spend them lying in bed.</li>
        <li>Remember: everyone around you is going through the same thing. You&apos;re not uniquely struggling.</li>
      </ul>
    </DayPage>
  );
}
