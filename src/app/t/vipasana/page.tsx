import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GradientText,
  BeforeAfter,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipasana";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Vipasana or Vipassana? The Correct Spelling, Explained",
  description:
    "Searching \"vipasana\" with one s? The standard English spelling is vipassana, with two s's, from the Pali vipassanā. Here is why the double s is correct, every variant people type, and what the word actually points to.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipasana or Vipassana? The Correct Spelling, Explained",
    description:
      "The standard English spelling is vipassana (two s's), from the Pali vipassanā. \"Vipasana\" with one s is the most common misspelling, not a different practice.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipasana or Vipassana? The Correct Spelling",
    description:
      "Vipassana, two s's, Pali vipassanā. \"Vipasana\" with one s is a common misspelling of the same practice.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is it vipasana or vipassana?",
    a: "Vipassana, with two s's, is the standard English spelling. It is the transliteration of the Pali word vipassanā (often written with a long final a, vipassanā). \"Vipasana\" with a single s is a common misspelling. It points to exactly the same thing; nobody will misunderstand you, but the double-s form is what you will see on dhamma.org, in the Pali canon, and on the official course materials.",
  },
  {
    q: "Why does vipassana have two s's?",
    a: "Because the Pali word does. Pali, like the closely related Sanskrit and like Italian, has geminate (doubled) consonants that are actually held longer when spoken. The s in passanā is one of those doubled consonants, so the standard romanization keeps both letters. Dropping one s to get \"vipasana\" changes the romanized form away from the source word, which is why it reads as a misspelling rather than an accepted variant.",
  },
  {
    q: "What does the word vipassana literally mean?",
    a: "It breaks into two parts: the prefix vi and the noun passanā, from the verb meaning to see. The common English gloss is \"to see things as they really are,\" usually shortened to \"insight\" or \"clear seeing.\" The Vipassana Research Institute renders it simply as \"to see things as they really are.\" This is a linguistic note, not a practice instruction; the technique itself is only taught inside a residential course.",
  },
  {
    q: "What is the Sanskrit version, vipashyana?",
    a: "The Sanskrit cognate is vipaśyanā, usually romanized into plain English letters as vipashyana or vipasyana. It is the same root idea in the older, more formal language. The Goenka-tradition courses and dhamma.org use the Pali form vipassana, which is why that is the spelling you will mostly meet in English. If you have seen \"vipashyana\" in a Tibetan or Mahayana context, that is the Sanskrit branch of the same word.",
  },
  {
    q: "Will I find the same courses whether I search vipasana or vipassana?",
    a: "Yes. Search engines treat the one-s and two-s forms as the same intent, so both lead to the same places. The official network of centers lives at dhamma.org, which lists every center worldwide and the application process for the standard 10-day residential course. This site is an unofficial companion written by a student, not the official organization.",
  },
  {
    q: "What are all the ways people misspell vipassana?",
    a: "The most common is \"vipasana\" (one s). Others include \"vipassna\" (dropping the a), \"vippassana\" (doubling the p), \"vipasanna\" (s and n swapped), \"vipashyana\" and \"vipasyana\" (the Sanskrit form), and \"vipassana meditation\" run together. All of them point at the same practice. The double-s, single-p, full vipassana is the one to use in writing.",
  },
  {
    q: "Does the spelling change between traditions?",
    a: "The romanized Pali spelling vipassana is consistent across the major Theravada and Burmese-derived lineages, including the U Ba Khin and Goenka lineage this site is downstream of. What differs between traditions is how the practice is approached and transmitted, not how the word is spelled. For the lineage and definitional differences, the spelling stays the same even where the method does not.",
  },
  {
    q: "Is this page going to teach me the technique?",
    a: "No. This is a note about a word and its spelling. The technique itself is reserved for the 10-day residential course, taught in person by an authorized assistant teacher. For anything about how to actually practice, the right destination is dhamma.org and a course, not a web page.",
  },
];

