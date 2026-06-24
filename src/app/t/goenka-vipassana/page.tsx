import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedBeam,
  MotionSequence,
  Marquee,
  MetricsRow,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/goenka-vipassana";
const PUBLISHED = "2026-06-24";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Goenka Vipassana: one course, replicated 264 times",
  description:
    "Goenka Vipassana is not a technique label, it is one standardized tradition: the same free ten-day course delivered identically at about 264 centers in 94+ countries through S.N. Goenka's own recordings. What that standardization actually means, from a practitioner who sat 6 of these courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Goenka Vipassana: one course, replicated 264 times",
    description:
      "The word vipassana is 2,500 years old. Goenka Vipassana is one specific, radically standardized tradition: identical recordings, 264 centers, donation-only, no living teacher since 2013.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goenka Vipassana: one course, replicated 264 times",
    description:
      "What separates Goenka Vipassana from the dozen other things called vipassana is not the method, it is the standardization. Written after 6 courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Goenka Vipassana" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Goenka Vipassana", url: PAGE_URL },
];

const faqs: FaqItem[] = [
  {
    q: "What is Goenka Vipassana?",
    a: "It is the worldwide network of free, ten-day residential Vipassana meditation courses taught in the tradition of S.N. Goenka, who learned the practice over roughly 14 years from Sayagyi U Ba Khin in Burma and began teaching in India in 1969. The defining feature is standardization: the course is delivered the same way at about 264 permanent centers across 94 or more countries, using Goenka's own recorded instruction, and it is funded entirely by donation.",
  },
  {
    q: "Is Goenka Vipassana the same thing as vipassana?",
    a: "No, and the difference matters. Vipassana is a roughly 2,500-year-old word for a category of insight practice, and several distinct modern traditions teach things they call vipassana (the Mahasi tradition, the U Ba Khin line, various secular and insight-meditation schools). Goenka Vipassana is one specific tradition within that wider family. When people search for Goenka Vipassana, they almost always mean the particular network of donation-only ten-day courses run by the organization Goenka founded, not the generic Buddhist term.",
  },
  {
    q: "How many Goenka Vipassana centers are there?",
    a: "Courses in this tradition are held at about 393 locations in over 94 countries, of which roughly 264 are permanent meditation centers. Around 1,350 unpaid assistant teachers conduct the courses, and roughly 120,000 people sit a ten-day course each year. Those are the tradition's own approximate figures; the exact counts drift as new centers open.",
  },
  {
    q: "Why do students at a Goenka course listen to recordings of a man who died in 2013?",
    a: "Goenka died on 29 September 2013, but the course he built does not depend on him being alive. From the 1990s onward his instructions, evening discourses, and chanting were recorded so every center, in every language, runs the same course rather than a local teacher's interpretation. The assistant teachers in the hall manage logistics and answer questions; the teaching voice itself is still Goenka's recording. This is the single most unusual structural fact about the tradition.",
  },
  {
    q: "How much does a Goenka Vipassana course cost?",
    a: "Nothing for the teaching, the food, or the lodging. The tradition runs entirely on voluntary donations, and donations are accepted only from people who have already completed at least one ten-day course. So a first course is paid for by old students who sat before you. Official course information and the application form live at dhamma.org.",
  },
  {
    q: "Where can I actually learn the technique?",
    a: "Only inside a ten-day residential course, taught by authorized assistant teachers. This tradition deliberately does not transmit the technique in writing, on video outside the course, or through third-party guides, and this site does not teach it either. For dates, locations, and the application form, go to dhamma.org. For any question about how to practice or how to work with a difficulty, the right place is dhamma.org and an authorized teacher at a course.",
  },
  {
    q: "Did Goenka name a successor?",
    a: "No. He deliberately did not appoint a single successor. After his death the organization continued under its existing decentralized structure of rotating assistant-teacher committees at each center, all using the same recordings. The continuity of the network after 2013, with no schism and no successor battle, is examined in the guide on whether Goenka ran a personality cult.",
  },
];

