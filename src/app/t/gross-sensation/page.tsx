import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";

const PAGE_URL = "https://vipassana.cool/t/gross-sensation";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title:
    "Gross Sensation: A Note on the Pali Term and the English Translation",
  description:
    "Gross sensation is the standard English rendering of the Pali oḷārika. The Pali word means coarse-grained, not unpleasant. This is a linguistic note only; the technique itself is taught in the 10-day course.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Gross Sensation: A Note on the Pali Term and the English Translation",
    description:
      "Oḷārika means coarse-grained, not unpleasant. A short translation note.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gross Sensation: A Note on the Pali Term and the English Translation",
    description:
      "Gross, in this context, means coarse-grained. A short note on the translation.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What does 'gross sensation' translate from?",
    answer:
      "It is the standard English rendering of the Pali oḷārika (sometimes spelled olarika; Sanskrit audārika). The paired term is sukhuma, rendered as subtle. Together they describe a resolution: coarse-grained versus fine-grained. They do not describe pleasantness.",
  },
  {
    question: "Does 'gross' mean unpleasant in this context?",
    answer:
      "No. The English word gross is doing technical duty here, the same sense in which we say a gross estimate or the gross motor system. The Pali oḷārika has no connotation of disgusting or off-putting. Conflating gross with unpleasant is a purely English-language artifact.",
  },
  {
    question: "Does this page teach how to work with sensations?",
    answer:
      "No. This page is a linguistic note. How to work with sensations in practice is taught in person during the residential 10-day course, under an authorized assistant teacher. This site does not attempt to reproduce that instruction.",
  },
  {
    question: "Where does the word come from historically?",
    answer:
      "Oḷārika and sukhuma are standard Pali Abhidhamma vocabulary, used across centuries of Theravada commentary. In the modern Goenka lineage they reach students through Ledi Sayadaw, Sayagyi U Ba Khin, and S. N. Goenka, who each taught in Pali-inflected English or vernacular. The English gloss 'gross' is a translation decision made long ago and preserved since.",
  },
  {
    question: "Why does the tradition keep the technique inside the course?",
    answer:
      "The stated reason is that the technique is best learned in the container it was designed for: ten residential days, in silence, with an assistant teacher available to answer questions one on one. A written or video curriculum loses that context. The tradition prefers to keep transmission inside the course rather than publish partial versions.",
  },
  {
    question: "Where do I go to actually learn?",
    answer:
      "The 10-day residential course is the entry point. Applications, schedules, and official information are at dhamma.org. The course is free and runs on donations from previous students.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Gross Sensation", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Gross Sensation: A Note on the Pali Term and the English Translation"
        description="A short linguistic note on oḷārika, the Pali term rendered in English as 'gross sensation.' Not a practice page."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Gross Sensation" },
        ]}
        category="Linguistic Note"
        title="Gross Sensation: A Note on the Pali Term and the English Translation"
        description="The English phrase 'gross sensation' translates the Pali oḷārika. This page is a short note on what that word means in its original context. It is not a practice page, and does not give instructions for working with sensations."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">Note</p>
        <p className="text-sm text-muted">
          This is a short etymological note. It describes what the Pali term oḷārika means and how it came to be rendered as &quot;gross&quot; in English. It does not teach how to work with sensations, or describe any practice sequence. Technique transmission is reserved for the 10-day residential course, taught by an authorized assistant teacher. Information on courses is at{" "}
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
          The translation, in one paragraph
        </h2>
        <p className="mb-4 text-muted">
          &quot;Gross sensation&quot; is the standard English rendering of the Pali oḷārika (sometimes spelled olarika; Sanskrit audārika). The paired term is sukhuma, rendered as &quot;subtle.&quot; The pair describes resolution: coarse-grained versus fine-grained. The Pali words say nothing about whether a sensation is pleasant or unpleasant; that is a separate axis in the tradition&apos;s own vocabulary.
        </p>
        <p className="text-muted">
          The English word &quot;gross&quot; is doing technical duty here, the sense in which we say &quot;a gross estimate&quot; or &quot;the gross motor system.&quot; The connotation of disgusting or off-putting that the word picked up in spoken English is an English-language artifact and does not appear in the Pali source.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why the note matters enough to have a page
        </h2>
        <p className="text-muted">
          The translation is faithful, but the English connotation is misleading. Readers encountering the phrase for the first time often import the everyday sense of the word, and this shows up later as confusion in conversations about practice. A short note that separates the technical sense from the connotative sense is worth publishing. Beyond that, there is nothing on this page about how sensations are worked with on the cushion: that is a matter for the course and the teacher, not for a website.
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
          <Link
            href="/t/gross-sensation-meaning"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Gross sensation: the word and its lineage
          </Link>
          <Link
            href="/t/anapana-and-vipassana"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Anapana and Vipassana: linguistic note
          </Link>
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Find a 10-day course (dhamma.org)
          </a>
        </div>
      </div>

      <PageComments pageId="t-gross-sensation" />
    </article>
  );
}
