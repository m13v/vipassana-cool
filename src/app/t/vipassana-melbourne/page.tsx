import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  TerminalOutput,
  ComparisonTable,
  RelatedPostsGrid,
  FaqSection,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-melbourne";
const PUBLISHED = "2026-06-28";
const BOOKING = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Melbourne: The Center Is Not in the City, It Is in Woori Yallock",
  description:
    "There is exactly one Goenka-tradition Vipassana center serving Melbourne: Dhamma Aloka in Woori Yallock, Victoria, about 65 km east of the CBD. A 401-center dataset shows it is the only Victorian center, and the city sittings are old-student only. Here is the real map.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Melbourne: The Center Is in Woori Yallock, Not the CBD",
    description:
      "Melbourne has no beginner drop-in Vipassana class in the Goenka tradition. The 10-day course happens at Dhamma Aloka in the Yarra Valley. Verified against a 401-center dataset.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Melbourne: the center is in Woori Yallock",
    description:
      "One Goenka center for all of Victoria: Dhamma Aloka, Woori Yallock, ~65 km from the Melbourne CBD. City group sittings are old-student only.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "Where is the Vipassana center for Melbourne?",
    a: "In the Goenka tradition (the lineage most people mean when they search 'Vipassana'), the center that serves greater Melbourne is Dhamma Aloka, located in Woori Yallock in the Yarra Valley, Victoria, roughly 65 km east of the Melbourne CBD. It is a residential center, not a city drop-in space. When I pulled the full list of registered centers (401 of them worldwide), Victoria had exactly one center, and that is it. The 10-day course you would sit as a first-time student happens there, not downtown.",
  },
  {
    q: "Is there a drop-in Vipassana class in central Melbourne for beginners?",
    a: "Not in the Goenka tradition. There are weekly group sittings organized in and around Melbourne, but the short formats (one-day courses, group sittings, Satipatthana courses) are reserved for old students, meaning people who have already completed at least one 10-day residential course. The only format that admits a first-time student is the 10-day course itself, and that is residential at Dhamma Aloka. If you specifically want a casual weekly drop-in class in the city you can walk into with no prior course, you are looking for a different lineage (Insight or secular mindfulness groups that share the word vipassana but follow different rules).",
  },
  {
    q: "How far is Dhamma Aloka from Melbourne and how do people get there?",
    a: "Woori Yallock sits in the Yarra Valley, around 65 km east of the CBD, roughly an hour by car depending on traffic. The center is residential: students arrive on day zero, hand in phones, and stay on site for the full course. Many people without a car arrange a lift through the carpooling threads that circulate before each course. Exact arrival logistics, what to bring, and current public-transport options are published on the center's own schedule pages, not here.",
  },
  {
    q: "I have never sat a course. What is my actual path in Melbourne?",
    a: "Your entry point is a 10-day residential course at Dhamma Aloka. You apply through the course schedule, you are accepted (or waitlisted, these fill fast), and you sit the full ten days. After that you become an 'old student' and the Melbourne-area group sittings and short courses open up to you. There is no shortcut that lets a brand-new person attend the city sittings first. This site does not teach the technique or tell you how to sit; for anything operational, the authoritative source is dhamma.org and an authorized assistant teacher.",
  },
  {
    q: "Why is there only one center for the whole state of Victoria?",
    a: "The tradition grows slowly and deliberately. Centers are built and run entirely on donations and volunteer (dhamma service) labor, with no fees charged for courses, so capacity expands at the pace of donated land, money, and time rather than market demand. New South Wales has two centers plus a regional group; Queensland has two. Victoria, despite Melbourne's size, currently runs everything through Dhamma Aloka. That is why the term 'Vipassana Melbourne' resolves to a place an hour outside the city rather than a studio on a city block.",
  },
  {
    q: "Does it cost money to sit a course near Melbourne?",
    a: "Courses in this tradition are run free of charge. There is no course fee, and you cannot pay your way in. At the end, old students may give a voluntary donation so a future student can sit, but that is optional and only old students can give it. This is part of why there is no commercial 'Vipassana studio' in the Melbourne CBD: the model is donation-funded residential courses, not a paid class you book by the hour.",
  },
];

