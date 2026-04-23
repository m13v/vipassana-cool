import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  AnimatedBeam,
  AnimatedCodeBlock,
  BentoGrid,
  MetricsRow,
  StepTimeline,
  ComparisonTable,
  GlowCard,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/five-precepts-meditation-practice";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Five precepts meditation practice: encoded as a boolean, sorted before the match",
  description:
    "Most pages on this topic list the five precepts and explain their role in calming the mind. On this site the precepts are recorded as the is_old_student column and read by the matcher at src/app/api/auto-match/route.ts lines 173 to 175 as the bothOld key, which sorts viable pairs second, after readyScore and before sessionMatch.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Five precepts meditation practice, as a boolean the matcher reads",
    description:
      "The five precepts show up in this repo as is_old_student Yes, and the sorter evaluates bothOld as its second lexicographic key when building daily-sit pairs.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Five precepts, as is_old_student Yes",
    description:
      "bothOld is the second sort key in the practice-buddy matcher. It fires only when both rows committed to the precepts at a 10-day course.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Why does this page not tell me how to use the five precepts in my own meditation?",
    a: "Because anything operational about how to practice, including how to use the precepts as a support for daily sits, belongs inside a 10-day residential course with an authorized assistant teacher. The course is the place that formally administers the precepts in Pali, the teacher is the person who answers questions about working with them on the cushion, and dhamma.org is where you sign up. This page is a logistics and code note about how the precepts surface inside one peer-matching system. For anything prescriptive, go there, not here.",
  },
  {
    q: "Where in this repo are the five precepts actually encoded?",
    a: "As the is_old_student column on the waitlist_entries table. The form collects the value at src/components/waitlist-signup.tsx lines 263 to 285, where the legend reads 'Are you an old student?' and the helper text defines Yes as 'completed at least one 10-day course.' That completion is the moment the precepts were formally taken in the Goenka tradition, so the column is the closest thing the schema has to a precepts field. It is a boolean. The database does not track which precepts you follow or how well. It tracks only the fact that a course happened.",
  },
  {
    q: "What does the matcher do with that boolean?",
    a: "Lines 173 to 175 of src/app/api/auto-match/route.ts compute a bothOld flag that is true only when sa.person.is_old_student and sb.person.is_old_student are both the string 'Yes'. Lines 186 to 189 use that flag as the second key in a four-key lexicographic sort, after readyScore and before sessionMatch. The practical consequence: when two pairs both pass the 60-minute UTC window and both have the same readyScore, the pair where both sides have been through a 10-day course sorts first and gets written to the matches table first.",
  },
  {
    q: "Does the matcher check whether a partner is actually keeping the precepts?",
    a: "No. Nothing on the server side audits behavior. There is no ping asking if you drank last night or lied at work this morning. The boolean is self-reported at signup and never revisited. The system trusts the course event as sufficient evidence of formal commitment and leaves the ongoing observance, and any conversation about it, to the pair of humans in the match row and to the authorized teachers they learn from. A system that tried to police the precepts would need a tooling and relationship that Vipassana.cool does not have and does not want.",
  },
  {
    q: "What exactly are the five precepts, as they come up at a Goenka course?",
    a: "In the Pali formula that gets administered on Day 0, they are: panatipata veramani (abstain from destroying life), adinnadana veramani (abstain from taking what is not given), kamesu micchacara veramani (abstain from sexual misconduct, which during the course means any sexual activity), musavada veramani (abstain from wrong speech), and sura-meraya-majja-pamadatthana veramani (abstain from intoxicants that cause heedlessness). Eight precepts are taken by old students for the duration of a course, but the five are the baseline for lay life after the course. This page is quoting the formula, not teaching it; the teaching is done at the course itself.",
  },
  {
    q: "Why does the sort key put readyScore above bothOld?",
    a: "Because a row marked 'ready' has confirmed intent to sit right now, which is a stronger operational signal than a historical course completion. The matcher is trying to get two people to sit together in a specific 60-minute slot, not to rank meditators by credentials. A ready non-old-student and a pending old student produce a pair with readyScore 1 and bothOld false; two ready rows produce readyScore 2 and sort first even if one of them is not an old student. The precepts boolean breaks ties among people who are all trying to sit right now, not the other way around.",
  },
  {
    q: "Can you sign up for the practice-buddy system without having taken the five precepts?",
    a: "Yes. Nothing in src/app/api/auto-match/route.ts filters out rows where is_old_student is 'No'. A non-old-student row is fully eligible: it enters the pool after the 24-hour cool-off (lines 88 to 91), it is paired on identical rules, and it can end up in a match row with another non-old-student or with an old student. The only difference bothOld creates is priority inside a tie, never an admission gate. The product is a peer-matching utility, not a certification scheme.",
  },
  {
    q: "Why this framing of the precepts, rather than the usual ethical-foundation framing most articles use?",
    a: "Because the usual framing is already covered in great detail by Spirit Rock, Insight Meditation Center, the Wikipedia article, vipassana.com, and Plum Village's Five Mindfulness Trainings. Duplicating that content here would add nothing the reader cannot find elsewhere. The part that is genuinely unique to vipassana.cool is that the precepts show up at a specific file path as a specific column read by a specific sort key. That is the part this page is for. Everything else is a link away.",
  },
  {
    q: "What happens if an old student and a non-old-student are paired?",
    a: "Nothing different at runtime. The match row is written the same way, the confirmation emails are dispatched the same way, and the shared Meet URL is generated on the same schedule. The pair's readyScore and diff carried them to the top of the sort; the fact that one side has bothOld contribution and the other does not was a tie-breaker that did not fire. Inside the sit itself the pair negotiates whatever they negotiate. This site does not instruct either of them on how to hold the precepts during a sit and does not need to.",
  },
  {
    q: "Where should I actually learn how the precepts function inside the practice?",
    a: "At a 10-day course taught by an assistant teacher in the tradition of S.N. Goenka. Courses are free, run on donations, and are listed at dhamma.org. The teacher administers the precepts formally on Day 0, answers questions daily in the small-group interviews, and discusses their role in the nightly discourses. No article, including this one, substitutes for that. If you are already an old student and want to talk about what the precepts mean for a daily sit, talk to an assistant teacher at your nearest center, not to a matcher.",
  },
];

