import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";

const PAGE_URL = "https://vipassana.cool/guide/daily-practice";
const PUBLISHED = "2025-01-15";

export const metadata: Metadata = {
  title: "Why Daily Practice Matters After a Vipassana Course",
  description:
    "Why daily practice after a 10-day Goenka course is important: habit, consistency, integration, and community. A non-teaching reflection for old students. This page does not describe technique.",
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "What does the Goenka tradition recommend for daily practice?",
    answer:
      "After a 10-day course, old students are encouraged to continue sitting daily, traditionally two hours per day (one in the morning, one in the evening). The instructions for what that practice consists of were given during the course itself.",
  },
  {
    question: "Why does daily practice matter after the course?",
    answer:
      "A 10-day course is the foundation. Daily practice afterward is what integrates the course into ordinary life. The tradition treats it as the means by which the work begun at the center is sustained and deepened over time.",
  },
  {
    question: "What if I can't sit two hours a day?",
    answer:
      "Many old students do not, at least not consistently. This is normal and well known. The tradition's own guidance is that two hours is the recommendation, not a test you pass or fail. What matters most is maintaining some form of daily continuity and returning to a course periodically.",
  },
  {
    question: "Where should I go with technique questions?",
    answer:
      "To an assistant teacher. Most centers have question time during courses and group sittings, and you can also reach out to your regional center by email or phone. Teachers are the appropriate source for technique guidance in this tradition, not websites or forums.",
  },
  {
    question: "How do I keep the habit alive between courses?",
    answer:
      "Common supports include a consistent time and place for sitting each day, attending weekly group sittings with other old students, taking at least one course per year, and, for some people, being paired with a Practice Buddy for mutual accountability.",
  },
  {
    question: "What is a Practice Buddy?",
    answer:
      "A Practice Buddy is a fellow old student from the same tradition who agrees to sit with you regularly over video, in silence. The practice itself is not shared or discussed during the sit: the point is showing up together, as mutual accountability. See /practice-buddy/how-it-works for details.",
  },
];

