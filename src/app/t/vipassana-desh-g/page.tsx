import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  OrbitingCircles,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-desh-g";
const PUBLISHED = "2026-07-01";
const BOOKING = "https://cal.com/team/mediar/vipassana";

const CENTRE_HOME = "https://sobhana.dhamma.org/";
const CENTRE_ABOUT = "https://sobhana.dhamma.org/the-centre-in-sweden/";
const CENTRE_TRAVEL = "https://sobhana.dhamma.org/travel-information/";
const SCHEDULE = "https://www.dhamma.org/en/schedules/schsobhana";
const TRADITION = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana in Ödeshög: Dhamma Sobhana, a Village School Turned Nordic Centre",
  description:
    "The Vipassana centre near Ödeshög is Dhamma Sobhana, at Holmen 1, about 15 km outside the town. The building was a village school, then a rehab centre, then a youth hostel before it became the Nordic region's Vipassana centre in February 2007. Free 10-day donation courses, ~100 students each. Verified 2026-07-01.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Dhamma Sobhana: the Vipassana centre near Ödeshög was three other things first",
    description:
      "Holmen 1, ~15 km outside Ödeshög. A former village school, rehab centre, and youth hostel, now the Nordic region's one Vipassana centre since February 2007. Free 10-day courses, bilingual, ~100 students each.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Ödeshög Vipassana centre, Dhamma Sobhana, used to be a village school",
    description:
      "Dhamma Sobhana sits at Holmen, ~15 km outside Ödeshög, halfway between Stockholm and Gothenburg. A repurposed school, rehab centre, and hostel, serving the whole Nordic region since 2007.",
  },
};

const FAQS: FaqItem[] = [
  {
    q: "Is there a Vipassana centre in Ödeshög?",
    a: "There is one that uses Ödeshög as its postal town, though it sits about 15 km outside the town itself. It is Dhamma Sobhana, at Holmen 1, 599 93 Ödeshög, surrounded by forest and farmland in central Sweden. It teaches Vipassana exactly as taught by S.N. Goenka in the tradition of Sayagyi U Ba Khin. It was established in February 2007 as the Nordic region's Vipassana centre and runs free 10-day residential courses on a pure donation basis, with about 100 students per course.",
  },
  {
    q: "Is Dhamma Sobhana actually in Ödeshög town?",
    a: "No, and this catches people out. The address reads Ödeshög because that is the postal locality, but the centre is roughly 15 km from the town of Ödeshög, out at a place called Holmen, surrounded by forest and farmland. The centre lists distances to four nearby towns: about 15 km from Ödeshög, 20 km from Vadstena, 25 km from Mjölby, and 60 km from Linköping. So if you were picturing something you can walk to from the Ödeshög bus stop, it is a fair drive out into the countryside.",
  },
  {
    q: "What was the Dhamma Sobhana building before it was a meditation centre?",
    a: "This is the part no listing mentions. According to the centre's own description, the property was originally a village school, and had previously also been a rehabilitation centre and a youth hostel before it became a Vipassana centre in 2007. So three earlier institutions used the same buildings: a schoolhouse, a rehab facility, and a hostel, all before the first Nordic 10-day course was ever held there.",
  },
  {
    q: "What does the name Dhamma Sobhana mean?",
    a: "Every centre in this tradition takes a name that begins with Dhamma. S.N. Goenka gave this one the name Dhamma Sobhana, which the centre translates as 'Beauty of Dhamma.' Sobhana is a Pali word connected to beauty, radiance, and what is wholesome. It is a name, an etymology note, not an instruction of any kind.",
  },
  {
    q: "Which countries does the centre serve, and what language are courses in?",
    a: "Dhamma Sobhana was established to serve mainly the Nordic countries, and it is the region's dedicated centre, so students come from Sweden, Denmark, Norway, Finland, and Iceland (and from further afield too). Courses are generally run bilingually in English and Swedish, and some are held in Danish, Norwegian, or Finnish. Sitting halfway between Stockholm and Gothenburg, it is about a 2½ hour drive from either city and about 3½ hours from Malmö.",
  },
  {
    q: "How much does a course cost and how do I register?",
    a: "There is no charge, not for the teaching, the food, or the room. The whole operation runs on donations, and you are only invited to give after you have completed your own 10-day course, never before. To register you do not phone ahead; you open the official course schedule, pick a specific dated 10-day course, read the Code of Discipline, and submit the online application for that date. Popular dates fill and move to a waiting list, so applying early helps.",
  },
  {
    q: "How do I get to the centre without a car?",
    a: "The nearest train station is Mjölby, a regional hub with connections across Sweden. On the day a course starts, a shared taxi bus departs from Mjölby Resecentrum out to the centre, and on the last morning it runs back to Mjölby. The centre also keeps a rideshare board so students can share rides. The nearest airport is Linköping City Airport, roughly 70 km and about 50 minutes by car.",
  },
  {
    q: "Does this page teach the technique, or is it the official centre?",
    a: "Neither. This is an orientation written by a fellow meditator: where the Ödeshög centre actually is, what the building used to be, and what its name means. It is not affiliated with Dhamma Sobhana and it does not teach the method. The technique is transmitted only inside a 10-day course by an authorized teacher. For the course itself, and for anything about how the practice works, the authoritative sources are sobhana.dhamma.org, dhamma.org, and an authorized assistant teacher.",
  },
];

