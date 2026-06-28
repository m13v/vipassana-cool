import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  NumberTicker,
  StepTimeline,
  Team,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-centre-jaipur";
const PUBLISHED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const THALI_SITE = "https://www.dhamma.org/en/schedules/schthali";
const NILAYA_SITE = "https://www.dhamma.org/en/schedules/schnilaya";
const ARANYA_SITE = "https://www.dhamma.org/en/schedules/scharanya";
const THALI_SCHEDULE = "https://www.dhamma.org/en/schedules/schthali";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana centre Jaipur: it is Dhamma Thali at Galta, but the Jaipur trust runs three centres",
  description:
    "The Vipassana centre in Jaipur is Dhamma Thali, via Sisodiya Rani Baug, about half a km before Galta Ji temple, Jaipur 302027. Free 10-day courses on a donation basis. But the same Jaipur trust runs three Dhamma centres: Thali at Galta, Dhamma Nilaya in Jamdoli, and Dhamma Aranya at Chaksu. Which one you apply to depends on who you are. Here is how to tell them apart, plus the part no listing covers.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana centre Jaipur: Dhamma Thali, and the two sister centres one search hides",
    description:
      "Where the Jaipur Vipassana centre actually is, why a new student, a teenager and an old student each get sent to a different site, and how the free course works. Notes from a meditator, not the centre.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana centre Jaipur: one search, three centres",
    description:
      "Dhamma Thali sits at Galta. But the Jaipur trust also runs Dhamma Nilaya (Jamdoli) and Dhamma Aranya (Chaksu). Which one is yours depends on who you are.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana centre Jaipur" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana centre Jaipur", url: PAGE_URL },
];

type Centre = {
  name: string;
  tag: string;
  where: string;
  distance: string;
  capacity: string;
  runs: string;
  forWhom: string;
  site: string;
};

const centres: Centre[] = [
  {
    name: "Dhamma Thali",
    tag: "The original Jaipur centre",
    where: "Galta, on the eastern edge of Jaipur, about ½ km before Galta Ji temple, via Sisodiya Rani Baug",
    distance: "In Jaipur (Galta hills)",
    capacity: "200 students, 1.6 hectares, a 200-cell octagonal pagoda",
    runs: "10-day, 20-day, 30-day, 45-day and Satipatthana courses",
    forWhom: "Most adults sitting their first 10-day course, and long-course old students",
    site: THALI_SITE,
  },
  {
    name: "Dhamma Nilaya",
    tag: "The young people and short-course centre",
    where: "Jamdoli, Jaipur (Jaisinghpura Khor side)",
    distance: "About 8 km from Dhamma Thali",
    capacity: "65 meditators",
    runs: "Anapana for children, 7-day courses for teenagers, 3-day courses for old students (10-day from September onward)",
    forWhom: "Children, teenagers, and old students wanting a short refresher",
    site: NILAYA_SITE,
  },
  {
    name: "Dhamma Aranya",
    tag: "The quiet forest centre",
    where: "Chaksu, south of Jaipur, set on 35 acres",
    distance: "About 50 km from Jaipur",
    capacity: "22 meditators",
    runs: "3-day and 10-day courses",
    forWhom: "Smaller, more remote 10-day or 3-day courses out of the city",
    site: ARANYA_SITE,
  },
];

