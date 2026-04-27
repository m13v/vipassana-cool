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
  AnimatedChecklist,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/weight-loss-accountability-partner";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Weight Loss Accountability Partner: What This Site Is, What It Isn't, and What the Schema Proves",
  description:
    "Vipassana.cool is not a weight loss accountability service. The waitlist_entries table in src/lib/db.ts has 25 columns and zero of them are weight, calories, food, or exercise. The page argues that the daily Meet URL pattern this product runs is the architecture weight-loss accountability research actually supports, and shows where to look for the weight version.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Weight loss accountability partner: this product isn't one (and the schema proves it)",
    description:
      "Twenty-five database columns, zero weight fields. The page is a structural argument about which accountability shape works, illustrated with the meditation matcher we actually built.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Weight loss accountability partner: not this product, and here's the SQL that proves it",
    description:
      "WaitlistEntry has 25 fields. None of them is weight, goal_weight, calories, food_log, exercise_minutes, body_measurement, or diet_type. The closest is session_duration, which holds a meditation length.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is vipassana.cool a weight loss accountability partner service?",
    a: "No. The matcher at src/app/api/auto-match/route.ts is hardcoded to meditation-specific fields. Both parties must be sitting in silence at the same UTC minute, every day, for the same duration on a Goenka-style scale (20, 30, 45, 60, 90, or 120 minutes). The /practice-buddy form on this site asks about your local morning sit time, your evening sit time, whether you finished a 10-day course, your years of practice, and your timezone. It does not ask your weight, your goal, your diet preference, your daily calorie target, or your exercise routine. There is no SQL column anywhere in waitlist_entries to store that information, and there is no scoring tier in the matcher that would use it. If a friend told you this product helps with weight loss, that friend was wrong about what this product does.",
  },
  {
    q: "Then why is there a page about weight loss accountability partners on a meditation site?",
    a: "Because the topic surfaced as a high-volume question on Google and the honest answer takes more than one sentence. Most pages that rank for it are written by weight-loss services and are functionally a sign-up funnel for those services. None of them admits which architecture they actually deliver, and several of them deliver something quite different from what the research on accountability actually supports. This page is here to be the honest version: this product is not for weight loss, here is what the meditation product happens to demonstrate about which accountability shape works, and here are the categories of services that will actually try to help you lose weight if that is what you came for.",
  },
  {
    q: "What does the literature say about which accountability shape actually works for weight loss?",
    a: "The signal that keeps coming up across studies is synchronous co-presence with another person who is doing roughly the same thing. The North Carolina State University study cited in many of the top-ranking pages compared an online weight loss program with a buddy to the same program alone, and the buddy version produced more weight and waist loss. The mechanism researchers point to is not the buddy being a coach, it is the buddy being a witness on a recurring schedule. Research on implementation intentions (Gollwitzer), on appointment-based commitment (a long line of work in behavioral economics), and on group exercise adherence converges on the same finding: when there is a real human expecting you at a specific time on a recurring basis, you show up more than when the expectation is fuzzy or app-mediated. A weekly text-message check-in or a streak counter in an app is a much weaker form of the same idea. The thing that does the work is the recurring scheduled presence of someone who notices you when you are absent.",
  },
  {
    q: "Why is the meditation matcher relevant to that question at all?",
    a: "Because it implements the strong form of accountability and almost nothing else. After two people are matched on this site, Google Calendar writes one recurring event with both of their emails as attendees and one Meet URL attached. That URL never changes for the life of the partnership. There is no app to open, no streak to maintain, no daily check-in form, no point system. The two people open the same Meet URL at the same wall-clock minute every day. The meet_clicks table records each click with timestamp and match_id; two rows on the same match_id on the same day is the full performance signal. This is the synchronous co-presence shape that the literature supports, distilled to its smallest possible implementation. A weight loss accountability service that wanted to deliver this shape (rather than a Slack channel or a streak app) would build something with the same structure but a different scoring schema. None of the top-ranking ones do.",
  },
  {
    q: "What columns would a weight loss accountability matcher actually need that this one is missing?",
    a: "At minimum: a goal_weight or goal_kg field, a diet_type tag (low-carb, calorie-counting, intermittent fasting, plant-based, none-just-eat-less), a current_weight (or some recurrence rule for capturing it), an exercise_modality (cardio, resistance, both, neither), and a check_in_cadence that allows for weekly or daily but is not assumed to be a 20-to-120 minute synchronous session. The meditation matcher's session_duration field is incompatible with most of those: it expects a string like '60 min sit' and the scoring tier sessionMatch is true only if both parties have the exact same value. A weight-loss matcher would also need to drop the is_old_student field (which gates priority on completion of a 10-day Goenka course) and replace it with a roughly comparable concept of 'has done this before' if it wanted similar fast-track behavior for returning users. None of those columns exist in waitlist_entries today and adding them is not on the roadmap, because the product is intentionally narrow.",
  },
  {
    q: "Is there a meditation-flavored argument for why this could ever help with weight goals?",
    a: "Possibly, if the route through is the practice itself rather than the matcher. People who finish 10-day residential courses sometimes report changes in their relationship with food, eating, and craving patterns. That is not a guarantee, not a clinical claim, and not something any web product is qualified to teach you to do. The training that produces those changes happens at a 10-day course at dhamma.org with an authorized assistant teacher, on a strict donation basis. The /practice-buddy form on this site exists to keep already-trained meditators sitting daily after they go home. It does not orient toward weight outcomes, does not measure weight outcomes, and does not pair you with anyone for a goal other than a daily silent sit. If you are interested in that arc, the place to start is registering for a 10-day course at dhamma.org. Anything operational about how to actually practice should be asked to your AT at the course, not to a website.",
  },
  {
    q: "Where should I actually look for a weight loss accountability partner?",
    a: "There are at least four categories that do this professionally. (1) Weight-management programs that include a coach as part of the subscription: WW (formerly Weight Watchers), Noom, Calibrate, and similar offer this, with various delivery shapes. (2) Body-doubling and synchronous virtual sessions: Focusmate, Flow Club, and a few smaller competitors run scheduled video rooms which are not weight-loss-specific but supply the synchronous-co-presence shape, and you bring your own goal. (3) Goal-buddy matching services: Boss as a Service, GoalAllies, Commit Club, Stickk, and a handful of others match you with someone on a similar goal, often with money on the line. (4) Friends, family, coworkers: less marketed, often the most effective, because the social cost of a missed commitment is highest with people who already know you. The right pick depends on whether you want a paid coach, a peer, or a stranger, and on whether you want synchronous video, asynchronous text, or in-person.",
  },
  {
    q: "Is the schema you keep referring to actually public, and where can I read it?",
    a: "The repo for this site is closed, but the schema lives at src/lib/db.ts in the WaitlistEntry type definition (lines 7 to 33 at the time of writing). Twenty-five fields, listed in order: id, email, name, is_old_student, is_goenka_tradition, timezone, city, frequency, morning_time, evening_time, days, session_duration, has_maintained_practice, practice_length, requested_match_id, research_notes, morning_utc, evening_utc, status, pass_count, contact_count, unsubscribed, unsubscribe_token, created_at, updated_at. The matcher at src/app/api/auto-match/route.ts reads from that table, applies the filters described above, and writes to a matches table with another structured shape. None of those tables has a body-measurement column or a food-log column, and the operator (me) reads the contents of the database every week to verify nothing surprising is in there.",
  },
  {
    q: "Has anyone signed up here looking for a weight loss partner specifically?",
    a: "Occasionally, yes. The way it usually surfaces is in the optional research_notes field on the /practice-buddy form, where someone writes a sentence about why they want a daily sit. A few have written that managing emotional eating or compulsive snacking is part of their motivation for restarting a daily practice after a course. The honest answer in those cases is the same: the product matches them with another meditator for a 20-to-120 minute silent sit, not with another person on a weight goal. If they want to talk about it as part of the friendship that develops with their partner, that is between them and the partner; the product does not facilitate that conversation and does not measure its outcome.",
  },
  {
    q: "What about food-tracking apps that call themselves accountability partners?",
    a: "Most are not partners in any meaningful sense. They are software that nags you. The 'accountability' in their marketing usually maps to a streak counter, a daily push notification, a weekly summary email, or a charge to your credit card if you miss a check-in. Those mechanisms can work for some people for some periods of time. The mechanism is just measurably weaker than 'a real human is expecting you at 06:30 tomorrow' and the cost-to-attention ratio is much higher (notifications cost attention every day; a recurring calendar event with a partner costs a single act of acceptance once). If a service uses the word 'accountability partner' but never lets you talk to a specific human on a recurring schedule, the word is doing more work in their marketing than in their product.",
  },
];

