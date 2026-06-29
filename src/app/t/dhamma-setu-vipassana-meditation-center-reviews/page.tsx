import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  InlineTestimonial,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/dhamma-setu-vipassana-meditation-center-reviews";
const PUBLISHED = "2026-06-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const CENTER_SITE = "https://setu.dhamma.org/";
const SCHEDULE_URL = "https://schedule.vridhamma.org/courses/setu";
const BALANCEGURUS =
  "https://balancegurus.com/location/india/chennai/dhamma-setu-vipassana-meditation-centre-chennai-india";

export const metadata: Metadata = {
  title: "Dhamma Setu reviews, decoded by someone who's sat six courses",
  description:
    "Dhamma Setu (the Chennai Vipassana centre at Thirumudivakkam) reads as 4.5 out of 5 across 900+ JustDial ratings and 5/5 on smaller listings. But star ratings hide the real story. Here is what the praise and the complaints actually cluster on, and why most of the gripes are fixed features of every Goenka centre worldwide, not a Dhamma Setu defect, read by a meditator with six courses across three centers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Dhamma Setu reviews, decoded (Chennai Vipassana centre)",
    description:
      "4.5/5 across 900+ ratings, but what do the reviews really tell you? The recurring complaints (4am bell, no dinner, mosquitoes, plumbing, phone surrender) decoded by someone who's sat six Goenka courses.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Setu reviews, decoded",
    description:
      "Well-reviewed, but star ratings hide the real story. What the praise and gripes about the Chennai Vipassana centre actually mean.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Dhamma Setu reviews" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Dhamma Setu reviews", url: PAGE_URL },
];

type ReviewTheme = {
  recur: string;
  reads: string;
  weight: "Structural, every centre" | "Local, worth weighting";
};

const themes: ReviewTheme[] = [
  {
    recur: "“The 4am wake bell is brutal”",
    reads:
      "The day starts at 4am at every Goenka centre on the planet, from Thirumudivakkam to NorCal. It is a fixed line in the timetable, not a scheduling quirk Dhamma Setu chose. A review complaining about it is really reviewing the tradition, not the place.",
    weight: "Structural, every centre",
  },
  {
    recur: "“5pm tea and then nothing till morning”",
    reads:
      "New students get breakfast, lunch, and an evening tea with a little fruit. No dinner. People write this up as a catering shortfall. It is part of the code of discipline at every centre, the same arrangement I ate (or didn't) at all three centers I've sat. It lands hard for the first two days and then stops mattering.",
    weight: "Structural, every centre",
  },
  {
    recur: "“Mosquitoes, but they hand out bed nets”",
    reads:
      "This is a real Thirumudivakkam detail. The centre sits among paddy fields on Chennai's rural southwestern fringe, so yes, mosquitoes. The fact that the review also mentions nets is the tell: the centre is responding to its location, not ignoring it.",
    weight: "Local, worth weighting",
  },
  {
    recur: "“Plumbing and infrastructure could be better”",
    reads:
      "This is the one category of review I'd actually weight. The building is the part that genuinely varies between centres, because each one is built and maintained on local donations at its own pace. If condition matters to you, this is the signal in the noise. Everything else on this list is identical everywhere.",
    weight: "Local, worth weighting",
  },
  {
    recur: "“They took my phone for ten days”",
    reads:
      "Phones, books, journals, and contact with the outside are surrendered for the duration at every centre. People log this as a grievance. It is the whole design. The disconnect is doing the work the review is complaining about.",
    weight: "Structural, every centre",
  },
];

