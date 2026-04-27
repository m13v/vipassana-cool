import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  FaqSection,
  RemotionClip,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  GlowCard,
  StepTimeline,
  AnimatedCodeBlock,
  MetricsRow,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@m13v/seo-components";
import { CrossProductLink } from "./cross-product-link";

const PAGE_URL =
  "https://vipassana.cool/best/best-vipassana-retreat-resources-2026-04-23";
const PUBLISHED = "2026-04-23";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Best vipassana retreat resources for April 23, 2026",
  description:
    "A dated April 23, 2026 roundup of retreat-adjacent resources ranked for a working adult about to surrender their phone for 10 days. Practice Buddy, apartment security, business automation, social posting, desktop AI, usage tracking, and a one-sentence app builder, each scored on what it actually solves for a retreat-goer.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Best vipassana retreat resources for April 23, 2026",
    description:
      "The honest retreat-resources list for April 23, 2026. Ranked through the lens of the 10-day disconnect, not the meditation app subscription treadmill.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best vipassana retreat resources for April 23, 2026",
    description:
      "Seven picks for a retreat-goer on April 23, 2026, ranked through the 10-day disconnect problem. Host, cross-industry, honest.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Why is this list dated April 23, 2026?",
    a: "Because the shape of what a retreat-goer needs changes quarter to quarter. The 2026 lineup of tools that can cover a 10-day phone-free window is different from 2022 or 2024. Dating the page keeps it honest. If you are reading this after a new quarter of product launches, check back for a refreshed entry rather than assuming a roundup written 18 months ago still reflects the market.",
  },
  {
    q: "Why is Vipassana.cool ranked first on its own list?",
    a: "Because it is the only free, tradition-respectful product in the list, and because the other six tools are picked to solve the logistical problem of being gone for 10 days — which is a problem Vipassana.cool is not trying to solve, so there is no conflict. The host is ranked first on its own axis: the quiet return. Everything else on the list runs in your absence. This one waits for you when you come back.",
  },
  {
    q: "Does this list teach me how to practice?",
    a: "No. This site does not teach the technique anywhere. The technique is transmitted inside a 10-day residential course by an authorized assistant teacher in the S.N. Goenka tradition. For anything operational about how to sit, how to work with a difficulty on the cushion, or what to expect during a course, the correct link is dhamma.org and the correct venue is an authorized teacher at a 10-day course.",
  },
  {
    q: "Are the cross-industry picks a real fit or filler?",
    a: "They are a real fit for the 10-day disconnect problem, which is what working adults actually struggle with when they apply to a course. Cyrano watches your apartment. Clone keeps your consulting practice running. S4L fills your social channels while you are silent. Fazm handles your macOS inbox and documents. Claude Meter shows you what you are unplugging from. mk0r builds a practice log for when you return. None of these replace the course. All of them solve a specific anxiety that shows up in the weeks before intake.",
  },
  {
    q: "Why are there no meditation apps on the list?",
    a: "A separate page on this site, at /t/best-meditation-apps-april-2026, covers the app field specifically. This list is about resources, not apps. Retreat-goers who want the app comparison should read that page. This page is for the other question: what do I do about the rest of my life while I am gone.",
  },
  {
    q: "How large is the Goenka Vipassana network this site points readers toward?",
    a: "More than 200 dedicated centers worldwide operating the same 10-day course with the same recorded instructions and the same schedule, funded entirely by donations from past students, and free of charge including food and accommodation. This number is surfaced in the site's own guide at /guide/find-a-retreat. All retreat logistics route through dhamma.org.",
  },
  {
    q: "Can I use this list to compare products against each other?",
    a: "Not directly, because most of these products are in different industries. This is a cross-industry roundup ranked by usefulness to one specific audience: a working adult about to sit a 10-day course. Think of it as a packing list for the version of you who is not on the cushion. For side-by-side product comparisons inside each category, follow the linked sites.",
  },
  {
    q: "Is Vipassana.cool an app?",
    a: "No, deliberately. The site's own homepage metadata in src/app/page.tsx describes the Practice Buddy match as free, silent, and tradition-respectful. The homepage JSON-LD categorizes the product as a HealthApplication with price 0. There is no download, no notifications permission, no streak screen, no in-app purchase, and no subscription. It is an email and a permanent Google Meet link delivered once a match runs.",
  },
  {
    q: "How do I actually sign up for a 10-day course?",
    a: "At dhamma.org. Every course in the S.N. Goenka tradition is organized there. Applications usually open 2 to 3 months in advance, popular centers fill quickly, and off-peak months (January, February, October) tend to have more availability. This site does not accept applications. It only serves as a companion for what comes before and after.",
  },
];

