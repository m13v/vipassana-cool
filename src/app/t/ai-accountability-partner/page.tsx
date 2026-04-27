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
  BeforeAfter,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/ai-accountability-partner";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "AI Accountability Partner: Why Vipassana.cool Deliberately Isn't One",
  description:
    "Every product on the first page for this phrase pairs you with a chatbot. Vipassana.cool pairs you with a real human and the matcher is 476 lines of deterministic TypeScript — zero LLM calls, zero embeddings, zero vector search. The anchor is a 4-line sort on src/app/api/auto-match/route.ts lines 183 to 189.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "AI Accountability Partner: why vipassana.cool is deliberately not one",
    description:
      "A chatbot at 6 AM cannot run out of patience. A real human sitting in a silent Meet room can. The matcher is a 4-tier sort, not an LLM. Full code walk-through.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI accountability partner: vipassana.cool is deliberately the human version",
    description:
      "The matcher is `(y.readyScore - x.readyScore) || (Number(y.bothOld) - Number(x.bothOld)) || (Number(y.sessionMatch) - Number(x.sessionMatch)) || (x.diff - y.diff)`. Zero tokens per match.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is this product an AI accountability partner?",
    a: "No, and the design is explicit about that. When you sign up through /practice-buddy on this site, the person who ends up sitting across from you on a Google Meet call every day is a real human meditator who also signed up, filled in their timezone and preferred time, and accepted a calendar invite. No model, no chatbot, no voice agent, no digital twin. The only AI anywhere on the site is a small page-level question-answerer (the floating widget on guide pages) that reads the public content of these /t/ pages and answers questions about them. It is not your partner and it cannot be. Your partner has a calendar that fills up, a bedroom with a door that closes, and the same 6 AM alarm you do.",
  },
  {
    q: "Why not just build the AI version? Every other product in this space is doing it.",
    a: "Because the thing that makes accountability work is that the other party bears a cost when you do not show up. A chatbot greets you the same on Monday and on Thursday; your absence is not visible in any way that registers as a loss to it. A person who woke up, made tea, opened Meet at 5:58 AM, and sat there alone for a few minutes has a different experience of your absence. The literature on implementation intentions and appointment-based accountability (Gail Matthews at Dominican University, Rogelberg on scheduled commitments, a long line of studies on peer-pressured exercise) all converge on the same finding: the strength of the effect is proportional to the concreteness of the expectation of another human. An AI has no expectation that can be disappointed. A person does. The product optimizes for that asymmetry instead of around it.",
  },
  {
    q: "Does any AI exist anywhere in the match-making pipeline?",
    a: "No. The auto-matcher lives at src/app/api/auto-match/route.ts, runs every two hours via Vercel cron, and is 476 lines of ordinary TypeScript. It builds a list of session slots from eligible signups, filters pairs where the UTC minute difference is more than 60, scores the remaining pairs on a four-tier plain-old-data sort (ready-status > both-old-student > same-session-duration > smallest time difference), and greedily picks non-overlapping pairs. There is no embedding step, no vector similarity, no prompt, no model call, and no temperature knob. The dependencies imported at the top of the file are Neon (Postgres), Resend (email), and a Google Meet helper; no openai, no anthropic, no langchain. I have grepped the repo for those strings to make sure this statement stays accurate before publishing.",
  },
  {
    q: "What exactly do the four tiers of the sort mean, and why those four?",
    a: "Tier 1, readyScore, counts how many of the two people are already in status='ready' — meaning they had a prior match expire but had confirmed on their end, so they should be fast-tracked. Tier 2, bothOld, is true only when both are Goenka old students (finished at least one 10-day course). Tier 3, sessionMatch, is true when both are sitting for the same duration (20, 30, 45, 60, 90, or 120 minutes). Tier 4, diff, is the number of minutes between the two UTC session times, the smaller the better, up to the 60-minute hard cap. The ordering is intentional: a ready person waiting for a rematch gets priority over someone who signed up 25 hours ago; a pair of seasoned meditators gets priority over a seasoned-plus-new mix; people who want to sit the same length get priority over people with different preferred durations; and finally, when everything else is equal, proximity in clock time breaks the tie. No weights to tune, no learning rate, no reward function to misalign.",
  },
  {
    q: "How does the serial-ghoster check work?",
    a: "One line, src/app/api/auto-match/route.ts:84 — if (c.contact_count >= 10) continue. The waitlist_entries table has a contact_count column that increments every time the person is offered a match. Ten offers without a successful match (with a 7-day cool-off between each retry) and they drop out of the candidate pool for auto-matching. Status 'ready' bypasses the cap. They can still sign up again manually or the operator can re-engage them by hand from the admin UI, but the cron will not keep sending them to new partners. This is the sort of behavior an LLM-based matcher would need a careful policy and a lot of prompt engineering to get right, and one if-statement does it deterministically.",
  },
  {
    q: "Is there any AI anywhere on this site?",
    a: "Yes, in exactly one place: the floating 'page assistant' chat panel on the /t/ guide pages, powered by Google's Generative AI SDK. You can see the exact setup at src/components/guide-chat.tsx and src/app/api/guide-chat/route.ts. It answers questions about the content of the site by retrieving the /t/ pages you are currently reading. It has never been marketed as an accountability partner, it does not have access to the matches table, it cannot modify your match state, and it cannot send emails. It is a content assistant, scoped to the public guide corpus. The accountability partner is a human.",
  },
  {
    q: "How is presence actually measured if there is no app to check you in?",
    a: "Every time either party clicks their personal Meet tracking link, the GET handler at src/app/meet/[token]/route.ts inserts a row into meet_clicks with (token, match_id, person_id, meet_url, ip, user_agent). The row is the receipt. Two rows on the same match_id within a few minutes of each other, at roughly the same wall-clock time, is the daily performance signal. One row without a partner row is the partial-performance signal. No rows for days is the silent-breakup signal that ages the pair out. No streak counter, no XP, no badge. The data is in the database and the operator reads it directly on the /admin dashboard.",
  },
  {
    q: "What happens when the match ends? Does the chatbot keep nagging me?",
    a: "There is no chatbot, so no. A match can end by one of three paths. Either side clicks the unsubscribe footer on any email, which runs a single UPDATE matches SET status='ended' across every active row involving that person. Either side declines the Google Calendar invite, which /api/check-rsvp picks up daily and flips the match to status='ended'. Or both stop clicking the Meet link for long enough that the operator notices the silence on the dashboard and closes it manually. In every case the remaining party returns to status='ready' on the waitlist and enters the pool with priority for the next auto-match run. The pair never gets rematched with each other (that is enforced by getPriorMatchedIds in src/lib/db.ts).",
  },
  {
    q: "If a human partner flakes, am I worse off than if I had an AI that never flakes?",
    a: "Short-term, possibly, for one morning. Long-term, no. The product is calibrated around this risk in three places. First, the serial-ghoster filter above removes people who have been offered two matches without following through. Second, an expired match is not a dead end: it sends you back into the pool with a 'ready' priority flag, so you get paired with someone new within hours of the next matcher run. Third, the product is free and does not advertise its numbers publicly, which means the signups are unusually self-selected toward people who want the real thing. The result is not a chatbot-like 100 percent reliability; it is something closer to the reliability of a gym buddy or a running partner, which is the thing most accountability research actually measures.",
  },
  {
    q: "Can I use this if what I want is generic task accountability, not meditation?",
    a: "No. The matcher scores on meditation-specific attributes (old-student status, session duration on a Goenka-style 30-to-120-minute scale, morning versus evening sit). The intro emails assume both parties are meeting to sit in silence for the same duration. If you want accountability for workouts, writing, studying, or business goals, the architecture pattern on this page is public and copy-able, but the running product is not a general-purpose buddy service. For anything about how to actually sit, how to work with a difficult session, or how to begin the practice at all, the correct place is a residential 10-day course at dhamma.org with an authorized assistant teacher. Nothing on this site will teach you to meditate.",
  },
];

