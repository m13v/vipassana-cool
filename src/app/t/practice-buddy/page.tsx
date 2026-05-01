import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  BeforeAfter,
  AnimatedChecklist,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/practice-buddy";
const PUBLISHED = "2026-05-01";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title: "Practice Buddy: Where the Meditation Definition Inverts the Standard One",
  description:
    "In sports, music, language, and study, a practice buddy watches your form and asks how it went. In meditation the same phrase resolves to its near-inverse: a peer who joins the same call at the same time every day and never speaks. This page walks the divergence and shows the live pair data behind it.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Practice buddy: where the meditation definition inverts the standard one",
    description:
      "Three pairs on this site have been silently co-sitting since March 2026. Twenty-one are currently matched. The mechanic is one shared Google Meet URL, no check-ins, no spoken word.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Practice buddy in meditation is the inversion of practice buddy everywhere else",
    description:
      "Workout buddies watch form. Music buddies trade feedback. Language buddies talk. The meditation buddy is silent. One shared room, one shared time, no review.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What is a practice buddy, in one sentence?",
    a: "A peer paired with you to do a regular practice on the same schedule, where each side's commitment is reinforced by the visible presence (or absence) of the other. The shape varies by domain. In gym buddy land, it is two people lifting at the same hour and spotting each other on heavy sets. In language exchange, it is two people meeting weekly to swap target-language conversation. In meditation, specifically the form on this site, it is two old students of S.N. Goenka 10-day courses joining the same Google Meet link at the same wall-clock time every morning, sitting silently for the duration of the sit, and leaving without saying anything. The structure is the same (paired commitment with mutual visibility), the surface is not.",
  },
  {
    q: "How does a meditation practice buddy differ from a study buddy or workout buddy?",
    a: "A workout buddy watches your form and counts your reps. A study buddy quizzes you and reads your notes. A language buddy corrects your grammar. All three are active participants whose value is the feedback they generate. A meditation practice buddy on this site does none of those things. They do not watch your posture, time your sit, listen to your breath, or ask how it went. They occupy the other half of a shared video room while you both keep your eyes closed. Their entire contribution to your practice is that the room is not empty when you arrive. The Goenka tradition reserves any actual instruction on technique for an authorized assistant teacher inside a 10-day residential course at dhamma.org, so a peer offering feedback would be both unwelcome and unhelpful here.",
  },
  {
    q: "Why does the silent version still produce accountability?",
    a: "Because the empty-room signal is harder to ignore than a self-report. If you skip a workout, your gym buddy texts to ask. If you skip a sit, your meditation buddy is already in the room when you do not show. There is no message to send and no excuse to draft. The mismatch is silent, immediate, and felt by exactly one other person who was counting on you. Research on goal completion has shown that people complete a goal about 95 percent of the time when they have a specific accountability appointment with another person, compared to about 10 percent when the goal lives only in their head. Vipassana.cool's product landing page cites that figure on its main site. The silent meditation case is a stricter version of the same mechanism: there is no scheduled call to wiggle out of because the call is the practice itself, and the practice happens at a fixed time every day.",
  },
  {
    q: "What does a practice buddy match actually look like in motion?",
    a: "Two people sign up with a city, a time zone, a morning hour, and a stated frequency. A cron job groups them into 60-minute UTC windows, finds people sitting roughly when you are, and sends both sides a confirmation email with single-use tokens. When both click yes, a recurring Google Calendar event is written with RRULE:FREQ=DAILY and a Google Meet URL. Each person also gets a personal /meet/[token] redirect URL that lands at the same room. From there, the morning routine is one tap on a bookmark. As of 2026-05-01 there are 21 such pairs in matched state, three of them in active state where both sides have confirmed and have been showing up daily since 2026-03-08, 2026-03-15, and 2026-03-15. The longest is at 54 days of consecutive daily co-sitting. The pair set spans Pune to Tokyo, Luxembourg to Luxembourg, Paris to Obidos, San Francisco to Ile De France, Berlin to Tampa Bay, and a dozen others.",
  },
  {
    q: "Does a practice buddy on this site teach me how to meditate?",
    a: "No. Nothing on this site teaches the technique, and a practice buddy is explicitly not a teacher. The S.N. Goenka tradition reserves transmission of the technique for authorized assistant teachers inside a 10-day residential course; both the official course materials and the residential setting are part of how the technique is taught. A practice buddy is a peer who is themselves an old student of at least one course. Anything operational (how to sit, how to handle a difficult sensation, how to structure a sit, how to recover from a long break) belongs at dhamma.org and to an authorized teacher at a course, not to a buddy. The matching service exists in the gap between the course and the cushion, where the help needed is not technique but a steady second presence at a fixed time of day.",
  },
  {
    q: "Why is a meditation practice buddy free here when most accountability tools cost money?",
    a: "Two reasons. First, the Goenka tradition is taught on a donation basis, and a paid layer on top of that practice would feel out of step with the lineage the buddies share. Second, the matching service runs as a small piece of code, a Postgres database, a transactional email account, and a Google Workspace OAuth credential. The unit cost of one extra match is low enough that it does not require a charging mechanism. The product landing page commits to the service being free in perpetuity, with optional donations to cover operating costs. There is no premium tier, no streak unlock, no buddy upgrade.",
  },
  {
    q: "Who is this kind of practice buddy actually for?",
    a: "Old students of S.N. Goenka 10-day Vipassana courses who want to hold a daily sit at home and have lost (or expect to lose) consistency without a center schedule. The signup form requires confirming that you have completed at least one such course. Someone who has not yet sat a course can read the guides on this site, head to dhamma.org to find a course, and come back after. Someone who has sat several courses and already holds a daily practice solo can still join; the match is meant to be useful when an existing solo practice is wobbling, but it is not contingent on having lapsed. Anyone using a different tradition (Mahasi, TMI, Zen, Kriya, non-dual) can find tradition-respectful peers in their own community; pairing across traditions has not been the goal of this matcher.",
  },
  {
    q: "Is there an app to install, a profile to maintain, or a streak to keep?",
    a: "No. There is no mobile app, no account, no streak counter, no leaderboard, no profile picture, no badges. The signup is a form on a single web page. Authentication is the email inbox the system sent your tokens to, not a username and password. The daily flow is one bookmarked link that 302-redirects to the same Google Meet URL every morning. Vipassana.cool does not surface a personal dashboard for the practitioner; the operator has an admin console but no end-user one is exposed. The intentional minimalism is partly so the mechanic does not undermine the equanimity the practice itself trains, and partly because adding more surface area would require gating it, which would require a login, which would require a profile, which would require all the things the page deliberately leaves out.",
  },
  {
    q: "What if I want to talk to my buddy about my practice?",
    a: "Nothing in the matching system stops two buddies from talking. The intro email shares first names, cities, time zones, and the Meet link. Two buddies who decide to chat after a sit, swap notes, or message each other separately are completely free to do so. What the system does not provide is a built-in channel for that conversation, a chat surface to drift toward, or any prompt to share progress. The default is silence. Some pairs talk, most do not. The pairs that have been silently co-sitting since March 2026 fall on the not-talking end of the spectrum; they share a room daily and that has been enough.",
  },
  {
    q: "Where do I sign up for one of these matches?",
    a: "Go to vipassana.cool, scroll to the form, and submit your time zone, morning hour, and frequency. The form takes about two minutes. After that, you wait for the next cron tick that finds you a compatible partner, which can take anywhere from minutes to weeks depending on how dense the pool is in your time zone. As of this page there are 43 pending rows in the queue alongside the 21 matched pairs; new signups in dense time zones (US Pacific, IST, CET morning hours) tend to match within a day or two.",
  },
];

