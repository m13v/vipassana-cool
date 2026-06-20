import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  FlowDiagram,
  RemotionClip,
  NumberTicker,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/pagoda-gorai";
const PUBLISHED = "2026-06-20";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";
const PAGODA_URL = "https://www.globalpagoda.org/";
const PATTANA_URL = "https://pattana.vridhamma.org/how-to-reach";
const DHAMMA_URL = "https://www.dhamma.org";

export const metadata: Metadata = {
  title: "Pagoda Gorai: The Global Vipassana Pagoda, and the Course Centre Next to It",
  description:
    "The pagoda at Gorai is the Global Vipassana Pagoda, a free public monument in Borivali West, Mumbai, open daily 9am to 7pm. Most guides miss that the same campus also holds Dhamma Pattana, where real 10-day Vipassana courses run. Here is the difference, and which one you actually want. Verified 2026-06-20.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pagoda Gorai: two places on one campus",
    description:
      "The Global Vipassana Pagoda is a free monument anyone can visit. Dhamma Pattana, next door, is where 10-day courses run. They are not the same thing.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pagoda Gorai: the monument vs the course centre",
    description:
      "A 280-foot pillarless stone dome that seats 8,000, plus the residential centre next to it. What a meditator should know before going.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Pagoda Gorai" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Pagoda Gorai", url: PAGE_URL },
];

const ferrySteps = [
  {
    label: "Borivali Station (West)",
    detail:
      "Take the local train or metro to Borivali, then a bus or auto-rickshaw to Gorai Creek. This is the route most day visitors and course participants use.",
  },
  {
    label: "Gorai Creek jetty",
    detail:
      "Board the ferry across the creek to Gorai Village jetty. The crossing is short and cheap, roughly Rs. 15 each way per the centre's own directions.",
  },
  {
    label: "Gorai Village jetty",
    detail:
      "From the jetty, an auto-rickshaw runs the last stretch to the campus gate, about Rs. 100. You arrive next to EsselWorld.",
  },
  {
    label: "Campus gate",
    detail:
      "Inside the gate sit two different things: the Pagoda monument and the Dhamma Pattana course centre. The alternative dry route is Bhayandar Station, then MBMT bus route 4 straight to the campus.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "What is the pagoda at Gorai called?",
    a: "It is the Global Vipassana Pagoda, on a campus next to EsselWorld in Gorai Village, Borivali West, Mumbai 400091. People shorten it to the Gorai pagoda or the Mumbai Vipassana pagoda, but the official name is the Global Vipassana Pagoda.",
  },
  {
    q: "Can anyone visit the Global Vipassana Pagoda, and is there an entry fee?",
    a: "Yes. The monument is open to the public on all days from 9am to 7pm, and there is no entry charge. International visitors are asked to carry identity proof. Donations are voluntary. This is according to the pagoda's own visitor information at globalpagoda.org.",
  },
  {
    q: "Is the Gorai pagoda where you do a 10-day Vipassana course?",
    a: "No, and this is the part most travel articles skip. The 10-day residential courses run at Dhamma Pattana, a separate meditation centre inside the same campus. You apply to a course there through the Goenka-tradition registration system; you do not just turn up. The monument and the course centre share a campus but are different in purpose and access.",
  },
  {
    q: "What is the free Anapana session people mention at the pagoda?",
    a: "The pagoda offers visitors a short, free introductory Anapana sitting near the relics, open to anyone aged ten and above, running through the day. It is an introduction, not a course. For learning the full method you are pointed to a 10-day residential course and to dhamma.org; the technique itself is only taught inside those courses by an authorised teacher.",
  },
  {
    q: "Why is the dome such a big deal architecturally?",
    a: "It is the world's largest stone dome built without supporting pillars, 280 feet across inside, more than three times the span of the Gol Gumbaz in Bijapur which was the previous record holder at 90 feet. The hall under it seats about 8,000 meditators, which makes it the largest meditation hall of its kind in the world.",
  },
  {
    q: "How do you actually get to Gorai?",
    a: "Most people reach Borivali Station West, go to Gorai Creek, and take the ferry across to Gorai Village jetty, then an auto-rickshaw to the campus. There is also a dry-land option: Bhayandar Station, then MBMT bus route 4 to the pagoda. Course participants at Dhamma Pattana get exact directions when they register.",
  },
  {
    q: "What does the pagoda have to do with Myanmar?",
    a: "Its shape copies the Shwedagon Pagoda in Yangon, Myanmar. The tradition that built it traces its lineage back to Myanmar, where this style of Vipassana was preserved, so the form is a gesture of gratitude rather than a coincidence of design.",
  },
];

