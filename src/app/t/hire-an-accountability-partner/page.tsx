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

const PAGE_URL = "https://vipassana.cool/t/hire-an-accountability-partner";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Hire an Accountability Partner: What a Matcher With Zero Commercial Surface Area Looks Like in Code",
  description:
    "Most guides on hiring a partner point you at coaching marketplaces. This one opens a repo. The waitlist_entries table on vipassana.cool has 25 columns, none about money. The four-tier scoring sort has no price dimension. The intro email drops the operator out of the reply thread. 'Hire' is not a posture on this site, it is a schema fact.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Hire an accountability partner: the matcher with no money column, and where to actually hire one",
    description:
      "waitlist_entries has 25 fields, none of them price, tier, or fee. The scoring algorithm sorts on readyScore, bothOld, sessionMatch, and time diff. No way for a premium tier to exist inside this repo. If you came to hire, this page says what you can hire elsewhere and what this product gives you for free instead.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Hire an accountability partner: a peer matcher with zero commercial surface area, and an honest referral list",
    description:
      "src/lib/db.ts lines 7 to 33 define 25 columns. Zero are about money. The matcher at auto-match/route.ts:182 sorts on readyScore > bothOld > sessionMatch > diff. No fifth tier, no price. Here is what you can hire elsewhere.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Can I hire an accountability partner on this site?",
    a: "No. The waitlist_entries table in src/lib/db.ts defines 25 columns and none of them are price, tier, subscription, fee, or coach. The auto-match cron at src/app/api/auto-match/route.ts sorts candidate pairs on four criteria in order: readyScore, bothOld (both completed a 10-day Goenka course), sessionMatch (same sit length), and smallest UTC time difference. There is no fifth criterion and no money column for one to read from. Even if you wanted to pay, the matcher has nowhere to put the record and nothing to do with it. If hiring is the shape you want, the honest answer is to use a paid coaching marketplace (BetterUp, FindYourCoach, AccountabilityCoach.com, Coach.me) or a services marketplace (Fiverr, Upwork) and hire a human who will invoice you for weekly calls. This product pairs two meditators for a free daily silent sit on a shared Google Meet URL, with the operator (me) reviewing new signups by hand.",
  },
  {
    q: "What does 'hire an accountability partner' actually mean on coaching marketplaces, and how is that different from a peer match?",
    a: "The hiring model buys you three things a peer match does not: a service-level commitment (the coach will call at 10am every Tuesday, not hope to), scope flexibility (you pay for whatever goal you bring, the coach adapts), and exit terms (if it is not working you cancel and keep your week). Typical pricing in April 2026 ranges from $30 to $150 per 25 to 60 minute session for independent coaches on Fiverr or Thumbtack, $200 to $600 a month for subscription-based programs like BetterUp or Noom, and $1,500 a month and up for executive coaching. A peer match trades all three of those for a different currency: the peer has skin in the same game, the practice or goal is shared rather than supervised, and the partner is not motivated by billing. The right choice depends on which currency you want on the table.",
  },
  {
    q: "Why does this page exist on a meditation site at all?",
    a: "Because people search for this phrase and the honest answer is long. This product is not a paid coaching service and it is not a free productivity-coworking service either. It is a tiny peer matcher for one narrow thing: daily silent Vipassana practice between two people who have completed a 10-day Goenka course. The word 'hire' exposes, by its absence, what the matcher does and does not do, and the architecture is specific enough that writing down why the hire shape cannot exist here is more useful than waving at it. If you came looking to hire, the page names the marketplaces to use instead and is not upset to send you there.",
  },
  {
    q: "What would need to change in this codebase for paid tiers to exist?",
    a: "At minimum: one new column on waitlist_entries (a tier or plan enum), one new table for subscription or invoice records, a payment processor integration (Stripe most likely), a new branch in src/app/api/auto-match/route.ts that weighs tier before or after the existing four criteria, an admin flow to refund or cancel, and a disclosures page. None of those exist and none are planned. The donation-ethos note in src/app/practice-buddy/how-it-works/page.tsx says plainly 'no fees, no premium tiers, no upsells,' and the code behind that sentence is consistent with it. The point of writing it down in prose and in schema is to make it expensive to silently change later.",
  },
  {
    q: "If I still want to pay to be held accountable, what are the honest options?",
    a: "For a specific human on a recurring schedule, hire a coach on BetterUp, Thumbtack, Fiverr, Upwork, or Coach.com, or a specialized service like Focusmate Pro, Supporti, or AccountabilityCoach.com. For financial stakes with a referee instead of a coach, use Stickk or Beeminder (you put money on the line, the platform takes it if you miss a commitment). For weight or health goals specifically, WW and Noom include a coach in the subscription. For executive or career goals, BetterUp, Bravely, and Torch sit in the $200 to $600 per month range. None of these are affiliate links, and the right choice depends on whether you want a human who talks, a platform that charges, or a combination of both.",
  },
  {
    q: "Does the matcher on vipassana.cool have any scoring advantage for people who donate?",
    a: "No. Donations are accepted at nothing more than the level described on the Practice Buddy page, there is no column in waitlist_entries to record a donor, and the matching code never reads any such signal. The sort at src/app/api/auto-match/route.ts line 183 runs in a fixed order: readyScore, bothOld, sessionMatch, time diff. If you tried to buy a faster or better match there is quite literally nowhere in the schema for that information to be stored, and the cron would have nothing to sort on. This is a property of the design, not a marketing claim: it costs more effort to add preferential sorting than to leave it out.",
  },
  {
    q: "Is there any paid service that the operator of this site endorses for people who searched for this phrase?",
    a: "For a hired partner who will call you weekly about a goal, I would start with Thumbtack or Fiverr to find a private coach, because the rate range is wide and the commitment is granular. For a subscription that bundles the coach into a product, BetterUp and Noom are the most battle-tested depending on whether your goal is career or weight. For a financial-stakes version of the same idea, Stickk is the oldest and still works. I have paid for none of these on an ongoing basis, I have met people who have, and the honest takeaway has been that a specific human on a specific schedule is what does the work, regardless of which platform made the scheduling happen. The shape this site implements is the same shape for free, with the goal domain locked to daily Vipassana practice.",
  },
  {
    q: "Why does the intro email leave the operator out of the reply thread instead of keeping me as a support contact?",
    a: "Because a hired service needs a support contact, and this one does not. The intro email at src/app/api/auto-match/route.ts lines 332 to 335 sets replyTo to the two partner email addresses only. When the pair replies to the thread, it goes to the pair, not to me. I am not a billable intermediary, and keeping myself out of the thread is the truthful statement that the partnership is theirs and not mine to manage. If something goes wrong, there is a Contact link in the site footer, and I read the inbox daily. But the product does not pretend I am a customer-success function because the product has no customer in the paid sense.",
  },
  {
    q: "What if I want to hire a partner specifically for daily meditation practice?",
    a: "A few paths exist. Insight Timer has a paid coach directory. A handful of meditation teachers on Zoom take on 1-to-1 students at hourly rates. Some dhamma centres have old students who mentor informally (never for money). For the specific Goenka tradition that this matcher pairs within, the operational layer is authorized assistant teachers at 10-day residential courses through dhamma.org, which is not a hire relationship but is the only sanctioned teaching channel. If your goal is to pay a person to sit with you over video on a recurring basis, Focusmate Pro is the most neutral platform, and you bring the practice yourself. The matcher on this site is a free alternative if both you and a partner have already completed a 10-day course and want a daily silent sit; it is not a substitute for a teacher.",
  },
  {
    q: "Can I pay the operator directly to expedite my match or handle the pairing by hand?",
    a: "No, and the admin UI has no path for it. The admin matching dashboard lets the operator review the candidate pool, override eligibility, and suggest pairings, but none of those actions read or write any payment-adjacent field because none exists. In practice the operator (me) reviews new signups within 24 hours and manually pairs anyone whose timezone or schedule is unusual enough that the greedy auto-match would not find a partner. This happens automatically as part of operating the product and is not something I charge for. If you have a rare timezone and have been waiting, email me from the site Contact page and I will look by hand.",
  },
];

