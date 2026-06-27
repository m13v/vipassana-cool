import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  ComparisonTable,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/parmarth-niketan";
const PUBLISHED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Parmarth Niketan: is it a Vipassana center? What it actually is, and where the nearest one is",
  description:
    "Parmarth Niketan is a yoga and spiritual ashram on the Ganges in Rishikesh, founded 1942, famous for its sunset Ganga Aarti and the International Yoga Festival. It is not a Goenka-tradition Vipassana center. The nearest one is Dhamma Salila in Dehradun, about 53 km away. What the ashram offers, how a silent 10-day course differs, and how to choose, from a meditator who has sat six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Parmarth Niketan vs a Vipassana course: what is actually different",
    description:
      "Parmarth Niketan is a yoga ashram in Rishikesh, not a silent Vipassana center. What it offers, how it differs from a 10-day Goenka course, and where the nearest Vipassana center is.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parmarth Niketan is a yoga ashram, not a Vipassana center",
    description:
      "What Parmarth Niketan in Rishikesh actually offers, and where to go for an actual silent 10-day Vipassana course. Notes from six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Parmarth Niketan" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Parmarth Niketan", url: PAGE_URL },
];

const ashramMetrics = [
  { value: 1942, label: "Ashram founded" },
  { value: 1000, suffix: "+", label: "Rooms in Rishikesh" },
  { value: 80, prefix: "~", label: "Nations at Yoga Festival" },
  { value: 53, suffix: " km", label: "To nearest Vipassana center" },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "What it is",
    competitor:
      "A large yoga and spiritual ashram on the bank of the Ganges, open to pilgrims, tourists, and yoga students.",
    ours: "A residential center that runs one thing: the silent 10-day Goenka-tradition course, nothing else.",
  },
  {
    feature: "Come and go",
    competitor:
      "You book a room, attend what you like, walk into town, see the evening aarti, leave when you want.",
    ours: "You commit to all 10 days. You arrive, hand over your phone, and stay on grounds the entire course.",
  },
  {
    feature: "Speaking",
    competitor:
      "Normal conversation, satsang, lectures, group chanting, social life on the ghats.",
    ours: "Noble silence for nine days: no speaking, no eye contact, no gestures with other students.",
  },
  {
    feature: "Daily shape",
    competitor:
      "Morning prayers, yoga classes, satsang, kirtan, and the sunset Ganga Aarti at the ghat.",
    ours: "A fixed seated schedule from before dawn until night, the same every day, taught inside the course only.",
  },
  {
    feature: "Cost",
    competitor:
      "Set room rates per night that cover the room, meals, and access to ashram activities.",
    ours: "No fee at all. Courses run on donations from old students who have already finished one.",
  },
  {
    feature: "Yoga and asana",
    competitor:
      "Central. Vinyasa, Hatha, and Yoga Nidra classes daily; it hosts the International Yoga Festival.",
    ours: "None. No asana, no pranayama practice, no physical yoga component during the course.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is Parmarth Niketan a Vipassana center?",
    a: "No. Parmarth Niketan is a yoga and spiritual ashram in Rishikesh, on the bank of the Ganges in the Swargashram area. It runs daily yoga, meditation classes, satsang, kirtan, and the well-known sunset Ganga Aarti, and it hosts the International Yoga Festival each March. It does not run the residential, silent, 10-day Vipassana course in the tradition of S. N. Goenka. The nearest center that does is Dhamma Salila in Dehradun, roughly 53 km away. You can confirm the ashram's own program at parmarth.org and the Vipassana center at salila.dhamma.org.",
  },
  {
    q: "Where is the nearest Vipassana center to Parmarth Niketan?",
    a: "Dhamma Salila, in Dholas Village in the Doon Valley near Dehradun, about 10 km from the Dehradun Clock Tower and roughly 53 km from Rishikesh. It is the Goenka-tradition center that serves this whole stretch of Uttarakhand. We have a fuller write-up of its location, calendar, and cost on our Vipassana in Dehradun page, and the official source is salila.dhamma.org.",
  },
  {
    q: "Does Parmarth Niketan teach meditation?",
    a: "It offers meditation classes and morning prayers as part of ashram life, alongside yoga. That is different from a Goenka-tradition Vipassana course, which is a single fixed technique taught only inside a 10-day residential setting by authorized assistant teachers. If you want to learn that specific technique, this site does not teach it and neither does the ashram. For anything about how the technique is actually practiced, the right place is dhamma.org and an authorized teacher at a 10-day course.",
  },
  {
    q: "Can I do a silent retreat at Parmarth Niketan?",
    a: "Parmarth Niketan is built around an open, social rhythm: pilgrims arriving, yoga classes, the crowded evening aarti on the ghats. It is not a noble-silence environment. If silence is the thing you are after, a 10-day Vipassana course is structured around exactly that: nine days with no speaking, no phones, and no contact with the outside world. The two experiences sit at opposite ends of the spectrum, which is worth knowing before you book.",
  },
  {
    q: "Why do people searching Parmarth Niketan end up looking at Vipassana?",
    a: "Rishikesh is the place a lot of people first reach for the idea of going inward, and Parmarth Niketan is its most visible ashram. But the word people often have in mind, a long silent sit where you are alone with your own mind, is the Vipassana course, not the yoga-festival side of ashram life. So the search drifts from the famous ashram to the actual silent course. This page exists to make that distinction clear instead of letting you arrive expecting one thing and finding the other.",
  },
  {
    q: "Is the Ganga Aarti at Parmarth Niketan free to attend?",
    a: "The sunset Ganga Aarti at Parmarth's ghat is open to the public and is one of the most attended in Rishikesh; you do not need to be staying at the ashram to watch it. Staying at the ashram itself is a separate booking with set room rates, made in advance through parmarth.org. That open, come-and-watch quality is exactly what makes it different from a Vipassana course, which is closed to the public and committed in full.",
  },
  {
    q: "Should I go to Parmarth Niketan or sit a Vipassana course?",
    a: "Different tools for different things. If you want yoga, the Himalayan setting, the aarti, satsang, and the freedom to roam Rishikesh, Parmarth Niketan is a good fit and a beautiful place. If what you actually want is ten days of silence and an unbroken look at your own patterns, that is the Vipassana course, and you would book Dhamma Salila or another center on dhamma.org. Some people do one, then the other. I am not a teacher, just a fellow practitioner who has sat six courses and is sharing the distinction.",
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
                "Parmarth Niketan: is it a Vipassana center? What it is, and where the nearest one is",
              description: metadata.description as string,
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 pb-20">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium text-teal-700 uppercase tracking-wide">
            Rishikesh, Uttarakhand
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-zinc-900 leading-tight">
            Parmarth Niketan is a yoga ashram, not a Vipassana center
          </h1>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </header>

        {/* Direct answer, high on the page */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-27
          </p>
          <p className="mt-3 text-lg text-zinc-800 leading-relaxed">
            No, Parmarth Niketan is not a Vipassana center. It is one of the
            largest yoga and spiritual ashrams in Rishikesh, on the bank of the
            Ganges, founded in 1942 and known for its daily sunset{" "}
            <span className="font-semibold">Ganga Aarti</span> and the{" "}
            <span className="font-semibold">International Yoga Festival</span>.
            The nearest center that runs the silent 10-day Goenka-tradition
            Vipassana course is{" "}
            <Link
              href="/t/vipassana-dehradun"
              className="text-teal-700 underline underline-offset-2 font-medium"
            >
              Dhamma Salila in Dehradun
            </Link>
            , about 53 km away.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Sources:{" "}
            <a
              href="https://parmarth.org/"
              className="text-teal-700 underline underline-offset-2"
              rel="nofollow noopener"
            >
              parmarth.org
            </a>{" "}
            and{" "}
            <a
              href="https://salila.dhamma.org/"
              className="text-teal-700 underline underline-offset-2"
              rel="nofollow noopener"
            >
              salila.dhamma.org
            </a>
            .
          </p>
        </div>

        <MetricsRow metrics={ashramMetrics} />

        <section className="mt-4 space-y-5 text-lg text-zinc-700 leading-relaxed">
          <p>
            If you typed those two words into a search box, you are probably
            standing at one of two doors. One leads to a famous riverside ashram
            with yoga at dawn and a thousand lamps on the Ganga at dusk. The
            other leads to ten silent days where you do not speak to a soul. They
            get blurred together because both live under the same Rishikesh
            halo, but they are not the same place and not the same experience.
            This page is here to keep you from booking one when you wanted the
            other.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold text-zinc-900">
            What Parmarth Niketan actually is
          </h2>
          <div className="mt-5 space-y-5 text-lg text-zinc-700 leading-relaxed">
            <p>
              Parmarth Niketan sits in Swargashram, on the eastern bank of the
              Ganges in Rishikesh. It was founded in 1942 by Pujya Swami
              Shukdevanandji Maharaj, and since 1986 its spiritual head has been
              Pujya Swami Chidanand Saraswatiji Maharaj. With well over a
              thousand rooms it is the largest ashram in town, and on any given
              evening its ghat fills with hundreds of people for the Ganga
              Aarti, the lamp-and-chant ceremony at sunset.
            </p>
            <p>
              Day to day, the ashram runs on yoga and devotion: Vinyasa, Hatha,
              and Yoga Nidra classes, morning universal prayers, satsang,
              lecture programs, and kirtan. Each March it hosts the
              International Yoga Festival, which in 2026 ran March 9 to 15 and
              drew more than 1,500 practitioners from nearly 80 nations. You
              book a room through their site, you come and go, you attend what
              calls to you. It is open, social, and devotional. None of that is
              a Vipassana course.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <ComparisonTable
            heading="Yoga ashram vs a silent Vipassana course"
            intro="Same region, opposite shape. Here is where the two diverge once you are actually there."
            productName="10-day Vipassana course"
            competitorName="Parmarth Niketan"
            rows={comparisonRows}
            caveat="The ashram column describes Parmarth Niketan's published program. The course column describes the Goenka-tradition 10-day format in general terms, not instruction in the technique."
          />
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-zinc-900">
            Where the nearest Vipassana center actually is
          </h2>
          <div className="mt-5 space-y-5 text-lg text-zinc-700 leading-relaxed">
            <p>
              If the silent course is what you are after, you are not far off.
              The Goenka-tradition center serving this part of Uttarakhand is{" "}
              <Link
                href="/t/vipassana-dehradun"
                className="text-teal-700 underline underline-offset-2 font-medium"
              >
                Dhamma Salila
              </Link>
              , in Dholas Village in the Doon Valley. It is about 10 km from the
              Dehradun Clock Tower and roughly 53 km from Rishikesh, which is a
              taxi ride of a little over an hour. So the place a lot of people
              picture when they think of going quiet near the Himalayas is a
              short drive from the ashram they searched for, just not the ashram
              itself.
            </p>
            <p>
              Dhamma Salila runs the same format every center does: a fixed
              10-day residential course, no fee, funded entirely by donations
              from people who have already sat one. The center's own page lists
              the live calendar and how to apply. I will not reproduce the
              schedule mechanics here because they change; the authoritative
              source is{" "}
              <a
                href="https://salila.dhamma.org/"
                className="text-teal-700 underline underline-offset-2"
                rel="nofollow noopener"
              >
                salila.dhamma.org
              </a>
              , and the full directory of centers is on{" "}
              <a
                href="https://www.dhamma.org/"
                className="text-teal-700 underline underline-offset-2"
                rel="nofollow noopener"
              >
                dhamma.org
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-bold text-zinc-900">
            Which one do you actually want
          </h2>
          <div className="mt-5 space-y-5 text-lg text-zinc-700 leading-relaxed">
            <p>
              I have sat six courses now, across three centers, and I still love
              a good aarti. The mistake is not choosing one over the other; it
              is expecting silence where there is celebration, or expecting
              freedom to roam where there is commitment. Parmarth Niketan gives
              you the river, the chanting, the yoga, and the run of Rishikesh.
              You leave full of the place. A Vipassana course takes everything
              external away on purpose, so that the only thing left to look at
              is whatever your own mind does when there is nothing else to do.
              You leave full of something quieter.
            </p>
            <p>
              If you are weighing a first course, the practical questions are
              less about which is better and more about what you can give it:
              ten uninterrupted days, no phone, no exit. Plenty of people visit
              the ashram first, sit with the idea for a while, and book the
              course later. That order is completely fine. Not a teacher here,
              just a fellow practitioner who got the two confused once too and
              wishes someone had drawn the line clearly.
            </p>
          </div>
        </section>

        <div className="mt-14">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Trying to choose between a yoga ashram and a silent course?"
            description="Book a short call and talk it through with someone who has sat six courses, no sales pitch, just a fellow meditator."
          />
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">
            Common questions
          </h2>
          <FaqSection items={faqs} />
        </section>

        <div className="mt-16">
          <RelatedPostsGrid
            title="Keep reading"
            subtitle="If you came here looking for the silent course"
            posts={[
              {
                title: "Vipassana in Dehradun: Dhamma Salila explained",
                href: "/t/vipassana-dehradun",
                tag: "Nearest center",
                excerpt:
                  "Location, cost, the 2026 calendar, and how to apply to the Goenka center closest to Rishikesh.",
              },
              {
                title: "Vipassana in Igatpuri: the tradition's flagship",
                href: "/t/vipassana-igatpuri",
                tag: "Centers",
                excerpt:
                  "Dhamma Giri, the largest Vipassana center in the world, and what it is like to sit there.",
              },
              {
                title: "Free Vipassana meditation centres near you",
                href: "/t/free-vipassana-meditation-centre-near-me",
                tag: "Cost",
                excerpt:
                  "How the donation model works and how to spot a genuinely free, tradition-aligned course.",
              },
            ]}
          />
        </div>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Curious about an actual 10-day course? Talk to a meditator who has sat six."
      />
    </article>
  );
}
