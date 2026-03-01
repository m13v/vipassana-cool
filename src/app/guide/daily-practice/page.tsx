import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Vipassana Daily Practice at Home — How to Maintain After Your Course",
  description:
    "How to maintain a daily Vipassana meditation practice at home after completing a course. Practical tips on scheduling, obstacles, and building consistency.",
};

export default function DailyPracticePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        After Your Course
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Daily Vipassana Practice at Home
      </h1>
      <p className="mb-12 text-lg text-muted">
        The course plants the seed. Daily practice is what makes it grow. Practical
        guidance on maintaining Vipassana after you leave the center.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Recommendation</h2>
          <p>
            The official guidance is clear: sit for one hour in the morning and one hour in the evening. This is what Goenka recommends, what the assistant teachers reinforce, and what &quot;old students&quot; are expected to maintain.
          </p>
          <p>
            The reality is that many people struggle with this, especially in the beginning. Two hours of daily meditation is a significant commitment. The most important thing is to practice every day, even if the duration is shorter than the ideal.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Getting Started at Home</h2>

          <h3 className="mb-2 mt-6 font-semibold text-foreground">Set Up Your Space</h3>
          <p>
            Designate a spot for meditation. It doesn&apos;t need to be a dedicated room — a corner of your bedroom works. The key is consistency: sitting in the same place creates a mental association that helps you settle in faster. Keep your cushion, bench, or chair there permanently so there&apos;s zero setup friction.
          </p>

          <h3 className="mb-2 mt-6 font-semibold text-foreground">Choose Your Time</h3>
          <p>
            Morning practice before the day starts is generally most effective. Your mind hasn&apos;t yet been pulled in a hundred directions. Set your alarm earlier than you need to, sit, then start your day. The evening sit is harder to protect — social commitments, fatigue, and &quot;just one more thing&quot; constantly encroach.
          </p>
          <p>
            If two hours is too much right now, start with whatever you can sustain. Thirty minutes in the morning is better than an hour that you skip three days a week. Consistency matters more than duration.
          </p>

          <h3 className="mb-2 mt-6 font-semibold text-foreground">Use a Timer</h3>
          <p>
            Set a timer for your desired duration so you&apos;re not checking the clock. A simple phone timer works. Some people use meditation timer apps that have a gentle bell — find what works for you. Avoid apps with guided meditations; Vipassana is a self-directed practice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Practice Itself</h2>
          <p>
            Sit, close your eyes, and begin with a few minutes of Anapana (observing the breath at the nose). Once your mind has settled, transition to the body scan — moving attention systematically from head to feet and back. Maintain equanimity throughout: observe whatever arises without craving or aversion.
          </p>
          <p>
            At the end of your sit, spend a minute or two on metta — generating feelings of goodwill and compassion for yourself and all beings. Then open your eyes gently.
          </p>
          <p>
            That&apos;s it. No special rituals, no mantras, no visualization. Just observation and equanimity.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Common Obstacles</h2>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;I don&apos;t have time&quot;</h3>
              <p>
                This is the number one obstacle, and it&apos;s usually a priority issue rather than a time issue. You have time for social media, Netflix, and scrolling your phone. You have time to sit. Start with 20 minutes and build up. The busier you are, the more you need the practice.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;My meditation isn&apos;t as deep as at the center&quot;</h3>
              <p>
                Of course it isn&apos;t. At the center, you meditated 10+ hours a day in a controlled environment. At home, you&apos;re doing 30-60 minutes amid the noise of life. The depth will be less intense, but the consistency is what creates lasting change. Don&apos;t compare — just practice.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;I keep missing days&quot;</h3>
              <p>
                Everyone misses days. The key is how you respond. Don&apos;t spiral into guilt or give up. Just sit the next day. If you miss a week, sit today. The practice is always available, and every sit is a fresh start. What you&apos;re building is a long-term habit, not a perfect streak.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;I&apos;m not feeling the sensations I felt during the course&quot;</h3>
              <p>
                The intensity of sensations during a course comes from the depth of concentration built over 10 days. Daily practice will have subtler sensations, and that&apos;s fine. The work is happening whether you feel dramatic sensations or not. Equanimity toward subtle sensations is just as valuable as equanimity toward intense ones.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">&quot;My family thinks it&apos;s weird&quot;</h3>
              <p>
                Early morning is your friend. Sit before anyone else is awake. You don&apos;t need to explain or defend your practice. Let the results speak for themselves — when the people around you notice you&apos;re calmer, more patient, and more present, the questions shift from &quot;why do you do that?&quot; to &quot;how do I start?&quot;
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Realistic Schedules</h2>
          <p>
            The &quot;ideal&quot; Vipassana schedule is two hours daily — one hour morning, one hour evening. That&apos;s what Goenka recommends, and it&apos;s a worthy goal. But for most people, especially those new to daily practice, jumping straight to two hours is a recipe for burnout and abandonment.
          </p>
          <p>
            Here are practical schedule tiers. Start where you can be consistent, and build from there:
          </p>

          <div className="mt-6 space-y-4">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Starter: 20 minutes morning only</h3>
              <p>
                Perfect for the first weeks after your course. Just sit every morning for 20 minutes. No evening session. The goal is to establish the habit before extending the duration. Twenty minutes is enough to do a meaningful body scan and build the daily groove.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Building: 30 minutes morning, 15 minutes evening</h3>
              <p>
                Once the morning habit is solid, add a short evening sit. Fifteen minutes before bed helps you process the day and creates a natural bookend. Your morning session becomes the main practice; the evening session is a lighter supplement.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Committed: 45 minutes morning, 30 minutes evening</h3>
              <p>
                This is where the practice starts to deepen noticeably. Forty-five minutes gives you time to settle, do a thorough body scan, and sit with whatever arises. The 30-minute evening sit becomes a real practice session, not just a check-in.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Full: 1 hour morning, 1 hour evening</h3>
              <p>
                The recommended practice. Two hours daily is what sustains deep progress over months and years. If you can reach this level consistently, you&apos;ll notice a significant difference in your equanimity, awareness, and the quality of your sittings during courses.
              </p>
            </div>
          </div>

          <p className="mt-6">
            The key message: any consistent practice beats an inconsistent &quot;ideal&quot; practice. Sitting for 20 minutes every single day will take you further than sitting for an hour three times a week. Build the habit first, then extend the duration. Your practice should feel sustainable, not heroic.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">When You Fall Off</h2>
          <p>
            It happens to everyone. Including me. You miss a day, then two, then a week, and suddenly it&apos;s been a month since you last sat. The cushion gathers dust. The habit feels like a distant memory.
          </p>
          <p>
            This is normal. It&apos;s not a failure — it&apos;s part of the long arc of practice. The question isn&apos;t whether you&apos;ll fall off. The question is how you come back.
          </p>
          <p>
            If you&apos;ve been away for days, just sit tomorrow morning. Start with 10 or 15 minutes if a full session feels intimidating. Don&apos;t try to &quot;make up&quot; for lost time. Just begin again.
          </p>
          <p>
            If you&apos;ve been away for weeks or months, the same applies — but be gentle with yourself. Your concentration will have weakened, sensations may be less clear, and your mind will be noisier than you remember. That&apos;s okay. Every meditator who has practiced for decades has gone through stretches like this. The practice is always there, exactly where you left it.
          </p>
          <p>
            There&apos;s no need for guilt. Guilt is just another form of aversion — exactly what the practice teaches you to observe and release. Instead of beating yourself up for not sitting, channel that energy into sitting right now.
          </p>
          <p>
            Sometimes the best way to restart is to take another course. A 10-day course is like pressing a reset button on your practice. If you&apos;ve been struggling to maintain daily practice for months, signing up for a course can reignite the motivation and deepen the technique in ways that home practice alone cannot.
          </p>
          <p>
            Group sittings are another powerful accountability tool. Many Vipassana centers host weekly group sittings for old students. Having a regular appointment with other meditators creates gentle external structure. You&apos;re less likely to skip when others are expecting you. And sitting with a group, even in silence, reinforces that you&apos;re part of something larger than your individual practice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Building Consistency</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Same time, same place, every day.</strong> Remove decisions from the equation. It&apos;s not &quot;should I meditate today?&quot; — it&apos;s &quot;it&apos;s 6 AM, so I sit.&quot;</li>
            <li><strong>Start small if you need to.</strong> Twenty minutes is better than zero. You can always extend later.</li>
            <li><strong>Don&apos;t negotiate with resistance.</strong> The mind will generate excellent reasons to skip. Sit anyway. You&apos;ve never regretted a sit.</li>
            <li><strong>Take a course annually.</strong> One course per year recharges the practice significantly. It&apos;s like a deep reset that sustains the daily work.</li>
            <li><strong>Connect with other meditators.</strong> Group sittings are offered at most Vipassana centers. Sitting with others, even once a week, reinforces the practice.</li>
            <li><strong>Use the Goenka recordings.</strong> As an old student, you have access to guided group sittings and chanting recordings. These can add structure to home sessions.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">My Practice</h2>
          <p>
            I sit every morning, usually for 45-60 minutes. Evening sittings happen maybe four days a week. Some days the practice is deep and focused. Many days my mind wanders and I spend the session gently bringing it back. Both kinds of sitting count.
          </p>
          <p>
            The cumulative effect over hundreds of days is unmistakable. Not dramatic, single moments of transformation — but a gradual, steady shift in how I relate to difficulty, uncertainty, and my own reactive patterns. That shift is what keeps me coming back to the cushion.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready to Begin?</h2>
        <p className="mb-6 text-muted">
          Find a center near you and sign up for your first (or next) 10-day course.
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

      <PageComments pageId="guide-daily-practice" />
    </article>
  );
}