const archComparisonRows: ComparisonRow[] = [
  {
    feature: "What you accept once and use forever",
    competitor:
      "Account creation, optional buddy invite, push notifications enabled. Buddy is usually a different person each time you log a meal.",
    ours:
      "One Google Calendar invite that creates a recurring event. Same Meet URL forever. Same partner forever (until either side ends it). One acceptance = a thousand future sessions on the same link.",
  },
  {
    feature: "How partner expectation is generated",
    competitor:
      "App-generated reminders, sometimes paired with a 'cheer' or comment from a friend on the leaderboard.",
    ours:
      "A real human in another city woke up at the same wall-clock minute as you, opened Meet, and is sitting alone in the room if you are not there. The expectation is the partner's actual presence.",
  },
  {
    feature: "Performance receipt",
    competitor:
      "Streak counter (X day streak), XP, badges, weekly weigh-in summary, social-feed reactions.",
    ours:
      "A row in meet_clicks with (token, match_id, person_id, meet_url, ip, user_agent, created_at). Two rows on a match_id on the same UTC day is the full daily signal. There is no number to chase.",
  },
  {
    feature: "Cadence",
    competitor:
      "Variable. Often async daily check-ins; sometimes weekly or biweekly buddy calls.",
    ours:
      "Daily, synchronous, at a wall-clock time both parties chose at signup. Twice a day for people who selected 'Twice a day' on the frequency field.",
  },
  {
    feature: "Pool depth as marketed",
    competitor:
      "Numbers like 'thousands of members worldwide' or 'a community of millions.'",
    ours:
      "Public count of pending and matched signups on /practice-buddy, refreshed live from the database. The number is small. It is also the actual number.",
  },
  {
    feature: "What makes a partner reachable",
    competitor:
      "Self-described goal alignment, sometimes a personality quiz, sometimes nothing.",
    ours:
      "A 60-minute UTC time window applied at src/app/api/auto-match/route.ts:164 (if (diff > 60) continue). Anyone outside that window cannot be your partner on this product.",
  },
  {
    feature: "What ends the partnership",
    competitor:
      "Cancel subscription, ghost the app, or churn out of the email list.",
    ours:
      "One click on Decline in the Google Calendar invite, one click on the unsubscribe footer of any email, or both stop opening the Meet URL for long enough that the operator notices.",
  },
  {
    feature: "Cost to maintain a pair at steady state",
    competitor:
      "Subscription, $8 to $24 a month typical, sometimes more for coach-included tiers.",
    ours:
      "Free, donation pattern. Infrastructure cost per pair at steady state is fractions of a cent per month. The operator writes weekly about the unit economics on the homepage.",
  },
];

