import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ProofBanner,
  GlowCard,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/offline-voice-journal-for-daily-sits";
const PUBLISHED = "2026-05-08";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Offline voice journal for daily sits: the question underneath the app question",
  description:
    "There is no purpose-built offline voice journal for daily Vipassana sits. The honest options are Apple Voice Memos (local by default), an open-source recorder, or a dictaphone. The deeper question is whether to journal the sit at all. A reflective piece from 945+ days of daily practice.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Offline voice journal for daily sits: the question underneath the app question",
    description:
      "Most pages for this topic are app comparison listicles. They skip the two questions that actually matter: what offline really means in 2026, and whether journaling a sit at all serves a Goenka-style daily practice.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Offline voice journal for daily sits: the question underneath the app question",
    description:
      "Apple Voice Memos is the honest local-by-default choice. Whether to journal the sit at all is the more interesting question.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is the simplest offline voice journal for a daily Vipassana sit?",
    a: "On iPhone or Mac, the Voice Memos app records to local storage by default. iCloud sync is an opt-in setting under Settings, Apple ID, iCloud, then Voice Memos; if you leave it off, recordings stay on the device. On Android, any open-source recorder from F-Droid (Audio Recorder, Easy Voice Recorder Pro without the cloud add-on) does the same job. A used dictaphone from any electronics resale site does it without an operating system at all. None of these are designed for meditators specifically, and that is fine. The simpler the tool, the harder it is for the tool to migrate the audio off the device behind your back.",
  },
  {
    q: "Why does offline matter for a journal about a meditation sit?",
    a: "Two reasons. The first is privacy in the obvious sense: post-sit reflections often surface content (memories, family material, body sensations, emotional residue) that you would not want indexed by a transcription service or used to train a future model. The second is more specific to this tradition: the actual technique transmitted at a 10-day course is reserved for authorized teachers and the residential setting. Most practitioners will not be tempted to describe the technique into a microphone, but if a journal entry strays in that direction, the tradition's framing pretty firmly does not want a copy of that audio on someone else's server.",
  },
  {
    q: "Are most apps marketed as offline voice journals actually offline?",
    a: "Many are not. A common pattern is local-only audio storage paired with cloud transcription: the app records on the device, then uploads the audio to a transcription service so you get a searchable text version, then deletes the audio (or claims to). That round-trip means the audio leaves the device, which is exactly the property the word offline is doing the work of asserting. The honest test is to put the phone in airplane mode before recording, then check whether transcription, search, or sync still works. If anything fails, those features were not offline. This is not an indictment of any particular app, just a reason to read the privacy policy and not just the marketing page.",
  },
  {
    q: "Should I journal my daily sit at all?",
    a: "This is the question I would actually want answered before downloading any app. The honest answer is that I am not your teacher, the tradition reserves operational guidance for authorized assistant teachers at a 10-day residential course, and any question of this shape belongs at dhamma.org and at the center where you sat. What I can share as a peer is what 945+ days of daily practice has shown me about my own habit: I sit, I get up, and I get on with the day. I have tried logging sits in writing and in voice. Both pulled my attention forward, into review and self-evaluation, in a way that started competing with the sit itself. Most old students I have compared notes with land somewhere similar after a year or two. Your call may genuinely be different, especially during integration after a course. But the question deserves more than a free trial.",
  },
  {
    q: "Does this site have an existing way to track daily sits?",
    a: "Yes, on paper. There is a one-page printable sit log at /daily-sit-log/print: 366 blank squares, one calendar year, AM and PM split by a diagonal line, no streaks, no minutes, no metadata. The sheet itself says, in plain wording: do not write the duration, do not count streaks, if you miss a day leave the square empty and sit tomorrow. Paper is offline by definition and it forces the log to stay binary (sat or did not sit). That is the closest thing to a non-prescriptive sit log this site is willing to publish, and it pre-dates the voice journal conversation by months.",
  },
  {
    q: "What about journaling things that are not the sit itself?",
    a: "Different question. A daily voice memo about whatever was on your mind that morning, separate from the sit, is just a voice diary, and the offline tools above all work fine for that. Many practitioners I have talked to do something in this category. The relevant distinction is whether the journal is parasitic on the sit (using the sit as a prompt to evaluate sensations, progress, technique-shape) or independent of it (a normal life journal that happens to live next to the sit on the calendar). The first one is the question I am cautious about. The second one is just journaling.",
  },
  {
    q: "What about transcription? I want a searchable text record.",
    a: "That is the hard part. Local transcription on a personal device is technically possible (open-source Whisper models run on a modern phone or laptop), but the user experience is rougher than the cloud equivalents. If searchability matters more than offline guarantees, you have to choose: either pick a cloud transcription product and accept that the audio leaves the device, or run a local model and accept slower throughput and more setup. There is no current consumer product that gives you both, as far as I have seen. If you find one, the airplane-mode test from above is the way to confirm.",
  },
  {
    q: "Is this an answer to how I should practice?",
    a: "No. Anything operational about how to sit, what to do with a sensation, how long to sit, when to sit, or how to handle a difficulty on the cushion belongs with an authorized assistant teacher at a 10-day residential course, arranged through dhamma.org. This page is about the tooling question (offline voice tools that exist) and the framing question (whether journaling a sit is the right shape at all). It is not about technique.",
  },
  {
    q: "Does vipassana.cool ship an app for this?",
    a: "No. The site is a resource hub of guides and a practice-buddy matching program, not a meditation app. There is the printable paper sit log mentioned above, written guides under the /t and /guide paths, and the practice-buddy pairing flow at /practice-buddy. We are not building a voice-journal product and have no plans to.",
  },
  {
    q: "Where do I go for an actual answer to a practice question?",
    a: "The two right places are https://www.dhamma.org for course logistics, the Code of Discipline, and the location of the nearest center, and your assistant teacher at the center where you sat. Either of them is a more reliable source than this page or any app review. They will not answer the question by recommending a journaling tool. They will answer it by talking about practice.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Offline voice journal for daily sits" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  { name: "Offline voice journal for daily sits", url: PAGE_URL },
];

