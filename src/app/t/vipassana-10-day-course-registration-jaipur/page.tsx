import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  TerminalOutput,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-10-day-course-registration-jaipur";
const PUBLISHED = "2026-06-29";
const VERIFIED = "29 June 2026";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const THALI_PORTAL = "https://schedule.vridhamma.org/courses/thali";
const THALI_COURSES = "https://thali.dhamma.org/courses/";
const THALI_SITE = "https://thali.dhamma.org/";
const ARANYA_PORTAL = "https://schedule.vridhamma.org/courses/aranya";
const NILAYA2_PORTAL = "https://schedule.vridhamma.org/courses/nilaya2";
const CODE_OF_DISCIPLINE = "https://www.dhamma.org/en/about/code";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana 10-day course registration in Jaipur: the Dhamma Thali portal, and the two traps",
  description:
    "Registration for the 10-day Vipassana course in Jaipur happens online only, at the Dhamma Thali schedule (schedule.vridhamma.org/courses/thali). Free on a donation basis, one application per specific date, no central account. But Jaipur's registration is split across three centre portals, one hides behind a misleading subdomain, and the live schedule tracks seats separately per gender. Verified 29 June 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Jaipur 10-day Vipassana registration: which portal, and the part no listing covers",
    description:
      "Apply online at the Dhamma Thali schedule. Jaipur runs three centre portals, one sits at a misleading subdomain, and women often have to register far earlier than men. The full apply walk from a meditator who has done six courses.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana 10-day course registration in Jaipur, explained",
    description:
      "Online-only at the Dhamma Thali portal. Three Jaipur centres, a subdomain that sends you to France, and per-gender seat closures. Verified June 2026.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Jaipur 10-day registration" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Jaipur 10-day course registration", url: PAGE_URL },
];

type JaipurCentre = {
  name: string;
  area: string;
  who: string;
  portal: string;
  portalLabel: string;
  note: string;
};

