import type { Metadata } from "next";
import { DayPage } from "@/components/day-page";

export const metadata: Metadata = {
  title: "Vipassana Day 2 — Knee Pain, Restlessness & the Monkey Mind",
  description:
    "Day 2 of Vipassana is often the hardest. Knee pain, back pain, mental restlessness, and the overwhelming urge to reach for your phone. Here's what to expect.",
};

export default function Day2Page() {
  return (
    <DayPage day={2} title="Knee Pain, Restlessness & the Monkey Mind">
      <p>
        If Day 1 was a polite introduction, Day 2 is reality setting in. Your body hurts. Your mind won&apos;t cooperate. The novelty has worn off and you have eight more days of this. For many people — myself included — Day 2 is the first serious test.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Pain Gets Real</h2>
      <p>
        By the morning session, yesterday&apos;s mild discomfort has escalated. Knees, ankles, lower back, shoulders — everything that was slightly sore is now demanding attention. You spend more time adjusting your position than actually meditating.
      </p>
      <p>
        This is normal. Your body has never been asked to sit this way for this many hours. The key insight from Goenka&apos;s instructions: don&apos;t develop aversion to the pain. Observe it. Notice that it&apos;s not one solid block of pain — it&apos;s a collection of sensations that change moment to moment. Sometimes it throbs, sometimes it burns, sometimes it pins.
      </p>
      <p>
        That said, there&apos;s a difference between meditation-related discomfort and injuring yourself. If something feels genuinely wrong — sharp, shooting pain or numbness — change your position. Ask the manager for a different cushion arrangement or a chair.
      </p>

      <h2 className="text-xl font-bold text-foreground">Mental Restlessness</h2>
      <p>
        The mind on Day 2 is desperate for stimulation. I&apos;ve watched my own mind do extraordinary things to avoid observing the breath: replaying entire movies scene by scene, redesigning my apartment, planning elaborate meals, rehearsing conversations that will never happen.
      </p>
      <p>
        The urge for your phone is almost physical. Your hand literally reaches toward your pocket out of habit. You find yourself craving information — any information. What time is it? What&apos;s happening in the world? Has anyone emailed me? This craving is itself a useful observation. How dependent have you become on constant stimulation?
      </p>

      <h2 className="text-xl font-bold text-foreground">Narrowing the Focus</h2>
      <p>
        On Day 2, the Anapana instructions get more specific. Instead of observing the breath anywhere, you&apos;re asked to narrow your attention to the small triangular area below the nostrils and above the upper lip. This is harder — the smaller the area of focus, the sharper your concentration needs to be.
      </p>
      <p>
        You might notice faint sensations in this area: tingling, warmth, the touch of air as you breathe. These are good signs. They mean your awareness is becoming more refined. If you don&apos;t feel much yet, don&apos;t worry — keep practicing. The sensitivity develops at different rates for different people.
      </p>

      <h2 className="text-xl font-bold text-foreground">The Hunger</h2>
      <p>
        No dinner. Just fruit and tea at 5 PM. By the evening session, your stomach is growling. This is one of those things that sounds minor beforehand but feels significant in the moment. The hunger usually subsides after Day 2 or 3 as your body adjusts.
      </p>
      <p>
        Make sure to eat well at breakfast and lunch. Load up on protein and complex carbs. And drink plenty of water — dehydration makes the pain and fatigue worse.
      </p>

      <h2 className="text-xl font-bold text-foreground">Evening Discourse</h2>
      <p>
        Goenka&apos;s Day 2 discourse addresses exactly what you&apos;re going through. He talks about the &quot;monkey mind&quot; and how the first step is simply noticing how undisciplined our attention really is. He tells a funny story about a patient and a doctor. The talks are remarkably well-timed — each evening he seems to address exactly what you experienced that day.
      </p>

      <h2 className="text-xl font-bold text-foreground">Tips for Day 2</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Accept that this is the hardest phase. It genuinely gets easier after Day 3-4.</li>
        <li>Stretch during every break. Focus on hip openers and gentle back bends.</li>
        <li>If knee pain is severe, ask for a bench or chair. There&apos;s no shame in this.</li>
        <li>Don&apos;t count the days. Focus on this session, this hour, this breath.</li>
        <li>Remember your commitment. You decided to stay 10 days. Trust that decision.</li>
      </ul>
    </DayPage>
  );
}
