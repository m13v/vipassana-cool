import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  BeforeAfter,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhamma-setu-vipassana-meditation-center-photos";
const PUBLISHED = "2026-06-25";
const MODIFIED = "2026-06-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const OFFICIAL_PHOTOS = "https://setu.dhamma.org/Photo%20Gallery.htm";
const OFFICIAL_HOME = "https://setu.dhamma.org/";
const OFFICIAL_ABOUT = "https://setu.dhamma.org/About%20Dhamma%20Setu.htm";
const OFFICIAL_FACILITIES =
  "https://setu.dhamma.org/Facilities%20Available.htm";
const OFFICIAL_DIRECTIONS = "https://setu.dhamma.org/How%20to%20Get%20There.htm";
const OFFICIAL_CONTACT = "https://setu.dhamma.org/Contact%20Us.htm";
const COURSE_SCHEDULE = "https://www.dhamma.org/en/schedules/schsetu";

export const metadata: Metadata = {
  title:
    "Dhamma Setu Vipassana Meditation Center Photos: Where the Real Chennai Images Are",
  description:
    "Looking for photos of Dhamma Setu, the Vipassana centre near Chennai? The official gallery at setu.dhamma.org/Photo Gallery.htm is the real source. This page tells you where it is and decodes what you are seeing: an 18-acre former rice paddy inaugurated by Goenkaji in September 2000, with a three-tiered 150-cell pagoda and four Dhamma halls, set amid paddy fields about 10 km from Chennai Airport. Verified 2026-06-25.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Setu Vipassana Meditation Center Photos: Where the Real Chennai Images Are",
    description:
      "The official Dhamma Setu gallery (setu.dhamma.org/Photo Gallery.htm) is where the real photos live. Here is where to find it and what the pagoda, halls and paddy-field grounds actually are. Verified 2026-06-25.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to find real Dhamma Setu centre photos (Chennai)",
    description:
      "Official gallery at setu.dhamma.org/Photo Gallery.htm. An 18-acre former rice paddy, three-tiered 150-cell pagoda, four Dhamma halls, established Sept 2000. What each photo shows.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Where can I see official photos of the Dhamma Setu Vipassana centre?",
    a: "The centre publishes its own Photo Gallery on its website at setu.dhamma.org/Photo Gallery.htm. That is the authoritative source, because the centre maintains it: the pagoda, the Dhamma halls, the residences, the dining hall, and the grounds. The snapshots you see on map pins and local directories like Justdial or Balancegurus are real but partial, usually a handful of uncaptioned images of an entrance or a courtyard. They are a supplement, not a replacement for the centre's own gallery.",
  },
  {
    q: "What does Dhamma Setu actually look like in photos?",
    a: "Flatter and greener than people expect. The centre sits amid paddy fields and open farmland on the outskirts of Chennai, about 10 km from the airport, on 18 square acres that were used for rice cultivation before the land was bought from 1991 onwards. So instead of the hill-station backdrop people picture for a meditation centre, the authentic photos show level South Indian farmland, the white three-tiered pagoda rising out of it, and low residential blocks and halls around open ground. That paddy-field setting is the single most recognisable thing about any real photo of the place.",
  },
  {
    q: "How big is Dhamma Setu and what is on the campus?",
    a: "The centre spans 18 square acres. Its own Facilities page describes a three-tiered pagoda with 150 cells for meditating in seclusion, a main Dhamma Hall that holds about 120 meditators, two further Dhamma Halls of 75 each, a mini Dhamma Hall seating 30, residential rooms for at least 96 male and 48 female meditators on double occupancy, and a large dining hall that can take over 200. Most online galleries never give you that scale, which is why a single building photo can feel like just another courtyard.",
  },
  {
    q: "When was Dhamma Setu established?",
    a: "The centre was formally established and inaugurated by S.N. Goenka in September 2000, after the land (previously used for rice cultivation) was purchased from 1991 onwards and prepared. By the centre's own account it has been conducting regular 10-day courses, including in English, Hindi and Tamil. The name Dhamma Setu means 'Bridge of Dhamma'.",
  },
  {
    q: "Where exactly is Dhamma Setu and how do I get there?",
    a: "It is on the outskirts of Chennai (formerly Madras) in Tamil Nadu, about 10 km from Chennai Airport, surrounded by paddy fields and farmland. For exact directions, the current address and phone numbers, use the centre's own How to Get There and Contact pages rather than a third-party map pin, since listings sometimes place the location loosely. Note that some directory listings tag it under Tirumudivakkam, Thirumudivakkam or Padi, which can confuse the map.",
  },
  {
    q: "Can I just visit Dhamma Setu to photograph the pagoda and grounds?",
    a: "This is a working meditation centre, not a tourist or heritage site. The pagoda cells and grounds are used by students sitting a course, in silence, for private practice. You do not wander in as a sightseer. If the photos make you want to actually be there, the route is to apply for and sit a course through the official schedule. I am a fellow practitioner sharing what is publicly documented about the centre, not a teacher, and for anything about visiting or the practice itself the centre's site and dhamma.org are the right sources.",
  },
  {
    q: "Are the photos on the centre's gallery free to reuse?",
    a: "No, do not assume that. Those images belong to the centre and the trust that runs it. Viewing them on setu.dhamma.org is fine. If you want to republish an image somewhere, ask the centre directly through the contact details on their site rather than copying it.",
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
            { label: "Dhamma Setu Photos" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            The Chennai centre, in pictures
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dhamma Setu Vipassana meditation center photos: where the real
            Chennai images are
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search for photos of Dhamma Setu and you mostly land on map pins with
            five or six uncaptioned snapshots of a gate and a courtyard. The
            actual place is larger, flatter and greener than those thumbnails
            suggest. Here is where the real, current images live, and what you
            are actually looking at.
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
            Direct answer (verified 2026-06-25)
          </p>
          <p className="mt-3 text-zinc-800">
            The official, current photos of Dhamma Setu are in the centre&apos;s
            own{" "}
            <a
              href={OFFICIAL_PHOTOS}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Photo Gallery at setu.dhamma.org
            </a>
            . That is the authoritative source because the centre publishes and
            maintains it. The few snapshots you find on Justdial, Balancegurus
            and map listings are real but uncaptioned and partial. Everything
            below explains what the official images actually show and why the
            place looks the way it does.
          </p>
        </section>

        <ProofBanner
          metric="18 acres"
          quote="Dhamma Setu sits on 18 square acres of land, used for rice cultivation before it was bought from 1991 onwards and inaugurated by Goenkaji in September 2000."
          source="Source: Dhamma Setu's own About and Facilities pages, verified 2026-06-25."
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why every real photo of Dhamma Setu looks the same
          </h2>
          <p className="mt-4 text-zinc-700">
            People picture a meditation centre as something tucked into hills or
            forest. Dhamma Setu is the opposite, and that is the detail that
            makes its photos instantly recognisable once you know it. The centre
            describes itself as sitting &ldquo;amid paddy fields and open
            farmland on the outskirts of the major South Indian metropolis of
            Chennai (formerly Madras), about 10 kms from the Chennai
            Airport.&rdquo; The 18 acres it stands on were used for rice
            cultivation before the trust bought the land from 1991 onwards.
          </p>
          <p className="mt-4 text-zinc-700">
            So in any authentic image you get flat, level ground, wide South
            Indian sky, green farmland at the edges, and the white three-tiered
            pagoda rising out of it. There is no dramatic mountain backdrop,
            because there is no mountain. If a photo claiming to be Dhamma Setu
            shows steep hills or pine forest, it is almost certainly a different
            centre. The paddy-field flatness is the visual signature.
          </p>
          <p className="mt-4 text-zinc-700">
            The centre was formally established when S.N. Goenka inaugurated it
            in September 2000. The name, Dhamma Setu, means &ldquo;Bridge of
            Dhamma.&rdquo; Those two facts, the founding date and the meaning,
            almost never appear next to the directory snapshots, which is part of
            why the photos feel context-free when you find them scattered across
            map listings.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The gap between what you find and what exists
          </h2>
          <p className="mt-4 text-zinc-700">
            Most people who want to see this place type the name into a map or a
            local directory and stop at whatever handful of photos load. Those
            listings are not wrong, they are just thin and uncaptioned. Toggle
            between the two below to see the difference before you go looking.
          </p>
          <BeforeAfter
            title="Where the photos come from"
            before={{
              label: "Directory snapshots",
              content:
                "A few user-uploaded images on Justdial, Balancegurus and map pins. Useful for unposed angles, but partial and stripped of context.",
              highlights: [
                "Often only five or six photos",
                "Usually a gate, a sign, a courtyard",
                "No captions, no scale, no setting",
                "Sometimes tagged to the wrong area (Padi, Tirumudivakkam)",
                "Whenever a visitor happened to upload",
              ],
            }}
            after={{
              label: "Centre's own gallery",
              content:
                "The Photo Gallery the centre publishes on setu.dhamma.org, kept current by the people who run the place.",
              highlights: [
                "The pagoda, halls, residences, dining hall and grounds",
                "Shows the real 18-acre, paddy-field scale",
                "Published and maintained by the centre itself",
                "The single best source for what it looks like now",
                "Paired with About, Facilities and Contact pages for context",
              ],
            }}
          />
        </section>

        {/* ANCHOR FACT */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What the campus actually contains
          </h2>
          <p className="mt-4 text-zinc-700">
            A single courtyard photo hides how much is on these 18 acres. The
            centre&apos;s own Facilities page lays it out, and once you have the
            numbers, the gallery stops looking like a few random buildings and
            starts reading as a working campus. These figures are quoted from{" "}
            <a
              href={OFFICIAL_FACILITIES}
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              setu.dhamma.org/Facilities Available
            </a>
            , verified 2026-06-25.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                The three-tiered pagoda
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                A three-tiered pagoda with 150 cells for meditating in
                seclusion. The tallest structure on the grounds and the one that
                makes a photo unmistakably Dhamma Setu, rising white out of flat
                farmland.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                Four Dhamma halls
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                A main Dhamma Hall for about 120 meditators, two further halls of
                75 each, and a mini hall seating 30. The rooms where group
                sittings happen during a course.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                Residences
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Rooms for at least 96 male and 48 female meditators on
                double-occupancy. The practical, unglamorous accommodation that
                directory snapshots almost always skip.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                Dining and grounds
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                A large dining hall that can take over 200, a kitchen serving
                vegetarian food, and the open farmland setting that gives every
                photo its flat green horizon.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Capacity figures change as a centre grows, so treat these as the
            scale the centre itself documents rather than a fixed count. The
            current numbers always live on the centre&apos;s own site.
          </p>
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
                Photo Gallery on setu.dhamma.org
              </a>
              . The single best source, because the centre keeps it current.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Scale, history and the meaning:
              </span>{" "}
              the{" "}
              <a
                href={OFFICIAL_ABOUT}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Dhamma Setu
              </a>{" "}
              and{" "}
              <a
                href={OFFICIAL_FACILITIES}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facilities
              </a>{" "}
              pages, which give the 18-acre size, the founding, and what each
              building is.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                The address and directions:
              </span>{" "}
              the centre&apos;s{" "}
              <a
                href={OFFICIAL_DIRECTIONS}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Get There
              </a>{" "}
              and{" "}
              <a
                href={OFFICIAL_CONTACT}
                className="text-teal-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>{" "}
              pages, rather than a third-party map pin that may be placed
              loosely.
            </li>
            <li>
              <span className="font-semibold text-zinc-900">
                Candid visitor angles:
              </span>{" "}
              Justdial, Balancegurus and map listings collect a few
              user-uploaded photos. Useful for unposed angles, but uncaptioned
              and sometimes years out of date.
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
          description="If browsing Dhamma Setu is really you weighing a first 10-day course, book a short call and I will share what helped me, peer to peer, before you apply through the official schedule."
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
                title: "Vipassana in Chennai",
                href: "https://vipassana.cool/t/vipassana-meditation-chennai",
                excerpt:
                  "What sitting a course in and around Chennai involves, from a fellow student's view.",
                tag: "Centres",
              },
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
            ]}
          />
        </section>

        <p className="mt-12 text-xs text-zinc-500">
          I am a fellow practitioner sharing publicly documented facts about the
          centre, not a teacher and not affiliated with Dhamma Setu. For anything
          about visiting, applying, or the practice itself, the centre&apos;s own
          site,{" "}
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
                "Dhamma Setu Vipassana Meditation Center Photos: Where the Real Chennai Images Are",
              description:
                "Where the official photos of the Dhamma Setu Vipassana centre near Chennai live, and what each image shows. An 18-acre former rice paddy inaugurated by Goenkaji in September 2000, with a three-tiered 150-cell pagoda and four Dhamma halls, set amid paddy fields about 10 km from Chennai Airport.",
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
              { name: "Dhamma Setu Photos", url: PAGE_URL },
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
