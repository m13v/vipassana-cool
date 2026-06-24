import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  HorizontalStepper,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-centre-in-delhi";
const PUBLISHED = "2026-06-24";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana centre in Delhi: there isn't one inside the city, here's the nearest (Dhamma Sota, Sohna)",
  description:
    "There is no residential 10-day Vipassana centre inside Delhi city limits. The nearest official S. N. Goenka centre is Dhamma Sota at Village Rahaka, Sohna, Haryana, about 70 km from New Delhi Railway Station. Delhi itself has a registration office in Nehru Place and regular group sittings across Delhi-NCR. Dhamma Pubbananda serves the Greater Noida side. Verified against dhamma.org subdomains, 2026-06-24.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Where is the Vipassana centre in Delhi? The honest answer for NCR meditators",
    description:
      "No 10-day centre sits inside Delhi. Dhamma Sota in Sohna (Haryana) is the nearest residential centre; Delhi has a registration office and group sittings only. Verified from dhamma.org.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana centre in Delhi: nearest is Dhamma Sota, Sohna",
    description:
      "The residential centre for Delhi-NCR is Dhamma Sota in Sohna, Haryana, ~70 km out. Inside Delhi: a Nehru Place office and group sittings. From dhamma.org.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana centre in Delhi" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana centre in Delhi", url: PAGE_URL },
];

const optionCards = [
  {
    title: "Dhamma Sota , Sohna, Haryana",
    description:
      "The nearest residential centre to Delhi. Village Rahaka, Ballabhgarh-Sohna Road, Sohna, Haryana 122102. About 70 km from New Delhi Railway Station, set on 16 acres in the Aravali hills. This is where you actually sit a 10-day course for the Delhi side.",
    size: "2x1" as const,
    accent: true,
  },
  {
    title: "Dhamma Pubbananda , Greater Noida side",
    description:
      "The second official centre serving the eastern NCR / Greater Noida direction. Same tradition, separate schedule. Useful if you live toward Noida and Sohna is the wrong side of the city for you.",
    size: "1x1" as const,
  },
  {
    title: "Inside Delhi: office + group sittings, no 10-day course",
    description:
      "Within Delhi city there is a registration office in Nehru Place and regular group sittings across Delhi-NCR for people who have already completed a course. The full residential 10-day course is not held inside the city itself.",
    size: "1x1" as const,
  },
];

const registrationSteps = [
  {
    title: "Pick the centre, not the city",
    description:
      "Decide between Dhamma Sota (Sohna) and Dhamma Pubbananda (Greater Noida) based on which side of Delhi you can reach. There is no in-city residential option to choose.",
  },
  {
    title: "Find a course date",
    description:
      "Dhamma Sota runs 10-day courses for new and old students twice a month, typically starting on the 1st and 3rd Wednesday, conducted bilingually in Hindi and English. Check the live schedule before planning travel.",
  },
  {
    title: "Apply through the official site",
    description:
      "All applications go through dhamma.org (and the centre subdomain). There is no fee to sit a course; it runs on donations from old students. Apply early, the Delhi-region centres fill up.",
  },
  {
    title: "Sort travel to the centre",
    description:
      "From Delhi you are heading ~70 km out to Sohna for Dhamma Sota. Read the centre's own directions page so you arrive on Day 0 evening on time.",
  },
];

