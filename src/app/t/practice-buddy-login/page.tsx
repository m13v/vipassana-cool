import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  ComparisonTable,
  AnimatedChecklist,
  AnimatedCodeBlock,
  SequenceDiagram,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type ComparisonRow,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/practice-buddy-login";
const PUBLISHED = "2026-04-28";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Practice Buddy Login: There Is No Sign-In Screen, By Design",
  description:
    "If you matched with a buddy through vipassana.cool, you may have hunted for a login page. There isn't one. The site has no accounts, no passwords, and no sessions. This page explains what authenticates you instead, with the exact endpoints involved.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Practice Buddy Login: There Is No Sign-In Screen, By Design",
    description:
      "Vipassana.cool's Practice Buddy was built without accounts. Email is the identifier; one-use tokens delivered to your inbox replace every login flow. Walk through the four endpoints that handle it.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Buddy Login: there is no sign-in screen",
    description:
      "Email-as-identifier and one-use tokens replace every login flow on vipassana.cool's Practice Buddy. Four endpoints, zero passwords.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "Why does vipassana.cool have no Practice Buddy login at all?",
    a: "Because adding accounts would have been a feature that did nothing for the user and added a real obstacle for the operator. The whole product is one form, one human review, one intro email, and one permanent Google Meet link per pair. Nothing else needs gating. A login screen would only protect a personal dashboard that does not exist on this site, and the operator (Matt) does not want a dashboard sitting between a meditator and their sit. The unauthenticated flow also matches the spirit of the tradition: courses run on dana, signups are read by a human, and the relationship that does the work is the one between you and the buddy you got matched with, not between you and a profile screen.",
  },
  {
    q: "What identifies me on the site if not a username and password?",
    a: "Your email address, plus single-use tokens that get written into emails sent to that address. The signup form at /practice-buddy stores your email in the waitlist_entries table. After that, every endpoint that mutates anything about your row checks one of two things: either it accepts an email and looks up the row by email (status checks), or it accepts a token from the URL and looks up the row by that token (everything else, including yes/no on a match, the redirect to your buddy's Google Meet link, and unsubscribing). Tokens are unguessable strings written once when an email is sent and validated on click. Possession of the email inbox is treated as proof you are the row.",
  },
  {
    q: "Where exactly does the login I expected get replaced?",
    a: "Four endpoints, in this order. /api/waitlist (POST) creates your row when you sign up; no auth, validated by email format and basic name sanity. /api/waitlist/lookup (GET) takes ?email= and returns your status, name, time zone, sit times, and frequency, with no header check at all. /api/confirm-match (GET) takes ?token=... and ?response=yes|no, and validates the token against matches.person_a_token or matches.person_b_token. /api/unsubscribe (GET) takes ?token=... and validates against waitlist_entries.unsubscribe_token. The /meet/[token] route validates against meet_links.token, logs the click, and 302-redirects to the actual Google Meet URL. Five surfaces, four token columns, zero session cookies.",
  },
  {
    q: "Is the lookup endpoint really unauthenticated? What if I type a stranger's email?",
    a: "The endpoint is unauthenticated, and you can paste a stranger's email and see their first name, city, time zone, sit times, and old-student status. Email and last name are not returned. The reasoning is that those fields are already shown publicly on the waitlist table at /practice-buddy under 'Who's Waiting' for any pending row, so the lookup endpoint is not surfacing anything more than the public waitlist already does. It exists so a returning practitioner can prefill the signup form without retyping every preference, not to gate access to private data. If that trade-off ever stops being acceptable, the endpoint becomes the obvious place to add a magic-link step. As of this page it has not been added.",
  },
  {
    q: "What happens if I lose access to the email I signed up with?",
    a: "You sign up again with the new email. There is no profile to migrate, no badge to keep, no streak to recover. The cron's prior-pair guard works on row IDs in the matches table, so the new row is treated as a separate person at the matching layer. If you previously confirmed a match (status = 'ready') under the old email, that flag does not transfer; the new row starts as 'pending'. The two real consequences are that any old confirmation tokens already mailed to the old address become useless once that match expires, and any /meet/[token] link tied to the old row stops being yours. The Google Meet URL itself still works for your buddy because Google Meet's URL is independent of our token.",
  },
  {
    q: "If anyone with the token can act, what stops a stranger from clicking my confirmation link?",
    a: "Nothing stops a person who already has the token, which is exactly how email magic links work everywhere. The defense is that the token is sent to one inbox, is unguessable (UUID-grade), and is single-use for state changes. /api/confirm-match marks the row as 'engaged' on first 'yes' click and refuses to flip the state again. /api/unsubscribe is idempotent: a second hit on an already-unsubscribed token redirects to the success page without re-firing emails or PostHog events, which is in the route at lines 36 to 39. So the threat model is the same as any password-reset link: if your inbox is compromised, the attacker can act on your behalf, and there is no second factor here. For a free, donation-funded peer-pairing tool serving meditators, that has been deemed proportionate.",
  },
  {
    q: "How does the daily sit work without a login persisting state across days?",
    a: "It does not need to. Each matched pair gets a permanent Google Meet URL written into the meet_links table once, at confirmation time. Each person also gets their own /meet/[token] redirect URL, which is what shows up in their intro email. Every morning, you click that link, the route reads the token, logs a row in meet_clicks (so the operator can tell whether anyone showed up this week), and 302s you to the same Google Meet URL as yesterday. There is no session, no daily login, no auth state to refresh. Bookmark the redirect, add it to a phone home screen, and the daily flow is one tap.",
  },
  {
    q: "Does any of this teach how to meditate?",
    a: "No. Nothing on vipassana.cool teaches the technique. The S.N. Goenka tradition reserves transmission of the technique for authorized assistant teachers inside 10-day residential courses at dhamma.org. This page describes the authentication model of one tool that helps old students sit together. Any question about how to sit, how to work with a sensation, how to handle difficulty on the cushion, or how to structure a daily practice goes to dhamma.org and to an authorized assistant teacher at a 10-day course, not here.",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Identity primitive",
    competitor: "username + password (or OAuth provider)",
    ours: "email address, plus single-use tokens written into emails",
  },
  {
    feature: "Session model",
    competitor: "server session or signed JWT, refreshed periodically",
    ours: "no session at all; each request carries its own credential",
  },
  {
    feature: "Forgot-password flow",
    competitor: "email a reset link, set new password, log in again",
    ours: "no password to forget; just sign up again with the working email",
  },
  {
    feature: "Daily sit access",
    competitor: "open app, log in if expired, navigate to today's session",
    ours: "click the bookmarked /meet/[token] redirect, land in Google Meet",
  },
  {
    feature: "Code surface that handles auth",
    competitor: "auth middleware, session store, password hashing, CSRF",
    ours: "four route handlers that read one token column or one email each",
  },
  {
    feature: "What a hijacked credential exposes",
    competitor: "account, history, settings, sometimes payment info",
    ours: "ability to confirm or decline one match, or unsubscribe one row",
  },
  {
    feature: "What an operator gets out of it",
    competitor: "user dashboard, retention loops, churn metrics",
    ours: "an inbox of intro-email replies and a /admin/matching console",
  },
];

