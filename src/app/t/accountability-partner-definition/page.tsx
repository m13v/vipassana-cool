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
  ConceptReveal,
  PredicateBeam,
  DefinitionCompare,
  PredicateMarquee,
  PredicateBento,
  DefinitionTable,
  PredicateTimeline,
} from "./definition-client";

const PAGE_URL = "https://vipassana.cool/t/accountability-partner-definition";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title:
    "Accountability Partner Definition: Seven Predicates, One Integer, Sixty Minutes",
  description:
    "Every top ranking page defines an accountability partner as 'someone who supports you.' That is a role, not a definition. The operational definition is a seven-step predicate chain and a single integer, 60, measured in UTC minutes. Pulled straight from the matcher at src/app/api/auto-match/route.ts.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability Partner Definition: Seven Predicates, One Integer, Sixty Minutes",
    description:
      "Dictionary says 'a person who supports you.' The algorithm says: not unsubscribed, fewer than 2 prior intros, 24h since signup, no prior match with you, no active session slot, UTC diff within 60 minutes, and the greedy scorer picks the pair.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Accountability Partner Definition: Seven Predicates and One Number",
    description:
      "The word 'accountability partner' collapses to one integer (60) and a comparison operator (>). Source: src/app/api/auto-match/route.ts:164.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question:
      "What is the shortest accurate definition of an accountability partner on this page?",
    answer:
      "The shortest accurate definition is a function, not a sentence. An accountability partner, for the purposes of the matcher on this site, is any other person whose scheduled session time in UTC differs from yours by no more than 60 minutes, who is not unsubscribed, who has received fewer than 2 prior intros without replying, whose account is more than 24 hours old (or whose status is 'ready'), who has never been matched with you before, whose same-side session slot (morning or evening) is not already occupied, and whom the greedy pair-scoring loop picks before it picks anyone else. Whoever satisfies all seven of those predicates becomes your accountability partner. Everyone who fails any one of them does not. That is the whole operational content of the word. If a SERP article tells you an accountability partner is 'someone who supports your goals,' it is describing a role. The matcher at src/app/api/auto-match/route.ts describes a relation, and a relation is what the runtime cares about.",
  },
  {
    question:
      "Where exactly does the 60-minute UTC window come from in the code?",
    answer:
      "Line 164 of src/app/api/auto-match/route.ts: 'if (diff > 60) continue;'. The variable 'diff' is computed by the 'timeDiff' helper at lines 49 to 52, which takes two UTC minute values and returns the smaller of their signed difference or its 1440-minute complement (so 23:50 and 00:10 are correctly 20 minutes apart, not 1420). The 60 is a hardcoded integer. It was chosen because real humans who say they sit at 6:30 AM almost always actually sit somewhere in the 6:00 to 7:00 band once they are awake, and because Google Meet does not care if both participants join inside a 60-minute envelope around a single scheduled start. A 30-minute tolerance was rejected during design because it threw out otherwise ideal pairs in adjacent timezones; 90 minutes was rejected because at that range people stop thinking of the other as 'showing up at the same time.'",
  },
  {
    question:
      "Why is an accountability partner defined per session slot and not per user?",
    answer:
      "Because the matcher at lines 105 to 122 iterates over 'slots,' not people. A user with 'frequency = Once a day' generates a single slot (morning_utc). A user with 'frequency = Twice a day' generates two slots (morning_utc and evening_utc). A slot is uniquely identified by (personId, session), where session is either 'morning' or 'evening.' When the greedy loop at 195 to 203 consumes a slot, it adds the key 'personId:session' to the usedSlots set, which means that user can still be paired for the other session with a different person. The practical consequence is that 'your accountability partner' is ambiguous in the singular on this site. A twice-a-day meditator can have two accountability partners simultaneously, one for the morning relation and one for the evening relation, and the two partners do not need to know about each other.",
  },
  {
    question:
      "What is the serial ghoster threshold, and is it the same across everyone?",
    answer:
      "Line 81: 'if (c.contact_count >= 2) continue;'. Every waitlist entry carries a contact_count column that increments whenever the matcher sends that person a confirmation email. If the count reaches 2 without a reply, the entry is ejected from the pool. The threshold is the same across everyone. It is a heuristic that says: the matcher will spend exactly two chances on you, and if both times you do not click through the confirmation link, the pool closes. The operator can manually reset the count, but the automated matcher cannot. This is part of the operational definition because it determines whether you are in the candidate set at all. An accountability partner, in this product, is a person the matcher has not already given up on.",
  },
  {
    question:
      "Why does the 24-hour cooldown exist, and what bypasses it?",
    answer:
      "Lines 88 to 90. A brand new row with contact_count=0 is only eligible for auto-matching if its created_at is more than 24 hours in the past. The bypass is the 'ready' status: if a person has already engaged with the product in some way that sets their waitlist_entries.status to 'ready,' they skip the cooldown and enter the eligible pool on the next 30-minute cron tick. The reason for the delay is human review. The operator (me) eyeballs every signup once before the automated pipeline touches it, and the 24-hour cooldown is wide enough to catch signups made by humans while narrow enough that nobody waits multiple days. The effect on the definition of 'accountability partner' is that a first-time signup has to wait one calendar day before becoming a candidate at all.",
  },
  {
    question:
      "Does the prior-match check include matches that failed or expired?",
    answer:
      "Yes. 'getPriorMatchedIds' (called at line 241) returns every person_b_id from any matches row where person_a_id equals the current person, regardless of status. A match that reached status='expired' or status='ended' still counts as a prior match. The consequence is that the accountability partner relation is strictly anti-reflexive and one-shot. If you and another meditator matched last quarter and both went silent, the matcher will not re-pair the two of you even if your UTC windows overlap perfectly. This is intentional: if the first bond did not produce replies, there is no obvious reason a second attempt will, and the pool has better candidates to spend its slot on. If the users want to retry, they can signal it to the operator manually, who can clear the prior pairing.",
  },
  {
    question:
      "How does the scorer decide which candidate pair to admit when multiple are viable?",
    answer:
      "Lines 183 to 189. The 'allViable' array holds every surviving (slotA, slotB) candidate after the six filter predicates have run. The sort key, in order of decreasing priority, is: both people have status='ready' first, then both are Goenka old students (is_old_student='Yes' on both rows), then session_duration matches (a 30-minute sitter paired with another 30-minute sitter, or a 60 with a 60), then smallest absolute UTC diff. The greedy loop at 195 to 203 walks the sorted list top-down and takes the first non-conflicting pair. A slot is consumed the moment a pair wins it. Two humans who would have been an equally good match on lower-priority keys do not get a second chance if a higher-priority candidate already burned one of their slots. An accountability partner, operationally, is whoever the sort put in front of you first without clashing with an already-taken slot.",
  },
  {
    question:
      "Is the operational definition only valid for meditation, or does it generalize?",
    answer:
      "The concrete parameters are tuned for meditation: 60-minute UTC tolerance assumes an activity that takes 30 to 60 minutes and starts at a rough wall time, not a precise instant; the is_old_student tie-breaker assumes the Goenka tradition's single branch point matters; the 24-hour cooldown assumes a human operator is reviewing signups. But the shape of the definition generalizes. Any accountability product that matches two humans to a shared time-bound activity has to answer the same questions: how close is 'same time,' how long ago did signup have to be, how many prior intros count as a burned candidate, what prior failures disqualify, what breaks ties. Changing the constants (60, 2, 24, 'is_old_student') changes the activity. Keeping the structure fixed keeps the definition operational. Any article that defines accountability partner as 'someone who holds you accountable' has erased exactly the part a program has to fill in to produce a match.",
  },
  {
    question:
      "What happens the moment a pair becomes an accountability partner in the database?",
    answer:
      "A row is inserted into the 'matches' table with status='confirming' and per-person confirmation tokens (src/lib/db.ts:248). Both people receive a confirmation email that either opens an intro thread (if both were already in 'ready' status) or asks for a yes/no click. The token-based confirm endpoint at /api/confirm-match flips person_a_confirmed or person_b_confirmed. Once both confirm, createMeetEvent provisions a permanent Google Meet URL, writes the event ID to the match, stores the meet URL in the meet_links table, and the status flips to 'pending.' From that moment, the word 'accountability partner' applies: it is the other email address on the match row, reachable through a shared thread, scheduled for a single UTC time, with a Meet URL that never changes. The definition is not a belief or a feeling. It is one row in Postgres and one calendar invite.",
  },
  {
    question:
      "Is the definition on this page a general-purpose answer or specific to this product?",
    answer:
      "Both, in layers. The top layer, 'accountability partner is a person who supports your goals,' is the general-purpose answer and is what every other page on the internet gives. It is true and also unfalsifiable and so does not do any work for someone actually trying to get paired with one. The middle layer, 'an accountability partner is a person who occupies a specific time, shows up at it, and notices when you do not,' is where most serious essays on the topic stop. The bottom layer, the one this page is about, is the concrete set of predicates that must all evaluate true for two specific humans to become a partner on a specific product, with specific numbers. The thing nobody else names is the number 60. It takes the vague middle-layer answer and turns it into a boolean. Whether the exact integer is universal is another question; the technique of collapsing the definition to a predicate is.",
  },
];

