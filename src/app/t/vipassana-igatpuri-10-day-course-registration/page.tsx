import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  SequenceDiagram,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-igatpuri-10-day-course-registration";
const PUBLISHED = "2026-06-16";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const GIRI_PORTAL = "https://schedule.vridhamma.org/courses/giri";

export const metadata: Metadata = {
  title:
    "Vipassana Igatpuri 10-Day Course Registration: which portal, step by step",
  description:
    "Register for the 10-day Vipassana course at Igatpuri online only, at schedule.vridhamma.org/courses/giri. Igatpuri is actually three centres on one hill (Dhamma Giri plus Dhamma Tapovana-1 and -2), each with its own application portal. New students apply at the Dhamma Giri portal; the long-course Tapovana centres take separate applications. No admission without an emailed confirmation number. Verified 2026-06-16.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Igatpuri 10-day Vipassana registration: the Dhamma Giri portal, and the two you do not use",
    description:
      "Apply online at schedule.vridhamma.org/courses/giri. Igatpuri runs three centres with three portals; new students register only at Dhamma Giri. The full application walk plus the part the listicles skip.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Igatpuri 10-day course registration, explained",
    description:
      "Online-only registration at the Dhamma Giri portal. Why Igatpuri has three application portals and which one a new student actually uses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Igatpuri 10-day registration" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Igatpuri 10-day registration", url: PAGE_URL },
];

const registrationSteps = [
  {
    title: "Read the Code of Discipline first",
    description:
      "The application asks you to confirm you have read it. It is the set of rules you commit to for the full residential period, including staying for all ten days. Read it before you apply, not after you are accepted.",
  },
  {
    title: "Open the Dhamma Giri portal",
    description:
      "Go to schedule.vridhamma.org/courses/giri. This is the only portal where a new student's 10-day course appears at Igatpuri. The two Dhamma Tapovana portals are for old-student long courses and will not show a new-student 10-day option.",
  },
  {
    title: "Pick a dated 10-day course",
    description:
      "Each course is a fixed date range with separate New Male and New Female categories and a status (open, waitlist, or full). You are applying to one specific dated course, not a generic queue.",
  },
  {
    title: "Submit the online application",
    description:
      "Only online applications are accepted. The form covers age, health, mental health history, and whether you have sat a course before. Be honest on the health questions; a history rarely disqualifies you and helps the registrar place you correctly.",
  },
  {
    title: "Wait for the registrar's decision",
    description:
      "A person reviews each application by hand, so a reply can take days to a few weeks depending on how close the course is. You are notified by email whether you are accepted, waitlisted, or not accepted this time.",
  },
  {
    title: "Keep your confirmation number",
    description:
      "Acceptance comes with a confirmation number. This is the load-bearing piece. The academy is explicit that only confirmed students and servers may enter the premises, so a confirmation is not optional paperwork.",
  },
  {
    title: "Arrive on day zero and present the number at the gate",
    description:
      "Registration happens on-site on the afternoon the course starts. You present your confirmation number, hand in your phone, and the course runs through to the morning of the eleventh day, ending by about 7:00 am.",
  },
];