export default function DailyPracticePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guide", url: "https://vipassana.cool/guide" },
          { name: "Daily Practice", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Why Daily Practice Matters After a Vipassana Course"
        description="A non-teaching reflection on habit, consistency, and community as the foundation of daily practice after a 10-day course."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />
      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guide", href: "/guide" },
          { label: "Daily Practice" },
        ]}
        category="After Your Course"
        title="Why Daily Practice Matters"
        description="The course plants the seed. Daily practice is what keeps it alive. This page is about habit and continuity, not technique."
        datePublished={PUBLISHED}
      />

      <div className="mb-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="text-sm font-medium text-accent mb-1">TL;DR</p>
        <p className="text-sm text-muted">
          The Goenka tradition recommends that old students sit daily after the course, traditionally two hours per day. What happens inside a sitting is taught at the course itself, not here. This page is about the surrounding question: why daily continuity matters, why most practitioners struggle with it at some point, and the supports (community, group sittings, annual courses, Practice Buddies) that help the habit survive ordinary life.
        </p>
      </div>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">A note on what this page is and is not</h2>
          <p>
            In the Goenka tradition, the meditation technique is transmitted at a 10-day residential course by an authorized teacher. What you do during a sitting was explained there, in the context it belongs in. This page does not re-describe that, because doing so would sit outside the tradition&apos;s long-standing guidance to old students.
          </p>
          <p>
            What this page is about is the frame around the sitting: why daily practice is considered important, why it is hard to keep up, and what seems to help.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What the tradition recommends</h2>
          <p>
            At the end of a 10-day course, old students are asked to maintain daily practice. The traditional recommendation is two hours per day, divided into a morning and an evening sitting. This is the framing Goenka himself gave, and it is repeated by assistant teachers.
          </p>
          <p>
            The recommendation is an orientation, not a test. Many old students, over a long practice life, move in and out of that two-hour mark depending on work, family, and health. The value of the recommendation is in the direction it points, not in perfect compliance.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why continuity matters more than heroics</h2>
          <p>
            A single long sitting, once in a while, is not what the tradition asks for. It asks for a daily relationship with the practice. That daily-ness is what lets the course gradually seep into ordinary life: how you react in traffic, how you speak to family, how you sit with difficulty at work.
          </p>
          <p>
            Showing up each day, even briefly, keeps the thread unbroken. A missed day is not the problem. A missed month, without a path back, is.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why practice lapses are normal</h2>
          <p>
            Essentially every long-term practitioner has stopped at some point, for weeks, months, sometimes longer. New babies, new jobs, grief, travel, illness, and the sheer gravity of ordinary life all pull at the morning schedule. This is so common in the old-student community that it barely needs to be said.
          </p>
          <p>
            Guilt about this tends to make things worse, not better. The tradition&apos;s framing is more practical: notice the gap, come back, sit again tomorrow. If the gap has been very long, a course is a natural way to re-anchor.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Things that help the habit survive</h2>
          <p>
            Across the old-student community, a few patterns come up again and again as supports for continuity. None of them are about technique; they are about structure around the practice.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Same time, same place.</strong> Removing decisions is the first kindness you can do for your future self. Early morning, before the day starts, tends to be the most protected time for most people.
            </li>
            <li>
              <strong>Annual course.</strong> Sitting a course at least once a year is strongly encouraged in the tradition and is often what resets a faltering practice.
            </li>
            <li>
              <strong>Group sittings.</strong> Many centers host weekly group sittings for old students. Sitting alongside others creates gentle accountability and continuity. See <Link href="/guide/group-sittings" className="text-accent underline hover:text-foreground">group sittings</Link> for more.
            </li>
            <li>
              <strong>Community.</strong> Being known by other old students, even loosely, keeps the practice from becoming purely private and fragile.
            </li>
            <li>
              <strong>Accountability partner.</strong> Some old students find it helpful to be paired with another old student for daily shared sittings over video, in silence. See <Link href="/practice-buddy/how-it-works" className="text-accent underline hover:text-foreground">Practice Buddy</Link>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Fitting practice into ordinary life</h2>
          <p>
            Daily sitting does not require a dedicated room, a perfect cushion, or a silent house. It requires a slot that is protected well enough that it does not collapse the first time life is busy. Old students with small children, demanding jobs, or shared living situations have all found workable arrangements, usually by sitting before anyone else is awake and treating the time as non-negotiable the way meals or sleep are non-negotiable.
          </p>
          <p>
            Communicate the schedule with the people you live with plainly, not apologetically. Over months, the household usually adjusts around it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Where to take technique questions</h2>
          <p>
            Any question about what is happening inside a sitting, what to do with a particular difficulty, or how to adjust your practice belongs with an assistant teacher, not with the internet. Centers welcome questions from old students by email, phone, and in person at group sittings and during courses. That is the line of communication the tradition provides for exactly this.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The long view</h2>
          <p>
            A practice measured in decades looks nothing like a heroic streak. It looks like many returns. Some months are steady, some are sparse, some are interrupted by a course or a retreat. The thread that makes it a practice is the returning. Everything else is incidental.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Frequently asked questions</h2>
          <div className="mt-4 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-l-2 border-accent/30 pl-4">
                <h3 className="mb-1 font-semibold text-foreground">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <PracticeBuddyCta
        heading="Need accountability for daily practice?"
        description="The hardest part of daily practice is doing it alone. Get matched with a fellow old student for daily sits over video. Silent, free, tradition-respectful."
      />

      <div className="mt-8 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Sit another course</h2>
        <p className="mb-6 text-muted">
          A 10-day course is the tradition&apos;s own way of resetting and deepening practice. Find one near you.
        </p>
        <a
          href="https://www.dhamma.org/en-US/courses/search"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a course
        </a>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/guide/group-sittings" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Group Sittings
          </Link>
          <Link href="/guide/find-a-retreat" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Find a Retreat
          </Link>
          <Link href="/guide/course-application-tips" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Course Application Tips
          </Link>
          <Link href="/practice-buddy/how-it-works" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Practice Buddy
          </Link>
          <Link href="/experience" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Student Experiences
          </Link>
        </div>
      </div>

      <PageComments pageId="guide-daily-practice" />
    </article>
  );
}
