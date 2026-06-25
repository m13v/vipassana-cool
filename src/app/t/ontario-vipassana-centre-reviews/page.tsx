import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  HorizontalStepper,
  GradientText,
  ShimmerButton,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/ontario-vipassana-centre-reviews";
const PUBLISHED = "2026-06-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Ontario Vipassana Centre reviews: how to actually read them (Dhamma Torana, Egbert)",
  description:
    "The Ontario Vipassana Centre (Dhamma Torana, 6486 Simcoe County Rd 56, Egbert ON) sits around 4.7 out of 5 on Google Maps as of June 2026. Here is the catch: the 10-day Goenka course is identical at every centre worldwide, so most of what a review praises or attacks is not about this centre at all. A meditator who has sat six courses at three other centres shows you which half of a review is real signal: the 140-acre former Boy Scout camp, the ~90-bed capacity, the food, and the volunteer culture.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Ontario Vipassana Centre reviews, decoded (Dhamma Torana)",
    description:
      "About 4.7/5 on Google Maps. But the course is the same at all 200+ Goenka centres, so the centre-specific signal is just the grounds, the beds, the food, and the volunteers. Here is how to split the two.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ontario Vipassana Centre reviews, decoded",
    description:
      "4.7/5 on Google Maps. What is actually about Dhamma Torana in Egbert vs. what is identical at every Goenka centre on earth.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Ontario Vipassana Centre reviews" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Ontario Vipassana Centre reviews", url: PAGE_URL },
];

const decodeSteps = [
  {
    title: "Sort each line: place or tradition?",
    description:
      "For every sentence in a review, ask one thing: would this be true at any centre in the tradition? If yes, it tells you nothing about Egbert specifically.",
  },
  {
    title: "Keep only the local layer",
    description:
      "The grounds, the beds, the food, the heat in a Simcoe County winter, how the volunteers ran registration. That is the half of the review that is actually about Dhamma Torana.",
  },
  {
    title: "Verify dates on the official site",
    description:
      "Reviews drift and so do schedules. Confirm current course dates and registration on torana.dhamma.org, never on a review platform.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the Ontario Vipassana Centre's rating?",
    a:
      "As of June 2026, the Ontario Vipassana Centre (Dhamma Torana) carries roughly 4.7 out of 5 on Google Maps, with a smaller volume of reviews than the big urban centres because it is a rural retreat site north of Toronto. Ratings move over time, so check Google Maps for the current figure. The authoritative source for the centre itself is torana.dhamma.org, which carries no star rating at all because courses are free and run on donations.",
  },
  {
    q: "Where is the Ontario Vipassana Centre and how do I contact it?",
    a:
      "It is at 6486 Simcoe County Rd 56, Egbert, Ontario, L0L 1N0 (the township of Essa), about one hour north of the Greater Toronto Area and roughly one hour from Pearson International Airport. Phone is +1 705-434-9850. Dates, registration, and directions are all on the official site, torana.dhamma.org. Courses are booked there, not through a review platform or a third-party booking service.",
  },
  {
    q: "Why are there no reviews on the official Dhamma Torana site?",
    a:
      "The tradition does not market or sell courses, so there is no testimonial widget on dhamma.org. The 10-day course is free, and the centre runs entirely on donations from people who have already finished a course. That is exactly why the reviews you find live on Google, Yelp, and directory sites instead: those are visitors writing on their own, not the centre collecting praise.",
  },
  {
    q: "Should the negative reviews stop me from going?",
    a:
      "Read what the negative review is actually about. If it criticizes the silence, the strictness, or the technique, that is true of every centre in the tradition and is not specific to Ontario. If it criticizes a cold room, a long registration wait, the food, or how a particular volunteer handled something, that is genuine centre-and-staff feedback worth weighing. The split matters because the course is the same everywhere; only the place and the people running it change.",
  },
  {
    q: "Is the Ontario Vipassana Centre a cult? A few reviews use that word.",
    a:
      "A handful of reviews find the rules off-putting: silence, no phones, no leaving, separation of men and women, setting aside whatever practice you arrived with for ten days. That feels intense if you are not expecting it. Whether it reads as discipline or as control is a personal call, and it applies to the whole tradition rather than to Egbert. The structure is demanding by design, fully voluntary, and free. We have a separate write-up on that question.",
  },
  {
    q: "How does Dhamma Torana compare to other Vipassana centres?",
    a:
      "The course is the same. I have sat six courses across three other centres in this tradition and the schedule, the recorded discourses, and the technique did not change between them. What changed was the building, the food, the bunk situation, and how the local volunteers ran things. So comparing centres really means comparing facilities, capacity, location, and travel logistics, which is precisely the centre-specific part of a review.",
  },
  {
    q: "Can you teach me the technique so I can decide before booking?",
    a:
      "No, and that is on purpose. The technique is transmitted only inside a 10-day residential course by an authorized assistant teacher. This site does not teach or describe it. For anything operational (how to practice, how to handle a hard day, what happens on a given day), go to dhamma.org and to a teacher at a course. Reviews can tell you whether the place and the logistics suit you; they cannot substitute for sitting the course.",
  },
];