const relatedPosts = [
  {
    title: "Printable daily sit log (free, one page)",
    href: "/daily-sit-log/print",
    excerpt:
      "366 squares, one calendar year, AM and PM split by a diagonal, no streaks. Press Cmd+P or Ctrl+P to save as PDF. The offline analog of every tracking question on this site.",
    tag: "Resource",
    readTime: "1 page",
  },
  {
    title: "Keeping Vipassana practice untouched",
    href: "/t/keeping-vipassana-practice-untouched",
    excerpt:
      "What the tradition is actually asking for when it asks not to mix techniques. A fair-trial request, not an orthodoxy claim. Useful context for anyone weighing tools that sit adjacent to the sit.",
    tag: "Essay",
    readTime: "9 min read",
  },
  {
    title: "Post-retreat reentry crash",
    href: "/t/post-retreat-reentry-crash",
    excerpt:
      "Why the felt-state of a course fades on schedule and the structural shift does not. The four weeks after a course are when journaling impulses are loudest; this is the piece I wish I had read first.",
    tag: "Essay",
    readTime: "11 min read",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Offline voice journal for daily sits: the question underneath the app question",
    description:
      "A reflective piece on the two questions every app-review listicle skips: what offline really means in 2026, and whether journaling a Goenka-style daily sit is the right shape at all.",
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
          Offline voice journal for daily sits: the question underneath the app question
        </h1>
        <p className="mt-4 text-lg text-zinc-600 max-w-3xl leading-relaxed">
          The pages that come up for this topic are app comparison
          listicles. They line up Day One, Voice Memos, Otter, half a
          dozen "voice journal" apps, score them on UI and pricing, and
          stop. They skip the two questions a meditator is actually
          asking. What does offline mean in 2026, when most apps quietly
          round-trip your audio through a transcription service? And
          should you journal a daily Vipassana sit at all? This is a
          peer-practitioner take, from 945+ unbroken days of daily
          practice and six 10-day courses. Not a teacher, not a guru,
          not a coach.
        </p>
      </header>

      <div className="py-4">
        <ArticleMeta
          author="Matthew Diakonov"
          authorRole="Written with AI"
          datePublished={PUBLISHED}
          readingTime="8 min read"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 md:p-7">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-700 mb-3">
            Direct answer · verified 2026-05-08
          </p>
          <p className="text-zinc-800 text-[15px] md:text-base leading-relaxed">
            There is no purpose-built offline voice journal for daily
            Vipassana sits. The honest local-by-default options are
            Apple{" "}
            <a
              href="https://support.apple.com/guide/voice-memos/welcome/mac"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              Voice Memos
            </a>{" "}
            on iPhone or Mac (records to the device; iCloud sync is an
            opt-in setting), an open-source recorder on Android, or a
            cheap dictaphone. To verify any app you are considering is
            actually offline, put the phone in airplane mode before
            recording and check whether transcription, search, and sync
            still work; if any of them break, those features were not
            offline. The deeper question, whether to journal the sit
            itself, is operational and belongs with an authorized
            assistant teacher at a 10-day course arranged through{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              dhamma.org
            </a>
            , not in an app review.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <ProofBanner
          quote="The site already ships a paper sit log: 366 squares, AM and PM split by a diagonal, no streaks, no minutes. Voice is the audio version of paper, and the same rule about not turning the sit into a record-keeping ritual applies one layer harder."
          source="vipassana.cool/daily-sit-log/print"
          metric="366"
        />
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What &ldquo;offline&rdquo; quietly stopped meaning
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Ten years ago, an offline voice recorder meant something
          unambiguous: the audio sat on the device, period. Today,
          offline is a marketing word as often as it is a technical
          claim. The pattern that makes me uneasy is local recording
          paired with cloud transcription. The audio is captured on the
          device, then uploaded to a transcription service so you get a
          searchable text version, then often deleted from the device.
          The audio left, even if the file did not stay on the cloud.
          The privacy policy will say so, in the section where the bold
          marketing copy will not.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A simple test rules out most of the ambiguity. Put the phone
          in airplane mode before you start recording. Record the entry.
          Try to do the things the app advertises: transcribe it, search
          it, tag it, sync it across devices. Whatever fails was not
          offline. Whatever still works was. If transcription requires
          re-enabling the network, the audio is going somewhere when
          you re-enable it. That is fine for plenty of use cases. It is
          a relevant fact for one as personal as a journal about a
          meditation sit.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          Apple Voice Memos passes the airplane-mode test cleanly on
          recording and playback. Sync between devices is the iCloud
          Voice Memos toggle, which sits under Settings, Apple ID,
          iCloud, then Voice Memos, and is opt-in. Off means off. The
          Apple support page linked above has the current wording. On
          Android, the F-Droid app catalog contains several recorders
          that store to local files only; pick one and read the
          permissions list before installing. A used dictaphone, the
          ten-dollar kind from any electronics resale site, has no
          operating system, no account, and no cloud. It is the most
          honestly offline option in the entire conversation, and it
          fits in a back pocket.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          The site already shipped the offline answer, on paper
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Long before this page got written, vipassana.cool put up a
          one-page printable sit log at{" "}
          <Link
            href="/daily-sit-log/print"
            className="text-teal-700 underline hover:text-teal-900"
          >
            /daily-sit-log/print
          </Link>
          . It is a calendar grid: twelve months down the side, 31
          columns across, every cell split by a diagonal so AM and PM
          can be marked separately. The instruction printed on the
          sheet itself is one paragraph long: do not write the duration,
          do not count streaks, if you miss a day leave the square empty
          and sit tomorrow.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          That sheet is the offline analog of every tracking question
          on this site. Paper does not sync. Paper does not transcribe.
          Paper does not have a streak feature, and the sheet
          deliberately refuses to grow one. The constraint that ends up
          being the most useful is not the offline part. It is the
          binary part. The grid only records did-I-sit-or-not. It does
          not record what happened during the sit. That single design
          choice took me a year to appreciate.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The reason it matters here is that voice is the audio analog
          of paper. The same questions apply. If you want a sit log,
          you can keep one in voice the same way you can keep one on
          paper: short, binary, no inventory of what happened. The
          temptation that voice introduces, and that paper resists by
          its own ergonomics, is to slide from logging the sit to
          narrating the sit. That is the move I am cautious about, and
          the next section is about why.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <GlowCard className="p-6 md:p-8">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
            The question underneath
          </p>
          <p className="text-xl md:text-2xl text-zinc-900 leading-snug font-medium">
            The question is not which app records audio without
            uploading it. The question is what the journal is for, and
            whether the sit benefits from being narrated at all.
          </p>
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
            Every offline-tool question on this topic resolves quickly
            once you know the answer to that one. If the journal is
            about the sit, my own experience and most old-student
            conversations I have had push toward less, not more. If the
            journal is about life adjacent to the sit, the tool choice
            is the same as for any other voice diary, and the offline
            question reduces to the airplane-mode test in the previous
            section.
          </p>
        </GlowCard>
      </div>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Whether to journal the sit at all
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          This is the part of the page where most listicles bow out, so
          I will be careful. I am not your teacher. The tradition
          reserves operational guidance for authorized assistant
          teachers at a 10-day residential course. Anything that sounds
          like a how-to-practice answer here is wrong by construction,
          and I will not write one. What I can offer as a peer is what
          945+ days of daily practice and six courses have shown me
          about my own habit, which is that I have tried logging sits
          in writing and in voice, and both moved attention into
          review-and-evaluate mode in a way that started to compete
          with the sit itself.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The shape of that competition was subtle. It looked like
          getting up from a sit and immediately having a sentence
          forming for the journal. The sentence was about what the sit
          had been: clearer or muddier, easier or harder, what showed
          up, what did not. The sentence was almost always slightly
          ahead of the actual sit; it was a draft of what I wanted to
          have happened, and the next morning I would catch myself
          performing the previous day's sentence. That is a small thing.
          It compounded.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Most old students I have compared notes with land somewhere
          similar after a year or two of daily practice. Not all. Some
          journal in writing every day and find it grounding,
          particularly during the four-week reentry window after a
          course, when so much is moving at once that not capturing any
          of it feels lossy. That is a real claim and I do not want to
          paper over it. The distinction that ends up mattering is the
          one I tried to draw in the GlowCard above: is the journal
          about the sit, or about the life next to the sit. Different
          questions. Different answers. The technique question itself,
          if one comes up while you are deciding, belongs at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          and with the assistant teacher at the center where you sat.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          For context on why I am cautious here, the related guide on{" "}
          <Link
            href="/t/keeping-vipassana-practice-untouched"
            className="text-teal-700 underline hover:text-teal-900"
          >
            keeping the practice untouched
          </Link>{" "}
          covers the broader version of this question. It is a
          fair-trial request, not an orthodoxy claim. The journaling
          question lives in the same territory. Adding inputs to the
          loop while you are still trying to read the loop is not a
          moral problem; it is a measurement problem.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          What other practitioners I have talked to actually do
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          A loose, anecdotal sample. Take it as background, not
          prescription. Across maybe three dozen old students I have
          had this conversation with, three patterns come up.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The first pattern is no journal at all. People in this group
          treat the sit as a self-contained event. They get up, they go
          on with the day, and the only thing they track, if they track
          anything, is the binary did-I-sit number. This is the
          majority pattern by a meaningful margin. The reason given is
          almost always the one in the previous section: any record
          they kept ended up shaping the next sit in ways they did not
          want.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The second pattern is a general life journal that happens to
          live next to the sit on the calendar but is not about it.
          Voice memos work fine for this; so does a notebook. The
          journal is a normal life journal, and the sit is the sit, and
          they share a chronology but not a topic. People in this group
          tend to be the most relaxed about tooling, because the
          journal is not loaded with the same questions that surround a
          journal of the sit itself.
        </p>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          The third pattern is a short integration window after a
          course, usually the first one to four weeks, when so much is
          coming up that some kind of capture feels necessary. A few
          old students I respect keep a daily voice memo or written
          page for that window only and then stop. The voice version
          tends to be shorter than the written version. The recurring
          observation is that two to four minutes spoken per day is
          plenty, and that the act of needing to keep it short is part
          of what makes it useful.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          None of these patterns require an app built for meditators.
          All three are happy with whatever local-by-default voice
          recorder ships with the device. The product gap that the
          listicles assume exists, in my experience, is not actually
          there.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          A short list, with the caveats already on it
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          If you have read the sections above and decided you want a
          tool, here are the four honestly offline categories I would
          actually pick from. These are described, not recommended.
        </p>
        <ul className="text-zinc-700 mb-4 max-w-3xl leading-relaxed list-disc pl-6 space-y-3">
          <li>
            Apple Voice Memos on iPhone, iPad, or Mac. Records to local
            storage. Sync to other devices is the iCloud Voice Memos
            toggle, which is opt-in. Documented at the{" "}
            <a
              href="https://support.apple.com/guide/voice-memos/welcome/mac"
              className="text-teal-700 underline hover:text-teal-900"
              rel="noopener noreferrer"
              target="_blank"
            >
              Apple support page for Voice Memos
            </a>
            . No transcription on-device unless you opt in. Free, ships
            with the OS.
          </li>
          <li>
            Open-source Android recorders from F-Droid (Audio Recorder
            by Axet, Easy Voice Recorder Pro without the cloud add-on,
            others in the same category). Local-only by design. Read
            the permissions list before installing; if a recorder asks
            for network or contacts, skip it.
          </li>
          <li>
            A handheld voice recorder. Sony, Olympus, and Tascam still
            make them. Used ones are common on resale sites. No
            account, no operating system, no firmware update story
            beyond what the manufacturer ships with. The most boring
            and the most reliably offline.
          </li>
          <li>
            Pen and notebook. Not voice, but worth naming because the
            airplane-mode test trivially passes. A bedside notebook
            handles the integration-window use case without any of the
            tooling questions above. The site already ships{" "}
            <Link
              href="/daily-sit-log/print"
              className="text-teal-700 underline hover:text-teal-900"
            >
              the printable paper sit log
            </Link>{" "}
            for the binary did-I-sit version of the same idea.
          </li>
        </ul>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          What is not on this list, deliberately: any app that
          advertises offline and offers cloud transcription as a flagship
          feature, any subscription product whose privacy stance changes
          when the network turns back on, and any tool that frames itself
          as a meditation journal with built-in prompts about the
          practice. The first two fail the airplane-mode test. The third
          is a different shape of the question this whole page is
          cautious about.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 my-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-3">
          Where the operational question goes
        </h2>
        <p className="text-zinc-700 mb-4 max-w-3xl leading-relaxed">
          Everything on this page is about tooling and framing. The
          actual practice question (how to sit, how long, what to do
          with what comes up, whether journaling is right for your
          arc, what your assistant teacher would say) is not a question
          this site answers, and it is not a question any voice journal
          app answers either.
        </p>
        <p className="text-zinc-700 max-w-3xl leading-relaxed">
          The right channels are{" "}
          <a
            href="https://www.dhamma.org"
            className="text-teal-700 underline hover:text-teal-900"
            rel="noopener noreferrer"
            target="_blank"
          >
            dhamma.org
          </a>{" "}
          for course logistics, the Code of Discipline, and the
          location of the nearest center, and the assistant teacher at
          the center where you sat for anything personal. They will not
          answer the question by recommending a tool. They will answer
          it by talking about practice, which is the answer most of the
          listicles are quietly avoiding.
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          section="guide-footer"
          heading="Talk through your daily-sit habit, not your tooling"
          description="A 25-minute call with another old student about consistency, integration after a course, and the practice-buddy matching program. Not a teacher. Not a coach. Just a peer."
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 my-14">
        <RelatedPostsGrid
          subtitle="Adjacent reading"
          title="Other pieces on this site about the same questions"
          posts={relatedPosts}
        />
      </div>

      <div id="faq" className="max-w-4xl mx-auto px-6 my-14">
        <FaqSection faqs={faqs} />
      </div>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="guide-sticky"
        description="Talk to another old student about daily-sit consistency"
      />
    </article>
  );
}
