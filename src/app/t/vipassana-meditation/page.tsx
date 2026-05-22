import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  BeforeAfter,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";
import { DayCounter } from "@/components/day-counter";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation";
const PUBLISHED = "2026-05-21";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana meditation: what it is, and the half that no guide writes about",
  description:
    "Vipassana meditation is one of India's most ancient techniques (\"to see things as they really are\"), rediscovered by Gotama the Buddha 2,500+ years ago and taught today only in free, donation-funded 10-day residential courses. Verified against dhamma.org on 2026-05-21. This page answers that quickly, then covers the part every other article skips: the daily practice after the course, told through a live practice-day counter and notes from six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana meditation: the definition, and the part nobody writes about",
    description:
      "What vipassana meditation actually is (sourced from dhamma.org), and why the under-covered half is the daily practice you build alone after the 10-day course.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana meditation: definition, and the daily-practice half nobody covers",
    description:
      "The honest answer to 'what is vipassana meditation', plus the post-course daily practice reality, told through a live practice-day counter.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana meditation" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana meditation", url: PAGE_URL },
];

const practitionerMetrics = [
  { value: 6, label: "10-day courses sat" },
  { value: 3, label: "centers, NorCal to Central CA" },
  { value: 40, suffix: "+", label: "days of dhamma service" },
  { value: 4, label: "courses in the first year" },
];

const faqs: FaqItem[] = [
  {
    q: "What does vipassana meditation actually mean?",
    a: "Vipassana is a Pali word, vi (clearly, specially) plus passana (seeing, observing), most often rendered as \"to see things as they really are\" and translated into English as \"insight.\" dhamma.org calls it \"an ancient meditation technique. Long lost to humanity, it was rediscovered by Gotama the Buddha in India more than 2500 years ago.\" That is the meaning of the word and the lineage. The technique behind the word is a separate thing, and it is transmitted in person, not from a definition.",
  },
  {
    q: "Is vipassana meditation free?",
    a: "Yes, in the Goenka tradition the 10-day courses are run with no fee. dhamma.org states that \"courses are run solely on a donation basis. Donations are accepted only from those who have completed at least one 10-day course,\" so a student who has finished a course can give so a future student can sit. There is no tuition, and that funding model is one of the more unusual things about it. The practice-buddy matching on this site is free as well.",
  },
  {
    q: "Do I have to be Buddhist to practice vipassana meditation?",
    a: "No. The tradition is explicitly non-sectarian. dhamma.org puts it plainly: \"There is no question of conversion. All human beings share the same problems and a technique which can eradicate these problems will have a universal application.\" People of every religion and of none sit the same courses.",
  },
  {
    q: "Can I learn vipassana meditation online or from this page?",
    a: "No, and this page will not try to teach it. In the Goenka tradition the technique is transmitted in person inside a 10-day residential course by an authorized assistant teacher. For anything about how to actually practice, the canonical source is dhamma.org and the assistant teacher at a course. I am an old student sharing experience, not a teacher, and nothing on this site is instruction in the method.",
  },
  {
    q: "What is the hardest part of vipassana meditation?",
    a: "For most people I have talked to, it is not the 10 days at the center. It is the morning a few weeks after they get home, when the schedule and the silence and the other students are gone and it is just them against a half hour they now have to defend against an entire life. The course is hard in an obvious way. The daily practice afterward is hard in a quiet, easy-to-skip way, and that is where most practices actually end.",
  },
  {
    q: "How long do people keep up a daily vipassana practice after a course?",
    a: "Honestly, many do not keep it past the first few weeks. I do not have a clean industry number for that and will not invent one. What I can show is one real data point: the counter on this page is my own running daily count, computed live from a fixed reference of 881 days on 2026-02-07. It is one practitioner, not a study, and it took two practice buddies and a non-negotiable morning slot to hold it together. The dropoff is the reason the practice-buddy matching on this site exists.",
  },
  {
    q: "Where do I go for instructions on how to practice?",
    a: "To dhamma.org for the Code of Discipline and course logistics (https://www.dhamma.org/en/about/code), and to the authorized assistant teacher at a 10-day course for anything about how to actually sit. Operational questions about the technique are not answered on this site by design.",
  },
];

