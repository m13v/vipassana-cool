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
  OriginBeam,
  RuleOriginCard,
  SourceMarquee,
  MillenniaTimeline,
  ClaimVsSource,
  ReadingFramework,
} from "./cult-client";

const PAGE_URL = "https://vipassana.cool/t/vipassana-cult";
const PUBLISHED = "2026-04-18";

export const metadata: Metadata = {
  title: "Vipassana Cult? Every Rule That Looks Culty Predates Modern Cult Psychology by 2,300 Years",
  description:
    "People flag the 10-day Vipassana retreat as a cult because of silence, food cutoffs, schedule, phone confiscation, and donation-only funding. Every one of those rules traces to a Theravada Buddhist source codified before 350 BCE. Hassan's BITE model came in 1988. Lifton's criteria in 1961. The rubric is 23 centuries younger than the rules it is being applied to.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Vipassana Cult? The Anachronism Test",
    description:
      "The rules that make the 10-day retreat look cult-shaped are imported from a monastic code that predates modern cult psychology by over two millennia. A source-by-source audit.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana Cult? The Anachronism Test",
    description:
      "Every culty-looking retreat rule, traced back to its Pali source. The rubric accusing them is newer than the rules by 2,300+ years.",
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: "Is Vipassana a cult?",
    answer:
      "No. The rules that make a 10-day Vipassana retreat feel cult-shaped (silence, a 4 AM bell, no food after noon, no phone, no reading, sex segregation, donation-only funding) are not the invention of any modern teacher. They are imported almost verbatim from the Pali Vinaya and the Atthasila, two Theravada Buddhist codes that were in circulation well before 350 BCE. Steven Hassan's BITE model was published in 1988. Robert Jay Lifton's 8 criteria of thought reform were published in 1961. The frameworks being used to accuse the practice are roughly 23 centuries younger than the practice itself, and a 2,500-year-old monastic norm is the wrong target for a rubric built to catch 20th-century charismatic authoritarians.",
  },
  {
    question: "If the rules came from an ancient monastic code, doesn't that make monastic Buddhism a cult too?",
    answer:
      "This is the right follow-up. Monastic Buddhism is large (around 300 million Buddhists globally, 500,000+ monastics in the Theravada tradition alone), decentralized across thousands of monasteries and traditions with no single leader, produces no escalating financial demand on lay followers, does not shun people who leave, and has never had a single founder-death succession crisis of the kind cult rubrics are designed to catch. The Theravada tradition in particular runs on dana (voluntary gift economy) the same way the Goenka network does, which is why the funding model did not have to be invented in 1969, it was imported.",
  },
  {
    question: "What specific retreat rules come from the Pali Vinaya and the 8 precepts?",
    answer:
      "The big ones: Ariyasaavaso tunhibhava (noble silence) is described in the Kosambiya Sutta. Vikalabhojana veramani (no food after midday) is the sixth of the eight precepts. Uccasayana mahasayana veramani (no high or luxurious seats) drives the modesty of meditator cushions and sleeping arrangements. Nacca-gita-vadita-visuka-dassana veramani (no entertainment, music, cosmetics) explains the no-books, no-music, no-phone rule. Abrahmacariya veramani (celibacy) explains the sex segregation and no-contact rules. Surameraya-majja-pamadatthana veramani (no intoxicants) is one of the five lay precepts and explains the no-alcohol policy. Panatipata veramani (no killing, including insects) explains why the centers do not spray the meditation hall and ask students to avoid harming mosquitoes. Each rule has a named Pali source and a known textual tradition.",
  },
  {
    question: "Why does the keyword 'vipassana cult' get searched so much?",
    answer:
      "Three overlapping reasons. First, pattern-matching: a secular Western visitor walks into a format with 2,500-year-old monastic conventions, recognizes the surface features (silence, schedule, phone confiscation, dietary rules, segregation) from modern cult documentaries, and reaches for the most intense word in English for that shape. Second, attention economy: the word 'cult' is an algorithmic magnet on Medium, Reddit, Quora, and YouTube, so critics use it liberally and it builds a feedback loop of search demand. Third, a real failure of framing: most defense posts about Vipassana either dismiss the concern or invoke academic rubrics that do not address why the format specifically feels culty to a modern reader. The missing defense is the historical one: these rules are older than cult psychology.",
  },
  {
    question: "Doesn't the 'it's ancient' defense fail if a modern organization exploits an ancient structure?",
    answer:
      "Correct, and that is exactly why this page is about the rules, not the organization. An ancient rule can be abused by a modern operator. The Goenka organization's anti-exploitation protections are structural, covered in detail at /t/goenka-cult and /t/is-vipassana-a-cult: no required payment ever, no recruitment quota, no mandatory post-course contact, no living successor, no financial inheritance, decentralized governance, fixed recorded discourses that cannot be modified. The point of this page is narrower: do not confuse the age of a rule with the age of a cult. Evaluate the rules on their source, and evaluate the organization on what it does with those rules in 2026.",
  },
  {
    question: "Isn't the 10-day silent format itself a modern invention by S.N. Goenka?",
    answer:
      "No. The 10-day intensive lay retreat format predates Goenka by at least three generations of teachers in his own lineage, and the general practice of lay people spending bounded periods in monastic conditions on uposatha days and during the vassa (rains retreat) is attested in the Pali canon itself, roughly 2,500 years old. Goenka standardized the curriculum, the schedule, and the recorded discourses starting in 1969, but the shape of the retreat (limited days, 8-precept observance, noble silence, dana economy) he inherited from U Ba Khin, who inherited it from Saya Thet Gyi, who inherited it from Ledi Sayadaw, a Burmese monk active in the late 1800s who revived lay Vipassana practice from material in the Pali texts.",
  },
  {
    question: "What would actually make Vipassana a cult, given this historical framing?",
    answer:
      "A short checklist. If any of these were true, the ancient-source defense collapses: (1) required payment to attend or ongoing tithing, (2) a living charismatic leader whose decisions cannot be audited, (3) recruitment quotas or evangelism requirements, (4) shunning of people who leave, (5) mandatory post-course contact, (6) asking students to cut ties with family or outside community, (7) doctrine claimed to be supernatural or unquestionable. In the Goenka tradition as it exists in 2026, zero of these are true. Every item on this list has been explicitly countered by a structural choice, many of them before Goenka's death in 2013.",
  },
  {
    question: "If the rules are this old, why do they feel so intense during the course?",
    answer:
      "The intensity is real and comes from two things. First, 10.5 hours of daily meditation is genuinely hard, and the 8 precepts stripped from monastic life (no food after noon, no entertainment, no sensual distraction) are designed to make meditation the only available thing to do. That is the functional point, not a control tactic. Second, a modern secular Western mind is not calibrated for a monastic week: no one in your normal life wakes you at 4 AM with a bell, and no one tells you to stop eating at noon. Running into that as an adult for the first time can feel coercive even when it is voluntary, bounded, and textually older than most of the civilizations we currently live inside.",
  },
];

