import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MotionSequence,
  AnimatedChecklist,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";
import { DayCounter } from "@/components/day-counter";

const PAGE_URL = "https://vipassana.cool/t/meditation-retreat";
const PUBLISHED = "2026-06-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Meditation retreat: how to choose one, and the variable nobody scores",
  description:
    "A meditation retreat is a multi-day residential stay, commonly 4 to 10 days, where you practice in silence on a fixed daily schedule. The retreats split into paid wellness/insight retreats and donation-funded residential courses. The one thing that decides whether it changes your daily life is what structure you return to. Notes from six courses across three centers and 1,000+ days of daily practice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Meditation retreat: how to choose one, and the variable nobody scores",
    description:
      "Most guides rank retreats by price, location, and amenities. The variable that actually predicts whether a retreat changes your life is what you land back into when it ends.",
    url: PAGE_URL,
    type: "article",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "What is a meditation retreat?",
    a: "A meditation retreat is a multi-day residential stay, commonly 4 to 10 days, where you practice in silence on a fixed daily schedule. A typical day is a rhythm of sitting periods, mindful meals, rest, and an evening talk, with conversation and screens set aside so attention turns inward. Some retreats are open and flexible; others, like a 10-day Vipassana course in the S.N. Goenka tradition, hold noble silence and a strict daily timetable from start to finish.",
  },
  {
    q: "How long should my first meditation retreat be?",
    a: "Many centers suggest 4 to 5 nights for a first retreat. The Goenka-tradition Vipassana course is a fixed 10 days on site (12 calendar days including arrival and departure). There is no shorter version of that course for new students; the format is the same worldwide and is described at dhamma.org. A first retreat is less about how many days and more about whether you can clear the calendar fully, since leaving mid-course is discouraged.",
  },
  {
    q: "How much does a meditation retreat cost?",
    a: "Paid retreats at wellness and insight centers commonly run from roughly $100 to $300 per night once room and board are included, which is why a week can land in the four figures. There is also a donation-funded path: in the S.N. Goenka Vipassana tradition, the 10-day course charges nothing for teaching, food, or accommodation, and is sustained entirely by voluntary donations from past students. We cover how that model works in our free meditation retreats guide.",
  },
  {
    q: "What is the difference between a wellness retreat and a Vipassana course?",
    a: "A wellness or insight retreat is usually a paid stay with a flexible schedule, a mix of teachers and techniques, and amenities. A 10-day Vipassana course in the Goenka tradition is donation-funded, holds continuous noble silence, follows one method taught only inside the course by authorized assistant teachers, and runs a fixed daily timetable. They serve different needs. If you want to learn the Goenka technique specifically, the only place to do that is an official course; see dhamma.org.",
  },
  {
    q: "Will the benefits of a retreat last after I go home?",
    a: "That depends almost entirely on what you return to. The clarity right after a course is real, but it fades on a predictable curve once normal life resumes, and most people lose the daily habit within a few weeks unless something holds it in place. The retreat is the easy part; the morning after you get home is where it is decided. This is the gap our practice-buddy program was built to close.",
  },
  {
    q: "Can a retreat teach me how to meditate, or do I have to already know how?",
    a: "Retreats are designed for both beginners and experienced meditators, and most first-timers arrive with no formal training. A 10-day Vipassana course teaches the method from scratch inside the course; you do not prepare by learning the technique beforehand. For any question about how to practice, how to sit, or how to work with what comes up, the right source is an authorized assistant teacher at a course and dhamma.org, not a web page.",
  },
  {
    q: "How do I find a meditation retreat near me?",
    a: "For the Goenka Vipassana tradition, the official course schedule and the full list of 200-plus centers worldwide live at dhamma.org. For other traditions, insight and wellness centers publish their own calendars. Our guide on finding and choosing a center walks through the practical filters: dates you can fully commit to, travel distance, the tradition, and whether the format matches what you actually want.",
  },
];

