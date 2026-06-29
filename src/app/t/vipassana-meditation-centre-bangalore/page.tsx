import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  BeforeAfter,
  GradientText,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-meditation-centre-bangalore";
const PUBLISHED = "2026-06-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const PAPHULLA_SITE = "https://paphulla.dhamma.org/";
const PAPHULLA_SCHEDULE = "https://schedule.vridhamma.org/courses/paphulla";
const SUKHALAYA_SITE = "https://sukhalaya.dhamma.org/";
const SUKHALAYA_SCHEDULE = "https://schedule.vridhamma.org/courses/sukhalaya";

export const metadata: Metadata = {
  title: "Vipassana Meditation Centre Bangalore: there are two, on opposite sides",
  description:
    "Search 'vipassana meditation centre bangalore' and most pages hand you one centre. There are two Goenka-tradition centres, on opposite edges of the city: Dhamma Paphulla (Alur Village, off Tumkur Road, NW) and Dhamma Sukhalaya (Arehalli, E). Verified locations, why the side of the city you start from decides which one is yours, online-only registration, and honest after-course notes from a meditator with six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Bangalore has two Vipassana centres, not one",
    description:
      "Dhamma Paphulla (Alur Village, NW, off Tumkur Road) and Dhamma Sukhalaya (Arehalli, E). Opposite outskirts, both free, both online-only. Pick by which side of Bengaluru you start from.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana centre Bangalore = two centres, opposite sides",
    description:
      "Dhamma Paphulla (NW, Alur) and Dhamma Sukhalaya (E, Arehalli). Both free, online application only. Which is yours depends on your side of the city.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Centre Bangalore" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Meditation Centre Bangalore", url: PAGE_URL },
];

const bothCards: BentoCard[] = [
  {
    title: "No fee, either centre",
    description:
      "There is no charge for the course, the food, or the lodging at Paphulla or Sukhalaya. Both run on voluntary donations from people who have finished a course before. A first-time student is never asked to pay.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Online application only",
    description:
      "Neither centre takes walk-ins or instant phone bookings. You apply for a specific dated course online, then wait for a confirmation. Only confirmed students and servers are allowed onto the premises.",
  },
  {
    title: "Both teach the same tradition",
    description:
      "Both are taught in the tradition of S. N. Goenka, in the line of Sayagyi U Ba Khin. The 10-day residential course is the same course at either place; the difference is geography, not method.",
  },
  {
    title: "Both are out on the edge",
    description:
      "Neither sits inside the city. Paphulla is on the north-western fringe at Alur, Sukhalaya on the eastern fringe at Arehalli, both surrounded by farmland. Plan to travel out, not across town.",
  },
  {
    title: "10 days, residential",
    description:
      "First-time students start with the 10-day course at either centre. You stay on site the whole time; there is no commuting in and out.",
  },
];