const ruleOrigins = [
  {
    rule: "No talking for 9 days (noble silence)",
    source: "Ariyasaavaso tunhibhava — Pali canon, described in Kosambiya Sutta and the Vinaya Pitaka",
    date: "~4th c. BCE",
    explanation:
      "Monastic noble silence was already a named practice when the Vinaya was first recited. The retreat imports it wholesale, and ends it on day 10.",
  },
  {
    rule: "No food after midday",
    source: "Vikalabhojana veramani — 6th of the 8 precepts (Atthasila)",
    date: "~4th c. BCE",
    explanation:
      "The 8 precepts are observed by lay Buddhists on uposatha days (4 days a month in the lunar calendar) and during retreats. The food rule is among them, not a Goenka invention.",
  },
  {
    rule: "4 AM wake bell",
    source: "Monastic vatta (daily observance) pattern across the Vinaya",
    date: "Pre-Common Era",
    explanation:
      "Early rising predates alarm clocks by millennia. Theravada monastics still rise between 3 and 4 AM for morning chanting and meditation in monasteries across Sri Lanka, Thailand, Burma, and Laos.",
  },
  {
    rule: "Sex segregation on the property",
    source: "Abrahmacariya veramani — 3rd of the 8 precepts, plus monastic Sanghadisesa rules on contact",
    date: "~4th c. BCE",
    explanation:
      "Celibate conduct during retreat is a precept, not a cult purity rule. The physical segregation enforces the precept and ends at day 10.",
  },
  {
    rule: "No reading, writing, or entertainment",
    source: "Nacca-gita-vadita-visuka-dassana veramani — 7th of the 8 precepts",
    date: "~4th c. BCE",
    explanation:
      "The precept covers dance, song, music, shows, and adornment. Books, phones, and laptops are the modern equivalents. The reasoning is functional: remove stimuli so sensation-level observation becomes possible.",
  },
  {
    rule: "Donation-only economy (dana)",
    source: "Dana as one of the ten paramis (perfections), foundational to the Buddhist lay-monastic economy",
    date: "~5th c. BCE",
    explanation:
      "Dana is older than the Roman Republic. Courses being free and donation-funded is not a modern pricing strategy, it is the inherited economic model between lay practitioners and monastics for 25 centuries.",
  },
  {
    rule: "No killing, including insects",
    source: "Panatipata veramani — 1st of the 5 precepts (Pancasila)",
    date: "~4th c. BCE",
    explanation:
      "Centers do not spray insecticide in the meditation hall and instruct students to avoid harming mosquitoes. This is the first precept, not an eccentric modern rule.",
  },
  {
    rule: "No high or luxurious seats",
    source: "Uccasayana mahasayana veramani — 8th of the 8 precepts",
    date: "~4th c. BCE",
    explanation:
      "The modest sleeping and sitting arrangements are a precept, not an austerity drill. Historically, the precept distinguishes monastic life from householder comfort.",
  },
];

