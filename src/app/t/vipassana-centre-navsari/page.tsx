import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedChecklist,
  HorizontalStepper,
  ShimmerButton,
  BackgroundGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-centre-navsari";
const PUBLISHED = "2026-06-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const SCHEDULE_URL = "https://schedule.vridhamma.org/courses/ambika";
const CENTER_SITE = "https://ambika.vridhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana Centre Navsari: it's Dhamma Ambika, ~14 km out at Vagalwad",
  description:
    "Search 'vipassana centre navsari' and you want Dhamma Ambika. It is not in Navsari town: it sits about 14 km out at Village Vagalwad, Tal Gandevi, on NH-8, two km west of Boriyach toll naka, the same distance from Navsari and Bilimora stations. Verified address, the courses it runs, the online-only registration path, and honest notes on what happens after, from a meditator with six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Centre Navsari = Dhamma Ambika (and it's not in town)",
    description:
      "The centre behind 'vipassana centre navsari' is Dhamma Ambika at Village Vagalwad, Tal Gandevi, ~14 km from Navsari on NH-8. Verified location, online-only registration, and after-course notes.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Centre Navsari = Dhamma Ambika",
    description:
      "Dhamma Ambika, Village Vagalwad, Tal Gandevi, ~14 km from Navsari on NH-8. Courses free, online application only.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Centre Navsari" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Centre Navsari", url: PAGE_URL },
];

const facts: { label: string; value: string }[] = [
  { label: "Centre name", value: "Dhamma Ambika ('Dhamma of the Ambika river region')" },
  { label: "Serves", value: "Navsari, Bilimora, Surat, Valsad and the wider South Gujarat belt" },
  {
    label: "Address",
    value:
      "Village Vagalwad, Tal Gandevi, Dist Navsari, South Gujarat, on NH-8, 2 km west of Boriyach toll naka",
  },
  { label: "Distance from Navsari", value: "About 14 km (same from Bilimora station)" },
  { label: "Nearest railway stations", value: "Navsari and Bilimora, both ~14 km" },
  { label: "Tradition", value: "Taught by S. N. Goenka in the tradition of Sayagyi U Ba Khin" },
  { label: "Course fee", value: "None. Run entirely on past students' donations" },
  { label: "Entry rule", value: "Online application only; only confirmed students and servers enter" },
  { label: "Official schedule", value: "schedule.vridhamma.org/courses/ambika" },
];

const courseItems = [
  { text: "10-day course (this is the entry point for every new student)" },
  { text: "Anapana course for children, ages 8 to 18" },
  { text: "7-day Vipassana course for teenagers" },
  { text: "Satipatthana Sutta course (old students only)" },
  { text: "Short refresher and 3-day courses (old students only)" },
  { text: "Long courses: 20, 30 and 45 days (qualified old students only)" },
];

const registerSteps = [
  {
    title: "Open the official schedule",
    description:
      "schedule.vridhamma.org/courses/ambika lists every confirmed date for Dhamma Ambika. Skip the aggregator listings; their dates and 'book now' phone numbers go stale.",
  },
  {
    title: "Apply online for a date",
    description:
      "New students apply for a 10-day course. The centre states plainly that only online applications are accepted, no walk-ins.",
  },
  {
    title: "Wait for confirmation",
    description:
      "Courses fill, so a submitted form is an application, not a seat. Only confirmed students and servers are allowed onto the premises.",
  },
];

