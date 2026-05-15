import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  GlowCard,
  MotionSequence,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/bhanga-vipassana";
const PUBLISHED = "2026-05-15";
const VERIFIED = "2026-05-15";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const GLOSSARY_URL = "https://www.dhamma.org/en-US/10-day/glossary_of_pali_terms";

export const metadata: Metadata = {
  title: "Bhanga in Vipassana: A Pali Word, Not a Finish Line",
  description:
    "Bhanga (bhaṅga) is Pali for dissolution or breaking up. This page gives the literal meaning, separates the classical textual term from how the Goenka tradition uses the word, and explains why treating bhanga as a stage to reach is the one mistake the practice trains against.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bhanga in Vipassana: A Pali Word, Not a Finish Line",
    description:
      "What bhanga actually means, where it sits in the old maps of insight, and why the finish-line reading of the word is the error.",
    url: PAGE_URL,
    type: "article",
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanga in Vipassana: A Pali Word, Not a Finish Line",
    description:
      "Bhanga is Pali for dissolution. The mistake is turning a word that describes into a word that commands.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does bhanga mean in Vipassana?",
    a: "Bhanga, also written bhaṅga, is a Pali word meaning dissolution or breaking up. Standard Pali dictionaries gloss it as breaking, splitting, decay, downfall. In the Goenka tradition specifically, the glossary of Pali terms published for 10-day students defines it as 'dissolution. An important stage in the practice of Vipassana, the experience of the dissolution of the apparent solidity of the body into subtle vibrations which are constantly arising and passing away.' That is the literal answer. This page does not go further into what the experience is like, because describing the inside of practice is the work of a 10-day course and an authorized assistant teacher, not a website.",
  },
  {
    q: "Is bhanga the same thing as 'free flow'?",
    a: "'Free flow' is the informal English phrase many students use for the same experience the word bhanga points at, and the two get used interchangeably in old-student conversation. The vipassana.cool guide on sensations and experiences treats them as one thing and is careful to add the tradition's own framing: it is one experience among many, not a goal and not a marker of attainment. The phrase changes; the caution around it stays the same.",
  },
  {
    q: "Is bhanga-nana, the fifth insight knowledge, the same thing the Goenka tradition means by bhanga?",
    a: "They share a name and a root meaning, but they sit in different registers. Bhanga-nana (bhaṅga-ñāṇa) is a technical term in classical Theravada commentary: the fifth of sixteen insight knowledges catalogued in Buddhaghosa's fifth-century Visuddhimagga. The Goenka tradition uses the word bhanga in its glossary and discourses to name an experience, and it does not have students identify or number the sixteen knowledges. Treating the two as strictly identical, so that 'experiencing bhanga' is read as 'I have cleared stage five of sixteen,' is a common mix-up and is exactly the finish-line reading this page is cautioning against.",
  },
  {
    q: "Does the Goenka 10-day course teach the sixteen stages of insight?",
    a: "Not as a map students track. The sixteen insight knowledges are a feature of classical commentarial literature, the Visuddhimagga above all. The 10-day course teaches a practice; it does not ask students to locate themselves on a sixteen-point scale or to report which knowledge they have reached. Students are instead repeatedly cautioned against grading their own sittings. If you want the classical scheme, it is in the texts. If you want to learn the practice, that is dhamma.org and a residential course.",
  },
  {
    q: "I have never experienced bhanga or dissolution. Am I behind?",
    a: "No, and the worry itself is worth noticing. The vipassana.cool guide on recognizing progress lists 'free flow, vibrations, dissolution experiences' under what is not a sign of progress, calling them 'byproducts of concentration, not signs of wisdom.' Plenty of students with steady, long-running practice never had a dramatic dissolution moment on a first course. The word 'behind' assumes a track with checkpoints, and the practice does not have one. For reassurance about what deepening actually looks like, an authorized assistant teacher is the right person to ask.",
  },
  {
    q: "How do I reach bhanga?",
    a: "This page will not answer that, and the shape of the question is the thing it is gently pushing back on. Anything operational, how to sit, how to work with what arises, how to handle a difficulty on the cushion, is taught inside a 10-day residential course and is the proper domain of an authorized assistant teacher. The entry point is dhamma.org. A website is not where that transmission belongs, and a sit aimed at producing a particular experience has already traded equanimity for wanting.",
  },
  {
    q: "Why does this page not describe what bhanga feels like?",
    a: "Two reasons. First, the experience is not the point; the relationship to it is, and a vivid description tends to become a target you measure yourself against. Second, describing the inside of the practice is reserved, in this tradition, for the course and for assistant teachers, and this site keeps to that line on purpose. What you will find here is the word, its history, and a caution. What it feels like, and what to do, stays with dhamma.org and a teacher.",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "What it is",
    competitor: "A level you unlock, the fifth box on a sixteen-box checklist",
    ours: "A Pali word for dissolution, naming an experience some students report",
  },
  {
    feature: "How you know you got there",
    competitor: "A particular feeling arrives and you can mark the sit complete",
    ours: "There is nothing to mark; a course never asks the question",
  },
  {
    feature: "What it implies about your other sits",
    competitor: "Sits without it were lesser, the sit with it was the real one",
    ours: "Every sit gets the same instruction; no sit ranks above another",
  },
  {
    feature: "What chasing it tends to produce",
    competitor: "Wanting a pleasant state, which is the exact reaching the practice works on",
    ours: "Evenness toward whatever shows up, including dissolution and including nothing",
  },
  {
    feature: "Who decides whether it counted",
    competitor: "You, holding your sit up against a description you read online",
    ours: "Nobody; the tradition does not ask, and a teacher will redirect the question",
  },
];

