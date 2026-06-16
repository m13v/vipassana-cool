import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  FlowDiagram,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-pune";
const PUBLISHED = "2026-06-16";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Pune: two Goenka centers, one samiti, and the eligibility rule that decides which one you can sit at",
  description:
    "Pune is one of the few cities with two Goenka-tradition Vipassana centers run by the same samiti: Dhamma Punna in the city (opposite Nehru Stadium, Swargate, 411002) and Dhammananda on the Indrayani river at Markal (412105, 23 acres, ~30 km out). They are not interchangeable. The riverside center admits only applicants 18 to 65 without comorbidities; the city center has no upper age limit and takes those needing medical care. Addresses, the 2026 calendar, language alternation, and how to apply, checked against punna.dhamma.org on 2026-06-16.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana in Pune: two centers, and the rule that decides which one takes you",
    description:
      "Dhamma Punna (city) and Dhammananda (Markal, riverside) both serve Pune under one samiti. The riverside center caps age at 65 and refuses comorbidities; the city center has no age ceiling. Addresses, dates, and how to apply.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Pune: two centers explained",
    description:
      "Two Goenka centers serve Pune under one samiti, with inverse eligibility rules. Which one can take you, the addresses, the 2026 dates, and how to apply.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Pune" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Pune", url: PAGE_URL },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Where it is",
    competitor:
      "Village Markal, Dist. Pune 412105. On the Indrayani river, about 30 km from Pune railway station and 25 km from the airport.",
    ours: "Opposite Nehru Stadium, Swargate, Pune 411002. Inside the city, walkable from a major transit hub.",
  },
  {
    feature: "Setting",
    competitor: "23 acres, riverside, quiet and secluded. A residential retreat campus.",
    ours: "Urban site in the heart of the city. Easier to reach, less remote.",
  },
  {
    feature: "Established",
    competitor: "March 1997.",
    ours: "2000.",
  },
  {
    feature: "Age eligibility",
    competitor:
      "18 to 65 only. Applicants above 65 are directed elsewhere.",
    ours: "18 and above, with no upper age limit.",
  },
  {
    feature: "Health and special care",
    competitor:
      "Applicants with comorbidities should not apply. Pregnant women are not admitted (no on-site medical facilities).",
    ours:
      "Accepts older students and applicants who need special care or medical attention, including pregnant applicants with medical clearance.",
  },
  {
    feature: "Cost",
    competitor: "Free. Donation only, accepted from old students after a completed course.",
    ours: "Free. Donation only, accepted from old students after a completed course.",
  },
  {
    feature: "Register at",
    competitor: "schedule.vridhamma.org/courses/ananda",
    ours: "schedule.vridhamma.org/courses/punna",
  },
];