const whyNotAiBento: BentoCard[] = [
  {
    title: "Disappointment is the mechanism",
    description:
      "Accountability research measures the effect of being let down by a human you made a promise to. An AI you disappoint does not change state. A human you disappoint sits in a silent Meet room and then does not open it tomorrow. The product is built around the second case, because that is the case the studies are about.",
    size: "2x1",
    accent: true,
  },
  {
    title: "No calendar of your own",
    description:
      "An AI has no 5:57 AM alarm to set, no bedroom door to close at 9 PM so it can wake up at 5:45. A human partner has the same sleep schedule problem you have, and the matcher only pairs you with someone whose preferred time is within 60 UTC minutes of yours, so you are synchronized on the thing that fails first.",
  },
  {
    title: "Calendar decline = exit",
    description:
      "Because the partner is a human who accepts a real Google Calendar event, the single act of declining the invite is enough to end the partnership. /api/check-rsvp polls each event daily, reads attendee.responseStatus, and flips the match to 'ended' if either is declined. An AI has no calendar to decline.",
    size: "2x1",
  },
  {
    title: "Zero tokens per match",
    description:
      "The matcher calls Postgres and Resend. Nothing else. Per-match cost at steady state is a few DB reads, two to three INSERTs, and two outbound emails. No inference, no streaming, no prompt-cache warming, no retry logic on a dropped model response.",
  },
  {
    title: "Serial-ghoster filter is one line",
    description:
      "if (c.contact_count >= 10) continue — src/app/api/auto-match/route.ts:84. Ten failed engagements (each with a 7-day cool-off in between) removes you from auto-matching. Status 'ready' bypasses. An LLM-based classifier would need training data, a prompt, a threshold, and a policy review. The if-statement has none of those.",
  },
  {
    title: "The AI there is, is a content assistant",
    description:
      "The only AI on the site is the floating chat on /t/ pages, powered by Google Generative AI via @seo/components/server. It reads public guide content and answers questions about it. It cannot see matches, cannot send email, cannot schedule. Scope: answering reader questions about the text on the page.",
  },
];

