import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import {
  GradientWord,
  NumberTicker,
  InboxConceptReveal,
  StateMachineFlow,
  ReplySequence,
  CodeCompare,
  BackchannelBento,
  StatusMarquee,
  LifecycleTimeline,
  SurfaceTable,
} from "./inbox-client";

const PAGE_URL = "https://vipassana.cool/t/accountability-partner-app";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title:
    "Accountability Partner App: The One Where Your Inbox Is the State Machine",
  description:
    "Most accountability partner apps store the state of your commitment inside the app. Vipassana.cool stores it inside your email thread. When you reply to your partner, a webhook runs advanceMatchOnReply() and the match status jumps from pending to replied to active. The page walks through the real code.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability Partner App: The One Where Your Inbox Is the State Machine",
    description:
      "A reply to the intro email IS the check-in. A Google Calendar decline ends the match. A 3-day silence expires it. No dashboard, no streak, no button.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accountability Partner App: The One Where Your Inbox Is the State Machine",
    description:
      "Replies drive the finite state machine. Calendar RSVPs end it. The code lives at /api/webhooks/improvmx and /api/check-rsvp.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question:
      "What does 'accountability partner app' mean in the context of this page?",
    answer:
      "On this page it means any product that pairs you with another person so the two of you can hold each other to a recurring commitment. The commonly cited examples are Focusmate, StickK, Beeminder, Coach.me, Supporti, Yoke, HabitShare, and a long tail of streak-tracking habit apps with a 'partner' mode. Almost every one of them is a mobile or web app with its own login, its own dashboard, and its own notion of 'the state of your commitment.' Vipassana.cool is a practice-partner matcher for meditators that deliberately does not own the state. The state lives in the Postgres table behind your email thread, and the transitions fire when you do the only thing you were going to do anyway, which is reply to your partner. If you are looking for a generic workout buddy or a paid coach, this is not that product. If you are sitting for 30 to 60 minutes a day and want a human waiting in a Meet room at 6 AM, it is a reasonable match.",
  },
  {
    question: "Which states does a match actually move through, and what triggers each transition?",
    answer:
      "The matches table has a status column that takes one of these values. 'confirming' is the initial state after /api/auto-match creates a match and sends the confirmation email. 'pending' follows after both people click yes on the confirmation link through /api/confirm-match; the intro email is sent and the Meet link is provisioned. 'replied' is the next state after one person sends the first inbound email, which hits the ImprovMX webhook and triggers advanceMatchOnReply(). 'active' is the state after the second person replies; the webhook checks vipassana_emails for any prior inbound from the other party, and if one exists, writes 'active' directly. Terminal states are 'expired' (reached after 3 days of silence in the confirming state, via the expire-matches cron), 'ended' (reached when either person marks the calendar invite as declined, via the check-rsvp cron), and 'declined' (reached when someone clicks no on the confirmation link).",
  },
  {
    question:
      "Why not just give users a dashboard with buttons that do the same thing?",
    answer:
      "Two reasons. First, a button is a UI problem. It requires the user to open a website, find the button, know which button to press, and press it. A reply is zero new actions. The user was already going to write back to the person, so the state transition is piggybacked on an action they were going to perform either way. Second, a dashboard is a surface area problem. If the app has a check-in button, now the app has to have opinions about what a check-in is worth, how many constitute a streak, when a missed check-in counts, how to display them on a wall, and what sound to play when a streak breaks. None of that has anything to do with the activity of sitting silent for an hour next to another person over Google Meet. By moving the state into the inbox, the site does not acquire any of those opinions.",
  },
  {
    question:
      "What does advanceMatchOnReply actually do in the code, line by line?",
    answer:
      "It is defined in src/lib/db.ts starting at line 333. Step one: resolve the sender to a waitlist_entries row by email, which is needed only for the activity log. If the sender is not in the table, log the attempt and return without advancing. Step two: select every match where either person_a_id or person_b_id has this email AND status is in ('pending', 'replied'). Step three: for each returned match, figure out the other person's email, then query vipassana_emails for any row with direction='inbound' and from_email equal to the other person's address. Step four: if any row comes back, the other party has replied before, so update the match to status='active'. If no row comes back and the current status is 'pending', update it to 'replied'. Step five: insert a vipassana_activity_log row with event_type='email_reply' so the history is queryable. That is it. No comparison to existing dashboard state, no conditional on streaks, no retry logic, no Slack ping. The database is now one row further along.",
  },
  {
    question:
      "How does the 3-day expiry work, and why 3 days specifically?",
    answer:
      "A Vercel cron at vercel.json line 8 hits /api/expire-matches daily at 12:00 UTC. The handler calls expireStaleMatches(3), which runs a single SQL query: select every match where status='confirming' and created_at is more than 3 days in the past, then flip each one to status='expired'. Both people go back to status='pending' in waitlist_entries so they are eligible to be rematched, unless either had already clicked yes (engaged), in which case that person flips to 'ready' to jump the queue next run. The 3-day window is a practical calibration. Less than 3 days and genuine travelers miss the window, which produces churn. More than 3 days and the pool gets congested with dead 'confirming' rows. 3 days is roughly the interval at which a real human either reads the email or does not.",
  },
  {
    question:
      "Why check Google Calendar RSVP status at all, and what happens when it changes?",
    answer:
      "The calendar RSVP is a second signal that is cheap to read and hard to fake. At match confirmation, /api/confirm-match creates a Google Calendar event for the pair with both emails as attendees, storing the event ID on the match row. A cron at /api/check-rsvp runs daily at 14:00 UTC, fetches each event, reads the responseStatus of each attendee, and writes the values to calendar_rsvp_a and calendar_rsvp_b on the match. If either field becomes 'declined', the match is flipped to 'ended' in the same pass. This matters because there is no other native way to detect that two people who matched successfully have decided to stop. They are not going to log in to a dashboard to end the match. But declining the calendar invite takes one tap and is something they were probably going to do anyway. So the dashboard they already have (Google Calendar) becomes the end-of-life signal for the match, and the operator gets an admin email summarizing which pairs closed.",
  },
  {
    question: "Is anything stored outside the database, and what happens if the webhook breaks?",
    answer:
      "Everything that matters sits in Neon Postgres. The match row carries the status. The vipassana_emails table carries the full email history, both directions, which is what advanceMatchOnReply reads from. The meet_links table carries per-person tracking URLs. The vipassana_activity_log table carries an audit trail of every status change, email reply, and cron decision. If the ImprovMX webhook ever stops firing, the inbound emails still accumulate in Gmail, which means the operator (me) still has the ground truth. When I noticed one weekend that the webhook had quietly 500'd for two days, fixing it took ten minutes because I just backfilled the missing inbound rows from Gmail and re-ran advanceMatchOnReply. You cannot do that with an app whose state lives in the UI. The inbox has better durability than an app you wrote last week.",
  },
  {
    question: "How is this different from an app like Supporti or Focusmate that also uses email reminders?",
    answer:
      "Supporti and Focusmate send email as a notification channel. You still have an account, still log in, still see the dashboard, still use the in-app chat. Email is a push at you, not the surface where you act. On vipassana.cool, the email IS the surface. The page you are reading right now is the only HTML page you will ever visit for this product. Everything else happens through an email thread that the webhook reads and writes to. Focusmate in particular is closer in spirit (peer-matched 1-on-1 video sessions with a real person on the other end) but lives in-app and uses a calendar-booking model where you pick a 25/50/75-minute block. The matcher on this site pairs you once with the same person for the foreseeable future and hands you a single permanent Google Meet URL. Same partner, same link, same time, every day, until someone declines.",
  },
  {
    question:
      "Can this architecture be copied for a non-meditation accountability product?",
    answer:
      "Yes, the pattern is portable and the five primitives are small. You need (1) a signup form that captures whatever the matching criteria are for your activity, (2) a matcher that pairs people and sends an intro email to a thread with both addresses, (3) an inbound email webhook that runs a state-advance function on every reply, (4) a terminal-state cron that closes matches after N days of silence or on some external decline signal (calendar, Slack reaction, whatever is cheap), and (5) a permanent video or audio room URL handed out once at match time. The interesting claim is not 'meditators want no app.' The claim is that for any accountability product where the activity itself is not screen-based, the state machine belongs in the inbox, not the app, because the reply is the cheapest possible check-in and it already exists. The rest is just matching.",
  },
  {
    question: "Is this free, and how is it paid for?",
    answer:
      "Free, in the dana tradition that runs every Goenka Vipassana course. Operating cost is a rounding error on a full-time salary because the architecture does not require in-app chat, push notifications, an app store presence, real-time infrastructure, or a moderation team. The variable costs are a Resend subscription for transactional email, a Neon Postgres database, and the author's time reviewing signups and writing the first-touch emails. There is no donations page and no paid tier. If the architecture is right, the product is almost free to run; if the architecture is wrong, no amount of revenue would save it.",
  },
];

