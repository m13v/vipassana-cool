import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  AnimatedCodeBlock,
  BackgroundGrid,
  GradientText,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/meditation-when-too-tired-to-focus";
const PUBLISHED = "2026-05-14";
const VERIFIED = "2026-05-14";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Meditation When You're Too Tired to Focus: Why a Foggy Sit Still Counts",
  description:
    "Every guide on meditating while tired tells you how to focus better. A 10-day Vipassana course does the opposite: it sits students about ten hours a day on roughly six and a half hours of sleep. Too tired to focus is the normal state there. The real low-energy problem is presence, not focus, and this page explains why, with the actual code of a buddy matcher that does not track focus at all.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Meditation When You're Too Tired to Focus: Why a Foggy Sit Still Counts",
    description:
      "A 10-day course runs on chronic tiredness by design: ten hours of sitting a day on 6.5 hours of sleep. The real problem on a low-energy day is not focus, it is getting to the cushion. Here is why, and the matcher code that proves the point.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meditation When You're Too Tired to Focus",
    description:
      "Too tired to focus is the default state at a 10-day course, not a failure. The real low-energy problem is presence, not focus.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Should I meditate when I'm too tired to focus?",
    a: "Yes, a tired and unfocused sit still counts. A 10-day Vipassana course schedules about ten hours of meditation a day on roughly six and a half hours of sleep, so a foggy sit is the normal operating state there, not a failed one. The honest reframe is that the hard part of a low-energy day is not focusing, it is getting to the cushion at all. That is a presence problem, not a focus problem. For anything about what to do inside the sit itself, the right source is dhamma.org and an authorized assistant teacher at a 10-day course, not a website.",
  },
  {
    q: "Does a sit still count if my mind was foggy the entire time?",
    a: "Within the structure of a 10-day course, every group sitting on the timetable counts as a sitting regardless of how alert the student felt. The course does not grade sits. It does not ask students to report their focus. It schedules a time and fills a hall, and the students who are in their seats have done the sitting. Whether a particular sit felt sharp or fogged is exactly the kind of question that belongs with an assistant teacher, not with this page.",
  },
  {
    q: "Is it really true that a 10-day course runs on that little sleep?",
    a: "Yes. The published 10-day timetable wakes students with a bell at 4:00 am and calls lights out at 9:30 pm, which is about six and a half hours of sleep opportunity, usually in a shared room. Across the day the schedule holds roughly ten hours of meditation. You can read the full timetable on dhamma.org. The point for this page is structural: the most established Vipassana environment in the world was deliberately built around tired students, which tells you that tiredness was never treated as a disqualifier.",
  },
  {
    q: "What should I actually do during the sit when I can't focus?",
    a: "That is an operational question about the technique, and this site does not answer those. How to work with tiredness, drowsiness, or a wandering mind on the cushion is taught inside a 10-day residential course and is the proper domain of an authorized assistant teacher. If you have sat a course, your center welcomes questions by email, phone, and at group sittings. If you have not, the entry point is dhamma.org. This page is only about the outer question of whether to sit at all and what the real low-energy bottleneck is.",
  },
  {
    q: "If I'm exhausted, is it better to skip the sit and just sleep?",
    a: "Sleep is a real need and no website should override your own judgement about your health. What this page can say is narrower: the common belief that a sit requires a rested, focused mind to be worth doing does not match how a 10-day course is structured, since the course sits students while chronically tired for ten days straight. Treating tiredness as an automatic reason to skip tends to quietly end a daily practice, because tired days are frequent. The decision is yours; the framing 'I am too tired, so it would not count anyway' is the part worth questioning.",
  },
  {
    q: "How does a practice buddy help on a low-energy day if they can't see whether I focused?",
    a: "That is the whole point. A buddy on a shared video call cannot see your attention and is not asked to. What they provide is a fixed time and a room that is already occupied, which is the exact structural thing a 10-day course provides with its timetable and full hall. On a day when you are too tired to focus, the buddy does not need you to focus. They need you to show up, and an occupied call is something a human notices in a way a streak counter never will. The matching service at vipassana.cool/practice-buddy pairs old students for silent shared sits on this basis.",
  },
  {
    q: "Does the vipassana.cool matcher track streaks or sit quality?",
    a: "No. The matching code is open source. The query that builds the candidate pool selects eighteen columns about a person, and not one of them is focus, energy, alertness, mood, quality, or streak. Pairing comes down to a single filter: whether two people's sit times overlap within sixty minutes of UTC. The system has no representation of how good a sit was, by design. It can only ever know whether two people were scheduled to sit at the same time, never whether either of them focused.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t/practice-buddy" },
  { label: "Meditation When Too Tired to Focus" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Practice Buddy", url: "https://vipassana.cool/t/practice-buddy" },
  { name: "Meditation When Too Tired to Focus", url: PAGE_URL },
];

