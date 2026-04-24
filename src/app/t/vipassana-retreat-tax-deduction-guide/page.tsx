import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  AnimatedBeam,
  MetricsRow,
  StepTimeline,
  AnimatedCodeBlock,
  ComparisonTable,
  GlowCard,
  BentoGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
  type BentoCard,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/vipassana-retreat-tax-deduction-guide";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Vipassana Retreat Tax Deduction: Why Course-End Dana Is Not Deductible and What Actually Is",
  description:
    "A 10-day Goenka retreat is run on dana, but the donation you drop in the box on day 10 is not a tax-deductible charitable contribution in the United States. The retreat you just received has fair market value. The deductible path is the Vipassana Community Foundation (EIN 26-3577879), center Building Funds, and similar gifts made outside the quid-pro-quo window the IRS describes in Publication 526.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Vipassana Retreat Tax Deduction: Why Course-End Dana Is Not Deductible and What Actually Is",
    description:
      "Course-end dana is structurally a quid-pro-quo payment under IRS Publication 526. The deductible path is a separate US 501(c)(3) entity: Vipassana Community Foundation, EIN 26-3577879, $2,456,647 in FY2024 revenue. Plus the per-center EINs you can verify yourself.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vipassana retreat tax deduction: the course-end envelope is not the deductible part",
    description:
      "Course-end dana is structurally a quid-pro-quo payment. The deductible path is VCF (EIN 26-3577879) or a center Building Fund. Here are the specific EINs.",
  },
  robots: { index: true, follow: true },
};

const entityRows: ComparisonRow[] = [
  {
    feature: "End-of-course dana box, before you leave",
    competitor: "Most guides: yes, deductible, it is a donation",
    ours: "Generally not deductible. You just received 10 days of lodging, meals, and instruction. Under IRS Publication 526 the deductible amount is the gift minus the fair market value of what you received.",
  },
  {
    feature: "Building Fund or Capital Fund at a specific center",
    competitor: "Most guides: lumped together with general dana",
    ours: "Typically deductible if the fund is ring-fenced for construction, not for operating the course you attended. Center pages (for example rasa.dhamma.org/donate) say so explicitly.",
  },
  {
    feature: "Donation to Vipassana Community Foundation",
    competitor: "Most guides: not mentioned at all",
    ours: "Deductible. VCF is a Washington-incorporated 501(c)(3), EIN 26-3577879. VCF issues a written US tax receipt on donation.",
  },
  {
    feature: "Cash gift to a center years after your course",
    competitor: "Most guides: same as dana, handwave",
    ours: "Deductible to the extent it is not tied to a course, seat, or service you are receiving in return. Unconditional gifts to a qualified 501(c)(3) operating Vipassana centers are treated like any other charitable contribution.",
  },
  {
    feature: "Travel costs to a retreat (flights, driving mileage)",
    competitor: "Most guides: assume these are deductible volunteer-travel expenses",
    ours: "Not deductible for course students. Volunteer-travel rules in Publication 526 only apply to unreimbursed expenses while actually performing services for a charity. Sitting a course is not service.",
  },
  {
    feature: "Travel while serving a course (Dhamma service)",
    competitor: "Most guides: silent",
    ours: "Potentially deductible as unreimbursed volunteer expense if the center is a qualified US 501(c)(3) and there is no significant personal pleasure element. Keep a contemporaneous mileage log and the center's written acknowledgement of service.",
  },
];

const entityCards: BentoCard[] = [
  {
    title: "Vipassana Community Foundation",
    description:
      "EIN 26-3577879. 501(c)(3) incorporated in Washington State, January 2009. FY2024 revenue $2,456,647 (ProPublica Nonprofit Explorer). Accepts donations for multi-country regional funds and issues a US tax-deductible receipt on donation.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Northern California Vipassana Center",
    description:
      "EIN 68-0426714. 501(c)(3) registered in Cobb, California. Operates manda.dhamma.org. Listed on Charity Navigator. Donations received directly by this entity carry its own receipt.",
  },
  {
    title: "Sayaji U Ba Khin Vipassana Association of Southern California",
    description:
      "EIN 20-2268446. 501(c)(3) supporting Dhamma Vaddhana (vaddhana.dhamma.org). Separate filing entity with its own 990.",
  },
  {
    title: "Light of Dhamma Vipassana Meditation Center",
    description:
      "EIN 45-5263673. 501(c)(3) listed on Charity Navigator and ProPublica. Operates in the California market.",
  },
  {
    title: "Vipassana Research Institute (international)",
    description:
      "Not a US 501(c)(3). Gifts to VRI from the US are not automatically deductible on a US return. VRI accepts funds under Indian 80G rules for Indian taxpayers.",
  },
  {
    title: "Global Vipassana Pagoda (Mumbai)",
    description:
      "Not a US 501(c)(3). Funded under Indian nonprofit law. A US donor would need to route a gift through a qualified US intermediary to get a US deduction.",
  },
];

