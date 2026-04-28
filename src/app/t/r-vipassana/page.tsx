import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BentoGrid,
  AnimatedChecklist,
  BeforeAfter,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
  type RelatedPost,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/r-vipassana";
const PUBLISHED = "2026-04-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "r/vipassana: A Practitioner's Field Guide to the Subreddit (and Where Else Goenka Students Post)",
  description:
    "r/vipassana is the main Reddit community for Goenka-tradition meditators, but it is not the only one, and not every question belongs there. A meditator with 6 courses behind him maps the subreddit, the recurring thread shapes, the adjacent communities, and the questions the sub will (rightly) redirect to dhamma.org.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "r/vipassana: A Practitioner's Field Guide to the Subreddit",
    description:
      "Where Goenka-tradition meditators actually post on Reddit, what threads keep coming back, and which questions belong on dhamma.org instead. Written by a 6-course old student.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "r/vipassana: a practitioner's field guide",
    description:
      "Map of the subreddit, recurring thread shapes, and the adjacent communities Goenka students drift between. By a 6-course old student.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is r/vipassana actually for?",
    a: "It is the general-purpose Reddit community for Vipassana meditation, with a heavy lean toward the Goenka tradition (the 10-day residential courses run worldwide by dhamma.org centers). The mix of posts skews toward people preparing for a first course, people processing the days right after one, and old students surfacing for moments of difficulty or gratitude. It is a peer space, not a teaching space. Volunteer mods do light steering, and the strongest social norm is that questions about how to actually do the practice get redirected toward dhamma.org and an authorized assistant teacher rather than answered in the thread.",
  },
  {
    q: "Is r/vipassana the official subreddit run by dhamma.org?",
    a: "No. dhamma.org and the centers in the Goenka network do not run a Reddit presence. Old students are reminded after every 10-day course that questions about the technique should go to an authorized assistant teacher, in person or by email through their local center. r/vipassana is a community-run space full of practitioners and curious newcomers, with no formal tie to the organization. That separation is the reason any operational question about the technique on the sub almost always gets answered with a link to dhamma.org and a soft 'ask a teacher' rather than a step-by-step reply.",
  },
  {
    q: "How is r/vipassana different from r/streamentry, r/Buddhism, and r/theravada?",
    a: "r/streamentry is the practice-heavy meditation forum, the place serious meditators across traditions go to swap technical notes about concentration, insight, and the path to awakening. It welcomes Goenka students but is not Goenka-specific, and you will see The Mind Illuminated, Mahasi, Shinzen, and secular practitioners alongside Vipassana. r/Buddhism is the broad-tent religion subreddit, very mixed in tradition and quality, where Vipassana is one thread among hundreds. r/theravada is the doctrinal home for Theravada Buddhism, where the Pali canon, Vinaya, and monastic life dominate the conversation; Vipassana shows up there in the context of insight meditation history, not as the headline subject. r/vipassana itself is narrower than all three: a peer space focused on the actual experience of doing the practice and going to courses.",
  },
  {
    q: "Why does r/vipassana keep redirecting day-by-day questions to dhamma.org?",
    a: "Because the Goenka tradition reserves transmission of the technique for authorized assistant teachers inside 10-day residential courses. That is not a community quirk; it is the structural rule of the lineage. If a thread asks how to handle a particular sensation, what to focus on, how to schedule a daily sit, or what the next step is on day 4, the most useful answer a peer can give is to point at dhamma.org and ask the local center for an assistant teacher. Threads that respect this norm tend to last; threads that try to teach the method tend to attract corrections. This site follows the same rule: nothing on vipassana.cool teaches the technique either.",
  },
  {
    q: "What kinds of posts on r/vipassana are most useful for someone preparing for a first course?",
    a: "The most useful pre-course posts on the sub are the practical-logistics ones: what to pack, what the food is actually like, what the schedule feels like in the body around day 2 and day 6, what to do about a back that hurts, how families react to ten days off-grid. The least useful, in my experience, are the ones promising what the course will reveal or warning what it will break. Two readers can sit through the same ten days and come out with completely different stories, so dhamma center logistics travel well between people, and inner experience does not.",
  },
  {
    q: "Does vipassana.cool run a Reddit community of its own?",
    a: "Yes. The community at r/vipassana_cool is the daily-practice complement to the program on this site. Where r/vipassana is broad and includes a steady stream of pre-course questions, r/vipassana_cool is narrower: it is for old students working on consistency after the course, the unglamorous part where the technique has been transmitted but the cushion still has to get sat on. It is one of several adjacent subreddits a meditator drifts into; this guide lists the others below. Like r/vipassana, the community does not teach the technique. For anything operational, the redirect to dhamma.org and an authorized teacher applies the same way.",
  },
  {
    q: "Is there a thing as 'Reddit Goenka cult' criticism on r/vipassana, and how does the sub handle it?",
    a: "Yes, threads questioning whether the format is a cult come up regularly, often after a documentary or a viral first-course memoir. The sub handles them in a recognisable pattern: a confessional post, a wave of practitioners explaining which features (silence, food cutoff, donation funding, a pre-recorded discourse from a deceased teacher) trigger the cult heuristic, a few critics pushing back on specifics, and an assistant-teacher-pointing comment from a long-time old student. The discussion does not resolve, because the rules of the format predate modern cult psychology by centuries, and the threads tend to recycle. We have a longer treatment of that argument at /t/vipassana-cult and /t/goenka-cult on this site.",
  },
  {
    q: "What is the right way to ask for help on r/vipassana without getting redirected?",
    a: "Ask the question that a peer can actually answer. Logistics travel well: airport-to-center transit, what the bunkroom looks like at CYO, whether two pairs of warm socks is enough for a December course at North Fork, how families handle ten days of silence. Personal reflection travels well: the post-course slump on day 12 of normal life, the strange grief that shows up around day 5, the relief of the metta hour at the end. What does not travel is the operational ask, things like 'what should I notice' or 'how do I work with X'. Those get the dhamma.org redirect, and that redirect is correct, and it is not a brush-off; it is the structural answer the tradition gives.",
  },
  {
    q: "Does any of this teach Vipassana?",
    a: "No. Nothing on vipassana.cool teaches the technique, and r/vipassana itself does not exist to teach the technique either. The S.N. Goenka tradition reserves transmission of the technique for authorized assistant teachers inside 10-day residential courses at dhamma.org. This page is a map of where practitioners discuss the experience and the logistics on Reddit, written by an old student. Any question about how to sit, how to work with a sensation, how to handle difficulty on the cushion, or how to structure a daily practice goes to dhamma.org and to an authorized assistant teacher at a 10-day course, not here, and not to a Reddit thread.",
  },
];

