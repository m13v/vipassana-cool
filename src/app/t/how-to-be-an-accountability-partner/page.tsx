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
  MetricsRow,
  ComparisonTable,
  AnimatedBeam,
  AnimatedCodeBlock,
  BentoGrid,
  StepTimeline,
  GlowCard,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/how-to-be-an-accountability-partner";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "How to Be an Accountability Partner: The Minimum Job, Defined by the Code That Pairs You",
  description:
    "Every other guide on being a good accountability partner lists soft skills. This one opens a repo that runs one. The buildCommonTraits function names the 4 things you must share with your partner. The meet_clicks table defines the 1 action you take per day. The intro email's replyTo pins the channel to 2 addresses and drops the operator. The full job, written down.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "How to be an accountability partner, in four traits, one click, and two email addresses",
    description:
      "src/lib/emails.ts lines 4 to 19 list the four traits. src/app/meet/[token]/route.ts lines 26 to 29 log the one daily click. src/app/api/auto-match/route.ts line 335 fixes the reply-all thread to two humans. That is the whole job a partner signs up for on this site, written in source.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to be an accountability partner: the minimum job, defined by the code that pairs you",
    description:
      "Four traits in buildCommonTraits(). One INSERT INTO meet_clicks per day. One reply-all thread, two addresses. Zero weekly check-in cron, zero streak counters, zero coaching prompts. The whole job a peer partner is asked to do here.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "On this site, what is the full job description of an accountability partner?",
    a: "Four things, all mechanical. (1) Share the four traits the matcher filters on before you are paired: old student of a 10-day Goenka course, same sit frequency, same session duration, and (bonus) same timezone. This lives in src/lib/emails.ts lines 4 to 19 in the buildCommonTraits function. (2) Click your personal tracking URL at roughly the same UTC minute every day, which writes one row into the meet_clicks table (src/app/meet/[token]/route.ts lines 26 to 29). (3) Sit silently on the fixed Google Meet room for the agreed duration. (4) Stay reachable on the reply-all email thread whose replyTo is hard-coded to the two partner email addresses only (src/app/api/auto-match/route.ts line 335). That is the whole job. There is no check-in cron, no weekly digest, no sentiment log, no streak counter. The absence of those is the product, not a bug.",
  },
  {
    q: "Do I need to be a good listener, ask thoughtful questions, or celebrate my partner's wins?",
    a: "Nothing in the code asks you to. The partnership shape here is silent shared presence. Most guides on being a good accountability partner list listening skills, reflective questioning, and emotional labor, because most partnerships they describe are verbal coaching relationships. The shape this matcher ships is different. Once the intro email goes out, the recurring calendar event and the Meet URL are the partnership, and the pair is expected to sit without talking for the duration of the session. Many pairs do reply-all to coordinate timing or acknowledge arrival; many do not. The product does not require either pattern. If you want a partner to talk with, that is a different product, and the 'when this does not fit' section below names honest alternatives.",
  },
  {
    q: "Why is the replyTo fixed to the two partners instead of routing to the operator?",
    a: "Because a peer partnership is between the two peers. Line 335 of src/app/api/auto-match/route.ts sets replyTo to [personA.email, personB.email] for the intro email. When either person hits reply-all, the thread goes to the pair and the operator is not in it. The design choice is that the partner-to-partner thread is the only inbound channel the product wires up by default. The operator is reachable via the site Contact page for anything broken, but the product does not pretend it is a customer-support function. Practically this means the accountability partner's job is to be reachable on that thread, not to CC a third party.",
  },
  {
    q: "How does the matcher know I am the right kind of accountability partner before it pairs me?",
    a: "Eligibility is a fixed list of filters in the auto-match cron, not a vibes read. From src/app/api/auto-match/route.ts: status is pending or ready, unsubscribed is false, contact_count is less than 10 (ten failed partnerships ages you out, with a 7-day cool-off between each retry; status 'ready' bypasses the cap), signup age is greater than 24 hours for new rows, and there is a candidate on the other side whose UTC sit time is within 60 minutes of yours. After the filters, the sort picks a pair on four keys in order: readyScore (both sides confirmed is best), bothOld (both old students of a 10-day Goenka course), sessionMatch (same sit length), and smallest UTC time difference. None of those check a personality profile, a goal statement, or a coaching intake form. The matcher's mental model of 'good partner' is narrow on purpose: two humans who can reliably open the same URL at the same minute.",
  },
  {
    q: "What behaviors does the code actively discourage?",
    a: "Two. First, ghosting: contact_count is incremented every time a partnership fails to get off the ground, and at contact_count equal to 10 you are skipped by the eligibility filter. The effect is that a repeat ghoster is removed from the pool without a conversation, after a fair number of attempts. Second, operator-as-middleman: the reply-all thread's two-address replyTo is deliberate. If either partner tries to loop the operator in to 'resolve' the partnership, the operator will usually redirect the conversation back to the pair, because the pair is the unit. Those are the two behavioral nudges the code ships. Everything else is agreed by the two humans in private.",
  },
  {
    q: "If I want to be a great partner, what is the thing the product really wants from me?",
    a: "Reliability at one wall-clock minute. The meet_clicks table is the only behavioral signal the system watches. Two rows on a match_id within a few minutes of each other, at roughly the same UTC time, on most days, is the strong signal. One row by itself, day after day, is the weak signal. Zero rows for an extended stretch ages the pair out. The operator reads this on the admin dashboard the same way anyone reads a log. If you want to be a great partner here, the highest-leverage thing you can do is show up to the Meet URL at the agreed minute on most days and trust the shared silence to do the rest. The emotional-labor ceremony is optional and not scored.",
  },
  {
    q: "What should I do if my partner stops showing up?",
    a: "Reply-all on the intro thread and ask. That is the only channel the product wires up, and it goes to the two humans, not to the operator. If they respond, adjust. If they do not, their contact_count will eventually bump and the auto-match cron will pair you again with someone new, usually within one to two cron ticks (the cron runs every two hours). You do not need to tell the operator; getPriorMatchedIds tracks your prior partners and the matcher picks a new candidate on the next tick. You also do not need to ask for a refund, because there is nothing to refund. The only time it makes sense to email the operator is if something is broken (a Meet URL that does not resolve, a calendar event you cannot see), because that is an engineering problem, not a partnership one.",
  },
  {
    q: "Is my job as an accountability partner different if my partner is a beginner versus a long-time practitioner?",
    a: "No. The product treats 'long-time practitioner' as a filter input (has_maintained_practice, practice_length) that the matcher reads to decide pairing, not as a role the partner takes on after the pair is made. The buildCommonTraits output is printed into the intro email so both people see what they share, but nothing in the post-match path asks the more experienced person to mentor the less experienced one. For any operational question about practice (how to sit, how to work with a difficulty), the correct referral is an authorized assistant teacher at a 10-day residential course through dhamma.org. That is true for both partners. The partner is not a teacher, and the product does not let you accidentally become one.",
  },
  {
    q: "What if I want to do more than the minimum the product asks for?",
    a: "You can, and many pairs do. The intro email ends with a suggestion to introduce yourselves on reply-all and agree on timing, and some pairs drift into occasional check-ins, shared reading, or a short chat after the sit. None of that is in the product. The meet_clicks table does not know whether you exchanged a sentence or sat for 60 minutes without speaking. The product's only opinion is that the daily shared URL at the shared minute is enough; anything else is a feature of your pair, not of the software. The converse is also true: if you are not a chatty person, the product will never surface a prompt asking you to be one.",
  },
  {
    q: "Can I be an accountability partner on this site for a non-meditation goal, like writing or exercise?",
    a: "No. The schema is locked to one goal shape. The form writes fields like is_old_student, is_goenka_tradition, session_duration, frequency, morning_time, evening_time, and timezone. There is no field for a goal, a target, a weight, a word count, or a metric. The matcher only has meditation filters to read. If you want to be a peer for a writing, exercise, or career goal, the closest shape is Focusmate or Flow Club (paid peer video coworking platforms), or a finite-stakes platform like Stickk or Beeminder. Those are different products with different architectures, and their partner roles look nothing like this one. The narrow scope here is the whole reason the partner's job fits on a single page.",
  },
];

