import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-3-month-beginner-program-daily-practice";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title:
    "Why We Do Not Publish a 3-Month Vipassana Home Program",
  description:
    "There is no official Goenka 3-month at-home beginner program, and this site does not publish one. The technique is reserved for authorized teachers inside the 10-day residential course. Here is why, and where to sign up for a real course.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Why We Do Not Publish a 3-Month Vipassana Home Program",
    description:
      "The Goenka tradition reserves technique transmission for authorized teachers in the residential 10-day course. Here is why, and where to sign up.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why We Do Not Publish a 3-Month Vipassana Home Program",
    description:
      "No home curriculum replaces the 10-day course. Here is why the tradition is structured this way, and where to register.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question:
      "Is there an official Goenka 3-month vipassana program for beginners?",
    answer:
      "No. The Goenka tradition does not publish a 3-month at-home beginner program. The official and only entry point into the technique is the residential 10-day course taught by an authorized assistant teacher. Information and application forms for courses worldwide are at dhamma.org.",
  },
  {
    question:
      "Can I learn Vipassana at home before attending a course?",
    answer:
      "In the Goenka tradition, the technique itself is taught in person during the 10-day residential course. This site does not attempt to teach it and does not host practice curricula. The recommendation is simple: apply for a 10-day course at dhamma.org. Courses are free, run on a donation basis, and are the only place the technique is formally transmitted.",
  },
  {
    question:
      "Why does the tradition reserve teaching to authorized teachers?",
    answer:
      "The tradition takes the view that the technique is learned correctly in the container it was designed for: ten days in silence, with an assistant teacher who can answer questions one on one, in a group of students going through the same arc at the same time. A written or video curriculum removes the context in which questions get answered. Rather than ship a partial version that risks being misunderstood, the tradition preserves transmission for the course.",
  },
  {
    question:
      "What does the 10-day course actually look like as a logistical container?",
    answer:
      "It is a residential retreat. You arrive on day zero, hand in your phone and any reading material, and keep noble silence through day ten morning. Days are structured around scheduled sittings, group discourses in the evening, and meals. Accommodation and food are provided. Courses run continuously at centers around the world. The full schedule and code of discipline is published at dhamma.org.",
  },
  {
    question:
      "What is Vipassana in the Goenka tradition, briefly?",
    answer:
      "Vipassana is a Pali word meaning something like seeing things as they are. In the Goenka lineage, it is a practice transmitted through Ledi Sayadaw, Sayagyi U Ba Khin, and S. N. Goenka. This page is a framing note, not an instruction page. The technique itself is taught in the residential course.",
  },
  {
    question:
      "What does this site actually do, if it is not teaching the technique?",
    answer:
      "This site exists for people who have already completed a 10-day course and want a daily sitting partner. It pairs old students with each other on a shared Google Meet link so they can sit together at the same time each morning, which is the single most useful structure for keeping a daily practice alive between courses. It does not teach, and does not attempt to replace, the course itself.",
  },
  {
    question:
      "Where can I find the real course?",
    answer:
      "At dhamma.org. Every authorized Goenka center worldwide lists its course schedule and application process there. The course is the only place the tradition formally teaches.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          {
            name: "Why No 3-Month Home Program",
            url: PAGE_URL,
          },
        ]}
      />
      <ArticleSchema
        title="Why We Do Not Publish a 3-Month Vipassana Home Program"
        description="A framing note on why this site does not publish an at-home Vipassana curriculum. The technique is taught by authorized teachers in the 10-day residential course."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Why No 3-Month Home Program" },
        ]}
        category="Framing Note"
        title="Why We Do Not Publish a 3-Month Vipassana Home Program"
        description="People search for at-home Vipassana curricula all the time. This site does not publish one, because the tradition does not teach the technique outside of the residential 10-day course. Here is why, and where to go instead."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">Short version</p>
        <p className="text-sm text-muted">
          There is no official Goenka 3-month at-home beginner program, and this site does not publish one. The technique is reserved for authorized assistant teachers inside the 10-day residential course. The correct next step, if you want to learn, is to apply for a course at{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            dhamma.org
          </a>
          .
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why no home curriculum
        </h2>
        <p className="mb-4 text-muted">
          The Goenka tradition is old-school about one thing in particular: the technique is transmitted in person, by an authorized teacher, inside a specific container (ten days, residential, silent, with scheduled sittings and group discourses). Outside that container, the tradition does not publish step-by-step instructions, day-by-day progressions, or at-home curricula. Not in books, not on the web, not here.
        </p>
        <p className="mb-4 text-muted">
          The reason is practical, not ceremonial. The course is structured so that questions get answered one on one by someone trained to answer them, in a group of students going through the same arc at the same time. A written or video curriculum strips that context. Rather than ship a partial version that is likely to be misunderstood, the tradition keeps the transmission attached to the container it was designed for.
        </p>
        <p className="text-muted">
          This site respects that. You will not find a practice sequence, a daily minute count, or a technique how-to on any page here.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The course as a logistical container
        </h2>
        <p className="mb-4 text-muted">
          What this page can describe, without crossing into instruction, is the shape of the course itself. It runs for ten full days at a residential center. You arrive on day zero, settle in, and begin noble silence. You hand in your phone, books, and writing materials at the start. Meals, accommodation, and all instruction are provided. There is no charge: courses run entirely on donations from students who have completed previous courses.
        </p>
        <p className="text-muted">
          The full schedule, code of discipline, and application process are documented at{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            dhamma.org
          </a>
          . That is the only source you should rely on.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What this site does instead
        </h2>
        <p className="mb-4 text-muted">
          This site is for people who have already completed a 10-day course and want a daily sitting partner between courses. It pairs old students with each other on a shared Google Meet link so they can sit together at the same time each morning. It does not teach the technique, does not replace the course, and does not attempt to shortcut the transmission.
        </p>
        <p className="text-muted">
          If you have not sat a 10-day yet, the page you actually want is the course application form at dhamma.org. If you have sat one and need a daily structure, read on.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card p-5 open:border-accent/30 open:bg-accent/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-foreground">
                <span>{f.question}</span>
                <span className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <PracticeBuddyCta
        heading="For old students: keep the daily sit alive"
        description="Free Practice Buddy matching pairs you with another meditator who has also completed a 10-day course, inside a 60-minute UTC overlap. You sit together over Google Meet. No app, no teaching, no curriculum."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related</h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Find a 10-day course (dhamma.org)
          </a>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Practice Buddy mechanics
          </Link>
        </div>
      </div>

      <PageComments pageId="t-vipassana-3-month-beginner-program" />
    </article>
  );
}
