import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  MetricsRow,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-dhamma-khetta";
const PUBLISHED = "2026-06-26";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Dhamma Khetta: the first Vipassana center in the Goenka tradition (Hyderabad)",
  description:
    "Dhamma Khetta in Hyderabad held the first course in S. N. Goenka's tradition in September 1976, the seed center that every other Goenka center descends from. The name means 'field of Dhamma'. Its origin story, the switch-factory land it was built on, verified facts, address and how to register. Verified 2026-06-26 against khetta.dhamma.org.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Khetta: where the first Goenka Vipassana course was held (1976)",
    description:
      "The first center in the tradition. First course September 1976, in Hyderabad, on land next to a switch factory. 'Dhamma Khetta' is Pali for 'field of Dhamma'. Verified facts and the origin story.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Khetta was the very first Goenka Vipassana center",
    description:
      "First course September 1976, Hyderabad. The name means 'field of Dhamma'. The seed center the whole tradition grew from.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Dhamma Khetta" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Dhamma Khetta", url: PAGE_URL },
];

const originSteps = [
  {
    title: "1975: an invitation, not a center",
    description:
      "Ratilal Mehta, a businessman who had sat a couple of courses with Goenka in Rajasthan, invited him to teach inside Mehta's newly built switch factory in Hyderabad. There was no center yet, just a factory and an invitation.",
  },
  {
    title: "September 1976: the first course in the tradition",
    description:
      "After a few courses on the factory grounds, Mehta donated 2 acres of adjoining land and a dedicated center was built. The first course there was held in September 1976. By the tradition's own account, this was the first center to conduct a course in this lineage.",
  },
  {
    title: "Early 1980s: the first Dhamma Hall and Pagoda",
    description:
      "A main Dhamma Hall for 150 students and a Pagoda of cells went up. The physical template that later centers around the world would echo, a hall plus a pagoda of individual cells, took shape here first.",
  },
  {
    title: "Today: about 7 acres and 125 cells",
    description:
      "The 2 acres grew to nearly 7 through later donations. The Pagoda now holds 125 meditation cells, with multiple halls and residential blocks. Two ten-day courses run most months.",
  },
  {
    title: "And outward: more than 200 centers",
    description:
      "From this single plot in Hyderabad, the tradition spread to over 200 dedicated centers across the world, from Dhamma Giri in Igatpuri to centers in California where I sat my own courses. Dhamma Khetta is the root of that map.",
  },
];

const metrics = [
  { value: 1976, label: "Year of the first course (September)" },
  { value: 7, label: "Acres today, grown from the original 2" },
  { value: 125, label: "Meditation cells in the Pagoda" },
];