const relatedPosts = [
  {
    title: "What the 10-day course structure actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "12 days on site, a fixed daily clock, group sittings, and noble silence. Worth reading before you apply at Paphulla or Sukhalaya.",
    tag: "Before you go",
  },
  {
    title: "Rebuilding daily practice after a Vipassana course",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course ends and the hard part starts: keeping a sit going once you are back in Bengaluru and the schedule is gone.",
    tag: "After the course",
  },
  {
    title: "Finding a daily-sit accountability partner",
    href: "/t/vipassana-daily-sit-accountability-partner",
    excerpt:
      "Most people who fall off do it alone. Pairing with another practitioner is the cheapest fix I have found across six courses.",
    tag: "Staying consistent",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where is the Vipassana meditation centre in Bangalore?",
    a: "There are two, in the tradition taught by S. N. Goenka. Dhamma Paphulla is at Alur Village, Dasanapura Hobli, Bangalore North Taluk (Karnataka 562123), on the north-western outskirts off Tumkur Road (NH-4), about 23 km from Bangalore City Railway Station and 16 km from Yeshwantpur. Dhamma Sukhalaya is at Arehalli village on the eastern outskirts, about 38 km from Bangalore City Railway Station. They are on opposite edges of the city, so which one is closer to you depends on which side of Bengaluru you start from.",
  },
  {
    q: "Which Bangalore Vipassana centre should I apply to?",
    a: "Decide by geography and by what is actually scheduled. If you are on the north or west side of the city, Paphulla off Tumkur Road is the shorter trip; if you are on the east side, Sukhalaya at Arehalli is closer. Beyond that, check the official schedule for each centre and apply for whichever has a confirmed 10-day date that fits you. The course itself is the same at both; you are choosing a location and a date, not a better or worse technique.",
  },
  {
    q: "How do I register for a course in Bangalore?",
    a: "Online only, through the official VRI schedule for that centre: schedule.vridhamma.org/courses/paphulla for Dhamma Paphulla and schedule.vridhamma.org/courses/sukhalaya for Dhamma Sukhalaya. Pick a dated course, fill in the application as a new student for a 10-day course, and wait for the centre to confirm. The phone numbers on directory sites are general enquiry lines, not a booking system. A submitted form is an application, not a confirmed seat.",
  },
  {
    q: "How much does a Vipassana course in Bangalore cost?",
    a: "Nothing, at either centre. There is no charge for the course, the food, or the lodging. Both Dhamma Paphulla and Dhamma Sukhalaya run entirely on voluntary donations from past students who want to give others the same chance. As a first-time student you are not asked or expected to pay or donate.",
  },
  {
    q: "Is the centre actually inside Bangalore city?",
    a: "No. Both centres are on the rural outskirts. Dhamma Paphulla is at Alur, on the north-western fringe roughly 3 km off Tumkur Road, with farmland on one side and forest on another. Dhamma Sukhalaya is at Arehalli, on the eastern fringe among farm land. Listings file both under 'Bangalore' because that is the nearest major city and airport, but if you picture a hall in the city centre you will set off in the wrong direction. Use each centre's own travel page once your course is confirmed.",
  },
  {
    q: "Why do some pages only mention Dhamma Paphulla?",
    a: "Paphulla is the older and better-known of the two, so a lot of writing about 'vipassana in Bangalore' simply names it and stops. Dhamma Sukhalaya at Arehalli is the newer centre on the eastern side and gets mentioned less. Both are legitimate centres in the same tradition. If a page implies Bangalore has exactly one centre, it is just out of date.",
  },
  {
    q: "Can this site teach me the technique before I go?",
    a: "No, and I would not want it to. In this tradition the actual technique is only transmitted inside a 10-day residential course by an authorized teacher. I have sat six courses and I am a fellow student, not a teacher. For anything about how to practise, the right sources are dhamma.org and the assistant teachers at the course itself.",
  },
  {
    q: "What happens after the 10 days?",
    a: "You head back into Bengaluru, the silence and the schedule vanish, and keeping a daily sit becomes the real work. That gap is most of what this site is about: notes on rebuilding a daily practice and a free program that pairs you with another practitioner for accountability.",
  },
];

