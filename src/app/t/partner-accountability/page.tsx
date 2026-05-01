import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  BeforeAfter,
  AnimatedChecklist,
  FlowDiagram,
  AnimatedCodeBlock,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/partner-accountability";
const PUBLISHED = "2026-04-30";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Partner accountability without a single check-in",
  description:
    "Most articles describe partner accountability as a conversational system: weekly check-ins, SMART goal reviews, progress reports. The matching service for daily meditation on this site has zero of those mechanics. The entire accountability layer is one shared Google Meet URL whose empty room is the only signal anyone is missing.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Partner accountability without a single check-in",
    description:
      "1010 lines of matching code, zero recurring check-in primitives, one shared Meet URL on RRULE:FREQ=DAILY. The empty room is the whole accountability surface.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner accountability without a single check-in",
    description:
      "Two practitioners, one URL, one calendar event, no scheduled conversation about progress. The room is either both of you, or visibly neither.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does partner accountability mean here, in one sentence?",
    a: "A two-person structure where each side makes the other's commitment more likely to hold, implemented as one shared recurring Google Meet URL that both partners open at roughly the same wall-clock time every day. There is no weekly call where one person reports to the other. The accountability is the visible presence or absence of the other human in that room. Showing up is the report. Not showing up is the report. Nothing else needs to be said.",
  },
  {
    q: "Why does this site implement partner accountability without any check-ins?",
    a: "Two reasons, one practical and one tradition-shaped. Practical: the people the matcher pairs already know what they want to do, sit for 30 to 60 minutes with their eyes closed in silence, every morning. They do not need a partner to clarify the goal, refine the strategy, or escalate when the goal is missed. They need a partner to be in the room. Tradition-shaped: the Goenka tradition this product orbits is taught on a donation basis at 10-day residential courses, arranged through dhamma.org. A free service cannot pay anyone to chase you for a missed week, so the design avoids any role that would need that kind of labor. Both partners are peers and both are silent.",
  },
  {
    q: "What exactly is missing from the system that every other guide treats as essential?",
    a: "Five things, all of which are absent from the entire matching service. There is no scheduled weekly check-in call, the calendar event recurs daily for the sit itself with no separate weekly meeting. There is no SMART-goal capture during signup; the waitlist form asks for practice traits like frequency, duration, and timezone, not a written goal. There is no progress report template; neither partner is asked to summarize their week. There is no nudge or reminder system; the matching cron does not poke either side after the intro email lands. There is no escalation path when one partner goes quiet; if both rooms stay empty, the partnership ends without any system action. A grep across the matching service for the words check-in, weekly, nudge, reminder, and progress report returns zero hits.",
  },
  {
    q: "If neither partner reports to the other, how does the accountability actually work?",
    a: "The Meet room is the report. When you open the URL at your sit time, the other person is either already there, or they are not. The signal is mutual and silent. You do not have to ask whether they sat today, you can see whether they are sitting now. Over time, the rhythm becomes its own social contract. The first few days of a new pairing tend to set the tone, because both partners notice the other showing up and adjust their own probability of showing up tomorrow. The system never tells either of you what the other did. The room shows you, in real time, what the other is doing right now.",
  },
  {
    q: "Does this design actually keep people sitting, or do pairings just go quiet together?",
    a: "Some pairings do go quiet together, and the system lets them. When both rooms stay empty for a stretch, the partnership effectively ends, with no email blast, no reactivation campaign, and no guilt funnel. The pairings that hold tend to be the ones where the two people arrive with a daily practice already trying to form on its own. The matcher is not designed to convert non-meditators into meditators. It is designed to make daily sitting easier for someone who already wants to sit by removing the loneliness of the early-morning hour. If a partner is the only thing standing between you and zero practice, a conversational accountability system, a coach, or a paid service is a better fit than this one.",
  },
  {
    q: "How does this version compare with conversational accountability systems described in popular guides?",
    a: "Conversational accountability systems treat the partner as the carrier of a goal-tracking process. There is a weekly meeting on the calendar, a structured set of questions, sometimes a shared spreadsheet, and a feedback loop where one partner pushes the other when slippage happens. That works well for goals that are episodic (write 1000 words a day this month) and where one party can usefully comment on the other's domain. Silent co-presence accountability, the version implemented here, treats the partner as a presence in a recurring room. It works well for goals that are about repetition and inner work, where talking about the practice with a peer who is not your teacher carries some risk of drifting into instruction. Both shapes are real partner accountability. They are doing different jobs.",
  },
  {
    q: "Is there any text exchange between partners at all?",
    a: "Yes, exactly one moment of two-way email. The intro email that the matching service sends has both partners on the To line and both partners' addresses on replyTo, plus the operator's address, so any reply goes to all three. The email asks both partners to introduce themselves with one short paragraph each. After that, no further automated outreach goes out for the lifetime of the pairing. If either partner wants to send a follow-up, they reply to that thread. Most do not. The intro thread sits there as a fallback channel that both sides know exists, while the daily sit happens in the Meet room with no chat, no transcript, and no recap.",
  },
  {
    q: "What does the accountability surface look like, structurally?",
    a: "One Calendar event with recurrence rule RRULE:FREQ=DAILY. One Meet URL attached to that event. Two redirector tokens stored in the database, one per partner, that both resolve to the same Meet URL when clicked. One row in the matches table linking person_a_id and person_b_id. Two unsubscribe tokens for the email layer. Zero rows for goals, deadlines, weekly summaries, or progress checkpoints, because no such tables exist. The surface is small on purpose. Anything not on this list is not part of the accountability layer the product offers.",
  },
  {
    q: "Where should a question about how to actually sit go, if not here?",
    a: "Not here. Questions about how to sit, what to do when the body is uncomfortable, how to work with restlessness, or anything that touches the technique itself are for an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page, and the matching service it describes, restrict themselves strictly to logistics: pairing two practitioners by traits and time, building one shared Meet URL, and stepping out of the way. The practice itself, and any operational question about it, stays with the tradition and its authorized teachers.",
  },
  {
    q: "Can the silent model coexist with conversational accountability for the same person?",
    a: "Easily. A reader can use this site's matcher for the daily sit, and pair separately with a coach or a writing accountability group for goal-driven work. The two systems do not conflict, because they cover different surfaces. The silent pairing covers showing up to the cushion. A conversational system covers strategy, deadlines, and outcomes. Most of the people who write in to ask about the matcher already have one or two conversational accountability relationships running for other parts of their life. The matcher is the piece they could not find anywhere else, because the public guides almost never describe a non-conversational version.",
  },
];

