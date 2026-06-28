import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FlowDiagram,
  AnimatedChecklist,
  ProofBanner,
  RelatedPostsGrid,
  FaqSection,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-10-day-course";
const PUBLISHED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana 10-Day Course: an honest overview after sitting it six times",
  description:
    "A 10-day Vipassana course in the S.N. Goenka tradition is a free, donation-funded silent residential course: arrive the afternoon before Day 1, sit ten full days, leave the morning after Day 10 (about 11 nights on site). No charge for tuition, food, or lodging. The plain answers to the questions people ask before signing up, from six courses across three California centers. Course funding and noble silence verified at dhamma.org on 2026-06-27.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana 10-Day Course: an honest overview after sitting it six times",
    description:
      "Free, donation-funded, silent, residential. Arrive the afternoon before Day 1, leave the morning after Day 10. The real questions people ask before they sign up, answered from six courses across three California centers.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The vipassana 10-day course, answered honestly",
    description:
      "What it costs (nothing), how long you are away (about 11 nights), and the questions nobody answers from six courses across three centers.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana 10-day course" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana 10-day course", url: PAGE_URL },
];

const onSiteArc = [
  {
    label: "Day 0, afternoon: registration",
    detail:
      "You arrive and register in the early afternoon. There is an orientation, you hand in your phone, and an evening session begins. Noble silence starts that night.",
  },
  {
    label: "Days 1 to 9: full days, in silence",
    detail:
      "Ten full days of practice on a fixed daily timetable. No talking with other students, no phone, no reading, no writing. You can still ask the assistant teacher questions and raise practical issues with management.",
  },
  {
    label: "Day 10, late morning: silence lifts",
    detail:
      "Noble silence ends mid-morning on Day 10 while you are still on site. People start talking again and the social shock of that is its own experience.",
  },
  {
    label: "Day 11, morning: departure",
    detail:
      "The course closes early on the morning after Day 10. You are usually off the property by mid-morning. That is roughly 11 nights on site in total.",
  },
];

const provided = [
  { text: "A single bed in shared or private quarters (depends on the center)" },
  { text: "Three vegetarian meals on Day 0 and breakfast plus lunch on full days" },
  { text: "5 PM tea, with fruit for new students" },
  { text: "A cushion, plus chairs and back support if you need them" },
  { text: "All instruction, all teaching, all lodging, at no charge" },
];

const bring = [
  { text: "Warm layers; meditation halls and early mornings run cold" },
  { text: "A refillable water bottle and any prescription medication" },
  { text: "Loose, modest, comfortable clothing for long sitting" },
  { text: "A willingness to stay through the hard middle days" },
  { text: "Nothing to read, nothing to write with; leave it at home or in the office" },
];

const faqs: FaqItem[] = [
  {
    q: "Is the 10-day Vipassana course really free?",
    a: "Yes. There is no charge for tuition, food, or lodging. The courses run entirely on donations, and donations are accepted only from people who have already completed at least one 10-day course in this tradition. That is verifiable on the official Code of Discipline at dhamma.org. You do not pay to attend your first course.",
  },
  {
    q: "How long is the course really, start to finish?",
    a: "Plan for about 11 nights on site. You arrive the afternoon before Day 1, sit ten full days, and the course closes the morning after Day 10, usually by mid-morning. Block off roughly twelve calendar days door to door once you account for travel.",
  },
  {
    q: "Can I leave early if it gets too hard?",
    a: "You physically can, but the course asks you to commit to staying the full ten days, and there is a good reason for that. The urge to leave peaks around Days 2 to 4 for almost everyone. I have watched my own mind build airtight arguments for leaving on the third day of more than one course. They felt rational. They were not. Going in with a firm decision to stay makes the whole thing far easier.",
  },
  {
    q: "What is the minimum age and are there health requirements?",
    a: "10-day courses are for adults; teenagers have their own separate courses. The application asks about physical and mental health honestly, including any history of serious psychiatric conditions, because ten days of intensive silence is demanding. Answer the application truthfully and let the center decide. For anything specific to your situation, the center and the official site at dhamma.org are the authority, not this page.",
  },
  {
    q: "Do I have to sit cross-legged on the floor for hours?",
    a: "No. Cushions are provided and chairs and back support are available for anyone who needs them. Across six courses I have seen plenty of people sit in chairs the entire time. A bad back or bad knees is not a reason to rule yourself out.",
  },
  {
    q: "What is the food like and will I be hungry?",
    a: "Vegetarian, simple, and served in silence. Lunch is the last full meal of the day; there is no dinner, just 5 PM tea, with fruit for new students. The hunger in the early evenings is real for the first two or three days and then it stops bothering you. Eating well at lunch makes a noticeable difference.",
  },
  {
    q: "Can I bring my phone, a book, or a journal?",
    a: "No. Phones are handed in at registration. Reading and writing are set aside for the duration, and so are other practices and rituals. The point is to remove the usual exits the mind reaches for. It is more freeing than it sounds once you stop fighting it.",
  },
  {
    q: "Where do I actually sign up?",
    a: "Through the official course schedule and application at dhamma.org. Courses fill quickly and run off a waitlist, so apply early. This site is a peer resource, not a registration channel; the booking link here is for talking to a fellow practitioner about building a daily practice, not for enrolling in a course.",
  },
];

