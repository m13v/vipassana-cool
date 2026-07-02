import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  RelatedPostsGrid,
  NumberTicker,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-in-bangalore";
const PUBLISHED = "2026-07-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana in Bangalore: two centers, on opposite ends of the city",
  description:
    "\"Vipassana in Bangalore\" is not one address. Two Goenka-tradition centers serve the city from opposite corners: Dhamma Paphulla in the northwest off Tumkur Road (about 23 km from City Railway Station) and Dhamma Sukhalaya in the east near Whitefield (about 38 km). Both are free and teach the same 10-day course, but they are not interchangeable: only Paphulla runs the advanced Satipatthana track, and only Sukhalaya runs children's courses and courses in Kannada. Verified against paphulla.dhamma.org, sukhalaya.dhamma.org and the vridhamma schedules on 2026-07-01.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana in Bangalore is two centers on opposite ends of the city",
    description:
      "Dhamma Paphulla sits northwest off Tumkur Road, Dhamma Sukhalaya sits east near Whitefield. Same free 10-day course, but the commute and the course calendar differ. Here is how to pick.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Bangalore: two centers, not one",
    description:
      "Paphulla (NW, off Tumkur Road) vs Sukhalaya (east, near Whitefield). Given Bengaluru traffic, which side you are on decides more than you would think.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Bangalore" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Bangalore", url: PAGE_URL },
];

type Center = {
  name: string;
  tagline: string;
  side: string;
  address: string;
  fromCityStation: string;
  fromYeshwantpur: string;
  metro: string;
  hall: string;
  rooms: string[];
  calendar: string[];
  contact: string;
  scheduleUrl: string;
  siteUrl: string;
};

const centers: Center[] = [
  {
    name: "Dhamma Paphulla",
    tagline: "The northwest center, and the one carrying the advanced calendar.",
    side: "North-western outskirts",
    address: "Alur Village, Dasanapura Hobli, Bangalore North Taluk, Karnataka 562123",
    fromCityStation: "about 23 km",
    fromYeshwantpur: "about 16 km",
    metro: "Madavara (Green Line), then bus to Makali",
    hall: "Hall comfortably seats 120 meditators",
    rooms: [
      "Male block: 48 single rooms with attached bathrooms, plus 2 twin-sharing rooms",
      "Female block: 26 twin-sharing rooms with attached facilities",
      "Solar hot water on all residences; a defunct well converted to store up to 10 lakh litres of harvested rainwater",
    ],
    calendar: [
      "10-day courses (new and old students)",
      "Satipatthana Sutta course (for serious old students)",
      "Special 10-day courses for advanced practitioners",
      "3-day and 1-day courses for old students",
    ],
    contact: "registration@paphulla.dhamma.org (registration is by email only)",
    scheduleUrl: "https://schedule.vridhamma.org/courses/paphulla",
    siteUrl: "https://paphulla.dhamma.org/",
  },
  {
    name: "Dhamma Sukhalaya",
    tagline: "The eastern center, and the one running children's and Kannada courses.",
    side: "Eastern outskirts, near Whitefield",
    address: "Arehalli Village, Kalkunte Post, Bengaluru 560117, Karnataka",
    fromCityStation: "about 38 km",
    fromYeshwantpur: "about 44 km",
    metro: "Kadugodi (Purple Line), then bus toward Hope Farm",
    hall: "Standard course hall for the 10-day format",
    rooms: [
      "Residential accommodation with vegetarian food provided",
      "Courses run in Kannada, English and Hindi",
    ],
    calendar: [
      "10-day courses (new and old students)",
      "Children's courses for ages 10 to 18",
      "Children's course seva (service) workshops",
      "3-day and 1-day courses for old students",
    ],
    contact: "registration@sukhalaya.dhamma.org",
    scheduleUrl: "https://schedule.vridhamma.org/courses/sukhalaya",
    siteUrl: "https://sukhalaya.dhamma.org/",
  },
];

