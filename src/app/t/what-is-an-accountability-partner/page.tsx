import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  MotionSequence,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  OrbitingCircles,
  BeforeAfter,
  AnimatedCodeBlock,
  ComparisonTable,
  MetricsRow,
  StepTimeline,
  GlowCard,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/what-is-an-accountability-partner";
const PUBLISHED = "2026-04-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "What Is an Accountability Partner: A Peer, Not an Overseer",
  description:
    "Every top ranking article defines an accountability partner as someone who checks on you. On this site the code defines it as someone doing the same thing at the same time. The intro email assembles four symmetric similarity traits and zero oversight duties. The function that builds them is buildCommonTraits in src/lib/emails.ts, lines 4 to 19.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "What Is an Accountability Partner: A Peer, Not an Overseer",
    description:
      "The SERP frames the role as asymmetric oversight. The product's matcher and its intro email frame it as symmetric similarity. Four traits, one function, zero supervisor fields.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is an Accountability Partner: a peer, not an overseer",
    description:
      "src/lib/emails.ts:4 defines buildCommonTraits(personA, personB). The signature is the argument.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the shortest accurate answer to 'what is an accountability partner'?",
    a: "The shortest answer every SERP article gives is some version of 'a person who helps you keep a commitment by checking on your progress.' That sentence is true and also asymmetric by default: one person checks, the other is checked on. The shortest accurate answer on this site is different. An accountability partner is the other human who, every day at roughly the same wall-clock time, opens the same Google Meet URL you do and sits in silence with you. The relation is symmetric by construction. Nobody on the call is the checker and nobody is the checked-on. If you do not show up, neither does your partner, and the database quietly notices both absences. If only one of you shows up, the relation has not ended, but the day's practice has already failed the only way it can fail, which is that the two of you did not sit together.",
  },
  {
    q: "Why does this site treat an accountability partner as a peer rather than an overseer?",
    a: "Two reasons, one code-level and one tradition-level. The code-level reason is that the matcher at src/app/api/auto-match/route.ts scores candidate pairs by symmetric attributes only: readyScore adds to itself whether either side's status is 'ready' (lines 170 to 172), bothOld is whether both attendees are old students in the Goenka tradition (lines 173 to 175), sessionMatch is whether their session_duration fields are equal (lines 176 to 177), and the final sort breaks ties by the absolute UTC time difference (line 188). None of those fields models capacity or willingness to supervise. The tradition-level reason is that the service is free in the dana (donation) tradition that the Goenka courses are taught in. A paid relationship can survive being asymmetric: the supervisor gets paid, the supervised gets a result. A free relationship cannot. If one party were doing the work of checking and the other were merely being checked, the unpaid work would quietly burn out whichever side was doing it. Symmetry is what keeps the whole thing free.",
  },
  {
    q: "Where in the code does the peer framing actually live?",
    a: "One function: buildCommonTraits in src/lib/emails.ts, lines 4 to 19. The signature is (personA: WaitlistEntry, personB: WaitlistEntry) and returns string[]. The function walks four predicates, each of which is a symmetric comparison: both is_old_student === 'Yes', both frequency equal, both session_duration equal, both timezone equal. Each match pushes one English-language bullet into the result array. The intro email at lines 201 to 213 takes that array and renders it as an HTML unordered list directly under the 'I think you're a great match' line. Four checks, four possible bullets, zero of which describe oversight or a one-way role. That list is the first concrete thing both partners see about each other in their inbox.",
  },
  {
    q: "Does that mean nobody checks in on anyone?",
    a: "Nobody checks in on anyone in the overseer sense. Each partner does notice the other's absence, because Google Meet shows who is in the room. The noticing is mutual and ambient, not delegated. There is no weekly check-in call in either calendar. There is no progress report. There is no DM thread where one partner asks the other 'how did this week go.' There is only the shared room and the identical routine of opening it. The communication layer is a reply-all email thread where replyTo contains both addresses, so either person's message reaches the pair and me together, not a one-way supervisor inbox. If you are looking for structured oversight, the match service is not the product you want. A paid coach is.",
  },
  {
    q: "Why does the intro email emphasize shared traits instead of stated goals?",
    a: "Because the matcher has nothing else to pair on. The waitlist form does not ask the signup to pick a goal; it asks for practice traits (old student status, session frequency, session duration, timezone, morning or evening, local time). Those are the fields the matcher has in hand. The intro email reflects the pairing logic exactly. The bullet list you receive is a literal report of which of the four similarity predicates returned true for you and your partner. If all four return true, four bullets appear. If none return true, there are no bullets at all, and the rest of the email carries the whole message on its own. The design choice is to not invent goals that were never declared.",
  },
  {
    q: "What if my 'accountability partner' frame really is asymmetric, does this product fit me?",
    a: "It probably does not, and that is on purpose. If what you want is a human who will ask you, every Friday, whether you hit your three writing deadlines and push you if you did not, the product to build or buy is a coach or a paid accountability service, not the free peer-match on this site. The matcher does not know about deadlines, does not track goals, does not send nudges, does not issue reminders beyond the confirmation flow, and does not escalate on silence. If both partners go dark, the partnership ends without anyone being told. That is a feature for people whose practice is already internal and whose help is mostly just another body doing the same thing at the same time. It is not a feature for people who need external pressure to act.",
  },
  {
    q: "Has the author of the product ever been in one of these partnerships?",
    a: "Yes, and the intro email to every new pair says so, at src/lib/emails.ts line 295, in the first person: 'I've personally been meditating over Google Meet with my buddy for the past three years this way.' That sentence is not marketing. It is the operator's own practice, unchanged, now offered to two strangers whose traits line up. The 'three years' claim is a rolling number that sits in the email template. It grounds the rest of the claim that the peer frame works: a long-running daily partnership between two adults, with no supervisor on either side and no fee on either side, which has not collapsed the way you might predict a peer relation would.",
  },
  {
    q: "What parts of the SERP's standard definition still hold on this site?",
    a: "Three of them, adapted. First, the 'shared commitment' part holds: both partners agreed to open the same Meet URL every day. Second, the 'mutual support' part holds, in a thin form: by being present, each partner makes it easier for the other to be present. Third, the 'regular cadence' part holds: the calendar event recurs with RRULE:FREQ=DAILY, so showing up is a daily event, not an on-demand one. What does not hold is the asymmetry: there is no tier, no checker, no checked-on, no reporter, no reportee. Anything the SERP implies about one-way status does not map onto the object the matcher produces.",
  },
  {
    q: "How should I read the word 'partner' in the matcher's outputs?",
    a: "As a symmetric binary relation. If A is B's partner, then B is A's partner, by the same Meet URL, the same calendar event id, the same daily RRULE, the same token pair in meet_links. There is no field called 'primary_partner' or 'secondary_partner.' The matches row has person_a_id and person_b_id, and which one is 'a' and which is 'b' is an implementation detail of the insertion order in the matcher, not a rank. The word 'partner,' on this site, carries no more and no less asymmetry than the word 'sibling' does. It is a relation two people are in, evaluated the same way from either side.",
  },
  {
    q: "For operational practice questions, where do I go?",
    a: "Not here. Questions about how to sit, how to work with physical sensations, how to handle restlessness, or anything touching the technique itself are for an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page, and the product it describes, restrict themselves strictly to logistics and peer matching. The matcher pairs two humans whose schedules and traits overlap. The practice itself, and any question about how to practice, stays with the tradition and its authorized teachers.",
  },
];