const applySteps = [
  {
    title: "Pick the centre, then the course date",
    description:
      "Open the official schedule for the centre you want. For Dhamma Thali that is the dhamma.org Thali schedule; Nilaya and Aranya dates are listed through the same Jaipur sites. A first 10-day course almost always means Dhamma Thali or Dhamma Aranya.",
  },
  {
    title: "Apply online for that specific course",
    description:
      "Each course has its own application form on the official schedule. You fill it in for one course on one date. There is no walk-in seat and no fee at this stage. New students answer a short health and background section so the centre can place you well.",
  },
  {
    title: "Wait for a confirmation, not just a submission",
    description:
      "Submitting the form is not a seat. The centre reviews applications and emails an acceptance. Courses fill, especially the popular winter dates in Rajasthan, so an early application helps. If a date is full you are usually offered the waitlist or the next sitting.",
  },
  {
    title: "Arrive on day zero and hand over your phone",
    description:
      "Registration is the afternoon before day one. You surrender phones and books, settle into solitary accommodation, and Noble Silence begins that evening. The course itself is taught in person by an authorised teacher. That is the only place the technique is ever taught.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Which place is the Vipassana centre in Jaipur?",
    a: "It is Dhamma Thali, the Jaipur Vipassana Meditation Centre, on the Galta side of the city, via Sisodiya Rani Baug, about half a kilometre before the Galta Ji temple, Jaipur 302027. It opened in 1977 and is the oldest and largest of the Jaipur trust's centres, with room for 200 students. When people say 'the Jaipur centre', this is almost always the one they mean.",
  },
  {
    q: "What is the difference between Dhamma Thali, Dhamma Nilaya and Dhamma Aranya?",
    a: "All three are run by the same Jaipur charitable trust (Vipassana Samiti) and teach the same tradition, but they serve different people. Dhamma Thali at Galta is the main adult centre and runs the full range of long courses. Dhamma Nilaya in Jamdoli, about 8 km away and serving since July 2018, was set up to focus on children's Anapana, 7-day teenager courses and 3-day old-student courses. Dhamma Aranya at Chaksu, around 50 km out on 35 acres, is a smaller, quieter site for 3-day and 10-day courses. So a new adult student, a teenager and an old student wanting a short refresher can each be pointed at a different physical centre.",
  },
  {
    q: "Where exactly is Dhamma Thali and how do I reach it?",
    a: "The centre sits in the Galta hills on the eastern outskirts of Jaipur, via Sisodiya Rani Baug, Ghat ke Balaji, roughly half a kilometre before the Galta Ji temple. The hills around it are why it stays green and quiet despite being close to the city. For precise directions, the latest address and phone numbers, use the centre's own how-to-reach page rather than a third-party map pin, since pins for it are sometimes placed loosely.",
  },
  {
    q: "Can a first-time student go to Dhamma Nilaya?",
    a: "Nilaya's reason for existing is children, teenagers and old students taking shorter courses, so its calendar leans that way. A first-ever 10-day course for an adult usually means Dhamma Thali or Dhamma Aranya instead. Nilaya did begin running 10-day courses from September onward, so the honest answer is: check the official schedule for the exact dates rather than assuming. The schedule is the source of truth for who each course is open to.",
  },
  {
    q: "Is there a fee for a course at the Jaipur centres?",
    a: "No. Every course at all three centres runs purely on a donation basis. There is no charge for the teaching, the food or the accommodation, not even a covered cost. Expenses are met by donations from people who have already completed a course and want others to have the same chance. You are never asked for money to apply or to attend, and donations are only invited from old students at the end of a course.",
  },
  {
    q: "I live in Jaipur and cannot take ten days off. Is there anything shorter?",
    a: "Yes. The Jaipur centres also run one-day courses and weekly group sittings for people who have already done a 10-day course, and Anapana sessions for newcomers and children. Those are listed on the centre's own site. A residential 10-day course is still the only way to learn the full technique, but the local sittings are how Jaipur old students keep the practice alive between courses.",
  },
  {
    q: "Do you teach the technique on this page?",
    a: "No. The technique is only ever taught in person by an authorised teacher inside a 10-day course, and that is the right way to learn it. This site is a peer resource about the life around practice: which centre is which, how courses work, and staying consistent afterward. For anything about how to actually meditate, go to dhamma.org and to a teacher at a course.",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana centre Jaipur: Dhamma Thali at Galta, and the three centres one search hides",
    description:
      "The Jaipur Vipassana centre is Dhamma Thali at Galta, about half a km before Galta Ji temple, running free 10-day courses on a donation basis. The same Jaipur trust also runs Dhamma Nilaya in Jamdoli and Dhamma Aranya at Chaksu. How to tell the three apart, which one to apply to, and how a course application actually moves.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "Vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const faqSchemaJson = faqPageSchema(faqs, `${PAGE_URL}#faq`);
  const breadcrumbSchemaJson = breadcrumbListSchema(breadcrumbSchemaItems);

  return (
    <article className="min-h-screen text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            articleSchemaJson,
            faqSchemaJson,
            breadcrumbSchemaJson,
          ]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-2">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          The Vipassana centre in Jaipur is Dhamma Thali. The Jaipur trust runs
          three of them.
        </h1>
        <div className="mt-5">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="7 min read"
          />
        </div>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          If you searched this, you probably want one plain thing first: where the
          centre is and whether it is real. That is at the top, verified this week.
          Then the part the listings skip. The same Jaipur trust now runs three
          separate Dhamma centres, and a new student, a teenager and an old student
          wanting a short course each get pointed at a different one. Sending an
          application to the wrong site is the most common avoidable mistake here.
        </p>
      </header>

      {/* DIRECT ANSWER */}
      <section className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-27)
          </p>
          <p className="mt-3 text-lg text-zinc-800 leading-relaxed">
            The Vipassana centre in Jaipur is{" "}
            <strong className="text-zinc-900">Dhamma Thali</strong>, via Sisodiya
            Rani Baug, about half a kilometre before the Galta Ji temple, Jaipur
            302027. It runs free 10-day courses on a donation basis. The same
            Jaipur trust also runs two sister centres:{" "}
            <strong className="text-zinc-900">Dhamma Nilaya</strong> in Jamdoli (about
            8 km away) and <strong className="text-zinc-900">Dhamma Aranya</strong>{" "}
            at Chaksu (about 50 km out). Which one is yours depends on who you are,
            and the official schedule is the only place to apply.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href={DHAMMA_ORG}
              className="font-medium text-teal-700 underline underline-offset-2 hover:text-teal-800"
            >
              Official Vipassana site (dhamma.org)
            </a>
            <span className="text-zinc-300">/</span>
            <a
              href={THALI_SCHEDULE}
              className="font-medium text-teal-700 underline underline-offset-2 hover:text-teal-800"
            >
              Apply on the official schedule
            </a>
          </div>
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          I am a fellow old student, not a teacher and not affiliated with any of
          these centres. Everything operational lives on the official sites linked
          above; this page just untangles which centre a single search is pointing
          at.
        </p>
      </section>

      {/* STAT STRIP */}
      <section className="max-w-3xl mx-auto px-6 py-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
            <div className="text-3xl font-semibold text-zinc-900">
              <NumberTicker value={3} />
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              Dhamma centres run by the Jaipur trust
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
            <div className="text-3xl font-semibold text-zinc-900">
              <NumberTicker value={1977} />
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              Year Dhamma Thali opened at Galta
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 text-center">
            <div className="text-3xl font-semibold text-zinc-900">
              <NumberTicker value={200} />
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              Solitary cells in the Thali pagoda
            </p>
          </div>
        </div>
      </section>

      {/* WHY ONE SEARCH HIDES THREE */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
          Why one search points at three different places
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          For decades, &quot;the Jaipur centre&quot; meant exactly one place:
          Dhamma Thali, tucked into the Galta hills since 1977. That is still the
          centre most directory listings, map pins and review pages show you, and
          it is genuinely the heart of the operation, with room for 200 students
          and a three-storied octagonal pagoda holding 200 individual cells.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          But Jaipur kept producing meditators faster than one centre could seat
          them, and different groups have different needs. So the trust opened
          two more sites. Dhamma Nilaya began serving in July 2018, built around
          children, teenagers and old students taking shorter courses. Dhamma
          Aranya, out on 35 acres at Chaksu, gives a smaller and more remote
          option about 50 km from the city. They share a tradition and a trust,
          not a gate. If you apply to the wrong one, you are not refused so much as
          quietly pointed back to the right schedule, which costs you time you did
          not need to spend.
        </p>
      </section>

      {/* THREE CENTRE CARDS */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 text-center">
          The three Jaipur centres, side by side
        </h2>
        <p className="mt-3 text-center text-zinc-600 max-w-2xl mx-auto">
          Same tradition, same donation basis, three different answers to
          &quot;where do I actually go?&quot;
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {centres.map((c) => (
            <div
              key={c.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                {c.tag}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-zinc-900">
                {c.name}
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-zinc-900">Where</dt>
                  <dd className="text-zinc-600">{c.where}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-900">Distance</dt>
                  <dd className="text-zinc-600">{c.distance}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-900">Capacity</dt>
                  <dd className="text-zinc-600">{c.capacity}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-900">Runs</dt>
                  <dd className="text-zinc-600">{c.runs}</dd>
                </div>
                <div>
                  <dt className="font-medium text-zinc-900">Best fit</dt>
                  <dd className="text-zinc-600">{c.forWhom}</dd>
                </div>
              </dl>
              <a
                href={c.site}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal-700 underline underline-offset-2 hover:text-teal-800"
              >
                Official schedule
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">
          Capacities and start dates change. The official schedule on dhamma.org is
          always the live source; treat this table as a map, not a booking system.
        </p>
      </section>

      {/* WHICH ONE IS MINE */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
          Which one is yours, in one read
        </h2>
        <ul className="mt-5 space-y-4 text-zinc-700">
          <li className="rounded-xl border border-zinc-200 bg-white p-5">
            <span className="font-semibold text-zinc-900">
              First 10-day course as an adult?
            </span>{" "}
            Dhamma Thali at Galta is the usual home, with Dhamma Aranya at Chaksu
            as the quieter, smaller alternative if its dates suit you. Both seat
            new students for the full course.
          </li>
          <li className="rounded-xl border border-zinc-200 bg-white p-5">
            <span className="font-semibold text-zinc-900">
              A child or teenager in the family?
            </span>{" "}
            Dhamma Nilaya in Jamdoli was built for exactly this: Anapana for
            children and 7-day courses for teenagers. That is its reason for
            existing.
          </li>
          <li className="rounded-xl border border-zinc-200 bg-white p-5">
            <span className="font-semibold text-zinc-900">
              An old student wanting a short refresher?
            </span>{" "}
            Nilaya runs 3-day old-student courses; Aranya runs 3-day courses too.
            Thali carries the long courses (20, 30, 45 days and Satipatthana) when
            you are ready for them.
          </li>
          <li className="rounded-xl border border-zinc-200 bg-white p-5">
            <span className="font-semibold text-zinc-900">
              Living in Jaipur, no ten days free?
            </span>{" "}
            One-day courses and weekly group sittings run locally for old students,
            with Anapana sessions for newcomers. Check the Thali site for the
            current local calendar.
          </li>
        </ul>
        <p className="mt-5 text-sm text-zinc-500">
          When in doubt, the centre&apos;s own schedule lists exactly who each
          course is open to. That note on the schedule beats any guesswork here.
        </p>
      </section>

      {/* HOW APPLYING MOVES */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
          How a Jaipur course application actually moves
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The mechanics are the same at all three centres, and they trip people up
          in the same way. The big one: submitting the form is not a seat. Here is
          the real sequence.
        </p>
        <div className="mt-6">
          <StepTimeline steps={applySteps} />
        </div>
        <p className="mt-5 text-sm text-zinc-500">
          For the exact dates, the application form, and the precise rules for each
          course, use the official schedule at{" "}
          <a
            href={DHAMMA_ORG}
            className="font-medium text-teal-700 underline underline-offset-2 hover:text-teal-800"
          >
            dhamma.org
          </a>
          . I cannot and will not take a registration here; this page only explains
          the shape of the process.
        </p>
      </section>

      {/* THE PART NO LISTING COVERS */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
          The part no centre listing covers: day 11
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Every page about the Jaipur centre stops at the gate. You find the
          address, you apply, you sit ten days in the Galta hills, and then the
          coverage ends. But the hard part starts the morning you walk back out.
          The hall is gone, the bell is gone, the timetable that carried you is
          gone, and it is suddenly just you and a cushion in a normal Jaipur
          morning with a phone buzzing nearby.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am past a thousand days of daily practice now across six courses, and
          the honest truth is that the first weeks home were the shakiest part of
          the whole thing, far harder than any single day inside a course. What
          tends to hold a sit together back home is boring and human: a fixed time
          before the day starts, and one other person who knows whether you sat. A
          local one-day course or group sitting at the centre helps; so does
          pairing up with another old student so the two of you are accountable to
          each other rather than to a reminder app.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          That is the only thing I actually built: a way to pair meditators for
          daily accountability after the course, because that is the season where
          most people quietly lose the practice. None of it touches the technique
          itself, which stays where it belongs, in the hall with a teacher.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-4">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Sitting your first course at the Jaipur centre soon?"
          description="Book a short peer call before you go. I will share what helped me keep the practice alive after the ten days, old student to old student, with nothing to sell."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <Team
          title="Who is writing this"
          members={[
            {
              name: "Matthew Diakonov",
              role: "Six courses, three centres, 1,000+ days of daily practice",
              initials: "MD",
              bio: "I am a fellow old student, not a teacher and not affiliated with the Jaipur centres. I built vipassana.cool to help meditators keep a daily practice alive after the ten days, including pairing people with a practice buddy for accountability.",
              href: "https://m13v.com",
            },
          ]}
        />
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6 py-8">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Other centres, and the day-11 problem"
          posts={[
            {
              title: "Real Dhamma Thali centre photos (Jaipur)",
              href: "/t/dhammathali-vipassana-centre-photos",
              excerpt:
                "Where the official photos of the Jaipur centre actually live, and what the pagoda, halls and grounds you are seeing really are.",
              tag: "Jaipur",
            },
            {
              title: "Vipassana in Indore",
              href: "/t/vipassana-indore",
              excerpt:
                "A sister write-up for Dhamma Mālwā: the address, how the free course works, and the same day-11 problem.",
              tag: "Centres",
            },
            {
              title: "Daily practice after a Vipassana course",
              href: "/t/daily-practice-after-vipassana-course",
              excerpt:
                "What changes when the bell and the hall are gone, and what tends to hold a sit together once you are home.",
              tag: "Daily practice",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Pair up with another old student for a daily sit."
      />
    </article>
  );
}