const faqs: FaqItem[] = [
  {
    q: "What is Dhamma Khetta?",
    a: "Dhamma Khetta is a Vipassana meditation center in Hyderabad, Telangana, India, in the tradition of S. N. Goenka (in the lineage of Sayagyi U Ba Khin). It is significant because it was the first center in this tradition to conduct a course: the first course was held there in September 1976. Source: khetta.dhamma.org.",
  },
  {
    q: "What does 'Dhamma Khetta' mean?",
    a: "It is Pali. 'Dhamma' is the teaching, and 'khetta' means 'field'. So Dhamma Khetta is the 'field of Dhamma'. The center's own description notes it is lush and green with dense foliage, which makes the agricultural image of a field fit the place as well as the name.",
  },
  {
    q: "Is Dhamma Khetta really the first Vipassana center in the Goenka tradition?",
    a: "Yes, by the tradition's own published history. Both the center's site (khetta.dhamma.org) and the regional Vipassana pages describe it as the first center to conduct a course in this tradition, with that first course in September 1976. Goenka had been teaching courses since 1969, but those were held in rented or borrowed spaces; Dhamma Khetta was the first dedicated, permanent center.",
  },
  {
    q: "How did it start in a switch factory?",
    a: "In 1975 Ratilal Mehta, a businessman who had sat courses with Goenka, invited him to teach inside Mehta's newly constructed switch factory in Hyderabad. After a few courses there, Mehta donated 2 acres of adjacent land and a purpose-built center was constructed, which opened with its first course in September 1976.",
  },
  {
    q: "Where is Dhamma Khetta and how do I get there?",
    a: "The center's address is 12.6 km Ibrahimpatnam Road, Gurramguda Bus Stop, Hyderabad, Telangana 500070, India. Per the center, it is about 1 km from the main road to Nagarjuna Sagar, roughly 34 km from the airport, and 20 to 22 km from Hyderabad's train stations. Always confirm directions on the center site before traveling.",
  },
  {
    q: "What courses run at Dhamma Khetta, and how do I register?",
    a: "The center runs two courses most months, typically starting on the 1st and 3rd Wednesday, except when a long 30 or 45 day course is scheduled, plus children's courses. Schedules change, so check the live calendar at schedule.vridhamma.org/courses/khetta and apply there, or start at dhamma.org. This site does not handle registrations and is not affiliated with the center.",
  },
  {
    q: "Is this the same as Dhamma Giri in Igatpuri?",
    a: "No. They are two different centers. Dhamma Giri in Igatpuri is the large and well known center that hosts the Vipassana Research Institute, but Dhamma Khetta in Hyderabad is the older one: it is the first center where a course was held in this tradition. People often assume the most famous center is the first one, but here they are not the same place.",
  },
  {
    q: "Are you affiliated with Dhamma Khetta?",
    a: "No. I am a fellow meditator who has sat six ten-day courses at three centers in California, not a teacher and not connected to Dhamma Khetta. Everything operational here is sourced from the center's own site and the official schedule. For anything authoritative, go to dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "What does Vipassana mean?",
    href: "/guide/vipassana-meaning",
    excerpt:
      "The Pali roots of the word, the same vocabulary that gives 'Dhamma Khetta' its 'field of Dhamma'.",
    tag: "Language",
  },
  {
    title: "Vipassana in Igatpuri (Dhamma Giri)",
    href: "/t/vipassana-igatpuri",
    excerpt:
      "The other famous Indian center, often confused with the first one. What it is and how to register.",
    tag: "Centers",
  },
  {
    title: "How to find a retreat",
    href: "/guide/find-a-retreat",
    excerpt:
      "Reading the official schedule, picking a center, and knowing what is open to new students.",
    tag: "Logistics",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Dhamma Khetta: the first Vipassana center in the Goenka tradition (Hyderabad)",
    description:
      "Dhamma Khetta in Hyderabad held the first course in S. N. Goenka's tradition in September 1976. The seed center that every other Goenka center descends from. Its origin story, the switch-factory land, verified facts, and how to register.",
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

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          Hyderabad, Telangana
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          Dhamma Khetta is where the whole tradition started
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          There are over 200 Goenka-tradition Vipassana centers in the world now.
          Every one of them traces back to a single plot of land in Hyderabad,
          built next to a switch factory, where the first course in this tradition
          was held in September 1976. That place is Dhamma Khetta, the &ldquo;field
          of Dhamma&rdquo;. This is its story and the verified facts, the part the
          directory listings leave out.
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
            Direct answer (verified 2026-06-26)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            <strong>Dhamma Khetta</strong>, in Hyderabad, is the{" "}
            <strong>first center ever established</strong> in S. N. Goenka&apos;s
            Vipassana tradition. Its first course was held in{" "}
            <strong>September 1976</strong>. The name is Pali for{" "}
            <strong>&ldquo;field of Dhamma&rdquo;</strong> (
            <em>khetta</em> means &ldquo;field&rdquo;). It sits at 12.6 km
            Ibrahimpatnam Road, Gurramguda, Hyderabad, Telangana 500070, and runs
            two ten-day courses most months. Browse dates and apply at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/khetta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              schedule.vridhamma.org/courses/khetta
            </a>
            . Verified against the center&apos;s own site,{" "}
            <a
              href="https://www.khetta.dhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              khetta.dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          From a switch factory to the root of a worldwide map
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The thing most pages about Dhamma Khetta get wrong, or just skip, is how
          ordinary the beginning was. There was no grand campus. There was a
          businessman named Ratilal Mehta who had sat a couple of courses with
          Goenka in Rajasthan, liked what happened to him, and invited Goenka to
          teach inside the switch factory Mehta had just built in Hyderabad. People
          sat their first ten days surrounded by industrial buildings.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Only after a few of those courses did Mehta donate 2 acres of land next
          to the factory, and a real center went up. The first course on that
          ground was held in September 1976. That is the moment the tradition marks
          as its first center. The timeline below is how it grew from there.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <StepTimeline
          title="How the first center came to be, and what grew from it"
          steps={originSteps}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The numbers, today
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          These come from the center&apos;s own site, verified on 2026-06-26.
          Treat the live links as the source of truth and this as a snapshot, since
          facilities and schedules change.
        </p>
        <div className="mt-6">
          <MetricsRow metrics={metrics} />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why the name is a farming word
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Almost every center in this tradition is named Dhamma-something: Dhamma
          Giri (&ldquo;hill of Dhamma&rdquo;), Dhamma Cakka (&ldquo;wheel of
          Dhamma&rdquo;), and so on. Dhamma Khetta uses <em>khetta</em>, the Pali
          word for a field, the kind a farmer plants. So the name reads as
          &ldquo;field of Dhamma&rdquo;.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The image is deliberate. In the early texts a field is where you sow and
          what you sow eventually comes up, for better or worse. Naming the very
          first center a field, rather than a hill or a palace or a temple, frames
          the whole thing as ground you work, not a monument you visit. If you want
          the linguistics of these names, our note on{" "}
          <a
            href="/guide/vipassana-meaning"
            className="text-teal-700 underline hover:text-teal-900"
          >
            what Vipassana means
          </a>{" "}
          walks through the same Pali vocabulary.
        </p>
      </section>

      <ProofBanner
        metric="1st"
        quote="Dhamma Khetta was the first centre to conduct a course in this tradition, with its first course in September 1976."
        source="khetta.dhamma.org, the center's official site"
      />

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The facts, in one place
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Center name
            </p>
            <p className="mt-2 text-zinc-900 font-medium">
              Dhamma Khetta Vipassana International Meditation Centre
            </p>
            <p className="mt-1 text-sm text-zinc-600">&ldquo;Field of Dhamma&rdquo;</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Address
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              12.6 km Ibrahimpatnam Road, Gurramguda Bus Stop, Hyderabad,
              Telangana 500070, India
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              First course
            </p>
            <p className="mt-2 text-zinc-900 font-medium">September 1976</p>
            <p className="mt-1 text-sm text-zinc-600">
              The first in the tradition.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Courses
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              Two courses most months, usually starting the 1st and 3rd Wednesday,
              plus children&apos;s courses and occasional long courses.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Getting there
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              ~1 km from the Nagarjuna Sagar road, ~34 km from the airport, ~20 to
              22 km from Hyderabad&apos;s train stations.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tradition
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              As taught by S. N. Goenka, in the tradition of Sayagyi U Ba Khin.
              Non-sectarian, no charge for the course.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Live schedule and applications:{" "}
          <a
            href="https://schedule.vridhamma.org/courses/khetta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            schedule.vridhamma.org/courses/khetta
          </a>
          . Center site:{" "}
          <a
            href="https://www.khetta.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            khetta.dhamma.org
          </a>
          . Global directory:{" "}
          <a
            href="https://www.dhamma.org/en-US/locations/directory"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org directory
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Does it matter that it was first?
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Practically, no. A ten-day course at Dhamma Khetta follows the same daily
          clock and the same Code of Discipline as a course anywhere else, and the
          technique is transmitted the same way by authorized assistant teachers no
          matter which center you sit at. I can say that because I have sat six
          courses across three centers in California and the structure never moved
          an inch. Being the first center does not make it a better course.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What it carries is history. If you have ever sat anywhere in this
          tradition, the room you sat in is, in a real sense, a copy of a copy of
          something that started on those 2 acres in Hyderabad in 1976. For some
          people that lineage is just trivia. For others it is the reason to go
          sit there specifically. Either reaction is fine. If you want the
          structural detail of what those ten days actually contain, that lives in
          our{" "}
          <a
            href="/t/10-day-course-structure"
            className="text-teal-700 underline hover:text-teal-900"
          >
            breakdown of the 10-day course structure
          </a>
          .
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, and I have not sat at Dhamma Khetta myself, so I will
          not pretend to describe what practicing there feels like or tell you how
          to practice. For anything operational, the only honest pointers are{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the official Code of Discipline
          </a>{" "}
          and an authorized assistant teacher at the course you attend.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Picking a center or planning your first sit?"
          description="A short call to compare notes on choosing a center, applying, and keeping a daily practice afterward. Not teaching, just experience from six courses."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-4">
        <FaqSection items={faqs} heading="Dhamma Khetta: common questions" />
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Language, the other Indian centers, and what helps before a first course."
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about sitting at Dhamma Khetta or anywhere? Talk to a fellow meditator."
      />
    </article>
  );
}