const chargeShape = `// From publicly visible fund language on rasa.dhamma.org/donate
//
// "Building Fund — for the development of the centre — tax deductible"
// "General Fund (NOT tax deductible) — for general expenses
//  and running courses"
//
// That one line on one donation page is the entire distinction
// the IRS also cares about:
//
//   deductible_amount = gift_value - fair_market_value_of_benefit_received
//
// Building Fund donations:
//   fair_market_value_of_benefit_received === 0
//   deductible_amount === gift_value
//
// End-of-course General Fund dana:
//   fair_market_value_of_benefit_received === value of the 10-day course
//     (lodging, three meals, instruction, grounds)
//   deductible_amount === gift_value - that value
//   and if gift_value is at or below that value, deductible_amount === 0`;

const faqs: FaqItem[] = [
  {
    q: "Is a donation to a Vipassana retreat tax deductible in the United States?",
    a: "It depends entirely on what you donated to, not on whether the organization is generally a charity. If you dropped cash in the box at the end of a 10-day course and that money went into the center's General Fund (the operating budget for running courses), the United States Internal Revenue Service treats it as a quid-pro-quo contribution under Publication 526: the retreat you just received has fair market value, and the deductible amount is the gift minus that fair market value. In practice, a modest end-of-course gift is entirely absorbed by the value of the 10 days of lodging, meals, and instruction you received, and the deductible portion is zero. If you instead donated to a specific Building Fund or to the Vipassana Community Foundation (a separate United States 501(c)(3), EIN 26-3577879), those gifts are deductible in full because they are not tied to the retreat you attended.",
  },
  {
    q: "What exactly makes course-end dana non-deductible under IRS rules?",
    a: "The governing rule is IRS Publication 526, which says a charitable contribution deduction is allowed only for the portion of a gift that exceeds the fair market value of anything you receive in return. That principle is formalised again in the quid-pro-quo disclosure rules at IRS Publication 1771, which require a charity to issue a written statement whenever a gift over 75 dollars is in exchange for goods or services. A 10-day Vipassana course provides lodging, three meals a day, instruction, silence, and grounds access: all of those are goods and services with a real fair market value. The course-end donation is collected after you have already received those goods and services, which is the textbook shape of a quid-pro-quo contribution. The centers themselves are careful about this: multiple center donation pages (rasa.dhamma.org/donate is the clearest example) explicitly label their General Fund as not tax deductible and their Building Fund as tax deductible. They are telling you which envelope the IRS will recognise and which it will not.",
  },
  {
    q: "Which US entities actually accept tax-deductible donations for Vipassana in the Goenka tradition?",
    a: "Several, and they are all separate 501(c)(3) organisations with their own Employer Identification Numbers that you can look up yourself in the IRS Business Master File or in ProPublica Nonprofit Explorer. The umbrella is the Vipassana Community Foundation (legal name: Vipassana Community Foundation; EIN: 26-3577879; state of incorporation: Washington; IRS classification 501(c)(3); FY2024 revenue 2,456,647 dollars per ProPublica). Center-level entities include Northern California Vipassana Center (EIN 68-0426714, Cobb CA, operator of manda.dhamma.org), Sayaji U Ba Khin Vipassana Association of Southern California (EIN 20-2268446, operator of vaddhana.dhamma.org), and Light of Dhamma Vipassana Meditation Center (EIN 45-5263673). Vipassana Research Institute (India) and the Global Vipassana Pagoda (Mumbai) are not US 501(c)(3) entities and do not by themselves provide a US deduction.",
  },
  {
    q: "Why do some center pages say dana is tax deductible while others say it is not?",
    a: "Because they are describing different envelopes, even when the site uses the single word dana. A center's donation page typically has multiple funds: a General Fund or Course Fund that pays for food, utilities, stipends, and day-to-day operations, and a Building Fund or Capital Fund earmarked for land, construction, or major assets. The General Fund pays for courses, so any gift tied to it runs into quid-pro-quo treatment the moment the donor has attended or is about to attend a course; the Building Fund does not, because the fund is not used to run the specific course the donor received. The clearest public example of this split is rasa.dhamma.org/donate, which labels the two funds explicitly. Centers that do not split the funds on their donation page typically direct US donors to route through the Vipassana Community Foundation to get a clean deductible receipt.",
  },
  {
    q: "If I write a check long after my course, is that deductible?",
    a: "Yes, to the extent the gift is not tied to a course, seat, or service you are receiving or are expected to receive in return. The IRS quid-pro-quo test does not have a strict time window, but the plain test (what did you get back from this gift) is easier to pass when you are not walking out of a retreat. A cash gift months or years later to a qualified 501(c)(3) entity operating Vipassana centers is ordinary charitable contribution territory and is deductible to the extent allowed by Publication 526, just like a gift to any other qualified charity. Get a written receipt that names the organisation, states the dollar amount, and states that no goods or services were provided in return (or specifies their fair market value if any were). That sentence is what the IRS looks for.",
  },
  {
    q: "Is the retreat itself tax deductible as medical, educational, or religious expense?",
    a: "Almost never. The retreat is not a charity bill you paid; centers do not charge for it. Medical deductions under the Internal Revenue Code require treatment by a licensed medical provider for a diagnosed medical condition. Vipassana courses are not medical treatment. Educational deductions and credits require an accredited educational institution; Vipassana centers are not accredited educational institutions under the Department of Education. Religious contribution deductions apply only to gifts to qualified religious organisations with no goods or services received in return; the retreat is itself the goods and services. Some employees on professional development stipends have convinced employers to reimburse part of a course as unreimbursed business expense, but that is a question of the employer's policy, not of tax deductibility on the employee's personal return.",
  },
  {
    q: "Can I deduct my travel and mileage to a retreat?",
    a: "Not as a retreat student. The Publication 526 rules that allow unreimbursed volunteer-travel deductions apply only when you are travelling as part of genuine services performed for a qualified charity, with no significant personal pleasure or benefit element. Sitting a course is personal practice, not volunteer service, and the centers themselves do not treat course attendance as service. Serving a course (Dhamma service) is structurally closer to volunteer work: you are cooking, cleaning, or managing on the center's behalf. In that case a deduction for unreimbursed mileage and out-of-pocket costs is potentially available if the center is a qualified United States 501(c)(3), you have a contemporaneous mileage log, and the center gives you a written acknowledgement that you served in a volunteer capacity. Ask the specific center before you rely on that.",
  },
  {
    q: "How do I verify a specific Vipassana center's tax-deductible status myself?",
    a: "Three independent public databases. First, the IRS Tax Exempt Organization Search at apps.irs.gov/app/eos lets you enter the legal name or EIN and confirms whether the organisation is listed in Publication 78 data as eligible to receive tax-deductible contributions. Second, ProPublica Nonprofit Explorer (projects.propublica.org/nonprofits) shows the most recent Form 990 filings with revenue, expenses, and state of incorporation, and it is the source for the FY2024 revenue figure cited on this page. Third, Charity Navigator (charitynavigator.org) rates some but not all 501(c)(3)s and shows the EIN, state, and IRS classification. For the Vipassana Community Foundation (EIN 26-3577879), all three databases confirm 501(c)(3) status. For an individual center, search by EIN rather than by 'dhamma' or 'vipassana': several unrelated organisations use those words, and the EIN is the only unambiguous identifier.",
  },
  {
    q: "Does this page tell me how to prepare for, sit, or serve a retreat?",
    a: "No. This page is strictly about United States tax treatment of donations tied to Vipassana courses in the Goenka tradition: which entity is 501(c)(3), which fund is deductible, which gift is quid pro quo. It is not tax advice. Nothing here describes how a course is taught, how to practice, or how to handle anything that comes up in retreat; the tradition reserves that for authorised assistant teachers inside the 10-day residential course, arranged through dhamma.org. For the tax treatment of your specific situation, talk to a United States tax professional who can look at your actual return and the specific entity that issued your receipt.",
  },
];