const relatedPosts = [
  {
    title: "Vipassana in Mumbai: six centers, not one",
    href: "/t/vipassana-mumbai",
    excerpt:
      "The same trap, at bigger scale. Six centers within two hours, and one air-conditioned outlier geared to working professionals.",
    tag: "Locations",
  },
  {
    title: "Vipassana in Raipur: two places, not one",
    href: "/t/vipassana-raipur",
    excerpt:
      "Another city where the search term hides more than one address, and where the residential center is not where the in-city sittings happen.",
    tag: "Locations",
  },
  {
    title: "First course: how people prepare",
    href: "/guide/first-course-tips",
    excerpt:
      "What tends to trip up first-timers, from the 5pm tea cutoff to the reality of noble silence across ten days.",
    tag: "Before you go",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where do you do Vipassana in Bangalore?",
    a: "There is no single \"Vipassana Bangalore\" address. Two Goenka-tradition centers serve the city from opposite corners. Dhamma Paphulla is in the north-western outskirts, at Alur Village off Tumkur Road (NH-4), about 23 km from Bangalore City Railway Station. Dhamma Sukhalaya is in the east, at Arehalli Village near Whitefield, about 38 km from City Railway Station. Both are residential, both are free, and both teach the same 10-day course in the tradition of S.N. Goenka. The practical difference for most people is which side of the city they can actually get to.",
  },
  {
    q: "Which Bangalore center should I pick?",
    a: "Start with geography, because Bengaluru traffic makes cross-city travel on course day miserable. If you are on the Tumkur Road / Yeshwantpur / Peenya side, Dhamma Paphulla is far closer (about 16 km from Yeshwantpur). If you are on the Whitefield / Marathahalli / eastern side, Dhamma Sukhalaya is the natural choice. After geography, look at the calendar: only Paphulla runs the advanced track (a Satipatthana Sutta course and special 10-day courses for experienced students), while Sukhalaya is the one that runs children's courses and courses in Kannada. For a first 10-day course, either works, so pick the one you can reach.",
  },
  {
    q: "How much does a Vipassana course in Bangalore cost?",
    a: "Nothing. At both Dhamma Paphulla and Dhamma Sukhalaya there is no charge for the teaching, the food, or the accommodation. The tradition runs entirely on donations, and donations are accepted only from students who have already completed a 10-day course. So a first-timer is effectively hosted by everyone who sat before them. At the end you may give what you wish if the course helped you, or nothing at all, and your place was never conditional on paying.",
  },
  {
    q: "What is Dhamma Paphulla like?",
    a: "Paphulla means \"cheerfulness of Dhamma.\" It sits on gently sloping land in the north-western outskirts, with farmland on one side. The meditation hall comfortably seats 120 meditators. The male block has 48 single rooms with attached bathrooms plus 2 twin rooms, and the female block has 26 twin-sharing rooms. All residences have solar hot water, and a big defunct well was converted to store up to 10 lakh litres of harvested rainwater. It is the center that carries the fuller advanced calendar for the Bangalore area.",
  },
  {
    q: "What is different about Dhamma Sukhalaya?",
    a: "Two things stand out. First, location: it is on the eastern side near Whitefield (Arehalli Village, Kalkunte Post, 560117), reachable via the Kadugodi metro station on the Purple Line and a short bus toward Hope Farm. Second, its calendar. Sukhalaya is the Bangalore-area center that regularly runs children's courses for ages 10 to 18, along with children's course seva workshops, and it lists courses in Kannada, English and Hindi. If you want a course in Kannada, or you are looking at a course for a child, Sukhalaya is usually the one.",
  },
  {
    q: "Can a complete beginner sit a 10-day course at either center?",
    a: "Yes. Both centers run standard 10-day courses open to new students, and the 10-day residential course is the entry point to this tradition everywhere. The 1-day and 3-day courses on the schedules are for old students only, meaning people who have already completed a full 10-day course, so those are not where a first-timer starts. Seats fill, especially on popular dates, so applying a few weeks ahead helps.",
  },
  {
    q: "How do I apply and check dates?",
    a: "Course calendars change constantly, so the live dates and the online application live on the official schedule site: schedule.vridhamma.org/courses/paphulla for Dhamma Paphulla and schedule.vridhamma.org/courses/sukhalaya for Dhamma Sukhalaya. Registration for Paphulla is by email at registration@paphulla.dhamma.org; Sukhalaya's registration email is registration@sukhalaya.dhamma.org. Whatever a website or app tells you, the technique itself is only taught in person inside a course, so treat dhamma.org and the assistant teacher at your course as the authority on anything about how to practice.",
  },
];

