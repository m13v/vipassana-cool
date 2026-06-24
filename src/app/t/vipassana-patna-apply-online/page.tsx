import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  TerminalOutput,
  SequenceDiagram,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-patna-apply-online";
const PUBLISHED = "2026-06-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Apply online for Vipassana in Patna (Dhamma Patliputta): the real registration flow",
  description:
    "How to apply online for a course at the Patna Vipassana center (Dhamma Patliputta). There is no Patna-only portal: the Apply button on schedule.vridhamma.org/courses/patliputta opens the shared dhamma.org application form. Future courses are gated behind a registration-opens date, and acceptance takes up to two weeks, after which you must confirm or lose your seat. Verified from patliputta.dhamma.org, 23 June 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Apply online for Vipassana in Patna: the actual Dhamma Patliputta registration flow",
    description:
      "The Apply button for the Patna center routes to the shared central application form, not a Patna portal. Future courses open for registration on a fixed date, and acceptance takes up to two weeks. Step-by-step, verified from the official site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply online for Vipassana in Patna (Dhamma Patliputta)",
    description:
      "No Patna-only portal: the Apply button opens the shared dhamma.org form. Registration opens on a fixed date per course, decisions take up to two weeks. Verified flow.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Apply online: Patna Vipassana" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Apply online: Patna Vipassana", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "Where do I actually apply online for a Patna course?",
    a: "On the official schedule at schedule.vridhamma.org/courses/patliputta, or via the center site patliputta.dhamma.org which links to the same listing. Find a course whose registration is open, click Apply, and you are taken to the application form. There is no separate Patna-only signup site, and vipassana.cool does not take applications. Anything that asks for a payment to register is not the real channel: the course is free.",
  },
  {
    q: "Why can't I apply for a course a few months out?",
    a: "Because registration for each course opens on a fixed date, not all at once. The Patna schedule shows lines like the October course with 'Applications open from Jul 5' and a November course with 'Applications open from Aug 5'. Until that date the Apply button is not active for that course. If a course you want is greyed out, note the open date and come back then.",
  },
  {
    q: "How long until I hear back after applying?",
    a: "The center states it can take up to two weeks to receive notification, because of the volume of applications. The decision comes by email, so use an address you check. Applying is not the same as being registered: you only have a seat once you are accepted and you confirm.",
  },
  {
    q: "What happens if I don't confirm after being accepted?",
    a: "Your place is released to someone on the waitlist. Acceptance is conditional on you replying to confirm you will attend. The official guidance is explicit that an unconfirmed acceptance does not hold your seat, so confirm promptly once you get the email.",
  },
  {
    q: "What does the application form ask for?",
    a: "The single dhamma.org application asks you to read the Code of Discipline first, then collects identity details (name, date of birth, gender), contact details, your course dates, and health and background questions that help the center decide whether a first ten-day course is appropriate for you right now. Answer every section fully; partial forms are not processed.",
  },
  {
    q: "Can I apply at the Patna center if I have never sat a course?",
    a: "Yes. The ten-day course is the entry point and is open to new students; you apply for a '10-day course' on the schedule, not a short course. Three-day and longer courses (like the December 20-day) are marked for old students only, meaning people who have already completed a ten-day course in this tradition.",
  },
  {
    q: "How do I check, change, or cancel my application?",
    a: "Through the same dhamma.org system you applied on; the central support FAQ at dhamma.org/en/about/support_faq covers checking status, updating, and cancelling. For Patna-specific questions you can also reach the center at +91 6205978822 (9:30 AM to 5:30 PM) or info@patliputta.dhamma.org.",
  },
  {
    q: "Will this page teach me the technique before I go?",
    a: "No. The technique is only ever taught in person by an authorized teacher inside the course itself. Nothing here, and nothing on any website, substitutes for that. This page is about the registration logistics only. For anything about the practice, the honest answer is dhamma.org and the teacher you meet on Day 0.",
  },
];

