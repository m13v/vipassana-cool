import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  NumberTicker,
  ComparisonTable,
  ProofBanner,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-cost";
const PUBLISHED = "2026-06-25";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Cost: A Goenka 10-Day Course Is $0, and New Students Cannot Pay Even If They Want To",
  description:
    "The cost of a 10-day Goenka Vipassana course is zero. No tuition, no fee for food, no fee for lodging. The tradition does not accept payment from new students, even to cover expenses. The course runs entirely on voluntary donations from people who have already finished a course. Here is how the money actually works, and what the real cost is once you account for time and travel.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Cost: A Goenka 10-Day Course Is $0, and New Students Cannot Pay",
    description:
      "Tuition, food, and lodging for a 10-day Goenka course are free. New students are not permitted to donate at all. The course is funded by old students who have completed a course and want to pass it forward.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana cost: the 10-day Goenka course is $0",
    description:
      "No tuition. No charge for food or lodging. New students cannot pay even if they offer. The whole thing runs on dana from people who finished a course before you.",
  },
  robots: { index: true, follow: true },
};

const costRows: ComparisonRow[] = [
  {
    feature: "Tuition / course fee",
    competitor: "Typical retreat: $400 to $2,000+",
    ours: "$0. There is no tuition for a Goenka course.",
  },
  {
    feature: "Food (10 days, vegetarian)",
    competitor: "Typical retreat: bundled into the fee",
    ours: "$0. All meals are provided at no charge.",
  },
  {
    feature: "Lodging (10 nights)",
    competitor: "Typical retreat: bundled or per-night upcharge",
    ours: "$0. A bed is provided at no charge, conditions vary by center.",
  },
  {
    feature: "Can a first-time student pay?",
    competitor: "Typical retreat: yes, payment is required to register",
    ours: "No. New students are not permitted to donate at all, even if they offer.",
  },
  {
    feature: "Where the money comes from",
    competitor: "Typical retreat: your fee funds the operation",
    ours: "Donations from old students who already finished a course and chose to give.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "How much does a 10-day Vipassana course cost?",
    a: "Nothing. There is no charge for tuition, food, or lodging at a 10-day Goenka course. When you register you are not asked for a card. The course is offered free of charge and funded by voluntary donations from people who have completed a course in the past.",
  },
  {
    q: "Is it really free, or is there a hidden fee?",
    a: "There is no hidden fee. The financial policy is published on dhamma.org and it is unusually strict: the tradition does not accept any payment from new students, not even a contribution toward expenses. The reasoning is that a course given for a fee would not be a pure gift, and the practice is meant to be passed forward without commercial exchange.",
  },
  {
    q: "Can I donate when I register or before the course?",
    a: "No. Only students who have completed at least one full 10-day course are allowed to give, and donations are typically received at or after the end of a course, not at registration. A first-time student who tries to pay will be told their gift cannot be accepted yet.",
  },
  {
    q: "So what does it actually cost me to sit a course?",
    a: "The course itself is $0. Your real cost is time and travel: ten days plus the two registration and departure days away from work and family, transport to the center, and whatever you would otherwise have earned in that window. For most people the binding cost is the twelve days, not money.",
  },
  {
    q: "If new students cannot pay, who keeps the lights on?",
    a: "Old students. Once you finish a course you understand what you received, and many people give so the next person can sit for free the way they did. This is the dana model: the course you sit was paid for by strangers who came before you, and if you give, you are paying for a stranger who comes after you.",
  },
  {
    q: "Is the end-of-course donation tax deductible?",
    a: "Often not in the way people assume, because you just received lodging, meals, and instruction with real value. The deductible giving paths in the United States are separate entities and funds. There is a full breakdown on the retreat tax deduction guide on this site.",
  },
];

