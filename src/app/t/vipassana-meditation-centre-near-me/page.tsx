import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  IntegrationsGrid,
  RelatedPostsGrid,
  BackgroundGrid,
  NumberTicker,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type IntegrationItem,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-centre-near-me";
const PUBLISHED = "2026-06-16";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana meditation centre near me: how to actually find one (and why 'near' is misleading)",
  description:
    "Searching 'vipassana meditation centre near me' returns yoga studios and drop-in classes, not authorized S.N. Goenka centres. The real way to locate one: the dhamma.org directory's Closest Locations tool and the VRI Center-Search. Verified 2026-06-16. Notes from sitting six courses at three California centres.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to find a real Vipassana centre near you",
    description:
      "Most 'meditation centre near me' results are not Goenka Vipassana centres. Here is the official locator that is, plus the distance reality nobody mentions.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana centre near me: the locator that actually works",
    description:
      "dhamma.org Closest Locations + VRI Center-Search are the real tools. Notes from six courses at three centres.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Finding a centre near you" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana centre near me", url: PAGE_URL },
];

const locatorTools: IntegrationItem[] = [
  {
    name: "dhamma.org Directory",
    initial: "D",
    description:
      "The official locator. Its Closest Locations option asks to enable location services and shows the nearest sites; otherwise it falls back to the worldwide directory grouped by continent and country.",
    href: "https://www.dhamma.org/en-US/locations/directory",
  },
  {
    name: "VRI Center-Search",
    initial: "V",
    description:
      "The Vipassana Research Institute search at vridhamma.org. Filters by country, province, and city, which is the closest thing to a structured address lookup.",
    href: "https://www.vridhamma.org/Center-Search",
  },
  {
    name: "Course Search",
    initial: "C",
    description:
      "dhamma.org/en-US/courses/search lists actual upcoming 10-day course dates worldwide, filterable by student type, attend or serve, and date. A centre near you is useless without an open date.",
    href: "https://www.dhamma.org/en-US/courses/search",
  },
  {
    name: "Per-centre subdomains",
    initial: "S",
    description:
      "Every centre runs its own site on a dhamma.org subdomain. The Bay Area non-residential centre, for example, lives at santosa.dhamma.org. The subdomain is the centre's home page.",
    href: "https://santosa.dhamma.org/",
  },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "dhamma.org and its subdomain network, mapped",
    href: "/t/dhamma-org",
    excerpt:
      "What each centre URL means, the per-centre subdomain pattern, and how vridhamma.org fits in.",
    tag: "Reference",
  },
  {
    title: "How to find and choose a Vipassana centre",
    href: "/guide/find-a-retreat",
    excerpt:
      "Dedicated centres vs rented venues, and how to pick your first course location.",
    tag: "Guide",
  },
  {
    title: "What a Vipassana retreat is",
    href: "/t/vipassana-retreat",
    excerpt:
      "Why this is a 10-day residential course, not a place you drop into for an hour.",
    tag: "Background",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Is there a Vipassana centre near me right now?",
    a: "Open the official directory at dhamma.org/en-US/locations/directory and choose Closest Locations, which asks to enable location services and then orders sites by proximity. If you decline location access it shows the worldwide directory grouped by continent and country. You can also filter by country, province, and city on the VRI Center-Search at vridhamma.org. There are more than 175 centres worldwide plus additional non-center course sites, so a result will exist, but it may not be close in the everyday sense.",
  },
  {
    q: "Why do my Google and Yelp searches show meditation places that are not Vipassana centres?",
    a: "A generic 'meditation centre near me' search indexes yoga studios, sound baths, secular mindfulness drop-ins, and reiki rooms, because those businesses optimize for local search. Authorized Goenka Vipassana centres rarely compete for that traffic. The reliable filter is the centre's web address: real centres in this tradition sit on a dhamma.org subdomain. If the listing is on a commercial booking platform with hourly drop-in classes and a price, it is almost certainly not one.",
  },
  {
    q: "Can I just visit a Vipassana centre near me for an hour?",
    a: "No. In the S.N. Goenka tradition the technique is taught only inside a 10-day residential course where you stay on site the whole time. Centres are not drop-in studios. After you have completed a course, the same centres host shorter group sittings and one-day events for old students, but the entry point is always the residential course. For anything about how the course itself works, the authoritative source is dhamma.org and an authorized assistant teacher.",
  },
  {
    q: "How far is the nearest centre likely to be?",
    a: "Further than you would expect from the phrase 'near me'. Centres are sparse: a region may have only one or two residential sites. From the San Francisco Bay Area, for instance, the nearest residential centres are a multi-hour drive into the mountains. Because you stay on site for ten days, the drive is a one-time trip, not a commute, so distance matters less than it would for a weekly class.",
  },
  {
    q: "What is the difference between dhamma.org and vridhamma.org?",
    a: "dhamma.org is the global course-and-centre portal for the Goenka tradition, with the directory, the Closest Locations tool, and the course search. vridhamma.org is the Vipassana Research Institute, which publishes research and runs the Center-Search with country, province, and city filters. For finding a centre near you, both work; the dhamma.org directory is the one with geolocation.",
  },
  {
    q: "Do all centres teach the same thing?",
    a: "The course is standardized worldwide, so the teaching you receive is the same whether the centre is in California, India, or New Zealand. What varies is the setting: some are purpose-built dedicated centres, others are courses held at rented venues. Picking the closest open date is usually a better first move than chasing a specific centre.",
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
                "Vipassana meditation centre near me: how to actually find one",
              description:
                "How to locate an authorized Vipassana centre near you using the dhamma.org Closest Locations tool and VRI Center-Search, and why most 'near me' results are not Vipassana centres.",
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
          __html: JSON.stringify(faqPageSchema(faqItems)),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Vipassana meditation centre near me
        </h1>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />

        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          I have sat six courses at three different centres in California, so
          this is the search I have run for myself and watched a lot of
          first-time students run badly. The phrase &quot;centre near me&quot;
          quietly assumes Vipassana works like a gym. It does not. Below is the
          locator that actually points at real centres, and the one detail
          about distance that the typical results page skips.
        </p>

        <BackgroundGrid pattern="dots" glow className="mt-8 rounded-2xl">
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Direct answer (verified 2026-06-16)
            </p>
            <p className="mt-3 text-base leading-relaxed text-zinc-800">
              To find a Vipassana centre near you in the S.N. Goenka tradition,
              open the official directory at{" "}
              <a
                href="https://www.dhamma.org/en-US/locations/directory"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline"
              >
                dhamma.org/en-US/locations/directory
              </a>{" "}
              and use <strong>Closest Locations</strong> (it asks you to enable
              location services), or filter by country, province, and city on
              the{" "}
              <a
                href="https://www.vridhamma.org/Center-Search"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline"
              >
                VRI Center-Search
              </a>
              . Two things to know going in: the technique is taught only as a
              10-day residential course, so the nearest centre may still be a
              multi-hour drive, and most &quot;meditation centre near me&quot;
              results on Google or Yelp are not authorized Vipassana centres.
            </p>
          </div>
        </BackgroundGrid>

        <div className="mt-6 flex items-baseline gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-5 py-4">
          <span className="text-3xl font-bold text-zinc-900">
            <NumberTicker value={175} suffix="+" />
          </span>
          <span className="text-sm leading-snug text-zinc-600">
            centres worldwide in this tradition, plus additional non-center
            course sites. Real, but sparse, which is the whole reason
            &quot;near&quot; is the wrong mental model.
          </span>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            What &quot;near me&quot; actually returns
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Type the phrase into a maps or reviews app and the algorithm does
            its job: it finds local businesses that have optimized for local
            search. The trouble is that authorized Goenka Vipassana centres are
            not local businesses. They do not advertise, they do not sell
            hourly classes, and they almost never appear in a &quot;top 10
            meditation near you&quot; list. So the results are full of things
            that are genuinely meditation-adjacent but are not what someone
            looking for a 10-day Vipassana course wants.
          </p>

          <div className="mt-6">
            <BeforeAfter
              title="The same search, two very different things"
              before={{
                label: "What the maps result is",
                content:
                  "A local-business listing optimized for foot traffic and recurring revenue.",
                highlights: [
                  "Yoga studios and sound-bath rooms",
                  "Secular mindfulness drop-ins, booked by the hour",
                  "A price, a schedule of weekly classes, a Book Now button",
                  "Listed on commercial booking platforms, not dhamma.org",
                ],
              }}
              after={{
                label: "What you are looking for",
                content:
                  "An authorized centre in the S.N. Goenka tradition that runs 10-day residential courses.",
                highlights: [
                  "Web address sits on a dhamma.org subdomain",
                  "No price for the course itself; it runs on donation",
                  "Entry point is a residential course, not a drop-in",
                  "Found through the dhamma.org directory or VRI search",
                ],
              }}
            />
          </div>

          <p className="mt-6 text-zinc-700 leading-relaxed">
            The single fastest filter is the web address. If the listing you are
            looking at lives on a commercial platform and quotes you an hourly
            rate, it is not a Vipassana centre in this tradition. If it lives on
            a <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">dhamma.org</code>{" "}
            subdomain, it is. I cover that subdomain pattern in detail in the{" "}
            <Link href="/t/dhamma-org" className="text-teal-600 underline">
              dhamma.org reference
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The locators that actually point at centres
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            There is no single Vipassana app that drops a pin on the centre
            nearest your phone the way a food-delivery app finds restaurants.
            Instead there are a few official tools, and they overlap. Here is
            what each one is for.
          </p>
          <div className="mt-6">
            <IntegrationsGrid items={locatorTools} columns={4} />
          </div>
          <p className="mt-6 text-zinc-700 leading-relaxed">
            In practice I start with the course search rather than the
            directory. A centre that is forty minutes closer but has no open
            date for three months is not actually nearer in any way that
            matters. The course search shows real dates first, and you work back
            from there to a location.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The distance reality nobody puts in the result snippet
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            When I first searched, I had the same instinct everyone has: there
            must be one a short drive away. There was not. Centres are spread
            thin on purpose. They tend to be in quiet, rural land away from
            cities, because ten days of silence does not pair well with traffic
            noise. From the Bay Area, the residential centres I have sat at are
            a few hours into the mountains, not across town.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            This sounds like bad news and is actually the opposite. Because you
            stay on site for the entire course, the drive is a single round
            trip, not a daily commute. A centre three hours away costs you two
            drives total across ten days. So the honest reframe is: stop looking
            for the closest centre and start looking for the soonest open date
            you can reach. The two California centres I keep returning to are
            Dhamma Manda in the Cobb mountain area and Dhamma Mahavana near North
            Fork, plus a Bay Area site where courses run on rented camp grounds.
            None of them is &quot;near&quot; in the way the search implies, and
            it has never mattered.
          </p>
          <p className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm italic text-zinc-600">
            I am not a teacher and do not represent the tradition. These are my
            own notes from sitting and serving courses. For anything about how
            the practice works, or any operational question about a specific
            course, the authoritative sources are{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day course.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            A sane order of operations
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            If I were starting over, I would ignore the maps app entirely and do
            this. Open the{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              course search
            </a>{" "}
            and look at dates first. Note which centres have something open in
            the window you can take off work. Then pull those centres up in the{" "}
            <a
              href="https://www.dhamma.org/en-US/locations/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              directory
            </a>{" "}
            to see how far each one really is and what the setting is like.
            Popular centres fill months ahead, so the constraint is almost never
            distance; it is availability. The{" "}
            <Link href="/guide/find-a-retreat" className="text-teal-600 underline">
              find-a-retreat guide
            </Link>{" "}
            goes deeper on choosing between two centres once you have a short
            list.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Found a centre but stuck on the daily-practice part?"
          description="If you want a peer to compare notes with on building a sit after a course, book a quick call and I will point you at the practice-buddy matching."
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Questions people actually ask
          </h2>
          <div className="mt-4">
            <FaqSection items={faqItems} />
          </div>
        </section>

        <div className="mt-12">
          <RelatedPostsGrid
            title="Keep reading"
            posts={relatedPosts}
          />
        </div>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course or about to? Compare notes on daily practice."
      />
    </article>
  );
}
