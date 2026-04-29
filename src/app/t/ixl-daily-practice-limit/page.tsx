import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedChecklist,
  BeforeAfter,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/ixl-daily-practice-limit";
const PUBLISHED = "2026-04-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "IXL Daily Practice Limit: The Cap That Exists, And The One That Cannot",
  description:
    "Most pages for \"ixl daily practice limit\" explain the 10-question per subject per day cap on free IXL accounts and route the reader to a $9.95 to $19.95 a month family membership. That answer is correct. This page is the second-audience read on the same phrase: a meditation tradition where the equivalent number is a safety ceiling, not a paywall, and where there is structurally nothing to unlock.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "IXL Daily Practice Limit: The Cap That Exists, And The One That Cannot",
    description:
      "The IXL cap is a paywall: 10 questions per subject per day on free accounts, removed at $9.95 to $19.95 a month. The meditation-side reading of the same phrase is a ceiling that no money will move, anchored on the integers of a printable sit log.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "IXL Daily Practice Limit, And The Limit That Cannot Be Bought Off",
    description:
      "The K-12 cap is a paywall. The meditation cap, on the same phrase, is the opposite. The integers behind a paper sit log explain the difference.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is this page about IXL Learning's free-account question limit?",
    a: "Partly. The IXL Help Center is the right authority on the actual mechanic: signed-in students on a free account run into a per-subject daily cap, the cap resets on a daily cycle, and it is removed by purchasing a family membership (single subject, two subjects, or all four core subjects). For the canonical answer to that question, the IXL Help Center at https://www.ixl.com/help-center is the destination. This page does not try to compete with IXL on its own product mechanics. It is for a smaller second audience that reads the phrase \"daily practice limit\" and notices that other kinds of daily practice also have limits, set for very different reasons.",
  },
  {
    q: "What is the actual IXL daily question limit on a free account?",
    a: "Per IXL's published help materials, the free, signed-in experience is capped at a small per-subject question count each day, and the not-signed-in experience has a stricter cap. Either way, the cap exists to nudge the reader toward an IXL family membership, which IXL prices at roughly 9.95 dollars a month for a single subject up to roughly 19.95 dollars a month for all four core subjects, with discounted pricing for additional children. None of the integers above are decided by this site; they come from IXL's own pricing pages and help articles. If the exact integer matters for a homework decision, IXL's help center is the only authoritative source.",
  },
  {
    q: "Why is a meditation site writing about an IXL paywall?",
    a: "Because the phrase \"daily practice limit\" does double duty. The first audience for the phrase is a student or a parent looking at a homework dashboard. The second audience, much smaller, is an old student of a daily silent practice asking what the equivalent of a daily limit looks like in a tradition with no business model. This site is in the second audience, and it has a small family of tangential pages (see /t/buddy-rich-practice-pad, /t/daily-maths-practice, /t/practice-daily-english-conversation) that take phrases whose first audience is somewhere else and write the second-audience version honestly. This is one of those.",
  },
  {
    q: "Does Vipassana meditation have a daily practice limit?",
    a: "Yes, but not the same kind. The S.N. Goenka tradition is funded entirely by old-student donations, accepted only after a person has personally benefited from a course. There is no premium tier, no daily quota, no app, no paywall to remove. There is, however, a recommended daily ceiling that old students hear at the close of every 10-day course: roughly two hours of sitting per day off-retreat, often described as one hour in the morning and one hour in the evening. That is a direction, not a pass-fail line, and the tradition is explicit that the recommendation exists for the practitioner's benefit, not for any operator's revenue. For more on why that ceiling is there at all, see /t/daily-practice-limit-reached, which is the broader essay this page is a footnote to.",
  },
  {
    q: "Where does the 366 number on this page come from?",
    a: "The file at /src/app/daily-sit-log/print/page.tsx contains a MONTHS array hard-coded with the twelve calendar months and their day counts: 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31. The HTML table renders 12 rows by 31 columns, which is 372 cells. Six cells are backgrounded grey at CSS color #e5e5e5 for the impossible dates (Feb 30, Feb 31, Apr 31, Jun 31, Sep 31, Nov 31). 372 minus 6 equals 366 fillable squares. February is encoded as 29 days deliberately so the same printable survives a leap year without reprinting. A reader can verify these integers in the source, or read /t/buddy-rich-practice-pad for the longer write-up of the same artifact.",
  },
  {
    q: "Is the comparison fair? IXL is a homework tool, not a meditation school.",
    a: "It is not a fair comparison on substance and the page is not pretending it is. IXL is a serious, well-built K-12 product with millions of users; its limit is a normal commercial mechanic that pays for the platform. A meditation tradition is not in the same category at all. The honest argument is narrower: the phrase \"daily practice limit\" appears in two unrelated worlds and means almost opposite things. A reader who notices this and stays curious about the second meaning is the audience this page exists for. A reader who came for the IXL cap and only wants the IXL answer should close this tab and use IXL's help center; that is the right answer for them.",
  },
  {
    q: "Does this page teach meditation technique?",
    a: "No. Nothing on vipassana.cool teaches the technique itself. The S.N. Goenka tradition reserves transmission of the technique to authorized assistant teachers inside 10-day residential courses, and this site treats that boundary as inviolable. Pages here discuss history, logistics, lineage, personal reflection, and community resources. For any operational question about how to sit, how to work with what comes up on the cushion, or how to build a daily practice from zero, the right destination is dhamma.org and a 10-day course in person, not a webpage and not a Reddit thread.",
  },
  {
    q: "What is the practice buddy program on this site?",
    a: "It is a free pairing program for old students of the Goenka 10-day course who want a daily silent video co-sit on a regular schedule, as mutual accountability between courses. It is not an app, it has no subscription, and there is no in-program daily quota. A short form collects a time zone, a sit length, and a sit time, and Matthew personally reviews every signup and hand-matches compatible old students. Matched pairs sit on a shared Google Meet, cameras on, mics muted, no discussion during the sit. See /practice-buddy/how-it-works for the long version. If you came here from an IXL search, this is unlikely to be relevant; if you came here as an old student who reads the phrase the second way, this is the program the site exists to run.",
  },
  {
    q: "If an app blocked me with a daily practice limit, what should I actually do?",
    a: "First, recognize what the message is. In an IXL or homework context, it is a pricing event, not a learning event; the right next move is either to subscribe through IXL's official membership page or to use a different free K-12 resource. In a meditation app context, it is also a pricing event; the right move is generally to close the app and either purchase a tier you find worth the money, or sit without the app entirely. Across either context, the message is the same: the limit you hit was a plan limit, not a practice limit. The broader piece on this site that walks through this distinction is at /t/daily-practice-limit-reached.",
  },
];

