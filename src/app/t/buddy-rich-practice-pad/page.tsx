import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedChecklist,
  BeforeAfter,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/buddy-rich-practice-pad";
const PUBLISHED = "2026-04-29";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Buddy Rich Practice Pad: Notes From Someone Whose Practice Pad Is a Sheet of Paper",
  description:
    "Most pages for \"buddy rich practice pad\" are gear listings (HQ Percussion RealFeel, Slingerland, DW, Reverb resellers). Those are the right destinations if you want a drum pad. This page is for a different reader: an old student of a silent daily practice, drawing the parallel between the drummer's rubber pad and the meditator's printable sit log at /daily-sit-log/print.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Buddy Rich Practice Pad: Notes From Someone Whose Practice Pad Is a Sheet of Paper",
    description:
      "The other reading of the phrase, for a different audience: 366 fillable squares on a printable sit log, the documented Buddy Rich paradox, and what the two kinds of practice pad have in common.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Buddy Rich Practice Pad, for Someone Doing the Other Kind of Silent Daily Practice",
    description:
      "If you came here for a Vic Firth RealFeel or a vintage Slingerland, the right list is in the lede. Otherwise, a quiet read on what a paper sit log has in common with a drummer's rubber pad.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Is this page selling a Buddy Rich practice pad?",
    a: "No. If a Buddy Rich branded drum practice pad is what you came for, the right destinations are the manufacturers and resellers that have actually shipped one. The HQ Percussion RealFeel Buddy Rich pads (Crest Collector's edition with vintage Marine Pearl covering and the Octagon Player's edition with the BR logo and an 8mm threaded insert for cymbal-stand mounting) were introduced at the January 2003 NAMM show. There were also vintage Slingerland Buddy Rich pads, a discontinued DW Buddy Rich two-sided pad, and a Vic Firth co-branded variant. Reverb, Music 6000, and a handful of drum shops carry them used. Drum magazines and manufacturer pages are the right depth on the gear side; this site is not.",
  },
  {
    q: "What does Buddy Rich have to do with a meditation site?",
    a: "Almost nothing on the surface. The bridge is the phrase practice pad itself. A drummer's practice pad is a silent, daily, repetitive, unglamorous artifact for building the same motion thousands of times. A Vipassana practitioner's daily sit is also silent, daily, repetitive, and unglamorous. The two are not the same activity, and the technique inside each is incommunicable to the other domain, but the outer shape of the discipline rhymes. That rhyme is what this page is built around. It is not advice and not instruction. It is one practitioner's reflection on a phrase that does double duty.",
  },
  {
    q: "Did Buddy Rich actually claim he never practiced?",
    a: "Yes, and the drum press has noted the irony for decades. The line gets repeated in interviews, in technique articles, and even in the announcement copy when HQ Percussion put his name on a practice pad. The most-cited published source on Buddy Rich's stated practice habits is Charlie Perry's interview material, archived and discussed in pieces like Scott K Fish's blog. The contradiction (a celebrated drummer with his name on a practice pad insisting he did not need one) is a documented part of the Buddy Rich legend, not a claim invented for this page. Drum journalists, not meditators, are the right authority on what he actually meant.",
  },
  {
    q: "What is the meditator's practice pad on this site?",
    a: "It is the printable artifact at /daily-sit-log/print. One physical sheet, US Letter or A4, designed to be printed once a year and kept on a wall or in a notebook. The grid is 12 rows by 31 columns. February is hard-coded as 29 days in the source so the same sheet survives a leap year without being reprinted. Six cells are backgrounded grey for dates that do not exist (February 30, February 31, April 31, June 31, September 31, November 31). That leaves 366 fillable squares, each split diagonally for the morning and evening of the day. There is no streak counter, no notification, no app behind it. A reader can verify the integers by opening src/app/daily-sit-log/print/page.tsx and reading the MONTHS array.",
  },
  {
    q: "Does this page teach Vipassana?",
    a: "No. The S.N. Goenka tradition reserves transmission of the technique for authorized assistant teachers inside 10-day residential courses. Nothing on vipassana.cool teaches the technique, and this page is no exception. It discusses an artifact (the printable sit log) and a phrase (practice pad) and a documented historical figure (Buddy Rich). For any operational question about how to sit, how to work with what comes up on the cushion, or how to build a daily practice, the right destination is dhamma.org and an authorized assistant teacher at a 10-day course, not a webpage and not a Reddit thread.",
  },
  {
    q: "Why call a printed sit log a practice pad?",
    a: "Because the function is the same: a low-tech, single-purpose substrate that exists only so the practice can be repeated and recorded. A drummer's pad is rubber over wood, a meditator's pad is paper, and the music in both cases happens off the pad. The pad itself is just a place to leave a faint mark of having shown up. Calling the printable a practice pad is a metaphor, not a technique. The page is not suggesting that anyone use the sheet as a substitute for a 10-day course; it is suggesting that the artifact and the rubber pad share a shape.",
  },
  {
    q: "Is the Buddy Rich connection a stretch?",
    a: "Some. This page is in a small family of similarly tangential pieces on this site (the same family that includes /t/daily-maths-practice and /t/practice-daily-english-conversation), each of which takes a phrase whose first audience is somewhere else and writes the second-audience version honestly. The editorial rule on these tangential pages is that the primary audience gets a clean redirect upfront, and the rest of the article serves whoever stayed. If the Buddy Rich frame does not land for you as a reader, that is the right reaction, and a drumming gear page is one click away.",
  },
  {
    q: "Where can I read about the actual Buddy Rich practice habits and grip?",
    a: "Drum journalism is the right authority. The Modern Drummer archives, DRUM! Magazine, the Charlie Perry interview material, the long-form profiles of Buddy that have run in the drumming press since the 1970s, and YouTube performances of the Buddy Rich Big Band are all richer on what he actually did with his hands than any tangential meditation page could be. Freddy Charles Music has a contemporary write-up of the Buddy Rich grip technique that is a reasonable starting point. None of those are this site, and none of them should be.",
  },
  {
    q: "Is the practice buddy program on this site about drum practice partners?",
    a: "No. The practice buddy program at /practice-buddy/how-it-works pairs old students of the Goenka 10-day course for silent video co-sittings, as mutual accountability for keeping a daily meditation practice alive between courses. The technique is not shared or discussed during a sit; the point is showing up at the same time. If you came here looking for a drum practice partner, that is a real and legitimate need, and your local drum shop, a Reddit drum subreddit, or a school like Drumeo are far better fits than this site.",
  },
  {
    q: "Why publish a meditation page on a phrase about a drum pad?",
    a: "Because the phrase practice pad has been quietly doing more work than its obvious meaning, and the second meaning has nowhere to live online. The site has tried this same move on a handful of other phrases (\"daily maths practice\", \"practice daily english conversation\") with the same editorial rule: name the first audience, redirect them politely, and write the second-audience version with care. It is one of several small experiments this site is running. If it lands for one reader, it has done its job.",
  },
];