const centerCount = centers.length;

export default function Page() {
  const readingTime = "6 min read";

  const jsonLd = [
    articleSchema({
      headline:
        "Vipassana in Bangalore: two centers, on opposite ends of the city",
      description:
        "\"Vipassana in Bangalore\" resolves to two free Goenka-tradition centers on opposite outskirts: Dhamma Paphulla in the northwest off Tumkur Road and Dhamma Sukhalaya in the east near Whitefield. Same 10-day course, different commute and different course calendar. How to pick, what each runs, and how to apply.",
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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Vipassana in Bangalore is two centers, on opposite ends of the city
        </h1>
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime={readingTime}
        />

        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer, verified 2026-07-01
          </p>
          <p className="mt-3 text-lg text-zinc-800 leading-relaxed">
            There is no single &ldquo;Vipassana Bangalore&rdquo; center. Two
            Goenka-tradition centers serve the city from opposite corners:{" "}
            <strong>Dhamma Paphulla</strong> in the north-western outskirts, off
            Tumkur Road at Alur (about 23 km from City Railway Station), and{" "}
            <strong>Dhamma Sukhalaya</strong> in the east near Whitefield
            (Arehalli, about 38 km). Both are residential, both are free, and
            both teach the same 10-day course. Pick by which side of the city you
            can actually reach, then by which one runs the course you need.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Sources checked today:{" "}
            <a
              href="https://vana.dhamma.org/centres/"
              className="text-teal-600 underline"
              rel="nofollow"
            >
              vana.dhamma.org/centres
            </a>
            ,{" "}
            <a
              href="https://paphulla.dhamma.org/"
              className="text-teal-600 underline"
              rel="nofollow"
            >
              paphulla.dhamma.org
            </a>{" "}
            and{" "}
            <a
              href="https://sukhalaya.dhamma.org/"
              className="text-teal-600 underline"
              rel="nofollow"
            >
              sukhalaya.dhamma.org
            </a>
            .
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-600">
              <NumberTicker value={centerCount} />
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              Goenka centers serving Bengaluru
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-600">
              <NumberTicker value={23} />
              <span className="text-2xl"> km</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              from City Railway Station to Paphulla (NW)
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
            <div className="text-4xl font-bold text-teal-600">
              <NumberTicker value={38} />
              <span className="text-2xl"> km</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600">
              from City Railway Station to Sukhalaya (east)
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-zinc-900">
          Why one search hides two very different commutes
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          When people type &ldquo;vipassana in bangalore&rdquo; they picture one
          place to apply to. In practice the city is served by two full
          residential centers in this tradition, and they are not clustered
          together. Dhamma Paphulla is out past Yeshwantpur on the Tumkur Road
          side, in the north-west. Dhamma Sukhalaya is on the far east, out
          toward Whitefield. In most cities that distinction would be a
          footnote. In Bengaluru, where a cross-city drive can eat a whole
          morning, it is the single most useful thing to know before you apply.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The catch is that the two centers are not identical clones. They run
          the same core 10-day course, but their calendars diverge in a way that
          matters if you are past your first course or looking for something
          specific. Below is the honest split, checked against each center&rsquo;s
          own pages and the official schedule.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
          The two centers, side by side
        </h2>
        <p className="text-zinc-600 mb-6">
          Distances are approximate and depend on where in the city you start.
          Course calendars change, so treat the schedule links as the live
          source.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {centers.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 flex flex-col"
            >
              <div className="inline-flex self-start rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                {c.side}
              </div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900">{c.name}</h3>
              <p className="mt-1 text-sm text-zinc-500">{c.tagline}</p>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-900">Address</dt>
                  <dd className="text-zinc-700">{c.address}</dd>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <dt className="font-semibold text-zinc-900">
                      From City Railway Station
                    </dt>
                    <dd className="text-zinc-700">{c.fromCityStation}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-900">
                      From Yeshwantpur
                    </dt>
                    <dd className="text-zinc-700">{c.fromYeshwantpur}</dd>
                  </div>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900">Nearest metro</dt>
                  <dd className="text-zinc-700">{c.metro}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900">Facilities</dt>
                  <dd className="text-zinc-700">{c.hall}</dd>
                  <dd className="mt-2">
                    <ul className="space-y-1.5">
                      {c.rooms.map((r) => (
                        <li key={r} className="flex gap-2 text-zinc-700">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900">
                    Course calendar includes
                  </dt>
                  <dd className="mt-2">
                    <ul className="space-y-1.5">
                      {c.calendar.map((r) => (
                        <li key={r} className="flex gap-2 text-zinc-700">
                          <span
                            aria-hidden
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-900">Registration</dt>
                  <dd className="text-zinc-700">{c.contact}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t border-zinc-100">
                <a
                  href={c.scheduleUrl}
                  rel="nofollow"
                  className="text-sm font-semibold text-teal-600 underline"
                >
                  Live schedule
                </a>
                <a
                  href={c.siteUrl}
                  rel="nofollow"
                  className="text-sm font-semibold text-teal-600 underline"
                >
                  Center site
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-900">
          The one that carries the advanced calendar
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          If you are past your first or second course, this is the detail that
          actually decides things. When I looked at the 2026 calendars, Dhamma
          Paphulla was the Bangalore-area center running the advanced track: a
          Satipatthana Sutta course, and special 10-day courses reserved for
          experienced students, alongside its regular 10-day, 3-day and 1-day
          courses. Those longer and deeper sittings are what old students in the
          area tend to travel for, and they are not something every center hosts.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Dhamma Sukhalaya, on the eastern side, leans the other way. Its
          calendar is where you find the children&rsquo;s courses for ages 10 to
          18, the children&rsquo;s course seva workshops, and courses listed in
          Kannada as well as English and Hindi. So if you want a course in
          Kannada, or you are helping a child sit their first course, Sukhalaya
          is usually the one to look at first. Neither of these is a different
          technique. It is the same tradition; the two centers simply cover
          different parts of the workload for one very large city.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am a fellow meditator who has sat six of these courses, not a teacher
          and not affiliated with either center. I can tell you where the places
          are and what their calendars look like from the public schedule. For
          anything about how the practice actually works, the authority is
          dhamma.org and the assistant teacher at your course, and that is by
          design in this tradition.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-bold text-zinc-900">
          Applying, once you have picked a side
        </h2>
        <StepTimeline
          title="From search to a confirmed seat"
          steps={[
            {
              title: "Decide which side of the city you can reach",
              description:
                "Tumkur Road / Yeshwantpur / Peenya side, choose Paphulla (about 16 km from Yeshwantpur). Whitefield / Marathahalli / eastern side, choose Sukhalaya. On course day, an easy commute matters more than a small difference on paper.",
            },
            {
              title: "Open the live schedule for that center",
              description:
                "Dates change often. Paphulla is at schedule.vridhamma.org/courses/paphulla and Sukhalaya is at schedule.vridhamma.org/courses/sukhalaya. Note whether a date is open to new students, old students, or servers.",
            },
            {
              title: "Apply online and wait for confirmation",
              description:
                "A seat is not held until the center confirms it. First-timers apply for a 10-day course; the 1-day and 3-day dates are for people who have already completed a full course.",
            },
            {
              title: "Read the Code of Discipline before you go",
              description:
                "Every course runs on the same commitments: staying the full ten days, noble silence, the daily timetable, and the 5pm tea cutoff for new students. Knowing this in advance is the single biggest thing first-timers wish they had done.",
            },
          ]}
        />
      </section>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Trying to keep a daily sit going after Bangalore?"
          description="If you have sat a course and the daily practice keeps slipping, I pair meditators for daily accountability. Grab a slot and we will talk about what a practice-buddy setup could look like for you."
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <FaqSection
          items={faqs}
          heading="Vipassana in Bangalore: common questions"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <RelatedPostsGrid title="Related guides" posts={relatedPosts} />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course? Get paired with a practice buddy for daily accountability."
      />
    </article>
  );
}