const serpVsPeerRows: ComparisonRow[] = [
  {
    feature: "Shape of the relation",
    competitor: "Asymmetric. One supervises, the other is supervised.",
    ours: "Symmetric. Both do the same thing at the same time.",
  },
  {
    feature: "What the pair talks about first",
    competitor: "Goals to hit, check-in frequency, consequences.",
    ours: "Shared traits (old-student status, frequency, duration, timezone), rendered from buildCommonTraits.",
  },
  {
    feature: "Who notices a missed day",
    competitor: "The supervisor checks and reports in.",
    ours: "Both see the empty Meet room. Neither is the designated noticer.",
  },
  {
    feature: "Communication channel",
    competitor: "Weekly call, DM, text, one-way update.",
    ours: "Reply-all email thread. replyTo contains both addresses (emails.ts lines around 318).",
  },
  {
    feature: "Payment model",
    competitor: "Coach variant is paid. Peer variant sometimes is.",
    ours: "Free, in the dana tradition. No side is paying the other for oversight.",
  },
  {
    feature: "Exit condition",
    competitor: "One party formally ends it or one side stops responding.",
    ours: "Both stop opening the Meet URL. meet_clicks goes quiet on both tokens.",
  },
  {
    feature: "Does the definition fit a machine?",
    competitor: "Barely. 'Someone who supports your goals' is not a predicate.",
    ours: "Yes. isPeerPartner(a, b) is a function of four symmetric comparisons.",
  },
];

