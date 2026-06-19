import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  AnimatedChecklist,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhamma-paphulla-vipassana-meditation-research-centre-photos";
const PUBLISHED = "2026-06-19";
const MODIFIED = "2026-06-19";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const OFFICIAL_PHOTOS =
  "https://paphulla.dhamma.org/the-center/facilities-at-the-center/";
const OFFICIAL_PHOTOS_MIRROR = "https://paphulla.vridhamma.org/center-photos";
const OFFICIAL_CENTER = "https://paphulla.dhamma.org/the-center/";
const OFFICIAL_HOME = "https://paphulla.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Dhamma Paphulla Photos: Where to See the Real Bangalore Centre (Decoded)",
  description:
    "Looking for photos of Dhamma Paphulla Vipassana Meditation & Research Centre near Bangalore? The current, authentic images live on the centre's own facilities page at paphulla.dhamma.org, which publishes about a dozen captioned photos organized by area. This page tells you where each real photo lives and decodes what you are actually looking at: a 120-seat Dhamma Hall, 48 single men's rooms, 26 twin-share women's rooms, on 10 acres at Alur. Verified from paphulla.dhamma.org on 2026-06-19.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Paphulla Photos: Where the Real Centre Images Live, Decoded",
    description:
      "The official, current photos of Dhamma Paphulla are on the centre's own facilities page (paphulla.dhamma.org, about a dozen captioned images by area). Here is where each authentic photo lives and what the halls, rooms and grounds actually are. Verified 2026-06-19.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to find real Dhamma Paphulla centre photos",
    description:
      "Official images at paphulla.dhamma.org (about a dozen captioned photos by area). 120-seat Dhamma Hall, 48 single men's rooms, 26 twin-share women's rooms, 10 acres at Alur near Bangalore. What each photo shows.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Where can I see official photos of Dhamma Paphulla?",
    a: "The current, authentic photos are on the centre's own website. The page titled 'Facilities at the Center' (paphulla.dhamma.org/the-center/facilities-at-the-center, mirrored at paphulla.vridhamma.org/center-photos) carries roughly a dozen captioned photographs grouped by area: the Dhamma Hall, the registration and multipurpose hall, the male residential block with a sample room and bathroom, the female block and dining hall, the parking area, and the fruit and flower plants on the grounds. Because the centre publishes these itself, they show the campus as it stands now rather than a single visitor's old snapshot. Crowd-contributed photos on map and directory listings are fine as a supplement, but treat the centre's own gallery as the reference.",
  },
  {
    q: "How many photos does the centre actually publish?",
    a: "On the order of eleven to thirteen, depending on how you count the paired garden and hall views. The set is small on purpose: it is a working meditation centre documenting its facilities, not a tourism gallery. Each image is captioned by area (Male Block, Male Room, Male Bathroom, Female Block, Dining Hall, View of Dhamma Hall, Parking Area, Fruit and Flower Plants), which is why this gallery is far more useful than a wall of unlabelled directory thumbnails.",
  },
  {
    q: "What does the Dhamma Hall look like in the photos?",
    a: "The main meditation hall is a single large room that comfortably seats 120 meditators. The centre's own description notes it is fitted with an overhead DVD projector and large screen for evening discourses and Dhamma films, plus a sound system tuned for clear audibility across the hall. There are also two smaller mini halls used for discourses in other languages. So when you see the hall photo, you are looking at a 120-seat room, not a small group space.",
  },
  {
    q: "Will the room photos match what I actually get to stay in?",
    a: "Largely yes, because the centre photographs a representative room and bathroom rather than a staged suite. The male residential block has 48 single rooms with attached bathrooms plus 2 twin-sharing rooms, so a single room with a private bathroom is the norm on the men's side. The female block has 26 twin-sharing rooms with attached facilities. Actual allocation depends on how full a given course is, but the sample photos are honest about the standard: simple, clean, private bathroom, no frills.",
  },
  {
    q: "Why do the photos on Google Maps and directory sites look so different?",
    a: "Those are crowd-uploaded visitor shots taken at different times, often from the gate or the parking area, with no captions telling you what you are seeing. Several aggregator listings also mislabel the location as 'Hessarghatta Road' or a generic Bangalore neighbourhood, when the centre's published address is Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka 562123. The centre's own gallery is captioned and current, which is the difference between a random thumbnail and a photo you can actually place.",
  },
  {
    q: "What do the photos not show, and where do I go for that?",
    a: "The photos document the buildings and grounds. They cannot show you the course itself, which is a 10-day residential format with noble silence, and they are not a guide to the practice. I am a fellow practitioner sharing what is publicly documented, not a teacher. For anything about how a course runs, eligibility, dates, or the practice itself, the right sources are the centre's own site (paphulla.dhamma.org) and dhamma.org, plus an authorized assistant teacher at a 10-day course.",
  },
  {
    q: "Can I reuse the photos from the centre's website?",
    a: "No, do not assume they are free to reuse. Those images belong to the centre and the trust that runs it. Viewing them on paphulla.dhamma.org to see what the place looks like is fine. If you want to publish or republish any image, ask the centre directly through the contact details on their site rather than copying it.",
  },
];

