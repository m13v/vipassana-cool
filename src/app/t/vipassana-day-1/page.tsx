import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GradientText,
  GlowCard,
  ProofBanner,
  MotionSequence,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-day-1";
const PUBLISHED = "2026-06-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Day 1: what the first full day is actually like (from six of them)",
  description:
    "Day 1 of a 10-day Goenka course is the first full meditation day after the Day 0 arrival evening: a 4 AM wake into about 10 hours of sitting, noble silence already running, and for most people it is not the hardest day. Reflections from six first-days across three centers, plus where to verify the schedule on dhamma.org.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Day 1: the day everyone documents and the day that matters least",
    description:
      "What the first full day of a 10-day Vipassana course is really like, why Day 0 and Day 1 are not the same thing, and why Day 1 is deceptively manageable compared to days 2 to 6. Notes from six courses across three centers.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Day 1, from someone who has sat six of them",
    description:
      "Day 0 is arrival. Day 1 is the first full day, and it is rarely the hard one. Here is what actually happens and what the diaries get wrong.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Day 1" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Day 1", url: PAGE_URL },
];

const arcFrames = [
  {
    title: "Day 0 — arrival (not Day 1)",
    body: (
      <p className="text-zinc-700">
        You arrive mid-afternoon, hand in your phone, get a room, eat a light
        meal, sit through orientation. Noble silence starts that evening. No
        meditation day has happened yet. This is the part most diaries skip,
        which is why people miscount.
      </p>
    ),
    duration: 150,
  },
  {
    title: "Day 1 — the first full day",
    body: (
      <p className="text-zinc-700">
        The 4 AM bell. About 10 hours of sitting in blocks. Running on novelty,
        nerves, and the resolve that got you here. It feels like a lot, and it
        also feels survivable. That combination is exactly what fools people.
      </p>
    ),
    duration: 150,
  },
  {
    title: "Days 2 to 6 — the actual climb",
    body: (
      <p className="text-zinc-700">
        The novelty wears off, the body starts protesting the hours, and the
        mind gets loud. This is the stretch where people quietly plan their
        exit. The structure has not changed at all. You have.
      </p>
    ),
    duration: 160,
  },
  {
    title: "Day 10 — speech returns",
    body: (
      <p className="text-zinc-700">
        Noble silence ends mid-morning. The room full of strangers you sat
        beside for nine days suddenly has voices. Whatever happened on Day 1 is
        a distant memory by now.
      </p>
    ),
    duration: 150,
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is the arrival day Day 0 or Day 1?",
    a: "Arrival day is Day 0. You arrive in the afternoon (registration runs roughly 2:00 to 5:00 PM), there is a light meal in the early evening, then orientation, and noble silence begins that night. Day 1 is the next morning, the first full day of meditation. The official course pages label the schedule Day 0 through Day 10, and the arrival-day menu on dhamma.org is literally headed 'Day 0'. So when someone says 'vipassana day 1' they usually mean the first full sitting day, not the day they showed up. Source: dhara.dhamma.org/courses/what-to-expect.",
  },
  {
    q: "What time does Day 1 start and how long is it?",
    a: "The wake bell is at 4:00 AM. The day is roughly 10 hours of sitting broken into blocks, built around three group sittings, with breakfast, lunch, a tea break, and an evening discourse in between, and lights out around 9:30 PM. Day 1 follows the same daily clock as days 2 through 9. For the full hour-by-hour timetable see our 10-day course structure breakdown and the official Code of Discipline at dhamma.org/en/about/code.",
  },
  {
    q: "Is Day 1 the hardest day?",
    a: "For most people, no. Day 1 runs on novelty and the determination that got you to sign up, so it tends to feel intense but manageable. The harder stretch is usually days 2 to 6, once the newness wears off and the hours start to accumulate. Our first-course tips guide opens with exactly this: 'Days 2 to 4 are the hardest. Everyone wants to leave.' Treating Day 1 as a reliable preview of the whole course is the most common miscalibration I see in first-timers. Not a teacher, just sharing what I noticed across six courses.",
  },
  {
    q: "Will I be taught the technique on Day 1?",
    a: "The course begins with a concentration phase and introduces the Vipassana technique itself later in the course. The specifics of what is taught and when are transmitted only inside the course by authorized assistant teachers, so this page does not describe the method. For anything operational about how the practice works, go to dhamma.org and ask an authorized assistant teacher at a 10-day course. That is the only place the technique is actually taught.",
  },
  {
    q: "Does noble silence start on Day 1?",
    a: "It starts the evening of Day 0, before Day 1 even begins. So by your first full day you are already not speaking, not gesturing, and not making eye contact with other students. You can still talk to the teacher about practice and to management about practical needs. Most people find the silence is the easy part; it is the noise inside your own head on Day 1 that is loud.",
  },
  {
    q: "What surprised you most about Day 1 across six courses?",
    a: "How different it felt each time. On my first course at CYO (a rented camp with bunk beds) Day 1 was mostly clock-watching and quiet panic about what I had signed up for. By my sixth course Day 1 was almost mundane, just settling into a rhythm I already knew. A first-timer can only describe one Day 1. The thing nobody warns you about is that the day means something completely different depending on how many you have sat.",
  },
];