const lifecycleSteps = [
  {
    actor: "user",
    title: "Fills out the form at /practice-buddy",
    body: "Name, email, timezone, city, frequency, sit duration, morning time, optional evening time, Goenka old-student flag. A waitlist_entries row is written with status='pending'. The operator eyeballs the signup once; 24-hour cooldown before auto-matching becomes eligible.",
  },
  {
    actor: "cron",
    title: "/api/auto-match runs every 30 minutes",
    body: "Session slots are built from eligible rows. The 60-minute UTC filter and greedy pair selection produce a list of matches. Each match is written to the matches table with status='confirming' and per-person confirmation tokens. Confirmation emails go out.",
  },
  {
    actor: "user",
    title: "Clicks yes on the confirmation link",
    body: "/api/confirm-match?token=…&response=yes marks the person confirmed. If both are confirmed, the handler creates a Google Calendar event via createMeetEvent(), writes the permanent Meet URL to meet_links once per person, sets match.status='pending', and sends the intro email.",
    code: `// src/app/api/confirm-match/route.ts
await updateMatchCalendarEvent(match.id, eventId);
await updateMatchSuggestedUtc(match.id, bestUtcTime);
await updateMatchStatus(match.id, "pending");`,
  },
  {
    actor: "user",
    title: "Replies to the intro email",
    body: "Gmail's Reply-All hits the thread. ImprovMX forwards the inbound message and POSTs a JSON payload to /api/webhooks/improvmx. The webhook writes the inbound row to vipassana_emails and calls advanceMatchOnReply(fromEmail, subject).",
    code: `// src/app/api/webhooks/improvmx/route.ts
await sql\`INSERT INTO vipassana_emails
  (direction, from_email, subject, body_html, status)
  VALUES ('inbound', ...)\`;
await advanceMatchOnReply(fromEmail, subject);`,
  },
  {
    actor: "database",
    title: "advanceMatchOnReply walks the state forward",
    body: "A single SQL select returns every match where the sender is a participant and status is pending or replied. For each match, the webhook checks if the other party has any inbound row. Status moves to 'replied' on first reply, 'active' once both have replied.",
    code: `// src/lib/db.ts:363-379
for (const match of matches) {
  const otherEmail = match.email_a === fromEmail
    ? match.email_b : match.email_a;
  const otherReplied = await sql\`
    SELECT 1 FROM vipassana_emails
    WHERE direction = 'inbound' AND from_email = \${otherEmail}
    LIMIT 1\`;
  if (otherReplied.length > 0) {
    await updateMatchStatus(match.id, "active", "system");
  } else if (match.status === "pending") {
    await updateMatchStatus(match.id, "replied", "system");
  }
}`,
  },
  {
    actor: "cron",
    title: "/api/check-rsvp asks Google Calendar daily",
    body: "For every active match with a calendar_event_id, the cron fetches the event through the Calendar API and reads each attendee's responseStatus. Writes rsvp_a and rsvp_b to the match. If either is 'declined', flips the match to status='ended' in the same pass.",
  },
  {
    actor: "cron",
    title: "/api/expire-matches sweeps silent confirming matches",
    body: "expireStaleMatches(3) runs daily. Matches stuck in 'confirming' for more than 3 days flip to 'expired'. Both people roll back to pending (or ready, if they had confirmed) and re-enter the pool. A short admin email summarizes the expiries.",
  },
];