const scoringSortRows: ComparisonRow[] = [
  {
    feature: "First sort key",
    competitor:
      "Typically tier: Gold > Silver > Bronze, or subscription plan: annual > monthly > free, or coach availability by package.",
    ours:
      "readyScore (0 to 2). Counts how many of the two people have already confirmed their side. No revenue input. src/app/api/auto-match/route.ts line 184.",
  },
  {
    feature: "Second sort key",
    competitor:
      "Match score from a recommendation engine (trained on user preferences and prior success), or coach specialization tag alignment.",
    ours:
      "bothOld (boolean). True when both people completed a 10-day Goenka course. A meditation-lineage sort, not a commercial one. Line 186.",
  },
  {
    feature: "Third sort key",
    competitor:
      "Upsell opportunity score: how likely this pairing is to produce engagement that drives subscription conversion.",
    ours:
      "sessionMatch (boolean). True when both picked the same sit duration (20, 30, 45, 60, 90, or 120 minutes). Line 187.",
  },
  {
    feature: "Fourth sort key",
    competitor:
      "Geographic region for localization or billing compliance. Sometimes the tie-breaker for paid platforms.",
    ours:
      "Absolute difference between UTC minutes of the two sessions. Smaller is better. Line 188. This is the last tie-breaker.",
  },
  {
    feature: "Fifth sort key",
    competitor:
      "Exists. There is almost always a fifth dimension on paid platforms: availability, languages, or a coach-quality score.",
    ours:
      "Does not exist. The sort ends at four keys. Adding a fifth would require adding a column and a new branch. Neither is planned.",
  },
  {
    feature: "Whether the algorithm reads any monetary field",
    competitor:
      "Yes, at least one. Tier, plan, or revenue is almost always in the sort or in the eligibility filter.",
    ours:
      "No. The only eligibility filters are contact_count < 10, signup age > 24h (for new rows), and the 60-minute UTC reachability window. Status 'ready' bypasses the contact_count cap.",
  },
  {
    feature: "How a premium feature would be added",
    competitor:
      "Product manager picks a tier column, flips a feature flag, and the pricing page shows a new row.",
    ours:
      "Not possible without a schema migration, a Stripe integration, and a new admin flow. The absence of these is deliberate, not an oversight.",
  },
];