export default function PagodaGoraiPage() {
  return (
    <article className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline:
                "Pagoda Gorai: The Global Vipassana Pagoda, and the Course Centre Next to It",
              description:
                "The pagoda at Gorai is the Global Vipassana Pagoda, a free public monument open daily 9am to 7pm. The same campus also holds Dhamma Pattana, where 10-day Vipassana courses run. Here is the difference and which one you want.",
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
          __html: JSON.stringify(faqPageSchema(faqs, `${PAGE_URL}#faq`)),
        }}
      />

      <div className="mx-auto max-w-3xl px-5 pt-10 pb-24">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium uppercase tracking-wider text-teal-600">
            Gorai, Mumbai
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Pagoda Gorai: one campus, two completely different places
          </h1>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="7 min read"
          />
        </header>

        {/* Direct answer callout */}
        <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-06-20)
          </p>
          <p className="mt-3 text-lg leading-relaxed text-zinc-800">
            The pagoda at Gorai is the{" "}
            <span className="font-semibold text-zinc-900">
              Global Vipassana Pagoda
            </span>
            , a free public monument inside the campus next to EsselWorld in Gorai
            Village, Borivali West, Mumbai 400091. It is open{" "}
            <span className="font-semibold text-zinc-900">
              every day from 9am to 7pm
            </span>{" "}
            with no entry fee. The same campus also holds a separate building,{" "}
            <span className="font-semibold text-zinc-900">Dhamma Pattana</span>,
            where residential 10-day Vipassana courses run. They are not the same
            thing, and figuring out which one you want is the whole point of this
            page.
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Source:{" "}
            <a
              href={PAGODA_URL}
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              globalpagoda.org
            </a>
            .
          </p>
        </div>

        <RemotionClip
          title="Pagoda Gorai"
          subtitle="What the maps pin actually covers"
          accent="teal"
          captions={[
            "One campus next to EsselWorld in Gorai",
            "A free public monument: the Global Vipassana Pagoda",
            "A separate course centre: Dhamma Pattana",
            "Tourists want the first. Meditators usually want the second.",
          ]}
        />

        {/* The split */}
        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            The thing every guide blurs together
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            Search the Gorai pagoda and almost every result reads the same way:
            hours, ticket price (there is none), how to take the ferry, a few
            photos of a giant golden dome. All true. But they treat the place as a
            single attraction, and it is not. On that one campus there are two
            distinct operations with different rules, different purposes, and a
            different answer to the question &ldquo;can I go?&rdquo;
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                The monument
              </p>
              <h3 className="mt-2 text-xl font-semibold text-zinc-900">
                Global Vipassana Pagoda
              </h3>
              <ul className="mt-4 space-y-3 text-zinc-700">
                <li>Open to anyone, daily 9am to 7pm, no fee.</li>
                <li>You walk in, see the dome and the relics, and leave.</li>
                <li>
                  A short, free Anapana introduction is offered to visitors near
                  the relics.
                </li>
                <li>This is the sightseeing answer. A few hours, no commitment.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                The course centre
              </p>
              <h3 className="mt-2 text-xl font-semibold text-zinc-900">
                Dhamma Pattana
              </h3>
              <ul className="mt-4 space-y-3 text-zinc-700">
                <li>A separate building on the same campus.</li>
                <li>Where the residential 10-day courses actually run.</li>
                <li>You apply ahead of time; you cannot just turn up to sit.</li>
                <li>
                  This is the answer if you want to learn or deepen the practice,
                  not photograph it.
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-zinc-600">
            I have sat six courses across three centres in California, and the
            split at Gorai mirrors something true everywhere in this tradition: the
            building people admire from outside is not the thing the tradition is
            actually about. Not a teacher, just a fellow student noting where the
            confusion tends to land.
          </p>
        </section>

        {/* Anchor fact: the dome numbers */}
        <section className="mt-14 rounded-2xl border border-zinc-200 bg-zinc-50 p-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Why the dome is genuinely a record holder
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            The monument is not just large for a meditation hall. It is the
            world&apos;s largest stone dome built with no supporting pillars
            holding up its centre. The previous record, the Gol Gumbaz in Bijapur,
            spans 90 feet. This one spans 280.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
            <div className="rounded-xl bg-white border border-zinc-200 p-5 text-center">
              <div className="text-3xl font-bold text-teal-600">
                <NumberTicker value={280} suffix=" ft" />
              </div>
              <p className="mt-1 text-sm text-zinc-600">inner dome diameter</p>
            </div>
            <div className="rounded-xl bg-white border border-zinc-200 p-5 text-center">
              <div className="text-3xl font-bold text-teal-600">
                <NumberTicker value={8000} />
              </div>
              <p className="mt-1 text-sm text-zinc-600">seats in the hall</p>
            </div>
            <div className="rounded-xl bg-white border border-zinc-200 p-5 text-center">
              <div className="text-3xl font-bold text-teal-600">
                <NumberTicker value={325} suffix=" ft" />
              </div>
              <p className="mt-1 text-sm text-zinc-600">tall, about 30 storeys</p>
            </div>
            <div className="rounded-xl bg-white border border-zinc-200 p-5 text-center">
              <div className="text-3xl font-bold text-teal-600">
                <NumberTicker value={2.5} decimals={1} suffix="M" />
              </div>
              <p className="mt-1 text-sm text-zinc-600">tons of stone used</p>
            </div>
          </div>

          <p className="mt-7 text-base leading-relaxed text-zinc-700">
            A few more verifiable details, since the round numbers travel further
            than the specifics: bone relics of the Buddha were enshrined in the
            central locking stone of the dome on 29 October 2006, brought from the
            stupa at Bhattiprolu in Guntur district, Andhra Pradesh. The monument
            was inaugurated on 8 February 2009. Its silhouette copies the Shwedagon
            Pagoda in Yangon, Myanmar, a nod to the country that preserved this
            line of practice. And the entire structure was funded by voluntary
            donations, no ticketing, no commercial sponsor. You can cross-check all
            of this on the{" "}
            <a
              href="https://www.globalpagoda.org/facts-and-figures"
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              pagoda&apos;s own facts and figures page
            </a>
            .
          </p>
        </section>

        {/* Getting there */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Getting to the campus
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            The part of the trip people remember is the ferry. Gorai sits across a
            creek, so the common route ends with a short boat crossing. Here is the
            sequence most visitors follow, taken from the centre&apos;s own
            directions.
          </p>

          <div className="mt-6">
            <FlowDiagram title="The usual ferry route" steps={ferrySteps} />
          </div>

          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            If you would rather skip the boat, there is a dry route: take a local
            train to Bhayandar Station and board MBMT bus route 4, which runs to
            the pagoda. Full course-day logistics for Dhamma Pattana are sent to
            you when you register, including timing so you arrive before the course
            opens. The centre&apos;s reach-us details live at{" "}
            <a
              href={PATTANA_URL}
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              pattana.vridhamma.org
            </a>
            .
          </p>
        </section>

        {/* Which one do you want */}
        <section className="mt-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            So which one do you actually want?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            If you are planning a day out in Mumbai, want to see something
            extraordinary, and are curious about meditation without committing to
            anything, the monument is the answer. Go between 9am and 7pm, walk the
            grounds, take the free short Anapana introduction near the relics, and
            leave the same evening. That is the version most people searching for
            the Gorai pagoda are picturing, and it is a good day.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-700">
            If what you actually want is to learn the practice, or to come back to
            it, the monument is the wrong door. The technique is taught only inside
            the residential 10-day course at Dhamma Pattana, by an authorised
            teacher, and you have to apply ahead. For anything operational, how to
            sit, what the days involve, how to work with what comes up, the honest
            pointer is to a 10-day course and to{" "}
            <a
              href={DHAMMA_URL}
              className="text-teal-700 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              dhamma.org
            </a>
            , not a guide page. I do not teach the method here and neither should
            any website; that is the tradition&apos;s line, and it is a good one.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Planning your first course after seeing the pagoda?"
          description="If visiting Gorai nudged you toward sitting a real 10-day course, book a quick call and I will share what helped me through my first one, peer to peer."
        />

        <div className="mt-14">
          <FaqSection items={faqs} heading="Pagoda Gorai: common questions" />
        </div>

        <div className="mt-14">
          <RelatedPostsGrid
            title="Keep reading"
            subtitle="If the course centre, not the monument, is what you are after"
            posts={[
              {
                title: "How to find a Vipassana retreat near you",
                href: "/guide/find-a-retreat",
                excerpt:
                  "Using the official dhamma.org directory to locate centres and dated courses worldwide.",
                tag: "Guide",
              },
              {
                title: "First course tips",
                href: "/guide/first-course-tips",
                excerpt:
                  "What I wish I had known before my first 10-day course, from someone who has now sat six.",
                tag: "Guide",
              },
              {
                title: "Meditation centre near me",
                href: "/t/meditation-centre-near-me",
                excerpt:
                  "Why a Vipassana centre is a different category from a drop-in studio, and the tool that finds the nearest one.",
                tag: "Guide",
              },
            ]}
          />
        </div>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Visited the pagoda and curious about a real course? Book a peer call."
      />
    </article>
  );
}