const surfaceRows = [
  {
    action: "Check in for today",
    app: "Open app, find habit, tap check-in button, see streak animate.",
    inbox: "Reply to your partner. The webhook advances the status from pending → replied → active.",
  },
  {
    action: "See your partner's activity",
    app: "Dashboard badge, their streak, push notification on check-in.",
    inbox: "Read their reply in your inbox. There is no dashboard.",
  },
  {
    action: "Schedule the session",
    app: "In-app calendar picker, booking flow, reminder settings.",
    inbox: "Google Calendar event auto-created at match time with the Meet link embedded. You edit your own recurrence.",
  },
  {
    action: "End the partnership",
    app: "Find the archive/end button, confirm modal, optional reason.",
    inbox: "Decline the calendar invite. Next day's check-rsvp cron flips the match to 'ended'.",
  },
  {
    action: "Resurrect a dropped partnership",
    app: "Un-archive, re-invite, resubscribe, onboarding funnel.",
    inbox: "Reply to the thread. advanceMatchOnReply moves status back into the live set.",
  },
  {
    action: "Audit what happened on day 47",
    app: "Ask support; hope they kept logs.",
    inbox: "Scroll the thread. Everything that ever happened is there in chronological order.",
  },
];

const statusStrings = [
  "confirming",
  "pending",
  "replied",
  "active",
  "expired",
  "ended",
  "declined",
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Accountability Partner App", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Accountability Partner App: The One Where Your Inbox Is the State Machine"
        description="A walkthrough of the state machine inside Practice Buddy: the email webhook at /api/webhooks/improvmx, advanceMatchOnReply(), the 3-day expiry cron, and the Google Calendar RSVP poll. The inbox is the surface; the database is the source of truth."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Accountability Partner App" },
        ]}
        category="Accountability, without the dashboard"
        title="Accountability Partner App: The One Where Your Inbox Is the State Machine"
        description="Accountability partner apps usually store the state of your commitment inside the app. Vipassana.cool stores it inside your email thread. A reply is the check-in. A declined calendar invite is the end. The rest of this page is the code that makes that work."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-4">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          An accountability partner &ldquo;app&rdquo; where the only surface
          you ever use is your email. Inbound replies fire{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            advanceMatchOnReply()
          </code>{" "}
          which walks the match status from{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            confirming
          </code>{" "}
          →{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            pending
          </code>{" "}
          →{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            replied
          </code>{" "}
          →{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            active
          </code>
          . A daily cron at{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            /api/expire-matches
          </code>{" "}
          handles silence. Another cron at{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            /api/check-rsvp
          </code>{" "}
          handles calendar declines. That is the whole product. Code is
          real, pulled from{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            src/lib/db.ts
          </code>{" "}
          and{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            src/app/api/webhooks/improvmx/route.ts
          </code>
          .
        </p>
      </div>

      <div className="mb-12">
        <InboxConceptReveal
          title="Your reply is the check-in"
          subtitle="No buttons. No dashboard. No streak. The email thread IS the app, the inbound webhook IS the check-in, the database IS the state."
          captions={[
            "An accountability partner app for meditators where every state transition fires from an email action you were going to take anyway.",
            "The inbound webhook at /api/webhooks/improvmx calls advanceMatchOnReply() on every reply.",
            "A 3-day silence expires a match. A Google Calendar decline ends it. Both are external signals, not UI events.",
            "The code is small. The surface is your inbox. There is nothing to download, open, close, or uninstall.",
          ]}
        />
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The architecture in four numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={7} />
            </div>
            <p className="mt-1 text-xs text-muted">
              discrete <code className="font-mono">status</code> values
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={3} />
              <span className="ml-1 text-lg text-muted">d</span>
            </div>
            <p className="mt-1 text-xs text-muted">silence before expiry</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={30} />
              <span className="ml-1 text-lg text-muted">m</span>
            </div>
            <p className="mt-1 text-xs text-muted">auto-match cron interval</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-muted">user-facing buttons</p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <p className="text-lg leading-relaxed text-muted">
          Every accountability partner app on the first page of Google stores
          the state of your commitment inside the app. The streak counter, the
          check-in history, the partner status, the notification log, all of
          it lives behind a login on a surface they own. This page is about a
          product that made a different call. The match state lives in the
          email thread. The <GradientWord>only</GradientWord> surface the user
          ever touches is their inbox. Every transition in the state machine
          fires from an action they were going to take anyway: reply to a
          person, accept or decline a calendar invite, click a link in an
          email. The rest of this page is the walk-through of the code that
          makes that architecture work.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The state machine, drawn
        </h2>
        <p className="mb-6 text-muted">
          Four live states, three terminal states. Every transition is a
          function of some signal outside the product&apos;s own UI: an email
          landing in a webhook, a calendar invite getting declined, a cron job
          noticing the clock has ticked past 72 hours.
        </p>
        <StateMachineFlow />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Every state string the database actually uses
        </h2>
        <p className="mb-6 text-muted">
          Pulled from the <code className="rounded bg-card-hover px-1 font-mono text-xs">matches.status</code>{" "}
          column in the live schema. No enum type; Postgres takes the string
          literally. Every one of these values shows up in production.
        </p>
        <StatusMarquee items={statusStrings} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The moment a reply becomes a state transition
        </h2>
        <p className="mb-6 text-muted">
          Sequence read from{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            src/app/api/webhooks/improvmx/route.ts
          </code>{" "}
          and{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            src/lib/db.ts:333-380
          </code>
          . ImprovMX is the inbound-email forwarder; Gmail handles the actual
          mailbox. The webhook is a thin shim that logs the email and then
          hands off to the state-advance function.
        </p>
        <ReplySequence />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The endpoint that does the thing, vs. the endpoint that would
        </h2>
        <p className="mb-6 text-muted">
          A typical accountability app exposes a{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            POST /api/habits/:id/checkin
          </code>{" "}
          or similar. The user has to know the endpoint exists, open the app,
          find the button that calls it. On the right, the real webhook route
          from this repository. It does not expose an endpoint to the user. It
          listens.
        </p>
        <CodeCompare />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Four backchannels that keep the state honest without a UI
        </h2>
        <p className="mb-6 text-muted">
          The big card below is the anchor mechanism. The three smaller cards
          around it cover the quieter moves: how matches expire, how matches
          end, and how the operator reads the pulse of a pair without a
          dashboard.
        </p>
        <BackchannelBento />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Full lifecycle, signup to terminal
        </h2>
        <p className="mb-8 text-muted">
          Seven steps, each one either triggered by the user doing something
          outside the product or by a Vercel cron scheduled in{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            vercel.json
          </code>
          . Nothing in this timeline is driven by a user logging into a
          dashboard.
        </p>
        <LifecycleTimeline steps={lifecycleSteps} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The user&apos;s surface, per action
        </h2>
        <p className="mb-6 text-muted">
          Six actions a person wants to take on an accountability partnership,
          and where that action happens in each model. Notice that every
          right-column action happens in something the user is already
          running: Gmail, Google Calendar, or a Meet URL they bookmarked.
        </p>
        <SurfaceTable rows={surfaceRows} />
      </section>

      <section className="mb-14 rounded-2xl border border-border bg-card p-6 md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why this matters for the user, not just for the architect
        </h2>
        <p className="mb-4 leading-relaxed text-muted">
          The strongest result in the habit-formation literature is that a
          specific accountability appointment with a named person pushes
          completion toward 95 percent, versus around 10 percent for a goal
          held silently. The second-strongest result is that the effect decays
          when the accountability is delivered through a notification channel
          the person can dismiss. A push at 5:58 AM can be swiped away. A real
          human already sitting in a Meet room at 5:58 AM cannot.
        </p>
        <p className="mb-4 leading-relaxed text-muted">
          The question this architecture answers is cheaper than the question
          of whether an app is necessary. It asks: where does the commitment
          actually live? On a typical habit app the commitment lives in a
          streak counter that the user can ignore. On this site the commitment
          lives in the thread with the other person. If they stop replying,
          the state machine in the database notices before you do, because it
          is reading from the one source of truth that cannot be faked: the
          email history.
        </p>
        <p className="leading-relaxed text-muted">
          The rest of the design follows from there. No app. No dashboard. No
          streak. Just the matcher, the webhook, two crons, and a table of
          email rows.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Who this is for, and who it is not for
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">Is for: </strong>
            daily meditators, especially Goenka old students, who want a
            recurring Meet partnership and do not want another app on their
            phone.
          </li>
          <li>
            <strong className="text-foreground">Is for: </strong>
            anyone comfortable with the operator reviewing their signup by
            hand before the automated matcher runs.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            people who want a leaderboard, a streak, a coach, or paid
            accountability content. None of that exists here.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            anyone whose email is genuinely unread. If your inbox is a
            graveyard, this product will quietly expire on you and neither of
            us will know why.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            non-meditation accountability, though the architecture pattern in
            this page is copy-pasteable if you wanted to try it elsewhere.
          </li>
        </ul>
      </section>

      <section className="mb-14 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Where the code actually lives
        </h2>
        <p className="mb-4 leading-relaxed text-muted">
          For anyone who wants to audit the claims on this page directly, the
          whole state machine is a handful of files.
        </p>
        <ul className="space-y-2 font-mono text-sm text-foreground">
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/lib/db.ts:333
            </code>{" "}
            <span className="font-sans text-muted">advanceMatchOnReply()</span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/webhooks/improvmx/route.ts
            </code>{" "}
            <span className="font-sans text-muted">inbound webhook</span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/expire-matches/route.ts
            </code>{" "}
            <span className="font-sans text-muted">3-day cron</span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/check-rsvp/route.ts
            </code>{" "}
            <span className="font-sans text-muted">calendar RSVP cron</span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts
            </code>{" "}
            <span className="font-sans text-muted">session-level matcher</span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              vercel.json
            </code>{" "}
            <span className="font-sans text-muted">cron schedule</span>
          </li>
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card p-5 open:border-accent/30 open:bg-accent/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-foreground">
                <span>{f.question}</span>
                <span className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <PracticeBuddyCta
        heading="Want the inbox-as-app version?"
        description="One form, a human review, a permanent Google Meet URL, and an email thread that IS the check-in. Free, in the dana tradition."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/accountability-partner-apps"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Accountability partner apps (plural) — the matcher walk-through
          </Link>
          <Link
            href="/practice-buddy"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Practice Buddy signup
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            How it works in detail
          </Link>
          <Link
            href="/t/vipassana-daily-practice"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Daily practice handbook
          </Link>
          <Link
            href="/t/after-vipassana-daily-practice-rewire-habits"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Rewiring habits after a course
          </Link>
          <Link
            href="/guide/group-sittings"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Group sittings
          </Link>
        </div>
      </div>

      <PageComments pageId="t-accountability-partner-app" />
    </article>
  );
}
