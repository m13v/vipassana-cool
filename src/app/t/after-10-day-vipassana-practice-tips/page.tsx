import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  MetricsRow,
  BentoGrid,
  TerminalOutput,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/after-10-day-vipassana-practice-tips";
const PUBLISHED = "2026-05-13";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "After a 10-day Vipassana course: 12 practice tips from 6 courses, and the four numbers behind the one tip that decides everything",
  description:
    "Twelve tactical things I learned across 6 courses about keeping a daily sit alive after returning home. Plus the four operational numbers in the buddy-matching cron (±60 min UTC, 24h floor, 7-day cooldown, 10-attempt cap) that decide whether the single tip that matters most actually works.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "After a 10-day Vipassana course: 12 practice tips from 6 courses",
    description:
      "Twelve tactical things from 6 courses. Plus the four integers in the matching cron that decide whether the one tip that holds the rest together actually works.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "12 post-course practice tips from 6 courses, plus the four numbers behind the one that matters",
    description:
      "±60 min UTC hard filter, 24h signup floor, 7-day cooldown, 10-attempt cap. The visible architecture under the only tip that survives motivation.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "In one sentence, what is the most useful tip from 6 courses for the period right after a 10-day Vipassana course?",
    a: "Have a recurring Meet event already on the calendar with another old student before you leave the center. The 4-week post-course arc still happens. The cushion still gets cold by Week 2. The structural question of whether the practice survives is decided by whether that one calendar entity already exists when motivation runs out, which it always does. The Goenka tradition's framing of old-student practice lives at https://www.dhamma.org/en/about/code. Operational questions about how to practice belong with an authorized assistant teacher.",
  },
  {
    q: "Why does this page lead with one specific tip instead of a balanced list?",
    a: "Because after 6 courses my read is that the balanced list is downstream of one specific structural choice. Buffer days, journaling, screen delays, careful re-entry, group sittings, books, podcasts, all of those are good. None of them survive the third Tuesday in February where I am tired and the cushion looks unfriendly. The recurring Meet on the other side of the screen does. The other tips are real and they show up in the bento grid further down the page. Ordering matters, and structure beats willpower.",
  },
  {
    q: "Is this saying every other piece of post-course advice is wrong?",
    a: "No. The advice on the after-retreat guide on this site is honest and I follow most of it myself. The point is about precedence. The advice is what you do once the structural anchor is in place. It is not what you do instead of the anchor. If you only have time for one thing in the 48 hours after a course, set up the daily recurring sit with one other person, then read the integration tips. The advice is downstream of the calendar entity, not a substitute for it.",
  },
  {
    q: "What are the four numbers in the matching code and why do they matter to a reader's daily practice?",
    a: "They are: a hard ±60 min UTC window for pairing two sit times (line 187 of src/app/api/auto-match/route.ts), a 24 hour minimum wait after signup before any auto-match runs (line 96), a 7 day cooldown after a failed match before re-pairing (line 106), and a 10-attempt cap after which a person stops getting matched (line 92, the 'serial ghoster' guard). They matter to a reader because they are the only honest answer to 'will the buddy actually exist when I get home.' A buddy whose sit time is more than an hour off mine in UTC will never appear. A signup made the morning of Day 11 has to wait until Day 12 before the cron looks at it. A pair that goes silent costs the participant 7 days before the next attempt and after the 10th attempt the system stops trying.",
  },
  {
    q: "How is this different from a regular accountability app?",
    a: "An app sends notifications. The room here is empty unless someone is in it. The recurring Google Meet exists on both calendars before the first sit and the link is identical every day. Nothing has to be remembered, defended, or recovered. The asymmetry is the actual mechanism. The four numbers above are not a feature list, they are the operational floor under whether two people who meant well in May are still showing up in November. The matching service is free and runs on a cron with no streaks, badges, push notifications, or paid tier.",
  },
  {
    q: "Are these tips a substitute for teacher guidance from a 10-day course?",
    a: "No. None of the tips on this page describe the technique. They describe logistics, environment, calendar architecture, food, sleep, group sittings, and the post-course felt-state arc. Anything operational about how to sit, what to work with on the cushion, what to do with a difficult sensation, or how to handle a strong experience belongs with an authorized assistant teacher at a 10-day residential course. Course logistics are at https://www.dhamma.org/en-US/courses/search.",
  },
  {
    q: "What if the person paired with me ghosts?",
    a: "The system marks the match closed and waits 7 days (line 106) before considering me for another pair. That cooldown is intentional. Re-pairing instantly produces a worse next match because the candidate pool has not changed. The 10-attempt cap (line 92) exists because after 10 attempts the bottleneck is not the algorithm. Most pairs work for a few weeks, then drift, then re-form with someone new. The architecture admits that the partnership ends sometimes and rebuilds. The day counter on the site has no reset button for the same reason.",
  },
  {
    q: "Do I need to be a Goenka old student to be paired?",
    a: "The matching surface at /practice-buddy is built around old students because that is the population I am from and where pairing with a stranger works without a teacher in the middle. The system does accept other practitioners and pairs across traditions when sit times line up. The architecture does not police lineage. Two people who have committed to a recurring daily sit and whose times are within an hour of each other in UTC is the matching unit. Nothing more.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "After a 10-day course: 12 practice tips" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "After a 10-day course: 12 practice tips", url: PAGE_URL },
];