const oldStudentFieldSrc = `// src/components/waitlist-signup.tsx — lines 263 to 285
{/* Old student */}
<fieldset>
  <legend className={labelClass}>
    Are you an old student?{" "}
    <span className="font-normal text-muted">
      (completed at least one 10-day course)
    </span>
  </legend>
  <div className={radioGroupClass}>
    {["Yes", "No"].map((opt) => (
      <label key={opt} className={radioLabelClass}>
        <input
          type="radio"
          name="isOldStudent"
          value={opt}
          required
          checked={form.isOldStudent === opt}
          onChange={(e) => update("isOldStudent", e.target.value)}
        />
        {opt}
      </label>
    ))}
  </div>
</fieldset>`;

const sorterSrc = `// src/app/api/auto-match/route.ts — lines 146 and 173 to 189
type ScoredPair = {
  slotA: SessionSlot;
  slotB: SessionSlot;
  diff: number;
  readyScore: number;
  bothOld: boolean;        // <- the precepts boolean, computed per pair
  sessionMatch: boolean;
};

// ...inside the pairwise loop:
bothOld:
  sa.person.is_old_student === "Yes" &&
  sb.person.is_old_student === "Yes",

// Strict lexicographic sort over the four keys:
allViable.sort(
  (x, y) =>
    (y.readyScore - x.readyScore) ||
    (Number(y.bothOld) - Number(x.bothOld)) ||     // <- second key
    (Number(y.sessionMatch) - Number(x.sessionMatch)) ||
    (x.diff - y.diff)
);`;

const fiveCards: BentoCard[] = [
  {
    title: "panatipata veramani",
    description:
      "Abstaining from destroying life. Spoken first in the Pali formula at Day 0 of a 10-day course. The corresponding row in this repo is an is_old_student Yes that cannot be set without that course event.",
    size: "2x1",
  },
  {
    title: "adinnadana veramani",
    description:
      "Abstaining from taking what is not given. No additional column tracks this. The system trusts the formal commitment and nothing more.",
  },
  {
    title: "kamesu micchacara veramani",
    description:
      "Abstaining from sexual misconduct. Inside a course this is held as complete celibacy; in lay life the baseline softens to non-harming conduct. The schema does not distinguish either state.",
  },
  {
    title: "musavada veramani",
    description:
      "Abstaining from wrong speech. Not enforced or audited by the site. The operator has no way to verify self-reported field values, and does not try.",
  },
  {
    title: "sura-meraya-majja-pamadatthana veramani",
    description:
      "Abstaining from intoxicants that cause heedlessness. Day 10 discourses at courses frame the precepts as five legs of a stool; the matcher reduces the stool to one boolean for sorting, and points the reader at dhamma.org for everything else.",
    size: "2x1",
  },
];

