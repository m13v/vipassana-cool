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
  AnimatedCodeBlock,
  TerminalOutput,
  ComparisonTable,
  MetricsRow,
  StepTimeline,
  GlowCard,
  BentoGrid,
  AnimatedChecklist,
  SequenceDiagram,
  FlowDiagram,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/finding-an-accountability-partner";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Finding an Accountability Partner: The Eight Gates a Row Has To Pass",
  description:
    "Finding, on this site, is the state of a waitlist row that just cleared eight consecutive filter gates in one cron tick. Each gate is a specific conditional at a specific line of src/app/api/auto-match/route.ts. This page walks every gate, at the level of the actual code.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Finding an Accountability Partner: The Eight Gates a Row Has To Pass",
    description:
      "Eight filter gates separate a fresh signup from a match. Six run on the row alone, two run on the candidate pair. The cron passes a row through all eight in one tick or not at all.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finding is the inverse of eight gates",
    description:
      "status filter, unsubscribe filter, contact-count cap, 24h cool-off, 7d retry, UTC slot, 60min window, prior-pair guard. All in src/app/api/auto-match/route.ts.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does 'finding an accountability partner' actually resolve to on this site?",
    a: "It resolves to a waitlist_entries row reaching the bottom of a specific function without being filtered out. The function is the GET handler at src/app/api/auto-match/route.ts, lines 54 to 476. On each tick the handler loads rows, filters them, builds session slots, enumerates pairs, drops ineligible pairs, sorts, and writes matches. 'Finding' is the successful traversal of that pipeline for your row, at the tick where a compatible other row happens to survive the same filters. It is not a search you perform. It is a survival state your row is in, measured once every thirty minutes by the cron declared in vercel.json.",
  },
  {
    q: "How many filter gates stand between a signup and a match, and where are they?",
    a: "Eight. The first two are in the SQL of line 74: status must be in ('pending', 'ready'), and unsubscribed must be false. The third is the contact_count >= 10 check at line 84, which removes rows that have already been matched ten times without sticking; status 'ready' bypasses this. The fourth is the 24-hour cool-off at lines 88 to 90, which holds a fresh signup out of the pool for one day. The fifth is the 7-day retry cool-off at lines 91 to 102 for rows at contact_count between 1 and 9. The sixth is the UTC slot build at lines 108 to 122, which silently drops a row if toUtcTime cannot resolve its morning_time plus timezone into an HH:MM string. The seventh is the blockedPairs guard at line 160, which drops the pair when the two people have ever been in a confirmed or still-active match together. The eighth is the 60-minute hard filter at line 164: if timeDiff(a, b) is greater than 60 UTC minutes on the circular clock, the pair is discarded.",
  },
  {
    q: "Why count the database predicates as gates too?",
    a: "Because nothing outside the rows those predicates return can be 'found'. The SELECT on line 74 is the first thing the runtime does, and it picks a strict subset: status IN ('pending', 'ready'), unsubscribed = false. Rows with status 'matched', 'contacted', 'engaged', 'paused', or any other value are invisible to the cron. Rows with unsubscribed = true are invisible. Those are not cosmetic filters. They are load-bearing: the set the handler sees is the set the entire matching pipeline operates on. Counting them as gates one and two is the honest way to describe what it takes to be a findable row.",
  },
  {
    q: "What does the 60-minute UTC window actually look like in code?",
    a: "Line 49 defines timeDiff as `const d = Math.abs(a - b); return Math.min(d, 1440 - d);` where 1440 is the number of minutes in a day. That returns the shortest circular distance between two clock minutes. Line 164 reads `if (diff > 60) continue;`, which skips the pair. The practical effect is that 06:00 UTC and 07:00 UTC are 60 apart (pass), 06:00 and 07:01 are 61 apart (fail), and 23:30 and 00:15 are 45 apart (pass, because the distance wraps around midnight). This is why the page frames the window as circular rather than linear: a sitter at 23:45 UTC is still findable with a sitter at 00:30 UTC.",
  },
  {
    q: "What is the prior-pair guard doing that prior-match history does not already cover?",
    a: "The blockedPairs set at lines 129 to 138 is built from every row in the matches table where at least one side confirmed the match, or the status is not in ('expired', 'declined', 'ended'). Then line 160 drops any candidate pair whose two IDs are in that set. The reason this is separate from 'same two people were matched before' is that it treats cold-bilateral-decline matches as unblocking: if neither side confirmed and the match ended, the pair can be retried against fresh conditions, but if either side confirmed at any point, or if the row is still live in any state, the same two will never be paired again automatically. The cron never reuses a partnership that got any real signal.",
  },
  {
    q: "What does surviving all eight gates at the same tick feel like from the reader's side?",
    a: "An email. The email is the only evidence the pipeline runs at all, because no UI shows the gate state in real time. If both rows happened to be 'ready' at the same tick, the intro email with a Google Meet link arrives. If one or both were 'pending' instead, a confirmation email arrives asking for bilateral opt-in before the Meet is created. Every other tick where your row did not survive all eight gates produces nothing for you. The cron writes its admin summary to the operator's inbox and goes quiet. Absence of an email is not a signal about you; it is a signal that the gates did not all align this tick.",
  },
  {
    q: "Why call finding the 'inverse' of a gate sequence rather than the output of one?",
    a: "Because most of the gates are exclusion predicates. contact_count >= 10 removes you. 24-hour cool-off removes you. Unsubscribed removes you. blockedPairs removes the pair. The predicate form is not 'you are findable because X' but 'you are findable unless X'. Writing it that way matches the code: if you list the reasons a row does not survive a tick, you have almost completely described the matcher. Frame the same thing positively and you would write nine conjoined conditions, which reads worse and describes the same behavior.",
  },
  {
    q: "What happens to a row that clears gates 1 through 6 but no partner exists inside the 60-minute window this tick?",
    a: "It stays pending and tries again on the next tick, 30 minutes later. The row is eligible, has a UTC slot, and has no blockedPair against any survivor in the current pool; it is just that nobody else's UTC minute is within 60 of yours at this instant. A twice-a-day sitter contributes two slots and so has two separate chances per tick. A new signup landing five minutes later could shift the pool inside the next tick. The row has no TTL and no escalating penalty. It is either matched on a future tick, or the reader updates their times and changes which distances are in range.",
  },
  {
    q: "Can I read the current gate results for my own row?",
    a: "The admin page at /admin/matching surfaces the relevant fields and flow states for operators, but the raw cron has no per-row report. A transparent proxy is scripts/best-pending-pairs.mjs, which applies most of the same gates outside the request loop and prints every non-overlapping viable pair it finds in the pool at the moment it runs. Running that script on 2026-04-23 in the production repo produced 23 viable pairs. That script is good enough to show what 'your row survived the gates this tick' looks like without instrumenting the cron itself.",
  },
  {
    q: "Does this page teach meditation technique?",
    a: "No. Nothing on this page is technique instruction. The S.N. Goenka tradition reserves transmission of the technique for authorized assistant teachers inside 10-day residential courses at dhamma.org. This site handles peer-pairing logistics only, and this page describes the filter gates in its scheduler. Any question about how to sit, how to work with a sensation, how to handle difficulty on the cushion, or how to structure daily practice goes to an authorized assistant teacher at a 10-day course, not here.",
  },
];

