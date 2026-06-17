import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  StepTimeline,
  BeforeAfter,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-rajkot";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const KOTA_ABOUT = "https://kota.vridhamma.org/about";
const KOTA_PORTAL = "https://schedule.vridhamma.org/courses/kota";
const KOTA_SITE = "https://kota.vridhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana in Rajkot: it is Dhamma Kota, and it has moved (Rangpar, not Khokhaddad)",
  description:
    "Vipassana in Rajkot runs at one centre, Dhamma Kota, now near Rangpar village (close to Padadhari) on the Rajkot-Jamnagar Highway, about 20 km from the city, not the Khokhaddad address older directories still print. Free 10-day residential courses, apply online only at schedule.vridhamma.org/courses/kota. Turn-by-turn route, facilities, and how registration actually works. Verified 17 June 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Rajkot: the one centre, the new address, the real route",
    description:
      "Dhamma Kota is the only Vipassana centre serving Rajkot, and the address most listings show is stale. Current location, turn-by-turn directions, and the online-only application.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana in Rajkot is Dhamma Kota, now at Rangpar",
    description:
      "The centre moved. Most directories still list the old Khokhaddad spot. Here is where it actually is and how you get in. Verified June 2026.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana in Rajkot" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana in Rajkot", url: PAGE_URL },
];

const routeSteps = [
  {
    title: "Start at Madhapar chokdi",
    description:
      "The centre routes everyone through one landmark. From anywhere in Rajkot, make your way to Madhapar chokdi (circle) on the north-west edge of the city.",
  },
  {
    title: "Drive 10 km on the Jamnagar road",
    description:
      "From Madhapar, head out along the Rajkot-Jamnagar Highway for ten kilometres. This is the stretch that carries you out of the city proper.",
  },
  {
    title: "Turn left to Rangpar village",
    description:
      "Watch for the left turn toward Rangpar village (the village near Padadhari). This is the part stale listings get wrong, since the old maps point at Khokhaddad instead.",
  },
  {
    title: "Drive 5 km to the centre gate",
    description:
      "A final five kilometres off the highway brings you to Dhamma Kota itself. Plan to be at the railway station or airport before 2:00 PM on the start day so you reach the gate in time for registration.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana centre in Rajkot?",
    a: "It is Dhamma Kota, run by the Saurashtra Vipassana Research Centre, located near Rangpar village (close to Padadhari) on the Rajkot-Jamnagar Highway, about 20 km from Rajkot. The centre's own road note is precise: go to Madhapar chokdi, drive 10 km on the Jamnagar road, turn left toward Rangpar village, then drive 5 km to the centre. Note that older directories and listicles still print an earlier Khokhaddad address roughly 14 km out, which is why people sometimes drive to the wrong spot.",
  },
  {
    q: "Is there more than one Vipassana centre in Rajkot?",
    a: "No. Unlike Jaipur or Igatpuri, the Rajkot area is served by a single centre, Dhamma Kota. There is also a city contact office (C/o Bhabha Dining Hall, Panchnath Road, Rajkot-360001) for information, but courses are held only at the Rangpar campus about 20 km out.",
  },
  {
    q: "How much does a 10-day course at Dhamma Kota cost?",
    a: "Nothing. Like every centre in this tradition, courses run solely on donation, with no charge even to cover food and accommodation. Donations come only from people who have completed at least one course, so a first sit is fully covered by students who sat before you.",
  },
  {
    q: "How do I register, and can I just show up at the gate?",
    a: "No walk-ins. Registration is online only. You pick a dated course on the centre's schedule at schedule.vridhamma.org/courses/kota, submit the application, and wait for a reply. The centre states that after you fill the online form, the reply comes only to the email address you entered, so the emailed confirmation is the load-bearing piece, not optional paperwork. The registration phone lines (+91 281 2233666 and several mobiles) are for questions, not for booking a seat.",
  },
  {
    q: "What kinds of courses does Dhamma Kota hold?",
    a: "The schedule lists 10-day courses for new and old students, 3-day courses for old students, Satipatthana Sutta courses (same timetable and discipline as a 10-day), and periodic long courses of 20, 30, and 45 days for experienced sitters. There are also Children's Anapana courses for ages 8 to 18 and seven-day Teenagers' courses for ages 15 to 19. The 10-day is the introductory format if you have never sat before.",
  },
  {
    q: "How do I actually get to the centre from the airport or railway station?",
    a: "Both the airport and the railway station are roughly 18 km from the centre (and about 20 km from the city office). The centre asks students to arrive at Rajkot airport or the railway station before 2:00 PM on the day the course starts, since registration happens that afternoon. From the city, the route is the same one the centre publishes: Madhapar chokdi, 10 km on the Jamnagar road, left to Rangpar, then 5 km in.",
  },
  {
    q: "What is the campus like inside?",
    a: "Dhamma Kota has a large Meditation Hall where roughly 200 students can sit together, and a Pagoda containing 120 individual meditation cells, alongside residential rooms and dining. I have not sat a course there myself, so treat this as the facility description the centre publishes, not a review of the cushions.",
  },
];

