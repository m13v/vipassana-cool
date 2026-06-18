import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  TerminalOutput,
  SequenceDiagram,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-donation";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Donation: How the Dana Model Works, Who Can Give, and the Two Currencies Nobody Explains",
  description:
    "A Vipassana donation is not a payment. In the Goenka tradition you cannot pay for your own course, and donations are accepted only from people who have completed at least one 10-day course. This guide covers who can give, when, the gift-forward loop, and the two currencies of dana: money and time (Dhamma service).",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Donation: How the Dana Model Actually Works",
    description:
      "You cannot pay for your own Vipassana course. Donations come only from past students, fund the next student, and take two forms: money and donated time. The Vipassana Community Foundation issued 291 grants across 64 centers in 43 countries (2012 to May 2025).",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana donation: the dana model nobody fully explains",
    description:
      "Donations only from old students. You can't pay for your own seat. Two currencies: money and Dhamma service. Plus verifiable VCF grant numbers.",
  },
  robots: { index: true, follow: true },
};

const economyCards: BentoCard[] = [
  {
    title: "Who is allowed to give money",
    description:
      "Only people who have completed at least one 10-day course in this tradition. A first-time student may give on the last day of their course or any time after, but never before. This is the single rule almost every other guide leaves out: you cannot buy your way in, and you cannot donate until you have sat.",
    size: "2x1",
    accent: true,
  },
  {
    title: "What a donation pays for",
    description:
      "Not your course. The donation you give funds the people who come after you. Your own ten days were already covered by students who sat before you.",
  },
  {
    title: "The other currency: time",
    description:
      "Dhamma service. Old students cook, clean, manage registration, and run logistics with no pay. Donated labor is the second half of the dana economy, and it is invisible on most donation pages.",
  },
  {
    title: "Who never gets paid",
    description:
      "Neither the teachers nor the organizers receive any payment for their service. There are no paid staff at course sites. That is a structural fact, not a marketing line.",
    size: "2x1",
  },
];

const giftForwardMessages = [
  { from: 0, to: 1, label: "Past students donate (money + service)", type: "request" as const },
  { from: 1, to: 2, label: "Center funds and staffs your course", type: "request" as const },
  { from: 2, to: 3, label: "You receive 10 days, lodging, meals, instruction", type: "response" as const },
  { from: 3, to: 1, label: "On day 10 you may give, by your own volition", type: "event" as const },
  { from: 1, to: 2, label: "Your gift funds a future student's course", type: "request" as const },
];

const vcfRecords = [
  { text: "# What a Vipassana donation actually moves, in public numbers", type: "info" as const },
  { text: "# Source: vcf.dhamma.org/what-we-do (Vipassana Community Foundation)", type: "info" as const },
  { text: "$ open https://vcf.dhamma.org/what-we-do", type: "command" as const },
  { text: "Entity: Vipassana Community Foundation (VCF)", type: "output" as const },
  { text: "Established: 2008 (501(c)(3) nonprofit)", type: "output" as const },
  { text: "Purpose: receive, manage, distribute charitable donations globally", type: "output" as const },
  { text: "Grants issued 2012 to May 2025: 291", type: "output" as const },
  { text: "Centers reached: 64 across 43 countries", type: "output" as const },
  { text: "Americas: 124 grants to 30 centers in 9 countries", type: "output" as const },
  { text: "Funds: capacity grants, land purchases, low-cost revolving loans, relief funds", type: "output" as const },
  { text: "No fee charged to any student, anywhere, ever", type: "success" as const },
];