const timelineSteps = [
  {
    line: "route.ts:74",
    title: "Filter out unsubscribed accounts",
    body: "The outer SQL at the top of the handler only selects rows where unsubscribed=false. Every downstream predicate assumes both humans are still talking to the thread. Silence in the inbox stops the relation at the query level.",
  },
  {
    line: "route.ts:81",
    title: "Drop anyone who has already burned two intros",
    body: "contact_count stores how many confirmation emails this row has received. At 2 without a reply, the entry exits the eligible set. The source comment calls this the 'serial ghoster' threshold.",
    code: "if (c.contact_count >= 2) continue;",
  },
  {
    line: "route.ts:88-90",
    title: "Enforce the 24-hour signup cooldown",
    body: "Fresh rows without a 'ready' status have to age for a day before the matcher touches them. Gives the operator time to eyeball the signup. 'ready' status bypasses.",
    code: "if (now - createdAt > DAY_MS) eligible.push(c);",
  },
  {
    line: "route.ts:242",
    title: "Skip any prior pairing, including expired",
    body: "getPriorMatchedIds returns every person this candidate has ever been matched to, regardless of status. The relation is strictly new-bond. If you two already failed once, the matcher does not retry.",
  },
  {
    line: "route.ts:229-238",
    title: "Require both session slots to be free",
    body: "Each (personId, session) pair can hold exactly one active match. A twice-a-day meditator can be in two simultaneous partnerships, one per session, but not two in the same slot.",
  },
  {
    line: "route.ts:162-164",
    title: "Require UTC time agreement within 60 minutes",
    body: "The single most important integer on the page. If the two scheduled UTC minute values differ by more than 60, the pair is dropped. Computed wrap-around so 23:50 and 00:10 are 20 minutes apart, not 1420.",
    code: "const diff = timeDiff(sa.utcMinutes, sb.utcMinutes);\nif (diff > 60) continue;",
  },
  {
    line: "route.ts:183-203",
    title: "Let the greedy scorer pick the surviving pair",
    body: "Sort remaining candidates by: both 'ready' first, then both are Goenka old students, then matching session_duration, then smallest UTC diff. Walk top-down and take the first non-conflicting pair. Both slots get burned.",
  },
];

