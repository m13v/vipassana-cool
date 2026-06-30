import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  NumberTicker,
  ProofBanner,
  InlineTestimonial,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-belapur";
const PUBLISHED = "2026-06-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const CENTER_SITE = "https://vipula.vridhamma.org/";
const SCHEDULE_URL = "https://schedule.vridhamma.org/courses/vipula";
const VRI = "https://www.vridhamma.org/";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title: "Vipassana in Belapur is Dhamma Vipula, and you can't just call to book",
  description:
    "The Vipassana centre people search for as 'Belapur' is Dhamma Vipula on Parsik Hill, CBD Belapur, Navi Mumbai. Here's the verified address, why a first-timer can only get in through a 10-day course applied for online (the phone numbers in directory listings are enquiry lines, not a booking system), and how not to confuse it with the Gorai Pagoda. Read by a meditator with six courses across three centers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Belapur: it's Dhamma Vipula on Parsik Hill",
    description:
      "Verified address, the online-only registration path, and the one thing every directory listing gets wrong: new students can't book the 1-day or 3-day courses at all.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Belapur is Dhamma Vipula",
    description:
      "Where it actually is, how a first-timer really gets a seat, and why the phone numbers everyone lists won't book you in.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Belapur" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Belapur", url: PAGE_URL },
];

type PlaceFact = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  note: string;
};

const placeFacts: PlaceFact[] = [
  {
    value: 2005,
    label: "Year it opened",
    note: "On the highest point of Parsik Hill in Navi Mumbai.",
  },
  {
    value: 3,
    suffix: " acres",
    label: "Forested grounds",
    note: "A wooded plateau above CBD Belapur, not a city hall.",
  },
  {
    value: 100,
    prefix: "~",
    suffix: " cells",
    label: "Pagoda meditation cells",
    note: "Individual cells for course students only, not a public monument.",
  },
  {
    value: 3,
    prefix: "~",
    suffix: " km",
    label: "From CBD Belapur station",
    note: "Uphill from the station, reachable by road, rail and harbour line.",
  },
];

const registrationSteps = [
  {
    title: "Open the official course schedule, not a directory",
    description:
      "Go to schedule.vridhamma.org/courses/vipula. This is the single source of truth for what is running at Belapur and who can join. The JustDial card, Google listing, and the centre's enquiry phone numbers do not book a seat.",
  },
  {
    title: "Find a 10-day course, the only doorway for a first-timer",
    description:
      "On the Vipula schedule, the 1-day and 3-day courses are reserved for old students. A new student looks specifically for a 10-day course, the full residential introduction. Short courses are not a shortcut in.",
  },
  {
    title: "Check the 'Open' status before you get attached to a date",
    description:
      "Each course shows new-student availability. A 10-day course you can apply to reads as 'Open'; the 1-day and 3-day rows read 'New Male - N/A, New Female - N/A', which is the schedule telling you, plainly, that newcomers cannot book those.",
  },
  {
    title: "Apply online and wait for the centre to confirm",
    description:
      "Fill in the application form attached to that course. The course, the food and the lodging are free, funded entirely by past students' donations. You are confirmed only when the centre writes back, not when you submit.",
  },
];

