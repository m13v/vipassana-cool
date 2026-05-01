import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  AnimatedChecklist,
  StepTimeline,
  ProofBanner,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/preserving-daily-practice-discipline";
const PUBLISHED = "2026-05-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Preserving daily practice discipline by subtraction, not willpower",
  description:
    "Most articles on keeping a daily meditation practice prescribe additive scaffolding: streak counters, weekly check-ins, reward systems, restart rituals. After 945+ days of morning sits, what actually holds is the opposite. The discipline-preservation surface on this site is a 16-line day counter with no reset, a recurring Meet URL with no excused-absence flow, and a matching service whose 1010 lines contain zero pause, vacation, or excused fields.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Preserving daily practice discipline by subtraction, not willpower",
    description:
      "16 lines of code with no reset, RRULE:FREQ=DAILY with no excused-absence flow, 1010 lines of matching code with zero pause primitives. The architecture leaves the early-morning mind no branch where it can negotiate.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Preserving daily practice discipline by subtraction, not willpower",
    description:
      "Discipline is preserved by removing decision points, not by adding motivation. The morning sit holds because there is no branch where the mind can negotiate.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does preserving daily practice discipline actually mean here, in one sentence?",
    a: "Keeping a single recurring action (a 30 to 60 minute morning sit, in this case) on the calendar over months and years, despite changing motivation, energy, travel, mood, weather, and life events. Preservation is the gerund, the ongoing tense, and that is the load-bearing word. The question is not how to start. It is how to keep going on a Tuesday in February when nothing about the morning recommends sitting.",
  },
  {
    q: "Why does this page argue against streak counters, check-ins, and reward systems?",
    a: "Not because they never work, they often help in the first 30 days. The argument is that they all add a moving part the morning mind can negotiate with. A streak counter has a number that can be re-evaluated. A weekly check-in has a meeting that can be rescheduled. A reward system has a contract that can be renegotiated. Each new mechanic adds one more place where willpower has to win an argument before the body gets to the cushion. After 945+ days, what holds is the architecture that removed those negotiation surfaces, not the ones that added them.",
  },
  {
    q: "What does the architecture of subtraction look like, concretely?",
    a: "Four absences and one presence. No streak counter that can break (the day counter on this site reads from a constant in source code, not from a streak the user is responsible for keeping intact). No reschedule path (the morning sit is the same time every day, anchored to a calendar event with RRULE:FREQ=DAILY). No excused-absence category (the matching service has zero pause, vacation, or excused fields across 1010 lines). No motivational re-entry ritual (a missed sit is not narrated; the next morning is the next morning). The one presence is a fixed time and a fixed place. That is the whole surface.",
  },
  {
    q: "How is removing decision points different from just being disciplined?",
    a: "Discipline as a personal trait is something the mind has to summon every morning, against whatever resistance is present that day. Discipline as a property of an architecture is the structural absence of the decision the mind would otherwise have to make. The first one fails on bad days, by design, because bad days are when willpower is lowest. The second one holds on bad days because the morning mind never gets the question. The body is on the cushion before the question becomes legible.",
  },
  {
    q: "Does this mean motivation does not matter at all?",
    a: "Motivation matters in the first month, where it is the only fuel available. After that it is unreliable, and a system that depends on it will lose. The shift this page describes is from a motivation-dependent system to a structurally-defended one. The motivation that started the practice is not still running it 900 days later. What is running it is that the morning sit has been engineered to leave fewer and fewer branches where the mind can step out.",
  },
  {
    q: "How does the day counter on this site embody this argument?",
    a: "It is 16 lines of TypeScript at src/components/day-counter.tsx. A constant BASE_COUNT is set to 881 and a constant REFERENCE_DATE to 2026-02-07. When the component renders, it computes the difference between the current date and the reference date in whole days and adds the base count. There is no API call, no analytics event, no auth, no streak-break logic, no pause feature, no vacation mode, no excused-absence flow, no make-up day, no celebrate-milestone modal, no notification. A reader can check the math. The deliberate absence of the features a typical streak app would treat as table stakes is the point. The number is honest because the surface that produces it is small.",
  },
  {
    q: "What about the matching service, does it preserve discipline differently?",
    a: "Same logic, applied to two people instead of one. The matching service is 1010 lines split across src/lib/emails.ts and src/app/api/auto-match/route.ts. A grep across both files for the words pause, vacation, excused, freeze, snooze, and check-in returns zero matches. There is no asymmetric supervisor role, no progress report template, no nudge cron, no reactivation flow when a partner goes quiet. Two practitioners get one shared Meet URL on RRULE:FREQ=DAILY and an intro email. After that, the room is the entire accountability surface. If both rooms stay empty, the partnership ends quietly. The system never narrates the slip.",
  },
  {
    q: "Is this approach safe for someone in their first 30 days post-course?",
    a: "Yes, but the early phase is still motivation-dependent and that is normal. The architecture-of-subtraction argument is about what holds across years, not what gets you started. In the first month, motivation is doing most of the work, and adding light scaffolding (a paper calendar with a tick per day, one practice partner over Meet, a fixed corner of the bedroom) is reasonable. The shift this page describes happens later. As motivation drops, the system that survives is the one that removed decision points, not the one that piled them up.",
  },
  {
    q: "What about questions about how to actually sit, what the technique looks like inside?",
    a: "Not on this site. Anything operational about the technique itself, how to work with sensation, how to handle restlessness, what to do when the body hurts, belongs with an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page restricts itself strictly to the outer architecture, the calendar, the room, the partner pairing, the absence of pause primitives. The practice itself stays with the tradition.",
  },
  {
    q: "What if I miss a day, or a week, or a month?",
    a: "It happens to everyone. The architecture-of-subtraction view is that the missed day does not need a story. There is no streak to mourn, because the system never asked you to keep one. There is no excused-absence flow, because none exists in the codebase. The next morning is the next morning. If a week or month has gone by, a 10-day course is generally the fastest reset, but in the meantime the morning sit tomorrow is what re-establishes the thread. Nothing about yesterday changes what the cushion at 6:15 AM is.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Preserving daily practice discipline" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Preserving daily practice discipline", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Preserving daily practice discipline by subtraction, not willpower",
    description:
      "An argument that daily meditation discipline is preserved by removing decision points, not by adding motivational scaffolding. Anchored in the actual architecture of vipassana.cool: a 16-line day counter, a daily-recurrence Meet URL, and a matching service with zero pause primitives.",
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
          An argument from 945+ mornings
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Preserving daily practice discipline by subtraction, not willpower
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          Almost every guide on keeping a daily practice alive answers the
          question additively. Add a streak counter. Add a weekly check-in.
          Add a reward. Add a restart ritual. Add a habit stack. After
          almost three years of unbroken morning sits, the version that
          actually held for me is the opposite. Discipline is preserved by
          removing the branches where the morning mind can negotiate, not
          by giving willpower more places to spend itself. This page is
          the argument for that, anchored in the actual code that runs
          this site.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-01
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            How do you keep daily meditation discipline going? By
            removing decision points, not by adding willpower. After
            945+ days, what holds the morning sit is not motivation,
            it is a stripped-down architecture (fixed time, fixed
            place, no streak-pause feature, no excused-absence flow,
            no reschedule path) that leaves the early-morning mind no
            branch where it can step out. The pattern is verifiable in
            the code that runs this site:{" "}
            <a
              href="https://github.com/m13v/vipassana-cool/blob/main/src/components/day-counter.tsx"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              the day counter is 16 lines with no reset
            </a>
            .
          </p>
        </div>
      </section>

      <div className="py-2">
        <ProofBanner
          quote="The system that survives bad mornings is the one that never asked the morning mind a question."
          source="945+ days, 6 courses, three centers"
          metric="945+"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The additive playbook, and why it quietly fails
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          If you ran the search that brought you here, the public answer
          is consistent. Pick a fixed time. Track your streak. Reward
          yourself at 30, 90, 365 days. Find a partner you can text on
          missed days. Plan a restart ritual for when the streak breaks.
          Most articles add at least three of those mechanics, sometimes
          all five.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That stack is genuinely useful in the first 30 to 60 days. The
          early phase of a practice runs on motivation, and motivation
          responds well to scaffolding. A streak counter at day 14 feels
          like progress. A reward at day 30 lands. A partner text after a
          missed day softens the slide.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Then motivation drops. It always drops. Two months in, three
          months in, six months in, the fuel that started the practice
          quietly runs out, and what remains has to carry the daily sit
          on its own. This is the moment most additive systems start to
          fail, and they fail in a recognizable shape. The streak breaks,
          the counter feels like a wound, the partner stops checking
          because they are also struggling, the reward is no longer
          motivating, the restart ritual gets postponed. Each broken
          mechanic is an extra place where the morning mind can argue.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The mechanics did not lie. They worked when motivation was
          there to power them. They were not built to survive the
          motivation drop, because they have moving parts.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The argument: discipline is the absence of negotiation
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The early-morning mind is not the mind you went to bed with. It
          is foggier, more risk-averse, and very good at generating
          articulate, specific, plausible reasons that today is the day
          to skip. It is also, on bad mornings, low on the cognitive
          fuel that willpower runs on.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Every additional decision point is one more chance for that
          mind to win. Did the streak break yesterday? Is the partner
          coming to the call? What does the reward chart say I owe
          myself? Is the restart ritual the right kind of restart? Each
          question is a moment where the morning mind gets to participate
          in the question of whether the sit happens. Each one of those
          moments is a coin flip, weighted toward the version of you
          that does not want to sit.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Subtraction takes the coin off the table. There is no streak
          to evaluate, no partner to confirm, no chart to consult, no
          ritual to choose. The same time, the same place, the same
          recurring calendar event, and the body is on the cushion
          before the question is fully formed. The rest of the day
          arranges itself around that one fact.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The two shapes, side by side
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          Same goal in both tabs. Daily morning sit, sustained over a
          year and beyond. Different surface for the discipline. Tap
          between them and notice which version stops asking the
          morning mind a question.
        </p>
        <BeforeAfter
          title="Additive scaffolding vs. architecture of subtraction"
          before={{
            label: "Additive",
            content:
              "A streak counter on the lock screen, updated each morning. A weekly Sunday call with a partner who reviews the past seven days. A reward at day 30, day 90, day 365. A short restart ritual for when the streak breaks: light a candle, write a paragraph, recommit. A backup partner in case the primary one is travelling. Each mechanic is a separate dependency, and each one has a moment where the morning mind can question whether to engage with it today. The shape is build motivation, then defend it.",
            highlights: [
              "Streak counter that can break",
              "Weekly review meeting that can be rescheduled",
              "Reward chart that can be renegotiated",
              "Restart ritual that can be postponed",
            ],
          }}
          after={{
            label: "Subtractive",
            content:
              "One time, one place, one recurring calendar event with RRULE:FREQ=DAILY. A day counter that reads from a constant in source code, with no break-state to mourn. If a partner is involved, one shared Meet URL with no separate weekly call. No vacation mode. No excused-absence category. No reactivation flow. The system does not narrate slips, because it has no slip primitive. Missing a day is not data the system collects; it is just not sitting that morning. The shape is remove the moments where the mind can negotiate.",
            highlights: [
              "Day counter with no reset, no streak-break logic",
              "Calendar event on RRULE:FREQ=DAILY, no reschedule path",
              "Zero pause, vacation, or excused fields in the code",
              "Missed day is not narrated, the next morning is the next morning",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: 16 lines, no reset
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The day counter that appears on this site is one component
          file at{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/components/day-counter.tsx
          </code>
          . It is 16 lines of TypeScript. It exports a single React
          component that renders a number followed by a plus sign. The
          number is computed at render time from two constants and the
          system clock. That is the whole surface.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A short list of features the file deliberately does not have:
        </p>
        <AnimatedChecklist
          title="What the day counter is missing on purpose"
          items={[
            { text: "No API call (the number is not stored anywhere)", checked: false },
            { text: "No authentication (no user, no profile, no session)", checked: false },
            { text: "No analytics event when it ticks over", checked: false },
            { text: "No streak-break logic (it cannot break)", checked: false },
            { text: "No pause feature (no way to freeze the count)", checked: false },
            { text: "No vacation mode (no way to mark days as excluded)", checked: false },
            { text: "No make-up day (no way to backfill a missed sit)", checked: false },
            { text: "No celebrate-milestone modal at 100, 365, 900", checked: false },
            { text: "No notification when the number changes", checked: false },
            { text: "No share button, no social proof loop, no leaderboard", checked: false },
          ]}
        />
        <p className="text-zinc-700 mt-6 max-w-3xl leading-relaxed">
          The deliberate absence of those features is the point. The
          number is honest because the surface producing it is small.
          You can{" "}
          <a
            href="https://github.com/m13v/vipassana-cool/blob/main/src/components/day-counter.tsx"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            read the file
          </a>{" "}
          and verify the math. The same logic, scaled up, runs the
          matching service. Across{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/lib/emails.ts
          </code>{" "}
          (458 lines) and{" "}
          <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">
            src/app/api/auto-match/route.ts
          </code>{" "}
          (552 lines), a grep for the words pause, vacation, excused,
          freeze, snooze, and weekly check-in returns zero matches. The
          accountability layer offered to two practitioners is one
          shared Meet URL on a daily recurrence, and nothing else.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the architecture actually looks like, in order
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          Below is the order in which the early-morning friction layer
          gets stripped down. Each step removes one place where the
          morning mind would otherwise have to make a choice. The shape
          is not a list of habits to add. It is a list of decisions to
          delete.
        </p>
        <StepTimeline
          steps={[
            {
              title: "Lock the time",
              description:
                "One specific clock time, every day, including weekends. Not 'sometime in the morning'. The decision of when is removed first, because it is the decision the morning mind argues with most often. After this, the alarm is the only signal needed.",
            },
            {
              title: "Lock the place",
              description:
                "One specific corner of one specific room. Not 'wherever I am that day'. The cushion lives there permanently. The decision of where is removed next, because place changes are the second-most common reason a sit gets skipped or shortened.",
            },
            {
              title: "Remove the streak",
              description:
                "No counter you are responsible for keeping intact. The day counter on this site reads from a constant in source code; the user is not maintaining a number that can break. A missed day is not a wound that needs to heal, because there is no thing to heal.",
            },
            {
              title: "Remove the reschedule path",
              description:
                "No 'sit later today'. No 'make it up this evening'. The morning slot is the slot. If it gets missed, it gets missed; the next morning is the next morning. Without a reschedule branch, the mind cannot use the promise of later as an excuse for now.",
            },
            {
              title: "Remove the excused-absence category",
              description:
                "No vacation mode. No 'travel days do not count'. No 'sick days are exempt'. The matching service has zero pause or excused fields across 1010 lines of code, and the day counter has no exclusion logic. The system does not maintain a list of valid reasons.",
            },
            {
              title: "Optionally, add one human",
              description:
                "If a partner is part of the architecture, the partner is one shared Meet URL on RRULE:FREQ=DAILY with no separate weekly call. The partner is in the room or not in the room. Their presence or absence is the only signal. There is no progress conversation, no nudge cron, no reactivation flow.",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The counterargument, and where it lands
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A reasonable objection. If the architecture is so stripped
          down, what gets a beginner through the first month, when the
          practice is fragile and there is no track record yet to lean
          on? The honest answer is that motivation does that work. The
          first 30 days of any daily practice are motivation-fuelled by
          definition; that is not the season this page is about. Light
          additive scaffolding in the early window (a paper calendar
          with a tick per day, one practice partner over Meet, a fixed
          corner of a room) is fine, and arguably necessary.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The shift this page describes happens later. Around the
          two-month mark, when the motivation that started the practice
          starts to fade, the question becomes which scaffolding gets
          carried forward and which gets quietly dropped. The mechanics
          that survive are the ones that hold without active
          maintenance. The mechanics that get dropped are the ones that
          asked the morning mind a question every day. What this page
          argues is that, by the second or third month, the only
          structural surface that should still be load-bearing is the
          time, the place, and the recurrence rule. Everything else has
          done its job and can be retired.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          A second objection. Does this not make the practice feel
          mechanical, joyless, robotic? In practice, the opposite
          happens. Removing the decision-making surface frees the
          attention that used to go into negotiating with the morning.
          The mornings stop being a fight. They stop being a story at
          all. Most of them are unmemorable, which is what an actual
          long-term daily practice tends to look like from the inside.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A closing note, and a redirect
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Nothing on this page touches the technique. The question of
          how to actually sit, how to work with sensation, how to
          handle restlessness, how to read what is happening inside any
          single sit, is for an authorized assistant teacher at a
          10-day residential course, arranged through{" "}
          <a
            href="https://www.dhamma.org/"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          . The argument here is strictly about the outer architecture,
          the calendar, the room, the partner pairing, the absence of
          pause primitives. The practice itself stays with the
          tradition.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          If a partner shaped around the same logic is useful, the
          matching service on this site is one option. It has been
          described in detail at{" "}
          <Link
            href="/t/partner-accountability"
            className="text-teal-700 underline hover:text-teal-900"
          >
            partner accountability without a single check-in
          </Link>
          , and the pairing intake lives at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            practice-buddy matching
          </Link>
          . Free, tradition-respectful, two practitioners and one
          shared room, no surveys after the fact.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          If a longer reflection on what the daily reps actually rewire
          is useful, see{" "}
          <Link
            href="/t/vipassana-daily-practice"
            className="text-teal-700 underline hover:text-teal-900"
          >
            vipassana daily practice rewiring, rep by rep
          </Link>
          . And if the question is more about coming home from a course
          and turning a glimpse into a daily thing,{" "}
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="text-teal-700 underline hover:text-teal-900"
          >
            after vipassana, daily practice and rewiring habits
          </Link>{" "}
          is the more direct page.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Want to talk through what your version of subtraction looks like?"
          description="Free 30-minute call. Not teaching. Just a peer conversation about which decision points are still in the way of your morning sit, and which ones are quietly safe to delete."
        />
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-6 my-14">
        <FaqSection
          title="Frequently asked questions"
          items={faqs}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through your morning architecture, no teaching."
      />
    </article>
  );
}