const photoCards = [
  {
    title: "Dhamma Hall",
    description:
      "The main meditation hall. Seats 120 meditators, fitted with an overhead projector, large screen and a sound system for evening discourses. Two smaller mini halls handle other-language discourses.",
    size: "2x1" as const,
    accent: true,
  },
  {
    title: "Registration / multipurpose hall",
    description:
      "Where new students check in and first hear what a course involves. The same hall doubles for other Dhamma activities on the grounds.",
    size: "1x1" as const,
  },
  {
    title: "Male block",
    description:
      "Exterior of the men's residential building: 48 single rooms with attached bathrooms, plus 2 twin-sharing rooms.",
    size: "1x1" as const,
  },
  {
    title: "Male room + bathroom",
    description:
      "A representative single room and its attached bathroom. Simple, clean, private. This is the standard, not a staged suite.",
    size: "1x1" as const,
  },
  {
    title: "Female block",
    description:
      "Exterior of the women's residential building: 26 twin-sharing rooms with attached facilities.",
    size: "1x1" as const,
  },
  {
    title: "Dining hall",
    description:
      "The dining area where the free vegetarian meals are served. Food is simple and deliberately non-spicy, in line with every centre in this tradition.",
    size: "1x1" as const,
  },
  {
    title: "Parking + entrance",
    description:
      "Two frames of the entrance and parking area. This is usually what the crowd-uploaded map photos are also showing, just without a label.",
    size: "1x1" as const,
  },
  {
    title: "Fruit & flower plants",
    description:
      "The grounds: 10 acres at Alur with farmland on one side and forestland on the other, on a gently sloping plot near a natural stream.",
    size: "2x1" as const,
    accent: true,
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
            { label: "Dhamma Paphulla Photos" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            The Bangalore centre, in pictures
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dhamma Paphulla photos: where to see the real centre, decoded
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            People search for photos of the Dhamma Paphulla Vipassana Meditation
            &amp; Research Centre near Bangalore and land on map pins and
            directory thumbnails with no captions. Here is where the current,
            authentic images actually live, and what you are looking at when you
            find them.
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
            Direct answer (verified 2026-06-19)
          </p>
          <p className="mt-3 text-zinc-800">
            The real, current photos of Dhamma Paphulla are on the centre&apos;s
            own website, on the page titled{" "}
            <a
              href={OFFICIAL_PHOTOS}
              className="font-medium text-teal-700 underline underline-offset-2"
              rel="nofollow noopener"
              target="_blank"
            >
              Facilities at the Center
            </a>{" "}
            (paphulla.dhamma.org, also mirrored at{" "}
            <a
              href={OFFICIAL_PHOTOS_MIRROR}
              className="font-medium text-teal-700 underline underline-offset-2"
              rel="nofollow noopener"
              target="_blank"
            >
              paphulla.vridhamma.org
            </a>
            ). It carries about a dozen captioned photographs grouped by area:
            the Dhamma Hall, the residential blocks and a sample room, the dining
            hall, the parking area, and the grounds. Because the centre publishes
            these itself, they show the campus as it stands now, not a stranger&apos;s
            old snapshot.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why the photo you want is hard to find
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            Type the centre&apos;s name into a search and most of what comes
            back is aggregator pages: magicpin, mindtrip, lbb, balancegurus,
            assorted directory listings. Each one carries a handful of
            visitor-uploaded shots, usually the gate, the parking lot, or a tree,
            with no caption telling you which building is which. Several of them
            even mislabel the location as &quot;Hessarghatta Road&quot; or a
            generic Bangalore neighbourhood. The centre&apos;s published address
            is Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka
            562123, roughly 30 km from the city.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The fix is simple once you know it exists: the centre runs its own
            small, captioned gallery. The name Paphulla means
            &quot;cheerfulness of Dhamma,&quot; and the gallery is exactly that
            kind of plain, honest record of the place, eleven or so frames, each
            labelled by area. Below I map every photo in that gallery to the
            specific facility it documents, so you know what you are looking at
            before you ever arrive.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Every official photo, mapped to what it actually is
          </h2>
          <p className="mt-3 text-zinc-600">
            Each card is one area in the centre&apos;s own gallery, paired with
            the published number behind it. These are the things the photos
            document, drawn from the centre&apos;s facilities page.
          </p>
          <BentoGrid cards={photoCards} />
        </section>

        <section className="mt-6">
          <AnimatedChecklist
            title="How to tell a current centre photo from an old directory thumbnail"
            items={[
              {
                text: "It is captioned by area (Male Block, Female Room, View of Dhamma Hall), not an unlabelled thumbnail.",
              },
              {
                text: "It is hosted on paphulla.dhamma.org or paphulla.vridhamma.org, the centre's own domains, not a third-party listing.",
              },
              {
                text: "The hall photo shows a single large room for 120, not a small group space.",
              },
              {
                text: "The room photo shows a simple single with an attached bathroom, matching the published 48 single men's rooms and 26 twin-share women's rooms.",
              },
              {
                text: "The grounds read as farmland on one side and forestland on the other, on 10 acres at Alur, not a city compound.",
              },
            ]}
          />
        </section>

        <section className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <h3 className="text-base font-semibold text-zinc-900">
              The centre&apos;s own gallery
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              <li>Captioned by area, current, published by the trust.</li>
              <li>
                Maps cleanly to facility numbers (120-seat hall, 48 + 2 men&apos;s
                rooms, 26 women&apos;s rooms, 2 mini halls).
              </li>
              <li>
                One canonical home:{" "}
                <a
                  href={OFFICIAL_PHOTOS}
                  className="text-teal-700 underline underline-offset-2"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  the Facilities page
                </a>
                .
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-base font-semibold text-zinc-900">
              Aggregator and map listings
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Uncaptioned visitor snapshots from varied dates.</li>
              <li>
                Often mislabel the area as &quot;Hessarghatta Road&quot; instead
                of Alur.
              </li>
              <li>
                Useful only as a loose supplement, never as the reference for
                what a building is.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What no photo of Paphulla can show you
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            A gallery shows you a 120-seat hall, a single room with an attached
            bathroom, a dining hall, and ten green acres with a converted well
            that holds around ten lakh litres of water. It is genuinely useful
            for deciding whether the place feels right and for picturing where
            you would sleep and eat. What it cannot show is the course, which is
            a 10-day residential format run in silence, free of charge, funded
            entirely by the donations of people who have already sat one.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            For anything about how a course actually runs, whether you are ready,
            how to apply, or the practice itself, the right places are the
            centre&apos;s own site (
            <a
              href={OFFICIAL_HOME}
              className="text-teal-700 underline underline-offset-2"
              rel="nofollow noopener"
              target="_blank"
            >
              paphulla.dhamma.org
            </a>
            ) and{" "}
            <a
              href="https://www.dhamma.org/"
              className="text-teal-700 underline underline-offset-2"
              rel="nofollow noopener"
              target="_blank"
            >
              dhamma.org
            </a>
            , along with an authorized assistant teacher at a 10-day course. I am
            a fellow practitioner pointing you to what is publicly documented,
            not a teacher.
          </p>
        </section>

        <div className="mt-12">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Sat a course, now trying to keep the practice going?"
            description="If you have been to Paphulla or any centre and the daily sit is slipping, book a short call and I will pair you with a practice buddy for accountability."
          />
        </div>

        <section className="mt-14">
          <FaqSection heading="Frequently asked questions" items={faqs} />
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: "Dhamma Paphulla reviews, decoded",
                href: "/t/dhamma-paphulla-vipassana-meditation-research-centre-reviews",
                tag: "Same centre",
                excerpt:
                  "What a 4.7-star rating can and cannot tell you about the Bangalore centre, with the facility numbers behind it.",
              },
              {
                title: "Dhamma Khetta photos: the first Vipassana centre",
                href: "/t/dhamma-khetta-vipassana-international-meditation-centre-photos",
                tag: "Another centre",
                excerpt:
                  "Where to see real photos of the Hyderabad centre, the prototype every later centre copied.",
              },
              {
                title: "Vipassana meditation centres, explained",
                href: "/t/vipassana-meditation-centre",
                tag: "Background",
                excerpt:
                  "How the centre network works, why the course is identical everywhere, and what actually differs venue to venue.",
              },
            ]}
          />
        </div>

        <BookCallCTA
          appearance="sticky"
          destination={BOOKING_LINK}
          site="Vipassana"
          description="Struggling to keep a daily sit after a course? Get paired with a practice buddy."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              articleSchema({
                headline:
                  "Dhamma Paphulla Photos: Where to See the Real Bangalore Centre, Decoded",
                description:
                  "Where the current, authentic photos of Dhamma Paphulla Vipassana Meditation & Research Centre live, and what each official photo documents, from the 120-seat Dhamma Hall to the residential rooms and grounds at Alur.",
                url: PAGE_URL,
                datePublished: PUBLISHED,
                dateModified: MODIFIED,
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
            __html: JSON.stringify(
              breadcrumbListSchema([
                { name: "Home", url: "https://vipassana.cool" },
                {
                  name: "Centres",
                  url: "https://vipassana.cool/t/vipassana-meditation-centre",
                },
                { name: "Dhamma Paphulla Photos", url: PAGE_URL },
              ]),
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema(faqs)),
          }}
        />
      </div>
    </article>
  );
}
