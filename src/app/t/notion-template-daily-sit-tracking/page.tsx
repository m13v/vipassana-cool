import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedCodeBlock,
  BentoGrid,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@m13v/seo-components";

const PAGE_URL = "https://vipassana.cool/t/notion-template-daily-sit-tracking";
const PUBLISHED = "2026-05-09";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Notion template for daily sit tracking: count the columns, then remove them",
  description:
    "Most Notion meditation trackers ship 8 to 12 columns: duration, technique, mood before, mood after, location, insights, streak, posture. Vipassana.cool ships a paper sheet with zero columns at /daily-sit-log/print. A column-by-column walk through what each field quietly trades, plus a 2-column Notion database for anyone who still wants Notion.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Notion template for daily sit tracking: count the columns, then remove them",
    description:
      "A Notion template is a stack of columns. The site's paper sheet has zero. A column-by-column walk through what every Notion meditation template tracks, what each field costs the practice, and a 2-column Notion database that mirrors the paper sheet.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Notion template for daily sit tracking: count the columns, then remove them",
    description:
      "Most Notion meditation templates ship 8 to 12 columns. The site's paper sheet ships zero. A walk through both.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Does vipassana.cool ship a Notion template for daily sit tracking?",
    a: "No. The site ships one tracker-shaped surface, and it is paper. A printable one-page sheet at /daily-sit-log/print, 366 squares, AM and PM split by a diagonal line, four rules in the footer, and not a single fillable field beyond the binary mark of 'I sat'. There is no Notion template, no Notion database export, no Notion duplicate link. The decision to publish a paper sheet rather than a Notion database is the whole argument of this page. If you still want Notion (it is your phone, your tool, your call), the minimum-viable analogue of the paper sheet is two columns: a Date property and a checkbox. Everything beyond those two is a deliberate departure from the paper sheet, and the rest of this page walks through what each extra column quietly trades.",
  },
  {
    q: "What columns do most Notion meditation trackers ship with?",
    a: "Verified by surveying the top results on Notion's official template marketplace and the leading roundup pages on 2026-05-09 (Simply Still, 30 Days of Calm, Meditation Tracker, Mindfulness Tracker 2026, Atmos Meditation Journal, Mindfulness Meditation 40-Day). The recurring property set is: Date, Duration in minutes, Technique or Type, Time of Day, Location, Mood Before (1 to 10 or emoji scale), Mood After, Insights or Notes, Distractions, Posture, Streak (formula or rollup), and a Tag or Theme. Most templates also add a Calendar view, a Gallery view of past sessions, and a Progress chart. The aesthetic templates add cover images and stickers. The feature-rich templates add a meditation library, audio embeds, and a 'favorite tracks' relation. The body of this page walks through nine of those columns in order and asks what each one costs the practice for an old student of a Goenka-style course.",
  },
  {
    q: "Why does the site argue against Notion-style tracking?",
    a: "The shorter version is that the tradition this site sits in (Goenka-style 10-day courses, old students returning to a daily sit) treats the sit as a private act between the practitioner and the technique. A column structure that records duration, technique, mood, posture, and insights creates an audience for the act, even if the only audience is your future self at the end of the week reviewing the database. The act starts to be performed for the record, and the record begins to drift from the act. The longer version is that any field you fill in after the sit is a self-report, and the social cost of marking a missed day or a low-mood day starts to outweigh the cost of editing the row. The number stops being a measurement and becomes a relationship. The paper sheet at /daily-sit-log/print is the structural answer to that drift: there is nowhere on the sheet to record duration, mood, or insight, so there is nowhere for the drift to land.",
  },
  {
    q: "If I still want a Notion template, what is the minimum honest version?",
    a: "Two columns. Date (a Date property) and Sat (a Checkbox property). Optional third column: Notes (a Text property), used only for non-sit context (sick, traveled, deliberately rested). That is it. No Duration column. No Mood Before or Mood After. No Technique field. No Streak rollup. No Calendar view that color-codes by 'consistency score'. The point of the two-column version is that it transcribes the paper sheet to Notion without re-introducing the metric layer the paper sheet was designed to remove. If two columns feel too thin to be a 'template', that feeling is the page's whole argument compressed into one reaction. The full schema and a copy-pasteable structure are in the body of this page.",
  },
  {
    q: "What about a streak counter? Doesn't a streak help?",
    a: "It helps in the first month, when the practice is fragile and motivation is doing most of the work. It quietly hurts in years two and three, when motivation has dropped and what is left has to carry the practice on its own. A streak counter creates a binary cliff: 87 days, 88 days, 89, then a missed day and the number resets to 0. The cliff teaches the practitioner that the missed day was a kind of failure, and the practice over time becomes about protecting the streak rather than about sitting. The fourth rule on the printable sheet says 'missing a day is not failure, stopping is'. A streak counter encodes the opposite. If you must add a count to the Notion template, count total days marked rather than consecutive days. The number can only go up.",
  },
  {
    q: "What is at /daily-sit-log/print, in detail?",
    a: "A single 123-line React component. Twelve rows for the months, 31 columns for days, February hard-coded to 29 cells so leap years render correctly without a date library. Each cell is a square split by a diagonal line so the upper-left half can be marked AM and the lower-right PM. The footer has four rules: mark after you sit not before, no colors no metrics no streak, missing a day is not failure stopping is, keep this page somewhere you will see it. The page sets @page size Letter portrait, margin 0.5 inches in CSS so Cmd+P or Ctrl+P saves the whole year on one printed sheet. The header has space for a name and a year. The whole file is in the public repo at github.com/m13v/vipassana-cool under src/app/daily-sit-log/print/page.tsx.",
  },
  {
    q: "What about Notion's calendar view, charts, and rollups?",
    a: "All of them are reasons to remove a column you do not need, not reasons to add one. A Calendar view that shows a green dot on every sat day is mostly equivalent to the paper sheet, and there is nothing wrong with it; the decision is whether the dot is binary or whether it encodes duration or mood by color and saturation. A Progress chart based on Duration in minutes is the most common addition and the one most likely to drift the practice toward 'longer is better', which is not what the technique is about. A Streak rollup formula is the most common addition with the strongest negative pull, for the reasons in the streak FAQ above. A Calendar plus a binary checkbox plus the rule 'never review the calendar with the goal of optimizing it' is the closest Notion gets to the paper sheet's structural honesty.",
  },
  {
    q: "Is this anti-Notion? Anti-tooling?",
    a: "Neither. Notion is a fine tool. The argument is narrower: a Notion template for a meditation sit is a stack of columns, and the columns the popular templates ship are subtractive from the practice for the kind of practitioner this site is for. If you sit because you like data and the data makes you sit more, your situation is different and the off-the-shelf templates may serve you well. The page exists for the practitioner who downloaded a 12-column meditation tracker on day 14 after their first course, filled it in for three weeks, then noticed the filling-in had become a separate ritual from the sitting. That practitioner is the audience. The recommendation is not to delete Notion. It is to delete the columns one at a time, and notice which deletions feel like a loss.",
  },
  {
    q: "What if I want operational guidance on how to actually sit?",
    a: "Not on this site, by design. Anything operational about the technique itself, how to handle a difficulty on the cushion, what to make of a sensation, how long to sit, when to sit, or whether your home practice is going correctly belongs with an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page restricts itself to the question of the tracking layer that wraps around a sit, which is a separate question from the sit itself.",
  },
  {
    q: "Where do I find the paper sheet and the rest of the resources?",
    a: "The printable sheet is at /daily-sit-log/print, the practice-buddy matching service is at /practice-buddy, and the broader library of guides is under /t. The whole site is open source at github.com/m13v/vipassana-cool, including the schema for the daily sit log surfaces and the matching code that runs the buddy pairing. There is no app, no premium plan, no upgrade path. The one paid surface is the optional 30-minute call with the maintainer, which is linked at the bottom of every page.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Notion template for daily sit tracking" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Notion template for daily sit tracking", url: PAGE_URL },
];

