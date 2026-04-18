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
  ConceptReveal,
  RefusalCard,
  LifeTimeline,
  LineageMarquee,
  GuruDeathBeam,
  DecentralizedDiagram,
} from "./goenka-client";

const PAGE_URL = "https://vipassana.cool/t/goenka-cult";
const PUBLISHED = "2026-04-17";

export const metadata: Metadata = {
  title: "Goenka Cult? The Personality Cult That Fired Its Own Personality",
  description:
    "If S.N. Goenka built a personality cult, it is the only one in history that survived the founder's 2013 death with zero successor, zero schism, and the same recorded discourses still playing at 200+ centers. A structural audit of Goenka the man, not the retreat.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Goenka Cult? The Personality Cult That Fired Its Own Personality",
    description:
      "A structural audit of S.N. Goenka as a guru figure: the seven refusals he made during his life, the succession he deliberately did not arrange, and the 12+ years of organizational continuity after his 2013 death.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goenka Cult? The Personality Cult That Fired Its Own Personality",
    description:
      "Seven specific things cult leaders do that Goenka refused to do. Post-2013 continuity as the acid test.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Was S.N. Goenka a cult leader?",
    answer:
      "On the standard definition of a cult leader (charismatic figure who concentrates devotion, wealth, and decision-making authority around themselves), no. Goenka made a specific set of structural choices during his life that systematically prevented that kind of concentration: he refused personal wealth, refused to designate a single successor, recorded all his discourses so they could not be modified, created an unpaid rotating assistant-teacher system in 1982, and instructed students never to take his word as authority. The 12+ years his organization has operated after his 29 September 2013 death, with no schism and no successor battle, is the structural test of whether the personality cult apparatus ever existed in the first place.",
  },
  {
    question: "When did S.N. Goenka die and what happened to the organization?",
    answer:
      "Satya Narayan Goenka died on 29 September 2013 in Mumbai at age 89. His wife Ilaichi Devi Goenka, who taught alongside him, died in 2021. The organization did not appoint a new primary teacher. Instead it continued under the existing decentralized structure: rotating committees of assistant teachers at each of 200+ centers worldwide, using the same recorded discourses Goenka recorded in the 1990s. No new course material has been authorized since his death. No living figure has been elevated to replace him. This is the single most unusual feature of the organization and the strongest argument against the cult framing.",
  },
  {
    question: "Why are the recorded discourses considered anti-cult, not pro-cult?",
    answer:
      "Critics sometimes point to students listening to recordings of a dead man as evidence of cult dynamics. The structural reading is the opposite. By recording the discourses once and standardizing them across every center, Goenka prevented any living teacher, including himself after death, from drifting the instruction or building a personal following within the tradition. Every assistant teacher at every center uses the same audio. There is no charisma arbitrage, no teacher-specific interpretation, no local guru forming. One recording means no living intermediary can accumulate authority. Most post-founder cults fracture precisely because living successors fight over whose interpretation is canonical; the recording makes that impossible.",
  },
  {
    question: "Did Goenka designate a successor?",
    answer:
      "No. He deliberately did not. In a traditional guru lineage the transmission of authority to a named successor is the central mechanism by which the lineage continues. Goenka instead built an institutional structure of assistant teachers, introduced in 1982, who are unpaid, rotated, not ordained, and have no charisma requirement. After his death, governance continues through committees of senior assistant teachers rather than through a single replacement figure. There is no Goenka successor, no heir apparent, no inner circle of chosen disciples. The structure is deliberately flat.",
  },
  {
    question: "What is the lineage behind S.N. Goenka?",
    answer:
      "The Goenka tradition comes through four consecutive householder teachers, which is unusual for any meditation lineage. Ledi Sayadaw (1846-1923) was a Burmese monk who taught Vipassana to laypeople. Saya Thet Gyi (1873-1945) was a lay farmer who became the first prominent non-monastic teacher. U Ba Khin (1899-1971) was the Accountant General of Burma, married with six children, who taught Vipassana at the International Meditation Centre in Rangoon. Goenka himself was a Burmese-Indian businessman, married with two sons, who studied under U Ba Khin for 14 years before being authorized to teach in 1969. The tradition has operated without monastic celibates at its head for over a century. Householder lineages do not produce the guru archetype most cult-critics are pattern-matching against.",
  },
  {
    question: "Why does the keyword goenka cult get searched?",
    answer:
      "Three reasons, in descending order of frequency. First, prospective students encounter the retreat's strict rules (silence, phone confiscation, fixed schedule, sitting through recorded discourses of a dead teacher) and pattern-match to cult imagery before they understand the functional purpose. Second, students who left a course early, or had a difficult experience, reach for the most intense word to describe it. Third, a smaller group of Theravada insiders critique Goenka for standardizing a specific technique and teaching a householder lineage rather than a monastic one. None of these three reasons holds up to the structural test applied on this page: what the organization actually does with authority, money, and succession.",
  },
  {
    question: "Did Goenka make money from teaching?",
    answer:
      "No. The financial structure of the organization is the strongest structural anti-cult signal. Courses are free. Donations are only accepted from students who have already completed a course, only at the end, and only if the student wants to give. Donations are held at the individual center, not routed to Goenka personally or to a central holding company. He continued running a business in Mumbai during his teaching life; he did not live off the donations of students. After his death there has been no inheritance of teaching income because there was no teaching income to inherit.",
  },
  {
    question: "What is the difference between this question and is-vipassana-a-cult?",
    answer:
      "Is Vipassana a cult is a question about the retreat format: the silence, the schedule, the rules during the 10 days. You can answer that one with a rubric on the mechanics of the program. Is Goenka a cult is a question about the man and the organization he left behind: whether the guru figure concentrated authority, whether the institution collapsed or continued after his death, whether the lineage was a personality structure or a transmission of technique. This page answers the second question. The retreat-format question is audited in full at /t/is-vipassana-a-cult.",
  },
];