const relatedPosts = [
  {
    title: "What a 10-day Vipassana course actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "The 12-days-on-site reality, the daily clock, and noble silence. Read this before you apply to a Delhi-region centre.",
    tag: "Course logistics",
    readTime: "6 min",
  },
  {
    title: "Vipassana retreat: what to expect",
    href: "/t/vipassana-retreat",
    excerpt:
      "A plain-language picture of a residential retreat, from someone who has sat six of them.",
    tag: "Retreat",
    readTime: "5 min",
  },
  {
    title: "Daily practice after the course",
    href: "/t/daily-practice-after-vipassana-course",
    excerpt:
      "The harder part: keeping a sit going once you are back in the city. Group sittings in Delhi-NCR help.",
    tag: "Daily practice",
    readTime: "5 min",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana centre inside Delhi?",
    a:
      "Not a residential one. There is no 10-day course centre within Delhi city limits. The nearest official S. N. Goenka centre is Dhamma Sota at Village Rahaka, Sohna, Haryana, about 70 km from New Delhi Railway Station. Inside Delhi itself there is a registration office in Nehru Place and group sittings across Delhi-NCR for old students.",
  },
  {
    q: "What is the nearest Vipassana centre to Delhi?",
    a:
      "Dhamma Sota in Sohna, Haryana. It sits on 16 acres in the Aravali hills, with accommodation for about 120 meditators in single-occupancy rooms with attached bathrooms. It is the centre most Delhi residents go to.",
  },
  {
    q: "Are there other centres in the Delhi-NCR region?",
    a:
      "Yes. Dhamma Pubbananda serves the Greater Noida side of the NCR. Which one you pick usually comes down to which side of the city you can travel to more easily.",
  },
  {
    q: "How do I register, and is there a fee?",
    a:
      "Applications go through dhamma.org and the centre's subdomain. There is no charge to sit a course; courses run entirely on voluntary donations from people who have completed one before. Apply early because the Delhi-region centres fill up.",
  },
  {
    q: "Can I do group sittings in Delhi without travelling to Sohna?",
    a:
      "If you have already completed a 10-day course, yes. Dhamma Sota lists regular group sittings across Delhi-NCR. They are for old students continuing their practice, not a substitute for a first course.",
  },
  {
    q: "How do I learn the technique itself?",
    a:
      "The technique is only taught in person, inside a 10-day residential course, by an authorized assistant teacher. It is not taught online, in apps, or on sites like this one. For anything about how to practise, go to dhamma.org and an authorized teacher at a course.",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana centre in Delhi: the nearest residential centre is Dhamma Sota, Sohna",
    description:
      "There is no residential 10-day Vipassana centre inside Delhi. The nearest official S. N. Goenka centre is Dhamma Sota in Sohna, Haryana, ~70 km from New Delhi Railway Station. Delhi has a Nehru Place registration office and Delhi-NCR group sittings. Verified against dhamma.org subdomains.",
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
          Vipassana centre in Delhi
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          People search this expecting an address inside the city. The honest
          answer is that there is no residential 10-day centre within Delhi
          itself. What Delhi has is a registration office and group sittings.
          The actual centre you sit a course at is about 70 km out, in Sohna.
          Here is exactly where to go, which centre serves which side of the
          NCR, and how to register.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="5 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-24)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            There is <strong>no residential 10-day Vipassana centre inside
            Delhi city</strong>. The nearest official centre in the S. N.
            Goenka tradition is{" "}
            <strong>Dhamma Sota</strong>, at Village Rahaka, Ballabhgarh-Sohna
            Road, Sohna, Haryana 122102, roughly <strong>70 km</strong> from
            New Delhi Railway Station. Within Delhi there is a registration
            office in Nehru Place and regular group sittings across Delhi-NCR
            for people who have already completed a course. A second centre,
            Dhamma Pubbananda, serves the Greater Noida side of the NCR. All
            registration runs through{" "}
            <a
              href="https://www.dhamma.org/en/locations/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org
            </a>{" "}
            and the centre site{" "}
            <a
              href="https://sota.dhamma.org/en/dhammasota/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              sota.dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why the search is misleading
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A 10-day course needs a residential campus: meditation hall, single
          rooms, a kitchen, grounds quiet enough to keep noble silence for ten
          days. That does not fit inside a dense city. So the centre for the
          Delhi region was built where the land and the quiet are: in the
          Aravali hills near Sohna. The Delhi presence is administrative and
          for continuing practice, not for sitting your first course. If a
          page tells you there is a full course centre at a Delhi address, it
          is almost certainly pointing at the Nehru Place office or a group-
          sitting location, not a residential campus.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The three things people mean by &ldquo;centre in Delhi&rdquo;
        </h2>
        <p className="mt-4 mb-6 text-zinc-700 leading-relaxed">
          When this question gets asked, the asker usually wants one of three
          different things. They map to three different places.
        </p>
        <BentoGrid cards={optionCards} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Dhamma Sota, in detail
        </h2>
        <p className="mt-4 mb-6 text-zinc-700 leading-relaxed">
          This is the centre almost every Delhi resident actually goes to. The
          details below are from the centre&rsquo;s own pages on dhamma.org,
          read on 2026-06-24.
        </p>
        <div className="overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-zinc-200">
              <tr>
                <th className="w-44 bg-zinc-50 px-5 py-3 font-medium text-zinc-700 align-top">
                  Centre address
                </th>
                <td className="px-5 py-3 text-zinc-700">
                  Dhamma Sota Vipassana Centre, Village Rahaka (near Nimmod
                  Police Post), Ballabhgarh-Sohna Road, Sohna, Haryana 122102
                </td>
              </tr>
              <tr>
                <th className="bg-zinc-50 px-5 py-3 font-medium text-zinc-700 align-top">
                  Distance from Delhi
                </th>
                <td className="px-5 py-3 text-zinc-700">
                  About 70 km from New Delhi Railway Station
                </td>
              </tr>
              <tr>
                <th className="bg-zinc-50 px-5 py-3 font-medium text-zinc-700 align-top">
                  Setting
                </th>
                <td className="px-5 py-3 text-zinc-700">
                  16 acres in the Aravali hills, established in 2000
                </td>
              </tr>
              <tr>
                <th className="bg-zinc-50 px-5 py-3 font-medium text-zinc-700 align-top">
                  Capacity
                </th>
                <td className="px-5 py-3 text-zinc-700">
                  Around 120 meditators in single-occupancy rooms with attached
                  bathrooms
                </td>
              </tr>
              <tr>
                <th className="bg-zinc-50 px-5 py-3 font-medium text-zinc-700 align-top">
                  Course cadence
                </th>
                <td className="px-5 py-3 text-zinc-700">
                  10-day courses for new and old students twice a month,
                  typically starting the 1st and 3rd Wednesday; conducted
                  bilingually in Hindi and English
                </td>
              </tr>
              <tr>
                <th className="bg-zinc-50 px-5 py-3 font-medium text-zinc-700 align-top">
                  Delhi office
                </th>
                <td className="px-5 py-3 text-zinc-700">
                  Vipassana Sadhana Sansthan, Hemkunt (Modi) Tower, Nehru
                  Place, New Delhi 110019
                </td>
              </tr>
              <tr>
                <th className="bg-zinc-50 px-5 py-3 font-medium text-zinc-700 align-top">
                  Official pages
                </th>
                <td className="px-5 py-3 text-zinc-700">
                  <a
                    href="https://sota.dhamma.org/en/dhammasota/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 underline hover:text-teal-900"
                  >
                    Centre
                  </a>
                  ,{" "}
                  <a
                    href="https://sota.dhamma.org/en/directions/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 underline hover:text-teal-900"
                  >
                    Directions
                  </a>
                  ,{" "}
                  <a
                    href="https://sota.dhamma.org/en/group-sittings-in-delhi-ncr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 underline hover:text-teal-900"
                  >
                    Group sittings in Delhi-NCR
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          For the Greater Noida side, the other centre is{" "}
          <a
            href="https://pubbananda.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            Dhamma Pubbananda
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          How to register from Delhi
        </h2>
        <p className="mt-4 mb-6 text-zinc-700 leading-relaxed">
          The path is the same whether you pick Sohna or Greater Noida. None of
          this involves a city-centre signup; it all routes through the official
          site.
        </p>
        <HorizontalStepper steps={registrationSteps} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note from a fellow sitter
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just someone who has sat six 10-day courses across
          three centers and kept a daily practice going for a long stretch
          since. The thing I would tell anyone in Delhi: do not let the 70 km
          put you off. The distance out to a centre like Sohna is part of what
          makes the ten days work, you are meant to leave the city behind. And
          once you are back, the Delhi-NCR group sittings are the quiet
          infrastructure that keeps a practice alive when normal life resumes.
          For anything about the technique itself, how to sit, what to do with a
          difficulty, that is not something a website should answer; that
          belongs with an authorized teacher at a course and at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection items={faqs} heading="Vipassana in Delhi: common questions" />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sitting your first course near Delhi?"
          description="If you want to talk through what a 10-day course is actually like before you apply, or find a practice buddy for after, book a short call."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-16">
        <RelatedPostsGrid
          title="Keep reading"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about a course near Delhi? Book a quick call."
      />
    </article>
  );
}