const confusions: { wrong: string; right: string }[] = [
  {
    wrong:
      "It's the Global Vipassana Pagoda at Gorai that I've seen photos of.",
    right:
      "No. That golden dome at Gorai is a separate place across the bay, with its own residential centre and a short walk-in intro for sightseers. Belapur's Dhamma Vipula has its own pagoda on Parsik Hill, but those 100-odd cells are working meditation cells for enrolled students, not a monument you tour.",
  },
  {
    wrong: "I'll just call the number on the listing and book a 1-day taster.",
    right:
      "The numbers on directory pages are office enquiry lines (roughly 10am to 5pm). The 1-day and 3-day courses they mention are for people who have already sat a full 10-day course somewhere. A first-timer's only entry is a 10-day course, applied for online.",
  },
  {
    wrong: "Belapur, Navi Mumbai and Mumbai centres are all the same queue.",
    right:
      "The greater Mumbai area has more than one centre and a separate set of one-day, old-student sittings. 'Vipassana Belapur' specifically means Dhamma Vipula on Parsik Hill. Applying there is its own schedule, not interchangeable with the others.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana centre in Belapur?",
    a: "It is Dhamma Vipula Vipassana Meditation Center, at Plot No. 91A, Sector 26, Parsik Hill, CBD Belapur, Navi Mumbai 400614. It sits on the highest point of Parsik Hill, on roughly three acres of wooded land, about 3 km uphill from CBD Belapur railway station. It opened in 2005 and is connected by the harbour, western and central railway lines as well as by road.",
  },
  {
    q: "How do I actually register for a course at Dhamma Vipula?",
    a: "Only through the official schedule at schedule.vridhamma.org/courses/vipula. Find a 10-day course showing 'Open' for new students, then fill in the online application form for that specific date and wait for the centre to confirm. The phone numbers and email addresses you see on directory and review sites are enquiry lines, not a booking system.",
  },
  {
    q: "Can a first-timer join a 1-day or 3-day course at Belapur instead?",
    a: "No. On the Vipula schedule the 1-day and 3-day courses are marked 'New Male - N/A, New Female - N/A', meaning they are reserved for students who have already completed a full 10-day course. There is no shorter introduction for a newcomer. The 10-day residential course is the only doorway in, by design across the whole tradition.",
  },
  {
    q: "Is Dhamma Vipula the same as the Global Vipassana Pagoda at Gorai?",
    a: "No, and this is the most common mix-up. The Global Vipassana Pagoda is the large golden dome at Gorai, across the bay, with its own adjacent residential centre and a short walk-in introduction for visitors. Dhamma Vipula in Belapur is a separate residential centre on Parsik Hill. It has its own pagoda, but those cells are for enrolled course students, not a tourist attraction.",
  },
  {
    q: "How much does a course at Dhamma Vipula cost?",
    a: "Nothing. The 10-day course, accommodation and all meals are free. The tradition runs entirely on voluntary donations from people who have already completed a course and want to give others the same opportunity. You are never charged, and you can only donate after you have sat a full course yourself.",
  },
  {
    q: "What facilities does the Belapur centre have?",
    a: "Dhamma Vipula is a two-storey building that accommodates roughly 100 or more students, with self-contained residential quarters, a dining hall, an air-conditioned meditation hall and a pagoda with around 100 individual cells. There is also an elevator for elderly students, pregnant students, and anyone with health concerns. It is a purpose-built residential centre, not a rented camp.",
  },
  {
    q: "Will this page teach me the technique before I go?",
    a: "No, and that is deliberate. In this tradition the method is only ever transmitted inside the 10-day residential course by an authorized teacher. I have sat six courses and I am a fellow student, not a teacher. For anything about how to practise, the right sources are dhamma.org and the assistant teachers at the course itself. This page is just about where Belapur's centre is and how to get a seat.",
  },
];

const relatedPosts = [
  {
    title: "What the 10-day course structure actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily clock, group sittings and noble silence that the Belapur course shares with every centre in the tradition. Read this before you apply.",
    tag: "Before you go",
  },
  {
    title: "Vipassana in Pune, decoded",
    href: "/t/vipassana-pune",
    excerpt:
      "The nearest big-city sibling search. Same online-only registration, a different centre, and the same confusion about which listing actually books you in.",
    tag: "Nearby",
  },
  {
    title: "Dhamma Setu reviews, read honestly",
    href: "/t/dhamma-setu-vipassana-meditation-center-reviews",
    excerpt:
      "How to read centre reviews when most of the complaints describe the tradition, not the place. The same lens works for Dhamma Vipula's ratings.",
    tag: "Reading reviews",
  },
];