const dataLines = [
  { type: "command" as const, text: "node scripts/dhamma-centers.mjs" },
  { type: "output" as const, text: "fetched registered centers: 401 total" },
  { type: "command" as const, text: "filter countryCode == 'AU'" },
  { type: "output" as const, text: "Australia: 10 entries (centers + regional groups)" },
  { type: "command" as const, text: "filter displayName contains 'Victoria'" },
  { type: "success" as const, text: "1 match -> Dhamma Aloka" },
  { type: "info" as const, text: 'name: "Dhamma Aloka"' },
  { type: "info" as const, text: 'displayName: "Victoria, Woori Yallock"' },
  { type: "info" as const, text: 'countryCode: "AU"  isCenter: true' },
  { type: "info" as const, text: 'scheduleUrl: "/en/schedules/schaloka"' },
];

const comparisonRows = [
  {
    feature: "Where it physically is",
    ours: "Dhamma Aloka, Woori Yallock, ~65 km east of the CBD",
    competitor: "A studio or hall inside the city",
  },
  {
    feature: "Who the first session is open to",
    ours: "Anyone, but only as a full 10-day residential course",
    competitor: "Walk-in beginners welcome to a single class",
  },
  {
    feature: "City group sittings",
    ours: "Old students only (must have sat a 10-day course)",
    competitor: "Open weekly drop-in for all levels",
  },
  {
    feature: "Cost",
    ours: "Free, donation-funded, old students may give after",
    competitor: "Per-class fee or membership",
  },
  {
    feature: "Format",
    ours: "Residential, on-site, phones handed in",
    competitor: "Come and go around your week",
  },
];

const related = [
  {
    title: "Is there a Vipassana meditation class?",
    href: "/t/vipassana-meditation-class",
    excerpt:
      "Why almost no short Goenka 'class' is open to beginners, with a live count from the course search.",
    tag: "Context",
  },
  {
    title: "10-day course structure",
    href: "/t/10-day-course-structure",
    excerpt:
      "What the ten days at a residential center actually look like, from arrival to day 10.",
    tag: "Logistics",
  },
  {
    title: "Vipassana retreat",
    href: "/t/vipassana-retreat",
    excerpt:
      "What a residential Vipassana retreat is, who runs them, and what to expect before you apply.",
    tag: "Overview",
  },
];

