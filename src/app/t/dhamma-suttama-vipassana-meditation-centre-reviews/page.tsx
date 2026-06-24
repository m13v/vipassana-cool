import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  AnimatedChecklist,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhamma-suttama-vipassana-meditation-centre-reviews";
const PUBLISHED = "2026-06-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Dhamma Suttama Vipassana Meditation Centre reviews: how to read them (Montebello, Quebec)",
  description:
    "Dhamma Suttama (Quebec Vipassana Meditation Centre, 810 Cote Azelie, Montebello QC) holds about 4.8/5 across 300+ Google reviews as of June 2026. Here is what those reviews can and cannot tell you: the course runs identically at every Goenka centre worldwide, so the only centre-specific signal is the 600-acre property, the halls, the food, and the volunteer culture. Notes from a meditator who has sat six courses at three other centres.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Suttama reviews, decoded: what is actually about this Quebec centre",
    description:
      "About 4.8/5 across 300+ Google reviews. But the course is identical at all 200+ Goenka centres, so most of what a review praises or criticizes is not specific to Dhamma Suttama. Here is the part that is.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Suttama Vipassana centre reviews, decoded",
    description:
      "4.8/5 across 300+ Google reviews. What is actually about this Montebello centre vs. what is identical at every Goenka centre worldwide.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Dhamma Suttama reviews" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Dhamma Suttama reviews", url: PAGE_URL },
];

const centreFacts = [
  {
    title: "600-acre property",
    description:
      "The centre sits on a 600-acre site on a quiet paved road north of Montebello, off Highway 50 between Montreal and Ottawa/Gatineau. Space and silence are the point.",
    size: "2x1" as const,
    accent: true,
  },
  {
    title: "Two meditation halls",
    description:
      "Built into a former gymnasium complex (2008). Capacity of about 75 students each, so roughly 150 students per course.",
    size: "1x1" as const,
  },
  {
    title: "Main building from 1981",
    description:
      "Entrance hall, two dining rooms, and a professional kitchen run by volunteer servers. Cleaning and cooking are done by old students giving service.",
    size: "1x1" as const,
  },
  {
    title: "Accommodation",
    description:
      "Five separate residences with double or private bedrooms, plus farm buildings, a barn, a garage, and a workshop on the grounds.",
    size: "1x1" as const,
  },
  {
    title: "Donation-funded",
    description:
      "Courses are free. There is no fee for teaching, food, or lodging. Costs are met entirely by donations from people who have finished a course before.",
    size: "1x1" as const,
  },
];

const reviewableItems = [
  {
    text: "Facilities and grounds: the 600-acre property, the walking paths, the state of the residences and halls.",
    checked: true,
  },
  {
    text: "Food: vegetarian, served in silence, breakfast and lunch with light tea in the afternoon. Quality and variety vary by centre and kitchen team.",
    checked: true,
  },
  {
    text: "Accommodation: shared vs. private rooms, bathrooms, heating in a Quebec winter, the walk between residence and hall.",
    checked: true,
  },
  {
    text: "Location and travel: how easy it is to reach from Montreal or Ottawa, parking, the drop-off arrangements.",
    checked: true,
  },
  {
    text: "Volunteer and management culture: how the servers and management run registration, meals, and the rules. This is where the warm reviews and the harsh ones diverge most.",
    checked: true,
  },
  {
    text: "Capacity and crowding: roughly 150 students at full courses, which shapes how busy the dining rooms and bathrooms feel.",
    checked: true,
  },
];

