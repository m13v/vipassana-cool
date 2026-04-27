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

const PAGE_URL = "https://vipassana.cool/t/accountability-partner-contract";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Accountability Partner Contract: The Four Legal Elements, Each a Line of Code",
  description:
    "Every template you will find for this is a PDF with blanks. On vipassana.cool the contract is formed without a document. The four classical elements (offer, acceptance, consideration, mutual assent) each resolve to one specific URL, SQL statement, or boolean in the repo. The meeting of the minds is a SQL AND.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability Partner Contract: the four legal elements, each a line of code",
    description:
      "No signatures. No PDF. The contract has four elements, and each one is implemented as a URL, an INSERT, or a boolean. The meeting of the minds lives on src/lib/db.ts line 496.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Accountability partner contract: four legal elements, each a line of code",
    description:
      "src/lib/db.ts:496 returns bothConfirmed = person_a_confirmed AND person_b_confirmed. That boolean is the meeting of the minds.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is this actually a contract in the legal sense?",
    a: "Depends on which lens you use. In the narrow sense of a document you sign, no — nothing gets signed, nothing gets notarized, and there is no paper artifact anywhere in the flow. In the broader sense that lawyers teach in first-year contracts (offer, acceptance, consideration, mutual assent, and capacity), yes: each of those elements has a concrete implementation in this repo, and the page walks through which file and line each of them lives on. The contract is not a piece of paper, it is a pattern the runtime enacts. Whether that pattern would survive litigation is not the point; the point is that a daily meditation partnership is not the kind of relationship courts adjudicate, so the only enforcement that matters is the one the code does on its own every day.",
  },
  {
    q: "What exactly is the offer, what is the acceptance, and when does the contract form?",
    a: "The offer is the confirmation email, more precisely the two hyperlinks inside it: /api/confirm-match?token=<yours>&response=yes and /api/confirm-match?token=<yours>&response=no. That pair of URLs is the offer, made by the matcher to each party separately. The acceptance is a GET request to the yes URL, performed by the recipient's browser when they click the button. Two acceptances are required, one from each side. The contract forms at the exact instant the second acceptance arrives: specifically when confirmMatchPerson in src/lib/db.ts lines 487 to 496 returns { bothConfirmed: true }. That boolean is the formation event. Before it flips, there is no Meet URL, no calendar event, no meet_links rows, nothing. After it flips, all of that comes into being in the same request.",
  },
  {
    q: "What is the consideration? No money changes hands.",
    a: "The consideration is presence. Specifically: a row in the meet_clicks table, with the fields token, match_id, person_id, meet_url, ip, and user_agent. Every time either party opens their per-person tracking URL at /meet/<token>, src/app/meet/[token]/route.ts lines 26 to 29 INSERT that row. Your consideration to your partner is the row you generate today; their consideration to you is the row they generate today; and the two rows, landing within a few minutes of each other on the same match_id, are the bilateral exchange. It is not money, but it is measurable, tied to a specific partner, and required for the relationship to continue. That matches the classical definition of consideration (a benefit bargained for, given in exchange) while using an entirely non-financial currency.",
  },
  {
    q: "You keep saying mutual assent is a SQL boolean. What does that literally mean?",
    a: "It means that the place where the runtime decides whether the two sides have 'met in their minds' is a single AND of two boolean columns. confirmMatchPerson at src/lib/db.ts line 487 takes a matchId and a side ('a' or 'b'), sets the corresponding person_a_confirmed or person_b_confirmed column to true, reads both columns back, and returns { bothConfirmed: !!(m?.person_a_confirmed && m?.person_b_confirmed) } on line 496. The !! is there to coerce undefined-from-an-empty-row into a proper boolean. That return value, evaluated in src/app/api/confirm-match/route.ts line 57 as const { bothConfirmed } = await confirmMatchPerson(...), is the entire mutual-assent determination. If it is true, the contract is in force. If it is false, the contract is still only an offer plus one acceptance, which in common-law terms is not yet a contract.",
  },
  {
    q: "What about the fourth element, capacity, and the counterpart of 'legal purpose'?",
    a: "Capacity is addressed via the disclaimer page (src/app/disclaimer/page.tsx), which asks any signup with relevant mental-health history to consult a professional before committing. That is the closest this product comes to a capacity check. 'Legal purpose' is trivial: sitting in silence next to another adult over Google Meet for an hour a day is not a regulated activity in any jurisdiction I am aware of. If it were, the purpose would be invalid and the contract would fail on that element. That is a hard line: the product refuses to take on purposes it cannot legally enforce (coaching, therapy, technique instruction), which is why those are explicitly out of scope.",
  },
  {
    q: "How does breach work? There is no damages clause.",
    a: "There is no damages clause because there are no damages. The worst-case outcome of one side not performing is that the other side sits alone in the Meet room for a few minutes, notices the absence, and leaves. The failure is private, it is same-day, and it does not accumulate. The breach signal in the data is simple: meet_clicks has a row from only one person_id under the match_id for the day, instead of two. The operator dashboard surfaces this. The remedy is not damages, the remedy is rematch: the remaining party can unsubscribe (one click) and rejoin the waitlist, and the matcher will pair them with someone new. Doctrine that fits: this product uses a version of efficient breach, where the cost of enforcing performance would be higher than the cost of finding a replacement partner, so the system optimizes for replacement rather than enforcement.",
  },
  {
    q: "How is the contract terminated?",
    a: "Three paths. One, mutual non-performance: both sides stop generating meet_clicks rows, the operator notices, both matches quietly age out. Two, unilateral rescission: either party clicks the unsubscribe footer link on any email, which hits /api/unsubscribe and runs UPDATE matches SET status='ended' on every row where that person is on either side of the pair (src/app/api/unsubscribe/route.ts around line 59). The other party is notified and returned to the 'ready' state on the waitlist. Three, pre-contract voidance: if the 3-day confirmation window elapses without both acceptances, expire-matches runs on its cron, calls expireStaleMatches(3), and voids the offer without a contract ever having formed. In all three cases, the termination is one-sided, cost-free, and does not require either party to justify the decision to the other.",
  },
  {
    q: "Why does this page treat the contract as four elements instead of listing clauses like an NDA?",
    a: "Because clauses are the shape of the document, and this is not a document. The sibling page /t/accountability-partner-agreement does the clause-by-clause reading: seven clauses, seven files. That framing is useful when the question is 'what does the agreement actually commit me to day by day.' This page takes the prior question: is there a contract here at all, and if so, by which classical elements? That question is what a lawyer would ask first, and it has a more interesting answer here than on any fillable-PDF site because the implementation is visible and unambiguous. Each of the four elements is a specific, checkable thing in the repo, not a paragraph of boilerplate.",
  },
  {
    q: "Is the contract unilateral or bilateral?",
    a: "Bilateral. Both parties make promises to each other, each promise is the consideration for the other's, and performance is symmetric. An example of a unilateral contract would be 'I will pay anyone who finds my lost dog' — only one side makes a promise, the other side earns the reward by performing the act. An example of a bilateral contract is 'I will pay you this salary, and you will work on this team' — both make promises, both have duties. The partnership on this site is squarely bilateral: each partner promises to open the same Meet URL at the daily time, and each partner's promise is the consideration for the other's. The matcher's scoring function, at src/app/api/auto-match/route.ts, makes this concrete by ranking only on symmetric attributes: sessionMatch, bothOld, readyScore, timezone offsets. It has no asymmetric fields.",
  },
  {
    q: "Where does this leave anything about meditation technique?",
    a: "Out of scope, by design. This page is entirely about the form of the contract that governs the partnership infrastructure: who meets whom, how consent is recorded, how presence is measured, how exit works. It does not cover any aspect of how to practice, how to sit, or how to handle what arises in a session. Those questions are operational, and the only honest answer is that they belong to the living tradition, not to a web product. For anything technique-related, the redirect is dhamma.org and a conversation with an authorized assistant teacher at a 10-day residential course. Nothing on this site will teach you to meditate, and nothing in the contract described here pretends to.",
  },
];