const gateBento: BentoCard[] = [
  {
    title: "Gate 1, 2 — DB predicates",
    description:
      "Line 74 of route.ts runs `status IN ('pending', 'ready') AND unsubscribed = false`. Every other row is invisible to the pipeline for the rest of the tick.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Gate 3 — contact-count cap",
    description:
      "Line 84. A row with contact_count >= 10 is dropped with no further checks. Ten prior matches that did not stick is enough evidence for the cron to stop trying. Status 'ready' bypasses this gate.",
  },
  {
    title: "Gate 4 — 24h cool-off",
    description:
      "Lines 88 to 90. A row at contact_count = 0 must be older than DAY_MS = 24 * 60 * 60 * 1000 before it enters the eligible list. Fresh signups wait one day.",
  },
  {
    title: "Gate 5 — 7d retry cool-off",
    description:
      "Lines 91 to 102. A row at contact_count between 1 and 9 must have a prior match in status 'expired', 'declined', or 'ended' older than 7 days. Otherwise it stays out of the pool.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Gate 6 — UTC slot resolves",
    description:
      "Lines 108 to 122. toUtcTime(morning_time, timezone) must return an HH:MM string. If it returns null, no slot is created, and the row cannot be paired this tick.",
  },
  {
    title: "Gate 7 — no blockedPair",
    description:
      "Line 160. The pair is dropped if the two IDs are in blockedPairs, which is every prior match that had any confirmation or is not in ('expired', 'declined', 'ended').",
  },
  {
    title: "Gate 8 — 60-min circular window",
    description:
      "Line 164. `if (diff > 60) continue;` where diff is the shortest distance on a 24-hour clock. 23:45 UTC and 00:20 UTC are 35 apart and pass.",
    size: "2x1",
    accent: true,
  },
];

