import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  GlowCard,
  Marquee,
  InlineTestimonial,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-centre-patna";
const PUBLISHED = "2026-06-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const CENTRE_URL = "https://patliputta.dhamma.org";

export const metadata: Metadata = {
  title:
    "Vipassana centre in Patna: Dhamma Patliputta at Buddha Smriti Park (and the part listings skip)",
  description:
    "The Vipassana centre in Patna is Dhamma Patliputta, in the Meditation Block of Buddha Smriti Park, next to Patna Junction. Built by the Government of Bihar, opened 3 July 2018, capacity ~75, courses free of charge. Apply at patliputta.dhamma.org. Plus what nobody tells you about keeping a daily sit alive in Patna after the 10 days end.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana centre in Patna: Dhamma Patliputta, Buddha Smriti Park",
    description:
      "Where the Patna Vipassana centre is, how courses work, and the day-11 problem the directory listings never mention. Notes from a meditator, not the centre.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana centre in Patna: the address, and the part nobody mentions",
    description:
      "Dhamma Patliputta sits inside Buddha Smriti Park next to Patna Junction. The listings stop at the address. The hard part starts on day 11.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana centre in Patna" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana centre in Patna", url: PAGE_URL },
];

const centreFacts: { label: string; value: string }[] = [
  { label: "Official name", value: "Dhamma Pāṭaliputta (Patna Vipassana Centre)" },
  {
    label: "Where it is",
    value: "Meditation Block, Buddha Smriti Park, next to Patna Junction, Patna, Bihar",
  },
  { label: "Tradition", value: "Goenka, in the tradition of Sayagyi U Ba Khin" },
  { label: "Built by", value: "BUIDCO / Government of Bihar; offered to the public from 3 July 2018" },
  { label: "Run by", value: "Patliputra Vipassana Trust" },
  { label: "Capacity", value: "Around 75 students per residential 10-day course" },
  { label: "Course fee", value: "None. Courses run on voluntary donations from old students only" },
  { label: "Apply / schedule", value: "patliputta.dhamma.org" },
  { label: "Centre phone", value: "+91 6205978822 (9:30 AM to 5:30 PM)" },
];

const nearbyCentres: { name: string; place: string }[] = [
  { name: "Dhamma Bodhi", place: "Bodh Gaya, near Magadha University" },
  { name: "Dhamma Licchavi", place: "Ladaura Pakri, ~12 km from Muzaffarpur" },
  { name: "Nalanda Vipassana Kendra", place: "Nalanda district" },
  { name: "Vaishali Vipassana Kendra", place: "Vaishali district" },
];

