import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  ArticleMeta,
  FaqSection,
  AnimatedChecklist,
  BentoGrid,
  ProofBanner,
  RelatedPostsGrid,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL = "https://vipassana.cool/t/ten-day-commitment";
const PUBLISHED = "2026-05-18";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "The 'ten day commitment' is actually 12 days and 8 surrenders: what you sign up for at a Vipassana course",
  description:
    "A 10-day Vipassana course is 12 calendar days on site, a written declaration of willingness to comply, eight specific surrenders from the Code of Discipline (five precepts, technique exclusivity, electronics, exercise, contact, religious objects, schedule, leaving rules), and three extra precepts if you have sat before. Sourced from dhamma.org/en/about/code, verified 2026-05-18. Personal notes from six courses.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "The 'ten day commitment' is actually 12 days and 8 surrenders",
    description:
      "What you literally agree to when you register for a 10-day Vipassana course, enumerated from the Code of Discipline at dhamma.org. Plus notes on what each surrender felt like across six of my own courses.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "What the 'ten day commitment' actually contains",
    description:
      "12 days on site, 8 surrenders, one signed declaration, and a no-clean-exit rule. Sourced from dhamma.org and six of my own courses.",
  },
  robots: { index: true, follow: true },
};

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guide" },
  { label: "Ten day commitment" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/guide" },
  { name: "Ten day commitment", url: PAGE_URL },
];

const surrenders: BentoCard[] = [
  {
    title: "1. The full 12 calendar days",
    description:
      "Arrival is Day 0 in the evening. Departure is the morning of Day 11. The course itself is numbered Day 1 through Day 10, with the morning of Day 10 being the part most people remember as the end. You are physically on site for 11 nights. You agree to stay for all of them.",
    size: "2x1",
    accent: true,
  },
  {
    title: "2. The five precepts",
    description:
      "Abstaining from killing, stealing, sexual activity, lying, and intoxicants for the duration. Old students take three more on top.",
  },
  {
    title: "3. Technique exclusivity",
    description:
      "Any other meditation method, healing practice, prayer, mantra, visualization, or spiritual technique is suspended for the duration. The course is set up as a fair trial of this one method in isolation.",
  },
  {
    title: "4. Noble silence",
    description:
      "Silence of body, speech, and mind from the evening of Day 0 through the morning of Day 10. No gestures, no eye contact, no written notes between students. Speaking with the assistant teacher and management remains allowed.",
  },
  {
    title: "5. Electronics surrender",
    description:
      "Phones, smartwatches, laptops, ebook readers, recording devices, all surrendered to management at registration. Returned the morning of Day 11. No exceptions for emergencies that can be reached through the center's office line.",
  },
  {
    title: "6. No exercise, no contact",
    description:
      "Exercise programs suspended. Yoga, running, strength work, stretching routines, all paused. No physical contact with anyone on site. Men and women are physically separated on different sides of the property.",
  },
  {
    title: "7. No outside objects",
    description:
      "Books, journals, paper, pens, rosaries, malas, crystals, talismans, religious tokens, and items associated with other practices stay with management. Anything brought in by accident gets held until the course ends.",
  },
  {
    title: "8. The schedule itself",
    description:
      "4:00 AM bell. 4:30 AM first session. Roughly 10 hours of sitting per day broken into segments. Lights out at 9:30 PM. The schedule is the schedule. There is no opt-out for a portion of it.",
  },
];

const fivePrecepts = [
  { text: "Abstain from killing any being" },
  { text: "Abstain from stealing" },
  { text: "Abstain from all sexual activity (for the duration of the course)" },
  { text: "Abstain from telling lies" },
  { text: "Abstain from all intoxicants" },
];

const threeMorePrecepts = [
  { text: "Abstain from eating after midday" },
  { text: "Abstain from sensual entertainment and bodily decorations" },
  { text: "Abstain from using high or luxurious beds" },
];