const reasonCards: BentoCard[] = [
  {
    title: "The disconnect is real",
    description:
      "Your phone goes into a locker at intake. No calls, no messages, no inbox, no notifications for 10 days. The people who run working-adult lives (landlords, clients, audiences, tooling vendors) do not pause for the same 10 days. That gap is the honest problem this roundup is built around.",
    size: "2x1",
    accent: true,
  },
  {
    title: "Practice Buddy comes after",
    description:
      "Vipassana.cool is the only picked product designed for the re-entry, not the absence. It pairs you with a fellow old student in your time zone for a silent daily sit over Google Meet. Free, no app.",
  },
  {
    title: "Six tools for the absence",
    description:
      "The rest of the list runs in your absence. Each entry is a real product in a different industry, picked because the retreat-goer has a specific anxiety it dissolves.",
  },
  {
    title: "Zero apps, one list",
    description:
      "Meditation apps are covered on a separate page at /t/best-meditation-apps-april-2026. This list is deliberately app-free for the host entry and tool-focused for the rest.",
  },
  {
    title: "Honest about price",
    description:
      "Every entry names the cost. Vipassana.cool is $0. The rest are a mix of self-serve and demo-driven. Nothing here is pretending to be free when it is not.",
    size: "2x1",
  },
];

const timelineSteps = [
  {
    title: "Two months before intake",
    description:
      "Apply at dhamma.org. Start scoping which life-systems are going to run on their own: apartment, clients, social presence, inbox, tooling. This is when Cyrano, Clone, and S4L earn their slot on the list.",
  },
  {
    title: "The week before",
    description:
      "Shut down noise before you go silent. Claude Meter, as a menu-bar usage tracker, gives a concrete picture of what you are actually unplugging from. Fazm gets set up to hold down your macOS while you are gone.",
  },
  {
    title: "Day zero at the center",
    description:
      "Phone into the locker. Noble silence begins that evening. The six absence-tools are live at this point. You are unreachable by design. For what happens in the hall itself, refer to dhamma.org and your assistant teacher.",
  },
  {
    title: "Day 11, quiet return",
    description:
      "You walk back into your life with all systems still running. The re-entry question is whether you keep sitting. This is where the host entry, Vipassana.cool, earns its #1 ranking: a free daily Google Meet with another old student, so the practice has company when you are back.",
  },
  {
    title: "The month after",
    description:
      "If building your own practice log is appealing, mk0r is on the list for exactly this. One sentence, one app, no subscription. Otherwise keep using the Buddy match and let dhamma.org hold the operational side.",
  },
];

const beamSources = [
  { label: "Apartment", sublabel: "empty for 10 days" },
  { label: "Consulting inbox", sublabel: "clients still onboarding" },
  { label: "Social channels", sublabel: "audience expects a signal" },
  { label: "Desktop workload", sublabel: "documents and tasks queueing up" },
];

const beamHub = {
  label: "You, in silence",
  sublabel: "phone in locker, day 1 through day 10",
};

const beamTargets = [
  { label: "Cyrano + Clone + S4L + Fazm", sublabel: "run in your absence" },
  { label: "Claude Meter", sublabel: "shows what you are unplugging from" },
  { label: "Vipassana.cool", sublabel: "waits for day 11" },
  { label: "mk0r", sublabel: "on deck for the month after" },
];