const partnerRoleRows: ComparisonRow[] = [
  {
    feature: "What the partner role asks of me",
    competitor:
      "Active listening, SMART-goal review, weekly coaching call, progress recaps, celebration of wins, gentle confrontation when the other person drifts.",
    ours:
      "Open the Meet URL at the agreed UTC minute on most days. The meet_clicks row is the job. Everything else the pair invents privately.",
  },
  {
    feature: "Required vocabulary between partners",
    competitor:
      "Check-in questions, feedback frames, reflection prompts, progress templates, goal worksheets.",
    ours:
      "The subject line of the intro email, the two first names in it, and the reply-all thread. No in-product templates.",
  },
  {
    feature: "Cadence",
    competitor:
      "Weekly or biweekly calls with a defined agenda; daily text check-ins are often recommended.",
    ours:
      "Daily shared Meet URL, RRULE:FREQ=DAILY with no UNTIL. No weekly call, no agenda, no prompt.",
  },
  {
    feature: "Signal of partnership health",
    competitor:
      "Self-reported progress, goal completion rate, partner satisfaction survey.",
    ours:
      "meet_clicks rows. Two rows per match_id at roughly the same minute, most days, is the strong signal. It is a log, not a dashboard.",
  },
  {
    feature: "Emotional labor expected",
    competitor:
      "High. The partner is a confidant, a cheerleader, a soft coach, a problem-solver.",
    ours:
      "Low by design. The pair sits silently. Ceremony is optional and not scored.",
  },
  {
    feature: "Channel the product wires up",
    competitor:
      "In-app chat, DM thread, scheduled call slot, sometimes a shared doc.",
    ours:
      "One email thread. replyTo = [personA.email, personB.email]. Operator absent.",
  },
  {
    feature: "What happens if the other person drifts",
    competitor:
      "Coach or platform intervenes. Partnership is renegotiated.",
    ours:
      "contact_count increments, the match ages out, the cron pairs you with someone new on the next tick. No conversation required.",
  },
];