const applySteps = [
  {
    label: "Pick the center your eligibility allows",
    detail:
      "If you are over 65, have a significant health condition, or are pregnant, the city center (Dhamma Punna) is your route. Otherwise either works, so choose by setting and dates.",
  },
  {
    label: "Find a 10-day course date",
    detail:
      "Open the live calendar for that center on schedule.vridhamma.org and pick a course that is still open. Pune dates fill 1 to 2 months out.",
  },
  {
    label: "Submit the application",
    detail:
      "Apply through the course-search form on dhamma.org or the official app. The form covers your health history; answer it fully, since the center confirms eligibility before a seat.",
  },
  {
    label: "Wait for confirmation, then commit",
    detail:
      "You receive an acceptance email. The course is all-or-nothing: you arrive the afternoon it opens and stay through the final morning.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana center in Pune?",
    a: "There are two, both in the Goenka tradition and both run by the Pune Vipassana Samiti. Dhamma Punna sits inside the city, opposite Nehru Stadium at Swargate (411002). Dhammananda sits about 30 km out at Village Markal (412105), on a 23-acre riverside campus on the Indrayani. Both run free, donation-based 10-day residential courses. Most people who search for a Pune course do not realize there are two distinct places with different rules.",
  },
  {
    q: "What is the difference between Dhamma Punna and Dhammananda?",
    a: "Setting and eligibility. Dhamma Punna is the in-city center, easy to reach and open to a wider range of applicants, including older students and those who need medical care. Dhammananda is the secluded riverside center at Markal, founded in March 1997 on 23 acres along the Indrayani, with a meditation hall seating 100 to 125. The riverside center restricts applicants to ages 18 to 65 without comorbidities and does not admit pregnant women, because it has no on-site medical facilities. So the quieter campus is also the stricter one.",
  },
  {
    q: "Which Pune center should I apply to?",
    a: "If you are between 18 and 65 and in good health, you can choose either, so pick by what you want from the environment: Markal for a remote riverside campus, the Swargate center for ease of travel. If you are over 65, managing a health condition, or pregnant, apply to Dhamma Punna in the city, since Dhammananda will not be able to take you. The technique taught is identical at both; only the location and admission rules differ.",
  },
  {
    q: "How much does a Vipassana course in Pune cost?",
    a: "Nothing. At both centers there is no charge for the teaching, the food, or the room. They run entirely on donations, and donations are accepted only from people who have already completed a 10-day course. A first-timer is, in effect, hosted by everyone who sat before them. At the end you give what you wish if you found value, or nothing.",
  },
  {
    q: "In what language are Pune courses taught?",
    a: "Courses alternate. At Dhamma Punna and Dhammananda the 2026 calendar runs back-to-back Hindi-English and Hindi-Marathi sittings, so consecutive courses switch the secondary language. The core instruction audio is S.N. Goenka's recordings; the live language matters mainly for the daily logistics and questions. Check the language tag on each date in the schedule before you apply.",
  },
  {
    q: "How far in advance should I apply for a Pune course?",
    a: "One to two months. Pune is a dense metro and both centers fill quickly, especially the Marathi-English sittings. Seats open on a rolling basis on the official schedule, so applying early and being flexible on dates helps. There is no fee to hold a seat, but the all-or-nothing rule means you should be sure you can stay the full ten days before you confirm.",
  },
  {
    q: "Is the Osho center in Pune the same as Vipassana?",
    a: "No. Pune is well known for the Osho International Meditation Resort, which offers its own meditations under various names. The free Goenka-tradition 10-day Vipassana courses described here are run by the Pune Vipassana Samiti at Dhamma Punna and Dhammananda, are unrelated to Osho, and charge nothing. If you searched for the donation-based residential 10-day course, those two centers are what you want.",
  },
];