const relatedPosts = [
  {
    title: "10-day course structure: the daily clock, hour by hour",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily timetable, the three load-bearing group sittings, and the one structural shift on Day 10.",
    tag: "Logistics",
  },
  {
    title: "What a vipassana retreat actually is",
    href: "/t/vipassana-retreat",
    excerpt:
      "The network behind the course: dedicated centers versus rented venues, and why that decides the room you sleep in.",
    tag: "Background",
  },
  {
    title: "First course: things I wish I had known",
    href: "/guide/first-course-tips",
    excerpt:
      "The practical stuff nobody tells you before your first sit, from hunger to the Days 2 to 4 crisis.",
    tag: "Preparation",
  },
  {
    title: "After the 10-day course: practice tips",
    href: "/t/after-10-day-vipassana-practice-tips",
    excerpt:
      "What happens when you get home and the much harder work of keeping a daily practice begins.",
    tag: "After",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana 10-Day Course: an honest overview after sitting it six times",
              description:
                "A free, donation-funded silent residential course. Arrive the afternoon before Day 1, sit ten full days, leave the morning after Day 10. The questions people ask before signing up, answered from six courses across three California centers.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbSchemaItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
            The vipassana 10-day course, answered honestly
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-zinc-500 leading-relaxed">
            Before you commit ten days of your life to a room with no phone and
            no talking, you want plain answers, not brochure copy. Here are the
            questions people actually ask before signing up, answered after six
            courses across three California centers.
          </p>
          <div className="mt-6">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="8 min read"
            />
          </div>
        </header>

        <section className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer, verified 2026-06-27
          </p>
          <p className="mt-3 text-zinc-900 text-lg leading-relaxed">
            A 10-day Vipassana course in the S.N. Goenka tradition is a{" "}
            <strong>free, donation-funded, silent, residential course</strong>.
            You arrive the afternoon before Day 1, sit ten full days, and leave
            the morning after Day 10, which is about <strong>11 nights on
            site</strong>. There is no charge for tuition, food, or lodging, and
            donations are only accepted from people who have already completed a
            course.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Course funding and the silence rule are stated on the official Code
            of Discipline at{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-600 underline hover:text-zinc-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>
            . That site, not this one, is where you apply.
          </p>
        </section>

        <section className="mt-10">
          <ProofBanner
            metric="$0"
            quote="Across six courses I have never paid for tuition, food, or a bed. Old students fund the next course for new students. That is the whole model."
            source="dhamma.org, Code of Discipline"
          />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
            What the ten days look like from the outside
          </h2>
          <p className="text-zinc-700 leading-relaxed mb-6">
            This is the logistical arc, not the practice itself. The technique is
            taught inside the hall by an authorized assistant teacher, and that
            is the only place it should be learned. What you can map in advance
            is the shape of your time on site: when you go quiet, when you can
            speak again, and when you go home.
          </p>
          <FlowDiagram title="Your time on site, start to finish" steps={onSiteArc} />
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
            The one thing the brochures undersell: the room you sleep in
          </h2>
          <p className="text-zinc-700 leading-relaxed">
            Here is the part you will not find on a single course page, because
            no single course page has sat across more than one center. The
            10-day course is the same everywhere. The instruction, the timetable,
            the discipline, all identical by design. What is not identical is
            where you sleep.
          </p>
          <p className="text-zinc-700 leading-relaxed mt-4">
            I have sat six times across three California sites. My first course
            was at CYO, a rented Bay Area camp with bunk beds and about twelve
            people to a room. Rough conditions, snoring strangers, thin walls,
            and day ten was still incredible. Later courses at dedicated centers
            with quieter quarters were physically easier on the body but no
            easier on the mind. The lesson stuck: the bunk bed does not change
            the course. It only changes whether you blame the room or look at
            your own reaction to it.
          </p>
          <p className="text-zinc-700 leading-relaxed mt-4">
            So when you pick a course, check whether it runs at a dedicated
            center or a rented venue. It will not change what you learn. It will
            change how many roommates you have and how cold the mornings are. For
            the full picture of why centers and rented sites differ, see{" "}
            <Link
              href="/t/vipassana-retreat"
              className="text-teal-600 underline hover:text-zinc-900"
            >
              what a vipassana retreat actually is
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
            Will I actually make it to Day 10?
          </h2>
          <p className="text-zinc-700 leading-relaxed">
            This is the real question under most searches, and it deserves an
            honest answer. The hardest stretch is not Day 1 and it is not the
            silence. It is Days 2 to 4, when the novelty has worn off, your body
            aches, and no benefit has shown up yet. Almost every student hits a
            crisis point in there. The mind constructs genuinely persuasive
            reasons to leave.
          </p>
          <p className="text-zinc-700 leading-relaxed mt-4">
            What works is deciding before you arrive that you will stay no matter
            what. Once the middle days pass, finishing stops being in question.
            On Day 10 the silence lifts while you are still on site, and the
            social whiplash of suddenly talking again is its own strange,
            memorable thing. If you are bracing for the worst, the worst is
            usually your own thinking, not the conditions. More of that texture
            is in{" "}
            <Link
              href="/guide/first-course-tips"
              className="text-teal-600 underline hover:text-zinc-900"
            >
              the first-course tips
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <AnimatedChecklist
              title="Provided, at no charge"
              items={provided}
            />
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <AnimatedChecklist title="Bring this yourself" items={bring} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
            The 10-day course is the start, not the finish
          </h2>
          <p className="text-zinc-700 leading-relaxed">
            One thing the course pages rarely say out loud: ten days is the
            easy part. The course is a fixed container with a schedule that
            carries you. The hard part starts when you get home and have to keep
            a daily practice alive without a 4 AM bell and no one sitting beside
            you. The live day counter on this site is past a thousand days now,
            and most of those days were a quiet morning sit before anything
            else, not a retreat.
          </p>
          <p className="text-zinc-700 leading-relaxed mt-4">
            That gap between the course and the months after it is exactly why
            this site exists, and why it runs a{" "}
            <Link
              href="/practice-buddy"
              className="text-teal-600 underline hover:text-zinc-900"
            >
              practice buddy matching program
            </Link>{" "}
            to pair people for daily accountability. If you want to read what
            keeping the practice actually looks like, start with{" "}
            <Link
              href="/t/after-10-day-vipassana-practice-tips"
              className="text-teal-600 underline hover:text-zinc-900"
            >
              the after-course practice tips
            </Link>
            . And to be clear, I am not a teacher, just a fellow practitioner
            sharing what six courses taught me.
          </p>
        </section>

        <section className="mt-14">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Thinking about your first course, or your first month after one?"
            description="Book a quick call with a fellow practitioner to talk through committing to the ten days or building the daily practice that comes after."
          />
        </section>

        <section className="mt-14">
          <FaqSection items={faqs} heading="Questions people ask before signing up" />
        </section>

        <section className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={relatedPosts}
          />
        </section>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to a practitioner about the course or the daily practice after it."
      />
    </article>
  );
}