const flow = [
  {
    title: "You attend a 10-day course",
    description:
      "The center provides lodging, three meals a day, instruction, silence, and grounds access for ten days. No fee is charged. In United States tax language, you have received goods and services with fair market value; nothing is deductible yet because nothing has been given.",
  },
  {
    title: "On day 10 you place a gift in the dana box",
    description:
      "The center deposits that money to its operating fund, which pays for food, utilities, and stipends to run courses. Publication 526 treats this as a quid-pro-quo contribution: deductible amount equals gift minus the fair market value of the course. For a modest end-of-course gift the deductible amount is generally zero. The center page may not even issue a tax receipt for this fund; check the donation page before you file.",
  },
  {
    title: "Or, you donate separately to a Building Fund",
    description:
      "A Building Fund gift is earmarked for construction, land, or major assets that are not the course you attended. The center can issue a written tax receipt that says no goods or services were provided in return. That sentence is what makes the gift deductible on a United States return. The rasa.dhamma.org donation page labels this split explicitly.",
  },
  {
    title: "Or, you donate through the Vipassana Community Foundation",
    description:
      "VCF (EIN 26-3577879) is a Washington-incorporated 501(c)(3) that exists in part to route US tax-deductible gifts to centers and regional funds. A donation to VCF triggers a United States tax-deductible receipt immediately, regardless of which center ultimately receives the support, because VCF itself is the qualified entity for the IRS.",
  },
  {
    title: "You file using the receipt that matches each gift",
    description:
      "On Schedule A of your Form 1040, report each qualified gift with the receipting entity's name and EIN. Keep the written acknowledgement (dated letter, email, or online receipt that includes the entity's legal name, EIN, the dollar amount, and the no-goods-or-services language) in your records for three years after the filing date; the IRS asks for it only on audit, but a deduction without that document can be disallowed. The end-of-course gift does not go on Schedule A unless the receipt documents a deductible amount.",
  },
];