const faqs: FaqItem[] = [
  {
    q: "Can I donate to Vipassana, and how do I do it?",
    a: "You can donate only if you have completed at least one 10-day course in the tradition of S.N. Goenka. The official conduct guidance is explicit: donations are accepted only from those who have completed at least one 10-day course, though a first-time student may give at the end of their course or any time thereafter. You give through the specific center where you sat, or where you want the gift to go, usually via the donation page on that center's dhamma.org subdomain, by giving at the end of a course, or through the Vipassana Community Foundation. If you have never sat a course, the tradition will not accept a donation from you, and that is by design.",
  },
  {
    q: "Why can't I pay for my own Vipassana course?",
    a: "Because the model is built so that the teaching is never bought or sold. There is no charge for the teaching, the lodging, or the food. Your course was paid for in advance by students who sat before you, out of gratitude. The phrasing the tradition uses for returning students captures the whole mechanism: the course I have taken has been paid for through the generosity of past students; now let me give something towards the cost of a future course, so that others may also benefit. You are never paying a bill. You are continuing a chain. That is why a payment and a donation are not the same thing here, even though both involve money.",
  },
  {
    q: "Where does my donation actually go?",
    a: "Not toward the course you just finished. It goes toward future courses and the operating costs of the center: food, utilities, supplies, maintenance, and construction. Some gifts also flow to the Vipassana Community Foundation, a 501(c)(3) established in 2008 that receives, manages, and distributes donations globally. Between 2012 and May 2025, VCF issued 291 grants supporting 64 centers across 43 countries, including capacity-building grants, land purchases for new centers, low-cost loans through a revolving loan fund, and relief funds during crises. You can read those figures yourself on vcf.dhamma.org/what-we-do.",
  },
  {
    q: "How much should I donate?",
    a: "There is no set amount and no suggested amount that you are obligated to meet. Donations are given according to your own volition and your own means. The centers are careful never to publish a price, precisely because publishing a number would turn a donation into a fee. If you benefited from your ten days and you can give, you give what you can. If you cannot give money this time, you are not turned away and you owe nothing. Many people give in the other currency instead: time.",
  },
  {
    q: "What is Dhamma service, and is it a form of donation?",
    a: "Yes. Dhamma service, or seva, is donating your time and labor instead of (or in addition to) money. Old students who have sat at least one 10-day course can serve future courses: cooking, cleaning, managing registration, handling logistics. Servers receive no pay, no stipend, and no compensation of any kind, though they get the same meals and free accommodation. In the Goenka tradition this is considered a core part of the practice, not unpaid help. It is the second currency of the dana economy, and it is the part most articles about donations never mention, because it does not look like a donation on the surface.",
  },
  {
    q: "Is a Vipassana donation tax deductible?",
    a: "That is a separate and more technical question with a counterintuitive answer in the United States: the gift you drop in the box at the end of your course is generally not tax deductible, because under IRS rules you received goods and services (ten days of lodging, meals, and instruction) in return. The deductible paths are gifts that are not tied to a course you received, such as a center Building Fund or a donation to the Vipassana Community Foundation (a US 501(c)(3)). We wrote a full breakdown with specific EINs in our Vipassana retreat tax deduction guide. This page is about the donation model itself, not the tax treatment.",
  },
  {
    q: "Do the teachers or organizers get paid from my donation?",
    a: "No. Neither the teachers nor the organizers who run the centers receive any kind of payment for their service. The assistant teachers who conduct courses, the course managers, and the people in the kitchen are all unpaid volunteers. This is one of the load-bearing features of the whole system: because no one is paid to teach, there is no commercial incentive shaping the technique, and the only source of funding for courses worldwide is donations from past students.",
  },
  {
    q: "Can I donate to a center I have never attended?",
    a: "Generally yes, as long as you have completed at least one 10-day course somewhere in the tradition. The old-student requirement is about you having sat a course, not about which specific center you sat at. Many old students give to the center nearest them, to a center they hope to sit at next, or to the Vipassana Community Foundation, which then distributes globally. If you want a gift to reach a brand new or unregistered center that cannot yet receive funds directly, VCF is often the route that makes that possible.",
  },
  {
    q: "Does giving a donation get me priority for a course seat?",
    a: "No. A donation buys you nothing, including a seat. Course registration is handled separately and is not influenced by whether or how much you have donated. Tying a gift to a seat would make it a payment, which is exactly the thing the model is built to avoid. If you want to understand how seats actually get allocated and how applications work, that is a logistics question for the specific center and for dhamma.org, not something a donation can shortcut.",
  },
  {
    q: "Does this page teach the meditation technique?",
    a: "No. This is about how donations and service work, not about how to practice. The technique itself is taught only inside a 10-day residential course by an authorized assistant teacher, arranged through dhamma.org. Anything about how to sit, what to do on the cushion, or how to handle what arises is properly the subject of the course, and we respect that boundary here.",
  },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "Vipassana retreat tax deduction guide",
    href: "/t/vipassana-retreat-tax-deduction-guide",
    excerpt:
      "Why the day-10 envelope is generally not deductible in the US, and which gifts are: center Building Funds and the Vipassana Community Foundation, with specific EINs.",
    tag: "Tax",
  },
  {
    title: "Vipassana Dhamma service (seva): what it's like to volunteer",
    href: "/guide/dhamma-service",
    excerpt:
      "The second currency of dana. Server roles, the daily schedule, how to apply, and why serving deepens a daily practice.",
    tag: "Service",
  },
  {
    title: "Free meditation retreats: how they actually run",
    href: "/guide/free-meditation-retreats",
    excerpt:
      "What 'free' really means when a ten-day residential course charges nothing and runs entirely on the generosity of past students.",
    tag: "Logistics",
  },
];