const relatedPosts = [
  {
    title: "How to find and choose a Vipassana retreat",
    href: "/guide/find-a-retreat",
    excerpt:
      "Picking a centre is mostly location, dates, and logistics, since the course runs the same everywhere.",
    tag: "Guide",
  },
  {
    title: "Course application tips",
    href: "/guide/course-application-tips",
    excerpt:
      "How the donation-based application and waitlist work when you register through dhamma.org.",
    tag: "Guide",
  },
  {
    title: "The 10-day course structure",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily clock and 10-day arc that runs identically at Dhamma Torana and every other centre.",
    tag: "Reference",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0 text-teal-600"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

function DashIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4 shrink-0 text-zinc-400"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M4 10h12" />
    </svg>
  );
}

const localSignal = [
  "The 140-acre property: woods, ravines, walking paths, and how the seasons feel on it",
  "The residences: single vs. double rooms, bathrooms, heating in a Simcoe County winter",
  "The food: vegetarian, served in silence, and how the volunteer kitchen team cooks it",
  "Travel: the hour-long drive north from Toronto, parking, drop-off logistics",
  "Capacity and crowding: around 90 students at full courses shapes how busy meals feel",
  "Volunteer and management culture: how registration and the rules were actually run",
];

const traditionSignal = [
  "The technique: taught only inside the course by authorized teachers, identical everywhere",
  "The discourses: the same recorded S. N. Goenka videos, same evenings, every centre",
  "The daily timetable: the wake bell, the group sittings, the close of the day are fixed",
  "The Code of Discipline: noble silence, the five precepts, the no-leaving rule, everywhere",
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Ontario Vipassana Centre reviews: how to actually read them (Dhamma Torana)",
    description:
      "A guide to reading reviews of the Ontario Vipassana Centre (Dhamma Torana, Egbert), separating the universal Goenka course from the centre-specific 140-acre grounds, capacity, food, and volunteer culture. Aggregate rating about 4.7/5 on Google Maps, verified June 2026.",
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
          Ontario Vipassana Centre reviews,{" "}
          <GradientText>decoded</GradientText>
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Dhamma Torana, the Ontario Vipassana Centre near Egbert, rates around
          4.7 out of 5 on Google Maps. But a review of a Vipassana centre is two
          reviews stacked on top of each other, and most people read only the
          wrong one. Below is how to pull them apart so the reviews actually help
          you decide, from someone who has sat six courses at three other centres
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
            Direct answer (verified 2026-06-25)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The <strong>Ontario Vipassana Centre (Dhamma Torana)</strong>, at{" "}
            <strong>6486 Simcoe County Rd 56, Egbert, ON L0L 1N0</strong>, holds
            roughly <strong>4.7 out of 5 on Google Maps</strong> as of June 2026.
            The official site carries <strong>no star rating</strong> because the
            10-day course is free and runs on donations, and the course itself is
            identical at every centre in the tradition. The authoritative source
            for dates, registration, and contact is{" "}
            <a
              href="https://torana.dhamma.org/"
              className="text-teal-600 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              torana.dhamma.org
            </a>
            .
          </p>
          <div className="mt-5">
            <ShimmerButton href="https://torana.dhamma.org/course-schedule/">
              Check current course dates
            </ShimmerButton>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A review of this centre is two reviews stacked together
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Every Vipassana centre in the S. N. Goenka tradition runs the same
          course. The same recorded discourses play on the same evenings. The
          wake bell, the group sittings, the close of the day, the noble silence,
          the five precepts, the separation of men and women, the no-leaving
          rule: all fixed, all identical, whether you sit in Egbert, California,
          or India. The technique is transmitted only inside the course, by an
          authorized assistant teacher, and it does not change from centre to
          centre.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So when a five-star review raves about how life-changing the teaching
          was, or a one-star review calls the silence and the rules too intense,
          neither one is telling you anything about Dhamma Torana specifically.
          They are reviewing the tradition. You would read the exact same praise
          and the exact same complaints under any centre on earth. The part of a
          review that is actually about this place is smaller, and it is the part
          worth your attention.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-teal-200 bg-white p-6">
          <p className="text-sm font-semibold text-zinc-900">
            Real signal about Dhamma Torana
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Only Egbert can earn or lose these.
          </p>
          <ul className="mt-4 space-y-3">
            {localSignal.map((t) => (
              <li key={t} className="flex gap-3 text-sm text-zinc-700">
                <CheckIcon />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <p className="text-sm font-semibold text-zinc-900">
            Same at every centre (not a Torana signal)
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            Ignore these as centre-specific evidence.
          </p>
          <ul className="mt-4 space-y-3">
            {traditionSignal.map((t) => (
              <li key={t} className="flex gap-3 text-sm text-zinc-600">
                <DashIcon />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProofBanner
        metric="4.7/5"
        quote="On Google Maps as of June 2026. Most of the score reflects the course, which is identical everywhere; the centre-specific praise tends to land on the quiet 140-acre grounds and the volunteer care."
        source="Google Maps listing for Ontario Vipassana Centre, verified June 2026"
      />

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The facts that are actually about Dhamma Torana
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          These are the things no other centre can copy and that a review can
          legitimately judge. They come from the centre&rsquo;s own description of
          its grounds and history.
        </p>
        <dl className="mt-6 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-5">
            <dt className="text-sm font-semibold text-zinc-900">The land</dt>
            <dd className="sm:col-span-2 text-sm text-zinc-700 leading-relaxed">
              Over 140 acres of woods, open spaces, and ravines. It is a former
              Boy Scout camp the Ontario Vipassana Foundation acquired on April
              30, 2003.
            </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-5">
            <dt className="text-sm font-semibold text-zinc-900">Capacity</dt>
            <dd className="sm:col-span-2 text-sm text-zinc-700 leading-relaxed">
              Around 90 students in single and double rooms today. The
              centre&rsquo;s master plan calls for further construction to
              eventually allow courses of 130 students.
            </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-5">
            <dt className="text-sm font-semibold text-zinc-900">History</dt>
            <dd className="sm:col-span-2 text-sm text-zinc-700 leading-relaxed">
              The first Ontario Vipassana course ran in 1980 at a rented site.
              The foundation formed in 2001, bought the Egbert property in 2003,
              and courses began on the grounds that autumn.
            </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-5">
            <dt className="text-sm font-semibold text-zinc-900">Getting there</dt>
            <dd className="sm:col-span-2 text-sm text-zinc-700 leading-relaxed">
              6486 Simcoe County Rd 56, Egbert, ON L0L 1N0, in the township of
              Essa. About one hour north of the Greater Toronto Area and roughly
              one hour from Pearson International Airport.
            </dd>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 p-5">
            <dt className="text-sm font-semibold text-zinc-900">Cost</dt>
            <dd className="sm:col-span-2 text-sm text-zinc-700 leading-relaxed">
              No fee for teaching, food, or lodging. Costs are met entirely by
              donations from people who have completed a course before.
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
          Source: the centre&rsquo;s own page,{" "}
          <a
            href="https://torana.dhamma.org/the-centre/"
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Centre
          </a>
          . Acreage, capacity, and the 2003 acquisition are the centre&rsquo;s
          own figures, not mine.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Reading a Torana review in three moves
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          You do not need to read every review. You need to sort each one. This
          is the filter I run, and it works on any centre, not just Egbert.
        </p>
        <div className="mt-8">
          <HorizontalStepper steps={decodeSteps} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          How to read the negative reviews
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The critical reviews are the most useful ones, if you sort them
          correctly. Some reviewers describe feeling watched, getting corrected
          for small rule-breaks, or finding the staff distant. A few reach for the
          word culty. Run each of those through one question:{" "}
          <em>would this be true at any centre in the tradition?</em>
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The strictness, the surrender of your usual practice for ten days, the
          enforced silence, the rule against leaving: those are the same
          everywhere and are a fair thing to dislike, but they are not a Dhamma
          Torana problem. They are the course. What is fair to count against this
          centre is the human layer: how a specific volunteer handled a
          conversation, whether registration was chaotic, whether a residence was
          cold in a Simcoe County January, whether the food worked for you. That
          is real, local, and varies course to course because servers are
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
          Reviews can confirm the grounds are quiet and the kitchen is clean.
          They cannot answer how to practice, how to sit with a hard day, or
          whether the technique is right for you. Those are not review questions.
          For anything operational, the only honest sources are{" "}
          <a
            href="https://www.dhamma.org/"
            className="text-teal-600 underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher at a course. This page, and this
          site, will not teach the method or tell you what to do on the cushion.
          We point you to the people whose job that is.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If your real question is whether you can keep a daily practice going
          after a course, that is the part reviews never touch and the part I can
          actually speak to as a peer. That is why this site exists.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-ontario-vipassana-centre-reviews-footer"
          heading="Weighing whether to sit at Dhamma Torana?"
          description="If you want to talk through what a centre review can and cannot tell you, or what daily practice looks like after the course, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Ontario Vipassana Centre reviews"
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
        section="guide-ontario-vipassana-centre-reviews-sticky"
        description="Questions about choosing a Vipassana centre? Book a quick chat."
      />
    </article>
  );
}
