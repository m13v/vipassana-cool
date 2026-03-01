import type { Metadata } from "next";
import { PageComments } from "@/components/comments";
import { TrackedCTA, TrackedLink } from "@/components/tracked-events";

export const metadata: Metadata = {
  title: "How to Use dhamma.org — Step-by-Step Guide",
  description:
    "A complete walkthrough of dhamma.org: how to find a center, choose a course, fill out the application, and what to expect during the registration process.",
};

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Guide
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        How to Use dhamma.org
      </h1>
      <p className="mb-12 text-lg text-muted">
        dhamma.org is the official website for Vipassana meditation courses in the tradition
        of S.N. Goenka. It can feel a bit overwhelming the first time. Here&apos;s a
        clear walkthrough.
      </p>

      {/* Guide articles */}
      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        {[
          {
            href: "/guide/first-course-tips",
            title: "First Course Tips",
            desc: "15 things I wish I knew before my first retreat.",
          },
          {
            href: "/guide/daily-practice",
            title: "Daily Practice",
            desc: "How to maintain your practice at home.",
          },
          {
            href: "/guide/anapana-and-vipassana-explained",
            title: "Anapana & Vipassana",
            desc: "Two techniques, one practice — explained.",
          },
          {
            href: "/guide/sensations-and-experiences",
            title: "Sensations Explained",
            desc: "Gross, subtle, bhanga, and free flow.",
          },
          {
            href: "/guide/how-vipassana-changes-you",
            title: "How It Changes You",
            desc: "The gradual, real shift that practice creates.",
          },
          {
            href: "/guide/vipassana-and-relationships",
            title: "Relationships",
            desc: "Coming home different and navigating the impact.",
          },
          {
            href: "/guide/restarting-your-practice",
            title: "Restart Your Practice",
            desc: "How to get back on the cushion after a break.",
          },
          {
            href: "/guide/course-application-tips",
            title: "Application Tips",
            desc: "How to fill out the course application.",
          },
          {
            href: "/guide/vipassana-vs-other-meditation",
            title: "Vipassana vs Others",
            desc: "How Vipassana compares to other techniques.",
          },
          {
            href: "/guide/risks-and-safety",
            title: "Risks & Safety",
            desc: "What to know about safety and side effects.",
          },
        ].map((card) => (
          <TrackedLink
            key={card.href}
            href={card.href}
            event="guide_card_click"
            properties={{ topic: card.title }}
            className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50 hover:bg-card-hover"
          >
            <h2 className="font-semibold text-foreground group-hover:text-accent">
              {card.title}
            </h2>
            <p className="mt-1 text-sm text-muted">{card.desc}</p>
          </TrackedLink>
        ))}
      </div>

      <h2 className="mb-6 text-2xl font-bold">How to Use dhamma.org</h2>

      <div className="space-y-12">
        <Section number="1" title="Understand What You're Signing Up For">
          <p>
            Vipassana courses are <strong>10-day residential retreats</strong>. You arrive
            the evening before (Day 0), stay for 10 full days of meditation, and leave
            the morning of Day 11. That&apos;s approximately 12 nights total.
          </p>
          <p>
            Key requirements you should know upfront:
          </p>
          <ul className="ml-4 list-disc space-y-2 pl-4">
            <li>Complete silence (no talking, gestures, eye contact, or phone use)</li>
            <li>No reading, writing, or any other entertainment</li>
            <li>Men and women are completely separated</li>
            <li>Wake up at 4:00 AM, lights out at 9:30 PM</li>
            <li>About 10 hours of meditation per day</li>
            <li>Vegetarian meals — no dinner, just a light snack with tea at 5 PM</li>
            <li>You commit to staying the full 10 days</li>
          </ul>
          <p>
            This is not a spa retreat. It is serious, focused inner work. But it is also
            one of the most profound experiences you can have.
          </p>
        </Section>

        <Section number="2" title="Find a Center Near You">
          <p>
            Go to{" "}
            <a
              href="https://www.dhamma.org/en/locations/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              dhamma.org/en/locations/directory
            </a>{" "}
            to browse the list of centers worldwide. There are over 200 centers across
            every continent.
          </p>
          <p>
            Each center has a Pali name starting with &ldquo;Dhamma&rdquo; (e.g., Dhamma
            Mahavana in California, Dhamma Dipa in England). Click on a center to see
            its location, contact info, and course schedule.
          </p>
          <Tip>
            If there&apos;s no dedicated center near you, look for &ldquo;non-center
            courses&rdquo; — these are held at rented facilities and are equally legitimate.
            Check{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-foreground"
            >
              the non-center schedule
            </a>
            .
          </Tip>
        </Section>

        <Section number="3" title="Choose Your Course Type">
          <p>
            For first-time students, you can <strong>only</strong> take a 10-day course.
            There are no shorter options for new students. This is non-negotiable.
          </p>
          <p>After completing your first 10-day course, additional options open up:</p>
          <ul className="ml-4 list-disc space-y-2 pl-4">
            <li><strong>10-day courses</strong> — The standard; you can retake as many as you like</li>
            <li><strong>Satipatthana Sutta course</strong> — A special 10-day course focused on the Buddha&apos;s discourse on mindfulness</li>
            <li><strong>20-day, 30-day, 45-day courses</strong> — Longer courses for serious practitioners</li>
            <li><strong>Service (Dhamma Seva)</strong> — Volunteer at a center while maintaining your practice</li>
          </ul>
          <Tip>
            Doing service is highly recommended for your second experience. You help run the
            course (cooking, cleaning, managing) while meditating during free time. It
            deepens your practice in a completely different way.
          </Tip>
        </Section>

        <Section number="4" title="Fill Out the Application">
          <p>
            From the center&apos;s page, click on a specific course date to apply. The
            application form asks:
          </p>
          <ul className="ml-4 list-disc space-y-2 pl-4">
            <li>Personal information (name, age, contact)</li>
            <li>Physical and mental health history — be honest, this is important</li>
            <li>Previous meditation experience</li>
            <li>Whether you can commit to all 10 days</li>
            <li>Agreement to the Code of Discipline</li>
          </ul>
          <p>
            <strong>About the health questions:</strong> They ask about psychiatric
            conditions, substance use, and physical limitations. This isn&apos;t gatekeeping
            — Vipassana involves intense introspection that can be destabilizing for
            people with certain conditions. Answer honestly for your own safety.
          </p>
        </Section>

        <Section number="5" title="Wait for Acceptance">
          <p>
            After submitting, you&apos;ll receive a confirmation email. Courses fill up
            quickly, especially at popular centers. You may be:
          </p>
          <ul className="ml-4 list-disc space-y-2 pl-4">
            <li><strong>Accepted</strong> — You&apos;ll get instructions about arrival time, what to bring, and logistics</li>
            <li><strong>Wait-listed</strong> — Spots often open up. Keep your schedule flexible</li>
            <li><strong>Not accepted</strong> — Usually due to health concerns. The center may follow up for clarification</li>
          </ul>
          <Tip>
            Apply 2–3 months in advance. Popular centers and times (summer, holidays)
            fill up fast. If your first choice is full, try neighboring centers or
            different dates.
          </Tip>
        </Section>

        <Section number="6" title="Understanding the 'Old Student' System">
          <p>
            dhamma.org has a concept of &ldquo;old students&rdquo; and &ldquo;new
            students.&rdquo; Once you complete one 10-day course, you become an
            &ldquo;old student.&rdquo; This unlocks:
          </p>
          <ul className="ml-4 list-disc space-y-2 pl-4">
            <li>Access to old student-only course types</li>
            <li>Ability to serve (volunteer) at courses</li>
            <li>Access to the &ldquo;For Old Students&rdquo; section of the website with additional resources</li>
            <li>Ability to donate to support future courses</li>
          </ul>
          <p>
            The &ldquo;For Old Students&rdquo; section on the website isn&apos;t prominently
            linked — look for it in the navigation or go directly to the center&apos;s
            website.
          </p>
        </Section>

        <Section number="7" title="About Donations">
          <p>
            All courses are free. After completing a course, you may donate any amount
            to help future students attend. This is entirely optional and there is
            absolutely no pressure.
          </p>
          <p>
            The donation model is central to Vipassana: you benefited from someone
            else&apos;s generosity, and now you can pay it forward. Even small amounts
            matter.
          </p>
        </Section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready to Apply?</h2>
        <p className="mb-6 text-muted">
          Visit dhamma.org to find a center near you and check the course schedule.
        </p>
        <TrackedCTA
          href="https://www.dhamma.org/en-US/courses/search"
          event="cta_click"
          properties={{ label: "Browse Course Schedule", location: "guide" }}
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Browse Course Schedule
        </TrackedCTA>
      </div>
      <PageComments pageId="guide" />
    </article>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 text-xl font-bold">
        <span className="mr-2 text-accent">{number}.</span>
        {title}
      </h2>
      <div className="space-y-4 text-muted">{children}</div>
    </section>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-accent/20 bg-accent/5 p-4 text-sm">
      <span className="font-semibold text-accent">Tip: </span>
      {children}
    </div>
  );
}