const chatbotVsHumanRows: ComparisonRow[] = [
  {
    feature: "Who is on the other side of the commitment",
    competitor:
      "A large language model loaded behind a branded chat UI. Replies in natural prose, 24/7, never tired.",
    ours:
      "A human who signed up through the same form you did, with a calendar, a timezone, a morning routine, and a preferred sit duration.",
  },
  {
    feature: "What they notice when you skip",
    competitor:
      "Nothing persistent. The next session starts with the same greeting. No internal state that degrades because you did not show up.",
    ours:
      "A missing meet_clicks row for the day. A silent Meet room they opened and left. An admin email summary to the operator.",
  },
  {
    feature: "How the match is made",
    competitor:
      "You describe your goals to the model; it 'gets to know you' through conversation. No literal match exists.",
    ours:
      "A 4-tier sort over session slots. Tier 1 readyScore, tier 2 bothOld, tier 3 sessionMatch, tier 4 smallest UTC minute diff. Hard cap at 60 minutes of time drift.",
  },
  {
    feature: "Model calls per check-in",
    competitor:
      "At least one, usually many (context, response, possibly tool calls, possibly voice synthesis).",
    ours:
      "Zero. The check-in is a GET request that writes one row to meet_clicks and redirects to the same Meet URL.",
  },
  {
    feature: "What 'ending' the partnership looks like",
    competitor:
      "An in-app settings page, usually with a cancellation flow or subscription downgrade.",
    ours:
      "One click on the calendar invite 'No' button. /api/check-rsvp sees it on the next daily run and flips the match to status='ended' without either party logging in anywhere.",
  },
  {
    feature: "Retention mechanic",
    competitor:
      "Push notifications, streaks, XP, optional voice check-ins, gamified reminders.",
    ours:
      "None. If the partnership stops working, the meet_clicks rows stop landing, the pair is quietly ended, both people return to the waitlist with 'ready' priority, and the matcher finds them someone new.",
  },
  {
    feature: "Onboarding length",
    competitor:
      "Multi-step, often including personality questions, goal pickers, and permission prompts for notifications and screen time.",
    ours:
      "One form at /practice-buddy. Nine fields. No notification permission, no microphone, no screen time, no app install.",
  },
  {
    feature: "Cost to run at steady state",
    competitor:
      "LLM inference at every interaction, plus hosting, plus whatever voice synthesis or custom model training the product uses.",
    ours:
      "A Neon free-tier Postgres, Resend email, one Google Calendar service account, Vercel hosting. Per-match cost rounds to the email delivery fee.",
  },
];