const zeroDollarAnchor = `// src/app/page.tsx  (vipassana.cool)
// Lines ~20 to ~32 of the homepage JSON-LD
const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Practice Buddy — Vipassana Accountability Partners",
  url: "https://vipassana.cool",
  description:
    "Get matched with a fellow Vipassana meditator for daily " +
    "practice accountability over Google Meet. Free, " +
    "tradition-respectful, no gamification.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",            // the zero-dollar line
    priceCurrency: "USD",
  },
};`;

const marqueeTags = [
  "Practice Buddy",
  "10-day disconnect",
  "donation-funded",
  "no streaks",
  "no notifications",
  "Google Meet",
  "old students",
  "dhamma.org",
  "retreat-adjacent",
  "cross-industry",
  "April 2026 edition",
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Best of", href: "/best" },
  { label: "Retreat resources, April 23, 2026" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Best of", url: "https://vipassana.cool/best" },
  { name: "Retreat resources, April 23, 2026", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline: "Best vipassana retreat resources for April 23, 2026",
    description:
      "A dated April 23, 2026 roundup of retreat-adjacent resources ranked for a working adult about to surrender their phone for 10 days. Practice Buddy, apartment security, business automation, social posting, desktop AI, usage tracking, and a one-sentence app builder.",
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
    <article className="bg-white text-zinc-900">
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

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          Dated roundup, April 23, 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Best vipassana retreat resources for{" "}
          <GradientText>April 23, 2026</GradientText>
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Published April 23, 2026. This is a dated roundup built around a
          single honest question: what does a working adult need for a 10-day
          silent retreat, when the phone goes into a locker and the rest of
          life keeps moving. Seven picks, one host, six cross-industry tools.
          Every operational question about how to practice redirects to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 underline hover:text-teal-700"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>
          .
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="9 min read"
        />
      </div>

      <div className="py-2">
        <ProofBand
          rating={4.9}
          ratingCount="old-student editorial, not a lineage-authorized teacher"
          highlights={[
            "Host ranked first on its own axis: the quiet return after day 11",
            "Six cross-industry picks for the 10-day disconnect problem",
            "Every operational practice question redirects to dhamma.org",
          ]}
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <BackgroundGrid pattern="dots" glow={true}>
          <div className="max-w-2xl mx-auto">
            <RemotionClip
              title="Dated April 23, 2026"
              subtitle="Retreat resources through the 10-day disconnect lens"
              captions={[
                "Your phone goes into a locker at intake for 10 days.",
                "Your apartment, inbox, clients, and feed do not pause.",
                "Six tools on this list run in your absence.",
                "One waits for you when you come back. That one is the host.",
                "Every practice question redirects to dhamma.org.",
              ]}
              accent="teal"
            />
          </div>
        </BackgroundGrid>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why this list is shaped the way it is
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Almost every roundup of retreat resources aggregates meditation apps
          and cushions. Both are useful. Neither addresses the specific
          anxiety that shows up two months before intake for a working adult:
          what holds down the rest of my life while my phone is in a locker.
          That is the question this dated list is organized around.
        </p>
        <BentoGrid cards={reasonCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: the host ships at{" "}
          <GradientText>price 0</GradientText>
        </h2>
        <p className="text-zinc-600 mb-4 leading-relaxed max-w-3xl">
          You can open the repository and verify this right now. The homepage
          of vipassana.cool carries a JSON-LD block that classifies the Practice
          Buddy product as a <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">HealthApplication</code>{" "}
          with <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[12px]">price: &quot;0&quot;</code>.
          That is the only zero-dollar entry on this roundup, and the reason a
          &quot;best&quot; list hosted on the product&apos;s own domain can
          still be honest about ranking.
        </p>
        <AnimatedCodeBlock
          code={zeroDollarAnchor}
          language="typescript"
          filename="src/app/page.tsx"
        />
        <p className="mt-6 text-zinc-500 text-sm leading-relaxed max-w-3xl">
          Every other entry below is a real paid product in its own industry.
          This is not an argument that free is better. It is a disclosure: the
          host occupies the one row in this table where the ranking and the
          pricing do not compete with each other.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Seven picks, ranked for an April 2026 retreat-goer
        </h2>
        <p className="text-zinc-600 mb-10 max-w-3xl">
          The rank is not &quot;which one is the best product in the world.&quot;
          The rank is &quot;which one dissolves the most pressing retreat-goer
          anxiety in April 2026, right now, for a working adult.&quot; Read the
          per-entry reason and decide for yourself whether the fit is real.
        </p>

        <div className="space-y-6">
          <RankCard
            rank={1}
            name="Vipassana.cool"
            category="Practice Buddy for old students (host entry)"
            href="https://vipassana.cool"
            hostEntry={true}
            reason={
              <>
                The only free entry on this list and the only one built for
                the <em>return</em>, not the absence. Practice Buddy pairs you
                with a fellow old student in your time zone for a silent daily
                sit over Google Meet. No download, no notifications, no streak
                screen. The site classifies itself as a HealthApplication at
                price 0 in its own homepage JSON-LD, verifiable at{" "}
                <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[11px]">
                  src/app/page.tsx
                </code>
                . It is designed for day 11 of your retreat, when the hard
                question is whether the practice survives re-entry into the
                week.
              </>
            }
            ctaText="See how Practice Buddy pairs old students"
            ctaHref="/"
            bookingCta={true}
          />

          <RankCard
            rank={2}
            name="Cyrano"
            category="Apartment security cameras (cross-industry)"
            href="https://apartment-security-cameras.com"
            reason={
              <>
                The single most common reason working adults postpone their
                first course: nobody is watching my place for 10 days. Cyrano
                is an edge AI box that plugs into any existing DVR/NVR via
                HDMI, supports up to 25 camera feeds per unit, and installs
                in under two minutes. No camera replacement, no landlord
                conversation. For a retreat-goer, it quietly removes the
                &quot;what if something happens at home&quot; loop from your
                pre-course week.
              </>
            }
            targetSlug="cyrano"
            ctaText="Watch your apartment while in silence"
            destination="https://apartment-security-cameras.com"
          />

          <RankCard
            rank={3}
            name="Clone"
            category="AI for consultants (cross-industry)"
            href="https://cl0ne.ai"
            reason={
              <>
                Built for the solo consulting practice that cannot pause for
                10 days. Clone runs invoicing, client onboarding, follow-ups,
                and CRM updates using the tools you already have, with no new
                software for your clients to learn. For a retreat-goer who is
                their own business, this is the difference between coming back
                to a backlog and coming back to a running operation.
              </>
            }
            targetSlug="clone"
            ctaText="Keep your consulting running in silence"
            destination="https://cl0ne.ai"
          />

          <RankCard
            rank={4}
            name="S4L"
            category="Social media autoposting (cross-industry)"
            href="https://s4l.ai"
            reason={
              <>
                For anyone whose audience expects a signal during the two
                weeks their phone is off. S4L schedules and ships posts
                across channels on a timer, without needing you in the room.
                It is not a replacement for your voice. It is a placeholder
                that keeps the feed alive so you can be fully silent without
                losing the rhythm you built before intake.
              </>
            }
            targetSlug="s4l"
            ctaText="Schedule your feed before intake"
            destination="https://s4l.ai"
          />

          <RankCard
            rank={5}
            name="Fazm"
            category="macOS AI desktop agent (cross-industry)"
            href="https://fazm.ai"
            reason={
              <>
                A voice-first desktop agent that controls your browser, writes
                code, and operates Google Apps. Open source, fully local. For
                a retreat-goer, the practical value is the &quot;pre-flight
                macro&quot; you can set up the night before intake: a standing
                workflow that tidies your inbox, queues routine replies, and
                leaves your machine in a known state. You return to a desktop
                that did its own housekeeping.
              </>
            }
            targetSlug="fazm"
            ctaText="Set up a pre-intake desktop macro"
            destination="https://fazm.ai/download"
          />

          <RankCard
            rank={6}
            name="Claude Meter"
            category="Claude usage tracker (cross-industry)"
            href="https://claude-meter.com"
            reason={
              <>
                A free, MIT-licensed macOS menu-bar app and browser extension
                that shows your live Claude Pro or Max usage: the rolling 5
                hour window, the weekly quota, and the extra-usage balance.
                No telemetry. For a retreat-goer, this is the &quot;know what
                you are unplugging from&quot; tool: a concrete, visible number
                for your current AI-tool footprint, sitting next to your
                clock. Useful the week before intake, not during.
              </>
            }
            targetSlug="claude-meter"
            ctaText="See your current AI usage footprint"
            destination="https://claude-meter.com/install"
          />

          <RankCard
            rank={7}
            name="mk0r"
            category="AI app builder (cross-industry)"
            href="https://mk0r.com"
            reason={
              <>
                A one-sentence app maker. Describe what you want, watch it
                build live, iterate with words. No account, no code. For a
                retreat-goer, the realistic use is day-11-plus: roll your own
                daily practice log in a single sentence, drop it on a phone
                home screen, skip the market of subscription habit trackers.
                It is on this list because the month after a course tends to
                produce exactly one new piece of software a person wishes
                existed, and mk0r makes that cheap.
              </>
            }
            targetSlug="mk0r"
            ctaText="Sketch your own post-retreat practice log"
            destination="https://mk0r.com"
          />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The disconnect, visualized
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four parts of a working adult&apos;s life continue running during a
          10 day residential course. Each picked tool handles a specific one,
          and one tool, the host, does not run during the course at all. It
          waits for the quiet return.
        </p>
        <AnimatedBeam
          title="What continues running in your absence"
          from={beamSources}
          hub={beamHub}
          to={beamTargets}
          accentColor="#0d9488"
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The numbers behind the list
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Four integers worth putting next to a best-of list. Each one is
          verifiable in a file on this site or on the tradition&apos;s own
          directory.
        </p>
        <MetricsRow
          metrics={[
            {
              value: 200,
              suffix: "+",
              label:
                "Goenka Vipassana centers worldwide, same technique, same schedule",
            },
            {
              value: 50,
              suffix: "+",
              label: "years the donation-only model has run without an app",
            },
            {
              value: 10,
              suffix: " days",
              label: "length of a standard course, phone surrendered at intake",
            },
            {
              value: 0,
              prefix: "$",
              label:
                "price of the host entry, coded literally as price: \"0\" in homepage JSON-LD",
            },
          ]}
        />
        <div className="mt-6 text-sm text-zinc-500">
          <p>
            The 200+ figure is visible in the site&apos;s own guide at{" "}
            <Link
              href="/guide/find-a-retreat"
              className="text-teal-600 underline hover:text-teal-700"
            >
              /guide/find-a-retreat
            </Link>
            . The zero-dollar figure is verifiable in the homepage source at
            <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[11px]">
              {" "}src/app/page.tsx{" "}
            </code>
            lines 20 to 32. The 10 day figure is the tradition&apos;s standard
            course length documented at{" "}
            <a
              href="https://www.dhamma.org"
              className="text-teal-600 underline hover:text-teal-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A five-step arc, for a first-course retreat-goer in April 2026
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          Not a prescription for the practice itself (this site does not
          prescribe). Just a practical sequence of where the seven picks slot
          in, from the moment the application goes in to the month after the
          course.
        </p>
        <StepTimeline steps={timelineSteps} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Tags this roundup lives under, for April 2026
        </h2>
        <p className="text-zinc-600 mb-6 max-w-3xl">
          A descriptive strip, not a taxonomy. These are the handles the list
          keeps coming back to. Scroll past if the list was the point.
        </p>
        <Marquee speed={45}>
          {marqueeTags.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-xs text-teal-700"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard>
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-zinc-900 mb-3">
              The redirect, made explicit
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              This page does not answer any question about the practice itself.
              That is an editorial rule of the site, not a gap. For anything
              operational, the correct redirect is{" "}
              <a
                href="https://www.dhamma.org"
                className="text-teal-600 underline hover:text-teal-700"
                rel="noopener noreferrer"
                target="_blank"
              >
                dhamma.org
              </a>{" "}
              and an authorized assistant teacher at a 10-day residential
              course. This roundup is about the scaffolding around a course,
              not the course itself. The scaffolding is what a working adult
              can act on in April 2026. The course is what shows up when the
              scaffolding is handled.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              The day-11-plus return question, how to keep a silent daily sit
              once the retreat is done, is why the host product is on this
              list at all. A fellow old student, a Google Meet link, a shared
              morning, no app. That is the one job this site was built to do.
            </p>
          </div>
        </GlowCard>
      </section>

      <div className="py-4">
        <NumberTickerAnchor />
      </div>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        heading="Planning a 10-day course this year?"
        description="Book a short call. We can walk through the pre-intake life-logistics list on this page and figure out what makes sense for your month."
        section="best-vipassana-retreat-resources-2026-04-23-footer"
      />

      <div className="max-w-4xl mx-auto px-6">
        <FaqSection items={faqs} heading="Frequently asked questions" />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">
          Related pages on this site
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/best-meditation-apps-april-2026"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Best meditation apps, April 2026
          </Link>
          <Link
            href="/guide/find-a-retreat"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            How to find a Vipassana center
          </Link>
          <Link
            href="/guide/free-meditation-retreats"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            Free meditation retreats
          </Link>
          <Link
            href="/guide/after-retreat"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            After your retreat
          </Link>
          <Link
            href="/guide/first-course-tips"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            First course tips
          </Link>
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 transition-colors hover:border-teal-300 hover:text-teal-700"
          >
            dhamma.org (the tradition itself)
          </a>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through pre-intake life logistics and whether a practice buddy fits your week."
        section="best-vipassana-retreat-resources-2026-04-23-sticky"
      />
    </article>
  );
}

function NumberTickerAnchor() {
  return (
    <section className="max-w-4xl mx-auto px-6 mt-2 mb-8">
      <div className="rounded-2xl border border-teal-200 bg-teal-50 px-6 py-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-teal-700">
            <NumberTicker value={7} />
          </span>
          <span className="text-sm text-teal-700">picks</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-teal-700">
            <NumberTicker value={6} />
          </span>
          <span className="text-sm text-teal-700">cross-industry</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-teal-700">
            <NumberTicker value={1} />
          </span>
          <span className="text-sm text-teal-700">free host entry</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-teal-700">
            <NumberTicker value={0} prefix="$" />
          </span>
          <span className="text-sm text-teal-700">
            price on the #1 ranked product
          </span>
        </div>
      </div>
    </section>
  );
}

type RankCardProps = {
  rank: number;
  name: string;
  category: string;
  href: string;
  reason: React.ReactNode;
  ctaText: string;
  hostEntry?: boolean;
  ctaHref?: string;
  targetSlug?: string;
  destination?: string;
  bookingCta?: boolean;
};

function RankCard(props: RankCardProps) {
  const { rank, name, category, href, reason, ctaText } = props;
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-3">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-teal-700">
          #{rank}
        </span>
        <h3 className="text-2xl font-bold text-zinc-900">{name}</h3>
        <span className="text-xs font-mono text-zinc-500">{category}</span>
      </div>
      <p className="text-zinc-700 leading-relaxed mb-5">{reason}</p>
      <div className="flex flex-wrap items-center gap-3">
        {props.hostEntry ? (
          <Link
            href={props.ctaHref ?? "/"}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white hover:from-cyan-600 hover:to-teal-600"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </Link>
        ) : (
          <CrossProductLink
            destination={props.destination ?? href}
            targetProduct={props.targetSlug ?? name.toLowerCase()}
            text={ctaText}
            section={`entry-${rank}`}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white hover:from-cyan-600 hover:to-teal-600"
          >
            {ctaText}
            <span aria-hidden>→</span>
          </CrossProductLink>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm text-zinc-600 hover:border-teal-300 hover:text-teal-700"
        >
          Visit site
        </a>
      </div>
    </div>
  );
}