const integerAnchorItems = [
  { text: "12 rows, one per calendar month, defined in the MONTHS array near the top of /src/app/daily-sit-log/print/page.tsx.", checked: true },
  { text: "31 columns, one per possible day, regardless of whether the month has 31 days.", checked: true },
  { text: "12 multiplied by 31 equals 372 cells rendered by the HTML table.", checked: true },
  { text: "February is encoded as 29 days, not 28, so the same sheet still works in a leap year.", checked: true },
  { text: "Six cells are backgrounded grey (#e5e5e5) for impossible dates: Feb 30, Feb 31, Apr 31, Jun 31, Sep 31, Nov 31.", checked: true },
  { text: "372 minus 6 equals 366 fillable squares. Every cell carries a diagonal split, an upper-left triangle for morning and a lower-right triangle for evening.", checked: true },
  { text: "There is no streak counter, no notification, and no account behind it. The artifact is a single sheet of paper and a pen.", checked: true },
];

const limitShape = [
  { text: "An IXL daily cap is a count: 10 questions per subject signed-in, fewer when not signed in. The number is set by IXL.", checked: true },
  { text: "The IXL cap is removed by purchasing a family membership at roughly 9.95 dollars a month single-subject, 19.95 dollars a month all four core subjects.", checked: true },
  { text: "The Vipassana daily ceiling is also a count: roughly two hours of sitting a day off-retreat, often described as one hour morning and one hour evening.", checked: true },
  { text: "The Vipassana ceiling is not removed by paying anyone. There is no operator and there is no premium tier; the tradition is donation-funded.", checked: true },
  { text: "The IXL cap exists to convert a free user into a paying customer. The function is commercial.", checked: true },
  { text: "The Vipassana ceiling exists because the tradition has observed at large scale that going past it tends to stop being useful and, for a small minority, starts being unsafe. The function is protective.", checked: true },
  { text: "Both are upper bounds on a daily practice. They are not the same kind of upper bound.", checked: true },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "Daily Practice Limit Reached? The Vipassana Answer Is Inverted",
    href: "/t/daily-practice-limit-reached",
    excerpt:
      "The broader essay this page is a footnote to. Walks through the paywall pattern across IXL, Gauthmath, Anki, Calm, Headspace and the rest, then sets it against the protective ceiling a meditation tradition uses for opposite reasons.",
    tag: "Sister page",
  },
  {
    title: "Daily Maths Practice, for Meditators",
    href: "/t/daily-maths-practice",
    excerpt:
      "Another tangential page in the same family. The K-12 phrase read sideways, with the same 366-square arithmetic of a year on the cushion as the anchor.",
    tag: "Sister page",
  },
  {
    title: "Buddy Rich Practice Pad, Notes from a Different Practice Pad",
    href: "/t/buddy-rich-practice-pad",
    excerpt:
      "The drum-gear phrase read for the second audience. Same editorial rule as this page: redirect the primary audience first, write the second-audience version honestly.",
    tag: "Sister page",
  },
  {
    title: "Practice Daily English Conversation, for People Doing the Opposite",
    href: "/t/practice-daily-english-conversation",
    excerpt:
      "An ESL phrase read sideways: 10 days of noble silence on a residential course as the unlikely second meaning of the same string.",
    tag: "Sister page",
  },
  {
    title: "Why 20 Minutes Beats Two Hours",
    href: "/guide/why-20-minutes-beats-two-hours",
    excerpt:
      "The integer argument behind sustained daily practice. Why a short daily sit kept for years is more realistic than the full two-hour recommendation kept for two weeks.",
    tag: "Arithmetic",
  },
  {
    title: "Practice Buddy, How It Works",
    href: "/practice-buddy/how-it-works",
    excerpt:
      "The free pairing program for old students of the Goenka tradition. Silent daily video co-sittings, hand-matched, no app, no quota.",
    tag: "Program",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "IXL Daily Practice Limit" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "IXL Daily Practice Limit", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "IXL Daily Practice Limit: The Cap That Exists, And The One That Cannot",
    description:
      "A second-audience read on the phrase \"ixl daily practice limit\". The first audience (parents and students looking at the IXL free-account 10-question per subject per day cap and the membership pricing that removes it) gets a clean redirect to the IXL Help Center. The rest of the page is the meditation-side reading: a tradition where the equivalent number is a protective ceiling, not a paywall, anchored on the verifiable integers of a printable sit log at /daily-sit-log/print.",
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
          A K-12 phrase, read sideways
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          IXL daily practice limit, and the limit that cannot be bought off
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          The IXL answer first, in plain words, because most readers came here
          for it. IXL Learning runs a per-subject daily question cap on free,
          signed-in accounts; the not-signed-in experience caps even harder.
          The cap is removed by buying a family membership, priced at roughly
          9.95 dollars a month for a single subject and roughly 19.95 dollars
          a month for all four core subjects, with discounted pricing for
          additional children. The canonical source for the exact mechanic is
          IXL&apos;s own help center. That is the answer for the IXL audience,
          and it is a real answer. This page is for a smaller second audience
          that reads the same phrase and notices that other daily practices
          also have limits, set for almost the opposite reason.
        </p>
      </header>

      <div className="py-4 max-w-4xl mx-auto px-6">
        <ArticleMeta
          author="Matthew Diakonov"
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="8 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-5 text-sm text-zinc-700 leading-relaxed">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-teal-700">
            If you came here for the IXL answer
          </p>
          <p>
            The official explanation of the IXL free-account daily cap and the
            membership that removes it lives at{" "}
            <a
              href="https://www.ixl.com/help-center"
              className="text-teal-600 underline hover:text-teal-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              ixl.com/help-center
            </a>
            . The pricing page is at{" "}
            <a
              href="https://www.ixl.com/membership"
              className="text-teal-600 underline hover:text-teal-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              ixl.com/membership
            </a>
            . Either of those is more authoritative on the IXL product than a
            meditation site could ever be. If a homework decision is the actual
            question, please use the official sources; the rest of this page
            is for a different reader.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Two daily practice limits, one phrase
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The English string &ldquo;daily practice limit&rdquo; carries two
          completely different meanings in two completely different rooms. In
          the first room, a child opens a homework dashboard, runs through ten
          algebra questions on a free account, and sees a card explaining
          that they have hit today&apos;s limit and can either come back
          tomorrow or have a parent sign up for a membership. The cap is set by
          the operator, the operator runs a business, and the limit is doing
          what limits in software products usually do.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          In the second room, an adult sits in a quiet corner of an apartment
          for an hour before work, twice a day, has done so for several years,
          and at some point notices that the tradition they are sitting in also
          uses the phrase &ldquo;daily practice&rdquo; with a number attached.
          That number, in the S.N. Goenka tradition of Vipassana, is on the
          order of two hours a day off-retreat, often described as one hour in
          the morning and one hour in the evening. The number is repeated at
          the close of every 10-day course and at every group sitting. There
          is no operator on the other end of it, no signup page, and no tier to
          buy.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          A small disclaimer up front, because this is a meditation site and
          not a teaching authority. I am not a teacher, just an old student of
          the Goenka tradition: six 10-day courses across three centers,
          roughly forty days of dhamma service. Everything below is reflection
          on a phrase, not advice. The technique itself is reserved to
          authorized assistant teachers at residential courses, and that is the
          right place for it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <BeforeAfter
          title="The two limits, side by side"
          before={{
            label: "IXL daily practice limit (commercial)",
            content:
              "A per-subject daily question cap on free accounts, set by the operator. The cap exists to convert free users into paying customers. The number can be raised to effectively unlimited by purchasing a family membership at the published price tiers. The relationship between the user and the limit is mediated by money: a credit card removes it.",
            highlights: [
              "Set by an operator who runs a business",
              "Exists to drive subscription conversion",
              "Removed instantly by paying the membership fee",
            ],
          }}
          after={{
            label: "Vipassana daily ceiling (protective)",
            content:
              "A recommended upper bound of roughly two hours a day off-retreat, repeated at the close of every 10-day course in the S.N. Goenka tradition. There is no operator running a business behind it; the tradition is donation-funded by old students who have themselves benefited. The ceiling exists because going past it tends to stop being useful, and for a small minority has been clinically documented to harm. No payment removes it; there is structurally nothing to pay for.",
            highlights: [
              "Set by a tradition with no business model",
              "Exists for the practitioner's safety, not for revenue",
              "Cannot be removed because there is no one to remove it",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          What the IXL cap actually is
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          IXL&apos;s help center is the right authority on its own product, so
          this section is short and yields the deep version to them. The free
          experience on a signed-in IXL student account caps at a per-subject
          daily question count. A student who is not signed in caps faster.
          When the cap fires, the dashboard shows a message inviting a parent
          to start a family membership, which is priced in tiers (roughly
          9.95 dollars a month for a single subject, roughly 15.95 dollars a
          month for math and language arts together, and roughly 19.95 dollars
          a month for all four core subjects, with the second and subsequent
          children at a per-child discount).
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Once a paying membership is on the account, the daily cap goes away
          and the same dashboard renders unlimited practice. That is the
          mechanic in one paragraph. There is nothing wrong with it. A
          well-built K-12 product with millions of users needs to be paid for,
          and limit-then-paywall is the standard, fair, and transparent way to
          ask families to do that. If the IXL cap is the actual operational
          question, the help center is the destination.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The reason this page exists is that the same English string carries a
          completely different mechanic in a different field, and the reader
          who notices both is the second audience this article is written for.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Why a tradition would set a limit at all
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The most useful detail here is structural: the 10-day residential
          course in the S.N. Goenka tradition runs from 4:00 in the morning to
          9:30 at night, with most students getting five to six hours of sleep.
          By the morning of Day 4 the course has accumulated a real amount of
          sleep debt at the same time the technique intensifies and the first
          long immobility sittings begin. The clinical case-report cluster on
          rare adverse events in modern Vipassana retreats sits on Day 4 to Day
          6, and the longer essay at /t/vipassana-psychosis walks through the
          structural reasons.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The off-retreat daily ceiling is descended from the same logic in
          softer form. Stacking three or four hours a day of sitting on top of
          a normal job, while sleeping six, reproduces a weaker version of the
          same load. The tradition does not ban anyone from doing more, and it
          does not penalize anyone for doing less; the whole apparatus is
          permissive. The number is published precisely so that practitioners
          know where the curve of usefulness starts to flatten, not so any
          operator collects a fee at the line.
        </p>
        <ProofBanner
          metric="zero dollars to remove"
          quote="The 10-day course, the discourses, the food, the lodging, and any follow-up group sittings cost the student zero. Old students fund subsequent courses through donations accepted only after they have personally benefited. There is no premium tier."
          source="Standard structural description of the Goenka tradition, summarized at /t/daily-practice-limit-reached"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The shape of the two limits
        </h2>
        <AnimatedChecklist
          title="Where they look the same, and where they invert"
          items={limitShape}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Anchor fact: 366 squares, no paywall
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          The artifact this site uses to track a year of daily practice is not
          an app and it is not a subscription. It is a printable single-page
          sit log at{" "}
          <Link href="/daily-sit-log/print" className="text-teal-600 hover:underline">
            /daily-sit-log/print
          </Link>
          . The integers behind it are not aspirational; they are hard-coded in
          the source file and a curious reader can verify them in one minute.
        </p>
        <AnimatedChecklist
          title="The integers behind the sheet"
          items={integerAnchorItems}
        />
        <p className="text-zinc-700 leading-relaxed mt-6">
          The contrast with a homework or meditation app is small and
          deliberate. The sheet has no streak counter and no notification.
          Missing a square does not lock anything. Filling a square does not
          unlock anything. The artifact records that practice happened on a
          given morning or evening, and nothing else; whatever happened during
          the practice stays interior, and whatever was missed stays missed.
          The only currency it accepts is a small mark from a pen.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Where the parallel breaks
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Honest counterargument, because the page would be thin without one.
          IXL is an excellent K-12 product solving a real problem for real
          families, and a paywall on a free tier is a perfectly normal way to
          fund continued development of a learning platform. The page is not
          arguing that IXL should not have a daily cap, and it is not
          suggesting that meditation is a substitute for arithmetic practice.
          Those are two unrelated activities for two unrelated audiences, and
          conflating them would be silly.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The narrow argument the page is willing to defend is this: the
          phrase &ldquo;daily practice limit&rdquo; quietly does two opposite
          jobs in two different rooms, and the reader who notices the second
          job has stumbled onto something worth a few minutes of attention. In
          one room, the limit is a price gate. In the other, the limit is a
          safety guideline. Both are honest about what they are; neither is
          pretending to be the other. A person can be in both rooms at once,
          which is roughly the situation of a parent paying for IXL on Tuesday
          and sitting an hour before work on Wednesday.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The other place the parallel breaks is at content. IXL drills
          measurable skills with answer keys; Vipassana is an internal
          discipline with no answer key, no scoreboard, and no graded output.
          The technique transmitted at a 10-day course is not transmissible
          across a webpage, and this page does not try. For anyone whose
          actual question is operational, the right destination is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and a 10-day course in person, run by an authorized assistant
          teacher.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          A note on why this page exists
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          This site has a small family of pages built on the same editorial
          move: take a phrase whose first audience is somewhere unrelated and
          write the second-audience version honestly. The sister pages are{" "}
          <Link href="/t/buddy-rich-practice-pad" className="text-teal-600 hover:underline">
            /t/buddy-rich-practice-pad
          </Link>{" "}
          (a drum-gear phrase), {" "}
          <Link href="/t/daily-maths-practice" className="text-teal-600 hover:underline">
            /t/daily-maths-practice
          </Link>{" "}
          (a K-12 worksheet phrase), and{" "}
          <Link href="/t/practice-daily-english-conversation" className="text-teal-600 hover:underline">
            /t/practice-daily-english-conversation
          </Link>{" "}
          (an ESL phrase). Each one names the first audience up front, redirects
          them politely, and writes a careful second-audience read for whoever
          stayed. If the IXL frame does not land for you as a reader, that is
          the right reaction and IXL&apos;s help center is one click away.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The broader essay this page is a footnote to lives at{" "}
          <Link href="/t/daily-practice-limit-reached" className="text-teal-600 hover:underline">
            /t/daily-practice-limit-reached
          </Link>
          . That one looks at the same paywall pattern across IXL, Gauthmath,
          Anki, Calm, Headspace, Insight Timer, Waking Up, and the others, and
          sets it against the protective ceiling a meditation tradition uses
          for opposite reasons. If this page was useful, that one is probably
          worth a read too.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Daily practice without a paywall, paired with another old student"
          description="The practice buddy program pairs old students of the Goenka 10-day course for silent video co-sittings on a regular schedule. Free, no app, no quota, no tier to unlock. Book a short call to get matched."
          section="ixl-daily-practice-limit-footer"
        />
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-6 my-12">
        <FaqSection heading="Common questions" items={faqs} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <RelatedPostsGrid
          title="Related reading"
          subtitle="The same family of tangential pages, plus the broader essay this one is a footnote to"
          posts={relatedPosts}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <p className="text-sm text-zinc-500 leading-relaxed">
          A reader looking for the IXL answer should use{" "}
          <a
            href="https://www.ixl.com/help-center"
            className="text-teal-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ixl.com/help-center
          </a>
          . A reader curious about the printable artifact this page uses as
          its anchor can open{" "}
          <Link href="/daily-sit-log/print" className="text-teal-600 hover:underline">
            /daily-sit-log/print
          </Link>
          . A reader who wants the technique itself goes to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and signs up for a 10-day residential course in the Goenka tradition,
          which is the only place the technique is actually transmitted.
        </p>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Get paired with another old student for silent daily video co-sittings"
        section="ixl-daily-practice-limit-sticky"
      />
    </article>
  );
}
