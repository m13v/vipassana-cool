import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  ProofBanner,
  BackgroundGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-sarnath";
const PUBLISHED = "2026-06-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Sarnath: Dhamma Cakka, the center named after the first sermon",
  description:
    "Sarnath has one Goenka-tradition Vipassana center: Dhamma Cakka Vipassana Meditation Centre, opened September 2004, about 4.5 km from the Deer Park where the Buddha gave his first discourse. Address, course cadence, and how to register, with the lineage that makes Sarnath unusual. Verified 2026-06-25 against cakka.vridhamma.org.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana in Sarnath: Dhamma Cakka, named after the turning of the wheel",
    description:
      "The Vipassana center in Sarnath is called Dhamma Cakka, 'Wheel of Dhamma', and it sits about 4.5 km from the spot where the Buddha first taught. Verified address, founding year, and course cadence.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vipassana center in Sarnath is named after the first sermon",
    description:
      "Dhamma Cakka Vipassana Meditation Centre, Sarnath. Opened 2004, ~4.5 km from the Deer Park. Verified facts and the lineage behind the name.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Sarnath" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Sarnath", url: PAGE_URL },
];

const lineageSteps = [
  {
    label: "Bodh Gaya",
    detail:
      "The Buddha reaches full awakening under the Bodhi tree, roughly 240 km southeast of Sarnath.",
  },
  {
    label: "He walks to Sarnath",
    detail:
      "He travels to the Deer Park at Isipatana, now Sarnath, to find his five former companions.",
  },
  {
    label: "The first discourse",
    detail:
      "He gives the Dhammacakkappavattana Sutta, literally 'setting in motion the wheel of the Dhamma'. This is the moment Sarnath is famous for.",
  },
  {
    label: "Dhamma Cakka, 2004",
    detail:
      "Centuries later a Goenka-tradition center opens about 4.5 km away and takes the name Dhamma Cakka, 'Wheel of Dhamma'.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana center in Sarnath?",
    a: "Yes. Dhamma Cakka Vipassana Meditation Centre is the Goenka-tradition (S. N. Goenka, in the tradition of Sayagyi U Ba Khin) center serving the Sarnath and Varanasi area. Its postal address is village Khargipur, Post Piyari (Chaubepur), Sarnath, Varanasi, Uttar Pradesh, Pin 221104. It held its first course in September 2004. Source: cakka.vridhamma.org.",
  },
  {
    q: "How far is the center from the Deer Park where the Buddha first taught?",
    a: "The center's own site states it is located 4.5 km from where the Buddha gave his first discourse. The Deer Park at Sarnath is where the Dhammeka stupa and the modern Mulagandha Kuti Vihara stand, marking the site of that first sermon.",
  },
  {
    q: "What does 'Dhamma Cakka' mean, and why is the center called that?",
    a: "Dhamma Cakka means 'Wheel of Dhamma'. The name points directly to the Dhammacakkappavattana Sutta, the Buddha's first discourse given at Sarnath, whose title means 'setting in motion the wheel of the Dhamma'. Almost every Goenka center is named Dhamma-something, but in Sarnath the name lines up with the literal history of the place.",
  },
  {
    q: "What courses does Dhamma Cakka run?",
    a: "Per its own site, Dhamma Cakka offers two ten-day courses a month and also runs Satipatthana courses plus longer 10-day (special), 20-day, and 30-day courses for eligible old students. Schedules change, so always check the live calendar at schedule.vridhamma.org/courses/cakka before planning travel.",
  },
  {
    q: "How do I apply or register for a course in Sarnath?",
    a: "Applications for every Goenka center, including Dhamma Cakka, go through the official channel. Browse the live schedule at schedule.vridhamma.org/courses/cakka and apply from there, or start at dhamma.org. This site does not handle registrations and is not affiliated with the centers.",
  },
  {
    q: "Do I need to have sat a course before to come to Sarnath?",
    a: "No. The standard ten-day course is open to new students; it is designed for people who have never meditated before. The longer Satipatthana, 20-day, and 30-day courses are reserved for old students who have completed prior ten-day courses. Eligibility is set by the tradition, not by the local center.",
  },
  {
    q: "Is this an official Sarnath center page?",
    a: "No. I am a fellow meditator who has sat six ten-day courses at three centers in California, not a teacher and not connected to the Sarnath center. Everything operational here is sourced from cakka.vridhamma.org and the official schedule. For anything authoritative, go to dhamma.org.",
  },
];

