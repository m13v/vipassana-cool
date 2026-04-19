import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";

const PAGE_URL = "https://vipassana.cool/t/anapana-and-vipassana";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title: "Anapana and Vipassana: A Short Linguistic and Historical Note",
  description:
    "Anapana and Vipassana are Pali terms with specific meanings. This page explains the words and the lineage through which they reached S. N. Goenka. It does not teach the technique: that is reserved for the 10-day course.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Anapana and Vipassana: A Short Linguistic and Historical Note",
    description:
      "The words, briefly. The lineage, briefly. The technique itself is taught in the 10-day residential course.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anapana and Vipassana: A Short Linguistic and Historical Note",
    description:
      "What the Pali terms mean, and the lineage that carries them. Not a how-to.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What does Anapana mean?",
    answer:
      "Anapana (sometimes Anapana sati) is a Pali term. The rough gloss in English is awareness of breath. The compound is usually broken as ana plus apana, referring to the natural in-breath and out-breath. It appears across the Pali canon in the standard form anapanasati.",
  },
  {
    question: "What does Vipassana mean?",
    answer:
      "Vipassana is a Pali term that translates as something like seeing things as they are, or clear seeing. The prefix vi is often read as a strengthening or clarifying sense, and passana comes from the root meaning to see.",
  },
  {
    question: "Are Anapana and Vipassana taught on this website?",
    answer:
      "No. The technique is reserved for authorized assistant teachers inside the residential 10-day course. This page is a linguistic and historical note. It does not give practice instructions, and the site as a whole does not attempt to teach the technique. If you want to learn, apply for a course at dhamma.org.",
  },
  {
    question: "Where do these terms come from historically?",
    answer:
      "The Goenka tradition traces its lineage in modern Burma through Ledi Sayadaw, to Sayagyi U Ba Khin, to S. N. Goenka. Ledi Sayadaw is a late 19th and early 20th century Burmese monk associated with the revival of lay practice. U Ba Khin was a lay teacher who taught Goenka. Goenka began teaching publicly in India in 1969 and eventually worldwide. The terms themselves predate this lineage by many centuries and appear throughout the Pali canonical and commentarial literature.",
  },
  {
    question: "Why does the tradition reserve technique transmission to the course?",
    answer:
      "The stated reason is that the technique is learned correctly in the container it was designed for: ten days, residential, in silence, with an assistant teacher who can answer questions one on one. A written curriculum or video removes the context in which questions get answered, and risks being misunderstood. The tradition prefers to preserve the transmission inside the course rather than scatter partial versions of it online.",
  },
  {
    question: "Is Anapana the same as what secular apps teach as 'mindfulness of breathing'?",
    answer:
      "They share a linguistic root, since many secular mindfulness-of-breathing presentations cite the Pali suttas that use the term anapanasati. What is taught inside the Goenka 10-day course is its own specific form of practice, transmitted in person. This page will not attempt to describe the mechanics of either; that is properly a matter for the course itself or for a qualified teacher in whichever tradition you are exploring.",
  },
  {
    question: "Where should I go to actually learn?",
    answer:
      "For the Goenka tradition, the answer is the 10-day residential course. Applications, schedules, and all official information are at dhamma.org. Courses are free and run on donations from previous students.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Anapana and Vipassana", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Anapana and Vipassana: A Short Linguistic and Historical Note"
        description="A short linguistic and historical note on the Pali terms Anapana and Vipassana and the lineage through which they reach the Goenka tradition."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Anapana and Vipassana" },
        ]}
        category="Linguistic Note"
        title="Anapana and Vipassana: A Short Linguistic and Historical Note"
        description="Two Pali words, and the lineage that carries them. This page does not teach the technique: the technique is taught in the 10-day residential course by an authorized assistant teacher."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">Note</p>
        <p className="text-sm text-muted">
          This page is a brief note on two Pali terms and on the historical lineage through which they reach the Goenka tradition. It is not a how-to. The technique itself is transmitted in person, during the 10-day residential course, by an authorized assistant teacher. Information on courses is at{" "}
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
          The words, briefly
        </h2>
        <p className="mb-4 text-muted">
          Anapana is a Pali term, usually encountered in the compound anapanasati. The rough English gloss is awareness of breath. Ana and apana refer to the natural in-breath and out-breath. The term occurs throughout the Pali canon.
        </p>
        <p className="text-muted">
          Vipassana is a Pali word often translated as seeing things as they are, or clear seeing. The prefix vi carries a sense of clarifying or distinguishing, and passana comes from the root meaning to see. Like anapana, it is a word with centuries of commentarial use in the Theravada tradition.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The lineage, briefly
        </h2>
        <p className="mb-4 text-muted">
          The modern Goenka lineage, as presented by the tradition itself, runs from Ledi Sayadaw (a late 19th and early 20th century Burmese monk associated with the revival of lay practice) to Sayagyi U Ba Khin (a Burmese lay teacher) to S. N. Goenka, who began teaching publicly in India in 1969 and eventually worldwide. The terms above long predate this specific lineage: they are standard vocabulary in the Pali canonical and commentarial literature. What Goenka inherited from U Ba Khin was the form of practice transmitted within that chain.
        </p>
        <p className="text-muted">
          For the tradition&apos;s own account of its history, the authoritative source is{" "}
          <a
            href="https://www.dhamma.org/en-US/about/goenka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:text-foreground"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why this page is short
        </h2>
        <p className="mb-4 text-muted">
          The Goenka tradition reserves technique transmission to authorized assistant teachers inside the 10-day course. A website is not a place to reproduce that instruction, and this site does not try to. What you will find here are framing notes and linguistic glosses, nothing more. If you want to learn Vipassana in this tradition, the only route is the residential course.
        </p>
        <p className="text-muted">
          Apply at{" "}
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
        description="Free Practice Buddy matching pairs you with another meditator who has also completed a 10-day course. You sit together on a shared Google Meet link at the same time each morning. No app, no teaching."
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

      <PageComments pageId="t-anapana-and-vipassana" />
    </article>
  );
}
