import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  IntegrationsGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-bangalore";
const PUBLISHED = "2026-06-19";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Bangalore: there are two centers, not one (Paphulla and Sukhalaya)",
  description:
    "Most guides treat Dhamma Paphulla as the only Vipassana center in Bangalore. There are two. Dhamma Paphulla sits at Alur in the northwest, about 30 km out, with a 120-seat hall. Dhamma Sukhalaya sits at Arehalli on the eastern outskirts, about 38 km from Bangalore City Railway Station, hosting around 100 students. Both run free, donation-based 10-day residential courses. Which one to apply to depends mostly on which side of the city you are on. Register at schedule.vridhamma.org/courses/paphulla or /courses/sukhalaya. Verified 2026-06-19.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana in Bangalore: two centers on opposite sides of the city",
    description:
      "Dhamma Paphulla (Alur, northwest) and Dhamma Sukhalaya (Arehalli, east) both run free 10-day Vipassana courses near Bangalore. Most pages only mention the first. Here is the honest side-by-side. Verified 2026-06-19.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Bangalore: two centers, not one",
    description:
      "Dhamma Paphulla in the northwest and Dhamma Sukhalaya in the east. Both free, both donation-based 10-day courses. The decision is mostly geography.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Bangalore" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Bangalore", url: PAGE_URL },
];

const compareRows: { dim: string; paphulla: string; sukhalaya: string }[] = [
  {
    dim: "Where it sits",
    paphulla:
      "Alur village, Dasanapura Hobli, Bangalore North Taluk. Northwest of the city, off the Tumkur Road side.",
    sukhalaya:
      "Arehalli village, on the eastern outskirts of Bangalore.",
  },
  {
    dim: "Rough distance",
    paphulla: "About 30 km from central Bangalore.",
    sukhalaya:
      "About 38 km from Bangalore City Railway Station, 44 km from Yeshwantpur.",
  },
  {
    dim: "Capacity",
    paphulla:
      "120-seat Dhamma Hall, 48 single rooms in the men's block, 26 twin-share rooms in the women's block, on 10 acres.",
    sukhalaya: "Set up to host around 100 students.",
  },
  {
    dim: "Courses run",
    paphulla:
      "Free 10-day residential courses for new students, plus shorter 1, 2 and 3-day courses and children's Anapana sessions for old students.",
    sukhalaya:
      "Free 10-day residential courses, with shorter courses for old students. Course languages listed as Kannada, English and Hindi.",
  },
  {
    dim: "Cost",
    paphulla:
      "No charge. Food, lodging and teaching are covered by donations from people who have already finished a course.",
    sukhalaya:
      "No charge. Same donation model: nothing to pay, not even for food and accommodation.",
  },
  {
    dim: "Register at",
    paphulla: "schedule.vridhamma.org/courses/paphulla",
    sukhalaya: "schedule.vridhamma.org/courses/sukhalaya",
  },
];

const nearbyCenters = [
  {
    name: "Dhamma Vana",
    initial: "V",
    description:
      "Nadappanahalli, Mysuru District. The nearest center if both Bangalore centers are full when you want to sit.",
    href: "https://vana.dhamma.org/",
  },
  {
    name: "Dhamma Nadī",
    initial: "N",
    description:
      "Kuntebettu, Udupi District, on the coastal side of Karnataka. Further out, but on the same network and the same schedule.",
    href: "https://schedule.vridhamma.org/",
  },
  {
    name: "Davanagere center",
    initial: "D",
    description:
      "The Vipassana center serving Davangere in central Karnataka. Another option when you are flexible on where you sit.",
    href: "https://www.dhamma.org/en/locations/directory",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where is the Vipassana center in Bangalore?",
    a: "There are two, not one. Dhamma Paphulla is at Alur village, Dasanapura Hobli, Bangalore North Taluk (pincode 562123), about 30 km northwest of the city. Dhamma Sukhalaya is at Arehalli on the eastern outskirts (pincode 562114), about 38 km from Bangalore City Railway Station. Both run the identical 10-day Goenka-tradition course. Most articles only mention Paphulla because it is the older, larger and better-known center.",
  },
  {
    q: "How much does a Vipassana course in Bangalore cost?",
    a: "Nothing. Courses at both Dhamma Paphulla and Dhamma Sukhalaya, like every center in this tradition, are free of charge. There is no fee for the teaching, the food, or the lodging. The whole thing runs on donations, and donations are accepted only from people who have already completed at least one full 10-day course. So a first-time student is supported entirely by the giving of students who sat before them.",
  },
  {
    q: "Which Bangalore center should I apply to, Paphulla or Sukhalaya?",
    a: "For most people the deciding factor is geography and dates. Paphulla is northwest, off the Tumkur Road side; Sukhalaya is on the eastern outskirts. Pick whichever is the easier journey from where you live, then check both schedules, because the real constraint is usually which center has an open seat on a date you can commit to. The course itself is the same at either one, so you are not trading away quality by choosing the closer or the more available center.",
  },
  {
    q: "How do I register for a course at Dhamma Paphulla or Dhamma Sukhalaya?",
    a: "Each center has its own course schedule on the official portal: schedule.vridhamma.org/courses/paphulla and schedule.vridhamma.org/courses/sukhalaya. You read the Code of Discipline, find a dated course that works, and submit the online application for that specific course. Places are limited and courses fill, so you apply and wait for a confirmation rather than dropping in. There is no walk-in option for the 10-day course.",
  },
  {
    q: "When do 10-day courses start at the Bangalore centers?",
    a: "Dhamma Paphulla's 10-day courses usually begin on the first and third Wednesday of each month, though you should always confirm against the live schedule. Dhamma Sukhalaya posts its own dated courses on its schedule page. Because the two centers run independent calendars, it is worth checking both: if one has nothing open when you are free, the other often does.",
  },
  {
    q: "Why does the official center finder sometimes show only one Bangalore center?",
    a: "When you filter the Vipassana Research Institute center search to Karnataka, it can return just Dhamma Paphulla, which is part of why so many people assume Paphulla is the only option near Bangalore. Dhamma Sukhalaya is a separate, more recently established center on the other side of the city with its own portal at schedule.vridhamma.org/courses/sukhalaya. Both are real, both are free, both run the full course. If you only ever saw one, you were not looking at the whole picture.",
  },
  {
    q: "Can this page teach me the technique before I go to Bangalore?",
    a: "No, and that is deliberate. In this tradition the technique is only transmitted inside a 10-day residential course by an authorized assistant teacher. I am a fellow practitioner sharing logistics and context, not a teacher. For anything about how to actually practice, the canonical sources are the assistant teacher at the center and dhamma.org. This page is here to help you find the right door, not to walk you through what happens once you are inside.",
  },
];