const refusals = [
  {
    cultMove: "Wear distinctive robes to signal special status",
    goenkaMove: "Wore ordinary white kurta or everyday clothes, the same as a senior householder at any Indian wedding",
    evidence:
      "No photographs of Goenka in ceremonial robes, no official vestments, no insignia. Dress was deliberately unmarked.",
  },
  {
    cultMove: "Take a new spiritual name after ordination",
    goenkaMove: "Kept Satya Narayan Goenka, his birth name, for life",
    evidence:
      "No sannyas name, no monastic ordination name. The only added term was the common Hindi honorific -ji, which attaches to any respected elder.",
  },
  {
    cultMove: "Claim special attainment, jhana states, or enlightenment",
    goenkaMove: "Never claimed any attainment of his own, publicly or privately",
    evidence:
      "In his discourses Goenka repeatedly defers to the Buddha as the source and refuses to put himself in the same category. He calls himself a humble Dhamma worker.",
  },
  {
    cultMove: "Concentrate donations in a personal foundation controlled by the leader",
    goenkaMove: "Courses cost zero; donations collected only from completed students, held at each local center",
    evidence:
      "No central treasury routed to the teacher. Goenka continued running his separate Mumbai textile business during his teaching life; he did not live off student donations.",
  },
  {
    cultMove: "Appoint a named successor before death to inherit authority",
    goenkaMove: "Introduced an unpaid, rotating assistant-teacher system in 1982 and never named a single successor",
    evidence:
      "No designated heir. No spiritual son. After his 2013 death, governance continued through committees of assistant teachers, not through one replacement figure.",
  },
  {
    cultMove: "Keep teachings fluid so the leader can reinterpret and reframe them over time",
    goenkaMove: "Recorded a single complete set of discourses and froze them as the standard at every center",
    evidence:
      "The audio used at centers today is the same audio from the 1990s. No one, including Goenka himself after a certain point, can update the canon. This is the opposite of a reinterpretation-based cult.",
  },
  {
    cultMove: "Tell students their only path to truth runs through you",
    goenkaMove: "Explicitly told students, repeatedly, not to accept anything on his word and to verify by direct experience",
    evidence:
      "The instruction on verification appears throughout the 10-day course discourses. The tradition hands you a method to test, not a belief to adopt.",
  },
];