const columnCards: BentoCard[] = [
  {
    title: "Duration in minutes",
    description:
      "The single most common second column. Drifts the practice toward 'longer is better' over months. The technique itself does not reward the longer sit.",
    size: "1x1",
  },
  {
    title: "Technique or Type",
    description:
      "Reasonable if you cross-train across traditions. For a Goenka old student returning to one technique, the column is filled in identically every row, which is a hint that it is not earning its place.",
    size: "1x1",
  },
  {
    title: "Mood Before / Mood After",
    description:
      "The two columns most likely to turn the sit into a self-evaluation exercise. The honest field becomes a record of how the sit felt, which is one layer away from being a record of the sit.",
    size: "1x1",
  },
  {
    title: "Location",
    description:
      "Useful exactly once: when you are figuring out where in the home a daily sit can survive. After that, fixed value. A note in the Notes column on the rare day you sat somewhere unusual is the same data, half the upkeep.",
    size: "1x1",
  },
  {
    title: "Insights or Notes",
    description:
      "The column whose drift is hardest to spot. A blank row starts to feel like a wasted sit, and the next sit gets done with the future blank cell in mind. The point of the technique is not to produce content for the cell.",
    size: "2x1",
  },
  {
    title: "Streak",
    description:
      "The fourth rule on the paper sheet says 'missing a day is not failure, stopping is'. A consecutive-day streak counter encodes the opposite. If you keep one number, count total days marked, not consecutive days. It can only go up.",
    size: "1x1",
  },
  {
    title: "Posture",
    description:
      "Cushion, chair, floor, bed. Useful on retreat for an authorized teacher; a self-tracked daily column will mostly read 'cushion' or 'chair' for a year and then disappear from the database with no harm done.",
    size: "1x1",
  },
  {
    title: "Distractions",
    description:
      "Encourages categorizing the contents of the mind during the sit. The technique trains a different relationship to those contents than 'log them in a Notion select field afterward'.",
    size: "1x1",
  },
  {
    title: "Calendar view + green dot",
    description:
      "The one auxiliary view that survives this audit unscathed, but only when the dot is binary. Color-graded by duration or mood is the column problem one layer up, in a different shape.",
    size: "1x1",
  },
];

