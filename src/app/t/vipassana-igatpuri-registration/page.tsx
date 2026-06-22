import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  SequenceDiagram,
  MetricsRow,
  GradientText,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-igatpuri-registration";
const PUBLISHED = "2026-06-19";
const MODIFIED = "2026-06-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const SCHEDULE_URL = "https://schedule.vridhamma.org/courses/giri";

export const metadata: Metadata = {
  title:
    "Vipassana Igatpuri Registration: How to Actually Get a Seat at Dhamma Giri",
  description:
    "Registration for Vipassana at Igatpuri (Dhamma Giri) is online only, two steps, and an application is not a seat. You apply for one dated course, wait up to two weeks for an email decision, then confirm to hold your place. Verified against schedule.vridhamma.org on 2026-06-19, with the per-category seat rule, the rolling application windows, and which of Igatpuri's three centers a new student registers at.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Igatpuri Registration: how to get a seat at Dhamma Giri",
    description:
      "Apply online for one dated course at Dhamma Giri, wait for the email decision, then confirm. Application is not registration until you confirm. The two-step flow, the six seat categories, and the rolling windows, checked against the official schedule.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Igatpuri registration, the part nobody explains",
    description:
      "Apply is not confirm. How registration at Dhamma Giri in Igatpuri actually works, from a meditator who applied through the same system for six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Igatpuri registration" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Igatpuri registration", url: PAGE_URL },
];

const igatpuriCenters = [
  {
    name: "Dhamma Giri",
    who: "New students and old students",
    courses: "10-day courses (the introductory course), plus some longer courses",
    apply: "schedule.vridhamma.org/courses/giri",
    note: "This is the one a first-timer registers at. The Vipassana International Academy, the original center of the tradition in India.",
  },
  {
    name: "Dhamma Tapovana-1",
    who: "Old students only",
    courses: "Long courses (20-day, 30-day, Satipatthana and similar)",
    apply: "schedule.vridhamma.org/courses/tapovana",
    note: "Prerequisite is at least one completed 10-day course. A new student cannot register here.",
  },
  {
    name: "Dhamma Tapovana-2",
    who: "Old students only",
    courses: "Long courses for experienced students",
    apply: "schedule.vridhamma.org/courses/tapovana2",
    note: "Same campus area, same restriction. Not a starting point for newcomers.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How do I register for a Vipassana course at Igatpuri?",
    a: "You register online, and only online. Go to the official Dhamma Giri schedule at schedule.vridhamma.org/courses/giri, find a 10-day course whose applications are open, click Apply, read the Code of Discipline, and fill in the application form completely. You then wait for an email decision, which can take up to about two weeks, and once you are accepted you have to confirm your attendance to actually hold the seat. The center is explicit that only online applications are accepted and only confirmed students are allowed onto the premises. There are no walk-in registrations.",
  },
  {
    q: "Is applying the same as being registered?",
    a: "No, and this is the single most common mix-up. Submitting the application form is step one. It puts you in the queue for a decision; it does not reserve a place. After the center reviews applications you get an email that either accepts you, waitlists you, or declines. If accepted, you must reply or click through to confirm. Until you confirm, you do not have a seat, and showing up unconfirmed will not get you in. Treat the confirmation email as the thing that actually registers you.",
  },
  {
    q: "Why can I not find an Apply button for the date I want?",
    a: "Dhamma Giri opens applications for each course on a rolling basis, roughly a couple of months before that course starts, rather than opening the whole year at once. So a course three or four months out can be listed on the schedule with a future date like 'applications open on...' and no live Apply button yet. The fix is to note the open date shown next to that course and come back then. Igatpuri fills quickly, so applying close to the moment a window opens helps.",
  },
  {
    q: "A course shows as full. Is that the whole course or just my category?",
    a: "Usually just your category. The schedule tracks seats separately for six groups: old male, old female, new male, new female, and male and female servers. A course can be full for new females while still open for new males, or full for students but open for servers. So check the status line for your specific category rather than reading one 'full' label as the course being closed to everyone.",
  },
  {
    q: "How much does registration at Igatpuri cost?",
    a: "Nothing to register, and nothing for the course, food, or lodging. Dhamma Giri runs entirely on a donation basis, and donations are accepted only from people who have already completed a 10-day course. A first-timer pays zero and is, in effect, hosted by everyone who sat before them. At the end you can give what you wish if you found value, or give nothing. Your seat is never conditional on payment.",
  },
  {
    q: "Which center in Igatpuri do I register at as a new student?",
    a: "Dhamma Giri. Igatpuri also has Dhamma Tapovana-1 and Dhamma Tapovana-2, but those run long courses for old students only and require a completed 10-day course first. If you have never sat a course, your only registration path in Igatpuri is a 10-day course at Dhamma Giri through schedule.vridhamma.org/courses/giri.",
  },
  {
    q: "Is there a booking fee or deposit to reserve a seat at Igatpuri?",
    a: "No. There is no booking fee, no deposit, and no payment of any kind to reserve a place at Dhamma Giri. People often search for 'booking' expecting a paid reservation, like a hotel or a retreat package, but registration here works differently: you apply, you get accepted, and you confirm, all for free. Dhamma Giri runs purely on donations, and even those can only be given by people who have already completed a 10-day course. So 'booking' and 'registration' mean the same thing at Igatpuri, and neither one costs anything. Your seat is held by your confirmation email, not by money.",
  },
  {
    q: "What if every Igatpuri course is full when I look?",
    a: "Two practical moves. First, keep checking, because confirmed students do drop out and seats reopen, sometimes days before a course. Second, widen your search. Dhamma Giri is the busiest center in the tradition precisely because it is the original, and there are many other Goenka-tradition centers across India and the world using the exact same application system, often with more availability. Registering at a quieter center gets you the identical 10-day course sooner.",
  },
];