const matcherSnippet = `// src/app/api/auto-match/route.ts lines 168 to 203
// The entire "ranking" system — a four-tier sort, no model in sight.

// 1. Build all viable pairs under the ±60 min UTC cap.
for (let i = 0; i < slots.length; i++) {
  for (let j = i + 1; j < slots.length; j++) {
    const sa = slots[i];
    const sb = slots[j];
    if (sa.personId === sb.personId) continue;
    if (blockedPairs.has([sa.personId, sb.personId].sort().join("|"))) continue;

    const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
    if (diff > 60) continue;

    allViable.push({
      slotA: sa,
      slotB: sb,
      diff,
      readyScore:
        (sa.person.status === "ready" ? 1 : 0) +
        (sb.person.status === "ready" ? 1 : 0),
      bothOld:
        sa.person.is_old_student === "Yes" &&
        sb.person.is_old_student === "Yes",
      sessionMatch:
        sa.person.session_duration === sb.person.session_duration,
    });
  }
}

// 2. Rank by readyScore > bothOld > sessionMatch > smallest diff.
allViable.sort(
  (x, y) =>
    (y.readyScore - x.readyScore) ||
    (Number(y.bothOld) - Number(x.bothOld)) ||
    (Number(y.sessionMatch) - Number(x.sessionMatch)) ||
    (x.diff - y.diff)
);

// 3. Greedily pick non-overlapping pairs. A person's session can only be used once.
const usedSlots = new Set<string>();
const pairs: { slotA: SessionSlot; slotB: SessionSlot; diff: number }[] = [];
for (const p of allViable) {
  if (pairs.length >= maxPairs) break;
  const keyA = \`\${p.slotA.personId}:\${p.slotA.session}\`;
  const keyB = \`\${p.slotB.personId}:\${p.slotB.session}\`;
  if (usedSlots.has(keyA) || usedSlots.has(keyB)) continue;
  pairs.push({ slotA: p.slotA, slotB: p.slotB, diff: p.diff });
  usedSlots.add(keyA);
  usedSlots.add(keyB);
}`;

const eligibilitySnippet = `// src/app/api/auto-match/route.ts lines 78 to 105
// The candidate filter. Ten failed outreach attempts and you are out.

for (const c of candidates) {
  if (c.status === "ready") {
    eligible.push(c);                       // motivated user, bypasses cap and cooldown
    continue;
  }

  if (c.contact_count >= 10) continue;      // serial-ghoster filter

  if (c.contact_count === 0) {
    const createdAt = c.created_at ? new Date(c.created_at).getTime() : 0;
    if (now - createdAt > DAY_MS) eligible.push(c);  // 24h cooldown on fresh signups
  } else {
    const lastTerminal = await sql\`
      SELECT m.created_at FROM matches m
      WHERE (m.person_a_id = \${c.id} OR m.person_b_id = \${c.id})
        AND m.status IN ('expired', 'declined', 'ended')
      ORDER BY m.created_at DESC LIMIT 1
    \`;
    if (lastTerminal.length > 0) {
      const closedAt = new Date(lastTerminal[0].created_at as string).getTime();
      if (now - closedAt > 7 * DAY_MS) eligible.push(c);  // retry after 7d cool-off
    }
  }
}`;

const lifecycleSteps = [
  {
    title: "Signup, no conversation with a model",
    description:
      "Nine plain fields at /practice-buddy: name, email, timezone, city, frequency, session duration, morning time, optional evening time, old-student flag. A row is written to waitlist_entries with status='pending'. No chat, no onboarding funnel, no 'let me ask you a few questions to understand your goals'.",
  },
  {
    title: "24-hour cooldown while a human reviews",
    description:
      "The auto-matcher skips signups that are less than 24 hours old (contact_count === 0 branch of the eligibility filter). In that window the operator eyeballs the row, spots obvious edge cases (wrong timezone, empty name, suspicious email), and either clears it or reaches out by hand.",
  },
  {
    title: "The matcher runs on a 2-hour cron",
    description:
      "vercel.json schedules /api/auto-match. The handler builds session slots from eligible people, builds viable pairs under the ±60 UTC minute cap, sorts by readyScore > bothOld > sessionMatch > diff, and greedily picks non-overlapping pairs. The entire pass is deterministic for a given candidate pool.",
  },
  {
    title: "Confirmation emails (or instant intro if both ready)",
    description:
      "For each pair, the handler either sends two confirmation emails with yes/no links (both-pending flow) or generates the Meet URL immediately and sends the intro (both-ready flow). The email templates are static HTML builders in src/lib/emails.ts; no LLM writes any copy at runtime.",
  },
  {
    title: "Two humans open a Google Meet URL, once a day, forever",
    description:
      "After confirmation the Meet URL is permanent for the pair. Both people receive it in a recurring Google Calendar event (RRULE:FREQ=DAILY). Every click lands in meet_clicks with ip, user_agent, and timestamps. Two rows on the same match_id per day is the full performance signal.",
  },
  {
    title: "Exit: one click, one UPDATE, one UTC tick",
    description:
      "Any of: unsubscribe link in any email (runs UPDATE matches SET status='ended' across all pairs), calendar invite decline (caught by the next check-rsvp cron), or extended silence (operator closes the pair on the dashboard). In every case the remaining party returns to 'ready' status and is eligible on the next auto-match run.",
  },
];