const tableRows = [
  {
    attribute: "Form of the definition",
    dictionary: "A sentence.",
    operational: "A boolean function with 7 predicates.",
  },
  {
    attribute: "Can a program evaluate it?",
    dictionary: "No. 'Supports your goals' is not a machine check.",
    operational: "Yes. Every predicate is one line of code or one SQL.",
  },
  {
    attribute: "Is there a numeric threshold?",
    dictionary: "None given.",
    operational: "60 minutes UTC; 2 prior intros; 24 hours since signup; 1 active slot.",
  },
  {
    attribute: "Granularity",
    dictionary: "One per person.",
    operational: "One per (person, session) slot. A person can have two partners at once.",
  },
  {
    attribute: "How ties are broken",
    dictionary: "Not discussed.",
    operational: "Ready status > both old students > same duration > smallest UTC diff.",
  },
  {
    attribute: "Can it retry a failed pairing?",
    dictionary: "Unspecified.",
    operational: "No. Prior-match check is anti-reflexive across the full match history.",
  },
  {
    attribute: "Where the definition lives",
    dictionary: "Wikipedia, Indeed, BetterUp, and ten similar pages.",
    operational: "One file: src/app/api/auto-match/route.ts, lines 54 to 203.",
  },
];

const predicateMarqueeItems = [
  "unsubscribed = false",
  "contact_count < 2",
  "now - created_at > 24h",
  "status IN ('pending','ready')",
  "priorMatchedIds(a) !includes b.id",
  "activeMatchForSession(a, slotA) = null",
  "activeMatchForSession(b, slotB) = null",
  "timeDiff(a.utc, b.utc) ≤ 60",
  "scorer.picks(a, b) = true",
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Accountability Partner Definition", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Accountability Partner Definition: Seven Predicates, One Integer, Sixty Minutes"
        description="An operational definition of accountability partner, derived from the matcher at src/app/api/auto-match/route.ts. Seven predicates, one integer (60), and a greedy scorer. Dictionary articles give you a role; this page gives you a function."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Accountability Partner Definition" },
        ]}
        category="Definition, not as a sentence but as a function"
        title="Accountability Partner Definition: Seven Predicates, One Integer, Sixty Minutes"
        description="Every top-ranking page defines the term as 'a person who supports your goals.' That is a role, not a definition. This page is about the operational definition the matcher actually uses to decide whether two strangers become partners or do not."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/30 bg-accent/5 p-4">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Dictionary says an accountability partner is someone who supports
          your goals. The matcher in{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            src/app/api/auto-match/route.ts
          </code>{" "}
          says it is whoever clears seven predicates: not unsubscribed,
          fewer than 2 prior intros, more than 24 hours since signup, no
          prior match with you, no active session slot already taken, UTC
          session time within{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-[11px]">
            60
          </code>{" "}
          minutes of yours, and the greedy scorer picks the pair. That is
          the full content of the word on this site.
        </p>
      </div>

      <div className="mb-12">
        <ConceptReveal
          title="An accountability partner is a function, not a sentence"
          subtitle="Every top-10 SERP defines the term as a role. The matcher here defines it as a boolean returned from seven predicates. The key number is sixty."
          captions={[
            "Dictionary layer: 'a person who helps you keep a commitment.' True, unfalsifiable, not useful to a runtime.",
            "Operational layer: isAccountabilityPartner(a, b) returns true if seven concrete checks pass.",
            "Six of the checks are booleans. One is an integer comparison: timeDiff(a.utc, b.utc) ≤ 60 minutes.",
            "Sort by readyScore, bothOld, sessionMatch, smallest diff. Greedily pick the first non-conflicting pair.",
            "Survive all seven. You are somebody's accountability partner now, per this site's definition of the word.",
          ]}
        />
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          the definition, in four numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={7} />
            </div>
            <p className="mt-1 text-xs text-muted">predicates to evaluate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={60} />
              <span className="ml-1 text-lg text-muted">min</span>
            </div>
            <p className="mt-1 text-xs text-muted">max UTC drift per pair</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={2} />
            </div>
            <p className="mt-1 text-xs text-muted">
              session slots per person
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={1} />
            </div>
            <p className="mt-1 text-xs text-muted">
              file where the definition lives
            </p>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <p className="text-lg leading-relaxed text-muted">
          If you ran the Google search that brought you here, you already
          read the answer. An accountability partner is{" "}
          <GradientWord>someone who helps you keep a commitment</GradientWord>
          . Wikipedia says it, BetterUp paraphrases it, Indeed and MentorLoft
          and the Columbia GSAS PDF repeat the same sentence in different
          words. The sentence is not wrong. It is a definition of the role,
          and a role is a thing a human reader can nod at. The problem is
          that if you try to ask a program &ldquo;is X an accountability
          partner for Y,&rdquo; the sentence gives you nothing to evaluate.
          There is no predicate to run. Every top search result is a role
          description with no function signature.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The operational definition, drawn as a beam
        </h2>
        <p className="mb-6 text-muted">
          Two candidate humans enter on the left. Seven gates in the middle.
          One output on the right: the relation &ldquo;accountability
          partner.&rdquo; If any gate returns false, the pair never reaches
          the output. This is how the matcher in{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            src/app/api/auto-match/route.ts
          </code>{" "}
          actually thinks about the word.
        </p>
        <PredicateBeam />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Every predicate the matcher actually evaluates
        </h2>
        <p className="mb-6 text-muted">
          Pulled from the live source, in the order they execute. Each card
          carries the filename and line range so the claim is checkable by
          anyone with a clone of the repo.
        </p>
        <PredicateMarquee items={predicateMarqueeItems} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Dictionary sentence vs. operational function
        </h2>
        <p className="mb-6 text-muted">
          Two tabs. The left tab is the answer Google surfaces for this
          keyword, reduced to a comment block. The right tab is a pseudocode
          reading of the real matcher, faithful to{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            src/app/api/auto-match/route.ts
          </code>
          , lines 74 through 203. The difference is not depth, it is
          category. One is a role description. The other is a boolean
          function.
        </p>
        <DefinitionCompare />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Seven predicates, with source line numbers
        </h2>
        <p className="mb-6 text-muted">
          The anchor predicate is the one with a concrete number. Six of the
          seven are booleans; the one that names a threshold is the UTC
          tolerance, and the threshold is{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            60
          </code>
          .
        </p>
        <PredicateBento />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The predicates in evaluation order
        </h2>
        <p className="mb-8 text-muted">
          The matcher runs them roughly top-down inside the eligibility
          loop, then again inside the per-pair loop. An early false-return
          short-circuits everything that follows.
        </p>
        <PredicateTimeline steps={timelineSteps} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Dictionary vs operational, attribute by attribute
        </h2>
        <p className="mb-6 text-muted">
          Same concept, two definitions. The columns line up on seven
          attributes where the dictionary sentence goes silent and the code
          gives a specific answer.
        </p>
        <DefinitionTable rows={tableRows} />
      </section>

      <section className="mb-14 rounded-2xl border border-border bg-card p-6 md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why collapse the word to a predicate at all
        </h2>
        <p className="mb-4 leading-relaxed text-muted">
          The reason is not pedantry. A role description is fine for someone
          already in the relation, who wants to check in with the partner
          they have. It is not fine for a matcher that has to decide, every
          30 minutes, whether to create a new row in the{" "}
          <code className="rounded bg-card-hover px-1 font-mono text-xs">
            matches
          </code>{" "}
          table between two strangers. The runtime needs a boolean. The
          boolean has to come from somewhere. If the product owner does not
          name the predicates, the code will invent them silently.
        </p>
        <p className="mb-4 leading-relaxed text-muted">
          Making the predicates explicit has a second effect. It forces a
          commitment to the boundary conditions. At 59 UTC minutes apart,
          you two are partners. At 61 UTC minutes apart, you are not. The
          product makes that call. The dictionary cannot.
        </p>
        <p className="leading-relaxed text-muted">
          The general rule the page is arguing for is: when a word names a
          relation a program must evaluate, the only definition that does
          any work is the one that returns a boolean. Everything else is a
          role description that is true but unusable.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Who this definition is for, and who it is not for
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">Is for: </strong>
            anyone writing or running a matcher that needs to decide when
            two people count as an accountability pair. The structure
            generalizes; the constants are specific to meditation.
          </li>
          <li>
            <strong className="text-foreground">Is for: </strong>
            anyone trying to understand why they were or were not matched on
            vipassana.cool, because the seven predicates are the full story.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            someone looking for a motivational definition to print on a
            poster. The dictionary sentence works better for that.
          </li>
          <li>
            <strong className="text-foreground">Is not for: </strong>
            accountability in contexts that are not time-bound or not
            paired. A coach with ten clients is not a partner under this
            definition, because the slot model assumes exactly two people.
          </li>
        </ul>
      </section>

      <section className="mb-14 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-10">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Where the definition actually lives
        </h2>
        <p className="mb-4 leading-relaxed text-muted">
          For anyone who wants to audit the seven predicates directly,
          everything on this page comes from one file and a handful of
          line ranges.
        </p>
        <ul className="space-y-2 font-mono text-sm text-foreground">
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts:74
            </code>{" "}
            <span className="font-sans text-muted">
              unsubscribed filter at the SQL layer
            </span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts:81
            </code>{" "}
            <span className="font-sans text-muted">
              serial ghoster threshold (contact_count &gt;= 2)
            </span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts:88-90
            </code>{" "}
            <span className="font-sans text-muted">
              24-hour signup cooldown
            </span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts:162-164
            </code>{" "}
            <span className="font-sans text-muted">
              ±60 minute UTC tolerance (the anchor)
            </span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts:183-189
            </code>{" "}
            <span className="font-sans text-muted">
              scorer priority (ready &gt; old &gt; duration &gt; diff)
            </span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts:229-238
            </code>{" "}
            <span className="font-sans text-muted">
              per-session active-match guard
            </span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              src/app/api/auto-match/route.ts:242
            </code>{" "}
            <span className="font-sans text-muted">
              prior-match anti-reflexive check
            </span>
          </li>
          <li>
            <span className="text-accent">→</span>{" "}
            <code className="rounded bg-card-hover px-2 py-0.5 text-xs">
              vercel.json:12-13
            </code>{" "}
            <span className="font-sans text-muted">
              the whole function runs every 30 minutes
            </span>
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
        heading="Want to see the operational definition run on you?"
        description="Fill the form; the matcher at /api/auto-match will evaluate the seven predicates against your UTC session time next time it fires. If you clear all seven, you get an accountability partner. Free, in the dana tradition."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/accountability-partner-app"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Accountability partner app — the inbox-as-state-machine walkthrough
          </Link>
          <Link
            href="/t/accountability-partner-apps"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Accountability partner apps (plural) — how the matcher compares
          </Link>
          <Link
            href="/practice-buddy/how-it-works"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Practice Buddy in detail
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
        </div>
      </div>

      <PageComments pageId="t-accountability-partner-definition" />
    </article>
  );
}