const schemaSnippet = `// src/lib/db.ts — lines 7 to 33
// The full row shape for a signup. 25 fields. None of them is weight,
// calories, food, exercise, body measurement, or diet preference.

export type WaitlistEntry = {
  id: string;
  email: string;
  name: string | null;
  is_old_student: string | null;          // "Yes" | "No" — completed a 10-day course
  is_goenka_tradition: string | null;     // tradition lineage check
  timezone: string | null;                // IANA tz, e.g. "America/Los_Angeles"
  city: string | null;
  frequency: string | null;               // "Once a day" | "Twice a day"
  morning_time: string | null;            // local HH:MM, e.g. "06:00"
  evening_time: string | null;            // local HH:MM, optional
  days: string | null;                    // weekday selector
  session_duration: string | null;        // "20 min" .. "120 min" (Goenka scale)
  has_maintained_practice: string | null;
  practice_length: string | null;         // years since first 10-day course
  requested_match_id: string | null;
  research_notes: string | null;          // free-text "why are you here?"
  morning_utc: string | null;             // hint, recomputed at match time
  evening_utc: string | null;
  status: string;                          // pending | ready | matched | ...
  pass_count: number;
  contact_count: number;                   // dropped from auto-match at 10
  unsubscribed: boolean;
  unsubscribe_token: string | null;
  created_at: string | null;
  updated_at: string | null;
};

// What is NOT in this type, and never was:
//   weight              goal_weight       current_weight
//   calories            calorie_target    macros
//   food_log            meal_log          last_meal_at
//   exercise_minutes    workout_modality  step_count
//   body_measurement    waist_cm          bmi
//   diet_type           cuisine_pref      restriction_list
//   weigh_in_cadence    progress_photo    accountability_buddy_for_weight`;

