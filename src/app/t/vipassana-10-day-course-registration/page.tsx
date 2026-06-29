import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  HorizontalStepper,
  GlowCard,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-10-day-course-registration";
const PUBLISHED = "2026-06-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana 10-day course registration: there is no global signup, you apply per center",
  description:
    "How registration for a 10-day Vipassana course actually works: no single account, no central register button. You apply to one specific center for one specific date through its own site on the dhamma.org network. Courses are free on a donation basis, many fill 2 to 3 months ahead, and a submitted application is not a confirmed seat until you reply to the acceptance email. Notes from six courses across three centers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana 10-day course registration: how applying actually works",
    description:
      "There is no global signup. You apply to one center for one date through its own application form, courses fill months ahead, and acceptance is not the same as a confirmed seat. From dhamma.org and six personal courses.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana 10-day course registration, the part nobody explains",
    description:
      "No central account. Apply per center, per date. Free on donation. Many courses full 2 to 3 months ahead. Acceptance is not a confirmed seat until you confirm.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "10-day course registration" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "10-day course registration", url: PAGE_URL },
];

const applySteps = [
  {
    title: "Pick a center and a date",
    description:
      "Open the upcoming course list for a specific center. Each center on the dhamma.org network publishes its own schedule, and you register for one course on one set of dates, not for the tradition in general.",
  },
  {
    title: "Read the Code of Discipline",
    description:
      "Before the form will let you finish, you confirm you have read the rules you are agreeing to for the full ten days. This is the real contract, not a checkbox.",
  },
  {
    title: "Submit the application",
    description:
      "New students fill out every section, including health and medication questions. Submitting puts you in the queue. It does not yet hold a seat.",
  },
  {
    title: "Wait for the decision, then confirm",
    description:
      "You get accepted, waitlisted, or asked for more information. Acceptance still requires your reply to confirm. No reply, no seat.",
  },
];

