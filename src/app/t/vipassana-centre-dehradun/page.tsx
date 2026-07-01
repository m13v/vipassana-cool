import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GlowCard,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-centre-dehradun";
const PUBLISHED = "2026-06-30";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const CENTRE_HOME = "https://salila.dhamma.org/";
const CENTRE_ABOUT = "https://salila.dhamma.org/en/the-centre/";
const CENTRE_DIRECTIONS = "https://salila.dhamma.org/en/directions-to-the-centre/";
const SCHEDULE = "https://schedule.vridhamma.org/courses/salila";
const TRADITION = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana Centre in Dehradun: Dhamma Salila, the River-Named Centre That Closes Every January",
  description:
    "The one Vipassana centre for Dehradun is Dhamma Salila, in Dholos village on the Noon rivulet, about 10 km from the Clock Tower. It runs free 10-day donation courses roughly twenty times a year, but its live schedule is dark every January. Salila is Sanskrit for flowing water. Verified 2026-06-30.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Salila, the Dehradun Vipassana centre, is closed every January",
    description:
      "One centre for Dehradun: Dhamma Salila, on the left bank of the Noon rivulet, ~10 km from the Clock Tower. Free 10-day courses about twenty times a year, none in January. Salila means flowing water. Verified 2026-06-30.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Dehradun Vipassana centre is Dhamma Salila, and it goes dark in January",
    description:
      "Dhamma Salila sits on the Noon rivulet in the Doon Valley, ~10 km from the Clock Tower. Free 10-day courses roughly twenty times a year, zero in January. Salila is Sanskrit for flowing water.",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "Is there a Vipassana centre in Dehradun?",
    a: "Yes, one. It is Dhamma Salila, in Dholos village in the Doon Valley, on the left bank of the Noon rivulet, about 10 km from the Clock Tower in Dehradun (pin 248001). It teaches Vipassana exactly as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin. It was established in December 1995 and runs about twenty courses a year, all on a donation basis with no charge for teaching, food, or lodging.",
  },
  {
    q: "Why are there no courses at Dhamma Salila in January?",
    a: "The centre's own description says courses are held throughout the year excluding January, and the live VRI schedule bears this out: the 2026 calendar shows courses running July through December with no January date. The Doon Valley sits in the Himalayan foothills and January is its cold, damp low point, so the centre keeps that month clear. Practically it means if you are planning a Dehradun course, January is the one month you cannot sit here, and you either pick another month or look at a centre in a warmer part of the country.",
  },
  {
    q: "What does the name Dhamma Salila mean?",
    a: "Every centre in this tradition takes a name beginning with Dhamma. Salila is a Sanskrit and Pali word for flowing water, a stream, a current. The centre translates its own name as 'Water of Dhamma,' and it is not a metaphor picked at random: the centre physically sits on the left bank of the Noon rivulet in the Doon Valley. So the water in the name is the actual water it was built beside.",
  },
  {
    q: "Is a paid 'Vipassana retreat in Dehradun or Rishikesh' the same as this centre?",
    a: "No, and this trips people up. Search results mix the free Goenka centre in with tour-operator packages that sell paid 'vipassana retreats' around Dehradun and Rishikesh, often at resorts or ashrams. Those are separate businesses. Dhamma Salila charges nothing: no fee for the course, the food, or the room, and it only invites a donation after you have completed a 10-day course. If a listing quotes you a nightly rate or a package price, it is not Dhamma Salila.",
  },
  {
    q: "How do I reach Dhamma Salila and how do I register?",
    a: "The nearest airport is Jolly Grant (Dehradun), roughly 40 km and a little over an hour by taxi. Dehradun railway station is about 12 km off, and the centre lies in the Birpur/Ghangora area reached via Garhi Cantt Chowk. To register you do not call first; you open the official course schedule, pick a specific 10-day date in an open month, read the Code of Discipline, and submit the online application for that course. Popular dates fill and move to a waiting list, so applying early helps.",
  },
  {
    q: "What are the conditions like, and how big is the centre?",
    a: "It is a purpose-built residential centre, not a rented camp. Its own figures list twenty double rooms for men and sixteen for women, plus seventy-eight individual cells for meditators. That is a modest, single-course-at-a-time scale in a quiet valley setting, which is what a residential course is meant to be: removed from the city, on the bank of a stream, with everything else stripped away.",
  },
  {
    q: "Does this page teach the technique, or is it the official centre?",
    a: "Neither. This is an orientation written by a fellow meditator: where the Dehradun centre is, what its name means, and the one month it goes quiet. It is not affiliated with Dhamma Salila and it does not teach the method. The technique is transmitted only inside a 10-day course by an authorized teacher. For the course itself, and for anything about how the practice works, the authoritative sources are salila.dhamma.org, dhamma.org, and an authorized assistant teacher.",
  },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// One-off, hand-built visual for this page: the twelve-month strip with the one
