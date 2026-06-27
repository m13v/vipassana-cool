import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ShineBorder,
  GradientText,
  NumberTicker,
  ProofBanner,
  Team,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-indore";
const PUBLISHED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const CENTRE_SITE = "https://malwa.dhamma.org/";
const SCHEDULE_URL = "https://www.dhamma.org/en/schedules/schmalwa";

export const metadata: Metadata = {
  title:
    "Vipassana in Indore: Dhamma Mālwā on Hatod Road, and the two addresses one search hides",
  description:
    "The Vipassana centre for Indore is Dhamma Mālwā, Opp Pitra Parvat, Hatod Road, Indore 453112. Free 10-day courses in Hindi and English, apply at malwa.dhamma.org. But 'vipassana indore' points at two different places, the residential centre out of town and the city trust office on M.G. Road. Here is which is which, plus the part no listing covers: keeping a daily sit alive in Indore afterward.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Indore: Dhamma Mālwā, and the two addresses one search hides",
    description:
      "Where the Indore Vipassana centre actually is, how the free 10-day course works, and the day-11 problem the listings never mention. Notes from a meditator, not the centre.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Indore: the address, and the part nobody mentions",
    description:
      "Dhamma Mālwā sits on Hatod Road, ~20 km out of Indore. The city office is somewhere else. The listings stop there. The hard part starts on day 11.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Indore" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Indore", url: PAGE_URL },
];

const centreFacts: { label: string; value: string }[] = [
  { label: "Official name", value: "Dhamma Mālwā (the Indore / Malwa Vipassana centre)" },
  {
    label: "Course centre address",
    value:
      "Opp Pitra Parvat, Village Jambudi Hapsi, Hatod Road, Indore, Madhya Pradesh 453112",
  },
  { label: "Tradition", value: "Goenka, in the tradition of Sayagyi U Ba Khin" },
  { label: "Languages", value: "Courses run in Hindi and English" },
  {
    label: "Courses offered",
    value:
      "10-day residential courses, plus Satipatthana, special, and short courses for old students, and Anapana sessions for children and teenagers",
  },
  { label: "Course fee", value: "None. Run entirely on voluntary donations from old students" },
  { label: "Apply / schedule", value: "malwa.dhamma.org (registration via the course schedule)" },
  { label: "Centre enquiry phone", value: "+91 98931 29888 (roughly 11 AM to 5 PM)" },
  { label: "Centre email", value: "info.malwa@vridhamma.org" },
];

