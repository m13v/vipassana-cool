import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Vipassana Dhamma Service (Seva) — What It's Like to Volunteer",
  description:
    "Everything you need to know about Vipassana Dhamma service: what seva involves, server roles, daily schedule, how to apply, and why serving deepens your meditation practice.",
};

export default function DhammaServicePage() {
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
        Dhamma Service (Seva)
      </h1>
      <p className="mb-12 text-lg text-muted">
        Serving at a Vipassana course is one of the most underrated ways to deepen your
        practice. Here&apos;s what it actually involves, what to expect, and why so many
        experienced meditators say serving changed their practice more than sitting did.
      </p>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What Is Dhamma Service?</h2>
          <p>
            Dhamma service &mdash; also called <em>seva</em> &mdash; is the tradition of
            volunteering at a Vipassana course. Servers handle everything that makes a course
            run: cooking meals, cleaning facilities, managing logistics, and supporting students.
            Every Vipassana course you&apos;ve attended was made possible by servers who gave
            their time so you could practice.
          </p>
          <p>
            But service isn&apos;t just volunteering. In the Vipassana tradition, it&apos;s
            considered a core part of the practice itself &mdash; an opportunity to apply
            meditation in the context of real work, real interactions, and real challenges. As
            Goenka put it, it&apos;s where you learn to take the Dhamma off the cushion and into
            the world.
          </p>
          <p>
            All courses run entirely on donations and volunteer service. There are no paid staff
            at course sites. This model has sustained Vipassana for decades, and it works because
            students who benefit from the practice want to give back.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Who Can Serve?</h2>
          <p>
            The basic requirement is simple: you must have completed at least one 10-day Vipassana
            course with S.N. Goenka or one of his Assistant Teachers. You should also:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Be maintaining a daily meditation practice</li>
            <li>Not be practicing any other meditation technique since your last course</li>
            <li>Be observing the five precepts to the best of your ability</li>
          </ul>
          <p>
            That&apos;s it. You don&apos;t need years of experience or multiple courses under
            your belt. If you&apos;ve completed one 10-day course and you&apos;re maintaining
            your practice, you can serve.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Types of Service Roles</h2>
          <p>
            A typical 10-day course needs around 8 full-time servers, though larger centers may
            have more. Here are the main roles:
          </p>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Kitchen Team</h3>
              <p>
                The backbone of every course. Kitchen servers prepare breakfast, lunch, and the
                evening tea/snack for all students and staff. This means early mornings (often
                starting at 4:30 AM), meal prep, cooking, serving, and cleanup. The work is
                physical and constant, but there&apos;s a meditative rhythm to it. You learn to
                chop vegetables with awareness, to stay equanimous when the soup pot boils over,
                and to serve with genuine goodwill.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Course Manager</h3>
              <p>
                Course managers are the primary point of contact for students &mdash; handling
                logistics, addressing concerns, and ensuring the course runs smoothly. Female
                managers work with female students, male managers with male students. This role
                requires more experience and is often filled by servers who have served multiple
                times. Course managers are the <em>only</em> servers who interact directly with
                sitting students.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Maintenance and Cleaning</h3>
              <p>
                Keeping the center clean and functional: bathrooms, common areas, meditation
                halls, and grounds. Less glamorous, equally essential. If you prefer quiet,
                independent work, this can be a good fit.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Registration and Admin</h3>
              <p>
                Handling student arrivals, paperwork, room assignments, and departure logistics.
                This role is busiest on Day 0 (arrival day) and Day 11 (departure day), with
                lighter duties in between.
              </p>
            </div>
          </div>

          <p className="mt-4">
            You don&apos;t typically get to choose your role. When you apply to serve, you may
            indicate preferences, but the center assigns you where they need you most. Flexibility
            and willingness to do whatever is needed &mdash; that&apos;s part of the practice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">A Server&apos;s Daily Schedule</h2>
          <p>
            The server schedule runs parallel to the student schedule but with work periods
            replacing some meditation hours. A typical day looks something like this:
          </p>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 text-left font-semibold text-foreground">Time</th>
                  <th className="py-2 text-left font-semibold text-foreground">Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr><td className="py-2 pr-4 whitespace-nowrap">4:00 AM</td><td className="py-2">Wake-up bell</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">4:30 AM</td><td className="py-2">Morning meditation or work period (kitchen servers start breakfast prep)</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">6:30 AM</td><td className="py-2">Breakfast service and cleanup</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">8:00 - 9:00 AM</td><td className="py-2">Group sitting in the meditation hall (all servers attend)</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">9:00 AM</td><td className="py-2">Work period: lunch prep, cleaning, maintenance</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">11:00 AM</td><td className="py-2">Lunch service and cleanup</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">12:30 PM</td><td className="py-2">Rest / free time / personal meditation</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">2:30 - 3:30 PM</td><td className="py-2">Group sitting in the meditation hall (all servers attend)</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">3:30 PM</td><td className="py-2">Work period: tea/snack prep, various tasks</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">5:00 PM</td><td className="py-2">Tea/snack service and cleanup</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">6:00 - 7:00 PM</td><td className="py-2">Group sitting in the meditation hall (all servers attend)</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">7:00 PM</td><td className="py-2">Evening discourse (servers may attend) or free time</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">9:00 PM</td><td className="py-2">Short meditation or rest</td></tr>
                <tr><td className="py-2 pr-4 whitespace-nowrap">10:00 PM</td><td className="py-2">Lights out</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            The key difference from sitting: servers meditate approximately 3 hours daily during
            the three group sittings, compared to 10+ hours for students. The rest of the time
            is dedicated to work. But the instruction is to treat the work itself as meditation
            &mdash; maintaining awareness and equanimity throughout.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">How Serving Deepens Your Practice</h2>
          <p>
            This is the part that surprised me most. I expected serving to be a nice break from
            the intensity of sitting. Instead, it was a different kind of intensity entirely.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Meditation meets real life</strong> &mdash; on the cushion, equanimity is
              conceptually straightforward. In the kitchen, when you&apos;re behind on meal prep
              and the rice is burning and someone needs help with a different task, equanimity
              becomes a live practice. You discover exactly where your equanimity breaks down.
            </li>
            <li>
              <strong>Ego reduction</strong> &mdash; when you&apos;re scrubbing pots at 7 AM
              or cleaning bathrooms, the ego has nowhere to hide. The work is humble by design.
              You&apos;re not special, you&apos;re not important &mdash; you&apos;re serving.
              This is profoundly useful.
            </li>
            <li>
              <strong>The group sittings hit different</strong> &mdash; when you&apos;ve spent
              the morning doing physical work with awareness, the afternoon group sitting often
              has a quality of depth that&apos;s hard to achieve otherwise. The body is tired
              but the mind is alert. Many servers report their strongest meditation happens
              during service, not during sitting courses.
            </li>
            <li>
              <strong>Gratitude becomes real</strong> &mdash; when you see the effort that goes
              into running a course, you understand what was given to you during your own sits.
              The generosity of the system becomes tangible rather than abstract.
            </li>
            <li>
              <strong>The paramis develop</strong> &mdash; serving cultivates generosity, moral
              conduct, renunciation, effort, patience, and loving-kindness in ways that sitting
              alone cannot. These are the qualities that support deeper meditation.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Practical Details</h2>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Accommodation and Meals</h3>
              <p>
                Servers receive free accommodation and meals &mdash; the same food that students
                eat. Housing is typically shared rooms with other servers, separate from student
                quarters. Bring your own bedding and towels, just like a sitting course.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">No Compensation</h3>
              <p>
                Dhamma service is truly voluntary. There is no payment, stipend, or financial
                compensation of any kind. This is intentional &mdash; service is offered as
                dana (generosity), just as the teaching itself is offered freely. Servers eat
                <em> after</em> students have finished their meals.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">The Five Precepts</h3>
              <p>
                All servers observe the five precepts throughout their service: no killing, no
                stealing, no sexual activity, truthful speech, and no intoxicants. Physical
                contact between servers is also not permitted. The environment is intentionally
                simple and focused.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Noble Silence (Partially)</h3>
              <p>
                Unlike sitting students, servers do talk &mdash; but only as needed for work
                coordination. Social conversation, gossip, and unnecessary talking are
                discouraged. The atmosphere is quieter than normal life but more communicative
                than a sitting course.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Dress Code</h3>
              <p>
                Neat, clean, modest clothing. Nothing revealing or distracting. You&apos;ll be
                doing physical work, so bring comfortable clothes you don&apos;t mind getting
                dirty.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">How to Apply for Service</h2>
          <p>
            The process is similar to applying for a course:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            <li>
              Go to your preferred center&apos;s website through{" "}
              <a
                href="https://www.dhamma.org/en/locations/directory"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline hover:text-foreground"
              >
                dhamma.org
              </a>
            </li>
            <li>Look for the &quot;Service&quot; or &quot;Dhamma Seva&quot; section</li>
            <li>Select the course dates you want to serve</li>
            <li>Fill out the service application (shorter than a sitting application)</li>
            <li>Wait for confirmation &mdash; service positions also fill up, so apply early</li>
          </ol>
          <p className="mt-4">
            Some centers also accept part-time servers who come for a few days rather than the
            full course. This is worth asking about if you can&apos;t commit to the full 12 days
            but still want to serve.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Short-Term vs. Long-Term Service</h2>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Short-Term Service (One Course)</h3>
              <p>
                The most common form. You serve for the duration of a single 10-day course
                (approximately 12 days including setup and departure days). This is where most
                people start, and many servers serve one or two courses per year alongside their
                own sitting courses.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Sit-and-Serve Programs</h3>
              <p>
                Some centers offer programs where you alternate between sitting a course and
                serving the next one. The typical pattern is: serve two courses, then sit one.
                This is a powerful way to deepen practice quickly and is often available for
                stays of a few months.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Long-Term Service (Months or Years)</h3>
              <p>
                For those who want to immerse themselves fully, some centers offer long-term
                service positions with a minimum commitment of several months. Long-term
                servers live at the center, contribute to daily operations, maintain their
                meditation practice with regular sittings, and meet monthly with an Assistant
                Teacher. No stipend or health insurance is provided. This is a lifestyle
                choice, not a job.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Service as a Prerequisite for Longer Courses</h2>
          <p>
            If you&apos;re interested in the{" "}
            <Link href="/guide/course-progression" className="text-accent underline hover:text-foreground">
              course progression path
            </Link>
            , serving is not optional. Dhamma service is a requirement for Special 10-Day courses,
            20-day courses, and all longer courses. Beyond meeting the formal requirement,
            serving prepares you for longer courses in practical ways:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>It builds resilience</strong> &mdash; long courses are mentally demanding.
              Service teaches you to work through difficulty with equanimity, which is exactly
              what you need when you&apos;re on day 15 of a 20-day course and your mind wants
              to leave.
            </li>
            <li>
              <strong>It demonstrates commitment</strong> &mdash; the requirement exists partly
              to ensure that students pursuing longer courses are genuinely committed to the
              tradition, not just seeking intense meditation experiences.
            </li>
            <li>
              <strong>It builds relationships with teachers</strong> &mdash; longer courses
              require recommendations from Assistant Teachers. Serving is one of the best ways
              to build those relationships naturally, as teachers observe your practice and
              your character during service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Common Questions</h2>

          <div className="mt-4 space-y-6">
            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Is it physically demanding?</h3>
              <p>
                It depends on the role. Kitchen work involves standing for long periods, lifting
                pots, and working in a hot environment. Cleaning and maintenance are also
                physical. If you have physical limitations, mention them in your application
                &mdash; centers will try to assign you an appropriate role.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Can I serve right after my first course?</h3>
              <p>
                Yes. Many people serve their second time at a center. In fact, serving early is
                encouraged. You don&apos;t need to be an experienced meditator to contribute
                meaningfully. Willingness and a good attitude matter more than meditation
                experience.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Do I need to bring anything special?</h3>
              <p>
                Comfortable work clothes, toiletries, and any personal meditation supplies
                (cushion, shawl). Centers provide bedding basics at some locations but not all
                &mdash; check with your specific center. You can use your phone during
                designated break times, unlike sitting students.
              </p>
            </div>

            <div className="border-l-2 border-accent/30 pl-4">
              <h3 className="mb-1 font-semibold text-foreground">Is it actually enjoyable?</h3>
              <p>
                Honestly, yes &mdash; in a way that&apos;s different from sitting. There&apos;s
                a camaraderie among servers that you don&apos;t experience during a silent
                course. The work gives you a sense of purpose and contribution. And the
                meditation sessions, though fewer, often feel deeper because of the physical
                activity that precedes them.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">My Experience Serving</h2>
          <p>
            I served my first course in the kitchen, and it humbled me completely. I thought I
            was a decent meditator after a few courses. Then I burned the oatmeal on day 2 and
            watched my equanimity evaporate in about three seconds. That moment taught me more
            about my reactive patterns than an hour on the cushion ever had.
          </p>
          <p>
            What surprised me most was how the meditation improved. The three group sittings
            per day became the highlight &mdash; sitting down after a morning of physical work,
            the mind was alert and the body was tired enough to stay still. Some of my deepest
            sits have happened during service, not during sitting courses.
          </p>
          <p>
            The other servers became some of my closest friends in the practice. There&apos;s
            something about working together in near-silence, sharing a purpose, and navigating
            small challenges with awareness that creates genuine connection. You meet people from
            all walks of life who are all quietly, seriously, working on themselves. That
            community is something you don&apos;t get from sitting courses alone.
          </p>
          <p>
            If you&apos;re on the fence about serving, just do it. Apply for the next course
            at your nearest center. You won&apos;t regret it.
          </p>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready to Serve?</h2>
        <p className="mb-6 text-muted">
          Find a center near you and apply for Dhamma service at an upcoming course.
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

      <PageComments pageId="guide-dhamma-service" />
    </article>
  );
}