export default function Page() {
  const articleJsonLd = articleSchema({
    headline:
      "Vipassana Donation: How the Dana Model Works, Who Can Give, and the Two Currencies Nobody Explains",
    description:
      "A Vipassana donation is not a payment. You cannot pay for your own course, donations are accepted only from people who have completed at least one 10-day course, and dana takes two forms: money and donated time (Dhamma service).",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    authorUrl: "https://m13v.com",
    publisherName: "vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const breadcrumbJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t/vipassana-retreat-tax-deduction-guide" },
    { name: "Vipassana donation", url: PAGE_URL },
  ]);
  const faqJsonLd = faqPageSchema(faqs);

  return (
    <article className="min-h-screen text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd, faqJsonLd]),
        }}
      />

      <div className="pt-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Guides",
              href: "/t/vipassana-retreat-tax-deduction-guide",
            },
            { label: "Vipassana donation" },
          ]}
        />
      </div>

      <header className="max-w-3xl mx-auto px-6 pt-10 pb-6">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal-600 mb-4">
          how dana actually works
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-zinc-900 mb-6">
          A Vipassana donation is not a payment, and you cannot make one until you have sat
        </h1>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Most explanations of Vipassana donations stop at four words: the courses
          are free. True, and almost useless. The interesting part is the
          mechanism underneath it, and it has a shape that nothing else in modern
          life really has.
        </p>
      </header>

      <div className="mt-2">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />
      </div>

      {/* Direct answer, in the first 30% of the page */}
      <section className="max-w-3xl mx-auto px-6 my-10">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-teal-700 mb-3">
            direct answer · verified 2026-06-17
          </p>
          <p className="text-zinc-800 leading-relaxed text-[17px]">
            You can donate to Vipassana, but only after you have completed at
            least one 10-day course in this tradition. A first-time student may
            give on the last day of their course or any time after, never before.
            Courses run entirely on these donations, so no one pays for their own
            seat, and the gift you make funds future students, not your own
            course. You can give in two ways: money, or time through Dhamma
            service. There is no set amount and no fee. Source:{" "}
            <a
              href="https://www.dhamma.org/en-US/about/code"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              the official Code of Discipline on dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      {/* The literal "how much" question, both intents */}
      <section className="max-w-3xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          How much does it cost, and how much should you give?
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          People search how much in two different moods, and the two answers are
          not the same number. If you mean how much does it cost to attend a
          course, the answer is nothing. Zero. There is no course fee, no lodging
          charge, and no food charge, for anyone, anywhere in this tradition. A
          first-time student is not even allowed to donate before or during the
          course, so as a newcomer there is literally no amount you can pay to
          get in. Budget for travel and your time off work, and that is it.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          If you mean how much should I give once I have sat, there is no set
          amount, no suggested amount, and no minimum. The centers deliberately
          never publish a number, because a published number turns a donation into
          a fee and breaks the whole model. You give according to your own means
          and your own volition. Some old students give nothing one year and a
          larger gift another year as their circumstances change, and both are
          completely fine.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          The honest way to anchor it, if you want one, is the question the
          tradition itself frames for returning students: my own course was paid
          for by the generosity of past students, so what can I give toward the
          cost of a future course. Think in terms of helping cover one more
          person&apos;s ten days rather than paying a bill for your own. And
          remember the second currency below: a week of Dhamma service is a
          donation too, and for many people it is the larger one.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The one rule almost every guide skips
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Here is the rule that reframes everything: a donation is accepted only
          from someone who has already completed a 10-day course. If you have
          never sat, the tradition will not take your money. You cannot pre-pay,
          you cannot reserve a seat with a gift, and you cannot sponsor your own
          first course. This is not a quirk of paperwork. It is the load-bearing
          wall of the whole structure.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The effect is that money only ever enters the system from people who
          have direct, personal experience of what their gift produces. Nobody is
          buying a product they have not used. Nobody is funding a course they
          will sit. By the time you are allowed to give, you have already
          received the thing in full, for free, and the only honest reason left
          to give is gratitude and the wish that the next person gets the same
          chance.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          I have sat six 10-day courses across three centers and served more than
          40 days. The first time I was allowed to put anything in the box was the
          end of my first course. Until that morning, the correct answer to can I
          give was simply no.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The dana economy, mapped
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Four facts that, taken together, are the whole model. The accent cell
          is the rule everything else hangs on.
        </p>
        <BentoGrid cards={economyCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The gift-forward loop
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Read this as a chain, not a transaction. Your course was already paid
          for before you arrived. Your gift, if you choose to give one, pays for
          someone you will never meet. There is no point where money and teaching
          change hands as a purchase.
        </p>
        <SequenceDiagram
          title="How a donation moves through the tradition"
          actors={[
            "Past students",
            "The center",
            "Your course",
            "You, after day 10",
          ]}
          messages={giftForwardMessages}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The two currencies: money and time
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          When people search for how to donate, they almost always mean money. But
          the dana economy runs on two currencies, and the second one is larger
          and almost completely invisible in the articles that rank for this
          topic. That second currency is Dhamma service: donated time and labor.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Every course is cooked, cleaned, registered, and managed by old students
          who are paid nothing. No stipend, no compensation of any kind. They
          receive the same meals students eat and free accommodation, and that is
          all. A course with thirty students might be held up by a kitchen of
          people who each took a week off work to chop vegetables for strangers.
          None of that shows up as a line in a donation total, but it is the
          difference between a course running and not running.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          So if you are an old student wondering how to give, you have two honest
          answers. You can give money, in any amount or none. Or you can give a
          week. Many people who cannot spare the first can spare the second, and
          the tradition values both. The mechanics of serving (roles, schedule,
          how to apply) are their own topic, covered in our{" "}
          <a
            href="/guide/dhamma-service"
            className="text-teal-700 underline underline-offset-2"
          >
            Dhamma service guide
          </a>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 my-16">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal-600 mb-3">
            anchor fact, verifiable in under a minute
          </p>
          <h2 className="text-3xl font-bold text-zinc-900 mb-3">
            <NumberTicker value={291} /> grants, <NumberTicker value={64} />{" "}
            centers, <NumberTicker value={43} /> countries
          </h2>
          <p className="text-zinc-700 leading-relaxed">
            That is what the Vipassana Community Foundation, a 501(c)(3)
            established in 2008, reports issuing between 2012 and May 2025: 291
            grants supporting 64 centers across 43 countries, funded entirely by
            donations from past students. Capacity grants, land purchases for new
            centers, low-cost revolving loans, and relief funds during crises. You
            can read the breakdown yourself on{" "}
            <a
              href="https://vcf.dhamma.org/what-we-do"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              vcf.dhamma.org/what-we-do
            </a>
            . It is the clearest public window into where a Vipassana donation,
            once it leaves your hands, actually ends up.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Prove the numbers yourself
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Everything on this page traces to public sources. Here are the figures
          that move when a Vipassana donation is given at scale, pulled straight
          from the foundation's own page.
        </p>
        <TerminalOutput lines={vcfRecords} title="vcf-what-we-do.txt" />
      </section>

      <section className="max-w-3xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          A note on what this page is not
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          This is a description of how donations and service work, written by a
          fellow practitioner, not a teacher. It is not tax advice and it is not
          instruction in the technique. For the United States tax treatment of a
          gift (which is genuinely counterintuitive, since the day-10 envelope is
          usually not deductible), see our{" "}
          <a
            href="/t/vipassana-retreat-tax-deduction-guide"
            className="text-teal-700 underline underline-offset-2"
          >
            Vipassana retreat tax deduction guide
          </a>
          .
        </p>
        <p className="text-zinc-700 leading-relaxed">
          For anything about how to practice, how to sit, or how to handle what
          comes up on a course, the right source is a 10-day residential course
          with an authorized assistant teacher, arranged through dhamma.org. The
          tradition reserves that for the course itself, and that boundary is part
          of why the donation model can stay non-commercial in the first place.
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Questions about courses, dana, or daily practice after a retreat?"
          description="A short call to talk through center differences, how giving and serving work, and the Practice Buddy program for daily practice once you are home."
        />
      </div>

      <FaqSection items={faqs} />

      <section className="max-w-5xl mx-auto px-6 my-16">
        <RelatedPostsGrid
          title="Keep reading"
          subtitle="Adjacent topics for old students and people preparing to sit"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Curious how dana, service, or daily practice actually work? Ask us."
      />
    </article>
  );
}
