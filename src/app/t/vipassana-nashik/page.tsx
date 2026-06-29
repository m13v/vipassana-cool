import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  GlowCard,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-nashik";
const PUBLISHED = "2026-06-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const NASIKA_SITE = "https://nasika.vridhamma.org/";
const NASIKA_SCHEDULE = "https://schedule.vridhamma.org/courses/nasika";
const GIRI_SITE = "https://giri.vridhamma.org/";
const TAPOVANA_PAGE =
  "https://www.vridhamma.org/Dhamma-Tapovana-The-Centre-for-Long-Courses";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title: "Vipassana Nashik: three centres, and the one you actually mean",
  description:
    "Search 'vipassana nashik' and three different Dhamma centres come back. The one inside Nashik city is Dhamma Nasika at Satpur. The famous Dhamma Giri is 45 km away at Igatpuri. Dhamma Tapovana beside it runs long courses only and would turn a first-timer away. Verified locations, who each one is for, and how to register, from a meditator with six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Nashik = three centres, only one for your first course",
    description:
      "Dhamma Nasika (in Nashik, Satpur), Dhamma Giri (45 km out at Igatpuri), and Dhamma Tapovana (long courses only). Which one to apply to and how, verified June 2026.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Nashik: which of the three centres do you mean?",
    description:
      "Dhamma Nasika in the city, Dhamma Giri 45 km away at Igatpuri, Dhamma Tapovana for long courses only. The disambiguation nobody hands you.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana Nashik" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana Nashik", url: PAGE_URL },
];

const centreCards = [
  {
    title: "Dhamma Nasika — the centre in Nashik",
    description:
      "'Nose of Dhamma.' A 17-acre triangular plot at Satpur given by the Municipal Corporation of Nashik, away from the city noise but within a convenient distance of it, ringed by the Sahyadri mountains. Runs 10-day courses for new students. If you literally mean a centre inside Nashik, this is it.",
    size: "2x1" as const,
    accent: true,
  },
  {
    title: "Dhamma Giri — Igatpuri, 45 km out",
    description:
      "'Hill of Dhamma.' The world-famous main centre, on the Mumbai-Agra highway at Igatpuri, 45 km from Nashik and 136 km from Mumbai. It sits in Nashik district, which is why listings tag it 'Nashik', but it is a town away. Nearest railway station: Igatpuri.",
    size: "1x1" as const,
  },
  {
    title: "Dhamma Tapovana — long courses only",
    description:
      "On the land adjacent to the southern side of Dhamma Giri. Described as a centre 'exclusively for long courses' (20, 30, 45 and 60 days). A first-time student cannot sit a 10-day course here. Know it exists; do not point a beginner at it.",
    size: "1x1" as const,
  },
];

const relatedPosts = [
  {
    title: "What the 10-day course structure actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "12 days on site, a fixed daily clock, group sittings, and noble silence. Read this before you apply at Dhamma Nasika or Dhamma Giri.",
    tag: "Before you go",
  },
  {
    title: "Rebuilding daily practice after a Vipassana course",
    href: "/t/after-vipassana-daily-practice-rewire-habits",
    excerpt:
      "The course ends and the hard part starts: keeping a sit going once you are back home and the schedule is gone.",
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
    q: "Is there a Vipassana centre in Nashik city itself?",
    a: "Yes. It is Dhamma Nasika, meaning 'Nose of Dhamma', on a 17-acre triangular plot at Satpur (Opp. MNC Water Filtration Plant, Shivaji Nagar, Post YCMOU, Satpur, Nashik 422 222), given by the Municipal Corporation of Nashik. Its own description is that it sits away from the hustle and bustle of the city yet within convenient distance of Nashik, with the Sahyadri mountains on all sides. It runs 10-day courses for new students.",
  },
  {
    q: "Is Dhamma Giri in Nashik?",
    a: "Not in Nashik city. Dhamma Giri is at Igatpuri, 45 km from Nashik and 136 km from Mumbai, on the Mumbai-Agra highway. Igatpuri is in Nashik district, which is why directory listings tag the centre 'Nashik', but if you set off expecting a hall in the city you will be heading 45 km in the wrong direction. The nearest railway station is Igatpuri. It is the world-famous main centre, so many people who say 'vipassana nashik' have actually read about Dhamma Giri.",
  },
  {
    q: "What is the difference between Dhamma Nasika, Dhamma Giri and Dhamma Tapovana?",
    a: "Three separate centres. Dhamma Nasika is the one inside Nashik (Satpur) and runs 10-day courses for new students. Dhamma Giri is the large main centre 45 km away at Igatpuri, also running 10-day courses. Dhamma Tapovana sits on the land adjacent to the southern side of Dhamma Giri and is described as exclusively for long courses (20, 30, 45 and 60 days). For a first 10-day course, you want Dhamma Nasika or Dhamma Giri, not Tapovana.",
  },
  {
    q: "Can a first-timer do a course at Dhamma Tapovana?",
    a: "No, not a normal first 10-day course. Dhamma Tapovana is described as a meditation centre exclusively for long courses, and the long courses there are for experienced old students. As an example of how steep the requirements are, a 30-day course is open only to students who have already completed six 10-day courses, at least one 20-day course, and a Satipatthana Sutta course. Its general 10-day courses are reserved for specific groups such as business executives and senior government officials. A first-time student applies at Dhamma Nasika or Dhamma Giri instead.",
  },
  {
    q: "How do I register for a Vipassana course in Nashik?",
    a: "Online only, through the official schedule. For the in-city centre, open schedule.vridhamma.org/courses/nasika, pick a date, open its application form, apply as a new student for a 10-day course, and wait for the centre to confirm. Phone numbers you see on directory sites are office enquiry lines, not a booking system. There is no walk-in enrolment and no instant phone reservation. Dhamma Giri has its own schedule on giri.vridhamma.org.",
  },
  {
    q: "How much does a course cost at the Nashik centres?",
    a: "Nothing. There is no charge for the course, the food, or the lodging at any of these centres. They run entirely on voluntary donations from students who have finished a course before and want to give others the same chance. As a first-time student you are not asked or expected to pay or donate.",
  },
  {
    q: "Can this site teach me the technique before I go?",
    a: "No, and I would not want it to. In this tradition the actual technique is only transmitted inside a 10-day residential course by an authorized teacher. I have sat six courses and I am a fellow student, not a teacher. For anything about how to practise, the right sources are dhamma.org and the assistant teachers at the course itself.",
  },
  {
    q: "What happens after the 10 days?",
    a: "You head back into ordinary life, the silence and the schedule vanish, and keeping a daily sit becomes the real work. That gap is most of what this site is about: notes on rebuilding a daily practice and a free program that pairs you with another practitioner for accountability.",
  },
];