const buildCommonTraitsSrc = `// src/lib/emails.ts — lines 4 to 19
export function buildCommonTraits(
  personA: WaitlistEntry,
  personB: WaitlistEntry,
): string[] {
  const traits: string[] = [];
  if (personA.is_old_student === "Yes" && personB.is_old_student === "Yes") {
    traits.push("You're both old students in the Goenka tradition");
  }
  if (personA.frequency === personB.frequency) {
    traits.push(\`You both sit \${personA.frequency?.toLowerCase()}\`);
  }
  if (personA.session_duration === personB.session_duration) {
    traits.push(\`\${personA.session_duration} per session each\`);
  }
  if (personA.timezone === personB.timezone) {
    traits.push(\`You're in the same timezone (\${personA.timezone})\`);
  }
  return traits;
}

// Note what is not in this signature: no goals, no deadlines,
// no weekly_check_in_day, no progress_report_template. The function
// the intro email composes its first words from has four similarity
// predicates and stops.`;

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Partner accountability" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Partner accountability", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "Partner accountability without a single check-in",
    description:
      "Most public guides describe partner accountability as a conversational practice. The matching service on this site has zero scheduled check-ins. The accountability surface is one shared Meet URL on a daily recurrence.",
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

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          A non-conversational version of an old idea
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Partner accountability without a single check-in
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Every popular guide answers this in roughly the same shape. Two
          people pick a goal, set a recurring meeting, talk about progress,
          and one party pushes the other when slippage happens. That shape
          is real. It is also not what the matching service on this site
          implements. Across 1010 lines of matching code, there is exactly
          one moment of two-way text between partners, no scheduled
          progress conversation, and one shared Meet URL whose empty room
          is the only signal anyone is missing. This page is the argument
          for why a non-conversational version of partner accountability
          can hold, and where it cannot.
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

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-04-30
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            Partner accountability is a two-person structure where each
            side makes the other&rsquo;s commitment more likely to hold.
            The standard public version is{" "}
            <strong>conversational</strong>, weekly check-ins, written
            goals, progress reports. The version implemented in this
            codebase is <strong>non-conversational</strong>, two
            practitioners share one recurring Google Meet URL on{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              RRULE:FREQ=DAILY
            </code>
            , and the accountability is the visible presence or absence
            of the other person in that room. Source for the traditional
            definition:{" "}
            <a
              href="https://en.wikipedia.org/wiki/Accountability_partner"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              the Wikipedia entry on accountability partner
            </a>
            .
          </p>
        </div>
      </section>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Every claim grounded in a file path or line range from this repo",
            "Nothing on this page touches the technique, that is for dhamma.org and an authorized teacher",
            "The matching service has been running 945+ days; the operator is in one of these pairings",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The conversational version, and what it quietly assumes
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          If you ran the search that brought you here, you already have the
          standard answer. Wikipedia, BetterUp, Indeed, MasterClass, Duke
          Recreation, Columbia GSAS, ITD World, Joinsquad, Focuskeeper, and
          Flow Club all describe roughly the same shape. Two people pick a
          set of goals. They set a recurring meeting, weekly is the most
          common cadence. At each meeting, one person reports on the past
          week and the other comments. Sometimes there is a shared
          spreadsheet, sometimes there is a SMART-goal worksheet, almost
          always there is an explicit feedback loop where one party can
          push the other when commitments slip.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That shape is genuinely useful. It works well for goals that are
          episodic and verbal, write 50000 words this month, ship 12 sales
          calls a week, run three times a week. The progress report is
          legible. The partner can usefully comment on the goal. There is
          something to escalate to.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          What the public guides almost never describe is a non-verbal
          version, where the partnership is built around the act of
          showing up rather than around a structured discussion of
          showing up. That gap is what this page exists to fill, because
          the daily sit is the cleanest case for the non-verbal version,
          and the matching service on this site is the codified shape of
          it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two shapes of the same idea, side by side
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          Tap between the two tabs. Same goal in both, daily meditation
          for a year. Different accountability surface. Notice which
          mechanics disappear from the right tab and which carry the
          weight on their own.
        </p>
        <BeforeAfter
          title="Conversational accountability vs. silent co-presence"
          before={{
            label: "Conversational",
            content:
              "Two people commit to sit daily for a year. They meet on a video call every Sunday at 7pm to walk through the week. They use a shared Google Sheet with one row per day; each cell is green for a sit, red for a miss. At each weekly meeting, the partner with the most misses explains what got in the way, and the other partner asks one or two clarifying questions. Slippage of more than three days in a row triggers a longer conversation. The shape is talk-then-sit.",
            highlights: [
              "One scheduled meeting per week (separate from the sit)",
              "Written log of progress, reviewed jointly",
              "Direct feedback when commitments slip",
              "Both parties can push the other within an agreed protocol",
            ],
          }}
          after={{
            label: "Silent co-presence",
            content:
              "Two people are paired by the matching service after filling the same waitlist form. The matcher creates one Calendar event with RRULE:FREQ=DAILY and a Meet URL attached. Both partners receive an intro email with one shared link. Every morning, both open the URL at roughly the same time and sit for 30 or 60 minutes with cameras on or off, in silence. The other person is either in the room or not. There is no separate weekly call, no log, no review. The shape is sit-while-the-other-sits.",
            highlights: [
              "Zero scheduled meetings outside the sit itself",
              "No written log, no joint review surface",
              "Empty room is the only feedback signal",
              "Partnership ends quietly when both rooms stay empty",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What is missing from 1010 lines of matching code
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The matching service is two files,{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/lib/emails.ts
          </code>{" "}
          (458 lines) and{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/app/api/auto-match/route.ts
          </code>{" "}
          (552 lines). A grep across both files for the words below
          returns zero matches. None of these mechanics exists. None is
          on a roadmap that would add it.
        </p>
        <AnimatedChecklist
          title="Words that do not appear in the matching service"
          items={[
            { text: "check-in (no scheduled progress conversation primitive)", checked: false },
            { text: "weekly (no weekly cadence anywhere; the cadence is daily, on the sit itself)", checked: false },
            { text: "nudge (no automated message after the intro email lands)", checked: false },
            { text: "reminder (no reactivation flow when a partner goes quiet)", checked: false },
            { text: "progress report (no template, no surface, no row in the database)", checked: false },
            { text: "goals (the waitlist form does not capture a written goal)", checked: false },
            { text: "deadline (the partnership has no end date; it dissolves silently)", checked: false },
            { text: "supervisor / supervisee (the matcher has no asymmetric role fields)", checked: false },
          ]}
        />
        <p className="text-zinc-700 mt-6 max-w-3xl leading-relaxed">
          The absence is not an oversight. It is the product. Every other
          mechanic the matching service implements (scoring, pairing,
          intro email, recurring Calendar event, redirector tokens) is in
          service of one job: get two humans into the same room at the
          same time. The follow-up conversation about whether they
          actually sat is delegated to the room itself.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the system actually does, end to end
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          The full lifecycle from waitlist signup to the daily sit is six
          steps. Read it as a flow that runs once and then repeats forever
          on the daily recurrence. There is no seventh step where someone
          gets asked how the week went.
        </p>
        <FlowDiagram
          title="Lifecycle of one pairing"
          steps={[
            { label: "Two waitlist rows" },
            { label: "Cron pairs them" },
            { label: "One Calendar event" },
            { label: "Shared Meet URL" },
            { label: "Daily sit, in silence" },
            { label: "Empty room ends it" },
          ]}
        />
        <p className="text-zinc-700 mt-2 max-w-3xl leading-relaxed">
          The matching cron at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/app/api/auto-match/route.ts
          </code>{" "}
          fires every two hours and only ever runs the first three steps.
          Step four is one Calendar API call. Step five is the human
          opening a URL. Step six is what happens when both stop opening
          it. No code path in the service implements a recurring
          conversation about steps five and six.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The function that composes the first words a pair reads
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          Sixteen lines. Two arguments, both <em>WaitlistEntry</em>. Four
          predicates, every one of them a symmetric equality between a
          field on A and the same field on B. Not a single line tests a
          declared goal, a planned cadence, a check-in day, or a progress
          template, because none of those fields exists on{" "}
          <em>WaitlistEntry</em>. The first words a new pair reads about
          each other in their inbox are similarities, not commitments.
        </p>
        <AnimatedCodeBlock
          code={buildCommonTraitsSrc}
          language="typescript"
          filename="src/lib/emails.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="3 yr"
          quote="I've personally been meditating over Google Meet with my buddy for the past three years this way."
          source="src/lib/emails.ts line 295, from the intro email every new pair receives"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why a silent surface holds, and where it does not
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The honest answer is that the silent surface holds for one
          specific kind of practice, repetition of an internal
          activity, where the act itself does not need verbal review and
          the partner is not in a position to coach. Daily meditation
          fits that description almost perfectly. So does early-morning
          journaling for one&rsquo;s own eyes, breathwork sessions, and
          some forms of strength training where the work is the same set
          of movements every day. The surface holds because the partner
          is not being asked to evaluate anything, only to be in the
          room.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The surface fails when the goal needs strategy, judgment, or
          an outside perspective on the work. Writing a book, building
          a sales pipeline, training for a one-rep max, recovering from
          an injury that needs progressive load adjustments. In those
          cases the partner&rsquo;s job is to look at the work and
          comment on it, which is exactly what the silent surface
          forbids. A reader who needs that kind of feedback is not the
          reader this matcher is for.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          That is the boundary the design enforces. The matcher is the
          smallest tool in the family of tools called partner
          accountability. It does one thing, get two humans into the
          same recurring room, and refuses to do anything else. A
          conversational accountability partner, a coach, or a paid
          service does the larger jobs. None of them does the smaller
          job nearly as cleanly, because most of them are designed
          around weekly meetings that the silent version does not
          have.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The argument, in one number
        </h2>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Across both files of the matching service, the count of
          recurring conversational check-in primitives is{" "}
          <span className="font-mono text-teal-700 text-3xl align-baseline">
            <NumberTicker value={0} />
          </span>
          . If you believe a partner accountability system requires at
          least one such primitive, then this is not one. If you believe
          a system can hold on shared presence alone, this is one of the
          smallest and most legible examples of that, with the source
          code in plain view to grep for yourself.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          A short summary for anyone skimming
        </h2>
        <ul className="space-y-3 text-zinc-800 text-[15px] leading-relaxed">
          <li>
            <strong>Standard model:</strong> two people, weekly call,
            written goals, progress report, feedback loop. Verbal,
            episodic, judgment-heavy.
          </li>
          <li>
            <strong>Model on this site:</strong> two people, one shared
            Meet URL, daily recurrence, no scheduled conversation about
            progress. Non-verbal, repetitive, judgment-light.
          </li>
          <li>
            <strong>How accountability fires:</strong> by the visible
            presence or absence of the other person in the same room at
            the same time. Showing up is the report. Missing is the
            report.
          </li>
          <li>
            <strong>What is in the system:</strong> matcher, intro email,
            one Calendar event with RRULE:FREQ=DAILY, redirector tokens,
            unsubscribe tokens, the Meet URL.
          </li>
          <li>
            <strong>What is not in the system:</strong> weekly check-in
            calls, written goals, progress templates, nudges, reminders,
            escalation rules, supervisor roles. None of these exist
            anywhere in the matching service.
          </li>
          <li>
            <strong>Best fit for:</strong> daily repetition of an
            internal activity that does not need verbal review.
          </li>
          <li>
            <strong>Worst fit for:</strong> goals that need strategy,
            judgment, or domain feedback from the partner.
          </li>
        </ul>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to see what a silent pairing would look like for your schedule?"
        description="Book a short call and we will walk through what the matcher does end to end, from waitlist signup to the first shared Meet URL, on the non-conversational model."
        section="partner-accountability-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related pages on partner accountability"
          subtitle="Adjacent angles"
          posts={[
            {
              title: "What is an accountability partner: a peer, not an overseer",
              href: "/t/what-is-an-accountability-partner",
              tag: "Definition",
              excerpt:
                "The standard answer treats the partner as an asymmetric overseer. The matcher and the intro email both treat the relation as a symmetric pair.",
            },
            {
              title: "Find an accountability partner",
              href: "/t/find-accountability-partner",
              tag: "Get matched",
              excerpt:
                "How the matcher pairs candidates by similarity traits and a 60-minute UTC window, with no goal-setting step in between.",
            },
            {
              title: "Accountability partner app",
              href: "/t/accountability-partner-app",
              tag: "Tooling",
              excerpt:
                "What the inbox-as-state-machine version of an accountability partner app looks like, when there is no in-app feed.",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to the operator about whether the silent surface fits your daily practice."
        section="partner-accountability-sticky"
      />
    </article>
  );
}
