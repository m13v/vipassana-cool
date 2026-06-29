import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ShineBorder,
  StepTimeline,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-chennai";
const PUBLISHED = "2026-06-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const CENTER_SITE = "https://setu.dhamma.org/";
const SCHEDULE_URL = "https://schedule.vridhamma.org/courses/setu";

export const metadata: Metadata = {
  title: "Vipassana Chennai: it's Dhamma Setu, out at Thirumudivakkam",
  description:
    "Search 'vipassana chennai' and you want Dhamma Setu. It is not in the city; it sits on Chennai's southwestern fringe at Thirumudivakkam, via Thiruneermalai, about 10 km from the airport amid paddy fields. Verified location, the online-only registration path, the courses it runs, the new Dhamma Kanchi centre being built, and honest notes on what happens after, from a meditator with six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Chennai = Dhamma Setu (and it's not in the city)",
    description:
      "The centre behind 'vipassana chennai' is Dhamma Setu at Thirumudivakkam, on the rural outskirts ~10 km from the airport. Verified location, online-only registration, donation-funded, plus after-course notes.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Chennai = Dhamma Setu",
    description:
      "Dhamma Setu, Thirumudivakkam (via Thiruneermalai), ~10 km from Chennai airport. Courses free, online application only.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Chennai" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Chennai", url: PAGE_URL },
];

const facts: { label: string; value: string }[] = [
  { label: "Centre name", value: "Dhamma Setu ('Bridge of Dhamma'), established 2000" },
  { label: "Serves", value: "Chennai and the wider northern Tamil Nadu belt" },
  {
    label: "Where it actually is",
    value:
      "533 Pazhan Thandalam Road, Thiruneermalai Via, Thirumudivakkam, on Chennai's southwestern fringe near Kundrathur",
  },
  { label: "Distance from Chennai airport", value: "About 10 km, out among paddy fields and open farmland" },
  { label: "Tradition", value: "Taught by S. N. Goenka in the tradition of Sayagyi U Ba Khin" },
  { label: "Course fee", value: "None. Run entirely on past students' donations" },
  { label: "Entry rule", value: "Online application only; only confirmed students and servers enter" },
  { label: "Official schedule", value: "schedule.vridhamma.org/courses/setu" },
  { label: "Second TN centre", value: "Dhamma Kanchi, being established in Kanchipuram district for short courses" },
];

const registerSteps = [
  {
    title: "Open the official schedule, not a directory",
    description:
      "schedule.vridhamma.org/courses/setu lists every confirmed date for Dhamma Setu. Skip the JustDial and aggregator listings; their dates and 'call to book' numbers are office enquiry lines, not a reservation system, and they go stale.",
  },
  {
    title: "Apply online for a date as a new student",
    description:
      "Each course on the schedule has its own application form. New students apply for a 10-day course. There is no walk-in enrolment and no instant phone booking.",
  },
  {
    title: "Wait for the centre to confirm",
    description:
      "Courses fill, so a submitted form is an application, not a seat. Only confirmed students and servers are allowed onto the premises. Plan your travel out to Thirumudivakkam after you have a confirmation in hand.",
  },
];