const jsonLd = [
  articleSchema({
    headline:
      "Vipassana in Melbourne: The Center Is Not in the City, It Is in Woori Yallock",
    description:
      "Melbourne's Goenka-tradition Vipassana center is Dhamma Aloka in Woori Yallock, Victoria, the only Victorian center in a 401-center dataset. City sittings are old-student only.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  }),
  breadcrumbListSchema([
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t/vipassana-retreat" },
    { name: "Vipassana Melbourne", url: PAGE_URL },
  ]),
  faqPageSchema(faqs),
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/t/vipassana-retreat" },
            { label: "Vipassana Melbourne" },
          ]}
        />
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-8 pb-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Vipassana in Melbourne is not in the city. It is an hour east, in
          Woori Yallock.
        </h1>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          If you typed &ldquo;vipassana melbourne&rdquo; expecting a studio on a
          city block, here is the honest map. In the Goenka tradition, all of
          Victoria is served by a single residential center, and the short
          sittings you might imagine joining downtown are closed to anyone who
          has not already sat a course.
        </p>
        <div className="mt-6">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </div>
      </header>

      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified 2026-06-28)
          </div>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The Vipassana center serving Melbourne in the Goenka tradition is{" "}
            <strong>Dhamma Aloka</strong>, in <strong>Woori Yallock</strong>,
            Victoria, about <strong>65 km east of the Melbourne CBD</strong> in
            the Yarra Valley. It is the only Victorian center on the official
            register. There is no beginner drop-in class in the city; the only
            way in for a first-time student is the residential 10-day course at
            that center. Schedules and applications live at{" "}
            <a
              href="https://www.dhamma.org/en/schedules/schaloka"
              className="text-teal-700 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          I checked the actual register, not a search guess
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Every guide on this topic says some version of &ldquo;there&rsquo;s a
          center near Melbourne.&rdquo; None of them show you the underlying
          list. The repository behind this site keeps a snapshot of the official
          center directory in{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            scripts/dhamma-centers.json
          </code>
          . It holds 401 registered centers worldwide. Filter it down to
          Australia and you get ten entries; filter those to Victoria and
          exactly one record comes back.
        </p>
        <div className="mt-6">
          <TerminalOutput title="scripts/dhamma-centers.json" lines={dataLines} />
        </div>
        <p className="mt-6 text-zinc-700 leading-relaxed">
          That single record is the anchor fact of this page. The center&rsquo;s
          subdomain is <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">aloka</code>,
          its display name is &ldquo;Victoria, Woori Yallock,&rdquo; and its
          schedule lives at the path{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
            /en/schedules/schaloka
          </code>
          . If a page tells you about a downtown Melbourne Goenka venue, it is
          describing something that is not on the register.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          What people expect vs. how it actually works
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A lot of the confusion comes from the word &ldquo;vipassana&rdquo;
          being shared across very different setups. The drop-in, pay-as-you-go
          weekly class is a real thing in other lineages. It is just not what
          the Goenka center near Melbourne offers.
        </p>
        <div className="mt-6">
          <ComparisonTable
            productName="Goenka center (Dhamma Aloka)"
            competitorName="Drop-in city class (other lineages)"
            rows={comparisonRows}
          />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why Melbourne, a city of five million, has one center
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the part that surprises people. The tradition does not scale
          with demand. Courses are run free of charge and funded entirely by
          donations from people who have already sat. Centers are built on
          donated land and kept running by volunteers doing dhamma service.
          Growth is gated by donated resources, not by how many Melburnians want
          to sit. New South Wales runs two centers and a regional group;
          Queensland runs two. Victoria channels everything through Dhamma
          Aloka. So the phrase &ldquo;Vipassana Melbourne&rdquo; resolves to a
          quiet site in the Yarra Valley rather than a storefront in Fitzroy or
          the CBD.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am writing as a fellow practitioner, not a teacher. I have sat six
          courses at three centers in the US and done dhamma service at courses,
          so I have watched this donation-and-volunteer model up close. It is
          slow on purpose, and that slowness is why the map looks the way it
          does. For anything about how to actually practice, the right place is{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher, not this page.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          If you are in Melbourne and brand new
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Your entry point is the residential 10-day course at Dhamma Aloka. You
          apply through its schedule, get accepted or waitlisted (courses fill
          fast, so apply early), and sit the full ten days on site. After that
          you are an old student, and the Melbourne-area group sittings and
          short courses open up to you. There is no version of this where a
          first-timer joins the city sittings first. The order is fixed: course,
          then everything else.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For a closer look at what those ten days actually involve before you
          commit, the{" "}
          <Link href="/t/10-day-course-structure" className="text-teal-700 underline">
            10-day course structure
          </Link>{" "}
          breakdown walks through it day by day, and the{" "}
          <Link href="/t/vipassana-meditation-class" className="text-teal-700 underline">
            meditation class
          </Link>{" "}
          piece explains why the short formats stay closed to beginners.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING}
        site="Vipassana"
        heading="Sitting your first course near Melbourne and worried the habit will not survive after?"
        description="Book a call and I will share, peer to peer, how I kept a daily practice going after my own first course and how the practice-buddy matching works."
      />

      <section className="max-w-3xl mx-auto px-6 py-8">
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <RelatedPostsGrid posts={related} />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Questions about getting to a course near Melbourne or keeping practice after? Book a quick call."
      />
    </article>
  );
}