const sources: { name: string; detail: string; href?: string }[] = [
  {
    name: "JustDial",
    detail:
      "Around 4.5 out of 5 across more than 900 ratings. The largest pool of voices, and also the noisiest. Heavy on one-line praise and the occasional logistics gripe.",
  },
  {
    name: "Balancegurus",
    detail:
      "5 out of 5 from a small handful of detailed reviews. Fewer voices, but they read like people who actually sat a course rather than drive-by raters.",
    href: BALANCEGURUS,
  },
  {
    name: "Google Maps",
    detail:
      "The listing most people land on first. Same shape as JustDial: a high average built mostly from short, warm one-liners, with a thin tail of infrastructure notes.",
  },
  {
    name: "Personal blogs and Quora",
    detail:
      "Not a star rating, but the most honest read you'll get. Long first-person write-ups of a single course, gripes and breakthroughs intact. Worth more than any average.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana Chennai is Dhamma Setu, and it's not in the city",
    href: "/t/vipassana-chennai",
    excerpt:
      "The verified location at Thirumudivakkam, the online-only registration path, and why the directory listings send people the wrong way.",
    tag: "Where it actually is",
  },
  {
    title: "What the 10-day course structure actually is",
    href: "/t/10-day-course-structure",
    excerpt:
      "The fixed daily clock, group sittings, and noble silence that every review is implicitly reacting to. Read this and the reviews make more sense.",
    tag: "Before you go",
  },
  {
    title: "The 5pm tea cutoff and what it tests",
    href: "/t/vipassana-tea-cutoff-tests-resolve",
    excerpt:
      "The single most-complained-about logistics detail in centre reviews, and what it's actually there to do.",
    tag: "The hunger thing",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Is Dhamma Setu a good Vipassana centre, based on reviews?",
    a: "By the numbers, yes. It sits around 4.5 out of 5 across more than 900 JustDial ratings and shows 5 out of 5 on smaller listings like Balancegurus. The praise clusters on the calm, the teaching, and the food; the complaints cluster on mosquitoes, plumbing, and the discipline (4am start, no dinner, no phone). The thing to understand is that most of those complaints are fixed features of every Goenka centre worldwide, not flaws specific to Dhamma Setu.",
  },
  {
    q: "Why do reviews complain about the food and the 4am wake-up?",
    a: "Because both are part of a code of discipline that is identical at every centre in this tradition. New students get breakfast, lunch, and an evening tea with fruit, and the day starts at 4am. None of that is a choice Dhamma Setu made; it is the same arrangement at every centre, including the three I've sat at. A review treating it as a service shortfall is really reviewing the tradition, not the location.",
  },
  {
    q: "Which Dhamma Setu reviews should I actually pay attention to?",
    a: "The ones about the building: plumbing, electrical, room condition, maintenance. That is the part that genuinely varies between centres, because each one is built and run on local donations at its own pace. Reviews about the schedule, the silence, the food cutoff, or surrendering your phone are describing the universal course design, so they tell you nothing about whether this particular centre is well run.",
  },
  {
    q: "Can I trust the star rating to compare Dhamma Setu against other centres?",
    a: "Not really, and this is the big one. The course itself is the same everywhere: same technique, same timetable, same discipline, taught from the same recorded instructions. So a centre's star average is mostly a verdict on its building, its mosquitoes, and how many happy first-timers happened to leave a review, not on the quality of the practice. Two centres a star apart can offer an identical course in different buildings.",
  },
  {
    q: "Does the location really sit near the airport and factories?",
    a: "Yes, and reviewers mention it both ways. Dhamma Setu is out at Thirumudivakkam on Chennai's southwestern fringe, roughly 10 km from the airport, among paddy fields with some industry nearby. Some reviews frame this as un-ideal for meditation; others note that learning to stay settled despite ambient noise is arguably part of the point. Either way, it is rural outskirts, not central Chennai.",
  },
  {
    q: "Are the reviews enough to know what the course is like?",
    a: "They'll tell you about the place. They can't teach you the technique, and neither can this page. In this tradition the actual method is only transmitted inside the 10-day residential course by an authorized teacher. I've sat six courses and I'm a fellow student, not a teacher. For anything about how to practise, the right sources are dhamma.org and the assistant teachers at the course itself.",
  },
  {
    q: "How do I register if the reviews convinced me?",
    a: "Only through the official schedule at schedule.vridhamma.org/courses/setu. Pick a date, apply online as a new student for a 10-day course, and wait for the centre to confirm. The course, food, and lodging are free, run on past students' donations. The phone numbers on directory and review sites are office enquiry lines, not a booking system.",
  },
];