const jsonLd = [
  articleSchema({
    headline: "Vipassana Nashik: three centres, and the one you actually mean",
    description:
      "Three Dhamma centres answer to 'vipassana nashik': Dhamma Nasika inside the city at Satpur, Dhamma Giri 45 km away at Igatpuri, and Dhamma Tapovana for long courses only. Verified locations, who each is for, and how to register.",
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
          Vipassana logistics · Nashik, Maharashtra
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
          &ldquo;Vipassana Nashik&rdquo; is{" "}
          <span className="text-teal-600">three different centres</span>
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          One search, three answers. There is a centre inside Nashik, a famous
          one 45 km away that listings still tag &ldquo;Nashik,&rdquo; and a
          third next to it that would turn a first-timer away at the gate. Pick
          the wrong one and you have planned a multi-hour trip to a place you
          cannot sit. Here is which is which.
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
            Direct answer · verified 2026-06-29
          </p>
          <p className="text-xl text-zinc-900 leading-relaxed font-medium">
            The Vipassana centre <strong>inside Nashik</strong> is{" "}
            <strong>Dhamma Nasika</strong>, at Satpur (Shivaji Nagar, Post
            YCMOU, Nashik 422 222). The world-famous{" "}
            <strong>Dhamma Giri</strong> is <strong>45 km away at Igatpuri</strong>{" "}
            in Nashik district. <strong>Dhamma Tapovana</strong>, beside Dhamma
            Giri, runs <strong>long courses only</strong>. Courses at all of
            them are <strong>free</strong> and you <strong>apply online only</strong>.
          </p>
          <p className="mt-4 text-zinc-700">
            Sources I checked:{" "}
            <a
              href={NASIKA_SITE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              nasika.vridhamma.org
            </a>
            ,{" "}
            <a
              href={GIRI_SITE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              giri.vridhamma.org
            </a>
            , and{" "}
            <a
              href={NASIKA_SCHEDULE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              the official Nasika schedule
            </a>
            , which is also where you register.
          </p>
        </div>
      </section>

      {/* Three centres */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          The three centres behind one search
        </h2>
        <p className="text-zinc-600">
          They share a region and a tradition, but they are not interchangeable.
          The teal card is the one most people picturing &ldquo;a centre in
          Nashik&rdquo; actually want.
        </p>
        <BentoGrid cards={centreCards} />
        <p className="text-xs text-zinc-500">
          Names, locations and course types confirmed against each centre&rsquo;s
          own VRI page in June 2026.
        </p>
      </section>

      {/* Why the label misleads */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Why &ldquo;Nashik&rdquo; sends people 45 km in the wrong direction
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Dhamma Giri is one of the largest Vipassana centres in the world and
            the main centre of the tradition, so it is the name most people have
            read about. It sits in the town of <strong>Igatpuri</strong>, which
            is in Nashik <em>district</em> but is <strong>45 km from Nashik
            city</strong> and 136 km from Mumbai, on the Mumbai-Agra highway. Its
            nearest railway station is Igatpuri, not Nashik Road. Because the
            district is Nashik, almost every listing files it under
            &ldquo;Nashik,&rdquo; and a first-timer reasonably concludes the
            famous centre is in town. It is not.
          </p>
          <p>
            Meanwhile the centre that is genuinely <em>in</em> Nashik gets buried.{" "}
            <strong>Dhamma Nasika</strong> sits on a 17-acre triangular plot at
            Satpur that the Municipal Corporation of Nashik donated, about a
            one-hour drive from Dhamma Giri. In the centre&rsquo;s own words it
            is &ldquo;away from the hustle and bustle of the city,&rdquo; yet
            &ldquo;within convenient distance of Nashik city,&rdquo; with the
            Sahyadri mountains visible on every side. If your reason for
            searching is that you live in or near Nashik and want the closest
            10-day course, this is the one, not the 45 km trek out to Igatpuri.
          </p>
          <p>
            None of this is a knock on Dhamma Giri. It is an extraordinary place
            and plenty of Nashik residents happily travel out to sit there. The
            point is narrower: <strong>decide on purpose which one you are
            applying to</strong>, because the addresses, the schedules and the
            travel are completely different, and the directory listings will not
            make that distinction for you.
          </p>
        </div>
      </section>

      {/* Anchor fact: Tapovana */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The trap: Dhamma Tapovana is not a beginner&rsquo;s centre
        </h2>
        <GlowCard className="p-6 sm:p-8">
          <p className="text-zinc-700 leading-relaxed">
            This is the detail that the lumped-together listings never flag.
            Right next to Dhamma Giri, on the land adjacent to its southern side,
            is <strong>Dhamma Tapovana</strong>, described on VRI&rsquo;s own
            site as &ldquo;a meditation Centre exclusively for long
            courses.&rdquo; Those are the{" "}
            <strong>20, 30, 45 and 60-day courses</strong> for experienced
            students who have been at this for years.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            How far out of reach is it for a first-timer? A 30-day course there
            is open only to students who have already completed{" "}
            <strong>six 10-day courses, at least one 20-day course, and a
            Satipatthana Sutta course</strong>. Its general 10-day intake is
            reserved for particular groups such as business executives and senior
            government officials. So if you are new to the technique and you
            point yourself at Tapovana because it came up under &ldquo;Nashik,&rdquo;
            there is no course there you can apply to. Useful to know the centre
            exists. Do not make it your destination for a first course.
          </p>
        </GlowCard>
        <p className="mt-3 text-xs text-zinc-500">
          Tapovana&rsquo;s &ldquo;exclusively for long courses&rdquo; framing and
          the 30-day prerequisites are from{" "}
          <a
            href={TAPOVANA_PAGE}
            className="text-teal-600 underline underline-offset-2"
            rel="noopener noreferrer"
          >
            VRI&rsquo;s Dhamma Tapovana page
          </a>
          , read June 2026.
        </p>
      </section>

      {/* Registration */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          How to actually get a seat
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Once you have picked the centre, the path is the same and it is
            entirely online. Open the official schedule for that centre, not a
            directory. For Dhamma Nasika that is{" "}
            <a
              href={NASIKA_SCHEDULE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/nasika
            </a>
            ; Dhamma Giri keeps its dates on{" "}
            <a
              href={GIRI_SITE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              giri.vridhamma.org
            </a>
            . Each course on the schedule has its own application form, and a new
            student applies for a 10-day course.
          </p>
          <p>
            A submitted form is an <strong>application, not a seat</strong>.
            Courses fill, so you wait for the centre to confirm before you book
            any travel. The phone numbers floating around on aggregator sites are
            office enquiry lines, not a reservation desk; there is no walk-in
            enrolment and no &ldquo;call to book.&rdquo; I have sat six courses
            across three centers and the path has been identical every time: the
            official schedule, then a confirmation, then you go. Treat any paid
            or &ldquo;book instantly&rdquo; listing as not being this tradition.
          </p>
        </div>
      </section>

      {/* After the course */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The part that actually decides whether it sticks
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Getting to Satpur or out to Igatpuri is the easy bit. The hard bit
            starts on the morning of the 11th day, when you head back into
            ordinary life and the structure that carried you, the bells, the
            silence, the people sitting beside you, is simply gone. Almost
            everyone underestimates this. I did.
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
            are about to sit at Dhamma Nasika or Dhamma Giri, the most useful
            thing you can do today is line up who you will check in with once you
            are back home.
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
          heading="Sitting in Nashik and worried about after?"
          description="Book a short call and I'll share what worked for keeping a daily practice going once you're back home, peer to peer, no teaching."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <FaqSection items={faqs} heading="Vipassana Nashik: common questions" />
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
        description="Headed to Dhamma Nasika or Dhamma Giri? Get peer notes on making it stick."
      />
    </article>
  );
}
