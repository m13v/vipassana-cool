import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  HorizontalStepper,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type StepperStep,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-meditation-center-hyderabad";
const PUBLISHED = "2026-06-23";
const MODIFIED = "2026-06-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const CENTRE_HOME = "https://www.khetta.dhamma.org/";
const CENTRE_SCHEDULE = "https://schedule.vridhamma.org/courses/khetta";
const VRI_SEARCH = "https://www.vridhamma.org/Center-Search";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana Meditation Center in Hyderabad: It's Dhamma Khetta (the First One)",
  description:
    "The Vipassana meditation center in Hyderabad is Dhamma Khetta, at 12.6 km Ibrahimpatnam Road, Gurramguda Bus Stop, Telangana 500070. It is the first center ever established in the S.N. Goenka tradition (September 1976) and the only official residential center the VRI directory lists for the city. Courses are free; you register online at schedule.vridhamma.org/courses/khetta. Verified 2026-06-23.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Meditation Center in Hyderabad: Dhamma Khetta, the First Center",
    description:
      "Hyderabad has exactly one official Goenka-tradition Vipassana center: Dhamma Khetta, the first center in the worldwide tradition (Sept 1976). Address, how to get there, and how to register. Verified 2026-06-23.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vipassana center in Hyderabad is Dhamma Khetta",
    description:
      "One official Goenka-tradition center in Hyderabad, and it is the first ever established (Sept 1976). Address, directions, and the online registration link. Verified 2026-06-23.",
  },
  robots: { index: true, follow: true },
};

const sourceRows: ComparisonRow[] = [
  {
    feature: "How many centers it lists for Hyderabad",
    competitor: "Often 10 to 25 'centers'",
    ours: "One residential center: Dhamma Khetta",
  },
  {
    feature: "What gets counted",
    competitor: "Yoga studios, wellness spas, paid silent retreats",
    ours: "Only centers running the actual 10-day course",
  },
  {
    feature: "Cost",
    competitor: "Listed prices, packages, deposits",
    ours: "No charge; courses run entirely on donations",
  },
  {
    feature: "Who teaches",
    competitor: "Individual instructors, brand names",
    ours: "Authorized assistant teachers in the S.N. Goenka tradition",
  },
  {
    feature: "How you book",
    competitor: "Call a number, pay to reserve",
    ours: "Free online application through the official schedule",
  },
];