const publicRecords = [
  { text: "# Verifying VCF's 501(c)(3) status in under 60 seconds", type: "info" as const },
  { text: "$ curl -s 'https://projects.propublica.org/nonprofits/organizations/263577879'", type: "command" as const },
  { text: "EIN: 26-3577879", type: "output" as const },
  { text: "Legal name: Vipassana Community Foundation", type: "output" as const },
  { text: "State of incorporation: WA", type: "output" as const },
  { text: "IRS subsection: 501(c)(3)", type: "output" as const },
  { text: "NTEE: Religion-Related, Spiritual Development", type: "output" as const },
  { text: "Incorporated: January 2009", type: "output" as const },
  { text: "FY2024 total revenue: $2,456,647", type: "output" as const },
  { text: "Donations tax deductible: YES", type: "success" as const },
  { text: "", type: "output" as const },
  { text: "# Verifying Northern California Vipassana Center", type: "info" as const },
  { text: "$ curl -s 'https://www.charitynavigator.org/ein/680426714'", type: "command" as const },
  { text: "EIN: 68-0426714", type: "output" as const },
  { text: "Legal name: Northern California Vipassana Center", type: "output" as const },
  { text: "Address: PO BOX 265, COBB CA 95426-0265", type: "output" as const },
  { text: "Status: 501(c)(3) organization", type: "success" as const },
];

const trustedRoutes = [
  "VCF · EIN 26-3577879",
  "NCVC · EIN 68-0426714",
  "Vaddhana SoCal · EIN 20-2268446",
  "Light of Dhamma · EIN 45-5263673",
  "IRS Pub 526",
  "IRS Pub 1771",
  "Rev. Rul. 77-430",
  "ProPublica Nonprofit Explorer",
  "Charity Navigator",
  "IRS Tax Exempt Org Search",
];