const faqs: FaqItem[] = [
  {
    q: "Is the 10-day course really 10 days?",
    a: "On the calendar, no. Registration and the orientation session happen on the evening of Day 0. The course is then numbered Day 1 through Day 10, with the morning of Day 10 being the moment noble silence ends. You remain on site until the morning of Day 11, which is the departure morning. So the commitment in calendar time is 12 days, 11 nights. This is documented at dhamma.org/en/about/code where the framing is 'the 10-day course actually spans 12 days when you include the arrival and departure days.'",
  },
  {
    q: "What is the 'declaration of willingness' that gets mentioned in the Code of Discipline?",
    a: "Before the course begins, students are asked to declare their willingness to comply fully with the teacher's guidance and instructions for the duration of the course, that is, to follow the discipline and to practice exactly as the teacher asks, without ignoring any part of the instructions, nor adding anything to them. It is not a notarized contract. It is a stated agreement, made out loud, in front of the assistant teacher, on the first evening. The course is structured around the assumption that you have made it.",
  },
  {
    q: "What happens if I want to leave on Day 3?",
    a: "Most people who sit a 10-day will tell you that the urge to leave between Day 2 and Day 4 is one of the strongest things they remember about the course. The standing instruction is to talk to the assistant teacher first, not to walk out. Centers do not chain anyone to the cushion, and a student is always free to leave if they genuinely choose to. The reason the commitment is framed strongly is that the course is set up so that what surfaces during Day 2 to Day 4 has nowhere to go except into the practice, and that surfacing is part of what makes the 10 days do what they do. The assistant teacher conversation exists to make leaving a conscious choice rather than a reaction. I have known people who left and people who stayed. The people who stayed almost always say the decision they remember most clearly is the conversation with the teacher, not the bell.",
  },
  {
    q: "What are the three additional precepts for old students, and why do they exist?",
    a: "An 'old student' is someone who has previously completed at least one 10-day course in this tradition. On the second course and onward, the five precepts above are joined by three more, drawn from the eight precepts traditionally observed by lay practitioners on observance days: abstaining from eating after midday, abstaining from sensual entertainment and bodily decorations, and abstaining from using high or luxurious beds. In practice that means tea and fruit at 5 PM instead of dinner, no music or grooming routines, and the bunk the center provides. The first time I took the eight precepts the 5 PM tea cutoff was the thing I noticed most. By my third course I was eating much more at lunch and the cutoff stopped being the dominant memory of the day.",
  },
  {
    q: "Why does the course bar reading, writing, and other practices?",
    a: "The reasoning given in the Code of Discipline is twofold. Reading and writing pull the mind into a different register from the one the course is asking you to work in, which slows down or interrupts what the course is built to produce. Other meditation practices, prayer techniques, mantras, and healing techniques can blur the trial of this specific method, which is partly why the course is framed as a fair, isolated test of one approach. The point is not that any of those things are wrong; it is that they are paused for the duration so that this method has a clean run. Operational questions about what to do with surfacing material should go to an authorized assistant teacher at the center, not to a website.",
  },
  {
    q: "What is the schedule, in concrete hours?",
    a: "The Code of Discipline lists the daily pattern as wake at 4:00 AM, first sit at 4:30 AM, alternating sits and breaks through the day, an evening discourse from 7:00 to 8:15 PM, a final short sit and metta period, and lights out by 9:30 PM. Total time on the cushion adds up to roughly 10 hours a day, broken into segments. Meals are at 6:30 AM and 11:00 AM, with tea at 5:00 PM. Old students sub the tea for a no-evening-food window.",
  },
  {
    q: "Can I sit the course and skip parts of it, like the evening discourse, or work hours in my room?",
    a: "No, and the reason is structural rather than punitive. The schedule, the discourses, the group sittings, and the individual sits are pieces of a single sequence the course is built to deliver as a whole. Skipping the discourse means missing the context the next morning's session is built on. Working from your room means breaking the conditions that the practice runs inside. The agreement at the start of the course is to take the whole thing as it is offered. If the schedule is the part that is making you anxious before you sign up, the honest answer is that the schedule is what the course is. Sitting the course at half intensity is not a smaller version of the same course.",
  },
  {
    q: "Is the commitment legally binding?",
    a: "No. There is no contract, no fee in most centers (the courses run on donation, and only old students are allowed to donate), and no legal mechanism that prevents anyone from leaving. The commitment is moral and practical, not legal. The practical part is that the course is hard to enter and easy to exit, but the people who get the most out of it almost always describe the moment they decided not to exit as one of the central moments of the 10 days. The Code of Discipline at dhamma.org/en/about/code is the authoritative source for all of the above.",
  },
  {
    q: "Where does this page send me for anything operational?",
    a: "To dhamma.org for the canonical Code of Discipline (https://www.dhamma.org/en/about/code), to dhamma.org/en-US/courses/search for course logistics, and to the assistant teacher at the center where you are sitting for anything about how to practice. I am a fellow practitioner sharing what is documented and what I have observed across six of my own courses. I am not a teacher and this page is not instructional.",
  },
];

