import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  ProofBanner,
  ComparisonTable,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-retreat-what-to-expect";
const PUBLISHED = "2026-06-15";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Retreat: What To Expect (From Someone Who Sat Six Courses)",
  description:
    "What to expect at a 10-day Vipassana retreat, split into the part that is fixed at every center (4:00 AM bell, ~10 hours of meditation, two meals, 5 PM tea, total silence, no phone) and the part nobody can predict for you. Timetable verified from dhamma.org's Code of Discipline on 2026-06-15.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Retreat: What To Expect (From Someone Who Sat Six Courses)",
    description:
      "The daily container is identical at every center: 4:00 AM bell, ~10 hours of meditation, two meals plus 5 PM tea, complete noble silence, phone surrendered. The inner experience is the part that varies. Timetable verified from dhamma.org on 2026-06-15.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What to expect at a 10-day Vipassana retreat",
    description:
      "Six courses at three centers. The timetable was identical every time. The inner experience never was. What you can calibrate to, and what you can't.",
  },
  robots: { index: true, follow: true },
};

const metrics = [
  { value: 6, label: "10-day courses I have sat" },
  { value: 3, label: "centers across NorCal, Bay Area, Central CA" },
  { value: 10, suffix: "+ hrs", label: "of meditation per full course day" },
  { value: 1000, suffix: "+", label: "days of daily practice and counting" },
];

const fixedVsVariable: ComparisonRow[] = [
  {
    feature: "The daily timetable",
    ours:
      "4:00 AM wake bell, meditation in blocks from 4:30 AM until ~9:00 PM, lights out 9:30 PM. Roughly ten hours of sitting. This was identical at all three centers I sat at.",
    competitor:
      "How any given block feels. A morning that drags one course flies by the next. There is no reliable pattern to which sittings will be heavy.",
  },
  {
    feature: "Food",
    ours:
      "Two vegetarian meals (breakfast, lunch) and a 5:00 PM tea break. New students may have fruit at tea; there is no dinner.",
    competitor:
      "Whether the evening hunger bothers you. The 5 PM tea cutoff was rough my first course and a non-issue by my third once I ate more at lunch.",
  },
  {
    feature: "Noble silence",
    ours:
      "Complete silence of body, speech, and contact from the evening of day 0 until the morning of day 10, when talking resumes. Men and women are fully separated throughout.",
    competitor:
      "What the silence does to you. Some courses it lands as deep relief; other courses the outside quiet just turns the volume up on everything inside.",
  },
  {
    feature: "The hard stretch",
    ours:
      "There is reliably a wall somewhere in the ten days. Everyone I have ever talked to hit one.",
    competitor:
      "Which day it lands on. The popular 'day 2 is the hardest, day 6 you break through' maps were wrong for me more often than they were right across six courses.",
  },
  {
    feature: "Day 10 and leaving",
    ours:
      "Silence formally lifts the morning of day 10, the course ends early on day 11, and your phone comes back. That sequence is fixed.",
    competitor:
      "The emotional release people describe. It is real and it is common, but it is not guaranteed and it cannot be scheduled. Some of my strongest courses had quiet endings.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the daily schedule at a 10-day Vipassana retreat?",
    a: "A 4:00 AM wake bell, then meditation in blocks from 4:30 AM through about 9:00 PM, with a breakfast break at 6:30, lunch at 11:00, a 5:00 PM tea break, an evening discourse, and lights out at 9:30 PM. It adds up to roughly ten hours of meditation a day. The full timetable is published in the Code of Discipline at dhamma.org and was the same at every center I sat at.",
  },
  {
    q: "Do I really have to give up my phone for the whole time?",
    a: "Yes. Phones, smartwatches, and other electronics are deposited at the start and returned at the end. You also surrender books, journals, and writing materials. There is nothing to read, nothing to record, and no way to reach the outside world for the duration.",
  },
  {
    q: "Is there really no dinner?",
    a: "There are two meals, breakfast and lunch, plus a tea break around 5:00 PM. New students may have fruit at tea; old students typically have only liquids. There is no evening meal. People manage this very differently, and for most it stops being a big deal after the first day or two.",
  },
  {
    q: "What does noble silence actually mean?",
    a: "Silence of body, speech, and mind: no talking, no gestures, no eye contact, no physical contact with other students for the first nine and a bit days. Men and women are completely separated. You can speak to the teacher about your practice and to the management about material needs. Silence formally lifts on the morning of day 10.",
  },
  {
    q: "Will day 2 be the hardest? When does it get easier?",
    a: "There is no dependable day-by-day emotional map, which is the honest answer most guides skip. Across six courses the difficult stretch landed on a different day almost every time, and a couple of courses had no single dramatic day at all. Expect a wall somewhere; do not expect to know in advance where it sits. Anything about how to handle a difficulty on the cushion is something to raise with an authorized assistant teacher at the course, not from a web page.",
  },
  {
    q: "How physically demanding is sitting for ten hours a day?",
    a: "The hours are real and the body notices. Back, knees, and hips commonly complain, especially early on, and the centers provide cushions, benches, and chairs for people who need them. The discomfort is part of what students report wrestling with; it is not a sign you are doing anything wrong.",
  },
  {
    q: "Are the conditions the same at every center?",
    a: "The timetable, the silence, the meals, and the technique are standardized worldwide. The physical conditions are not. A purpose-built center may have single rooms with private bathrooms; a rented camp venue may have bunk beds and shared rooms of six to twelve. My first course was at a rented camp with rough conditions, and day ten there was still one of the best of my life.",
  },
  {
    q: "How do I actually learn the technique or sign up?",
    a: "The technique is taught only inside the 10-day residential course by authorized assistant teachers, and courses are run on a donation basis. For dates, locations, applications, and anything operational, go to dhamma.org. This page is one practitioner sharing what the experience is like, not instruction.",
  },
];