const applySteps = [
  {
    title: "Open the Patna course schedule",
    description:
      "Go to schedule.vridhamma.org/courses/patliputta (the center site patliputta.dhamma.org links to the same list). This is the live, official schedule for Dhamma Patliputta. Each row is one course with its dates and a status.",
  },
  {
    title: "Find a course whose registration is open",
    description:
      "Read the status on each row. A course can be In Progress, Closed, Open, or marked 'Applications open from' a future date. You can only apply to one that is currently open. If the course you want is still gated, write down its open date and return then.",
  },
  {
    title: "Read the Code of Discipline before you click Apply",
    description:
      "The application asks you to confirm you have read it. It is the set of rules and commitments for the ten days (noble silence, the schedule, no leaving early). The center expects you to have actually read it, not just ticked the box.",
  },
  {
    title: "Click Apply and fill out the single online form",
    description:
      "The Apply button opens the shared dhamma.org application form. Complete every section: identity, contact, your course dates, and the health and background questions. The official wording is to 'fully and completely fill out all the sections' and submit. Partial forms are not processed.",
  },
  {
    title: "Wait for the decision (up to two weeks)",
    description:
      "Because of application volume, notification can take up to two weeks and arrives by email. Use an address you check. Submitting is not the same as having a seat.",
  },
  {
    title: "Confirm your attendance to secure the seat",
    description:
      "If accepted, you must reply to confirm you are coming. Until you confirm, the seat is not held; an unconfirmed acceptance is released to the waitlist. Once confirmed, you are registered and will get pre-course instructions.",
  },
];

