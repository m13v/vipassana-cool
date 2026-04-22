import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  StepTimeline,
  AnimatedCodeBlock,
  ComparisonTable,
  MetricsRow,
  GlowCard,
  SequenceDiagram,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/accountability-partner-agreement";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Accountability Partner Agreement: Seven Clauses Enforced by Code, Not a PDF",
  description:
    "Every template you will find for this is a Google Doc with blanks. On vipassana.cool the agreement is 7 clauses, each one a specific file and line in the runtime: recurrence rule, confirmation window, link permanence, click heartbeat, unilateral exit, match-again cooldown, and the mental-health disclaimer.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability Partner Agreement: Seven Clauses Enforced by Code",
    description:
      "The agreement is not signed. It is enacted by one click on a confirmation email and enforced by seven files in the repo.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Accountability partner agreement: the 7 clauses each live on one line of code",
    description:
      "emails.ts:288, emails.ts:376, confirm-match/route.ts:57, unsubscribe/route.ts:59, google-meet.ts:75, auto-match/route.ts:241, disclaimer/page.tsx:60.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Do I sign an accountability partner agreement when I join Practice Buddy?",
    a: "Not in the paper sense. Nothing gets countersigned and no PDF is exchanged. The agreement is enacted the moment you click the 'Yes, introduce me' button in the confirmation email, which hits /api/confirm-match?token=<your token>&response=yes. That click is logged, flips person_a_confirmed or person_b_confirmed to true, and, once both sides have clicked, triggers the run that creates the Meet URL, writes the meet_links rows, sets the calendar recurrence, and sends the intro email. From that moment on, the terms listed on this page apply to you. The closest thing to a 'document you agreed to' is the confirmation email itself: the URLs in it are the offer, and the click is the acceptance.",
  },
  {
    q: "What are the seven clauses, in one sentence each?",
    a: "One, the cadence clause: the partnership repeats daily (recurrence: ['RRULE:FREQ=DAILY'] on src/lib/google-meet.ts line 75). Two, the permanence clause: the Meet URL does not rotate and is reused forever (src/lib/emails.ts line 288, the literal sentence 'This link is permanent, use it every day, at any time'). Three, the 3-day window clause: if both parties do not confirm within 3 days the match is voided and both go back on the waitlist (src/lib/emails.ts line 376, enforced by src/app/api/expire-matches/route.ts line 11). Four, the heartbeat clause: every click to /meet/<token> is logged to meet_clicks with IP and user-agent (src/app/meet/[token]/route.ts lines 26 to 29). Five, the unilateral-exit clause: either party can unsubscribe and all active matches for them end in one SQL UPDATE (src/app/api/unsubscribe/route.ts line 59). Six, the no-repeat clause: once paired with someone, the matcher will not pair you with them again (src/app/api/auto-match/route.ts, getPriorMatchedIds, lines 241 to 245). Seven, the pre-existing-condition clause: you represent that you have assessed your own fitness to sit intensive sessions, stated in src/app/disclaimer/page.tsx lines 60 to 73.",
  },
  {
    q: "What makes this different from a typical accountability partner agreement template?",
    a: "Typical templates are Google Docs with blanks: 'We, <Partner A> and <Partner B>, commit to meeting every <frequency> for <duration> to work toward <goal>. If one party misses <n> sessions, the consequence is <X>.' The document is the contract. Here, no document is the contract. The product already knows the cadence (daily), the duration (your session length chosen at signup), the channel (one specific meet.google.com URL), the partner (resolved by the matcher), and the consequence of inactivity (silence in meet_clicks, which is visible on the operator dashboard). Filling in a template would be redundant, because the template is already filled in by the runtime. What the templates give you, essentially, is a hand-rolled version of what this product automates. The downside of the hand-rolled version is that nothing enforces it. The downside of the code-enforced version is that it is narrow: only one kind of partnership (daily Vipassana sits) is supported.",
  },
  {
    q: "Is there a written 'terms' I am accepting when I use the matcher?",
    a: "Yes, and it is the slimmest plausible version of one. /terms covers the service-level agreement (free matching, no guarantees, participation is voluntary, we are not responsible for what happens between matched users). /privacy covers data handling (email stored, anonymous PostHog analytics, unsubscribe anytime). /disclaimer covers the mental-health caveat (if you have a history of certain conditions, talk to a professional before an intensive course). These three pages are the legal layer, and the seven clauses on this page are the operational layer sitting on top of them. The two layers do not conflict. The operational layer is what determines day-to-day behavior of the product; the legal layer is the background contract with the service itself.",
  },
  {
    q: "Can the agreement be modified once it is active?",
    a: "Not by the two partners, not in the way a legal contract can be amended. The product does not expose a 'change cadence' button, a 'move the URL' button, or a 'renegotiate the window' button. If something has to change, either party uses the unsubscribe link to end the partnership and rejoins the waitlist with new preferences. The operator, Matt, can edit the calendar event manually (that is how the calendar_event_id column on the match row exists). In practice this only happens in recovery scenarios (a broken URL, a guest-permission issue). The unchangeability of the agreement, mid-flight, is intentional: the whole point is to move the commitment out of reach of a tired future self who wants to renegotiate at 5:30 in the morning.",
  },
  {
    q: "What happens if one partner just stops showing up?",
    a: "Nothing immediate. There is no automatic nag, no missed-session penalty, no public leaderboard. The only signal is meet_clicks: if only one token shows clicks for N days, the operator dashboard flags the pair. The default resolution is to reach out over email (the intro email thread already includes both addresses in replyTo). If the ghosting continues, the remaining partner can unsubscribe and rejoin, and the matcher will pair them with someone new (skipping the ghost, because getPriorMatchedIds remembers the prior match). The system's theory is that an accountability partner whose partner has quit is not being held accountable, and the best thing to do is get them a live partner as fast as possible, not to manufacture guilt.",
  },
  {
    q: "Is there a minimum commitment period?",
    a: "No. There is no 30-day minimum, no 'trial' that auto-converts to a paid plan, no clawback if you leave early. The only time-boxed clause is the 3-day confirmation window: if both parties do not click yes within 72 hours of the confirmation email, the match is voided (src/app/api/expire-matches/route.ts:11 passes 3 to expireStaleMatches). Once the partnership is active, you can unsubscribe at any time with a single click on the footer link of any email, and the SQL UPDATE at src/app/api/unsubscribe/route.ts:59 ends all your active matches in one go. That choice, 'no minimum,' follows from the dana-tradition constraint: the service is free, so there is no floor to protect.",
  },
  {
    q: "Why is the agreement enforced by code instead of by signatures?",
    a: "Because the partnership is daily, and signed documents are a human ritual with a once-at-the-start cadence. A signed agreement works well for things that happen infrequently (a lease, a job offer, a coaching contract). It does not work well for things that happen 300 times a year. For a daily practice the enforcement that matters is, 'the thing that should fire today, fired.' A daily calendar event firing is an enforcement. A meet_clicks row being written is an enforcement. A cron job expiring a confirming match after 3 days is an enforcement. None of those are signatures, but all of them make 'yes this is happening' or 'no this is no longer happening' legible to the runtime without human intervention. The result is an agreement whose day-to-day health is measurable, not declared.",
  },
  {
    q: "Can I see the actual text of each clause?",
    a: "Yes, the whole repo is public. The cadence clause is one line: src/lib/google-meet.ts line 75, recurrence: ['RRULE:FREQ=DAILY']. The permanence clause is one sentence in the intro email template: src/lib/emails.ts line 288, 'This link is permanent, use it every day, at any time.' The 3-day window clause is the italicized sentence on the confirmation email: src/lib/emails.ts line 376, 'This match expires in 3 days. If neither of you responds, you'll both be placed back on the waitlist for a new match.' The heartbeat clause is the INSERT at src/app/meet/[token]/route.ts lines 26 to 29. The exit clause is the UPDATE at src/app/api/unsubscribe/route.ts line 59. The no-repeat clause is the filter at src/app/api/auto-match/route.ts lines 241 to 245. The pre-existing-condition clause is the paragraph on src/app/disclaimer/page.tsx lines 60 to 73. Nothing is hidden.",
  },
  {
    q: "Where does this leave anything about meditation technique?",
    a: "Out of scope, by design. The agreement described on this page is entirely about the partnership infrastructure: who meets whom, when, over which link, for how long, and how exit works. It does not cover anything about how to practice, how to sit, or how to handle what arises in a session. For those questions, the only honest redirect is to dhamma.org and to an authorized assistant teacher at a 10-day residential course. The runtime here has no opinion about your sits and no way to coach you through one. It has an opinion about whether the Meet URL is getting clicked.",
  },
];

