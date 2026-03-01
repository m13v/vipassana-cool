import type { Metadata } from "next";
import { FaqDetailPage } from "@/components/faq-detail-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Expect at a 10-Day Vipassana Course — Complete Overview",
  description:
    "A high-level overview of what actually happens at a 10-day Vipassana course: the daily schedule, technique progression, emotional arc, and what nobody tells you.",
};

export default function WhatToExpectPage() {
  return (
    <FaqDetailPage
      pageId="faq-what-to-expect"
      title="What to Expect at a 10-Day Course"
      description="A practical overview of what happens during 10 days of Vipassana — the schedule, the technique, the emotional arc, and the reality of it."
      schemaFaqs={[
        {
          question: "What happens at a 10-day Vipassana course?",
          answer:
            "You arrive the evening before (Day 0), learn two meditation techniques over 10 days (Anapana for concentration, then Vipassana body scanning), meditate approximately 10 hours per day in noble silence, attend evening discourses by S.N. Goenka, and leave the morning of Day 11. The course progresses from breath observation to full-body scanning to equanimity practice.",
        },
        {
          question: "What is the daily schedule at a Vipassana course?",
          answer:
            "Wake up at 4:00 AM, meditate from 4:30 AM with breaks for breakfast (6:30), lunch (11:00), and tea (5:00 PM). About 10 hours of meditation split between group sittings in the hall and individual practice. Evening discourse from 7:00-8:15 PM. Lights out at 9:30 PM.",
        },
        {
          question: "What does the emotional arc of a Vipassana course feel like?",
          answer:
            "Days 1-3 are typically the hardest — physical pain, mental restlessness, and strong urges to leave. Day 4 introduces the full Vipassana technique and often brings renewed energy. Days 5-7 involve deepening practice with ups and downs. Days 8-9 can bring profound stillness or intense purification. Day 10 breaks the silence and introduces metta (loving-kindness).",
        },
      ]}
      relatedLinks={[
        { href: "/experience/day-1", label: "Day 1: Personal Account" },
        { href: "/prepare", label: "How to Prepare" },
        { href: "/faq/can-i-leave-early", label: "Can I Leave Early?" },
        { href: "/faq/is-vipassana-right-for-me", label: "Is It Right for Me?" },
        { href: "/guide/first-course-tips", label: "First Course Tips" },
      ]}
    >
      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Before You Arrive</h2>
        <p>
          You arrive the evening before the course officially starts (Day 0). You&apos;ll check in, hand over your phone, wallet, reading materials, and anything else that might distract you. You&apos;re assigned a room (usually shared) and a meditation spot in the hall.
        </p>
        <p>
          Noble Silence begins that evening. From this point, you don&apos;t talk to, gesture at, or make eye contact with other students. You can speak with the teacher during question periods and with the course manager for practical needs.
        </p>
        <p>
          The next morning, the course begins in earnest.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Daily Schedule</h2>
        <p>
          Every day follows the same structure:
        </p>
        <div className="mt-4 rounded-lg border border-border bg-card p-4 text-sm">
          <div className="space-y-1">
            <p><strong>4:00 AM</strong> — Wake-up gong</p>
            <p><strong>4:30–6:30</strong> — Meditation (hall or room)</p>
            <p><strong>6:30–8:00</strong> — Breakfast and rest</p>
            <p><strong>8:00–9:00</strong> — Group sitting in the hall (mandatory)</p>
            <p><strong>9:00–11:00</strong> — Meditation (hall or room)</p>
            <p><strong>11:00–1:00 PM</strong> — Lunch and rest</p>
            <p><strong>1:00–2:30</strong> — Meditation (hall or room)</p>
            <p><strong>2:30–3:30</strong> — Group sitting in the hall (mandatory)</p>
            <p><strong>3:30–5:00</strong> — Meditation (hall or room)</p>
            <p><strong>5:00–6:00</strong> — Tea break</p>
            <p><strong>6:00–7:00</strong> — Group sitting in the hall (mandatory)</p>
            <p><strong>7:00–8:15</strong> — Teacher&apos;s Discourse (video)</p>
            <p><strong>8:15–9:00</strong> — Meditation</p>
            <p><strong>9:00–9:30</strong> — Questions with teacher (optional)</p>
            <p><strong>9:30</strong> — Lights out</p>
          </div>
        </div>
        <p className="mt-4">
          Not all meditation time is in the hall. About 3 hours are mandatory group sittings; the rest can be done in your room if you prefer. Many people find it easier to practice in the hall where the environment supports concentration.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Technique Progression</h2>
        <p>
          The course teaches two techniques in sequence, plus a closing practice:
        </p>

        <div className="mt-4 space-y-6">
          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Days 1–3: Anapana (Breath Observation)</h3>
            <p>
              You observe your natural breath at the area below the nostrils and above the upper lip. That&apos;s it. No counting, no controlling, no visualization. Just observing the breath as it is — its temperature, its rhythm, the sensations it creates on the skin.
            </p>
            <p>
              This sounds simple. It&apos;s incredibly difficult. Your mind will wander constantly. The purpose of these three days is to sharpen your concentration enough to practice the actual Vipassana technique. Think of Anapana as calibrating the instrument.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Days 4–9: Vipassana (Body Scanning)</h3>
            <p>
              On Day 4, you&apos;re taught to systematically scan your body from head to feet and back, observing whatever sensations arise — heat, cold, tingling, pressure, pain, vibration, numbness. The key instruction: maintain equanimity. Don&apos;t crave pleasant sensations. Don&apos;t push away unpleasant ones. Just observe.
            </p>
            <p>
              Over these days, your sensitivity increases. You begin to notice subtler sensations. Some days feel like breakthroughs; others feel like regression. Both are normal and part of the process.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Day 10: Metta (Loving-Kindness)</h3>
            <p>
              On the final meditation day, you learn metta bhavana — a practice of generating feelings of goodwill and compassion for all beings. Noble Silence is also lifted on Day 10, and you can talk to other students for the first time in 9 days.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Emotional Arc</h2>
        <p>
          While everyone&apos;s experience is different, there&apos;s a surprisingly common emotional pattern:
        </p>

        <div className="mt-4 space-y-4">
          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Days 1–2: Shock and Adjustment</h3>
            <p>
              The schedule hits hard. Your body hurts, your mind is restless, and you&apos;re questioning your decision. You&apos;re also adjusting to silence, which is disorienting at first.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Day 3: The Crisis Point</h3>
            <p>
              The novelty has worn off but the benefits haven&apos;t arrived. This is when most people want to <Link href="/faq/can-i-leave-early" className="text-accent underline hover:text-foreground">leave</Link>. The mind generates incredibly persuasive arguments for quitting. If you make it through Day 3, you&apos;ll almost certainly finish the course.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Day 4: The Shift</h3>
            <p>
              The actual Vipassana technique is introduced. This brings renewed energy and purpose. The body scan gives you something concrete to work with. Many people describe Day 4 as the turning point of the course.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Days 5–7: Deepening</h3>
            <p>
              The practice deepens. You have good sittings and difficult ones. Emotions may surface — tears, anger, grief, joy, all without obvious trigger. This is normal. The technique is working with material stored deep in the body-mind.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Days 8–9: Intensity or Stillness</h3>
            <p>
              Some people experience profound stillness and clarity. Others face intense emotional purification. Both are valid experiences. The key is equanimity regardless of what arises.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">Day 10: Relief and Connection</h3>
            <p>
              Silence lifts. Talking again is overwhelming — everyone has been through an intense shared experience. There&apos;s laughter, tears, and connection. The metta practice provides a gentle ending. You leave the next morning.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Evening Discourses</h2>
        <p>
          Each evening, you watch a recorded talk by S.N. Goenka. These are often the highlight of the day. Goenka is warm, funny, and surprisingly relatable. He explains the theory behind what you practiced that day, tells stories, and provides context for the technique.
        </p>
        <p>
          The discourses are also remarkably well-timed. On Day 2, when you&apos;re questioning everything, the discourse addresses exactly that doubt. On Day 6, when you&apos;re starting to crave experiences, he talks about equanimity. It&apos;s uncanny.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">What Nobody Tells You</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>The food is actually good.</strong> Vegetarian, simple, but well-prepared. Lunch is the main meal. By Day 3, you stop missing dinner.</li>
          <li><strong>You won&apos;t sleep 9 hours.</strong> Despite the early bedtime, many people struggle with sleep, especially in the first few days. This improves as you settle in.</li>
          <li><strong>The silence becomes liberating.</strong> What seems impossible before the course becomes the best part during it. Not having to perform social niceties is an enormous relief.</li>
          <li><strong>Physical pain is a bigger deal than you expect.</strong> Your back, knees, and hips will hurt. Bring comfortable loose clothing and be willing to use supports.</li>
          <li><strong>Boredom is real.</strong> Without any stimulation, your mind will go to extraordinary lengths to entertain itself. This is actually productive — you&apos;re watching your mind&apos;s habits in real time.</li>
          <li><strong>The experience is different for everyone.</strong> Don&apos;t compare your experience to others&apos; stories. Some people have dramatic experiences; others have quiet, subtle ones. Both are equally valuable.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">How This Differs from the Personal Account</h2>
        <p>
          This page gives you the <em>structural</em> overview. For the <em>emotional</em> reality — what it actually feels like, day by day — read the <Link href="/experience/day-1" className="text-accent underline hover:text-foreground">personal experience account</Link> starting from Day 1. Both perspectives are useful in different ways.
        </p>
      </section>
    </FaqDetailPage>
  );
}