const padShape = [
  { text: "Rubber over wood, on a stand at waist height. The drummer plays it with sticks, silently, for hours.", checked: true },
  { text: "Paper on a wall or in a notebook, at eye level. The meditator marks it once or twice a day, silently, for years.", checked: true },
  { text: "Both are designed to be cheap, single-purpose, and portable. Neither does anything on its own.", checked: true },
  { text: "Both record only that practice happened, not what happened inside it. The interior content stays interior.", checked: true },
  { text: "Both reward consistency over intensity. A great drummer with a poor practice pad will outwork a poor drummer with a Vic Firth.", checked: true },
  { text: "Both have famous practitioners who publicly downplayed the artifact (Buddy Rich on a drum pad, plenty of old students on a sit log) while still using one.", checked: true },
];

const sheetIntegers = [
  { text: "12 rows, one per calendar month, hard-coded in the MONTHS array of /src/app/daily-sit-log/print/page.tsx.", checked: true },
  { text: "31 columns, one per possible day of the month, regardless of whether the month actually has 31 days.", checked: true },
  { text: "12 multiplied by 31 equals 372 cells rendered by the table.", checked: true },
  { text: "February is encoded as 29 days, not 28, so the same printable survives a leap year without being reprinted.", checked: true },
  { text: "6 cells are backgrounded grey (CSS color #e5e5e5) for impossible dates: Feb 30, Feb 31, Apr 31, Jun 31, Sep 31, Nov 31.", checked: true },
  { text: "372 minus 6 equals 366 fillable squares. The arithmetic is visible in the file, not hidden behind a library.", checked: true },
  { text: "Every fillable cell carries a diagonal split, an upper-left triangle for the morning and a lower-right triangle for the evening.", checked: true },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "Daily Maths Practice, for Meditators",
    href: "/t/daily-maths-practice",
    excerpt:
      "The other tangential sister page. Same editorial move, applied to K-12 worksheet phrasing instead of drum gear phrasing. The arithmetic of a sit log explained at length.",
    tag: "Sister page",
  },
  {
    title: "Practice Daily English Conversation, for People Doing the Opposite",
    href: "/t/practice-daily-english-conversation",
    excerpt:
      "Another tangential page in the same family. ESL audience gets a clean redirect; the second audience gets the inverse, an article about 10 days of silence on a residential course.",
    tag: "Sister page",
  },
  {
    title: "Daily Practice After a Course",
    href: "/guide/daily-practice",
    excerpt:
      "Non-instructional notes on keeping a daily practice alive between 10-day courses. Habit, consistency, and community. No technique, logistics only.",
    tag: "Logistics",
  },
  {
    title: "Why 20 Minutes Beats 2 Hours",
    href: "/guide/why-20-minutes-beats-two-hours",
    excerpt:
      "The consistency-over-duration case for old students whose lives have collided with the two-hour recommendation. The integer arithmetic behind the argument.",
    tag: "Arithmetic",
  },
  {
    title: "Practice Buddy, How It Works",
    href: "/practice-buddy/how-it-works",
    excerpt:
      "The free pairing program for old students of the Goenka tradition who want a silent video co-sit, as mutual accountability for daily practice between courses.",
    tag: "Program",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Buddy Rich Practice Pad" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Buddy Rich Practice Pad", url: PAGE_URL },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Buddy Rich Practice Pad: Notes From Someone Whose Practice Pad Is a Sheet of Paper",
    description:
      "A tangential read on the phrase \"buddy rich practice pad\" written for the second audience. The first audience (drummers shopping for an HQ Percussion RealFeel, a Slingerland, a DW, or a Vic Firth Buddy Rich pad) gets a clean redirect to the right gear destinations. The rest of the page draws the parallel between the drummer's silent rubber pad and the printable Vipassana sit log at /daily-sit-log/print, anchored on the documented Buddy Rich paradox.",
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
          A drum gear phrase, read sideways
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900">
          Buddy Rich practice pad, for someone whose practice pad is a sheet of paper
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl">
          Most pages for this phrase are gear. The HQ Percussion RealFeel Buddy
          Rich pads (the Crest Collector&apos;s with vintage Marine Pearl covering
          and the Octagon Player&apos;s with the BR logo and an 8mm threaded
          insert), the vintage Slingerland Buddy Rich pads, the discontinued DW
          two-sided Buddy Rich pad, the Vic Firth co-branded variants, the
          Reverb listings, the Music 6000 used-shop pages. Those are the right
          destinations if a piece of rubber on wood is what you want. They are
          earnest, they are well-made, and they serve a real audience. This
          page is for a smaller second audience that types the same words and
          means something else, and ends up on a meditation site by accident
          and decides to keep reading.
        </p>
      </header>

      <div className="py-4 max-w-4xl mx-auto px-6">
        <ArticleMeta
          author="Matthew Diakonov"
          datePublished={PUBLISHED}
          authorRole="Written with AI"
          readingTime="9 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Two practice pads, one phrase
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          A drum practice pad is a silent rubber surface on wood, played with
          sticks, mounted on a snare stand or a desk. The point of the artifact
          is to make the daily, repetitive, unglamorous part of being a drummer
          possible inside an apartment, on tour, in a hotel room, anywhere a
          full kit will not fit and where the neighbors are at home. A drummer
          who is serious about the craft sits in front of a piece of rubber for
          a real fraction of their working life. The pad does not perform; it
          records that the work happened.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          A Vipassana practitioner who keeps a daily practice has the same
          problem on a different scale. The work is silent, the work is daily,
          the work is repetitive, the work has to fit between a job and a
          family and a body that wakes up tired. The artifact in the
          meditator&apos;s case is paper rather than rubber, but the function
          is the same. A small, cheap, single-purpose surface that exists only
          so the practice has somewhere to leave a mark. The recording is the
          point; the content of the practice stays interior.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          Disclaimer up front, because it matters here. I am not a teacher,
          not a drum teacher and not a meditation teacher. I am a working old
          student of the S.N. Goenka tradition, six 10-day courses behind me
          across three centers, with about forty days of dhamma service. The
          rest of this page is a reflection on a phrase, not advice. The
          technique itself is reserved to authorized assistant teachers inside
          residential courses, and that is the right place for it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <BeforeAfter
          title="The two pads, side by side"
          before={{
            label: "Drummer's practice pad",
            content:
              "A 6 to 14 inch disc of natural gum rubber laminated to a hardwood base, sometimes with a cymbal-stand thread for height. Played with a matched or traditional grip, in any room, at any hour, by anyone who wants to log the rudiments without disturbing the building. The Buddy Rich variants from HQ Percussion shipped with vintage Marine Pearl covering or an inset BR logo. Vintage Slingerland and DW versions have the same purpose with different feel.",
            highlights: [
              "Silent rubber surface, no sound to the room",
              "Daily reps over years build the foundation under the visible playing",
              "The pad itself does not perform; it records that practice happened",
            ],
          }}
          after={{
            label: "Meditator's practice pad",
            content:
              "A printable single-page sit log at /daily-sit-log/print. 12 rows by 31 columns, 366 fillable squares (the math survives leap years), one diagonal split per cell for morning and evening, no streak counter and no app behind it. Designed to be printed once and lived with for a year. A small mark goes in after each sit; the content of the sit stays off the page where it belongs.",
            highlights: [
              "Silent paper surface, no notifications and no streaks",
              "Daily marks over years build the thread that the technique rests on",
              "The sheet itself does not teach; it records that practice happened",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The Buddy Rich paradox
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The reason a meditation page can write about Buddy Rich at all is
          that his name attached to a practice pad sits on top of a documented
          public contradiction. Buddy famously claimed he did not practice. He
          said it on television, he said it in print, he said it to interviewers
          across decades. The drum press has been turning that claim over for
          most of fifty years, and even the announcement copy from HQ
          Percussion when they introduced the official RealFeel Buddy Rich
          pads at the January 2003 NAMM show acknowledged the irony in plain
          words, that the man whose name was on the rubber had insisted he
          never needed it.
        </p>
        <ProofBanner
          metric="claimed he never practiced"
          quote="The Buddy Rich pads were a fun project, especially considering that Buddy claimed he never practiced."
          source="HQ Percussion product story, archived in drumming press"
        />
        <p className="text-zinc-700 leading-relaxed mb-4">
          What he actually meant by that line is a real argument inside drum
          journalism, not a meditation question. Some sources read it as
          showmanship, the same kind of myth-making that makes a great
          drummer&apos;s legend interesting. Some read it as literally true,
          that he kept his hands warm on the bandstand and did not work the
          rudiments at home. Charlie Perry&apos;s interviews, archived and
          discussed by writers like Scott K Fish, are the long-form treatment
          on the practice-habits question. None of that is this site&apos;s
          domain to settle.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          What is interesting from a meditation seat is that the paradox
          rhymes with something every long-term old student eventually meets.
          The teacher Goenka, in his recorded discourses, is firm that two
          hours a day is the recommendation, and gentle in the same breath
          about how rarely it actually happens for people working full time.
          Old students at group sittings rotate through the same admission for
          decades, that they sit less than the recommendation, that they sit
          at irregular hours, that some weeks they sit thirty minutes once and
          then nothing for four days, and that they keep showing up to courses
          anyway. The artifact (the rubber pad, the paper sheet) is what
          carries them through the gap between what the discipline is supposed
          to look like and what it actually looks like in a working life. Buddy
          Rich on the bandstand and an old student in a kitchen are doing
          parallel arithmetic.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          What lives at /daily-sit-log/print
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          The meditator&apos;s practice pad on this site is not an app, a
          subscription, or a tracker. It is a printable HTML page at
          /daily-sit-log/print. The whole thing fits on a sheet of US Letter or
          A4 paper. The integers are not aspirational; they come straight from
          the source file. A reader can verify them by opening
          src/app/daily-sit-log/print/page.tsx and reading the MONTHS array
          near the top.
        </p>
        <AnimatedChecklist
          title="Anchor fact: the integers behind the sheet"
          items={sheetIntegers}
        />
        <p className="text-zinc-700 leading-relaxed mt-6">
          The reason this exists at all is that streak apps and gamified
          dashboards punish missing a day in a way that a multi-decade
          discipline cannot tolerate. A long-term meditation practice has
          sparse months. Sometimes a year has a month with eight squares
          filled out of sixty halves, and sometimes the month after has
          forty-two. Both are part of the record. Paper does not punish a
          blank; it just shows where the gaps were. The same thing is true of
          a drummer&apos;s practice log: the pad itself does not punish the
          weeks of tour where there was no time to sit at it.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Where the parallel holds, and where it breaks
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Honest counterargument, because the page would be thin without one.
          The parallel between a drum practice pad and a meditation sit log
          holds at the shape of the artifact and the shape of the discipline.
          Both are silent. Both are daily. Both are unglamorous. Both record
          rather than teach. Both serve a practitioner who is alone with the
          work for the long stretches where no one is watching. That is real,
          and that is the part of the metaphor this page is willing to defend.
        </p>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The parallel breaks at content. Drumming is an external craft with a
          measurable output: a recording, a performance, an audible result.
          Vipassana is an internal discipline with no audible result and no
          performance, and the technique itself is incommunicable across
          domains. A drummer can teach you a paradiddle; a meditator cannot
          teach you the technique on a webpage, and is structurally not
          allowed to. The two artifacts may share an outer shape, but
          mistaking the shape for the substance would flatten both of them.
          A reader who comes here for the gear is not wrong to leave; a reader
          who came for the meditation should not expect a paper sheet to do
          what a 10-day course does.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          One more break, smaller. Buddy Rich was a virtuoso. The reason his
          name is on a practice pad is that drummers admire him and want some
          of his discipline to rub off through the rubber. The Goenka
          tradition does not have, and does not want, a single named virtuoso
          on the front of a sit log. The teacher in the lineage is the
          tradition itself, and the artifact has no famous face on it. That
          difference is structural, and it is part of why the parallel is a
          metaphor and not an equation.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Why the two artifacts share a shape
        </h2>
        <AnimatedChecklist
          title="Where the rubber pad and the paper sheet rhyme"
          items={padShape}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          If you came here for the gear
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The right destinations, plainly. The HQ Percussion (now D&apos;Addario)
          RealFeel line has carried the official Buddy Rich pads in two shapes,
          the Crest Collector&apos;s and the Octagon Player&apos;s. Vic Firth
          carries co-branded RealFeel variants. Vintage hunters look for
          Slingerland Buddy Rich pads on Reverb and the discontinued DW
          two-sided Buddy Rich pad, sometimes paired with a 100th anniversary
          Vic Firth stick. For technique, DRUM! Magazine, Modern Drummer,
          Freddy Charles Music, and Drumeo are the right depth. For the
          long-running argument about what Buddy Rich actually meant when he
          said he did not practice, Charlie Perry&apos;s interview material
          and the various Scott K Fish blog archives are a starting point. None
          of those are this site, and pretending otherwise would be silly.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          What this site does instead is the meditation half of the metaphor:
          old students of the Goenka tradition, the daily-practice problem,
          the printable sit log, and a small accountability program that pairs
          old students for silent video co-sittings. The technique itself
          stays where it belongs, at dhamma.org and inside an authorized
          assistant teacher&apos;s 10-day course. Everything else, including
          a tangential page about a drum pad, is fair game for reflection.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Daily practice between courses, paired with another old student"
          description="The practice buddy program is for old students of the Goenka 10-day course who want a silent video co-sit on a regular schedule. Free, no app, no streak. Book a short call to get matched."
        />
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-6 my-12">
        <FaqSection heading="Common questions" items={faqs} />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <RelatedPostsGrid
          title="Related reading"
          subtitle="The same family of tangential pages, plus the artifact itself"
          posts={relatedPosts}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 my-12">
        <p className="text-sm text-zinc-500 leading-relaxed">
          A reader who wants the printable artifact can find it at{" "}
          <Link href="/daily-sit-log/print" className="text-teal-600 hover:underline">
            /daily-sit-log/print
          </Link>
          . A reader who wants the program can read{" "}
          <Link href="/practice-buddy/how-it-works" className="text-teal-600 hover:underline">
            /practice-buddy/how-it-works
          </Link>
          . A reader who wants the technique itself goes to{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dhamma.org
          </a>{" "}
          and signs up for a 10-day residential course in the Goenka tradition,
          which is the only place the technique is actually transmitted.
        </p>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Get paired with another old student for daily silent video co-sittings"
      />
    </article>
  );
}
