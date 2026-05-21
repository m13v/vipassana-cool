import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  HorizontalStepper,
  AnimatedChecklist,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/10-day-course-structure";
const PUBLISHED = "2026-05-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "10-day Vipassana course structure: 12 days on site, 3 load-bearing group sittings, one Day 10 shift",
  description:
    "The 10-day Vipassana course is 12 calendar days on site, with a fixed daily schedule of ~10 hours of sitting built around three mandatory group sittings (8 AM, 2:30 PM, 6 PM), one evening discourse, and noble silence from Day 0 evening through the morning of Day 10. Sourced from dhamma.org/en/about/code, verified 2026-05-20. Notes from six courses across three centers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "10-day Vipassana course structure: the daily clock and the 10-day arc",
    description:
      "The structure of a 10-day Vipassana course, read from the official Code of Discipline at dhamma.org and from six of my own courses. The daily timetable, the three load-bearing group sittings, and the single mid-morning structural shift on Day 10.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What the 10-day Vipassana course structure actually is",
    description:
      "12 days on site, fixed daily schedule, three load-bearing group sittings, one Day 10 mid-morning shift. From dhamma.org and six personal courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "10-day course structure" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "10-day course structure", url: PAGE_URL },
];

const dailyClockSteps = [
  {
    title: "4:00 AM — wake bell",
    description:
      "Morning wake-up bell rings through the residences. Most centers ring it more than once for the people who do not stir on the first.",
  },
  {
    title: "4:30 AM – 6:30 AM — first block",
    description:
      "Two hours in the hall or in residence. The schedule lists this as the morning's first stretch of practice.",
  },
  {
    title: "6:30 AM — breakfast",
    description:
      "Vegetarian, served in silence in the dining hall. About an hour, including the walk back to the residence.",
  },
  {
    title: "8:00 AM – 9:00 AM — group sitting",
    description:
      "First of three mandatory group sittings in the main hall. Everyone in their assigned cushion.",
  },
  {
    title: "9:00 AM – 11:00 AM — block",
    description:
      "Two hours in the hall or in residence. From the 4th course onward, this is one of the blocks where you have the option of sitting in your room.",
  },
  {
    title: "11:00 AM — lunch + rest",
    description:
      "Lunch is the last full meal of the day. The 11 AM to 1 PM window is the longest break in the schedule. Most centers also schedule the optional teacher interview slots inside this window.",
  },
  {
    title: "1:00 PM – 2:30 PM — block",
    description:
      "Hall or residence.",
  },
  {
    title: "2:30 PM – 3:30 PM — group sitting",
    description:
      "Second mandatory group sitting.",
  },
  {
    title: "3:30 PM – 5:00 PM — block",
    description:
      "Hall or residence.",
  },
  {
    title: "5:00 PM — tea",
    description:
      "Tea and (for new students) fruit. For old students this is the cutoff: tea and water only, no food after midday.",
  },
  {
    title: "6:00 PM – 7:00 PM — group sitting",
    description:
      "Third mandatory group sitting of the day.",
  },
  {
    title: "7:00 PM – 8:15 PM — discourse",
    description:
      "75-minute recorded video discourse by S. N. Goenka. One per evening for the duration of the course.",
  },
  {
    title: "8:15 PM – 9:00 PM — short sit + Q&A",
    description:
      "A short closing sit in the main hall, followed by a brief window where students can come up and ask the assistant teacher operational questions.",
  },
  {
    title: "9:30 PM — lights out",
    description:
      "Residence lights out. Bell at 4 AM.",
  },
];

const macroArcSteps = [
  {
    title: "Day 0 (evening)",
    description:
      "Arrival, registration, surrender of phones and books, orientation, first short sit. Noble silence begins after the orientation session.",
  },
  {
    title: "Days 1 – 9",
    description:
      "The schedule above runs unchanged for nine consecutive days. Same wake bell, same three group sittings, same discourse window, same lights out.",
  },
  {
    title: "Day 10 (morning)",
    description:
      "Noble silence ends mid-morning. The rest of Day 10 is loud, social, and used for re-entering speech with other students before going home.",
  },
  {
    title: "Day 11 (morning)",
    description:
      "Phones returned, luggage moves, the gate opens after breakfast. Departure.",
  },
];

