import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  HorizontalStepper,
  ComparisonTable,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-patna";
const PUBLISHED = "2026-06-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Patna: the Dhamma Patliputta center next to Patna Junction",
  description:
    "Yes, Patna has a Vipassana center: Dhamma Patliputta, in the Meditation Block of Buddha Smriti Park, next to Patna Junction. A fully air-conditioned, government-built hall (BUIDCO, opened 3 July 2018) that seats 75 and charges nothing. Address, courses, cost, and how it differs from the other Bihar center at Bodh Gaya. Sourced from patliputta.dhamma.org, verified 2026-06-18.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana in Patna: Dhamma Patliputta, next to Patna Junction",
    description:
      "Patna's Vipassana center is unusual for the tradition: an air-conditioned, government-built hall inside a public park, a short walk from the railway junction, free of charge. Full logistics, verified from the official site.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Patna: the Dhamma Patliputta center",
    description:
      "Dhamma Patliputta sits in Buddha Smriti Park next to Patna Junction. 75 seats, air-conditioned, free. Verified from patliputta.dhamma.org.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Patna" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Patna", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana center in Patna?",
    a: "Yes. It is called Dhamma Patliputta, officially the Patna Vipassana Meditation Centre, and it sits in the Meditation Block of Buddha Smriti Park, next to Patna Junction. It runs ten-day residential courses in the tradition of S. N. Goenka. The official site is patliputta.dhamma.org.",
  },
  {
    q: "Where exactly is the Patna center?",
    a: "The listed address is Meditation Block, Buddha Smriti Park, Next to Patna Junction, Patna, Bihar. Buddha Smriti Park is a public memorial park beside the main Patna Junction railway station, which makes the center one of the more centrally located Vipassana sites in the country.",
  },
  {
    q: "How much does a course at the Patna center cost?",
    a: "Nothing. There is no charge for the course, the room, or the food. The tradition runs entirely on voluntary donations, and only people who have already completed a course are invited to give. You cannot pay your way in, and a first course is funded by old students who sat before you.",
  },
  {
    q: "How do I register for a course at Dhamma Patliputta?",
    a: "Applications go through the official schedule and form, not through this page. Check the live schedule at schedule.vridhamma.org/courses/patliputta, pick a course, and complete the application form linked from that listing. You can also reach the center at +91 6205978822 (9:30 AM to 5:30 PM) or info@patna.in.dhamma.org.",
  },
  {
    q: "How many people can the Patna center hold?",
    a: "The center states it can accommodate 75 students for a residential ten-day course. The facility is fully air-conditioned, which is notable given Bihar's summers, and it was developed by BUIDCO (Bihar Urban Infrastructure Development Corporation) and offered to the public from 3 July 2018.",
  },
  {
    q: "What if I am near Patna but the Patna center is full?",
    a: "Bihar's other established center is Dhamma Bodhi at Bodh Gaya, on Gaya-Dobhi Road near Magadh University, roughly a hundred kilometers south. It is the older, larger, more rural site. If dates at Patna do not line up, the Bihar centers directory at br.in.dhamma.org lists every option in the state.",
  },
  {
    q: "Can this site teach me the Vipassana technique before I go?",
    a: "No, and on purpose. The technique is only ever taught in person by an authorized teacher inside a ten-day course. Nothing here, and nothing on any website, substitutes for that. For anything about how the practice actually works, the only honest answer is dhamma.org and the teacher you will meet on Day 0.",
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
                "Vipassana in Patna: the Dhamma Patliputta center next to Patna Junction",
              description:
                "A logistics guide to the Vipassana center in Patna (Dhamma Patliputta): location, capacity, cost, courses, and how it compares to the Bodh Gaya center. Verified from patliputta.dhamma.org.",
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

      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        <p className="text-sm font-medium text-teal-700 uppercase tracking-wide mb-3">
          Patna, Bihar
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
          Vipassana in Patna: the center next to the railway junction
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Patna has a real, working Vipassana center, and it is an odd one for
          this tradition. Most centers are remote rural camps you have to drive
          out to. Patna&apos;s sits inside a public memorial park, a few minutes&apos;
          walk from the main railway station, in an air-conditioned hall the
          state government built and handed over. Here is exactly what is there,
          what it costs, and how to get in.
        </p>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="6 min read"
          className="mt-6 !mx-0 !px-0"
        />
      </header>

      {/* Direct answer */}
      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 18 June 2026
          </p>
          <p className="mt-3 text-xl text-zinc-900 font-semibold leading-snug">
            Yes. The center is{" "}
            <span className="text-teal-700">Dhamma Patliputta</span>, the Patna
            Vipassana Meditation Centre.
          </p>
          <p className="mt-3 text-zinc-700 leading-relaxed">
            It is in the Meditation Block of Buddha Smriti Park, next to Patna
            Junction, Patna, Bihar. It runs free ten-day residential courses in
            the tradition of S. N. Goenka, seats 75, and is fully
            air-conditioned. You register through the official schedule, not
            here.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href="https://patliputta.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 font-medium text-white"
            >
              Official center site
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://schedule.vridhamma.org/courses/patliputta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-teal-300 px-4 py-2 font-medium text-teal-700"
            >
              Live course schedule
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Verified facts */}
      <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The center in four numbers
        </h2>
        <p className="mt-3 text-zinc-600 leading-relaxed">
          Everything below is pulled straight from the center&apos;s own page at
          patliputta.dhamma.org, not from an aggregator. If a detail changed
          after this was written, the official site wins.
        </p>
        <div className="text-zinc-700">
          <MetricsRow
            metrics={[
              { value: 75, label: "Residential seats per course" },
              { value: 2018, label: "Year opened to the public" },
              { value: 0, prefix: "₹", label: "Cost of a course" },
              { value: 10, suffix: "-day", label: "Standard course length" },
            ]}
          />
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          The facility was developed by BUIDCO, the Bihar Urban Infrastructure
          Development Corporation, and offered to the public from 3 July 2018.
          The phone line is +91 6205978822, staffed 9:30 AM to 5:30 PM.
        </p>
      </section>

      {/* The distinctive angle */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Why the Patna center is unusual
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I have sat six courses, all at three centers in California, and every
          one of them was a place you had to commit to reaching: a camp up a
          dirt road, a rented site with bunk beds twelve to a room, somewhere
          the city could not follow you. That remoteness is usually part of the
          point. The geography does some of the work of cutting you off before
          the noble silence even starts.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Patna breaks the pattern. The center is in the Meditation Block of
          Buddha Smriti Park, a public memorial park, and the listed address is
          literally &ldquo;Next to Patna Junction.&rdquo; You can step off a
          train and be at the gate without arranging a single onward ride. The
          hall is fully air-conditioned, which in a Bihar summer is not a luxury
          detail, it changes whether long sits in the heat are survivable for a
          first-timer. And it exists because a government body, BUIDCO, built
          the facility and handed it to the trust in 2018, rather than the more
          typical story of land slowly bought and built out by old students.
        </p>
        <ProofBanner
          metric="₹0"
          quote="There will be no charges for attending the course. Old students who have benefited may donate in time, kind, or money."
          source="patliputta.dhamma.org, the official Patna center site"
        />
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The cost works the same everywhere in this tradition, and it is worth
          saying plainly because newcomers rarely believe it: you pay nothing.
          Not for the teaching, not for the room, not for ten days of meals.
          Only people who have already finished a course are even allowed to
          donate, so your first sit is paid for by strangers who sat before you.
          A center being government-built does not change that, the donation
          model is the same.
        </p>
      </section>

      {/* Arrival route */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Getting there on Day 0
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Day 0 is arrival and registration, before any silence begins. The
          route to this particular center is about as simple as it gets in
          India, because the railway station and the park are neighbors.
        </p>
        <div className="text-zinc-700">
          <HorizontalStepper
            title="From the train to the hall"
            steps={[
              {
                title: "Patna Junction",
                description:
                  "Arrive at the main railway station. This is the reference point in the official address, so any driver or local knows it.",
              },
              {
                title: "Buddha Smriti Park",
                description:
                  "The park sits right beside the station. The Vipassana facility is the Meditation Block inside it.",
              },
              {
                title: "Registration",
                description:
                  "Check in at the Meditation Block, hand over phone and valuables for the duration, and settle in before the first evening sitting.",
              },
            ]}
          />
        </div>
        <p className="text-zinc-700 leading-relaxed">
          One thing that trips up first-timers everywhere: you surrender phones,
          books, writing materials, and any food you brought for the full ten
          days. That is standard across centers, not a Patna quirk. Travel
          light and assume you will be unreachable.
        </p>
      </section>

      {/* Which Bihar center */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Patna or Bodh Gaya: which Bihar center
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you are searching from Patna, the city center is almost always the
          right answer on logistics alone. But Bihar has a second, older center
          at Bodh Gaya, Dhamma Bodhi, and people travel to it on purpose because
          of where it sits. Here is the honest split.
        </p>
        <div className="text-zinc-700 mt-6">
          <ComparisonTable
            productName="Dhamma Patliputta (Patna)"
            competitorName="Dhamma Bodhi (Bodh Gaya)"
            rows={[
              {
                feature: "Setting",
                ours: "Urban, inside a public park next to Patna Junction",
                competitor: "Rural, on Gaya-Dobhi Road near Magadh University",
              },
              {
                feature: "Getting there from Patna",
                ours: "Walk from the railway station",
                competitor: "Roughly 100 km south, a few hours by road or rail",
              },
              {
                feature: "Comfort",
                ours: "Fully air-conditioned hall",
                competitor: "Older, larger, more traditional campus",
              },
              {
                feature: "Draw",
                ours: "Convenience and a centrally located first course",
                competitor: "Sitting near Bodh Gaya, where the Buddha was awakened",
              },
              {
                feature: "Cost",
                ours: "Free, donation-only",
                competitor: "Free, donation-only",
              },
            ]}
            caveat="Both centers teach the identical technique under the same code of discipline. The differences are setting and logistics, not method."
          />
        </div>
      </section>

      {/* Where this site stops */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          What this page does not do
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am a fellow practitioner sharing logistics, not a teacher. This page
          will not tell you how to meditate, what to do once you are sitting, or
          what is supposed to happen on any given day. That is not me being coy:
          in this tradition the technique is only ever passed on in person, by an
          authorized teacher, inside the course itself. Anything you read online
          that claims to teach it is a poor copy at best.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So for the two things that actually matter operationally, registration
          and the practice, the right destinations are the official ones:{" "}
          <a
            href="https://schedule.vridhamma.org/courses/patliputta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            the Patna course schedule
          </a>{" "}
          to apply, and{" "}
          <a
            href="https://www.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            dhamma.org
          </a>{" "}
          for everything about the method, with your real questions saved for the
          teacher you meet on Day 0. What I can help with is the part that starts
          when you get home.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="The hard part starts after Day 10"
          description="Booked a course in Patna, or already sat one and watching the daily practice slip? I match meditators with a practice buddy for daily accountability. Grab a slot and we'll sort out what consistency looks like for you."
        />
      </div>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Picking a center, applying, and surviving the first course"
          posts={[
            {
              title: "How to find a Vipassana retreat",
              href: "/guide/find-a-retreat",
              excerpt:
                "Reading the schedule, picking a center, and what the application actually asks.",
              tag: "Guide",
            },
            {
              title: "First course tips",
              href: "/guide/first-course-tips",
              excerpt:
                "What I wish I had known walking into Day 0 of my first ten-day course.",
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
        description="Sat a course or about to? Get matched with a daily practice buddy."
      />
    </article>
  );
}
