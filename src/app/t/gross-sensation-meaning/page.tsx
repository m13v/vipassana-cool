import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";

const PAGE_URL = "https://vipassana.cool/t/gross-sensation-meaning";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title:
    "Gross Sensation Meaning: The Word, Its Origin, and Its Lineage",
  description:
    "A brief etymology of the term 'gross sensation' in the Goenka tradition. It translates the Pali oḷārika. This page does not teach how to work with sensations.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Gross Sensation Meaning: The Word, Its Origin, and Its Lineage",
    description:
      "Short etymology of oḷārika and the lineage through which the English gloss 'gross sensation' reaches modern students.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gross Sensation Meaning: The Word, Its Origin, and Its Lineage",
    description:
      "The word means coarse-grained. A short note on origin and lineage.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "What is the origin of the term 'gross sensation'?",
    answer:
      "It is the standard English translation of the Pali oḷārika, a technical term used across centuries of Theravada Abhidhamma commentary. Oḷārika means coarse-grained, blocky, palpable. Its pair is sukhuma, meaning fine-grained, and together the two describe a resolution, not a valence.",
  },
  {
    question: "How does the term reach modern students?",
    answer:
      "Through the lineage the Goenka tradition traces in modern Burma: Ledi Sayadaw (late 19th and early 20th century), Sayagyi U Ba Khin (20th century), and S. N. Goenka, who began teaching publicly in 1969. Each node in the chain worked in Pali-inflected English or vernacular, and the English gloss 'gross' was standardized along the way.",
  },
  {
    question: "Does this page teach me what to do with sensations?",
    answer:
      "No. This page is etymology only. Instruction on how to work with sensations in practice is reserved for the 10-day residential course, delivered in person by an authorized assistant teacher. This site does not reproduce that instruction.",
  },
  {
    question: "How is this page different from the companion page on gross sensation?",
    answer:
      "This one is focused on origin and lineage (where the word comes from, how it reaches the modern tradition). The companion page is focused on the translation issue (that the English word 'gross' carries a connotation the Pali source does not). Both are short linguistic notes.",
  },
  {
    question: "What does oḷārika literally mean?",
    answer:
      "Coarse, blocky, palpable, low-resolution. The sense in English is closer to 'a gross estimate' or 'the gross motor system' than to the everyday colloquial use of the word. It describes the grain of a sensation relative to the awareness observing it, not whether the sensation is welcome or unwelcome.",
  },
  {
    question: "Why does the tradition reserve teaching to authorized teachers?",
    answer:
      "The stated reason is that the technique is learned correctly inside the container it was designed for: ten days, residential, in silence, with an assistant teacher answering questions one on one. A written or video curriculum removes that context. The tradition preserves the transmission inside the course rather than publish partial versions.",
  },
  {
    question: "Where should I go to actually learn?",
    answer:
      "Apply for a 10-day residential course at dhamma.org. The course is free, runs on donations from previous students, and is the only place the technique is formally taught.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Gross Sensation Meaning", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Gross Sensation Meaning: The Word, Its Origin, and Its Lineage"
        description="A short etymology of the term 'gross sensation' and a note on the lineage through which it reaches modern students. Not a practice page."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Gross Sensation Meaning" },
        ]}
        category="Linguistic Note"
        title="Gross Sensation Meaning: The Word, Its Origin, and Its Lineage"
        description="Where the English phrase 'gross sensation' comes from, and the lineage that carries it into the Goenka tradition. This page is an etymology note. It does not describe any practice sequence."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">Note</p>
        <p className="text-sm text-muted">
          This is an etymology and lineage note. It does not teach how to work with sensations in practice. Technique transmission is reserved for the 10-day residential course, taught in person by an authorized assistant teacher. Course information is at{" "}
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
          The word
        </h2>
        <p className="mb-4 text-muted">
          Oḷārika (sometimes spelled olarika; Sanskrit audārika) is a Pali term meaning coarse, blocky, palpable, low-resolution. Its paired opposite is sukhuma, meaning fine-grained. These two words describe a resolution axis: how coarse or how fine the grain of an observed sensation is. They are standard vocabulary across centuries of Theravada Abhidhamma commentary.
        </p>
        <p className="text-muted">
          When the tradition&apos;s English-language teachers settled on the word &quot;gross&quot; for oḷārika, they were using the technical sense of the English word, the same sense we use when we say &quot;a gross estimate.&quot; The colloquial connotation of disgusting does not come from the Pali and was not intended by the translation.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The lineage
        </h2>
        <p className="mb-4 text-muted">
          In the modern Goenka lineage, the tradition traces its chain of transmission through Ledi Sayadaw, a late 19th and early 20th century Burmese monk associated with the revival of lay practice, to Sayagyi U Ba Khin, a Burmese lay teacher, to S. N. Goenka, who began teaching publicly in India in 1969 and whose courses later spread worldwide. Each node in this chain worked in Pali-inflected English, Burmese, or Hindi, and the English gloss &quot;gross sensation&quot; was standardized along the way as the tradition moved into English-speaking settings.
        </p>
        <p className="text-muted">
          The Pali words themselves, of course, long predate this specific lineage. They are canonical and commentarial vocabulary with stable meanings across centuries.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          What this page is not
        </h2>
        <p className="text-muted">
          It is not a field guide, not a diagnostic, and not a practice instruction. It is an etymology note. How sensations are actually worked with on the cushion is a matter for the 10-day course, where an assistant teacher can answer questions one on one. If that is what you are looking for, the only source to trust is the tradition&apos;s own, at{" "}
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
          <Link
            href="/t/gross-sensation"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Gross sensation: the translation note
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

      <PageComments pageId="t-gross-sensation-meaning" />
    </article>
  );
}
