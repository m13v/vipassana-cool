import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  AnimatedChecklist,
  HorizontalStepper,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/vipassana-montebello";
const PUBLISHED = "2026-06-17";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

const SUTTAMA = "https://suttama.dhamma.org/";
const SUTTAMA_CENTRE = "https://suttama.dhamma.org/the-centre-near-montebello/";
const SUTTAMA_DIRECTIONS =
  "https://suttama.dhamma.org/the-centre-near-montebello/direction-to-the-centre/";
const SUTTAMA_SCHEDULE = "https://www.dhamma.org/en/schedules/schsuttama";
const CODE_OF_DISCIPLINE = "https://www.dhamma.org/en/about/code";
const VADDHANA = "https://vaddhana.dhamma.org/";
const MAHAVANA = "https://mahavana.dhamma.org/";
const DHAMMA_ORG = "https://www.dhamma.org/";

export const metadata: Metadata = {
  title:
    "Vipassana near Montebello: it is Dhamma Suttama in Québec (not Montebello, California)",
  description:
    "Search 'vipassana montebello' and you mean Dhamma Suttama, the Québec Vipassana Centre at 810 Côte Azélie, Notre-Dame-de-Bonsecours, Montebello QC J0V 1L0, 5 km north of Montebello off Highway 50 exit 210. Free 10-day residential courses in the S.N. Goenka tradition, English and French, apply online only. Where it is, what the campus actually is (a former high school), the drive, and the Montebello QC vs Montebello CA mix-up cleared up. Verified 17 June 2026.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Montebello is Dhamma Suttama, in Québec",
    description:
      "The center 'vipassana montebello' points to is Dhamma Suttama, 5 km north of Montebello, Québec, halfway between Montréal and Ottawa. Address, the drive, and how the campus and registration actually work.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Montebello: which center, where, and the CA mix-up",
    description:
      "Dhamma Suttama sits on a 600-acre former high school north of Montebello, Québec. Not Montebello, California. Verified June 2026.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Vipassana near Montebello" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Vipassana near Montebello", url: PAGE_URL },
];

const campusCards = [
  {
    title: "A 600-acre former high school",
    description:
      "The center is not a purpose-built ashram. It sits on a 600-acre property that was a private co-educational high school, with its main building constructed in 1981.",
    size: "2x1" as const,
  },
  {
    title: "Two halls inside the old gym",
    description:
      "The two meditation halls were set up on the first and second floors of the former gymnasium complex, which was constructed in 2008.",
  },
  {
    title: "About 75 students per hall",
    description:
      "Each hall holds roughly 75 students, so the campus runs courses for around 150 people at a time across both halls.",
  },
  {
    title: "Residences, a farm, a barn",
    description:
      "Beyond the main building's dining areas and professional kitchen, the grounds include five separate residences, a farm with two houses, a barn, a garage, and a workshop.",
    size: "2x1" as const,
  },
];

const driveSteps = [
  {
    title: "Highway 50",
    description:
      "From Montréal (Hwy 15 North, exit 35, then Hwy 50 West) or from Ottawa/Gatineau (Hwy 50 East toward Maniwaki/Montréal), everyone funnels onto Highway 50.",
  },
  {
    title: "Exit 210",
    description:
      "Take exit 210 toward Montebello / Mont-Tremblant. This is the single exit the center routes everyone through.",
  },
  {
    title: "QC-323 North",
    description:
      "Turn right onto QC-323 North. Pass Parc Omega on your left and Côte Ezilda on your right.",
  },
  {
    title: "Côte Azélie, 2 km",
    description:
      "Immediately after, turn right onto Côte Azélie at the bend, then go 2 km to the center at 810 Côte Azélie.",
  },
];

const sharedItems = [
  { text: "Ten-day residential courses are the entry format; you stay on site the whole time.", checked: true },
  { text: "Run entirely on donations: no charge for the course, food, or accommodation.", checked: true },
  { text: "Noble silence for the first nine days, with men and women fully segregated.", checked: true },
  { text: "The same five-precept code of discipline applies at every center worldwide.", checked: true },
  { text: "Application is online only; a confirmation email, not a payment, secures the seat.", checked: true },
  { text: "Taught in the lineage of Sayagyi U Ba Khin, as presented by S.N. Goenka.", checked: true },
];