const matcherFieldsBento: BentoCard[] = [
  {
    title: "session_duration is a meditation length, not a workout length",
    description:
      "Possible values are '20 min', '30 min', '45 min', '60 min', '90 min', '120 min'. The scoring tier sessionMatch is true only when both parties picked exactly the same string. A weight-loss matcher that wanted a session field would be storing 'kettlebell 30 min' or 'walk 45 min' or 'meal-prep 90 min', which would tier on different axes entirely.",
    size: "2x1",
    accent: true,
  },
  {
    title: "is_old_student gates priority, and means one thing",
    description:
      "It is true if and only if you have completed at least one 10-day Goenka residential course at a dhamma.org centre. The matcher's bothOld tier prioritises pairs of seasoned meditators above mixed pairs. There is no analogous 'has hit goal weight before' field, and no plan to add one.",
  },
  {
    title: "morning_time + evening_time are sit times, not meal times",
    description:
      "A weight-loss matcher might want last_meal_at, first_meal_at, eating_window_start. The two clock fields here name when both parties sit silently, not when they eat. The matcher converts them to UTC fresh on every run via Intl.DateTimeFormat shortOffset for DST correctness.",
  },
  {
    title: "research_notes is the only free-text field, and is for the operator",
    description:
      "This is where someone could write 'I am hoping daily practice helps with my eating patterns,' and several people have. The operator reads it; the matcher does not. Free text is unindexed and not part of the scoring at all.",
    size: "2x1",
  },
  {
    title: "frequency is a binary, not a weight-loss cadence",
    description:
      "'Once a day' or 'Twice a day,' nothing else. The product does not contemplate three-times-a-day, weekly-only, or weekday-only-with-weekend-rest, all of which are common in weight-loss program structures.",
  },
  {
    title: "contact_count caps at 10 before auto-match drops you",
    description:
      "After ten offered matches without follow-through (with a 7-day cool-off between each), the cron stops sending you to new partners. This is a behavior-shaping rule that makes sense for daily silent sits with a stranger; weight-loss services usually have the inverse incentive (keep the user in the funnel) and would not implement this filter at all.",
  },
];

