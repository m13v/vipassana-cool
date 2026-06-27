import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  GlowCard,
  MetricsRow,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/free-vipassana-meditation-centre-near-me";
const PUBLISHED = "2026-06-27";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Free Vipassana Meditation Centre Near Me: How to Spot the Genuinely Free One",
  description:
    "Yes, there is almost certainly a free Vipassana centre near you. Every authorized S.N. Goenka centre charges $0 for tuition, food, and lodging. The trap: your map results also surface paid 'vipassana retreats' that charge hundreds. Here is the one test that tells them apart, plus how to find the free centre nearest you. Verified 2026-06-27.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Free Vipassana centre near me: which results are actually free",
    description:
      "Authorized Goenka centres are entirely donation-funded ($0). Paid retreat aggregators are not. The one signal that separates them, and how to locate the free centre nearest you.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Vipassana centre near me: the test that filters out paid ones",
    description:
      "The free centre lives on a dhamma.org subdomain and quotes no price. The paid 'vipassana retreat' lives on a booking platform. Notes from six courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Free centre near you" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Free Vipassana centre near me", url: PAGE_URL },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "What a Vipassana course actually costs",
    href: "/t/vipassana-cost",
    excerpt:
      "Why the line item is $0, and the strange rule that a first-timer is not even allowed to pre-pay.",
    tag: "Cost",
  },
  {
    title: "Vipassana centre near me: the locator that actually works",
    href: "/t/vipassana-meditation-centre-near-me",
    excerpt:
      "The dhamma.org Closest Locations tool, the VRI Center-Search, and the distance reality nobody mentions.",
    tag: "Finding one",
  },
  {
    title: "Free meditation retreats: how the donation model works",
    href: "/guide/free-meditation-retreats",
    excerpt:
      "The dana chain that keeps the whole thing free, and what separates it from a free trial with an upsell.",
    tag: "Guide",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Is there really a free Vipassana meditation centre near me?",
    a: "Almost certainly, if you mean an authorized centre in the S.N. Goenka tradition. Those courses are run solely on a donation basis, so tuition, food, and lodging are all free. North America alone has around 16 dedicated centres plus roughly nine non-centre course locations, and there are over 300 course locations worldwide. To find the one nearest you, open the official directory at dhamma.org/en-US/locations/directory and use Closest Locations. The catch is distance: centres are sparse and rural, so the nearest free one may still be a multi-hour drive.",
  },
  {
    q: "How do I tell a free centre from a paid 'vipassana retreat' in my results?",
    a: "Look at the web address. An authorized free centre lives on a dhamma.org or vridhamma.org subdomain, for example manda.dhamma.org for Northern California's Dhamma Manda, and it never quotes a price for the course. A paid lookalike lives on a commercial booking platform or a retreat aggregator and shows a fee, a nightly rate, and a Book Now button. The free course form has no payment step at all.",
  },
  {
    q: "Why do my Google and Yelp searches show paid retreats when I searched for free?",
    a: "Because commercial retreat businesses and aggregators optimize hard for local search, while authorized Goenka centres do not advertise at all. So a 'free vipassana centre near me' query still surfaces paid 'vipassana-style' retreats that charge a fee, often hundreds or thousands of dollars. They are a different, commercial thing. The free centres are usually further down, or only on the dhamma.org directory.",
  },
  {
    q: "Is the free course free for everyone, or only for first-timers?",
    a: "Free for everyone, every time. There is no fee for a first course or a tenth. The tradition does not charge students at all. Donations are accepted only from people who have already completed at least one 10-day course, and a first-time student may give a donation at the end of their own course if they wish. So the price to attend is always zero, regardless of how many times you have sat.",
  },
  {
    q: "Can I drop into a free Vipassana centre near me for an hour or a day?",
    a: "No. In this tradition the technique is taught only inside a 10-day residential course where you stay on site the whole time. Centres are not drop-in studios. After you have completed a course, the same centres host shorter sittings and one-day events for old students, but the entry point is always the residential course. For anything about how the course itself works, the authoritative sources are dhamma.org and an authorized assistant teacher.",
  },
  {
    q: "If it is free, how does the centre near me stay open?",
    a: "Old students. Once you finish a course, many people give so the next person can sit for free the way they did. The course you attend was funded by strangers who came before you. Teachers and organizers are unpaid volunteers, which is why the model can hold the price at zero without an upsell hiding somewhere.",
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
                "Free Vipassana Meditation Centre Near Me: How to Spot the Genuinely Free One",
              description:
                "Every authorized S.N. Goenka Vipassana centre is free. How to tell those free centres apart from the paid 'vipassana retreats' in your local results, and how to find the free one nearest you.",
              url: PAGE_URL,
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
            }),
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
          __html: JSON.stringify(faqPageSchema(faqItems)),
        }}
      />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          Free Vipassana meditation centre near me
        </h1>

        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="7 min read"
        />

        <p className="mt-6 text-lg leading-relaxed text-zinc-600">
          The word that does the work in this search is &quot;free.&quot; People
          type it because they have already seen the other kind of result: a
          tidy listing for a &quot;vipassana retreat&quot; near them with a price
          attached. I have sat six courses at three centres in California, all of
          them free, and the confusion is real. So this is the one thing worth
          knowing before you book anything: which of your local results is
          actually free, and which is a paid lookalike wearing the same word.
        </p>

        {/* Direct answer, first 30% of the page */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer (verified 2026-06-27)
          </p>
          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-5xl font-bold text-zinc-900">$0</span>
            <span className="text-base leading-snug text-zinc-700">
              at every authorized centre, for tuition, food, and lodging
            </span>
          </div>
          <p className="mt-4 text-base leading-relaxed text-zinc-800">
            Yes, there is almost certainly a free Vipassana centre within reach.
            Every authorized centre in the S.N. Goenka tradition runs solely on
            donations, so a 10-day course costs you nothing: no tuition, no
            charge for meals, no charge for a bed. North America alone has around
            16 dedicated centres plus roughly nine non-centre course locations,
            and you can find the nearest one through the official directory at{" "}
            <a
              href="https://www.dhamma.org/en-US/locations/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline"
            >
              dhamma.org/en-US/locations/directory
            </a>
            . The paid &quot;vipassana retreats&quot; that also show up in your
            results are a separate, commercial thing. The source for the free
            model is{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 underline"
            >
              the financial policy on dhamma.org
            </a>
            .
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Your results are two different things wearing one name
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            When you search for a free Vipassana centre, the algorithm hands you
            a blend. Some results are authorized centres in the Goenka tradition,
            which are genuinely free. Others are commercial retreat centres and
            booking aggregators that use the word &quot;vipassana&quot; as a
            style label and charge a fee for it. Both are real, both call
            themselves vipassana, and the listing snippet rarely makes the
            difference obvious. That is the entire problem this page solves.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            The reason the paid ones crowd the top is mundane. Commercial retreat
            businesses optimize for local discovery the way restaurants do, while
            authorized Goenka centres do not advertise, do not sell hourly
            classes, and do not compete for that traffic at all. So the paid
            options surface first even when you typed the word free. You have to
            filter for the free centre yourself, and the good news is that it
            takes one reliable check.
          </p>
        </section>

        <section className="mt-12">
          <GlowCard glowColor="rgba(20,184,166,0.18)">
            <div className="rounded-2xl border border-zinc-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                The one test that never lies
              </p>
              <h2 className="mt-2 text-2xl font-bold text-zinc-900">
                Read the web address, not the headline
              </h2>
              <p className="mt-4 text-zinc-700 leading-relaxed">
                An authorized, free centre lives on a{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
                  dhamma.org
                </code>{" "}
                or{" "}
                <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-800">
                  vridhamma.org
                </code>{" "}
                subdomain. Northern California&apos;s centre, Dhamma Manda, is at{" "}
                <a
                  href="https://manda.dhamma.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-teal-700 underline"
                >
                  manda.dhamma.org
                </a>
                . Its registration form has no payment step, because the
                tradition accepts money only from people who have already
                finished a course. A paywall at the front door is structurally
                impossible. A paid lookalike, by contrast, lives on a commercial
                booking platform or a retreat aggregator and shows you a price, a
                nightly rate, and a Book Now button before you have done
                anything.
              </p>
            </div>
          </GlowCard>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Three checks, in order
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            If you want a quick triage for any local result that calls itself
            vipassana, run these in sequence. The first one settles it most of
            the time.
          </p>
          <div className="mt-6">
            <FlowDiagram
              title="Free authorized centre, or paid lookalike?"
              steps={[
                {
                  label: "Check the domain",
                  detail:
                    "On a dhamma.org or vridhamma.org subdomain? It is an authorized free centre. On a commercial booking site? It is not.",
                },
                {
                  label: "Check for a price",
                  detail:
                    "Any course fee or nightly rate shown means it is not a Goenka-tradition centre. The free course never lists a price.",
                },
                {
                  label: "Check the entry point",
                  detail:
                    "Free centres teach only inside a 10-day residential course. Hourly drop-in classes with a booking button are a different offering.",
                },
              ]}
            />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            What &quot;free&quot; actually covers
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            This is not free-in-the-freemium-sense, where the entry is free and
            the real cost shows up later. The line item for the whole stay is
            zero. When I first registered I kept waiting for the payment screen
            in the form, and it never came. You confirm your dates, you read the
            discipline you are agreeing to, and that is the end of it.
          </p>
          <div className="mt-8">
            <MetricsRow
              metrics={[
                {
                  value: 0,
                  prefix: "$",
                  label: "Tuition, food, and lodging for the 10 days",
                },
                {
                  value: 16,
                  label: "Dedicated centres across the US and Canada",
                },
                {
                  value: 0,
                  prefix: "$",
                  label: "Charged to a first-time student to attend",
                },
              ]}
            />
          </div>
          <p className="mt-6 text-zinc-700 leading-relaxed">
            The centre counts come from the{" "}
            <a
              href="https://www.vridhamma.org/United-States-and-Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              Vipassana Research Institute directory for the US and Canada
            </a>
            . The deeper question of who pays for it all, and why a first-timer
            is not even allowed to pre-pay, is its own story, which I wrote up in
            the{" "}
            <Link href="/t/vipassana-cost" className="text-teal-600 underline">
              full breakdown of what a course costs
            </Link>
            .
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Finding the free one nearest you
          </h2>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            There is no app that drops a pin on the closest centre the way a
            food-delivery app finds a restaurant. There are a few official tools
            instead. The{" "}
            <a
              href="https://www.dhamma.org/en-US/locations/directory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              dhamma.org directory
            </a>{" "}
            has a Closest Locations option that asks to enable location services
            and then orders sites by proximity. If you decline, it falls back to
            the worldwide list grouped by country. The{" "}
            <a
              href="https://www.vridhamma.org/Center-Search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              VRI Center-Search
            </a>{" "}
            lets you filter by country, province, and city, which is the closest
            thing to a structured address lookup.
          </p>
          <p className="mt-4 text-zinc-700 leading-relaxed">
            One honest warning, since &quot;near me&quot; sets the wrong
            expectation. Free centres are sparse and tend to sit on quiet rural
            land away from cities, so the nearest one may still be a multi-hour
            drive. That sounds like bad news and is not. Because you stay on site
            for the whole course, a centre three hours away costs you two drives
            total across ten days, not a daily commute. So the better move is to
            open the{" "}
            <a
              href="https://www.dhamma.org/en-US/courses/search"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              course search
            </a>
            , look at open dates first, and work back to a location from there. I
            go deeper on choosing between two centres in the{" "}
            <Link href="/guide/find-a-retreat" className="text-teal-600 underline">
              find-a-retreat guide
            </Link>
            , and on the locator details in the{" "}
            <Link
              href="/t/vipassana-meditation-centre-near-me"
              className="text-teal-600 underline"
            >
              centre-near-me walkthrough
            </Link>
            .
          </p>
          <p className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm italic text-zinc-600">
            I am not a teacher and do not represent the tradition. These are my
            own notes from sitting and serving courses. For anything about how
            the practice works, or any operational question about a specific
            course, the authoritative sources are{" "}
            <a
              href="https://www.dhamma.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 underline"
            >
              dhamma.org
            </a>{" "}
            and an authorized assistant teacher at a 10-day course.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Found a free centre, worried about keeping the practice after?"
          description="If you want a peer to compare notes with on building a daily sit once the course ends, book a short call and I will point you at the practice-buddy matching."
        />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Questions people actually ask
          </h2>
          <div className="mt-4">
            <FaqSection items={faqItems} />
          </div>
        </section>

        <div className="mt-12">
          <RelatedPostsGrid title="Keep reading" posts={relatedPosts} />
        </div>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sat a course or about to? Compare notes on daily practice."
      />
    </article>
  );
}