const faqs: FaqItem[] = [
  {
    q: "Where exactly is the Vipassana center near Montebello?",
    a: "It is the Vipassana Meditation Centre Dhamma Suttama, also called the Québec Vipassana Centre. The address is 810 Côte Azélie, Notre-Dame-de-Bonsecours, Montebello (Québec) J0V 1L0, about 5 km north of the village of Montebello and roughly halfway between Montréal and Ottawa/Gatineau. You reach it off Highway 50 at exit 210. Phone (514) 481-3504.",
  },
  {
    q: "Is this Montebello, Québec or Montebello, California?",
    a: "Québec. The center that 'vipassana montebello' points to is Dhamma Suttama, near Montebello in Québec, Canada. There is also a city called Montebello in Los Angeles County, California, but it has no center in this tradition. If you are in the Los Angeles area, the nearest Goenka-tradition centers are Dhamma Vaddhana (the Southern California Vipassana Center in Twentynine Palms, near Joshua Tree) and Dhamma Mahavana (the California Vipassana Center in North Fork, in the central part of the state).",
  },
  {
    q: "What does the name Dhamma Suttama mean?",
    a: "Dhamma Suttama is a Pali name meaning 'the best of Dhamma.' Like every center in this tradition, the local Vipassana center carries both a regional name (the Québec Vipassana Centre) and a Pali Dhamma name.",
  },
  {
    q: "How much does a course at Dhamma Suttama cost?",
    a: "Nothing is charged for the course itself, the food, or the accommodation. Courses run purely on donations from people who have completed a course and want to give others the same opportunity. You are only invited to give, if you wish, after you have sat a full course, and only to the extent you feel moved to.",
  },
  {
    q: "How do I register for a course there?",
    a: "Applications are online only. Open the Dhamma Suttama course schedule at dhamma.org/en/schedules/schsuttama, pick convenient dates, and submit the application form. The reply comes by email to the address you entered. There are no walk-ins, and a confirmation email is what gets you in.",
  },
  {
    q: "Are courses at Montebello taught in English or French?",
    a: "The Québec center serves both the Montréal and Ottawa/Gatineau regions, and its public pages are presented in English and French. Course-language details vary by date, so check the specific course on the online schedule before you apply.",
  },
  {
    q: "How big is the center and how many people can sit at once?",
    a: "The property is about 600 acres. Two meditation halls were built inside the former gymnasium complex, each holding roughly 75 students, so a course can run for around 150 people across both halls. The grounds also include five separate residences, a farm with two houses, a barn, a garage, and a workshop.",
  },
];