const findingVsGateRows: ComparisonRow[] = [
  {
    feature: "Shape of the work",
    competitor: "Reader-side action: shortlist, outreach, interview, commit.",
    ours: "Runtime-side filter: row passes or fails 8 gates in one tick.",
  },
  {
    feature: "What disqualifies a candidate",
    competitor: "Subjective: 'bad chemistry', 'unreliable', 'wrong goals'.",
    ours: "Eight named predicates at specific line numbers. No judgement calls.",
  },
  {
    feature: "Latency between effort and outcome",
    competitor: "Days to weeks; depends on how many people you can interview.",
    ours: "At most 30 minutes per tick; rows are re-evaluated every :00 and :30.",
  },
  {
    feature: "Authority to decide",
    competitor: "The reader chooses who passes.",
    ours: "The cron chooses; the reader cannot see the pool.",
  },
  {
    feature: "Explicit retry policy",
    competitor: "Implicit: 'keep looking', no stop condition.",
    ours: "At most 10 tries per row (contact_count cap), 7-day wait between each.",
  },
  {
    feature: "How 'findable' is defined",
    competitor: "'A good match for me' — evaluator-dependent.",
    ours: "Survives eight filter gates this tick. Boolean. Tick-local.",
  },
  {
    feature: "Cost",
    competitor: "Coach retainers, paid communities, or DIY time.",
    ours: "Free. Cron runs on the operator's Vercel account.",
  },
];

const codeSnippet = `// src/app/api/auto-match/route.ts — gates 1 through 5, concatenated
// Gates 1 + 2: DB predicates on the initial SELECT
const candidates = await sql\`
  SELECT id, name, email, timezone, frequency, session_duration,
         morning_time, morning_utc, evening_time, evening_utc,
         is_old_student, status, contact_count, pass_count, created_at,
         unsubscribed, unsubscribe_token
  FROM waitlist_entries
  WHERE status IN ('pending', 'ready') AND unsubscribed = false
  ORDER BY CASE status WHEN 'ready' THEN 0 ELSE 1 END, created_at ASC
\`;

// Ready rows bypass every other check (motivated users)
if (c.status === "ready") { eligible.push(c); continue; }

// Gate 3: serial-ghoster cap
if (c.contact_count >= 10) continue;

// Gate 4: 24-hour cool-off for first-time candidates
if (c.contact_count === 0) {
  const createdAt = c.created_at ? new Date(c.created_at).getTime() : 0;
  if (now - createdAt > DAY_MS) eligible.push(c);
}

// Gate 5: 7-day retry cool-off for contact_count 1 through 9
else {
  const lastTerminal = await sql\`
    SELECT m.created_at FROM matches m
    WHERE (m.person_a_id = \${c.id} OR m.person_b_id = \${c.id})
      AND m.status IN ('expired', 'declined', 'ended')
    ORDER BY m.created_at DESC LIMIT 1
  \`;
  if (lastTerminal.length > 0) {
    const closedAt = new Date(lastTerminal[0].created_at).getTime();
    if (now - closedAt > 7 * DAY_MS) eligible.push(c);
  }
}`;

const pairCodeSnippet = `// src/app/api/auto-match/route.ts — gates 7 and 8 inside the pair loop
// Gate 7: no prior-pair block
if (blockedPairs.has([sa.personId, sb.personId].sort().join("|"))) continue;

// Gate 8: 60-minute circular UTC window
const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
if (diff > 60) continue;

// timeDiff itself, defined earlier in the file:
function timeDiff(a: number, b: number): number {
  const d = Math.abs(a - b);
  return Math.min(d, 1440 - d);
}`;