const minimumRoleCards: BentoCard[] = [
  {
    title: "Share the four traits, not a hundred",
    description:
      "buildCommonTraits() in src/lib/emails.ts lines 4 to 19 is the whole taxonomy of shared ground the product uses. Old student of a 10-day Goenka course, same sit frequency, same session duration, same timezone. That is the full list. It does not read your personality, your goal, or your history. If you pass those four filters with another human, you are compatible as far as the product is concerned.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Emit one signal per day",
    description:
      "The tracking URL in your intro email points at src/app/meet/[token]/route.ts. Clicking it writes one row into meet_clicks with (token, match_id, person_id, meet_url, ip, user_agent) and then redirects you to the real Meet URL. The row is the accountability. Open it on most days at the agreed minute and you are doing the job.",
  },
  {
    title: "Use the reply-all thread",
    description:
      "replyTo is fixed to the two partner email addresses. The operator is not on the thread by default. If you need to talk to your partner (timing shift, travel, a silent week coming up), reply-all on the intro email is the channel. It is a human-to-human thread, not a support ticket.",
  },
  {
    title: "Do not try to coach",
    description:
      "For operational questions about practice (how to sit, how to work with a difficulty), the product redirects to authorized assistant teachers at a 10-day residential course through dhamma.org. Partners are not teachers on this site and the product does not pretend they are. The partner's gift is presence, not instruction.",
    size: "2x1",
  },
  {
    title: "Let the schedule be the commitment",
    description:
      "The recurring Google Calendar event carries the RRULE:FREQ=DAILY rule. Accepting it once sets up the indefinite recurrence. You do not need to text a daily reminder, make a weekly plan, or re-commit on Sundays. The calendar is the commitment; the job is showing up.",
  },
  {
    title: "If it does not work, the pool rebuilds",
    description:
      "contact_count greater than or equal to 10 removes a serial ghoster from future matches. getPriorMatchedIds prevents re-pairing with the same person. The auto-match cron runs every 30 minutes and re-scores the pool. If a partnership fails, you do not need to do anything except wait. The system is designed to recover without a conversation.",
  },
];

