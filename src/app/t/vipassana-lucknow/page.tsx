import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GlowCard,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-lucknow";
const PUBLISHED = "2026-06-30";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const SCHEDULE = "https://schedule.vridhamma.org/courses/lakkhana";
const CENTRE_HOME = "https://lakkhana.dhamma.org/";
const CENTRE_CONTACT = "https://lakkhana.dhamma.org/en/contact/";
const TRADITION = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title: "Vipassana in Lucknow: Dhamma Lakkhana, the Center Named After What You Go to See",
  description:
    "Vipassana in Lucknow means one place: Dhamma Lakkhana, on Asti Road in Bakshi Ka Talab, about 15 km out. Free 10-day residential courses, roughly 18-20 a year since 2003, applied for online. And the name itself, Lakkhana, is the word at the heart of the practice. Verified 2026-06-30.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Lucknow: Dhamma Lakkhana, on Asti Road in Bakshi Ka Talab",
    description:
      "One residential center, ~15 km from the city, running free 10-day courses since January 2003. Its name, Lakkhana, points straight at what Vipassana trains you to see. Verified 2026-06-30.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Lucknow is one center: Dhamma Lakkhana",
    description:
      "Dhamma Lakkhana, Asti Road, Bakshi Ka Talab, ~15 km from Lucknow. Free 10-day courses, ~18-20 a year. The name means the characteristic of Dhamma.",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "Is there a Vipassana center in Lucknow?",
    a: "Yes, one. It is Dhamma Lakkhana, on Asti Road in Bakshi Ka Talab, Lucknow 227202. The small town of Bakshi Ka Talab sits about 15 km from Lucknow on the Lucknow to Sitapur Highway, so the center is just outside the city rather than inside it. It teaches Vipassana exactly as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin. Contact is info.lakkhana@vridhamma.org and 9794545334.",
  },
  {
    q: "What does the name Dhamma Lakkhana mean?",
    a: "Dhamma Lakkhana translates roughly as \"the characteristic of Dhamma.\" Lakkhana is the Pali word for a mark, sign, or characteristic. It is the same word used in ti-lakkhana, the three characteristics that the Buddhist tradition says mark all conditioned phenomena: anicca (impermanence), dukkha (unsatisfactoriness), and anatta (not-self). The center is named after the very thing the tradition holds Vipassana reveals.",
  },
  {
    q: "How much does a course at Dhamma Lakkhana cost?",
    a: "Nothing. Courses run purely on a donation basis. No charge is made, not even for food or lodging, which keeps the practice free from commercialization. Only someone who has already completed a 10-day course is invited to donate, and only if they wish to, so that others can sit in turn.",
  },
  {
    q: "How many courses does the Lucknow center run, and what kinds?",
    a: "Dhamma Lakkhana conducts roughly 18 to 20 ten-day courses each year, plus one or two Satipatthana courses, several 3-day courses, and Anapana courses for children. The live schedule also lists longer sittings for old students, including 20-day and 30-day courses. The 10-day course is the entry point for everyone new to the technique.",
  },
  {
    q: "When did the center open, and how big is it?",
    a: "Dhamma Lakkhana was established in January 2003. It sits on about eight acres of land near Bakshi Ka Talab, in the capital of Uttar Pradesh, well connected by air and rail. The exact directions, room arrangements, and current contact numbers are on the center's own site, lakkhana.dhamma.org, which is the source to trust for travel.",
  },
  {
    q: "How do I register for a 10-day course at Dhamma Lakkhana?",
    a: "You apply online. Open the official course schedule, find a date that suits you, read the Code of Discipline, and submit the application form for that specific course and student category. Each course shows when its application window opens, so a date a couple of months out may not be accepting applications yet. Registering in advance is wise because popular dates go to a waiting list.",
  },
  {
    q: "Does this page teach the technique or is it the official center?",
    a: "Neither. This is an orientation by a fellow meditator covering where the Lucknow center is, what its name means, and how its logistics work. It is not affiliated with Dhamma Lakkhana and it does not teach the method. The technique is transmitted only inside a 10-day course by an authorized teacher. For the course and for anything about how the practice works, the authoritative sources are lakkhana.dhamma.org, dhamma.org, and an authorized assistant teacher.",
  },
];