const relatedPosts = [
  {
    title: "Vipassana in Jaipur: three centres, not one",
    href: "/t/vipassana-jaipur",
    excerpt:
      "The opposite situation: where Rajkot has one centre with a moved address, Jaipur has three centres and people apply to the wrong one. Same online-only pattern.",
    tag: "Location",
  },
  {
    title: "Vipassana Igatpuri: 10-day course registration",
    href: "/t/vipassana-igatpuri-10-day-course-registration",
    excerpt:
      "The tradition's largest Indian centre, where one hill is actually three centres with three portals. The same confirmation-first registration flow.",
    tag: "Registration",
  },
  {
    title: "First course tips",
    href: "/guide/first-course-tips",
    excerpt:
      "What a first 10-day sit is actually like, from someone who has done six, so the logistics here are not the only thing you walk in knowing.",
    tag: "Experience",
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
                "Vipassana in Rajkot: it is Dhamma Kota, and it has moved",
              description:
                "Where to do Vipassana in Rajkot. Dhamma Kota holds free 10-day courses near Rangpar village, about 20 km from the city, not the Khokhaddad address older directories still print. Turn-by-turn route and the online-only application.",
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
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbSchemaItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium text-teal-700">Rajkot, Gujarat</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Vipassana in Rajkot is one centre, and it is not where the map says
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Search for a Vipassana centre in Rajkot and you land on directory
            listings pointing at a village called Khokhaddad, about 14 km out.
            The courses are not held there anymore. The single centre serving
            Rajkot, Dhamma Kota, now sits near Rangpar, on the
            Rajkot-Jamnagar Highway, roughly 20 km from the city. Getting that
            one fact right saves you a wrong drive on the morning a ten-day
            course begins.
          </p>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </header>

        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer &middot; verified 17 June 2026
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            To sit Vipassana in Rajkot you apply to{" "}
            <strong className="text-zinc-900">Dhamma Kota</strong>, run by the
            Saurashtra Vipassana Research Centre, located{" "}
            <strong className="text-zinc-900">
              near Rangpar village (close to Padadhari) on the Rajkot-Jamnagar
              Highway, about 20 km from Rajkot
            </strong>
            . It runs free 10-day residential courses, and you register online
            only at{" "}
            <a
              href={KOTA_PORTAL}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              schedule.vridhamma.org/courses/kota
            </a>
            . There are no walk-ins; an emailed confirmation is what gets you
            through the gate.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{" "}
            <a
              href={KOTA_ABOUT}
              className="text-teal-700 underline underline-offset-2"
            >
              kota.vridhamma.org
            </a>
            . This page covers logistics and lineage, never technique; for how
            to practise, the sources are{" "}
            <a
              href="https://www.dhamma.org/"
              className="text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>{" "}
            and an authorized teacher at a course.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The address most listings still get wrong
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            This is the one thing worth slowing down on. Aggregator pages,
            listicles, and a few map pins describe the Rajkot centre as sitting
            near Khokhaddad village, about 14 km from the city. The centre&rsquo;s
            own current information puts it somewhere else: near Rangpar, near
            Padadhari, on the Jamnagar highway, about 20 km out. If you trust the
            older number you can end up six kilometres and one wrong turn away
            from the gate.
          </p>
          <div className="mt-6">
            <BeforeAfter
              title="What older listings say vs. the centre's current address"
              before={{
                label: "Older directory listings",
                content:
                  "Near Khokhaddad village, roughly 14 km from Rajkot. Repeated across aggregators and listicles, often with no usable route.",
                highlights: [
                  "Khokhaddad village",
                  "About 14 km out",
                  "No turn-by-turn directions",
                ],
              }}
              after={{
                label: "Dhamma Kota, current (kota.vridhamma.org)",
                content:
                  "Near Rangpar village, close to Padadhari, on the Rajkot-Jamnagar Highway, about 20 km from Rajkot, about 18 km from both the airport and the railway station.",
                highlights: [
                  "Rangpar village, near Padadhari",
                  "About 20 km from the city",
                  "Published Madhapar to Rangpar route",
                ],
              }}
            />
          </div>
          <p className="mt-5 text-zinc-600 leading-relaxed">
            For information inside the city there is also a contact office,
            listed as C/o Bhabha Dining Hall, Panchnath Road, Rajkot-360001. But
            no courses run there. Everything happens at the Rangpar campus.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            The route the centre actually publishes
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Instead of an approximate pin, Dhamma Kota gives a short
            landmark-by-landmark route. It is four moves, and it hinges on one
            circle most Rajkot drivers already know.
          </p>
          <div className="mt-6">
            <StepTimeline
              title="Rajkot to the Dhamma Kota gate"
              steps={routeSteps}
            />
          </div>
          <p className="mt-5 text-zinc-600 leading-relaxed">
            Because the airport and the railway station both sit about 18 km
            from the centre, the centre asks students to arrive at either one
            before 2:00 PM on the day the course starts. Registration happens
            that afternoon, and a late arrival is the most avoidable way to lose
            a confirmed seat.
          </p>
        </section>

        <ProofBanner
          quote="Courses are run solely on a donation basis. There is no charge, not even to cover the cost of food and accommodation."
          source="Vipassana tradition, as taught by S.N. Goenka (kota.vridhamma.org)"
          metric="Rs 0"
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            What is on the campus, and what runs there
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            The centre publishes two concrete numbers worth knowing before you
            picture the place. There is a large Meditation Hall where about{" "}
            <strong className="text-zinc-900">200 students</strong> can sit
            together, and a Pagoda containing{" "}
            <strong className="text-zinc-900">120 individual meditation
            cells</strong>, alongside residential rooms and segregated dining.
            That cell count is the kind of detail you only find on the
            centre&rsquo;s own page, and it tells you the campus is built for full
            ten-day cohorts, not a drop-in hall.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            The schedule itself is wider than a single 10-day rotation. Across
            the year the centre lists:
          </p>
          <ul className="mt-4 space-y-2 text-zinc-700">
            <li className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm">
              <strong className="text-zinc-900">10-day courses</strong> for new
              and old students, the introductory format if you have never sat.
            </li>
            <li className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm">
              <strong className="text-zinc-900">3-day courses</strong> for old
              students who have completed at least one 10-day.
            </li>
            <li className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm">
              <strong className="text-zinc-900">
                Satipatthana Sutta courses
              </strong>
              , held on the same timetable and discipline as a 10-day.
            </li>
            <li className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm">
              <strong className="text-zinc-900">
                Long courses of 20, 30, and 45 days
              </strong>{" "}
              for experienced sitters.
            </li>
            <li className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm">
              <strong className="text-zinc-900">
                Children&rsquo;s Anapana (ages 8 to 18)
              </strong>{" "}
              and{" "}
              <strong className="text-zinc-900">
                Teenagers&rsquo; courses (ages 15 to 19, seven days)
              </strong>
              .
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            How a seat is actually secured
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            The registration logic is the same at every centre in the tradition,
            and it is unambiguous about one thing: a confirmation, not a phone
            call and not a payment, is what gets you in. You find a dated course
            on{" "}
            <a
              href={KOTA_PORTAL}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              the centre&rsquo;s online schedule
            </a>
            , submit the application with separate new-student categories, and
            wait. The centre puts it plainly: after you fill the online form, the
            reply comes only to the email address you entered. The registration
            mobile numbers exist for questions, not for jumping the queue.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            One more practical note from the schedule itself: many 2026 dates
            show an &ldquo;applications accepted starting&rdquo; date rather than
            opening immediately. Popular courses fill, so it is worth watching
            the portal a month or two ahead of the dates you want rather than
            applying the week before.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            One honest caveat about this page
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            I have sat six 10-day courses, all of them in California, none of
            them in Rajkot. So everything above is logistics I verified from
            Dhamma Kota&rsquo;s own pages on 17 June 2026, not a review of the food
            or the rooms at Rangpar. Addresses, schedules, and children&rsquo;s
            course rules change, and the centre is clearly still building out, so
            treat the dated online schedule as the live source and this page as
            the map that gets you to it. For anything about the sitting itself,
            dhamma.org and the assistant teacher at the course are the only
            authorities.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sitting your first course soon, in Rajkot or anywhere?"
          description="If you want to talk through keeping a daily practice alive after the ten days, or being paired with another meditator for accountability, book a short call."
        />

        <section className="mt-12">
          <FaqSection
            items={faqs}
            heading="Vipassana Rajkot: common questions"
          />
        </section>

        <section className="mt-12">
          <RelatedPostsGrid title="Keep reading" posts={relatedPosts} />
        </section>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Building a daily practice after your course? Let's talk."
      />
    </article>
  );
}