const relatedPosts = [
  {
    title: "What the 10-day course structure actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "12 days on site, a fixed daily clock, group sittings, and noble silence. Read this before you apply at Dhamma Ambika.",
    tag: "Before you go",
  },
  {
    title: "Rebuilding daily practice after a Vipassana course",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course ends and the hard part starts: keeping a sit going back home in Navsari or Surat once the schedule is gone.",
    tag: "After the course",
  },
  {
    title: "Finding a daily-sit accountability partner",
    href: "/t/vipassana-daily-sit-accountability-partner",
    excerpt:
      "Most people who fall off do it alone. Pairing up with another practitioner is the cheapest fix I have found across six courses.",
    tag: "Staying consistent",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana centre inside Navsari city?",
    a: "Not in the city itself. The centre that serves Navsari is Dhamma Ambika, and it sits out in Village Vagalwad, Tal Gandevi, about 14 km from Navsari on NH-8, roughly 2 km west of the Boriyach toll naka. It is the closest dedicated centre in the tradition taught by S. N. Goenka, and it is almost certainly the place people mean when they search 'vipassana centre navsari'.",
  },
  {
    q: "How do I actually get to Dhamma Ambika?",
    a: "It is about 14 km from both Navsari and Bilimora railway stations, which are the two usual arrival points. From either station it is a short road trip out to Vagalwad on NH-8 (the old Mumbai to Ahmedabad highway). The centre publishes detailed directions on its own site at ambika.vridhamma.org; confirm them once your course is confirmed.",
  },
  {
    q: "How much does a course at Dhamma Ambika cost?",
    a: "Nothing. There is no charge for the course, the food, or the lodging. The centre runs entirely on voluntary donations from students who have finished a course before and want to give others the same chance. As a first-time student you are not asked or expected to pay or donate.",
  },
  {
    q: "How do I register for a course at Navsari's centre?",
    a: "Only through the official schedule at schedule.vridhamma.org/courses/ambika. Pick a date, open its application form, apply as a new student for a 10-day course, and wait for the centre to confirm. The centre is explicit that only online applications are accepted and only confirmed students and servers may enter the premises. There is no walk-in enrollment and no phone booking, whatever a directory listing implies.",
  },
  {
    q: "What courses does Dhamma Ambika run?",
    a: "The main offering is the 10-day residential course, which is where every new student starts. The centre also runs Anapana courses for children (ages 8 to 18), 7-day courses for teenagers, and, for old students only, Satipatthana Sutta courses, short refreshers, and long 20, 30 and 45-day courses. The live list of which course runs when is on the official schedule page.",
  },
  {
    q: "Can this site teach me the technique before I go?",
    a: "No, and I would not want it to. In this tradition the actual technique is only transmitted inside a 10-day residential course by an authorized teacher. I have sat six courses and I am a fellow student, not a teacher. For anything about how to practice, the right sources are dhamma.org and the assistant teachers at the course itself.",
  },
  {
    q: "What happens after the 10 days?",
    a: "You go home to Navsari, Surat, or wherever you came from, the silence and the schedule vanish, and keeping a daily sit becomes the real work. That gap is most of what this site is about: notes on rebuilding a daily practice and a free program that pairs you with another practitioner for accountability.",
  },
];