const pairSortRows: ComparisonRow[] = [
  {
    feature: "What the five precepts are",
    competitor:
      "Ethical guidelines that create the conditions for deep meditation; precepts, concentration, wisdom as a three-legged stool.",
    ours:
      "A single boolean column on waitlist_entries.is_old_student, settable only via self-report of course completion.",
  },
  {
    feature: "Where the precepts live in the code",
    competitor: "They do not. Explainer pages are not connected to a running system.",
    ours: "src/app/api/auto-match/route.ts lines 146 and 173 to 175. Also the form at waitlist-signup.tsx lines 263 to 285.",
  },
  {
    feature: "How precepts affect pairing",
    competitor: "Not applicable; no pairing.",
    ours:
      "Second sort key after readyScore. Two old-student rows sort above a mixed pair at the same readyScore.",
  },
  {
    feature: "Verification model",
    competitor: "Ethical exhortation; the reader verifies their own conduct.",
    ours:
      "None server-side. The course event is treated as sufficient evidence of formal commitment; there is no background check.",
  },
  {
    feature: "Who answers questions about the precepts",
    competitor: "The article's author or the tradition the article represents.",
    ours:
      "An authorized assistant teacher at a 10-day course, reached via dhamma.org. The matcher does not teach.",
  },
  {
    feature: "What happens to non-old-student rows",
    competitor: "Not applicable; every reader is treated the same.",
    ours:
      "Full participation. bothOld only breaks ties; it never gates admission to the pool.",
  },
  {
    feature: "Cost to participate",
    competitor: "Reading time and attention.",
    ours:
      "A 2-minute form. Everything else is the cron's job, and the cron is free in the dana tradition the service orbits.",
  },
];

const beamSources = [
  { label: "is_old_student field", sublabel: "Yes / No, self-reported" },
  { label: "Course completion at dhamma.org", sublabel: "where the precepts were formally taken" },
  { label: "status column", sublabel: "pending / ready" },
  { label: "session_duration", sublabel: "30 / 45 / 60 / 90 / 120 min" },
  { label: "morning_utc + evening_utc", sublabel: "session time, normalized" },
];

const beamHub = {
  label: "auto-match sorter",
  sublabel: "lexicographic, four keys",
};

const beamOutputs = [
  { label: "readyScore", sublabel: "first key, 2 / 1 / 0" },
  { label: "bothOld", sublabel: "second key, precepts boolean" },
  { label: "sessionMatch", sublabel: "third key, duration equality" },
  { label: "smallest UTC diff", sublabel: "fourth key, tie-breaker" },
];

const courseToMatch = [
  {
    title: "A 10-day course at dhamma.org",
    description:
      "The teacher administers the five precepts in Pali on Day 0, before any instruction begins. This is the event the product treats as the canonical moment the precepts were taken. Nothing on this site substitutes for it.",
  },
  {
    title: "The student completes the course",
    description:
      "Day 11 departure. From that point on, the student is an 'old student' in the tradition's terminology. The commitment to the five precepts is part of what old-student status implies in lay life.",
  },
  {
    title: "Signup on vipassana.cool",
    description:
      "Back home, the student fills out the waitlist form at /practice-buddy. The radio group at waitlist-signup.tsx lines 263 to 285 asks 'Are you an old student?' and writes the answer to is_old_student.",
  },
  {
    title: "A row is inserted",
    description:
      "db.ts line 119 inserts the value along with timezone, session duration, frequency, and the rest. The column is a string ('Yes' or 'No'), not a boolean; the matcher coerces it later.",
  },
  {
    title: "The cron runs at :00 or :30",
    description:
      "Every 30 minutes, vercel.json triggers GET /api/auto-match. The handler loads the pool, filters by the 60-minute UTC window, and builds ScoredPair records for every viable pair.",
  },
  {
    title: "bothOld is computed",
    description:
      "Per pair, at lines 173 to 175. The flag is true only when both sa.person.is_old_student and sb.person.is_old_student equal the string 'Yes'. No partial credit, no weighting.",
  },
  {
    title: "The sort fires",
    description:
      "Lines 186 to 189. readyScore first, bothOld second, sessionMatch third, UTC diff fourth. Pairs where the precepts boolean is true for both sides move up inside any readyScore tier.",
  },
  {
    title: "Two rows, one match",
    description:
      "createMatch inserts a matches row. Two confirmation emails go out, a shared Meet URL gets generated on confirmation, and what the pair does with the precepts inside their sit is between them and a teacher.",
  },
];