const related = [
  {
    title: "The 10-day course structure, hour by hour",
    href: "/t/10-day-course-structure",
    excerpt:
      "The full daily clock, the three load-bearing group sittings, and the single structural shift on Day 10.",
    tag: "Logistics",
  },
  {
    title: "First course tips: 15 things I wish I knew",
    href: "/guide/first-course-tips",
    excerpt:
      "Why days 2 to 4 are the hardest, how to handle the food and the cold, and what actually matters once you are there.",
    tag: "Preparation",
  },
  {
    title: "What to expect on a Vipassana retreat",
    href: "/t/vipassana-meditation-retreat-what-to-expect",
    excerpt:
      "The wider picture beyond Day 1: conditions, silence, food, and what the ten days ask of you.",
    tag: "Experience",
  },
];

export default function VipassanaDay1Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana Day 1: what the first full day is actually like",
              description:
                "Day 1 of a 10-day Goenka course is the first full meditation day after the Day 0 arrival evening. What happens, why Day 0 and Day 1 are different, and why Day 1 is rarely the hardest day.",
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
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbSchemaItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            Course experience
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl">
            Vipassana Day 1 is the day everyone documents and the day that{" "}
            <GradientText>matters least</GradientText>
          </h1>
          <div className="mt-5">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="7 min read"
            />
          </div>
        </header>

        {/* Direct answer, high on the page */}
        <div className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-18
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            Day 1 is the first full meditation day, the morning after the Day 0
            arrival evening. It starts with a 4:00 AM wake bell and runs about
            10 hours of sitting, broken into blocks around three group sittings,
            with noble silence already in effect since the night before. For
            most people it is intense but manageable, not the hardest day. The
            harder stretch comes on days 2 to 6.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Schedule details verified against{" "}
            <a
              href="https://dhara.dhamma.org/courses/what-to-expect/"
              className="text-teal-700 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org (What to Expect)
            </a>{" "}
            and the official Code of Discipline. This page describes the
            experience; it does not teach the technique.
          </p>
        </div>

        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-semibold text-zinc-900">
            First, the thing the diaries get wrong: Day 0 is not Day 1
          </h2>
          <p className="text-zinc-700">
            Search around for &quot;vipassana day 1&quot; and you mostly find
            personal recaps that start the count on the day the writer drove up
            to the center. That is Day 0, not Day 1. On Day 0 you arrive in the
            afternoon (registration runs roughly 2:00 to 5:00 PM), hand over
            your phone, get a bed, eat a light meal in the early evening, sit
            through an orientation, and then noble silence begins that night.
            You have not meditated for a single course hour yet.
          </p>
          <p className="text-zinc-700">
            Day 1 is the next morning. It is the first full day on the schedule,
            and it is where most of what people actually mean by &quot;the first
            day&quot; happens: the 4 AM bell, the long blocks, the first real
            collision between your expectations and the room. Getting this
            numbering straight matters, because almost every comparison people
            make (&quot;was day 1 bad?&quot;) is really a comparison between two
            different days.
          </p>
        </section>

        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-semibold text-zinc-900">
            What Day 1 actually contains
          </h2>
          <p className="text-zinc-700">
            The wake bell is at 4:00 AM. From there the day is roughly ten hours
            of sitting, not in one block but split across the morning, midday,
            afternoon, and evening, hung around three group sittings in the main
            hall. There is breakfast, a long lunch and rest, a tea break in the
            late afternoon, an evening discourse, and lights out around 9:30 PM.
            Day 1 runs on the same clock as days 2 through 9; the schedule does
            not get harder or easier as the course goes on. If you want the
            full hour-by-hour timetable, I broke it down in the{" "}
            <Link
              href="/t/10-day-course-structure"
              className="text-teal-700 underline"
            >
              10-day course structure guide
            </Link>
            .
          </p>
          <p className="text-zinc-700">
            What changes across the course is not the timetable. It is you. And
            that is the whole reason Day 1 is misleading.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            The shape of the first days
          </h2>
          <p className="mt-4 text-zinc-700">
            Here is the arc as I have lived it, simplified. Watch where the
            difficulty actually sits, and notice that Day 1 is near the bottom
            of the climb, not the top.
          </p>
          <div className="mt-6">
            <MotionSequence
              title="Day 0 to Day 10, and where it actually gets hard"
              frames={arcFrames}
            />
          </div>
        </section>

        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why Day 1 feels manageable (and why that is a trap)
          </h2>
          <p className="text-zinc-700">
            On Day 1 you have three things working for you that you will not
            have on Day 3: novelty, adrenaline, and the resolve that got you to
            actually show up. Everything is new, so your attention has something
            to do just by looking around at the situation you are in. Your body
            has not yet logged enough hours on the cushion to start sending
            complaints. And the decision to come is still fresh, so quitting
            does not feel like an option yet.
          </p>
          <p className="text-zinc-700">
            All three of those fade. By days 2 to 6 the newness is gone, the
            hours have accumulated in your back and knees and hips, and the part
            of your mind that signs up for hard things has gone quiet while the
            part that wants to leave gets loud. Our{" "}
            <Link
              href="/guide/first-course-tips"
              className="text-teal-700 underline"
            >
              first-course tips
            </Link>{" "}
            guide opens on exactly this point, and it is the single most useful
            thing to know going in.
          </p>
        </section>

        <ProofBanner
          quote="Day 1 is not the test. It is the warm-up that feels like the test. The people who quit almost never quit on Day 1, they quit on Day 3 or 4 when the novelty is gone and the structure has not changed."
          source="From my notes across six courses"
          metric="Days 2–6"
        />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Six first-days, three centers
          </h2>
          <p className="mt-4 text-zinc-700">
            This is the part a single diary cannot give you, and it is why I
            think the generic &quot;here is my Day 1&quot; post is a bit of a
            dead end. A first-timer has exactly one Day 1 to report. I have sat
            six.
          </p>
          <div className="mt-6">
            <GlowCard>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
                  Anchor fact you can hold me to
                </p>
                <p className="mt-3 text-zinc-800">
                  Six courses across three centers: Dhammamanda in NorCal, CYO
                  in the Bay Area, and North Fork in Central California. My
                  first Day 1 (at CYO, a rented camp with bunk beds and a dozen
                  people to a room) was mostly clock-watching and a quiet
                  &quot;what have I done.&quot; By my sixth course, Day 1 was
                  almost boring, just settling into a rhythm I already knew in
                  my body.
                </p>
                <p className="mt-3 text-zinc-700">
                  Same schedule, same 4 AM bell, same first day on paper. The
                  experience of it was unrecognizable from the first course to
                  the sixth. That gap is the thing no first-day recap can ever
                  cover, because it only shows up across repetition.
                </p>
              </div>
            </GlowCard>
          </div>
          <p className="mt-6 text-zinc-700">
            The practical takeaway is small but real: do not over-read your own
            Day 1. If it felt easy, that is not a promise about Day 3. If it
            felt brutal, that is not a verdict on the whole course either. It is
            one data point, collected on the day you had the most novelty and
            the least fatigue. Hold it loosely.
          </p>
        </section>

        <section className="mt-12 space-y-5">
          <h2 className="text-2xl font-semibold text-zinc-900">
            What I will not put on this page
          </h2>
          <p className="text-zinc-700">
            You will notice I have not described what you actually do with your
            attention on Day 1, or what the early part of the course works with,
            or what gets introduced later. That is deliberate. In this tradition
            the technique is transmitted only inside the course, by authorized
            assistant teachers, in the order and at the pace they decide. I am
            a fellow practitioner sharing what the days felt like, not a teacher,
            and this site does not teach the method.
          </p>
          <p className="text-zinc-700">
            If your real question is operational (how do I sit, what do I do
            when my leg screams at hour two, how should I work with a hard
            sitting) the honest answer is that those belong with an authorized
            assistant teacher at a 10-day course, and the place to start is{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              className="text-teal-700 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            . Everything on this page is about the texture of the experience,
            not instruction.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat Day 1 already and trying to keep a daily practice going?"
          description="If you have done a course and the hard part is now the every-morning consistency, book a short call and I will tell you how the practice-buddy matching works."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Frequently asked questions
          </h2>
          <div className="mt-4">
            <FaqSection items={faqs} heading="" />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={related}
          />
        </div>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Done a course? Talk daily-practice consistency and buddy matching."
      />
    </article>
  );
}