const faqs: FaqItem[] = [
  {
    q: "Where is the Vipassana centre in Indore?",
    a: "The centre is Dhamma Mālwā, on Hatod Road opposite Pitra Parvat in Village Jambudi Hapsi, Indore, Madhya Pradesh 453112. It sits on the outskirts, not inside the city, which is normal for this tradition because silence holds better away from traffic. It runs free 10-day residential courses in Hindi and English. The authoritative source for the address and the live schedule is malwa.dhamma.org.",
  },
  {
    q: "Is there a Vipassana centre inside Indore city itself?",
    a: "Not a residential one. The 10-day courses happen at Dhamma Mālwā on Hatod Road, out of town. What sits inside the city is the Indore Vipassana International Foundation Trust office, listed at Labha Ganga, 582 M.G. Road, Indraprasth Tower Square, Indore 452003, phone +91 731 4273313. That office handles local enquiries and old-student coordination; the actual course is at the Hatod Road centre. Confirm both at malwa.dhamma.org.",
  },
  {
    q: "How much does a 10-day course at Dhamma Mālwā cost?",
    a: "Nothing. There is no charge for the course, the food, or the accommodation. Centres in this tradition run only on voluntary donations, and only people who have already completed a 10-day course are allowed to give, so each course is paid forward by a previous student rather than bought. This is true at Indore exactly as it is everywhere else. Current details live at malwa.dhamma.org.",
  },
  {
    q: "How do I register for a course in Indore?",
    a: "You apply online through the course schedule at malwa.dhamma.org (or the regional schedule at schedule.vridhamma.org/courses/malwa). Open the dates, pick a 10-day course, and complete the full application. Demand is high, so it can take time to hear back, and accepted students must confirm to hold the seat. All operational questions about dates, accommodation, and eligibility belong to the centre and to dhamma.org, not to this site.",
  },
  {
    q: "Are the Indore courses taught in Hindi or English?",
    a: "Both. Dhamma Mālwā runs courses in Hindi and English, and the recorded discourses are available in multiple languages. If language is a concern for you or a family member, the centre can confirm which upcoming dates are run in which language. Ask them directly through the contact on malwa.dhamma.org.",
  },
  {
    q: "Can my child or teenager sit a course in Indore?",
    a: "The centre offers short Anapana sessions for children (roughly ages 8 to 12) and teenagers (roughly 13 to 18), separate from the adult 10-day course. These are introductory and age-appropriate, not the full residential course. Dates for them are published on the centre schedule, so check malwa.dhamma.org for the next youth session rather than assuming one is always running.",
  },
  {
    q: "What happens after the 10 days, back home in Indore?",
    a: "That is the part the listings never cover and the reason this page exists. The course gives you what you need and the teachers are clear that carrying it is then yours. The centre cannot sit with you at 5 AM in your flat in Indore three weeks later. Old students can attend group sittings the centre organises, but the daily habit between those is yours to build, and for most people that is the genuinely hard part, not the ten days.",
  },
  {
    q: "Does this site teach the Vipassana technique?",
    a: "No. The technique is only ever taught in person by authorised teachers inside a 10-day course, and that is the right way to learn it. This is a peer resource site about the life around practice: logistics, what courses are like, and staying consistent afterward. For anything about how to actually meditate, go to dhamma.org and to a teacher at a course.",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana in Indore: Dhamma Mālwā on Hatod Road, and the two addresses one search hides",
    description:
      "The Indore Vipassana centre is Dhamma Mālwā at Opp Pitra Parvat, Hatod Road, Indore 453112, running free 10-day courses in Hindi and English. Which address is the centre and which is the city trust office, how registration works, and what it takes to keep a daily practice alive in Indore afterward.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
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

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-2">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Vipassana in Indore: the centre, and the{" "}
          <GradientText variant="teal">two addresses</GradientText> one search hides
        </h1>
        <div className="mt-5">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </div>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          If you searched this, you almost certainly want one thing first: where
          the centre is and whether it is real. So that is at the top, verified
          this week. Then the thing that actually trips Indore people up, two
          different addresses behind the same name, and the part I care about most
          after sitting six of these courses: what happens once you are back home
          and the bell stops ringing.
        </p>
      </header>

      {/* DIRECT ANSWER */}
      <section className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <ShineBorder
          borderRadius={18}
          borderWidth={1}
          color={["#14b8a6", "#06b6d4"]}
          className="w-full bg-teal-50"
        >
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Direct answer · verified 27 June 2026
            </p>
            <p className="mt-3 text-xl sm:text-2xl font-semibold text-zinc-900 leading-snug">
              The Vipassana centre for Indore is{" "}
              <span className="text-teal-700">Dhamma Mālwā</span>, on Hatod Road
              opposite Pitra Parvat, Village Jambudi Hapsi, Indore 453112.
            </p>
            <p className="mt-4 text-zinc-700 leading-relaxed">
              It runs free 10-day residential courses in the Goenka tradition, in
              Hindi and English. You apply online, and there is no charge for the
              course, food, or stay. The live source for dates, location, and
              registration is the centre&apos;s own schedule.
            </p>
            <a
              href={SCHEDULE_URL}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Open the Indore (Malwa) schedule
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </ShineBorder>
      </section>

      {/* THE TWO ADDRESSES (anchor fact) */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Why &ldquo;vipassana indore&rdquo; points at two different places
        </h2>
        <p className="mt-3 text-zinc-600 leading-relaxed">
          This is the one practical thing the directory listings flatten into a
          single line, and it sends people to the wrong gate. The name Dhamma
          Mālwā covers a residential course centre on the city&apos;s edge. The
          local trust that fields enquiries sits at a completely separate address
          inside Indore. They are not the same building, and you use them in
          different ways.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
              Where the course happens
            </p>
            <p className="mt-2 font-semibold text-zinc-900">Dhamma Mālwā centre</p>
            <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
              Opp Pitra Parvat, Village Jambudi Hapsi, Hatod Road, Indore 453112.
              On the outskirts, roughly out past Pitra Parvat hill. This is where
              you physically go for the 10-day residential course, where you stay,
              and where the hall is. You do not drop in; you arrive on a confirmed
              course date.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Where the city office is
            </p>
            <p className="mt-2 font-semibold text-zinc-900">
              Indore Vipassana International Foundation Trust
            </p>
            <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
              Labha Ganga, 582 M.G. Road, Indraprasth Tower Square, Indore 452003,
              phone +91 731 4273313. This is the in-city contact point for local
              enquiries and old-student coordination, not where the course runs.
              Handy if you are an Indore resident asking questions in person.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
          Bottom line: apply and travel to Hatod Road for the actual course; use
          the M.G. Road office only as a local contact. If a detail here has
          shifted, the centre&apos;s own pages at{" "}
          <a
            href={CENTRE_SITE}
            className="text-teal-600 underline underline-offset-2"
          >
            malwa.dhamma.org
          </a>{" "}
          are the source of truth.
        </p>
      </section>

      {/* REFERENCE TABLE */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Dhamma Mālwā at a glance
        </h2>
        <p className="mt-3 text-zinc-600 leading-relaxed">
          The facts worth knowing before you apply, pulled from the centre and
          regional schedule pages on 27 June 2026. The centre site is always the
          live source if anything has changed.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <tbody>
              {centreFacts.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <th
                    scope="row"
                    className="align-top px-4 py-3 font-medium text-zinc-500 w-2/5 border-b border-zinc-100"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-zinc-800 border-b border-zinc-100">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
          One detail in that table matters more than it looks: the courses run in
          Hindi and English, and there are short Anapana sessions for children and
          teenagers separate from the adult course. If you came here looking for a
          family option, that youth session, not the 10-day, is usually what you
          want to ask about.
        </p>
      </section>

      {/* PROOF / ARGUMENT BRIDGE */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The thing no Indore listing tells you
        </h2>
        <div className="mt-4 space-y-5 text-zinc-700 leading-relaxed">
          <p>
            Every page about this centre, official ones included, ends at the same
            spot: here is the address, here is how to apply, here is the schedule.
            All true, all useful, and all of it stops at the front gate. None of
            them say a word about day 11.
          </p>
          <p>
            Day 11 is the morning after. You leave the Hatod Road centre and drive
            back into a city of two million people. The bell that woke you at 4 AM
            for ten days is gone. The hall full of people sitting in silence is
            gone. It is just you, your alarm, and a quiet room you now have to
            choose to sit in, with the whole of Indore getting loud outside the
            window. The centre cannot follow you home. That is not a flaw in the
            centre; it is just where its job ends and yours begins.
          </p>
          <p>
            I am not a teacher and I would not tell anyone how to practise. But I
            can tell you plainly what the numbers looked like for me: six courses
            across three centres, and a daily sit I have kept going past a
            thousand mornings. The honest version is that the ten days inside the
            centre were never the hard part. The hard part was every ordinary
            morning after, the ones with no bell, no group, and no one watching.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
            <p className="text-3xl font-bold text-teal-600">
              <NumberTicker value={6} />
            </p>
            <p className="mt-1 text-sm text-zinc-500">courses, 3 centres</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
            <p className="text-3xl font-bold text-teal-600">
              <NumberTicker value={1000} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-zinc-500">days of daily practice</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
            <p className="text-3xl font-bold text-teal-600">
              <NumberTicker value={40} suffix="+" />
            </p>
            <p className="mt-1 text-sm text-zinc-500">days of dhamma service</p>
          </div>
        </div>

        <div className="mt-8">
          <ProofBanner
            quote="881 days in and I still struggle with evening sits. mornings are non-negotiable though, 45 min before anything else."
            source="Matthew, six courses across three centres"
            metric="45 min"
          />
        </div>

        <div className="mt-8 space-y-5 text-zinc-700 leading-relaxed">
          <p>
            What actually held it together for me was almost embarrassingly
            simple: another person. Knowing one other human was sitting at the same
            time, and that I would have to admit it if I skipped. Not a teacher,
            not an app reminder. A peer. That is the entire reason this site
            exists, and it is the one thing a centre, by design, was never built to
            give you.
          </p>
          <p>
            So if you are looking up the Indore centre because you are about to sit
            your first course, do the obvious thing first: apply at{" "}
            <a
              href={SCHEDULE_URL}
              className="text-teal-600 underline underline-offset-2"
            >
              the Malwa schedule
            </a>
            . Then, before you even go, think about who is going to sit with you
            when you get back. That variable decides whether the ten days were a
            nice retreat or an actual turning point.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-4">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Sat a course near Indore and the daily sit is slipping?"
          description="Book a short call and I will pair you with another old student for daily accountability. Peer to peer, not teacher to student."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-2">
        <Team
          title="Who wrote this"
          members={[
            {
              name: "Matthew Diakonov",
              role: "Six courses, three centres, 40+ days of dhamma service",
              initials: "MD",
              bio: "I am a fellow old student, not a teacher. I built vipassana.cool to help meditators keep a daily practice alive after the 10 days, including pairing people with a practice buddy for accountability.",
              href: "https://m13v.com",
            },
          ]}
        />
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="For the day-11 problem"
          posts={[
            {
              title: "Daily practice after a Vipassana course",
              href: "/t/daily-practice-after-vipassana-course",
              excerpt:
                "What changes when the bell and the hall are gone, and what tends to hold a sit together back home.",
              tag: "Daily practice",
            },
            {
              title: "Finding a daily-sit accountability partner",
              href: "/t/vipassana-daily-sit-accountability-partner",
              excerpt:
                "Why one other person sitting at the same time does more than any reminder app.",
              tag: "Accountability",
            },
            {
              title: "The Vipassana centre in Patna",
              href: "/t/vipassana-centre-patna",
              excerpt:
                "A sister write-up for another Indian centre: where it is, how courses work, and the same day-11 problem.",
              tag: "Centres",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Pair up with another old student for a daily sit."
      />
    </article>
  );
}