const relatedPosts = [
  {
    title: "What does vipassana mean? The Pali roots, plainly",
    href: "/guide/vipassana-meaning",
    excerpt:
      "vi plus passana, \"to see clearly.\" The literal meaning, the practical meaning, and why the language sounds more intimidating than the practice.",
    tag: "Meaning",
  },
  {
    title: "The 10-day course structure: 12 days, three load-bearing sittings",
    href: "/t/10-day-course-structure",
    excerpt:
      "The daily clock and the 10-day arc, read from the Code of Discipline at dhamma.org and from six of my own courses across three centers.",
    tag: "Reference",
  },
  {
    title: "After the course: rebuilding a daily practice that survives real life",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The week-by-week shift after the gate opens, and what it actually takes to keep sitting once the structure is gone.",
    tag: "Daily practice",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana meditation: what it is, and the half that no guide writes about",
    description:
      "A sourced, honest answer to what vipassana meditation is (from dhamma.org), followed by the under-covered half of the topic: the daily practice built alone after a 10-day course, told through a live practice-day counter and notes from six courses across three centers.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const faqSchemaJson = faqPageSchema(faqs, `${PAGE_URL}#faq`);
  const breadcrumbSchemaJson = breadcrumbListSchema(breadcrumbSchemaItems);

  return (
    <article className="min-h-screen text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchemaJson,
            faqSchemaJson,
            breadcrumbSchemaJson,
          ]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Vipassana meditation
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Almost every article on this topic explains the same doorway: the
          meaning of the word, the 2,500-year lineage, a benefits list, and how
          the 10-day course works. That part is below, sourced and short. Then
          there is the part the popular guides skip entirely, which is the
          daily practice you build alone after the course ends, and which is
          the part this whole site is actually about.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="7 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-21)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <strong>Vipassana meditation</strong> is one of India&apos;s most
            ancient meditation techniques. The name is Pali for roughly{" "}
            <em>&ldquo;to see things as they really are.&rdquo;</em> dhamma.org
            describes it as a technique that was{" "}
            <em>
              &ldquo;long lost to humanity&hellip; rediscovered by Gotama the
              Buddha in India more than 2500 years ago.&rdquo;
            </em>{" "}
            In the S. N. Goenka tradition it is taught only through{" "}
            <strong>free, donation-funded 10-day residential courses</strong>,
            and it is non-sectarian, with{" "}
            <em>&ldquo;no question of conversion.&rdquo;</em> The technique
            itself is transmitted in person at those courses, not in any
            article, including this one. Canonical source:{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <p className="text-zinc-700 leading-relaxed">
          That is the answer to the question almost everyone is typing. If that
          is all you came for, you have it. Before going further: I am not a
          teacher and I do not represent the tradition. I am an old student who
          has sat six 10-day courses, and this page is reflection and context,
          not instruction. For the meaning of the word in more depth, the{" "}
          <Link
            href="/guide/vipassana-meaning"
            className="text-teal-700 underline hover:text-teal-900"
          >
            vipassana meaning
          </Link>{" "}
          guide goes deeper on the Pali. For how a course is actually shaped,
          the{" "}
          <Link
            href="/t/10-day-course-structure"
            className="text-teal-700 underline hover:text-teal-900"
          >
            10-day course structure
          </Link>{" "}
          page lays out the daily clock.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why every guide stops at the doorway
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Read the pages that currently rank for this topic and a pattern shows
          up fast. They all cover the entrance: the etymology, the history, a
          benefits list, and a paragraph on the 10-day course. All of it is
          true and all of it is the part you can learn by reading. None of it
          is the part that decides whether the practice survives.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          That makes sense. The doorway is what reads well and what people
          search for. But it leaves out the half of &ldquo;vipassana
          meditation&rdquo; that is actually hard to write about, because it
          cannot be summarized in a definition: the morning, three weeks after
          you come home, when the schedule and the silence and the other
          hundred students are gone, and the practice is just you against a
          half hour you now have to protect from an entire life. Toggle the two
          halves below.
        </p>

        <BeforeAfter
          title="Two halves of the same topic (one half gets all the words)"
          before={{
            label: "What the guides cover",
            content:
              "Almost every article on vipassana meditation stops here. All true, all useful, all written a hundred times over. It is the part you can genuinely learn from reading a page like this one.",
            highlights: [
              "The definition and the Pali roots",
              "The 2,500-year history and lineage",
              "A benefits list: stress, focus, calm",
              "How to apply for a 10-day course",
            ],
          }}
          after={{
            label: "What decides if you keep going",
            content:
              "The part almost nobody writes about, because it happens at home, alone, with no structure and no audience. This is where a vipassana practice is actually kept or lost, and it is what this site is built around.",
            highlights: [
              "The first month home, when the dropoff happens",
              "Defending one fixed time against a full life",
              "Sitting with no group and no schedule holding you up",
              "Having one other person who knows if you skipped",
            ],
          }}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A live data point instead of a benefits list
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Most pages on this topic close with a list of claimed benefits. I
          would rather show you one honest, checkable number than a list I
          cannot stand behind. The figure below is not a study and not a
          marketing stat. It is my own running count of consecutive practice,
          computed live in your browser from a fixed reference of 881 days on
          7 February 2026, incrementing one per day since. If you load this
          page tomorrow it will read one higher. You can see the arithmetic
          in{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            src/components/day-counter.tsx
          </code>{" "}
          in this site&apos;s{" "}
          <a
            href="https://github.com/m13v/vipassana-cool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            open source repo
          </a>
          .
        </p>

        <div className="my-8 rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center">
          <div className="text-6xl sm:text-7xl font-bold tabular-nums text-teal-700">
            <DayCounter />
          </div>
          <p className="mt-3 text-sm font-medium uppercase tracking-wider text-teal-700">
            days of daily practice, counting live as you read
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-600">
            One practitioner, not a benchmark. It held together on a
            non-negotiable morning slot, roughly four evening sits a week, and
            two practice buddies who would notice a missed day. The number is
            not the point. What it took to keep the number moving is.
          </p>
        </div>

        <p className="text-zinc-700 leading-relaxed">
          For context on whose count that is, here is the practice it came out
          of. None of these are recommendations, just the shape of one path so
          the number above has a person attached to it.
        </p>

        <MetricsRow metrics={practitionerMetrics} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The objection: isn&apos;t the technique the whole point?
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A fair pushback: surely &ldquo;vipassana meditation&rdquo; is the
          technique, so why spend a page on logistics and morning slots instead
          of the method? Because the method is not mine to hand out. In this
          tradition the technique is reserved for in-person transmission inside
          the 10-day course, and I think that boundary is correct. A page that
          tried to teach it would be both against the tradition and worse than
          useless, because the thing that makes the course work is sitting it,
          not reading about it.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So the honest space left for a site like this is everything around
          the cushion: what the word means, what a course is, what surfaces in
          a practice over years, and the unglamorous logistics of not quitting.
          That last one turns out to be where the leverage is. The people I
          have watched keep a practice going did not have a better technique
          than the people who stopped. They had one fixed time they refused to
          move, and usually one other person who would notice if they skipped.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Five things to get straight first
        </h2>
        <ul className="mt-5 space-y-3">
          {[
            "It is free. The 10-day courses run solely on donations from old students, so a finished student gives so a future one can sit.",
            "It is non-sectarian. dhamma.org says there is no question of conversion; people of every faith and none sit the same course.",
            "The standard entry point is a 10-day residential course, not a weekend workshop or an app.",
            "The technique is transmitted in person at the course, by an authorized teacher, not from any article.",
            "The hardest part is not the 10 days. It is the daily practice afterward, which is the thing this site exists to support.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-zinc-700 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Where this leaves you
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you have never sat a course, the only real next step is the course
          itself, and the only place to arrange it is{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>
          . Nothing here substitutes for that. If you have already sat one and
          you are in the part nobody warned you about, where the practice keeps
          slipping off the calendar, that is the problem this site was built
          for. The{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            practice-buddy matching
          </Link>{" "}
          pairs you with another meditator in your sit hour for daily
          accountability over a video call. It is free, peer-run, and there is
          no auto-pairing just to clear a queue; if your time zone is sparse you
          stay on the waitlist until a real fit appears.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-vipassana-meditation-footer"
          heading="Stuck in the part after the course?"
          description="If your daily practice keeps slipping and you want to talk it through with someone who has been there, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection heading="FAQ: vipassana meditation" items={faqs} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          subtitle="Related"
          title="Keep reading"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-vipassana-meditation-sticky"
        description="Questions about keeping a daily vipassana practice going? Book a quick chat."
      />
    </article>
  );
}
