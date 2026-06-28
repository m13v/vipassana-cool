import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhammananda-vipassana-centre-photos";
const PUBLISHED = "2026-06-27";
const MODIFIED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const OFFICIAL_ABOUT = "https://punna.dhamma.org/aboutdhammananda.html";
const OFFICIAL_HOME = "https://punna.dhamma.org/";
const COURSE_SCHEDULE = "https://schedule.vridhamma.org/courses/ananda";
const SCHEDULE_ALT = "https://www.dhamma.org/en/schedules/schananda";
const IG_LOCATION =
  "https://www.instagram.com/explore/locations/460378240661086/";
const MAPS_SEARCH =
  "https://www.google.com/maps/search/Dhammananda+Vipassana+Centre+Markal";

export const metadata: Metadata = {
  title:
    "Dhammananda Vipassana Centre Photos: Where the Real Markal Images Live",
  description:
    "Looking for photos of the Dhammananda (Dhamma Ananda) Vipassana centre at Markal near Pune? There is no large gallery. The only official images are a five-photo carousel on the centre's own about page: the Dhamma Hall, the Mini Dhamma Hall, the Male Residence, the Male Area and the Granary. This page tells you exactly where each real image is and what you are looking at, including the detail no listing mentions: 23 acres on the bank of the Indrayani river, and no pagoda. Verified 2026-06-27.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhammananda Vipassana Centre Photos: Where the Real Markal Images Live",
    description:
      "There is no big gallery for Dhammananda (Markal). The official photos are a five-image carousel on punna.dhamma.org. Here is where each real image lives and what it shows: a 23-acre riverside centre on the Indrayani, no pagoda. Verified 2026-06-27.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to find real Dhammananda (Markal) centre photos",
    description:
      "No large gallery exists. Five official photos live on punna.dhamma.org: Dhamma Hall, Mini Dhamma Hall, Male Residence, Male Area, Granary. 23 acres on the Indrayani river, no pagoda. What each photo shows.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Where can I see official photos of the Dhammananda (Markal) centre?",
    a: "The only authoritative photos the centre publishes are a five-image carousel on its own about page at punna.dhamma.org/aboutdhammananda.html. The five images are labelled the Dhamma Hall, the Mini Dhamma Hall, the Male Residence, the Male Area and the Granary. There is no larger official gallery the way some bigger centres have. For candid, uncaptioned angles you can look at the Instagram location tag for the Markal centre and at Google Maps listings, but treat those as supplementary. The centre publishes the carousel itself, so those five are the images that actually show the campus as the trust presents it.",
  },
  {
    q: "Does Dhammananda have a pagoda like Dhamma Giri or Dhamma Thali?",
    a: "No. Unlike many centres in this tradition, the Markal centre has no pagoda and no block of individual cells in its published description. The meditation hall is the main structure, and it seats roughly 100 to 125 students, which is actually larger than the centre's current residential capacity. That absence is the reason photos of Dhammananda look like a quiet riverside campus rather than a landmark tower, and it is the single thing most listings never tell you.",
  },
  {
    q: "What makes the Dhammananda grounds look the way they do in photos?",
    a: "The centre sits on 23 acres on the bank of the Indrayani river, near Markal village, about an hour from central Pune. The centre's own description says the grounds carry many flowers, trees, bushes and shrubs and that the overall setting is quiet, secluded and comfortable. So the green, water-adjacent, low-rise look in the photos is the defining visual here. The river setting is the thing to look for; it is what separates these images from the more architectural, pagoda-centred shots of other centres.",
  },
  {
    q: "Is Dhammananda the same place as Dhamma Punna or the Pune Vipassana centre?",
    a: "They are run by the same trust, the Pune Vipassana Samiti, but they are two different sites. Dhamma Punna is the city centre near Swargate inside Pune. Dhammananda (Dhamma Ananda) is the residential riverside centre out at Markal, roughly 30 km from Pune railway station, reached in about an hour via Alandi village or via Nagar road. So if the photos you are looking at look urban and built-up, that is probably Dhamma Punna; the green, riverside, low-rise images are Dhammananda at Markal.",
  },
  {
    q: "Why are there so few photos of Dhammananda online?",
    a: "Because the centre maintains no large public gallery and publishes only the five-image carousel. It is a working meditation centre, not a tourist attraction or a heritage site, so visitors are not wandering the grounds taking photos, and the few candid shots that reach maps and directories are uncaptioned and sometimes years old. The scarcity is not a sign that there is nothing to see; it reflects how these centres are run.",
  },
  {
    q: "Can I visit Dhammananda just to photograph it?",
    a: "No. The grounds are used by students sitting a residential course, and the centre is not open for sightseeing or photo walks. If the photos make you want to actually be there, the route is to apply for and sit a course through the official schedule. For anything about visiting, dates, eligibility, or the practice itself, the centre's own site and dhamma.org are the authoritative sources. I am a fellow practitioner sharing what is publicly documented, not a teacher and not affiliated with the centre.",
  },
  {
    q: "What does the name Dhammananda mean?",
    a: "Dhammananda is usually rendered as the joy of Dhamma. It is a compound that joins Dhamma with ananda, a word for joy or bliss. Reading it that way is a linguistic note, not a claim about the practice itself; the centre is simply named in that spirit, the same way other centres in this tradition carry Pali names.",
  },
];