const applySteps: StepperStep[] = [
  {
    title: "Open the schedule",
    description:
      "Go to the Dhamma Khetta course schedule on schedule.vridhamma.org and find a 10-day course with open seats.",
  },
  {
    title: "Pick a course",
    description:
      "Each course row has its own Apply button. New students sit a 10-day course first; there is no shortcut around it.",
  },
  {
    title: "Fill the application",
    description:
      "Upload a passport-size photo, give your full address, and add a WhatsApp number. Online registration is now required even for the 1-day course.",
  },
  {
    title: "Wait for confirmation",
    description:
      "The centre replies by email or WhatsApp with your status. Watch for it and reply promptly so your seat is held.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana center in Hyderabad?",
    a: "It is Dhamma Khetta, the Vipassana International Meditation Centre, published address 12.6 km Ibrahimpatnam Road, Gurramguda Bus Stop, Hyderabad, Telangana 500070, India. The centre sits about 1 km off the main road toward Nagarjuna Sagar. It is roughly 34 km from Rajiv Gandhi International Airport and about 20 to 22 km from the main railway stations. The airport-side directory listings sometimes file it under a different neighbourhood name, so use the address the centre itself publishes on khetta.dhamma.org.",
  },
  {
    q: "Is there more than one Vipassana center in Hyderabad?",
    a: "If you mean the actual S.N. Goenka tradition (the free 10-day residential course), the official VRI center directory returns a single residential center for the city: Dhamma Khetta. There are other places around Hyderabad that use the word 'vipassana' in their marketing, but they are not part of this tradition and are not the same thing. When you search the official directory at vridhamma.org and filter for Hyderabad, Dhamma Khetta is what comes back.",
  },
  {
    q: "How much does a course at Dhamma Khetta cost?",
    a: "Nothing. There is no charge for the teaching, the room, or the food. The entire tradition runs on donations from people who have already completed a course and want the next group of students to have the same opportunity. You are not paying for anything when you apply, and you are never asked to pay during the course. If a place near Hyderabad is quoting you a price for a 'vipassana retreat', it is not this.",
  },
  {
    q: "How do I register for a course at Dhamma Khetta?",
    a: "Through the official online schedule. Open schedule.vridhamma.org/courses/khetta, find a 10-day course with availability, and use the Apply button on that course. Online registration is now mandatory, even for the 1-day courses, and the form asks for a passport-size photo, your residential address, and a WhatsApp number for status updates. The centre confirms your place by email or WhatsApp. For questions you can reach the centre at info@khetta.dhamma.org or 9491594247.",
  },
  {
    q: "Why does it matter that Dhamma Khetta was the first center?",
    a: "Dhamma Khetta was the first center to conduct a course in this tradition, with the first course held in September 1976. A Hyderabad businessman, Ratilal Mehta, had sat courses with S.N. Goenka in Rajasthan and invited him to teach on his own land. The center that grew from that, a meditation hall paired with a pagoda of small individual cells, became the physical template that hundreds of later centers around the world repeated. So the Hyderabad center is not just one center among many; it is the original.",
  },
  {
    q: "Can I just visit the center to look around without sitting a course?",
    a: "It is a working meditation center, not a tourist site or a heritage attraction. The pagoda cells and halls are used by students who are actually sitting a course, in silence. The way to genuinely be on the grounds is to apply for and sit a 10-day course. If you only want to see what it looks like, the centre publishes current photos on its own website, and there is a separate guide here that walks through where each photo lives.",
  },
  {
    q: "I am new and a bit nervous. Can someone teach me the technique before I go?",
    a: "I am a fellow practitioner sharing what is publicly documented, not a teacher, and the technique is only taught inside the 10-day course by an authorized assistant teacher. That is by design, and it is the same for everyone, including me at my first course. For anything about how to actually practice, the right sources are dhamma.org and the assistant teacher at the course. What I can say from the other side of six courses: the nerves before a first course are completely normal and they fade fast once the schedule takes over.",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "https://vipassana.cool" },
            {
              label: "Guides",
              href: "https://vipassana.cool/t/vipassana-meditation-centre",
            },
            { label: "Vipassana Center in Hyderabad" },
          ]}
        />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wide text-teal-700">
            Hyderabad, Telangana
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The Vipassana meditation center in Hyderabad is Dhamma Khetta
          </h1>
          <p className="mt-4 text-lg text-zinc-600">
            Search &quot;vipassana meditation center hyderabad&quot; and you get
            a wall of listicles ranking ten or twenty places, most of which are
            not actually this tradition. The real answer is simpler than that,
            and a lot more interesting once you know what the place is.
          </p>
        </header>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          dateModified={MODIFIED}
          readingTime="7 min read"
        />

        {/* DIRECT ANSWER */}
        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified 2026-06-23)
          </p>
          <p className="mt-3 text-zinc-800">
            The Vipassana meditation center in Hyderabad is{" "}
            <strong>Dhamma Khetta</strong>, the Vipassana International
            Meditation Centre at{" "}
            <strong>
              12.6 km Ibrahimpatnam Road, Gurramguda Bus Stop, Hyderabad,
              Telangana 500070
            </strong>
            . It is the first center ever established in the S.N. Goenka
            tradition (first course in September 1976) and the only official
            residential center the{" "}
            <a
              href={VRI_SEARCH}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              VRI directory
            </a>{" "}
            lists for the city. Courses are free of charge. You register online
            at{" "}
            <a
              href={CENTRE_SCHEDULE}
              className="font-medium text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              schedule.vridhamma.org/courses/khetta
            </a>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Why the &quot;top 25 centers&quot; lists get this wrong
          </h2>
          <p className="mt-4 text-zinc-700">
            Most pages that rank for this topic are roundups: &quot;the 25 best
            vipassana centers in Hyderabad&quot;, padded out with yoga studios,
            wellness resorts, and paid silent retreats that borrowed the word.
            They look comprehensive and they are mostly noise. If you mean the
            specific tradition taught by S.N. Goenka, the free 10-day
            residential course, there is one center for Hyderabad, and the
            official directory will tell you the same thing.
          </p>
          <p className="mt-4 text-zinc-700">
            Here is the difference between what a roundup counts and what the
            official source counts.
          </p>

          <ComparisonTable
            className="mt-8"
            productName="Official VRI directory"
            competitorName="Generic 'best of' roundups"
            rows={sourceRows}
            caveat="Anything quoting you a price for a 'vipassana retreat' near Hyderabad is, by definition, not the donation-run Goenka tradition. That is the fastest filter."
          />
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            The practical details, in one place
          </h2>
          <p className="mt-4 text-zinc-700">
            These are the things you actually need: where it is, how far from
            the airport and stations, and who to contact. All of it is from the
            centre&apos;s own published material, checked on 2026-06-23.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">Address</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Dhamma Khetta, Vipassana International Meditation Centre, 12.6 km
                Ibrahimpatnam Road, Gurramguda Bus Stop, Hyderabad, Telangana
                500070, India. About 1 km off the main Nagarjuna Sagar road.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">
                Getting there
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Roughly 34 km from Rajiv Gandhi International Airport and about
                20 to 22 km from the main railway stations. Many city buses run
                toward the Ibrahimpatnam side.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">Contact</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Email{" "}
                <a
                  href="mailto:info@khetta.dhamma.org"
                  className="text-teal-700 underline"
                >
                  info@khetta.dhamma.org
                </a>{" "}
                or phone 9491594247 for questions about courses, dates, or
                eligibility.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold text-zinc-900">Cost</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Nothing. Teaching, accommodation, and food are all free, funded
                by donations from past students. You are never asked to pay
                during the course.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500">
            The single source of truth for current dates and details is the
            centre&apos;s own site,{" "}
            <a
              href={CENTRE_HOME}
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              khetta.dhamma.org
            </a>
            . Listings on other directories drift out of date.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            How to actually get a seat
          </h2>
          <p className="mt-4 text-zinc-700">
            There is no walk-in. A first course is a 10-day residential
            commitment and you apply ahead of time through the official online
            schedule. The mechanics are the same whether you are in Hyderabad or
            flying in.
          </p>

          <HorizontalStepper steps={applySteps} />

          <p className="mt-2 text-sm text-zinc-500">
            One detail people miss: online registration is now mandatory even
            for the 1-day courses, so do not assume the short ones are
            drop-in.{" "}
            <a
              href={CENTRE_SCHEDULE}
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the schedule
            </a>{" "}
            to see what is available.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            What makes this particular center worth knowing about
          </h2>
          <p className="mt-4 text-zinc-700">
            Most people searching for a center in Hyderabad have no idea they
            are looking at the original. Dhamma Khetta was the first center to
            conduct a course in this tradition anywhere in the world. The first
            course ran in September 1976, after a Hyderabad businessman named
            Ratilal Mehta, who had sat courses with S.N. Goenka in Rajasthan,
            invited him to teach on his own land near the city.
          </p>
          <p className="mt-4 text-zinc-700">
            What started on about two acres has grown to roughly seven, with
            multiple meditation halls and a pagoda of individual cells. That
            hall-and-pagoda layout, born here, is the same shape later centers
            on several continents went on to copy, including the three I have
            sat at in California. So when a Hyderabad resident treats this as
            just the local option, they are underselling it: it is where the
            global network physically began.
          </p>
          <p className="mt-4 text-zinc-700">
            I am writing as a fellow student, not as anyone connected to the
            centre. I have sat six courses across three centers and served at a
            few, and I built this site to help people keep a daily practice
            going after a course. None of that makes me a teacher. For anything
            about the technique itself, the people to ask are at{" "}
            <a
              href={DHAMMA_ORG}
              className="text-teal-700 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>{" "}
            and at the course.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Weighing a first course at Dhamma Khetta or anywhere else?"
          description="If finding the Hyderabad center is really you deciding whether to sit your first 10-day course, book a short call and I will share what helped me, peer to peer, before you apply through the official schedule."
        />

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Common questions
          </h2>
          <div className="mt-4">
            <FaqSection items={faqs} />
          </div>
        </section>

        <section className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            posts={[
              {
                title: "Dhamma Khetta photos: where to actually see it",
                href: "https://vipassana.cool/t/dhamma-khetta-vipassana-international-meditation-centre-photos",
                excerpt:
                  "Where the centre's own current photos live, and what the halls, pagoda, and grounds actually are.",
                tag: "Centres",
              },
              {
                title: "What a Vipassana meditation centre actually is",
                href: "https://vipassana.cool/t/vipassana-meditation-centre",
                excerpt:
                  "How the centres are organised, funded by donation, and what to expect on the grounds.",
                tag: "Centres",
              },
              {
                title: "10-day course structure",
                href: "https://vipassana.cool/t/10-day-course-structure",
                excerpt:
                  "What the days look like at a residential course, from a fellow student's view.",
                tag: "Courses",
              },
            ]}
          />
        </section>

        <p className="mt-12 text-xs text-zinc-500">
          I am a fellow practitioner sharing publicly documented facts about the
          centre, not a teacher and not affiliated with Dhamma Khetta. For
          anything about visiting, applying, or the practice itself, the
          centre&apos;s own site and dhamma.org are the authoritative sources.
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Weighing a first 10-day course? Talk it through, peer to peer."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana Meditation Center in Hyderabad: It's Dhamma Khetta (the First One)",
              description:
                "The Vipassana meditation center in Hyderabad is Dhamma Khetta, the first center established in the S.N. Goenka tradition (September 1976) and the only official residential center the VRI directory lists for the city. Address, directions, cost, and how to register.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              dateModified: MODIFIED,
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
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              {
                name: "Guides",
                url: "https://vipassana.cool/t/vipassana-meditation-centre",
              },
              { name: "Vipassana Center in Hyderabad", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />
    </article>
  );
}
