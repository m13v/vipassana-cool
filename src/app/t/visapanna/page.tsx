import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  TerminalOutput,
  FlowDiagram,
  MorphingText,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
} from "@seo/components";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import { PageComments } from "@/components/comments";

const PAGE_URL = "https://vipassana.cool/t/visapanna";
const PUBLISHED = "2026-07-01";
const BOOKING = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Visapanna or Vipassana? The Correct Spelling and Why the Mix-Up Happens",
  description:
    "\"Visapanna\" is a common misspelling of Vipassana (Pali: vipassanā). Here is the correct spelling, why the syllables get swapped, and a full map of the variant spellings people type.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Visapanna or Vipassana? The Correct Spelling",
    description:
      "\"Visapanna\" is a common misspelling of Vipassana. The correct spelling, the Pali root, and why the mix-up is so easy to make.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visapanna vs Vipassana: the correct spelling",
    description:
      "It is Vipassana (Pali: vipassanā). Here is why \"visapanna\" is such a common slip, and the full variant map.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Is \"visapanna\" a real word?",
    a: "Not as a standalone term. \"Visapanna\" is almost always a misspelling of Vipassana (Pali: vipassanā), the Buddhist meditation practice and the name of the 10-day residential courses taught in the tradition of S.N. Goenka. If you typed \"visapanna\" looking for the meditation, you were reaching for Vipassana. There is no separate meditation technique called visapanna.",
  },
  {
    q: "How is Vipassana actually spelled?",
    a: "Vipassana, with two s letters in the middle and the stress on the second syllable: vi-PASS-ana. The romanized Pali form written with diacritics is vipassanā (a long final a). The Sanskrit equivalent is vipaśyanā, usually romanized online as vipashyana. Dhamma.org, the official course network, spells it Vipassana throughout, and that is the spelling to trust.",
  },
  {
    q: "Why do so many people type \"visapanna\" instead of Vipassana?",
    a: "Two reasons. First, the word is a transliteration from Pali, so there is no single \"correct\" English spelling baked into anyone's muscle memory, which invites guesses. Second, the mistake is a classic syllable swap (linguists call it metathesis): the ear hears vi-PASS-ana and the fingers reorder it into vi-sa-PANN-a. The double consonants (ss, nn) also move around because English readers are not used to seeing them mid-word.",
  },
  {
    q: "What does Vipassana mean?",
    a: "It comes from two Pali parts: vi (special, clear, intense) and passanā (seeing, observing). The literal reading is \"clear seeing\" or \"seeing things as they really are.\" It is commonly translated as \"insight\" or \"insight meditation.\" For the full breakdown of the word and its meaning, see the Vipassana meaning guide. For anything about how the technique is actually practised, dhamma.org and an authorized teacher at a 10-day course are the only reliable sources.",
  },
  {
    q: "Are the other spellings I have seen (vipasana, vipassna, vippasana) also wrong?",
    a: "Yes, all of those are misspellings of Vipassana, just different ones. \"Vipasana\" drops an s, \"vipassna\" drops the middle a, \"vippasana\" doubles the wrong consonant. They all point at the same word. If you are searching for course dates or centers, use the spelling Vipassana to get the official results.",
  },
  {
    q: "Where do I go if I actually want to sit a course?",
    a: "The official, worldwide, donation-based course network is dhamma.org. It lists every center and every 10-day course date. This site (vipassana.cool) is a resource site written by a fellow meditator, not a teacher, and it is not a booking system. For the technique itself, always go to dhamma.org and an authorized assistant teacher.",
  },
];

// Common misspellings collected as a variant reference, each pointing at Vipassana.
const variants = [
  {
    spelling: "Vipassana",
    verdict: "correct",
    note: "The standard English rendering. Two s, one final a. This is the spelling dhamma.org uses.",
  },
  {
    spelling: "vipassanā",
    verdict: "correct",
    note: "The romanized Pali form with diacritics (long final ā). Same word, scholarly spelling.",
  },
  {
    spelling: "visapanna",
    verdict: "misspelling",
    note: "Syllable swap. The pass and the sa trade places. This page exists because a lot of people type it this way.",
  },
  {
    spelling: "vipasana",
    verdict: "misspelling",
    note: "One s dropped. The single most common variant after the correct one.",
  },
  {
    spelling: "vipassna",
    verdict: "misspelling",
    note: "Middle a dropped. Reads fine to the eye, still wrong.",
  },
  {
    spelling: "vippasana",
    verdict: "misspelling",
    note: "The double consonant lands on the p instead of the s.",
  },
  {
    spelling: "vipaśyanā / vipashyana",
    verdict: "sanskrit",
    note: "Not a misspelling. This is the Sanskrit form of the same word. Pali uses passanā, Sanskrit uses paśyanā.",
  },
];