const faqs: FaqItem[] = [
  {
    q: "Is there a Vipassana centre in Patna city itself?",
    a: "Yes. Dhamma Pāṭaliputta, the Patna Vipassana Centre, sits in the Meditation Block of Buddha Smriti Park, immediately next to Patna Junction railway station. Unlike most Indian centres, which are on rural land outside the city, this one is in the heart of Patna. It was developed by BUIDCO under the Government of Bihar and offered to the public from 3 July 2018. The authoritative source for location and schedule is patliputta.dhamma.org.",
  },
  {
    q: "How much does a 10-day course at the Patna centre cost?",
    a: "Nothing. There are no charges for the course, food, or accommodation. Centres in this tradition run entirely on voluntary donations, and only people who have already completed a 10-day course may donate, so that each course is paid forward by a previous student rather than bought. This applies at Patna the same as at every other centre. Confirm current details at patliputta.dhamma.org.",
  },
  {
    q: "How do I register for a course at Dhamma Patliputta?",
    a: "You apply online through the centre site at patliputta.dhamma.org by opening the schedule, choosing a course date, and filling out the full application. Because demand is high, it can take up to two weeks to hear back, and accepted students must confirm to hold their seat. All operational questions about dates, accommodation, and eligibility belong to the centre and to dhamma.org, not to this site.",
  },
  {
    q: "Can I just walk into Buddha Smriti Park and start meditating?",
    a: "Buddha Smriti Park is a public park, but the Vipassana centre inside it runs structured residential 10-day courses you have to apply and be accepted for. It is not a drop-in hall. For old students (people who have sat a full 10-day course) the centre also holds group sittings; the centre publishes those times, so check with them directly rather than turning up unannounced.",
  },
  {
    q: "What are the other Vipassana centres near Patna in Bihar?",
    a: "Bihar has several. Dhamma Bodhi at Bodh Gaya (near Magadha University), Dhamma Licchavi near Muzaffarpur (Ladaura Pakri village), plus Vipassana kendras in the Nalanda and Vaishali districts. If the Patna course dates do not fit, the same 10-day course runs at all of them. The full, current list lives at the Bihar regional site, br.in.dhamma.org.",
  },
  {
    q: "Will the centre teach me how to keep practising after the 10 days?",
    a: "The course gives you everything you need and the teachers are clear that the work is then yours to carry. What the centre cannot do is sit with you at 5 AM in your own flat three weeks later. That gap, between leaving Buddha Smriti Park and building an actual daily habit in Patna, is the part this page is really about, and it is the one thing the centre listings never cover.",
  },
  {
    q: "Does this site teach the Vipassana technique?",
    a: "No. The technique is only ever taught in person by authorised teachers inside a 10-day course, and that is the right way to learn it. This is a peer resource site about the life around practice: logistics, what courses are like, and staying consistent afterwards. For anything about how to actually meditate, go to dhamma.org and to a teacher at a course.",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Vipassana centre in Patna: Dhamma Patliputta at Buddha Smriti Park, and the day-11 problem",
    description:
      "The Patna Vipassana centre is Dhamma Pāṭaliputta in the Meditation Block of Buddha Smriti Park next to Patna Junction, built by the Government of Bihar and opened 3 July 2018. Where it is, how courses work, and what it takes to keep a daily practice alive in Patna afterward.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
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
          The Vipassana centre in Patna, and the part the listings skip
        </h1>
        <div className="mt-5">
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </div>
        <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
          Most people typing this want one thing first: the address and whether
          the place is real. So here it is, up top, before anything else. Then
          the part I actually care about, because I have sat six of these
          courses and the centre listings all stop at exactly the moment the
          hard work begins.
        </p>
      </header>

      {/* DIRECT ANSWER */}
      <section className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <GlowCard className="p-6 sm:p-8 rounded-2xl bg-teal-50 border border-teal-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer · verified 25 June 2026
          </p>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-zinc-900 leading-snug">
            The Vipassana centre in Patna is{" "}
            <span className="text-teal-700">Dhamma Pāṭaliputta</span>, in the
            Meditation Block of Buddha Smriti Park, right next to Patna Junction.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            It runs free 10-day residential courses in the Goenka tradition. You
            apply online, and there is no charge for the course, food, or stay.
            The authoritative source for dates, location, and registration is the
            centre&apos;s own site.
          </p>
          <a
            href={`${CENTRE_URL}/en/the-centre/`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-2.5 text-sm font-semibold text-white"
          >
            Open patliputta.dhamma.org
            <span aria-hidden="true">&rarr;</span>
          </a>
        </GlowCard>
      </section>

      {/* REFERENCE TABLE */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The centre at a glance
        </h2>
        <p className="mt-3 text-zinc-600 leading-relaxed">
          These are the facts worth knowing before you apply. I pulled them from
          the centre&apos;s own pages on 25 June 2026; the centre site is always
          the live source if a detail has changed.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200">
          <table className="w-full text-left text-sm">
            <tbody>
              {centreFacts.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-zinc-50"}
                >
                  <th
                    scope="row"
                    className="align-top px-4 py-3 font-medium text-zinc-500 w-2/5 border-b border-zinc-100"
                  >
                    {row.label}
                  </th>
                  <td className="px-4 py-3 text-zinc-800 border-b border-zinc-100">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
          One quiet thing in that table is unusual. Almost every centre in this
          tradition is built on rural land an hour or more outside the nearest
          city, partly because silence is easier to hold away from traffic. Patna
          is one of the rare ones dropped straight into a public city park, next
          to a railway junction, paid for by a state government. Easy to reach.
          Harder to leave behind.
        </p>
      </section>

      {/* NEARBY CENTRES MARQUEE */}
      <section className="max-w-4xl mx-auto px-6 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 max-w-3xl mx-auto px-0 sm:px-0">
          If the Patna dates do not fit
        </h2>
        <p className="mt-3 text-zinc-600 leading-relaxed max-w-3xl">
          The exact same 10-day course runs at the other Bihar centres. Same
          timetable, same code of discipline, same technique. If Patna is full
          on the date you want, one of these is usually the answer.
        </p>
        <Marquee speed={36} className="mt-6">
          <div className="flex gap-4 pr-4">
            {nearbyCentres.map((c) => (
              <div
                key={c.name}
                className="min-w-[230px] rounded-xl border border-zinc-200 bg-white px-5 py-4"
              >
                <p className="font-semibold text-zinc-900">{c.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{c.place}</p>
              </div>
            ))}
          </div>
        </Marquee>
        <p className="text-sm text-zinc-500 leading-relaxed max-w-3xl">
          The full and current list of Bihar centres lives at{" "}
          <a
            href="https://www.br.in.dhamma.org/"
            className="text-teal-600 underline underline-offset-2"
          >
            br.in.dhamma.org
          </a>
          . Treat it as the source of truth; small centres open, fill, and shift
          dates often.
        </p>
      </section>

      {/* THE BRIDGE / ARGUMENT */}
      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
          The thing no Patna listing tells you
        </h2>
        <div className="mt-4 space-y-5 text-zinc-700 leading-relaxed">
          <p>
            Every page about this centre, the official ones included, ends in the
            same place: here is the address, here is how to apply, here is the
            schedule. All true, all useful, and all of it stops at the front gate.
            None of them say a word about day 11.
          </p>
          <p>
            Day 11 is the morning after. You walk out of Buddha Smriti Park back
            into a city of roughly two million people. The bell that woke you at 4
            AM for ten days is gone. The hall full of other people sitting in
            silence is gone. It is just you, your alarm, and a quiet room you have
            to actually choose to sit in, with the whole of Patna getting loud
            outside the window. The centre cannot follow you home. That is not a
            flaw in the centre; it is just where its job ends and yours begins.
          </p>
          <p>
            I am not a teacher and I would not tell anyone how to practise. But I
            can tell you, plainly, what the numbers looked like for me. Six
            courses across three centres. Over 945 days of keeping a daily sit
            going. And the honest version of that is this: the ten days inside the
            centre were never the hard part. The hard part was every single
            ordinary morning after, the ones with no bell and no group and no one
            watching.
          </p>
        </div>

        <div className="mt-8">
          <InlineTestimonial
            quote="881 days in and I still struggle with evening sits. mornings are non-negotiable though, 45 min before anything else."
            name="Matthew Diakonov"
            role="six courses, three centres"
            stars={5}
          />
        </div>

        <div className="mt-8 space-y-5 text-zinc-700 leading-relaxed">
          <p>
            What actually held it together for me was almost embarrassingly
            simple: another person. Knowing one other human was sitting at the
            same time, and that I would have to admit it if I skipped. Not a
            teacher, not an app reminder. A peer. That is the entire reason this
            site exists, and it is the one thing a centre, by design, was never
            built to give you.
          </p>
          <p>
            So if you are looking up the Patna centre because you are about to sit
            your first course, do the obvious thing first: apply at{" "}
            <a
              href={`${CENTRE_URL}/en/the-centre/`}
              className="text-teal-600 underline underline-offset-2"
            >
              patliputta.dhamma.org
            </a>
            . Then, before you even go, think about who is going to sit with you
            when you get back. That is the variable that decides whether the ten
            days were a retreat or a turning point.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-4">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Sat a course in Patna and the daily sit is slipping?"
          description="Book a short call and I will pair you with another old student for daily accountability. Peer to peer, not teacher to student."
        />
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="For the day-11 problem"
          posts={[
            {
              title: "Daily practice after a Vipassana course",
              href: "/t/daily-practice-after-vipassana-course",
              excerpt:
                "What changes when the bell and the hall are gone, and what tends to hold a sit together back home.",
              tag: "Daily practice",
            },
            {
              title: "Finding a daily-sit accountability partner",
              href: "/t/vipassana-daily-sit-accountability-partner",
              excerpt:
                "Why one other person sitting at the same time does more than any reminder app.",
              tag: "Accountability",
            },
            {
              title: "What the 10-day course structure actually is",
              href: "/t/10-day-course-structure",
              excerpt:
                "The daily clock, the three load-bearing group sittings, and the one mid-course shift, before you ever apply.",
              tag: "Before you go",
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