const elementBento: BentoCard[] = [
  {
    title: "Element 1. Offer",
    description:
      "The confirmation email is the offer. Its two URLs (/api/confirm-match?response=yes and &response=no) are the specific terms. The email template lives at src/lib/emails.ts:330, the yes URL is built on line 345, the no URL on line 346. The offer is open for 72 hours.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Element 2. Acceptance",
    description:
      "A GET request to the yes URL. The handler at src/app/api/confirm-match/route.ts line 20 reads token and response from searchParams, validates, and records the single side's yes. Two acceptances required, one from each party, each a separate browser click.",
  },
  {
    title: "Element 3. Consideration",
    description:
      "Presence, written as rows in the meet_clicks table. Every call to /meet/<token> triggers an INSERT at src/app/meet/[token]/route.ts lines 26 to 29. The row (token, match_id, person_id, meet_url, ip, user_agent) is the payment each partner renders to the other.",
    size: "2x1",
  },
  {
    title: "Element 4. Mutual assent",
    description:
      "A single SQL boolean AND. confirmMatchPerson at src/lib/db.ts line 496 returns { bothConfirmed: !!(m?.person_a_confirmed && m?.person_b_confirmed) }. When that returns true, and only then, does the contract form.",
  },
  {
    title: "Element 5. Capacity (informally)",
    description:
      "Addressed by the disclaimer at src/app/disclaimer/page.tsx:60. Signups with relevant mental-health history are asked to consult a professional before committing. No capacity database column; the disclaimer carries the weight.",
  },
  {
    title: "Element 6. Lawful purpose",
    description:
      "Sitting in silence over Google Meet is not a regulated activity. The product refuses scopes it cannot legally enforce (coaching, therapy, technique instruction). Out-of-scope requests are redirected to dhamma.org and authorized teachers.",
  },
];