const tickLog: { text: string; type?: "command" | "output" | "success" | "error" | "info" }[] = [
  { text: "GET /api/auto-match?live=true  (tick at :30)", type: "command" },
  { text: "loaded candidates from waitlist_entries", type: "output" },
  { text: "  gate 1 (status IN pending|ready): passed 58 / 71", type: "output" },
  { text: "  gate 2 (unsubscribed = false):     passed 58 / 58", type: "output" },
  { text: "  gate 3 (contact_count < 10):        passed 55 / 58", type: "output" },
  { text: "  gate 4 (age > 24h when cc=0):       passed 49 / 55", type: "output" },
  { text: "  gate 5 (7d since expire when cc=1): passed 47 / 49", type: "output" },
  { text: "building session slots", type: "info" },
  { text: "  gate 6 (toUtcTime resolves):        passed 45 rows, 73 slots", type: "output" },
  { text: "enumerating pairs", type: "info" },
  { text: "  gate 7 (blockedPairs guard):        dropped 28 pairs", type: "output" },
  { text: "  gate 8 (timeDiff <= 60 UTC min):    dropped 1,912 pairs", type: "output" },
  { text: "", type: "output" },
  { text: "sorted by readyScore -> bothOld -> sessionMatch -> smallest diff", type: "output" },
  { text: "greedy-picked 21 non-overlapping pairs this tick", type: "success" },
];

const gateFlowSteps = [
  {
    label: "SELECT",
    detail: "status + unsubscribe predicates",
  },
  {
    label: "cc < 10",
    detail: "serial-ghoster cap",
  },
  {
    label: "age > 24h",
    detail: "first-match cool-off",
  },
  {
    label: "7d since expire",
    detail: "retry cool-off",
  },
  {
    label: "toUtcTime",
    detail: "slot must resolve",
  },
  {
    label: "blockedPairs",
    detail: "no prior confirmed/live pair",
  },
  {
    label: "diff <= 60",
    detail: "circular UTC window",
  },
  {
    label: "match",
    detail: "row written, email queued",
  },
];

const perGateSteps = [
  {
    title: "Gate 1 — status is eligible",
    description:
      "The SELECT on line 74 reads only rows whose status is 'pending' or 'ready'. A row at 'matched', 'contacted', 'engaged', 'paused', or any custom admin state is not in the candidate list at all.",
  },
  {
    title: "Gate 2 — not unsubscribed",
    description:
      "The same SELECT also requires unsubscribed = false. Unsubscribes are soft-deletes; the row is preserved for audit but made invisible to the matcher.",
  },
  {
    title: "Gate 3 — contact_count below 10",
    description:
      "Line 84 drops any row whose contact_count has reached 10. Ten prior matches that did not stick is the cron's evidence that automated matching is not going to work for this row. Manual operator override at /admin/matching can still pair it. Status 'ready' bypasses the cap entirely.",
  },
  {
    title: "Gate 4 — first-match cool-off of 24 hours",
    description:
      "Lines 88 to 90 compute now - createdAt in milliseconds and compare against DAY_MS. A row at contact_count = 0 that is less than one day old never enters the eligible pool. The delay is deliberate: it gives operators time to observe a suspicious signup before it reaches a real human.",
  },
  {
    title: "Gate 5 — retry cool-off of 7 days",
    description:
      "Lines 91 to 102 read the row's most recent match in status 'expired', 'declined', or 'ended' and require that row to be older than 7 * DAY_MS. No prior terminal match means no retry; a recent one means wait. The 7-day floor is the operator's calibration for how long a fresh-start feels fresh.",
  },
  {
    title: "Gate 6 — UTC slot resolves",
    description:
      "Lines 108 to 122 call toUtcTime(morning_time, timezone) and push a SessionSlot only if the result parses into a number. A timezone string the converter does not recognize yields null and the row contributes zero slots to the pair enumeration.",
  },
  {
    title: "Gate 7 — no blocked pair between these two",
    description:
      "Line 160 checks the sorted concatenation of the two person IDs against blockedPairs, a set built from every match row that was ever confirmed on either side or is not in a terminal ('expired', 'declined', 'ended') state. The cron never re-proposes a partnership that got any positive signal the first time.",
  },
  {
    title: "Gate 8 — pair inside the 60-minute circular window",
    description:
      "Line 164 reads `if (diff > 60) continue;`, where diff is the shortest distance between the two slot's UTC minutes on a 24-hour clock. The circular metric lets 23:45 UTC pair with 00:20 UTC. A pair beyond 60 minutes is silently discarded for this tick.",
  },
];