const lookupCode = `// src/app/api/waitlist/lookup/route.ts — the entire file
import { NextRequest, NextResponse } from "next/server";
import { getEntryByEmail } from "@/lib/db";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email || !email.includes("@")) {
    return NextResponse.json({ found: false });
  }

  const entry = await getEntryByEmail(email.toLowerCase().trim());
  if (!entry) return NextResponse.json({ found: false });

  return NextResponse.json({
    found: true,
    status: entry.status,
    name: entry.name,
    isOldStudent: entry.is_old_student,
    timezone: entry.timezone,
    city: entry.city,
    frequency: entry.frequency,
    morningTime: entry.morning_time,
    eveningTime: entry.evening_time,
    sessionDuration: entry.session_duration,
    // ... a few more matching-relevant fields
  });
}`;

const tokenCode = `// src/app/meet/[token]/route.ts — the redirect that handles "open the room"
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const sql = neon(process.env.DATABASE_URL!);

  const rows = await sql\`
    SELECT meet_url, match_id, person_id FROM meet_links WHERE token = \${token}
  \`;
  if (rows.length === 0) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const { meet_url, match_id, person_id } = rows[0];
  // Click is logged for the operator, not gated
  await sql\`
    INSERT INTO meet_clicks (token, match_id, person_id, meet_url, ip, user_agent)
    VALUES (\${token}, \${match_id}, \${person_id}, \${meet_url}, \${ip}, \${ua})
  \`;
  return NextResponse.redirect(meet_url);
}`;