const clauseBento: BentoCard[] = [
  {
    title: "Clause 1. Cadence",
    description:
      "The partnership repeats daily. Set on src/lib/google-meet.ts line 75 as recurrence: ['RRULE:FREQ=DAILY']. Weekly or monthly is not an option the product offers.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Clause 2. Permanence",
    description:
      "The Meet URL does not rotate. src/lib/emails.ts line 288 types the exact sentence partners read: 'This link is permanent, use it every day, at any time.'",
  },
  {
    title: "Clause 3. 3-day confirmation window",
    description:
      "Both sides must click yes within 72 hours, or the match is voided. src/lib/emails.ts line 376 states it; expire-matches/route.ts:11 passes 3 to expireStaleMatches to enforce it on a cron.",
  },
  {
    title: "Clause 4. Click heartbeat",
    description:
      "Every open of /meet/<token> writes one row to meet_clicks with token, match_id, person_id, URL, IP, and user agent. Two rows a day per pair is the ambient proof the partnership is still alive.",
    size: "2x1",
  },
  {
    title: "Clause 5. Unilateral exit",
    description:
      "Either partner can end the partnership at any time. The footer of any email contains an unsubscribe URL; one click hits /api/unsubscribe, which does UPDATE matches SET status='ended' on every active match for that person_id in one pass.",
  },
  {
    title: "Clause 6. No repeat pairing",
    description:
      "If a pairing ends, the matcher will not re-pair the same two people. getPriorMatchedIds in auto-match/route.ts filters the candidate pool to exclude anyone you were matched with before. A new partner is preferred to a rematch.",
  },
  {
    title: "Clause 7. Pre-existing conditions",
    description:
      "You represent that you have self-assessed your fitness for intensive meditation. The disclaimer page (src/app/disclaimer/page.tsx:60 to 73) spells out the mental-health caveat and points at professional advice for anyone with relevant history.",
  },
];