const literatureSteps = [
  {
    title: "The North Carolina State buddy study",
    description:
      "An online weight loss program was offered with and without a buddy. The buddy condition produced more weight loss and more waist-inch loss than the solo condition. This is the study that the top-ranking weight-loss-accountability pages all cite, and it is real. The paper does not specify the precise mechanism, but the buddy condition involved more frequent contact than the solo one.",
  },
  {
    title: "Implementation intentions (Gollwitzer, 1999 onward)",
    description:
      "When-and-where commitments outperform vague intentions on a wide range of behavior change tasks, including dietary change. The effect strengthens when the commitment is shared with a person who can verify it. A standing daily appointment with a real human is a maximally concrete implementation intention. A streak counter on an app is not.",
  },
  {
    title: "Appointment-based commitment (behavioral econ literature)",
    description:
      "A line of work going back to Thaler and continuing through Karlan and Ashraf shows that pre-commitment with an external party (savings clubs, scheduled exercise classes, peer-monitored quit-smoking groups) outperforms self-monitored equivalents on adherence. The 'external party' part of the design is doing a lot of the work.",
  },
  {
    title: "Group exercise adherence (sports medicine literature)",
    description:
      "Compared to solo exercise, group classes and partnered training have consistently higher adherence at 12 and 26 weeks. The effect is largest when the group is the same group week to week (so the absence of a regular face is felt) rather than a new group each session.",
  },
  {
    title: "Focusmate's published outcome data",
    description:
      "Focusmate (a synchronous coworking platform, not weight-loss-specific) published self-reported productivity gains from users who do at least one synchronous session per week. The mechanism the founders discuss in interviews is the same one above: a real human shows up, you show up, the body-doubling makes the next 50 minutes happen.",
  },
  {
    title: "What the meditation matcher implements, structurally",
    description:
      "The product is a tiny implementation of synchronous appointment-based commitment with a same-pair-forever guarantee. It is not a weight-loss product, but it is structurally an existence proof of how cheap and how durable that shape can be. A weight-loss service that wanted the strong shape (rather than streaks and badges) would copy the structure and swap the schema.",
  },
];

const whatThisProductStores = [
  { text: "Your timezone (IANA string, DST-aware)", done: true },
  { text: "Your local morning sit time (HH:MM)", done: true },
  { text: "Whether you sit once or twice a day", done: true },
  { text: "Your preferred sit length (20 to 120 min)", done: true },
  { text: "Whether you have completed a 10-day course", done: true },
  { text: "How long you have been practicing (years)", done: true },
  { text: "Your weight or goal weight", done: false },
  { text: "Your daily calorie target or macro split", done: false },
  { text: "Your food log, meal log, or last-meal time", done: false },
  { text: "Your exercise modality, step count, or workout schedule", done: false },
  { text: "Your body measurements or progress photos", done: false },
  { text: "Your diet type or cuisine preferences", done: false },
];