export default function Page() {
  const schema = [
    breadcrumbListSchema(breadcrumbSchemaItems),
    articleSchema({
      headline:
        "Vipassana in Pune: two Goenka centers, one samiti, and the eligibility rule that decides which one takes you",
      description:
        "Pune has two Goenka-tradition Vipassana centers under one samiti: Dhamma Punna in the city and Dhammananda on the Indrayani river at Markal. The riverside center admits only ages 18 to 65 without comorbidities; the city center has no upper age limit. Addresses, the 2026 calendar, and how to apply, verified against punna.dhamma.org.",
      url: PAGE_URL,
      datePublished: PUBLISHED,
      author: "Matthew Diakonov",
      authorUrl: "https://m13v.com",
      publisherName: "Vipassana.cool",
      publisherUrl: "https://vipassana.cool",
    }),
    faqPageSchema(faqs),
  ];

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-8">
          <p className="text-sm font-medium uppercase tracking-wider text-teal-600">
            Pune, Maharashtra
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Vipassana in Pune
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Most guides answer &ldquo;where is the Vipassana center in
            Pune&rdquo; with a single address. Pune actually has{" "}
            <strong>two</strong> Goenka-tradition centers run by the same
            samiti, and they are not interchangeable. One sits in the city and
            takes nearly anyone; the other sits on a riverside campus 30 km out
            and turns away anyone over 65 or with a health condition. Knowing
            which one your own eligibility allows is the thing that actually
            decides where you sit.
          </p>
        </header>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />

        {/* DIRECT ANSWER */}
        <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer — verified 2026-06-16
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            Pune has two Goenka-tradition Vipassana centers, both run by the{" "}
            <strong>Pune Vipassana Samiti</strong> and both free:
          </p>
          <ul className="mt-4 space-y-3 text-zinc-800">
            <li className="leading-relaxed">
              <strong>Dhamma Punna</strong> — the city center, opposite Nehru
              Stadium, Swargate, Pune 411002. Easy to reach, open to older
              students and those needing medical care.
            </li>
            <li className="leading-relaxed">
              <strong>Dhammananda</strong> — the riverside center, Village
              Markal, Dist. Pune 412105, on 23 acres along the Indrayani river,
              about 30 km from the city. Admits only ages 18 to 65 without
              comorbidities.
            </li>
          </ul>
          <p className="mt-4 text-sm text-zinc-600">
            Both run free, donation-based 10-day residential courses. Source:{" "}
            <a
              href="https://punna.dhamma.org/aboutdhammananda.html"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              punna.dhamma.org
            </a>
            . Live calendars:{" "}
            <a
              href="https://schedule.vridhamma.org/courses/punna"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dhamma Punna
            </a>{" "}
            and{" "}
            <a
              href="https://schedule.vridhamma.org/courses/ananda"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dhammananda
            </a>
            .
          </p>
        </div>

        {/* WHY TWO */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Two centers, one samiti
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Most Indian cities with a Vipassana presence have exactly one
            center, so a city name maps cleanly to a single place. Pune does
            not. The Pune Vipassana Samiti operates both an in-city center and a
            rural one, which is why a search for &ldquo;Vipassana Pune&rdquo;
            quietly hides a decision you have to make before you ever open an
            application form.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Dhamma Punna, established in 2000, is the urban center at Swargate,
            opposite Nehru Stadium. Dhammananda (&ldquo;joy of Dhamma&rdquo;)
            opened earlier, in March 1997, and sits on a 23-acre campus on the
            bank of the Indrayani at Markal, roughly an hour from the heart of
            the city. The meditation hall there seats 100 to 125 students. Same
            samiti, same tradition, same recorded instruction. Different place,
            and as it turns out, different rules about who can come.
          </p>
        </section>

        <div className="mt-12">
          <ComparisonTable
            heading="Dhamma Punna vs Dhammananda, side by side"
            productName="Dhamma Punna (city)"
            competitorName="Dhammananda (Markal)"
            rows={comparisonRows}
            caveat="Both centers are run by the Pune Vipassana Samiti. Details checked against punna.dhamma.org and the official course schedule on 2026-06-16; confirm live dates and eligibility on the center pages before you travel."
          />
        </div>

        {/* ANCHOR FACT: inverse eligibility */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            The detail no overview mentions: the quieter center is the stricter
            one
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Here is the part that gets left out of every Pune listing. The two
            centers have inverse admission rules, and they run opposite to what
            you might expect.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Dhammananda, the secluded 23-acre riverside campus, is the more
            restrictive of the two. Its eligibility page states that only
            applicants between <strong>18 and 65 years without
            comorbidities</strong> should apply, and that pregnant women are not
            admitted because the site has no medical facilities. The remote,
            peaceful campus is precisely the one that cannot support anyone whose
            health might need attention during ten silent days.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Dhamma Punna, the in-city center, is the inverse. Its rule is{" "}
            <strong>18 and above with no upper age criteria</strong>, and it
            accepts applicants who need special care, including pregnant
            applicants with medical clearance, precisely because being inside the
            city means help is close. So if you are a 70-year-old first-timer in
            Pune, the urban center is not just more convenient, it is the only
            one of the two that can take you.
          </p>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            You can verify both rules on the samiti&apos;s own pages:{" "}
            <a
              href="https://punna.dhamma.org/EligibilityCriteria.php"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              the eligibility criteria
            </a>{" "}
            and{" "}
            <a
              href="https://punna.dhamma.org/aboutdhammananda.html"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              the about-the-centers page
            </a>
            . I am a fellow meditator who has sat six courses, not a teacher or
            anyone speaking for the samiti, so treat this as a map to the
            official rules, not a substitute for them.
          </p>
        </section>

        {/* WHICH TO PICK */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Which one to pick
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            If your eligibility lets you choose, the decision comes down to what
            you want from the surroundings, not the meditation. The technique and
            the recorded instruction are identical at both.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                Choose Dhammananda (Markal)
              </p>
              <p className="mt-3 leading-relaxed text-zinc-700">
                You want the full retreat feel: a riverside campus 30 km out,
                away from city noise, with nothing to pull your attention back to
                ordinary life. You are 18 to 65 and in good health. The distance
                from the city is part of the point.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-teal-600">
                Choose Dhamma Punna (Swargate)
              </p>
              <p className="mt-3 leading-relaxed text-zinc-700">
                You want easy travel, you are over 65, or you have a health
                consideration that needs care close at hand. The center sits
                inside the city opposite Nehru Stadium, simple to reach and open
                to a wider range of applicants.
              </p>
            </div>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700">
            One honest caveat: a city center is still a 10-day silent course, not
            a day program. The walls do not block the city, but the schedule and
            the silence do most of the sealing-off either way. The Markal campus
            simply removes one more layer of distraction for those it can admit.
          </p>
        </section>

        {/* DATES + LANGUAGE */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Dates and language in 2026
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Both centers run 10-day courses through the year and alternate the
            secondary language. On the 2026 calendar the sittings switch between{" "}
            <strong>Hindi-English</strong> and <strong>Hindi-Marathi</strong>{" "}
            back to back, so two consecutive courses at the same center will not
            be in the same pairing. If English is your only Indian-context
            language, look specifically for the Hindi-English dates.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            The schedule also includes Satipatthana Sutta courses and shorter
            old-student courses, plus separate children&apos;s Anapana days run by
            the samiti. Dates shift month to month and fill 1 to 2 months ahead,
            so the only reliable source is the live calendar, not a static list.
            Check{" "}
            <a
              href="https://schedule.vridhamma.org/courses/punna"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Dhamma Punna schedule
            </a>{" "}
            or{" "}
            <a
              href="https://schedule.vridhamma.org/courses/ananda"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              the Dhammananda schedule
            </a>{" "}
            for the current open dates.
          </p>
          <div className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 p-5 text-sm text-zinc-600">
            Registration contact for both centers:{" "}
            <span className="font-medium text-zinc-800">
              reg.punna@vridhamma.org
            </span>{" "}
            (city) and{" "}
            <span className="font-medium text-zinc-800">
              reg.ananda@vridhamma.org
            </span>{" "}
            (Markal). The samiti office is at Nehru Stadium, Swargate, Pune
            411002.
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            How to apply
          </h2>
          <p className="mt-4 mb-8 text-lg leading-relaxed text-zinc-700">
            The process is the same for both centers; the only fork is step one,
            where your eligibility may make the choice for you.
          </p>
          <FlowDiagram title="Applying for a Pune 10-day course" steps={applySteps} />
        </section>

        <div className="mt-14">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Sorting out a first course in Pune?"
            description="Book a short call and I will talk through how the two centers actually differ and what a first sit is like, peer to peer, not as a teacher."
          />
        </div>

        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
            Common questions
          </h2>
          <div className="mt-6">
            <FaqSection items={faqs} />
          </div>
        </section>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: "Igatpuri Vipassana (Dhamma Giri)",
                href: "/t/igatpuri-vipassana",
                excerpt:
                  "The source node of the worldwide tradition, about three hours north of Pune.",
                tag: "Centers",
              },
              {
                title: "Vipassana in Kanpur",
                href: "/t/vipassana-kanpur",
                excerpt:
                  "How another single-center city runs its 5th-and-20th course rhythm.",
                tag: "Centers",
              },
              {
                title: "First course tips",
                href: "/guide/first-course-tips",
                excerpt:
                  "What I wish I had known before my first 10-day sit.",
                tag: "Guide",
              },
            ]}
          />
        </div>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about sitting a course in Pune? Book a peer call."
      />
    </article>
  );
}
