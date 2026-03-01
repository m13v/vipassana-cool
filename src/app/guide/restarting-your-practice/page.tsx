import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "How to Restart Your Vipassana Practice — Getting Back on the Cushion",
  description:
    "Fell off your Vipassana practice? How to restart without guilt: shorter sessions, rebuilding momentum, when to take another course, and group sittings.",
};

export default function RestartingPracticePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Getting Back on Track
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        How to Restart Your Practice
      </h1>
      <p className="mb-12 text-lg text-muted">
        You stopped sitting. It&apos;s been weeks, months, maybe years. Here&apos;s how
        to come back — without guilt, without drama, and without trying to pick up
        where you left off.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">First: Drop the Guilt</h2>
          <p>
            Guilt about not practicing is itself a form of aversion — exactly what the practice teaches you to observe and release. The irony is not lost on anyone.
          </p>
          <p>
            Every long-term meditator has periods where they stop. Weeks, months, sometimes years. This is so common that it&apos;s essentially universal. You haven&apos;t failed. You haven&apos;t lost everything you built. You&apos;ve just been away for a while, and now you&apos;re coming back.
          </p>
          <p>
            The practice is always there, exactly where you left it. It doesn&apos;t judge you for your absence. Neither should you.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Start Smaller Than You Think</h2>
          <p>
            The biggest mistake people make when restarting is trying to jump back to their old routine. If you were doing an hour a day before you stopped, don&apos;t sit down tomorrow for an hour. You&apos;ll have a difficult, frustrating session and be less likely to sit the next day.
          </p>
          <p>
            Start with 10 or 15 minutes. That&apos;s it. Set a timer, sit, observe your breath, and if concentration allows, do a brief body scan. When the timer goes off, stop. Even if you feel like you could do more. The goal in the first week isn&apos;t depth — it&apos;s rebuilding the habit.
          </p>
          <p>
            After a week of daily 15-minute sits, extend to 20. Then 25. Add 5 minutes per week until you reach your target duration. This gradual ramp-up prevents burnout and creates positive momentum. Each day feels achievable, which makes the next day easier.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What to Expect When Restarting</h2>
          <p>
            Your mind will be noisier than you remember. Concentration that took 5 minutes to achieve might now take 20. Sensations that were subtle may be undetectable. The body scan may feel like trying to see in the dark.
          </p>
          <p>
            This is normal and temporary. It&apos;s not that you&apos;ve &quot;lost&quot; your practice — the underlying capacity is still there, just dormant. Think of it like returning to exercise after a break. The first few runs are painful, but fitness returns faster than it was initially built.
          </p>
          <p>
            <strong>What you might experience in the first week:</strong>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Restless mind — constant thoughts, difficulty staying with the breath</li>
            <li>Physical discomfort — your body has forgotten how to sit still</li>
            <li>Frustration — &quot;I used to be so much better at this&quot;</li>
            <li>Emotional release — stored tension from the time you weren&apos;t practicing</li>
          </ul>
          <p>
            Observe all of it with equanimity. That&apos;s the practice, whether your mind is calm or chaotic.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Spend More Time on Anapana</h2>
          <p>
            When restarting, lean heavily on <Link href="/guide/anapana-and-vipassana-explained" className="text-accent underline hover:text-foreground">Anapana</Link> (breath observation). Your concentration needs to rebuild before body scanning becomes productive.
          </p>
          <p>
            For the first few days, you might spend your entire session on Anapana. That&apos;s fine. When your mind can stay with the breath for several minutes without wandering, transition to the body scan for the remaining time.
          </p>
          <p>
            Don&apos;t force the transition. Scanning with a scattered mind produces frustration, not insight. Build the foundation first.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">When to Take Another Course</h2>
          <p>
            If you&apos;ve been away from practice for months or longer, taking a 10-day course is the most powerful way to restart. It&apos;s like pressing a reset button: 10 days of intensive practice rebuilds concentration, re-establishes the technique, and reignites motivation in a way that home practice alone can&apos;t match.
          </p>
          <p>
            <strong>Signs a course would help:</strong>
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>You&apos;ve tried to restart at home multiple times and keep falling off</li>
            <li>It&apos;s been over a year since your last course</li>
            <li>You can&apos;t remember the instructions clearly</li>
            <li>Your practice at home feels shallow or mechanical</li>
            <li>You want the external structure and accountability that a course provides</li>
          </ul>
          <p>
            Goenka recommends taking at least one course per year. If you&apos;ve been away, this is a perfect time to sign up. Courses are available year-round at centers worldwide.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Group Sittings</h2>
          <p>
            Many Vipassana centers host weekly group sittings for old students. These are one of the best-kept secrets for maintaining and restarting practice.
          </p>
          <p>
            A group sitting creates gentle accountability: you&apos;re less likely to skip when others expect you. Sitting with a group, even in silence, reinforces that you&apos;re part of a community of practitioners. And the concentrated energy of a group sitting often produces a deeper session than sitting alone at home.
          </p>
          <p>
            If you&apos;re struggling to restart, committing to one group sitting per week can be the anchor that holds your practice together while you rebuild the daily habit.
          </p>
          <p>
            Check your nearest Vipassana center&apos;s website for group sitting schedules. Many are listed on <a href="https://www.dhamma.org" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-foreground">dhamma.org</a>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">A Simple Restart Plan</h2>
          <p>
            Here&apos;s a concrete plan for the first four weeks:
          </p>

          <div className="mt-4 space-y-4">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Week 1: 15 minutes, morning only</h3>
              <p>
                Mostly Anapana. Brief scan if concentration allows. The only goal is to sit every day. No exceptions, no negotiations.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Week 2: 20 minutes, morning only</h3>
              <p>
                5 minutes Anapana, then body scan. The scan won&apos;t be thorough yet. That&apos;s fine. You&apos;re rebuilding.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Week 3: 30 minutes morning, optional 10 minutes evening</h3>
              <p>
                The morning session is the priority. The evening session is a bonus, not a requirement. Don&apos;t create guilt around the evening sit.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Week 4: 30-45 minutes morning, 15 minutes evening</h3>
              <p>
                By now the habit should feel more natural. Extend duration gradually based on how the practice is going. Don&apos;t rush to an hour if 30 minutes is where your practice is alive.
              </p>
            </div>
          </div>

          <p className="mt-6">
            For the full guide on session durations and building consistency, see <Link href="/guide/daily-practice" className="text-accent underline hover:text-foreground">Daily Practice at Home</Link> and <Link href="/faq/can-i-do-shorter-sessions" className="text-accent underline hover:text-foreground">Do Shorter Sessions Work?</Link>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Bigger Picture</h2>
          <p>
            Falling off and restarting is not a bug in the practice — it&apos;s a feature. Each time you come back, you learn something new: about your resistance, about what pulls you away, about what brings you back.
          </p>
          <p>
            The meditators who maintain lifelong practice are not the ones who never stopped. They&apos;re the ones who kept coming back. The cushion is always there. You can always sit down again.
          </p>
          <p>
            Don&apos;t wait for the right moment. Don&apos;t wait until you feel motivated. Don&apos;t wait for a course. Just sit tomorrow morning. Fifteen minutes. That&apos;s it. Everything starts from there.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Recharge with a Course</h2>
        <p className="mb-6 text-muted">
          A 10-day course is the best way to reset your practice.
          Find one near you.
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

      <PageComments pageId="guide-restarting-practice" />
    </article>
  );
}
