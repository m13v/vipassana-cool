import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-durg";
const PUBLISHED = "2026-06-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Durg: the center is Dhamma Ketu, ~10.5 km out on NH-6",
  description:
    "If you search 'vipassana durg' you are looking for Dhamma Ketu, the Vipassana center that serves the Durg–Bhilai–Raipur belt of Chhattisgarh. It sits about 10.5 km from Durg city at Thanod (via Anjora) on National Highway 6, near the Shivnath River. Courses are free and booked only through dhamma.org. Location, registration path, and honest notes on what happens after, from a meditator with six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Durg: it's Dhamma Ketu, and here is how to get there",
    description:
      "The center behind the 'vipassana durg' searches is Dhamma Ketu at Thanod via Anjora, ~10.5 km from Durg on NH-6. Verified location, registration path through dhamma.org, and what daily practice looks like after.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Durg = Dhamma Ketu",
    description:
      "Dhamma Ketu, ~10.5 km from Durg at Thanod via Anjora on NH-6. Courses free, booked through dhamma.org. Logistics plus after-course notes.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Durg" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Durg", url: PAGE_URL },
];

const facts: { label: string; value: string }[] = [
  { label: "Center name", value: "Dhamma Ketu ('Fort of Dhamma')" },
  { label: "Serves", value: "Durg, Bhilai, Raipur and the wider Chhattisgarh belt" },
  { label: "Address", value: "Thanod, via Anjora, Dist. Durg, Chhattisgarh" },
  { label: "Distance from Durg city", value: "About 10.5 km, on National Highway 6" },
  { label: "Distance from Raipur", value: "About 40 km (state capital)" },
  { label: "Nearby landmark", value: "Close to the Shivnath River" },
  { label: "Languages of instruction", value: "Hindi and English" },
  { label: "Course fee", value: "None. Run entirely on past students' donations" },
  { label: "Official schedule", value: "dhamma.org/en/schedules/schketu" },
];

const registerSteps = [
  {
    label: "Open the Dhamma Ketu schedule",
    detail:
      "Go to dhamma.org/en/schedules/schketu. Every confirmed 10-day, children's, and Satipatthana course date for this center is listed there. Do not rely on a third-party aggregator for dates; they go stale.",
    icon: "browser" as const,
  },
  {
    label: "Pick a date and apply online",
    detail:
      "Each date links to an application form. New students apply for a 10-day course. You commit to staying the full duration on site, roughly the 2 to 4 PM registration window through the morning of the 11th day.",
    icon: "check" as const,
  },
  {
    label: "Wait for confirmation",
    detail:
      "Courses fill, so a seat is not guaranteed on submission. The center emails or calls to confirm. Until you have that, you are on a list, not enrolled.",
    icon: "email" as const,
  },
  {
    label: "Travel to Thanod",
    detail:
      "Durg has its own railway station on the Mumbai–Howrah line, and Raipur airport is about an hour away. From Durg city it is a short ride out to the center at Thanod via Anjora.",
    icon: "redirect" as const,
  },
];

const relatedPosts = [
  {
    title: "What the 10-day course structure actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "12 days on site, a fixed daily clock, three load-bearing group sittings, and noble silence. Read this before you apply at Dhamma Ketu.",
    tag: "Before you go",
  },
  {
    title: "Daily practice after a Vipassana course",
    href: "/t/daily-practice-after-vipassana-course",
    excerpt:
      "The course ends and the hard part starts: keeping a sit going at home in Durg or Bhilai once the schedule and the silence are gone.",
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
    q: "Is there a Vipassana center in Durg itself?",
    a: "Not inside the city. The center that serves Durg is Dhamma Ketu, located at Thanod via Anjora, about 10.5 km out from Durg city on National Highway 6. It is the closest dedicated Vipassana center in the tradition taught by S. N. Goenka and is the place virtually everyone searching 'vipassana durg' is trying to find.",
  },
  {
    q: "How far is Dhamma Ketu from Bhilai and Raipur?",
    a: "Dhamma Ketu sits in the Durg–Bhilai twin-city belt, so it is a short drive from Bhilai. Raipur, the state capital, is about 40 km away, and Raipur's airport is the usual arrival point for people flying in.",
  },
  {
    q: "How much does a course at Dhamma Ketu cost?",
    a: "Nothing. There is no charge for the course, food, or lodging. The centers run entirely on voluntary donations from students who have completed a course before and want to give others the same chance. You are not asked or expected to donate as a first-time student.",
  },
  {
    q: "How do I register for a course at Dhamma Ketu?",
    a: "Only through the official schedule at dhamma.org/en/schedules/schketu. Find a date, open its application form, apply as a new student for a 10-day course, and wait for the center to confirm your seat by email or phone. There is no walk-in enrollment, and third-party listings are not booking channels.",
  },
  {
    q: "What languages are courses taught in at Durg?",
    a: "Course instruction at Dhamma Ketu is given in Hindi and English. The taught material itself is delivered through recordings inside the course, so you are not depending on a local teacher's spoken language for the technique.",
  },
  {
    q: "Can this site teach me the Vipassana technique before I go?",
    a: "No, and I would not want it to. In this tradition the actual technique is only transmitted inside a 10-day residential course by an authorized teacher, step by step. I have sat six courses and I am a fellow student, not a teacher. For anything about how to practice, the right sources are dhamma.org and the assistant teachers at the course itself.",
  },
  {
    q: "What happens after the 10 days at Dhamma Ketu?",
    a: "You go home, the silence and the schedule vanish, and keeping a daily sit becomes the real work. That gap is most of what this site is about: notes on rebuilding a daily practice and a free program that pairs you with another practitioner for accountability.",
  },
];