const tipCards: BentoCard[] = [
  {
    size: "2x1",
    accent: true,
    title: "1. The recurring Meet beats every other tip on this list",
    description:
      "After 6 courses I keep arriving at the same finding. The only post-course practice that survived past Week 2 was the one with another human on the other side of a calendar link. Everything below this card is real and useful. None of it is load-bearing the way this one is. Set the recurring Meet up while you are still at the center if you can.",
  },
  {
    size: "1x1",
    title: "2. Mornings before anything else",
    description:
      "I sit 45 to 60 minutes mornings, ahead of phone, food, and email. By my second course I noticed evening sits are the first thing real life eats. Mornings are the only slot real life cannot reach. This is descriptive of my own pattern, not a prescription for yours.",
  },
  {
    size: "1x1",
    title: "3. The 5pm tea cutoff plan",
    description:
      "The first course I was hungry by 7pm and miserable by 9pm. By the third course I had learned to eat much more at lunch on Days 1 and 2. Going in with that already calibrated for the next course saved me hours of unnecessary noise on the cushion.",
  },
  {
    size: "1x1",
    title: "4. A 1 to 2 day buffer before work",
    description:
      "Driving home on Day 10 afternoon and going to a Zoom call on Day 11 morning is a known mistake. I have made it twice. One full day at home before any work calendar entry lets the felt-state of the course land without being argued with.",
  },
  {
    size: "1x1",
    title: "5. Delay the phone 24 hours",
    description:
      "The phone reorganizes the nervous system in about 90 seconds of doom-scrolling. Holding it for 24 hours after returning home does not preserve anything magical, it just keeps the gradient gentle. I am not always successful at this. The pattern is correlated with the practice surviving the next 30 days.",
  },
  {
    size: "1x1",
    title: "6. Group sittings where available",
    description:
      "Most centers and many cities run weekly old-student group sittings. The room of other people who sat the same course is its own technology. The list of group sitting locations is at https://www.dhamma.org. I attend when one is available locally.",
  },
  {
    size: "1x1",
    title: "7. Voice memo, not a journal",
    description:
      "Writing about a course on Day 11 produces overly clean prose that does not match the felt state. A 90 second voice memo recorded into the phone before getting out of bed catches more of what is actually there. I do not transcribe them. The point is the recording, not the artifact.",
  },
  {
    size: "1x1",
    title: "8. One course per year is the standing recommendation",
    description:
      "The tradition recommends one 10-day course per year for old students. I followed that for the first three years (4 courses in Year 1, then 1, then 1). The annual return is part of the practice, not a separate event. Course logistics are at https://www.dhamma.org.",
  },
  {
    size: "1x1",
    title: "9. The cushion goes in one specific place",
    description:
      "Same cushion, same corner, same direction every morning. Eliminates the small daily question of where to sit, which is enough friction to compound into not sitting on a hard day. By Year 2 I stopped moving it even when traveling, taking it on the road instead.",
  },
  {
    size: "1x1",
    title: "10. The day counter has no reset",
    description:
      "The running counter on this site has no reset button by design. A missed day is logged, the count continues. The shame loop of resetting at Day 47 is what makes people abandon the count entirely. Treating it as a continuous record rather than a streak survives the broken day.",
  },
  {
    size: "1x1",
    title: "11. Operational questions go to a teacher",
    description:
      "Anything about how to sit, what to do with a sensation, how to handle a difficult experience, or what the technique means belongs with an authorized assistant teacher at a 10-day course. Not with a website, not with a subreddit, not with a podcast. The instructions were given at the course where you sat. That is the right address.",
  },
  {
    size: "1x1",
    title: "12. Accept that motivation will fade",
    description:
      "It always does. The first 30 days run on the felt-state of the course. The next 60 are quieter. By Day 100 the cushion is ordinary. The practice is not a feeling. The practice is what is on the calendar after the feeling moved on, which is why card 1 holds the rest together.",
  },
];