const relatedPosts = [
  {
    title: "What the 10-day course structure actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "12 days on site, a fixed daily clock, group sittings, and noble silence. Read this before you apply at Dhamma Setu.",
    tag: "Before you go",
  },
  {
    title: "Rebuilding daily practice after a Vipassana course",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course ends and the hard part starts: keeping a sit going back home in Chennai once the schedule is gone.",
    tag: "After the course",
  },
  {
    title: "Finding a daily-sit accountability partner",
    href: "/t/vipassana-daily-sit-accountability-partner",
    excerpt:
      "Most people who fall off do it alone. Pairing with another practitioner is the cheapest fix I have found across six courses.",
    tag: "Staying consistent",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where is the Vipassana centre in Chennai?",
    a: "The centre people mean by 'vipassana chennai' is Dhamma Setu. It is not inside the city proper. It sits on the southwestern outskirts at 533 Pazhan Thandalam Road, Thiruneermalai Via, Thirumudivakkam, out among paddy fields near Kundrathur, about 10 km from Chennai airport. It opened in 2000 and is the established centre in the tradition taught by S. N. Goenka for the Chennai area.",
  },
  {
    q: "How do I register for a Vipassana course in Chennai?",
    a: "Only through the official schedule at schedule.vridhamma.org/courses/setu. Pick a date, open its application form, apply as a new student for a 10-day course, and wait for Dhamma Setu to confirm. The phone numbers you see on directory sites are office enquiry lines, not a booking system. There is no walk-in enrolment and no instant phone reservation, whatever a listing implies.",
  },
  {
    q: "How much does a course at Dhamma Setu cost?",
    a: "Nothing. There is no charge for the course, the food, or the lodging. The centre runs entirely on voluntary donations from students who have finished a course before and want to give others the same chance. As a first-time student you are not asked or expected to pay or donate.",
  },
  {
    q: "Is Dhamma Setu actually in Chennai city?",
    a: "Not in the city core. Listings file it under 'Chennai' because that is the nearest major city and airport, but the centre is out at Thirumudivakkam on the southwestern fringe, reached via Thiruneermalai, surrounded by farmland near Kundrathur. If you picture a meditation hall somewhere in central Chennai you will set off in the wrong direction. Treat the airport (about 10 km away) as your reference point and follow the centre's own travel directions once your course is confirmed.",
  },
  {
    q: "Is there more than one Vipassana centre near Chennai?",
    a: "Dhamma Setu is the established one. Separately, a new Dhamma House called Dhamma Kanchi is being established in the Kanchipuram district of Tamil Nadu, with short 2-day and 3-day courses planned there. For a first-time 10-day course in the Chennai area, Dhamma Setu is the place; check the official schedule for what is actually running and when.",
  },
  {
    q: "What courses does Dhamma Setu run?",
    a: "The main offering is the 10-day residential course, which is where every new student starts. The schedule also lists 1-day and 3-day courses and Satipatthana Sutta courses for old students, Anapana courses for children (roughly ages 8 to 18), 7-day courses for teenagers, and longer 20, 30, 45 and 60-day courses for qualified old students. The live list of which course runs when is on the official schedule page.",
  },
  {
    q: "Can this site teach me the technique before I go?",
    a: "No, and I would not want it to. In this tradition the actual technique is only transmitted inside a 10-day residential course by an authorized teacher. I have sat six courses and I am a fellow student, not a teacher. For anything about how to practise, the right sources are dhamma.org and the assistant teachers at the course itself.",
  },
  {
    q: "What happens after the 10 days?",
    a: "You head back into Chennai, the silence and the schedule vanish, and keeping a daily sit becomes the real work. That gap is most of what this site is about: notes on rebuilding a daily practice and a free program that pairs you with another practitioner for accountability.",
  },
];