export default function Page() {
  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana in Ödeshög: Dhamma Sobhana, a Village School Turned Nordic Centre",
      description:
        "The Vipassana centre near Ödeshög is Dhamma Sobhana, at Holmen 1, about 15 km outside the town. The building was a village school, then a rehab centre, then a youth hostel before it became the Nordic region's Vipassana centre in February 2007. Free 10-day donation courses, about 100 students each.",
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
      { name: "Vipassana in Ödeshög", url: PAGE_URL },
    ]),
    faqPageSchema(FAQS, `${PAGE_URL}#faq`),
  ];

  const nordicOrbit: React.ReactNode[] = [
    "Sweden",
    "Denmark",
    "Norway",
    "Finland",
    "Iceland",
  ].map((country) => (
    <span
      key={country}
      className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm"
    >
      {country}
    </span>
  ));

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
            { label: "Vipassana in Ödeshög" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-600">
            Ödeshög, Östergötland, Sweden
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The Vipassana centre near Ödeshög was a school, a rehab centre, and a
            hostel before it was ever a centre
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search &ldquo;vipassana ödeshög&rdquo; and you get a name, a phone
            number, and a line about free courses. Two things the listings leave
            out: the centre, <em>Dhamma Sobhana</em>, is not in Ödeshög town at
            all, and the building it uses had three earlier lives before a single
            meditator sat down in it.
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
            Direct answer · verified 2026-07-01
          </p>
          <p className="mt-3 text-zinc-800">
            Yes, there is one Vipassana centre tied to Ödeshög:{" "}
            <strong>Dhamma Sobhana</strong>, at{" "}
            <strong>Holmen 1, 599 93 Ödeshög</strong>. It is not inside the town,
            though; it sits <strong>about 15 km out</strong>, surrounded by forest
            and farmland at a place called Holmen. It was established in{" "}
            <strong>February 2007</strong> as the{" "}
            <strong>Nordic region&rsquo;s Vipassana centre</strong>, runs{" "}
            <strong>free 10-day residential courses</strong> on a pure donation
            basis, and takes <strong>about 100 students per course</strong>.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Authoritative sources: the centre&rsquo;s own page{" "}
            <a
              href={CENTRE_ABOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              sobhana.dhamma.org
            </a>{" "}
            and the live schedule at{" "}
            <a
              href={SCHEDULE}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhamma.org/en/schedules/schsobhana
            </a>
            .
          </p>
        </section>

        {/* The anchor: the building's past lives */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The uncopyable part: the building had three lives first
          </h2>
          <p className="mt-4 text-zinc-700">
            Most pages that come up for the Ödeshög centre repeat the same block:
            name, address, &ldquo;no charge.&rdquo; None of them tell you what the
            place actually is. The centre&rsquo;s own description says the property{" "}
            <em>
              was originally a village school, and has previously also been a
              rehabilitation centre and a youth hostel
            </em>
            . So the halls where a Nordic 10-day course now runs used to be
            classrooms, then a rehab facility, then bunk-bed hostel rooms, before
            the first course was ever held there in 2007.
          </p>
          <p className="mt-4 text-zinc-700">
            That history is not trivia. A Vipassana centre in this tradition is
            not a purpose-built temple; it is a quiet place with enough beds, a
            hall big enough to seat a hundred people, and room to keep silence.
            An old country schoolhouse that had already housed students and
            residents fit that need without anyone building from scratch. When you
            walk the grounds, you are walking through a place that has been in the
            business of housing people learning something for a very long time.
          </p>

          <StepTimeline
            title="One building, four institutions"
            steps={[
              {
                title: "A village school",
                description:
                  "The property's first life. A country schoolhouse out at Holmen, in the farmland southeast of Lake Vättern.",
              },
              {
                title: "A rehabilitation centre",
                description:
                  "Its second use, per the centre's own account of the site's history.",
              },
              {
                title: "A youth hostel",
                description:
                  "Its third: bunk-bed lodging in the same buildings, before the property changed hands again.",
              },
              {
                title: "Dhamma Sobhana, from February 2007",
                description:
                  "The first Nordic Vipassana centre. Free 10-day residential courses, about 100 students at a time, still in the same repurposed buildings.",
              },
            ]}
          />
          <p className="text-xs text-zinc-500">
            History of the site per{" "}
            <a
              href={CENTRE_ABOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              the centre&rsquo;s own page
            </a>
            , read 2026-07-01.
          </p>
        </section>

        {/* Not in the town */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Ödeshög is the postal town, not the location
          </h2>
          <p className="mt-4 text-zinc-700">
            The address says Ödeshög because that is the postal locality, but the
            centre is about 15 km outside the town, at Holmen. The centre lists
            its distances plainly: roughly 15 km from Ödeshög, 20 km from Vadstena,
            25 km from Mjölby, and 60 km from Linköping. Close by lie two lakes,
            Lake Vättern, Sweden&rsquo;s second largest, and Lake Tåkern, a bird
            sanctuary. So the setting is genuinely rural, forest and farmland and
            water, not a building on a town street.
          </p>
          <p className="mt-4 text-zinc-700">
            That matters for one practical reason: how you arrive. Without a car,
            the move is to train to Mjölby, which is the nearest station and a
            regional hub, and take the shared taxi bus the centre runs from Mjölby
            Resecentrum out to Holmen on the day a course starts, with the return
            trip on the last morning. If you were expecting to step off a bus in
            Ödeshög and walk over, plan for the extra leg out into the countryside.
          </p>
        </section>

        {/* One centre for the whole region */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            One centre for five countries
          </h2>
          <p className="mt-4 text-zinc-700">
            The reason a small place near Ödeshög draws people from all over is
            that it is the Nordic region&rsquo;s dedicated centre. Dhamma Sobhana
            was established to serve mainly the Nordic countries, which is why its
            courses run bilingually in English and Swedish, with some held in
            Danish, Norwegian, or Finnish. Someone flying in from Copenhagen or
            Oslo or Helsinki is very likely heading here, because this is the
            region&rsquo;s home centre for the tradition.
          </p>

          <div className="flex justify-center text-zinc-400">
            <OrbitingCircles
              center={
                <span className="rounded-2xl border border-teal-300 bg-white px-4 py-3 text-center text-sm font-bold text-teal-700 shadow-sm">
                  Dhamma
                  <br />
                  Sobhana
                </span>
              }
              items={nordicOrbit}
              radius={130}
              duration={26}
            />
          </div>
          <p className="text-center text-xs text-zinc-500">
            Established February 2007 to serve mainly the Nordic countries. Course
            languages and service area per{" "}
            <a
              href={CENTRE_ABOUT}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              sobhana.dhamma.org
            </a>
            .
          </p>
        </section>

        {/* The name */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The name: Sobhana, &ldquo;Beauty of Dhamma&rdquo;
          </h2>
          <p className="mt-4 text-zinc-700">
            S.N. Goenka gave this centre the name Dhamma Sobhana, which the centre
            translates as &ldquo;Beauty of Dhamma.&rdquo; <em>Sobhana</em> is a
            Pali word tied to beauty, radiance, and what is wholesome. It is worth
            noting only as a small linguistic point, the way every centre in this
            tradition carries a Dhamma-prefixed name. It is etymology, not
            instruction, and nothing on this page is about how to practice.
          </p>
        </section>

        {/* Practical file, reference-style */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The practical file
          </h2>
          <dl className="mt-4 divide-y divide-zinc-100 rounded-2xl border border-zinc-200 bg-white">
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Centre</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Dhamma Sobhana (&ldquo;Beauty of Dhamma&rdquo;), the first Nordic
                Vipassana centre, established February 2007
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Address</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Holmen 1, 599 93 Ödeshög, Sweden. Coordinates 58.3241, 14.726572.
                About 15 km outside Ödeshög town, surrounded by forest and
                farmland.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">
                From the cities
              </dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Halfway between Stockholm and Gothenburg: about 2½ hours by car
                from either, about 3½ hours from Malmö, about 6 hours from Oslo.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">
                Getting there
              </dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Nearest station is Mjölby; a shared taxi bus runs from Mjölby
                Resecentrum on the first day and back on the last. Nearest airport
                is Linköping City (~70 km, about 50 min). See the centre&rsquo;s{" "}
                <a
                  href={CENTRE_TRAVEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  travel page
                </a>{" "}
                for current times.
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-3">
              <dt className="text-sm font-semibold text-zinc-500">Courses</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                10-day residential courses, conducted bilingually in English and
                Swedish (some in Danish, Norwegian, or Finnish). About 100 students
                per course.
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
              <dt className="text-sm font-semibold text-zinc-500">Apply</dt>
              <dd className="text-sm text-zinc-800 sm:col-span-2">
                Pick a dated course on{" "}
                <a
                  href={SCHEDULE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline underline-offset-2"
                >
                  the official schedule
                </a>{" "}
                and submit the online application for that date.
              </dd>
            </div>
          </dl>
        </section>

        {/* Post-course bridge */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What the address cannot tell you is the drive home
          </h2>
          <p className="mt-4 text-zinc-700">
            I write this as a fellow practitioner, not a teacher. I have sat six
            10-day courses at three centres and done a stretch of dhamma service,
            and the part none of the Ödeshög listings mention is what happens after
            day 10. The gate opens, the silence breaks, and you drive back out
            through that forest and farmland toward Mjölby or the airport, and a
            practice that felt almost automatic in a hall full of a hundred silent
            people becomes a decision you have to make alone every morning.
          </p>
          <p className="mt-4 text-zinc-700">
            Most practices thin out in the weeks after a course, not during it.
            No centre, however quiet its setting between two lakes, carries that
            part for you once you are home. That gap is why this site exists. What
            worked for me was not more willpower, it was company: being paired with
            one other meditator for daily accountability after a course. If you want
            that, there is a{" "}
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
            replaces sitting a course.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING}
          site="Vipassana"
          heading="Planning an Ödeshög course, or keeping the practice alive after one?"
          description="Book a short peer call and I will share what worked for me across six courses, and how practice buddy matching keeps a daily sit going once you are back home."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions about the Vipassana centre near Ödeshög
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
                title: "Vipassana centre in Dehradun",
                href: "/t/vipassana-centre-dehradun",
                excerpt:
                  "Another centre whose location and history the listings skip, decoded the same way.",
                tag: "Centres",
              },
              {
                title: "First course tips",
                href: "/guide/first-course-tips",
                excerpt:
                  "What a first 10-day course actually involves, before you pick a date at Ödeshög.",
                tag: "Getting started",
              },
              {
                title: "Keeping a daily practice",
                href: "/guide/daily-practice",
                excerpt:
                  "The stretch of road that starts after the gate: holding a daily sit once you are home.",
                tag: "After the course",
              },
            ]}
          />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          I am a fellow practitioner sharing logistics and a location note, not a
          teacher, and not affiliated with Dhamma Sobhana or any centre. For the
          technique itself, and for anything about registering or sitting a course,
          the authoritative sources are{" "}
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
            sobhana.dhamma.org
          </a>
          , and an authorized assistant teacher at a 10-day course.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING}
        site="Vipassana"
        description="Planning an Ödeshög course or keeping a daily sit alive after one? Book a peer call."
      />
    </article>
  );
}
