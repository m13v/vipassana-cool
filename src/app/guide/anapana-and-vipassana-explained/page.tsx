import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";

const PAGE_URL = "https://vipassana.cool/guide/anapana-and-vipassana-explained";
const PUBLISHED = "2025-09-01";

export const metadata: Metadata = {
  title: "Anapana and Vipassana: What They Are (Not How to Do Them)",
  description:
    "A plain-language, non-teaching overview of the two meditation techniques taught during a 10-day Goenka course. Historical framing, terminology, and why formal instruction matters. No technique instructions.",
  alternates: { canonical: PAGE_URL },
};

const faqs = [
  {
    question: "What are Anapana and Vipassana in the Goenka tradition?",
    answer:
      "They are the two meditation techniques taught during a 10-day residential course in the tradition of S.N. Goenka, as passed on by Sayagyi U Ba Khin. They are introduced in sequence across the ten days by the teacher and the recorded instructions. This page does not describe how to perform either technique, because the tradition reserves that transmission for the course itself.",
  },
  {
    question: "Why doesn't this site teach the technique?",
    answer:
      "In the Goenka tradition, the technique is transmitted by authorized teachers in the context of a full 10-day course, with prerequisites (Five Precepts, a structured code of discipline, and a complete arc of instruction). Presenting partial instructions online is considered harmful to the student and contrary to the tradition's guidance. Written summaries online cannot replace the in-person environment and the full sequence of discourses and instructions.",
  },
  {
    question: "What does the word Vipassana mean?",
    answer:
      "Vipassana is a Pali word usually translated as 'insight' or 'seeing things as they really are.' In the context of this tradition, it refers specifically to the meditation taught in 10-day courses, said to originate with the historical Buddha and preserved in Burma before being reintroduced more widely by S.N. Goenka from 1969 onward.",
  },
  {
    question: "What does the word Anapana mean?",
    answer:
      "Anapana is a Pali term for awareness of the natural breath. In the 10-day Goenka course it is the first practice introduced, before the Vipassana instructions are given. It is offered as a preparatory stage that supports what comes after.",
  },
  {
    question: "Is Anapana a separate meditation from Vipassana?",
    answer:
      "Anapana and Vipassana are taught as distinct but related practices within the same ten-day curriculum. In this tradition they are not presented as two independent techniques to pick between, but as parts of one instructional arc delivered by the teacher.",
  },
  {
    question: "Where can someone actually learn the technique?",
    answer:
      "Through a 10-day residential course offered at centers worldwide. All courses are run on a donation basis, with no fees for tuition, food, or lodging. Course schedules and applications are at dhamma.org.",
  },
  {
    question: "Can I learn Vipassana from a book, video, or app?",
    answer:
      "In the Goenka tradition, no. The technique is taught only in the context of a complete 10-day course with an authorized assistant teacher and the recorded instructions of S.N. Goenka. Books and interviews can give framing and context, but they are not a substitute for the course.",
  },
];

export default function AnapanaVipassanaExplainedPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guide", url: "https://vipassana.cool/guide" },
          { name: "Anapana and Vipassana", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Anapana and Vipassana: What They Are"
        description="A non-teaching overview of the two meditation techniques taught during a 10-day Goenka course. Framing and terminology only."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />
      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guide", href: "/guide" },
          { label: "Anapana and Vipassana" },
        ]}
        category="Understanding the Tradition"
        title="Anapana and Vipassana: What They Are"
        description="A high-level, non-teaching overview of the two techniques taught in the 10-day Goenka course. For how to actually practice them, attend a course."
        datePublished={PUBLISHED}
      />

      <div className="mb-8 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="text-sm font-medium text-accent mb-1">TL;DR</p>
        <p className="text-sm text-muted">
          Anapana and Vipassana are the two meditation techniques taught during a 10-day residential course in the tradition of S.N. Goenka. The course itself, led by an authorized teacher with Goenka&apos;s recorded instructions, is where the techniques are transmitted, by design. This page offers definitional and historical framing only. It does not teach you how to practice, because a 10-day course is how that happens in this tradition.
        </p>
      </div>

      <div className="space-y-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">A note before anything else</h2>
          <p>
            In the Goenka tradition, the meditation technique is transmitted in person, inside a complete 10-day course, by authorized teachers using Goenka&apos;s recorded instructions. That structure is intentional, and it has been kept that way for decades because students receive the instructions in a specific order, with the necessary context, code of discipline, and support around them.
          </p>
          <p>
            This article does not reproduce the instructions. It explains, at a high level, what the two techniques are, where their names come from, and where to go to learn them properly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">The two techniques of the 10-day course</h2>
          <p>
            A 10-day Vipassana course as taught by S.N. Goenka introduces two distinct meditation practices over the course of ten days: first Anapana, and then Vipassana. They are presented by the teacher in a set sequence, accompanied by evening discourses that place each step in context.
          </p>
          <p>
            Students sometimes describe them as &quot;two meditations,&quot; but in this tradition they are better understood as two stages of a single course of training. The complete arc is only given inside the course itself.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What Anapana is, in one sentence</h2>
          <p>
            Anapana (from the Pali <em>ānāpāna</em>, roughly &quot;in-breath and out-breath&quot;) is awareness of the natural breath. In the Goenka course, it is the first technique introduced, during the opening days. That is as much as we will say about the instructions here.
          </p>
          <p>
            The course explains what to attend to, how to hold attention, and how to work with a wandering mind. Those specifics are not reproduced online in this tradition.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">What Vipassana is, in one sentence</h2>
          <p>
            Vipassana (Pali <em>vipassanā</em>, commonly translated as &quot;insight&quot; or &quot;seeing things as they really are&quot;) is introduced later in the course and is the practice the tradition and the course are named after. Goenka presents it as a technique rediscovered and taught by the historical Buddha, preserved in Burma for centuries, and reintroduced globally by Goenka starting in 1969.
          </p>
          <p>
            The specific form the practice takes, and how it is meant to be carried out, are taught by the teacher during the course.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Historical and linguistic framing</h2>
          <p>
            Both Anapana and Vipassana are Pali terms drawn from the textual tradition the course references. Pali is the liturgical language of Theravada Buddhism, and much of Goenka&apos;s teaching, including the chanting you hear during a course, is in Pali.
          </p>
          <p>
            The lineage the course belongs to traces back, in the tradition&apos;s own account, through Sayagyi U Ba Khin in Burma, Saya Thetgyi, Ledi Sayadaw, and earlier teachers, to the historical Buddha. S.N. Goenka was authorized by U Ba Khin in 1969 to teach Vipassana outside Burma, and spent the rest of his life establishing the global network of centers that exists today.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">Why the tradition keeps instruction inside the course</h2>
          <p>
            A 10-day course provides the full context the technique is meant to be learned in: the Five Precepts, the code of discipline, noble silence, a full daily schedule, evening discourses that frame each stage, and direct access to an assistant teacher for individual questions. The instructions are given in a specific order, with the prerequisites already in place.
          </p>
          <p>
            Written summaries online cannot reproduce this, and attempts to do so can lead students away from, rather than toward, correct practice. For that reason, the network of centers asks students and old students alike not to share technique instructions outside the course environment.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-foreground">How to actually learn the technique</h2>
          <p>
            The only way to learn Anapana and Vipassana in this tradition is to sit a 10-day course. Courses run year-round at centers around the world, and all courses are offered entirely on donations: no fees for teaching, food, or accommodation. First-time students are welcomed, and prior meditation experience is not required.
          </p>
          <p>
            Applications and schedules are at <a href="https://www.dhamma.org/en-US/courses/search" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-foreground">dhamma.org</a>. If you are considering one, our <Link href="/guide/find-a-retreat" className="text-accent underline hover:text-foreground">finding a retreat</Link> and <Link href="/guide/course-application-tips" className="text-accent underline hover:text-foreground">course application tips</Link> pages cover what to expect logistically.
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

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Learn the technique firsthand</h2>
        <p className="mb-6 text-muted">
          Anapana and Vipassana are taught in 10-day residential courses, on donation. That is where you learn them.
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
          <Link href="/guide/find-a-retreat" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Find a Retreat
          </Link>
          <Link href="/guide/course-application-tips" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Course Application Tips
          </Link>
          <Link href="/guide/vipassana-for-beginners" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Vipassana for Beginners
          </Link>
          <Link href="/guide/scientific-evidence" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Scientific Evidence
          </Link>
          <Link href="/experience" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Student Experiences
          </Link>
        </div>
      </div>

      <PageComments pageId="guide-anapana-vipassana-explained" />
    </article>
  );
}