const notReviewableItems = [
  {
    text: "The technique itself: taught only inside the course by authorized assistant teachers, identical at every centre in the tradition.",
    checked: false,
  },
  {
    text: "The discourses: the same recorded S. N. Goenka video and audio play at every centre, in the same order, on the same evenings.",
    checked: false,
  },
  {
    text: "The daily timetable: the wake bell, the group sittings, and the close of the day follow one fixed schedule worldwide.",
    checked: false,
  },
  {
    text: "The Code of Discipline: noble silence, the five precepts, separation of men and women, and the no-leaving rule are the same everywhere.",
    checked: false,
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is Dhamma Suttama's rating?",
    answer:
      "As of June 2026, the Quebec Vipassana Meditation Centre (Dhamma Suttama) carries roughly 4.8 out of 5 across more than 300 Google reviews, and similar high scores on third-party directories. Ratings drift over time, so check Google Maps for the current number. The authoritative source for the centre itself is suttama.dhamma.org.",
  },
  {
    question: "Where is Dhamma Suttama and how do I contact it?",
    answer:
      "It is at 810 Cote Azelie, Montebello, QC J0V 1L0, on a quiet road north of Montebello, accessible from Highway 50 between Montreal and Ottawa/Gatineau. Registration, dates, and contact details are all on the official site at suttama.dhamma.org. Courses are booked through that site, not through a review platform or third-party booking service.",
  },
  {
    question: "Why are there no reviews on the official site?",
    answer:
      "The tradition does not market or sell courses, so there is no ratings widget on dhamma.org. Courses are free and run entirely on donations from former students. That is also why you find reviews on Google, Yelp, and directory sites instead: those are visitors writing on their own, not the centre collecting testimonials.",
  },
  {
    question: "Are the negative reviews a reason not to go?",
    answer:
      "Read what the negative review is actually about. If it criticizes the technique, the silence, or the strictness of the rules, that is true of every centre in the tradition and is not specific to Dhamma Suttama. If it criticizes the food, a cold room, a long wait at registration, or how a particular volunteer handled something, that is genuine centre-and-staff feedback worth weighing. The split matters because the course is identical everywhere; only the place and the people running it change.",
  },
  {
    question: "Is Dhamma Suttama a cult? Some reviews use that word.",
    answer:
      "A handful of reviews describe the strictness as off-putting. The rules (silence, no phones, no leaving, separation of men and women, surrendering the practice you arrived with for ten days) feel intense if you are not expecting them. Whether that reads as discipline or as control is a personal call, and it applies to the tradition as a whole rather than to this centre. We have a separate write-up on that question; the short version is that the structure is demanding by design, fully voluntary, and free.",
  },
  {
    question: "How does Dhamma Suttama compare to other Vipassana centres?",
    answer:
      "The course is the same. I have sat six courses across three other centres in the tradition and the schedule, the discourses, and the technique did not change between them. What changed was the building, the food, the bunk situation, and how the local volunteers ran things. So comparing centres really means comparing facilities, location, capacity, and travel logistics, which is exactly what the centre-specific part of a review captures.",
  },
  {
    question: "Can you teach me the technique before I read reviews and decide?",
    answer:
      "No, and that is on purpose. The technique is transmitted only inside a 10-day residential course by an authorized assistant teacher. This site does not teach or describe it. For anything operational (how to practice, how to handle a difficulty, what happens on a given day), go to dhamma.org and to a teacher at a course. Reviews can tell you whether the place and the logistics suit you; they cannot substitute for sitting the course.",
  },
];