// month the Dehradun centre goes dark struck out. Built inline so it reads as a
// calendar fact, not a generic feature tile. The "open" months mirror what the
// live VRI schedule shows for 2026 (courses Jul-Dec, none in January).
function CourseMonthStrip() {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        When you can sit at Dhamma Salila
      </p>
      <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6">
        {MONTHS.map((m) => {
          const closed = m === "Jan";
          return (
            <div
              key={m}
              className={
                closed
                  ? "relative rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-3 text-center"
                  : "rounded-lg border border-teal-200 bg-teal-50 px-2 py-3 text-center"
              }
            >
              <span
                className={
                  closed
                    ? "text-sm font-semibold text-zinc-400 line-through"
                    : "text-sm font-semibold text-teal-700"
                }
              >
                {m}
              </span>
              {closed && (
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                  closed
                </span>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-zinc-500">
        The centre&rsquo;s own description says courses run every month{" "}
        <em>excluding January</em>. The live schedule confirms it: dates appear
        month after month, then January comes up empty. Checked against{" "}
        <a
          href={SCHEDULE}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal-700 underline underline-offset-2"
        >
          schedule.vridhamma.org/courses/salila
        </a>{" "}
        on 2026-06-30.
      </p>
    </div>
  );
}

export default function Page() {
  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana Centre in Dehradun: Dhamma Salila, the River-Named Centre That Closes Every January",
      description:
        "The Vipassana centre for Dehradun is Dhamma Salila, in Dholos village on the left bank of the Noon rivulet, about 10 km from the Clock Tower. It runs free 10-day donation courses roughly twenty times a year, but holds no courses in January. Salila is Sanskrit for flowing water.",
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
      { name: "Vipassana centre in Dehradun", url: PAGE_URL },
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
            { label: "Vipassana centre in Dehradun" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Dehradun, Uttarakhand
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The Vipassana centre for Dehradun is named after a river, and it goes
            dark one month a year
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search &ldquo;vipassana centre dehradun&rdquo; and you get a phone
            number and a pin near Garhi Cantt. Two things the listings never tell
            you: the centre, <em>Dhamma Salila</em>, is named for the very
            stream it sits on, and its course calendar has a hole in it. There
            are no courses in January.
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
            Yes, there is one Vipassana centre for Dehradun:{" "}
            <strong>Dhamma Salila</strong>, in <strong>Dholos village</strong> in
            the Doon Valley, on the left bank of the <strong>Noon rivulet</strong>,{" "}
            <strong>about 10 km from the Clock Tower</strong> (pin 248001). It was
            established in <strong>December 1995</strong> and runs{" "}
            <strong>about twenty free 10-day residential courses a year</strong> on
            a pure donation basis. One caveat most listings skip:{" "}
            <strong>it holds no courses in January</strong>.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Authoritative sources: the centre&rsquo;s own site{" "}
            <a
              href={CENTRE_HOME}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              salila.dhamma.org
            </a>{" "}
            and the live schedule at{" "}
            <a
              href={SCHEDULE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              schedule.vridhamma.org/courses/salila
            </a>
            .
          </p>
        </section>

        {/* The anchor: the January gap */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The thing no listing warns you about: January
          </h2>
          <p className="mt-4 text-zinc-700">
            Almost every page that ranks for the Dehradun centre gives you the
            same block: name, address, phone number, &ldquo;no charge.&rdquo; What
            none of them put up front is that the calendar is not continuous. The
            centre&rsquo;s own description says courses run through the year{" "}
            <em>excluding January</em>, and when you open the live schedule that is
            exactly what you see: course after course through the warmer months,
            then a blank where January should be.
          </p>
          <p className="mt-4 text-zinc-700">
            It makes sense once you place Dehradun. This is not the plains. Dhamma
            Salila sits in the Doon Valley, in the Himalayan foothills, and January
            is the cold, damp bottom of the year there. A 10-day residential course
            in an unheated valley cell in deep winter is a different proposition
            than one in October, so the centre simply keeps that month clear. For
            you, planning a first course, it is a one-line rule worth knowing
            before you fall in love with a date: <strong>anything but January</strong>.
          </p>

          <div className="mt-8">
            <CourseMonthStrip />
          </div>
        </section>

        {/* The name and the river */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The name is not decoration: Salila is the stream it stands on
          </h2>
          <p className="mt-4 text-zinc-700">
            Every centre in this tradition carries a name that starts with{" "}
            <em>Dhamma</em>. Igatpuri, the mother centre, is Dhamma Giri,
            &ldquo;mountain of Dhamma.&rdquo; This one is <em>Dhamma Salila</em>,
            and the centre glosses it as &ldquo;Water of Dhamma.&rdquo;{" "}
            <em>Salila</em> is a Sanskrit and Pali word for flowing water, a
            stream, a current. It is an old, watery word, not a modern coinage.
          </p>
          <p className="mt-4 text-zinc-700">
            What makes it more than a pretty translation is the geography. The
            centre physically sits on the left bank of the Noon rivulet in the
            Doon Valley. So the water in the name is not a metaphor reaching for
            something spiritual; it is the actual stream the buildings were placed
            beside. A centre named for flowing water, built on flowing water. That
            small honesty is the sort of thing a directory listing has no room to
            notice.
          </p>

          <div className="mt-8">
            <GlowCard className="rounded-2xl border border-teal-200 bg-white p-6 sm:p-8">
              <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-2xl font-bold text-zinc-900">Dhamma</span>
                <span className="pb-1 text-sm text-zinc-400">
                  the teaching, the law of nature
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-2xl font-bold text-teal-600">Salila</span>
                <span className="pb-1 text-sm text-zinc-500">
                  Sanskrit / Pali: flowing water, a stream
                </span>
              </div>
              <div className="mt-6 border-t border-zinc-100 pt-6">
                <p className="text-sm text-zinc-700">
                  Built on the left bank of the Noon rivulet, Doon Valley. The
                  name and the map point at the same water.
                </p>
                <p className="mt-3 text-xs text-zinc-400">
                  A linguistic and geographic note, not an instruction. The water
                  here is etymology and landscape, nothing to do on a cushion.
                </p>
              </div>
            </GlowCard>
          </div>
        </section>

        {/* The paid-retreat confusion */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            One free centre, and a lot of paid noise around it
          </h2>
          <p className="mt-4 text-zinc-700">
            If you look up Vipassana around Dehradun and Rishikesh, the results
            blur two very different things together. On one side is Dhamma Salila,
            the free Goenka centre. On the other is a cluster of tour operators
            and resorts selling &ldquo;vipassana retreats&rdquo; in the same
            region, with nightly rates, packages, and booking pages. They are not
            the same thing, and confusing them is easy because they share the
            word.
          </p>
          <p className="mt-4 text-zinc-700">
            The clean test is money. Dhamma Salila charges nothing: no fee for the
            teaching, the food, or the room. The whole operation runs on donations
            from people who have already sat a course, and you are only invited to
            give after you finish your own 10-day course, never before, and only
            if you want to. So if a listing for &ldquo;vipassana in
            Dehradun&rdquo; quotes you a per-night price or a package cost, that is
            a business, not this centre. For the real thing there is one address,
            one schedule, and one way to apply, all on{" "}
            <a
              href={CENTRE_ABOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              the centre&rsquo;s own site
            </a>
            .
          </p>
        </section>

        {/* Logistics, reference-style */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The practical file
          </h2>
          <dl className="mt-4 divide-y divide-zinc-100 rounded-2xl border border-zinc-200 bg-white">
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Centre</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Dhamma Salila, established December 1995
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Where</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Dholos village, Doon Valley, on the left bank of the Noon rivulet;
                about 10 km from the Dehradun Clock Tower via Garhi Cantt Chowk and
                the Birpur / Ghangora area (pin 248001)
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Getting there</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Jolly Grant (Dehradun) airport ~40 km, a little over an hour by
                taxi; Dehradun railway station ~12 km. See the centre&rsquo;s own{" "}
                <a
                  href={CENTRE_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  directions page
                </a>{" "}
                for the current route.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Courses</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                About twenty a year, mostly 10-day, plus occasional 3-day and
                Satipatthana Sutta courses. None in January.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Cost</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Free. Donation basis only, and only from old students after a
                completed course.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Capacity</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Twenty double rooms for men, sixteen for women, and seventy-eight
                individual cells
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Apply</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Pick a dated course on{" "}
                <a
                  href={SCHEDULE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  the live schedule
                </a>{" "}
                and submit the online application for that date
              </dd>
            </div>
          </dl>
        </section>

        {/* Post-course bridge */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What the address cannot show you is the drive back down the valley
          </h2>
          <p className="mt-4 text-zinc-700">
            I write this as a fellow practitioner, not a teacher. I have sat six
            10-day courses at three centres and done a stretch of dhamma service,
            and the part none of the Dehradun listings mention is what happens
            after day 10. The gate opens, the silence breaks, you ride back down
            toward the city, and a practice that felt almost automatic on the bank
            of that stream becomes a decision you have to make alone every morning.
          </p>
          <p className="mt-4 text-zinc-700">
            There is a small irony in a centre named for flowing water. Salila is
            a current, something that keeps moving, and the days right after a
            course are exactly when the momentum stops: the phone, the noise, the
            reasons to skip a sit. Most practices thin out in the weeks after a
            course, not during it. No centre, however quiet its valley, carries
            that part for you once you are home.
          </p>
          <p className="mt-4 text-zinc-700">
            That gap is why this site exists. What worked for me was not more
            willpower, it was company: being paired with one other meditator for
            daily accountability after a course. If you want that, there is a{" "}
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
            replaces sitting a course. They are just for the stretch of road that
            starts after the gate.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Planning a Dehradun course, or keeping the practice alive after one?"
          description="Book a short peer call and I will share what worked for me across six courses, and how practice buddy matching keeps a daily sit going once you are back home."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about the Vipassana centre in Dehradun
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
                title: "Vipassana in Pushkar",
                href: "/t/vipassana-pushkar",
                excerpt:
                  "Another centre whose name and location tell a story the listings skip, decoded the same way.",
                tag: "Nearby regions",
              },
              {
                title: "Vipassana for beginners",
                href: "/guide/vipassana-for-beginners",
                excerpt:
                  "What a first 10-day course actually involves, before you pick a date at Dehradun.",
                tag: "Getting started",
              },
              {
                title: "What the word vipassana means",
                href: "/guide/vipassana-meaning",
                excerpt:
                  "A linguistic note on vipassana and its roots, in the same spirit as decoding Salila.",
                tag: "Language",
              },
            ]}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          I am a fellow practitioner sharing logistics and a language note, not a
          teacher, and not affiliated with Dhamma Salila or any centre. For the
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
            salila.dhamma.org
          </a>
          , and an authorized assistant teacher at a 10-day course.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Planning a Dehradun course or keeping a daily sit alive after one? Book a peer call."
      />
    </article>
  );
}