const schedule: { time: string; block: string; sitting: boolean }[] = [
  { time: "4:00 am", block: "Wake-up bell", sitting: false },
  { time: "4:30 to 6:30 am", block: "Meditation in the hall or your room", sitting: true },
  { time: "6:30 to 8:00 am", block: "Breakfast and rest", sitting: false },
  { time: "8:00 to 9:00 am", block: "Group sitting in the hall", sitting: true },
  { time: "9:00 to 11:00 am", block: "Meditation in the hall or your room", sitting: true },
  { time: "11:00 am to 12:00 pm", block: "Lunch", sitting: false },
  { time: "12:00 to 1:00 pm", block: "Rest, teacher interviews", sitting: false },
  { time: "1:00 to 2:30 pm", block: "Meditation in the hall or your room", sitting: true },
  { time: "2:30 to 3:30 pm", block: "Group sitting in the hall", sitting: true },
  { time: "3:30 to 5:00 pm", block: "Meditation in the hall or your room", sitting: true },
  { time: "5:00 to 6:00 pm", block: "Tea break", sitting: false },
  { time: "6:00 to 7:00 pm", block: "Group sitting in the hall", sitting: true },
  { time: "7:00 to 8:15 pm", block: "Teacher's discourse", sitting: false },
  { time: "8:15 to 9:00 pm", block: "Group sitting in the hall", sitting: true },
  { time: "9:00 to 9:30 pm", block: "Question time", sitting: false },
  { time: "9:30 pm", block: "Lights out", sitting: false },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Treats 'too tired to focus' as",
    competitor: "A defect in the sit that needs to be corrected",
    ours: "The normal operating state of ten days of practice",
  },
  {
    feature: "The fix it offers",
    competitor: "Sit upright, shorten it, wait for a more alert hour",
    ours: "A fixed timetable and a hall that is already full",
  },
  {
    feature: "What it implicitly measures",
    competitor: "How focused, how long, how 'good' the sit was",
    ours: "Whether the student was in their seat at the scheduled time",
  },
  {
    feature: "Where it puts the weight",
    competitor: "On your attention and willpower on that specific day",
    ours: "On a time and a room, both decided well in advance",
  },
  {
    feature: "On a low-energy day, the live question is",
    competitor: "How do I focus right now?",
    ours: "Did I get to the cushion?",
  },
];

const matcherCode = `// src/app/api/auto-match/route.ts
// The query that builds the pool of people you could be paired with.
const candidates = await sql\`
  SELECT id, name, email, timezone, city, frequency, session_duration,
         morning_time, morning_utc, evening_time, evening_utc,
         is_old_student, status, contact_count, pass_count, created_at,
         unsubscribed, unsubscribe_token
  FROM waitlist_entries
  WHERE status IN ('pending', 'ready') AND unsubscribed = false
\`;

// Eighteen columns about a person. None of them is "focus".
// None is "energy", "alertness", "mood", "quality", or "streak".

// And the single filter that decides who you actually sit with:
const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);
if (diff > 60) continue;  // more than 60 min of UTC apart, skip.
// That is the whole test. A time overlap. Nothing about the sit.`;

