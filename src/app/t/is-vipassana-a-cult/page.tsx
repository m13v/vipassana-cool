import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { ArticleSchema } from "@/components/article-schema";
import { ArticleHeader } from "@/components/article-header";
import { FaqSchema } from "@/components/faq-schema";
import { PracticeBuddyCta } from "@/components/practice-buddy-cta";
import {
  NumberTicker,
  MotionSequence,
  ScoreCard,
  Day11Flow,
} from "./cult-page-client";

const PAGE_URL = "https://vipassana.cool/t/is-vipassana-a-cult";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title: "Is Vipassana a Cult? Running Goenka's 10-Day Through Two Standard Cult Rubrics",
  description:
    "Is Vipassana a cult? A point-by-point audit of the Goenka 10-day retreat against Steven Hassan's BITE model and Robert Jay Lifton's 8 criteria of thought reform. Each row scored against an actual course mechanic.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Is Vipassana a Cult? A Rubric-Based Audit",
    description:
      "Goenka Vipassana scored against the two standard academic cult rubrics: Hassan's BITE and Lifton's 8 criteria. 16 rows, each with the specific course mechanic it is graded against.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Vipassana a Cult? A Rubric-Based Audit",
    description:
      "The two named cult rubrics, scored row by row against the actual mechanics of the Goenka 10-day.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Is Vipassana meditation a cult?",
    answer:
      "By the two standard academic cult rubrics (Steven Hassan's BITE model and Robert Jay Lifton's 8 criteria of thought reform), Goenka Vipassana clears most criteria outright, is partial on a few, and fails none of the load-bearing ones. Courses are free, you can leave at any time, there is no recruitment quota, and the center has no ongoing contact claim on you after day 10.",
  },
  {
    question: "What is the BITE model and how does Vipassana score against it?",
    answer:
      "The BITE model, developed by Steven Hassan, evaluates groups across Behavior, Information, Thought, and Emotional control. Applied to the Goenka 10-day: behavior control is strict during the course but ends when you leave; information control is near-zero because discourses are freely published on YouTube and the technique is taught openly; thought control is low because the tradition explicitly tells students to verify by direct experience; emotional control is minimal because there is no post-course shame or guilt apparatus.",
  },
  {
    question: "What is Lifton's thought reform criteria and how does Vipassana score?",
    answer:
      "Robert Jay Lifton's 8 criteria of thought reform come from his 1961 study of Chinese political prisoners. Vipassana clears Milieu Control after day 10, clears Mystical Manipulation (nothing happens that is claimed to be supernatural), clears Sacred Science (Goenka explicitly says do not take his word, verify yourself), and clears Dispensing of Existence (no one is excommunicated). Loading the Language is partial (Pali terms are used, but defined). Demand for Purity is partial (5 precepts during the course, dropped after).",
  },
  {
    question: "Why does the retreat feel culty if it isn't one?",
    answer:
      "Three features are consistently confused with cult mechanics: silence (imposed to reduce distraction, not to control), Goenka's recorded discourses (one voice repeated for consistency, not worship), and the group chanting of sadhu sadhu sadhu (Pali for 'well said,' analogous to amen). Each has a functional purpose tied to the technique, which is why they end when you walk out the gate. A cult would extend them into your daily life.",
  },
  {
    question: "Does Vipassana take your money?",
    answer:
      "No. The courses are run on a dana (gift economy) model: you donate only after completing the course, and only if you want to, and centers accept donations only from people who have already completed a course. There is no tiered membership, no required ongoing payment, no pressure to donate, and no one checks what you gave. The financial model is the single strongest anti-cult indicator in the tradition.",
  },
  {
    question: "Can you leave mid-course without consequences?",
    answer:
      "Yes. Leaving is discouraged during the first three days because the technique cannot be evaluated that early, but nobody stops you physically. If you leave, you are not shunned, not billed, not contacted. You can also simply never come back and hear nothing from the center again.",
  },
  {
    question: "Is there leader worship of S.N. Goenka?",
    answer:
      "No. Goenka died in 2013 and the organization has continued without him specifically because he refused to build a personality around himself. In the discourses he repeatedly says 'do not accept what I say blindly' and defers authority to the technique and to the Buddha. There is no living charismatic leader, no required devotion, and no successor figure.",
  },
  {
    question: "Is the after-course isolation from family a cult indicator?",
    answer:
      "There is no after-course isolation. You go home. The only isolation happens during the 10 days at the center, for a functional reason (minimizing input so that sensation-level observation becomes possible). Cults isolate members permanently from outside relationships. Vipassana does the opposite: day 10 ends with noble silence broken, phones returned, and a deliberate re-integration back into ordinary life.",
  },
];

