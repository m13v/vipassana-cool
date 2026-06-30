import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  ProofBanner,
  AnimatedChecklist,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-dharamshala";
const PUBLISHED = "2026-06-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const CENTER_SITE = "https://sikhara.dhamma.org/";
const SCHEDULE_URL = "https://schedule.vridhamma.org/courses/sikhara";
const VRI = "https://www.vridhamma.org/";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title: "Vipassana in Dharamshala is Dhamma Sikhara, and it isn't in Dharamshala",
  description:
    "The Vipassana centre people search as 'Dharamshala' is Dhamma Sikhara, up in Dharamkot above McLeod Ganj, not in Dharamshala town. Verified location, why it is free, and the one registration detail every travel blog misses: applications open exactly 60 days before each course at 00:00 IST. Written by a meditator with six courses across three centers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Dharamshala: it's Dhamma Sikhara, up in Dharamkot",
    description:
      "Where the center actually sits, why there is no fee, and the 60-day, 00:00 IST application window that decides whether you get a seat.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Dharamshala is Dhamma Sikhara",
    description:
      "Not in Dharamshala town. Up in Dharamkot. Free. And the seats open 60 days out at midnight IST.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Dharamshala" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Dharamshala", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana center near Dharamshala?",
    a: "It is Dhamma Sikhara, in Dharamkot, above McLeod Ganj, postal area 176219, Kangra district, Himachal Pradesh. It sits in the deodar and pine forest of the Dhauladhar range at roughly 2000 metres. From McLeod Ganj it is about a 30 minute walk uphill. So the place almost everyone types as 'vipassana dharamshala' is not in Dharamshala town proper, it is a climb above it.",
  },
  {
    q: "How much does a 10-day course at Dhamma Sikhara cost?",
    a: "Nothing. There is no charge for the course, the food, or the accommodation. The centers in this tradition run entirely on donations from old students who have already finished a course and want to give others the same chance. A first-time student is not allowed to pay. You can read the policy on the official network site at dhamma.org.",
  },
  {
    q: "How do I register for a course at Dhamma Sikhara?",
    a: "Applications are made online through the course schedule at schedule.vridhamma.org/courses/sikhara. The center notes that applications open 60 days before each course at 00:00 hrs IST, and that seats fill fast. The phone numbers you see in directory listings are enquiry lines, not a booking system. The application is the only path to a seat.",
  },
  {
    q: "When do courses run, and is the center open in winter?",
    a: "The published schedule runs roughly from March through November, with 10-day courses about twice a month in season, plus occasional 3-day and Satipatthana Sutta courses for old students. There are no courses in the deep winter months, which fits the altitude and cold of a Himalayan ridge. Always check the live schedule before you plan travel.",
  },
  {
    q: "What is the nearest airport and station to Dhamma Sikhara?",
    a: "The nearest airport is Kangra Airport at Gaggal (code DHM), about 12 to 15 km from Dharamshala and roughly a 20 km, 23 minute drive from McLeod Ganj. The usual railheads are Pathankot or Chakki Bank on the Jammu Tawi line, about 90 km away. Many people instead take an overnight bus from Delhi (ISBT Kashmiri Gate) to McLeod Ganj, then go up to Dharamkot.",
  },
  {
    q: "Is the Dharamshala course different from courses elsewhere?",
    a: "The format is the same everywhere in this tradition. I sat six courses at three centers in California and never at Sikhara, but the daily timetable, the code of discipline, the noble silence, and the 10-day arc are identical worldwide. What changes is the setting: a small Himalayan center with capacity around 35 to 40 per gender, deodar forest, and thin mountain air.",
  },
  {
    q: "Can the site here teach me the technique before I go?",
    a: "No, and on purpose. The technique is only transmitted inside a 10-day residential course by an authorized teacher. For anything about how to practice or how to handle a difficulty on the cushion, the right place is dhamma.org and an assistant teacher at a course. This page is about location, logistics, and language, not instruction.",
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
                "Vipassana in Dharamshala is Dhamma Sikhara, and it isn't in Dharamshala",
              description:
                "A verified guide to the Vipassana center people search as Dharamshala: where Dhamma Sikhara actually sits, why it is free, and the 60-day IST application window.",
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

      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            Location note
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            The Vipassana center in Dharamshala is not in Dharamshala
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            People type &quot;vipassana dharamshala&quot; and picture a center in
            the town. The place they actually want is Dhamma Sikhara, and it sits
            up in Dharamkot, a forested ridge above McLeod Ganj. Getting that one
            fact straight changes how you travel, where you stay the night before,
            and when you click apply.
          </p>
          <div className="mt-5">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="7 min read"
            />
          </div>
        </header>

        {/* Direct answer */}
        <section
          aria-label="Direct answer"
          className="mt-8 rounded-xl border border-teal-200 bg-teal-50 p-5 sm:p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer, verified 2026-06-29
          </p>
          <p className="mt-2 text-base leading-relaxed text-zinc-800">
            The center is{" "}
            <strong className="text-zinc-900">Dhamma Sikhara</strong>, in
            Dharamkot above McLeod Ganj (Kangra district, Himachal Pradesh). It
            runs free, donation-only{" "}
            <strong className="text-zinc-900">10-day residential courses</strong>.
            You register online at{" "}
            <a
              href={SCHEDULE_URL}
              className="font-medium text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/sikhara
            </a>
            , and the center states that{" "}
            <strong className="text-zinc-900">
              applications open 60 days before each course at 00:00 IST
            </strong>
            . Seats fill fast.
          </p>
        </section>

        {/* The name */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Two words doing a lot of quiet work
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            The confusion starts in the language. &quot;Dharamshala&quot; is not
            originally a place name at all. It is a common noun: dharma plus
            shala, roughly a house of dharma, the old word for a free rest house
            where pilgrims and travelers could shelter for the night without
            paying. Towns across the subcontinent had one. The hill station took
            the word as its name because it grew up around such a shelter.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            So when you search &quot;vipassana dharamshala&quot;, you are stacking
            a tradition of free shelter on top of a town named after free
            shelter, and pointing at a center that, true to both, charges nothing.
            The center&apos;s own name keeps the thread going. Dhamma is the Pali
            form of dharma, and sikhara means a peak or summit, the spire of a
            mountain. Dhamma Sikhara, the dharma peak, on a Himalayan ridge. The
            name is a map: it tells you the thing is up, not in the town.
          </p>
        </section>

        {/* Assumption vs reality */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            What the travel pages get wrong
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Most pages that come up for this topic are booking aggregators and
            travel blogs. They place the center loosely &quot;in Dharamshala,&quot;
            list it next to paid yoga and meditation retreats, and quote a price
            range. Every one of those moves is a little off. Here is the gap.
          </p>
          <div className="mt-6">
            <BeforeAfter
              title="The common picture vs what is actually there"
              before={{
                label: "What most pages imply",
                content:
                  "A meditation retreat in Dharamshala town that you book like a hotel, with a nightly rate, near the cafes of McLeod Ganj.",
                highlights: [
                  "In Dharamshala / McLeod Ganj town",
                  "Pay a per-night or per-course price",
                  "Book a date on demand, like a hotel",
                  "One of many interchangeable retreats",
                ],
              }}
              after={{
                label: "What Dhamma Sikhara actually is",
                content:
                  "A small donation-only center up in Dharamkot, a 30 minute climb above McLeod Ganj, in the Goenka network, with one fixed 10-day format and an application window.",
                highlights: [
                  "In Dharamkot, above the town, ~2000m",
                  "Free: no fee for course, food, or room",
                  "Apply online, seats open 60 days out at 00:00 IST",
                  "Same 10-day format as every center worldwide",
                ],
              }}
            />
          </div>
        </section>

        {/* The anchor: registration mechanic */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            The detail that decides whether you get in
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            If there is one thing worth burning into memory before you plan a trip
            around this, it is the application window. The center publishes it
            plainly on its schedule: applications open 60 days before each course
            starts, at 00:00 hrs IST, and it warns that seats fill fast. A small
            center, capacity around 35 to 40 per gender, in a region a lot of
            travelers pass through, means popular dates can close in hours.
          </p>
          <div className="mt-6">
            <ProofBanner
              quote="Applications open 60 days prior at midnight 00:00 hrs IST. Register promptly, seats fill fast."
              source="Dhamma Sikhara course schedule, verified June 2026"
              metric="60 days / 00:00 IST"
            />
          </div>
          <p className="mt-6 leading-relaxed text-zinc-700">
            The practical version: count back 60 days from your target start date,
            and have your application ready to submit at the stroke of midnight
            India time. If you are applying from another time zone, do the IST
            conversion in advance so you are not refreshing the page an hour late.
            This is the single mechanic the booking-style pages never mention,
            because they are not actually the way in. The application at{" "}
            <a
              href={SCHEDULE_URL}
              className="font-medium text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/sikhara
            </a>{" "}
            is.
          </p>
        </section>

        {/* Getting there / facts */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Getting to the dharma peak
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            The geography is the other thing worth front-loading. You are heading
            to a ridge above a hill town, not to a city address. Here is what is
            verifiably true about reaching it.
          </p>
          <div className="mt-6">
            <AnimatedChecklist
              title="Verified logistics for Dhamma Sikhara"
              items={[
                {
                  text: "Address: Dharamkot, McLeod Ganj, Dharamsala 176219, Kangra district, Himachal Pradesh",
                  checked: true,
                },
                {
                  text: "Nearest airport: Kangra Airport, Gaggal (DHM), about 12 to 15 km from Dharamshala",
                  checked: true,
                },
                {
                  text: "Nearest railheads: Pathankot or Chakki Bank on the Jammu Tawi line, about 90 km",
                  checked: true,
                },
                {
                  text: "Common route: overnight bus from Delhi ISBT (Kashmiri Gate) to McLeod Ganj, then up to Dharamkot",
                  checked: true,
                },
                {
                  text: "Final stretch: roughly a 30 minute walk uphill from McLeod Ganj into the forest",
                  checked: true,
                },
                {
                  text: "Season: courses run roughly March through November, none in deep winter",
                  checked: true,
                },
              ]}
            />
          </div>
          <p className="mt-6 leading-relaxed text-zinc-700">
            One small mercy of the climb: by the time you reach the gate, the city
            is already behind you, both literally and in your nervous system. The
            walk up through deodar is a gentler on-ramp into ten days of silence
            than stepping off a curb in a town would be.
          </p>
        </section>

        {/* Peer voice / what is the same */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why a center in California tells you anything about one in Dharamkot
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Fair question, since I have never sat at Sikhara. I have done six
            10-day courses at three centers, all of them in California, and served
            on the volunteer side too. The reason I can write about a center I
            have not visited is that this tradition is unusually standardized. The
            timetable, the code of discipline, the noble silence, the same
            recorded discourses each evening, the 10-day arc itself: these are the
            same whether the center is a redwood camp in NorCal or a forest ridge
            above McLeod Ganj.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            That is genuinely useful to know before you go. It means the hundreds
            of accounts of what a 10-day course is actually like, including the
            ones on this site, apply to Sikhara too. What does not transfer is the
            setting, and the setting at a Himalayan center is its own thing: thin
            air, cold nights even outside winter, a small group, and a long view
            of the Dhauladhar range when you step outside between sittings. None
            of that is technique. It is just the room the practice happens in.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            I am a fellow practitioner sharing logistics, not a teacher. For
            anything about how to actually practice, or how to work with whatever
            comes up while you are there, the right sources are{" "}
            <a
              href={DHAMMA_ORG}
              className="font-medium text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at the course itself.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sat a course, struggling to keep the daily sit going?"
          description="If you have come back from a course, in Dharamkot or anywhere, and the daily practice is slipping, I run a free practice buddy matching program that pairs you with another meditator for accountability. Grab a short call and I'll explain how it works."
        />

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Questions people actually ask
          </h2>
          <div className="mt-6">
            <FaqSection items={faqs} />
          </div>
        </section>

        <section className="mt-12">
          <RelatedPostsGrid
            title="Before you apply"
            subtitle="A few honest reads from people who have sat the format"
            posts={[
              {
                title: "How to find and choose a Vipassana retreat",
                href: "/guide/find-a-retreat",
                excerpt:
                  "How the donation-only network is structured and how to pick a center and date.",
                tag: "Logistics",
              },
              {
                title: "What the 10-day course structure is really like",
                href: "/t/10-day-course-structure",
                excerpt:
                  "The daily arc, the noble silence, and what the ten days actually ask of you.",
                tag: "Format",
              },
              {
                title: "First course tips from someone who has sat six",
                href: "/t/first-course-tips",
                excerpt:
                  "What I wish I had known before my first 10-day sit, the boring practical stuff included.",
                tag: "Preparation",
              },
            ]}
          />
        </section>

        <p className="mt-12 text-sm leading-relaxed text-zinc-500">
          Sources checked on 2026-06-29: the Dhamma Sikhara center site (
          <a
            href={CENTER_SITE}
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            sikhara.dhamma.org
          </a>
          ), the course schedule (
          <a
            href={SCHEDULE_URL}
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            schedule.vridhamma.org/courses/sikhara
          </a>
          ), and the Vipassana Research Institute (
          <a
            href={VRI}
            className="text-teal-700 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            vridhamma.org
          </a>
          ). Course dates and the application window can change, so confirm on the
          live schedule before you travel.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Back from a course and the daily sit is slipping? Get matched with a practice buddy."
      />
    </article>
  );
}