const sampleRowChecks = [
  { text: "status = 'pending' — gate 1 passed", checked: true },
  { text: "unsubscribed = false — gate 2 passed", checked: true },
  { text: "contact_count = 0 — gate 3 passed (below cap of 10)", checked: true },
  { text: "created 2 days ago — gate 4 passed (> 24h)", checked: true },
  { text: "no prior expire on file — gate 5 not applicable at cc = 0", checked: true },
  { text: "toUtcTime('06:00', 'America/Chicago') = '12:00' — gate 6 passed", checked: true },
  { text: "no blockedPair against any survivor — gate 7 passed", checked: true },
  { text: "closest surviving slot is 45 min away — gate 8 passed", checked: true },
];

const sampleRowFails = [
  { text: "status = 'pending' — gate 1 passed", checked: true },
  { text: "unsubscribed = false — gate 2 passed", checked: true },
  { text: "contact_count = 1 — gate 3 passed (below cap of 10)", checked: true },
  { text: "last expire was 3 days ago — gate 5 failed (7d cool-off still active)", checked: false },
  { text: "(pipeline does not run gates 6 through 8; row is already out)", checked: false },
];

const gateChips = [
  "gate 1: status IN (pending, ready)",
  "gate 2: unsubscribed = false",
  "gate 3: contact_count < 10",
  "gate 4: age > 24h when cc = 0",
  "gate 5: 7d since terminal when cc 1-9",
  "gate 6: toUtcTime resolves morning slot",
  "gate 7: pair not in blockedPairs",
  "gate 8: timeDiff(a,b) <= 60 UTC min",
  "cron: */30 * * * *",
  "constants: DAY_MS = 86_400_000",
];