const related: RelatedPost[] = [
  {
    title: "The 10-day course structure, hour by hour",
    href: "https://vipassana.cool/t/10-day-course-structure",
    excerpt:
      "The full daily timetable broken down block by block, from the 4:00 AM bell to lights out.",
    tag: "Logistics",
  },
  {
    title: "What you actually commit to on a 10-day course",
    href: "https://vipassana.cool/t/ten-day-commitment",
    excerpt:
      "The six things you agree to when you register, enumerated from the Code of Discipline.",
    tag: "Before you go",
  },
  {
    title: "What a 'Vipassana retreat' actually is",
    href: "https://vipassana.cool/t/vipassana-retreat",
    excerpt:
      "The 401-location network behind the course, and why venue type changes the room you sit in.",
    tag: "Background",
  },
];

const timetable: { time: string; block: string }[] = [
  { time: "4:00 AM", block: "Wake-up bell" },
  { time: "4:30 – 6:30 AM", block: "Meditation in the hall or your room" },
  { time: "6:30 – 8:00 AM", block: "Breakfast break and rest" },
  { time: "8:00 – 9:00 AM", block: "Group sitting in the hall" },
  { time: "9:00 – 11:00 AM", block: "Meditation in the hall or your room" },
  { time: "11:00 – 12:00", block: "Lunch break" },
  { time: "12:00 – 1:00 PM", block: "Rest and teacher interviews" },
  { time: "1:00 – 2:30 PM", block: "Meditation" },
  { time: "2:30 – 3:30 PM", block: "Group sitting in the hall" },
  { time: "3:30 – 5:00 PM", block: "Meditation" },
  { time: "5:00 – 6:00 PM", block: "Tea break" },
  { time: "6:00 – 7:00 PM", block: "Group sitting in the hall" },
  { time: "7:00 – 8:15 PM", block: "Evening discourse" },
  { time: "8:15 – 9:00 PM", block: "Group sitting in the hall" },
  { time: "9:00 – 9:30 PM", block: "Question time, then lights out" },
];

