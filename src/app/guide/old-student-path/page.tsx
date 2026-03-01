import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "The Old Student Path: Life After Your First Vipassana Course",
  description:
    "What it means to be a Vipassana old student: expectations, what unlocks, building community, resources on dhamma.org, common challenges, and the long game.",
};

export default function OldStudentPathPage() {
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
        The Old Student Path: Life After Your First Course
      </h1>
      <p className="mb-12 text-lg text-muted">
        You&apos;ve completed a 10-day course. You&apos;re now an &quot;old student.&quot;
        Here&apos;s what that actually means, what it unlocks, and what the path
        looks like from here.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What &quot;Old Student&quot; Means</h2>
          <p>
            In the Goenka Vipassana tradition, &quot;old student&quot; simply means you&apos;ve completed at least one 10-day course. It&apos;s not about seniority, skill, or years of practice. Someone who finished their first course last week is as much an old student as someone who has been sitting for twenty years.
          </p>
          <p>
            The distinction exists for practical reasons: certain courses, resources, and service opportunities are reserved for people who have learned the full technique. A 10-day course is the minimum required to receive complete instruction in Vipassana meditation as taught by Goenka.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Expectations</h2>
          <p>
            Becoming an old student comes with expectations — not rules enforced by anyone, but commitments you make to yourself and the practice:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Daily practice of two hours</strong> — One hour in the morning, one in the evening. This is the recommended standard. Many people struggle to maintain this, especially in the beginning. The important thing is consistency — even shorter sessions count. See our <Link href="/guide/daily-practice" className="text-accent underline hover:text-foreground">daily practice guide</Link> for realistic schedules.</li>
            <li><strong>Five precepts</strong> — Abstaining from killing, stealing, lying, sexual misconduct, and intoxicants. These aren&apos;t arbitrary moral rules — they create the conditions under which the mind can settle enough to meditate effectively. Each precept removes a source of agitation.</li>
            <li><strong>Not mixing techniques</strong> — Practicing Vipassana as taught, without combining it with other meditation techniques. This is one of the more controversial expectations and the one most commonly questioned. The reasoning: Vipassana is a precise surgical tool, and mixing techniques dulls the blade.</li>
          </ul>
          <p>
            Nobody checks up on you. There&apos;s no membership card to revoke. These expectations exist because they genuinely support the practice. The more closely you follow them, the better the technique works.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What Unlocks</h2>
          <p>
            Completing your first course opens doors that weren&apos;t available before:
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Dhamma Service</h3>
              <p>
                You can volunteer at courses — cooking, cleaning, managing — while maintaining your own practice. Service deepens the practice in ways that sitting alone doesn&apos;t. Many serious meditators consider it one of the most transformative aspects of the tradition. Read our <Link href="/guide/dhamma-service" className="text-accent underline hover:text-foreground">Dhamma Service guide</Link> for details.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Group Sittings</h3>
              <p>
                Weekly group sittings at centers or in private homes. These provide accountability, community, and the collective energy of sitting with others. They&apos;re one of the most underused resources available to old students. See our <Link href="/guide/group-sittings" className="text-accent underline hover:text-foreground">group sittings guide</Link>.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Short Courses</h3>
              <p>
                One-day, two-day, and three-day courses for old students. These are excellent for a mid-year practice boost when you can&apos;t commit to a full 10-day course.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Course Progression</h3>
              <p>
                With continued practice and courses, you can access Satipatthana Sutta courses, 20-day courses, and eventually longer courses. Each level requires consistent daily practice and a track record of courses served and sat. See our <Link href="/guide/course-progression" className="text-accent underline hover:text-foreground">course progression guide</Link> for the full path.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Old Student Area on dhamma.org</h3>
              <p>
                Access to the &quot;For Old Students&quot; section of dhamma.org, which includes additional discourse recordings, publications, and resources not available to new students.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Ability to Donate</h3>
              <p>
                Only old students can donate to support future courses. New students cannot donate before completing a course — this ensures that giving comes from personal experience of the benefit, not from social pressure.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Assistant Teacher Access</h3>
              <p>
                Old students can request interviews with assistant teachers for guidance on their practice. This is available at courses and sometimes at centers between courses.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Building Community</h2>
          <p>
            The Vipassana community isn&apos;t organized like a church or a club. There are no social events, no leadership hierarchy, and no recruitment. Community happens organically:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Group sittings</strong> — Sitting together weekly creates bonds without requiring conversation. Over months and years, you develop quiet friendships with people who understand the practice.</li>
            <li><strong>Serving together</strong> — Service at courses is one of the most natural ways to meet other practitioners. Working alongside someone for 10 days creates a different kind of connection than casual socializing.</li>
            <li><strong>Organic friendships</strong> — Many lifelong friendships form at courses and during service. These relationships are rooted in shared experience rather than shared interests or social identity.</li>
          </ul>
          <p>
            If you feel isolated in your practice, group sittings and service are the remedy. The community exists — you just have to show up.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Old Student Resources on dhamma.org</h2>
          <p>
            The dhamma.org website has a section specifically for old students, though it&apos;s not prominently linked. What you&apos;ll find there:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li><strong>Discourse recordings</strong> — Audio and video of Goenka&apos;s discourses, including evening discourses from courses you may not have attended yet.</li>
            <li><strong>Publications</strong> — Books, articles, and newsletters from the Vipassana Research Institute.</li>
            <li><strong>Mobile app</strong> — The official Vipassana app for old students includes a meditation timer, guided group sitting recordings, and access to discourses.</li>
            <li><strong>Course schedules</strong> — Old student-specific courses (Satipatthana Sutta, long courses) that don&apos;t appear in the main schedule.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Common Challenges</h2>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Maintaining two hours daily</h3>
              <p>
                This is the most common struggle. Two hours is a significant commitment, especially with work, family, and other responsibilities. The key is to start with what you can sustain and build gradually, rather than forcing an ideal schedule that leads to burnout and abandonment. Our <Link href="/guide/daily-practice" className="text-accent underline hover:text-foreground">daily practice guide</Link> has realistic schedule tiers.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Isolation</h3>
              <p>
                Most of your friends and family won&apos;t understand what you&apos;re doing or why. You may feel like you&apos;re the only person in your world who meditates for hours a day. This is why group sittings and service matter — they connect you with people who share the practice without requiring you to explain or justify it.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">The &quot;not mixing techniques&quot; rule</h3>
              <p>
                Many people find this restriction difficult, especially if they practiced other forms of meditation before Vipassana. The guideline is to give Vipassana a fair trial — at least a year of exclusive practice — before deciding whether to integrate other methods. The rationale is that mixing techniques prematurely prevents you from experiencing the full depth of any one approach.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Partner dynamics</h3>
              <p>
                A partner who doesn&apos;t meditate may struggle with the time commitment, the silence, or the changes they observe in you. This is one of the most practically challenging aspects of the old student path. Read our <Link href="/guide/vipassana-and-relationships" className="text-accent underline hover:text-foreground">relationships guide</Link> for more on navigating this.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Plateaus</h3>
              <p>
                After the initial months of noticeable change, the practice can feel stagnant. Sensations don&apos;t seem as vivid, progress feels invisible, and motivation wanes. This is normal — the work continues beneath the surface even when you can&apos;t feel it. For more on what progress actually looks like, read our <Link href="/guide/recognizing-progress" className="text-accent underline hover:text-foreground">guide to recognizing progress</Link>.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Long Game</h2>
          <p>
            The old student path is not a linear ascent. It&apos;s more like a spiral — you revisit the same themes (restlessness, aversion, craving, doubt) at deeper and deeper levels. The first time you encounter strong aversion in your practice, it feels overwhelming. The tenth time, you recognize it. The hundredth time, you observe it arise and pass without identifying with it.
          </p>
          <p>
            Some years your practice will deepen dramatically. Other years it will feel like maintenance. There will be months when you skip more sessions than you sit, and months when every sit feels profound. Both are part of the path.
          </p>
          <p>
            The meditators who stick with this over decades aren&apos;t superhuman. They&apos;re the ones who keep showing up — imperfectly, inconsistently, but persistently. They take another course when they can. They sit with their group every week. They come back to the cushion after every absence, no matter how long.
          </p>
          <p>
            That&apos;s the old student path. Not perfection. Persistence.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Take Your Next Step</h2>
        <p className="mb-6 text-muted">
          Find a course, sign up for service, or connect with a group sitting near you.
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

      <PageComments pageId="guide-old-student-path" />
    </article>
  );
}
