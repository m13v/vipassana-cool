import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "First Vipassana Course: 15 Things I Wish I Knew — Practical Tips",
  description:
    "15 practical tips for your first 10-day Vipassana course: handling Days 2-4, pain management, mental strategies, what to bring, and what nobody tells you.",
};

export default function FirstCourseTipsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        First-Timer&apos;s Guide
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        First Course: 15 Things I Wish I Knew
      </h1>
      <p className="mb-12 text-lg text-muted">
        Practical tips from six courses and counting. The things I wish someone had
        told me before my first 10-day retreat — no spoilers, just useful knowledge.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <div className="space-y-8">
            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">1. Days 2-4 Are the Hardest. Everyone Wants to Leave.</h2>
              <p>
                This is not unique to you. Virtually every student has a crisis point around Days 2-4. The novelty has worn off, your body hurts, and the benefits haven&apos;t appeared yet. Your mind will construct elaborate, logical arguments for why you should leave. These arguments feel rational. They&apos;re not.
              </p>
              <p>
                Make a deal with yourself before the course starts: no matter what, you will stay through Day 4. The technique changes on Day 4, and everything shifts. If you make it past Day 4, you&apos;ll finish the course. Read more about <Link href="/faq/can-i-leave-early" className="text-accent underline hover:text-foreground">the urge to leave</Link>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">2. Physical Pain Is Normal. Prepare for It, Don&apos;t Fear It.</h2>
              <p>
                Your knees, back, hips, and ankles will hurt. You&apos;re sitting for hours every day in positions your body isn&apos;t used to. This is expected and not a sign of injury.
              </p>
              <p>
                Bring comfortable, loose clothing. Use the cushions and supports provided. You can sit on a chair if you need to — there&apos;s no shame in it. The pain diminishes significantly after Day 3-4 as your body adapts.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">3. You Don&apos;t Need to Sit Cross-Legged</h2>
              <p>
                Seriously. The centers have cushions, benches, back supports, and chairs. Find what works for your body. Forcing yourself into a painful position isn&apos;t noble — it&apos;s counterproductive. The goal is a stable, comfortable-enough posture that allows you to focus on the technique, not on your screaming knees.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">4. Eat Well at Lunch</h2>
              <p>
                Lunch is your main meal. There&apos;s no dinner — just fruit and tea at 5 PM for new students. Load up at lunch. It takes about 2-3 days for the hunger to subside, and then you won&apos;t miss dinner. But those first few evenings? You&apos;ll be hungry. Accept it.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">5. Bring Layers</h2>
              <p>
                Meditation halls are temperature-controlled, but you&apos;ll spend hours sitting still, which makes you cold. Bring a warm shawl, hoodie, or light blanket. Warm socks help too. Your body temperature drops when you&apos;re perfectly still for long periods. Check the <Link href="/prepare/packing-list" className="text-accent underline hover:text-foreground">packing list</Link> for the complete rundown.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">6. The Silence Is Easier Than You Think</h2>
              <p>
                Everyone worries about 10 days of silence. It&apos;s the first thing people ask about. In reality, the silence becomes natural by Day 2. By Day 5, it feels like a relief. Not having to perform social niceties, make small talk, or manage others&apos; impressions of you is incredibly liberating.
              </p>
              <p>
                The hard part isn&apos;t the external silence — it&apos;s the internal noise. Your mind will be <em>loud</em>, especially in the first few days.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">7. Don&apos;t Try to &quot;Win&quot; at Meditation</h2>
              <p>
                There&apos;s no competition. No one is watching your progress. The person sitting next to you who looks blissful might be mentally planning their grocery list. Focus on your own practice and follow the instructions. That&apos;s all you need to do.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">8. The Evening Discourses Are the Best Part</h2>
              <p>
                S.N. Goenka&apos;s recorded evening talks are unexpectedly engaging. He&apos;s warm, funny, and addresses exactly what you&apos;re experiencing that day with uncanny precision. Many people find these talks are what get them through the difficult days. They provide context, encouragement, and sometimes humor exactly when you need it.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">9. Your Mind Will Do Strange Things</h2>
              <p>
                Without any external stimulation, your mind goes to surprising places. Random childhood memories. Songs stuck on loop for hours. Elaborate fantasies. Conversations you had years ago, replayed in perfect detail. Creative ideas that feel revolutionary.
              </p>
              <p>
                This is all normal. Don&apos;t engage with it, don&apos;t fight it, just bring your attention back to the technique. The mind settles eventually — usually around Day 4-5.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">10. Use the Teacher</h2>
              <p>
                There are designated times to ask the assistant teacher questions. Use them. If you&apos;re confused about the technique, if something scares you, if you&apos;re struggling — ask. The teachers have guided thousands of students and have heard every question imaginable. They can offer specific, practical guidance.
              </p>
              <p>
                Many people are too shy or think their question is &quot;stupid.&quot; It&apos;s not. Ask.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">11. Walk During Breaks</h2>
              <p>
                Between sessions, walk. Your body needs movement after hours of sitting. Most centers have a walking area or path. Walking slowly and mindfully during breaks is itself a form of practice, and it prevents your body from seizing up completely.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">12. The &quot;Strong Determination&quot; Sittings Will Challenge You</h2>
              <p>
                Starting on Day 4, three group sittings per day become &quot;sittings of strong determination&quot; — you&apos;re asked to sit for the full hour without opening your eyes, hands, or legs. This is where the practice intensifies. It&apos;s uncomfortable, sometimes intensely so. But it&apos;s also where the deepest work happens.
              </p>
              <p>
                If you truly can&apos;t maintain the posture, adjust minimally and continue. The instruction is an aspiration, not a punishment.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">13. Sleep Issues Are Common</h2>
              <p>
                Despite going to bed at 9:30 PM and waking at 4:00 AM, many people have trouble sleeping — especially in the first few days. Anxiety, an active mind, unfamiliar environment, and sharing a room can all disrupt sleep. This usually resolves by Day 3-4. Don&apos;t stress about it — you&apos;ll be surprised how little sleep you need when you&apos;re meditating all day.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">14. Don&apos;t Compare Your Experience to Others&apos;</h2>
              <p>
                When silence lifts on Day 10, people share their experiences. Some describe dramatic visions, emotional breakthroughs, or profound realizations. If your experience was quieter — just a lot of sitting, observing, and mild discomfort — you might feel like you &quot;didn&apos;t get it.&quot;
              </p>
              <p>
                You did. Quiet, steady observation is no less valuable than dramatic experiences. The work happens regardless of how cinematic it feels. Some of the deepest processing is invisible even to the person doing it.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-foreground">15. The Real Work Starts When You Leave</h2>
              <p>
                The course gives you the technique. What you do with it afterward determines whether Vipassana actually changes your life. Daily practice — even short sessions — is what transforms a 10-day experience into a lasting shift. The people who rave about Vipassana years later are the ones who kept practicing at home.
              </p>
              <p>
                Start your daily practice the day you get home. Even 20 minutes. Don&apos;t wait for &quot;the right time.&quot; Read our <Link href="/guide/daily-practice" className="text-accent underline hover:text-foreground">daily practice guide</Link> for how to build the habit.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready to Go?</h2>
        <p className="mb-6 text-muted">
          Find a center near you and sign up for your first 10-day course.
        </p>
        <a
          href="https://www.dhamma.org/en-US/courses/search"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a Course
        </a>
      </div>

      <PageComments pageId="guide-first-course-tips" />
    </article>
  );
}