const jsonLd = [
  articleSchema({
    headline: "Vipassana Chennai: it is Dhamma Setu, out at Thirumudivakkam",
    description:
      "The Vipassana centre serving Chennai is Dhamma Setu at Thirumudivakkam, on the city's southwestern outskirts about 10 km from the airport. Verified location, the courses it runs, online-only registration, the new Dhamma Kanchi centre, and after-course notes.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  }),
  breadcrumbListSchema(breadcrumbSchemaItems),
  faqPageSchema(faqs),
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-8">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-8 pb-6">
        <p className="text-sm font-medium text-teal-600 mb-3">
          Vipassana logistics · Chennai, Tamil Nadu
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
          The Vipassana centre for Chennai is{" "}
          <span className="text-teal-600">Dhamma Setu</span>
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Here is the part the directory listings bury: it is not in the city.
          Dhamma Setu sits out on Chennai&rsquo;s southwestern fringe at
          Thirumudivakkam, amid paddy fields, about 10 km from the airport. This
          page is the verified answer plus the honest details those listings
          leave out.
        </p>
        <div className="mt-6">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </div>
      </header>

      {/* Direct answer */}
      <section className="max-w-4xl mx-auto px-6">
        <ShineBorder color="#14b8a6" borderRadius={16} className="w-full">
          <div className="rounded-2xl bg-teal-50/80 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-3">
              Direct answer · verified 2026-06-28
            </p>
            <p className="text-xl text-zinc-900 leading-relaxed font-medium">
              The Vipassana centre that serves Chennai is{" "}
              <strong>Dhamma Setu</strong>, at{" "}
              <strong>533 Pazhan Thandalam Road, Thiruneermalai Via,
              Thirumudivakkam</strong>, on the city&rsquo;s southwestern
              outskirts near Kundrathur, roughly <strong>10 km from Chennai
              airport</strong>. Courses are <strong>free</strong> and you{" "}
              <strong>apply online only</strong>.
            </p>
            <p className="mt-4 text-zinc-700">
              Sources I checked:{" "}
              <a
                href={CENTER_SITE}
                className="text-teal-600 underline underline-offset-2"
                rel="noopener noreferrer"
              >
                setu.dhamma.org
              </a>{" "}
              (the centre&rsquo;s own site) and{" "}
              <a
                href={SCHEDULE_URL}
                className="text-teal-600 underline underline-offset-2"
                rel="noopener noreferrer"
              >
                schedule.vridhamma.org/courses/setu
              </a>
              , which is also the only place to register.
            </p>
          </div>
        </ShineBorder>
      </section>

      {/* Facts table */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          Dhamma Setu at a glance
        </h2>
        <p className="text-zinc-600 mb-6">
          The centre&rsquo;s name means &ldquo;Bridge of Dhamma.&rdquo; Here is
          what is worth knowing before you commit ten days to it.
        </p>
        <div className="overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <tbody>
              {facts.map((f, i) => (
                <tr
                  key={f.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <th className="align-top w-1/3 px-5 py-4 font-semibold text-zinc-900">
                    {f.label}
                  </th>
                  <td className="px-5 py-4 text-zinc-700">{f.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Location, courses, and fee model confirmed against the official Dhamma
          Setu and VRI schedule pages, June 2026.
        </p>
      </section>

      {/* The anchor: why the listings mislead */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Why the &ldquo;Chennai&rdquo; label sends people the wrong way
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Almost every listing files this centre under &ldquo;Chennai,&rdquo;
            because Chennai is the nearest big-name city and airport. That is
            fair shorthand, but it sets the wrong expectation if you picture a
            hall somewhere in the metro. The centre is at{" "}
            <strong>Thirumudivakkam, reached via Thiruneermalai</strong>, out on
            the southwestern fringe near Kundrathur, surrounded by paddy fields
            and farmland. From the airport that is roughly a 10 km trip.
          </p>
          <p>
            Here is a small tell that shows why you should not trust the
            aggregators: they cannot even agree on the postcode. Some directory
            pages stamp it <strong>600 044</strong>, the official course
            schedule shows <strong>600 132</strong>. When third-party listings
            disagree on something as basic as a PIN code, that is your cue to
            ignore all of them and use the centre&rsquo;s own pages for the
            address and the date you travel to.
          </p>
          <p>
            The other thing the listings get wrong: several show a phone number
            and present it as if you can ring up and reserve a place. You cannot.
            Those are office enquiry lines. The path is{" "}
            <strong>
              an online application, then a confirmation, then you travel
            </strong>
            , and only confirmed students and servers are permitted onto the
            premises. I have sat six courses across three centers and the
            registration path is the same everywhere: the official schedule,
            then a confirmation. Treat any &ldquo;book instantly&rdquo; or paid
            listing as not being this tradition.
          </p>
        </div>
      </section>

      {/* Two centres serving the region */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          Two centres in the picture, only one for your first course
        </h2>
        <p className="text-zinc-600 mb-6">
          If you have been reading around and seen a second name come up, here
          is how the two fit together.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              Established · start here
            </p>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Dhamma Setu</h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              The Chennai-area centre since 2000, at Thirumudivakkam. Runs the
              full 10-day course for new students plus shorter and longer courses
              for old students. This is where a first-timer searching &ldquo;
              vipassana chennai&rdquo; should apply.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Being established · short courses
            </p>
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Dhamma Kanchi</h3>
            <p className="text-sm text-zinc-700 leading-relaxed">
              A newer Dhamma House taking shape in the Kanchipuram district of
              Tamil Nadu, with 2-day and 3-day courses planned. Useful to know
              about for later, but not the entry point for a first 10-day course.
            </p>
          </div>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Dhamma Kanchi is described as under development on VRI&rsquo;s
          materials; always confirm what is actually running on the official
          schedule before planning around it.
        </p>
      </section>

      {/* Registration */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <StepTimeline
          title="Getting a seat at Dhamma Setu, in three steps"
          steps={registerSteps}
        />
      </section>

      {/* The part nobody plans for */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The part that actually decides whether it sticks
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Getting out to Thirumudivakkam is the easy bit. The hard bit starts
            on the morning of the 11th day, when you head back into Chennai and
            the structure that carried you, the bells, the silence, the people
            sitting beside you, is simply gone. Almost everyone underestimates
            this. I did.
          </p>
          <p>
            I am not going to prescribe a routine, because that is not mine to
            hand out. What I will say plainly, as a peer, is that the meditators
            who keep a daily practice going months later are rarely the ones with
            the most willpower. They are the ones who did not try to do it alone.
            That is the single pattern I have watched repeat across my own
            courses and the people I sat next to.
          </p>
          <p>
            That is the whole reason this site exists. It is a resource for after
            the course: notes on rebuilding a daily sit, and a free program that
            pairs you with another practitioner for daily accountability. If you
            are about to sit at Dhamma Setu, the most useful thing you can do
            today is line up who you will check in with once you are back in the
            city.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="text-zinc-800">
            Looking for someone to sit with after Chennai?{" "}
            <Link
              href="/practice-buddy"
              className="text-teal-600 font-medium underline underline-offset-2"
            >
              The practice-buddy program
            </Link>{" "}
            pairs meditators for daily check-ins. It is free, and it is the most
            reliable thing I have found for keeping a sit alive after a course.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Sitting at Dhamma Setu and worried about after?"
          description="Book a short call and I'll share what worked for keeping a daily practice going once you're back in Chennai, peer to peer, no teaching."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <FaqSection items={faqs} heading="Vipassana Chennai: common questions" />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16 mb-20">
        <RelatedPostsGrid
          title="Read before and after the course"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Headed to Dhamma Setu? Get peer notes on making it stick."
      />
    </article>
  );
}