const notInTheStructure = [
  { text: "There is no rest day or half-day inside the 10 days" },
  { text: "There is no opt-out for the morning sits or the evening discourse" },
  { text: "There is no separate beginner track and advanced track; everyone sits the same schedule" },
  { text: "There is no journal time, reading time, or scheduled writing inside the day" },
  { text: "There is no group conversation, walking partner, or shared activity outside the dining hall (and the dining hall is silent)" },
  { text: "There is no graduation ritual; Day 10 ends with the silence breaking and Day 11 ends with the gate opening" },
];

const faqs: FaqItem[] = [
  {
    q: "How many days is a 10-day Vipassana course in practice?",
    a: "12 calendar days on site, 11 nights. The course is numbered Day 1 through Day 10, with Day 0 being the evening of arrival and Day 11 being the morning of departure. Noble silence runs from the evening of Day 0 through the morning of Day 10. The framing 'the 10-day course actually spans 12 days when you include the arrival and departure days' is from the official Code of Discipline at dhamma.org/en/about/code.",
  },
  {
    q: "How is each day structured?",
    a: "Wake bell at 4:00 AM, first practice block 4:30 AM to 6:30 AM, breakfast at 6:30 AM, group sitting 8:00 AM to 9:00 AM, second block 9:00 AM to 11:00 AM, lunch at 11:00 AM, rest until 1:00 PM, block 1:00 PM to 2:30 PM, group sitting 2:30 PM to 3:30 PM, block 3:30 PM to 5:00 PM, tea at 5:00 PM, group sitting 6:00 PM to 7:00 PM, evening discourse 7:00 PM to 8:15 PM, short closing sit and Q&A 8:15 PM to 9:00 PM, lights out at 9:30 PM. Roughly 10 hours of sitting per day broken into segments. Source: dhamma.org/en/about/code.",
  },
  {
    q: "What are the three group sittings and why do they matter to the structure?",
    a: "Three group sittings per day are mandatory: 8 AM to 9 AM, 2:30 PM to 3:30 PM, and 6 PM to 7 PM. The full course is built around them. The other practice blocks (4:30 to 6:30 AM, 9 to 11 AM, 1 to 2:30 PM, 3:30 to 5 PM) are framed as 'individual' sittings, which from the 4th course onward can be sat in your residence with your assistant teacher's permission. The three group sittings are the part of the structure that cannot be moved out of the main hall.",
  },
  {
    q: "Is the schedule the same on every day?",
    a: "The daily clock above runs unchanged from Day 1 through Day 9. The only structural shift across the course is on Day 10 morning, when noble silence ends mid-morning and the rest of that day is given over to re-entering speech with other students before the Day 11 departure. The schedule itself does not become harder or easier across the 10 days. It is the same wake bell, the same three group sittings, and the same lights-out hour every day.",
  },
  {
    q: "How much sleep do you actually get?",
    a: "Lights out at 9:30 PM and wake at 4:00 AM is about six and a half hours in bed. Most people I have talked to across my six courses found the first two or three nights hard to sleep through, then settled in by Day 3 or Day 4. The schedule is built around that adjustment window.",
  },
  {
    q: "When are meals and what is the food situation?",
    a: "Breakfast at 6:30 AM, lunch at 11:00 AM, tea at 5:00 PM. All meals are vegetarian and taken in silence. New students get tea plus fruit at 5 PM. Old students (anyone returning for a second or later course) take the eight precepts and skip evening fruit; tea and water only after midday. The 5 PM tea cutoff is the structural change between a first course and a second course that almost everyone remembers.",
  },
  {
    q: "What is the evening discourse and is it part of the structure?",
    a: "Yes, it is structural. Every evening from 7:00 PM to 8:15 PM there is a 75-minute recorded video discourse by S. N. Goenka. There is one discourse per day for the duration of the course. The Code of Discipline at dhamma.org/en/about/code lists it as part of the schedule, and the standard guidance is that the discourses are part of what makes the next morning's session what it is. Skipping the discourse and working from your room is not how the course is built to run.",
  },
  {
    q: "When does noble silence end?",
    a: "Mid-morning on Day 10, not Day 11. The last full day at the course is loud and social. The actual departure is the morning after that.",
  },
  {
    q: "Can I work from my room instead of the hall during the individual blocks?",
    a: "On a first 10-day course, no. New students sit all blocks in the main hall. From the 4th course onward, with the assistant teacher's permission, students can sit the individual (non-group) blocks in their residence cell. The three daily group sittings stay in the hall for everyone, every course.",
  },
  {
    q: "Where do I go for anything operational about how to practice during the course?",
    a: "To dhamma.org for the canonical schedule and Code of Discipline (https://www.dhamma.org/en/about/code), to dhamma.org/en-US/courses/search for course logistics, and to the assistant teacher on site for anything about how to actually practice in any given sit. I have sat six 10-day courses and this page is a structural map of what happens around the cushion, not instruction on what happens on it.",
  },
];