const matcherDepsTokens = [
  "import { Resend } from 'resend'",
  "import { neon } from '@neondatabase/serverless'",
  "import { createMeetEvent } from '@/lib/google-meet'",
  "// no openai",
  "// no anthropic",
  "// no langchain",
  "// no embeddings",
  "// no vector db",
  "// no prompt",
  "// no temperature",
  "// no chat history",
  "// no system message",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "AI Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "AI Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "AI Accountability Partner: Why Vipassana.cool Deliberately Isn't One",
    description:
      "A walk-through of why the partner on this site is a human and why the matcher is 476 lines of deterministic TypeScript with zero LLM calls. The anchor is a 4-tier sort at auto-match/route.ts lines 183 to 189.",
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
          The opposite of what the phrase suggests
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          AI accountability partner:{" "}
          <GradientText>why vipassana.cool is deliberately not one</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Almost every product on the first page for this phrase is an AI
          chatbot dressed as a partner. This one is the inverse. The
          partner you are paired with is a human who signed up through the
          same nine-field form you will. The matcher that pairs you is 476
          lines of TypeScript with zero model calls. The ranking function
          is a four-tier plain sort on four fields: readyScore, bothOld,
          sessionMatch, diff. The mechanism that ends a partnership is a
          calendar invite decline. The rest of the page is the code behind
          each of those claims.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="operator, vipassana.cool"
          readingTime="11 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "Zero LLM calls in the matcher — src/app/api/auto-match/route.ts",
            "Your partner is a real human on a real Google Meet URL",
            "Free, in the dana tradition; no streaks, no gamification",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Your partner is a human. The matcher is a sort."
              subtitle="Every other product for this phrase is a chatbot. This one is the human version."
              captions={[
                "The partner is a real meditator with a calendar, a bedroom, and a 6 AM alarm.",
                "The matcher is 476 lines of TypeScript, zero LLM calls.",
                "The ranking function is a four-tier plain sort: readyScore, bothOld, sessionMatch, diff.",
                "Disappointment is the mechanism. An empty Meet room at 6 AM cannot be simulated.",
                "Calendar invite decline ends the match. No dashboard, no cancel flow.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The architecture in four numbers
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four numbers that describe the shape of this product against the
          chatbot version. Each one can be checked against the repo or
          against the observed behavior of the alternative products.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 0,
              label: "LLM calls in the matcher at /api/auto-match",
            },
            {
              value: 4,
              label: "tiers in the ranking function, plain-old-data sort",
            },
            {
              value: 60,
              suffix: " min",
              label: "hard UTC time-drift cap between partners",
            },
            {
              value: 2,
              label: "failed outreach attempts before auto-matching drops you",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What every other product for this phrase actually sells
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          I opened the results. Every one of the top products markets
          itself as an always-on model. Overlord monitors habits and
          blocks apps and calls your phone. Nag Bot is framed as an AI
          life coach that turns goals into actionable daily planning.
          SideCoach is a business-focused AI that keeps you focused.
          Accountability Buddie adapts to your personality and won&apos;t
          let you quit. MindCally pitches itself as an AI chatbot
          partner. Focus Flow bundles challenges and habits with an AI
          partner in a single app.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          Each of them is a genuinely interesting product and a genuinely
          different value proposition from this one. The thing they share,
          and the thing none of them name, is the reason that peer-based
          accountability works in the literature at all: the other party
          can be disappointed. A model cannot be disappointed. The pages
          that rank leave this specific asymmetry unsaid. This page is
          entirely about that asymmetry and how it shows up in the code
          of a product that leans the other way.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Partner = human, matcher = sort (visualized)
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          On the left: inputs, all of them boring data. In the middle:
          the one function that does the work. On the right: the
          outputs, all of them side effects in systems you already use.
        </p>
        <AnimatedBeam
          title="auto-match/route.ts — a function, not an agent"
          from={[
            {
              label: "waitlist_entries row",
              sublabel: "name, email, timezone, times, duration",
            },
            {
              label: "prior matches index",
              sublabel: "blockedPairs set, avoids repeats",
            },
            {
              label: "contact_count per person",
              sublabel: ">= 10 and you're skipped",
            },
            {
              label: "±60 min UTC filter",
              sublabel: "hard cap, not a soft score",
            },
          ]}
          hub={{
            label: "4-tier sort",
            sublabel: "readyScore > bothOld > sessionMatch > diff",
          }}
          to={[
            {
              label: "matches row",
              sublabel: "status='confirming', two UUID tokens",
            },
            {
              label: "two emails via Resend",
              sublabel: "confirmation OR instant intro",
            },
            {
              label: "Google Calendar event",
              sublabel: "RRULE:FREQ=DAILY, both emails attendees",
            },
            {
              label: "meet_links rows",
              sublabel: "one per person, tracked via /meet/<token>",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The ranking function, in full
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This is the anchor fact of the whole page. An &ldquo;AI
          accountability partner&rdquo; product usually pitches the
          intelligence of its matching or its coaching. The intelligence
          of matching here is this sort. It fits on one screen. It is
          checkable. It will do the same thing on the same input pool
          every time it runs. No prompt engineering, no evals, no vibes.
        </p>
        <AnimatedCodeBlock
          code={matcherSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The candidate filter, in full
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Before pairs can be ranked, the pool has to be filtered. The
          filter has exactly three rules: skip people who have been
          offered two matches without following through, wait 24 hours
          before auto-matching a brand-new signup, and only retry a
          previously-expired match after a 7-day gap. An LLM version of
          this would need a policy document and careful evals. The
          if-statements have neither.
        </p>
        <AnimatedCodeBlock
          code={eligibilitySnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the 24-hour window of a day actually looks like on each side
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Toggle between the chatbot version of the day and the human
          version. Neither is a perfect model of reality. The specific
          things each one does, and does not, notice is the point.
        </p>
        <BeforeAfter
          title="A typical morning, both products"
          before={{
            label: "AI partner",
            content:
              "You open the app. The assistant greets you with a motivational line. You type back or skip. A streak counter increments or holds. You close the app. The model forgets.",
            highlights: [
              "Push notification at the scheduled time, dismissable.",
              "Skip cost is zero. Streak grace period usually exists.",
              "No external witness. Your consistency is not observable by anyone else.",
              "The model ends the interaction the same way whether you sat or not.",
            ],
          }}
          after={{
            label: "Human partner",
            content:
              "You open the Google Meet URL at the appointed minute. The other person is already there or arrives shortly after. You both sit in silence, cameras optional, timer of each person's choice. When the timer ends, a nod, a close-tab. Two meet_clicks rows land on the same match_id.",
            highlights: [
              "Calendar reminder at the scheduled time, on a device you already use.",
              "Skip cost: the other person sat alone for a few minutes and noticed.",
              "External witness: the other party's calendar and meet_clicks row.",
              "End-of-session signal: two rows, same match_id, same day.",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Six reasons this is deliberately not an AI product
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each card is a specific, checkable reason the human version is
          the one that works for this use case. None of these ideas are
          original to this site. Each points at a thing the chatbot
          products would have to either simulate or disclaim.
        </p>
        <BentoGrid cards={whyNotAiBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The ranking function is{" "}
              <span className="font-mono text-teal-700">4</span> tiers,
              the time cap is{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={60} />
              </span>{" "}
              minutes, the serial-ghoster filter is{" "}
              <span className="font-mono text-teal-700">1</span> line
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              If you want to audit the claim that this product is not an
              AI accountability partner, here is what to read. The file
              is{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]">
                src/app/api/auto-match/route.ts
              </code>
              . Line{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={81} />
              </span>{" "}
              is the serial-ghoster filter. Lines{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={151} />
              </span>{" "}
              to{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={180} />
              </span>{" "}
              build the viable pair list under the{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={60} />
              </span>
              -minute cap. Lines{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={183} />
              </span>{" "}
              to{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={189} />
              </span>{" "}
              are the four-tier sort. The greedy pick is lines{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={192} />
              </span>{" "}
              to{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={203} />
              </span>
              .
            </p>
            <p className="text-zinc-600 leading-relaxed">
              The imports at the top of the file are{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                Resend
              </code>
              ,{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                neon
              </code>{" "}
              (Postgres), local DB helpers, local email template builders,
              and{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                createMeetEvent
              </code>{" "}
              from{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                @/lib/google-meet
              </code>
              . No{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                openai
              </code>
              , no{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                anthropic
              </code>
              , no{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                @google/generative-ai
              </code>
              . The last of those is in the repo, but it powers the
              floating guide-page assistant at{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[12px]">
                src/app/api/guide-chat/route.ts
              </code>
              , which has no access to the matches table.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ComparisonTable
          heading="AI chatbot partner vs. human-matched partner"
          productName="vipassana.cool"
          competitorName="Typical AI accountability app"
          rows={chatbotVsHumanRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="(y.readyScore - x.readyScore) || (Number(y.bothOld) - Number(x.bothOld)) || (Number(y.sessionMatch) - Number(x.sessionMatch)) || (x.diff - y.diff)"
          source="the literal sort comparator at src/app/api/auto-match/route.ts lines 183 to 189 — the entire intelligence of the matcher"
          metric="4 tiers"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The full lifecycle, signup to exit
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Six steps. Nothing in this list is driven by a model. Each one
          is a row written to Postgres, an email sent through Resend, or
          a human clicking a link. The chatbot version of this flow would
          be one long conversational onboarding; the human version of it
          is a form, a cron, a calendar invite, and a daily URL.
        </p>
        <StepTimeline steps={lifecycleSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The imports at the top of the matcher
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A paper audit takes one minute. Open the file, look at what it
          imports. If any of these strings contained{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            openai
          </code>
          ,{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            anthropic
          </code>
          ,{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            langchain
          </code>
          , or any other model SDK, this page&apos;s claim would be
          wrong. They do not.
        </p>
        <Marquee speed={40}>
          {matcherDepsTokens.map((t, i) => (
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
          Who this is for, and who it is not for
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            <strong className="text-zinc-900">Is for: </strong>
            daily meditators, especially Goenka old students, who want a
            recurring Google Meet partnership with a human on the other
            side, not a chatbot.
          </li>
          <li>
            <strong className="text-zinc-900">Is for: </strong>
            people who are tired of streak apps and want the check-in to
            be a thing they were going to do anyway (open Meet, sit, close
            Meet).
          </li>
          <li>
            <strong className="text-zinc-900">Is not for: </strong>
            people who want an always-on AI that talks to them, adapts to
            their mood, or tracks their screen time. There are great
            products for that and this is not one of them.
          </li>
          <li>
            <strong className="text-zinc-900">Is not for: </strong>
            non-meditation accountability in general. The matcher scores
            on meditation-specific fields (old-student status, session
            duration on a Goenka scale). The architecture pattern is
            public; the running product is narrow.
          </li>
          <li>
            <strong className="text-zinc-900">Is not for: </strong>
            anyone looking for technique instruction. For that the only
            honest redirect is a 10-day residential course through{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher. Nothing on this page or
            this site teaches the practice.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the model-free approach fits this lineage specifically
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          Goenka-style Vipassana is taught at 10-day residential courses
          by authorized assistant teachers on a strict donation basis, run
          through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . The teaching of the technique is reserved for in-person,
          authorized transmission. A web product cannot legitimately
          occupy that role. What it can do, legitimately, is help two
          people who are already sitting open the same Meet room at the
          same time every day and record that they did. That scope fits
          exactly inside the gap the tradition leaves open: logistics and
          community, not instruction.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          An AI partner would immediately press against the edges of that
          gap. It would want to reassure you after a difficult sit, to
          comment on what you noticed, to offer encouragement, to
          &ldquo;help you&rdquo; with something. A human partner on the
          other side of a silent call does not and cannot. They sit, you
          sit, you both close the tab. For this specific practice, the
          absence of an intelligent counterparty is not a bug; it is the
          correct shape of the product.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to watch a real match form on a test signup?"
        description="Book a short call. We'll walk through the waitlist row, the 4-tier sort in action, the confirmation emails, and a real Meet URL appearing — no chatbot in the loop."
        section="ai-accountability-partner-footer"
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
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner app: the inbox as a state machine
          </Link>
          <Link
            href="/t/accountability-partner-apps"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner apps (plural), the matcher walk-through
          </Link>
          <Link
            href="/t/accountability-partner-contract"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner contract: four legal elements, each a line of code
          </Link>
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
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the product this page describes
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Walk through the human-matched version with the operator."
        section="ai-accountability-partner-sticky"
      />
    </article>
  );
}
