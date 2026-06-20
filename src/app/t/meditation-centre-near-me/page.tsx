import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  FlowDiagram,
  Marquee,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/meditation-centre-near-me";
const PUBLISHED = "2026-06-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const DIRECTORY_URL = "https://www.dhamma.org/en/locations/directory";
const COURSE_SEARCH_URL = "https://www.dhamma.org/en-US/courses/search";

export const metadata: Metadata = {
  title: "Meditation Centre Near Me: How to Find the Nearest Vipassana Centre",
  description:
    "Searching 'meditation centre near me' returns drop-in studios and yoga listings. A Vipassana centre is a different category: residential, donation-based, no drop-in. Here is how to find the one nearest you using the official dhamma.org location directory and its Closest Locations tool. Verified 2026-06-20. Notes from six courses across three California centres.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Meditation Centre Near Me: finding the nearest Vipassana centre",
    description:
      "Why a Vipassana centre does not behave like a corner meditation studio, and the official tool that actually shows you the nearest one.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meditation centre near me: the Vipassana version of that question",
    description:
      "The official dhamma.org Closest Locations tool, 200+ centres in 60+ countries, and why the nearest one might be hours away.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Meditation Centre Near Me" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Meditation Centre Near Me", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "Where do I find the meditation centre nearest to me?",
    a: "For Vipassana in the S. N. Goenka tradition, the authoritative source is the official location directory at dhamma.org/en/locations/directory. It has a Closest Locations option that uses your browser location to list the nearest centres, and a Worldwide Directory you can browse by region and country. There are 200+ centres across 60+ countries.",
  },
  {
    q: "Why does nothing show up when I search Google Maps for a Vipassana centre near me?",
    a: "Vipassana centres are residential course sites, not drop-in studios with daily class times, so they barely register the way a yoga studio does on a maps search. Many are in rural areas an hour or more outside a city. The directory at dhamma.org is the reliable index because it lists every official centre and non-centre course venue, not just the ones with a strong local listing.",
  },
  {
    q: "Is the nearest centre likely to be walking distance?",
    a: "Usually not. Because the format is a 10-day residential course rather than a daily sit, centres are spread thin and often sit on quiet land outside town. In a dense region you might have one within an hour; in others the nearest could be a multi-hour drive or a flight. The distance matters less than you would think, since you stay on site for the whole course.",
  },
  {
    q: "How much does a course at a Vipassana centre cost?",
    a: "There is no fee for the course, food, or lodging. Centres run entirely on donations, and only a student who has completed a course may donate, so the centre near you is funded by people who sat there before you. This is one of the clearest ways a Vipassana centre differs from a paid meditation studio.",
  },
  {
    q: "Can I just drop in for an hour at a Vipassana centre near me?",
    a: "No. The entry point is a full 10-day residential course; there are no hourly drop-in classes for newcomers. Some centres hold one-day sittings and group sits for students who have already finished a 10-day course, but the first visit is the residential course.",
  },
  {
    q: "What is the difference between a centre and a non-centre location in the directory?",
    a: "A centre is a dedicated, purpose-built facility that runs courses year-round. A non-centre location is a course held at a rented venue, often a retreat centre or camp, on specific dates. The directory lists both, so the nearest course to you might be a non-centre location even if the nearest dedicated centre is far away.",
  },
  {
    q: "How do I see which courses are actually open near me?",
    a: "Browsing the directory shows you where centres are; the course search at dhamma.org/en-US/courses/search shows you dated courses you can apply to, filtered for new students, old students, gender, and attend-or-serve. Popular centres fill months ahead, so checking dates early matters more than picking the closest pin on the map.",
  },
];

const comparisonRows = [
  {
    feature: "What it is",
    competitor: "Drop-in studio or class slot you book by the hour or month",
    ours: "A residential site that runs full 10-day courses",
  },
  {
    feature: "How you attend",
    competitor: "Show up for a single session, leave the same day",
    ours: "Stay on site for the whole course, apply ahead of time",
  },
  {
    feature: "Cost",
    competitor: "Class fee, package, or membership",
    ours: "No fee; runs on donations from past students only",
  },
  {
    feature: "Where it sits",
    competitor: "Usually in town, easy to find on a maps search",
    ours: "Often rural and quiet, barely visible on Google Maps",
  },
  {
    feature: "How you find it",
    competitor: "Yelp, Mindbody, or a Google Maps pin",
    ours: "The official dhamma.org location directory",
  },
];