const relatedPosts = [
  {
    title:
      "The 'ten day commitment' is actually 12 days and 8 surrenders",
    href: "/t/ten-day-commitment",
    excerpt:
      "What you literally sign up for when you register for a 10-day course, enumerated from the Code of Discipline at dhamma.org.",
    tag: "Reference",
  },
  {
    title:
      "First Vipassana course: 15 things I wish I knew",
    href: "/guide/first-course-tips",
    excerpt:
      "Practical notes for the gap between registration and the first bell. Days 2 to 4, the 5 PM tea cutoff, what to pack, what nobody tells you.",
    tag: "Guide",
  },
  {
    title:
      "Post-course integration: the week-by-week shift after a 10-day course",
    href: "/t/post-course-integration-shift",
    excerpt:
      "What happens after the gate opens on the morning of Day 11. Week 1 sensory crash, Week 2 felt-state collapse, Week 3 reactivity gap, Week 4 the structural shift.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "10-day Vipassana course structure: 12 days on site, three load-bearing group sittings, one Day 10 shift",
    description:
      "A structural map of a 10-day Vipassana course as documented in the Code of Discipline at dhamma.org/en/about/code, with personal notes from six courses across three centers.",
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

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          10-day Vipassana course structure
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          12 calendar days on site. A fixed daily schedule from 4:00 AM wake to
          9:30 PM lights out. Roughly 10 hours of sitting broken into segments
          built around three mandatory group sittings. One 75-minute evening
          discourse. Noble silence from the evening of Day 0 through the
          morning of Day 10. Below is the daily clock, the three pillars, the
          10-day arc, and some personal notes from six of my own courses across
          three centers.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-20)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            A 10-day Vipassana course in the S. N. Goenka tradition runs for{" "}
            <strong>12 calendar days on site</strong> (arrival Day 0 evening,
            departure morning of Day 11, 11 nights). The daily schedule from
            Day 1 through Day 9 is fixed: wake at 4:00 AM, three mandatory
            group sittings at 8:00 AM, 2:30 PM, and 6:00 PM, individual
            practice blocks in between, a 75-minute evening discourse at
            7:00 PM, short closing sit at 8:15 PM, lights out at 9:30 PM.
            Roughly 10 hours of sitting per day. Noble silence runs from the
            evening of Day 0 through the morning of Day 10. The canonical
            source for the schedule is{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The daily clock
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the schedule that runs from Day 1 through Day 9, every day,
          unchanged. It is published in the Code of Discipline at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          and is the same at every Goenka-tradition 10-day course in the
          world. My six courses across three centers (Dhammamanda in NorCal,
          CYO in the Bay Area, North Fork in Central California) all ran on
          this exact clock.
        </p>

        <StepTimeline title="A day at a 10-day course" steps={dailyClockSteps} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The three load-bearing group sittings
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Of the ~10 hours of practice in a day, three one-hour blocks are
          mandatory group sittings in the main hall: <strong>8:00 AM</strong>,{" "}
          <strong>2:30 PM</strong>, and <strong>6:00 PM</strong>. Everyone in
          the course sits these. The other practice blocks (4:30 to 6:30 AM,
          9 to 11 AM, 1 to 2:30 PM, 3:30 to 5 PM) are listed as &ldquo;individual&rdquo;
          sittings, and from the 4th course onward an old student can sit
          those blocks in their residence cell with the assistant teacher&apos;s
          permission. The three group sittings stay in the hall, for everyone,
          on every course. Read the schedule with those three blocks as the
          spine and the rest as the connective tissue around them. That is the
          shape of the day.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Group sitting 1
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-900">8 – 9 AM</p>
            <p className="mt-1 text-sm text-zinc-600">
              After breakfast, before the long mid-morning block.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Group sitting 2
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-900">2:30 – 3:30 PM</p>
            <p className="mt-1 text-sm text-zinc-600">
              The afternoon anchor, after the long lunch and rest window.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Group sitting 3
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-900">6 – 7 PM</p>
            <p className="mt-1 text-sm text-zinc-600">
              After tea, immediately before the evening discourse.
            </p>
          </div>
        </div>
      </section>

      <ProofBanner
        metric="3 × 1 hr"
        quote="Three mandatory group sittings a day in the main hall. That's the load-bearing structure. Everything else (4 long individual blocks, breakfast, lunch, tea, discourse) is hung around those three blocks. Same on Day 1, same on Day 9."
        source="Notes from six 10-day courses at Dhammamanda, CYO, and North Fork. Schedule source: dhamma.org/en/about/code."
      />

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The 10-day arc: one structural shift, not ten
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A common assumption coming in is that the schedule changes across
          the 10 days. It does not. The wake bell, the three group sittings,
          the discourse window, and the lights-out hour are identical on
          Day 1 and Day 9. The only structural shift in the course, on the
          calendar, is on the morning of Day 10, when noble silence ends
          mid-morning. The rest of Day 10 is loud, social, and used for
          re-entering speech with other students before the Day 11 morning
          departure. Plan flights and time off work against the 12-day window,
          not the 10.
        </p>

        <HorizontalStepper
          title="Four phases on the calendar"
          steps={macroArcSteps}
          current={0}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <AnimatedChecklist
          title="What is NOT in the structure"
          items={notInTheStructure}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Personal notes after six courses
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The piece of the structure I underrated the first time was the
          11 AM lunch and the long rest window after it. On paper it looks
          like a gift. By Day 3 it is the part of the day where the previous
          night&apos;s lack of sleep catches up, and the 1 PM block is where I
          would routinely lose the thread. Across courses I learned to use
          the 12 to 1 PM window for a horizontal rest rather than for a
          shower or a walk. The 1 PM block sat very differently after that.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The other thing the schedule does not say out loud is that the three
          group sittings start to feel like the spine of the day by about
          Day 5. The individual blocks become the connective material around
          them rather than four separate sittings of their own. By my third
          course I had stopped reading the schedule as 14 distinct events and
          started reading it as one continuous day shaped around the three
          group blocks. That is the angle I would offer to anyone trying to
          read the structure from the outside before going.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher and this page is not instructional. For anything
          about how to actually sit any given block, the canonical answers
          live with the assistant teacher at the center and with{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>
          . I am sharing the architecture of the day as it has run, the same
          way, across six of my own courses and three centers.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-10-day-structure-footer"
          heading="Sitting your first 10-day course soon?"
          description="If you want to talk through the schedule, the silence, or what daily practice looks like after the course, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection heading="FAQ: 10-day Vipassana course structure" items={faqs} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          subtitle="Related"
          title="More on the 10-day course"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-10-day-structure-sticky"
        description="Questions about the 10-day course schedule? Book a quick chat."
      />
    </article>
  );
}