const claims = [
  {
    claim:
      "They confiscate your phone, which is a classic cult isolation tactic.",
    source:
      "Uposatha-day observance: during a day of intensified lay practice the 7th precept (no entertainment or adornment) is honored by removing sensory inputs. The retreat generalizes the uposatha format across 10 days.",
    finding:
      "The phone is a 21st-century instance of a 4th-century-BCE precept about removing entertainment during intensive practice. It is returned at the end. Uposatha observance is voluntary and has existed uninterrupted for 2,500 years.",
  },
  {
    claim:
      "Making you starve after noon is a control tactic designed to weaken you.",
    source:
      "Vikalabhojana veramani, the 6th of the 8 precepts. A bowl of fruit is provided at around 5 PM to new students, and the rule only fully applies to returning students.",
    finding:
      "The rule is 2,400+ years older than any cult rubric. It is functional (lighter digestion supports afternoon meditation) and new students are given an evening snack. Framing it as starvation is a category error.",
  },
  {
    claim:
      "Waking you at 4 AM with a loud bell is sleep deprivation, a known brainwashing technique.",
    source:
      "Morning vatta across the Theravada monastic tradition. Monks in Sri Lanka, Thailand, Burma, and Laos still rise between 3 and 4 AM.",
    finding:
      "Lights-out is at 9:30 PM, yielding about 6.5 hours of sleep. That is not sleep deprivation by any clinical definition. It is a monastic schedule adapted for a lay retreat.",
  },
  {
    claim:
      "The loud audio chanting is used to induce altered states and weaken your defenses.",
    source:
      "Pali chants are published in the Anguttara Nikaya and the Dhammapada. The specific chants used at the retreat are freely available on YouTube in full. Volume level is a function of the sound system, not a coercive design.",
    finding:
      "You can preview every chant before you attend. Students who find the volume uncomfortable can (and do) sit further back, wear earplugs, or request adjustments. The chants are 2,000+ year-old scriptural recitations, not a proprietary induction loop.",
  },
  {
    claim:
      "The dana (donation) model is coercive because it makes people feel indebted.",
    source:
      "Dana is foundational to Buddhist lay-monastic economic relationships. It is voluntary, anonymous at point of collection, only accepted from students who have completed a course, and only at the end. The same model sustains thousands of Theravada monasteries.",
    finding:
      "If voluntary donation by students who have already gotten the full product, with no tracking and no asking-price, is coercion, then every Theravada monastery on earth is coercive. More plausibly, the model is older than most modern forms of payment.",
  },
  {
    claim:
      "Separating men and women is patriarchal control over bodies and relationships.",
    source:
      "Abrahmacariya veramani is the 3rd of the 8 precepts and applies equally to men and women. The physical separation is a mechanism for supporting the precept during intensive practice.",
    finding:
      "The precept is about celibate conduct during retreat, not about controlling bodies. It ends at day 10. Long-term relationships are not affected (see /guide/vipassana-and-relationships).",
  },
  {
    claim:
      "Listening to a dead man's recorded voice is leader worship.",
    source:
      "Pali canon recitation has been recorded and transmitted for centuries specifically so that no living teacher can modify the instruction. The recording is the anti-guru mechanism, not a pro-guru one.",
    finding:
      "Fixed recordings prevent charisma arbitrage. Every center uses the same audio. No living intermediary accumulates authority. The opposite of cult structure, which depends on a living figure whose word changes.",
  },
];