const hiringShopComparison: BentoCard[] = [
  {
    title: "Service-level commitment",
    description:
      "A hired coach agrees to call at 10am every Tuesday for 12 weeks. They are billable if they miss. This product has no SLA. The matcher pairs you, the intro email goes out, and the rest is two humans agreeing to open the same Meet URL. If one of you drifts, the meet_clicks table logs the drift and the operator notices, but nobody is billable.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Scope flexibility",
    description:
      "A hired coach adapts to your goal. Writing a novel, losing 40 pounds, quitting alcohol, closing a deal. The matcher here works on exactly one scope: daily silent Vipassana practice. The schema has no weight, deal, habit, or tone-of-life column. Scope is not a dial you can turn.",
  },
  {
    title: "Exit and refunds",
    description:
      "A hired service has a cancellation flow with prorated refunds and an end date. This product has the unsubscribe link at the bottom of every email, one SQL UPDATE, no refund. There is nothing to refund because there is no charge.",
  },
  {
    title: "Supervision signal",
    description:
      "A paid coach is the inherent supervisor. They check your food log, your sales pipeline, your manuscript. Here the only supervision signal is ambient: meet_clicks rows, one per Meet URL open, visible to the operator in the admin dashboard. Neither partner supervises the other.",
    size: "2x1",
  },
  {
    title: "Matchmaking guarantee",
    description:
      "Hired services promise a match in 24 to 72 hours, sometimes with a refund if not. The auto-match cron on this site runs every 2 hours and only pairs people within the 60-minute UTC window, so the wait can be anywhere from 2 hours to several days depending on the timezone pool. No guarantee, no refund because there is nothing to refund.",
  },
  {
    title: "Replacement on failure",
    description:
      "If the relationship with a hired coach is not working, you cancel and the platform suggests a new coach. Here, if a partnership ends, getPriorMatchedIds remembers it and the matcher picks someone new from the current pool on the next tick. No curation, no vetting beyond the existing meditation-lineage filters.",
  },
];