const jaipurCentres: JaipurCentre[] = [
  {
    name: "Dhamma Thali",
    area: "Galta, via Sisodiya Rani Baug, about 12 km from Jaipur railway station",
    who: "New students applying for a standard 10-day course start here",
    portal: THALI_PORTAL,
    portalLabel: "schedule.vridhamma.org/courses/thali",
    note: "This is the centre almost everyone means by 'Vipassana in Jaipur'. It runs 10-day courses through most of the year.",
  },
  {
    name: "Dhamma Nilaya",
    area: "Jamdoli, on the eastern edge of Jaipur",
    who: "Younger participants and shorter courses (the centre also lists children's and teen courses)",
    portal: NILAYA2_PORTAL,
    portalLabel: "schedule.vridhamma.org/courses/nilaya2",
    note: "The catch: its portal code is nilaya2, not nilaya. The bare 'nilaya' subdomain belongs to a centre in France.",
  },
  {
    name: "Dhamma Aranya",
    area: "Chaksu, roughly 50 km south of the city",
    who: "A separate course site under the same Jaipur trust",
    portal: ARANYA_PORTAL,
    portalLabel: "schedule.vridhamma.org/courses/aranya",
    note: "Further out and quieter. Worth checking when Thali dates are full and you can travel.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly do I register for the 10-day Vipassana course in Jaipur?",
    a: "Online only, at the Dhamma Thali course schedule: schedule.vridhamma.org/courses/thali, also reachable from thali.dhamma.org/courses. You pick one specific course date, open its application form, and submit it. There is no Jaipur-wide account and no single 'register' button that covers every centre. Verified against the live Thali schedule on 29 June 2026.",
  },
  {
    q: "How much does it cost to register?",
    a: "Nothing. Courses run entirely on a donation basis with no charge, not even for food and accommodation. The application form does not ask for payment. At the end of the course, old students who have completed a course can donate if they wish, but a new student pays nothing and is not asked to. Anyone telling you there is a registration fee for a Goenka-tradition course in Jaipur is describing something that is not an official Dhamma centre.",
  },
  {
    q: "What is the difference between 'applying' and the 'registration' on day zero?",
    a: "They are two different things that share a word. The online application is what you submit weeks ahead to request a seat. The 2 to 4 pm registration is the in-person check-in on the afternoon you arrive at the centre, before the course begins that evening. When a search for 'registration jaipur' brings you to this page, you almost certainly mean the online application. The arrival registration only matters once you already have a confirmed seat.",
  },
  {
    q: "Is a submitted application the same as a confirmed seat?",
    a: "No. After you submit, the centre's registrar reviews applications by hand and emails you a decision: accepted, waitlisted, or not accepted this time. If you are accepted, you usually have to reply to confirm you are still coming. A confirmation is not final until you have replied and the centre has acknowledged it. Skipping that reply is the most common way people lose a seat they thought they had.",
  },
  {
    q: "Why do women's seats at Thali fill before men's?",
    a: "Capacity at residential centres is split by gender because accommodation and the meditation hall are arranged separately for men and women, and the two sides do not always have equal bed counts for a given course. The Thali schedule shows availability per gender, and in practice the new-female side often closes earlier than the new-male side for the same dates. When I checked the live Thali schedule in late June 2026, several consecutive July 2026 10-day courses showed new-female seats closed while new-male seats were still open. If you are a woman applying, treat the dates as filling faster and apply as early as you can.",
  },
  {
    q: "How far ahead should I apply?",
    a: "Most centres open a course for applications roughly 2 to 3 months before it starts, and popular dates can fill within days of opening. For Jaipur, apply the day a date opens if you can, stay flexible on which date you take, and consider the quieter months. Off-peak dates are easier to get into than a course that lands on a long weekend or holiday.",
  },
  {
    q: "What does the application form ask?",
    a: "Personal details, a health and mental-health history, any prior meditation experience, and your agreement to stay for the full ten days under the Code of Discipline. It takes about 15 to 20 minutes. Answer the health questions honestly. A mental-health history rarely disqualifies anyone on its own; it helps the centre support you, and an undisclosed condition that surfaces mid-course is a far bigger problem than one noted on the form.",
  },
  {
    q: "What if every Jaipur date I want is full?",
    a: "Three options. Stay on the waitlist for your preferred Thali date, because cancellations happen regularly, sometimes days before a course starts. Widen your search to Dhamma Aranya at Chaksu or Dhamma Nilaya at Jamdoli, both under the same Jaipur trust. Or look at nearby centres across Rajasthan and northern India through the directory at dhamma.org. The application process is identical at every one of them.",
  },
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
                "Vipassana 10-day course registration in Jaipur: the Dhamma Thali portal, and the two traps",
              description:
                "How to register for the 10-day Vipassana course in Jaipur: the online-only Dhamma Thali schedule portal, the three-centre split, the misleading subdomain, and the per-gender seat reality.",
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
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbSchemaItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="mx-auto max-w-3xl px-6 pt-8 pb-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Vipassana 10-day course registration in Jaipur
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          Where you actually apply, what the word &ldquo;registration&rdquo;
          hides, and the two things about Jaipur that no centre listing spells
          out. Notes from a meditator who has sat six courses, not from the
          centre.
        </p>
        <div className="mt-5">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="8 min read"
          />
        </div>
      </header>

      {/* Direct answer */}
      <section className="mx-auto max-w-3xl px-6 py-4">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer &middot; verified {VERIFIED}
          </p>
          <p className="mt-3 text-zinc-800">
            You register for the 10-day Vipassana course in Jaipur{" "}
            <strong>online only</strong>, at the Dhamma Thali course schedule:{" "}
            <a
              href={THALI_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              schedule.vridhamma.org/courses/thali
            </a>
            . It is <strong>free on a donation basis</strong>, you apply to{" "}
            <strong>one specific course date</strong> rather than to a wait pool,
            and there is no Jaipur-wide account. Submitting the form is a
            request, not a seat. The seat is real once the registrar emails an
            acceptance and you reply to confirm.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Same portal, reached the long way:{" "}
            <a
              href={THALI_COURSES}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              thali.dhamma.org/courses
            </a>
            . Read the{" "}
            <a
              href={CODE_OF_DISCIPLINE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              Code of Discipline
            </a>{" "}
            before you apply; the form assumes you have.
          </p>
        </div>
      </section>

      {/* Two meanings of registration */}
      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          &ldquo;Registration&rdquo; means two different things
        </h2>
        <p className="mt-4 text-zinc-700">
          The reason this topic feels confusing is that one word does two jobs,
          and the official pages rarely separate them.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-zinc-900">
              The online application
            </p>
            <p className="mt-2 text-sm text-zinc-700">
              The form you submit weeks ahead to request a place on a specific
              date. This is what almost everyone searching means. It lives on
              the Thali schedule portal and takes about 15 to 20 minutes.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-zinc-900">
              The arrival registration
            </p>
            <p className="mt-2 text-sm text-zinc-700">
              The in-person check-in from 2 to 4 pm on the afternoon you arrive,
              before the course opens that evening. It only matters once you
              already hold a confirmed seat. It is not a second form to fill out
              online.
            </p>
          </div>
        </div>
        <p className="mt-5 text-zinc-700">
          For the rest of this page, &ldquo;registration&rdquo; means the online
          application, because that is the part you do from home and the part
          where seats are won or lost.
        </p>
      </section>

      {/* The three Jaipur portals */}
      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          Jaipur is three centres, not one portal
        </h2>
        <p className="mt-4 text-zinc-700">
          The first trap: there is no single &ldquo;Jaipur&rdquo; registration
          page. The Jaipur trust runs three separate Dhamma centres, each with
          its own course schedule and its own application form. A 10-day course
          listed at one centre is invisible from another centre&rsquo;s portal.
          When I pulled the centre directory data, the three Jaipur-area centres
          came back as distinct entries with distinct portal codes.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-100 text-zinc-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Centre</th>
                <th className="px-4 py-3 font-semibold">Where</th>
                <th className="px-4 py-3 font-semibold">Apply at</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {jaipurCentres.map((c) => (
                <tr key={c.name} className="align-top">
                  <td className="px-4 py-4">
                    <p className="font-semibold text-zinc-900">{c.name}</p>
                    <p className="mt-1 text-xs text-zinc-500">{c.who}</p>
                  </td>
                  <td className="px-4 py-4 text-zinc-700">{c.area}</td>
                  <td className="px-4 py-4">
                    <a
                      href={c.portal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all font-medium text-teal-700 underline underline-offset-2"
                    >
                      {c.portalLabel}
                    </a>
                    <p className="mt-1 text-xs text-zinc-500">{c.note}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-semibold text-amber-800">
            The subdomain that sends you to France
          </p>
          <p className="mt-2 text-sm text-zinc-700">
            This is the second trap, and it is the one that costs people the
            most time. Jaipur&rsquo;s second centre is called Dhamma Nilaya, at
            Jamdoli. But its portal code is <code>nilaya2</code>, not{" "}
            <code>nilaya</code>. In the directory data it appears as centre id{" "}
            <strong>1848</strong>, display name &ldquo;Jamdoli - Jaipur&rdquo;.
            The bare <code>nilaya</code> code is taken by an entirely different
            Dhamma Nilaya in Seine-et-Marne, France (centre id 1399). Type the
            obvious URL and you will be looking at a French course calendar,
            wondering why Jaipur has courses in French. For the Jaipur centre,
            the code is <code>nilaya2</code>.
          </p>
        </div>
      </section>

      {/* The apply flow */}
      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          What actually happens after you hit submit
        </h2>
        <p className="mt-4 text-zinc-700">
          Registration is not a checkout. It is a small approval pipeline run by
          a human registrar, and the seat only becomes yours near the end of it.
          Here is the path a Thali application travels.
        </p>
        <div className="mt-6">
          <FlowDiagram
            title="From application to confirmed seat at Dhamma Thali"
            steps={[
              {
                label: "Pick one date",
                detail:
                  "Open the Thali schedule, choose a specific 10-day course, and open its form.",
                icon: "browser",
              },
              {
                label: "Submit the form",
                detail:
                  "Personal details, health and mental-health history, meditation experience, agreement to stay all ten days.",
                icon: "browser",
              },
              {
                label: "Registrar reviews",
                detail:
                  "A human reads it. This can take a few days to a few weeks depending on how close the course is.",
                icon: "server",
              },
              {
                label: "Decision email",
                detail:
                  "Accepted, waitlisted, or not this time. Watch spam folders; this is the email everything hinges on.",
                icon: "email",
              },
              {
                label: "You reply to confirm",
                detail:
                  "Acceptance is not final until you confirm you are still coming. Miss this and the seat passes on.",
                icon: "check",
              },
            ]}
          />
        </div>
      </section>

      {/* Live availability readout */}
      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          Read the schedule the way the registrar does
        </h2>
        <p className="mt-4 text-zinc-700">
          Here is the part that changes how you time your application. The Thali
          schedule does not show one availability number per course. It shows
          status <strong>per gender</strong> and per student type, because men
          and women are housed and seated separately and the bed counts for a
          given course are not always equal. The third trap is assuming a course
          with &ldquo;open&rdquo; seats is open to you. It might be open only for
          the other side.
        </p>
        <p className="mt-3 text-zinc-700">
          When I read the live Thali schedule in late June 2026, the pattern was
          hard to miss. Across several back-to-back July courses, the new-female
          side had already closed while the new-male side was still taking
          applications for the same dates. A rough snapshot of what that looked
          like:
        </p>
        <div className="mt-6">
          <TerminalOutput
            title="schedule.vridhamma.org/courses/thali, snapshot 29 Jun 2026"
            lines={[
              { text: "10-day course  1 Jul - 12 Jul", type: "command" },
              { text: "new male: open", type: "success" },
              { text: "new female: closed", type: "error" },
              { text: "10-day course  12 Jul - 23 Jul", type: "command" },
              { text: "new male: open", type: "success" },
              { text: "new female: closed", type: "error" },
              { text: "10-day course  15 Jul - 26 Jul", type: "command" },
              { text: "new male: open", type: "success" },
              { text: "new female: closed", type: "error" },
              {
                text: "availability shifts daily; always check the live portal",
                type: "info",
              },
            ]}
          />
        </div>
        <p className="mt-5 text-zinc-700">
          The practical read: if you are a woman applying to Jaipur, treat the
          dates as filling faster than the headline suggests and apply the day a
          course opens. If you are a man, you have a little more slack, but not a
          lot, because the popular dates still go quickly. Either way, the live
          portal is the only source of truth; the numbers above were a single
          afternoon&rsquo;s snapshot, not a fixed state.
        </p>
      </section>

      {/* Honest application */}
      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          The application rewards honesty, not polish
        </h2>
        <p className="mt-4 text-zinc-700">
          There is no essay to win and no admissions bar to clear. The form is
          screening for whether a residential silent course is safe and workable
          for you right now, not whether you are impressive. The health and
          mental-health questions are the ones people are tempted to soften, and
          that is the mistake. A history that is noted on the form helps the
          centre support you. A condition that surfaces on day four, having gone
          undisclosed, is a far harder situation for everyone, including you.
        </p>
        <p className="mt-4 text-zinc-700">
          One thing this site will never do is tell you how to meditate. The
          technique is only ever taught in person, by an authorized teacher,
          inside the 10-day course itself. For anything operational, how to sit,
          what to do with what comes up, how to handle a hard day, the right
          place is the course and your assistant teacher, plus{" "}
          <a
            href={DHAMMA_ORG}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>
          . This page is only about getting registered.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-8">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Registered, now what holds after day ten?"
          description="If you have a Jaipur date booked and you are thinking about the practice surviving the trip home, I am happy to compare notes from six courses."
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          Questions people actually ask
        </h2>
        <div className="mt-4">
          <FaqSection items={faqs} />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-8">
        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "Vipassana in Jaipur: the three Dhamma centres, mapped",
              href: "/t/vipassana-jaipur",
              tag: "Jaipur",
              excerpt:
                "Thali, Nilaya, and Aranya, and which one is actually yours by age, course length, and where you start from.",
            },
            {
              title: "Where the Jaipur Vipassana centre really is",
              href: "/t/vipassana-centre-jaipur",
              tag: "Jaipur",
              excerpt:
                "Dhamma Thali at Galta, plus the two sister centres a single search tends to hide.",
            },
            {
              title:
                "Vipassana 10-day course registration: how applying works anywhere",
              href: "/t/vipassana-10-day-course-registration",
              tag: "Registration",
              excerpt:
                "No global signup, no central account. Apply per centre, per date, and why acceptance is not a seat.",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat six courses. Happy to compare notes on registration and what comes after."
      />
    </article>
  );
}