export default function Page() {
  const breadcrumbs = [
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t/vipassana-retreat" },
    { name: "Vipassana cost", url: PAGE_URL },
  ];
  const crumbItems = breadcrumbs.map((b) => ({ label: b.name, href: b.url }));

  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Vipassana Cost: A Goenka 10-Day Course Is $0, and New Students Cannot Pay",
              description:
                "The cost of a 10-day Goenka Vipassana course is zero. No tuition, food, or lodging fee. New students are not permitted to pay at all. The course is funded by donations from people who already finished a course.",
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
          __html: JSON.stringify(breadcrumbListSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs items={crumbItems} />

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          What a Vipassana course actually costs
        </h1>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="6 min read"
        />

        {/* Direct answer, in the first 30% of the page */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <div className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer, verified 2026-06-25
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-5xl font-bold text-zinc-900">
              $<NumberTicker value={0} />
            </span>
            <span className="text-lg text-zinc-700">
              for a 10-day Goenka course
            </span>
          </div>
          <p className="mt-4 text-zinc-700">
            There is no tuition, no charge for food, and no charge for lodging at
            a 10-day Vipassana course in the Goenka tradition. When you register
            you are never asked for a card. Stranger still, a first-time student
            is not permitted to pay at all, even to cover expenses. The course is
            funded entirely by voluntary donations from people who have already
            completed a course. Source:{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="font-medium text-teal-700 underline"
            >
              the Code of Discipline and financial policy on dhamma.org
            </a>
            .
          </p>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-zinc-700">
          Almost every page that ranks for this question answers it with a price
          range, then adds a line about donations. That gets the headline number
          right and the mechanism wrong. The interesting part of Vipassana cost
          is not that it is cheap. It is that the tradition has built a wall
          against you paying. You can show up with cash in hand on your first
          course and they will decline it. Understanding why that wall exists is
          the whole story.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-zinc-900">
          Free, and not in the freemium sense
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          When people hear free they usually assume an upsell is coming: a
          suggested donation at registration, a premium room, an optional
          materials fee. None of that exists here. The line item for your stay
          is genuinely zero. The first time I registered for a course I kept
          waiting for the payment step in the form. It never came. You confirm
          your dates, you read the discipline you are agreeing to, and that is
          it.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <ComparisonTable
            productName="Goenka 10-day course"
            competitorName="A typical paid retreat"
            rows={costRows}
          />
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-zinc-900">
          The rule competitors leave out: new students cannot give
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          This is the anchor fact, and it is checkable. The financial policy
          published on dhamma.org states that donations are accepted only from
          students who have completed at least one full 10-day course. A
          first-time student is not allowed to contribute, period, not even
          toward the cost of their own food and lodging. The stated reasoning is
          that a course paid for in advance would carry the flavor of a
          transaction, and the people running it want it to be a gift with no
          strings. So the gift can only flow one direction in time: people who
          already sat pay for the people who have not sat yet.
        </p>

        <div className="mt-8">
          <ProofBanner
            quote="A course you sit for free was paid for by strangers who came before you. If you give afterward, you are paying for a stranger who comes after you."
            metric="100%"
            source="The dana model, in one sentence"
          />
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-zinc-900">
          The real cost is twelve days, not dollars
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          If the money is zero, the honest cost lives somewhere else. It is
          time. A 10-day course is really twelve days once you count the
          afternoon you arrive and register and the morning you leave. That is
          twelve days off the grid, no phone, no work, no contact. For most
          working people that is the binding constraint, not the price. I did my
          first four courses while working full time, and the hard part was
          never the cost of the course. It was carving twelve consecutive days
          out of a calendar and being genuinely unreachable inside them.
        </p>
        <p className="mt-4 leading-relaxed text-zinc-700">
          The other real cost is travel. You pay to get yourself to the center
          and back. Centers are often rural, the one in the North Fork area of
          Central California and the rented camp the Bay Area courses use are
          both a drive from any city. So your spreadsheet line for a course is
          honestly: $0 tuition, plus transport, plus the opportunity cost of the
          twelve days. Money is the smallest term in that sum.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-zinc-900">
          What about the donation at the end?
        </h2>
        <p className="mt-4 leading-relaxed text-zinc-700">
          On the last day, old students are given the chance to donate if they
          want to. There is no target, no envelope with a suggested figure
          waiting on your pillow, and no one watches what you do. People give
          what they can, and some give nothing because they cannot, and that is
          fine by design. A small recurring gift from someone who finished a
          course years ago counts the same as a large one. If you are wondering
          whether that end-of-course gift is tax deductible, the answer is more
          complicated than most guides claim, because you did receive something
          of value, and there is a{" "}
          <a
            href="https://vipassana.cool/t/vipassana-retreat-tax-deduction-guide"
            className="font-medium text-teal-700 underline"
          >
            full breakdown of the deductible giving paths
          </a>{" "}
          on this site.
        </p>

        <p className="mt-4 leading-relaxed text-zinc-700">
          A quick disclaimer, since this is a question people get wrong online: I
          am not a teacher and nothing here is instruction in the technique. For
          anything operational about a course, the authoritative source is{" "}
          <a
            href="https://www.dhamma.org"
            className="font-medium text-teal-700 underline"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher. I am just a fellow practitioner
          who has sat six courses and served at a few, sharing how the money side
          actually works.
        </p>

        <div className="mt-12">
          <BookCallCTA
            appearance="footer"
            destination={BOOKING_LINK}
            site="Vipassana"
            heading="Sat a course and want to keep the practice alive?"
            description="Book a short call about practice-buddy matching, where you get paired with another meditator for daily accountability after the course ends."
          />
        </div>

        <div className="mt-12">
          <FaqSection items={faqs} />
        </div>

        <p className="mt-12 text-sm text-zinc-500">
          Related reading:{" "}
          <a
            href="https://vipassana.cool/t/10-day-course-structure"
            className="text-teal-700 underline"
          >
            how the 10 days are structured
          </a>
          .
        </p>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Paired daily accountability for your post-course practice."
      />
    </article>
  );
}