const relatedPosts = [
  {
    title: "After Vipassana: daily practice, rewiring habits, and the long work",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course is the seed. Daily sitting over months is what actually rewires compulsive patterns. The long-form essay version of why the bento grid above is ordered the way it is.",
    tag: "Reflection",
  },
  {
    title: "Post-course integration into daily life: the calendar entity, not the four-week project",
    href: "/t/post-course-integration-into-daily-life",
    excerpt:
      "The structural reading of integration. The recurring Meet event is the architecture. The 4-week felt-state arc is real and runs on a separate clock. Confusing the two is what loses the practice.",
    tag: "Architecture",
  },
  {
    title: "Post-retreat reentry crash: what is actually crashing, and what is not",
    href: "/t/post-retreat-reentry-crash",
    excerpt:
      "The 1 to 4 week felt-state crash arc, separated from the structural shift the course produced. Reading from the inside of the crash. Useful for Days 11 to 30.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "After a 10-day Vipassana course: 12 practice tips from 6 courses, and the four numbers behind the one tip that decides everything",
    description:
      "Twelve tactical things from 6 courses for keeping a daily sit alive after returning home, and the four operational numbers in the matching cron that decide whether the one structural tip actually works.",
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

      <BackgroundGrid pattern="dots" glow>
        <header className="max-w-3xl mx-auto px-6 pt-8 pb-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Notes from 6 courses, 970+ days of daily practice
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            After a 10-day course: <GradientText>twelve tips</GradientText>, and the four numbers behind the one tip that holds the rest together
          </h1>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            I keep landing on the same finding after 6 courses at 3 centers. Twelve of the things I learned post-course are real and listed below. One of them is structurally different from the other eleven, and the reason is visible in four specific integers in a 592-line file in the repo this site runs on. This page describes what I noticed, not what you should do. Anything operational about the technique goes to an authorized assistant teacher.
          </p>
        </header>
      </BackgroundGrid>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="9 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-13)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            What survived for me across 6 courses: a recurring Meet event with another old student whose sit time was within an hour of mine, mornings ahead of phone and food, a 1 to 2 day buffer before returning to work, eating heavily at lunch on Days 1 and 2 of every subsequent course to handle the 5pm tea cutoff, a 24-hour phone delay on Day 11, weekly group sittings where available, a voice memo instead of a written journal, one course per year as the standing rhythm, the cushion in one fixed place, a continuous day counter with no streak reset, and the discipline of taking every operational question back to an authorized assistant teacher rather than a website. The Goenka tradition&apos;s framing of old-student practice lives at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>{" "}
            (daily practice, group sittings, one course per year). Recorded discourses for old students live at{" "}
            <a
              href="https://discourses.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              discourses.dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <MetricsRow
          metrics={[
            { value: 6, label: "courses sat" },
            { value: 3, label: "centers" },
            { value: 970, suffix: "+", label: "daily-practice days" },
            { value: 40, suffix: "+", label: "days of dhamma service" },
          ]}
        />
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-6">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The twelve tips, in priority order
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-600 leading-relaxed">
          The card at the top is the only one that has held across six courses. Cards 2 through 12 are real and most of them are visible somewhere in my actual week. They live in the right order under the first one. Treat the grid as a record of what I noticed, not a checklist of what to do.
        </p>
        <BentoGrid cards={tipCards} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <ProofBanner
          quote="881 days in and I still struggle with evening sits. mornings are non-negotiable though, 45 min before anything else."
          source="Notes from Day 881, a few months before this page was written"
          metric="970+"
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why card 1 is structurally different from the other eleven
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The other eleven tips are tactics I run on myself. They depend on me showing up to apply them. Card 1 is a tactic the room runs on me. The Meet exists whether I look at it or not. Someone else has the same link on their calendar at the same time tomorrow. The architecture decides who that someone is, and the way it decides them is visible in four integers in the matching cron at <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">src/app/api/auto-match/route.ts</code> on the public repo.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The point of putting the numbers on this page is not the algorithm. The point is that &ldquo;find a buddy in your time zone&rdquo; is a generic phrase in every other post-course tips guide online. The version on this site has specific values that determine whether the buddy exists for any given reader. Reading the numbers is the easiest way to know what to expect when you sign up.
        </p>

        <div className="mt-8">
          <TerminalOutput
            title="src/app/api/auto-match/route.ts (excerpts, line numbers preserved)"
            lines={[
              { type: "info", text: "Line 29:  Any session can match any other session within ±60 min UTC" },
              { type: "command", text: "// Line 92 (the 'serial ghoster' cap)" },
              { type: "output", text: "if (c.contact_count >= 10) continue;" },
              { type: "command", text: "// Line 96 (24-hour signup floor)" },
              { type: "output", text: "if (now - createdAt > DAY_MS) eligible.push(c);" },
              { type: "command", text: "// Line 106 (7-day post-failure cooldown)" },
              { type: "output", text: "if (now - closedAt > 7 * DAY_MS) eligible.push(c);" },
              { type: "command", text: "// Line 187 (the hard time-window filter)" },
              { type: "output", text: "if (diff > 60) continue;" },
              { type: "success", text: "Four integers. 592 lines total in the file. Zero references to pause, vacation, snooze, or freeze." },
            ]}
          />
        </div>

        <p className="mt-8 text-zinc-700 leading-relaxed">
          The ±60 min UTC window means a sit time in California at 6am Pacific (14:00 UTC) can be paired with someone in London at 14:30 to 15:00 UTC (so a 2:30 to 3:00pm London afternoon sit) or in New York at 9:30 to 10:00am Eastern. The window is small enough that two people are likely sitting around the same actual rhythm, large enough to find a candidate in adjacent time zones. Anything more than an hour off and the pairing is structurally bad and the cron does not produce it.
        </p>

        <p className="mt-4 text-zinc-700 leading-relaxed">
          The 24-hour signup floor means a signup made on Day 11 morning will not be matched until at least Day 12. The cron runs every two hours, so the practical window is &ldquo;sometime on Day 12, depending on who else is in the pool.&rdquo; Knowing this in advance prevents the reader from refreshing the page hoping a match has appeared.
        </p>

        <p className="mt-4 text-zinc-700 leading-relaxed">
          The 7-day cooldown after a failed match exists because re-pairing immediately produces a worse next pair. The candidate pool does not change in an hour. Forcing a week between attempts gives the pool time to refresh and gives the rejected user a week to decide whether they want another try.
        </p>

        <p className="mt-4 text-zinc-700 leading-relaxed">
          The 10-attempt cap is the honest exit. Most pairs work. Some do not. After ten consecutive non-working matches the bottleneck is not the algorithm and the system stops trying. The user can re-engage by setting status to &lsquo;ready&rsquo; on the practice-buddy page, which bypasses the cap. That switch is the only manual override in the matching code.
        </p>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          Those four numbers are the operational floor under Tip 1. They are the answer to &ldquo;will the buddy actually exist when I get home.&rdquo; Nothing else in any tips guide I have read names them.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-14">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The tradition&apos;s own standing recommendation
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For old students the standing recommendation from the tradition is two hours of daily sitting, weekly group sittings with other old students at the local center, and one 10-day course per year. The Code of Discipline at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          is the canonical reference. The recorded discourses for old students live at{" "}
          <a
            href="https://discourses.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            discourses.dhamma.org
          </a>
          . The tips on this page are downstream of those resources, not in tension with them. Anything operational on the cushion goes through an authorized assistant teacher at the center where you sat. That is the right address for the question.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this page does not solve
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Three honest gaps. It does not solve the post-retreat reentry crash itself; the 1 to 4 week felt-state arc runs on its own clock no matter what is on the calendar (the inside view is at{" "}
          <Link
            href="/t/post-retreat-reentry-crash"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /t/post-retreat-reentry-crash
          </Link>
          ). It does not solve the case where material surfaced at the course is genuinely beyond what daily practice can hold, which is a different conversation with an assistant teacher and possibly a therapist. It does not solve the case where the pairing is the wrong fit; sometimes the room is empty on both sides and the partnership quietly ends. The architecture admits all three. The page is not selling more than the practice actually does.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-14">
        <RelatedPostsGrid
          title="Adjacent reading"
          subtitle="Same neighborhood"
          posts={relatedPosts}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Want to talk through the first 90 days after your course?"
          description="A 20-minute conversation about your specific time zone, sit window, and what's currently in the way. No pitch, no sale, just a fellow practitioner working through the same question."
        />
      </section>

      <FaqSection heading="Frequently asked questions" items={faqs} />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="20 minutes about your post-course practice setup."
      />
    </article>
  );
}