const contractTokens = [
  "matches.status = 'confirming'",
  "token = crypto.randomUUID()",
  "response=yes",
  "confirmMatchPerson(matchId, side)",
  "bothConfirmed = person_a_confirmed AND person_b_confirmed",
  "INSERT INTO meet_clicks",
  "recurrence: ['RRULE:FREQ=DAILY']",
  "UPDATE matches SET status='ended'",
  "expireStaleMatches(3)",
  "replyTo: [personA.email, personB.email]",
];

const lifecycleSteps = [
  {
    title: "Pre-contract: the matcher assembles the offer",
    description:
      "auto-match/route.ts runs on a 30-minute cron. It scores pairs, picks one, writes a row to matches with status='confirming', generates two UUID tokens (person_a_token, person_b_token), and hands the pair off to the email sender. No Meet URL yet. No meet_links rows yet. Only an offer in flight.",
  },
  {
    title: "Offer: two confirmation emails",
    description:
      "Each side gets a confirmation email with buildConfirmationEmailHtml (src/lib/emails.ts:330). The body contains two buttons: yes and no. The yes button links to /api/confirm-match?token=<theirToken>&response=yes. That URL is the literal terms of the offer. The 72-hour window is stated italicized on line 376.",
  },
  {
    title: "Acceptance 1: the first yes click",
    description:
      "The recipient clicks yes. The handler at confirm-match/route.ts:20 reads the token, looks up the match, identifies which side (a or b), and calls confirmMatchPerson. That sets person_a_confirmed or person_b_confirmed to true, reads back, and returns { bothConfirmed: false } because only one side has clicked. No Meet URL is created yet. The first party has accepted; the contract has not formed.",
  },
  {
    title: "Formation: the second yes click",
    description:
      "The second party clicks yes. Same handler, same confirmMatchPerson. This time the SELECT on line 494 returns both booleans as true. The expression on line 496 evaluates to true. bothConfirmed is returned true to the route handler, which enters the if-branch at confirm-match/route.ts:59. The Meet URL is generated, two meet_links rows are inserted, the calendar event is created with RRULE:FREQ=DAILY, and the intro email is sent. The contract is now in force.",
  },
  {
    title: "Performance: daily presence, written to meet_clicks",
    description:
      "From formation onward, each partner's consideration is a row in meet_clicks. They open the Meet via their per-person tracking URL, which hits /meet/<token>, which INSERTs the row at lines 26 to 29, and redirects them to the real Meet URL. Two rows a day, at roughly the same wall-clock time, under the same match_id. That is the ambient performance signal.",
  },
  {
    title: "Termination: rescission or non-performance",
    description:
      "Either party can rescind by clicking unsubscribe. One SQL UPDATE at unsubscribe/route.ts:59 ends every active match for that person in one pass. Alternatively, both sides stop performing (no meet_clicks rows for days), the operator notices, the pair is quietly ended on the dashboard. In either case, the remaining party returns to 'ready' and is eligible for a new match that the matcher will not pair with the former partner.",
  },
];