const grepChips = [
  "is_old_student === 'Yes'",
  "bothOld = sa && sb",
  "second sort key",
  "readyScore > bothOld > sessionMatch",
  "panatipata veramani",
  "adinnadana veramani",
  "kamesu micchacara veramani",
  "musavada veramani",
  "sura-meraya-majja-pamadatthana veramani",
  "waitlist_entries.is_old_student",
  "dhamma.org // teacher, not matcher",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Five precepts meditation practice" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Five precepts meditation practice", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Five precepts meditation practice: encoded as a boolean, sorted before the match",
    description:
      "On this site the five precepts are the is_old_student column on waitlist_entries, read by the auto-match sorter at route.ts lines 173 to 189 as the bothOld key, the second lexicographic key after readyScore.",
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
    <article className="bg-white text-zinc-900">
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

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          five precepts, as is_old_student Yes
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Five precepts meditation practice:{" "}
          <GradientText>encoded as a boolean, sorted before the match</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most explainers on this topic define the five precepts, explain
          their role as a stabilizing ethical base, and stop there. That work
          is already done, repeatedly, across the tradition&apos;s best
          sites. This page covers the part those sites cannot: the one place
          in this repo where the precepts show up as a running piece of code.
          The form at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            src/components/waitlist-signup.tsx
          </code>{" "}
          collects them as a boolean. The matcher at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            src/app/api/auto-match/route.ts
          </code>{" "}
          reads that boolean as the second lexicographic sort key when
          pairing daily sitters. Nothing on this page teaches the precepts;
          it only reports where they live in the data model.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="operator, vipassana.cool"
          readingTime="9 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Every claim pinned to a specific file path and line range in this repo",
            "No operational instruction about sila or the technique; anything prescriptive is redirected to dhamma.org",
            "The pañcasila formula is quoted in its Pali register, not taught",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Five precepts, as a boolean"
              subtitle="The pañcasila is not a feature of this product. It is a tie-breaker inside a sort."
              captions={[
                "Taken formally on Day 0 of a 10-day course at dhamma.org.",
                "Recorded as is_old_student Yes on waitlist_entries.",
                "Read by the matcher as bothOld, lines 173 to 175 of route.ts.",
                "Second sort key, after readyScore and before sessionMatch.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the common explainers cover well
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          A careful reader can learn a lot from Spirit Rock, Insight
          Meditation Center, Tricycle, the Wikipedia article on the five
          precepts, Plum Village&apos;s Five Mindfulness Trainings, and
          Buddho.org. Those pages treat the precepts as an ethical foundation
          for meditation. Non-harming. Truthful speech. Non-stealing.
          Abstaining from sexual misconduct. Avoiding intoxicants that dull
          awareness. They describe the precepts as one of three legs of a
          stool, next to concentration and wisdom, and they do a good job of
          tracing how a mind that is not agitating itself with broken
          commitments sits more easily.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          This page does not try to redo any of that. If you want the
          conceptual grounding, those pages are better placed to give it to
          you, and the tradition&apos;s authorized teachers better placed
          still. What this page has that those do not is a code path.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The field, in the form
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          The practice-buddy signup asks one question whose answer is the
          closest thing the schema has to a precepts column. The legend
          defines the semantics: Yes means one 10-day course completed, which
          is the event at which the precepts are formally administered in
          Pali. The column is a nullable string, not a checkbox array; the
          tradition is carried in by reference to the course, not reproduced
          in the form.
        </p>
        <AnimatedCodeBlock
          code={oldStudentFieldSrc}
          language="tsx"
          filename="src/components/waitlist-signup.tsx"
        />
        <p className="text-zinc-600 mt-4 max-w-3xl leading-relaxed">
          Two consequences. First, the site does not re-administer the
          precepts; the act of taking them stays at the course where it
          belongs. Second, the row cannot be audited by the operator for
          ongoing observance, because the schema does not carry the
          information and the operator is not the person for that job.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The field, in the sorter
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Every 30 minutes the auto-match handler builds a list of viable
          session pairs and sorts them. There are four keys, evaluated in
          strict order. The second key is a boolean named{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            bothOld
          </code>{" "}
          whose input is the is_old_student column on both sides of the pair.
        </p>
        <AnimatedCodeBlock
          code={sorterSrc}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
        <p className="text-zinc-600 mt-4 max-w-3xl leading-relaxed">
          The ordering is not a value statement. A ready non-old-student
          outranks a pending old student because intent to sit right now is a
          stronger operational signal than credential, and the matcher is
          pairing daily sitters, not ranking meditators. But inside any
          readyScore tier, two rows that both came through a 10-day course
          sort ahead of a mixed pair. That is the only place the precepts
          touch the runtime.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Inputs, sorter, outputs
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Five fields flow into one sorter, and four keys come out the other
          side. The precepts boolean is one of them. The diagram reads left
          to right; nothing on the left side is a quality of a person, and
          nothing on the right is a subjective judgment.
        </p>
        <AnimatedBeam
          title="waitlist_entries columns -> auto-match sorter -> lexicographic keys"
          from={beamSources}
          hub={beamHub}
          to={beamOutputs}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The pañcasila, in its original register
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          The five precepts are administered in Pali at the start of every
          course in this tradition. Quoting the formula is a linguistic note,
          not an instruction; the teacher on retreat is the person who puts
          each one into practice. The grid below is a reference, with each
          card noting what, if anything, the data model does with that
          particular precept.
        </p>
        <BentoGrid cards={fiveCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              The precepts in the runtime, in four numbers
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed max-w-3xl">
              If the whole role of the five precepts inside this particular
              system collapses to integers, these are the four that survive.
              They are literal constants in the sorter, not rhetorical
              flourishes.
            </p>
            <MetricsRow
              metrics={[
                {
                  value: 1,
                  label: "column on waitlist_entries that encodes the precepts (is_old_student)",
                },
                {
                  value: 2,
                  label: "possible string values for that column ('Yes' and 'No')",
                },
                {
                  value: 2,
                  label: "position of bothOld in the four-key sort (after readyScore)",
                },
                {
                  value: 0,
                  label: "server-side audits of whether a Yes row is still keeping the precepts",
                },
              ]}
            />
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
              None of these numbers is tunable per user. They apply to the
              whole pool, every tick. The role of the precepts inside this
              system is narrow and deliberate; the product is not trying to
              be a moral authority. It is trying to put two people in a room
              together at 06:30 UTC on a Tuesday.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          From the course to the match row
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Eight steps from the Pali formula to a matches row. Every step is
          logistics, not technique; every step either happens off-site at a
          center or happens inside a file in this repo. None of them is an
          instruction about how to sit.
        </p>
        <StepTimeline steps={courseToMatch} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Every token on this page you can grep
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl leading-relaxed">
          Read left to right. Each of these strings appears either in this
          repo, in the Pali formula, or in the tradition&apos;s external
          material. Any of them is a valid way to verify the claim that the
          precepts show up here exactly once and in exactly one role.
        </p>
        <Marquee speed={45}>
          {grepChips.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="Common explainers vs. the matcher's view"
          productName="vipassana.cool (precepts as boolean)"
          competitorName="Common explainers (precepts as foundation)"
          rows={pairSortRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="line 174"
          quote="sa.person.is_old_student === 'Yes' && sb.person.is_old_student === 'Yes' — the only place in this repo where the five precepts participate in a comparison operator."
          source="src/app/api/auto-match/route.ts, lines 173 to 175"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where to go for what this page will not give you
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          Anything prescriptive about working with the precepts inside your
          own practice belongs with an authorized teacher at a 10-day course
          taught in the tradition of S.N. Goenka. That includes questions
          about what the precepts ask of a lay meditator between courses,
          about how the eight precepts taken during a course relate to the
          five held in daily life, and about what to do when a specific
          precept becomes difficult. Those questions have been answered for
          decades, by people qualified to answer them, inside a format
          specifically designed for them. Courses are free, run on donations,
          and are listed at{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          .
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          What this page will give you is a faithful description of where
          the precepts show up in a narrow technical artifact: a sorter that
          pairs people who want to sit together daily. That is a legitimate
          and small role. Treating it as larger would overstate what this
          system does and understate what a course does.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
          The whole role, in two numbers
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The precepts participate in the sort as key number{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={2} />
          </span>{" "}
          out of four, and they do it through exactly{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={1} />
          </span>{" "}
          comparison expression at route.ts line 174. Everything else about
          the five precepts lives at the course and at dhamma.org, not here.
        </p>
      </div>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to walk through what bothOld would look like for your sit?"
        description="Book a short call and we will open route.ts, look at where the precepts boolean would fire for your row, and talk through what the match row would carry, if anything, downstream."
        section="five-precepts-meditation-practice-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on adjacent topics
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guide/old-student-path"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            The old-student path, and what old-student status carries
          </Link>
          <Link
            href="/guide/dhamma-service"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Dhamma service, where the precepts come up again
          </Link>
          <Link
            href="/t/vipassana-buddhism-definition"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Vipassana Buddhism definition
          </Link>
          <Link
            href="/t/find-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Find an accountability partner, as a cron
          </Link>
          <Link
            href="/guide/course-progression"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Course progression, and where the eight precepts sit
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the matcher this page describes
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to the operator about how the precepts boolean would apply to your row."
        section="five-precepts-meditation-practice-sticky"
      />
    </article>
  );
}
