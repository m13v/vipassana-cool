import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Vipassana Course Progression — From First 10-Day to 60-Day Courses",
  description:
    "Complete guide to Vipassana course types and progression path: old student courses, Satipatthana Sutta, 20-day, 30-day, 45-day, and 60-day courses. Requirements, eligibility, and what to expect at each level.",
};

export default function CourseProgressionPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/guide"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Guide
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Guide
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Vipassana Course Progression
      </h1>
      <p className="mb-12 text-lg text-muted">
        There&apos;s a whole path beyond the first 10-day course. Here&apos;s what
        opens up as you deepen your practice, and what it takes to get there.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The Progression Map</h2>
          <p>
            Vipassana isn&apos;t a one-and-done experience. S.N. Goenka designed a structured
            progression that gradually deepens your practice over years. Each level has specific
            prerequisites &mdash; not as gatekeeping, but because the longer courses demand a
            foundation of technique, discipline, and daily practice that takes time to build.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">1</span>
                <div>
                  <h3 className="font-semibold text-foreground">First 10-Day Course</h3>
                  <p className="text-sm">Your entry point. No prerequisites. You learn Anapana and Vipassana from scratch.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</span>
                <div>
                  <h3 className="font-semibold text-foreground">More 10-Day Courses + Dhamma Service</h3>
                  <p className="text-sm">Retake 10-day courses, serve at courses. Build consistency in daily practice.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">3</span>
                <div>
                  <h3 className="font-semibold text-foreground">Satipatthana Sutta Course</h3>
                  <p className="text-sm">After 3+ ten-day courses and 1 year of practice. A deeper dive into the theory behind the technique.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">4</span>
                <div>
                  <h3 className="font-semibold text-foreground">Special 10-Day Course</h3>
                  <p className="text-sm">After 5+ ten-day courses, 1 Satipatthana, 1 service, and 2 years of daily practice.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">5</span>
                <div>
                  <h3 className="font-semibold text-foreground">20-Day Course</h3>
                  <p className="text-sm">After 5+ ten-day courses, 1 Satipatthana, service, and 2 years of regular practice.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">6</span>
                <div>
                  <h3 className="font-semibold text-foreground">30-Day Course</h3>
                  <p className="text-sm">After 6+ ten-day courses (one since your 20-day), 1 completed 20-day, Satipatthana, and 2+ years of practice.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">7</span>
                <div>
                  <h3 className="font-semibold text-foreground">45-Day Course</h3>
                  <p className="text-sm">After 7+ ten-day courses (one since your 30-day), 2 completed 30-day courses, and 3+ years of practice.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">8</span>
                <div>
                  <h3 className="font-semibold text-foreground">60-Day Course</h3>
                  <p className="text-sm">Primarily for Assistant Teachers. Requires 2+ completed 45-day courses and extensive Dhamma service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Becoming an &quot;Old Student&quot;</h2>
          <p>
            The moment you complete your first 10-day course, you become an &quot;old student.&quot;
            This isn&apos;t just a label &mdash; it unlocks access to a different tier of the
            Vipassana ecosystem. You can serve at courses, attend short courses (1-3 days),
            participate in group sittings at centers, access old student resources on dhamma.org,
            and donate to support future students.
          </p>
          <p>
            More importantly, &quot;old student&quot; carries an expectation: that you&apos;re
            maintaining daily practice (ideally two hours per day, one morning and one evening),
            observing the five precepts, and not mixing other meditation techniques with Vipassana.
            These aren&apos;t enforced with a checklist, but they&apos;re the foundation that
            makes deeper courses meaningful. For a complete look at what the old student path includes — expectations, what unlocks, community, and common challenges — see our <Link href="/guide/old-student-path" className="text-accent underline hover:text-foreground">old student path guide</Link>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">10-Day Courses for Old Students</h2>
          <p>
            Your second, third, and tenth 10-day courses are not the same as your first. As an old
            student, you already know the technique, so the experience shifts. You&apos;re not
            learning &mdash; you&apos;re going deeper. The instructions are the same, but your
            relationship to them evolves.
          </p>
          <p>
            Many experienced meditators say their strongest courses were their fourth or fifth
            10-day sits, not their first. The novelty wears off, and what remains is the actual
            work. That&apos;s where the real transformation happens.
          </p>
          <p>
            There are also <strong>short courses</strong> for old students &mdash; 1-day, 2-day,
            and 3-day formats. These are designed to refresh your technique and reconnect with the
            practice in a structured environment without the full 10-day commitment. Any old
            student can attend these.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Satipatthana Sutta Course</h2>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 3 completed 10-day courses</li>
              <li>At least 1 year practicing Vipassana</li>
              <li>Maintaining daily practice (at minimum from the time of applying)</li>
              <li>Not practicing any other meditation technique</li>
              <li>Trying to maintain the five precepts in daily life</li>
            </ul>
          </div>
          <p className="mt-4">
            The Satipatthana Sutta is the principal text in which the Buddha systematically
            explains the technique of Vipassana. This course follows the same timetable and
            discipline as a standard 10-day course, but the evening discourses are entirely
            different &mdash; they examine the Sutta passage by passage, connecting each section
            to the practice you&apos;re doing on the cushion.
          </p>
          <p>
            It&apos;s a pivotal course. Where regular 10-day courses teach you <em>how</em> to
            practice, the Satipatthana course helps you understand <em>why</em> the technique
            works the way it does. It connects the experiential practice to its theoretical
            framework in a way that can deepen your understanding significantly.
          </p>
          <p>
            This course is also a gateway &mdash; it&apos;s a prerequisite for virtually every
            course beyond the standard 10-day.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Special 10-Day Course</h2>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 5 completed 10-day courses</li>
              <li>At least 1 Satipatthana Sutta course</li>
              <li>At least 1 course served (Dhamma service)</li>
              <li>2 years of consistent daily practice (2 hours per day)</li>
              <li>Maintaining the five precepts</li>
              <li>Not practicing any other technique</li>
            </ul>
          </div>
          <p className="mt-4">
            Special 10-day courses are for serious, committed old students. The format is the same
            duration as a regular 10-day, but the instructions go deeper and the environment is
            more focused. These courses are typically smaller and taught by more experienced
            assistant teachers.
          </p>
          <p>
            Think of it as a 10-day course with the training wheels fully off. Everyone in the
            room has significant experience, which creates a different collective energy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">14-Day Gratitude Course</h2>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 3 completed 10-day courses</li>
              <li>At least 1 Satipatthana Sutta course</li>
              <li>Active involvement in Dhamma service</li>
              <li>Making a significant contribution to the spread of Dhamma</li>
              <li>Recommendation from a local Assistant Teacher</li>
              <li>Practicing Vipassana exclusively</li>
            </ul>
          </div>
          <p className="mt-4">
            Previously called the &quot;Teacher&apos;s Self Course,&quot; the 14-Day Gratitude
            Course is designed for students who are deeply involved in Dhamma service and
            contributing meaningfully to the organization. It&apos;s a way for the tradition to
            support those who give extensively by offering them a deeper, more intensive practice
            opportunity.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">20-Day Course</h2>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 5 completed 10-day courses</li>
              <li>At least 1 Satipatthana Sutta course</li>
              <li>At least 1 course served (Dhamma service)</li>
              <li>2 years of consistent daily practice (2 hours per day)</li>
              <li>Maintaining the five precepts</li>
              <li>Recommendation from an Assistant Teacher who knows you well</li>
            </ul>
          </div>
          <p className="mt-4">
            The 20-day course is where the long-course path begins. It&apos;s offered only at
            designated long-course centers, and there are far fewer of these worldwide. The
            application process is more involved &mdash; you need a recommendation from an
            Assistant Teacher who can vouch for your practice and commitment.
          </p>
          <p>
            Twenty days allows the mind to settle in ways that ten days simply cannot. The first
            10 days of a 20-day course often feel like a regular course. The second 10 days are
            where things get interesting &mdash; the depth of concentration and the subtlety of
            sensations can reach a level that surprises even experienced meditators.
          </p>
          <p>
            There&apos;s also a minimum 6-month gap required between long courses (20-day and
            above), and a 10-day gap between a long course and any other course.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">30-Day Course</h2>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 6 completed 10-day courses (one since your first 20-day course)</li>
              <li>At least 1 completed 20-day course</li>
              <li>At least 1 Satipatthana Sutta course</li>
              <li>2 years of consistent daily practice</li>
              <li>Maintaining the five precepts</li>
              <li>Recommendation from an Assistant Teacher and a Full Teacher from your area</li>
            </ul>
          </div>
          <p className="mt-4">
            A month in silence. The 30-day course represents a serious commitment, both in time
            and in the depth of inner work it demands. The requirements ensure that students have
            the technical foundation and the mental resilience to sustain 30 days of intensive
            meditation.
          </p>
          <p>
            Notice the requirement for a 10-day course <em>after</em> your first 20-day &mdash;
            this ensures you&apos;ve integrated the experience of the longer course before going
            even deeper. The progression is deliberately measured. It&apos;s not about collecting
            achievements; it&apos;s about readiness.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">45-Day Course</h2>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 7 completed 10-day courses (one since your first 30-day course)</li>
              <li>At least 2 completed 30-day courses</li>
              <li>At least 1 Satipatthana Sutta course</li>
              <li>3 years of consistent daily practice practicing Vipassana exclusively</li>
              <li>Active involvement in Dhamma service</li>
              <li>Recommendation from an Assistant Teacher and a Full Teacher</li>
              <li>6-month gap since last long course</li>
            </ul>
          </div>
          <p className="mt-4">
            45-day courses are primarily open to people involved in Dhamma service and Assistant
            Teachers. At this level, you&apos;re talking about a student with years of dedicated
            practice, multiple long courses under their belt, and a demonstrated commitment to
            the tradition through service.
          </p>
          <p>
            Very few meditators reach this level, and that&apos;s by design. These courses are
            rare, offered at only a handful of centers worldwide, and the number of students
            accepted is small. The depth of practice possible in 45 days of continuous meditation
            is extraordinary, but it requires a foundation that takes years to build.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">60-Day Course</h2>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 2 completed 45-day courses</li>
              <li>Primarily reserved for active Assistant Teachers who conduct at least 4 ten-day courses annually</li>
              <li>Or those enrolled in or about to enter Assistant Teacher training, with extensive service</li>
              <li>In rare cases, non-teachers with 2+ completed 45-day courses and deep service involvement may be accepted</li>
            </ul>
          </div>
          <p className="mt-4">
            The 60-day course is essentially reserved for people who have dedicated their lives
            to Vipassana &mdash; active Assistant Teachers, those in teacher training, or
            exceptionally committed students. Two full months of continuous silent meditation.
            The requirements reflect that this level of practice is genuinely only appropriate for
            meditators with many years and many long courses behind them.
          </p>
          <p>
            For most practitioners, this is not a realistic goal, and that&apos;s perfectly fine.
            The vast majority of the benefit of Vipassana comes from consistent daily practice
            and periodic 10-day courses. The long-course path is there for those who feel called
            to go deeper, but it&apos;s not the only measure of a serious practice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Dhamma Service as Part of the Path</h2>
          <p>
            You&apos;ll notice that service (Dhamma seva) appears as a requirement at multiple
            levels. This isn&apos;t bureaucratic box-checking &mdash; serving is genuinely part
            of the practice. When you cook, clean, or manage logistics for a course, you&apos;re
            practicing Vipassana in action: maintaining awareness and equanimity while doing
            physical work, interacting with others, and navigating the small frustrations that
            arise in any communal living situation.
          </p>
          <p>
            Many experienced meditators say that serving deepened their practice more than
            sitting additional courses did. It&apos;s where the meditation leaves the cushion
            and enters real life.
          </p>
          <p>
            For a detailed look at what serving involves, see the{" "}
            <Link href="/guide/dhamma-service" className="text-accent underline hover:text-foreground">
              Dhamma Service guide
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Self-Courses</h2>
          <p>
            Self-courses are a lesser-known option for serious old students. Rather than following
            the standard course structure with group discourses and teacher-led instructions, you
            practice independently at a center under your own discipline. You follow the
            timetable, meditate in the hall, and maintain all the rules &mdash; but without the
            guided framework.
          </p>
          <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
            <p className="font-semibold text-accent">Self-Course Requirements</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>At least 3 completed 10-day courses (most recent within the last 2 years)</li>
              <li>Maintaining 2 hours of daily practice</li>
              <li>Following center regulations independently</li>
            </ul>
          </div>
          <p className="mt-4">
            Self-courses are good for students who want the supportive environment of a center
            without waiting for a scheduled course. They&apos;re available on a space-available
            basis at most centers.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">When to Take the Next Step</h2>
          <p>
            There&apos;s no rush. The progression exists as a path, not a race. Here are some
            honest markers of readiness:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>You&apos;re maintaining daily practice consistently</strong> &mdash; not
              perfectly, but genuinely. If you&apos;re sitting most days and your practice
              feels like a non-negotiable part of life rather than something you force yourself
              to do, that&apos;s a good sign.
            </li>
            <li>
              <strong>You&apos;re not chasing experiences</strong> &mdash; if your primary
              motivation for a longer course is curiosity about what will happen or a desire
              for dramatic spiritual experiences, you might want to sit with that. The best
              motivation is simply wanting to continue the work.
            </li>
            <li>
              <strong>You meet the requirements naturally</strong> &mdash; if you find yourself
              qualifying for the next level through the natural course of your practice rather
              than strategically &quot;checking boxes,&quot; that&apos;s a sign you&apos;re
              progressing authentically.
            </li>
            <li>
              <strong>You&apos;ve served</strong> &mdash; if you haven&apos;t served a course
              yet, consider doing that before applying for a longer sit. The perspective shift
              from serving is valuable preparation for the challenges of longer courses.
            </li>
            <li>
              <strong>Your daily life reflects the practice</strong> &mdash; are you more
              equanimous in difficult situations? Are the five precepts becoming natural rather
              than effortful? The practice should be changing how you live, not just how you
              sit.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Important Logistics</h2>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Long courses require teacher recommendations</strong> &mdash; for 20-day
              courses and above, you need a recommendation from an Assistant Teacher who knows
              you and your practice well, plus a Full Teacher from your local area. Build these
              relationships through regular courses, service, and group sittings.
            </li>
            <li>
              <strong>6-month gap between long courses</strong> &mdash; you must wait at least
              six months between any long courses (20-day and above). There&apos;s also a
              10-day gap required between a long course and any other course.
            </li>
            <li>
              <strong>Long-course centers are limited</strong> &mdash; only certain centers
              offer courses longer than 10 days. You may need to travel internationally. Plan
              well in advance.
            </li>
            <li>
              <strong>Applications open far ahead</strong> &mdash; long courses are competitive.
              Apply as early as possible, sometimes 6-12 months in advance.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">My Experience</h2>
          <p>
            After six courses, I&apos;ve come to appreciate the progression for what it is: a
            thoughtful structure that protects you from going too deep too fast. Each course built
            on the last in ways I couldn&apos;t have predicted. My second course was harder than
            my first. My fourth was the deepest. And serving between courses changed my
            relationship to the practice more than any single sitting did.
          </p>
          <p>
            The biggest lesson has been patience. I used to look at the 20-day and 30-day
            requirements and think about how to get there faster. Now I understand that the
            daily practice <em>is</em> the path. The courses are milestones, but the real work
            happens between them &mdash; on the cushion at home, every morning, whether you
            feel like it or not.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready for Your Next Course?</h2>
        <p className="mb-6 text-muted">
          Find a center near you and sign up for your next 10-day course, Satipatthana course,
          or check long-course availability.
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

      <PageComments pageId="guide-course-progression" />
    </article>
  );
}
