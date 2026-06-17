import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhamma-khetta-vipassana-international-meditation-centre-photos";
const PUBLISHED = "2026-06-17";
const MODIFIED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const OFFICIAL_PHOTOS = "https://www.khetta.dhamma.org/center.html";
const OFFICIAL_HOME = "https://www.khetta.dhamma.org/";
const REGIONAL_PAGE = "https://rama.dhamma.org/dhamma-khetta.html";

export const metadata: Metadata = {
  title:
    "Dhamma Khetta Photos: Where to See the First Vipassana Centre (Hyderabad)",
  description:
    "Looking for photos of Dhamma Khetta Vipassana International Meditation Centre in Hyderabad? The official, current images live on the centre's own site at khetta.dhamma.org (its Center page carries around 34 photographs). This page tells you where each authentic photo lives and decodes what you are actually looking at, the first centre in this tradition, founded September 1976, now 7 acres with 200 pagoda cells. Verified from khetta.dhamma.org on 2026-06-17.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Dhamma Khetta Photos: Where to See the First Vipassana Centre",
    description:
      "The official photos of Dhamma Khetta are on the centre's own website (khetta.dhamma.org, ~34 images). Here is where each authentic photo lives and what the halls, pagoda and grounds actually are. Verified 2026-06-17.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to find real Dhamma Khetta centre photos",
    description:
      "Official images at khetta.dhamma.org (~34 photos). The first Vipassana centre in this tradition, Hyderabad, founded Sept 1976, 7 acres, 200 pagoda cells. What each photo shows.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Where can I see official photos of Dhamma Khetta?",
    a: "The most current and authentic photos are on the centre's own website at khetta.dhamma.org. Its Center page carries roughly 34 photographs grouped by area: general grounds, the entrance and office, the residential rooms, and the kitchen and dining hall. Because the centre publishes these itself, they reflect the campus as it stands now rather than a single visitor's snapshot from years ago. For additional, crowd-contributed images you can also look at the Google Maps listing for the centre, but treat those as supplementary.",
  },
  {
    q: "Why do the Dhamma Khetta photos matter more than photos of other centres?",
    a: "Dhamma Khetta was the first centre to conduct a course in this tradition, established in September 1976. The Dhamma Hall and the original 72-cell pagoda were built here in the early 1980s, before almost any other centre existed. So when you look at its photos you are effectively looking at the prototype: the hall-plus-pagoda layout that hundreds of later Goenka-tradition centres around the world went on to repeat. Most photo listings online never mention this, which is why a random gallery feels like just another building.",
  },
  {
    q: "What exactly does the campus look like in the photos?",
    a: "The centre sits on about 7 acres roughly 1 km off the main Nagarjuna Sagar road. In the images you will see three Dhamma Halls (the main one seats around 150), four smaller mini halls, and the pagoda, which now holds 200 individual cells. There are separate male and female residential blocks with a mix of single and double rooms, plus an upgraded kitchen and dining hall. The grounds are green and quiet, set back from the road. These are the things the photos document; this page is descriptive, not a guide to the practice itself.",
  },
  {
    q: "Is the pagoda in the photos open to visitors?",
    a: "The pagoda's individual cells are used by students who are sitting a course, for private practice, and are not a tourist attraction. The campus is a working meditation centre, not a heritage site you walk around. If you want to actually be there, the route is to apply for and sit a course through the official schedule. For any question about visiting, dates, or eligibility, the centre's own site (khetta.dhamma.org) and dhamma.org are the right sources.",
  },
  {
    q: "What is the full address of Dhamma Khetta in Hyderabad?",
    a: "The centre publishes its address as Dhamma Khetta, Vipassana International Meditation Centre, 12.6 km Ibrahimpatnam Road, Gurramguda Bus Stop, Hyderabad, Telangana 500070, India. It is about 34 km from the airport and roughly 20 to 22 km from the main railway stations. Note that some directory listings put it under different neighbourhood names; the address above is the one the centre itself uses.",
  },
  {
    q: "Can I use the photos from the centre's website?",
    a: "Those images belong to the centre and the organisation that runs it, so do not assume they are free to reuse. If you only want to see what the place looks like, viewing them on khetta.dhamma.org is fine. If you want to publish or reuse an image anywhere, ask the centre directly through the contact details on their site rather than copying it.",
  },
  {
    q: "How often do courses run there, in case I want to go rather than just see photos?",
    a: "Two 10-day courses typically begin each month, on the 1st and 3rd Wednesday, except when a long course of 30 or 45 days is running. There are also children's courses on certain course-closing Sundays. Dates change, so confirm and apply through the official schedule. I am a fellow practitioner sharing what is publicly documented, not a teacher; for anything about the practice itself, dhamma.org and an authorized assistant teacher are the right place.",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "https://vipassana.cool" },
            {
              label: "Guides",
              href: "https://vipassana.cool/t/vipassana-meditation-centre",
            },
            { label: "Dhamma Khetta Photos" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            The first centre, in pictures
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dhamma Khetta photos: where to actually see the first Vipassana
            centre
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            People search for photos of the Dhamma Khetta Vipassana
            International Meditation Centre in Hyderabad and land on scattered
            map pins and directory galleries with no context. Here is where the
            real, current images live, and what you are looking at when you find
            them.
          </p>
        </header>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          dateModified={MODIFIED}
          readingTime="6 min read"
        />

        {/* DIRECT ANSWER */}
        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified 2026-06-17)
          </p>
          <p className="mt-3 text-zinc-800">
            The official, up-to-date photos of Dhamma Khetta are on the
            centre&apos;s own website. Its{" "}
            <a
              href={OFFICIAL_PHOTOS}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Center page at khetta.dhamma.org
            </a>{" "}
            carries roughly 34 photographs of the grounds, the halls, the
            pagoda, the residential rooms and the dining area. For extra,
            visitor-contributed photos, the centre&apos;s Google Maps listing is
            a reasonable secondary source. Everything below explains what those
            images actually show.
          </p>
        </section>

        <section className="mt-12">
          <MetricsRow
            metrics={[
              { value: 1976, label: "Founded (first centre in this tradition)" },
              { value: 7, label: "Acres of campus today" },
              { value: 200, label: "Individual pagoda cells" },
              { value: 34, label: "Official photos on the Center page" },
            ]}
          />
          <p className="mt-3 text-center text-xs text-zinc-500">
            Figures published by the centre at khetta.dhamma.org, verified
            2026-06-17.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why these particular photos are worth more context
          </h2>
          <p className="mt-4 text-zinc-700">
            Most of the galleries you will hit are crowd-contributed: a phone
            photo of a gate, a courtyard, a sign, uploaded to a map listing or a
            local directory with no caption. They are real, but they tell you
            almost nothing. What none of them mention is the one fact that makes
            Dhamma Khetta different from every other centre you could photograph.
          </p>
          <p className="mt-4 text-zinc-700">
            Dhamma Khetta was the first centre to conduct a course in this
            tradition. The story, as the centre and the regional site tell it: in
            1975 a Hyderabad businessman named Ratilal Mehta, after sitting a
            couple of courses with S.N. Goenka in Rajasthan, invited him to teach
            on his own land. The first course there ran in September 1976. The
            spacious Dhamma Hall and the original pagoda, built for 72 students,
            went up in the early 1980s, years before most of the global network
            existed.
          </p>
          <p className="mt-4 text-zinc-700">
            So a photo of the Dhamma Khetta pagoda is not just a photo of a
            pagoda. It is a photo of the layout, a meditation hall paired with a
            pagoda of small individual cells, that hundreds of later centres on
            several continents went on to copy. Read the images that way and a
            plain courtyard becomes the original of a very widely repeated
            template.
          </p>
        </section>

        <ProofBanner
          metric="Sept 1976"
          quote="Dhamma Khetta was the first centre to conduct a course in this tradition. The Dhamma Hall and the first pagoda followed in the early 1980s."
          source="khetta.dhamma.org and rama.dhamma.org, verified 2026-06-17"
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What each set of photos shows
          </h2>
          <p className="mt-4 text-zinc-700">
            The centre&apos;s own Center page sorts its photographs by area.
            Here is a plain-language map of what you are looking at in each
            group, drawn from the descriptions the centre publishes.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                The grounds
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                About 7 acres, set roughly 1 km off the main road to Nagarjuna
                Sagar. Green, quiet, and walled off from traffic. The wide-shot
                photos give the sense of how much the campus has grown from its
                original two acres.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                The Dhamma Halls
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Three halls now, the largest seating around 150, plus four
                smaller mini halls. The big hall is the descendant of the
                original early-1980s structure.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                The pagoda
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Built first for 72 cells, expanded over the years to 200
                individual cells. The most distinctive structure in any photo of
                the centre, and the prototype later centres echoed.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                Rooms and dining
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Separate male and female residential blocks with a mix of single
                and double rooms, an upgraded kitchen, and the dining hall. The
                practical, unglamorous part most galleries skip.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Where to find each kind of photo
          </h2>
          <ul className="mt-4 space-y-4 text-zinc-700">
            <li>
              <span className="font-semibold text-zinc-900">
                Current, centre-published photos:
              </span>{" "}
              the{" "}
              <a
                href={OFFICIAL_PHOTOS}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Center page at khetta.dhamma.org
              </a>
              . This is the single best source, because the centre updates it as
              the campus changes.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Context and the centre&apos;s story:
              </span>{" "}
              the{" "}
              <a
                href={OFFICIAL_HOME}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                centre homepage
              </a>{" "}
              and the regional{" "}
              <a
                href={REGIONAL_PAGE}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dhamma Khetta page on rama.dhamma.org
              </a>
              , which cover the history and the founding.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Visitor snapshots:
              </span>{" "}
              the Google Maps listing for the centre collects user-uploaded
              photos. Useful for candid angles, but uncaptioned and sometimes
              years out of date.
            </li>
          </ul>
          <p className="mt-4 text-sm text-zinc-500">
            A note on reuse: the centre&apos;s images belong to the centre. View
            them freely, but ask before republishing any of them anywhere.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Thinking past the photos toward an actual course?"
          description="If looking at Dhamma Khetta is really you weighing whether to sit a 10-day course, book a short call and I will share what helped me, peer to peer, before you apply through the official schedule."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions
          </h2>
          <div className="mt-4">
            <FaqSection items={faqs} />
          </div>
        </section>

        <section className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: "What a Vipassana meditation centre actually is",
                href: "https://vipassana.cool/t/vipassana-meditation-centre",
                excerpt:
                  "How the centres are organised, funded by donation, and what to expect on the grounds.",
                tag: "Centres",
              },
              {
                title: "Finding a centre near you",
                href: "https://vipassana.cool/t/vipassana-meditation-centre-near-me",
                excerpt:
                  "How to locate a Goenka-tradition centre and read its schedule.",
                tag: "Centres",
              },
              {
                title: "10-day course structure",
                href: "https://vipassana.cool/t/10-day-course-structure",
                excerpt:
                  "What the days look like at a residential course, from a fellow student's view.",
                tag: "Courses",
              },
            ]}
          />
        </section>

        <p className="mt-12 text-xs text-zinc-500">
          I am a fellow practitioner sharing publicly documented facts about the
          centre, not a teacher and not affiliated with Dhamma Khetta. For
          anything about visiting, applying, or the practice itself, the centre&apos;s
          own site and dhamma.org are the authoritative sources.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Weighing a first 10-day course? Talk it through, peer to peer."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Dhamma Khetta Photos: Where to See the First Vipassana Centre (Hyderabad)",
              description:
                "Where the official photos of Dhamma Khetta Vipassana International Meditation Centre in Hyderabad live, and what each image shows. The first centre in this tradition, founded September 1976.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
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
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              {
                name: "Guides",
                url: "https://vipassana.cool/t/vipassana-meditation-centre",
              },
              { name: "Dhamma Khetta Photos", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
    </article>
  );
}