const biteRows = [
  {
    criterion: "B1. Regulate physical environment",
    score: "partial" as const,
    mechanic: "Fixed schedule, assigned seat, assigned room, no leaving the property.",
    verdict:
      "Strict during the 10 days for functional reasons (deep concentration requires reduced input). Ends the moment you walk out.",
  },
  {
    criterion: "B2. Major time commitment",
    score: "partial" as const,
    mechanic: "10 days, 10.5 hours of meditation per day.",
    verdict:
      "Large one-time commitment, but bounded. There is no ongoing weekly time quota after the course.",
  },
  {
    criterion: "B3. Financial control",
    score: "clears" as const,
    mechanic: "Courses cost zero. Donations only from students who already completed a course, only at the end, and only if they want.",
    verdict: "The strongest anti-cult signal in the tradition.",
  },
  {
    criterion: "B4. Recruitment quotas",
    score: "clears" as const,
    mechanic: "No referral bonuses, no bring-a-friend requirement, no evangelism script.",
    verdict: "Students recommend it by word of mouth or not at all. Nobody is ever asked to recruit.",
  },
  {
    criterion: "I1. Control of information",
    score: "clears" as const,
    mechanic: "Goenka's discourses are published in full on YouTube and in book form. The technique is taught openly and described publicly.",
    verdict:
      "You can watch every evening discourse before you ever register for a course. Opposite of information control.",
  },
  {
    criterion: "I2. Outside sources forbidden",
    score: "partial" as const,
    mechanic: "During the 10 days, no reading, writing, or phone. After the course, zero restrictions.",
    verdict:
      "Temporary input restriction for the technique, not a permanent ban on outside thought.",
  },
  {
    criterion: "T1. Required doctrine",
    score: "clears" as const,
    mechanic: "Goenka explicitly says, repeatedly, do not take his word for anything; verify by direct experience.",
    verdict:
      "The tradition hands you a method, not a belief. Students keep their own religion.",
  },
  {
    criterion: "T2. Loaded language",
    score: "partial" as const,
    mechanic: "Pali terms (anicca, dhamma, sadhu) are used during the course.",
    verdict:
      "Loaded language is present but each term is defined aloud and none of it is required vocabulary after you leave.",
  },
  {
    criterion: "E1. Emotional manipulation",
    score: "clears" as const,
    mechanic: "No love-bombing on arrival. No shame on departure. No guilt-based follow-up.",
    verdict:
      "If you never come back, nobody from the center will make you feel bad about it.",
  },
  {
    criterion: "E2. Punishment for leaving",
    score: "clears" as const,
    mechanic: "If you leave mid-course, you are not billed, shunned, or contacted afterward.",
    verdict:
      "The exit door is the same as the entrance, with no social or financial cost.",
  },
];