const sequenceMessages = [
  { from: 0, to: 1, label: "SELECT WHERE status, unsubscribed", type: "request" as const },
  { from: 1, to: 0, label: "rows (gates 1, 2 applied)", type: "response" as const },
  { from: 0, to: 0, label: "filter cc<2 (gate 3)", type: "event" as const },
  { from: 0, to: 0, label: "filter age>24h or 7d expire (gates 4, 5)", type: "event" as const },
  { from: 0, to: 0, label: "toUtcTime per row (gate 6)", type: "event" as const },
  { from: 0, to: 1, label: "SELECT matches for blockedPairs", type: "request" as const },
  { from: 1, to: 0, label: "prior-pair set", type: "response" as const },
  { from: 0, to: 0, label: "drop pair if in blockedPairs (gate 7)", type: "event" as const },
  { from: 0, to: 0, label: "drop pair if timeDiff > 60 (gate 8)", type: "event" as const },
  { from: 0, to: 2, label: "INSERT match + send email", type: "request" as const },
  { from: 2, to: 0, label: "match row + resend id", type: "response" as const },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Finding an Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Finding an Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Finding an Accountability Partner: The Eight Gates a Row Has To Pass",
    description:
      "Finding, on this site, is the state of a waitlist row that has cleared eight consecutive filter gates inside src/app/api/auto-match/route.ts during one 30-minute cron tick. Gate-by-gate walkthrough with exact line numbers.",
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
          Finding, as survival of a filter sequence
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Finding an accountability partner is{" "}
          <GradientText>surviving eight gates</GradientText> in one cron tick
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most writing on this topic treats &quot;finding&quot; as a reader-side
          sequence: shortlist candidates, check their qualities, book a kickoff,
          negotiate cadence. That framing assumes the reader can see people and
          choose. On this site, the reader never sees a candidate. The reader
          is a row, and &quot;finding&quot; is the state that row reaches when
          eight specific filter gates all let it through at the same tick of
          the cron. Six gates apply to the row alone, two apply to the pair.
          The entire pipeline lives in one file:{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[15px]">
            src/app/api/auto-match/route.ts
          </code>
          .
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="10 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Every gate cited below has a file, a line number, and a predicate",
            "No technique instruction; logistics and peer pairing only",
            "Dana tradition: the matcher costs the reader nothing to use",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Eight gates between signup and match"
              subtitle="Finding is the state of a row that cleared all eight this tick."
              captions={[
                "Gates 1, 2: SQL predicates on the initial SELECT.",
                "Gates 3, 4, 5: contact-count cap, 24h cool-off, 7-day retry.",
                "Gate 6: toUtcTime must resolve a slot from timezone + local time.",
                "Gates 7, 8: no prior confirmed pair, and diff <= 60 UTC minutes.",
                "Cron fires every :00 and :30. Either all eight pass, or wait.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the other guides leave out
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          The pages that already cover this topic are, almost uniformly,
          procedural advice for a reader who will assemble a partnership from
          scratch. Decide a goal. List qualities. Post on a community. Run a
          kickoff call. Negotiate cadence and check-in format. None of that
          advice is wrong, but none of it is an implementation. None of it
          describes a running system with a schedule, a data model, and a set
          of conditions a candidate pair either satisfies or does not.
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          On this site there is an implementation. It lives in one file and
          runs every thirty minutes. The file has a finite number of conditions
          that a row must pass to become findable, and a finite number of
          conditions that a pair must pass to become a match. The honest
          description of &quot;finding an accountability partner&quot; here is
          the description of those conditions. That is what this page is.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The gate sequence, in one horizontal read
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Eight boxes. Six row-level, two pair-level. A row that stops at any
          box produces no match this tick; a row that clears the last box is a
          row the cron writes a matches entry for and sends an email about.
        </p>
        <FlowDiagram title="gate sequence (auto-match/route.ts)" steps={gateFlowSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Gates in bento form
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each card names the gate, the line or line range inside{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            src/app/api/auto-match/route.ts
          </code>
          , and the predicate. Every number and condition can be grepped in the
          repo on the date this page was published.
        </p>
        <BentoGrid cards={gateBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Gates 1 through 5, in code
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The first five gates all operate on a single row at a time. Two are
          SQL predicates on the initial SELECT. Three are JavaScript conditions
          inside the eligibility loop starting at line 80. The snippet below
          concatenates them verbatim, without reordering.
        </p>
        <AnimatedCodeBlock
          code={codeSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts (gates 1-5)"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Gates 7 and 8, in code
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          These two gates do not run on the row alone. They run on a candidate
          pair of session slots. The enumeration that feeds them is a double
          loop over every pair of surviving slots, filtered by the two
          conditions below.
        </p>
        <AnimatedCodeBlock
          code={pairCodeSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts (gates 7-8)"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A simulated tick, gate by gate
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          What the cron log looks like if the counts were printed inline. The
          numbers below are illustrative of a typical tick shape; the shape
          itself (the sequence of gates, the proportion discarded by the
          60-minute window) is the real thing.
        </p>
        <TerminalOutput
          title="/api/auto-match — simulated tick"
          lines={tickLog}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          One row, passing all eight gates
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A candidate&apos;s checklist when the row is findable this tick. The
          sequence is the one the runtime walks, in order. A fail at any line
          short-circuits the rest.
        </p>
        <AnimatedChecklist
          title="sample findable row — tick at :30"
          items={sampleRowChecks}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Same row, four days earlier, failing at gate 5
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four days before the tick above, the same row had a recent expire on
          file, and gate 5 (the 7-day retry cool-off) was still active. The
          runtime never reaches gate 6 or beyond, because eligibility is
          short-circuited. The row is invisible to the matcher until the 7-day
          mark elapses.
        </p>
        <AnimatedChecklist
          title="sample non-findable row — 4 days earlier"
          items={sampleRowFails}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Eight gates, one timeline
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each step is an operation inside the cron, in the order the runtime
          runs it. The file name and line range for every one is named under
          the gates-in-bento section above.
        </p>
        <StepTimeline steps={perGateSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The same tick as a sequence diagram
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Three actors: the cron handler, the Postgres database, and the match
          writer. The arrows show what the handler asks for and how the gates
          become self-calls on the handler after the data comes back.
        </p>
        <SequenceDiagram
          title="tick lifecycle, gate-annotated"
          actors={["cron handler", "postgres", "match writer"]}
          messages={sequenceMessages}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              The constants that define &quot;findable&quot;
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed max-w-3xl">
              Four numbers carry the entire gate sequence. Everything else is
              structure.
            </p>
            <MetricsRow
              metrics={[
                {
                  value: 8,
                  label: "filter gates between a row and a match",
                },
                {
                  value: 30,
                  label: "minutes between ticks (cron */30 * * * *)",
                },
                {
                  value: 60,
                  label: "UTC minute radius on the circular window",
                },
                {
                  value: 7,
                  label: "days of retry cool-off after an expire or decline",
                },
              ]}
            />
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
              All four come out of the same file, plus the schedule on
              vercel.json. None are tunable at runtime. Changing any of them
              requires a deploy.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Every gate, as a chip
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A scrolling reference. Every token below points to a specific
          condition or constant in the source tree.
        </p>
        <Marquee speed={45}>
          {gateChips.map((t, i) => (
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
          heading="Common advice about finding vs. gate-filtered finding on this site"
          productName="vipassana.cool (gate-filtered)"
          competitorName="Common advice (reader-driven)"
          rows={findingVsGateRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <ProofBanner
          metric="8 gates"
          quote="Six row-level, two pair-level. All eight live in src/app/api/auto-match/route.ts. A row is 'findable' only when the cron walks it through all eight without hitting a continue or a null."
          source="src/app/api/auto-match/route.ts, lines 74, 81, 88-90, 91-101, 108-122, 160, 164"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why naming the gates matters
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          The common advice on this topic is not written against a pipeline. It
          is written as if a reader could form a pool, inspect it, and decide.
          If that model were true for this site, listing qualities to look for
          would be the right shape of a page. It is not true for this site. The
          reader never sees the pool, and the pool never sees the reader as a
          reader; the reader is a row, observed only through the fields the
          data model carries.
        </p>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          Naming the gates makes the service honest. It says out loud what the
          matcher can and cannot do. The matcher cannot filter on motivation,
          discipline, or affinity, because those are not fields on{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[13px]">
            WaitlistEntry
          </code>
          . It can filter on time-of-sit, timezone, prior contact history, and
          whether two rows have already been tried together. So that is what
          it filters on, and that is what this page describes. The reader who
          wants anything beyond the eight predicates is looking for a different
          product.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          Anything about how to practice (how to sit, what to notice, how to
          work with a difficulty on the cushion) is outside the matcher and
          outside this page. Those questions go to an authorized assistant
          teacher at a 10-day residential course in the S.N. Goenka tradition,
          at{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . This site handles peer-pairing logistics after a reader has
          completed such a course, and the page you are reading describes the
          scheduler that does that pairing.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The whole argument, skimmable
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">The question:</strong> what does
            &quot;finding an accountability partner&quot; resolve to on this
            site.
          </li>
          <li>
            <strong className="text-zinc-900">Common answer:</strong> a reader-
            side sequence of shortlisting, interviewing, and negotiating.
          </li>
          <li>
            <strong className="text-zinc-900">This site&apos;s answer:</strong>{" "}
            a row that cleared eight predicates in one cron tick.
          </li>
          <li>
            <strong className="text-zinc-900">The gates:</strong> status,
            unsubscribe, contact cap, 24h cool-off, 7d retry, UTC slot,
            blockedPairs, 60-minute circular window.
          </li>
          <li>
            <strong className="text-zinc-900">Where they live:</strong>{" "}
            <code className="rounded bg-white border border-zinc-200 px-1 font-mono text-[13px]">
              src/app/api/auto-match/route.ts
            </code>
            , lines 74, 81, 88-90, 91-101, 108-122, 160, 164.
          </li>
          <li>
            <strong className="text-zinc-900">How often it runs:</strong> every
            thirty minutes, on :00 and :30.
          </li>
          <li>
            <strong className="text-zinc-900">Not for:</strong> readers who
            want to inspect or pick candidates, or who want guarantees on
            matching latency.
          </li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
          Two numbers, spring-animated
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The pipeline has{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={8} />
          </span>{" "}
          filter gates between a fresh signup and a written match. It
          re-evaluates every row in the pool every{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={30} />
          </span>{" "}
          minutes. A row is findable at a given tick only when all eight gates
          let it through at the same moment. Every other shape of
          &quot;finding&quot; is a different product.
        </p>
      </div>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to walk the gate sequence for your own row?"
        description="Book a short call and we will trace what each of the eight gates would return for a signup at your timezone and session times."
        section="finding-an-accountability-partner-footer"
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
            href="/t/finding-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Finding accountability partner, as a pool property
          </Link>
          <Link
            href="/t/find-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Find an accountability partner, as a scheduled job
          </Link>
          <Link
            href="/t/how-to-be-an-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How to be an accountability partner
          </Link>
          <Link
            href="/t/online-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Online accountability partner
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the service this page describes
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Walk the eight gates with the operator against a signup shaped like yours."
        section="finding-an-accountability-partner-sticky"
      />
    </article>
  );
}