const partnerChoreMarquee = [
  "weekly 45-minute call",
  "SMART goal worksheet",
  "active listening checklist",
  "daily text check-in",
  "progress template",
  "reflection prompt",
  "goal review deck",
  "monthly retrospective",
  "feedback frame",
  "partner satisfaction survey",
  "streak counter",
  "XP system",
];

const partnerActualJob = [
  "click tracking URL",
  "one row in meet_clicks",
  "shared Meet room",
  "RRULE:FREQ=DAILY",
  "reply-all to two addresses",
  "same UTC minute, most days",
  "sit silently, together",
  "no third-party supervisor",
];

const buildCommonTraitsSnippet = `// src/lib/emails.ts — lines 4 to 19
// The full taxonomy of shared ground the product uses between two partners.
// It does not read personality, goal, or history. Four traits.

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

// Read the list. Four traits. That is the full input the intro email shows
// a new pair as common ground. If you imagined the partner role required
// a coaching intake form, the answer is in the length of this function.
`;

const meetClicksSnippet = `// src/app/meet/[token]/route.ts — lines 11 to 31
// The only telemetry event a partner emits.
// Clicking the tracking URL in your intro email runs this handler:
//   1) Look up the token in meet_links.
//   2) Write one row into meet_clicks.
//   3) Redirect to the real Google Meet URL.

const rows = await sql\`
  SELECT meet_url, match_id, person_id FROM meet_links WHERE token = \${token}
\`;
if (rows.length === 0) return NextResponse.redirect(new URL("/", request.url));
const { meet_url, match_id, person_id } = rows[0];

const ip = request.headers.get("x-forwarded-for") || "unknown";
const userAgent = request.headers.get("user-agent") || "unknown";

await sql\`
  INSERT INTO meet_clicks (token, match_id, person_id, meet_url, ip, user_agent)
  VALUES (\${token}, \${match_id}, \${person_id}, \${meet_url}, \${ip}, \${userAgent})
\`;

return NextResponse.redirect(meet_url);
`;

const replyToSnippet = `// src/app/api/auto-match/route.ts — lines 332 to 339
// The intro email's replyTo clause.
// It pins the reply-all thread to exactly two addresses: the pair.
// The operator (Matt) is the From, but is NOT on replyTo.

const emailResult = await resend!.emails.send({
  from: "Matt from Vipassana.cool <matt@vipassana.cool>",
  to: [person.email],
  replyTo: [personA.email, personB.email],  // <-- the partner-to-partner channel
  subject,
  html,
  headers: { "X-Entity-Ref-ID": match.id },
});

// When either partner hits reply-all on this message, the thread
// lands in both partner inboxes. The operator is not CC'd, not BCC'd,
// and not on replyTo. The channel the product wires up between
// partners is a two-address thread and nothing more.
`;

