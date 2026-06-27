import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GlowCard,
  OrbitingCircles,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import { PageComments } from "@/components/comments";

const PAGE_URL = "https://vipassana.cool/t/servers-in-vipassana-meaning";
const PUBLISHED = "2026-06-27";
const MODIFIED = "2026-06-27";
const BOOKING = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: 'Servers in Vipassana: What the Word Actually Means',
  description:
    'In Vipassana, "servers" are old students who volunteer to run a course (cooking, cleaning, logistics) unpaid while keeping their own daily practice. The same word also appears on the official schedule as one of six availability categories. Here is both meanings, kept separate, with the eligibility rules from dhamma.org.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Servers in Vipassana: what the word actually means",
    description:
      'A plain-language note on the two places you meet the word "server" in Vipassana: the unpaid volunteer who runs a course, and the availability label on a course schedule.',
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What 'servers' means in Vipassana",
    description:
      "Not staff, not paid, not a computer. Old students who volunteer to run a course. Here is the full breakdown plus how to read the schedule label.",
  },
  robots: { index: true, follow: true },
};

const FAQS: FaqItem[] = [
  {
    q: "What does 'server' mean in Vipassana?",
    a: "A server, more fully a Dhamma server, is someone who has completed at least one 10-day Vipassana course in the tradition of S.N. Goenka and is volunteering to help run a later course rather than sitting it. Servers cook, clean, manage registration, and support the meditating students. The work is unpaid and is considered part of the practice itself, not just unpaid help.",
  },
  {
    q: "Are Vipassana servers paid?",
    a: "No. Dhamma service is entirely voluntary, with no payment, stipend, or compensation of any kind. Servers receive free shared accommodation and the same meals the students eat, usually after the students have finished. Service is offered as dana (generosity), the same way the teaching itself is given freely. There are no paid staff at course sites.",
  },
  {
    q: "Why does the schedule say 'Server Male' and 'Server Female' instead of just 'Server'?",
    a: "Every Goenka center keeps men and women physically separate across the whole campus: accommodation, walking areas, dining, and the meditation hall. Servers follow the same separation, so a male server supports the men's side and a female server the women's side. The two rosters fill separately, which is why the official schedule lists Server Male and Server Female as two distinct categories rather than one combined server count.",
  },
  {
    q: "How many servers does a Vipassana course need?",
    a: "A typical 10-day course runs on around eight full-time servers, split across kitchen, course management, cleaning and maintenance, and registration and admin. Larger centers may use more. Both full-time servers (the whole course) and part-time servers (a few days, or work between courses) are welcomed.",
  },
  {
    q: "Who is allowed to be a server?",
    a: "Any old student who has completed at least one 10-day course with S.N. Goenka or one of his assistant teachers, is maintaining a daily practice, has not taken up another meditation technique since their last course, and keeps the five precepts. You do not need years of experience. Many people serve for the first time on their second visit to a center.",
  },
  {
    q: "How is a server different from a student on the same schedule?",
    a: "A student (listed as Old or New, Male or Female) is sitting the course as a meditator, roughly ten hours a day in silence. A server is volunteering to run that same course: they attend the three daily group sittings, about three hours, and spend the rest of the day working. Same eligibility for the service side (a completed course), very different days.",
  },
  {
    q: "Do servers keep noble silence like the students?",
    a: "Not fully. Servers may speak, but only as needed to coordinate work. Social conversation and unnecessary talking are discouraged, so the atmosphere is quieter than ordinary life but more communicative than a sitting course. The only servers who speak directly with sitting students are the course managers, and even there female managers work with female students, male with male.",
  },
  {
    q: "Where do I actually sign up to serve?",
    a: "Through the center you want to serve at, via the directory at dhamma.org. Look for its Service or Dhamma Seva section, pick the dates, and fill out the service application, which is shorter than a sitting application. Service places fill up, so applying early helps. For anything about the meditation technique itself, the tradition points you to dhamma.org and an authorized assistant teacher.",
  },
];

const SCHEDULE_ROWS: { category: string; who: string; isServer?: boolean }[] = [
  { category: "Old Male", who: "Returning male meditator, sitting the course" },
  { category: "Old Female", who: "Returning female meditator, sitting the course" },
  { category: "New Male", who: "First-time male student, sitting the course" },
  { category: "New Female", who: "First-time female student, sitting the course" },
  { category: "Server Male", who: "Male old student volunteering on the men's side", isServer: true },
  { category: "Server Female", who: "Female old student volunteering on the women's side", isServer: true },
];