export default function MeditationRetreatPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Meditation retreat", url: PAGE_URL },
  ];

  const arcFrames = [
    {
      title: "Day 10",
      body:
        "Noble silence breaks. Everything feels spacious and quiet. You promise yourself this is the new baseline.",
      duration: 2600,
    },
    {
      title: "The drive home",
      body:
        "Clarity intact. You map out the morning sit, the corner of the room, the time you will wake up. It feels obvious.",
      duration: 2600,
    },
    {
      title: "Week one back",
      body:
        "An early meeting, a bad night of sleep, a sick kid. The first morning gets skipped. You tell yourself it is a one-off.",
      duration: 2600,
    },
    {
      title: "Week three",
      body:
        "The sit is now occasional. The cushion has become a place you glance at, not a place you go.",
      duration: 2600,
    },
    {
      title: "Month two",
      body:
        "The retreat is a good memory. The habit is gone. Nobody was waiting for you, so nothing held the line.",
      duration: 3000,
    },
  ];

  const checklistItems = [
    { text: "Can you clear the full length, not most of it? Leaving a residential course early is discouraged for a reason." },
    { text: "Is it silent, partly silent, or social? Silence is the point of some retreats and absent from others." },
    { text: "Is the cost room-and-board priced per night, or is it donation-funded? The gap between them is large." },
    { text: "Is it one tradition and one method, or a sampler of techniques? Decide which you actually want." },
    { text: "Who teaches, and what are their credentials in that lineage? For Goenka Vipassana, instruction comes only from authorized assistant teachers." },
    { text: "What happens on day 11? If the retreat has no answer for the morning after, you need your own." },
  ];

  const relatedPosts = [
    {
      title: "Free meditation retreats: how the donation model works",
      href: "https://vipassana.cool/guide/free-meditation-retreats",
      excerpt: "A 10-day silent retreat with meals and a room, for nothing. How dana actually funds it, from someone who has done it six times.",
      tag: "Logistics",
    },
    {
      title: "How to find and choose a Vipassana center",
      href: "https://vipassana.cool/guide/find-a-retreat",
      excerpt: "The practical filters for picking a course: dates, distance, tradition, and the format that matches what you want.",
      tag: "Getting started",
    },
    {
      title: "After the retreat: the re-entry crash",
      href: "https://vipassana.cool/guide/after-retreat",
      excerpt: "The predictable emotional arc of returning from a 10-day course, and how to keep daily practice alive through it.",
      tag: "Integration",
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
                "Meditation retreat: how to choose one, and the variable nobody scores",
              description:
                "A meditation retreat is a multi-day residential stay where you practice in silence on a fixed schedule. The variable that predicts whether it changes your life is what daily structure you return to afterward.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            })
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
          __html: JSON.stringify(faqPageSchema(FAQS)),
        }}
      />

      <div className="pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Meditation retreat" },
          ]}
        />
      </div>

      {/* Hero + direct answer */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          A meditation retreat is the easy part
        </h1>
        <p className="mt-5 text-lg text-zinc-500 leading-relaxed">
          Every guide ranks retreats by price, location, and amenities. None of
          them score the one thing that actually decides whether a retreat
          changes your life: what you land back into when it ends. Here is the
          straight answer, written after six courses at three centers and{" "}
          <span className="font-semibold text-zinc-700">
            <DayCounter />
          </span>{" "}
          days of daily practice.
        </p>

        <div className="mt-6">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="8 min read"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-25
          </p>
          <p className="mt-2 text-zinc-700 leading-relaxed">
            A meditation retreat is a multi-day residential stay, commonly 4 to
            10 days, where you practice in silence on a fixed daily schedule of
            sitting periods, mindful meals, rest, and usually an evening talk.
            They split into two families: paid wellness and insight retreats
            (roughly $100 to $300 per night with room and board), and
            donation-funded residential courses such as the 10-day Vipassana
            course, which charges nothing. To choose well, clear the full
            length, match the tradition and the level of silence to what you
            want, and look hard at what daily structure exists for you the day
            after it ends. Official Goenka-tradition schedules and the worldwide
            center list are at{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>

        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          Note: I am not a teacher, and this site is not affiliated with
          dhamma.org. This is my own experience as an old student. For anything
          about how to actually practice, the right source is an authorized
          assistant teacher at a course, not a web page.
        </p>
      </header>

      {/* The retreat-type spectrum */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-zinc-900">
          The four things people call a meditation retreat
        </h2>
        <p className="mt-3 text-zinc-700 leading-relaxed">
          The phrase covers a wide spread of formats. Most listings blur them
          together because they are selling beds. They are not the same
          experience, and they do not ask the same thing of you.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Type 1
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-900">
              Wellness retreat
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              A paid stay built around comfort: yoga, talks, good food, a scenic
              setting. Often partly social. Restorative, light on rigor. Priced
              per night, room and board included.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Type 2
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-900">
              Insight / silent retreat
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              A paid, mostly silent retreat at an insight center, often 4 to 10
              days, with sitting and walking periods and dharma talks. Teachers
              and techniques can vary across the schedule.
            </p>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Type 3
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-900">
              Donation-funded residential course
            </h3>
            <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
              The 10-day Vipassana course in the S.N. Goenka tradition. No charge
              for teaching, food, or room. Continuous noble silence, one method,
              a fixed timetable, and authorized teachers. Same format worldwide.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Type 4
            </p>
            <h3 className="mt-1 text-lg font-semibold text-zinc-900">
              At-home or virtual retreat
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              A self-led or online stretch of intensive practice. Cheap and
              flexible, but without the container of a residential site it asks
              far more discipline of you, and gives back less.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          My six courses were all Type 3, across three centers: Dhammamanda in
          NorCal, a rented camp in the Bay Area, and North Fork in central
          California. The conditions ranged from comfortable to bunk beds with
          twelve people to a room. The format did not change. Neither did the
          thing that mattered most, which was none of the above.
        </p>
      </section>

      {/* The overlooked variable */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The variable nobody scores: what you return to
          </h2>
          <p className="mt-3 text-zinc-700 leading-relaxed">
            Read enough retreat listings and you will see them compete on
            scenery, food, teacher names, and nightly rate. Not one of them
            scores the only metric that predicts whether you are still
            practicing two months later: whether anything was waiting for you on
            the other side. The high after a course is real, and it fades on a
            curve. Here is the curve, the way it actually runs for most people.
          </p>

          <div className="mt-8">
            <MotionSequence title="The post-retreat curve" frames={arcFrames} />
          </div>

          <p className="mt-8 text-zinc-700 leading-relaxed">
            This is not a willpower failure. It is structural. A retreat is a
            container, and the day you leave, the container is gone. The morning
            sit that felt non-negotiable on the drive home loses every external
            support at once: no schedule, no silence, no fellow students, nobody
            who notices if you skip. The retreat industry sells you the
            container and then hands you back to a life with none of it.
          </p>
        </div>
      </section>

      {/* Pre-booking checklist */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          What to actually check before you book
        </h2>
        <p className="mt-3 text-zinc-700 leading-relaxed">
          Skip the photos of the lake. These are the questions that change
          whether the week is worth it, ending with the one almost no listing
          will answer for you.
        </p>
        <div className="mt-7">
          <AnimatedChecklist
            title="Before you commit"
            items={checklistItems}
          />
        </div>
      </section>

      {/* Proof + the bridge */}
      <section className="bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <ProofBanner
            metric="1,000+ days"
            quote="The retreat I keep recommending is not a place. It is the morning after, repeated until it sticks. Six courses taught me the technique. The daily sit is what actually changed anything, and the only thing that kept it going was another person on the other end of a call."
            source="Matthew Diakonov, old student"
          />

          <h2 className="mt-12 text-2xl font-bold text-zinc-900">
            The bridge across day eleven
          </h2>
          <p className="mt-3 text-zinc-700 leading-relaxed">
            After my own practice nearly died in the weeks after a course, the
            thing that finally held it was embarrassingly simple: one other
            person expecting me. So I built that into a free program, because no
            retreat offers it.
          </p>

          <div className="mt-6 rounded-2xl border border-teal-200 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              vipassana.cool/practice-buddy
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              It pairs you with one matched fellow old student in your time zone.
              The same person, the same time, the same Google Meet link, every
              morning. Not a group sit. Not an app. No streaks, no badges, no
              feed. Just someone who notices when you do not show up. It is free
              forever, built by an old student on day <DayCounter /> of daily
              practice, after six courses and 40-plus days of dhamma service.
            </p>
            <Link
              href="/practice-buddy"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700"
            >
              See how the matching works
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
            Worth saying plainly: this is for keeping a daily practice alive
            after a course, not for learning the technique. You still need to sit
            a real 10-day course to learn it, and you still take any question
            about how to practice to an authorized teacher and{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline hover:text-teal-700"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      {/* So which retreat */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-zinc-900">
          So which retreat should you pick?
        </h2>
        <p className="mt-3 text-zinc-700 leading-relaxed">
          If you want rest and a gentle reset, a wellness or insight retreat will
          do that well, and you should pick one near you with dates you can fully
          clear. If you want to learn a method that you can carry for years, the
          donation-funded 10-day Vipassana course is the one I have done six
          times, and it costs nothing but the time. Either way, decide your
          day-eleven plan before you go, not after. The retreat is the part the
          centers have solved. The morning after is the part they hand back to
          you, and it is the part that decides everything.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Not sure a retreat will stick? Let's talk it through."
          description="A short call with a fellow old student about choosing a course and building the daily practice that survives after it ends."
          section="meditation-retreat-footer"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <FaqSection items={FAQS} heading="Meditation retreat questions" />
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-16">
        <RelatedPostsGrid
          title="Keep reading"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Choosing a retreat? Talk it through with an old student."
        section="meditation-retreat-sticky"
      />
    </article>
  );
}