const sourceTerms = [
  "Vinaya Pitaka",
  "Atthasila",
  "Pancasila",
  "Uposatha",
  "Ariyasaavaso tunhibhava",
  "Vikalabhojana veramani",
  "Abrahmacariya",
  "Dana parami",
  "Bhavana",
  "Sigalovada Sutta",
  "Anguttara Nikaya",
  "Dhammapada",
  "Patimokkha",
  "Kosambiya Sutta",
  "Sangha",
  "Kalyanamitta",
];

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vipassana.cool" },
          { name: "Guides", url: "https://vipassana.cool/t" },
          { name: "Vipassana Cult", url: PAGE_URL },
        ]}
      />
      <ArticleSchema
        title="Vipassana Cult? Every Rule That Looks Culty Predates Modern Cult Psychology by 2,300 Years"
        description="A source-by-source audit of the specific retreat rules that cause people to search 'vipassana cult,' each traced to its Theravada Buddhist textual source with dates."
        url={PAGE_URL}
        datePublished={PUBLISHED}
      />
      <FaqSchema faqs={faqs} />

      <ArticleHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/t" },
          { label: "Vipassana Cult" },
        ]}
        category="The anachronism test"
        title="Vipassana Cult? The Anachronism Test"
        description="Every rule at a 10-day Vipassana retreat that critics read as cult behavior is a named practice in a Buddhist monastic code that was already in circulation before 350 BCE. The rubric accusing them was published in the 20th century. That is a 23-century gap, and it matters."
        datePublished={PUBLISHED}
      />

      <div className="mb-12">
        <ConceptReveal
          title="The rubric is younger than the rules by 23 centuries"
          subtitle="The defense missing from every post on the first page of Google: these rules are not a modern operator's invention, they are imported from a monastic code older than every nation-state currently on the map."
          captions={[
            "Silence, food cutoffs, the 4 AM bell, phone confiscation, the dana economy — every one has a named Pali source.",
            "Hassan's BITE model: 1988. Lifton's 8 criteria: 1961. The oldest retreat rule: 4th c. BCE.",
            "Ancient origin does not absolve the organization. It shifts the question from 'what is the modern teacher doing?' to 'what is the modern organization doing with an inherited format?'",
            "That shift is the whole point of this page.",
          ]}
        />
      </div>

      <section className="mb-12 rounded-2xl border border-border bg-card p-6 md:p-8">
        <div className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          The claim, in numbers
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={8} />
            </div>
            <p className="mt-1 text-xs text-muted">retreat rules audited to source</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={2300} />
              <span className="text-xl text-muted">y</span>
            </div>
            <p className="mt-1 text-xs text-muted">gap between the rules and the rubric</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={1988} />
            </div>
            <p className="mt-1 text-xs text-muted">year Hassan&apos;s BITE model was published</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              <NumberTicker value={0} />
            </div>
            <p className="mt-1 text-xs text-muted">rules invented by the modern organization</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <p className="text-lg text-muted">
          When someone calls a 10-day Vipassana retreat a cult, they are almost always pattern-matching on a shortlist of surface features: the silence, the phone confiscation, the dietary rules, the 4 AM wake, the segregation of men and women, the dana (donation-only) funding, the recorded voice of a dead teacher playing every evening. Each of those features looks cult-shaped at first glance. The existing defenses on the first page of Google argue either from personal experience or from modern academic rubrics. Neither defense addresses the specific thing that makes the format feel coercive to a secular Western visitor, which is that every one of those rules was designed for a monastic culture, not for you.
        </p>
        <p className="mt-4 text-lg text-muted">
          The point of this page is narrower and, I think, more useful: put each rule next to its textual source and date, and see whether the shape is recognizable as a modern leader&rsquo;s control playbook or as an ancient monastic code whose job is supporting concentrated meditation.
        </p>
      </section>

      <section className="mb-14">
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Pali vocabulary you would find doing the same audit
        </h2>
        <p className="mb-5 text-muted">
          The underlying codes. Each of these terms names a specific practice or textual tradition that a monastic or retreat rule descends from. They are not internal jargon of a modern organization. They are shared vocabulary across the Theravada tradition and well-attested in the Pali canon.
        </p>
        <SourceMarquee items={sourceTerms} />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Each &ldquo;culty&rdquo; rule, sourced
        </h2>
        <p className="mb-6 text-muted">
          Eight rules commonly flagged in &ldquo;vipassana cult&rdquo; posts on Medium, Reddit, Quora, and blog comments, each paired with the specific Theravada Buddhist source that authors it. If the rule predates every modern cult rubric by two millennia, the explanation &ldquo;a modern operator invented this to control you&rdquo; is mathematically unavailable.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {ruleOrigins.map((r, i) => (
            <RuleOriginCard key={i} index={i} {...r} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          The sources and the rubrics, on the same timeline
        </h2>
        <p className="mb-6 text-muted">
          The visual argument. The retreat format was codified on the left side of this line. The rubrics used to accuse it were published on the right. The distance between them is not a rhetorical flourish, it is literal centuries.
        </p>
        <MillenniaTimeline />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          How the beam actually flows
        </h2>
        <p className="mb-6 text-muted">
          Each rule has a single ancestor. Modern cult vocabulary reads it as a coercion mechanism. The diagram below shows where each input rule originates (left) and how that same rule looks when a modern cult rubric is applied without historical context (right). The middle is the inherited code, not a modern operator.
        </p>
        <OriginBeam />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Seven viral claims, with receipts
        </h2>
        <p className="mb-6 text-muted">
          These are the specific claims I have seen circulate most often in &ldquo;vipassana cult&rdquo; critic posts on Medium, Reddit, and HubPages. Each one is paired with the actual source of the rule it is critiquing, and a short finding. Some of the claims describe real features that are uncomfortable. None of them describe features invented by the modern organization.
        </p>
        <div className="grid grid-cols-1 gap-4">
          {claims.map((c, i) => (
            <ClaimVsSource key={i} index={i} {...c} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          How to actually evaluate &ldquo;is this a cult?&rdquo; on any retreat
        </h2>
        <p className="mb-6 text-muted">
          The 4 questions that separate an inherited ancient format from a modern high-control group. The historical argument this page makes is a necessary condition, not a sufficient one. An ancient rule can still be abused. Here is the test that actually catches abuse.
        </p>
        <ReadingFramework
          steps={[
            {
              title: "1. Trace the rule to a source older than the organization",
              body: "If the rule is named in a textual tradition that predates the modern organization, the organization did not invent it to control you. That is a necessary condition, not a sufficient one. It rules out 'modern leader playbook' but does not rule out 'modern leader abusing an ancient structure.'",
            },
            {
              title: "2. Check what the organization does with the rule after the retreat ends",
              body: "Does the rule persist into your daily life, or does it stop at day 10? A cult extends rules indefinitely. The uposatha model ends the rule when the bounded period ends. If you walk out of a Vipassana center on day 10 and the 8 precepts stop applying, the organization is honoring the historical format, not extending it into a control structure.",
            },
            {
              title: "3. Check the money trail",
              body: "A modern cult monetizes. An ancient dana economy does not. If courses are free, donations are voluntary, anonymous, collected only from students who finished, and the organization does not route money through a single figure, the financial model is the inherited one. If any of those conditions breaks, the ancient source defense collapses immediately.",
            },
            {
              title: "4. Check the post-program contact pattern",
              body: "Uposatha observance has no mailing list. The real test of a high-control group is the volume and type of contact after you leave. In the Goenka tradition, the center has no ongoing contact claim on you unless you explicitly opt in. If a center ever starts behaving like a subscription funnel, the ancient-source defense ends there.",
            },
          ]}
        />
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Where this argument does not apply
        </h2>
        <p className="mb-4 text-muted">
          Honest limits. The historical argument on this page only defends the <em>rules</em> of the format, not everything any individual center or teacher has ever done with them.
        </p>
        <ul className="list-disc space-y-3 pl-6 text-muted">
          <li>
            <strong className="text-foreground">The argument does not defend any specific individual. </strong>
            If a teacher at a specific center behaves coercively, that is a separate question from whether the format is ancient. The format being ancient is a necessary defense, not a sufficient one.
          </li>
          <li>
            <strong className="text-foreground">The argument does not defend the organization&rsquo;s governance by itself. </strong>
            A separate structural audit of the Goenka organization (succession, governance, finances, recorded discourses) is at {" "}
            <Link href="/t/goenka-cult" className="text-accent underline hover:text-foreground">
              /t/goenka-cult
            </Link>
            . A separate rubric-based audit of the retreat format against Hassan&rsquo;s BITE and Lifton&rsquo;s 8 criteria is at {" "}
            <Link href="/t/is-vipassana-a-cult" className="text-accent underline hover:text-foreground">
              /t/is-vipassana-a-cult
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">The argument does not say the retreat will feel easy. </strong>
            10.5 hours of sitting, no food after noon, no talking for 9 days, and a 4 AM bell are genuinely difficult. The point is that they are difficult for a functional reason rooted in an old tradition, not because a modern leader wants to grind you down.
          </li>
          <li>
            <strong className="text-foreground">The argument does not extend to other meditation traditions with the same surface features but different structures. </strong>
            Secular 10-day silent retreats modeled on the Vipassana format but with different governance and financial structures should be evaluated on their own terms. The Pali source defense applies only insofar as the actual Pali rules are honored.
          </li>
        </ul>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-2xl font-bold text-foreground">My verdict, after six courses</h2>
        <p className="mb-4 text-muted">
          I have sat six Goenka 10-day courses at three centers. Every time I have gone in, the rules have felt foreign for roughly the first 48 hours, and then they have stopped feeling foreign at all. The reason they stop feeling foreign is not that I got brainwashed (I would not be writing this page). The reason is that after the first 48 hours, the functional purpose of each rule becomes obvious from the inside: the silence makes you hear your own mind, the food rule makes afternoon sitting possible, the 4 AM bell is when the mind is actually quietest, the segregation keeps the precept clean without requiring constant willpower, and the dana model means the person next to me paid the same (zero) that I did, which has a specific flattening effect on the room.
        </p>
        <p className="text-muted">
          None of those features is a 21st-century operator&rsquo;s design. They were all present when U Ba Khin taught Goenka in the 1950s, and when Ledi Sayadaw revived the lay Vipassana format in the 1880s, and when the uposatha 8 precepts were first being recited a few centuries before Christ. If you want a cult to critique, you need one that invented its own rules. This one did not.
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
        heading="Daily practice with a partner, outside the organization"
        description="Free peer-matched daily sittings over Google Meet. Built outside any meditation center, because an inherited ancient format does not need a modern subscription layer to sustain practice."
      />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="mb-4 font-semibold text-foreground">Related audits</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/t/is-vipassana-a-cult"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Rubric audit (BITE and Lifton)
          </Link>
          <Link
            href="/t/goenka-cult"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Goenka as a guru figure
          </Link>
          <Link
            href="/faq/is-vipassana-a-cult"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Short FAQ version
          </Link>
          <Link
            href="/faq/why-is-vipassana-free"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Why it is free
          </Link>
          <Link
            href="/guide/risks-and-safety"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Risks and safety
          </Link>
          <Link
            href="/guide/first-course-tips"
            className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
          >
            First course tips
          </Link>
        </div>
      </div>

      <PageComments pageId="t-vipassana-cult" />
    </article>
  );
}