const findSteps = [
  {
    label: "Open the official directory",
    detail:
      "Go to dhamma.org/en/locations/directory. This is the single index of every official centre and non-centre course venue worldwide.",
  },
  {
    label: "Use Closest Locations",
    detail:
      "Allow browser location and pick the Closest Locations option. It orders centres by distance from where you are, so the nearest ones surface first.",
  },
  {
    label: "Browse by region if you prefer",
    detail:
      "Or open the Worldwide Directory and drill down by continent, then country. Each centre has its own subdomain page (for example manda.dhamma.org) with directions and contact details.",
  },
  {
    label: "Check dated courses, not just the map",
    detail:
      "Switch to the course search to see which dates are actually open near you. The closest centre is only useful if it has a course you can apply to in your window.",
  },
];

const regions = [
  "India",
  "United States",
  "Myanmar",
  "Thailand",
  "United Kingdom",
  "Australia",
  "Canada",
  "New Zealand",
  "Nepal",
  "Sri Lanka",
  "France",
  "Germany",
  "Japan",
  "Brazil",
  "South Africa",
  "Spain",
  "Italy",
  "Mexico",
];

const relatedPosts = [
  {
    title: "How to find and choose a Vipassana centre",
    href: "/guide/find-a-retreat",
    excerpt:
      "Dedicated centres versus rented venues, and how to pick your first course location after sitting at three of them.",
    tag: "Guide",
  },
  {
    title: "dhamma.org and its subdomain network, mapped",
    href: "/t/dhamma-org",
    excerpt:
      "What the official portal is, the per-centre subdomain pattern, and where the course search actually lives.",
    tag: "Reference",
  },
  {
    title: "Free meditation retreats: how the donation model works",
    href: "/guide/free-meditation-retreats",
    excerpt:
      "Why a 10-day course costs nothing, who funds it, and what that means for the centre near you.",
    tag: "Guide",
  },
];