const relatedPosts = [
  {
    title: "Vipassana and Sleep",
    href: "/guide/vipassana-and-sleep",
    excerpt:
      "What the research shows about deep sleep and melatonin, and the honest truth about sleeping through your first 10-day course.",
    tag: "Sleep",
  },
  {
    title: "Morning Meditation Habit, the Long View",
    href: "/t/morning-meditation-habit-long-term",
    excerpt:
      "Why the morning sit survives years and the evening sit usually does not, and what actually protects the time.",
    tag: "Consistency",
  },
  {
    title: "5am Meditation Routine",
    href: "/t/5am-meditation-routine",
    excerpt:
      "The 5am hour has the cleanest claim on the calendar and the worst claim against sleep. Real cohort data on who actually picks it.",
    tag: "Timing",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Meditation When You're Too Tired to Focus: Why a Foggy Sit Still Counts",
    description:
      "Every guide on meditating while tired explains how to focus better. A 10-day Vipassana course is built around the opposite premise: students sit about ten hours a day on roughly six and a half hours of sleep. Too tired to focus is the default state there. The real low-energy problem is presence, not focus, demonstrated with the open-source code of a buddy matcher that tracks no focus or quality field at all.",
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
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
          A reflection, not instruction
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Meditation when you are{" "}
          <GradientText>too tired to focus</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-700 max-w-3xl leading-relaxed">
          Almost every guide on this topic answers the same question: how do you
          focus better when you are tired? It tells you to sit up straighter,
          cut the sit short, count something, or wait for an hour when you feel
          sharp. I want to offer a different starting point, drawn from how a
          10-day Vipassana course is actually structured. On that course, too
          tired to focus is not the exception. It is the weather. And once you
          see that, the real problem on a low-energy day turns out to be a
          different problem than the one those guides are solving.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      <section className="max-w-3xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="p-6 md:p-8">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-teal-700 mb-2">
              Direct answer (verified {VERIFIED})
            </p>
            <p className="text-zinc-800 leading-relaxed">
              Yes, you can meditate when you are too tired to focus, and a
              foggy sit still counts. A 10-day Vipassana course schedules about
              ten hours of meditation a day on roughly six and a half hours of
              sleep, so &ldquo;too tired to focus&rdquo; is the normal state
              there, not a failed one. The honest reframe: the hard part of a
              low-energy day is not focusing, it is getting to the cushion at
              all. That is a presence problem, not a focus problem. For anything
              about what to do inside the sit itself, the right source is{" "}
              <a
                href="https://www.dhamma.org"
                className="text-teal-700 underline hover:text-teal-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                dhamma.org
              </a>{" "}
              and an authorized assistant teacher at a 10-day course.
            </p>
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The thesis: a 10-day course is ten hours of sitting on six hours of sleep
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Before any of the focus advice, look at the environment the Goenka
          tradition built. The published 10-day timetable wakes students with a
          bell at 4:00 am and calls lights out at 9:30 pm. That is roughly six
          and a half hours of sleep opportunity, and at many centers it happens
          in a shared room with strangers, snoring, and unfamiliar beds. Then,
          across that same day, the schedule holds about ten hours of
          meditation.
        </p>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          I did four 10-day courses in my first year while working a full-time
          job, and have since sat six in total across three centers. Plenty of
          those course mornings I was running on a few broken hours of sleep in
          a bunk room and could not have told you what a focused mind felt
          like. The course never paused for that. The bell rang, the hall
          filled, and the sitting happened anyway. Here is the timetable that
          governs all ten days.
        </p>
        <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-left text-xs uppercase tracking-wider text-zinc-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold">Block</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {schedule.map((row) => (
                <tr
                  key={row.time}
                  className={row.sitting ? "bg-teal-50/50" : ""}
                >
                  <td className="px-4 py-2.5 font-mono text-zinc-700 whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="px-4 py-2.5 text-zinc-800">
                    {row.block}
                    {row.sitting && (
                      <span className="ml-2 rounded bg-teal-100 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-teal-700">
                        sitting
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-600 max-w-3xl leading-relaxed">
          The rows marked &ldquo;sitting&rdquo; add up to about ten hours. The
          tradition&apos;s own note on this timetable says it was designed
          &ldquo;to maintain the continuity of practice.&rdquo; Continuity, not
          peak alertness. You can read the full schedule on{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            className="text-teal-700 underline hover:text-teal-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            the Code of Discipline page at dhamma.org
          </a>
          . The structural message is hard to miss: the most established
          Vipassana environment in the world was deliberately built around
          tired students. Tiredness was never the disqualifier.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why &ldquo;how do I focus&rdquo; is the wrong question
        </h2>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          Set the common advice next to the course. They are not small
          variations on one idea. They are answering two different questions.
          The advice online assumes the goal of a tired sit is to rescue your
          attention. The course assumes the goal is simply that the sitting
          occurs, and treats your attention on any given day as weather you do
          not control. The table below lines them up.
        </p>
        <ComparisonTable
          competitorName="Common advice online"
          productName="How a 10-day course is built"
          rows={comparisonRows}
          caveat="Neither column is teaching you a technique. The left column is the internet's general framing of tired meditation; the right column is the observable structure of a 10-day course. For what to actually do on the cushion, the source is an authorized assistant teacher."
        />
        <p className="mt-6 text-zinc-700 max-w-3xl leading-relaxed">
          Notice what happens at the bottom row. The advice column asks &ldquo;how
          do I focus right now,&rdquo; which is a question you answer alone, in
          your own head, on the hardest possible day to answer it. The course
          column asks &ldquo;did I get to the cushion,&rdquo; which is a
          yes-or-no question with an external answer. The first question has no
          floor. You can always focus a little worse. The second question has a
          clean floor: you were either in your seat or you were not. A practice
          that depends on winning the first question every tired morning does
          not last. A practice anchored to the second one can.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: the buddy matcher cannot see whether you focused
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A 10-day course gets its &ldquo;did I get to the cushion&rdquo;
          structure for free: a hall, a bell, a fixed schedule, and a hundred
          other people sitting at the same moment. Daily practice at home has
          none of that. The piece this site tries to rebuild is the smallest
          load-bearing part of it, a real human sitting at the same time as you,
          on a shared silent video call. It is the practice-buddy matching
          program at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-800"
          >
            vipassana.cool/practice-buddy
          </Link>
          .
        </p>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          Here is the part you can verify yourself, and the part no competing
          page can copy. The matching code is open source. Below is the real
          query that builds the pool of people you could be paired with, plus
          the single filter that decides who you actually sit with. Read the
          column list closely.
        </p>
        <AnimatedCodeBlock
          code={matcherCode}
          language="typescript"
          filename="src/app/api/auto-match/route.ts"
        />
        <p className="mt-6 text-zinc-700 max-w-3xl leading-relaxed">
          Eighteen columns describe a person to the matcher. Their timezone,
          their sit times, their session length, whether they have sat a
          course, how many times they have been contacted. There is no{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            focus
          </code>{" "}
          column. No{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            energy
          </code>
          , no{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            quality
          </code>
          , no{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            streak
          </code>
          . And the only filter that decides a pairing is{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            timeDiff(...) &gt; 60
          </code>
          : if two people&apos;s sit times are more than sixty minutes of UTC
          apart, skip; otherwise they are a candidate pair. The system has no
          way, anywhere in its data model, to represent how good a sit was. It
          can know you were scheduled to sit at 6:30 am. It can never know
          whether that sit was sharp or fogged. The whole repo is public at{" "}
          <a
            href="https://github.com/m13v/vipassana-cool"
            className="text-teal-700 underline hover:text-teal-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/m13v/vipassana-cool
          </a>{" "}
          if you want to confirm it.
        </p>
        <p className="mt-4 text-zinc-700 max-w-3xl leading-relaxed">
          That is not a missing feature. It is the design. The buddy on your
          call is not a focus auditor. They are a person who is also at their
          cushion, and the only thing they can observe is whether your tile on
          the call is occupied. On a morning when you are too tired to focus,
          that is exactly the right amount of accountability: it asks you for
          presence, the thing you can still deliver while exhausted, and asks
          nothing about attention, the thing you cannot promise on a hard day.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-zinc-900 mb-3">
            The honest counterargument: a foggy sit does accomplish less
          </h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            It would be dishonest to pretend a tired, scattered sit reaches the
            same depth as an alert one. It generally does not, and any
            long-term practitioner knows the difference between the two from the
            inside. So if a tired sit is shallower, why bother showing up for
            one at all?
          </p>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Because the comparison that the &ldquo;why bother&rdquo; question
            assumes is the wrong one. It imagines the choice is a foggy sit
            versus a sharp sit. It almost never is. The real choice on a tired
            morning is a foggy sit versus no sit, and a foggy sit versus a
            skipped day that quietly becomes a skipped week. Tired days are not
            rare. If tiredness is an automatic exemption, the exemption fires
            constantly, and the practice does not survive its first hard month.
            A shallow sit keeps the thread intact. A skipped one starts cutting
            it.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            What a tired sit actually does or does not accomplish inside the
            mind is a real question, and a good one, but it is not a question
            for this page. It belongs with an authorized assistant teacher, who
            is the proper source for anything operational about how the
            practice works. This page is staying strictly on the outer
            structure: whether to sit, and what the real bottleneck is on a
            low-energy day.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where this leaves you on a tired morning
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          So the resolution is not a focus trick. It is a reassignment of the
          problem. When you are too tired to focus, stop trying to win the focus
          question, because there is no winning it on a tired day and the
          attempt is what makes the morning feel like a failure. Move the
          question. The one that matters is whether you got to the cushion, and
          that one you can still answer yes to while exhausted.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The course solved the presence question with a hall and a bell. After
          more than 970 days of daily practice at home (the counter on the
          homepage of this site is live and updates each day), the single most
          reliable thing I have found for solo mornings is not a technique and
          not an app. It is the same thing the course used: another person
          sitting at the same time, where the empty seat is visible to someone.
          A streak counter does not notice an empty cushion. A buddy on a video
          call does, immediately, and that small social fact carries a tired
          morning better than any amount of resolve.
        </p>
        <p className="text-zinc-700 mb-6 max-w-3xl leading-relaxed">
          If you want the structure without the lecture: the{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-800"
          >
            practice-buddy program
          </Link>{" "}
          pairs old students for silent shared sits over video, free, with no
          discussion of technique and no scoring of how the sit went. The{" "}
          <Link
            href="/guide/group-sittings"
            className="text-teal-700 underline hover:text-teal-800"
          >
            weekly group sittings
          </Link>{" "}
          most centers run are the in-person version of the same idea. And the{" "}
          <Link
            href="/guide/daily-practice"
            className="text-teal-700 underline hover:text-teal-800"
          >
            wider note on daily practice
          </Link>{" "}
          covers the other supports the tradition has built around the solo
          sit. None of those pages, and not this one, will tell you what to do
          on the cushion. That stays with{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline hover:text-teal-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher, exactly as the tradition
          intends. I am a fellow practitioner sharing what I have noticed after
          six courses, not a teacher.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Too tired to focus most mornings, and tired of sitting alone with it?"
        description="Book a short call. We can talk through your sit times, your timezone, and whether a practice buddy on a shared silent call is the structure that would actually carry your low-energy days."
        section="meditation-when-too-tired-to-focus-footer"
      />

      <FaqSection items={faqs} heading="Frequently asked questions" />

      <section className="max-w-4xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Related reading on tired mornings and consistency"
          posts={relatedPosts}
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Practice Buddy (the signup form)
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How the matching works
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the tradition itself)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through a practice buddy for your low-energy mornings."
        section="meditation-when-too-tired-to-focus-sticky"
      />
    </article>
  );
}