// The five images the centre actually publishes in its about-page carousel.
const photoCards = [
  {
    title: "The Dhamma Hall",
    size: "2x1" as const,
    description:
      "The main meditation hall and the first carousel image. By the centre's own account it seats roughly 100 to 125 students, which is more than the current residential capacity. This is where group sittings happen, and it is the largest interior space on the campus. In photos it reads as a plain, calm room, no ornament, which is exactly the point.",
  },
  {
    title: "The Mini Dhamma Hall",
    description:
      "A smaller secondary hall on the grounds. Centres keep a compact second hall alongside the main one; in the carousel it appears as a more intimate space than the full Dhamma Hall.",
  },
  {
    title: "The Male Residence",
    description:
      "The men's residential block. Courses keep men and women strictly separate, so the campus is split, and this image shows the rooms on the men's side rather than a shared dormitory.",
  },
  {
    title: "The Male Area",
    description:
      "The wider men's section of the segregated grounds: the paths and outdoor space the male students use. It is the counterpart to a women's area that the carousel does not separately show.",
  },
  {
    title: "The Granary",
    size: "2x1" as const,
    description:
      "The most unusual image in the set, and the one no map listing will ever show you. A granary is the food-storage building that keeps a donation-run kitchen stocked. Most centre galleries hide the operational backbone entirely; Dhammananda puts it in its five official photos. If you want the uncopyable detail that proves you are looking at this centre and not a stock image, it is this.",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen text-zinc-800">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "https://vipassana.cool" },
            {
              label: "Centres",
              href: "https://vipassana.cool/t/vipassana-meditation-centre",
            },
            { label: "Dhammananda Photos" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            The Markal centre, in pictures
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Dhammananda Vipassana centre photos: where the real Markal images
            live
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search for photos of the Dhammananda (Dhamma Ananda) centre near
            Pune and you mostly get a few uncaptioned map snapshots. There is no
            large gallery to find. What does exist is small, specific, and worth
            knowing exactly, so here is where the real images are and what you
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
            Direct answer (verified 2026-06-27)
          </p>
          <p className="mt-3 text-zinc-800">
            The official photos of Dhammananda are a five-image carousel on the
            centre&apos;s own{" "}
            <a
              href={OFFICIAL_ABOUT}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              about page at punna.dhamma.org
            </a>
            : the Dhamma Hall, the Mini Dhamma Hall, the Male Residence, the
            Male Area, and the Granary. There is no larger official gallery. For
            candid angles, the{" "}
            <a
              href={IG_LOCATION}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram location tag
            </a>{" "}
            and{" "}
            <a
              href={MAPS_SEARCH}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>{" "}
            carry a handful of uncaptioned visitor shots. Everything below
            explains what those five official images actually show, and the one
            detail no listing mentions.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why your search came up thin
          </h2>
          <p className="mt-4 text-zinc-700">
            Most centre-photo searches in this tradition reward you with a
            dramatic pagoda. Dhamma Giri in Igatpuri, Dhamma Thali in Jaipur,
            Dhamma Khetta in Hyderabad: each has a tall, photogenic structure
            that anchors every gallery. Dhammananda does not. Its published
            description lists no pagoda and no block of individual cells. The
            meditation hall is the main building, and it seats roughly 100 to
            125 students, more than the centre can currently house overnight.
          </p>
          <p className="mt-4 text-zinc-700">
            That single absence changes everything about how the place
            photographs. There is no landmark tower to point a camera at, so the
            images that exist are quieter: a hall, a residence, a stretch of
            riverside ground. That is also why directory listings feel so thin.
            They are not missing a famous building; there simply is not one. Once
            you know that, the five official photos stop looking like an
            incomplete gallery and start looking like an accurate one.
          </p>
        </section>

        {/* ANCHOR FACT: the five real photos */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The five official photos, decoded
          </h2>
          <p className="mt-4 text-zinc-700">
            The carousel on the centre&apos;s about page holds exactly five
            images, each one labelled. Here is what each one is, in plain
            language, so you can navigate them instead of guessing. The last one
            is the giveaway that you are looking at this centre and not a stock
            photo of some other campus.
          </p>
          <div className="mt-6">
            <BentoGrid cards={photoCards} />
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            Source: the centre&apos;s own about page,{" "}
            <a
              href={OFFICIAL_ABOUT}
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              punna.dhamma.org/aboutdhammananda.html
            </a>
            , where these five images appear as a carousel. Verified 2026-06-27.
          </p>
        </section>

        {/* THE DEFINING VISUAL */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The detail no listing mentions: it is a river centre
          </h2>
          <p className="mt-4 text-zinc-700">
            If you only remember one thing before you look at the photos,
            remember this: Dhammananda sits on 23 acres on the bank of the
            Indrayani river, near Markal village, about an hour out from central
            Pune. The centre&apos;s own words describe grounds carrying many
            flowers, trees, bushes and shrubs, in a setting it calls quiet,
            secluded and comfortable. The river and the greenery are the
            defining visual, far more than any building.
          </p>
          <ProofBanner
            metric="23 acres"
            quote="A 23-acre centre on the bank of the Indrayani river, about an hour from central Pune, with grounds of many flowers, trees, bushes and shrubs."
            source="Pune Vipassana Samiti, centre about page, verified 2026-06-27"
          />
          <p className="mt-2 text-zinc-700">
            So when you open the photos, look at the edges of the frames, not the
            centre of them. The water, the tree line, and the open low-rise
            layout are what make these images unmistakably Markal. A first
            inaugural 10-day course was held here in March 1997 in the presence
            of Mr. and Mrs. Goenka, and the place has kept that unshowy,
            functional character ever since.
          </p>
        </section>

        {/* SOURCE LADDER */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Where each kind of photo actually lives
          </h2>
          <p className="mt-4 text-zinc-700">
            Ranked from most authoritative to least, here is exactly where to go
            for each kind of image, and what to expect from it.
          </p>
          <ol className="mt-6 space-y-5">
            <li className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">
                1. The centre&apos;s own about page
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                The five-image carousel at{" "}
                <a
                  href={OFFICIAL_ABOUT}
                  className="text-teal-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  punna.dhamma.org/aboutdhammananda.html
                </a>
                . The only photos the centre publishes itself, and the only ones
                that are labelled. Start here.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">
                2. The trust&apos;s homepage
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                The{" "}
                <a
                  href={OFFICIAL_HOME}
                  className="text-teal-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pune Vipassana Samiti homepage
                </a>{" "}
                runs its own rotating images of the pagoda-free grounds and links
                straight through to both Dhammananda and the city centre, so you
                can tell the two apart.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">
                3. The Instagram location tag and Google Maps
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                The{" "}
                <a
                  href={IG_LOCATION}
                  className="text-teal-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Markal location tag
                </a>{" "}
                and{" "}
                <a
                  href={MAPS_SEARCH}
                  className="text-teal-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps
                </a>{" "}
                collect candid, visitor-uploaded shots. Useful for unposed angles
                of the river and the gate, but uncaptioned and sometimes years
                out of date.
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">
                4. Course pages, for context not pictures
              </p>
              <p className="mt-2 text-sm text-zinc-600">
                The{" "}
                <a
                  href={COURSE_SCHEDULE}
                  className="text-teal-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  course schedule for Dhammananda
                </a>{" "}
                and the{" "}
                <a
                  href={SCHEDULE_ALT}
                  className="text-teal-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dhamma.org schedule
                </a>{" "}
                will not give you a gallery, but they confirm you have the right
                Markal centre and not its Pune city sibling.
              </p>
            </li>
          </ol>
          <p className="mt-4 text-sm text-zinc-500">
            A note on reuse: the carousel images belong to the centre and the
            trust that runs it. View them freely, but ask before republishing any
            of them anywhere.
          </p>
        </section>

        {/* DISAMBIGUATION */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Make sure you are not looking at the wrong Pune centre
          </h2>
          <p className="mt-4 text-zinc-700">
            The most common photo mix-up here is between the two centres the same
            trust runs. Dhamma Punna is the city centre near Swargate, inside
            Pune. Dhammananda is the residential riverside centre out at Markal,
            roughly 30 km from Pune railway station and about an hour away via
            Alandi village or via Nagar road. If a set of photos looks built-up
            and urban, you are almost certainly looking at Dhamma Punna. The
            green, low-rise, water-adjacent images are Dhammananda. Both are real,
            both are run by the Pune Vipassana Samiti, but their photos look
            nothing alike, and the centre asks people with health concerns or
            over 65 to choose the city centre, which is part of why the two are
            kept clearly separate.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Looking at the photos because you are weighing a course?"
          description="If browsing Dhammananda is really you thinking about a first 10-day course, book a short call and I will share what helped me, peer to peer, before you apply through the official schedule."
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
                title: "Dhammathali photos: the Jaipur centre",
                href: "https://vipassana.cool/t/dhammathali-vipassana-centre-photos",
                excerpt:
                  "The opposite case: a centre defined by a 200-cell pagoda, and where its 100+ official images live.",
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
          centre, not a teacher and not affiliated with Dhammananda or the Pune
          Vipassana Samiti. For anything about visiting, applying, or the
          practice itself, the centre&apos;s own site,{" "}
          <a
            href={SCHEDULE_ALT}
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
                "Dhammananda Vipassana Centre Photos: Where the Real Markal Images Live",
              description:
                "Where the official photos of the Dhammananda (Dhamma Ananda) Vipassana centre at Markal near Pune live, and what each image shows. The only official images are a five-photo carousel (Dhamma Hall, Mini Dhamma Hall, Male Residence, Male Area, Granary); the centre is 23 acres on the Indrayani river with no pagoda.",
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
              { name: "Dhammananda Photos", url: PAGE_URL },
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