const variants: { spelling: string; status: string; note: string }[] = [
  {
    spelling: "vipassana",
    status: "Standard",
    note: "The accepted English transliteration. Two s's, one p. What dhamma.org and the course materials use.",
  },
  {
    spelling: "vipassanā",
    status: "Scholarly",
    note: "The Pali form with the diacritic on the long final a. Used in academic and canonical texts.",
  },
  {
    spelling: "vipasana",
    status: "Misspelling",
    note: "The most common one. A single s. Same practice, just dropped a letter.",
  },
  {
    spelling: "vipassna",
    status: "Misspelling",
    note: "Drops the a before the n. A typing slip more than a spelling belief.",
  },
  {
    spelling: "vippassana",
    status: "Misspelling",
    note: "Doubles the p instead of (or as well as) the s.",
  },
  {
    spelling: "vipashyana / vipaśyanā",
    status: "Sanskrit",
    note: "Not a misspelling. The Sanskrit cognate of the Pali word, seen in Mahayana and Tibetan contexts.",
  },
];

export default function VipasanaPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Topics", url: "https://vipassana.cool/t/vipassana-meditation" },
    { name: "Vipasana spelling", url: PAGE_URL },
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: "Vipasana or Vipassana? The Correct Spelling, Explained",
              description:
                "The standard English spelling is vipassana, with two s's, from the Pali vipassanā. \"Vipasana\" with one s is the most common misspelling, not a different practice.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "https://vipassana.cool" },
            { label: "Vipassana meditation", href: "/t/vipassana-meditation" },
            { label: "Vipasana spelling" },
          ]}
          className="!px-0 !max-w-none mb-6"
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
          Vipasana or vipassana? <GradientText>The spelling</GradientText>, sorted out.
        </h1>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="4 min read"
        />

        {/* Direct answer */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-17
          </div>
          <p className="mt-3 text-lg text-zinc-900 leading-relaxed">
            The correct spelling is <strong>vipassana</strong>, with{" "}
            <strong>two s&apos;s</strong> and one p. It comes from the Pali word{" "}
            <em>vipassanā</em>. <strong>Vipasana</strong> with a single s is the most
            common misspelling. It is the same practice, the same courses, the same word;
            you just dropped a letter.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Source: the Vipassana Research Institute,{" "}
            <a
              href="https://www.vridhamma.org/What-is-Vipassana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-zinc-900"
            >
              vridhamma.org/What-is-Vipassana
            </a>
            , and the official course network at{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-zinc-900"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>

        <p className="mt-8 text-zinc-700 leading-relaxed">
          I am a student, not a teacher, and this page is a note about a word, not
          instruction in a technique. But the spelling question comes up constantly, so it
          is worth answering plainly. If you typed &quot;vipasana&quot; into a search box,
          you are in good company; it is one of the most-typed variants. Here is why the
          two-s form is the one to use, and every other spelling you are likely to run
          into.
        </p>
      </div>

      {/* Before / after spelling toggle */}
      <div className="max-w-3xl mx-auto px-6 mt-10">
        <BeforeAfter
          title="The one-letter difference"
          before={{
            label: "vipasana",
            content:
              "One s. The most common misspelling. Search engines still find the right pages, but in writing it reads as a slip.",
            highlights: [
              "Single s in the middle",
              "Drifts away from the source word",
              "Same practice, just spelled loosely",
            ],
          }}
          after={{
            label: "vipassana",
            content:
              "Two s's, one p. The standard English transliteration of the Pali vipassanā. This is what you will see on dhamma.org and the course materials.",
            highlights: [
              "Double s keeps the Pali gemination",
              "Matches the official spelling",
              "The form to use in writing",
            ],
          }}
        />
      </div>

      {/* Why two s's */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900">Why the double s is correct</h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The word is Pali, the language of the early Buddhist texts. Pali, like Sanskrit
          and like Italian, has doubled consonants that are genuinely held a beat longer
          when spoken. The middle s in <em>passanā</em> is one of those doubled
          consonants. When the word is romanized into the Latin alphabet, both s&apos;s are
          kept so the written form still reflects the sound. Drop one and you get
          &quot;vipasana,&quot; which no longer maps cleanly back to the original, which is
          exactly why it reads as a misspelling rather than an accepted alternative.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The word also splits in a way that makes the spelling easier to remember.{" "}
          <em>Vi</em> is a prefix; <em>passanā</em> is the noun built on the verb meaning
          to see. Glued together, the common English rendering is &quot;to see things as
          they really are,&quot; usually shortened to insight or clear seeing. There is a
          fuller treatment of where the word comes from in the{" "}
          <Link
            href="/guide/vipassana-meaning"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            meaning of vipassana
          </Link>{" "}
          guide. For this page, the only thing the etymology settles is the spelling: two
          parts, <em>vi</em> plus <em>passanā</em>, and the doubled s lives in the second
          part.
        </p>
      </div>

      {/* Variant table */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          Every spelling people actually type
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Across search boxes and forms, the word gets written a dozen ways. Here is the
          short field guide. Only one row is the Sanskrit cousin; the rest are the same
          Pali word, spelled tightly or loosely.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500">
                <th className="px-4 py-3 font-semibold">Spelling</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {variants.map((v) => {
                const isStandard = v.status === "Standard";
                return (
                  <tr key={v.spelling} className="border-t border-zinc-200 align-top">
                    <td className="px-4 py-3 font-mono text-zinc-900 whitespace-nowrap">
                      {v.spelling}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={
                          isStandard
                            ? "inline-block rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-700"
                            : "inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-600"
                        }
                      >
                        {v.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-zinc-700">{v.note}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          The Sanskrit form <em>vipaśyanā</em> (vipashyana) is not wrong; it is the older
          formal-language cousin of the Pali word, more common in Tibetan and Mahayana
          settings. The Pali <strong>vipassana</strong> is the one the 10-day course
          tradition uses.
        </p>
      </div>

      {/* What it points to */}
      <div className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          What the word points to, briefly
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Spelling aside, people searching the word usually want to know what it is. In
          one breath: vipassana is one of the oldest meditation traditions still taught,
          most widely available today through free 10-day residential courses in the line
          of S. N. Goenka. The courses run on donation, in silence, and they teach the
          method in person. I have sat several of them, and the one thing I would not do is
          try to learn the technique from a web page, including this one. The word is
          public; the method is taught inside the course.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So if you are here because you could not remember whether it was one s or two,
          the answer is two, and the next step, if you are curious about the practice
          itself, is the official network rather than any article. The{" "}
          <Link
            href="/guide/vipassana-for-beginners"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            beginner&apos;s overview
          </Link>{" "}
          and the{" "}
          <Link
            href="/t/vipassana-meditation"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            vipassana meditation
          </Link>{" "}
          page cover what a course actually involves, and{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            dhamma.org
          </a>{" "}
          is where you apply.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Spelling sorted, now the harder part: keeping a daily sit"
          description="If you have sat a course, or are about to, and want another practitioner to sit with for accountability, that is what we help pair."
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          Spelling and word questions
        </h2>
        <FaqSection items={faqs} />
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16 mb-10">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="From the same student-run resource site"
          posts={[
            {
              title: "What does vipassana mean?",
              href: "/guide/vipassana-meaning",
              tag: "Meaning",
              excerpt:
                "The Pali etymology in full: vi plus passanā, why the language sounds heavier than the practice.",
            },
            {
              title: "Vipassana for beginners",
              href: "/guide/vipassana-for-beginners",
              tag: "Getting started",
              excerpt:
                "What a first 10-day course actually involves, from someone who has sat several.",
            },
            {
              title: "Vipassana buddhism definition",
              href: "/t/vipassana-buddhism-definition",
              tag: "Lineage",
              excerpt:
                "The same word, four modern lineages, one transmission rule. The definition is a chain of teachers.",
            },
          ]}
        />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course? Get paired with a practice buddy for daily accountability."
      />
    </article>
  );
}