const centreRows: {
  centre: string;
  portal: string;
  href: string;
  runs: string;
  who: string;
}[] = [
  {
    centre: "Dhamma Giri",
    portal: "/courses/giri",
    href: GIRI_PORTAL,
    runs: "10-day courses, short courses (1 to 3 day), Satipatthana Sutta, teen courses",
    who: "New students apply here for the 10-day course. Old students too.",
  },
  {
    centre: "Dhamma Tapovana-1",
    portal: "/courses/tapovana",
    href: "https://schedule.vridhamma.org/courses/tapovana",
    runs: "Long courses: 20-day, 30-day, 45-day, Satipatthana",
    who: "Old students with the required precept history only. Not a 10-day registration path.",
  },
  {
    centre: "Dhamma Tapovana-2",
    portal: "/courses/tapovana2",
    href: "https://schedule.vridhamma.org/courses/tapovana2",
    runs: "Long courses (second long-course centre, opened August 2016)",
    who: "Old students on long courses only. Not a 10-day registration path.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly do I register for the 10-day course at Igatpuri?",
    a: "Online only, at the Dhamma Giri portal: schedule.vridhamma.org/courses/giri. The academy states that only online applications are accepted and only confirmed students or servers may enter the premises. You apply to a specific dated course, a registrar reviews it by hand, and you receive a confirmation number by email that you must present when you arrive.",
  },
  {
    q: "Why are there three different Igatpuri portals and which one do I use?",
    a: "Igatpuri is the Vipassana International Academy, which is three centres on one hill: Dhamma Giri and two long-course centres, Dhamma Tapovana-1 and Dhamma Tapovana-2. Each has its own scheduling portal. A new student's 10-day course only appears on the Dhamma Giri portal (/courses/giri). The two Tapovana portals list long courses (20-day, 30-day and up) for experienced old students, so applying there for a first 10-day course is the most common wrong turn.",
  },
  {
    q: "How much does registration cost at Igatpuri?",
    a: "Nothing. There is no charge for the teaching, the room, or the food. Every course worldwide runs on a strictly voluntary donation basis, and donations are accepted only from people who have already completed at least one 10-day course. So a new student pays zero to register and zero to attend.",
  },
  {
    q: "What does the application form ask?",
    a: "It covers your age, general health, mental health history, and whether you have sat a Vipassana course before, plus a confirmation that you have read the Code of Discipline and can stay for the full ten days. The form takes around fifteen minutes. The mental health questions exist so the registrar can place you well, not to screen you out, so answering them honestly is in your interest.",
  },
  {
    q: "What if the course I want is full or I get waitlisted?",
    a: "Waitlists are normal at Igatpuri because it is one of the busiest centres in the network and the courses are free. Cancellations happen regularly, sometimes days before the start, so a waitlist is far from a dead end. Apply to one course at a time rather than spamming several. For dates and the live status of each course, the Dhamma Giri portal is the authoritative source.",
  },
  {
    q: "Do I need the confirmation number to get in?",
    a: "Yes. The academy is explicit that only confirmed students and servers are permitted to enter the centre premises, and the standard 10-day process requires you to produce your confirmation number at on-site registration. There is no walk-in or drop-in option. Keep the email; that number is your entry.",
  },
  {
    q: "Who can I contact about an Igatpuri application?",
    a: "For course application enquiries the centre lists the phone number 022-50505051, general enquiries go to info.giri@vridhamma.org, and there is a WhatsApp line at +91 8956297219 / 20 staffed 9:30 am to 5:30 pm IST, Monday to Saturday. For anything about how the practice itself works, that is not an application question and belongs with an authorised teacher at the course and at dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "Igatpuri Vipassana (Dhamma Giri): the source node, not just a centre",
    href: "/t/igatpuri-vipassana",
    excerpt:
      "What Dhamma Giri actually is, why it is the worldwide headquarters, and the Pali canon the research institute there gave away for free.",
    tag: "Context",
  },
  {
    title: "Vipassana application tips: how to get accepted and beat the waitlist",
    href: "/guide/course-application-tips",
    excerpt:
      "When courses open, what to write, and how I got off waitlists across six applications.",
    tag: "Guide",
  },
  {
    title: "The 10-day course structure, hour by hour",
    href: "/t/10-day-course-structure",
    excerpt:
      "What the ten days actually look like once you are confirmed and inside the gate.",
    tag: "Inside the course",
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
                "Vipassana Igatpuri 10-day course registration: which portal, step by step",
              description:
                "How to register for the 10-day Vipassana course at Igatpuri (Dhamma Giri). Online-only application at schedule.vridhamma.org/courses/giri, the three Igatpuri portals explained, and what the confirmation number means.",
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
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-6">
        <p className="text-sm font-medium text-teal-700 uppercase tracking-wide">
          Registration, logistics only
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Vipassana Igatpuri 10-day course registration
        </h1>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Igatpuri is the busiest Vipassana centre in the world, and the first
          thing that trips people up is not the application form. It is the
          portal. Igatpuri is not one centre; it is three on one hill, each with
          its own registration page. A new student's 10-day course lives on only
          one of them.
        </p>
      </header>

      {/* Direct answer callout */}
      <section className="max-w-4xl mx-auto px-6 mt-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
            <span>Direct answer</span>
            <span className="text-teal-400">/</span>
            <span>Verified 2026-06-16</span>
          </div>
          <p className="mt-3 text-zinc-800 text-lg leading-relaxed">
            Register <strong>online only</strong>, at the Dhamma Giri portal:{" "}
            <a
              href={GIRI_PORTAL}
              className="text-teal-700 underline font-medium break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/giri
            </a>
            . You apply to one dated 10-day course, a registrar reviews your
            application by hand, and you receive a{" "}
            <strong>confirmation number by email</strong> that you must present
            at the gate. There is no walk-in option, and only confirmed students
            are allowed onto the premises.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Authoritative source:{" "}
            <a
              href={GIRI_PORTAL}
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Dhamma Giri schedule
            </a>{" "}
            and the global course finder at{" "}
            <a
              href="https://www.dhamma.org/en/courses/search"
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      {/* The three portals */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The one thing the other guides skip: Igatpuri is three portals
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Search this topic and almost every result hands you the generic
          dhamma.org steps: pick a course, apply, wait. True, but it misses the
          part specific to Igatpuri. The Vipassana International Academy on the
          hill is three separate centres, and the scheduling system gives each
          one its own portal. If you land on the wrong one, you will not see a
          new-student 10-day course at all and may conclude there is nothing
          available. There is; you are just on a long-course page.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-zinc-50 text-zinc-500 uppercase tracking-wide text-xs">
                <th className="px-4 py-3 font-medium">Centre</th>
                <th className="px-4 py-3 font-medium">Portal</th>
                <th className="px-4 py-3 font-medium">What it runs</th>
                <th className="px-4 py-3 font-medium">Who registers there</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {centreRows.map((row) => (
                <tr key={row.centre} className="align-top">
                  <td className="px-4 py-4 font-semibold text-zinc-900 whitespace-nowrap">
                    {row.centre}
                  </td>
                  <td className="px-4 py-4">
                    <a
                      href={row.href}
                      className="text-teal-700 underline whitespace-nowrap"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.portal}
                    </a>
                  </td>
                  <td className="px-4 py-4 text-zinc-700">{row.runs}</td>
                  <td className="px-4 py-4 text-zinc-700">{row.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Centre breakdown and portals verified against the Dhamma Giri academy
          site and the scheduling system on 2026-06-16. If you are a first-time
          student, the only row that matters is the first one.
        </p>
      </section>

      <ProofBanner
        metric="3 centres, 1 hill"
        quote="Only online applications will be accepted and only confirmed students or servers are permitted to enter the centre premises."
        source="Dhamma Giri scheduling portal, schedule.vridhamma.org/courses/giri, verified 2026-06-16."
      />

      {/* Step walkthrough */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The registration walk, start to gate
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Once you are on the right portal the process is the same as any centre
          in the network, with one Igatpuri-specific reality: demand is high, so
          confirmations and waitlists move more than at a quieter centre. Here is
          the whole path.
        </p>
        <StepTimeline steps={registrationSteps} />
      </section>

      {/* How the confirmation flows */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          How the confirmation actually moves
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Acceptance is not instant and it is not automated. A human registrar
          reads each application, which is why timing matters and why the
          confirmation number is the thing that gets you through the gate. The
          flow looks like this.
        </p>
        <SequenceDiagram
          title="From application to the gate"
          actors={["You", "Dhamma Giri registrar", "The gate"]}
          messages={[
            { from: 0, to: 1, label: "Online application for a dated course" },
            { from: 1, to: 1, label: "Manual review of your application" },
            { from: 1, to: 0, label: "Decision + confirmation number by email" },
            { from: 0, to: 2, label: "Present confirmation number on arrival" },
          ]}
        />
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The practical takeaway: apply early for popular dates, watch your email
          (including spam), and do not book non-refundable travel until your
          confirmation number is in hand. The academy lists 022-50505051 for
          course application enquiries and a WhatsApp line at +91 8956297219 / 20
          (9:30 am to 5:30 pm IST, Monday to Saturday) if your status is unclear.
        </p>
      </section>

      {/* Honest framing */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What this page is not
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I have sat six 10-day courses, all at centres in California, and I have
          never registered at Igatpuri myself. So everything above is logistics I
          verified against the academy's own pages, not a claim of insider
          access. I am a fellow practitioner, not a teacher. For anything about
          how the practice works, how to sit, or how to handle a difficulty
          during a course, that is not a registration question, and the right
          sources are an authorised assistant teacher at the course and{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>
          . If you want to read the rules you commit to before you apply, the{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            className="text-teal-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code of Discipline
          </a>{" "}
          is the canonical document.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sorted your Igatpuri spot? The hard part is day 946, not day 1"
          description="If you want a practice buddy to keep a daily sit going after the course, that is the thing I actually built this site for. Grab a slot."
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-2">
          Igatpuri registration questions
        </h2>
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16 mb-20">
        <RelatedPostsGrid
          subtitle="Related"
          title="Before and after you apply"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Confirmed for a course? Get paired with a practice buddy for after."
      />
    </article>
  );
}