const relatedPosts = [
  {
    title: "How to find and choose a Vipassana retreat",
    href: "/guide/find-a-retreat",
    excerpt:
      "Picking a centre is mostly about location, dates, and logistics, since the course is the same everywhere.",
    tag: "Guide",
  },
  {
    title: "Course application tips",
    href: "/guide/course-application-tips",
    excerpt:
      "How the donation-based application and waitlist actually work when you register through dhamma.org.",
    tag: "Guide",
  },
  {
    title: "The 10-day course structure",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily clock and the 10-day arc that runs identically at Dhamma Suttama and every other centre.",
    tag: "Reference",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Dhamma Suttama Vipassana Meditation Centre reviews: how to read them",
    description:
      "A guide to reading reviews of Dhamma Suttama (Quebec Vipassana Meditation Centre, Montebello), separating the universal course from the centre-specific facilities, food, location, and volunteer culture. Aggregate rating about 4.8/5 across 300+ Google reviews, verified June 2026.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const faqSchemaJson = faqPageSchema(faqs, `${PAGE_URL}#faq`);
  const breadcrumbSchemaJson = breadcrumbListSchema(breadcrumbSchemaItems);

  return (
    <article className="min-h-screen text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchemaJson,
            faqSchemaJson,
            breadcrumbSchemaJson,
          ]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Dhamma Suttama reviews, decoded
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Dhamma Suttama is the Quebec Vipassana Meditation Centre near
          Montebello. It rates well, around 4.8 out of 5 across hundreds of
          Google reviews. But a review of a Vipassana centre is two reviews
          stacked on top of each other, and most people read only the wrong
          one. Below is how to pull them apart so the reviews actually help you
          decide, from someone who has sat six courses at three other centres
          in the same tradition.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="7 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-23)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <strong>Dhamma Suttama</strong> (the Quebec Vipassana Meditation
            Centre), at <strong>810 Cote Azelie, Montebello, QC J0V 1L0</strong>,
            holds roughly <strong>4.8 out of 5 across 300+ Google reviews</strong>{" "}
            as of June 2026, with similar scores on third-party directories.
            There is no review widget on the official site because courses are
            free and run on donations, and the course itself is identical at
            every centre in the tradition. The authoritative source for dates,
            registration, and contact is{" "}
            <a
              href="https://suttama.dhamma.org/"
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              suttama.dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A review of this centre is two reviews stacked together
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Every Vipassana centre in the S. N. Goenka tradition runs the same
          course. The same recorded discourses play on the same evenings. The
          wake bell, the group sittings, the close of the day, the noble
          silence, the five precepts, the separation of men and women, the
          no-leaving rule: all fixed, all identical, whether you sit in Quebec,
          California, or India. The technique is transmitted only inside the
          course, by an authorized assistant teacher, and it does not change
          from centre to centre.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So when a five-star review raves about how life-changing the teaching
          was, or a one-star review calls the silence and the rules too
          intense, neither one is telling you anything about Dhamma Suttama
          specifically. They are reviewing the tradition. You would read the
          exact same praise and the exact same complaints under any centre in
          the world. The part of a review that is actually about this place is
          smaller, and it is the part worth your attention.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <AnimatedChecklist
            title="What a review can tell you about THIS centre"
            items={reviewableItems}
          />
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <AnimatedChecklist
            title="What is the same at every centre (ignore as centre signal)"
            items={notReviewableItems}
          />
        </div>
      </section>

      <ProofBanner
        metric="4.8/5"
        quote="Across 300+ Google reviews of the Quebec Vipassana Meditation Centre as of June 2026. Most of the high score reflects the course, which is identical everywhere; the centre-specific praise centres on the grounds, the cleanliness, and the volunteer care."
        source="Aggregated from Google reviews, verified June 2026"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The facts that are actually about Dhamma Suttama
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          These are the things no other centre can copy and that a review can
          legitimately judge. They come from the centre&rsquo;s own description
          of its grounds and buildings.
        </p>
        <div className="mt-6">
          <BentoGrid cards={centreFacts} />
        </div>
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          Source: the centre&rsquo;s own page,{" "}
          <a
            href="https://suttama.dhamma.org/the-centre-near-montebello/"
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Centre near Montebello
          </a>
          . Numbers like capacity and acreage are the centre&rsquo;s figures, not
          mine.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          How to read the negative reviews
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The critical reviews are the most useful ones, if you sort them
          correctly. A few reviewers describe feeling watched, getting
          corrected for small rule-breaks, or finding the staff distant. Some
          reach for the word culty. Run each of those through one question:{" "}
          <em>would this be true at any centre in the tradition?</em>
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The strictness, the surrender of your usual practice for ten days, the
          enforced silence, the rule against leaving: those are the same
          everywhere and are a fair thing to dislike, but they are not a Dhamma
          Suttama problem. They are the course. What is fair to count against
          this centre is the human layer: how a specific volunteer handled a
          conversation, whether registration was chaotic, whether a room was
          cold in a Quebec January, whether the food worked for you. That is
          real, local, and varies course to course because servers are
          volunteers who rotate. I am not a teacher, just a fellow sitter, but
          after six courses the pattern is clear: the centre that felt warm one
          year ran differently the next, because the people changed and the
          course did not.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What reviews cannot do, and what to use instead
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Reviews can confirm the grounds are beautiful and the kitchen is
          clean. They cannot answer how to practice, how to sit with a hard
          day, or whether the technique is right for you. Those are not
          review questions. For anything operational, the only honest sources
          are{" "}
          <a
            href="https://www.dhamma.org/"
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a course. This page, and this
          site, will not teach the method or tell you what to do on the
          cushion. We point you to the people whose job that is.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If your real question is whether you can keep a daily practice going
          after a course, that is the part reviews never touch and the part I
          can actually speak to as a peer. That is why this site exists.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-dhamma-suttama-reviews-footer"
          heading="Weighing whether to sit at Dhamma Suttama?"
          description="If you want to talk through what a centre review can and cannot tell you, or what daily practice looks like after the course, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Dhamma Suttama reviews"
          items={faqs}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          subtitle="Related"
          title="Before you book a centre"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-dhamma-suttama-reviews-sticky"
        description="Questions about choosing a Vipassana centre? Book a quick chat."
      />
    </article>
  );
}