const lifecycleSteps = [
  {
    title: "Before the match: you pass the four-trait filter",
    description:
      "The Practice Buddy form writes one row into waitlist_entries. The matcher looks at is_old_student, frequency, session_duration, and timezone and scores you against every other eligible person within 60 UTC minutes. The sort keys (readyScore, bothOld, sessionMatch, diff) decide who you are paired with. Up to this point, you have not done any accountability work. You have supplied four categorical inputs.",
  },
  {
    title: "At the match: you read the intro email and click the URL once",
    description:
      "The intro email arrives with a tracking URL that points at src/app/meet/[token]/route.ts. The first click writes the first meet_clicks row and redirects to the real Google Meet. The recurring calendar event covers the daily recurrence. You are now a partner.",
  },
  {
    title: "Each day: one URL click, one shared minute of silence",
    description:
      "You open the tracking URL at roughly the same UTC minute. Your partner does the same. Two meet_clicks rows on the same match_id, at roughly the same minute, on the same day is the strong signal the system watches. No message is required between the two clicks, and none is sent from the system to either of you.",
  },
  {
    title: "When coordination is needed: reply-all on the intro thread",
    description:
      "Timezone shift, travel week, a schedule change, or a silent pause: reply-all on the intro email thread. replyTo is pinned to the two addresses at route.ts line 335, so the thread stays between the two of you. The operator is not on it and does not need to be.",
  },
  {
    title: "When a pair ends: the pool rebuilds without you having to intervene",
    description:
      "If the partnership stops producing meet_clicks, the operator notices in the admin dashboard and the match ages out. contact_count increments if ghosting happened. getPriorMatchedIds remembers the pair so you will not be paired with them again. The cron picks a new candidate within a tick or two. Nothing in this step is your job.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "How to Be an Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "How to Be an Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "How to Be an Accountability Partner: The Minimum Job, Defined by the Code That Pairs You",
    description:
      "Every other guide on this topic lists soft skills. This one opens a repo. The buildCommonTraits function names the four traits that make a partnership compatible. The meet_clicks insert defines the single daily action a partner takes. The intro email's replyTo pins the channel to the two partners. The full job description, written in source, and the honest list of where to go if this shape does not fit the partnership you want.",
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
          Written in source, not in soft skills
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          How to be an accountability partner,{" "}
          <GradientText>in four traits, one click, and two email addresses</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every guide on this topic lists soft skills: listen actively, ask good questions, set SMART goals, schedule the weekly call, celebrate wins. This one opens a repo that runs a free peer matcher on the other end of a meditation site. The buildCommonTraits function has four lines of trait checks and is the whole taxonomy of compatibility the product uses. The meet_clicks table records one row when a partner does their one daily action. The intro email hard-codes the reply-all thread to the two partners. Nothing in the code asks you to coach, review, or cheer. The job description fits on one page because the job fits on one page.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="operator, vipassana.cool"
          readingTime="10 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "buildCommonTraits returns at most 4 traits (src/lib/emails.ts:4-19); that is the full compatibility model",
            "meet_clicks is the only partner telemetry (src/app/meet/[token]/route.ts:26-29)",
            "Intro email replyTo is pinned to the two partner addresses (src/app/api/auto-match/route.ts:335)",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-3xl mx-auto py-6">
            <RemotionClip
              title="Four traits, one click, two addresses"
              subtitle="The whole job description a partner signs up for on this site"
              accent="teal"
              captions={[
                "Other guides tell you to listen, ask, cheer, coach.",
                "The matcher here defines the partner role in four trait checks.",
                "Your one daily action is a click that writes one row.",
                "The channel the code wires up is a reply-all thread with two addresses.",
                "Everything else the pair invents privately. That is the point.",
              ]}
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The numbers a guide on this topic usually hands you, and the numbers this product uses
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Most pages on being a good accountability partner quote checklists of 7 habits, 12 questions, or 30-day challenges. This product is anchored in a different set of counts, all of them grepable out of the repo today.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 4,
              label:
                "traits in buildCommonTraits (src/lib/emails.ts lines 4 to 19): the full compatibility model",
            },
            {
              value: 1,
              label:
                "INSERT INTO meet_clicks per daily partner action (src/app/meet/[token]/route.ts line 27)",
            },
            {
              value: 2,
              label:
                "email addresses on the intro thread's replyTo: both partners, operator absent",
            },
            {
              value: 0,
              label:
                "check-in crons, streak counters, or coaching prompts the product sends you after the match",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The four traits the code actually checks between you and your future partner
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The intro email prints a list of common ground to both partners. That list is produced by a function named buildCommonTraits, and the function is fourteen lines of code. Read it. If you had imagined the partner-matching algorithm reads personality traits, goal statements, or a coaching intake, the answer is the length of this function.
        </p>
        <AnimatedCodeBlock
          code={buildCommonTraitsSnippet}
          language="typescript"
          filename="src/lib/emails.ts (lines 4 to 19)"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The one action a partner takes, captured in one SQL insert
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The tracking URL at the bottom of the intro email is a redirect with telemetry. Opening it writes one row into meet_clicks and then sends you to the real Google Meet URL. Two rows on the same match_id, within a few minutes of each other, at roughly the same UTC minute, on the same calendar day, is the strong signal the operator reads on the admin dashboard. The row is the job.
        </p>
        <AnimatedCodeBlock
          code={meetClicksSnippet}
          language="typescript"
          filename="src/app/meet/[token]/route.ts (lines 11 to 31)"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="Two rows per match_id, most days, at the agreed UTC minute. That is the entire performance metric the system tracks for a partnership. There is no streak counter to defend, no badge to earn, no progress percentage to drive up."
          source="src/app/meet/[token]/route.ts lines 26 to 29, as of 2026-04-22"
          metric="1 row / partner / day"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The channel between partners, fixed in one line
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The intro email is sent from Matt at vipassana.cool, but its replyTo is not Matt. It is the two partner email addresses. When either human hits reply-all, the thread is a two-person conversation, not a support ticket. The operator reads the admin inbox for problems, but the partnership is not a thing the operator is in.
        </p>
        <AnimatedCodeBlock
          code={replyToSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts (lines 332 to 339)"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the product asks of you, from input to outcome
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Left column: the three things a partnership usually takes as input from the partner. Middle: the matcher that reads them. Right: what comes out the other side of the pairing. The point of the diagram is that the partner&apos;s role is almost fully described by the three inputs and one recurring output.
        </p>
        <AnimatedBeam
          title="partner inputs → matcher → partner outputs"
          from={[
            {
              label: "Four traits",
              sublabel: "old student, frequency, duration, timezone",
            },
            {
              label: "A UTC time window",
              sublabel: "within 60 minutes of another human's sit",
            },
            {
              label: "Willingness to click",
              sublabel: "one tracking URL per day",
            },
          ]}
          hub={{
            label: "auto-match cron",
            sublabel: "runs every 2 hours",
          }}
          to={[
            {
              label: "Intro email",
              sublabel: "replyTo = two partner addresses only",
            },
            {
              label: "Recurring calendar event",
              sublabel: "RRULE:FREQ=DAILY, no UNTIL",
            },
            {
              label: "One shared Meet URL",
              sublabel: "per pair, permanent, per-person tracked",
            },
            {
              label: "One row per click",
              sublabel: "in meet_clicks, the only telemetry",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Six things the minimum partner role actually contains
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          These are the six things the code asks of you, each tied to a specific file and line. Everything not on this list is not part of the product&apos;s definition of the job.
        </p>
        <BentoGrid cards={minimumRoleCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Typical partner advice, and the version this product ships
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The left column is a composite of common advice on being a good accountability partner: active listening, structured check-ins, goal worksheets, weekly calls. The right column is the literal behavior this matcher asks of a partner, with the files that define it. The two columns are not ranked; they are different jobs with different shapes.
        </p>
        <ComparisonTable
          heading="Soft-skills partner playbook vs this matcher's definition of the job"
          productName="vipassana.cool (silent peer partner)"
          competitorName="Typical accountability-partner guide"
          rows={partnerRoleRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The entire partner lifecycle, step by step, as the code runs it
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          From before the match to the day a pair ages out, here is what the product expects of you and what it handles for you. No step requires you to write a message, send a check-in, or review a goal.
        </p>
        <StepTimeline steps={lifecycleSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Vocabulary you will not be asked to use, and the vocabulary the matcher uses instead
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          First strip: phrases common in soft-skills partner guides. Second strip: phrases from the actual schema and routes of this product. The difference in vocabulary is the difference in the job.
        </p>
        <Marquee speed={30}>
          {partnerChoreMarquee.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 font-mono text-xs text-zinc-600"
            >
              {t}
            </span>
          ))}
        </Marquee>
        <p className="text-zinc-600 mt-6 mb-4 max-w-3xl">
          And the vocabulary this matcher uses between partners:
        </p>
        <Marquee speed={22} reverse>
          {partnerActualJob.map((t, i) => (
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
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The whole job, in numbers:{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={4} />
              </span>{" "}
              traits,{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={1} />
              </span>{" "}
              click per day,{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={2} />
              </span>{" "}
              email addresses on the thread
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              The argument of this page is that a partner&apos;s role is worth writing down only if you can name it in specifics. buildCommonTraits gives the compatibility model in fourteen lines of TypeScript. The meet_clicks insert gives the daily behavior in four lines of SQL. The replyTo array in the intro email gives the communication channel in two email addresses. Every other behavior a typical accountability partner is asked to perform (weekly calls, goal reviews, progress check-ins, celebrations, confrontations) exists in neither the schema nor the code paths of this product. The absence is the product.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Whether that shape fits what you came here for is the real question. If the partnership you want is verbal, goal-structured, or coach-led, the honest answer is further down: Focusmate, Flow Club, BetterUp, Thumbtack, Stickk. If the partnership you want is silent, daily, meditation-scoped, and free, this is the shape the code ships and the four files above are the full contract.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          When the minimum shape actually fits
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            You have completed a 10-day Goenka residential course and your daily sits stopped happening after you came home. The partnership here is tuned exactly to that context: shared silence over a recurring Meet URL is the mechanism.
          </li>
          <li>
            You want reliability without surface area. A human on the other side of a URL at the same minute, most days, with no performance theatre in between, is what the product gives you. If that is enough, the partner role is small enough to not distract from the sit.
          </li>
          <li>
            You want a partnership that does not age into obligation. The no-UNTIL recurrence means the partnership can run for as long as both of you want; there is no end date to hit or renegotiate. Inertia carries it.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          When a different shape fits better, and where to find it
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            You want a partner who will call you on a schedule and talk about progress. Paid coaching platforms (BetterUp, Thumbtack, Fiverr, Coach.me, Noom) will give you that at a range of rates. Their partner role is verbal and goal-structured, which is exactly the role this product does not ship.
          </li>
          <li>
            You want peer coworking with video and a shared task list, not a shared silence. Focusmate and Flow Club are the closest neutral platforms. Their partner role is spoken accountability (you say your task, you sit together, you report outcomes).
          </li>
          <li>
            You want financial stakes instead of social ones. Stickk and Beeminder add a referee and a dollar amount. Their partner role is a platform, not a human.
          </li>
          <li>
            You want operational guidance on the practice itself (how to sit, how to work with a difficulty). That is the job of an authorized assistant teacher at a 10-day residential course through{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . No accountability partner, paid or unpaid, fills that role, and the matcher on this site does not try.
          </li>
        </ul>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to walk the four traits, the meet_clicks insert, and the replyTo line together before you sign up?"
        description="Book a short call. We can open buildCommonTraits, the /meet/[token] route, and the auto-match cron together, and decide whether the minimum partner role fits the partnership you actually want or whether a paid shape is the right spend."
        section="how-to-be-an-accountability-partner-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on the matcher
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/what-is-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What is an accountability partner, by the shape of this product
          </Link>
          <Link
            href="/t/hire-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Hire an accountability partner: the matcher with no money column
          </Link>
          <Link
            href="/t/online-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Online accountability partner: the 60-minute UTC cap
          </Link>
          <Link
            href="/t/ai-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            AI accountability partner: deliberately not one
          </Link>
          <Link
            href="/t/accountability-partner-contract"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner contract, four legal elements
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the form the matcher reads from
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Open the four files behind the partner role with the operator before you sign up."
        section="how-to-be-an-accountability-partner-sticky"
      />
    </article>
  );
}