const jsonLd = [
  articleSchema({
    headline: "Dhamma Setu reviews, decoded by a six-course meditator",
    description:
      "Dhamma Setu, the Chennai Vipassana centre at Thirumudivakkam, rates around 4.5/5 across 900+ JustDial ratings and 5/5 on smaller listings. What the praise and complaints actually cluster on, and why most gripes are fixed features of every Goenka centre rather than a Dhamma Setu defect.",
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
          Reviews, read honestly · Dhamma Setu, Chennai
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-5">
          What Dhamma Setu&rsquo;s reviews{" "}
          <span className="text-teal-600">actually tell you</span>
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          The Chennai Vipassana centre rates well almost everywhere you look.
          That is the easy part. The harder, more useful question is what those
          stars are measuring, and why the most common complaints are the same
          ones you&rsquo;ll find under every Goenka centre on Earth. I&rsquo;ve
          sat six courses across three centers, so let me decode the pattern.
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
            Dhamma Setu is <strong>well-reviewed</strong>: roughly{" "}
            <strong>4.5 out of 5 across 900+ ratings on JustDial</strong> and{" "}
            <strong>5 out of 5</strong> on smaller listings. Praise clusters on
            the teaching, the calm, and the food. Complaints cluster on
            mosquitoes, plumbing, and the discipline (4am start, no dinner, no
            phone). The catch:{" "}
            <strong>
              most of those complaints are fixed features of every Goenka centre
              worldwide
            </strong>
            , not flaws specific to this one.
          </p>
          <p className="mt-4 text-zinc-700">
            Rating pools cross-checked on{" "}
            <a
              href={BALANCEGURUS}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              Balancegurus
            </a>
            , JustDial, and Google listings, plus the centre&rsquo;s own{" "}
            <a
              href={CENTER_SITE}
              className="text-teal-600 underline underline-offset-2"
              rel="noopener noreferrer"
            >
              setu.dhamma.org
            </a>
            , on 2026-06-29.
          </p>
        </div>
      </section>

      {/* The reframe */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Star ratings quietly ask the wrong question
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Every review platform files Dhamma Setu the way it files a hotel or a
            spa: a place to rate on rooms, food, cleanliness, and an overall
            star average you can compare against the next listing. That framing
            is built into the form. It is also the wrong shape for what this
            place is.
          </p>
          <p>
            A Goenka centre is not a service you buy and grade. The course, the
            food, and the lodging are free, run entirely on past students&rsquo;
            donations. There is no paid product to be short-changed on. And the
            course itself is not a Dhamma Setu creation: it&rsquo;s the same
            10-day structure, the same timetable, and the same discipline taught
            at every centre in the tradition. So a five-star average is mostly a
            verdict on the building and the mood of whoever left a review, not on
            the practice.
          </p>
        </div>

        <div className="mt-8">
          <BeforeAfter
            title="Two ways to read the same listing"
            before={{
              label: "How the listing frames it",
              content:
                "A meditation centre to rate like a resort, judged on rooms, food, and a single star average you compare against other places.",
              highlights: [
                "Star average treated as a quality verdict",
                "Conditions reviewed like a paid retreat",
                "Implies you can rank centres by their rating",
              ],
            }}
            after={{
              label: "What it actually is",
              content:
                "A donation-funded course with a worldwide-identical curriculum and code of discipline. The building varies by location; the course does not.",
              highlights: [
                "Free, so there's no paid service to grade",
                "Same 10-day structure at every centre",
                "Conditions are local; the practice is universal",
              ],
            }}
          />
        </div>
      </section>

      {/* The anchor: decoder */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          The five things every Dhamma Setu review keeps surfacing
        </h2>
        <p className="text-zinc-600 mb-7">
          Read enough of them and the same handful of themes repeat. Here is each
          one, and whether it&rsquo;s telling you something about{" "}
          <em>this centre</em> or just about the tradition. Four of the five are
          structural: you would find the identical complaint under any centre,
          which is exactly why they cannot help you judge Dhamma Setu
          specifically.
        </p>

        <div className="space-y-4">
          {themes.map((t) => {
            const local = t.weight === "Local, worth weighting";
            return (
              <div
                key={t.recur}
                className="rounded-2xl border border-zinc-200 bg-white p-6 sm:flex sm:gap-6"
              >
                <div className="sm:w-2/5 mb-3 sm:mb-0">
                  <p className="text-base font-semibold text-zinc-900 leading-snug">
                    {t.recur}
                  </p>
                  <span
                    className={
                      "mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold " +
                      (local
                        ? "bg-teal-50 text-teal-700 border border-teal-200"
                        : "bg-zinc-100 text-zinc-600 border border-zinc-200")
                    }
                  >
                    {t.weight}
                  </span>
                </div>
                <p className="sm:w-3/5 text-sm text-zinc-700 leading-relaxed">
                  {t.reads}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
          The decoder rule is simple: if a complaint would be true at every
          centre in the world, it cannot tell you anything about this one. Only
          the building-condition reviews are actually about Dhamma Setu.
        </p>
      </section>

      <ProofBanner
        metric="4 of 5"
        quote="Of the recurring review themes, four are fixed parts of the global course design. Only one, the building's condition, is actually specific to this centre."
        source="Pattern across JustDial, Google, and Balancegurus reviews, June 2026"
      />

      {/* Real voices */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          What the warm reviews sound like
        </h2>
        <p className="text-zinc-600 mb-6">
          The bulk of the high ratings are short and sincere. They&rsquo;re worth
          reading not as proof, but for the consistent note in them: people
          describe a shift, not amenities.
        </p>
        <div className="space-y-4">
          <InlineTestimonial
            quote="The teachers visiting the centre are gems."
            name="Dhvinay"
            role="Review on Balancegurus"
            stars={5}
          />
          <InlineTestimonial
            quote="Life changes after the 10 days. It heals, it calms."
            name="Dilipkumar"
            role="Review on Balancegurus"
            stars={5}
          />
        </div>
        <p className="mt-5 text-sm text-zinc-500 leading-relaxed">
          Quotes drawn from the public Balancegurus listing for Dhamma Setu.
          Notice what they don&rsquo;t say: nobody is rating the mattress. The
          praise is about what the ten days did, which is the part no star
          average can really capture.
        </p>
      </section>

      {/* Where the reviews live */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          Where the reviews actually live
        </h2>
        <p className="text-zinc-600 mb-6">
          Four pools, four different signal-to-noise ratios. If you only check
          one, the personal write-ups will tell you more than any star average.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {sources.map((s) => (
            <div
              key={s.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-zinc-900 mb-2">
                {s.href ? (
                  <a
                    href={s.href}
                    className="text-teal-700 underline underline-offset-2"
                    rel="noopener noreferrer"
                  >
                    {s.name}
                  </a>
                ) : (
                  s.name
                )}
              </h3>
              <p className="text-sm text-zinc-700 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          One thing none of these pools is: a booking system. Reserving a seat
          happens only through the official{" "}
          <a
            href={SCHEDULE_URL}
            className="text-teal-600 underline underline-offset-2"
            rel="noopener noreferrer"
          >
            VRI schedule
          </a>
          , whatever a phone number on a review page implies.
        </p>
      </section>

      {/* The part reviews can't reach */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          The part no review can score for you
        </h2>
        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            Here is the thing the star ratings quietly skip. A glowing review and
            a lukewarm one are usually written in the same place: on the morning
            of the 11th day, or a few days after, while the experience is still
            warm. Almost none of them are written six months later, which is when
            you actually find out whether the course did anything for you.
          </p>
          <p>
            I&rsquo;m not going to prescribe a routine, that&rsquo;s not mine to
            hand out. But across my own six courses and the people I sat next to,
            the pattern is consistent: the ones who keep a daily practice going
            after they leave Thirumudivakkam are rarely the ones with the most
            willpower. They&rsquo;re the ones who didn&rsquo;t try to do it alone.
            No review can tell you whether you&rsquo;ll be in that group, because
            it gets decided weeks after the review was posted.
          </p>
          <p>
            That gap is the whole reason this site exists. It&rsquo;s a resource
            for after the course: notes on rebuilding a daily sit, and a free
            program that pairs you with another practitioner for daily
            accountability. If the reviews have you ready to apply at Dhamma Setu,
            the most useful thing you can line up now is who you&rsquo;ll check in
            with once you&rsquo;re back in Chennai.
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
          heading="Reviews convinced you, now what about after?"
          description="Book a short call and I'll share, peer to peer, what actually kept a daily practice alive once I was back from a course. No teaching, just what worked."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16">
        <FaqSection
          items={faqs}
          heading="Dhamma Setu reviews: common questions"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-16 mb-20">
        <RelatedPostsGrid
          title="Read alongside the reviews"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Headed to Dhamma Setu? Get peer notes on making it stick."
      />
    </article>
  );
}
