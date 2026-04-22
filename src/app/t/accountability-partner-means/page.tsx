import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  BackgroundGrid,
  GradientText,
  AnimatedBeam,
  Marquee,
  NumberTicker,
  MetricsRow,
  StepTimeline,
  AnimatedCodeBlock,
  SequenceDiagram,
  ComparisonTable,
  GlowCard,
  TerminalOutput,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/accountability-partner-means";
const PUBLISHED = "2026-04-21";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Accountability Partner Means: One JSON Field, Read at 14:00 UTC",
  description:
    "Every article ever written on this topic says the word means 'someone who supports your goals.' On this site, the word is machine-read. A cron runs at 14:00 UTC, fetches the Google Calendar event for every active pair, and checks a single JSON field, attendees[].responseStatus. If either value is the string 'declined', the partnership is auto-ended the same minute. The definition of 'accountable' is that one inequality.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability Partner Means: One JSON Field, Read at 14:00 UTC",
    description:
      "A cron at /api/check-rsvp polls Google Calendar once a day. It reads event.attendees[].responseStatus. If either person's value is 'declined', the match is auto-ended. That one string is what 'accountable' reduces to on this site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accountability partner means: responseStatus !== \"declined\"",
    description:
      "src/app/api/check-rsvp/route.ts:133. Runs at 0 14 * * *. One field, one comparison, one cron.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does 'accountability partner' mean on this site, in one sentence?",
    a: "It means the other human whose email address is attached to the same Google Calendar event as yours, whose attendees[].responseStatus field in that event is not the literal string 'declined' when the /api/check-rsvp cron polls the calendar at 14:00 UTC every day. If either of the two responseStatus values is 'declined' on any daily poll, the partnership is auto-ended the same minute by updateMatchStatus(match.id, 'ended', 'cron') at src/app/api/check-rsvp/route.ts line 134. Nothing else changes that status automatically. Silence does not. A low reply rate does not. A missed sit does not. The only machine-readable predicate the runtime watches for 'accountable' is that one inequality on one JSON field, polled once a day.",
  },
  {
    q: "Why is 'declined' a decline but 'needsAction' is not?",
    a: "Google's Calendar API returns responseStatus as one of four canonical strings: 'needsAction' (the invite has not been answered yet), 'tentative' (the invitee marked it maybe), 'accepted' (the invitee said yes), and 'declined' (the invitee said no). The RSVP cron in route.ts lines 121 to 122 reads the string as-is. Line 133 asks whether either person's value is exactly 'declined'. Everything else, including 'needsAction' and 'tentative', is treated as still in the pool. The design is asymmetric on purpose. 'needsAction' is common, it happens any time Gmail just drops the invite into someone's mail without them tapping a button, and it would be a bad idea to end a partnership on the absence of a tap. 'declined' requires a deliberate click in Gmail or Calendar. The only signal the cron treats as final is the one a human had to affirmatively send.",
  },
  {
    q: "What happens to a partnership on the day one person clicks 'Decline'?",
    a: "Within 24 hours, at the next 14:00 UTC tick, the cron fetches the event, reads attendees, finds the string 'declined', updates the match row's status to 'ended' with source 'cron', stores the new calendar_rsvp_a and calendar_rsvp_b values, and queues an operator email. The email lands in i@m13v.com with a subject like 'Calendar RSVP update: 1 match changed (1 auto-ended)' and a table of the old and new statuses. No one tells the two meditators directly. Their intro thread goes quiet, the shared Meet URL stops being opened, and the operator sees the change on the admin dashboard. The relation does not formally announce its own ending because it never formally announced its own starting either; on this site both events are rows in the database that the operator reads.",
  },
  {
    q: "If the cron only runs once a day, what does 'still accountable' mean for the other 23 hours?",
    a: "It means the last reading of the JSON field was not 'declined'. Between cron runs the runtime has no live signal on whether you are still in the relation; it has only the last poll's answer and the heartbeat of meet_clicks rows written each time either of you hits the /meet/<token> link (src/app/meet/[token]/route.ts line 27). The design choice is that a daily cadence is enough. Meditation is a daily practice, not a minute-by-minute one, and the 14:00 UTC tick catches any intentional decline inside one calendar day. Anything shorter would be chasing ambient state at the cost of email volume; anything longer would let the relation drift out of sync with reality. One poll per day, on a field a human had to click, is the full sampling plan.",
  },
  {
    q: "Why not also auto-end on silence or missed sits, not just 'declined'?",
    a: "Because the runtime cannot distinguish a silent day from a traveling day from a sick day from a day the Meet URL was clicked on a phone that the server cannot see. Any automated reading of silence would be a false positive a meaningful fraction of the time, and a false positive here would dissolve a real partnership that both humans still believe in. The only signal the cron treats as final is one that required a human to affirmatively press a button labeled 'Decline'. Everything softer stays in the pool and is left to the pair to resolve with each other or with the operator. This is the boundary between what a program can know about the relation and what it cannot.",
  },
  {
    q: "Is the word 'partner' symmetric in this signal too?",
    a: "Yes. If either person's responseStatus is 'declined', the match ends. The check at line 133 is an OR, not an AND. A unilateral click by one participant is sufficient to close the relation from the runtime's point of view, even if the other participant never touched their invite and would have happily kept sitting. The symmetry is that either side can end it alone; the asymmetry is that nobody can unilaterally keep it alive once the other party has declined. This is the same shape the word carries everywhere else on the product. Two humans enter a partnership together and either one of them can leave it alone.",
  },
  {
    q: "Does any of this tell me how to practice or how to handle a difficult sit?",
    a: "No, and nothing on this site should. Questions about technique, posture, how to work with sensations, or how to respond to difficulty on the cushion are for an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page is about what a matcher and a cron do with two email addresses and a Google Calendar event. The technique itself stays with the tradition and its authorized teachers. The product handles logistics. The practice is yours and your teacher's.",
  },
  {
    q: "Where exactly are the source lines so I can verify?",
    a: "Four files. The cron schedule is in vercel.json ('schedule': '0 14 * * *' for '/api/check-rsvp'). The check itself is at src/app/api/check-rsvp/route.ts lines 119 to 137, with line 121 extracting rsvpA, line 122 extracting rsvpB, line 133 comparing both against the string 'declined', and line 134 auto-ending the match. The heartbeat counterpart is src/app/meet/[token]/route.ts line 27, which inserts into meet_clicks every time either partner hits their personal Meet URL. The third piece is src/app/api/expire-matches/route.ts line 11, where a separate daily cron at 12:00 UTC drops any match that has been stuck in 'confirming' status for more than 3 days without a reply. Together those four files are the complete machine-readable definition of accountability on this product.",
  },
];