const relatedPosts = [
  {
    title: "First course tips",
    href: "/guide/first-course-tips",
    excerpt:
      "What a first ten-day sit is actually like, from someone who has done six, so the logistics here are not the only thing you walk in knowing.",
    tag: "Experience",
  },
  {
    title: "Find a retreat",
    href: "/guide/find-a-retreat",
    excerpt:
      "How to think about choosing a center and a date in this tradition, wherever you are in the world.",
    tag: "Logistics",
  },
  {
    title: "Vipassana in Rajkot",
    href: "/t/vipassana-rajkot",
    excerpt:
      "A sibling location note, for the centre serving Rajkot, where the address most directories print is out of date.",
    tag: "Location",
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
                "Vipassana near Montebello: it is Dhamma Suttama in Québec",
              description:
                "The center 'vipassana montebello' points to is Dhamma Suttama, the Québec Vipassana Centre, 5 km north of Montebello, Québec, off Highway 50 exit 210. Address, campus, the drive, and how donation-funded 10-day courses and online registration work.",
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
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="mx-auto max-w-3xl px-5 py-10">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mt-6">
          <p className="text-sm font-medium text-teal-700">
            Montebello, Québec, Canada
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Vipassana near Montebello is Dhamma Suttama, and it is in Québec
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            When people search for Vipassana at Montebello they almost always
            mean one place: Dhamma Suttama, the Québec Vipassana Centre, sitting
            on a 600-acre former high school north of the village of Montebello,
            halfway between Montréal and Ottawa. There is also a Montebello in
            California, which trips up some searches, so this page pins down
            exactly which center this is, where it sits, and what the campus and
            courses actually are.
          </p>
          <ArticleMeta
            author="Matthew Diakonov"
            authorRole="Written with AI"
            datePublished={PUBLISHED}
            readingTime="6 min read"
          />
        </header>

        <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Direct answer &middot; verified 17 June 2026
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The Vipassana center near Montebello is the{" "}
            <strong className="text-zinc-900">
              Vipassana Meditation Centre Dhamma Suttama
            </strong>{" "}
            (the Québec Vipassana Centre), at{" "}
            <strong className="text-zinc-900">
              810 Côte Azélie, Notre-Dame-de-Bonsecours, Montebello (Québec) J0V
              1L0
            </strong>
            , about 5 km north of Montebello, off Highway 50 at{" "}
            <strong className="text-zinc-900">exit 210</strong>. It holds free,
            donation-funded 10-day residential courses in the tradition of S.N.
            Goenka, and you apply online only at{" "}
            <a
              href={SUTTAMA_SCHEDULE}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhamma.org/en/schedules/schsuttama
            </a>
            . Phone: (514) 481-3504.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Source:{" "}
            <a
              href={SUTTAMA_CENTRE}
              className="text-teal-700 underline underline-offset-2"
            >
              suttama.dhamma.org
            </a>
            . This page covers location, logistics, and lineage, never
            technique; for how to practise, the sources are{" "}
            <a
              href={DHAMMA_ORG}
              className="text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>{" "}
            and an authorized teacher at a course.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Which Montebello: Québec, not California
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            This is the first thing worth settling, because two different
            Montebellos intercept the same search. The center in this tradition
            is in Montebello, Québec, a village on the Ottawa River in the
            Outaouais region, roughly halfway along Highway 50 between Montréal
            and Ottawa/Gatineau. The center itself sits about 5 km north of the
            village.
          </p>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            There is also a Montebello in Los Angeles County, California. It has
            no center in this tradition. If that is the Montebello you had in
            mind, the two nearest Goenka-tradition centers are{" "}
            <a
              href={VADDHANA}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Dhamma Vaddhana
            </a>
            , the Southern California Vipassana Center in Twentynine Palms near
            Joshua Tree, and{" "}
            <a
              href={MAHAVANA}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Dhamma Mahavana
            </a>
            , the California Vipassana Center in North Fork in the central part
            of the state. Neither is in the city of Montebello, but both serve
            California meditators.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            What the campus actually is
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Most centers in this tradition were either built from scratch or
            grew out of donated farmland. Dhamma Suttama is unusual: the whole
            place is a converted school. The property was a private co-educational
            high school, and the meditation halls you sit in were a gymnasium.
            These are the kind of specifics you only find on the center&rsquo;s
            own page, and they tell you the campus was built to house full
            ten-day cohorts, not drop-in classes.
          </p>
          <div className="mt-6">
            <BentoGrid cards={campusCards} />
          </div>
          <p className="mt-5 text-zinc-600 leading-relaxed">
            The Québec center carries forward the mission of an earlier center
            in Sutton, established in 1999. The Montebello property was purchased
            in February 2011 and has been built out since, which is why some
            older listings still point at the Sutton location.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            Getting there off Highway 50
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            The center publishes a short landmark route rather than just a map
            pin, and from either city it converges on the same exit. The last
            move is the easy one to miss, so it is worth reading once before the
            morning a course starts.
          </p>
          <div className="mt-6">
            <HorizontalStepper title="To the gate at 810 Côte Azélie" steps={driveSteps} />
          </div>
          <p className="mt-5 text-zinc-600 leading-relaxed">
            Full turn-by-turn directions from both Montréal and Ottawa/Gatineau
            are on the center&rsquo;s own{" "}
            <a
              href={SUTTAMA_DIRECTIONS}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              directions page
            </a>
            . Confirm them against your confirmation email, since access notes
            can change between courses.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            How Montebello fits the wider network
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            I have sat six 10-day courses, all of them in California, none at
            Dhamma Suttama. The reason I can still describe what a course there
            is shaped like is that the format does not change between centers.
            The building is a former gym in Québec instead of a hall in the
            Sierra foothills, but the structure of the days, the discipline, and
            the funding model are identical across the tradition. That is the
            part worth knowing if you are weighing Montebello against any other
            center.
          </p>
          <div className="mt-6">
            <AnimatedChecklist
              title="Identical at Montebello and every other center in the tradition"
              items={sharedItems}
            />
          </div>
          <p className="mt-5 text-zinc-600 leading-relaxed">
            The single code of discipline that every student agrees to is
            published in full at{" "}
            <a
              href={CODE_OF_DISCIPLINE}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              dhamma.org
            </a>
            . Reading it before you apply is the most useful preparation, because
            it is the same whether you sit in Montebello, Twentynine Palms, or
            anywhere else.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            How a seat is secured
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Registration works the same way it does everywhere in this
            tradition. You open the{" "}
            <a
              href={SUTTAMA_SCHEDULE}
              className="font-medium text-teal-700 underline underline-offset-2"
            >
              Dhamma Suttama course schedule
            </a>
            , choose dates that work, and submit the online application. The
            reply comes by email to the address you entered, and that
            confirmation is what gets you through the gate. There are no
            walk-ins, and there is nothing to pay up front. Popular dates fill,
            so it is worth watching the schedule a month or two ahead rather than
            applying the week before.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">
            One honest caveat about this page
          </h2>
          <p className="mt-3 text-zinc-600 leading-relaxed">
            Everything specific to Montebello here is logistics and history I
            verified from Dhamma Suttama&rsquo;s own pages on 17 June 2026, not a
            review of the food, the rooms, or the cushions, because I have never
            sat there. Addresses, schedules, and access notes change, and the
            center is clearly still building out the old school, so treat the
            dated online schedule as the live source and this page as the map
            that gets you to it. For anything about the sitting itself,
            dhamma.org and the assistant teacher at the course are the only
            authorities.
          </p>
        </section>

        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Sitting your first course soon, near Montebello or anywhere?"
          description="If you want to talk through keeping a daily practice alive after the ten days, or being paired with another meditator for accountability, book a short call."
        />

        <section className="mt-12">
          <FaqSection items={faqs} heading="Vipassana near Montebello: common questions" />
        </section>

        <section className="mt-12">
          <RelatedPostsGrid
            title="Keep reading"
            posts={relatedPosts}
          />
        </section>
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Building a daily sit after a course? Get paired with a practice buddy."
      />
    </article>
  );
}