const contractComparisonRows: ComparisonRow[] = [
  {
    feature: "Form factor",
    competitor: "A printable PDF or Google Doc with name, goal, cadence, consequences, and signature fields.",
    ours: "No form factor. The contract is distributed across a URL scheme, an INSERT statement, and one SQL boolean column pair.",
  },
  {
    feature: "Who is the offeror",
    competitor: "Both partners draft together; there is no clear offeror or offeree.",
    ours: "The matcher is the offeror. Each confirmation email is a separate offer to one party, with matching terms.",
  },
  {
    feature: "What the acceptance looks like",
    competitor: "Two handwritten signatures.",
    ours: "Two GET requests to /api/confirm-match?token=...&response=yes. The browser's User-Agent and IP are the acceptance metadata.",
  },
  {
    feature: "What the consideration is",
    competitor: "Sometimes money (for coaches). Often nothing — 'mutual support' is not legally sufficient consideration.",
    ours: "Rows in meet_clicks, one per partner per day. A recorded, tied-to-match_id act of showing up.",
  },
  {
    feature: "Where mutual assent is recorded",
    competitor: "The two signatures, side by side at the bottom of the PDF.",
    ours: "One SQL boolean AND: !!(person_a_confirmed && person_b_confirmed), computed in confirmMatchPerson at src/lib/db.ts:496.",
  },
  {
    feature: "What happens on breach",
    competitor: "Nothing enforceable. The PDF was never admissible anyway.",
    ours: "The other party sees an empty Meet room. Silence in meet_clicks surfaces on the operator dashboard. Remedy is rematch, not damages.",
  },
  {
    feature: "Termination mechanism",
    competitor: "A conversation. Sometimes a follow-up email.",
    ours: "One click on the unsubscribe footer. One SQL UPDATE. Every active match for that person ends in the same transaction.",
  },
  {
    feature: "Archival",
    competitor: "A scanned image of the signed PDF, sitting in one or both parties' Drive.",
    ours: "Every state transition is a row in vipassana_activity_log with triggered_by, event_type, timestamps, and notes. Queryable, not paginated.",
  },
];

const mutualAssentSnippet = `// src/lib/db.ts lines 487 to 496 — the meeting of the minds, as a SQL AND
export async function confirmMatchPerson(
  matchId: string,
  side: "a" | "b",
): Promise<{ bothConfirmed: boolean }> {
  const sql = neon(process.env.DATABASE_URL!);
  if (side === "a") {
    await sql\`UPDATE matches SET person_a_confirmed = true WHERE id = \${matchId}\`;
  } else {
    await sql\`UPDATE matches SET person_b_confirmed = true WHERE id = \${matchId}\`;
  }
  const rows = await sql\`SELECT person_a_confirmed, person_b_confirmed FROM matches WHERE id = \${matchId}\`;
  const m = rows[0] as { person_a_confirmed: boolean; person_b_confirmed: boolean } | undefined;
  return { bothConfirmed: !!(m?.person_a_confirmed && m?.person_b_confirmed) };
  //                        ^^^^ the meeting of the minds is this AND.
}`;