const subredditCards: BentoCard[] = [
  {
    title: "r/vipassana",
    description:
      "The main community. Heavy Goenka-tradition lean, mixed pre-course nerves and post-course processing, with a strong norm of redirecting operational questions to dhamma.org. The default landing pad if you only know one Reddit address for this practice.",
    size: "2x1",
    accent: true,
  },
  {
    title: "r/vipassana_cool",
    description:
      "Sister community to this site. Narrower scope: daily-practice consistency for old students after the course. Same no-teaching rule as the source tradition. Useful when r/vipassana feels noisy with first-course anxiety.",
    size: "1x1",
  },
  {
    title: "r/streamentry",
    description:
      "Cross-tradition practice forum. Goenka students show up alongside The Mind Illuminated, Mahasi, Shinzen, and secular meditators. Best for technical conversations about concentration, insight, and the path to awakening that span traditions, not just the Goenka format.",
    size: "1x1",
  },
  {
    title: "r/Buddhism",
    description:
      "Broad-tent religion subreddit. Vipassana shows up as one current among many: Zen, Pure Land, Tibetan, Theravada, secular. Useful for cultural and historical context, less useful for course-specific or daily-practice questions.",
    size: "1x1",
  },
  {
    title: "r/theravada",
    description:
      "Doctrinal home for the Theravada tradition. Pali canon, Vinaya, monastic life, sutta study. Vipassana surfaces here as insight meditation in its lineage context, not as the 10-day course format directly.",
    size: "1x1",
  },
  {
    title: "r/Mindfulness",
    description:
      "Mainstream mindfulness. Heavy MBSR and secular framing. The format and vocabulary feel different from r/vipassana; useful for the workplace-wellbeing register, less useful for retreat-format specifics.",
    size: "1x1",
  },
  {
    title: "r/TheMindIlluminated",
    description:
      "Practitioners of Culadasa's Mind Illuminated framework. Different lineage, but a good neighbour: the level of precision around daily sit logistics, mind-wandering, and dullness is unusually high, and Goenka students often lurk there for that.",
    size: "1x1",
  },
  {
    title: "r/secularbuddhism",
    description:
      "Buddhism stripped of the cosmology. Useful when the language of merit, rebirth, or supernatural realms in the Goenka discourses is a sticking point and you want to talk through that with people who have decided where they land on it.",
    size: "1x1",
  },
];