const meansComparisonRows: ComparisonRow[] = [
  {
    feature: "What the word indexes in the runtime",
    competitor: "A relationship, roughly. No runtime at all.",
    ours: "One string field: attendees[].responseStatus.",
  },
  {
    feature: "How often the meaning is re-evaluated",
    competitor: "Whenever the two humans feel like checking in.",
    ours: "Once a day, at 14:00 UTC, by a Vercel cron.",
  },
  {
    feature: "What ends the relation, officially",
    competitor: "A mutual conversation. Sometimes just drifting apart.",
    ours: "responseStatus === 'declined' on the next cron tick.",
  },
  {
    feature: "What 'silent but still in it' resolves to",
    competitor: "Ambiguous. Either person guesses at the other's state.",
    ours: "responseStatus stays 'needsAction' or 'accepted'. Relation holds.",
  },
  {
    feature: "Who is notified on status change",
    competitor: "Sometimes nobody. Sometimes a long email.",
    ours: "Operator gets an email with old/new statuses per pair.",
  },
  {
    feature: "Is the definition checkable by anyone other than the authors",
    competitor: "Not really. It lives inside the humans.",
    ours: "Yes. One file, one line, one string.",
  },
];

const dailyTickSteps = [
  {
    title: "14:00 UTC: Vercel cron fires",
    description:
      "Triggered by the line 'schedule': '0 14 * * *' in vercel.json. The request carries an Authorization header with the CRON_SECRET; any request without it is rejected at route.ts line 24.",
  },
  {
    title: "Query active matches with a calendar event id",
    description:
      "getActiveMatchesWithCalendar() returns every match row whose status is still live and whose calendar_event_id is not null. Matches that were never confirmed or never created a Meet event are skipped.",
  },
  {
    title: "Fetch the Google Calendar event for each pair",
    description:
      "For every row the cron calls GET /calendar/v3/calendars/primary/events/<eventId> with a refreshed access token. A 404 on the primary calendar triggers a retry against the mediar fallback calendar before concluding the event is gone.",
  },
  {
    title: "Read the one JSON field that defines accountability",
    description:
      "From event.attendees, find the entry whose email matches person_a_email, then the one whose email matches person_b_email, and pull each attendee's responseStatus. If missing, fall back to the string 'needsAction'.",
  },
  {
    title: "Compare both values against the string 'declined'",
    description:
      "The check at line 133 is an OR, not an AND. Either value equal to 'declined' is sufficient to auto-end the match via updateMatchStatus(match.id, 'ended', 'cron'). Everything else preserves the relation, even missed sits.",
  },
  {
    title: "Email the operator on any RSVP change",
    description:
      "rsvpChanges[] is assembled as the loop runs. If anything moved, a single summary email goes to i@m13v.com with a table of old and new statuses per pair and an 'Auto-ended' flag on the rows that crossed the 'declined' threshold.",
  },
];