const acceptanceSnippet = `// src/app/api/confirm-match/route.ts lines 20 to 57 — the acceptance handler
export async function GET(request: NextRequest) {
  const token    = request.nextUrl.searchParams.get("token");
  const response = request.nextUrl.searchParams.get("response");

  if (!token || (response !== "yes" && response !== "no")) {
    return NextResponse.redirect(new URL("/match-confirmed?response=error", BASE_URL));
  }

  const match = await getMatchByToken(token);
  if (!match || match.status !== "confirming") {
    return NextResponse.redirect(new URL("/match-confirmed?response=error", BASE_URL));
  }

  const isA = match.person_a_token === token;
  const side = isA ? "a" : "b";

  // ... handle response === "no" (decline) ...

  // response === "yes" — record this side's acceptance
  await updateEntryStatus(confirmerId, "engaged", "user_click", match.id, "clicked yes on confirmation");
  const { bothConfirmed } = await confirmMatchPerson(match.id, side);
  //      ^^^^^^^^^^^^^^ if true, the contract forms inside this request.

  if (bothConfirmed) { /* generate Meet URL, insert meet_links, send intro */ }
}`;

const considerationSnippet = `// src/app/meet/[token]/route.ts lines 1 to 32 — consideration, paid daily
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const sql = neon(process.env.DATABASE_URL!);

  const rows = await sql\`
    SELECT meet_url, match_id, person_id FROM meet_links WHERE token = \${token}
  \`;
  if (rows.length === 0) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  const { meet_url, match_id, person_id } = rows[0];

  // The consideration: one row, every click, forever.
  const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  await sql\`
    INSERT INTO meet_clicks (token, match_id, person_id, meet_url, ip, user_agent)
    VALUES (\${token}, \${match_id}, \${person_id}, \${meet_url as string}, \${ip}, \${userAgent})
  \`;

  return NextResponse.redirect(meet_url as string);
}`;

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Accountability Partner Contract" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Accountability Partner Contract", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Accountability Partner Contract: The Four Legal Elements, Each a Line of Code",
    description:
      "The contract has four classical elements and each resolves to a specific URL, INSERT, or boolean in the repo. The meeting of the minds is a SQL AND.",
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
          The contract, by its classical elements
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Accountability partner contract:{" "}
          <GradientText>the four legal elements, each a line of code</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every template you will find for this phrase is a fillable PDF.
          On this site there is no PDF and nothing is signed. The contract
          has four classical elements (offer, acceptance, consideration,
          mutual assent) and each one resolves to a specific URL, INSERT
          statement, or SQL boolean in the repo. The meeting of the minds
          is a single AND on two columns. The consideration is a row in a
          table. The offer is two links. The acceptance is two GET
          requests.
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
            "Every contract element tied to a file path and line number in a public repo",
            "Free, in the dana tradition; no fee is the consideration, presence is",
            "No operational practice instruction; technique goes through dhamma.org",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="The contract has four elements, zero signatures"
              subtitle="Offer, acceptance, consideration, mutual assent. Each is code."
              captions={[
                "Offer: two URLs in a confirmation email, open for 72 hours.",
                "Acceptance: two GET requests, one per party.",
                "Consideration: a row in meet_clicks, every time you click.",
                "Mutual assent: bothConfirmed = person_a_confirmed AND person_b_confirmed.",
                "Formation at the instant that boolean flips true.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The contract in four numbers
        </h2>
        <p className="text-zinc-600 mb-6">
          A paper contract has blanks and signatures. A code-enforced
          contract has columns and booleans. The four numbers that
          describe it.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 4,
              label: "classical elements, each mapped to one file and one line",
            },
            {
              value: 1,
              label: "SQL AND that determines whether the contract has formed",
            },
            {
              value: 2,
              label: "GET requests required for formation, one from each party",
            },
            {
              value: 0,
              label: "signatures, PDFs, or notarized pages in the flow",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What every other guide on this topic actually gives you
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          I read the pages that come up first for this phrase. Almost all
          of them are a PDF with blanks, or a page instructing you to
          build one. A title, two name fields, a shared goal, a cadence,
          a missed-session penalty, and two signature lines. The best
          ones add a review clause and a grace period. The worst are a
          bullet list pretending to be a document.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          Templates like that work for two people trying to invent a
          partnership from scratch, where neither the cadence, nor the
          goal, nor the consequences are predetermined. On a product
          where all of those are already fixed, a template is
          redundant. What a template asks partners to fill in, the
          product already has filled in: daily cadence (RRULE:FREQ=DAILY),
          one permanent Meet URL, a one-click exit, a 72-hour
          confirmation window. So instead of writing out a template this
          page describes the shape of the contract that actually forms,
          in terms a contract lawyer would recognize.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Offer, acceptance, consideration, mutual assent — visualized
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The left side of this diagram is the pre-contract state. The
          hub is the handler that evaluates mutual assent. The right
          side is what comes into being the instant the boolean flips.
        </p>
        <AnimatedBeam
          title="confirm-match route, as the contract-formation hub"
          from={[
            {
              label: "Offer (email to A)",
              sublabel: "yesUrl + noUrl, 72h open",
            },
            {
              label: "Offer (email to B)",
              sublabel: "yesUrl + noUrl, 72h open",
            },
            {
              label: "Acceptance 1",
              sublabel: "GET response=yes, side=a",
            },
            {
              label: "Acceptance 2",
              sublabel: "GET response=yes, side=b",
            },
          ]}
          hub={{
            label: "confirmMatchPerson",
            sublabel: "returns bothConfirmed boolean",
          }}
          to={[
            {
              label: "Meet URL created",
              sublabel: "createMeetEvent, RRULE:FREQ=DAILY",
            },
            {
              label: "meet_links rows inserted",
              sublabel: "one per party, each with its own token",
            },
            {
              label: "Intro email sent",
              sublabel: "replyTo = [A, B]",
            },
            {
              label: "matches.status = pending",
              sublabel: "contract in force",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The four elements (plus two), each mapped to one file
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each card names one classical element of a contract, and
          points at the exact place in the repo where it is
          implemented. Every one of these references is checkable
          against the code that runs in production.
        </p>
        <BentoGrid cards={elementBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Mutual assent, in code
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This is the anchor fact of the whole page. In classical
          contract doctrine, the meeting of the minds is a mental
          event, inferred from words and conduct. In this system it is
          a literal boolean: two columns in the{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]">
            matches
          </code>{" "}
          row, an AND on those columns, and a return value. When the
          AND returns true, the contract forms. When it returns false,
          the contract has not formed yet.
        </p>
        <AnimatedCodeBlock
          code={mutualAssentSnippet}
          language="typescript"
          filename="src/lib/db.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Acceptance, in code
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          An acceptance is a GET request. No fancier than that. The
          token identifies the party and the side, the response=yes
          parameter is the content of the acceptance. The same handler
          services both parties, on whatever order the clicks arrive.
          On the second call, the inner conditional runs, and the
          contract forms inside the same HTTP request.
        </p>
        <AnimatedCodeBlock
          code={acceptanceSnippet}
          language="typescript"
          filename="src/app/api/confirm-match/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Consideration, in code
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          No money changes hands here, so the consideration cannot be
          cash. It is presence. Each party&apos;s consideration to the
          other is a row in{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]">
            meet_clicks
          </code>
          , produced by the act of opening the shared Meet room. The
          INSERT below is the entire payment rail. Two rows a day on
          the same match_id is the full bilateral exchange.
        </p>
        <AnimatedCodeBlock
          code={considerationSnippet}
          language="typescript"
          filename="src/app/meet/[token]/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Formation, diagrammed
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The sequence of the second yes click, from the partner&apos;s
          browser through the confirm-match handler, to Postgres, to
          Google Calendar, to Resend. The contract exists only after
          all of these have run, in order, in a single request.
        </p>
        <SequenceDiagram
          title="the second yes click, expanded"
          actors={["Partner", "confirm-match", "Postgres", "Google Calendar", "Resend"]}
          messages={[
            { from: 0, to: 1, label: "GET ?token=X&response=yes", type: "request" },
            { from: 1, to: 2, label: "UPDATE person_b_confirmed=true", type: "request" },
            { from: 2, to: 1, label: "bothConfirmed=true", type: "response" },
            { from: 1, to: 3, label: "POST events, recurrence=DAILY", type: "request" },
            { from: 3, to: 1, label: "meetUrl + eventId", type: "response" },
            { from: 1, to: 2, label: "INSERT 2 rows meet_links", type: "request" },
            { from: 1, to: 4, label: "send intro email, replyTo=[A,B]", type: "event" },
            { from: 1, to: 0, label: "redirect /match-confirmed", type: "response" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The full lifecycle of the contract
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Pre-contract, offer, two acceptances, formation,
          performance, termination. Every contract has these phases. In
          a paper world, phase transitions are events on a calendar. In
          this product they are values the{" "}
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
              The contract forms on <span className="font-mono text-teal-700">bothConfirmed === true</span>
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Classical doctrine says a contract forms at the moment of
              mutual assent. This product says the same thing, in code.
              The moment is the{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={496} />
              </span>
              th line of{" "}
              <span className="font-mono text-teal-700">src/lib/db.ts</span>,
              inside{" "}
              <span className="font-mono text-teal-700">confirmMatchPerson</span>.
              Two boolean columns,{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={1} />
              </span>{" "}
              AND, and the return value is handed back to the route
              handler, which decides whether to do nothing (and wait
              for the other side) or to proceed with{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={4} />
              </span>{" "}
              side effects: create the Meet URL, insert two
              meet_links rows, set the calendar recurrence, send the
              intro email. Nothing forms before that AND. Everything
              forms in the same request that makes it true.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              If you want to inspect the contract at any time after
              formation, read{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
                vipassana_activity_log
              </code>
              . Each state transition gets one row with{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
                event_type
              </code>
              ,{" "}
              <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
                triggered_by
              </code>
              , and a note. That table is the archival copy.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="Template contract vs. code-enforced contract"
          productName="vipassana.cool"
          competitorName="Paper / PDF / Google Doc template"
          rows={contractComparisonRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="bothConfirmed = !!(m?.person_a_confirmed && m?.person_b_confirmed)"
          source="the literal return of confirmMatchPerson at src/lib/db.ts line 496 — the meeting of the minds, in SQL"
          metric="1 AND"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The vocabulary the runtime speaks
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A paper contract uses words like <em>undertake</em>,{" "}
          <em>covenant</em>, <em>whereas</em>, and <em>party of the second part</em>.
          The contract on this site uses these tokens instead. Every
          one of them is something the runtime can evaluate on its
          own, without asking a human.
        </p>
        <Marquee speed={45}>
          {contractTokens.map((t, i) => (
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
          Why the contract is deliberately this thin
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          A fatter contract with declared goals, weekly check-ins, and
          scheduled consequences would be a richer document. It would
          also be the wrong document. The lineage this product orbits
          is Goenka-style Vipassana, taught on a donation basis by
          authorized assistant teachers at 10-day residential courses
          run through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . The teaching of technique is not something a web product
          can legitimately do. What a web product can do, legitimately,
          is help two meditators reliably open the same Meet room at
          the same time every day and record that they did. That, and
          exactly that, is the subject matter of this contract. A wider
          scope would have the product impersonating a teacher it is
          not authorized to impersonate.
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
          and an authorized assistant teacher in person, at a course.
          The four elements on this page cover only the form of the
          partnership contract. The practice itself is a separate,
          older, and much larger undertaking with a lineage.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to watch the contract actually form on a test signup?"
        description="Book a short call. We'll walk through the offer email, both yes clicks, the bothConfirmed boolean flipping true, and the Meet URL appearing, live."
        section="accountability-partner-contract-footer"
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
            href="/t/accountability-partner-agreement"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            The agreement: seven clauses, seven files
          </Link>
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
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the product this page describes
          </Link>
          <Link
            href="/terms"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Terms of service (the background contract with the site)
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Walk through the four elements with the operator."
        section="accountability-partner-contract-sticky"
      />
    </article>
  );
}