const recurringThreads = [
  {
    text:
      "First-course nerves: 'I'm signed up for my first 10-day, what do I bring, what do I tell my family.' The most actionable replies are about logistics; the bigger feelings get redirected to 'just go and see'.",
  },
  {
    text:
      "Day 2 / day 6 quitting questions, often posted from off-site after someone left early. The pattern is consistent: the body breaks first, the mind makes the case for leaving, and people go home around those two days. Threads about it tend to be honest and unglamorous.",
  },
  {
    text:
      "Post-course slump: 'It has been two weeks since my course and I cannot keep my daily sit going.' This is the single most repeated thread shape on the sub. Daily-practice consistency is harder than the course itself for most people.",
  },
  {
    text:
      "Sensation and experience questions: 'Is it normal that X happened on day 7.' These almost always end with a redirect to an assistant teacher, and that redirect is correct: the tradition does not have peer answers for those questions, by design.",
  },
  {
    text:
      "Sleep and energy at the centers: 'I can't fall asleep with a 4 AM bell, what do I do.' These are operational logistics and travel well between practitioners. Useful, peer-answerable, and not a teaching question.",
  },
  {
    text:
      "Cult-criticism threads, often after a documentary, a viral memoir, or a Reddit post hits r/popular. The discussion recycles roughly every quarter and tends to land on the same set of features (silence, food cutoff, donation funding, recorded discourses) that trigger modern cult heuristics.",
  },
  {
    text:
      "Lineage and tradition questions: 'How does Goenka-style differ from Mahasi-style or Pa Auk Sayadaw or Sayadaw U Tejaniya.' These migrate to r/streamentry, r/theravada, or r/TheMindIlluminated where the comparison happens with more depth.",
  },
  {
    text:
      "Center-specific logistics: weather at North Fork in January, whether the food at CYO is doable for someone with a gluten thing, what the bunkrooms look like at Dhammamanda. Local color, very useful for course preparation.",
  },
];

const relatedPosts: RelatedPost[] = [
  {
    title: "Vipassana cult? The anachronism test",
    href: "/t/vipassana-cult",
    excerpt:
      "Every retreat rule that gets flagged as 'culty' traces to a Theravada source codified before 350 BCE. A source-by-source audit.",
    tag: "Lineage",
  },
  {
    title: "Practice Buddy login: there is no sign-in screen",
    href: "/t/practice-buddy-login",
    excerpt:
      "Why the daily-sit-pairing program on this site has no accounts, no passwords, and no sessions, and what authenticates you instead.",
    tag: "Daily practice",
  },
  {
    title: "Vipassana meditation and the scientific world view",
    href: "/t/vipassana-meditation-and-the-scientific-world-view",
    excerpt:
      "A reading guide to the Paul Fleischman pamphlet that shows up in the bookshelf at most Goenka centers.",
    tag: "Reading",
  },
];