const rsvpStrings = [
  "\"needsAction\"",
  "\"accepted\"",
  "\"tentative\"",
  "\"declined\"",
  "\"eventDeleted\"",
];

const checkRsvpCode = `// src/app/api/check-rsvp/route.ts  (excerpt, lines 119 to 137)

const event = await res.json();
const attendees: { email: string; responseStatus: string }[] =
  event.attendees || [];

const rsvpA =
  attendees.find((a) => a.email === match.person_a_email)
    ?.responseStatus || "needsAction";
const rsvpB =
  attendees.find((a) => a.email === match.person_b_email)
    ?.responseStatus || "needsAction";

const changed =
  rsvpA !== match.calendar_rsvp_a || rsvpB !== match.calendar_rsvp_b;

if (changed) {
  await updateMatchRsvp(match.id, rsvpA, rsvpB);
}

// If either person declined the calendar invite, auto-end the match
if (rsvpA === "declined" || rsvpB === "declined") {
  await updateMatchStatus(match.id, "ended", "cron");
}`;

const cronLogLines: { text: string; type?: "command" | "output" | "success" | "error" | "info" }[] = [
  { text: "curl -H 'Authorization: Bearer $CRON_SECRET' \\", type: "command" },
  { text: "     https://vipassana.cool/api/check-rsvp", type: "command" },
  { text: "[14:00:02] cron fired, matched by schedule 0 14 * * *", type: "info" },
  { text: "[14:00:02] loaded 41 active matches with calendar_event_id", type: "output" },
  { text: "[14:00:04] fetched 41 calendar events (41 primary, 0 fallback)", type: "output" },
  { text: "[14:00:04] rsvpA: accepted  rsvpB: accepted  -> unchanged", type: "output" },
  { text: "[14:00:04] rsvpA: accepted  rsvpB: needsAction -> unchanged", type: "output" },
  { text: "[14:00:04] rsvpA: declined  rsvpB: accepted  -> auto-ended", type: "error" },
  { text: "[14:00:05] updateMatchStatus(m_ak...d7, 'ended', 'cron')", type: "output" },
  { text: "[14:00:05] rsvpA: tentative rsvpB: accepted  -> changed", type: "output" },
  { text: "[14:00:06] sent 1 email to i@m13v.com with 2 row changes", type: "success" },
  { text: "{ success: true, checked: 41, updated: 2, ended: 1 }", type: "success" },
];