export default function MeditationCentreNearMePage() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Meditation Centre Near Me: How to Find the Nearest Vipassana Centre",
              description:
                "How to find the Vipassana meditation centre nearest you using the official dhamma.org location directory, and why a residential Vipassana centre is a different category from a drop-in studio.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
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
          __html: JSON.stringify(faqPageSchema(faqs, `${PAGE_URL}#faq`)),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Finding a centre
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Meditation centre near me
          </h1>
          <p className="mt-5 text-lg text-zinc-500">
            If you typed that into Google hoping for a Vipassana centre, the map
            results will mislead you. A Vipassana centre is not a corner studio
            you drop into for an hour. It is a residential site that runs free,
            donation-based 10-day courses, and the honest way to find the one
            nearest you is not a maps pin.
          </p>
          <div className="mt-6">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="7 min read"
            />
          </div>
        </header>

        {/* Direct answer */}
        <div className="mt-10 rounded-xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified June 20, 2026)
          </p>
          <p className="mt-3 text-zinc-800">
            To find the Vipassana meditation centre nearest you, open the
            official location directory at{" "}
            <a
              href={DIRECTORY_URL}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org/en/locations/directory
            </a>
            . Use its <strong>Closest Locations</strong> option to list centres
            ordered by distance from you, or browse the Worldwide Directory by
            region. There are 200+ centres across 60+ countries, all running the
            same free, donation-based residential courses. Then check the{" "}
            <a
              href={COURSE_SEARCH_URL}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              course search
            </a>{" "}
            to see which dates near you are actually open.
          </p>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            Why the maps search lets you down
          </h2>
          <p className="mt-4 text-zinc-700">
            Search &quot;meditation centre near me&quot; and you get Yelp lists,
            Mindbody studios, and a scatter of Google Maps pins. Almost all of
            them are paid drop-in places: yoga studios with a meditation slot, a
            membership wellness space, a teacher renting a room by the hour.
            Those are real and fine, but if what you actually want is Vipassana
            in the S. N. Goenka tradition, none of those pins is it.
          </p>
          <p className="mt-4 text-zinc-700">
            A Vipassana centre behaves nothing like a studio. There is no daily
            class schedule to walk into, no membership, no fee. The way in is a
            10-day residential course you apply to in advance and stay on site
            for. Because the format is residential rather than hourly, centres
            are spread thin and often sit on quiet rural land an hour or more
            outside a city. That is exactly the profile a maps search is worst
            at surfacing.
          </p>
        </section>

        <section className="mt-12">
          <ComparisonTable
            heading="Drop-in studio vs. a Vipassana centre"
            intro="The two things a 'meditation centre near me' search blurs together."
            productName="Vipassana centre"
            competitorName="Drop-in studio"
            rows={comparisonRows}
            caveat="Not teaching, not advice, just the practical shape of the two. There is nothing wrong with a local studio; it is simply a different thing."
          />
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            The tool that actually answers &quot;near me&quot;
          </h2>
          <p className="mt-4 text-zinc-700">
            The reason this question has a clean answer at all is that the
            tradition keeps a single official index. Every dedicated centre and
            every rented course venue is listed in one directory, and that
            directory has a feature built for exactly this search.
          </p>
          <div className="mt-8">
            <FlowDiagram
              title="Finding the nearest centre in four steps"
              steps={findSteps}
            />
          </div>
        </section>

        {/* Anchor fact */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            What the directory actually contains
          </h2>
          <p className="mt-4 text-zinc-700">
            The directory at{" "}
            <a
              href={DIRECTORY_URL}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org/en/locations/directory
            </a>{" "}
            is the load-bearing fact here, so it is worth knowing what is in it.
            As of June 2026 it lists 200+ centres across 60+ countries, split
            into two kinds: dedicated centres that run courses year-round, and
            non-centre locations where courses happen at a rented venue on set
            dates. The interface gives you a <strong>Closest Locations</strong>{" "}
            option (it asks for your browser location) and a{" "}
            <strong>Worldwide Directory</strong> you can drill through by region
            and country.
          </p>
          <p className="mt-4 text-zinc-700">
            One detail most guides skip: each centre has its own subdomain. The
            California centre I sat my first course at lives at its own
            address under dhamma.org, with its own directions, dates, and
            contact page. If you want the full map of how that subdomain network
            is laid out, I wrote it up separately in{" "}
            <Link href="/t/dhamma-org" className="font-medium text-teal-700 underline">
              the dhamma.org reference
            </Link>
            . The practical upshot for &quot;near me&quot;: once the directory
            hands you the nearest centre, its own subdomain page is where you
            get directions and the real course calendar.
          </p>

          <div className="mt-8">
            <ProofBanner
              quote="No fee for the course, food, or lodging. The nearest centre to you is funded entirely by students who sat there before you."
              source="The donation model, every centre"
              metric="$0 course fee"
            />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            Where these centres are
          </h2>
          <p className="mt-4 text-zinc-700">
            Coverage is uneven. India and Myanmar have the densest networks by
            far; the United States, Thailand, Australia, and Western Europe are
            well covered; some countries have a single centre or only non-centre
            courses. A sample of countries with official centres:
          </p>
        </section>
      </div>

      <div className="my-8">
        <Marquee pauseOnHover fade speed={40}>
          {regions.map((r) => (
            <span
              key={r}
              className="mx-3 inline-block rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700"
            >
              {r}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            What if the nearest one is far?
          </h2>
          <p className="mt-4 text-zinc-700">
            This is the common surprise. You run the search expecting something
            in your suburb and the closest result is a three-hour drive, or in
            the next state. A few things worth sitting with before that puts you
            off.
          </p>
          <p className="mt-4 text-zinc-700">
            First, distance matters less than it looks. You are not commuting
            daily; you arrive once, stay for the full course, and leave once.
            The drive is a one-time cost, not a routine. Second, a non-centre
            location can be closer than the nearest dedicated centre, since
            those courses borrow venues that move around. Check both kinds in
            the directory. Third, the technique is standardized everywhere, so
            there is no &quot;better&quot; centre to hold out for. The course you
            can actually get into, near enough to reach, on a date that fits, is
            the right one. I have sat at three different California centres and
            the course itself was the same at each.
          </p>
          <p className="mt-4 text-zinc-700">
            For how to weigh dedicated centres against rented venues, and what
            varies between locations (mostly the food, the beds, and the
            grounds, not the teaching), the{" "}
            <Link
              href="/guide/find-a-retreat"
              className="font-medium text-teal-700 underline"
            >
              find a retreat guide
            </Link>{" "}
            goes deeper than this page does.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            A note on what I am and am not saying
          </h2>
          <p className="mt-4 text-zinc-700">
            I am a fellow practitioner, not a teacher, and this page is about
            logistics, not method. It tells you how to locate a centre and what
            kind of place it is. For anything about how the practice actually
            works, or any question about your own sitting, the people to ask are
            an authorized assistant teacher at a course and the official
            material at{" "}
            <a
              href="https://www.dhamma.org"
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>
            . This site is a resource for finding your way to a centre and
            staying consistent after, not a substitute for either.
          </p>
        </section>

        <div className="mt-14">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Found a centre but stuck on keeping a daily practice after?"
            description="If you have sat a course or are about to, I can talk through what consistency actually looks like and how practice-buddy matching works."
          />
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            Common questions
          </h2>
          <div className="mt-6">
            <FaqSection items={faqs} heading="" />
          </div>
        </section>

        <section className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={relatedPosts}
          />
        </section>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course, or about to? Talk daily practice and buddy matching."
      />
    </article>
  );
}
