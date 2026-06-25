import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  InlineTestimonial,
  FlowDiagram,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-centre-buddha-smriti-park-reviews";
const PUBLISHED = "2026-06-24";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Centre, Buddha Smriti Park Reviews: What the Star Ratings Actually Rate",
  description:
    "The reviews you find for the Vipassana centre at Buddha Smriti Park, Patna rate the public park, not the residential 10-day course. TripAdvisor lists ~192 reviews for the park (ranked #4 of 81 things to do in Patna); magicpin files it under Fitness; the residential Dhamma Patliputta course carries no star score because it runs on donations by application. Verified 2026-06-24.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Centre, Buddha Smriti Park Reviews: Read the Fine Print First",
    description:
      "The star ratings rate the park and its drop-in hall, not the donation-run residential Vipassana course. Here is what each review source is really reviewing.",
    url: PAGE_URL,
    type: "article",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "What is the rating of the Vipassana centre at Buddha Smriti Park?",
    a: "The ratings that show up online are for Buddha Smriti Park as a whole, not for the residential Vipassana course. On TripAdvisor the park carries roughly 192 reviews and ranks #4 of 81 things to do in Patna (checked 2026-06-24). magicpin lists the address but shows no review score and classifies it under Fitness. Balancegurus has a listing with zero actual reviews. So there is no single trustworthy star rating for the course itself, because the course is not run as a ticketed attraction.",
  },
  {
    q: "Why doesn't the residential Vipassana course have reviews like a normal place?",
    a: "Dhamma Patliputta, the residential centre in the park's Meditation Block, runs 10-day courses on donations, by application, in silence. There is no admission ticket, no menu, no booking fee, and students are not there as customers rating a service. It is part of the worldwide dhamma.org network, which deliberately operates outside the rated-attraction model. That is why a place this established has almost no conventional reviews.",
  },
  {
    q: "Are the TripAdvisor reviews about the meditation course or the park?",
    a: "The park. The TripAdvisor listing is for Buddha Smriti Park, and the reviews talk about the 200-foot stupa, the gardens, the light-and-sound fountain show, and the relic museum. One review titled 'Vipassana day course available' does mention the meditation halls, but it is describing the park's drop-in facility, not a residential 10-day course someone completed.",
  },
  {
    q: "What are the two meditation halls a reviewer mentioned?",
    a: "A TripAdvisor reviewer described the right wing of the park: 'one can do short courses of Vipassana in AC hall (For regular Vipassana sadhak, entrance gate is separate and has no tickets). Premium sound-proof meditation hall is also available on extra ticket.' That is the park's day-use meditation amenity. It is separate from the residential Dhamma Patliputta course, which is the thing most serious searchers actually mean.",
  },
  {
    q: "Where can I read honest reviews of the actual 10-day course?",
    a: "Not on a star-rating site. The honest accounts live in long-form personal write-ups: first-hand course reports from students, threads in communities like r/vipassana_cool, and the centre's own pages at patliputta.dhamma.org. A 10-day silent course is too specific to compress into a five-star score, so a review that helps you is a story, not a number.",
  },
  {
    q: "Is Buddha Smriti Park worth visiting based on the reviews?",
    a: "The park reviews are genuinely positive about the park: people praise the cleanliness, the greenery, the stupa, and the evening fountain show, which is why it ranks near the top of things to do in Patna. Just read those reviews as reviews of a park and museum complex. If your question is whether to sit a course, the park's star rating tells you almost nothing about that decision.",
  },
  {
    q: "How do I contact the centre to ask about a course?",
    a: "The centre publishes a phone line at +91 6205978822 (9:30 AM to 5:30 PM) and full details at patliputta.dhamma.org. For anything operational, about how a course actually runs or how the technique is taught, the centre and an authorized assistant teacher are the right source, not a review aggregator or a meditation blog.",
  },
];

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t/vipassana-retreat" },
    {
      name: "Buddha Smriti Park Vipassana Reviews",
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
                "Vipassana Centre, Buddha Smriti Park Reviews: What the Star Ratings Actually Rate",
              description:
                "The online reviews for the Vipassana centre at Buddha Smriti Park, Patna rate the public park, not the residential donation-run 10-day course. A breakdown of what each review source is really reviewing.",
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
            { label: "Buddha Smriti Park Vipassana Reviews" },
          ]}
        />
      </div>

      {/* Hero */}
      <header className="mx-auto max-w-3xl px-6 pt-8">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
          Patna, Bihar
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Reviews of the Vipassana centre at Buddha Smriti Park, and what they
          are actually rating
        </h1>
        <p className="mt-4 text-lg text-zinc-500">
          You can find a star rating for this place in about ten seconds. The
          problem is that almost none of those stars are rating the thing most
          people mean when they search this: a residential 10-day Vipassana
          course.
        </p>
        <div className="mt-5">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </div>
      </header>

      {/* Direct answer */}
      <section className="mx-auto max-w-3xl px-6 pt-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-24
          </p>
          <p className="mt-3 text-zinc-800">
            The reviews you find online rate{" "}
            <strong className="text-zinc-900">Buddha Smriti Park</strong>, the
            public park and museum complex, not the residential Vipassana
            course. On{" "}
            <a
              href="https://www.tripadvisor.in/Attraction_Review-g297592-d3734581-Reviews-Buddha_Smriti_Park-Patna_Patna_District_Bihar.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline"
            >
              TripAdvisor
            </a>{" "}
            the park has roughly{" "}
            <strong className="text-zinc-900">192 reviews</strong> and ranks{" "}
            <strong className="text-zinc-900">#4 of 81 things to do in Patna</strong>
            . The residential course, called{" "}
            <strong className="text-zinc-900">Dhamma Patliputta</strong>, carries
            no comparable star score because it runs on donations, by
            application, in silence, not as a ticketed attraction. Course details
            are at{" "}
            <a
              href="https://patliputta.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline"
            >
              patliputta.dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      {/* The split intent */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          One search, two completely different questions
        </h2>
        <p className="mt-4 text-zinc-700">
          When people type this into a search box, they are usually asking one of
          two things. The first group wants to know if Buddha Smriti Park is a
          nice place to visit in Patna. The second group is quietly asking
          something heavier: is the meditation centre here legitimate, and would
          a 10-day course be worth sitting? The star ratings answer the first
          question loudly and the second question not at all.
        </p>
        <p className="mt-4 text-zinc-700">
          I have sat six 10-day courses at three different centres. I am not a
          teacher and I do not represent the tradition. But I have learned to
          read the gap between a review of a venue and a review of a course, and
          for this address the gap is wide. Below is what each source you will
          land on is genuinely reviewing.
        </p>
      </section>

      {/* Review-source audit */}
      <section className="mx-auto mt-10 max-w-5xl px-6">
        <h2 className="mx-auto max-w-3xl text-2xl font-bold text-zinc-900">
          What each review source is really reviewing
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-zinc-700">
          I opened the pages that rank for this on 2026-06-24. Here is the honest
          read on each one.
        </p>
        <BentoGrid
          cards={[
            {
              title: "TripAdvisor",
              size: "1x1",
              description:
                "Listed as 'Buddha Smriti Park', not a meditation centre. About 192 reviews, ranked #4 of 81 things to do in Patna. The reviews praise the stupa, gardens, museum, and evening fountain show. This is a park rating wearing a meditation keyword.",
            },
            {
              title: "magicpin",
              size: "1x1",
              description:
                "Files the centre under 'Fitness' and describes it as 'a gym or fitness studio'. No review score shown, hours listed as 10:00 AM to 8:00 PM. A misfiled directory entry, not a verdict on a course.",
            },
            {
              title: "Balancegurus / directories",
              size: "1x1",
              description:
                "A 4-star listing with zero actual reviews behind it, plus the address and a phone number. These are scraped directory cards. The star is a placeholder, not feedback from anyone who sat there.",
            },
            {
              title: "Dhamma Patliputta (patliputta.dhamma.org)",
              size: "2x1",
              accent: true,
              description:
                "The actual residential centre, in the park's Meditation Block next to Patna Junction, run by the Patliputra Vipassana Trust in the S.N. Goenka tradition. It is the thing serious searchers mean, and it is the one source that carries no star rating at all, because it is not a rated attraction. This is the gap every other page leaves open.",
            },
          ]}
        />
        <p className="mx-auto max-w-3xl text-sm text-zinc-500">
          Sources checked 2026-06-24:{" "}
          <a
            href="https://www.tripadvisor.in/Attraction_Review-g297592-d3734581-Reviews-Buddha_Smriti_Park-Patna_Patna_District_Bihar.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            TripAdvisor listing
          </a>
          ,{" "}
          <a
            href="https://patliputta.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            the official centre page
          </a>
          .
        </p>
      </section>

      {/* The real review quote */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          The one review that mentions the halls, read carefully
        </h2>
        <p className="mt-4 text-zinc-700">
          There is a real TripAdvisor review titled &quot;Vipassana day course
          available&quot; that gets quoted around as if it reviews the course. It
          does not. Read what it actually says.
        </p>
        <div className="mt-6">
          <InlineTestimonial
            quote="Very beautiful and clean park with ashes of Buddha. Opposite Patna Junction railway station, opens 10am-6pm, Monday closed. In the right wing, one can do short courses of Vipassana in AC hall (for regular Vipassana sadhak, entrance gate is separate and has no tickets). Premium sound-proof meditation hall is also available on extra ticket."
            name="TripAdvisor reviewer"
            role="Review titled 'Vipassana day course available', on the Buddha Smriti Park listing"
            stars={4}
          />
        </div>
        <p className="mt-6 text-zinc-700">
          Notice what this is describing: the park&apos;s drop-in meditation
          amenity, with a free entrance for regular practitioners and a premium
          soundproof hall on an extra ticket. That is a day-use facility inside a
          public park. It is genuinely useful information, but it is not a report
          from someone who completed a residential 10-day course. The two get
          collapsed into one search result, and that collapse is the whole
          confusion.
        </p>
      </section>

      {/* Why no course reviews */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why a place this established has almost no course reviews
        </h2>
        <p className="mt-4 text-zinc-700">
          It looks strange at first. A well-known meditation centre in a major
          city, and no real star rating for the actual course. The reason is
          structural, not a sign that something is wrong. Residential courses in
          this tradition run on donations, with no fee to attend. You apply in
          advance, you stay on site, and you keep silence for ten days. There is
          no front desk experience to rate, no service transaction, no checkout.
          Students are not customers, so the whole machinery that produces
          reviews never engages.
        </p>
        <p className="mt-4 text-zinc-700">
          The same pattern holds across the worldwide network this centre belongs
          to. I have sat courses at three centres in California and not one of
          them lives or dies by a star rating. If you want the difference between
          a dedicated centre and a rented venue spelled out, I wrote about that in{" "}
          <Link
            href="/guide/find-a-retreat"
            className="font-medium text-teal-700 underline"
          >
            how to find and choose a Vipassana centre
          </Link>
          .
        </p>
      </section>

      {/* The reviews that actually matter */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          The reviews that actually help you decide
        </h2>
        <p className="mt-4 text-zinc-700">
          If your real question is whether to sit a course here, a five-star
          score was never going to answer it. A 10-day course is too specific to
          flatten into a number. The accounts that help are stories: someone
          describing what their first course felt like, what surfaced on day six,
          how the early mornings landed, what they wished they had known. Those
          live in long-form write-ups and practitioner communities, not on
          attraction-rating sites.
        </p>
        <p className="mt-4 text-zinc-700">
          For honest, unfiltered accounts of what a course is actually like, the
          community at{" "}
          <a
            href="https://www.reddit.com/r/vipassana_cool/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-700 underline"
          >
            r/vipassana_cool
          </a>{" "}
          and the first-hand notes in{" "}
          <Link
            href="/guide/first-course-tips"
            className="font-medium text-teal-700 underline"
          >
            first course tips
          </Link>{" "}
          will tell you more than any rating page. And if you want the shape of
          the days before you commit, the{" "}
          <Link
            href="/t/10-day-course-structure"
            className="font-medium text-teal-700 underline"
          >
            10-day course structure
          </Link>{" "}
          breakdown is the practical version of a review.
        </p>
      </section>

      {/* Path forward */}
      <section className="mx-auto mt-14 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          From a review search to a real decision
        </h2>
        <p className="mt-4 text-zinc-700">
          Here is the path that actually works, none of which runs through a star
          rating.
        </p>
        <FlowDiagram
          title="Reviews to a real course decision"
          steps={[
            {
              label: "Read the park reviews as park reviews",
              detail: "Cleanliness, stupa, gardens, fountain show",
            },
            {
              label: "Read course stories, not scores",
              detail: "Practitioner write-ups and communities",
            },
            {
              label: "Check the centre's own page",
              detail: "patliputta.dhamma.org, schedule and contact",
            },
            {
              label: "Apply for a course",
              detail: "Donation-based, by application, in silence",
            },
          ]}
        />
        <p className="mt-4 text-zinc-700">
          The honest version of &quot;is it any good&quot; for a Vipassana centre
          is not a number on a map listing. It is whether you can get a course
          date, show up, and sit. For Patna specifically, the practical details
          live in the{" "}
          <Link
            href="/t/patna-vipassana"
            className="font-medium text-teal-700 underline"
          >
            Patna Vipassana guide
          </Link>{" "}
          and{" "}
          <Link
            href="/t/vipassana-patna-apply-online"
            className="font-medium text-teal-700 underline"
          >
            how to apply online
          </Link>
          .
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Trying to read between the reviews?"
          description="If you are weighing whether to sit a course at Patna or anywhere else, book a short call and I will share what I learned across six courses."
        />
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-6">
        <h2 className="text-2xl font-bold text-zinc-900">Common questions</h2>
        <div className="mt-6">
          <FaqSection items={FAQS} />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6 pb-20">
        <RelatedPostsGrid
          title="Keep reading"
          posts={[
            {
              title: "The Vipassana centre at Buddha Smriti Park: what the photos skip",
              href: "/t/vipassana-meditation-centre-buddha-smriti-park-photos",
              excerpt:
                "The park photos vs the residential course facility, and why they are not the same room.",
              tag: "Guide",
            },
            {
              title: "Patna Vipassana: the practical guide",
              href: "/t/patna-vipassana",
              excerpt:
                "Location, courses, and how the centre fits into the dhamma.org network.",
              tag: "Guide",
            },
            {
              title: "How to find and choose a Vipassana centre",
              href: "/guide/find-a-retreat",
              excerpt:
                "Dedicated centres vs rented venues, and how to pick your first location.",
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