const jsonLd = [
  articleSchema({
    headline:
      "Vipassana Centre Navsari: it is Dhamma Ambika, about 14 km out at Vagalwad",
    description:
      "The Vipassana centre serving Navsari, Gujarat is Dhamma Ambika at Village Vagalwad, Tal Gandevi, roughly 14 km from the city on NH-8. Verified location, the courses it runs, online-only registration, and after-course notes.",
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
          Vipassana logistics · South Gujarat
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
          The Vipassana centre for Navsari is{" "}
          <span className="text-teal-600">Dhamma Ambika</span>
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Here is the catch the directory listings bury: it is not in Navsari
          town. It sits out in a village called Vagalwad, in Gandevi taluka,
          about 14 km from the city. This page is the verified answer plus the
          honest parts those listings leave out.
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
        <BackgroundGrid pattern="dots" glow className="rounded-2xl">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/80 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-3">
              Direct answer · verified 2026-06-28
            </p>
            <p className="text-xl text-zinc-900 leading-relaxed font-medium">
              The Vipassana centre that serves Navsari is{" "}
              <strong>Dhamma Ambika</strong>, at{" "}
              <strong>Village Vagalwad, Tal Gandevi</strong>, about{" "}
              <strong>14 km from Navsari</strong> on{" "}
              <strong>NH-8</strong>, roughly 2 km west of the Boriyach toll
              naka. It is the same distance from Bilimora railway station.
            </p>
            <p className="mt-4 text-zinc-700">
              Source I checked:{" "}
              <a
                href={SCHEDULE_URL}
                className="text-teal-600 underline underline-offset-2"
                rel="noopener noreferrer"
              >
                schedule.vridhamma.org/courses/ambika
              </a>{" "}
              and the centre&rsquo;s own site,{" "}
              <a
                href={CENTER_SITE}
                className="text-teal-600 underline underline-offset-2"
                rel="noopener noreferrer"
              >
                ambika.vridhamma.org
              </a>
              . The schedule page is also the only place to register.
            </p>
            <div className="mt-6">
              <ShimmerButton href={SCHEDULE_URL}>
                Open the official Dhamma Ambika schedule
              </ShimmerButton>
            </div>
          </div>
        </BackgroundGrid>
      </section>

      {/* Facts table */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          Dhamma Ambika at a glance
        </h2>
        <p className="text-zinc-600 mb-6">
          The centre takes its name from the Ambika river that runs through this
          stretch of South Gujarat. Here is what is worth knowing before you
          spend ten days there.
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
          Ambika centre and schedule pages, June 2026.
        </p>
      </section>

      {/* The geography nuance — the uncopyable anchor */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Why &ldquo;Navsari&rdquo; is a slightly misleading label
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Almost every listing files this centre under &ldquo;Navsari,&rdquo;
            because Navsari is the district and the nearest big-name railway
            station. That is fair shorthand, but it sets the wrong expectation
            if you picture a hall somewhere in the city. The centre is in{" "}
            <strong>Village Vagalwad, Gandevi taluka</strong>, out on the old
            NH-8, about 2 km west of the Boriyach toll naka. From Navsari town
            that is roughly a 14 km trip, and from Bilimora station it is about
            the same.
          </p>
          <p>
            This matters for planning. If you are coming by train, Bilimora is
            just as valid an arrival point as Navsari, and depending on your
            connection it can be the easier one. If someone is dropping you off,
            point them at the Boriyach toll naka on NH-8 rather than at a Navsari
            city address, or you will both spend the last leg confused.
          </p>
          <p>
            The other thing the listings get wrong: several show a phone number
            and present it as if you can ring up and reserve a place. You cannot.
            The centre is explicit that{" "}
            <strong>
              only online applications are accepted, and only confirmed students
              and servers are permitted onto the premises
            </strong>
            . Treat any &ldquo;book instantly&rdquo; or paid listing as not
            being this tradition. I have sat six courses across three centers and
            the registration path is the same everywhere: the official schedule,
            then a confirmation, then you travel.
          </p>
        </div>
      </section>

      {/* What it runs */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <AnimatedChecklist
          title="What you can actually apply for at Dhamma Ambika"
          items={courseItems}
        />
        <p className="mt-3 text-xs text-zinc-500">
          As a first-timer, the only door open to you is the 10-day course;
          everything marked &ldquo;old students only&rdquo; opens once you have
          completed one. The live calendar is on the official schedule.
        </p>
      </section>

      {/* Registration */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">
          Getting a seat, in three steps
        </h2>
        <HorizontalStepper steps={registerSteps} />
      </section>

      {/* The part nobody plans for */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The part that actually decides whether it sticks
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Getting out to Vagalwad is the easy bit. The hard bit starts on the
            morning of the 11th day, when you head back into Navsari or Surat and
            the structure that carried you, the bells, the silence, the people
            sitting beside you, is simply gone. Almost everyone underestimates
            this. I did.
          </p>
          <p>
            I am not going to prescribe a routine, because that is not mine to
            hand out. What I will say plainly, as a peer, is that the meditators
            who keep a daily practice going months later are rarely the ones with
            the most willpower. They are the ones who did not try to do it alone.
            That is the single pattern I have watched repeat across my own courses
            and the people I sat next to.
          </p>
          <p>
            That is the whole reason this site exists. It is a resource for after
            the course: notes on rebuilding a daily sit, and a free program that
            pairs you with another practitioner for daily accountability. If you
            are about to sit at Dhamma Ambika, the most useful thing you can do
            today is line up who you will check in with when you get home.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="text-zinc-800">
            Looking for someone to sit with after Navsari?{" "}
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
          heading="Sitting at Dhamma Ambika and worried about after?"
          description="Book a short call and I'll share what worked for keeping a daily practice going once you're back in Navsari, peer to peer, no teaching."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <FaqSection
          items={faqs}
          heading="Vipassana centre Navsari: common questions"
        />
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
        description="Headed to Dhamma Ambika? Get peer notes on making it stick."
      />
    </article>
  );
}