// One-off, server-rendered visual decomposing the center's Pali name and the
// three characteristics it points to. Hand-built for this page rather than
// pulled from the shared library, so it reads as a linguistic note, not a chart.
function NameBreakdown() {
  const marks = [
    { pali: "anicca", gloss: "impermanence", note: "nothing conditioned stays" },
    { pali: "dukkha", gloss: "unsatisfactoriness", note: "the friction in clinging to it" },
    { pali: "anatta", gloss: "not-self", note: "no fixed owner behind it" },
  ];
  return (
    <div className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="text-2xl font-bold text-zinc-900">Dhamma</span>
        <span className="pb-1 text-sm text-zinc-400">the teaching, the law of nature</span>
      </div>
      <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="text-2xl font-bold text-teal-600">Lakkhaṇa</span>
        <span className="pb-1 text-sm text-zinc-500">
          Pali: a mark, a sign, a characteristic
        </span>
      </div>
      <div className="mt-6 border-t border-zinc-100 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          The same word appears in ti-lakkhaṇa, the three characteristics
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {marks.map((m) => (
            <div
              key={m.pali}
              className="rounded-xl bg-zinc-50 p-4"
            >
              <p className="text-base font-semibold text-zinc-900">{m.pali}</p>
              <p className="text-sm text-teal-700">{m.gloss}</p>
              <p className="mt-1 text-xs text-zinc-500">{m.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-400">
          A doctrinal and linguistic note, not an instruction. The three
          characteristics are described here as tradition and etymology, not as
          anything to do on a cushion.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana in Lucknow: Dhamma Lakkhana, the Center Named After What You Go to See",
      description:
        "Vipassana in Lucknow means Dhamma Lakkhana, a residential center on Asti Road in Bakshi Ka Talab about 15 km from the city. Free 10-day courses run roughly 18 to 20 times a year since January 2003, applied for online. The center's name, Lakkhana, is the Pali word for characteristic, the same word in ti-lakkhana.",
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
      articleType: "Article",
    }),
    breadcrumbListSchema([
      { name: "Home", url: "https://vipassana.cool" },
      { name: "Vipassana in Lucknow", url: PAGE_URL },
    ]),
    faqPageSchema(FAQS, `${PAGE_URL}#faq`),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Vipassana in Lucknow" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Lucknow, Uttar Pradesh
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Vipassana in Lucknow is one center, and it is named after the thing
            you go there to see
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search &ldquo;vipassana lucknow&rdquo; and you mostly get phone
            numbers and a pin on a map. What none of those listings tell you is
            that the center&rsquo;s own name, Dhamma Lakkhana, is the Pali word
            for the characteristics the whole practice is built around.
          </p>
          <div className="mt-5">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="7 min read"
            />
          </div>
        </header>

        {/* Direct answer (lookup) */}
        <section
          aria-label="Direct answer"
          className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer · verified 2026-06-30
          </p>
          <p className="mt-3 text-zinc-800">
            Yes, there is a Vipassana center in Lucknow, and there is one:{" "}
            <strong>Dhamma Lakkhana Vipassana Centre</strong>, on{" "}
            <strong>Asti Road, Bakshi Ka Talab, Lucknow 227202</strong>. Bakshi
            Ka Talab is about <strong>15 km from Lucknow</strong> on the Lucknow
            to Sitapur Highway, so the center is just outside the city. It runs
            free, donation-based <strong>10-day residential courses</strong>,
            roughly <strong>18 to 20 a year</strong> since January 2003. You join
            by submitting an online application for a specific course date.
            Contact: <strong>info.lakkhana@vridhamma.org</strong>, phone{" "}
            <strong>9794545334</strong>.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Authoritative sources: the official course schedule at{" "}
            <a
              href={SCHEDULE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              schedule.vridhamma.org/courses/lakkhana
            </a>{" "}
            and the center&rsquo;s own site{" "}
            <a
              href={CENTRE_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              lakkhana.dhamma.org
            </a>
            .
          </p>
        </section>

        {/* The name, the anchor */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Start with the name, because it is the part nobody decodes
          </h2>
          <p className="mt-4 text-zinc-700">
            Every Vipassana center in this tradition is given a Pali name that
            begins with <em>Dhamma</em>. Igatpuri, the mother center, is Dhamma
            Giri, &ldquo;mountain of Dhamma.&rdquo; Jaipur is Dhamma Thali.
            Kanpur is Dhamma Kalyana. Lucknow&rsquo;s is{" "}
            <strong>Dhamma Lakkhana</strong>, and of the lot it might be the most
            on the nose. <em>Lakkhana</em> is the Pali word for a mark, a sign, a
            characteristic. The center is, quite literally, named after the
            characteristics of reality.
          </p>
          <p className="mt-4 text-zinc-700">
            That matters because <em>lakkhana</em> is not a generic word. It is
            the same word in <em>ti-lakkhana</em>, the three characteristics the
            tradition says are stamped on everything that arises and passes:
            impermanence, unsatisfactoriness, and not-self. So when a directory
            lists &ldquo;Dhamma Lakkhana, Bakshi Ka Talab&rdquo; next to an
            opening time, it is flattening a name that points straight at the
            heart of why anyone sits a course at all.
          </p>

          <div className="mt-8">
            <GlowCard>
              <NameBreakdown />
            </GlowCard>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            I am writing this as a linguistic and lineage note, not as
            instruction. The three characteristics are doctrine and etymology
            here. What they feel like, and how the technique works with them, is
            taught only inside a 10-day course by an authorized teacher, never on
            a web page.
          </p>
        </section>

        <div className="mt-12">
          <ProofBanner
            metric="18-20 / yr"
            quote="Dhamma Lakkhana conducts roughly 18 to 20 ten-day courses a year, plus Satipatthana, 3-day, and children's Anapana courses, all free of charge, since it opened in January 2003."
            source="Vipassana Research Institute center description and the live VRI schedule, checked 2026-06-30"
          />
        </div>

        {/* Why this center earns the name: cadence and history */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            A name like that has to be backed by mileage, and it is
          </h2>
          <p className="mt-4 text-zinc-700">
            It is one thing to be named after the three characteristics. It is
            another to give thousands of people the chance to sit with them. The
            Lucknow center has run since January 2003 on about eight acres near
            Bakshi Ka Talab, and the number that tells the real story is the
            cadence: roughly 18 to 20 ten-day courses every year. That is a fresh
            10-day course starting somewhere between once and twice a month,
            almost every month, for over two decades.
          </p>
          <p className="mt-4 text-zinc-700">
            On top of the 10-day courses, the schedule carries one or two
            Satipatthana courses, several 3-day courses for old students, and
            Anapana courses for children, plus longer sittings, including 20-day
            and 30-day courses, for experienced students. If you pull up the live
            schedule, you can read the rhythm straight off it: 10-day courses
            stacking through the year, the longer courses appearing for those
            who have put in the time.
          </p>
          <p className="mt-4 text-zinc-700">
            The practical takeaway is not &ldquo;call this number.&rdquo; It is:
            open{" "}
            <a
              href={SCHEDULE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              the schedule
            </a>
            , find a 10-day date that fits your life, check whether that course
            is open for applications yet, read the Code of Discipline, and submit
            the form. A course a couple of months out may show a future date for
            when its applications open, so the date you want might not be
            bookable on the day you look.
          </p>
        </section>

        {/* The thing the listings skip: after the course */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What the map pin cannot show you is the drive home
          </h2>
          <p className="mt-4 text-zinc-700">
            I write this as a fellow practitioner, not a teacher. I have sat six
            10-day courses at three centers and done a stretch of dhamma service,
            and the thing none of the Lucknow listings mention is what happens
            after day 10. The gate at a place like Dhamma Lakkhana opens, the
            silence breaks, you take a shared ride back toward the city, and a
            practice that felt almost automatic inside the center turns into a
            decision you have to make alone every morning.
          </p>
          <p className="mt-4 text-zinc-700">
            There is a small irony in the name here. A center named for the
            characteristics of reality is exactly the place that teaches you, in
            ten days, how quickly a state passes. The clarity you carry out of
            the gate is itself impermanent, and most practices quietly thin out
            in the weeks after a course, not during it. No schedule, however
            regular, fixes that part for you.
          </p>
          <p className="mt-4 text-zinc-700">
            That gap is the reason this site exists. The fix that worked for me
            was not more willpower, it was company: being paired with one other
            meditator for daily accountability after a course. If you want that,
            there is a{" "}
            <a
              href="/practice-buddy"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              practice buddy program
            </a>{" "}
            on this site, and a longer note on{" "}
            <a
              href="/guide/daily-practice"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              keeping a daily practice alive
            </a>{" "}
            once you are home. Neither is the technique, and neither replaces
            sitting a course. They are just for the part of the road that starts
            after the gate.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Weighing a course at Lucknow, or keeping the practice alive after one?"
          description="Book a short peer call and I will share what worked for me across six courses, and how practice buddy matching keeps a daily sit going once you are back in the city."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about Vipassana in Lucknow
          </h2>
          <div className="mt-4">
            <FaqSection items={FAQS} />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: "Vipassana meditation in Kanpur",
                href: "/t/vipassana-meditation-kanpur",
                excerpt:
                  "The nearest big-city center, 22 km out on the Ganga, and how its fixed 5th-and-20th cadence works.",
                tag: "Nearby",
              },
              {
                title: "Vipassana for beginners",
                href: "/guide/vipassana-for-beginners",
                excerpt:
                  "What a first 10-day course actually involves, before you apply for a date at Lucknow.",
                tag: "Getting started",
              },
              {
                title: "What the word vipassana actually means",
                href: "/guide/vipassana-meaning",
                excerpt:
                  "A linguistic note on vipassana and its roots, in the same spirit as decoding Lakkhana.",
                tag: "Language",
              },
            ]}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          I am a fellow practitioner sharing logistics and a language note, not a
          teacher, and not affiliated with Dhamma Lakkhana or any center. For the
          technique itself, and for anything about registering or sitting a
          course, the authoritative sources are{" "}
          <a
            href={TRADITION}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            dhamma.org
          </a>
          , the center at{" "}
          <a
            href={CENTRE_CONTACT}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            lakkhana.dhamma.org
          </a>
          , and an authorized assistant teacher at a 10-day course.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Planning a Lucknow course or keeping a daily sit alive after one? Book a peer call."
      />
    </article>
  );
}