const articleLd = articleSchema({
  headline: "Goenka Vipassana: one course, replicated 264 times",
  description:
    "What distinguishes Goenka Vipassana from the wider category of vipassana is standardization: the same free ten-day course at about 264 centers worldwide, driven by S.N. Goenka's own recordings and funded by donation.",
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: "Matthew Diakonov",
  authorUrl: "https://m13v.com",
  publisherName: "Vipassana.cool",
  publisherUrl: "https://vipassana.cool",
  articleType: "Article",
});

const breadcrumbLd = breadcrumbListSchema(breadcrumbSchemaItems);
const faqLd = faqPageSchema(faqs);

const centerNames = [
  "Dhamma Giri, Igatpuri",
  "Dhamma Dhara, Massachusetts",
  "Dhamma Manda, Northern California",
  "Dhamma Mahavana, North Fork",
  "Dhamma Kunja, Washington",
  "Dhamma Surabhi, British Columbia",
  "Dhamma Sikhara, Dharamshala",
  "Dhamma Pakasa, Illinois",
];

export default function Page() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div className="max-w-4xl mx-auto px-6 pt-10">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <header className="max-w-4xl mx-auto px-6 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
          A practitioner&apos;s field note
        </p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.08]">
          Goenka Vipassana is not a technique. It is one course, replicated 264 times.
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          The word <em>vipassana</em> is about 2,500 years old and belongs to no one. Several
          modern traditions teach something they call vipassana. What people mean when they type{" "}
          <span className="text-zinc-900 font-medium">&ldquo;goenka vipassana&rdquo;</span> is one
          specific tradition, and the thing that makes it specific is not a secret method. It is the
          most aggressive standardization in modern meditation.
        </p>
      </header>

      <div className="mt-7">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      {/* Direct answer */}
      <div className="max-w-4xl mx-auto px-6 mt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
            Direct answer &middot; verified June 24, 2026
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            Goenka Vipassana is the worldwide network of <strong>free, ten-day residential
            Vipassana courses</strong> in the tradition of S.N. Goenka, who learned the practice
            from Sayagyi U Ba Khin in Burma and began teaching in India in 1969. The course is
            delivered the same way at roughly <strong>264 permanent centers in 94+ countries</strong>,
            using Goenka&apos;s <strong>own recorded instruction</strong>, and it is funded{" "}
            <strong>entirely by donation</strong>. There is no charge, and no living head teacher
            since his death in 2013.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Source for course logistics and applications:{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>
            , the official site of the tradition.
          </p>
        </div>
      </div>

      {/* The fingerprint, in numbers */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <div className="text-zinc-700">
          <MetricsRow
            metrics={[
              { value: 264, suffix: "+", label: "permanent centers" },
              { value: 94, suffix: "+", label: "countries" },
              { value: 1350, suffix: "+", label: "unpaid assistant teachers" },
              { value: 120000, suffix: "/yr", label: "students who sit a course" },
            ]}
          />
        </div>
        <p className="text-sm text-zinc-500 -mt-4">
          Approximate figures from the tradition&apos;s own published numbers, cross-checked against
          the public record on{" "}
          <a
            href="https://en.wikipedia.org/wiki/S._N._Goenka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            S.N. Goenka
          </a>
          . They move as centers open, but the shape holds: a very large network running one course.
        </p>
      </section>

      {/* Section: word vs tradition */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          The word is generic. The tradition is not.
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          This is the confusion that sends people searching in the first place. Vipassana is a Pali
          word that points at a category of insight practice taught long before any of today&apos;s
          organizations existed. If you read the etymology, you find it means something close to
          seeing things as they actually are. That meaning predates Goenka by millennia and is
          shared across Buddhist lineages. The linguistic roots are covered in the guide on what{" "}
          <Link href="/guide/vipassana-meaning" className="text-teal-700 underline underline-offset-2">
            vipassana actually means
          </Link>
          .
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          So when someone says they &ldquo;do vipassana,&rdquo; that alone does not tell you which
          tradition they sat. The Mahasi line, the broader U Ba Khin line, and various secular
          insight-meditation schools all use the word. A practitioner comparing approaches will find
          the landscape laid out in the guide on{" "}
          <Link
            href="/guide/vipassana-vs-other-meditation"
            className="text-teal-700 underline underline-offset-2"
          >
            vipassana versus other forms of meditation
          </Link>
          . Goenka Vipassana is one branch of that family tree, and it is the branch that built a
          single, repeatable course and then copied it everywhere.
        </p>
      </section>

      {/* AnimatedBeam: lineage -> recording -> network */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold text-zinc-900">From one teacher to a replicated network</h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The whole tradition funnels through a single point. A lineage carried out of Burma met one
          man, who recorded one course, which now runs in hundreds of places at once. Read the
          diagram left to right.
        </p>
        <div className="mt-8 text-teal-600">
          <AnimatedBeam
            title="The replication path"
            from={[
              { label: "Sayagyi U Ba Khin", sublabel: "Burma, the teacher" },
              { label: "~14 years of training", sublabel: "before authorization" },
              { label: "Authorized 1969", sublabel: "Goenka begins teaching" },
            ]}
            hub={{ label: "Goenka's recorded course", sublabel: "the 1990s master tapes" }}
            to={[
              { label: "Dhamma Giri, 1976", sublabel: "the flagship center" },
              { label: "~264 centers", sublabel: "94+ countries" },
              { label: "~1,350 teachers", sublabel: "all unpaid, all the same course" },
            ]}
          />
        </div>
        <p className="mt-2 text-sm text-zinc-500">
          Dates and counts verified against the public biography of S.N. Goenka. He started his first
          center in Hyderabad in 1969 and opened Dhamma Giri in Igatpuri in 1976.
        </p>
      </section>

      {/* Anchor section: the standardization */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          The anchor fact: the course is the same wherever you sit it
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Here is the thing the other explainers skip. In most spiritual traditions, the experience
          depends heavily on which teacher you draw. Goenka engineered that variable out. Sometime in
          the 1990s, once he could no longer conduct every course in person, he had his instructions,
          his evening discourses, and his chanting recorded. From then on, every center plays the
          same audio and video. The person standing at the front of the hall is an assistant teacher
          who handles logistics and answers practical questions, but the actual teaching that comes
          through the speakers is a recording.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The practical result is uncanny. I have sat six of these courses at three different centers,
          two in Northern California, one in central California, and the timetable, the recorded
          voice, the structure of the ten days, and the wording of the instructions were effectively
          identical at each one. A friend who sat a course in India described the same recordings. The
          tradition treats that sameness as the point: roughly 120,000 people a year are not getting
          one teacher&apos;s version, they are getting the same course. If you want the day-shaped view
          of what that schedule looks like, the{" "}
          <Link
            href="/t/10-day-course-structure"
            className="text-teal-700 underline underline-offset-2"
          >
            ten-day course structure
          </Link>{" "}
          guide walks the arc without teaching the method.
        </p>
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
          <p className="text-zinc-800 leading-relaxed">
            <span className="font-semibold">Why this is uncopyable:</span> you cannot reproduce Goenka
            Vipassana by reading about the technique, because the tradition does not transmit the
            technique in writing. The course is the deliverable, and the course is recorded, sealed,
            and identical. That is also why this page, and this site, will not describe the method. We
            point you to{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>{" "}
            and an authorized teacher for anything operational.
          </p>
        </div>
      </section>

      {/* MotionSequence: replication over time */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">How one room became a global standard</h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The standardization was not an accident of growth. It was a sequence of deliberate choices,
          each one removing a way the course could drift.
        </p>
        <div className="mt-8 text-zinc-700">
          <MotionSequence
            title="One course, replicated"
            frames={[
              {
                title: "1969",
                body: "One teacher, one room in Hyderabad. The course exists only where Goenka physically stands.",
              },
              {
                title: "1976",
                body: "Dhamma Giri opens in Igatpuri. A permanent home, but still tied to a living teacher in the hall.",
              },
              {
                title: "The 1990s",
                body: "The instructions, discourses, and chanting are recorded once. The course is now decoupled from the man.",
              },
              {
                title: "Today",
                body: "The same recordings run at ~264 centers in 94+ countries, conducted by ~1,350 unpaid assistant teachers.",
              },
              {
                title: "After 2013",
                body: "Goenka dies. No successor is named. The course does not change, because nobody living is authorized to change it.",
              },
            ]}
          />
        </div>
      </section>

      {/* Donation model */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">The other structural choice: no price</h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Standardization is one half of the fingerprint. The funding model is the other. There is no
          charge for a Goenka Vipassana course, not for the teaching, not for the food, not for the
          lodging. The tradition runs on voluntary donation, and it accepts donations only from people
          who have already completed at least one ten-day course. A newcomer cannot pay for their own
          first course even if they want to. It is paid forward by old students who sat before them.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Combine the two choices and you get the structure that actually defines the tradition: an
          identical, recorded course, given away for free, taught by people who are not paid, with no
          central figure profiting and no living authority to alter it. That is a strange machine, and
          it is the real answer to &ldquo;what is goenka vipassana.&rdquo; If the unpaid, founder-free
          structure makes you wonder whether the whole thing is a cult, that exact question gets a
          structural audit in the guide on the{" "}
          <Link href="/t/goenka-cult" className="text-teal-700 underline underline-offset-2">
            Goenka cult question
          </Link>
          .
        </p>
      </section>

      {/* Marquee of centers */}
      <section className="max-w-4xl mx-auto px-6 mt-12">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          A handful of the centers running the same course
        </p>
        <div className="mt-3 text-zinc-700">
          <Marquee speed={36}>
            {centerNames.map((name) => (
              <span
                key={name}
                className="mx-3 inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-700 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </Marquee>
        </div>
        <p className="mt-2 text-sm text-zinc-500">
          Center names follow a shared convention: each begins with <em>Dhamma</em> plus a local
          word. The full directory lives on dhamma.org.
        </p>
      </section>

      {/* The part the search usually wants next */}
      <section className="max-w-4xl mx-auto px-6 mt-14">
        <h2 className="text-2xl font-bold text-zinc-900">
          What most people are really asking after the course
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          A lot of people land on this topic before their first course, trying to understand what they
          are signing up for. A different, quieter group lands here after one, when the ten days are
          over and the recordings stop and they are home with no hall, no timetable, and no group
          around them. The standardization that makes the course so consistent ends at the gate. Daily
          practice afterward is entirely unstandardized, and that is where most people quietly stall.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am not a teacher, just someone who has kept a daily sit going for a long stretch after six
          courses, with mornings that hold and evenings that are still a fight. The thing that helped
          me most was not technique, it was another person expecting me to show up. That is the whole
          idea behind the free{" "}
          <Link href="/practice-buddy" className="text-teal-700 underline underline-offset-2">
            practice buddy matching
          </Link>{" "}
          on this site: it pairs old students for daily accountability, nothing more. For the texture
          of building the habit back, the guide on{" "}
          <Link href="/guide/daily-practice" className="text-teal-700 underline underline-offset-2">
            daily practice
          </Link>{" "}
          is the honest version, written from the inside.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="goenka-vipassana-footer"
          heading="Sat a Goenka course and the daily sit slipped?"
          description="Book a short call and I'll pair you with another old student for daily accountability, free."
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 mt-14">
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-4xl mx-auto px-6 mt-12 mb-16">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Same tradition, different angle"
          posts={[
            {
              title: "Who was S.N. Goenka?",
              href: "/t/sn-goenka",
              excerpt:
                "A businessman with migraines who became the most recorded meditation teacher of the 20th century.",
              tag: "Biography",
            },
            {
              title: "Anapana and Vipassana",
              href: "/t/anapana-and-vipassana",
              excerpt:
                "How the two terms relate inside this tradition, as linguistic and lineage context, not instruction.",
              tag: "Terms",
            },
            {
              title: "The Goenka cult question",
              href: "/t/goenka-cult",
              excerpt:
                "A structural audit of the no-successor, donation-only, recording-driven organization.",
              tag: "Analysis",
            },
          ]}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="goenka-vipassana-sticky"
        description="Old student rebuilding a daily sit? Get matched with a practice buddy, free."
      />
    </article>
  );
}
