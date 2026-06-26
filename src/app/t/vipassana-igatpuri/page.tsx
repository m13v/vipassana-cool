import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedBeam,
  BentoGrid,
  AnimatedChecklist,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-igatpuri";
const PUBLISHED = "2026-05-30";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Igatpuri: Dhamma Giri Is a Three-Part Campus, Not One Center",
  description:
    "Vipassana in Igatpuri means Dhamma Giri, the headquarters of the S.N. Goenka tradition (about 136 km from Mumbai). It is actually a three-part complex with two separate booking portals: Dhamma Giri for 10-day courses anyone can apply to, Dhamma Tapovana for 20 to 60-day long courses old students only, and the Vipassana Research Institute. 10-day courses are free, donation-only, booked at schedule.vridhamma.org/courses/giri. Verified 2026-05-30.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Igatpuri: Dhamma Giri Is a Three-Part Campus, Not One Center",
    description:
      "Dhamma Giri in Igatpuri is the headquarters center of S.N. Goenka Vipassana. Two booking portals decide where you can sit: /courses/giri (10-day, open to all) vs /courses/tapovana (20 to 60-day, old students only). Free, donation-only. Verified 2026-05-30.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana Igatpuri is a three-part campus with two booking portals",
    description:
      "Dhamma Giri (10-day, anyone), Dhamma Tapovana (20 to 60-day, old students only), and the Vipassana Research Institute. Which gate you use depends on whether you've sat a course. Verified 2026-05-30.",
  },
  robots: { index: true, follow: true },
};

const campusCards: BentoCard[] = [
  {
    title: "Dhamma Giri",
    size: "2x1",
    accent: true,
    description:
      "The 10-day center, and the one most people mean by \"Vipassana Igatpuri.\" Open to anyone, including people who have never sat a course. Land was purchased on 16 December 1973; the historic first course (four days, 76 old students) ran in 1976, with the official opening that October. It is described on its own site as the main center of a rapidly growing global organization. Booked at schedule.vridhamma.org/courses/giri.",
  },
  {
    title: "Dhamma Tapovana 1 & 2",
    size: "1x1",
    description:
      "Built on the land immediately south of Dhamma Giri as the first center dedicated exclusively to long courses. It runs the 20, 30, 45, and the annual 60-day courses. Old students only. Its first 45-day course ran in July and August 2001. Booked separately at schedule.vridhamma.org/courses/tapovana.",
  },
  {
    title: "Vipassana Research Institute",
    size: "1x1",
    description:
      "Co-located at Igatpuri and established in the mid-1980s to research the pariyatti (theory) and patipatti (practice) sides of the teaching, including work on the Pali texts. It is the reason Igatpuri is a publishing and study hub, not only a place to sit.",
  },
];

const standardItems = [
  { text: "The same 10-day Code of Discipline every student agrees to before arrival", checked: true },
  { text: "Noble Silence held through the early days of the course, lifted near the end", checked: true },
  { text: "Courses run entirely on old-student donations, never on fees", checked: true },
  { text: "Men and women housed, walking, and seated on separate sides", checked: true },
  { text: "The same recorded evening discourses, in the same nightly slot", checked: true },
  { text: "A fixed daily timetable bookended by the same morning bell and lights-out", checked: true },
];

const faqs: FaqItem[] = [
  {
    q: "What is Vipassana in Igatpuri?",
    a: "It is Dhamma Giri, the headquarters center of the S.N. Goenka Vipassana tradition, in the town of Igatpuri in Maharashtra, India, about 136 km from Mumbai and 45 km from Nashik on the Mumbai-Agra highway. It is one of the largest Vipassana centers in the world and describes itself as the main center of the global organization. Igatpuri is actually a three-part campus: Dhamma Giri for 10-day courses, Dhamma Tapovana for long courses, and the co-located Vipassana Research Institute.",
  },
  {
    q: "How do I apply for a course at Dhamma Giri?",
    a: "Applications for 10-day courses go through the official schedule at schedule.vridhamma.org/courses/giri. You pick a course date, fill in the application, and wait for confirmation, since courses fill up and have a waitlist. There is no fee to apply or attend. Long courses are booked through a separate portal, schedule.vridhamma.org/courses/tapovana, and are open to old students only.",
  },
  {
    q: "How much does a course at Igatpuri cost?",
    a: "Nothing. In this tradition courses are run solely on a donation basis, and donations are only accepted from people who have completed at least one 10-day course, so a first-timer pays nothing and is not asked to. The model is the same at every center in the tradition, including the ones I have sat at in the United States. Igatpuri did not invent its own pricing; the donation-only structure is standardized across the whole network.",
  },
  {
    q: "Can a beginner do their first course at Igatpuri?",
    a: "Yes, at Dhamma Giri. Dhamma Giri runs 10-day courses that are open to people who have never meditated before. Dhamma Tapovana, the long-course center next door, is a different matter: its 20 to 60-day courses are reserved for old students, meaning people who have already completed at least one 10-day course. So a beginner applies to Dhamma Giri, not Tapovana.",
  },
  {
    q: "What is the difference between Dhamma Giri and Dhamma Tapovana?",
    a: "Dhamma Giri is the 10-day center, open to everyone, and the place most people picture when they search for Vipassana in Igatpuri. Dhamma Tapovana sits on adjacent land to the south and exists only for long courses: 20, 30, 45, and the annual 60-day course, for old students. They have separate course schedules and separate application portals even though they share the same hill.",
  },
  {
    q: "Is Igatpuri the original Vipassana center?",
    a: "Dhamma Giri is the first and principal center S.N. Goenka established in India, with its first course in 1976, and it became the hub the global network grew out of. The technique itself was brought to India from Burma earlier than that. So Igatpuri is the organizational origin point of the modern network rather than the origin of the practice.",
  },
  {
    q: "Do you teach the technique on this page?",
    a: "No. This is a peer resource about logistics, history, and how the Igatpuri campus is organized, written by someone who has sat courses, not a teacher. The technique is only ever transmitted in person by authorized assistant teachers inside a 10-day course. For anything about how to actually practice, or any question about sitting itself, go to dhamma.org and ask an authorized assistant teacher.",
  },
];