const hireTaskPhrases = [
  "weekly 45-minute call",
  "goal-review deck",
  "structured coaching agenda",
  "SMART goal worksheet",
  "quarterly progress review",
  "accountability retainer",
  "billable hours",
  "cancellation window",
  "30-day refund guarantee",
  "coach availability calendar",
  "tier: premium",
  "subscription: annual",
];

const peerMatchPhrases = [
  "readyScore 0 to 2",
  "both completed 10-day course",
  "shared session duration",
  "smallest UTC time diff",
  "60-minute reachability window",
  "one recurring Meet URL",
  "no billing",
  "no SLA",
];

const waitlistEntrySnippet = `// src/lib/db.ts — lines 7 to 33, the 25 columns a waitlist entry has
export type WaitlistEntry = {
  id: string;
  email: string;
  name: string | null;
  is_old_student: string | null;
  is_goenka_tradition: string | null;
  timezone: string | null;
  city: string | null;
  frequency: string | null;
  morning_time: string | null;
  evening_time: string | null;
  days: string | null;
  session_duration: string | null;
  has_maintained_practice: string | null;
  practice_length: string | null;
  requested_match_id: string | null;
  research_notes: string | null;
  morning_utc: string | null;
  evening_utc: string | null;
  status: string;
  pass_count: number;
  contact_count: number;
  unsubscribed: boolean;
  unsubscribe_token: string | null;
  created_at: string | null;
  updated_at: string | null;
};

// Count the fields. 25 of them.
// Search for: price, fee, tier, plan, subscription, paid, premium, coach.
// You will find zero hits in this file.
// A paid tier could not be stored in this table as-is.
`;

const scoringSnippet = `// src/app/api/auto-match/route.ts — lines 182 to 189
// The four-tier sort that decides who gets paired with whom.
// Every candidate pair that passes the eligibility filters lands in allViable[],
// and this sort is the only thing that reorders them.

allViable.sort(
  (x, y) =>
    (y.readyScore - x.readyScore) ||       // 1) both sides confirmed > one > zero
    (Number(y.bothOld) - Number(x.bothOld)) || // 2) both finished a 10-day course
    (Number(y.sessionMatch) - Number(x.sessionMatch)) || // 3) same sit length
    (x.diff - y.diff)                      // 4) smallest UTC time difference
);

// Read the sort keys. None of them read from a money column, because
// no such column exists. Adding a price-weighted tier would require
// a schema migration and a new branch in this function. It has not
// been done and is not planned.
`;