const sequenceFrames = [
  {
    title: "First, a plain word",
    body: "Bhanga is Pali. On its own it means dissolution, breaking up, decay. No meditation context required.",
  },
  {
    title: "Then, a term in an old map",
    body: "Buddhaghosa's fifth-century Visuddhimagga lists bhanga-nana as the fifth of sixteen catalogued insight knowledges.",
  },
  {
    title: "Then, a named experience",
    body: "The dhamma.org glossary calls bhanga an important stage: the felt solidity of the body softening into something finer.",
  },
  {
    title: "And then, quietly, a prize",
    body: "For a lot of readers the word becomes a level to unlock. That last step is the one this page is about.",
  },
];

const relatedPosts = [
  {
    title: "Sensations and Experiences",
    href: "/guide/sensations-and-experiences",
    excerpt:
      "Gross and subtle sensations, free flow, emotional surfacing. What students commonly report, described in the third person, not prescribed.",
    tag: "Phenomena",
  },
  {
    title: "Recognizing Progress in Vipassana",
    href: "/guide/recognizing-progress",
    excerpt:
      "Why dissolution experiences are byproducts, not signs of wisdom, and why measuring progress is itself a quiet form of clinging.",
    tag: "Progress",
  },
  {
    title: "Anapana and Vipassana",
    href: "/t/anapana-and-vipassana",
    excerpt:
      "Two more Pali words, glossed plainly, with the lineage that carries them into the modern tradition. Not a how-to.",
    tag: "Linguistic note",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Sensations & Experiences", href: "/guide/sensations-and-experiences" },
  { label: "Bhanga in Vipassana" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  {
    name: "Sensations and Experiences",
    url: "https://vipassana.cool/guide/sensations-and-experiences",
  },
  { name: "Bhanga in Vipassana", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "Bhanga in Vipassana: A Pali Word, Not a Finish Line",
    description:
      "Bhanga (bhaṅga) is Pali for dissolution. This linguistic note gives the literal meaning, separates the classical textual term bhanga-nana from how the Goenka tradition uses the word, and argues that treating bhanga as a stage to reach is the specific error the practice is built to undo.",
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
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
          A linguistic note, not instruction
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Bhanga in Vipassana: a Pali word, not a finish line
        </h1>
        <p className="mt-5 text-lg text-zinc-700 leading-relaxed">
          Look up bhanga and almost every page hands you the same thing: bhanga
          is the fifth of sixteen stages, the body dissolves, here is what it
          feels like, here is the milestone. I want to take the word apart more
          slowly. Bhanga is real, and the tradition has a name for it for a
          reason. But the moment it becomes a level you are trying to unlock,
          you have walked straight into the one mistake the practice is built to
          undo. I have sat six 10-day courses and I am not a teacher. This is a
          note on a word, and on why the word is so easy to misuse.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      <section className="max-w-3xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.18em] text-teal-700 mb-2">
            Direct answer · verified {VERIFIED}
          </p>
          <p className="text-zinc-800 leading-relaxed">
            Bhanga, also written bhaṅga, is Pali for{" "}
            <strong className="text-zinc-900">dissolution</strong> or breaking
            up. Standard Pali dictionaries gloss it as breaking, splitting,
            decay, downfall. In the Goenka tradition the word names a specific
            experience. The glossary of Pali terms published for 10-day students
            defines it this way:
          </p>
          <blockquote className="mt-4 border-l-2 border-teal-400 pl-4 text-zinc-700 italic leading-relaxed">
            &ldquo;bhaṅga: dissolution. An important stage in the practice of
            Vipassana, the experience of the dissolution of the apparent
            solidity of the body into subtle vibrations which are constantly
            arising and passing away.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
            Source:{" "}
            <a
              href={GLOSSARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-800"
            >
              the Glossary of Pali Terms at dhamma.org
            </a>
            . That is the whole literal answer. The rest of this page is about
            what the word is not, and why that matters more than the definition.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          One small word doing four jobs
        </h2>
        <p className="text-zinc-700 mb-4 leading-relaxed">
          Part of why bhanga is confusing is that it is not one thing. The same
          four letters carry at least four different jobs, and the pages that
          explain the word usually flatten them into one. It is worth seeing
          them pulled apart, because the trouble is entirely in the last one.
        </p>
        <MotionSequence
          title="How one word picks up four jobs"
          frames={sequenceFrames}
          defaultDuration={2600}
        />
        <p className="text-zinc-700 mt-4 leading-relaxed">
          The first three jobs are harmless. A word means something; an old text
          uses it; a modern glossary records it. The fourth job is the one that
          quietly bends a practice out of shape, and it is not in any
          dictionary. It is something a reader does to the word, not something
          the word does on its own.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two registers: the old texts and the course
        </h2>
        <p className="text-zinc-700 mb-6 leading-relaxed">
          When people search bhanga, they are usually crossing, without
          noticing, between two registers of the word. One is classical
          Theravada commentary. The other is the modern Goenka 10-day course.
          They are related, but they are not the same conversation, and most
          confusion about bhanga comes from collapsing them.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-zinc-500 mb-2">
              Register one
            </p>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              The classical texts
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Here bhanga is shorthand for bhanga-nana, the knowledge of
              dissolution. Buddhaghosa&apos;s fifth-century{" "}
              <em>Visuddhimagga</em> places it as the fifth of sixteen insight
              knowledges, an ordered commentarial scheme, with an older and more
              condensed version in the <em>Patisambhidamagga</em>. In this
              register bhanga is a catalogue entry. It has a number and a
              position in a list.
            </p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="text-xs font-mono uppercase tracking-[0.15em] text-teal-700 mb-2">
              Register two
            </p>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              The 10-day course
            </h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              The Goenka tradition uses the word bhanga in its glossary and its
              discourses to name an experience. It does not, however, hand
              students the sixteen-knowledge map and ask them to track their
              position on it. The{" "}
              <Link
                href="/guide/sensations-and-experiences"
                className="text-teal-700 underline hover:text-teal-800"
              >
                sensations and experiences
              </Link>{" "}
              guide records the tradition&apos;s own framing: bhanga is one
              experience among many, explicitly not a goal and not a marker of
              attainment.
            </p>
          </div>
        </div>
        <p className="text-zinc-700 mt-6 leading-relaxed">
          So when a forum thread says bhanga is &ldquo;stage five,&rdquo; that is
          true of register one and not really how register two works. The 10-day
          course is not a sixteen-level game with bhanga as the fifth boss. It
          teaches a practice and then spends ten days asking students to stop
          scoring it. Carrying the catalogue number across into the course turns
          a descriptive word into a progress bar, and the practice has no
          progress bar to put it on.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The finish-line instinct
        </h2>
        <p className="text-zinc-700 mb-4 leading-relaxed">
          Here is the thesis of this page. Most of us arrive at meditation from a
          culture of levels, streaks, scores, and progress bars. That culture
          trains a specific instinct: when you start something, find the
          checkpoint. The mind reaches for the nearest thing that looks like a
          milestone and locks on. Bhanga is the perfect candidate. It sits at
          number five of sixteen. It has a vivid description attached. It even
          comes pre-labelled, in the tradition&apos;s own glossary, as
          &ldquo;an important stage.&rdquo; If you wanted to design a meditation
          checkpoint for a gamer&apos;s brain, it would look exactly like this.
        </p>
        <p className="text-zinc-700 mb-6 leading-relaxed">
          And that is the trap. The practice taught at a 10-day course is, at its
          core, training the mind to stop reaching, to stop leaning toward the
          pleasant and away from the unpleasant. Converting an experience into a
          target re-installs the reaching the practice is meant to dissolve. You
          end up sitting <em>at</em> the cushion the way you grind a level: with
          one eye on the prize, treating every ordinary sit as a failed attempt
          at the special one. The harder you chase bhanga, the more reaching you
          generate, and reaching is the raw material of exactly the suffering you
          came to work on. The word becomes a way to lose by trying to win.
        </p>
        <ComparisonTable
          competitorName="Bhanga treated as a finish line"
          productName="Bhanga as the tradition frames it"
          rows={comparisonRows}
          caveat="Neither column is technique instruction. The left column is the common online framing of the word; the right column is the observable framing the tradition uses in its glossary, its discourses, and its course structure. For anything about what to actually do on the cushion, the source is an authorized assistant teacher, not this table."
        />
        <p className="text-zinc-700 mt-6 leading-relaxed">
          Look at the bottom row. When bhanga is a finish line, you become the
          referee: you hold each sit up against a description you read somewhere
          and rule on whether it counted. That is a private scoreboard, and a
          private scoreboard is a machine for producing dissatisfaction, because
          there is always a better sit you did not have. The tradition&apos;s
          framing removes the referee entirely. Nobody asks. There is no box to
          tick. The relief in that is easy to miss until you have spent a few
          months quietly grading yourself.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor: a sit log built with nowhere to record a stage
        </h2>
        <p className="text-zinc-700 mb-6 leading-relaxed">
          This is the part of the page you can verify yourself, and the part no
          generic explainer of the word can copy. This site publishes a free
          printable daily sit log. It is one sheet of paper, one calendar year,
          366 small squares, one square per day. What is interesting is what the
          sheet deliberately refuses to give you.
        </p>
        <GlowCard className="p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.16em] text-teal-700 mb-3">
            From{" "}
            <Link
              href="/daily-sit-log/print"
              className="underline hover:text-teal-800"
            >
              vipassana.cool/daily-sit-log/print
            </Link>
          </p>
          <div className="mb-5 flex flex-wrap gap-1.5" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="h-9 w-9 rounded-[3px] border border-zinc-400"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom right, transparent calc(50% - 0.5px), #a1a1aa calc(50% - 0.5px), #a1a1aa calc(50% + 0.5px), transparent calc(50% + 0.5px))",
                }}
              />
            ))}
          </div>
          <p className="text-zinc-700 leading-relaxed mb-3">
            The instructions printed on the sheet are short on purpose. Two of
            the four rules are about what <em>not</em> to record:
          </p>
          <ul className="space-y-1.5 text-zinc-800">
            <li className="flex gap-2">
              <span className="text-teal-600" aria-hidden="true">
                &middot;
              </span>
              <span>&ldquo;Do not write the duration.&rdquo;</span>
            </li>
            <li className="flex gap-2">
              <span className="text-teal-600" aria-hidden="true">
                &middot;
              </span>
              <span>&ldquo;No colors. No metrics. No streak.&rdquo;</span>
            </li>
          </ul>
          <p className="text-zinc-700 leading-relaxed mt-4">
            After you sit, you draw one stroke in a square. That is the entire
            data model. There is no field for how long, no field for how it
            went, and crucially no field for what you experienced. There is
            nowhere on that sheet to write &ldquo;today I reached bhanga.&rdquo;
            That absence is the design.
          </p>
        </GlowCard>
        <p className="text-zinc-700 mt-6 leading-relaxed">
          The reasoning is the same one this whole page is built on. The moment a
          log can hold a quality score, the score becomes the thing you sit for.
          A square that only records &ldquo;I showed up&rdquo; cannot be gamed,
          cannot be chased, and cannot quietly turn a daily practice into a
          performance. Strip out the scoreboard and there is no finish line for
          bhanga to be.
        </p>
        <p className="text-zinc-700 mt-4 leading-relaxed">
          The site&apos;s{" "}
          <Link
            href="/guide/recognizing-progress"
            className="text-teal-700 underline hover:text-teal-800"
          >
            recognizing progress
          </Link>{" "}
          guide makes the same point in plain words. Under the heading of what is{" "}
          <em>not</em> a sign of progress, it lists &ldquo;free flow, vibrations,
          dissolution experiences&rdquo; and calls them &ldquo;byproducts of
          concentration, not signs of wisdom.&rdquo; A meditator with quiet,
          ordinary sits and steady evenness is doing better, by that guide&apos;s
          measure, than one collecting dramatic dissolution experiences with no
          evenness at all. Bhanga is not on the scorecard because there is no
          scorecard.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-14">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">
            The honest counterargument: bhanga is real, so isn&apos;t naming it
            useful?
          </h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            It would be dishonest to pretend the experience does not exist or
            does not matter. It clearly does. The tradition&apos;s own glossary
            calls bhanga &ldquo;an important stage,&rdquo; and it would not have
            kept a Pali word alive for this if the word pointed at nothing.
            Plenty of long-term practitioners can tell you, from the inside,
            that the experience the word names is distinct and worth having a
            term for. So if it is real and important, why be so wary of it?
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Because naming a thing is not the error. The error is the verb you
            attach to the name. There is a wide gap between noticing bhanga and
            reaching for bhanga, between a word that <em>describes</em> what
            arose and a word that <em>commands</em> what should arise next. A
            weather word is a good comparison. &ldquo;Fog&rdquo; is a useful
            word; it would be strange to spend your mornings trying to produce
            fog. Bhanga, used well, is a weather word. It lets practitioners
            compare notes about something that happens. Used badly, it becomes
            an instruction to yourself, and the instruction is the problem.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            So the resolution is not to delete the word or pretend the
            experience is nothing. It is to keep the word in the register where
            it belongs: a description, shared after the fact, never a target set
            before the sit. What the experience is, what it accomplishes, and
            what to do when it does or does not appear are real questions, and
            good ones. They are simply not questions for this page. They belong
            with an authorized assistant teacher, who is the proper source for
            anything operational about how the practice works.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where the real questions go
        </h2>
        <p className="text-zinc-700 mb-4 leading-relaxed">
          If you came here wanting to know how to reach bhanga, what it should
          feel like, or how to work with it when it appears, this page has
          deliberately not answered any of that, and the reason is not
          coyness. In this tradition the practice itself is transmitted in
          person, inside a 10-day residential course, by an authorized assistant
          teacher. A website is not where that transmission belongs, and
          scattering partial versions of it online tends to do more harm than
          good. So the honest pointer is simple.
        </p>
        <p className="text-zinc-700 mb-6 leading-relaxed">
          For anything operational, go to{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-800"
          >
            dhamma.org
          </a>{" "}
          and, if you have sat a course, to an assistant teacher at your center,
          by email, by phone, or at a group sitting. If you have not sat a
          course yet, the entry point is the same site:{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-800"
          >
            the course search at dhamma.org
          </a>
          . Courses are free and run on donations from previous students. What
          this page can offer is only the outer frame: bhanga is a Pali word
          for dissolution, it lives in two registers, and the single most
          common way to misuse it is to make it a finish line. I am a fellow
          practitioner sharing what I have noticed after six courses and more
          than 970 days of daily practice, not a teacher.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="More worried about reaching a stage than about sitting tomorrow?"
        description="Book a short call. We can talk through your daily sit, your timezone, and whether a practice buddy on a shared silent call is the structure that keeps the practice steady without turning it into a scoreboard."
        section="bhanga-vipassana-footer"
      />

      <FaqSection items={faqs} heading="Frequently asked questions" />

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related reading on the words and the phenomena"
          posts={relatedPosts}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy matching
          </Link>
          <Link
            href="/daily-sit-log/print"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            The printable sit log
          </Link>
          <a
            href={GLOSSARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Glossary of Pali terms (dhamma.org)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through a steady daily sit, no stages, no scoreboard."
        section="bhanga-vipassana-sticky"
      />
    </article>
  );
}