const relatedPosts = [
  {
    title:
      "What a Vipassana retreat actually is: 401 sites, 103 countries, two formats",
    href: "/t/vipassana-retreat",
    excerpt:
      "The 'one' you sign up for is not really one thing. 269 dedicated centers and 132 rented venues run the same course in physically different rooms.",
    tag: "Reference",
  },
  {
    title:
      "First Vipassana course: 15 things I wish I knew",
    href: "/guide/first-course-tips",
    excerpt:
      "Practical notes for the gap between registration and the first bell. Days 2 to 4, the 5 PM tea cutoff, what to pack, and what nobody tells you.",
    tag: "Guide",
  },
  {
    title:
      "Post-course integration: the week-by-week shift after a 10-day course",
    href: "/t/post-course-integration-shift",
    excerpt:
      "What happens after the gate opens on the morning of Day 11. Week 1 sensory crash, Week 2 felt-state collapse, Week 3 reactivity gap, Week 4 the structural shift.",
    tag: "Reflection",
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "The 'ten day commitment' is actually 12 days and 8 surrenders: what you sign up for at a Vipassana course",
    description:
      "A reader's enumeration of the actual commitment surface of a 10-day Vipassana course as documented in the Code of Discipline at dhamma.org/en/about/code, with personal notes from six courses across three centers.",
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

      <header className="max-w-3xl mx-auto px-6 pt-6 pb-4">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
          The &ldquo;ten day commitment&rdquo; is actually 12 days and 8 surrenders
        </h1>
        <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
          I have sat six 10-day courses across three centers (Dhammamanda in
          NorCal, CYO in the Bay Area, North Fork in Central California). Every
          time someone asks me what they would be signing up for, I notice that
          the phrase &ldquo;ten day commitment&rdquo; hides almost all of it.
          The course is 12 calendar days on site. There are eight specific
          surrenders. There is a declaration of willingness made out loud
          before the first sit. And there is no clean exit once you have
          crossed the gate. None of this is hidden, it is just rarely
          enumerated in one place. Below is the enumeration, sourced from
          dhamma.org and from six rounds of arriving at the gate myself.
        </p>
      </header>

      <ArticleMeta
        author="Matthew Diakonov"
        authorRole="Written with AI"
        datePublished={PUBLISHED}
        readingTime="7 min read"
      />

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">
            Direct answer (verified 2026-05-18)
          </p>
          <p className="mt-3 text-zinc-800 leading-relaxed">
            The 10-day Vipassana course in the S. N. Goenka tradition asks for
            12 calendar days on site (arrival Day 0 evening, departure morning
            of Day 11, 11 nights), five precepts (eight for old students),
            technique exclusivity, surrender of all electronics, noble silence
            from Day 0 evening through the morning of Day 10, no exercise, no
            physical contact, no outside religious objects, and full
            participation in the schedule. A spoken declaration of willingness
            to comply with the teacher&apos;s guidance is made on the first
            evening. The canonical source is{" "}
            <a
              href="https://www.dhamma.org/en/about/code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-700 underline hover:text-teal-900"
            >
              dhamma.org/en/about/code
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The 10-day course is 12 calendar days
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Most blog accounts of a Vipassana course quietly skip the framing of
          the calendar. The course is numbered Day 1 through Day 10. The
          calendar reality is Day 0 evening (registration, orientation,
          surrendering devices and books, the first sit at around 8 PM)
          through the morning of Day 11 (the gate opens after breakfast). That
          is 11 nights and 12 calendar days. The phrase used by the
          tradition&apos;s own Code of Discipline is that the 10-day course
          actually spans 12 days when you include the arrival and departure
          days. Reading flights and time off work against &ldquo;10 days&rdquo;
          is the most common scheduling mistake I see people make. The
          honest number is 12.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The second piece of framing that gets lost is which morning the
          noble silence ends. Silence breaks on the morning of Day 10, not
          Day 11. The last day at the course is loud, social, and full of
          people processing 10 days of silence together. The actual departure
          is the morning after that. Day 11 morning is when phones come back,
          luggage moves to cars, and the gate opens. Plan around that.
        </p>
      </section>

      <ProofBanner
        metric="12 days"
        quote="The phrase 'the 10-day course actually spans 12 days when you include the arrival and departure days' is on dhamma.org/en/about/code, which is the canonical Code of Discipline for the S. N. Goenka tradition. I have sat six of these and the calendar has been 11 nights, 12 days, every time."
        source="dhamma.org/en/about/code, verified 2026-05-18, and author log across six 10-day courses at Dhammamanda, CYO, and North Fork."
      />

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The eight surrenders, enumerated
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          These are the specific things you agree to before the course starts,
          drawn from the Code of Discipline at dhamma.org and from the
          paperwork at registration. None of them are surprises if you have
          read the application carefully. All of them feel different in
          practice than they read on the form.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <BentoGrid cards={surrenders} />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-8">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The five precepts
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The five precepts are the same precepts traditionally undertaken by
          lay practitioners in this tradition. For the duration of the course
          they are not a vague aspiration; they are a stated condition of
          attendance. The list, verbatim from dhamma.org/en/about/code:
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <AnimatedChecklist
          title="Five precepts for new students"
          items={fivePrecepts}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <p className="text-zinc-700 leading-relaxed">
          On a second course and onward, three more land on top. These come
          from the traditional eight-precept observance and are part of why
          dinner at 5 PM tea is what an old student gets instead of an
          evening meal:
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <AnimatedChecklist
          title="Three more for old students"
          items={threeMorePrecepts}
        />
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-6">
        <p className="text-zinc-700 leading-relaxed">
          The first one of those three is the one people remember. The
          5 PM tea cutoff is brutal on a first old-student course. By my
          third course I had figured out to eat much more at lunch, which
          made the evenings into something easier than they had been. None
          of this is a recommendation. It is a description of what happened
          for me. The redirect for anything operational is the assistant
          teacher at the center where you sit.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The declaration of willingness
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          One element of the commitment that almost never shows up in
          first-person accounts of a course is the declaration of willingness.
          On the evening of Day 0, students declare their willingness to
          comply fully with the teacher&apos;s guidance and instructions for
          the duration of the course, that is, to observe the discipline and
          to practice exactly as the teacher asks, without ignoring any part
          of the instructions and without adding anything to them. The exact
          phrasing is on{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>
          .
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          It is not a contract, there is no signature, no notarization, no
          fee, no legal mechanism. It is a stated agreement, said out loud,
          in front of the assistant teacher, on the first evening. The course
          is structured around the assumption that the agreement has been
          made. Almost every standing instruction during the 10 days
          (don&apos;t mix in another technique, don&apos;t skip the evening
          discourse, don&apos;t do yoga on the lawn, don&apos;t ask a fellow
          student a question through a written note) rests on that opening
          declaration. The reason the framing matters is that the agreement
          comes first, and then the practice runs inside it. The agreement is
          the container, not the content.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          What happens if you want to leave
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          Across my six courses I have known people who left and people who
          stayed. The pattern of the urge to leave is consistent enough that
          centers expect it: it tends to land hardest between Day 2 and Day 4,
          and is most often described later as something that passed if it
          was held for one more night. The standing instruction in the Code
          of Discipline is to speak with the assistant teacher first, not to
          walk out. This is not a security measure; nobody is going to stop
          you. It is structural. The course is set up so that what surfaces
          on Day 2 to Day 4 has nowhere to go except into the practice. The
          conversation with the assistant teacher exists to make a decision
          to leave a deliberate choice rather than a reaction to a hard
          stretch.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          People who left on Day 3 of their first course will sometimes
          return for a second attempt months or years later. The conversation
          with the teacher is the part they remember most clearly. The
          numbers I would not put on a page are the percentage of students
          who leave, because I have no honest source for them across centers,
          and because the centers themselves do not publish that data. What
          I can say is that across six courses I have personally watched
          three people leave on Day 3 or Day 4, and two of those three came
          back. The commitment is heavy by design. The exit is intentionally
          uncomfortable, but not blocked.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Why the framing matters before you register
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The reason the actual commitment is worth enumerating before
          registering, rather than discovering during orientation, is that
          most of the energy spent during the first two days of a first
          course is energy spent absorbing surprises. Surprises that the
          phone is gone, that the journal is gone, that the running shoes
          are not for running. Surprises that the schedule is the schedule.
          Surprises that the conversation about leaving has to go through
          the assistant teacher. The energy is finite and it is being asked
          to do other things on Day 2.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          The friends I have known who walked into their first course having
          actually read the Code of Discipline at{" "}
          <a
            href="https://www.dhamma.org/en/about/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org/en/about/code
          </a>{" "}
          and the daily schedule at{" "}
          <a
            href="https://www.dhamma.org/en-US/courses/search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline hover:text-teal-900"
          >
            dhamma.org course search
          </a>{" "}
          before they arrived describe the first two days as hard but not
          disorienting. The friends who skimmed both and assumed the course
          would resemble a yoga retreat or a wellness week describe the same
          two days as confusing and almost-leaving. The course is the same.
          The framing going in is what differs. Reading the literal
          commitment surface before signing up costs an hour. It saves Day 2.
        </p>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          More on what to do once the commitment is over and you are walking
          out the gate at dawn on Day 11 lives at{" "}
          <Link
            href="/t/post-course-integration-shift"
            className="text-teal-700 underline hover:text-teal-900"
          >
            the post-course integration page
          </Link>
          . Notes on practical preparation are at{" "}
          <Link
            href="/guide/first-course-tips"
            className="text-teal-700 underline hover:text-teal-900"
          >
            first course tips
          </Link>{" "}
          and{" "}
          <Link
            href="/prepare/packing-list"
            className="text-teal-700 underline hover:text-teal-900"
          >
            packing list
          </Link>
          .
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 pt-12">
        <h2 className="text-2xl font-semibold text-zinc-900">
          The honest caveats
        </h2>
        <p className="mt-4 text-zinc-700 leading-relaxed">
          I am a fellow practitioner, not a teacher. The enumeration above is
          drawn from the public Code of Discipline at dhamma.org and from
          what has been true at the six courses I have sat. The single
          authoritative source for anything operational about the course
          itself is the assistant teacher at the center where you register,
          and the canonical written document is the Code of Discipline. If
          this page has changed your mind about whether the 10 days fit your
          life at the moment, that is a decision worth taking seriously, not
          a failure of nerve. The course is not going anywhere. There are
          269 dedicated centers and 132 rented sites across 103 countries
          running it on rotation year-round, and the next course is rarely
          more than a few months away.
        </p>
      </section>

      <FaqSection items={faqs} />

      <section className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Talk through the commitment before you register"
          description="A short peer-to-peer call to talk through what the commitment actually contains and how the 12 days tend to land. Free, no teacher framing, no signup pressure."
        />
      </section>

      <RelatedPostsGrid
        title="Related reading"
        subtitle="Other notes on what a 10-day Vipassana course actually is and what surrounds it."
        posts={relatedPosts}
      />

      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Sanity-check the 12 days before you register."
      />
    </article>
  );
}