export default function Page() {
  return (
    <article className="text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              url: PAGE_URL,
              headline:
                "Practice Buddy Login: There Is No Sign-In Screen, By Design",
              description:
                "Why vipassana.cool's Practice Buddy ships with no login, and what authenticates you in its place.",
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
              {
                name: "Practice Buddy Login",
                url: PAGE_URL,
              },
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
            { label: "Practice Buddy Login" },
          ]}
        />
      </div>

      <header className="max-w-4xl mx-auto px-6 pb-6 pt-2">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-teal-700">
          A short note on a missing screen
        </p>
        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Practice Buddy login: there is no sign-in screen, by design.
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl">
          If you signed up for the Practice Buddy program on vipassana.cool and
          went looking for a login, you would not have found one. The site has
          no accounts, no passwords, and no sessions. This page explains what
          handles authentication in their place, at the level of the actual
          endpoints in the repo.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="9 min read"
        className="mb-10"
      />

      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="rounded-xl border border-teal-200 bg-teal-50 p-5">
          <p className="text-sm font-semibold text-teal-800 mb-2">
            Short answer
          </p>
          <p className="text-sm text-zinc-700 leading-relaxed">
            <strong>Practice Buddy on vipassana.cool has no login URL.</strong>{" "}
            You authenticate by holding the email inbox the system mailed your
            tokens to. To check your row,{" "}
            <Link href="/practice-buddy" className="text-teal-700 underline">
              go to /practice-buddy
            </Link>{" "}
            and submit the form again with the same email; you will see your
            existing answers prefilled and your match status if any. To act on
            a pending match, find the intro or confirmation email in your inbox
            and click the button there.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Why this page exists
        </h2>
        <p>
          A meditator who matched through vipassana.cool sometimes lands here
          asking the same thing the rest of the web assumes: where do I sign
          back in? Most pages currently surfaced for this topic answer some
          other product. A piano studio practice tool. A GP rota planner used
          by UK clinics. A music school&apos;s parent portal. A meditation
          buddy app like Headspace, evernow, or Yoga Buddy where the buddy
          feature lives behind a normal account. None of those are the program
          that paired you with someone for daily Vipassana over Google Meet.
        </p>
        <p>
          The honest answer for the vipassana.cool program is that the login
          you are looking for never existed. The system was built deliberately
          without one. There is nothing to recover, nothing to reset, and no
          dashboard hidden behind a forgotten password. What follows is a tour
          of what handles your row, your match, and your daily Meet link in
          place of a login.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">
          What this Practice Buddy does not have
        </h2>
        <p className="text-zinc-600 mb-2">
          This is the explicit list. Each absence is a deliberate choice in the
          code, not an unfinished feature.
        </p>
        <AnimatedChecklist
          title="Surfaces that do not exist on this site"
          items={[
            { text: "No /login or /signin route. The path returns 404." },
            { text: "No password column on waitlist_entries." },
            { text: "No session cookie. No Set-Cookie auth header anywhere." },
            { text: "No JWT signing or verifying outside admin tooling." },
            { text: "No OAuth provider, no Google sign-in, no Apple sign-in." },
            { text: "No mobile app to install. iOS and Android stores have nothing to log into." },
            { text: "No personal dashboard. /practice-buddy is the same page for every visitor." },
            { text: "No streak counter, no points, no profile to defend." },
          ]}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
          What replaces login: email plus one-use tokens
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          Authentication on the practitioner side is split across two
          primitives. The first is the email address itself, which is the
          primary key on the waitlist row. The second is a small set of
          unguessable tokens that get written once into the row when an email
          goes out, and validated on the link click. Possession of the inbox
          where those emails landed is the credential.
        </p>
        <SequenceDiagram
          title="From signup to your buddy's Meet link"
          actors={["Practitioner", "vipassana.cool", "Inbox", "Google Meet"]}
          messages={[
            {
              from: 0,
              to: 1,
              label: "POST /api/waitlist (form)",
              type: "request",
            },
            {
              from: 1,
              to: 1,
              label: "INSERT waitlist_entries (email is the key)",
              type: "event",
            },
            {
              from: 1,
              to: 2,
              label: "send confirm email with token in URL",
              type: "request",
            },
            {
              from: 0,
              to: 2,
              label: "open inbox, click 'Yes, introduce me'",
              type: "request",
            },
            {
              from: 2,
              to: 1,
              label: "GET /api/confirm-match?token=...&response=yes",
              type: "request",
            },
            {
              from: 1,
              to: 3,
              label: "createMeetEvent (only if both confirmed)",
              type: "request",
            },
            {
              from: 1,
              to: 2,
              label: "send intro email with /meet/[token] link",
              type: "response",
            },
            {
              from: 0,
              to: 1,
              label: "tomorrow: GET /meet/[token]",
              type: "request",
            },
            {
              from: 1,
              to: 3,
              label: "302 to permanent Google Meet URL",
              type: "response",
            },
          ]}
        />
        <p className="text-zinc-700 leading-relaxed mt-4">
          Five surfaces touch authentication, and four of them validate by
          looking up a single token column: matches.person_a_token,
          matches.person_b_token, waitlist_entries.unsubscribe_token, and
          meet_links.token. The fifth, the lookup endpoint, validates by
          email. There is no shared session anywhere in the stack.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
          The lookup endpoint, in full
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The clearest evidence that there is no login is the file at{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            src/app/api/waitlist/lookup/route.ts
          </code>
          . It is the entire status-check surface for a returning practitioner.
          A fresh repo grep for{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            password
          </code>
          ,{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            bcrypt
          </code>
          ,{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            getServerSession
          </code>
          , or{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            jwt.sign
          </code>{" "}
          across the user-facing routes returns zero matches. The only
          password input in the entire codebase sits at{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            src/components/admin/matching-dashboard.tsx:209
          </code>
          , and that gates the operator&apos;s review screen at /admin, not any
          practitioner flow.
        </p>
        <AnimatedCodeBlock
          code={lookupCode}
          language="typescript"
          filename="src/app/api/waitlist/lookup/route.ts"
        />
        <p className="text-zinc-700 leading-relaxed mt-4">
          Note what is not there. No header check, no IP allowlist, no rate
          limit specific to this endpoint, no per-user auth context. The
          handler accepts an email, validates its shape, lowercases and trims
          it, and returns the row if there is one. Returned fields exclude the
          email itself and the last name; the rest is already on the public
          waitlist at /practice-buddy under &ldquo;Who&apos;s Waiting.&rdquo;
          That is on purpose. The endpoint exists to prefill the signup form
          when a returning practitioner types their email, not to gate access
          to anything private.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">
          The /meet/[token] redirect
        </h2>
        <p className="text-zinc-700 leading-relaxed mb-4">
          The other endpoint worth reading in full is the daily one. After a
          match confirms, both people receive an intro email containing a
          permanent Google Meet URL plus a per-person tracking redirect at{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            /meet/[token]
          </code>
          . The redirect is what gets bookmarked on the phone home screen, and
          is what carries the daily flow.
        </p>
        <AnimatedCodeBlock
          code={tokenCode}
          language="typescript"
          filename="src/app/meet/[token]/route.ts"
        />
        <p className="text-zinc-700 leading-relaxed mt-4">
          Same idea. Read a token from the URL, look up the row, log the
          click, redirect. The token here is per-person rather than per-pair,
          so the operator can tell whether one side is showing up more than
          the other without prompting either to log in. The Google Meet URL
          itself has no tie to vipassana.cool&apos;s auth: anyone holding the
          link can join the call. This is intentional. The friction the system
          is trying to remove is the friction of getting two people into the
          same video room at the same time, every morning, for years.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Sign-in flow versus what is here
        </h2>
        <p className="text-zinc-600 mb-6">
          Side by side, with no implication that either is wrong in general.
          One is right for products with private state per user; the other is
          right for a free, donation-funded peer-pairing tool that owns almost
          no per-user state in the first place.
        </p>
        <ComparisonTable
          productName="Practice Buddy on vipassana.cool"
          competitorName="A typical login-based product"
          rows={comparisonRows}
        />
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-14 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          The practical answer if you came here looking for a login
        </h2>
        <p>
          If you signed up for Practice Buddy and want to come back, the path
          is short. Open{" "}
          <Link
            href="/practice-buddy"
            className="text-teal-700 underline"
          >
            /practice-buddy
          </Link>
          , type the email you used originally into the form, and the page
          will fetch your existing row and prefill the answers. You can update
          your sit times, your time zone, your frequency, anything that the
          matcher uses, and resubmit. There is no &ldquo;account screen&rdquo;
          to land on first.
        </p>
        <p>
          If you have a pending match and the confirmation email is still
          unanswered, search your inbox for messages from
          <code className="rounded bg-zinc-100 mx-1 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            matt@vipassana.cool
          </code>
          or
          <code className="rounded bg-zinc-100 mx-1 px-1.5 py-0.5 font-mono text-[13px] text-zinc-800">
            hello@vipassana.cool
          </code>
          and click the &ldquo;Yes, introduce me&rdquo; or &ldquo;No
          thanks&rdquo; button there. The token in that link is the only thing
          that lets you act on the match. Once a match has been mutually
          confirmed, the intro email contains the permanent Google Meet link
          and the per-user /meet/[token] redirect; that is where the daily sit
          lives. Bookmark the redirect.
        </p>
        <p>
          If you have lost access to the email you signed up under, the
          straightforward fix is to fill the form again with the working
          email. There is no profile to migrate, no streak to keep. The
          operator (Matt) reviews every signup by hand and will spot the
          duplicate; if there is anything to merge, that is the moment it
          happens, by hand, in a reply.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-16 space-y-5 text-zinc-700 leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-2">
          Why a no-login design fits this specific tool
        </h2>
        <p>
          The thing the program is in the business of is two meditators
          showing up at the same Google Meet URL, every morning, for as long
          as the partnership lasts. Anything between waking up and that URL is
          drag. Account creation is drag. Login expiry is drag. A profile
          dashboard is drag. The cost of those things is paid every day; the
          benefit is paid once if at all.
        </p>
        <p>
          The operator&apos;s side of the system also runs better without
          accounts. There is no churn surface to inspect, because there is no
          login event to count. The signal that a match is alive is
          /meet/[token] click rows in the database; the signal that it is dead
          is silence on the email thread, an unsubscribe click, or a fresh
          signup with new times. The operator does not need a per-user
          dashboard for the practitioner because they can read the underlying
          tables directly.
        </p>
        <p>
          The trade-offs are real and worth naming. The lookup endpoint
          surfaces a public-waitlist subset of fields without authentication.
          The confirmation flow trusts whoever holds the inbox. There is no
          two-factor auth, because there is no auth. For a free pairing
          program serving meditators in the Goenka tradition, those costs
          have been deemed proportionate to the simplicity gained. They could
          be revisited; the lookup endpoint in particular is the obvious place
          to add a magic-link step the day that public-waitlist subset stops
          feeling acceptable.
        </p>
        <p className="text-sm text-zinc-500">
          A note on this site: vipassana.cool does not teach the technique.
          The S.N. Goenka tradition reserves transmission of the technique
          for authorized assistant teachers inside 10-day residential courses.
          For anything about how to sit, how to work with what comes up, or
          how to structure a daily practice, the right place is{" "}
          <a
            href="https://www.dhamma.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline"
          >
            dhamma.org
          </a>{" "}
          and an authorized assistant teacher.
        </p>
      </section>

      <BookCallCTA
        appearance="footer"
        destination={BOOKING_LINK}
        site="Vipassana"
        section="practice-buddy-login-footer"
        heading="Want to talk it through before signing up?"
        description="If you have questions about the program, the matching, or this no-login model, book 15 minutes with the operator (Matt). He runs the system you would be on the other side of."
      />

      <FaqSection items={faqs} />

      <section className="max-w-4xl mx-auto px-6 my-16">
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
            Want to actually be in this system instead of reading about it?
          </h2>
          <p className="text-zinc-600 mb-5">
            Signing up takes about two minutes. There is one form, one human
            review, and one email when a match shows up.
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
        section="practice-buddy-login-sticky"
        description="Questions about the program? Book 15 min with the operator."
      />
    </article>
  );
}