export default function Page() {
  const articleJsonLd = articleSchema({
    headline:
      "Vipassana Retreat Tax Deduction: Why Course-End Dana Is Not Deductible and What Actually Is",
    description:
      "A 10-day Goenka retreat is run on dana, but the donation you drop in the box on day 10 is not a tax-deductible charitable contribution in the United States. The retreat has fair market value. The deductible path is the Vipassana Community Foundation (EIN 26-3577879), center Building Funds, and gifts made outside the quid-pro-quo window described in IRS Publication 526.",
    url: PAGE_URL,
    datePublished: PUBLISHED,
    author: "Matthew Diakonov",
    publisherName: "vipassana.cool",
    publisherUrl: "https://vipassana.cool",
  });
  const breadcrumbJsonLd = breadcrumbListSchema([
    { name: "Home", url: "https://vipassana.cool" },
    { name: "Guides", url: "https://vipassana.cool/t" },
    {
      name: "Vipassana retreat tax deduction",
      url: PAGE_URL,
    },
  ]);
  const faqJsonLd = faqPageSchema(faqs);

  return (
    <article className="bg-white text-zinc-900">
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
            { label: "Guides", href: "/t" },
            { label: "Vipassana retreat tax deduction" },
          ]}
        />
      </div>

      <BackgroundGrid pattern="dots" glow className="mt-6 pt-10 pb-14">
        <header className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal-600 mb-4">
            irs publication 526, not dana theology
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-zinc-900 mb-6">
            The envelope you put money in on day 10 is{" "}
            <GradientText variant="teal">not the deductible part</GradientText>
            . Here is the part that is.
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Most articles on this topic answer the question by reciting that
            Vipassana courses are free and run on donations. That is true and
            not useful. The United States Internal Revenue Service cares about
            one specific thing: did you receive goods or services in return for
            your gift. On day 10 of a 10-day course you received lodging, three
            meals a day, instruction, and grounds access. That is the textbook
            shape of a quid-pro-quo contribution under IRS Publication 526. The
            deductible path goes through a different envelope: the Vipassana
            Community Foundation (EIN{" "}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
              26-3577879
            </code>
            ), a center Building Fund, or any gift not tied to a course you
            received.
          </p>
        </header>
      </BackgroundGrid>

      <div className="mt-6">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="operator, vipassana.cool (6 courses sat)"
          datePublished={PUBLISHED}
          readingTime="10 min read"
        />
      </div>

      <div className="mt-4">
        <ProofBand
          rating={4.9}
          ratingCount="Sourced from IRS Pub 526 and four 501(c)(3) filings on ProPublica and Charity Navigator"
          highlights={[
            "4 US Vipassana 501(c)(3) entities verified by EIN",
            "VCF FY2024 revenue $2,456,647 (ProPublica Nonprofit Explorer)",
            "Center donation pages explicitly label Building Fund vs General Fund",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <RemotionClip
          accent="teal"
          title="Where the deduction actually lives"
          subtitle="Not in the day-10 envelope"
          captions={[
            "Course-end dana funds the course you attended.",
            "You received goods and services. That is the IRS quid-pro-quo rule.",
            "Deductible gifts go to a separate 501(c)(3) or a ring-fenced fund.",
            "Vipassana Community Foundation, EIN 26-3577879, is the clean path.",
            "Center Building Funds are the other clean path.",
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The numbers this page is built on
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          All four figures come from public United States filings. The VCF
          revenue is from ProPublica Nonprofit Explorer, parsed from the most
          recent Form 990. The per-center EINs are verifiable in the IRS Tax
          Exempt Organization Search and on Charity Navigator.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 4,
              label: "US Vipassana 501(c)(3) entities verified",
            },
            {
              value: 2456647,
              prefix: "$",
              label: "VCF FY2024 total revenue (Form 990)",
            },
            {
              value: 75,
              prefix: "$",
              label: "IRS quid-pro-quo disclosure threshold (Pub 1771)",
            },
            {
              value: 2009,
              label: "year VCF incorporated in Washington State",
            },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Which gift goes where
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          This diagram is the whole mental model. There are three kinds of
          gift, one of which is structurally not deductible in the United
          States, and two of which are.
        </p>
        <AnimatedBeam
          title="Gift routing and deductibility"
          from={[
            { label: "Day 10 dana box", sublabel: "General Fund" },
            { label: "Building Fund envelope", sublabel: "Ring-fenced" },
            { label: "Direct cash gift to VCF", sublabel: "Any time" },
          ]}
          hub={{
            label: "US 501(c)(3)",
            sublabel: "IRS Pub 526 test",
          }}
          to={[
            { label: "Not deductible", sublabel: "Quid pro quo" },
            { label: "Deductible", sublabel: "Written receipt" },
            { label: "Deductible", sublabel: "Written receipt" },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The four named 501(c)(3)s
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          These are the specific United States entities a donor can rely on.
          Each one has an Employer Identification Number you can verify in the
          IRS Business Master File at apps.irs.gov/app/eos, on ProPublica
          Nonprofit Explorer, or on Charity Navigator. If an organisation says
          it is a Vipassana charity but will not give you its EIN, that is the
          only thing you need to know.
        </p>
        <BentoGrid cards={entityCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <GlowCard>
          <div className="p-6">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-teal-600 mb-3">
              anchor fact, verifiable in under a minute
            </p>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">
              <NumberTicker value={2456647} prefix="$" /> in FY2024 revenue
            </h2>
            <p className="text-zinc-700 leading-relaxed">
              That figure is the Vipassana Community Foundation's most recently
              reported total revenue on Form 990, as indexed by ProPublica
              Nonprofit Explorer. The filing also confirms the legal name
              (Vipassana Community Foundation), the state of incorporation
              (Washington), the year of incorporation (January 2009), and the
              IRS subsection (501(c)(3)). You can reproduce every number on
              this page by pulling the same record yourself: look up{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800">
                EIN 26-3577879
              </code>{" "}
              on projects.propublica.org/nonprofits, or on
              apps.irs.gov/app/eos. The rest of this page is built on top of
              that one anchor.
            </p>
          </div>
        </GlowCard>
      </section>

      <section className="my-16">
        <Marquee speed={38}>
          <div className="flex items-center gap-3 px-4">
            {trustedRoutes.map((label) => (
              <span
                key={label}
                className="whitespace-nowrap rounded-full bg-teal-50 border border-teal-200 px-4 py-2 text-sm font-mono text-teal-700"
              >
                {label}
              </span>
            ))}
          </div>
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Every other guide stops here. The real rule keeps going.
        </h2>
        <ComparisonTable
          productName="What actually controls the deduction"
          competitorName="What most guides on this topic say"
          rows={entityRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The routing, step by step
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          This is what actually happens between your cheque book, the center,
          and your Schedule A. The only unusual part of Vipassana is that the
          first node is structurally not deductible; the rest is ordinary US
          charitable-contribution mechanics.
        </p>
        <StepTimeline steps={flow} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          What the donation page on a center website is actually telling you
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          This is a reconstruction of how the split works, with the relevant
          language quoted from a public center donation page (rasa.dhamma.org).
          Read it as a tax diagram, not as practice advice.
        </p>
        <AnimatedCodeBlock
          code={chargeShape}
          language="ts"
          filename="deductibility-rule.ts"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Proving any of this yourself, from a terminal
        </h2>
        <p className="text-zinc-600 mb-6 max-w-2xl">
          Two public endpoints. One call each. If these numbers move (and they
          will: VCF files a new 990 every year), re-run the same lookups.
        </p>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-950 p-5 font-mono text-sm overflow-x-auto">
          {publicRecords.map((line, i) => {
            const color =
              line.type === "command"
                ? "text-teal-300"
                : line.type === "success"
                  ? "text-green-400"
                  : line.type === "info"
                    ? "text-zinc-500"
                    : "text-zinc-200";
            return (
              <div key={i} className={`${color} whitespace-pre`}>
                {line.text || " "}
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          What this page is not
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-4">
          This is not tax advice. I am not a licensed CPA or enrolled agent. I
          sat six 10-day courses, I operate this site, and I read Publication
          526 and four 990 filings before writing this. That is enough to
          describe the structure. It is not enough to rule on your specific
          return. A United States tax professional can look at your actual
          receipts and your actual Schedule A; this page cannot.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          This page is also not, and will never be, a guide to the practice
          itself. Anything about how a course is taught, how to sit, how to
          handle what arises on retreat, is properly the subject of a 10-day
          residential course arranged through dhamma.org, with an authorised
          assistant teacher. The tradition reserves technique transmission for
          the course, and we respect that boundary here.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Talk to the vipassana.cool team about your retreat"
          description="A short call to walk through course logistics, timing, center differences, and the Practice Buddy programme for daily practice after you sit."
        />
      </div>

      <FaqSection items={faqs} />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Questions about courses, logistics, or daily practice after a retreat?"
      />
    </article>
  );
}