const jsonLd = [
  articleSchema({
    headline:
      "Vipassana Belapur is Dhamma Vipula on Parsik Hill: address and how to actually register",
    description:
      "The Vipassana centre searched for as 'Belapur' is Dhamma Vipula, Plot 91A Sector 26 Parsik Hill, CBD Belapur, Navi Mumbai 400614. Verified location, the online-only registration path, why new students can only join a 10-day course, and how not to confuse it with the Global Vipassana Pagoda at Gorai.",
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
          Where it actually is · Dhamma Vipula, CBD Belapur
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
          &ldquo;Vipassana Belapur&rdquo; means one specific place on{" "}
          <span className="text-teal-600">Parsik Hill</span>
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          When people search for Vipassana in Belapur, they are looking for
          Dhamma Vipula: a residential centre on top of Parsik Hill in Navi
          Mumbai. The address is easy to find. The part every listing gets wrong
          is how you get in, so let me lay it out, peer to peer, as someone
          who&rsquo;s sat six courses across three centers.
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
        <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-3">
            Direct answer · verified 2026-06-29
          </p>
          <p className="text-xl text-zinc-900 leading-relaxed font-medium">
            Belapur&rsquo;s Vipassana centre is{" "}
            <strong>Dhamma Vipula Vipassana Meditation Center</strong>, at Plot
            No. 91A, Sector 26, Parsik Hill, CBD Belapur, Navi Mumbai 400614,
            about <strong>3 km uphill from CBD Belapur station</strong>. A new
            student joins only a <strong>free 10-day residential course</strong>,
            applied for online at the official schedule. The phone numbers on
            directory listings are enquiry lines, not a booking system.
          </p>
          <p className="mt-4 text-zinc-700">
            Verified against the centre&rsquo;s own page at{" "}
            <a
              href={CENTER_SITE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              vipula.vridhamma.org
            </a>{" "}
            and the official{" "}
            <a
              href={SCHEDULE_URL}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              course schedule
            </a>{" "}
            on 2026-06-29.
          </p>
        </div>
      </section>

      {/* Place facts */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          What sits on top of Parsik Hill
        </h2>
        <p className="text-zinc-600 mb-7">
          Dhamma Vipula opened in 2005 and is purpose-built, not a rented camp.
          It is one of the quieter facts about the place: you climb up out of CBD
          Belapur into roughly three acres of woods, and the city drops away.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {placeFacts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <div className="text-3xl font-bold text-zinc-900">
                <NumberTicker
                  value={f.value}
                  prefix={f.prefix}
                  suffix={f.suffix}
                />
              </div>
              <div className="mt-1 text-sm font-semibold text-teal-700">
                {f.label}
              </div>
              <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                {f.note}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-zinc-500 leading-relaxed">
          The building accommodates roughly a hundred students, with
          self-contained residential quarters, a dining hall, an air-conditioned
          meditation hall, and an elevator for elderly or unwell students.
          Numbers cross-checked against the centre&rsquo;s own listing and the{" "}
          <a
            href={VRI}
            className="text-teal-600 underline underline-offset-2"
            rel="noopener noreferrer"
          >
            Vipassana Research Institute
          </a>{" "}
          centre directory.
        </p>
      </section>

      {/* The anchor: registration mechanic */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          The one thing every directory listing gets wrong
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Almost every page that lists Dhamma Vipula says the same friendly
            thing: &ldquo;free 1, 3 and 10 day courses,&rdquo; with a phone
            number and a call button. Read literally, it suggests you can ring up
            and book a short taster this weekend. You can&rsquo;t, and the
            official schedule says so out loud.
          </p>
          <p>
            Open{" "}
            <a
              href={SCHEDULE_URL}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/vipula
            </a>{" "}
            and look at the 1-day and 3-day rows. Each one reads{" "}
            <strong>&ldquo;New Male - N/A, New Female - N/A.&rdquo;</strong> That
            is not a glitch. The short courses are reserved for people who have
            already completed a full 10-day course. For a first-timer, the only
            way in is a 10-day course showing &ldquo;Open,&rdquo; applied for
            online. The phone numbers are office enquiry lines, helpful for a
            question, useless as a booking system.
          </p>
        </div>

        <div className="mt-8">
          <StepTimeline
            title="How a first-timer actually gets a seat"
            steps={registrationSteps}
          />
        </div>
      </section>

      <ProofBanner
        metric="N/A"
        quote="On the Vipula schedule, every 1-day and 3-day course lists 'New Male - N/A, New Female - N/A'. For a newcomer, the 10-day residential course is the only doorway in."
        source="schedule.vridhamma.org/courses/vipula, checked 2026-06-29"
      />

      {/* Disambiguation */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          Three things people mean by &ldquo;Vipassana Belapur,&rdquo; and which
          one is right
        </h2>
        <p className="text-zinc-600 mb-7">
          The search term collects a few different mental pictures. Here are the
          common ones, and what&rsquo;s actually true.
        </p>
        <div className="space-y-4">
          {confusions.map((c) => (
            <div
              key={c.wrong}
              className="rounded-2xl border border-zinc-200 bg-white p-6 sm:flex sm:gap-6"
            >
              <div className="sm:w-2/5 mb-3 sm:mb-0">
                <span className="inline-block rounded-full border border-zinc-200 bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600">
                  What people assume
                </span>
                <p className="mt-3 text-base font-semibold text-zinc-900 leading-snug">
                  {c.wrong}
                </p>
              </div>
              <div className="sm:w-3/5">
                <span className="inline-block rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                  What&rsquo;s true
                </span>
                <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                  {c.right}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real voice */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          What students actually say about Belapur
        </h2>
        <p className="text-zinc-600 mb-6">
          Dhamma Vipula reads around 4.5 out of 5 across its public listings. The
          reviews that matter least are about amenities; the ones worth reading
          describe the discipline and the people who run the place.
        </p>
        <div className="space-y-4">
          <InlineTestimonial
            quote="Administration and discipline are excellent. Register for a 10-day course, a must experience in life as early as possible."
            name="Dr Dhawal Wadaskar"
            role="Public review of Dhamma Vipula"
            stars={5}
          />
          <InlineTestimonial
            quote="The layout is intuitive, sevaks were helpful, and the teacher was critical in moving forward in practice."
            name="Amit G"
            role="Public review of Dhamma Vipula"
            stars={5}
          />
        </div>
        <p className="mt-5 text-sm text-zinc-500 leading-relaxed">
          Quotes drawn from the public Balancegurus listing for Dhamma Vipula
          (about 4.5/5 across 30 reviews there). Notice the second one points
          straight at the same path: register for a 10-day course. That is the
          door, not a phone call.
        </p>
      </section>

      {/* The after gap */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The part the address can&rsquo;t help you with
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Finding Dhamma Vipula is the easy 10 percent. You climb Parsik Hill,
            you hand over your phone, you sit ten days. The hard 90 percent
            starts the morning you come back down into Navi Mumbai and try to
            keep something going on your own.
          </p>
          <p>
            I&rsquo;m not going to prescribe a routine, that&rsquo;s not mine to
            hand out, and the technique itself only ever comes from the course.
            But across my own six courses and the people I&rsquo;ve sat next to,
            the pattern is consistent: the ones who keep a daily practice alive
            afterward are rarely the ones with the most willpower. They&rsquo;re
            the ones who didn&rsquo;t try to do it alone.
          </p>
          <p>
            That gap is the whole reason this site exists. It&rsquo;s a resource
            for after the course, with a free program that pairs you with another
            meditator for daily accountability. If Belapur is where you&rsquo;re
            headed, the most useful thing you can line up now is who you&rsquo;ll
            check in with once you&rsquo;re back.
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5">
          <p className="text-zinc-800">
            Want someone to sit with after the course?{" "}
            <Link
              href="/practice-buddy"
              className="text-teal-600 font-medium underline underline-offset-2"
            >
              The practice-buddy program
            </Link>{" "}
            pairs meditators for daily check-ins. It&rsquo;s free, and it&rsquo;s
            the most reliable thing I&rsquo;ve found for keeping a sit alive once
            the centre&rsquo;s schedule is gone.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Headed to Belapur? Sort out the after, not just the address."
          description="Book a short call and I'll share, peer to peer, what actually kept a daily practice alive once I was back from a course. No teaching, just what worked."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <FaqSection
          items={faqs}
          heading="Vipassana Belapur: common questions"
        />
        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          For anything about how to actually practise, or any operational
          question about a course, the authoritative sources are{" "}
          <a
            href={DHAMMA_ORG}
            className="text-teal-600 underline underline-offset-2"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and the assistant teachers at the 10-day course. This page is a
          location and logistics note, not instruction.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16 mb-20">
        <RelatedPostsGrid
          title="Read before you apply"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Headed to Dhamma Vipula? Get peer notes on making it stick."
      />
    </article>
  );
}