const timelineSteps = [
  {
    year: "1924",
    title: "Born in Mandalay, Burma",
    body: "Satya Narayan Goenka born into an Indian merchant family on 30 January 1924. Raised in business, not in a spiritual tradition.",
  },
  {
    year: "1955",
    title: "First 10-day course under U Ba Khin",
    body: "Sits his first course at age 31, while running migraine-level stress at his Mumbai-facing trading business. Not an aspiring teacher at this point.",
  },
  {
    year: "1969",
    title: "Leaves Burma for India, authorized to teach",
    body: "After 14 years of study under U Ba Khin, receives authorization to teach Vipassana in India. The lineage, built on four consecutive householder teachers, becomes portable.",
  },
  {
    year: "1976",
    title: "First center opens: Dhamma Giri, Igatpuri",
    body: "Ten-day courses begin in a fixed location for the first time. Structure of the course (timing, sequence, rules) is set and never materially changed.",
  },
  {
    year: "1982",
    title: "Assistant teacher system introduced",
    body: "The single most important de-personification decision. Courses are now conducted by unpaid, rotating assistant teachers, not by Goenka himself. Charisma becomes structurally unnecessary.",
  },
  {
    year: "1990s",
    title: "Discourses recorded and standardized",
    body: "The 10-day and 20-day course discourses are recorded. From this point on, every center plays the same audio. No local teacher can substitute their own interpretation.",
    big: true,
  },
  {
    year: "2013",
    title: "Goenka dies in Mumbai, age 89",
    body: "Dies on 29 September 2013. No successor is named. The organization continues exactly as before because the structure was built for this moment.",
    big: true,
  },
  {
    year: "2021",
    title: "Mata Ilaichi Devi, his wife and co-teacher, dies",
    body: "The other most senior figure in the tradition also dies without a successor. Governance continues through committees of assistant teachers.",
  },
  {
    year: "Today",
    title: "200+ centers still running the same course",
    body: "Over 12 years after Goenka's death, the 10-day course at any center still uses the same recorded discourses, the same schedule, the same dana-only financial model. Zero schism.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Goenka Cult?", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Goenka Cult? The Personality Cult That Fired Its Own Personality"
        description="A structural audit of S.N. Goenka as a guru figure: seven refusals he made during his life, the succession he deliberately did not arrange, and the 12+ years of organizational continuity after his 2013 death."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Goenka Cult?" },
        ]}
        category="Honest Audits"
        title="Goenka Cult? The Personality Cult That Fired Its Own Personality"
        description="Every other page on this query argues about the retreat. This one audits the man. Seven specific things cult leaders do that S.N. Goenka refused to do, and the 12+ years his organization has run without him as the structural proof."
        datePublished={PUBLISHED}
      />

      <div className="mb-10 rounded-lg border border-accent/20 bg-accent/5 p-5">
        <p className="mb-1 text-sm font-medium text-accent">TL;DR</p>
        <p className="text-sm text-muted">
          Search results for <em>goenka cult</em> argue about silence, surveillance, and chanting on the retreat. That debate belongs on a different page. The question this page answers is whether S.N. Goenka, as a guru figure, built a personality cult. The structural reading: he spent 60 years deliberately dismantling the apparatus a cult leader would normally build. He refused the robes, refused the name change, refused the claim of attainment, refused personal wealth, refused a named successor, froze his own teachings in recordings so he could not reinterpret them, and told students never to take his word as authority. When he died on 29 September 2013, the organization did not collapse, did not schism, and did not elevate a new figure. Over 12 years later, the same recorded discourses still play at 200+ centers. That is the opposite of how a personality cult behaves when its personality dies.
        </p>
      </div>

      <div className="mb-12">
        <ConceptReveal
          title="The personality cult that fired its own personality"
          subtitle="A cult leader concentrates devotion, wealth, and decision-making around themselves. Goenka spent his life doing the opposite, on purpose."
          captions={[
            "Recorded the discourses once in the 1990s, froze them, and never authorized new ones",
            "Introduced an unpaid rotating assistant-teacher system in 1982 so courses did not need him",
            "Refused to name a successor. After his 2013 death, no one replaced him",
            "Held donations at each local center, not in a personal foundation",
            "Told students in every course to verify the technique themselves and not take his word",
          ]}
        />
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The structural numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={89} />
            </div>
            <p className="mt-1 text-xs text-muted">years he lived, died 2013</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={12} />
              <span className="text-xl text-muted">+ yrs</span>
            </div>
            <p className="mt-1 text-xs text-muted">organization running without him</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-muted">named successors ever</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={200} />
              <span className="text-xl text-muted">+</span>
            </div>
            <p className="mt-1 text-xs text-muted">centers still running the same audio</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Why this question is different from <em>is vipassana a cult</em>
        </h2>
        <p className="mb-4 text-muted">
          The two queries look the same to search engines but they are not the same question.
          <em> Is vipassana a cult</em> asks about the retreat format: the silence, the phone confiscation,
          the fixed schedule, the 10.5 hours of meditation per day. That is a format question, and it
          is answered in full, row by row, at{" "}
          <Link href="/t/is-vipassana-a-cult" className="text-accent underline hover:text-foreground">
            /t/is-vipassana-a-cult
          </Link>{" "}
          using Steven Hassan&apos;s BITE model and Robert Jay Lifton&apos;s 8 criteria of thought
          reform.
        </p>
        <p className="text-muted">
          <em>Goenka cult</em> is about the man. About whether S.N. Goenka, as a guru figure, built
          a personality structure around himself the way Bhagwan Shree Rajneesh did, the way Swami
          Muktananda did, the way Maharishi Mahesh Yogi did. That is a different audit. It is not
          about course mechanics. It is about what the founder chose to do with authority, wealth,
          charisma, and succession during the sixty years he was teaching, and what the
          organization did with those things on the day he died. This page answers that.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          The seven refusals
        </h2>
        <p className="mb-6 text-muted">
          These are seven specific moves a cult leader almost always makes. Each row below pairs
          the cult-leader move with what Goenka did instead, and the evidence that makes the refusal
          structural rather than decorative. If he had made any two of these moves, the cult framing
          would have a real target. He made none.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {refusals.map((r, i) => (
            <RefusalCard
              key={i}
              index={i}
              cultMove={r.cultMove}
              goenkaMove={r.goenkaMove}
              evidence={r.evidence}
            />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          The recorded discourse, read structurally
        </h2>
        <p className="mb-4 text-muted">
          The single most common critique in the <em>goenka cult</em> search results is the
          recorded discourse. Students sitting in a hall listening to the voice of a man who has
          been dead for over a decade looks, on the surface, like the strongest evidence for the
          cult reading. The opposite is true once you read it structurally.
        </p>
        <p className="mb-8 text-muted">
          A living charismatic teacher at each center would be free to drift the instruction, add
          their own embellishments, build their own following, and compete with neighboring centers
          for devotees. That is exactly how a sangha fractures after a founder dies. By recording
          the discourses once and making them the canon at every center, Goenka prevented any
          living intermediary from accumulating that kind of authority. The frozen audio is a
          decentralization protocol. No one can update the canon. No one can deviate. No one can
          arbitrage their charisma against it.
        </p>
        <DecentralizedDiagram />
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          The lineage: four consecutive householder teachers
        </h2>
        <p className="mb-4 text-muted">
          One of the quieter structural facts about the Goenka tradition: it has been led by lay
          householders, not monks, for over a century. This is rare enough in meditation lineages
          to deserve its own audit.
        </p>
        <div className="mb-6">
          <LineageMarquee
            items={[
              "Ledi Sayadaw, 1846 - 1923 (monk, revivalist)",
              "Saya Thet Gyi, 1873 - 1945 (lay farmer)",
              "U Ba Khin, 1899 - 1971 (Accountant General of Burma, married, 6 children)",
              "S.N. Goenka, 1924 - 2013 (businessman, married, 2 sons)",
              "Assistant teachers, 1982 to present (unpaid, rotated, no ordination)",
            ]}
          />
        </div>
        <p className="mb-4 text-muted">
          Ledi Sayadaw was a Burmese monk who broke precedent by teaching Vipassana to laypeople.
          After him, the lineage went lay and stayed lay. Saya Thet Gyi, a farmer. U Ba Khin, the
          Accountant General of Burma, married with six children. Goenka, a Burmese-Indian
          businessman, married with two sons, who kept running a Mumbai textile business alongside
          his teaching work.
        </p>
        <p className="text-muted">
          Classic guru cults almost always feature a celibate renunciate at the head, because the
          guru archetype depends on the figure having transcended ordinary life. A lineage of
          householders breaks that archetype. Four generations of working married men teaching
          other working married men a technique to verify in their own bodies is not a shape that
          produces a personality cult. It is a shape that produces a practical tradition.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          The life, in the decisions that matter
        </h2>
        <p className="mb-6 text-muted">
          A timeline of the specific dates and structural decisions that define what kind of
          organization Goenka was building. The two starred rows are the ones that did the real
          de-personification work: freezing the canon and not naming a successor.
        </p>
        <LifeTimeline steps={timelineSteps} />
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          The founder-death test
        </h2>
        <p className="mb-6 text-muted">
          The clearest structural test for whether a tradition was a personality cult is what
          happens to it when the founder dies. A personality cult either collapses outright,
          schisms into warring factions fighting over successor legitimacy, or quietly erodes as
          donations dry up without the living charismatic figure. A real training that happens to
          be taught by one person continues essentially unchanged.
        </p>
        <GuruDeathBeam />
        <p className="mt-6 text-muted">
          The comparison is not cherry-picked. Every high-profile twentieth-century guru movement I
          could find either fractured, litigated, or imploded when its founder died or was exposed.
          The Goenka tradition, 12+ years after Goenka&apos;s death and five years after his wife
          and co-teacher Ilaichi Devi&apos;s death, is running the same course with the same audio
          at the same price (zero) at more centers than when he was alive. That is not an artifact
          of devotion. It is an artifact of structural design.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          Where a cult critic is not wrong
        </h2>
        <p className="mb-4 text-muted">
          An honest page does not pretend the critique has no surface area. Here is what the cult
          critics get right, and why it still does not make a personality cult.
        </p>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">The recorded voice is unusual. </strong>
            It is. Sitting in a hall and being walked through meditation by a dead man&apos;s
            recording is genuinely strange the first time you encounter it. It is not cult
            evidence; it is standardization. But the strangeness is real and worth naming.
          </li>
          <li>
            <strong className="text-foreground">The technique is presented as the technique. </strong>
            You cannot blend in mantra, TM, or your usual practice during the 10 days. The
            instruction is the instruction. This is rigid, and the rigidity is functional (the
            method depends on not mixing it), but it reads as dogmatic if you are sensitive to that.
          </li>
          <li>
            <strong className="text-foreground">Assistant teachers defer heavily to the recordings. </strong>
            They are meant to. The whole point of the assistant-teacher system is to remove
            charisma from the instruction. But if you are expecting a living teacher with their own
            voice, the deferral can feel fossilized or even robotic.
          </li>
          <li>
            <strong className="text-foreground">Goenka&apos;s discourses include devotional framing. </strong>
            Metta, chanting, Pali terms, references to the Buddha as the source. If you arrive
            expecting a purely secular mindfulness program, the devotional register is real and you
            should go in knowing that.
          </li>
        </ul>
        <p className="mt-4 text-muted">
          None of these is a cult marker. A personality cult requires a concentration of authority,
          wealth, and decision-making around a single charismatic figure, a demand for exclusive
          devotion, and an apparatus that punishes departure. The Goenka tradition fails on every
          one of those requirements.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          What to actually watch for
        </h2>
        <p className="mb-4 text-muted">
          If you have a standing concern about personality cult drift in any meditation tradition,
          including this one, these are the signals that would actually be disqualifying.
        </p>
        <div className="space-y-3">
          {[
            "A living figure starts substituting their own voice for the recorded discourses. The recordings are the firewall against local guru formation. If a teacher tells you to listen to them over the recording, that is the drift signal.",
            "New course material gets authorized by a named figure. No new Goenka-authorized discourse has been approved since his death. If that changes, the structure has changed.",
            "Donations get routed from local centers to a central foundation. Right now every center holds its own donations. Centralization of money is the classic post-founder failure mode.",
            "Post-course contact becomes mandatory or guilt-based. If after a course you are emailed, called, or pressured to stay connected, that is cult-mechanic territory regardless of tradition.",
            "Attainment claims start appearing. Goenka never claimed any. If assistant teachers begin claiming specific jhana states or stages of insight, that is not the tradition he left behind.",
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
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          My verdict, after six courses
        </h2>
        <p className="mb-4 text-muted">
          I have sat six 10-day Goenka courses at three different centers. I never met Goenka; he
          died before my first course. What I have met is the organization he left behind. And the
          organization behaves exactly the way a structure without a personality cult at its center
          would behave.
        </p>
        <p className="mb-4 text-muted">
          Nobody has ever asked me for money. Nobody from any center has contacted me between
          courses. No assistant teacher has asked me to defer to their personal interpretation.
          Every center plays the same audio in the same order on the same days at the same times.
          When I show up for a course, the person running the meditation hall is a volunteer, not
          a professional, and they are likely to be a different person at my next course. None of
          this looks like a personality cult. All of it looks like a training institution that its
          founder built to not need him.
        </p>
        <p className="text-muted">
          The cult framing, applied to Goenka the man, fails the structural test. The organization
          ran 60 years with him, and is now running over a decade without him, on exactly the same
          infrastructure. The only honest reading is that the personality cult apparatus was never
          there to begin with.
        </p>
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
        heading="The sitting partner tool a personality cult would never let exist"
        description="Free, tradition-respectful daily sitting partner matching over Google Meet. Built outside the organization by an old student, because a real training lets its alumni build their own infrastructure."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related reading</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/t/is-vipassana-a-cult" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Is Vipassana a cult? The retreat audit
          </Link>
          <Link href="/faq/why-is-vipassana-free" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Why it is free
          </Link>
          <Link href="/t/anapana-and-vipassana" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Anapana and Vipassana
          </Link>
          <Link href="/guide/risks-and-safety" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Risks and safety
          </Link>
          <Link href="/t/matthew-diakonov" className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent">
            Who is writing this
          </Link>
        </div>
      </div>

      <PageComments pageId="t-goenka-cult" />
    </article>
  );
}