const relatedPosts = [
  {
    title: "The 'ten day commitment' is actually 12 days and 8 surrenders",
    href: "/t/ten-day-commitment",
    excerpt:
      "What you are literally agreeing to when you register, enumerated from the Code of Discipline at dhamma.org.",
    tag: "Reference",
  },
  {
    title:
      "10-day Vipassana course structure: the daily clock and the 10-day arc",
    href: "/t/10-day-course-structure",
    excerpt:
      "What the days look like once you are accepted: 12 days on site, three load-bearing group sittings, one Day 10 shift.",
    tag: "Reference",
  },
  {
    title: "Post-course integration: the week-by-week shift after a course",
    href: "/t/post-course-integration-shift",
    excerpt:
      "What happens after the gate opens on the morning of Day 11. The weeks that decide whether the course sticks.",
    tag: "Reflection",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there one website where I register for a 10-day course?",
    a:
      "No. There is no single global account or central register button. Each center runs its own application form on its own subdomain of the dhamma.org network, so you apply to one specific center for one specific course date. If you want a course in another region, you apply again at that center.",
  },
  {
    q: "How much does it cost to register?",
    a:
      "Nothing at registration. There is no charge for the teaching, the room, or the food, anywhere in the world. Courses run entirely on voluntary donations, and only people who have already completed a course may donate. You will never be asked for a card number to hold a seat.",
  },
  {
    q: "How far ahead should I apply?",
    a:
      "As early as you can. The official how-to-apply guidance for centers notes that many courses fill 2 to 3 months in advance, and applying early also gives you time to arrange travel and time off once you are confirmed. Popular dates and weekend-adjacent courses go first.",
  },
  {
    q: "Does submitting the application mean I have a seat?",
    a:
      "No. Submitting puts you in the queue. You then receive a decision: accepted, waitlisted, or a request for more information. Even an acceptance is not final until you reply to confirm. If you do not confirm by the deadline in that email, the seat is released to someone on the waitlist.",
  },
  {
    q: "What happens if I get waitlisted?",
    a:
      "Waitlists move. People withdraw, and seats open up, sometimes days before the course. Keep your application active and watch your email. Many people who start on a waitlist still sit the course they applied for.",
  },
  {
    q: "Do I have to stay the entire ten days?",
    a:
      "Yes. Registration is for the whole course. New students are expected to arrive on the opening afternoon and stay through the morning of the last day, roughly 7 AM. Committing to the full length is part of what you agree to when you apply.",
  },
  {
    q:
      "I have a question about a specific course date, medication, or accommodation. Who do I ask?",
    a:
      "The center you are applying to, through its own contact channels, and the official application and FAQ pages on dhamma.org. Those operational questions belong with the center and an authorized assistant teacher, not with a resource site like this one.",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana 10-day course registration: there is no global signup, you apply per center",
    description:
      "How registration for a 10-day Vipassana course actually works: no central account, you apply to one center for one date, courses are free on donation, many fill 2 to 3 months ahead, and acceptance is not a confirmed seat until you reply. Verified against dhamma.org on 2026-06-28, with notes from six courses.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const faqSchemaJson = faqPageSchema(faqs);
  const breadcrumbSchemaJson = breadcrumbListSchema(breadcrumbSchemaItems);

  return (
    <article className="min-h-screen">
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

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Vipassana 10-day course registration
        </h1>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="5 min read"
        />

        <p className="mt-6 text-lg leading-relaxed text-zinc-700">
          Almost every page about this searches for a button that does not
          exist. People expect a single account, a checkout, a confirmation
          screen. That is not how registering for a 10-day course works, and the
          mismatch is exactly where new students get stuck.
        </p>

        <GlowCard className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer, verified 2026-06-28
          </p>
          <p className="mt-3 text-base leading-relaxed text-zinc-800">
            There is no global signup. You register by applying to{" "}
            <span className="font-semibold text-zinc-900">
              one specific center for one specific course date
            </span>{" "}
            through that center&apos;s own application form on the dhamma.org
            network. The course is{" "}
            <span className="font-semibold text-zinc-900">free</span>, funded by
            donations, so registration never asks for payment. Submitting the
            form does not hold a seat: you have to be accepted and then{" "}
            <span className="font-semibold text-zinc-900">reply to confirm</span>
            . Many courses are full 2 to 3 months out, so apply early.
          </p>
          <p className="mt-4 text-sm text-zinc-600">
            Source:{" "}
            <a
              href="https://dhara.dhamma.org/courses/how-to-apply/"
              className="text-teal-600 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              the official how-to-apply guidance
            </a>{" "}
            and{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-600 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              the Code of Discipline
            </a>{" "}
            on dhamma.org.
          </p>
        </GlowCard>

        <h2 className="mt-12 text-2xl font-bold text-zinc-900">
          Why there is no central account
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The tradition is run as a network of independent centers rather than
          one organization with one database. Each center publishes its own
          upcoming course list and runs its own application form. Registration
          is local to the center and to the dates. When I sat my six courses
          across three different centers, that meant six separate applications,
          not one profile that followed me around. There is a central directory
          to find centers and a shared application form template, but the seat
          itself is always granted by a specific center for a specific course.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          This is the single fact that trips people up. They apply once,
          somewhere, and assume they are now &quot;in the system&quot; for any
          course. They are not. Each date is its own line in its own queue.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-zinc-900">
          The four moves that actually register you
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Stripped down, the flow is the same at every center on the network.
        </p>
        <div className="mt-6">
          <HorizontalStepper
            title="From browsing to a confirmed seat"
            steps={applySteps}
            current={0}
          />
        </div>

        <h2 className="mt-12 text-2xl font-bold text-zinc-900">
          Submitted is not the same as accepted, accepted is not the same as
          confirmed
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The status your application sits in matters more than most guides
          admit. Three different states, three different things you need to do.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-zinc-50">
              <tr>
                <th className="border-b border-zinc-200 px-4 py-3 font-semibold text-zinc-900">
                  Status
                </th>
                <th className="border-b border-zinc-200 px-4 py-3 font-semibold text-zinc-900">
                  What it means
                </th>
                <th className="border-b border-zinc-200 px-4 py-3 font-semibold text-zinc-900">
                  What you do
                </th>
              </tr>
            </thead>
            <tbody className="text-zinc-700">
              <tr>
                <td className="border-b border-zinc-100 px-4 py-3 font-medium text-zinc-900">
                  Submitted
                </td>
                <td className="border-b border-zinc-100 px-4 py-3">
                  In the queue. No seat held yet.
                </td>
                <td className="border-b border-zinc-100 px-4 py-3">
                  Wait for the decision email. Watch spam.
                </td>
              </tr>
              <tr>
                <td className="border-b border-zinc-100 px-4 py-3 font-medium text-zinc-900">
                  Waitlisted
                </td>
                <td className="border-b border-zinc-100 px-4 py-3">
                  Course is full for now, you are next in line as seats open.
                </td>
                <td className="border-b border-zinc-100 px-4 py-3">
                  Stay reachable. Waitlists move, sometimes days before.
                </td>
              </tr>
              <tr>
                <td className="border-b border-zinc-100 px-4 py-3 font-medium text-zinc-900">
                  Accepted
                </td>
                <td className="border-b border-zinc-100 px-4 py-3">
                  A seat is offered to you, but not yet locked.
                </td>
                <td className="border-b border-zinc-100 px-4 py-3">
                  Reply to confirm by the deadline, or it is released.
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-zinc-900">
                  Confirmed
                </td>
                <td className="px-4 py-3">
                  Registered. The seat is yours.
                </td>
                <td className="px-4 py-3">
                  Arrange travel and time off, then show up on day zero.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 leading-relaxed text-zinc-700">
          The gap between accepted and confirmed is where most lost seats
          happen. The acceptance email asks for a reply, and a quiet inbox reads
          as a no. If you are not going to come, releasing the seat early lets
          someone on the waitlist take it.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-zinc-900">
          Free does not mean casual
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          Because there is no payment, the only thing holding your seat is your
          word. Centers run on donations from people who have already finished a
          course, and seats are limited. A no-show is a seat that someone on the
          waitlist could have used. The lightness of registration, no money, no
          card, is exactly why confirming and showing up is taken seriously.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-zinc-900">
          Questions about a specific course belong with the center
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          This is a resource site written by a fellow practitioner, not a
          teacher and not a center. For anything operational, dates, medication,
          accommodation, dietary needs, accessibility, or how to check or cancel
          an application, go to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and the center you are applying to. The official{" "}
          <a
            href="https://www.dhamma.org/en/about/support_faq"
            className="text-teal-600 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            support FAQ
          </a>{" "}
          covers checking, updating, and cancelling an application. An
          authorized assistant teacher is the right person for anything about
          the practice itself.
        </p>

        <div className="mt-12">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Registered, but worried the daily habit won't survive the course?"
            description="I've sat six courses and kept a daily sit going for years. Book a short call and I'll share what worked for staying consistent after day 11."
          />
        </div>

        <div className="mt-12">
          <FaqSection
            heading="Registration questions, answered"
            items={faqs}
          />
        </div>

        <div className="mt-12">
          <RelatedPostsGrid
            subtitle="Related"
            title="Before and after the gate"
            posts={relatedPosts}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          Written by a fellow practitioner sharing experience, not a teacher.
          For how to practice, registration logistics, or anything operational,
          see{" "}
          <Link href="/t/ten-day-commitment" className="text-teal-600 underline">
            what the ten-day commitment really involves
          </Link>{" "}
          and dhamma.org.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course or about to? Let's talk daily practice."
      />
    </article>
  );
}