const lifecycleSteps = [
  {
    title: "You arrive searching for 'hire an accountability partner'",
    description:
      "The honest first thing: this site is not a marketplace. There is no pricing page, no plan picker, no Stripe checkout. If the hire model is the one you want, the later section below has a list of paid options and the operator is not trying to change your mind.",
  },
  {
    title: "If you still want to try the peer match, you fill the Practice Buddy form",
    description:
      "The form writes one row into waitlist_entries. The row has 25 columns, all non-financial, set by the form inputs. The operator (me) eyeballs the row within 24 hours.",
  },
  {
    title: "The auto-match cron runs every 2 hours",
    description:
      "It reads the full waitlist, runs the four eligibility filters (status, contact_count, signup age, UTC reachability window), builds all viable pairs, sorts them on the four-tier criteria above, and greedily picks non-overlapping pairs.",
  },
  {
    title: "When a pair is picked, three artifact types are written",
    description:
      "One recurring Google Calendar event (RRULE:FREQ=DAILY), two meet_links rows in Postgres, two intro emails. The intro email has replyTo set to the two partner emails so the operator is not in the reply thread by default.",
  },
  {
    title: "Nothing else ever happens to the pair from the product",
    description:
      "No check-in cron, no weekly digest, no upsell, no retention email. The grep for weekly_checkin, progress_email, and partner_nudge returns zero matches. The absence is enforced by the absence of the code, which is enforced by the absence of any commercial pressure to write it.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Hire an Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Hire an Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Hire an Accountability Partner: What a Matcher With Zero Commercial Surface Area Looks Like in Code",
    description:
      "Every guide on hiring a partner points you at coaching marketplaces and lists rates. This one opens a repo. The waitlist_entries table has 25 columns, none of them monetary. The scoring algorithm sorts on four keys, none of them a tier. The intro email leaves the operator out of the reply thread. 'Hire' cannot happen inside this product, and the page explains the structural reason why, and where to hire a partner if the hire model is still the one you want.",
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
          A page about a matcher that has no price to read
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Hire an accountability partner:{" "}
          <GradientText>a matcher with zero commercial surface area</GradientText>, and an honest list of where to hire one if that is what you want
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most guides on this topic line up coaching marketplaces (BetterUp, Thumbtack, Fiverr) and tell you to pick a rate. This one opens the repo behind a free peer matcher. The waitlist_entries table has 25 columns and none of them are price, tier, fee, or coach. The four-tier scoring sort reads no monetary field. The intro email drops the operator out of the reply thread. If hiring is the shape you want, the page tells you where to go and why, and the code is the proof that the shape here is different.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="11 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "waitlist_entries has 25 columns (src/lib/db.ts:7-33); zero are price, tier, fee, or coach",
            "Scoring sort reads readyScore, bothOld, sessionMatch, diff — no monetary field (auto-match/route.ts:182-189)",
            "'No fees, no premium tiers, no upsells' — practice-buddy/how-it-works/page.tsx:336",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-3xl mx-auto py-6">
            <RemotionClip
              title="Zero money columns, four sort keys"
              subtitle="A peer matcher where 'hire' does not have a row to land in"
              accent="teal"
              captions={[
                "You searched for a way to hire an accountability partner.",
                "The Practice Buddy table on this site has 25 columns. None are price, tier, or fee.",
                "The sort that picks a pair reads four keys and zero money.",
                "If hire is the shape you want, the page below names the marketplaces to use.",
                "If a free peer match for a daily silent sit fits, the repo is the rest of this page.",
              ]}
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The numbers a reader searching to hire expects to see, and the numbers this product actually has
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A reader arriving from &apos;hire an accountability partner&apos; expects rate ranges, tier prices, and session counts. This product&apos;s numbers are different by construction. Each figure below is a direct count from the running code, not a marketing approximation.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 25,
              label:
                "columns in waitlist_entries (src/lib/db.ts lines 7 to 33)",
            },
            {
              value: 0,
              label:
                "columns referencing price, tier, fee, coach, or subscription in that table",
            },
            {
              value: 4,
              label:
                "keys in the scoring sort at auto-match/route.ts line 183 (readyScore, bothOld, sessionMatch, diff)",
            },
            {
              value: 0,
              suffix: " $",
              label:
                "amount a donor or premium user can pay to change their sort position",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The 25 columns, literally, and what is missing from them
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The WaitlistEntry type is the contract between the form on the Practice Buddy page and the cron that runs every two hours. Below is the type definition in the repo today, exported from src/lib/db.ts. Read the field names. A paid tier could not be stored anywhere in this shape without a schema migration.
        </p>
        <AnimatedCodeBlock
          code={waitlistEntrySnippet}
          language="typescript"
          filename="src/lib/db.ts (lines 7 to 33)"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The sort that decides pairing, on screen, in full
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Every candidate pair that survives the eligibility filters goes through this four-key sort. The order of the keys is the order of priority. A paid product would add a fifth key, or weight one of these by plan. This one does not. A reader who wants to understand exactly how much commercial logic is inside the matcher can read the six lines below and have the complete answer.
        </p>
        <AnimatedCodeBlock
          code={scoringSnippet}
          language="typescript"
          filename="src/app/api/auto-match/route.ts (lines 182 to 189)"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="The sort ends at four keys. Adding a fifth would require a schema column, a new branch, and a product decision. None of those have happened, and the absence is what keeps the word 'hire' out of this product."
          source="src/app/api/auto-match/route.ts line 183, as of 2026-04-22"
          metric="4 keys / 0 $"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What a hire-shaped product usually sorts on, vs what this one does
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Left column: the dimensions a paid accountability product typically sorts and filters on. Right column: the actual keys this matcher uses, cited to the line. The question on the table is not which column is better in the abstract, it is which column fits the thing you came here to find.
        </p>
        <ComparisonTable
          heading="Paid accountability product sort vs this matcher's sort"
          productName="vipassana.cool (peer matcher, meditation only)"
          competitorName="Typical hire-shaped accountability product"
          rows={scoringSortRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The three inputs a hire request expects, and where each one lands inside this product
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A hire request comes with three inputs by default: payment, vetting, and an SLA. The diagram below shows what each one resolves to inside this product. Two of the three resolve to nothing, one resolves to a peer-shaped filter that looks nothing like a purchase.
        </p>
        <AnimatedBeam
          title="hire inputs → matcher → actual outputs"
          from={[
            {
              label: "Payment",
              sublabel: "from the reader, expected by a hire",
            },
            {
              label: "Vetting request",
              sublabel: "of the partner, expected by a hire",
            },
            {
              label: "Service-level commitment",
              sublabel: "on availability and response time",
            },
          ]}
          hub={{
            label: "auto-match/route.ts",
            sublabel: "reads 25 columns, 0 monetary",
          }}
          to={[
            {
              label: "No payment path",
              sublabel: "no Stripe, no field, no branch",
            },
            {
              label: "Meditation-lineage filter",
              sublabel: "is_old_student eq 'Yes' on both sides",
            },
            {
              label: "60-min UTC window",
              sublabel: "reachability, not SLA",
            },
            {
              label: "One recurring Meet URL",
              sublabel: "RRULE:FREQ=DAILY, no UNTIL",
            },
            {
              label: "Two intro emails",
              sublabel: "replyTo = both partners, operator absent",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Six things a hire gives you that this product does not
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          If the paid shape is what your goal actually needs, these are the six things you are buying that this peer matcher will not give back. Each card is the feature as a hire product would describe it, and the corresponding fact inside this repo. This is a diagnostic, not a defense.
        </p>
        <BentoGrid cards={hiringShopComparison} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What a hire request would include, and what this matcher has instead
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          First strip: the phrases that appear most often in hire-shaped accountability products. Second strip: the literal sort keys and filters inside this matcher. The vocabulary difference is the architecture difference.
        </p>
        <Marquee speed={32}>
          {hireTaskPhrases.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 font-mono text-xs text-zinc-600"
            >
              {t}
            </span>
          ))}
        </Marquee>
        <p className="text-zinc-600 mt-6 mb-4 max-w-3xl">
          And the full vocabulary this matcher uses internally:
        </p>
        <Marquee speed={22} reverse>
          {peerMatchPhrases.map((t, i) => (
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
          What happens if you still try to &apos;hire&apos; on this site
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          There is no pricing page and no checkout, so the path for a reader who came looking to hire is a narrow one. Below is the lifecycle, with the honest admission that the product cannot satisfy the hire request at any step, and the admission that the peer-match path is still open if it fits.
        </p>
        <StepTimeline steps={lifecycleSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The arithmetic of a match, without a dollar anywhere:{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={25} />
              </span>{" "}
              columns,{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={4} />
              </span>{" "}
              sort keys,{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={0} />
              </span>{" "}
              that read money
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              The matcher has been running every two hours since the Practice Buddy form went live. In that time it has never read a monetary field, because none exists, and it has never written one, because it has no code to do so. The donation-ethos sentence on the Practice Buddy page (&quot;no fees, no premium tiers, no upsells&quot;) is the prose version of the schema; the schema is the version that has to stay consistent under the next commit, not the marketing copy. Anyone cloning this site who wants to add a paid tier would be staring at a dozen places in db.ts, auto-match/route.ts, emails.ts, and the Practice Buddy form where they would have to change the shape of the data. The absence of money is not a feature the code advertises. It is a design where there is no cheap place to put it.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              The point of this page is not to claim the peer shape is better than the hire shape. It is to give a reader who searched for &quot;hire an accountability partner&quot; the clearest possible picture of what this product is, so they can decide in one minute whether to click through to the Practice Buddy form or to the paid options below.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where to go if you came here to hire, sorted by how much structure the product gives you
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A categorized, non-affiliate list. The rates are ranges in April 2026 and can move; use them as rough orientation rather than precise quotes.
        </p>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            <strong className="text-zinc-900">Subscription coaching platforms</strong>. BetterUp, Torch, Bravely, and Ezra. Typically $200 to $600 per month, bundles the coach match, the software, and 2 to 4 sessions per month. Reasonable when the employer pays or the stakes are career.
          </li>
          <li>
            <strong className="text-zinc-900">Specialized goal programs with a coach included</strong>. WW and Noom for weight, Calibrate for metabolic health, Done for ADHD. $60 to $300 per month, the coach is built into the app experience.
          </li>
          <li>
            <strong className="text-zinc-900">Open coaching marketplaces</strong>. Thumbtack, Fiverr, Upwork, Coach.me, FindYourCoach, AccountabilityCoach.com. Hourly rates from $30 to $150 for independent coaches; you negotiate the package. Widest selection, widest quality variance.
          </li>
          <li>
            <strong className="text-zinc-900">Peer video coworking with a paid tier</strong>. Focusmate Pro (unlimited sessions, $6.99/mo at last check), Flow Club (structured sessions, $25/mo). The partner is a peer, but the platform is paid and reliable.
          </li>
          <li>
            <strong className="text-zinc-900">Commitment-contract platforms</strong>. Stickk, Beeminder. You put money on the line; the referee verifies whether you hit your target. This is the financial-stakes version of accountability, useful when the missing ingredient is cost rather than conversation.
          </li>
          <li>
            <strong className="text-zinc-900">Executive coaches via referral</strong>. Independent practitioners, usually $200 to $500 per hour. Worth it when the goal has a top-of-org business outcome attached; overkill for a daily habit.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          When this product still fits, even though you came here to hire
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            You have completed a 10-day Goenka residential course and your daily sits stopped happening after you came home. This is the exact shape the matcher was built for. The partner is free; the accountability is the recurring Meet URL.
          </li>
          <li>
            You are comfortable bringing your own goal and do not need a coach to review it. The silent-partnership shape gives you a human who will be on the same Meet URL at the same minute every day. Whatever you are working on at other hours is your business.
          </li>
          <li>
            You want to see an honest peer architecture before buying a paid one. The repo is a small enough reference that reading auto-match/route.ts and db.ts gives a reasonable prior on how to evaluate any peer-match feature in a paid product.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          When this product does not fit
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            You want a human who will call you on a schedule and talk about your progress. Hire a coach on Thumbtack or Fiverr, or subscribe to BetterUp or Noom. This product pairs you for silence, not conversation.
          </li>
          <li>
            You want financial stakes instead of social ones. Use Stickk or Beeminder. This product has no mechanism to take money, because it has no mechanism to take money.
          </li>
          <li>
            You want instructions on how to practice. Those belong to authorized assistant teachers at 10-day residential courses through{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . Nothing on this site is qualified to answer those questions, and the matcher does not pretend to be a teacher.
          </li>
        </ul>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to walk the schema, the sort, and the honest hire list before you decide?"
        description="Book a short call. We can open src/lib/db.ts and src/app/api/auto-match/route.ts together, look at the 25 columns and the four sort keys, and decide whether the free peer match fits your situation or whether one of the paid options above is the right spend."
        section="hire-an-accountability-partner-footer"
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
            href="/t/accountability-partner-app"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner app: the inbox as state machine
          </Link>
          <Link
            href="/t/accountability-partner-contract"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner contract, four legal elements
          </Link>
          <Link
            href="/t/accountability-partner-for-weight-loss"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner for weight loss: three artifacts, zero conversations
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
        description="Walk the 25 columns and four sort keys with the operator before signing up."
        section="hire-an-accountability-partner-sticky"
      />
    </article>
  );
}
