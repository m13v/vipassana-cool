import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  HorizontalStepper,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/dhamma-sukhalaya-course-schedule";
const PUBLISHED = "2026-06-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const SCHEDULE_URL = "https://schedule.vridhamma.org/courses/sukhalaya";

export const metadata: Metadata = {
  title:
    "Dhamma Sukhalaya course schedule: how to read it (and why 10-day courses show 'Full' months out)",
  description:
    "The live Dhamma Sukhalaya (Bangalore) schedule is at schedule.vridhamma.org/courses/sukhalaya. Verified 2026-06-29: the next 10-day course open to register is 5-16 Aug 2026, two earlier dates already show Full, and the centre runs a children's/teen course nearly every month through December. This page decodes the 'Full' vs 'Open from [date]' rolling-registration window that the official listing never explains.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Sukhalaya course schedule, decoded (Bangalore Vipassana centre)",
    description:
      "Where the live schedule lives, why high-demand dates show 'Full' before registration even opens, and what the 'Open from [date]' window actually means at Dhamma Sukhalaya. Verified 2026-06-29.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Sukhalaya course schedule, decoded",
    description:
      "The live schedule URL, the rolling 'Open from [date]' registration mechanic, and the unusually dense children's-course cadence at the Bangalore centre. Verified 2026-06-29.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Dhamma Sukhalaya course schedule" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Dhamma Sukhalaya course schedule", url: PAGE_URL },
];

type ScheduleRow = {
  dates: string;
  type: string;
  status: string;
  full?: boolean;
};

// Snapshot read off schedule.vridhamma.org/courses/sukhalaya on 2026-06-29.
// The live page is the source of truth; this is a dated copy so the page is
// honest about what it saw, not a substitute for checking the calendar.
const scheduleSnapshot: ScheduleRow[] = [
  { dates: "24 Jun - 5 Jul 2026", type: "10-day", status: "Full", full: true },
  {
    dates: "9 Jul - 12 Jul 2026",
    type: "Children's seva workshop",
    status: "Open",
  },
  { dates: "12 Jul 2026", type: "Children's (10-18 yrs)", status: "Open" },
  { dates: "16 Jul - 19 Jul 2026", type: "3-day (old students)", status: "Full", full: true },
  { dates: "22 Jul - 2 Aug 2026", type: "10-day", status: "Full", full: true },
  { dates: "2 Aug 2026", type: "Children's (10-18 yrs)", status: "Open from 6 Jul" },
  { dates: "5 Aug - 16 Aug 2026", type: "10-day", status: "Open" },
  { dates: "19 Aug - 30 Aug 2026", type: "10-day", status: "Open" },
  { dates: "2 Sep - 13 Sep 2026", type: "10-day", status: "Open from 2 Jul" },
  { dates: "20 Sep 2026", type: "Children's (10-18 yrs)", status: "Open from 3 Aug" },
  { dates: "11 Oct 2026", type: "Children's (10-18 yrs)", status: "Open from 21 Sep" },
  { dates: "8 Nov 2026", type: "Children's (10-18 yrs)", status: "Open from 12 Oct" },
  { dates: "13 Dec 2026", type: "Children's (10-18 yrs)", status: "Open from 9 Nov" },
];