const related = [
  {
    title: "What the old student path actually unlocks",
    href: "/guide/old-student-path",
    tag: "Guide",
    excerpt:
      "Long courses, group sittings, Dhamma service. Why Tapovana is closed to first-timers makes sense once you see this.",
  },
  {
    title: "Course application tips",
    href: "/guide/course-application-tips",
    tag: "Guide",
    excerpt:
      "How the application and waitlist work, and what to do when your first-choice date is full.",
  },
  {
    title: "What a 10-day course structure looks like",
    href: "/t/10-day-course-structure",
    tag: "Reference",
    excerpt:
      "The standardized daily shape that is identical whether you sit at Igatpuri or anywhere else in the network.",
  },
  {
    title: "Finding a center near you",
    href: "/guide/find-a-retreat",
    tag: "Guide",
    excerpt:
      "If India is not practical right now, the same course runs at hundreds of locations worldwide.",
  },
];

export default function Page() {
  const breadcrumbItems = [
    { name: "Home", url: "https://vipassana.cool/" },
    { name: "Guides", url: "https://vipassana.cool/guide" },
    { name: "Vipassana Igatpuri", url: PAGE_URL },
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana Igatpuri: Dhamma Giri Is a Three-Part Campus, Not One Center",
              description:
                "Dhamma Giri in Igatpuri is the headquarters of the S.N. Goenka Vipassana tradition. A three-part campus with two separate booking portals, mapped for first-timers and old students.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-5 pt-10 pb-20 sm:px-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guide" },
            { label: "Vipassana Igatpuri" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Place note
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            Vipassana Igatpuri is a three-part campus, not one center
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Almost every page about &quot;Vipassana Igatpuri&quot; describes a single
            retreat on a hill. On the ground it is three things sharing one
            address, and which gate you can walk through depends on one fact:
            whether you have already sat a course.
          </p>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="7 min read"
          />
        </header>

        {/* Direct answer */}
        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-05-30
          </p>
          <p className="mt-3 text-base leading-relaxed text-zinc-800">
            <strong>Vipassana in Igatpuri</strong> means <strong>Dhamma Giri</strong>,
            the headquarters center of the S.N. Goenka tradition, in Igatpuri,
            Maharashtra, about 136 km from Mumbai and 45 km from Nashik. The
            standard course is a 10-day silent residential course. It is{" "}
            <strong>free</strong>, run only on donations, and you apply at{" "}
            <a
              href="https://schedule.vridhamma.org/courses/giri"
              className="font-semibold text-teal-700 underline hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/giri
            </a>
            . The official center site is{" "}
            <a
              href="https://giri.vridhamma.org/"
              className="font-semibold text-teal-700 underline hover:text-teal-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              giri.vridhamma.org
            </a>
            .
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            The catch the tourism pages skip: that portal only books one of the
            three things at Igatpuri. The other two have a different door.
          </p>
        </section>

        <p className="mt-8 text-sm leading-relaxed text-gray-500">
          A note before anything else: I have sat six courses, but none of them
          at Igatpuri. I have sat in California. So this is not a my-trip travel
          diary. It is a map of how the place is organized, pulled from the
          official schedules and the center&apos;s own history, because that map is
          the part nobody seems to lay out plainly. I am a fellow practitioner,
          not a teacher.
        </p>

        {/* The two-portal anchor */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The two booking portals are the whole story
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Here is the detail that reorganizes everything else. Igatpuri does
            not have one application page. It has two, and they are not
            interchangeable. Where you can apply is decided before you choose a
            date, by whether you are a first-timer or an old student (anyone who
            has completed at least one 10-day course).
          </p>

          <div className="mt-8">
            <AnimatedBeam
              title="Where your stage of practice routes you"
              from={[
                { label: "Never sat a course", sublabel: "first-timer" },
                { label: "Sat one 10-day course", sublabel: "old student" },
                { label: "Years in, want depth", sublabel: "old student" },
              ]}
              hub={{ label: "Igatpuri", sublabel: "Dhamma Giri campus" }}
              to={[
                { label: "Dhamma Giri", sublabel: "10-day · open to all" },
                { label: "Dhamma Tapovana", sublabel: "20 to 60-day · old students" },
                { label: "Research Institute", sublabel: "study & texts" },
              ]}
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                Portal 1 · open to everyone
              </p>
              <p className="mt-2 font-mono text-sm text-zinc-800">
                schedule.vridhamma.org/courses/giri
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Dhamma Giri&apos;s 10-day courses. This is the right door if you
                have never sat before. It is also where most returning students
                book their annual 10-day.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Portal 2 · old students only
              </p>
              <p className="mt-2 font-mono text-sm text-zinc-800">
                schedule.vridhamma.org/courses/tapovana
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Dhamma Tapovana&apos;s long courses: 20, 30, 45, and the annual
                60-day. The application gate is closed until you have completed a
                10-day course first.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Both links resolve today. If you only take one thing from this page:
            a beginner who finds the Tapovana schedule and tries to book a 30-day
            course has walked up to the wrong gate, and the reason is structural,
            not a glitch.
          </p>
        </section>

        {/* The three parts */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            The three parts of the hill
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            &quot;Dhamma Giri&quot; means &quot;Hill of Dhamma,&quot; and it is the same place
            people write as one word, &quot;Dhammagiri.&quot; What sits on that hill,
            and the land just south of it, is not one building but three
            distinct operations that grew up over almost thirty years.
          </p>
          <div className="mt-8">
            <BentoGrid cards={campusCards} />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            The timeline is checkable on the center&apos;s own history: land bought
            16 December 1973, first course in 1976, the research institute in the
            mid-1980s, and Tapovana&apos;s first 45-day course in mid-2001. That
            sequence is also the shape of a practitioner&apos;s own path, which is
            partly why it reads as confusing from the outside. Igatpuri grew
            outward as its students went deeper.
          </p>
        </section>

        {/* What's standardized */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            What Igatpuri sets, and every other center follows
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            People assume the headquarters center must offer a deeper or
            different course than a small regional one. It does not. The 10-day
            course is deliberately identical across the entire network. I have
            sat at rough rented camps with bunk beds and at purpose-built
            centers, and the frame below did not move an inch between them. That
            sameness is the point: Igatpuri standardized it so that the course
            you sit anywhere is the course.
          </p>
          <div className="mt-8">
            <AnimatedChecklist
              title="Identical whether you sit at Igatpuri or anywhere in the network"
              items={standardItems}
            />
          </div>
          <p className="mt-6 text-sm leading-relaxed text-gray-500">
            What does change is the room, the food region, the weather, and the
            crowd size. Igatpuri is large and can be very full. A small center
            might run one course at a time. None of that touches the course
            itself.
          </p>
        </section>

        {/* Why this matters for practice */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            Why a campus map matters more than a packing list
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-700">
            Most people searching for Igatpuri are sizing up a first course or a
            return. The useful question is not &quot;what is it like there&quot; so much
            as &quot;which of these three doors is mine right now.&quot; For almost
            everyone the honest answer is Dhamma Giri, the 10-day portal. The
            long-course world at Tapovana is real and worth knowing exists, but
            it opens only after a first course and, in practice, after you have
            built something that survives between courses.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-700">
            That between-courses gap is the thing I care about and the reason
            this site exists. The hardest part of this practice was never the
            ten days at a center. It was the ordinary Tuesday months later, at
            home, with no bell and no schedule. The Igatpuri campus is literally
            built around that progression, from the first-timer gate to the
            old-student long courses, and the quiet middle nobody puts up a
            building for is the daily sit you keep on your own.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Going to Igatpuri, or just back from a course?"
          description="If the hard part is keeping a daily sit alive after the course ends, book a short call and I'll talk through practice-buddy pairing and what's worked for me."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-zinc-900">
            Common questions about Vipassana in Igatpuri
          </h2>
          <div className="mt-6">
            <FaqSection items={faqs} />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={related}
          />
        </div>

        <p className="mt-12 text-xs leading-relaxed text-gray-400">
          Facts on this page (location, the two booking portals, the founding
          timeline, and the long-course eligibility rule) were verified against
          giri.vridhamma.org, schedule.vridhamma.org, and vridhamma.org on
          2026-05-30. For anything about how the practice itself works, or any
          question about sitting, go to dhamma.org and an authorized assistant
          teacher. I am a fellow practitioner, not a teacher.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Stuck on daily practice after a course? Book a quick call."
      />
    </article>
  );
}
