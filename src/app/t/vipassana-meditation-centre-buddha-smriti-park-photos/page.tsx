import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GlowCard,
  StepTimeline,
  RemotionClip,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-centre-buddha-smriti-park-photos";
const PUBLISHED = "2026-06-21";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "The Vipassana Centre Inside Buddha Smriti Park: What the Photos Don't Tell You",
  description:
    "The meditation centre inside Buddha Smriti Park, Patna is Dhamma Patliputta, a 75-student residential 10-day Vipassana course facility opened July 3, 2018, not a walk-in tourist hall. Official photos and details live at patliputta.dhamma.org. Park and centre facts verified 2026-06-21.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "The Vipassana Centre Inside Buddha Smriti Park (Patna): The Part the Photos Skip",
    description:
      "Dhamma Patliputta is a 75-student residential Vipassana course centre inside the 22-acre Buddha Smriti Park, distinct from the 200-ft stupa and gardens everyone photographs.",
    url: PAGE_URL,
    type: "article",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "Is there a Vipassana meditation centre inside Buddha Smriti Park?",
    a: "Yes. The Patna Vipassana Center, also called Dhamma Patliputta, sits in the Meditation Block of Buddha Smriti Park, next to Patna Junction. It is a dedicated centre in the S.N. Goenka tradition, organised through the dhamma.org network, and it runs residential 10-day courses for up to 75 students at a time.",
  },
  {
    q: "Where can I find real photos of the meditation centre, not just the park?",
    a: "The official source is patliputta.dhamma.org. The park's own photos (the 200-foot Patliputra Karuna Stupa, the gardens, the museum) circulate widely on tourism sites, but those are the public sightseeing areas, not the residential course facility. The course meditation hall is part of a silent residential environment and is not run as a photo attraction.",
  },
  {
    q: "Can I just walk in and visit or photograph the meditation hall?",
    a: "The park itself is a public space you can walk and photograph. The Vipassana centre is different: it is a residential facility that operates around 10-day courses, where students stay on-site in silence. It is not a drop-in gallery. If you want to actually see the inside, the honest route is to apply for and sit a course, or contact the centre directly through patliputta.dhamma.org.",
  },
  {
    q: "How many people can the centre hold?",
    a: "The official centre page states it can accommodate 75 students for a residential 10-day course. The facility is fully air-conditioned and includes a meditation hall, residential rooms, a dining room, kitchen, and office area. It was developed and opened to the public on July 3, 2018.",
  },
  {
    q: "Does it cost money to sit a course there?",
    a: "Courses in this tradition run on donations, not fees. The Patliputra Vipassana Trust manages courses at the premises with no charge for attendance; old students may contribute donations afterward to support future courses. This is the same donation model used across all dhamma.org centres worldwide.",
  },
  {
    q: "Is this the same Vipassana taught at other dhamma.org centres?",
    a: "Yes. Dhamma Patliputta teaches the standard 10-day course in the tradition of Sayagyi U Ba Khin as taught by S.N. Goenka, identical in structure to courses at the 400-plus other locations in the network. The course schedule for this centre is published at schedule.vridhamma.org/courses/patliputta.",
  },
  {
    q: "How is the centre related to the rest of Buddha Smriti Park?",
    a: "Buddha Smriti Park is a 22-acre public park inaugurated by the Dalai Lama on May 27, 2010, built on the site of the former Bankipur Central Jail. The Vipassana centre occupies the park's Meditation Block. So the centre is physically inside the park, but it is a separate, purpose-built residential facility, not the same thing as the stupa or gardens you see in most photos.",
  },
];

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t/vipassana-retreat" },
    {
      name: "Vipassana Centre at Buddha Smriti Park",
      url: PAGE_URL,
    },
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "The Vipassana Centre Inside Buddha Smriti Park: What the Photos Don't Tell You",
              description:
                "The meditation centre inside Buddha Smriti Park, Patna is Dhamma Patliputta, a 75-student residential 10-day Vipassana course facility, distinct from the stupa and gardens in tourist photos.",
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
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(FAQS)),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/t/vipassana-retreat" },
            { label: "Vipassana Centre at Buddha Smriti Park" },
          ]}
        />
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-6 pt-8">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
          Patna, Bihar
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          The Vipassana centre inside Buddha Smriti Park, and what the photos
          leave out
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          If you searched for photos of the meditation centre at Buddha Smriti
          Park, here is the thing almost no gallery tells you: the centre in the
          park is a real, dedicated residential Vipassana course facility, not
          the sightseeing hall the pictures imply.
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
      <section className="mx-auto max-w-3xl px-6 pt-10">
        <GlowCard glowColor="rgba(20,184,166,0.18)">
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              Direct answer · verified 2026-06-21
            </p>
            <p className="mt-3 text-zinc-800">
              The meditation centre inside Buddha Smriti Park is{" "}
              <strong className="text-zinc-900">
                Dhamma Patliputta (the Patna Vipassana Center)
              </strong>
              . It is a fully air-conditioned, residential facility in the
              park&apos;s Meditation Block, next to Patna Junction, with room for{" "}
              <strong className="text-zinc-900">75 students</strong> per
              residential 10-day course. It opened to the public on{" "}
              <strong className="text-zinc-900">July 3, 2018</strong>. Official
              photos and details are at{" "}
              <a
                href="https://patliputta.dhamma.org/en/the-centre/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal-700 underline"
              >
                patliputta.dhamma.org
              </a>
              . It is not a walk-in tourist hall. The park&apos;s 200-foot
              Patliputra Karuna Stupa and gardens are the public, photogenic
              part.
            </p>
          </div>
        </GlowCard>
      </section>

      {/* Motion intro */}
      <section className="mx-auto mt-12 max-w-3xl px-6">
        <RemotionClip
          title="Two places, one address"
          subtitle="Buddha Smriti Park, Patna"
          accent="teal"
          durationInFrames={170}
          captions={[
            "The park: 22 acres, a 200-ft stupa, open to anyone with a ticket",
            "The centre: a residential Vipassana course facility, 75 students",
            "Most photos show the park. Few show the centre.",
            "The hall isn't a photo stop. It's where people sit 10 days in silence.",
          ]}
        />
        <p className="mt-3 text-center text-sm text-zinc-500">
          I have sat 6 courses at three different centres. The pattern below
          holds at almost every dedicated centre: the public face and the course
          facility are not the same room.
        </p>
      </section>

      {/* Why the confusion */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why the photos confuse people
        </h2>
        <p className="mt-4 text-zinc-700">
          Type the name into any image search and you get the same shots: the
          towering Patliputra Karuna Stupa lit up at dusk, neat lawns, the
          ambulatory paths, the relic museum. Those are beautiful and they are
          real, but they are the public park. The actual Vipassana centre is a
          separate building most photographers never set foot in, because you
          only get inside by signing up for a course and going silent for ten
          days.
        </p>
        <p className="mt-4 text-zinc-700">
          So the search splits into two different intents wearing one set of
          words. Some people want pretty pictures of a landmark. Others are
          quietly asking a more serious question: is this a place I could
          actually go and meditate? The galleries answer the first question and
          ignore the second. This page is for the second group.
        </p>
      </section>

      {/* The park vs the centre — custom two-column */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          The park and the centre are not the same thing
        </h2>
        <p className="mt-4 text-zinc-700">
          They share an address and that is most of the confusion. Here is the
          honest split.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              The public park
            </p>
            <h3 className="mt-2 text-lg font-bold text-zinc-900">
              Buddha Smriti Park
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>22-acre public park in the heart of Patna</li>
              <li>
                Inaugurated by the Dalai Lama on May 27, 2010, on the former
                Bankipur Central Jail site
              </li>
              <li>200-foot Patliputra Karuna Stupa enshrining Buddha relics</li>
              <li>
                Relic museum with items from Japan, Myanmar, South Korea, Sri
                Lanka, and Thailand
              </li>
              <li>Open to visitors with a ticket. This is what the photos show.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
              The course facility
            </p>
            <h3 className="mt-2 text-lg font-bold text-zinc-900">
              Dhamma Patliputta
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-700">
              <li>Located in the park&apos;s Meditation Block, next to Patna Junction</li>
              <li>Residential 10-day Vipassana courses, S.N. Goenka tradition</li>
              <li>Capacity for 75 students per course</li>
              <li>
                Air-conditioned meditation hall, residential rooms, dining room,
                kitchen, office; opened July 3, 2018
              </li>
              <li>
                Runs on donations, no fee. Not a drop-in space. You enter by
                doing a course.
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Sources: park facts from the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Buddha_Smriti_Park"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            Buddha Smriti Park entry
          </a>
          ; centre facts from{" "}
          <a
            href="https://patliputta.dhamma.org/en/the-centre/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            the official centre page
          </a>{" "}
          (read 2026-06-21).
        </p>
      </section>

      {/* The anchor fact deep dive */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          What is actually behind those walls
        </h2>
        <p className="mt-4 text-zinc-700">
          The detail that makes this centre worth a real visit, not just a photo
          search, is on the official page in plain language. Dhamma Patliputta is
          described as a fully air-conditioned facility that includes a
          meditation hall, residential rooms, a dining room, kitchen, and office
          area, and it was developed and opened to the public from July 3, 2018.
          The stated capacity is 75 students for a residential ten-day course.
        </p>
        <p className="mt-4 text-zinc-700">
          That is a specific, checkable fact you will not find in a tourism photo
          caption. A 75-seat air-conditioned hall is a serious, purpose-built
          course environment, the same category as a dedicated centre anywhere in
          the world, not an overflow room tacked onto a tourist attraction. If
          you want the difference between a dedicated centre and a rented venue
          spelled out, I wrote about that in{" "}
          <Link
            href="/guide/find-a-retreat"
            className="font-medium text-teal-700 underline"
          >
            how to find and choose a Vipassana centre
          </Link>
          .
        </p>
        <p className="mt-4 text-zinc-700">
          I am not a teacher and I do not represent the tradition. I have just sat
          six courses and learned to read the difference between marketing photos
          and the actual room you will live in for ten days.
        </p>
      </section>

      {/* How to actually get there */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          From a photo search to actually sitting there
        </h2>
        <p className="mt-4 text-zinc-700">
          If the second intent is yours, here is the honest path. None of this
          happens through an image gallery; it all goes through the official
          network.
        </p>
        <div className="mt-6">
          <StepTimeline
            steps={[
              {
                title: "Look at the official centre page first",
                description:
                  "patliputta.dhamma.org is the source of truth for the centre's own photos, address, and contact details. Anything you saw on a tourism site is the park, not the course facility.",
              },
              {
                title: "Check the course schedule",
                description:
                  "The published schedule for this centre lives at schedule.vridhamma.org/courses/patliputta. Courses fill, so dates matter more than impulse.",
              },
              {
                title: "Apply for a 10-day course",
                description:
                  "Application and registration are handled through dhamma.org, not by walking up to the gate. The standard course is residential, in silence, and run on donations.",
              },
              {
                title: "Ask the centre anything operational",
                description:
                  "For questions about how the technique is taught, what a day looks like, or anything on the cushion, the centre and an authorised assistant teacher are the right source, not a meditation blog.",
              },
            ]}
          />
        </div>
        <p className="mt-4 text-zinc-700">
          For what a course is actually shaped like before you commit, the{" "}
          <Link
            href="/t/10-day-course-structure"
            className="font-medium text-teal-700 underline"
          >
            10-day course structure
          </Link>{" "}
          breakdown and the{" "}
          <Link
            href="/guide/first-course-tips"
            className="font-medium text-teal-700 underline"
          >
            first course tips
          </Link>{" "}
          are more useful than any photo.
        </p>
      </section>

      {/* Where to find real photos */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Where the honest photos actually live
        </h2>
        <p className="mt-4 text-zinc-700">
          For the park, image search is fine: the stupa and gardens are public
          and heavily photographed. For the centre itself, the only sources I
          would trust are the centre&apos;s own pages on{" "}
          <a
            href="https://patliputta.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline"
          >
            patliputta.dhamma.org
          </a>{" "}
          and the broader{" "}
          <a
            href="https://www.dhamma.org/en-US/locations/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline"
          >
            dhamma.org locations directory
          </a>
          . If a third-party gallery shows you a calm hall and calls it the
          Buddha Smriti Park meditation centre, check it against those before you
          trust it. Plenty of pages mix park interiors and stupa shots and label
          everything the same way.
        </p>
        <p className="mt-4 text-zinc-700">
          And if your real reason for searching was to gauge whether you could go
          sit there, the photo was never the answer. The answer is the schedule
          and the application.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Trying to figure out your first course?"
          description="If you are deciding whether to apply for a 10-day course at Patna or anywhere else, book a short call and I will share what I learned across six courses."
        />
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Common questions
        </h2>
        <div className="mt-6">
          <FaqSection items={FAQS} />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6 pb-20">
        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "How to find and choose a Vipassana centre",
              href: "/guide/find-a-retreat",
              excerpt:
                "Dedicated centres vs rented venues, and how to pick your first location.",
              tag: "Guide",
            },
            {
              title: "What a Vipassana retreat actually is",
              href: "/t/vipassana-retreat",
              excerpt:
                "The 10-day silent course, and the global network behind every location.",
              tag: "Guide",
            },
            {
              title: "The 10-day course structure",
              href: "/t/10-day-course-structure",
              excerpt:
                "What the days look like before you commit to sitting one.",
              tag: "Guide",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about sitting a course? Book a quick call."
      />
    </article>
  );
}