const liftonRows = [
  {
    criterion: "L1. Milieu control",
    score: "partial" as const,
    mechanic: "Sealed environment for 10 days, regulated communication, single instruction source.",
    verdict:
      "Total during the course, zero after. Cults extend milieu control indefinitely.",
  },
  {
    criterion: "L2. Mystical manipulation",
    score: "clears" as const,
    mechanic: "Nothing experienced on the cushion is claimed to be supernatural or divine intervention.",
    verdict:
      "Sensations are framed as physics, not miracles. The opposite of mystical manipulation.",
  },
  {
    criterion: "L3. Demand for purity",
    score: "partial" as const,
    mechanic: "5 precepts during the course (no killing, stealing, lying, sexual activity, intoxicants).",
    verdict:
      "Binding only on the property. After day 10, the precepts are recommendations, not rules.",
  },
  {
    criterion: "L4. Confession",
    score: "clears" as const,
    mechanic: "No confession ritual. Teacher interviews are optional and about technique, not disclosure.",
    verdict:
      "You are not asked to surrender private information to the group.",
  },
  {
    criterion: "L5. Sacred science",
    score: "clears" as const,
    mechanic: "The tradition calls itself a technique, not a revealed truth. Goenka tells students to verify directly.",
    verdict:
      "No doctrine is placed beyond questioning.",
  },
  {
    criterion: "L6. Loading the language",
    score: "partial" as const,
    mechanic: "Pali vocabulary used in discourses.",
    verdict:
      "Specialized terms exist, but are defined, and their use does not extend into secular life after the course.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Is Vipassana a Cult?", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Is Vipassana a Cult? Running Goenka's 10-Day Through Two Standard Cult Rubrics"
        description="A point-by-point audit of the Goenka 10-day retreat against Steven Hassan's BITE model and Robert Jay Lifton's 8 criteria of thought reform."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Is Vipassana a Cult?" },
        ]}
        category="Honest Audits"
        title="Is Vipassana a Cult? Running Goenka's 10-Day Through Two Standard Cult Rubrics"
        description="Instead of one more opinion, I put the Goenka Vipassana 10-day retreat through the two recognized academic cult rubrics: Steven Hassan's BITE model and Robert Jay Lifton's 8 criteria of thought reform. Each row scored against a specific course mechanic."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Run through Hassan&apos;s BITE and Lifton&apos;s 8 criteria, the Goenka 10-day clears every load-bearing row (financial control, recruitment, leader worship, punishment for leaving, required doctrine, mystical manipulation, confession, sacred science) and is partial on exactly the rows that describe a temporary, functional restriction during the course itself (environment, time, milieu, purity, loaded language). It fails none of the rows that distinguish a real cult. The deciding signal is what happens on day 11.
        </p>
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The claim, in numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={16} />
            </div>
            <p className="mt-1 text-xs text-muted">rubric rows scored</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-muted">load-bearing rows failed</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              $<NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-muted">required payment, ever</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={10} />
              <span className="text-xl text-muted">d</span>
            </div>
            <p className="mt-1 text-xs text-muted">total milieu control window</p>
          </div>
        </div>
      </section>

      <div className="mb-12">
        <MotionSequence
          frames={[
            {
              title: "Step 1. Name the rubric",
              body: "Hassan's BITE model and Lifton's 8 criteria of thought reform. Two recognized, published frameworks used by academics to evaluate high-control groups.",
            },
            {
              title: "Step 2. Pin each row to a course mechanic",
              body: "Not to vibes. Not to 'it felt culty'. To something specific: the donation rule, the 5 precepts, the discourse format, the exit policy.",
            },
            {
              title: "Step 3. Score each row",
              body: "Clears, partial, or fails. Partial is the honest verdict for things that are strict during the 10 days but end when you leave.",
            },
            {
              title: "Step 4. Ask what happens on day 11",
              body: "Almost every cult rubric's real test is post-program. That is where Goenka Vipassana diverges most visibly from a cult.",
            },
          ]}
        />
      </div>

      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Why people ask this question</h2>
        <p className="mb-4 text-muted">
          On paper, the 10-day course looks like central casting for a cult: you surrender your phone, you cannot talk, you wake up at 4 AM, you sit through 11 hours of meditation a day, you listen to a recorded guru every evening, and everything is free. I asked this question myself before my first course. It is a reasonable question.
        </p>
        <p className="text-muted">
          The problem with the existing answers online is that they are either (a) raw anecdotes where someone felt culty and left, or (b) one-paragraph denials that feel defensive. Neither uses a named rubric. Neither shows its work. So I built this page: two standard cult frameworks, every row scored against a specific course mechanic, no padding.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Hassan&apos;s BITE model, row by row</h2>
        <p className="mb-6 text-muted">
          Steven Hassan&apos;s BITE model evaluates high-control groups across four domains: Behavior, Information, Thought, and Emotional control. Below is every row that is commonly cited for the BITE model, paired with the specific mechanic of the Goenka 10-day it would apply to, and a one-line verdict.
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {biteRows.map((row) => (
            <ScoreCard key={row.criterion} {...row} />
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-border bg-card p-5 text-sm">
          <p className="mb-2 font-semibold text-foreground">BITE summary</p>
          <p className="text-muted">
            6 rows clear outright (financial control, recruitment, information, required doctrine, emotional manipulation, punishment for leaving). 4 rows are partial, and all 4 are things that end the moment you walk out the gate. 0 rows fail.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Lifton&apos;s 8 criteria of thought reform</h2>
        <p className="mb-6 text-muted">
          Robert Jay Lifton&apos;s framework comes from his 1961 study of Chinese political prisoners. It is one of the most cited academic rubrics for identifying coercive persuasion. Two of Lifton&apos;s eight criteria (Doctrine over Person and Dispensing of Existence) overlap heavily with rows already covered in BITE and are summarized in the footer below rather than duplicated. The remaining six are scored here.
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {liftonRows.map((row) => (
            <ScoreCard key={row.criterion} {...row} />
          ))}
        </div>
        <div className="mt-6 rounded-lg border border-border bg-card p-5 text-sm">
          <p className="mb-2 font-semibold text-foreground">Lifton summary</p>
          <p className="mb-3 text-muted">
            3 rows clear outright (mystical manipulation, confession, sacred science). 3 rows are partial (milieu control, demand for purity, loading the language). 0 rows fail.
          </p>
          <p className="text-muted">
            The two criteria not given their own row here, Doctrine over Person and Dispensing of Existence, both clear: the tradition hands you a technique and tells you to verify it directly, and no one is ever excommunicated. A Goenka center has no concept of excommunication because it has no concept of membership.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">The deciding question: what happens on day 11?</h2>
        <p className="mb-4 text-muted">
          The clearest test for whether a high-control environment is a cult or a bounded training is what the institution does after the program ends. Cults extend control past the program. A bounded training releases it. Here is what the Goenka tradition actually does after you leave.
        </p>
        <Day11Flow />
        <div className="mt-6 rounded-lg border border-accent/20 bg-accent/5 p-5">
          <p className="mb-2 text-sm font-semibold text-accent">
            The anchor fact
          </p>
          <p className="text-sm text-muted">
            The center has no ongoing contact claim on you after day 10. There is no mandatory email signup to attend. There is no newsletter that pursues you. There is no tithe. There is no recruitment quota. The tool most practically useful for sustaining daily practice, a sitting partner, is offered entirely outside the organization at{" "}
            <Link href="/practice-buddy" className="text-accent underline hover:text-foreground">
              vipassana.cool/practice-buddy
            </Link>
            , which is the exact opposite of cult structure. A cult keeps post-program contact inside the org. This tradition lets strangers on the public internet build the sustaining infrastructure for it, and does not object.
          </p>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Cult mechanic vs. Goenka mechanic</h2>
        <p className="mb-5 text-muted">
          For the rows scored partial on the two rubrics, it helps to see the shape of the real cult mechanic next to the shape of what the Goenka tradition actually does. This is where pattern matching fools most readers into the wrong answer.
        </p>
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead className="bg-accent/5">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Dimension</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Cult pattern</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Goenka pattern</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">Silence</td>
                <td className="px-4 py-3 align-top text-muted">Enforced indefinitely to isolate from outside influence.</td>
                <td className="px-4 py-3 align-top text-muted">Bounded to 9 days, functional for sensation-level observation, dropped on day 10.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">Leader voice</td>
                <td className="px-4 py-3 align-top text-muted">Living charismatic figure whose word is final.</td>
                <td className="px-4 py-3 align-top text-muted">Recorded discourses from a teacher who died in 2013, explicit instruction to verify by direct experience.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">Entry</td>
                <td className="px-4 py-3 align-top text-muted">Love-bombed, flattered, fast-tracked.</td>
                <td className="px-4 py-3 align-top text-muted">Waitlisted, handed a dry code of discipline, told it will be hard.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">Exit</td>
                <td className="px-4 py-3 align-top text-muted">Shamed, billed, shunned, contacted.</td>
                <td className="px-4 py-3 align-top text-muted">Handed your phone and your key, walked to the gate.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">Money</td>
                <td className="px-4 py-3 align-top text-muted">Escalating payments, tithing, asset transfers.</td>
                <td className="px-4 py-3 align-top text-muted">Zero required payment, donation only at the end and only if you want.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">Post-program contact</td>
                <td className="px-4 py-3 align-top text-muted">Mandatory, frequent, guilt-based.</td>
                <td className="px-4 py-3 align-top text-muted">None, unless you opt in by asking a center to contact you.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 align-top font-medium text-foreground">Doctrine</td>
                <td className="px-4 py-3 align-top text-muted">Fixed beliefs you must affirm.</td>
                <td className="px-4 py-3 align-top text-muted">A technique you must test. Keep your religion.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Where Vipassana really is rigid</h2>
        <p className="mb-4 text-muted">
          Honest caveats, because I would not trust a page that only said nice things. These are real and they are worth going in with your eyes open about.
        </p>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">The code of discipline during the course is strict. </strong>
            No talking, no phone, no reading, specific schedule, specific posture. It is functional (deep concentration needs reduced input) but it absolutely feels authoritarian if you are sensitive to that.
          </li>
          <li>
            <strong className="text-foreground">During the 10 days, you cannot mix techniques. </strong>
            You cannot run your usual loving-kindness or TM or breathwork alongside it. This protects the integrity of the instruction but can feel dogmatic.
          </li>
          <li>
            <strong className="text-foreground">Goenka&apos;s recordings are the standard worldwide. </strong>
            Every center uses the same recorded discourses. This ensures consistency and prevents local teacher drift; it can also feel fossilized.
          </li>
          <li>
            <strong className="text-foreground">The organization is centralized. </strong>
            Individual centers do not innovate on the technique. If you want a progressive or hybrid format, this tradition will not give it to you.
          </li>
        </ul>
        <p className="mt-4 text-muted">
          These are legitimate critiques. But rigidity alone does not make a cult. Medical residencies are rigid. Classical dance training is rigid. The question is whether the rigidity serves the trainee or exploits them. On every scoring row that tests for exploitation (money, leader worship, punishment for leaving, recruitment, milieu control past day 10), the Goenka 10-day clears.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">What to actually watch for</h2>
        <p className="mb-4 text-muted">
          If you are going in with cult concerns, here is the honest set of things to pay attention to, based on what real cult rubrics actually test for:
        </p>
        <div className="space-y-3">
          {[
            "After you complete a course, does anyone from the organization contact you without your explicit opt-in? If yes, that is a red flag. In my experience with this tradition, no.",
            "Are you asked to donate or are you pressured about the amount? You should be free to donate zero. No one should check what you gave. If either of those fails, walk.",
            "Is there a living figure whose word is final? If a teacher starts substituting their authority for the recorded discourses or for your own verification, that is a drift signal.",
            "Are you asked to cut contact with anyone outside the tradition? This never happens in Goenka Vipassana and would be disqualifying.",
            "Are you asked to recruit? You should not be. Students recommend the course by word of mouth or not at all.",
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 text-xs font-semibold text-accent">
                {i + 1}
              </div>
              <p className="text-sm text-muted">{line}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">My verdict, after six courses</h2>
        <p className="mb-4 text-muted">
          I have sat six Goenka 10-day courses at three different centers. I have also spent years off and on in the post-course world, trying to sustain a daily practice, watching what the organization does and does not ask of me. On the two rubrics this page uses, my honest scoring is:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted">
          <li>9 out of 16 scored rows clear outright.</li>
          <li>7 out of 16 are partial, and every partial row describes a constraint that ends on day 10.</li>
          <li>0 rows fail.</li>
          <li>The single strongest signal in either direction is financial: zero required payment, which is the opposite of how cults fund themselves.</li>
          <li>The second strongest signal is post-program contact: effectively none. The center does not come looking for you.</li>
        </ul>
        <p className="text-muted">
          If you define cult loosely enough that any group with strict rules counts, sure, it is culty. If you define it the way Hassan and Lifton define it, the way actual cult researchers mean the word, it is not a cult. It is a bounded, rigorous, donation-funded meditation training with strict rules during the program and essentially no demands outside it.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-border bg-card p-5 open:border-accent/30 open:bg-accent/5"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 text-base font-semibold text-foreground">
                <span>{f.question}</span>
                <span className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <PracticeBuddyCta
        heading="The tool cults do not build for their former members"
        description="Free, tradition-respectful daily sitting partner matching over Google Meet. Built outside the organization, because a real training lets its alumni build their own infrastructure."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related guides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/faq/is-vipassana-a-cult" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Short FAQ version
          </Link>
          <Link href="/faq/why-is-vipassana-free" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Why it is free
          </Link>
          <Link href="/guide/risks-and-safety" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Risks and safety
          </Link>
          <Link href="/t/after-vipassana-daily-practice-rewire-habits" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            After the course
          </Link>
          <Link href="/guide/first-course-tips" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            First course tips
          </Link>
        </div>
      </div>

      <PageComments pageId="t-is-vipassana-a-cult" />
    </article>
  );
}
