import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  GlowCard,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhammathali-vipassana-centre-photos";
const PUBLISHED = "2026-06-20";
const MODIFIED = "2026-06-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const OFFICIAL_PHOTOS = "https://thali.dhamma.org/photos/";
const OFFICIAL_HOME = "https://thali.dhamma.org/";
const OFFICIAL_ABOUT = "https://thali.dhamma.org/about/";
const OFFICIAL_CONTACT = "https://thali.dhamma.org/contact/";
const OFFICIAL_INSTAGRAM = "https://www.instagram.com/dhammathali/";
const COURSE_SCHEDULE = "https://www.dhamma.org/en/schedules/schthali";

export const metadata: Metadata = {
  title:
    "Dhammathali Vipassana Centre Photos: Where the Real Jaipur Images Live",
  description:
    "Looking for photos of the Dhammathali (Dhamma Thali) Vipassana centre in Jaipur? The centre's own gallery at thali.dhamma.org/photos holds well over 100 current photographs, far more than the handful on directory listings. This page tells you exactly where each authentic image is and decodes what you are seeing: a three-storied octagonal pagoda of 200 cells that blends Burmese and Rajasthani architecture, on 1.6 hectares, the largest centre in this tradition after Dhamma Giri. Verified 2026-06-20.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhammathali Vipassana Centre Photos: Where the Real Jaipur Images Live",
    description:
      "The official gallery (thali.dhamma.org/photos) carries 100+ current photos of Dhamma Thali, Jaipur. Here is where each authentic image lives and what the pagoda, halls and grounds actually are. Verified 2026-06-20.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to find real Dhamma Thali centre photos (Jaipur)",
    description:
      "Official gallery at thali.dhamma.org/photos has 100+ images. Three-storied octagonal pagoda, 200 cells, Burmese-Rajasthani blend, 1.6 hectares, est. 1977. What each photo shows.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Where can I see official photos of the Dhammathali Vipassana centre?",
    a: "The largest and most current set of photos lives on the centre's own website at thali.dhamma.org/photos. It is a proper gallery, well over a hundred images, not a handful: the octagonal pagoda from several angles, the Dhamma halls, the registration office and guest house, the residential rooms, walking paths, the gardens, and seasonal shots of flowers, peacocks on the grounds and sunsets over the hills. Because the centre publishes these itself, they show the campus as it stands now. The centre also runs a public Instagram account at instagram.com/dhammathali. Treat directory and map listings as supplementary; they tend to carry only a few uncaptioned snapshots.",
  },
  {
    q: "Why does the Dhamma Thali pagoda look different from other centres?",
    a: "The centre describes its pagoda as a graceful blend of Burmese and Rajasthani architecture. That is a real and unusual mix: the stepped, gilded silhouette of a Burmese pagoda married to the sandstone vocabulary of Rajasthan. It is a three-storied octagonal structure holding 200 individual cells for solitary meditation. So when a photo of the Dhamma Thali pagoda looks a little different from, say, the cylindrical pagoda at Dhamma Giri, that is not your imagination. The building was deliberately styled to sit in its Rajasthani setting while echoing the tradition's Burmese roots.",
  },
  {
    q: "How big is the centre, and how many people does it hold?",
    a: "The centre publishes that it spreads over 1.6 hectares with two large and two mini Dhamma halls, and can accommodate around 200 students comfortably in solitary rooms with attached bathrooms. The pagoda adds 200 cells for individual practice. By the centre's own account it is, next to Dhamma Giri in Igatpuri, the largest centre in this tradition and among the oldest, established in 1977. Most galleries online never give you that scale, which is why a single courtyard photo can feel like just another building.",
  },
  {
    q: "Where exactly is Dhamma Thali, and how do I get there?",
    a: "The centre is on the outskirts of Jaipur, Rajasthan, about half a kilometre before the well-known Galta Ji temple, via Sisodiya Rani Baug, Ghat ke Balaji, Jaipur 302027. The hills around it are part of why the photos look so green and quiet despite being close to the city. For precise directions, addresses and phone numbers, use the centre's contact page rather than a third-party listing, since map pins for it are sometimes placed loosely.",
  },
  {
    q: "Is the pagoda or the grounds open to visit, or just to photograph?",
    a: "This is a working meditation centre, not a tourist site or heritage walk. The pagoda cells are used by students sitting a course for private practice. You do not wander the grounds as a sightseer. If the photos make you want to actually be there, the route is to apply for and sit a course through the official schedule. For anything about visiting, dates or eligibility, the centre's own site and dhamma.org are the right sources. I am a fellow practitioner sharing what is publicly documented, not a teacher.",
  },
  {
    q: "Can I reuse the photos from the centre's gallery?",
    a: "Those images belong to the centre and the trust that runs it (Vipassana Samiti / the wider organisation), so do not assume they are free to republish. Viewing them on thali.dhamma.org is fine. If you want to use an image somewhere, ask the centre directly through the contact details on their site rather than copying it.",
  },
  {
    q: "Is Dhammathali the same place as Dhamma Thali or the Jaipur Vipassana centre?",
    a: "Yes. Dhammathali, Dhamma Thali, and the Jaipur Vipassana centre all refer to the same place: Dhamma Thali Vipassana Meditation Centre in Jaipur, Rajasthan. The single-word spelling Dhammathali is just how many people type it. Note that Jaipur now has a second centre nearby, Dhamma Nilaya in Jamdoli, so if a listing's photos look unfamiliar, check whether it is actually Dhamma Thali or the newer Nilaya site.",
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
              label: "Centres",
              href: "https://vipassana.cool/t/vipassana-meditation-centre",
            },
            { label: "Dhammathali Photos" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            The Jaipur centre, in pictures
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dhammathali Vipassana centre photos: where the real Jaipur images
            live
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search for photos of the Dhammathali (Dhamma Thali) centre and you
            mostly land on map pins with five uncaptioned snapshots. The actual
            gallery is far larger, and far more interesting, than that. Here is
            where the real, current images are, and what you are actually
            looking at.
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
            Direct answer (verified 2026-06-20)
          </p>
          <p className="mt-3 text-zinc-800">
            The official, up-to-date photos of Dhamma Thali are in the
            centre&apos;s own{" "}
            <a
              href={OFFICIAL_PHOTOS}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              photo gallery at thali.dhamma.org/photos
            </a>
            , which carries well over a hundred current photographs of the
            grounds, the octagonal pagoda, the halls, the residences and the
            gardens. The centre also posts on{" "}
            <a
              href={OFFICIAL_INSTAGRAM}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram (@dhammathali)
            </a>
            . The few snapshots you find on directory and map listings are real
            but uncaptioned and partial. Everything below explains what those
            official images actually show.
          </p>
        </section>

        {/* Stat strip (NumberTicker, not MetricsRow) */}
        <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: 1977, label: "Established" },
            { value: 200, label: "Pagoda cells" },
            { value: 200, label: "Student capacity" },
            { value: 1.6, decimals: 1, label: "Hectares", suffix: " ha" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-center"
            >
              <div className="text-2xl font-bold tracking-tight text-zinc-900">
                <NumberTicker
                  value={m.value}
                  decimals={m.decimals ?? 0}
                  suffix={m.suffix ?? ""}
                />
              </div>
              <div className="mt-1 text-xs text-zinc-500">{m.label}</div>
            </div>
          ))}
        </section>
        <p className="mt-3 text-center text-xs text-zinc-500">
          Figures published by the centre at{" "}
          <a
            href={OFFICIAL_ABOUT}
            className="text-teal-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            thali.dhamma.org/about
          </a>
          , verified 2026-06-20.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The gap between what ranks and what exists
          </h2>
          <p className="mt-4 text-zinc-700">
            Most people who want to see this place type the centre&apos;s name
            into a map or a local directory and stop at whatever five photos
            load. Those listings are not wrong, they are just thin. The centre
            maintains its own gallery that is an order of magnitude larger and,
            unlike the random snapshots, is organised and kept current. The
            difference is worth spelling out before you go looking.
          </p>
          <div className="mt-6">
            <ComparisonTable
              productName="Centre's own gallery"
              competitorName="Directory / map listings"
              rows={[
                {
                  feature: "How many photos",
                  competitor: "A handful (often around five)",
                  ours: "Well over a hundred",
                },
                {
                  feature: "What they cover",
                  competitor: "An entrance, a sign, a courtyard",
                  ours:
                    "Pagoda, halls, office, guest house, rooms, gardens, wildlife",
                },
                {
                  feature: "How current",
                  competitor: "Whenever a visitor happened to upload",
                  ours: "Maintained by the centre as the campus changes",
                },
                {
                  feature: "Context",
                  competitor: "Uncaptioned, no explanation",
                  ours: "Grouped by area so you can tell what you see",
                },
                {
                  feature: "Where",
                  competitor: "Third-party platforms",
                  ours: "thali.dhamma.org/photos and @dhammathali",
                },
              ]}
              caveat="Directory listings are still useful for candid angles. They are a supplement to the official gallery, not a replacement for it."
            />
          </div>
        </section>

        {/* ANCHOR FACT */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The one detail every snapshot misses: the pagoda
          </h2>
          <p className="mt-4 text-zinc-700">
            If you only glance at a thumbnail, the Dhamma Thali pagoda reads as
            just another white tower. It is not. The centre itself describes the
            building as a graceful blend of Burmese and Rajasthani architecture,
            and once you know that, you cannot unsee it in the photos.
          </p>
          <div className="mt-6">
            <GlowCard className="rounded-2xl border border-teal-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                What you are looking at
              </p>
              <p className="mt-3 text-lg font-medium text-zinc-900">
                A three-storied octagonal pagoda of 200 individual cells, styled
                as &ldquo;a graceful blend of Burmese and Rajasthani
                architecture.&rdquo;
              </p>
              <p className="mt-3 text-sm text-zinc-600">
                The stepped, gilded silhouette comes from the Burmese pagoda
                tradition this lineage traces back to; the sandstone palette and
                detailing belong to Jaipur. The octagonal footprint and the
                three storeys are why the structure photographs so differently
                from the cylindrical pagoda at Dhamma Giri in Igatpuri. Source:
                the centre&apos;s own About page, verified 2026-06-20.
              </p>
            </GlowCard>
          </div>
          <p className="mt-6 text-zinc-700">
            That is the part you can verify yourself: open the gallery, find the
            pagoda shots (several are taken at sunset, through the trees), and
            look for the octagonal base and the Rajasthani stone. No directory
            listing tells you any of this. It is the single most photographed,
            and most misunderstood, structure on the campus.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What each part of the gallery shows
          </h2>
          <p className="mt-4 text-zinc-700">
            The centre&apos;s gallery is effectively sorted by area. Here is a
            plain-language map of what you are seeing in each cluster, so you can
            navigate it instead of scrolling blindly.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                The pagoda
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                The octagonal, three-storied structure of 200 cells. Shot from
                the front, at sunset, and framed through the surrounding trees.
                The most distinctive thing in any photo of the centre.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                The Dhamma halls
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Two large and two mini halls where group sittings happen. These
                are the rooms that hold the roughly 200 students a full course
                can take.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                Rooms, office and guest house
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                The practical campus: solitary residential rooms with attached
                bathrooms, the registration office, and the guest house. The
                unglamorous part most galleries skip entirely.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                Grounds, gardens and wildlife
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Walking paths, dense greenery, blooming flowers, peacocks on the
                grounds, and sunsets over the Jaipur hills. This is the bulk of
                the gallery and the reason the place looks so quiet.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14">
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
                gallery at thali.dhamma.org/photos
              </a>
              . The single best source, because the centre updates it as the
              campus changes.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Recent and seasonal shots:
              </span>{" "}
              the centre&apos;s{" "}
              <a
                href={OFFICIAL_INSTAGRAM}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram, @dhammathali
              </a>
              , for the freshest images and the occasional video.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Context, facts and the address:
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
              and its{" "}
              <a
                href={OFFICIAL_CONTACT}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact page
              </a>
              , which carry the location, directions and the founding details.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Candid visitor angles:
              </span>{" "}
              map and directory listings collect a few user-uploaded photos.
              Useful for unposed angles, but uncaptioned and sometimes years out
              of date.
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
          heading="Looking at the photos because you are thinking about going?"
          description="If browsing Dhamma Thali is really you weighing a first 10-day course, book a short call and I will share what helped me, peer to peer, before you apply through the official schedule."
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
                title: "Dhamma Khetta photos: the first centre",
                href: "https://vipassana.cool/t/dhamma-khetta-vipassana-international-meditation-centre-photos",
                excerpt:
                  "Where to see the very first Vipassana centre in this tradition, and what each image shows.",
                tag: "Centres",
              },
              {
                title: "What a Vipassana centre actually is",
                href: "https://vipassana.cool/t/vipassana-meditation-centre",
                excerpt:
                  "How the centres are organised, funded by donation, and what to expect on the grounds.",
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
          centre, not a teacher and not affiliated with Dhamma Thali. For
          anything about visiting, applying, or the practice itself, the
          centre&apos;s own site,{" "}
          <a
            href={COURSE_SCHEDULE}
            className="text-teal-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            the official course schedule
          </a>
          , and dhamma.org are the authoritative sources.
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
                "Dhammathali Vipassana Centre Photos: Where the Real Jaipur Images Live",
              description:
                "Where the official photos of the Dhammathali (Dhamma Thali) Vipassana centre in Jaipur live, and what each image shows. A three-storied octagonal pagoda of 200 cells blending Burmese and Rajasthani architecture, 1.6 hectares, established 1977.",
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
                name: "Centres",
                url: "https://vipassana.cool/t/vipassana-meditation-centre",
              },
              { name: "Dhammathali Photos", url: PAGE_URL },
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