const relatedPosts = [
  {
    title: "Partner accountability without a single check-in",
    href: "/t/partner-accountability",
    excerpt:
      "Why the matching service has no weekly call, no progress report, and no nudge layer; the empty Meet room is the entire accountability surface.",
    tag: "Mechanism",
  },
  {
    title: "Practice buddy login: there is no sign-in screen, by design",
    href: "/t/practice-buddy-login",
    excerpt:
      "Email-as-identifier and one-use tokens replace every login flow; four endpoints, zero passwords, no session cookies.",
    tag: "Architecture",
  },
  {
    title: "Find an accountability partner: when 'found' is a recurring calendar event",
    href: "/t/find-accountability-partner",
    excerpt:
      "What the 'found' state actually resolves to inside the matcher, and what fires the moment both partners click yes.",
    tag: "Reference",
  },
];

export default function Page() {
  return (
    <article className="min-h-screen text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              url: PAGE_URL,
              headline:
                "Practice Buddy: Where the Meditation Definition Inverts the Standard One",
              description:
                "Across most domains the practice buddy is an active participant who watches form and gives feedback. In Vipassana the same phrase resolves to a silent co-sitter who joins the same Google Meet at the same wall-clock time and never speaks.",
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
              { name: "Practice Buddy", url: PAGE_URL },
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
            { label: "Practice Buddy" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pb-6 pt-2">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-teal-700">
          A definitional note on a borrowed phrase
        </p>
        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Practice buddy: where the meditation definition inverts the standard one.
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          The phrase is borrowed from gyms, music rooms, language tables, and study halls. In meditation it survives the borrowing but resolves to almost the opposite of what those domains mean by it. This page walks the divergence, then shows the live shape of the meditation version on the matching service this site runs.
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
            Direct answer (verified 2026-05-01)
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            <strong>A practice buddy is a peer paired with you to do a regular practice on the same schedule.</strong>{" "}
            The form varies by domain. In gym, music, language, and study contexts the buddy is an active participant who watches form, gives feedback, and asks how it went. In meditation, specifically the form on this site, the buddy is a fellow old student of an S.N. Goenka 10-day Vipassana course who joins the same Google Meet link at the same wall-clock time every morning, sits silently for the duration of the sit, and leaves without saying anything. Verified live on{" "}
            <Link href="/practice-buddy" className="text-teal-700 underline">
              the product page on this site
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          The phrase across the domains it travels through
        </h2>
        <p>
          Walk through a few domains where someone might say I have a practice buddy without anyone needing to ask what that means. A weightlifter has a buddy who spots them under heavy sets and counts reps. A drummer has a buddy who sits at the kit beside them and trades fills. A second-language learner has a buddy on the other end of a weekly call who corrects grammar, coaches accent, and rotates the target language halfway through. A medical student has a buddy who quizzes them on cards and reads their answers. A coding student has a buddy who pair-programs through a tutorial and points out the bug.
        </p>
        <p>
          Across all of those, the buddy shares a few traits. They are co-present. They watch the practice. They produce feedback. They sometimes hold the timer. They almost always speak during the session. The value the buddy adds is mostly visible: their words, their corrections, their counts, their encouragement. If you removed those outputs, you would have lost most of what made it a buddy in that context.
        </p>
        <p>
          When a practice buddy enters the meditation context, the borrowing keeps the syntax of the phrase but loses every feature in the previous paragraph. The buddy on this site does not watch your form. There is no form for them to watch; the eyes are closed. They do not coach. The technique, in the Goenka tradition this site orbits, is reserved for authorized assistant teachers inside a 10-day residential course at dhamma.org. They do not produce feedback. The session is silent on both sides. They do not ask how it went. The flow ends when each side closes the tab. The phrase survives, the participant role inverts.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <BeforeAfter
          title="The same phrase, two different participant shapes"
          before={{
            label: "In sports, music, language, study",
            content:
              "The buddy is an active participant whose feedback is most of the value. They watch form, count reps, correct grammar, time drills, and ask how it went after.",
            highlights: [
              "Speaks during the session",
              "Watches your form, posture, technique",
              "Provides corrections or encouragement",
              "Times you, counts for you, quizzes you",
              "Holds a weekly check-in or progress review",
            ],
          }}
          after={{
            label: "In meditation, on this site",
            content:
              "The buddy is a co-present practitioner whose only contribution is occupying the other half of a shared video room at the same time you do. There is no spoken layer.",
            highlights: [
              "Joins the same Google Meet link at the same time every day",
              "Sits silently for the duration of the sit",
              "Closes the tab without speaking",
              "Reviews nothing, advises on nothing, teaches nothing",
              "Anything operational about practice goes to dhamma.org",
            ],
          }}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          What the meditation buddy is structurally not asked to do
        </h2>
        <p>
          The cleanest way to describe a meditation practice buddy is by listing the roles the matcher does not assign them. Each absence is a deliberate design choice in the system that pairs them, not an oversight. Some of these absences are about respecting the lineage (technique transmission belongs to teachers, not peers); some are about respecting the practice itself (gamification undermines equanimity); some are about respecting the operator's time (a free service cannot pay anyone to chase a missed week).
        </p>
        <AnimatedChecklist
          title="Roles the matcher does not assign to a practice buddy"
          items={[
            { text: "No teacher role. Practice instructions stay at dhamma.org and at an authorized assistant teacher in a 10-day course." },
            { text: "No coach role. Neither side reviews the other's posture, duration, or struggles." },
            { text: "No timer role. Each person plays their own Goenka recording inside their own headphones." },
            { text: "No accountability-call role. There is no scheduled weekly check-in, no SMART-goal review, no progress template." },
            { text: "No nudge role. The matcher does not poke either side after the intro email lands." },
            { text: "No escalation role. If both rooms stay empty, the partnership ends without any system action." },
            { text: "No content role. The buddy does not deliver guided meditations, sensation vocabularies, or technique notes." },
            { text: "No streak role. There is no counter to defend, no badge to unlock, no leaderboard to climb." },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
          The anchor fact: pairs sitting silently together since March
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-6">
          As of 2026-05-01, the matching service on this site has 21 pairs in matched state and 43 rows in pending state waiting for a compatible partner. Three of those 21 pairs are in active state (both sides have confirmed and the recurring calendar event is live), and they have been showing up to their shared rooms since 2026-03-08, 2026-03-15, and 2026-03-15. The longest of those three is now at 54 days of consecutive daily co-sitting. None of those three pairs have ever held a scheduled check-in call. None have a goal document on file. The only artifact each pair shares with the system is a row in the matches table and a Google Meet URL written into a recurring event.
        </p>
        <ProofBanner
          metric="3 pairs"
          quote="In active state on 2026-05-01, sitting daily since 2026-03-08, 2026-03-15, and 2026-03-15. The longest at 54 days of consecutive co-sitting. No scheduled check-ins, no goal review, no spoken word on either side."
          source="vipassana.cool active matches snapshot, 2026-05-01"
        />
        <p className="text-zinc-700 leading-relaxed mt-2">
          The geography is a useful sanity check on the model. Pairs span Pune and Tokyo, Luxembourg and Luxembourg, Paris and Obidos in Portugal, San Francisco and the Ile De France, Berlin and Tampa Bay, Vancouver and London, Mumbai and New Delhi, Atlanta and Mumbai, Quebec City and New York. The 60-minute UTC window inside the matcher is what controls the pair's wall-clock distance, not raw geography; sitters at 06:00 UTC and 07:00 UTC are inside the window even when their cities are eight time zones apart, because both have committed to a fixed UTC minute on their own end of the call.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Why the silent version still produces accountability
        </h2>
        <p>
          The standard accountability literature describes a system where two people meet weekly to review goals, share what blocked them, and recommit. The bond is verbal: each person reports, each person responds, and the structure produces a small social cost for missing the goal. Studies of goal completion find that around 95 percent of goals get completed when there is a specific accountability appointment with another person, compared to about 10 percent when the goal lives only in the goal-setter's head. The product landing page surfaces those figures because they are the empirical case for adding any partner at all.
        </p>
        <p>
          The meditation case takes that same mechanism and replaces the verbal layer with a presence layer. The appointment is not a check-in call about the practice; the appointment is the practice. If you skip a day, your buddy is in the room when you do not arrive. There is no message to draft and no excuse to construct. The mismatch is silent, immediate, and felt by exactly one other person who was counting on you. The bond is harder to fake than a self-reported streak, harder to push to next week than a check-in call, and easier to keep than an app notification that you can swipe away.
        </p>
        <p>
          That mechanism is also what allows the matcher to keep the surface area minimal. A check-in call would need scheduling, prompts, templates, follow-up, and (eventually) a way to handle missed calls. A presence-based partnership needs none of those. It needs a stable URL and a stable time. The system writes both once at confirmation and never touches the pair again until one side leaves, the calendar event misfires, or both sides go quiet for long enough that the operator marks the match ended.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          What the matcher pairs on, and what it deliberately does not
        </h2>
        <p>
          The signup form on the product page asks for first name, city, time zone, sit times (morning, optionally evening), session duration, frequency (daily, four to six days, etc.), language, course count (a coarse experience proxy), and a confirmation that the signup is from an old student of an S.N. Goenka 10-day course. It does not ask for a written goal, a current struggle in narrative form, a self-reported consistency score, or a chosen meditation app. The reason is simple: those fields do not feed the pairing rule. The pairing rule is a 60-minute UTC window on sit time, an old-student check, a previously-paired guard, and a small set of cool-off filters.
        </p>
        <p>
          A side effect of pairing on time rather than goals is that two buddies often have very different bigger pictures. One may be deepening after their fifth course; the other may be holding a daily sit after their first. One may sit at home with a partner asleep in the next room; the other may sit in a shared dorm with headphones. None of those differences enter the matching layer. What the layer cares about is whether they will be on the cushion at the same UTC minute every day. Once that constraint is satisfied, the rest is theirs to handle (or to ignore, which is the more common outcome).
        </p>
        <p>
          For a longer technical walk through the pairing logic, the eight filter gates a row passes through, and the recurring calendar event the matcher writes at confirmation, see the companion guide on{" "}
          <Link href="/t/find-accountability-partner" className="text-teal-700 underline">
            find an accountability partner
          </Link>{" "}
          and the operational note on{" "}
          <Link href="/t/partner-accountability" className="text-teal-700 underline">
            partner accountability without a single check-in
          </Link>
          .
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          A note on what this page is not
        </h2>
        <p>
          This page does not teach the technique, recommend a sit length, prescribe a posture, or describe what to do with the mind during a sit. The Goenka tradition reserves all of that for an authorized assistant teacher inside a 10-day residential course; both the official course materials and the residential setting are part of how the technique is taught, and a peer-to-peer buddy framework cannot substitute for either. If you arrived at this page with a question about how to sit, how to handle a sensation, how to deal with a difficult day on the cushion, or how to restart after a long lapse, the right next step is{" "}
          <a
            href="https://www.dhamma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            dhamma.org
          </a>{" "}
          and a teacher at a course, not a peer on this site. What this page describes is the matcher: a small piece of software that pairs old students for the daily room, no more.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          Frequently asked
        </h2>
        <FaqSection items={faqs} />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Want to talk through the matching mechanic before signing up?"
          description="Twenty-minute call with the operator. Useful if you want a sanity check on whether a silent practice buddy fits your current practice shape."
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-16">
        <RelatedPostsGrid
          title="Related notes from the matcher"
          subtitle="Keep reading"
          posts={relatedPosts}
        />
      </section>

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk through the practice buddy mechanic before you sign up."
      />
    </article>
  );
}