const minimalNotionSchema = `# Daily sit log

A two-column Notion database that mirrors
/daily-sit-log/print, the paper sheet on this site.

## Properties

| Name  | Type     | Notes                                  |
|-------|----------|----------------------------------------|
| Date  | Date     | One row per calendar day                |
| Sat   | Checkbox | Checked after the sit, never before     |

## Optional third property

| Name  | Type     | Notes                                  |
|-------|----------|----------------------------------------|
| Notes | Text     | Non-sit context only: sick, traveled,   |
|       |          | deliberately rested. Never sit content. |

## Default views

- Table, sorted Date descending. The default.
- Calendar, Date as the date field, no color rule. Binary green dot.

## Properties to NOT add

- Duration (minutes)         drifts the practice toward longer
- Mood Before / Mood After   turns the sit into self-evaluation
- Technique                  fixed value for one-tradition practice
- Insights                   the cell starts producing the sit
- Streak (formula)           encodes the opposite of rule four

## The four rules from the paper sheet

1. Mark after you sit, not before.
2. No colors. No metrics. No streak.
3. Missing a day is not failure. Stopping is.
4. Keep this page somewhere you will see it.
`;

const relatedPosts = [
  {
    title: "Printable daily sit log (free, one page)",
    href: "/daily-sit-log/print",
    excerpt:
      "366 squares, AM and PM split by a diagonal, four rules, no streaks. Cmd+P or Ctrl+P prints the whole year on one sheet. The structural answer to every tracking question on this site.",
    tag: "Resource",
    readTime: "1 page",
  },
  {
    title: "Daily sit accountability tracker: three surfaces, none records the sit",
    href: "/t/daily-sit-accountability-tracker",
    excerpt:
      "The site has three tracker-shaped surfaces in code (the print sheet, a 16-line day counter, a calendar RSVP cron) and none of the three records whether you actually sat. The schema does not have a did_you_sit_today column.",
    tag: "Architecture",
    readTime: "9 min read",
  },
  {
    title: "Offline voice journal for daily sits: the question underneath the app question",
    href: "/t/offline-voice-journal-for-daily-sits",
    excerpt:
      "The same column-vs-no-column argument, but for audio. Apple Voice Memos passes the airplane-mode test; whether to journal the sit at all is the harder question.",
    tag: "Tooling",
    readTime: "8 min read",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Notion template for daily sit tracking: count the columns, then remove them",
    description:
      "A column-by-column walk through nine fields a typical Notion meditation tracker ships with, what each field quietly costs a Goenka-style daily practice, and a two-column Notion database that mirrors the printable paper sheet at /daily-sit-log/print.",
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

      <header className="max-w-4xl mx-auto px-6 pt-6 pb-4">
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
          Tooling, then the question underneath
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Notion template for daily sit tracking: count the columns, then remove them
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A Notion template is a stack of columns. Most meditation
          templates on the marketplace ship eight to twelve. This site
          ships a printable paper sheet with zero. The page walks the
          common columns in order, says what each one quietly trades,
          and offers a two-column Notion database that mirrors the paper
          sheet for anyone who would still rather have the log live in
          Notion than on a fridge. Written from inside a daily Goenka
          practice. Not a teacher, not a coach, just a peer with 945+
          unbroken days and six 10-day courses.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="9 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-09
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            Vipassana.cool does not ship a Notion template. The
            canonical tracker on this site is a one-page printable
            paper sheet at{" "}
            <Link
              href="/daily-sit-log/print"
              className="text-teal-700 underline hover:text-teal-900"
            >
              /daily-sit-log/print
            </Link>{" "}
            with 366 squares and zero metric columns. The closest
            faithful Notion analogue is a two-column database: a Date
            property and a Sat checkbox, with an optional third Notes
            field for non-sit context. If you want the off-the-shelf
            options, the official{" "}
            <a
              href="https://www.notion.com/templates/category/habit-tracking"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              Notion habit tracking marketplace
            </a>{" "}
            lists feature-rich templates from third parties. The
            argument of this page is that nearly every column those
            templates add is subtractive for a Goenka-style daily
            practice. Operational questions about the technique itself
            belong with an authorized assistant teacher at a 10-day
            course arranged through{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            , not in any tracker.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The shape of the argument
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A Notion template is a database with properties. The
          properties are columns. The columns are the entire argument
          the template is making about what is worth tracking, even
          when the template author would not put it that way. A
          template that ships Date, Duration, Technique, Mood Before,
          Mood After, Insights, Distractions, Posture, and Streak is
          telling the practitioner that those nine variables matter
          enough to be filled in after every sit. A template that
          ships Date and a checkbox is telling the practitioner that
          one variable matters: did you sit. The two templates are not
          a difference in feature richness. They are a difference in
          claim about the practice.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          This site has been running long enough to have an opinion
          about which claim ages well. The printable sheet at{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /daily-sit-log/print
          </Link>{" "}
          is the visible form of the opinion. 366 squares for one
          calendar year. AM and PM split by a diagonal line so each
          square holds two binary marks. A footer with four rules.
          Nowhere on the page is there a place to write a duration, a
          technique, a mood, or a number. The absence is the design.
          The page does not even include a streak counter or a
          highlighted column to show the current week. A practitioner
          who marks every square the same way for a year ends up with
          a year of identical marks, and the practice underneath the
          marks is what the year was actually about.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The rest of this page is a column-by-column walk through the
          nine fields the popular Notion templates ship with, what
          each one trades over months and years for a Goenka-style
          practitioner, and a paste-able two-column Notion structure
          that mirrors the paper sheet. The walk is opinionated and
          scoped narrowly to one tradition. If you sit in a different
          one, your column choices will reasonably differ.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The columns most templates ship, and what each one trades
        </h2>
        <p className="text-zinc-700 mb-2 max-w-3xl leading-relaxed">
          Surveyed against the top results on the official Notion
          marketplace and the leading roundup pages on 2026-05-09:
          Simply Still, 30 Days of Calm, Meditation Tracker,
          Mindfulness Tracker 2026, the Atmos Meditation Journal, and
          the Mindfulness Meditation 40-Day Tracker. The recurring
          property set is below. Each card is one column, what the
          template uses it for, and the cost of keeping it for a
          practitioner who is already past the first month.
        </p>
        <BentoGrid cards={columnCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A two-column Notion database that mirrors the paper sheet
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The smallest honest Notion analogue of{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /daily-sit-log/print
          </Link>{" "}
          is two properties. A Date and a Checkbox. The optional third
          is a Text field for non-sit context only. The schema below
          is the whole template; no premium tier, no relations, no
          rollup formulas, no progress charts. Copy it into a fresh
          Notion database, set the views, and stop adding columns.
          When the practice has carried for a year, the two-column
          version will not have aged into the wrong shape.
        </p>
        <AnimatedCodeBlock
          code={minimalNotionSchema}
          language="markdown"
          filename="daily-sit-log.notion.md"
          typingSpeed={4}
        />
        <p className="text-zinc-700 mt-4 max-w-3xl leading-relaxed">
          Two notes on the views. The default Table sorted Date
          descending is honest because the only thing it shows is
          which days have a check. The Calendar view is honest only
          when the date dot stays binary. A color rule that scales the
          dot by Duration or by Mood is the column problem dressed up
          as a visualization, and the recommendation against those
          columns extends to color rules built on properties you did
          not add for the same reason.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The streak column, in particular
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A consecutive-day streak counter is the most common addition
          to a meditation tracker and the addition with the strongest
          pull away from the practice. The mechanism is simple. After
          the streak passes some threshold, ten or thirty or a
          hundred days, the practitioner has a number worth
          protecting. The protection becomes the visible reason for
          the next sit. The number says nothing about the quality of
          the sit, only its existence; over time the practice
          optimizes for existence rather than quality. Then a missed
          day arrives, the counter resets to zero, and the missed day
          is felt as a loss of progress rather than a normal feature
          of a many-year practice.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The fourth rule printed on the paper sheet is the structural
          counter to this. Missing a day is not failure, stopping is.
          A streak counter encodes the inverse: a missed day is a
          full reset of all prior progress. If you must keep a single
          number anywhere in the database, count total days marked
          rather than consecutive days. It will only go up. It will
          accumulate without a cliff to defend. It is a different
          number with a different incentive.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          For most practitioners past the first month or two, the
          right number of numbers is zero. The grid of marks is
          enough.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Why every Notion template online has eight or more columns
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Three reasons, layered. The first is template-economic. A
          template with two columns is hard to sell or even to give
          away because the perceived value of a Notion template is
          proportional to the number of properties, views, formulas,
          and embedded blocks. A two-column database does not look
          like a template; it looks like a list. Marketplaces reward
          the appearance of comprehensiveness.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The second is generality. A template that works for many
          practitioners across many traditions has to include the
          union of all the properties any one of them might want.
          Yoga and Vipassana and TM and breathwork and a guided app
          subscription all live in the same template, which means
          Technique and Duration and Mood are along for the ride. The
          template is general because the audience is broad. The
          recommendation in this page is narrow because the audience
          is narrow: Goenka-style old students who already know the
          shape of their practice and want a tracking layer that does
          not redirect it.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The third is that template authors are not generally writing
          from inside a daily practice that has run for many years.
          The first month is when the practice most resembles a
          quantifiable habit, and the templates are calibrated to that
          first month. They are not wrong for the audience they
          serve. They are wrong for the audience this page is for.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What the site uses instead
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Three surfaces, all in the public repo at github.com/m13v/vipassana-cool.
          The printable sheet at{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /daily-sit-log/print
          </Link>{" "}
          is one component, 123 lines, no JavaScript date library, set
          to print on Letter portrait at 0.5 inch margins. A day
          counter component on the homepage reads from a constant in
          source and renders one number with a plus sign; it is not a
          tracker, it is a witness, and a reader can verify the
          constant in the file. A practice-buddy matching service at{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /practice-buddy
          </Link>{" "}
          pairs two old students whose preferred sit times in UTC fall
          within 60 minutes of each other and creates a recurring
          Google Calendar event with a Meet link, which is the
          accountability layer. None of those three surfaces records
          whether anyone actually sat on a given day, by design.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          A Notion database is welcome on top of all of the above. Two
          columns is the recommendation. The paper sheet is the
          alternative. Both are free, both are public, and neither has
          a premium tier or a referral link, by deliberate omission.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="notion-template-daily-sit-tracking"
        heading="Want to think the column question through with another practitioner?"
        description="Free 30 minutes. Bring your current Notion template, your printed sheet, or nothing. We can talk through which columns are doing real work and which are quietly redirecting the practice."
      />

      <section className="max-w-4xl mx-auto px-6 my-14" id="faq">
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-5xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          title="Related on this site"
          subtitle="The same column-vs-no-column question, in three other shapes."
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="notion-template-daily-sit-tracking"
        description="Free 30-min call: column audit for your daily sit tracker."
      />
    </article>
  );
}