const peerDiscoverySteps = [
  {
    title: "Two humans fill the same waitlist form",
    description:
      "Same fields, same validation, same table (waitlist_entries). The form does not distinguish supervisor from supervisee, because no such distinction exists downstream. Both rows become candidates on equal terms.",
  },
  {
    title: "The cron at auto-match/route.ts fires every 30 minutes",
    description:
      "vercel.json lines around 12 to 13. One pass over the eligible pool. The function does not know the word 'partner' in the oversight sense. It knows slots and predicates and a scorer.",
  },
  {
    title: "The scorer sorts viable pairs by symmetric attributes",
    description:
      "route.ts:183-189. Priority 1: both 'ready'. Priority 2: bothOld. Priority 3: sessionMatch. Priority 4: smallest UTC diff. Every tie-breaker is a comparison between the two candidates, not a ranking of one above the other.",
  },
  {
    title: "The intro email assembles a list of similarities",
    description:
      "emails.ts:210 calls buildCommonTraits. The output is bullet-rendered into the 'I think you're a great match' section. First thing the pair reads about each other is what they already have in common, not what one of them will now do to the other.",
  },
  {
    title: "The shared Meet URL is one link, both directions",
    description:
      "emails.ts:284-296. The HTML for the shared Google Meet section is identical in both partners' inboxes. The Join button href is each person's own tracking token, but the URL it redirects to is the same. Neither side has a 'supervisor console.'",
  },
  {
    title: "Reply-all preserves symmetry in the thread",
    description:
      "The intro email explicitly asks both parties to reply-all to introduce themselves. replyTo holds both addresses. The operator (Matt) is on the thread too. Every message goes to everyone, so no one can quietly become the checker.",
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
}`;

const scorerSrc = `// src/app/api/auto-match/route.ts — lines 170 to 189
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

// Sort: ready first → both old → same session duration → smallest time diff
allViable.sort(
  (x, y) =>
    (y.readyScore - x.readyScore) ||
    (Number(y.bothOld) - Number(x.bothOld)) ||
    (Number(y.sessionMatch) - Number(x.sessionMatch)) ||
    (x.diff - y.diff)
);`;

const marqueeChips = [
  "buildCommonTraits(personA, personB)",
  "bothOld: both is_old_student === 'Yes'",
  "sessionMatch: session_duration equal",
  "readyScore: sum over both sides",
  "RRULE:FREQ=DAILY",
  "replyTo: [personA.email, personB.email]",
  "person_a_id, person_b_id",
  "meet_links.token (one per person)",
  "meet_clicks (one row per open)",
  "/meet/<token> -> same meet.google.com URL",
];

const orbitItems = [
  <span
    key="trait1"
    className="inline-flex items-center rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-medium text-teal-700 shadow-sm"
  >
    Both Goenka old students
  </span>,
  <span
    key="trait2"
    className="inline-flex items-center rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-medium text-teal-700 shadow-sm"
  >
    Same frequency
  </span>,
  <span
    key="trait3"
    className="inline-flex items-center rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-medium text-teal-700 shadow-sm"
  >
    Same session duration
  </span>,
  <span
    key="trait4"
    className="inline-flex items-center rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-medium text-teal-700 shadow-sm"
  >
    Same timezone
  </span>,
];

const sequenceFrames = [
  {
    title: "A peer, not an overseer",
    body: (
      <p className="text-base md:text-lg leading-relaxed">
        The SERP gives the word an asymmetric default: one checks, one is
        checked. The matcher on this site builds only symmetric
        comparisons.
      </p>
    ),
  },
  {
    title: "Trait 1: both Goenka old students",
    body: (
      <p className="text-base md:text-lg leading-relaxed">
        <code className="rounded bg-teal-900/20 px-1.5 py-0.5 font-mono text-sm">
          personA.is_old_student === &quot;Yes&quot; &amp;&amp;
          personB.is_old_student === &quot;Yes&quot;
        </code>
        . The comparison is on both sides at once.
      </p>
    ),
  },
  {
    title: "Trait 2: same sit frequency",
    body: (
      <p className="text-base md:text-lg leading-relaxed">
        <code className="rounded bg-teal-900/20 px-1.5 py-0.5 font-mono text-sm">
          personA.frequency === personB.frequency
        </code>
        . Equality, not a ranking.
      </p>
    ),
  },
  {
    title: "Trait 3: same session duration",
    body: (
      <p className="text-base md:text-lg leading-relaxed">
        <code className="rounded bg-teal-900/20 px-1.5 py-0.5 font-mono text-sm">
          personA.session_duration === personB.session_duration
        </code>
        . A 60-minute sitter paired with a 60, a 30 with a 30.
      </p>
    ),
  },
  {
    title: "Trait 4: same timezone",
    body: (
      <p className="text-base md:text-lg leading-relaxed">
        <code className="rounded bg-teal-900/20 px-1.5 py-0.5 font-mono text-sm">
          personA.timezone === personB.timezone
        </code>
        . Partial, because the 60-minute UTC window already relaxes
        this, but still symmetric when it fires.
      </p>
    ),
  },
  {
    title: "Zero asymmetric fields",
    body: (
      <p className="text-base md:text-lg leading-relaxed">
        The function never asks whether A supervises B. It cannot. That
        argument is not in the signature.
      </p>
    ),
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "What Is an Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "What Is an Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "What Is an Accountability Partner: A Peer, Not an Overseer",
    description:
      "A code-grounded answer to 'what is an accountability partner' that rejects the asymmetric overseer framing the SERP defaults to. The matcher and the intro email both assemble the relation from symmetric similarity traits only.",
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
          Keyword guide, rewritten around the code
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          What is an accountability partner:{" "}
          <GradientText>a peer, not an overseer</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Every top ranking article defines the term as one person who
          checks on another. On this site the matcher and the intro email
          both treat the relation as symmetric, a pair of humans doing the
          same thing at the same time. The argument on this page is that
          the peer framing is not a soft rebrand. It is the shape the code
          already commits to. The function that produces the first words
          each new pair reads about each other takes two people in and
          returns a bulleted list of similarities, with zero fields for
          one-way oversight.
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
            "Every claim pinned to a file path and line range in this repo",
            "No operational practice instruction, nothing that touches technique",
            "The peer framing is enforced by the dana tradition the service follows",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Partner, without a supervisor"
              subtitle="Every SERP answer is asymmetric. The code on this site is not."
              captions={[
                "Dictionary: 'a person who checks on your progress.'",
                "Matcher: scores pairs by bothOld, sessionMatch, readyScore, smallest UTC diff.",
                "Intro email: assembles a bullet list of similarities from buildCommonTraits.",
                "Zero asymmetric fields, across the signature, the scorer, and the email.",
                "A partner, here, is the other person doing the same thing at the same time.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The standard answer, and what it quietly assumes
        </h2>
        <p className="text-zinc-600 mb-4 max-w-3xl leading-relaxed">
          If you ran the search that brought you here, you already have the
          standard answer. Wikipedia, BetterUp, WGU, Columbia GSAS, Lisa
          Hoashi, NPR, GotQuestions, The Gospel Coalition, Duke Rec, and
          Dynamic Results all say the same thing in different words. An
          accountability partner is a person who supports you in keeping a
          commitment, often by checking in on your progress, sometimes by
          holding you responsible for outcomes. That sentence is true, it
          is humane, and it points at something real. It also quietly
          assumes the relation is asymmetric. One party checks, the other
          party is checked on. One party supports, the other party is
          supported. The language is gentle, but the direction is one-way.
        </p>
        <p className="text-zinc-600 max-w-3xl leading-relaxed">
          You can see the asymmetry more clearly in paid variants. A coach
          takes a fee; the client pays. A sponsor in a 12-step context
          carries responsibility; the sponsee does not. Even in explicitly
          peer framings, the SERP articles tend to draft something like
          'one of you holds the other accountable,' which is a single role
          handed back and forth. None of the top 10 results argues that
          the relation should be strictly symmetric by construction.
          That is the argument on this page, and it is not rhetorical. The
          symmetry is already in the code.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two framings of the same word, toggled
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Tap between the two tabs. The left tab is the default SERP
          framing compressed to its core commitments. The right tab is
          what the matcher and the intro email on this site actually
          commit to, in the same compressed form. Notice which fields
          disappear.
        </p>
        <BeforeAfter
          title="SERP overseer framing vs. product peer framing"
          before={{
            label: "SERP overseer framing",
            content:
              "An accountability partner is a person who supports your goals by checking in on your progress. They may ask questions, review your week, and escalate when you slip. The relation is built around one-way visibility from them into your practice.",
            highlights: [
              "Asymmetric: one checks, one is checked",
              "Explicit goals are the subject of the check-in",
              "Progress reports are expected",
              "Drift detection belongs to the partner, not both sides",
            ],
          }}
          after={{
            label: "Product peer framing",
            content:
              "An accountability partner is the other human whose traits overlap yours on enough dimensions that the matcher places you into the same recurring Google Meet. You both open the same URL every day at roughly the same time. Either of you notices the other's absence because the room is visibly empty. No one is designated to check.",
            highlights: [
              "Symmetric: both do the same thing at the same time",
              "First words in the inbox are shared traits, not declared goals",
              "Absence is noticed mutually, not reported in",
              "No designated supervisor on either side",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The function that does the framing
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Sixteen lines in one file in the repo. The signature is two
          people, the return type is an array of strings, and every
          predicate is an equality between a field on A and the same field
          on B. Reading the function is the fastest way to see what
          'partner' means to the runtime.
        </p>
        <AnimatedCodeBlock
          code={buildCommonTraitsSrc}
          language="typescript"
          filename="src/lib/emails.ts"
        />
        <p className="text-zinc-600 mt-4 max-w-3xl leading-relaxed">
          Four possible bullets. One for shared Goenka old-student status,
          one for shared sit frequency, one for shared session duration,
          one for shared timezone. Every one of the four is an equality
          check. Not a single line in the function tests whether A can
          supervise B, whether A has more experience, whether A is the
          reporter and B the reported-on. Those fields do not exist in
          WaitlistEntry, so the function could not evaluate them even if
          it tried. The absence of the supervisor concept is not a matter
          of politeness. It is a matter of what the type system allows.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The four similarity traits, as a sequence
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Scroll into this block and let it play. The sequence walks
          through each predicate the intro email might surface, in the
          order the function evaluates them. Every frame holds one
          symmetric comparison. The last frame holds what is not in the
          function.
        </p>
        <MotionSequence
          title="buildCommonTraits, frame by frame"
          frames={sequenceFrames}
          defaultDuration={3200}
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
          Four traits in orbit around the one thing that matters
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The center is not a person. It is the shared sit. The four
          traits orbit it because they are the only attributes the
          matcher uses to decide who should be in the room with whom.
          Nothing in the orbit is an oversight field. Nothing in the
          center is a supervisor.
        </p>
        <div className="flex justify-center">
          <OrbitingCircles
            center={
              <span className="text-center text-xs font-semibold leading-tight">
                Shared
                <br />
                daily sit
              </span>
            }
            items={orbitItems}
            radius={160}
            duration={28}
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">
              The peer framing, in four numbers
            </h2>
            <p className="text-zinc-600 mb-6 leading-relaxed max-w-3xl">
              The argument on this page collapses to a small set of
              integers that the database already agrees with. A role
              description cannot be a count. A symmetric relation can.
            </p>
            <MetricsRow
              metrics={[
                {
                  value: 4,
                  label: "symmetric similarity traits in buildCommonTraits",
                },
                {
                  value: 0,
                  label: "asymmetric / supervisor fields anywhere in the matcher",
                },
                {
                  value: 2,
                  label: "humans per match row (person_a_id, person_b_id)",
                },
                {
                  value: 1,
                  label: "function that composes the intro email's trait list",
                },
              ]}
            />
            <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
              The &quot;0&quot; is the important number. If the product
              ever wanted to make the relation asymmetric, it would have
              to add a field that does not currently exist, then add
              scorer logic that weights it. Neither exists today. The
              runtime gives the word &quot;partner&quot; no supervisor
              affordances to attach to.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The scorer that sorts candidate pairs
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The second piece of evidence is the sort key in the matcher.
          Every field on it is a function of both candidates, not of one
          of them. A one-way supervision concept would require a field
          that could, in principle, be higher for A than for B. No such
          field exists on <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">allViable</code>.
        </p>
        <AnimatedCodeBlock
          code={scorerSrc}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          How a peer actually appears in your inbox
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The first concrete moment an accountability partner becomes a
          real person to you is an email. The sequence below is the full
          path from two separate waitlist rows to one shared thread, in
          the order the code takes. There is no point along the way where
          either partner is marked as the checker.
        </p>
        <StepTimeline steps={peerDiscoverySteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Tokens the runtime actually uses for this relation
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Not a single one of these symbols carries an asymmetric shape.
          Read them as a chip row. Any of them can be grepped directly
          against the repo to verify the peer framing is not a story.
        </p>
        <Marquee speed={45}>
          {marqueeChips.map((t, i) => (
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
          heading="Top 10 SERP result vs. how the matcher actually models it"
          productName="vipassana.cool (peer)"
          competitorName="Top 10 SERP result (overseer)"
          rows={serpVsPeerRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why the dana tradition forces the peer frame
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          The Goenka tradition this product orbits is taught on a donation
          basis. Authorized assistant teachers at 10-day residential
          courses, arranged through{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          , work for free. The buddy-matching service inherits that
          constraint. Nobody pays for a match and nobody is paid to be a
          match. That shapes what the word &quot;partner&quot; can mean
          here. A paid overseer relation is stable because the incentive
          structure is explicit. An unpaid overseer relation quietly
          collapses, because one party is doing visible emotional labor
          and the other is consuming it. The only shape that survives in
          a free setting, long term, is peer symmetry.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          To say this explicitly, so the boundary is plain. Anything about
          how to practice on the cushion, what to do with a restless hour,
          how to interpret a bodily sensation, or how to work with any
          difficulty inside the sit, is not on this page. Those questions
          belong to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a 10-day course. What
          this page answers, strictly, is what the word
          &quot;accountability partner&quot; refers to when the matcher
          and the intro email use it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14 rounded-2xl border border-teal-200 bg-teal-50 p-8 md:p-10">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Short summary for anyone skimming
        </h2>
        <ul className="space-y-3 text-zinc-700 text-[15px] leading-relaxed">
          <li>
            <strong className="text-zinc-900">SERP answer:</strong> a
            person who checks on your progress. True and asymmetric by
            default.
          </li>
          <li>
            <strong className="text-zinc-900">Product answer:</strong> the
            other person opening the same recurring Google Meet URL you
            do, at roughly the same wall-clock time.
          </li>
          <li>
            <strong className="text-zinc-900">How it is formed:</strong>{" "}
            the matcher sorts candidates by symmetric attributes only
            (readyScore, bothOld, sessionMatch, smallest UTC diff).
          </li>
          <li>
            <strong className="text-zinc-900">How the first message reads:</strong>{" "}
            a bullet list of similarities from{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              buildCommonTraits
            </code>{" "}
            at{" "}
            <code className="rounded bg-white px-1 py-0.5 font-mono text-[12px]">
              src/lib/emails.ts
            </code>
            , lines 4 to 19.
          </li>
          <li>
            <strong className="text-zinc-900">Why this shape:</strong>{" "}
            the service is free in the dana tradition. A peer frame is
            the only one that is stable when no money flows in either
            direction.
          </li>
          <li>
            <strong className="text-zinc-900">Not for:</strong> people
            who want external deadline pressure, weekly check-in calls,
            or one-way progress reporting. A paid coach does that job.
            The matcher here does not try to.
          </li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-3">
          A concrete number, spring-animated
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The count of asymmetric fields, anywhere in the matcher or the
          email composer, is{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={0} />
          </span>
          . The count of symmetric comparisons in buildCommonTraits is{" "}
          <span className="font-mono text-teal-700 text-2xl">
            <NumberTicker value={4} />
          </span>
          . These two numbers are the whole structural argument on this
          page.
        </p>
      </div>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to see what a peer match would look like for your schedule?"
        description="Book a short call and we will walk through what a live pairing looks like on the peer model, from waitlist signup to the first shared Meet URL."
        section="what-is-an-accountability-partner-footer"
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
            href="/t/accountability-partner-definition"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner definition, as a predicate function
          </Link>
          <Link
            href="/t/define-accountability-partner"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Define accountability partner, as a recurring Meet URL
          </Link>
          <Link
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner app, inbox-as-state-machine
          </Link>
          <Link
            href="/t/accountability-partner-apps"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner apps (plural)
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy, the product this page describes
          </Link>
          <Link
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Daily practice handbook
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to the operator about what a peer pairing would look like for you."
        section="what-is-an-accountability-partner-sticky"
      />
    </article>
  );
}