export default function Page() {
  return (
    <article className="bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              url: PAGE_URL,
              headline:
                "r/vipassana: A Practitioner's Field Guide to the Subreddit (and Where Else Goenka Students Post)",
              description:
                "A 6-course old student maps the r/vipassana subreddit, the recurring threads on it, the adjacent communities Goenka practitioners drift between, and the questions that belong on dhamma.org instead.",
              datePublished: PUBLISHED,
              author: "Matthew Diakonov",
              authorUrl: "https://m13v.com",
              publisherName: "Vipassana.cool",
              publisherUrl: "https://vipassana.cool",
              publisherLogo: "https://vipassana.cool/favicon.ico",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbListSchema([
              { name: "Home", url: "https://vipassana.cool" },
              { name: "Guides", url: "https://vipassana.cool/t" },
              { name: "r/vipassana field guide", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema(faqs)),
        }}
      />

      <div className="pt-10 pb-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/t" },
            { label: "r/vipassana field guide" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pb-6 pt-2">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-teal-700">
          Field guide
        </p>
        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          r/vipassana: a practitioner&apos;s field guide to the subreddit and the communities around it.
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          r/vipassana is the main Reddit community for Vipassana meditation as
          taught by S.N. Goenka, but it is not the only one, and not every
          question belongs there. This is a map of what lives on the sub, what
          recurs, and where Goenka students drift to next, written by an old
          student with 6 courses behind him.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="8 min read"
        className="mb-10"
      />

      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
          <p className="text-sm font-semibold text-teal-800 mb-2">
            Short answer
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            r/vipassana is the general peer community for Goenka-tradition
            meditators on Reddit. It is not run by dhamma.org. It is most useful
            for course-prep logistics, post-course processing, and finding
            other old students. It is least useful for operational questions
            about how to do the practice; those get redirected to dhamma.org
            and an authorized assistant teacher, and that redirect is the
            correct answer. If you are looking for daily-sit accountability
            after a course, the sister community at{" "}
            <span className="font-mono text-teal-700">r/vipassana_cool</span> is
            built for that, and the{" "}
            <Link href="/practice-buddy" className="text-teal-700 underline">
              Practice Buddy program
            </Link>{" "}
            on this site pairs old students 1:1 over Google Meet.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Why I&apos;m the wrong author for a hot take and the right one for this
        </h2>
        <p>
          Six 10-day courses across three centers (Dhammamanda in NorCal, CYO
          in the Bay Area, North Fork in Central California). 40+ days of
          dhamma service. 945+ days of daily practice as of the time I&apos;m
          writing this, with a counter on the homepage of this site that
          updates itself, so the number is verifiable. None of that makes me a
          teacher. It makes me a person who has spent a lot of time on the
          cushion and a lot of time reading the same Reddit threads recur,
          quarter after quarter, on r/vipassana and the subreddits next to it.
        </p>
        <p>
          Most pages currently surfaced for this topic are written from the
          outside: aggregators that index 25 subreddits without ever logging
          in, retreat memoirs that mention the sub in passing, listicles that
          confuse it with a generic &ldquo;what is Vipassana&rdquo; article.
          What they miss is the part you can only see from inside: the threads
          that recur, the redirects that are correct, the adjacent communities
          a serious practitioner drifts into, and the line the sub itself draws
          between &ldquo;peers can answer this&rdquo; and &ldquo;ask a
          teacher&rdquo;. This page is that map.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
          The Reddit communities a Goenka student drifts between
        </h2>
        <p className="text-zinc-600 mb-2">
          r/vipassana is the centre. The rest of the cluster is where specific
          conversations migrate when the sub itself is the wrong room for the
          question. Treat this as a directory, not a leaderboard; the
          subreddits are sized by how often I see Goenka students cross over,
          not by raw size.
        </p>
        <BentoGrid cards={subredditCards} />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
          Threads that recur on r/vipassana, in roughly the order I see them
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-2">
          A weekly skim of new posts on r/vipassana surfaces the same eight or
          nine shapes over and over. Recognising the shape is most of the
          value: it tells you whether a thread is going to land, what kind of
          replies it will pull, and whether it is a question a peer can answer
          at all. None of these are a substitute for an authorized assistant
          teacher, and the sub itself will be the first to say so.
        </p>
        <AnimatedChecklist
          title="recurring thread shapes on the sub"
          items={recurringThreads}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
          Where to take which question
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-2">
          The single most useful skill on the sub is knowing what kind of
          question you have before you post it. Logistics travel well between
          peers. Operational questions about the technique do not, and the sub
          will say so. The split below is rough but it has held for every
          thread I have read on r/vipassana over the last few years.
        </p>
        <BeforeAfter
          title="A peer thread vs. a teacher question"
          before={{
            label: "Peer-answerable on r/vipassana",
            content:
              "Course logistics, what to pack, what the food is like, how the bunkrooms look at CYO, post-course re-entry, the slump on day 12 of normal life, family conversations about ten days off-grid, the metta hour as a turning point, dhamma service as a continuation, what other old students did to keep a daily sit going.",
            highlights: [
              "Course logistics and packing",
              "Post-course re-entry and the slump",
              "Center-specific local color (NorCal, Bay, Central)",
              "Old-student social experience",
            ],
          }}
          after={{
            label: "Goes to dhamma.org and a teacher",
            content:
              "How to handle a particular sensation, what to focus on, how to schedule your daily sit, when to switch what you are doing on the cushion, what to do about a difficulty in the body, anything that asks for instruction in the technique. The Goenka tradition reserves transmission of the technique for authorized assistant teachers inside 10-day residential courses, and the sub follows that rule for the same reason this site does.",
            highlights: [
              "Operational technique questions",
              "How-to-sit specifics",
              "Sensation and difficulty handling",
              "Daily-practice structure prescriptions",
            ],
          }}
        />
        <p className="text-sm text-zinc-500 mt-4">
          For anything in the second column, the right address is{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            dhamma.org
          </a>{" "}
          and a request for an authorized assistant teacher at your local
          center. That redirect is the structural answer the tradition gives,
          not a brush-off.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          The thing r/vipassana is not built for
        </h2>
        <p>
          The sub is good at the start of the path and the end of a course. It
          is less good at the middle stretch, the years between courses where
          the technique has been transmitted and the cushion still has to get
          sat on, every day, mostly alone. That is the part where most old
          students lose the daily sit, not because the technique stopped
          working but because life refilled the calendar. Threads about it
          recur on the sub but tend to dissolve into &ldquo;just sit&rdquo;
          which is true and not very actionable.
        </p>
        <p>
          That gap is the reason this site exists. The community at{" "}
          <span className="font-mono text-teal-700">r/vipassana_cool</span> is
          built for that middle stretch, and the{" "}
          <Link href="/practice-buddy" className="text-teal-700 underline">
            Practice Buddy program
          </Link>{" "}
          pairs old students 1:1 over Google Meet for a daily sit at a fixed
          time. Same no-teaching rule. Same redirect to dhamma.org for
          operational questions. The piece it adds is the second person on the
          call, every morning, which is the smallest unit of accountability I
          have found that actually keeps the sit on the calendar.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          A few notes for first-time visitors to r/vipassana
        </h2>
        <p>
          Lurk before you post. The norms are not stated anywhere in big
          letters; they live in how threads go. A morning of reading top posts
          from the last month will tell you what the sub answers, what it
          punts, and what it gently corrects. Most of the value is in the
          comments, not the parent posts.
        </p>
        <p>
          Believe the redirects. When a long-time old student replies
          &ldquo;ask a teacher&rdquo; to an operational question, that is not a
          dismissal, that is the structural rule of the lineage being passed
          along. The technique is transmitted inside the 10-day course, by a
          person who can see your face and ask the next question. A Reddit
          comment cannot do that work, and the comments that try are, in my
          experience, the ones that age the worst.
        </p>
        <p>
          Bring specifics. &ldquo;What was your first course like&rdquo; gets
          recycled answers. &ldquo;I just got back from CYO and I cannot fall
          asleep before midnight, has anyone else had this&rdquo; gets a thread
          that someone with the same body actually reads. The sub rewards
          specificity, and the most useful posts I have ever seen there were
          the ones that named the center, the day number, and the actual
          stuck-ness.
        </p>
        <p className="text-sm text-zinc-500">
          A note on this site: vipassana.cool does not teach the technique. The
          S.N. Goenka tradition reserves transmission of the technique for
          authorized assistant teachers inside 10-day residential courses. For
          anything operational, the right address is{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            dhamma.org
          </a>
          .
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="r-vipassana-footer"
        heading="Want a 1:1 conversation about daily practice?"
        description="If r/vipassana threads about the post-course slump sound familiar and you want to talk through what a Practice Buddy match would look like, book 15 minutes with Matt. He runs the program and has 945+ days on the cushion."
      />

      <FaqSection items={faqs} />

      <RelatedPostsGrid
        title="Adjacent reading on this site"
        subtitle="If r/vipassana brought you here"
        posts={relatedPosts}
      />

      <section className="max-w-4xl mx-auto px-6 my-16">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
            Looking for a daily sit, not just a thread to read?
          </h2>
          <p className="text-zinc-600 mb-5">
            The Practice Buddy program pairs old students 1:1 over Google Meet
            at a fixed time. One form, one human review, one intro email, one
            permanent Meet link. No login.
          </p>
          <Link
            href="/practice-buddy"
            className="inline-block rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Go to /practice-buddy
          </Link>
        </div>
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="r-vipassana-sticky"
        description="Questions about the program? Book 15 min with the operator."
      />
    </article>
  );
}