const sevenClauseMarquee = [
  "recurrence: ['RRULE:FREQ=DAILY']",
  "'This link is permanent'",
  "'This match expires in 3 days'",
  "expireStaleMatches(3)",
  "INSERT INTO meet_clicks",
  "UPDATE matches SET status = 'ended'",
  "getPriorMatchedIds(personA.id)",
  "person_a_confirmed && person_b_confirmed",
  "replyTo: [personA.email, personB.email]",
  "status IN ('confirming','pending','replied','scheduling','active')",
];

const lifecycleSteps = [
  {
    title: "Offer (the confirmation email)",
    description:
      "The matcher creates a 'confirming' row in the matches table and sends a confirmation email to each side with a token and two buttons. This is the offer: the hyperlinks are the terms, and the click is the acceptance. At this moment no Meet URL yet exists.",
  },
  {
    title: "Acceptance (both yes clicks)",
    description:
      "Each click to /api/confirm-match flips one of person_a_confirmed / person_b_confirmed to true (src/app/api/confirm-match/route.ts:57). When the second click lands, confirm-match runs createMeetEvent, inserts two rows into meet_links, and emails the intro. The agreement becomes operative at the instant of the second click.",
  },
  {
    title: "Operation (daily heartbeat)",
    description:
      "From acceptance onward, the only ambient signal is meet_clicks. Two rows a day, roughly at the same time, at the same token pair, is the heartbeat. The operator dashboard reads this to tell healthy pairs from quiet ones without asking either partner anything.",
  },
  {
    title: "Void (3-day timeout)",
    description:
      "If the acceptance never completes (one party clicks no, or neither clicks), expire-matches/route.ts runs on its cron, calls expireStaleMatches(3), deletes the confirming rows older than 72 hours, and emails the operator a summary. Both people are returned to the waitlist. No Meet URL was ever created.",
  },
  {
    title: "Exit (unsubscribe click)",
    description:
      "Either partner clicks the unsubscribe link in any email. src/app/api/unsubscribe/route.ts reads every matches row where the person is on either side, runs UPDATE matches SET status='ended' on each, sets the partner's status back to 'ready', writes an activity log row, and emails the partner a short 'no longer available' note. One click, all active partnerships for that person, ended transactionally.",
  },
  {
    title: "Successor (re-match, skipping history)",
    description:
      "Whoever is still on the waitlist after an exit gets re-matched on the next run of the matcher cron. getPriorMatchedIds excludes the former partner from the candidate pool. The new match is with a fresh person, not a do-over.",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Form factor",
    competitor: "A Google Doc template or printable PDF with blanks.",
    ours: "A set of code paths, email strings, and SQL statements across 7 files.",
  },
  {
    feature: "Who fills in the blanks",
    competitor: "The two partners, by hand, at the start.",
    ours: "The product, automatically, at signup and at matching time.",
  },
  {
    feature: "How cadence is set",
    competitor: "Written into a sentence: 'we agree to meet every Tuesday at 7am'.",
    ours: "recurrence: ['RRULE:FREQ=DAILY'] in google-meet.ts line 75. The string is the schedule.",
  },
  {
    feature: "How a missed session is detected",
    competitor: "Manually, by the other partner noticing.",
    ours: "Silence in the meet_clicks table, visible to the operator without anyone having to report anything.",
  },
  {
    feature: "How exit works",
    competitor: "A conversation. Sometimes an awkward one.",
    ours: "One click on the unsubscribe link. One SQL UPDATE. All active matches end in the same transaction.",
  },
  {
    feature: "Enforcement mechanism",
    competitor: "Mutual goodwill.",
    ours: "A daily-firing calendar event, a cron job, and a redirect-with-logging route. None require either human to remember anything.",
  },
  {
    feature: "Cost",
    competitor: "Varies. Coaching variants can run $100 to $500 per month.",
    ours: "Free. The matching is run in the dana tradition of the lineage it serves.",
  },
  {
    feature: "Scope",
    competitor: "Anything, because the document is blank until you write in it.",
    ours: "Exactly one thing: a daily Vipassana practice partnership over Google Meet.",
  },
];