const registrationSteps = [
  {
    title: "Open the live schedule",
    description:
      "schedule.vridhamma.org/courses/sukhalaya. This is the only authoritative list; directory sites and screenshots go stale.",
  },
  {
    title: "Read the status, not just the date",
    description:
      "Each course shows Full, Open, or 'Open from [date]'. A date you want can be unbookable for two different reasons.",
  },
  {
    title: "If it says 'Open from [date]', wait for that date",
    description:
      "Registration for that specific course has not started yet. Applications only open on the listed date, often weeks before the course.",
  },
  {
    title: "Apply the day it opens",
    description:
      "10-day dates here fill fast. The form is on the same site; there is no phone or email booking.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where is the official Dhamma Sukhalaya course schedule?",
    a: "The live, authoritative schedule is at schedule.vridhamma.org/courses/sukhalaya (the same calendar is mirrored on the centre's own site, sukhalaya.dhamma.org, and on dhamma.org). Treat that page as the source of truth. Any list you find elsewhere, including this one, is a dated snapshot and the real calendar changes week to week.",
  },
  {
    q: "Why do some Dhamma Sukhalaya 10-day courses show 'Full' months in advance?",
    a: "Dhamma Sukhalaya is the Bangalore-area centre, and 10-day seats are limited and free, so popular dates fill quickly once their registration window opens. As verified on 2026-06-29, the 24 Jun-5 Jul and 22 Jul-2 Aug 2026 ten-day courses already showed Full, while 5-16 Aug and 19-30 Aug 2026 were open. If a date you want is Full, the system usually lets you join a waiting list, and you can also apply to a later open date.",
  },
  {
    q: "What does 'Open from [date]' mean on the schedule?",
    a: "It means registration for that specific course has not started yet. The course is listed so you can plan, but the application form for it only unlocks on the date shown. For example, the 2 Sep-13 Sep 2026 ten-day course showed 'Open from 2 Jul' on 2026-06-29: visible early, bookable from 2 July. This is the single most common point of confusion, because the date is right there but the button is not live.",
  },
  {
    q: "What is the next 10-day course at Dhamma Sukhalaya I can actually register for?",
    a: "As verified on 2026-06-29, the next 10-day course showing Open (not Full, not 'Open from a future date') was 5-16 Aug 2026, followed by 19-30 Aug 2026. Because availability shifts daily, confirm the current state on schedule.vridhamma.org/courses/sukhalaya before you make travel plans.",
  },
  {
    q: "Does Dhamma Sukhalaya run courses for children and teenagers?",
    a: "Yes, and unusually often. On the 2026-06-29 snapshot the centre had a children's or teen course (the schedule lists ages 10-18) on roughly a monthly cadence: 12 Jul, 2 Aug, 20 Sep, 11 Oct, 8 Nov and 13 Dec 2026, plus a children's seva workshop on 9-12 Jul. Most centres run youth courses only a few times a year, so if you are looking for a children's Anapana course near Bangalore, Sukhalaya's calendar is worth watching.",
  },
  {
    q: "How much does a course at Dhamma Sukhalaya cost?",
    a: "Nothing. As at every centre in this tradition, there is no charge for the teaching, the food, or the accommodation. The centre runs on donations, and donations are accepted only from students who have completed at least one full 10-day course. A first-timer's seat is paid for by people who sat before them.",
  },
  {
    q: "Where is Dhamma Sukhalaya and how do I contact it?",
    a: "It is the Vipassana International Meditation Centre at Arehalli Village, Hoskote Taluk, near Bangalore, Karnataka (PIN 562114). Courses are taught in Kannada, English and Hindi. Registration is handled through the website rather than by phone, but the centre lists a contact email (registration@sukhalaya.dhamma.org) on its schedule page for queries.",
  },
  {
    q: "Can this page teach me the technique before I go?",
    a: "No, and that is deliberate. In this tradition the technique is only transmitted inside the 10-day residential course by an authorized assistant teacher. I am a fellow practitioner sharing logistics and how to read a calendar, not a teacher. For anything about how to actually practice, the canonical sources are the assistant teacher at the centre and dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana in Bangalore: the centres and how to choose",
    href: "/t/vipassana-bangalore",
    excerpt:
      "Dhamma Sukhalaya is one of the Bangalore-area options. If you are deciding between centres near the city, start here.",
    tag: "Guide",
  },
  {
    title: "10-day Vipassana course structure: the daily clock and the arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "Whatever date you book at Sukhalaya, the day-by-day timetable is identical to every centre in the tradition. Here is the shape of it.",
    tag: "Reference",
  },
  {
    title: "Finding a retreat: how to use the dhamma.org course finder",
    href: "/guide/find-a-retreat",
    excerpt:
      "If Sukhalaya's dates do not line up, the same course runs at centres worldwide. How to search the global finder.",
    tag: "Guide",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Dhamma Sukhalaya course schedule: how to read it (and why 10-day courses show 'Full' months out)",
    description:
      "The live Dhamma Sukhalaya (Bangalore) schedule is at schedule.vridhamma.org/courses/sukhalaya. Verified 2026-06-29 the next open 10-day course is 5-16 Aug 2026. This page decodes the 'Full' vs 'Open from [date]' rolling-registration window and the centre's unusually dense children's-course cadence.",
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
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Bangalore, Karnataka
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          The Dhamma Sukhalaya schedule, and how to actually read it
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Most pages that mention this centre&apos;s calendar do one of two
          things: list a few dates that are already stale, or tell you to
          &ldquo;check the website&rdquo; and leave. The harder part is what the
          website does not explain. A date you want can be unbookable for two
          completely different reasons, and the listing uses the same small grey
          words for both. Here is the live source, a dated snapshot, and what the
          status labels really mean.
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
            Direct answer (verified 2026-06-29)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The live Dhamma Sukhalaya schedule is published at{" "}
            <a
              href={SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              schedule.vridhamma.org/courses/sukhalaya
            </a>
            . As of 2026-06-29, the next <strong>10-day course open to
            register</strong> was <strong>5-16 August 2026</strong> (followed by
            19-30 August). Two earlier 10-day dates already showed{" "}
            <strong>Full</strong>, and several later courses showed{" "}
            <strong>&ldquo;Open from [date]&rdquo;</strong>, meaning registration
            had not started yet. Courses are <strong>free</strong>. Availability
            changes daily, so confirm on the live page before booking travel.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Snapshot of the schedule on 2026-06-29
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is exactly what the live calendar listed when I read it. I am
          freezing it with a date so the page is honest about what it saw, not
          pretending to be a real-time feed. For anything you are about to act
          on, the{" "}
          <a
            href={SCHEDULE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            live schedule
          </a>{" "}
          is the source of truth.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-zinc-100 text-zinc-600">
                <th className="px-4 py-3 font-semibold">Dates</th>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Status (2026-06-29)</th>
              </tr>
            </thead>
            <tbody>
              {scheduleSnapshot.map((row, i) => (
                <tr
                  key={row.dates + row.type}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <td className="align-top whitespace-nowrap px-4 py-3 font-medium text-zinc-900 border-b border-zinc-100">
                    {row.dates}
                  </td>
                  <td className="px-4 py-3 text-zinc-700 border-b border-zinc-100">
                    {row.type}
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-100">
                    <span
                      className={
                        row.full
                          ? "inline-block rounded-full bg-zinc-200 px-2.5 py-0.5 text-xs font-semibold text-zinc-600"
                          : "inline-block rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-semibold text-teal-700"
                      }
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Read off{" "}
          <a
            href={SCHEDULE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            schedule.vridhamma.org/courses/sukhalaya
          </a>{" "}
          on 2026-06-29. Languages at the centre: Kannada, English, Hindi.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The two reasons a date is unbookable (they look the same)
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the part that actually trips people up, and the reason this
          page exists. When you cannot book a date you want, it is almost always
          one of two things, and the calendar marks them with the same kind of
          small grey label.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
              Full
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              Registration opened, and the seats are gone. The course exists and
              has already filled. Your move is to join the waiting list if one is
              offered, or pick a later date that is still open. Waiting time on
              the cushion is not the problem here; waiting for a seat is.
            </p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Open from [date]
            </p>
            <p className="mt-2 text-zinc-800 leading-relaxed">
              Registration has <em>not started yet</em>. The course is listed so
              you can plan around it, but the application form unlocks only on
              the date shown. The date of the course is visible; the button is
              not live. Set a reminder for the open date, not the course date.
            </p>
          </div>
        </div>
        <p className="mt-5 text-zinc-700 leading-relaxed">
          A concrete example from the snapshot: the 2-13 September 2026 ten-day
          course showed <strong>&ldquo;Open from 2 Jul&rdquo;</strong>. You could
          see it in late June, but you could not apply until July. People miss
          courses by reading the September date, assuming the form is live, and
          never coming back on the day it actually opens.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <HorizontalStepper
          title="Booking a Dhamma Sukhalaya course, in order"
          steps={registrationSteps}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The thing the official listing buries: a youth course almost every
          month
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you scan the snapshot for the 10-day courses, you miss what is
          actually distinctive about Sukhalaya&apos;s calendar. Between July and
          December 2026 the centre listed a children&apos;s or teen course (the
          schedule gives the age band as 10-18) on roughly a monthly rhythm: 12
          July, 2 August, 20 September, 11 October, 8 November and 13 December,
          plus a children&apos;s seva workshop on 9-12 July. Most centres run
          youth courses only a few times a year. If you are a parent near
          Bangalore looking for a children&apos;s Anapana course, this is a
          calendar to watch rather than a once-a-year long shot.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <ProofBanner
          metric="6 youth dates"
          quote="Between July and December 2026 Dhamma Sukhalaya listed a children's or teen course (ages 10-18) on roughly a monthly cadence, plus a children's seva workshop. That density is unusual for a single centre."
          source="Counted off schedule.vridhamma.org/courses/sukhalaya on 2026-06-29."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What is identical no matter which date you book
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The schedule is the variable part. The course is not. Whichever 10-day
          date you land at Sukhalaya, the structure is the same one used at every
          centre in this tradition worldwide: residential, in noble silence, on a
          fixed daily timetable, with the technique transmitted only inside the
          course by an authorized assistant teacher. The cost is the same too,
          which is to say there is none. So the only real decision the schedule
          forces is <em>when</em> and <em>where</em>, not <em>what</em>. If you
          want the day-by-day shape of the course before you commit to a date,
          that is its own write-up, linked below.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          One honest disclosure on where I stand: I have sat six 10-day courses,
          but all of them at centres in California, not at Sukhalaya. So I cannot
          tell you what the Arehalli campus feels like at 4am. What I can do is
          read a vridhamma schedule, because it is the same system every centre
          uses, and point you at the parts that quietly cost people a seat.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-dhamma-sukhalaya-footer"
          heading="Trying to plan around the schedule, or keep a practice going after?"
          description="If you want to talk through picking a date, choosing between Bangalore centres, or what daily practice looks like once you are home, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Dhamma Sukhalaya course schedule"
          items={faqs}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          subtitle="Related"
          title="Before you book a date"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-dhamma-sukhalaya-sticky"
        description="Questions about the Dhamma Sukhalaya schedule or picking a date? Book a quick chat."
      />
    </article>
  );
}