// Verified from schedule.vridhamma.org/courses/patliputta on 2026-06-23.
const openDateRows: { course: string; dates: string; opens: string }[] = [
  { course: "10-day", dates: "Oct 3 to 14, 2026", opens: "Jul 5, 2026" },
  { course: "10-day", dates: "Oct 17 to 28, 2026", opens: "Jul 19, 2026" },
  { course: "10-day", dates: "Nov 3 to 14, 2026", opens: "Aug 5, 2026" },
  { course: "STP", dates: "Nov 17 to 25, 2026", opens: "Aug 19, 2026" },
  { course: "10-day", dates: "Nov 27 to Dec 8, 2026", opens: "Aug 29, 2026" },
  { course: "20-day", dates: "Dec 10 to 31, 2026", opens: "Sep 11, 2026" },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Apply online for Vipassana in Patna (Dhamma Patliputta): the real registration flow",
              description:
                "A step-by-step logistics guide to applying online for a course at the Patna Vipassana center (Dhamma Patliputta): where the Apply button actually goes, the registration-opens-date gate, the up-to-two-weeks decision, and the confirm-or-lose-your-seat rule. Verified from patliputta.dhamma.org.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: PUBLISHED,
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
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbSchemaItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs, PAGE_URL)),
        }}
      />

      <div className="max-w-3xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        <p className="text-sm font-medium text-teal-700 uppercase tracking-wide mb-3">
          Patna, Bihar · applying online
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
          How to apply online for Vipassana in Patna
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          People search for a &ldquo;Patna apply online&rdquo; page expecting a
          local signup site. There isn&apos;t one. The Patna center, Dhamma
          Patliputta, takes applications through the same shared system every
          center in the tradition uses. The confusing parts are not the form
          itself; they are that registration for each course opens on a fixed
          date, and that being accepted is not the same as having a seat. Here is
          the whole flow, in order, verified from the official site.
        </p>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
          className="mt-6 !mx-0 !px-0"
        />
      </header>

      {/* Direct answer */}
      <section className="max-w-3xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 23 June 2026
          </p>
          <p className="mt-3 text-xl text-zinc-900 font-semibold leading-snug">
            Apply through the official schedule at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/patliputta"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/patliputta
            </a>{" "}
            (or via{" "}
            <a
              href="https://patliputta.dhamma.org/"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              patliputta.dhamma.org
            </a>
            ). Open a course whose registration is currently open, click Apply,
            complete the single online application form, then wait up to two
            weeks for a decision by email.
          </p>
          <p className="mt-4 text-base text-zinc-700 leading-relaxed">
            It is free, run entirely on donations, and there is no Patna-only
            portal and no early-bird payment. If a future course will not let you
            apply yet, that is expected: registration opens on a fixed date per
            course. Source:{" "}
            <a
              href="https://patliputta.dhamma.org/en/course-info/how-to-apply-for-a-course/"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              the center&apos;s own How to Apply page
            </a>
            .
          </p>
        </div>
      </section>

      {/* The one thing that confuses people: where Apply goes */}
      <section className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          There is no &ldquo;Patna application portal&rdquo;
        </h2>
        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          The reason an &ldquo;apply online&rdquo; search feels harder than it
          should is that the Patna center does not run its own application
          software. The schedule page lists Patna courses, but the moment you
          press Apply, you leave the Patna listing and land on the shared
          application form the whole tradition uses. One form, one system, the
          center selected for you automatically.
        </p>
        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          That is why you will not find a Patna-specific login or account to
          create. You apply per course, each time, on the central form.
        </p>
        <div className="mt-6">
          <TerminalOutput
            title="What the Apply button does"
            lines={[
              { text: "open schedule.vridhamma.org/courses/patliputta", type: "command" },
              { text: "course list for Dhamma Patliputta loads", type: "output" },
              { text: "click Apply on an open 10-day course", type: "command" },
              {
                text: "redirect -> /form/application-form (center + course prefilled)",
                type: "output",
              },
              { text: "shared dhamma.org application form, not a Patna portal", type: "info" },
              { text: "submit -> decision by email, up to 2 weeks", type: "success" },
            ]}
          />
        </div>
      </section>

      {/* The walkthrough */}
      <section className="max-w-3xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          The full flow, in order
        </h2>
        <p className="text-lg text-zinc-700 leading-relaxed mb-6">
          Six steps from opening the schedule to holding a confirmed seat. None
          of them involve paying anything.
        </p>
        <StepTimeline steps={applySteps} />
      </section>

      {/* Anchor fact: registration-opens dates */}
      <section className="max-w-3xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Registration opens on a fixed date, not all at once
        </h2>
        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          This is the single most common reason people think they cannot apply.
          A course three months out is on the schedule, but its Apply button is
          inactive until a set date, usually around two months before the course
          starts. When I checked the Patna schedule on 23 June 2026, several
          autumn courses listed their own opening dates rather than an Apply
          button. If a course you want is greyed out, it is not full, it just has
          not opened yet.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-50 text-zinc-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Course dates</th>
                <th className="px-4 py-3 font-semibold">Applications open from</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {openDateRows.map((r) => (
                <tr key={r.dates} className="text-zinc-800">
                  <td className="px-4 py-3 font-medium">{r.course}</td>
                  <td className="px-4 py-3">{r.dates}</td>
                  <td className="px-4 py-3 text-teal-700 font-medium">{r.opens}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          Snapshot from{" "}
          <a
            href="https://schedule.vridhamma.org/courses/patliputta"
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            schedule.vridhamma.org/courses/patliputta
          </a>
          , 23 June 2026. Dates rotate; always check the live schedule, which is
          the source of truth, before planning around any single date.
        </p>
      </section>

      {/* The other gotcha: accepted != registered */}
      <section className="max-w-3xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Submitting, being accepted, and being registered are three different
          things
        </h2>
        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          The second thing that trips people up is treating &ldquo;I sent the
          form&rdquo; as &ldquo;I have a seat.&rdquo; You do not. After you
          submit, the center reviews applications, which can take up to two
          weeks. If you are accepted, that acceptance is conditional: you have to
          reply and confirm you are coming. Only then are you registered. An
          accepted-but-unconfirmed application is released to the waitlist.
        </p>
        <div className="mt-6">
          <SequenceDiagram
            title="From submit to a held seat"
            actors={["You", "Patna center", "Waitlist"]}
            messages={[
              { from: 0, to: 1, label: "Submit application form", type: "request" },
              { from: 1, to: 0, label: "Reviewing (up to 2 weeks)", type: "event" },
              { from: 1, to: 0, label: "Acceptance email", type: "response" },
              { from: 0, to: 1, label: "Confirm attendance", type: "request" },
              { from: 1, to: 0, label: "Seat held, pre-course info sent", type: "response" },
              { from: 1, to: 2, label: "If not confirmed, seat released", type: "error" },
            ]}
          />
        </div>
        <p className="mt-4 text-lg text-zinc-700 leading-relaxed">
          Practically: apply with an email you actually read, and watch for the
          reply for the next couple of weeks. The waitlist moves, so a course
          that looked full when you applied can still come through if someone
          ahead of you does not confirm.
        </p>
      </section>

      {/* Practical notes */}
      <section className="max-w-3xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          A few practical notes for Patna specifically
        </h2>
        <ul className="mt-5 space-y-4 text-lg text-zinc-700 leading-relaxed">
          <li>
            <span className="font-semibold text-zinc-900">New students apply for the 10-day.</span>{" "}
            If you have never sat a course in this tradition, the ten-day course
            is your entry point. Short courses (three-day) and the longer ones
            (the December 20-day on the Patna schedule) are for old students who
            have already completed a ten-day.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">The form is the same everywhere, but apply to Patna.</span>{" "}
            Because the form is shared, double-check the course and center shown
            on it are the Patna course you meant to pick before submitting.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Stuck on the form or the schedule?</span>{" "}
            Patna lists a phone line, +91&nbsp;6205978822 (9:30 AM to 5:30 PM),
            and email{" "}
            <a
              href="mailto:info@patliputta.dhamma.org"
              className="text-teal-700 underline underline-offset-2"
            >
              info@patliputta.dhamma.org
            </a>
            . To check, change, or cancel an application after submitting, the
            central{" "}
            <a
              href="https://www.dhamma.org/en/about/support_faq"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org support FAQ
            </a>{" "}
            covers it.
          </li>
          <li>
            <span className="font-semibold text-zinc-900">Read the rules before you commit.</span>{" "}
            The application assumes you have read the{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code of Discipline
            </a>
            . It is worth doing honestly: it is what you are agreeing to for ten
            days, not a checkbox.
          </li>
        </ul>
        <p className="mt-6 text-base text-zinc-600 leading-relaxed">
          For the center itself, what is on site, where it sits, and how it
          compares to the Bodh Gaya center, see{" "}
          <Link
            href="/t/vipassana-patna"
            className="text-teal-700 underline underline-offset-2"
          >
            the Patna center logistics guide
          </Link>{" "}
          and{" "}
          <Link
            href="/t/patna-vipassana"
            className="text-teal-700 underline underline-offset-2"
          >
            the longer write-up on Dhamma Patliputta
          </Link>
          .
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="The hard part starts after you get accepted"
          description="Applied to Patna, or already sat a course and watching the daily practice slip? I match meditators with a practice buddy for daily accountability. Grab a slot and we'll figure out what consistency looks like for you."
        />
      </div>

      <FaqSection items={faqs} />

      <section className="max-w-3xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Picking a course, the center itself, and what the ten days are like"
          posts={[
            {
              title: "Vipassana in Patna: the center next to the railway junction",
              href: "/t/vipassana-patna",
              excerpt:
                "Location, capacity, cost, and how Dhamma Patliputta compares to the Bodh Gaya center.",
              tag: "Guide",
            },
            {
              title: "How to find a Vipassana retreat",
              href: "/guide/find-a-retreat",
              excerpt:
                "Reading the schedule, picking a center, and what the application actually asks.",
              tag: "Guide",
            },
            {
              title: "What the 10-day course structure is",
              href: "/t/10-day-course-structure",
              excerpt:
                "Twelve days on site, the daily clock, and the one shift on Day 10.",
              tag: "Guide",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Applied or about to? Get matched with a daily practice buddy."
      />
    </article>
  );
}