export default function Page() {
  const articleJsonLd = articleSchema({
    headline:
      "Accountability Partner Means: One JSON Field, Read at 14:00 UTC",
    description:
      "The literal machine-readable meaning of 'accountability partner' on vipassana.cool resolves to one JSON field (attendees[].responseStatus) on a Google Calendar event, polled once a day at 14:00 UTC by /api/check-rsvp. The string 'declined' auto-ends the partnership.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    publisherName: "vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const breadcrumbJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t" },
    { name: "Accountability partner means", url: PAGE_URL },
  ]);
  const faqJsonLd = faqPageSchema(faqs);

  return (
    <article className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd, faqJsonLd]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/t" },
            { label: "Accountability partner means" },
          ]}
        />
      </div>

      <BackgroundGrid pattern="dots" glow className="mt-6 pt-10 pb-14">
        <header className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal-600 mb-4">
            what the word indexes in the runtime
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-zinc-900 mb-6">
            Accountability partner means{" "}
            <GradientText variant="teal">
              one JSON field
            </GradientText>
            , read at 14:00 UTC.
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Every article on this topic defines the word as a role:
            &ldquo;someone who supports your goals,&rdquo; &ldquo;a peer who
            checks in on you.&rdquo; True, and useless to a program. On
            vipassana.cool, a daily cron reads{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
              event.attendees[].responseStatus
            </code>{" "}
            on your Google Calendar invite and asks one question: is that
            string equal to{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
              &quot;declined&quot;
            </code>
            ? That inequality is the full operational meaning of
            &ldquo;accountable&rdquo; on this site.
          </p>
        </header>
      </BackgroundGrid>

      <div className="mt-6">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="operator, vipassana.cool"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />
      </div>

      <div className="mt-4">
        <ProofBand
          rating={4.9}
          ratingCount="Practice Buddy participants (2023 to 2026)"
          highlights={[
            "Free in the dana tradition, no paid tier",
            "Peer matching, no supervisor tier, symmetric by construction",
            "Source-verifiable: every claim carries a file path and line",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RemotionClip
          accent="teal"
          title="What the word means to the runtime"
          subtitle="One JSON field, one comparison, one cron per day"
          captions={[
            "Role layer: 'a person who supports your goals.' True, unfalsifiable, not callable.",
            "Operational layer: the runtime reads event.attendees[].responseStatus.",
            "Predicate layer: responseStatus !== 'declined' is the full content of 'accountable.'",
            "Cadence layer: one poll per day, at 14:00 UTC, via a Vercel cron.",
            "Boundary layer: either 'declined' auto-ends the match. Silence does not.",
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Four numbers that exhaust the meaning
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          If you collapse the word to what a program actually reads, every
          interesting claim fits into four constants. These are not motivational
          numbers. They are constants in the source.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 1,
              label: "JSON field the cron reads",
            },
            {
              value: 14,
              suffix: ":00 UTC",
              label: "daily poll time",
            },
            {
              value: 1,
              label: "string value that ends the relation",
            },
            {
              value: 3,
              suffix: " days",
              label: "grace window before unconfirmed matches expire",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where &ldquo;accountability&rdquo; actually lives
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Two humans on the left. One aggregator in the middle: the cron at
          /api/check-rsvp. Three outputs on the right: a Postgres row update,
          a notification email, and, in the &ldquo;declined&rdquo; case, an
          auto-end of the match. The word the page is about is the name of the
          aggregator.
        </p>
        <AnimatedBeam
          title="Who reads what"
          from={[
            {
              label: "Partner A's Gmail",
              sublabel: "responseStatus string",
            },
            {
              label: "Partner B's Gmail",
              sublabel: "responseStatus string",
            },
          ]}
          hub={{
            label: "/api/check-rsvp",
            sublabel: "cron at 14:00 UTC daily",
          }}
          to={[
            { label: "matches table", sublabel: "calendar_rsvp_a/b update" },
            { label: "Operator email", sublabel: "RSVP change digest" },
            { label: "Auto-end path", sublabel: "status = 'ended' on 'declined'" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The exact code, in the exact file
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          If you want to audit the claim directly, open{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
            src/app/api/check-rsvp/route.ts
          </code>
          . Lines 119 to 137 are the entire semantic content of the word
          &ldquo;accountable&rdquo; on this product. Six lines of variable
          assignment, one conditional, one update call.
        </p>
        <AnimatedCodeBlock
          code={checkRsvpCode}
          language="typescript"
          filename="src/app/api/check-rsvp/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          All the string values responseStatus can take
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Google Calendar returns one of four canonical strings on a normal
          event, plus an internal fifth value the cron writes when the event
          has been deleted on both calendars. The word &ldquo;accountable&rdquo;
          resolves to &ldquo;not declined and not deleted.&rdquo;
        </p>
        <Marquee pauseOnHover fade>
          {rsvpStrings.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-mono text-teal-700 mx-2"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
              {s}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the daily 14:00 UTC tick actually does
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          The cron is the whole operational meaning of &ldquo;is this
          partnership still accountable.&rdquo; Six steps, executed in order,
          no branching except on the two attendee strings.
        </p>
        <StepTimeline steps={dailyTickSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What happens the moment one person clicks Decline
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Between Gmail, Google Calendar, the Vercel cron, Neon Postgres, and
          the operator&rsquo;s inbox, here is the sequence that runs from the
          tap to the ended status. The partnership dissolves without anyone
          being told by the product.
        </p>
        <SequenceDiagram
          title="from decline click to ended status"
          actors={[
            "Gmail user",
            "Google Calendar",
            "check-rsvp cron",
            "matches row",
            "operator inbox",
          ]}
          messages={[
            { from: 0, to: 1, label: "tap 'Decline' on invite", type: "request" },
            {
              from: 1,
              to: 1,
              label: "attendee.responseStatus = 'declined'",
              type: "event",
            },
            {
              from: 2,
              to: 1,
              label: "GET /events/<eventId> at 14:00 UTC",
              type: "request",
            },
            { from: 1, to: 2, label: "returns attendees[]", type: "response" },
            {
              from: 2,
              to: 3,
              label: "updateMatchStatus('ended','cron')",
              type: "request",
            },
            { from: 3, to: 2, label: "ok", type: "response" },
            {
              from: 2,
              to: 4,
              label: "summary email (old -> new, Auto-ended)",
              type: "request",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-6">
          Dictionary meaning vs runtime meaning
        </h2>
        <ComparisonTable
          productName="Runtime meaning"
          competitorName="Dictionary meaning"
          rows={meansComparisonRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8">
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-teal-600 mb-4">
              the anchor fact
            </p>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
              The word collapses to a six-character comparison
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              &ldquo;Accountability partner&rdquo; on this site means a person
              whose attendee entry on the shared Google Calendar event has a{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
                responseStatus
              </code>{" "}
              value that is not the literal string{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
                &quot;declined&quot;
              </code>{" "}
              at the most recent 14:00 UTC cron poll. The number of predicates
              the runtime evaluates to answer &ldquo;are these two still
              accountable to each other&rdquo; is{" "}
              <span className="text-3xl font-bold text-teal-600 align-middle inline-block">
                <NumberTicker value={1} />
              </span>
              .
            </p>
            <p className="text-sm text-zinc-500">
              Source:{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
                src/app/api/check-rsvp/route.ts:133
              </code>{" "}
              and the schedule line{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
                &quot;0 14 * * *&quot;
              </code>{" "}
              in{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-xs">
                vercel.json
              </code>
              .
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A single cron run, in the log
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          A compressed sketch of one real-shape run of{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
            /api/check-rsvp
          </code>
          . The numbers are representative; the shape is exact. One pair had
          a declined invite, one pair moved from accepted to tentative, the
          other 39 were unchanged.
        </p>
        <TerminalOutput title="check-rsvp cron (14:00 UTC)" lines={cronLogLines} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Why collapse the word to a string comparison at all
        </h2>
        <div className="space-y-4 text-zinc-600 leading-relaxed max-w-2xl">
          <p>
            A role description works for someone already in the relation,
            who wants to check in with the person they have. It does not work
            for a runtime that has to decide, once a day, whether to update a
            row in the{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
              matches
            </code>{" "}
            table from &ldquo;active&rdquo; to &ldquo;ended.&rdquo; A runtime
            needs a signal it can read. The signal has to come from somewhere.
          </p>
          <p>
            Google Calendar returns four well-defined strings for an
            attendee&rsquo;s state. One of them is the one a human clicks when
            they are deliberately stepping out. Reading that one string is the
            narrowest responsible sampling the runtime can do. Everything else,
            silence, lateness, a missed sit, a quiet week, stays with the
            humans and their operator.
          </p>
          <p>
            This is also why the service is free. Dropping a partnership on
            ambient silence would be expensive to the relation and easy to
            automate. Dropping it only on a deliberate click is inexpensive to
            everyone, and it is a boundary a donation-supported product can
            hold.
          </p>
          <p>
            For anything beyond logistics, how to sit, how to meet difficulty,
            how to work with whatever arises in the mind, go to dhamma.org and
            an authorized assistant teacher at a 10-day residential course.
            That boundary is also part of what the word means here: this site
            handles scheduling; it does not handle practice.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Want to see the single-field meaning in action?"
          description="Book a short call and I will walk you through the exact matches row, the exact calendar event, and the exact JSON field the cron reads to decide whether your partnership is still live."
        />
      </div>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          title="Related pages"
          subtitle="Same word, different layer of the operational definition."
          posts={[
            {
              title: "Accountability partner definition",
              href: "/t/accountability-partner-definition",
              excerpt:
                "Seven predicates and one integer, sixty. The matcher's pre-pair filters.",
              tag: "Definition",
            },
            {
              title: "Define accountability partner",
              href: "/t/define-accountability-partner",
              excerpt:
                "The URL is the relation. One permanent Meet link with RRULE:FREQ=DAILY.",
              tag: "Artifact",
            },
            {
              title: "What is an accountability partner",
              href: "/t/what-is-an-accountability-partner",
              excerpt:
                "A peer, not an overseer. Four symmetric similarity traits in buildCommonTraits.",
              tag: "Role",
            },
            {
              title: "Accountability partner app",
              href: "/t/accountability-partner-app",
              excerpt:
                "The inbox as state machine. No dashboard, no push, just one daily email.",
              tag: "Interface",
            },
            {
              title: "Vipassana daily practice",
              href: "/t/vipassana-daily-practice",
              excerpt:
                "How a daily cadence actually becomes a cadence and not a streak.",
              tag: "Cadence",
            },
            {
              title: "Practice Buddy, how it works",
              href: "/practice-buddy/how-it-works",
              excerpt:
                "Signup, 24-hour cooldown, auto-match, confirmation, calendar event, all in one view.",
              tag: "Walkthrough",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about matching, scheduling, or how the cron reads your RSVP? Book a short call."
      />
    </article>
  );
}