const jsonLd = [
  articleSchema({
    headline:
      "Vipassana in Durg: the center is Dhamma Ketu, about 10.5 km out on NH-6",
    description:
      "The Vipassana center serving Durg, Chhattisgarh is Dhamma Ketu at Thanod via Anjora, roughly 10.5 km from the city on National Highway 6. Location, registration through dhamma.org, and after-course notes.",
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
          Vipassana logistics · Chhattisgarh
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
          Vipassana in Durg is{" "}
          <span className="text-teal-600">Dhamma Ketu</span>
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          If you typed those two words into a search box, you are almost
          certainly looking for a place to sit a 10-day course near Durg. There
          is one, and this page is the short, verified answer plus the honest
          parts the directory listings leave out.
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
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-3">
            Direct answer · verified 2026-06-28
          </p>
          <p className="text-xl text-zinc-900 leading-relaxed font-medium">
            The Vipassana center that serves Durg is{" "}
            <strong>Dhamma Ketu</strong>, about{" "}
            <strong>10.5 km from Durg city</strong> at Thanod (via Anjora) on{" "}
            <strong>National Highway 6</strong>, near the Shivnath River.
            Courses are free and are booked only through the official schedule.
          </p>
          <p className="mt-4 text-zinc-700">
            Source I checked:{" "}
            <a
              href="https://www.dhamma.org/en/schedules/schketu"
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              dhamma.org/en/schedules/schketu
            </a>
            . That page is also the only place to register.
          </p>
        </div>
      </section>

      {/* Facts table */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          Dhamma Ketu at a glance
        </h2>
        <p className="text-zinc-600 mb-6">
          The name translates to &ldquo;Fort of Dhamma.&rdquo; Here is what is
          worth knowing before you spend ten days there.
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
          Center location and fee model confirmed against the official Dhamma
          Ketu schedule and center pages on dhamma.org, June 2026.
        </p>
      </section>

      {/* Why the listings mislead */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Why most &ldquo;vipassana durg&rdquo; pages send you the wrong way
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            The aggregator listings that come up for this topic do two annoying
            things. They show a phone number and an address as if you can ring
            up and book, and they sometimes blur Dhamma Ketu together with
            unrelated &ldquo;meditation centers&rdquo; in the same city. Neither
            helps you actually get a seat.
          </p>
          <p>
            There is exactly one booking channel for a course here, and it is
            the official schedule. The center confirms students through that
            pipeline, courses fill, and a submitted form is an application, not
            a reservation. If a page lets you &ldquo;book instantly&rdquo; or
            charges a fee, it is not this tradition.
          </p>
          <p>
            The other thing the listings skip: the course itself is taught,
            from start to finish, inside the ten days by an authorized teacher.
            You do not need to learn anything beforehand, and nobody reputable
            will sell you a &ldquo;technique preview.&rdquo; For how to practice,
            the only honest pointers are dhamma.org and the assistant teachers
            on site. I have sat six courses across three centers and I still
            send every how-do-I question back to them.
          </p>
        </div>
      </section>

      {/* Registration flow */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <FlowDiagram
          title="Getting a seat at Dhamma Ketu"
          steps={registerSteps}
        />
      </section>

      {/* The part nobody plans for */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The part that actually decides whether it sticks
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Getting to Thanod is the easy bit. The hard bit starts on the
            morning of the 11th day, when you drive back into Durg or Bhilai and
            the structure that carried you, the bells, the silence, the people
            sitting beside you, is simply gone. Almost everyone underestimates
            this. I did.
          </p>
          <p>
            I am not going to prescribe a routine, because that is not mine to
            hand out. What I will say plainly, as a peer, is that the meditators
            who keep a daily practice going months later are rarely the ones
            with the most willpower. They are the ones who did not try to do it
            alone. That is the single pattern I have watched repeat across my
            own courses and the people I sat next to.
          </p>
          <p>
            That is the whole reason this site exists. It is a resource for
            after the course: notes on rebuilding a daily sit, and a free
            program that pairs you with another practitioner for daily
            accountability. If you are about to sit at Dhamma Ketu, the most
            useful thing you can do today is line up who you will check in with
            when you get home.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="text-zinc-800">
            Looking for someone to sit with after Durg?{" "}
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
          heading="Sitting at Dhamma Ketu and worried about after?"
          description="Book a short call and I'll share what worked for keeping a daily practice going once you're back in Durg, peer to peer, no teaching."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <FaqSection items={faqs} heading="Vipassana Durg: common questions" />
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
        description="Headed to Dhamma Ketu? Get peer notes on making it stick."
      />
    </article>
  );
}