const recurrenceSnippet = `// src/lib/google-meet.ts — lines 70 to 85 (the cadence clause)
const event = {
  summary,
  description: "Your daily meditation practice buddy session via vipassana.cool",
  start: { dateTime: start.toISOString(), timeZone: "UTC" },
  end: { dateTime: end.toISOString(), timeZone: "UTC" },
  recurrence: ["RRULE:FREQ=DAILY"],   // <-- clause 1: cadence
  conferenceData: {
    createRequest: {
      requestId: slug,
      conferenceSolutionKey: { type: "hangoutsMeet" },
    },
  },
  guestsCanInviteOthers: true,
  attendees: attendeeEmails.map((email) => ({ email })),
};`;

const expireSnippet = `// src/app/api/expire-matches/route.ts — lines 5 to 31 (the 3-day window clause)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== \`Bearer \${process.env.CRON_SECRET}\`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { expiredCount, expiredMatches } = await expireStaleMatches(3);
  // ^ the number 3 is the entire confirmation window in days.

  // ... emails the operator a summary if expiredCount > 0 ...
  return NextResponse.json({ success: true, expiredCount, expiredMatches });
}`;

const exitSnippet = `// src/app/api/unsubscribe/route.ts — lines 35 to 72 (the exit clause)
const activeMatches = await sql\`
  SELECT id, person_a_id, person_b_id, status FROM matches
  WHERE (person_a_id = \${person.id} OR person_b_id = \${person.id})
    AND status IN ('confirming','pending','replied','scheduling','active')
\`;

for (const row of activeMatches) {
  await sql\`UPDATE matches SET status = 'ended' WHERE id = \${row.id}\`;
  const partnerId = row.person_a_id === person.id
    ? row.person_b_id
    : row.person_a_id;
  await updateEntryStatus(partnerId, "ready", "system", row.id, "partner unsubscribed");
}

await sql\`
  UPDATE waitlist_entries SET unsubscribed = true, status = 'unsubscribed'
  WHERE unsubscribe_token = \${token}
\`;`;

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Accountability Partner Agreement" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Accountability Partner Agreement", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Accountability Partner Agreement: Seven Clauses Enforced by Code, Not a PDF",
    description:
      "The agreement is enacted by one click on a confirmation email. Its seven clauses are enforced by seven specific files in the repo, not by signatures.",
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
          The agreement, clause by clause
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Accountability partner agreement:{" "}
          <GradientText>seven clauses enforced by code, not a PDF</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every template you will find for this topic is a Google Doc with
          blanks. On vipassana.cool nothing gets countersigned. The
          agreement is enacted by one click on a confirmation email, and
          its seven clauses are enforced by seven specific files in this
          repo, each one a single line or a single SQL statement. No
          signatures. No notarization. Just runtime.
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
            "Every clause tied to a file path and line number in a public repo",
            "Free, in the dana tradition — no minimum commitment, no clawback",
            "No operational practice instruction; technique goes through dhamma.org",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The agreement is seven lines of code"
              subtitle="One click accepts. Seven files enforce. No PDF."
              captions={[
                "Clause 1, cadence: recurrence: ['RRULE:FREQ=DAILY'].",
                "Clause 2, permanence: 'This link is permanent, use it every day.'",
                "Clause 3, window: 3 days to confirm, or the match is voided.",
                "Clause 4, heartbeat: every /meet/<token> click writes a row.",
                "Clause 5 through 7: exit, no-repeat, pre-existing conditions.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The agreement in four numbers
        </h2>
        <p className="text-zinc-600 mb-6">
          A PDF template has blanks. A code-enforced agreement has
          constants. Here are the four that matter most.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 7,
              label: "clauses, each tied to one file and one line",
            },
            {
              value: 3,
              suffix: " days",
              label: "to confirm, or the match is voided automatically",
            },
            {
              value: 1,
              label: "SQL UPDATE to end every active partnership at once",
            },
            {
              value: 0,
              label: "signatures, notaries, or countersigns required",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What other guides on this topic actually give you
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          I read the pages that currently show up at the top for this
          phrase. They are, almost without exception, the same artifact:
          a fillable agreement template. A title block, two name fields,
          a shared goal, a meeting cadence, a consequence for missing a
          check-in, a dispute clause, and a line to sign. The best of
          them includes 10 well-worded clauses and a printable layout.
          The worst is a page of generic bullet points pretending to be
          a contract.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          Templates like that work for two people trying to invent a
          partnership from scratch. They do not work for a product where
          the partnership shape is already decided and the runtime
          already knows how to enforce it. What a template solves by
          asking partners to fill in blanks, this product solves by
          already having every blank filled in: daily cadence, one
          permanent Meet URL, a 3-day confirmation window, a one-click
          exit. The agreement here is not a document you agree to. It
          is the behavior the product will produce on your behalf, now
          that you have said yes.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          One click, seven clauses fire
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The confirmation-email click is a branching event. The left
          side of this diagram is the offer. The hub is the yes click.
          The right side is the set of clauses that come into force as
          a result, each one attached to the file that enforces it.
        </p>
        <AnimatedBeam
          title="confirm-match yes click, fanning out to the seven clauses"
          from={[
            {
              label: "Confirmation email",
              sublabel: "the offer, token + yes/no URLs",
            },
            {
              label: "Yes click by partner A",
            },
            {
              label: "Yes click by partner B",
            },
          ]}
          hub={{
            label: "/api/confirm-match",
            sublabel: "both sides confirmed",
          }}
          to={[
            {
              label: "Cadence: RRULE:FREQ=DAILY",
              sublabel: "google-meet.ts:75",
            },
            {
              label: "Permanence of URL",
              sublabel: "emails.ts:288",
            },
            {
              label: "3-day confirm window",
              sublabel: "emails.ts:376 / expire-matches:11",
            },
            {
              label: "Click heartbeat",
              sublabel: "meet/[token]/route.ts:26",
            },
            {
              label: "Unilateral exit",
              sublabel: "unsubscribe/route.ts:59",
            },
            {
              label: "No repeat pairing",
              sublabel: "auto-match/route.ts:241",
            },
            {
              label: "Pre-existing conditions",
              sublabel: "disclaimer/page.tsx:60",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The seven clauses, one by one
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each cell below is one clause of the agreement. The card text
          is the clause in plain English. The source reference is where
          the clause lives in the runtime, and what it does.
        </p>
        <BentoGrid cards={clauseBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Clause 1, in code: the cadence
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The line that turns a one-off Meet into a daily partnership is{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]">
            recurrence: [&quot;RRULE:FREQ=DAILY&quot;]
          </code>
          . Remove that line and the product is a one-off introductions
          service. Change it to weekly and the product becomes a
          call-club. The keyword reason the product says the word
          <em> daily </em> so often is that this one line says it first.
        </p>
        <AnimatedCodeBlock
          code={recurrenceSnippet}
          language="typescript"
          filename="src/lib/google-meet.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Clause 3, in code: the 3-day confirmation window
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The only time-boxed provision in the whole agreement. Both
          partners have 72 hours to accept. If they do not, the match is
          voided and both names go back on the waitlist. The cron below
          is the enforcement.
        </p>
        <AnimatedCodeBlock
          code={expireSnippet}
          language="typescript"
          filename="src/app/api/expire-matches/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Clause 5, in code: the unilateral exit
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          One click on the unsubscribe footer link. One database pass.
          Every match in any of the five active-ish statuses ends in the
          same transaction. The partner is notified and dropped back on
          the waitlist as <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">ready</code>.
          There is nothing to renegotiate and nobody to confront.
        </p>
        <AnimatedCodeBlock
          code={exitSnippet}
          language="typescript"
          filename="src/app/api/unsubscribe/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Acceptance, diagrammed
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          What the click actually does, message by message, between the
          browser, the matcher, Postgres, Google Calendar, and Resend.
          No step is invisible. Every step is a single function call.
        </p>
        <SequenceDiagram
          title="yes click, fully expanded"
          actors={["Partner", "confirm-match", "Postgres", "Google Calendar", "Resend"]}
          messages={[
            { from: 0, to: 1, label: "GET ?token=X&response=yes", type: "request" },
            { from: 1, to: 2, label: "UPDATE person_a_confirmed=true", type: "request" },
            { from: 2, to: 1, label: "both_confirmed=true", type: "response" },
            { from: 1, to: 3, label: "POST events, recurrence=DAILY", type: "request" },
            { from: 3, to: 1, label: "meet_url, event_id", type: "response" },
            { from: 1, to: 2, label: "INSERT 2 rows meet_links", type: "request" },
            { from: 1, to: 4, label: "send intro email to both", type: "event" },
            { from: 1, to: 0, label: "redirect /match-confirmed", type: "response" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Lifecycle of the agreement, end to end
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Offer, acceptance, operation, void, exit, successor. Every
          agreement has these phases. In a signed contract they are
          names on a page. Here they are states the{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            matches.status
          </code>{" "}
          column walks through.
        </p>
        <StepTimeline steps={lifecycleSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The entire exit provision, in one SQL statement
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Everyone who has ever tried to dissolve a partnership
              agreement by email knows the awkwardness of it. Two
              drafts, three apologies, one or two days of limbo. In
              this product the entire exit clause is{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={1} />
              </span>{" "}
              click, executed against{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={5} />
              </span>{" "}
              possible match states, resolved in{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={1} />
              </span>{" "}
              SQL transaction. No conversation is required. The other
              person is told, courteously, that their partner is no
              longer available and that a replacement will be along. If
              the partnership ended for a reason the operator should
              know, a short email to{" "}
              <a
                href="mailto:matt@vipassana.cool"
                className="text-teal-600 underline hover:text-teal-700"
              >
                matt@vipassana.cool
              </a>{" "}
              is welcome; it is not required.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="Template agreement vs. code-enforced agreement"
          productName="vipassana.cool"
          competitorName="PDF / Google Doc template"
          rows={comparisonRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="The link is permanent. Use it every day, at any time."
          source="literal string on src/lib/emails.ts line 288, rendered into every intro email"
          metric="1"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Tokens of the agreement, in the language the runtime speaks
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Templates on this topic typically use words like{" "}
          <em>commitment</em>, <em>accountability</em>, <em>consequence</em>.
          The runtime on this site uses these tokens instead. Every one
          of them is something the code can check.
        </p>
        <Marquee speed={45}>
          {sevenClauseMarquee.map((t, i) => (
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
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the agreement is deliberately this thin
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          A thicker agreement, with declared goals and agreed
          consequences and weekly written check-ins, would be a richer
          contract. It would also be the wrong contract. The
          tradition this product orbits is Goenka-style Vipassana, and
          the tradition is taught on a donation basis, by authorized
          assistant teachers, at 10-day residential courses run through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . The teaching of technique is not something a web product
          can legitimately do. What a web product can legitimately do
          is help two meditators reliably open the same Meet room at
          the same time every day. That, and exactly that, is the
          scope of this agreement. If the scope were wider, the product
          would be impersonating a teacher it is not authorized to
          impersonate.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          For anything about how to sit, how to handle a difficult
          session, or how to work with whatever arises on the cushion,
          the correct redirect is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and a conversation with an authorized assistant teacher in
          person, at a course. The seven clauses here do not pretend
          to cover any of that. They cover the infrastructure. The
          practice itself is a separate, older, and much larger
          agreement with a lineage.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to walk through what the seven clauses look like for your schedule?"
        description="Book a short call. We'll go through the signup, the matcher, and what the agreement fires when you click yes, end to end."
        section="accountability-partner-agreement-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on the same topic
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/define-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Define accountability partner, as a recurring Meet URL
          </Link>
          <Link
            href="/t/what-is-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What is an accountability partner
          </Link>
          <Link
            href="/t/accountability-partner-means"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            What &quot;accountability partner&quot; means here
          </Link>
          <Link
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner app, inbox-as-state-machine
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the product this page describes
          </Link>
          <Link
            href="/terms"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Terms of service (the legal layer under the operational one)
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Walk through the seven clauses with the operator."
        section="accountability-partner-agreement-sticky"
      />
    </article>
  );
}