const relatedPosts = [
  {
    title: "Dhamma Paphulla reviews: what the ratings actually tell you",
    href: "/t/dhamma-paphulla-vipassana-meditation-research-centre-reviews",
    excerpt:
      "4.7 of 5 across roughly 1,157 public ratings, and why a review of the building tells you almost nothing about the course. The Paphulla specifics, verified.",
    tag: "Center",
  },
  {
    title: "Dhamma Paphulla photos: where the real centre images live",
    href: "/t/dhamma-paphulla-vipassana-meditation-research-centre-photos",
    excerpt:
      "The authentic, current photos of the Bangalore center, where each one lives, and what the halls, rooms and grounds at Alur actually are.",
    tag: "Center",
  },
  {
    title: "Finding a retreat: how to use the dhamma.org course finder",
    href: "/guide/find-a-retreat",
    excerpt:
      "If neither Bangalore center has an open date, here is how to find the same course at a center anywhere on the network.",
    tag: "Guide",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana in Bangalore: two centers, not one (Dhamma Paphulla and Dhamma Sukhalaya)",
    description:
      "Bangalore has two Goenka Vipassana centers: Dhamma Paphulla at Alur in the northwest and Dhamma Sukhalaya at Arehalli on the eastern outskirts. Both run free, donation-based 10-day residential courses. Most guides only mention the first. A verified side-by-side plus how to register at each.",
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
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Bangalore, Karnataka
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Vipassana in Bangalore is two centers, not one
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          Search for Vipassana in Bangalore and almost every page points you to
          the same place: Dhamma Paphulla, out at Alur. It is a real center and
          a good one. But it is not the only one near the city, and if you live
          on the wrong side of Bangalore, the page that only mentions Paphulla
          is quietly sending you the long way around.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-19)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Bangalore has <strong>two</strong> Goenka-tradition Vipassana
            centers, on opposite sides of the city.{" "}
            <strong>Dhamma Paphulla</strong> is at Alur, in the northwest, about
            30 km out.{" "}
            <strong>Dhamma Sukhalaya</strong> is at Arehalli, on the eastern
            outskirts, about 38 km from Bangalore City Railway Station. Both run
            the identical free, donation-based 10-day residential course. You
            register for a specific dated course at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/paphulla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              schedule.vridhamma.org/courses/paphulla
            </a>{" "}
            or{" "}
            <a
              href="https://schedule.vridhamma.org/courses/sukhalaya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              schedule.vridhamma.org/courses/sukhalaya
            </a>
            . Which one to choose is mostly a question of geography and open
            dates, not quality.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The two centers, side by side
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is the honest comparison. Neither one is the &ldquo;real&rdquo;
          Bangalore center and neither is a downgrade. They are two independent
          centers on the same worldwide network, each with its own schedule and
          its own application portal. The rows below trace to each center&apos;s
          own pages.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-zinc-900 text-white">
                <th className="px-4 py-3 font-semibold w-32">&nbsp;</th>
                <th className="px-4 py-3 font-semibold">Dhamma Paphulla</th>
                <th className="px-4 py-3 font-semibold">Dhamma Sukhalaya</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr
                  key={row.dim}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <th
                    scope="row"
                    className="align-top px-4 py-4 font-semibold text-zinc-900 border-b border-zinc-100"
                  >
                    {row.dim}
                  </th>
                  <td className="align-top px-4 py-4 text-zinc-700 border-b border-zinc-100 leading-relaxed">
                    {row.paphulla}
                  </td>
                  <td className="align-top px-4 py-4 text-zinc-700 border-b border-zinc-100 leading-relaxed">
                    {row.sukhalaya}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500">
          Sources: each center&apos;s own site (
          <a
            href="https://paphulla.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            paphulla.dhamma.org
          </a>{" "}
          and{" "}
          <a
            href="https://sukhalaya.dhamma.org/the-center/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            sukhalaya.dhamma.org
          </a>
          ) and the official course portals. Verified 2026-06-19.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The part the overview pages skip
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When you filter the official Vipassana Research Institute center
          finder to Karnataka, it can come back showing a single Bangalore
          result: Dhamma Paphulla. That is most of why the &ldquo;Bangalore
          Vipassana center&rdquo; articles all describe the same place. Dhamma
          Sukhalaya is newer, sits on the far side of the city, and runs its own
          calendar at a separate portal, so it slips out of the default view a
          lot of people land on.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          That gap matters in a practical way. Bangalore traffic being what it
          is, a center 30 km northwest and a center on the eastern outskirts are
          genuinely different commitments depending on where you start. If the
          only center you ever heard of is on the opposite edge of the city from
          you, you might talk yourself out of going at all, when the closer door
          was open the whole time.
        </p>
      </section>

      <ProofBanner
        metric="2"
        quote="Bangalore has two independent Goenka Vipassana centers running free 10-day courses, Dhamma Paphulla in the northwest and Dhamma Sukhalaya in the east, each with its own application portal. Most guides name only one."
        source="schedule.vridhamma.org/courses/paphulla and /courses/sukhalaya, verified 2026-06-19."
      />

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          How to actually choose between them
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The thing nobody tells first-timers is that the course is the same
          everywhere. The recorded discourses, the chanting, the daily clock,
          the Code of Discipline: identical at Paphulla, at Sukhalaya, and at
          the center I sat my first course at thousands of miles away in
          California. So choosing a Bangalore center is not like choosing a
          school. You are choosing a building and a commute, not a curriculum.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Given that, the decision usually comes down to two things. First,
          which one is the easier journey for you and whoever is dropping you
          off, since you hand over your phone on day zero and will not be
          driving yourself anywhere for ten days. Second, which one has an open
          seat on a date you can fully clear. Apply to both schedules if you are
          flexible; the constraint that actually decides it for most people is
          availability, not preference. If both are full for your window, the
          next centers out in Karnataka run the same course on the same network.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          If both Bangalore centers are full
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Popular dates fill, and a first 10-day course is worth taking whenever
          you can clear the calendar rather than waiting months for one specific
          center. These are the next centers out from Bangalore on the same
          network, running the same course for free.
        </p>

        <div className="mt-8">
          <IntegrationsGrid
            subtitle="Same course, same network, a bit further out"
            title="Other Karnataka centers"
            items={nearbyCenters}
            columns={3}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          A note on where I am standing
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I should be straight with you: I have not sat a course in Bangalore. I
          have sat six 10-day courses, all at centers in California, plus around
          forty days of dhamma service volunteering at courses. So I cannot tell
          you how the food tastes at Paphulla or what the walking paths feel
          like at Sukhalaya. What I can do, having gone through the apply,
          wait, confirm, arrive loop six times, is help you not miss a center
          that the usual pages leave out, and remind you that the course on the
          other side of that gate is the same one I keep coming back for.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just a fellow practitioner who got curious enough
          to read both centers&apos; pages closely. For anything about how to
          practice, how to sit, or how to work with a difficulty, the canonical
          answers live with the assistant teacher at the center and at{" "}
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
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-bangalore-footer"
          heading="Sat a course in Bangalore and trying to keep the practice going?"
          description="If you want to talk through which center to apply to, or what holding a daily sit looks like once you are back in the city, grab a slot. Peer to peer, not teacher to student."
        />
      </section>

      <section id="faq" className="max-w-3xl mx-auto px-6 pt-12">
        <FaqSection
          heading="FAQ: Vipassana in Bangalore"
          items={faqs}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8 pb-16">
        <RelatedPostsGrid
          subtitle="Related"
          title="Before you apply"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-bangalore-sticky"
        description="Questions about the two Bangalore centers or keeping a daily practice? Book a quick chat."
      />
    </article>
  );
}