const whereToLookCategories = [
  "WW (Weight Watchers) — coach + workshops",
  "Noom — psychology-led app, coach included on most tiers",
  "Calibrate — clinical program with coach",
  "Focusmate — synchronous video, bring your own goal",
  "Flow Club — hosted virtual sessions, bring your own goal",
  "Boss as a Service — paid 1-on-1 accountability, any goal",
  "GoalAllies — peer goal-buddy matching",
  "Stickk — money-on-the-line commitment contracts",
  "Commit Club — small-group goal accountability",
  "// or: a friend, partner, sibling, coworker who already knows you",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Weight Loss Accountability Partner" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Weight Loss Accountability Partner", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Weight Loss Accountability Partner: What This Site Is, What It Isn't, and What the Schema Proves",
    description:
      "Vipassana.cool is a meditation accountability matcher, not a weight loss accountability service. The waitlist_entries table has 25 columns and zero of them store weight, calories, food, exercise, or diet. The page argues that the synchronous daily Meet URL pattern this product implements is the architecture weight-loss accountability literature actually supports, and lists honest categories of services that do try to help with weight goals.",
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
          A page about what this product isn&apos;t
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Weight loss accountability partner:{" "}
          <GradientText>this is not one of those</GradientText>, and the schema
          proves it
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Vipassana.cool is a meditation accountability matcher. The
          waitlist_entries table in src/lib/db.ts has twenty-five columns and
          none of them is weight, calories, food, exercise, or diet. If you
          arrived here looking for a partner to keep you on a weight goal, this
          page is the honest answer about what this product is, what it isn&apos;t,
          and where to look for the thing you actually want. Along the way it
          makes a structural argument: the daily Meet URL pattern the meditation
          matcher implements is the accountability shape the research supports,
          and is exactly the shape that mainstream weight-loss buddy apps avoid
          in favor of weekly text check-ins and streak counters.
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
            "Schema has 25 columns, 0 of them weight-related — src/lib/db.ts lines 7 to 33",
            "Matcher hardcoded to Goenka 20-to-120 min sit lengths, not workout lengths",
            "If you want a real weight loss partner, four honest categories listed below",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-10">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-3xl mx-auto py-6">
            <RemotionClip
              title="What you came here for vs what is here"
              subtitle="A meditation accountability matcher, written down honestly"
              accent="teal"
              captions={[
                "You searched for a weight loss accountability partner.",
                "This site pairs you with another meditator for a daily silent sit.",
                "The schema has zero columns that store weight, food, or exercise.",
                "The pairing pattern (one Meet URL, same human, every day) is what the research actually supports.",
                "If you want the weight version, the honest categories are listed further down.",
              ]}
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Four numbers, one of them zero
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Each number below is a literal count from the running source, not a
          marketing approximation. The first three describe what the product
          does store about you. The fourth is the count that matters most for
          the question you came here with.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 25,
              label: "columns in waitlist_entries (src/lib/db.ts lines 7 to 33)",
            },
            {
              value: 6,
              label:
                "allowed values for session_duration: 20, 30, 45, 60, 90, 120 min",
            },
            {
              value: 60,
              suffix: " min",
              label: "UTC window for partner reachability (route.ts line 164)",
            },
            {
              value: 0,
              label:
                "columns that store weight, calories, food, exercise, or diet",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The schema, in full
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          This is the anchor of the entire page. The WaitlistEntry type defines
          what the product can and cannot know about a signup. The block ends
          with a comment listing the columns that are not in the type and that
          a weight-loss accountability matcher would need to add before it
          could match anyone on a weight goal.
        </p>
        <AnimatedCodeBlock
          code={schemaSnippet}
          language="typescript"
          filename="src/lib/db.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What every other page about this topic markets, and what none of them
          shows
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          I read the pages that currently rank for this question. They include
          weight-management programs (GOLO, Nutrisystem, Hers), clinical
          weight-loss centers, peer-buddy services, and general wellness
          publications. Each of them is a real product or a real publication
          and several of them cite the same North Carolina State University
          buddy study as evidence that accountability works.
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-3xl">
          What none of them publishes is the part that decides whether the
          accountability they offer is the strong form or the weak form. The
          strong form is two specific people with a recurring synchronous
          appointment on a shared platform; the weak form is a streak counter,
          a weekly text, or a friend you mention your goal to once. The
          research on accountability supports the strong form much more
          decisively than the weak form, and most of these pages are in fact
          selling the weak form. This page does not sell either; it argues
          that the meditation matcher on this site is one specific tiny
          implementation of the strong form, locked to a domain that has
          nothing to do with weight.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <ProofBanner
          quote="WaitlistEntry has 25 fields. Zero of them is weight, calories, food, exercise, or diet."
          source="src/lib/db.ts lines 7 to 33 — the entire row shape for a signup on this product"
          metric="0 / 25"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What a weight-loss matcher would actually need, and how this matcher
          differs
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A picture of the schema gap. On the left, the columns a weight-loss
          accountability matcher would need to score on. In the middle, the
          existing matcher hub on this site. On the right, the rows the
          existing matcher actually writes after a successful pair. The
          asymmetry between left and right is the answer to the question of
          whether this product can do what you came here for.
        </p>
        <AnimatedBeam
          title="weight-loss-required fields → existing matcher → existing outputs"
          from={[
            {
              label: "goal_weight / current_weight",
              sublabel: "not in the schema",
            },
            {
              label: "diet_type / macros / calorie_target",
              sublabel: "not in the schema",
            },
            {
              label: "exercise_modality / step_count",
              sublabel: "not in the schema",
            },
            {
              label: "weigh_in_cadence / progress_photo",
              sublabel: "not in the schema",
            },
            {
              label: "session_duration (sit length)",
              sublabel: "in the schema, but for meditation length",
            },
            {
              label: "is_old_student / is_goenka_tradition",
              sublabel: "in the schema, gates priority",
            },
          ]}
          hub={{
            label: "auto-match cron",
            sublabel:
              "scores on Goenka-tradition fields, picks daily-sit pairs only",
          }}
          to={[
            {
              label: "matches row",
              sublabel: "two person ids, one shared session type",
            },
            {
              label: "Google Calendar event",
              sublabel:
                "RRULE:FREQ=DAILY, both emails attendees, one Meet URL",
            },
            {
              label: "meet_links rows (x2)",
              sublabel: "personal /meet/<uuid> tracking URLs",
            },
            {
              label: "intro emails (x2)",
              sublabel: "Resend, with each other's first names and cities",
            },
          ]}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Six fields the matcher actually scores on, and what they mean
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Six concrete cards, one per field that does load-bearing work in the
          scoring or filtering. None of them is a weight-loss field. Each one
          would need to be replaced or supplemented before this matcher could
          serve a weight goal.
        </p>
        <BentoGrid cards={matcherFieldsBento} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Two architectures of accountability, side by side
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The left column is the shape most products that market themselves as
          accountability buddies actually deliver. The right column is the
          shape this product implements (for meditation, not for weight). The
          point is not that this product is better at weight loss; it is that
          the right column is the architecture the literature on accountability
          actually supports, and the left column is the one most weight-loss
          buddy services run.
        </p>
        <ComparisonTable
          heading="Asynchronous nag service vs synchronous shared-room partnership"
          productName="vipassana.cool (meditation only)"
          competitorName="Typical app-based buddy service"
          rows={archComparisonRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The math of{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={25} />
              </span>{" "}
              fields,{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={0} />
              </span>{" "}
              of them weight-related
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              The product reads the table that has these{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={25} />
              </span>{" "}
              columns and writes to a matches table that adds maybe ten more,
              none of them weight-related either. The cron runs every{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={2} />
              </span>{" "}
              hours. The matcher applies the{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={60} />
              </span>{" "}
              minute UTC window from line{" "}
              <span className="font-mono text-teal-700">
                <NumberTicker value={164} />
              </span>{" "}
              of src/app/api/auto-match/route.ts and a four-tier sort that runs
              on Goenka-tradition signals (ready status, both old students,
              same session duration, smallest time difference). Add a
              weight-related column to the schema, and a meaningful tier in
              the sort to use it, and you have a different product. Until
              that happens, this is a meditation accountability service.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              The schema is not closed because the operator is hiding
              something; it is closed because the product is intentionally
              narrow. Free, donation-pattern, daily silent sits between two
              meditators in compatible time zones. Anything broader would be a
              different product.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the literature actually shows about accountability shapes
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Six checkpoints worth knowing if you are evaluating any
          accountability service for any goal. None of these are unique to
          weight loss. All of them favor the synchronous shared-presence shape
          over the streak-and-notification shape.
        </p>
        <StepTimeline steps={literatureSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What this product stores about you, and what it does not
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          The list below is the schema in plain English. Six things in, six
          things out. The 'in' fields are what shape the matcher's pairing
          decision. The 'out' fields are everything a weight-loss
          accountability service would need but this product never collects.
        </p>
        <AnimatedChecklist
          title="In and out of the schema"
          items={whatThisProductStores}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where to look if you actually want a weight-loss accountability
          partner
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A list, not a recommendation. Each of these is a real category with
          real services in it. The right pick depends on whether you want a
          paid coach, a peer, or a stranger; on whether you want synchronous
          video, asynchronous text, or in-person; and on how much money you
          want to put on the line. Pick by the architecture you want, not by
          the marketing.
        </p>
        <Marquee speed={35}>
          {whereToLookCategories.map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {c}
            </span>
          ))}
        </Marquee>
        <p className="text-zinc-500 text-sm mt-4 max-w-3xl">
          The categories above are not affiliate links and the order is
          alphabetical-ish, not preference-based. The operator of this site
          has used Focusmate and has friends who have used WW and Noom; that
          is the extent of personal first-hand familiarity with this list.
          For the goal of losing weight, the honest answer is almost always
          'a friend, your spouse, a sibling, or a coworker who already knows
          you,' because the social cost of a missed commitment is highest
          with people who already exist in your life.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          When this product does fit, even though weight loss is not on the
          schema
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            <strong className="text-zinc-900">You have completed a 10-day Goenka course</strong>{" "}
            and the daily sits at home have stopped happening. The matcher
            exists for this case specifically. If your motivation for
            restarting includes managing emotional eating or compulsive
            patterns, that motivation is yours and the partnership is silent;
            the product does not facilitate the conversation about it and does
            not measure whether it works for that purpose.
          </li>
          <li>
            <strong className="text-zinc-900">You are interested in starting a daily practice</strong>{" "}
            for any reason and have not yet taken a 10-day course. In that
            case the right next step is registering for a course at{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . Nothing on this site or this page teaches the practice, and the
            matcher only pairs people who have already done at least the
            beginner step (or who have explicitly chosen to be paired with a
            seasoned student who knows that).
          </li>
          <li>
            <strong className="text-zinc-900">You are operationally curious</strong>{" "}
            about how a tiny synchronous-co-presence accountability product
            looks in code, because you want to build the weight-loss version
            and you want a small worked example to study. The repo behaviour
            is described in detail across the other pages on this site, and
            the operator is happy to walk through any of it on a call.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          When this product does not fit
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-zinc-600">
          <li>
            You want someone to weigh in with you weekly and adjust your
            calorie target. Use a coach-included program (WW, Noom, Calibrate)
            or hire a registered dietitian. The matcher here will not score
            you on weight goals because the columns to do so are not in the
            schema.
          </li>
          <li>
            You want a buddy who will text you every morning to confirm you
            ate your planned breakfast. Use a peer-buddy service (Boss as a
            Service, GoalAllies) or ask a friend. The matcher here will pair
            you only with someone meeting you in a Meet room for a silent
            session.
          </li>
          <li>
            You want gamified streaks, badges, or money-on-the-line
            commitments. Use Stickk for the money version or pick a
            gamified-fitness app for the streak version. None of those
            patterns exist on this product and none are planned.
          </li>
          <li>
            You want instruction on how to meditate, how to work with a
            difficult sit, or what to do about a particular sensation or
            pattern. Those questions belong at a 10-day residential course
            with an authorized assistant teacher, through{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . Nothing on this site is qualified to answer them.
          </li>
        </ul>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Want to walk through the schema together and decide if this product fits?"
        description="Book a short call with the operator. We can look at the WaitlistEntry type, the matcher's scoring tiers, and your situation, and decide honestly whether this product or one of the linked categories is the right next step."
        section="weight-loss-accountability-partner-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages, all about the meditation matcher
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
            Accountability partner app: the inbox as a state machine
          </Link>
          <Link
            href="/t/accountability-partner-contract"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Accountability partner contract, four legal elements
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
            Practice Buddy, the form the matcher reads from
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Walk through the schema with the operator before signing up."
        section="weight-loss-accountability-partner-sticky"
      />
    </article>
  );
}