export default function Page() {
  const schema = [
    breadcrumbListSchema([
      { name: "Home", url: "https://vipassana.cool" },
      { name: "Topics", url: "https://vipassana.cool/t/10-day-course-structure" },
      { name: "Servers in Vipassana meaning", url: PAGE_URL },
    ]),
    articleSchema({
      headline: "Servers in Vipassana: what the word actually means",
      description:
        'In Vipassana, "servers" are old students who volunteer to run a course unpaid while keeping their own practice. The same word also appears on the schedule as one of six availability categories.',
      url: PAGE_URL,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
    }),
    faqPageSchema(FAQS),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "10-Day Course", href: "/t/10-day-course-structure" },
            { label: "Servers meaning" },
          ]}
        />
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-6 pt-6 pb-2">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
          A linguistic note
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          What &quot;servers&quot; means in Vipassana
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          The word throws people off, because nothing in everyday English maps onto
          it cleanly. A Vipassana server is not a waiter, not paid staff, and not a
          machine in a rack. It is a specific person doing a specific thing, and you
          tend to meet the word in two different places that mean two slightly
          different things.
        </p>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          dateModified={MODIFIED}
          readingTime="7 min read"
        />
      </header>

      {/* Direct answer callout */}
      <div className="mx-auto max-w-3xl px-6 pt-6">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Direct answer
          </p>
          <p className="mt-2 text-zinc-800">
            In Vipassana, <strong>servers</strong> are old students, people who have
            finished at least one 10-day course, who volunteer to run a later course
            instead of sitting it. They cook, clean, handle registration, and support
            the meditating students. The work is unpaid and the tradition treats it as
            part of the practice. On an official course schedule, <strong>Server</strong>
            {" "}also shows up as a label: one of six availability categories that tells
            you whether a service place is still open. Same word, two contexts.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Eligibility verified against the Code of Conduct for Dhamma Servers at{" "}
            <a
              href="https://www.dhamma.org/en-US/about/dscode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline hover:text-zinc-900"
            >
              dhamma.org
            </a>{" "}
            on 2026-06-27.
          </p>
        </div>
      </div>

      {/* The two senses */}
      <section className="mx-auto max-w-3xl px-6 pt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          The two places you meet the word
        </h2>
        <p className="mt-3 text-zinc-700">
          Most of the confusion comes from running these two together. They point at
          the same kind of person, but they answer different questions. Keep them
          apart and the word stops being slippery.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <GlowCard className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              Sense 1 &mdash; the person
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              A server is a volunteer
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              When a meditator says &quot;I served a course,&quot; they mean they spent
              roughly twelve days as a Dhamma server: arriving early, working the
              kitchen or admin, attending three group sittings a day, and keeping the
              place running so the students could sit. This is the meaning you hear in
              conversation and read in trip reports.
            </p>
          </GlowCard>

          <GlowCard className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
              Sense 2 &mdash; the label
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Server is a schedule status
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              When you are scanning a center&apos;s course list and a row reads
              &quot;Server Male &mdash; Open,&quot; that is not a job posting. It is an
              availability slot. It tells a male old student whether he can still
              register to serve that course. The word here is a category on a
              registration page, not a description of a person.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Anchor fact: the six-category taxonomy */}
      <section className="mx-auto max-w-3xl px-6 pt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why &quot;servers&quot; is split across the schedule
        </h2>
        <p className="mt-3 text-zinc-700">
          The official Goenka schedule does not have a single &quot;servers&quot; row.
          Every course is broken into exactly six fixed availability categories. Four
          are for students, two are for servers, and the whole thing is split by gender
          because the men&apos;s and women&apos;s sides of a course run as physically
          separate operations.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="py-3 pl-4 pr-4 text-left font-semibold text-zinc-900">
                  Schedule category
                </th>
                <th className="py-3 pr-4 text-left font-semibold text-zinc-900">
                  Who it is for
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {SCHEDULE_ROWS.map((row) => (
                <tr
                  key={row.category}
                  className={row.isServer ? "bg-teal-50/60" : ""}
                >
                  <td className="py-3 pl-4 pr-4 whitespace-nowrap font-medium text-zinc-900">
                    {row.category}
                    {row.isServer && (
                      <span className="ml-2 rounded bg-teal-100 px-1.5 py-0.5 text-[11px] font-semibold text-teal-700">
                        server
                      </span>
                    )}
                  </td>
                  <td className="py-3 pr-4 text-zinc-600">{row.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="text-sm text-zinc-700">
            The detail almost nobody mentions: the two server rows never show a number.
            The schedule publishes a <em>status</em> per category, never a seat count.
            So a server row reads <strong>Open</strong>, <strong>Course Full</strong>,
            {" "}<strong>Closed</strong>, or <strong>In Progress</strong>, and that is
            all you get. You learn whether a service place exists, not how many remain.
            For exact numbers you contact the center through its registration page.
          </p>
        </div>

        <p className="mt-5 text-zinc-700">
          A common pattern: a course shows &quot;Old Male &mdash; Course Full&quot; but
          &quot;Server Male &mdash; Open.&quot; The men&apos;s sitting places are gone,
          but the men&apos;s service places are not. Courses often fill the student side
          first and keep accepting servers, since around eight are needed to run the
          course. If you are an old student, that listing is an invitation to serve
          rather than sit. The gendered labels get their own deeper notes:{" "}
          <Link
            href="/t/server-male-meaning-in-vipassana-meditation"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            Server Male
          </Link>{" "}
          and{" "}
          <Link
            href="/t/server-female-meaning-in-vipassana"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            Server Female
          </Link>
          .
        </p>
      </section>

      {/* What servers actually do — orbiting */}
      <section className="mx-auto max-w-3xl px-6 pt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          What sits under the one word
        </h2>
        <p className="mt-3 text-zinc-700">
          &quot;Server&quot; is a single label stretched over a handful of very
          different jobs. When a center assigns you, you do not usually pick: you go
          where the course needs you. The four roles below are the usual split for a
          standard 10-day course.
        </p>

        <OrbitingCircles
          center={
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-center text-sm font-semibold text-teal-700">
              Dhamma
              <br />
              server
            </div>
          }
          radius={140}
          duration={28}
          items={[
            <div
              key="kitchen"
              className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm"
            >
              Kitchen
            </div>,
            <div
              key="manager"
              className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm"
            >
              Course manager
            </div>,
            <div
              key="clean"
              className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm"
            >
              Cleaning
            </div>,
            <div
              key="admin"
              className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm"
            >
              Registration
            </div>,
          ]}
        />

        <p className="text-zinc-700">
          The kitchen team is the backbone, often starting around 4:30 AM. Course
          managers are the only servers who speak directly with sitting students.
          Cleaning and maintenance keep the halls and grounds usable. Registration and
          admin is busiest on arrival and departure days. The full breakdown of roles,
          the daily schedule, and what serving is actually like lives in the{" "}
          <Link
            href="/guide/dhamma-service"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            Dhamma service guide
          </Link>
          .
        </p>
      </section>

      {/* Numbers strip */}
      <section className="mx-auto max-w-3xl px-6 pt-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-zinc-200 p-5 text-center">
            <div className="text-2xl font-bold text-teal-600">
              <NumberTicker value={6} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">schedule categories</p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5 text-center">
            <div className="text-2xl font-bold text-teal-600">
              ~<NumberTicker value={8} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">servers per 10-day course</p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5 text-center">
            <div className="text-2xl font-bold text-teal-600">
              <NumberTicker value={3} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">group sittings a server attends daily</p>
          </div>
          <div className="rounded-xl border border-zinc-200 p-5 text-center">
            <div className="text-2xl font-bold text-teal-600">
              $<NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-zinc-500">pay (it is dana)</p>
          </div>
        </div>
      </section>

      {/* A note from serving */}
      <section className="mx-auto max-w-3xl px-6 pt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why the word carries weight
        </h2>
        <p className="mt-3 text-zinc-700">
          I have spent 40+ days serving across courses, mostly in the kitchen, and the
          word &quot;server&quot; landed differently for me once I had done it. On the
          cushion, equanimity is a tidy idea. In the kitchen, when you are behind on
          meal prep and something is burning and someone needs help with a different
          task, it stops being tidy. That is the point. The tradition uses the plain
          word &quot;server&quot; on purpose: the work is humble by design, and many
          experienced meditators say serving changed their practice more than another
          course of sitting did.
        </p>
        <p className="mt-4 text-zinc-700">
          So when you see &quot;servers&quot; in a Vipassana context, read it as: old
          students giving their time to run a course for free. Whether you met the word
          in someone&apos;s story or as a row on a schedule, that is the thing it points
          at. I am not a teacher, just a fellow practitioner sharing what the word
          actually means after some time on both sides of it. For anything about the
          meditation technique itself, the tradition points you to{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline hover:text-zinc-900"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher.
        </p>
      </section>

      <div className="mx-auto max-w-3xl px-6 pt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          section="servers-meaning-footer"
          heading="Serving needs a maintained daily practice"
          description="That is the hard part for most old students. Talk through what a consistent between-courses practice could look like, with someone who has served and kept sitting."
        />
      </div>

      <FaqSection items={FAQS} heading="Servers in Vipassana: common questions" />

      <div className="mx-auto max-w-3xl px-6">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Related"
          posts={[
            {
              title: '"Server Male" on a course schedule',
              href: "/t/server-male-meaning-in-vipassana-meditation",
              excerpt:
                "What the men's-side service availability label means and how to read it before you apply.",
              tag: "Schedule",
            },
            {
              title: '"Server (Female)" on a course schedule',
              href: "/t/server-female-meaning-in-vipassana",
              excerpt:
                "The women's-side service seat, why it is split by gender, and how it differs from a sitting slot.",
              tag: "Schedule",
            },
            {
              title: "Dhamma service (seva): what it's like",
              href: "/guide/dhamma-service",
              excerpt:
                "The full guide to serving: roles, daily schedule, eligibility, and how to apply.",
              tag: "Guide",
            },
          ]}
        />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <PracticeBuddyCta
          heading="Keeping your practice alive between courses?"
          description="Serving requires a maintained daily practice, and that's the hard part for most old students. Get matched with a fellow Vipassana meditator for daily sits over Google Meet. Free, peer-led, and built on real accountability."
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-16">
        <PageComments pageId="t-servers-in-vipassana-meaning" />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        section="servers-meaning-sticky"
        description="Served before and want to keep a daily practice going? Let's talk."
      />
    </article>
  );
}
