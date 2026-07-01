import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  MetricsRow,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-pushkar";
const PUBLISHED = "2026-06-30";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const CENTRE_HOME = "https://pushkar.dhamma.org/";
const CENTRE_REACH = "https://pushkar.dhamma.org/how-to-reach-dhamma-pushkar/";
const SCHEDULE = "https://schedule.vridhamma.org/courses/pushkar";
const TRADITION = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title: "Vipassana in Pushkar: Dhamma Pushkar Is Not in the Town, and Its Name Is the Town's Name",
  description:
    "The Vipassana centre near Pushkar is Dhamma Pushkar, in Village Rewat (Kadel), about 10 km outside the tourist town in the Aravalli hills. Free 10-day donation courses run all year, plus rare 20-day and 30-day long courses. And the name Pushkar is the Sanskrit word for lotus. Verified 2026-06-30.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Pushkar: Dhamma Pushkar, 10 km out in Village Rewat (Kadel)",
    description:
      "Not in the town you are picturing. Dhamma Pushkar sits about 10 km from Pushkar in the Aravalli hills, running free 10-day courses plus 20-day and 30-day sittings. Pushkar itself is Sanskrit for lotus. Verified 2026-06-30.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Pushkar is Dhamma Pushkar, and it is not in the town",
    description:
      "Village Rewat (Kadel), ~10 km from Pushkar, 25 km from Ajmer. Free 10-day courses plus 20 and 30-day long courses. The name Pushkar means lotus.",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "Is there a Vipassana centre in Pushkar?",
    a: "Yes, one. It is Dhamma Pushkar, in Village Rewat (Kadel) 305021, District Ajmer, Rajasthan. It teaches Vipassana exactly as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin. The important footnote most listings skip is that it is not inside the town of Pushkar. It sits about 10 km out toward the Aravalli hills, managed by a registered charitable trust, Vipassana Kendra Pushkar.",
  },
  {
    q: "Is the centre actually in Pushkar town, near the lake and the Brahma temple?",
    a: "No. If you are picturing the ghats, the camel-fair grounds, or the backpacker cafes around Pushkar Lake, that is the town. The centre is in Village Rewat (Kadel), roughly 10 km away, District Ajmer. The nearest railway station is Ajmer, about 25 km off, not Pushkar. So you travel through or past the town to reach it, rather than finding it among the temples.",
  },
  {
    q: "What does the name Dhamma Pushkar mean?",
    a: "Every centre in this tradition is given a Pali or Sanskrit-rooted name beginning with Dhamma. This one takes the second half from its location, and Pushkar is the Sanskrit word for lotus. The town's own name traces to the same root, tied to the legend of Brahma dropping a lotus. One directory glosses Dhamma Pushkar as the lotus of Dhamma. Whether or not that gloss was deliberate, the etymology is real, and the lotus is one of the oldest images in the Buddhist canon.",
  },
  {
    q: "Does Dhamma Pushkar run long courses, or only 10-day ones?",
    a: "Both, and the long courses are the standout. The centre runs roughly 10 to 12 ten-day courses a year for new and old students. On top of that, its schedule carries 20-day and 30-day courses, plus Satipatthana Sutta courses, and occasional 3-day and special sittings. The 20-day and 30-day courses are reserved for experienced old students, not beginners, which makes Dhamma Pushkar one of the smaller set of Indian centres that hosts the long sittings at all.",
  },
  {
    q: "How much does a course at Dhamma Pushkar cost?",
    a: "Nothing. Courses run purely on a donation basis. No charge is made for the teaching, the food, or the lodging. The entire operation is funded by donations from people who have already completed a course and wish to give so others can sit. Only after you finish your own 10-day course are you invited to donate, and only if you want to.",
  },
  {
    q: "How do I reach Dhamma Pushkar, and how do I register?",
    a: "The nearest railway station is Ajmer, about 25 km away. The nearest domestic airport is Kishangarh, roughly 75 minutes by taxi, and Jaipur international airport is about 3 hours out, some 150 km. To register, you do not call the centre first; you open the official course schedule, pick a specific 10-day date, read the Code of Discipline, and submit the online application for that course and student category. Popular dates fill and go to a waiting list, so applying early helps.",
  },
  {
    q: "Does this page teach the technique, or is it the official centre?",
    a: "Neither. This is an orientation written by a fellow meditator: where the centre actually is, what its name means, and how its logistics work. It is not affiliated with Dhamma Pushkar and it does not teach the method. The technique is transmitted only inside a 10-day course by an authorized teacher. For the course itself, and for anything about how the practice works, the authoritative sources are pushkar.dhamma.org, dhamma.org, and an authorized assistant teacher.",
  },
];