const relatedPosts = [
  {
    title: "What does Vipassana mean?",
    href: "/guide/vipassana-meaning",
    excerpt:
      "The Pali roots of the word, and why 'Dhamma Cakka' and 'Dhammacakkappavattana' share the same vocabulary.",
    tag: "Language",
  },
  {
    title: "How to find a retreat",
    href: "/guide/find-a-retreat",
    excerpt:
      "Reading the official schedule, picking a center, and understanding what is open to new students.",
    tag: "Logistics",
  },
  {
    title: "First course tips",
    href: "/guide/first-course-tips",
    excerpt:
      "What actually helps before a first ten-day sit, from someone who has done six.",
    tag: "Preparation",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana in Sarnath: Dhamma Cakka, the center named after the first sermon",
    description:
      "Sarnath's Goenka-tradition Vipassana center is Dhamma Cakka Vipassana Meditation Centre, opened September 2004, about 4.5 km from the Deer Park where the Buddha gave his first discourse. Verified facts plus the lineage behind the name.",
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

      <BackgroundGrid pattern="dots" glow className="mt-4">
        <header className="max-w-3xl mx-auto px-6 pt-10 pb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Sarnath, Varanasi
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
            The Vipassana center in Sarnath is named after the first sermon
          </h1>
          <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
            Most places have a meditation center that happens to be nearby. Sarnath
            has one that is named after the exact thing the town is famous for. The
            Goenka-tradition center here is called Dhamma Cakka, the Wheel of
            Dhamma, and it sits a few kilometres from the spot where the Buddha
            first turned that wheel. Here are the verified facts, and the lineage
            that makes the name fit.
          </p>
        </header>
      </BackgroundGrid>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="6 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-25)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Yes, there is a Vipassana center in Sarnath:{" "}
            <strong>Dhamma Cakka Vipassana Meditation Centre</strong>, in village
            Khargipur, Post Piyari (Chaubepur), Sarnath, Varanasi, Uttar Pradesh,
            Pin 221104. It teaches the technique as taught by S. N. Goenka, held
            its first course in <strong>September 2004</strong>, sits about{" "}
            <strong>4.5 km</strong> from where the Buddha gave his first discourse,
            and runs <strong>two ten-day courses a month</strong> plus longer
            courses for old students. Browse dates and apply at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/cakka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              schedule.vridhamma.org/courses/cakka
            </a>
            . Verified against the center's own site,{" "}
            <a
              href="https://cakka.vridhamma.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              cakka.vridhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why the name is the whole story
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Goenka-tradition centers almost all carry a name that starts with
          Dhamma: Dhamma Giri, Dhamma Manda, Dhamma Pakasa, and so on. It is a
          house style. So at first glance Dhamma Cakka looks like just another one
          of those. It is not. The name is a direct quotation of the event that
          put Sarnath on the map.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          After his awakening at Bodh Gaya, the Buddha walked to the Deer Park at
          Isipatana, the place now called Sarnath, and gave his first teaching to
          five former companions. That teaching is recorded as the{" "}
          <em>Dhammacakkappavattana Sutta</em>. Break the long compound apart and
          you get <em>dhamma</em> (the teaching), <em>cakka</em> (wheel), and{" "}
          <em>pavattana</em> (setting in motion). The traditional English is
          &ldquo;setting in motion the wheel of the Dhamma.&rdquo; The center's
          name, Dhamma Cakka, is the first two words of that title. It means
          &ldquo;Wheel of Dhamma.&rdquo;
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you have read our note on{" "}
          <a
            href="/guide/vipassana-meaning"
            className="text-teal-700 underline hover:text-teal-900"
          >
            what Vipassana means
          </a>
          , this is the same Pali vocabulary showing up again. In Sarnath the
          place, the historical event, and the center's name all point at one
          another. That is rare, and no directory listing tells you about it.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-10">
        <FlowDiagram
          title="From the first discourse to the center named after it"
          steps={lineageSteps}
        />
      </section>

      <ProofBanner
        metric="2004"
        quote="With its first course in September 2004, Dhamma Cakka offers two ten-day courses a month and also Satipatthana courses."
        source="cakka.vridhamma.org, the center's official site"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The facts, in one place
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Everything below comes from the center's own site and the official
          course schedule, verified on 2026-06-25. Schedules and contact details
          change, so treat the live links as the source of truth and this as a
          snapshot.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Center name
            </p>
            <p className="mt-2 text-zinc-900 font-medium">
              Dhamma Cakka Vipassana Meditation Centre
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              &ldquo;Wheel of Dhamma&rdquo;
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Address
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              Village Khargipur, Post Piyari (Chaubepur), Sarnath, Varanasi,
              Uttar Pradesh, Pin 221104
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              First course
            </p>
            <p className="mt-2 text-zinc-900 font-medium">September 2004</p>
            <p className="mt-1 text-sm text-zinc-600">
              Running back-to-back courses since.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Distance from the Deer Park
            </p>
            <p className="mt-2 text-zinc-900 font-medium">About 4.5 km</p>
            <p className="mt-1 text-sm text-zinc-600">
              From the site of the Buddha&apos;s first discourse.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Courses
            </p>
            <p className="mt-2 text-zinc-700 leading-relaxed">
              Two ten-day courses a month, plus Satipatthana, 20-day, and 30-day
              courses for old students.
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
            href="https://schedule.vridhamma.org/courses/cakka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            schedule.vridhamma.org/courses/cakka
          </a>
          . Center site:{" "}
          <a
            href="https://cakka.vridhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            cakka.vridhamma.org
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
          Sitting where the teaching started
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          People sometimes ask whether the location of a center changes anything
          about a course. Honestly, the schedule is the same everywhere, the Code
          of Discipline is the same everywhere, and the technique is transmitted
          the same way by authorized assistant teachers no matter which center you
          sit at. A ten-day course in Sarnath is structurally identical to one in
          California, which I can say because I have sat six of them across three
          centers and the daily clock never moved.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          What changes is everything outside the meditation hall: the heat, the
          dust, the sound of the place, the knowledge that a few kilometres away is
          the Dhammeka stupa marking the first sermon. None of that is the practice
          itself. But for some people the context matters, and Sarnath is about as
          loaded with context as a location gets. If you want the structural detail
          of what those ten days actually contain, that lives in our{" "}
          <a
            href="/t/10-day-course-structure"
            className="text-teal-700 underline hover:text-teal-900"
          >
            breakdown of the 10-day course structure
          </a>
          .
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher and I have not sat at the Sarnath center myself, so I
          will not pretend to describe what the technique feels like there or tell
          you how to practice. For anything operational, the only honest pointer is{" "}
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
          heading="Planning a sit and want a fellow meditator to talk it through?"
          description="A short call to compare notes on picking a center, applying, and keeping a daily practice afterward. Not teaching, just experience from six courses."
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-4">
        <FaqSection items={faqs} heading="Vipassana in Sarnath: common questions" />
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Language, logistics, and what helps before a first course."
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about sitting in Sarnath or anywhere? Talk to a fellow meditator."
      />
    </article>
  );
}