export default function Page() {
  const articleLd = articleSchema({
    headline:
      "Vipassana Igatpuri Registration: How to Actually Get a Seat at Dhamma Giri",
    description:
      "Registration for Vipassana at Igatpuri is online only and two steps. Apply for one dated course at Dhamma Giri, wait for the email decision, then confirm. The per-category seat rule, the rolling application windows, and which of Igatpuri's centers a new student registers at.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const breadcrumbLd = breadcrumbListSchema(breadcrumbSchemaItems);
  const faqLd = faqPageSchema(faqs);

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div className="pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-6">
        <p className="text-xs font-mono uppercase tracking-widest text-teal-600 mb-4">
          Logistics, not technique
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Vipassana Igatpuri registration: how to actually get a seat at{" "}
          <GradientText>Dhamma Giri</GradientText>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
          The center you are registering at in Igatpuri is{" "}
          <strong className="text-zinc-900">Dhamma Giri</strong>, the original
          center of this tradition in India. Registration is done online, it is
          free, and it has one step almost every guide leaves out: applying is
          not the same as having a seat.
        </p>
      </header>

      <div className="mt-6">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />
      </div>

      {/* Direct answer callout */}
      <section className="max-w-4xl mx-auto px-6 mt-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Direct answer · verified 2026-06-19
          </p>
          <p className="mt-3 text-lg text-zinc-900 leading-relaxed">
            Register online at the official Dhamma Giri schedule (
            <a
              href={SCHEDULE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2 font-medium"
            >
              schedule.vridhamma.org/courses/giri
            </a>
            ). Pick one dated 10-day course, submit the application form, wait up
            to about two weeks for an email decision, then{" "}
            <strong>confirm</strong> that acceptance to hold your place. Only
            online applications are accepted, only confirmed students may enter
            the premises, and the course itself is free (donation only).
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Source: the official Dhamma Giri course schedule and the Dhamma Giri
            page on dhamma.org, checked 19 June 2026. For anything about the
            practice itself rather than registration, the authoritative place is{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      {/* The two-step nature, the spine */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-zinc-900">
          Registration is a handshake, not a form submission
        </h2>
        <p className="mt-5 text-zinc-700 leading-relaxed text-lg">
          I have applied through this same system for all six of my courses (none
          at Igatpuri, but the application machinery is identical across every
          center in the tradition), and the mental model that saves people grief
          is this: registration is a back-and-forth between you and the center,
          not a single button press. You send a request, the center sends back a
          decision, and then you have to send one more signal to lock it in.
          Skip that last signal and you are not registered, no matter how
          carefully you filled in the form.
        </p>

        <SequenceDiagram
          title="Dhamma Giri registration flow"
          actors={["You", "Dhamma Giri"]}
          messages={[
            {
              from: 0,
              to: 1,
              label: "Submit application for one dated course",
              type: "request",
            },
            {
              from: 1,
              to: 1,
              label: "Review applications (up to ~2 weeks)",
              type: "event",
            },
            {
              from: 1,
              to: 0,
              label: "Email: accepted, waitlisted, or declined",
              type: "response",
            },
            {
              from: 0,
              to: 1,
              label: "Confirm attendance  ← this is what registers you",
              type: "request",
            },
            {
              from: 1,
              to: 0,
              label: "Seat held. You may now enter the premises",
              type: "response",
            },
          ]}
        />

        <p className="mt-2 text-zinc-700 leading-relaxed">
          The center states it plainly on the schedule: only confirmed students
          and servers are permitted onto the premises. If you applied, got an
          acceptance email, and never clicked confirm, the door does not open for
          you. Put the confirmation step in your calendar the moment you apply so
          a decision email does not sit unread.
        </p>
      </section>

      {/* Metrics row, verifiable facts */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <MetricsRow
          metrics={[
            { value: 6, label: "Seat categories tracked separately" },
            { value: 0, label: "Walk-in seats (online only)" },
            { value: 0, prefix: "₹", label: "Cost to register or attend" },
            { value: 136, suffix: " km", label: "From Mumbai, on the Agra highway" },
          ]}
        />
        <p className="text-sm text-zinc-500">
          The six categories are old male, old female, new male, new female, and
          male and female servers. Each fills on its own, which is why a course
          can read &ldquo;full&rdquo; for one group and stay open for another.
        </p>
      </section>

      {/* Why the Apply button is missing, rolling windows */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-zinc-900">
          Why the Apply button is sometimes missing
        </h2>
        <p className="mt-5 text-zinc-700 leading-relaxed text-lg">
          People search for Igatpuri registration, find the schedule, see the
          date they want, and then cannot find a way to apply. Nothing is broken.
          Dhamma Giri opens each course&rsquo;s applications on a rolling basis,
          roughly a couple of months before that course begins, rather than
          opening the entire year at once. A course several months out will sit on
          the schedule with its dates listed and a note about when its window
          opens, but no live Apply link yet.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So the move is not to refresh in frustration. It is to read the small
          status line next to your chosen course, note the date its applications
          open, and come back on that day. Because Dhamma Giri is the original and
          busiest center, popular dates can fill within the first day or two of a
          window opening, so applying early in the window matters more here than
          at quieter centers.
        </p>
      </section>

      {/* Which center, disambiguation table */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-zinc-900">
          Igatpuri has three centers. New students register at one of them
        </h2>
        <p className="mt-5 text-zinc-700 leading-relaxed text-lg">
          This trips up newcomers. &ldquo;Igatpuri&rdquo; is not a single center,
          it is a cluster. The name you want as a first-timer is Dhamma Giri. The
          other two, Dhamma Tapovana-1 and Dhamma Tapovana-2, run long courses for
          experienced students only and require a completed 10-day course before
          you can even apply. Register at the wrong one and the system will not
          let you in.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-900">
              <tr>
                <th className="px-4 py-3 font-semibold">Center</th>
                <th className="px-4 py-3 font-semibold">Who can register</th>
                <th className="px-4 py-3 font-semibold">Courses</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {igatpuriCenters.map((c) => (
                <tr key={c.name} className="align-top">
                  <td className="px-4 py-4">
                    <div className="font-semibold text-zinc-900">{c.name}</div>
                    <div className="mt-1 text-zinc-500">{c.apply}</div>
                  </td>
                  <td className="px-4 py-4 text-zinc-700">{c.who}</td>
                  <td className="px-4 py-4 text-zinc-700">
                    {c.courses}
                    <div className="mt-2 text-zinc-500">{c.note}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          If you have never sat a 10-day course, ignore the Tapovana rows
          entirely. Your registration path in Igatpuri is the Dhamma Giri row.
        </p>
      </section>

      {/* What you fill in / before you apply */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-zinc-900">
          Before you submit the application
        </h2>
        <p className="mt-5 text-zinc-700 leading-relaxed text-lg">
          Two things to have settled before you open the form. First, read the
          Code of Discipline that the application links to and mean it. The
          application asks you to agree to staying the full ten days, to noble
          silence, and to the daily schedule. The center reads these answers, so
          treat the form as a genuine commitment rather than a checkbox.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Second, give a working email address, because all correspondence,
          including your acceptance and the all-important confirmation step, runs
          through email. If you mistype it, you will never see the decision and
          will assume you were rejected when you were not. Applicants need to be at
          least 18 and in reasonable health to take a 10-day course at Dhamma
          Giri.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For anything about how the days actually unfold once you arrive, or
          questions about your own practice, the right sources are{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at the course itself. This page is
          only about getting registered.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="igatpuri-registration-footer"
          heading="Registered, and now staring at the gap before day one?"
          description="If you have a seat at Igatpuri and want to talk through preparing for it, or building a daily sit afterward with a practice buddy, book a short call. Peer to peer, not as a teacher."
        />
      </div>

      <FaqSection items={faqs} heading="Igatpuri registration, answered" />

      <section className="max-w-4xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading before you sit"
          subtitle="From the resource site"
          posts={[
            {
              title: "What the 10-day course structure actually looks like",
              href: "/t/10-day-course-structure",
              excerpt:
                "The daily shape of a course, so the application's commitments are not a surprise.",
              tag: "Course",
            },
            {
              title: "First course tips",
              href: "/guide/first-course-tips",
              excerpt:
                "Practical preparation for newcomers, from someone who has sat six courses.",
              tag: "Guide",
            },
            {
              title: "Can I leave Vipassana in between?",
              href: "/t/can-i-leave-vipassana-in-between",
              excerpt:
                "Why the full-ten-days commitment on the form matters, and what leaving early means.",
              tag: "Honest answer",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="igatpuri-registration-sticky"
        description="Got a seat at Igatpuri? Talk through prep and daily practice."
      />
    </article>
  );
}