// One-off, hand-built linguistic note for this page: the single Sanskrit root
// that the town, the lake legend, and the centre's name all share. Built inline
// rather than pulled from the shared library so it reads as an etymology card,
// not a generic feature tile.
function LotusRoot() {
  const echoes = [
    {
      head: "Pushkar, the town",
      body: "Named, by the old legend, for the lotus Brahma let fall to earth, which opened the sacred lake.",
    },
    {
      head: "Puṇḍarīka, the canon",
      body: "The lotus rising clean out of muddy water is one of the oldest images in the Buddhist texts, unstained by what it grew from.",
    },
    {
      head: "Dhamma Pushkar, the centre",
      body: "A residential centre that borrows the place-name, and with it the same single word: lotus.",
    },
  ];
  return (
    <div className="rounded-2xl border border-teal-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="text-2xl font-bold text-zinc-900">Dhamma</span>
        <span className="pb-1 text-sm text-zinc-400">the teaching, the law of nature</span>
      </div>
      <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="text-2xl font-bold text-teal-600">Pushkar</span>
        <span className="pb-1 text-sm text-zinc-500">Sanskrit: lotus (and the name of the town)</span>
      </div>
      <div className="mt-6 border-t border-zinc-100 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
          One word, three places it turns up
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {echoes.map((e) => (
            <div key={e.head} className="rounded-xl bg-zinc-50 p-4">
              <p className="text-sm font-semibold text-zinc-900">{e.head}</p>
              <p className="mt-1 text-xs text-zinc-500">{e.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-400">
          An etymology and lineage note, not an instruction. The lotus here is a
          cultural image, nothing to do on a cushion.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana in Pushkar: Dhamma Pushkar Is Not in the Town, and Its Name Is the Town's Name",
      description:
        "The Vipassana centre near Pushkar is Dhamma Pushkar, in Village Rewat (Kadel), about 10 km from the tourist town in the Aravalli hills of District Ajmer. It runs free 10-day donation courses through the year, plus rare 20-day and 30-day long courses for old students. The name Pushkar is the Sanskrit word for lotus.",
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
      { name: "Vipassana in Pushkar", url: PAGE_URL },
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
            { label: "Vipassana in Pushkar" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Pushkar, Rajasthan
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The Vipassana centre near Pushkar is not in Pushkar, and its name is
            the town&rsquo;s name
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search &ldquo;vipassana pushkar&rdquo; and you get a phone number and
            a pin dropped near the lake. Two things those listings never tell
            you: the centre actually sits about 10 km out of town in the Aravalli
            hills, and the word <em>Pushkar</em> is Sanskrit for lotus, which is
            also where the town got its name.
          </p>
          <div className="mt-5">
            <ArticleMeta
              author="Matthew Diakonov"
              authorRole="Written with AI"
              datePublished={PUBLISHED}
              readingTime="8 min read"
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
            Yes, there is a Vipassana centre for Pushkar, and there is one:{" "}
            <strong>Dhamma Pushkar</strong>, in{" "}
            <strong>Village Rewat (Kadel) 305021, District Ajmer, Rajasthan</strong>.
            It is about <strong>10 km from Pushkar town</strong>, 25 km from
            Ajmer, and 150 km from Jaipur. It runs free, donation-based{" "}
            <strong>10-day residential courses</strong> through the year (roughly
            10 to 12 of them), plus <strong>20-day and 30-day long courses</strong>{" "}
            for experienced students and Satipatthana courses. You join by
            submitting an online application for a specific course date.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Authoritative sources: the centre&rsquo;s own site{" "}
            <a
              href={CENTRE_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              pushkar.dhamma.org
            </a>{" "}
            and the live schedule at{" "}
            <a
              href={SCHEDULE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              schedule.vridhamma.org/courses/pushkar
            </a>
            .
          </p>
        </section>

        {/* Distances: reinforce that it is not in town */}
        <MetricsRow
          metrics={[
            { value: 10, suffix: " km", label: "from Pushkar town" },
            { value: 25, suffix: " km", label: "from Ajmer (nearest railway)" },
            { value: 75, suffix: " min", label: "from Kishangarh airport" },
            { value: 150, suffix: " km", label: "from Jaipur" },
          ]}
        />

        {/* The geographic correction, the real spine */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            First, unlearn where you think it is
          </h2>
          <p className="mt-4 text-zinc-700">
            Pushkar the town is a small, dense pilgrimage place: the ghats around
            a sacred lake, one of the very few Brahma temples in the world, the
            camel-fair grounds, and a tight ring of backpacker cafes. It is easy
            to assume a Vipassana centre with &ldquo;Pushkar&rdquo; in its name
            sits somewhere in all that. It does not.
          </p>
          <p className="mt-4 text-zinc-700">
            The centre&rsquo;s registered address is{" "}
            <strong>Village Rewat (Kadel) 305021, District Ajmer</strong>, about
            10 km out toward the Aravalli hills, on the quieter side of the
            landscape from the lake and the dunes. Practically, that changes how
            you arrive. The nearest railway station is Ajmer, roughly 25 km away,
            not Pushkar. The nearest domestic airport is Kishangarh, about 75
            minutes by taxi, and Jaipur&rsquo;s international airport is around
            three hours and 150 km off. You can read the precise directions on
            the centre&rsquo;s own{" "}
            <a
              href={CENTRE_REACH}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              how-to-reach page
            </a>
            , which is the source to trust for travel, since a course starts with
            a fixed 2 to 4 pm registration window and being late is a real
            problem.
          </p>
          <p className="mt-4 text-zinc-700">
            The distance is not a downside. The whole point of a residential
            course is that it removes you from the world you came from, and a
            village on the far side of the hills does that more honestly than a
            room off a busy ghat ever could.
          </p>
        </section>

        {/* The name, the linguistic anchor */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Now the part nobody decodes: the name is the town, and the town is a
            lotus
          </h2>
          <p className="mt-4 text-zinc-700">
            Every centre in this tradition carries a name that begins with{" "}
            <em>Dhamma</em>. Igatpuri, the mother centre, is Dhamma Giri,
            &ldquo;mountain of Dhamma.&rdquo; Jaipur is Dhamma Thali. This one
            takes its second half straight from the place: <em>Pushkar</em>. And{" "}
            <em>Pushkar</em> is not a neutral place-name. In Sanskrit it means
            lotus. The town itself is named for it, tied to the old story of the
            creator Brahma letting a lotus fall to earth and the sacred lake
            opening where it landed.
          </p>
          <p className="mt-4 text-zinc-700">
            That coincidence lands harder than most centre names do, because the
            lotus is not just a Hindu image. The flower that rises clean out of
            muddy water, unstained by the mud it grew in, is one of the oldest
            pictures in the Buddhist canon; the great Mahayana text is literally
            the Lotus Sutra. So a Vipassana centre whose name resolves to
            &ldquo;lotus of Dhamma&rdquo; is not a marketing flourish. It is a
            place-name and a lineage image quietly landing on the same single
            word.
          </p>

          <div className="mt-8">
            <LotusRoot />
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            I am writing this as a linguistic and lineage note, not as
            instruction. The lotus is doctrine and etymology here. What the
            practice actually involves is taught only inside a 10-day course by
            an authorized teacher, never on a web page.
          </p>
        </section>

        <ProofBanner
          metric="20 & 30-day"
          quote="Beyond its roughly 10 to 12 ten-day courses a year, Dhamma Pushkar hosts 20-day and 30-day long courses for experienced old students, plus Satipatthana courses, which makes it one of the smaller number of Indian centres that run the long sittings at all."
          source="Live VRI schedule for Dhamma Pushkar, checked 2026-06-30"
        />

        {/* Why the long courses matter */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The quiet reason serious meditators end up here
          </h2>
          <p className="mt-4 text-zinc-700">
            Most centres run 10-day courses. Fewer run the long ones, the 20-day
            and 30-day sittings that are open only to old students who have put
            in years of practice and served courses. Dhamma Pushkar is on that
            shorter list. Its schedule carries the 10-day courses that everyone
            starts with, and then, in its own season, the 20-day and 30-day
            courses that a smaller group travels for.
          </p>
          <p className="mt-4 text-zinc-700">
            If you are new, none of that is your concern yet; the entry point is
            a single 10-day course, and every long course sits behind it. But it
            tells you something about the centre. A place set up to host a 30-day
            sitting, in a village at the edge of the desert, is built for depth
            more than for footfall. If you are booking your first course, that is
            a good sign about the conditions you will be sitting in, not a reason
            to hesitate.
          </p>
        </section>

        {/* What listings skip: after the course */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What the map pin cannot show you is the drive back to the lake
          </h2>
          <p className="mt-4 text-zinc-700">
            I write this as a fellow practitioner, not a teacher. I have sat six
            10-day courses at three centres and done a stretch of dhamma service,
            and the thing none of the Pushkar listings mention is what happens
            after day 10. The gate opens, the silence breaks, you take a shared
            ride back out toward the town and the lake, and a practice that felt
            almost automatic inside the centre becomes a decision you have to
            make alone every morning.
          </p>
          <p className="mt-4 text-zinc-700">
            There is a small irony in a centre named for the lotus. The lotus
            image is about staying unstained by the water you sit in, and the
            days right after a course are exactly when the ordinary water closes
            back over you: the phone, the noise, the reasons to skip a sit. Most
            practices thin out in the weeks after a course, not during it. No
            centre, however good its conditions, fixes that part for you once you
            are home.
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
            once you are back home. Neither teaches the technique, and neither
            replaces sitting a course. They are just for the part of the road
            that starts after the gate.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Weighing a course at Pushkar, or keeping the practice alive after one?"
          description="Book a short peer call and I will share what worked for me across six courses, and how practice buddy matching keeps a daily sit going once you are back home."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about Vipassana in Pushkar
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
                title: "Vipassana in Jaipur",
                href: "/t/vipassana-jaipur",
                excerpt:
                  "The nearest big-city centre, Dhamma Thali, about 150 km from Pushkar, and how its logistics work.",
                tag: "Nearby",
              },
              {
                title: "Vipassana for beginners",
                href: "/guide/vipassana-for-beginners",
                excerpt:
                  "What a first 10-day course actually involves, before you apply for a date at Pushkar.",
                tag: "Getting started",
              },
              {
                title: "What the word vipassana actually means",
                href: "/guide/vipassana-meaning",
                excerpt:
                  "A linguistic note on vipassana and its roots, in the same spirit as decoding Pushkar.",
                tag: "Language",
              },
            ]}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          I am a fellow practitioner sharing logistics and a language note, not a
          teacher, and not affiliated with Dhamma Pushkar or any centre. For the
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
          , the centre at{" "}
          <a
            href={CENTRE_HOME}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            pushkar.dhamma.org
          </a>
          , and an authorized assistant teacher at a 10-day course.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Planning a Pushkar course or keeping a daily sit alive after one? Book a peer call."
      />
    </article>
  );
}