const jsonLd = [
  articleSchema({
    headline:
      "Vipassana Meditation Centre Bangalore: there are two, on opposite sides",
    description:
      "Bangalore has two Vipassana centres in the tradition of S. N. Goenka: Dhamma Paphulla on the north-western outskirts at Alur, off Tumkur Road, and Dhamma Sukhalaya on the eastern outskirts at Arehalli. Verified locations, how to decide between them, online-only registration, and after-course notes.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  }),
  breadcrumbListSchema(breadcrumbSchemaItems),
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
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-4xl mx-auto px-6 pt-8 pb-6">
        <p className="text-sm font-medium text-teal-600 mb-3">
          Vipassana logistics · Bengaluru, Karnataka
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
          Bangalore has{" "}
          <GradientText>two Vipassana centres</GradientText>, on opposite sides
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Most pages that answer this question hand you one centre and stop.
          There are two, in the same Goenka tradition, sitting on opposite edges
          of the city: Dhamma Paphulla out north-west at Alur, and Dhamma
          Sukhalaya out east at Arehalli. Which one is &ldquo;yours&rdquo; mostly
          comes down to which side of Bengaluru you are starting from.
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

      {/* Direct answer */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-teal-200 bg-teal-50/80 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-3">
            Direct answer · verified 2026-06-28
          </p>
          <p className="text-xl text-zinc-900 leading-relaxed font-medium">
            Bangalore is served by <strong>two</strong> Vipassana centres in the
            tradition of S. N. Goenka:{" "}
            <strong>Dhamma Paphulla</strong> at Alur Village, Dasanapura Hobli,
            Bangalore North Taluk (north-western outskirts, off Tumkur Road), and{" "}
            <strong>Dhamma Sukhalaya</strong> at Arehalli on the eastern
            outskirts. Both run <strong>free</strong> 10-day residential courses,
            and both take applications <strong>online only</strong>.
          </p>
          <p className="mt-4 text-zinc-700">
            Verified against the centres&rsquo; own sites:{" "}
            <a
              href={PAPHULLA_SITE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              paphulla.dhamma.org
            </a>{" "}
            and{" "}
            <a
              href={SUKHALAYA_SITE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              sukhalaya.dhamma.org
            </a>
            , plus the official VRI course schedules linked below.
          </p>
        </div>
      </section>

      {/* The myth */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          The thing most write-ups get wrong
        </h2>
        <p className="text-zinc-600 mb-2">
          Toggle between what people usually assume and what is actually true.
        </p>
        <BeforeAfter
          before={{
            label: "The common assumption",
            content:
              "There is one Vipassana centre in Bangalore, it is Dhamma Paphulla, and it is somewhere in or near the city. You can probably ring up and book a place, then travel there on the day.",
            highlights: [
              "One centre",
              "Inside / near the city",
              "Phone booking",
            ],
          }}
          after={{
            label: "What is actually true",
            content:
              "There are two centres, on opposite edges of the city. Dhamma Paphulla sits about 23 km north-west off Tumkur Road; Dhamma Sukhalaya sits about 38 km out on the eastern side at Arehalli. Both are on the rural fringe, both are free, and both take applications online only, with a confirmation step before you are allowed in.",
            highlights: [
              "Two centres, opposite sides",
              "Both on the rural outskirts",
              "Online application, then confirmation",
            ],
          }}
        />
      </section>

      {/* The two centres, side by side */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          The two centres, side by side
        </h2>
        <p className="text-zinc-600 mb-6">
          Same course, same tradition, opposite corners of the map. The numbers
          below are the ones worth holding in your head before you pick a date.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-teal-200 bg-teal-50/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">
              North-west · the established one
            </p>
            <h3 className="text-lg font-bold text-zinc-900 mb-1">
              Dhamma Paphulla
            </h3>
            <p className="text-xs text-zinc-500 mb-3 italic">
              &ldquo;Cheerfulness of Dhamma&rdquo;
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>
                <span className="font-semibold text-zinc-900">Where:</span> Alur
                Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka
                562123, off Tumkur Road (NH-4), roughly 3 km from the highway.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Distance:</span>{" "}
                about 23 km from Bangalore City Railway Station, 16 km from
                Yeshwantpur.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Setting:</span> 10
                acres next to a natural stream, farmland on one side, forest on
                another.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Best if:</span> you
                are starting from the north or west of the city.
              </li>
            </ul>
            <a
              href={PAPHULLA_SCHEDULE}
              className="mt-4 inline-block text-sm text-teal-600 font-medium underline underline-offset-2"
              rel="noopener noreferrer"
            >
              Paphulla course schedule →
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              East · the newer one
            </p>
            <h3 className="text-lg font-bold text-zinc-900 mb-1">
              Dhamma Sukhalaya
            </h3>
            <p className="text-xs text-zinc-500 mb-3 italic">
              &ldquo;Happy Habitation of Dhamma&rdquo;
            </p>
            <ul className="space-y-2 text-sm text-zinc-700 leading-relaxed">
              <li>
                <span className="font-semibold text-zinc-900">Where:</span>{" "}
                Arehalli village, on the eastern outskirts of Bengaluru, among
                open farm land.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Distance:</span>{" "}
                about 38 km from Bangalore City Railway Station, 44 km from
                Yeshwantpur.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Setting:</span> a
                quieter, more recently built centre hosting courses for around
                100 students.
              </li>
              <li>
                <span className="font-semibold text-zinc-900">Best if:</span> you
                are starting from the east side of the city.
              </li>
            </ul>
            <a
              href={SUKHALAYA_SCHEDULE}
              className="mt-4 inline-block text-sm text-teal-600 font-medium underline underline-offset-2"
              rel="noopener noreferrer"
            >
              Sukhalaya course schedule →
            </a>
          </div>
        </div>
        <p className="mt-3 text-xs text-zinc-500">
          Locations and distances confirmed against each centre&rsquo;s own
          how-to-reach pages, June 2026. Always treat the centre&rsquo;s site as
          the source of truth over any directory listing.
        </p>
      </section>

      {/* Why the split matters */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Why the &ldquo;which side&rdquo; question is the whole decision
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Here is the small detail that almost no write-up surfaces: these two
            centres are not near each other. Paphulla is out past Yeshwantpur and
            Makali on Tumkur Road, on the <strong>north-western</strong> rim.
            Sukhalaya is out at Arehalli on the <strong>eastern</strong> rim. To
            get from one to the other you would cross the entire Bengaluru metro,
            traffic and all. They are alternatives, not neighbours.
          </p>
          <p>
            So the practical choice is not &ldquo;which centre is better.&rdquo;
            The course is the same at both. The choice is which gate is the
            shorter, saner trip from where you live, and which one has a confirmed
            10-day date that lines up with the time you can actually take off. If
            you are on the Whitefield or eastern side, do not default to Paphulla
            just because it is the name you saw first; Sukhalaya may be a much
            shorter drive.
          </p>
          <p>
            One tell that you are reading a stale page: if it presents Bangalore
            as having exactly one Vipassana centre, or quotes a single phone
            number as a &ldquo;booking line,&rdquo; it has not caught up. There
            are two centres, and the path at both is an online application,
            followed by a confirmation, followed by travel. Only confirmed
            students and servers are allowed onto the premises. I have sat six
            courses across three centers, and that application-then-confirmation
            path is the same everywhere in this tradition.
          </p>
        </div>
      </section>

      {/* What's true at both */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          What is identical at both centres
        </h2>
        <p className="text-zinc-600">
          Once you have picked a side, everything below is the same whether you
          go to Alur or Arehalli.
        </p>
        <BentoGrid cards={bothCards} />
      </section>

      {/* Registration, in prose */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          How registering actually works
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Open the official VRI schedule for the centre you want, not a
            directory page. For Paphulla that is{" "}
            <a
              href={PAPHULLA_SCHEDULE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/paphulla
            </a>
            ; for Sukhalaya it is{" "}
            <a
              href={SUKHALAYA_SCHEDULE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/sukhalaya
            </a>
            . Each lists the dated courses that are actually running.
          </p>
          <p>
            Pick a date, open its application form, and apply as a new student
            for a 10-day course. Fill it in fully: a recent photo, full address,
            date of birth, occupation, and an emergency contact, since
            incomplete applications can be turned away. Then wait. Courses fill,
            so a submitted form is an application, not a seat. Plan your travel
            out to Alur or Arehalli only after you have a confirmation in hand.
          </p>
          <p>
            There is no walk-in enrolment and no instant phone reservation at
            either centre, whatever an aggregator listing implies. If a page
            offers to &ldquo;book instantly&rdquo; or charges a fee, that is not
            this tradition.
          </p>
        </div>
      </section>

      {/* The part nobody plans for */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The part that actually decides whether it sticks
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Getting out to Alur or Arehalli is the easy bit. The hard bit starts
            on the morning of the 11th day, when you head back into Bengaluru and
            the structure that carried you, the bells, the silence, the people
            sitting beside you, is simply gone. Almost everyone underestimates
            this. I did.
          </p>
          <p>
            I am not going to prescribe a routine, because that is not mine to
            hand out. What I will say plainly, as a peer, is that the meditators
            who keep a daily practice going months later are rarely the ones with
            the most willpower. They are the ones who did not try to do it alone.
            That is the single pattern I have watched repeat across my own
            courses and the people I sat next to.
          </p>
          <p>
            That is the whole reason this site exists. It is a resource for after
            the course: notes on rebuilding a daily sit, and a free program that
            pairs you with another practitioner for daily accountability. If you
            are about to sit at Paphulla or Sukhalaya, the most useful thing you
            can do today is line up who you will check in with once you are back
            in the city.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="text-zinc-800">
            Looking for someone to sit with after Bangalore?{" "}
            <Link
              href="/practice-buddy"
              className="text-teal-600 font-medium underline underline-offset-2"
            >
              The practice-buddy program
            </Link>{" "}
            pairs meditators for daily check-ins. It is free, and it is the most
            reliable thing I have found for keeping a sit alive after a course.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Sitting at Paphulla or Sukhalaya and worried about after?"
          description="Book a short call and I'll share what worked for keeping a daily practice going once you're back in Bengaluru, peer to peer, no teaching."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <FaqSection
          items={faqs}
          heading="Vipassana centre Bangalore: common questions"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16 mb-20">
        <RelatedPostsGrid
          title="Read before and after the course"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Headed to a Bangalore centre? Get peer notes on making it stick."
      />
    </article>
  );
}