const verdictStyle: Record<string, string> = {
  correct: "bg-accent/10 text-accent border-accent/30",
  misspelling: "bg-red-50 text-red-700 border-red-200",
  sanskrit: "bg-accent/5 text-muted border-accent/20",
};

const verdictLabel: Record<string, string> = {
  correct: "correct",
  misspelling: "misspelling",
  sanskrit: "Sanskrit form",
};

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              { name: "Guides", url: "https://vipassana.cool/guide/vipassana-meaning" },
              { name: "Visapanna spelling", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Visapanna or Vipassana? The Correct Spelling and Why the Mix-Up Happens",
              description:
                "\"Visapanna\" is a common misspelling of Vipassana (Pali: vipassanā). The correct spelling, the reason the syllables get swapped, and a full variant map.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <div className="mx-auto max-w-3xl px-6 py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guide/vipassana-meaning" },
            { label: "Visapanna spelling" },
          ]}
        />

        <p className="mt-8 text-sm font-medium uppercase tracking-wide text-accent">
          Spelling note
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Visapanna or Vipassana? The correct spelling, and why the mix-up happens
        </h1>

        <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 px-6 py-10 text-center">
          <MorphingText
            texts={["visapanna", "vipasana", "vipassna", "vippasana", "Vipassana"]}
          />
          <p className="mt-4 text-sm text-muted">
            Four common wrong spellings settling on the right one.
          </p>
        </div>

        <div className="mt-6">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="5 min read"
          />
        </div>

        {/* Direct answer, first 30% of the page */}
        <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 p-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            Direct answer (verified July 1, 2026)
          </p>
          <p className="text-base leading-relaxed text-foreground">
            <strong>&quot;Visapanna&quot; is a misspelling of Vipassana.</strong>{" "}
            The correct spelling is <strong>Vipassana</strong> (romanized Pali:{" "}
            <em>vipassanā</em>), the insight-meditation practice taught in 10-day
            residential courses. If you typed &quot;visapanna,&quot; you were
            reaching for Vipassana. The official spelling and the official course
            network both live at{" "}
            <a
              href="https://www.dhamma.org"
              className="font-medium text-accent underline underline-offset-2"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>

        <p className="mt-8 text-lg text-muted">
          If you searched &quot;visapanna,&quot; a search engine probably showed
          you results for Vipassana anyway. This page is the plain confirmation:
          same word, the letters just got reordered. Below is the correct
          spelling, the reason the slip is so easy to make, and a reference map of
          every variant people type.
        </p>

        <div className="mt-10">
          <TerminalOutput
            title="did-you-mean"
            lines={[
              { text: "$ search \"visapanna meditation\"", type: "command" },
              { text: "no exact term found: \"visapanna\"", type: "error" },
              { text: "did you mean: vipassana?", type: "info" },
              { text: "match: Vipassana (Pali: vipassanā)", type: "success" },
              { text: "meaning: \"clear seeing\" / insight meditation", type: "output" },
              { text: "official source: dhamma.org", type: "output" },
            ]}
          />
        </div>

        <h2 className="mt-14 text-2xl font-bold text-foreground">
          Why &quot;visapanna&quot; happens
        </h2>
        <p className="mt-4 text-foreground/90 leading-relaxed">
          Vipassana is not an English word. It is a transliteration, letters
          borrowed from Pali and mapped into the Latin alphabet. Nobody grows up
          seeing it in print the way they see &quot;meditation&quot; or
          &quot;retreat,&quot; so there is no spelling reflex to fall back on. When
          you hear it spoken, the stress lands hard on the middle: vi-<strong>PASS</strong>-ana.
          The double s and the double n float around because English readers are
          not used to holding two consonant pairs in one short word.
        </p>
        <p className="mt-4 text-foreground/90 leading-relaxed">
          &quot;Visapanna&quot; in particular is a textbook{" "}
          <strong>metathesis</strong>, the linguistics term for two sounds trading
          places (the same process that turns &quot;ask&quot; into
          &quot;aks&quot; or &quot;comfortable&quot; into &quot;comfterble&quot;).
          The <em>-pass-</em> and the <em>-sa-</em> swap seats, and the doubled
          consonant migrates from the s onto the n. The result reads plausibly,
          which is exactly why it slips past a quick glance.
        </p>

        <div className="mt-10">
          <FlowDiagram
            title="How the correct word is built, and where visapanna diverges"
            steps={[
              { label: "vi", detail: "Pali prefix: special, clear, intense" },
              { label: "passanā", detail: "Pali root: seeing, observing" },
              { label: "vipassanā", detail: "\"clear seeing\" — joined and romanized" },
              { label: "Vipassana", detail: "the standard English spelling you want" },
            ]}
          />
        </div>
        <p className="mt-4 text-sm text-muted leading-relaxed">
          &quot;Visapanna&quot; breaks the chain at the second step: it splits{" "}
          <em>passanā</em> into <em>sa</em> + <em>panna</em> and reorders them, so
          the root word disappears. That is the tell that it is a slip rather than
          a real alternative form.
        </p>

        <h2 className="mt-14 text-2xl font-bold text-foreground">
          The variant map
        </h2>
        <p className="mt-4 text-foreground/90 leading-relaxed">
          These are the spellings people actually type when they mean Vipassana.
          Only the first two are correct. The Sanskrit form at the bottom is a
          separate, legitimate spelling from a different language, not an error.
        </p>
        <div className="mt-6 overflow-hidden rounded-xl border border-accent/20">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-accent/5 text-foreground">
                <th className="px-4 py-3 font-semibold">Spelling</th>
                <th className="px-4 py-3 font-semibold">Verdict</th>
                <th className="px-4 py-3 font-semibold">Note</th>
              </tr>
            </thead>
            <tbody>
              {variants.map((v) => (
                <tr key={v.spelling} className="border-t border-accent/10 align-top">
                  <td className="px-4 py-3 font-mono text-foreground">{v.spelling}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-medium ${verdictStyle[v.verdict]}`}
                    >
                      {verdictLabel[v.verdict]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted">{v.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-2xl font-bold text-foreground">
          Pali, Sanskrit, and why there are two &quot;correct&quot; spellings
        </h2>
        <p className="mt-4 text-foreground/90 leading-relaxed">
          The practice was recorded in Pali, so the primary spelling is the Pali
          one: <em>vipassanā</em> (that final ā is a long a). Drop the diacritic
          for everyday web writing and you get <strong>Vipassana</strong>. The same
          concept in Sanskrit is <em>vipaśyanā</em>, romanized as{" "}
          <em>vipashyana</em>. Pali uses <em>passanā</em>; Sanskrit uses{" "}
          <em>paśyanā</em>. Both are real, and neither is &quot;visapanna.&quot;
          When in doubt, use the Pali-derived <strong>Vipassana</strong>: it is what
          course centers, dhamma.org, and English-language books all use.
        </p>

        <h2 className="mt-14 text-2xl font-bold text-foreground">
          How to say it
        </h2>
        <p className="mt-4 text-foreground/90 leading-relaxed">
          Four syllables, stress on the second: <strong>vi-PASS-ana</strong>. The
          first syllable is a short &quot;vih,&quot; the middle is the loud
          &quot;pass&quot; (like the English word), and it trails off soft:
          &quot;-anna.&quot; Say the middle loud enough and the double s stops
          feeling optional, which quietly fixes the spelling in your head too.
        </p>

        <h2 className="mt-14 text-2xl font-bold text-foreground">
          What the word actually points to
        </h2>
        <p className="mt-4 text-foreground/90 leading-relaxed">
          Once the spelling is sorted, the meaning is the interesting part.
          Vipassana means seeing things as they really are, and it is the name of
          a specific non-sectarian meditation tradition taught in 10-day
          residential courses given entirely on donation. This site is written by
          a fellow meditator sharing experience, not a teacher. For the full sense
          of the word, read the{" "}
          <Link
            href="/guide/vipassana-meaning"
            className="font-medium text-accent underline underline-offset-2"
          >
            Vipassana meaning guide
          </Link>
          , and if you are new to all of it, the{" "}
          <Link
            href="/guide/vipassana-for-beginners"
            className="font-medium text-accent underline underline-offset-2"
          >
            beginner&apos;s overview
          </Link>{" "}
          walks through what a course actually is. For anything about how the
          technique is practised, the honest answer is that it is only taught
          in person: go to{" "}
          <a
            href="https://www.dhamma.org"
            className="font-medium text-accent underline underline-offset-2"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher.
        </p>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Spelled it right, still on the fence?"
          description="If you have sat a course (or are about to) and want a real person to talk through daily practice with, book a short call."
        />

        <PracticeBuddyCta />

        <FaqSection items={faqs} heading="Visapanna and Vipassana: common questions" />

        <PageComments pageId="t-visapanna" />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Book a call to talk daily Vipassana practice."
      />
    </article>
  );
}