export default function Page() {
  const breadcrumbs = [
    { name: "Home", url: "https://vipassana.cool" },
    {
      name: "What to expect at a Vipassana retreat",
      url: PAGE_URL,
    },
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana Retreat: What To Expect (From Someone Who Sat Six Courses)",
              description:
                "What to expect at a 10-day Vipassana retreat, split into the fixed daily container and the variable inner experience. Timetable verified from dhamma.org on 2026-06-15.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "https://vipassana.cool" },
            { label: "What to expect at a retreat" },
          ]}
        />
      </div>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pt-8 pb-4">
        <p className="text-sm font-medium text-teal-700 mb-4">
          A practitioner&apos;s account, not instruction
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          What to expect at a Vipassana retreat
        </h1>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Most guides on this hand you a single emotional script: day two is the
          worst, day six you break through, day ten you cry. I have sat six
          10-day courses at three different centers. The timetable was identical
          every single time. The inner experience was different every single
          time. That gap is the whole point of this page.
        </p>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
          className="mt-8"
        />
      </header>

      {/* Direct answer */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified June 15, 2026
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Expect a 10-day silent residential course on a fixed daily
            timetable: a <strong>4:00 AM wake bell</strong>, roughly{" "}
            <strong>ten hours of meditation</strong> broken into blocks, two
            vegetarian meals with a <strong>5:00 PM tea break</strong> and no
            dinner, <strong>complete noble silence</strong>, and your{" "}
            <strong>phone surrendered</strong> on arrival. That external
            structure is the same at every center in the tradition. The part
            nobody can predict for you is the inner experience, and after six
            courses I can tell you the popular day-by-day emotional maps are
            unreliable.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Timetable and rules verified from the{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-700 underline underline-offset-2"
            >
              dhamma.org Code of Discipline
            </a>
            .
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <MetricsRow metrics={metrics} />
        <p className="mt-4 text-sm text-zinc-500">
          The daily-practice counter on this site has passed a thousand
          consecutive days. None of what follows is theory; it is what the
          container felt like to actually sit inside, repeatedly.
        </p>
      </section>

      {/* Thesis */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          The mistake every &quot;what to expect&quot; guide makes
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Read four or five of the popular accounts and you will notice they all
          describe the same arc as if it were a law of physics. Day one is
          novelty. Day two or three is the crash. Day six is the breakthrough.
          Day ten the silence breaks and everyone weeps in the parking lot. It
          reads like a movie because someone&apos;s real first course felt that
          way, and then everyone copied the shape.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The problem is that this map sets you up to fail at the one thing you
          most want going in: knowing what is coming. When your hard day lands on
          day four instead of day two, or when day six brings nothing at all, you
          start grading yourself against a script that was never going to match.
          That self-grading is its own kind of suffering, and it is avoidable.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A more useful way to prepare is to sort everything you have heard into
          two buckets: the things that are genuinely fixed, which you can plan
          around, and the things that are personal and variable, which you
          cannot. Calibrate hard to the first bucket. Hold the second one
          loosely. I am not a teacher; this is just the framing that would have
          saved me a lot of needless scorekeeping before my first course.
        </p>
      </section>

      {/* Comparison */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <ComparisonTable
          heading="What is fixed vs. what varies"
          intro="Same five dimensions, sorted into the part you can expect and the part you cannot. The left column is standardized worldwide. The right column changed on me from one course to the next."
          productName="The container (expect this)"
          competitorName="Your inner experience (can't script it)"
          rows={fixedVsVariable}
        />
      </section>

      {/* The fixed scaffold detail */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          The container, in detail
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the part you can and should memorize before you go, because it
          will not surprise you and it will not change. The published daily
          timetable, straight from the Code of Discipline, looks like this. It
          was the same at the rented camp where I sat my first course and at the
          purpose-built center where I sat my most recent one.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-zinc-50 text-left">
                <th className="px-4 py-3 font-semibold text-zinc-900 w-40">
                  Time
                </th>
                <th className="px-4 py-3 font-semibold text-zinc-900">
                  What happens
                </th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((row, i) => (
                <tr
                  key={row.time}
                  className={i % 2 === 1 ? "bg-zinc-50/60" : "bg-white"}
                >
                  <td className="px-4 py-3 font-medium text-zinc-900 align-top whitespace-nowrap">
                    {row.time}
                  </td>
                  <td className="px-4 py-3 text-zinc-700">{row.block}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Source: the official daily schedule on{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>
          , re-checked June 15, 2026.
        </p>

        <p className="mt-6 text-zinc-700 leading-relaxed">
          Alongside the clock, four other things are fixed. Complete noble
          silence from the first evening until the morning of day ten. Two meals
          plus a 5:00 PM tea break, with no dinner. A full surrender of phones,
          watches, books, and writing materials for the duration. And complete
          separation of men and women, including separate walking areas. None of
          these is negotiable, and none of them ever caught me off guard after
          the first time.
        </p>
      </section>

      {/* Anchor / proof */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <ProofBanner
          quote="Across six courses at three centers, the timetable above did not move by a single minute. The popular 'day two is the hard day, day six you break through' map matched my actual experience on fewer than half of those courses."
          source="Six 10-day courses: Dhammamanda (NorCal), CYO (Bay Area), North Fork (Central CA)"
          metric="6 / 6"
        />
      </section>

      {/* The variable part */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          The inner experience, which you can&apos;t pre-plan
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is where I diverge hardest from the standard account. People want
          a forecast for the inside of their own head, and there isn&apos;t one.
          What students commonly report is a wide range: long stretches of
          boredom, buried memories surfacing, physical discomfort that comes and
          goes, unexpected stillness, restlessness that has nothing to hook onto.
          Which of those shows up, and when, is not something a guide can hand
          you in advance.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          My own courses are the clearest evidence I have. My first, at a rented
          camp with bunk beds and twelve people to a room, had a brutal middle
          and then a day ten that genuinely rewired how I relate to my own mind.
          A later course in much nicer conditions was steady and undramatic the
          whole way through, with no single hard day and no parking-lot catharsis
          at the end, and it was still one of the most valuable. If I had walked
          into either one expecting the movie version, I would have spent the
          quiet course convinced I was doing it wrong.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So the honest expectation to set is this: expect a wall somewhere,
          expect that you will not know where it sits, and expect that the ending
          might be loud or might be quiet. Both are normal. Anything more
          specific than that about your inner experience is a forecast nobody can
          actually make for you. And anything about how to work with a difficulty
          once you are on the cushion belongs with an authorized assistant
          teacher at the course, not on a website.
        </p>
      </section>

      {/* Practical calibration */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          What this means for how you prepare
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Since the container is the predictable part, that is where preparation
          actually pays off. Sorting out logistics before you arrive frees you to
          let the inner experience be whatever it is going to be. The small,
          concrete things matter more than people expect: the 5:00 PM tea cutoff
          stops being painful once you eat more at lunch, and arriving already
          used to going to bed early makes the 4:00 AM bell far less cruel.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Beyond that, the single most useful thing I did was stop treating the
          ten days as a performance to be scored. The course is not a test you
          pass by having the right feelings on the right day. It runs on its own
          fixed rails regardless of what your mind does, and your only job is to
          keep showing up to each block on the timetable. That, you can count on
          completely.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For dates, locations, applications, and anything operational, the
          authoritative source is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>
          . Courses are run entirely on a donation basis, and the technique is
          taught only inside the course itself.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Going to sit your first course?"
          description="If you want to talk through what to expect with someone who has sat six of them, or get matched with a practice buddy for after, grab a slot."
        />
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">
          Common questions
        </h2>
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <RelatedPostsGrid
          title="Keep reading before you go"
          posts={related}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about your first course? Talk to someone who has sat six."
      />
    </article>
  );
}
