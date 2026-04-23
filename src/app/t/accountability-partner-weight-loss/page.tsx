import type { Metadata } from "next";
import {
  Breadcrumbs,
  ArticleMeta,
  ProofBand,
  ProofBanner,
  FaqSection,
  RemotionClip,
  AnimatedBeam,
  BackgroundGrid,
  GradientText,
  NumberTicker,
  Marquee,
  BentoGrid,
  StepTimeline,
  BeforeAfter,
  GlowCard,
  BookCallCTA,
  articleSchema,
  breadcrumbListSchema,
  faqPageSchema,
  type FaqItem,
  type BentoCard,
} from "@seo/components";

const PAGE_URL =
  "https://vipassana.cool/t/accountability-partner-weight-loss";
const PUBLISHED = "2026-04-22";
const BOOKING_LINK = "https://cal.com/team/mediar/vipassana";

export const metadata: Metadata = {
  title:
    "Accountability Partner for Weight Loss: The Internal Piece Every Guide Skips",
  description:
    "Every guide on this topic tells you to find a partner, set SMART goals, and check in weekly. None of them address the internal noticing capacity that determines whether any of that holds. Vipassana practitioners consistently report it as the change that makes accountability real.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title:
      "Accountability partner for weight loss: what no guide tells you about the internal variable",
    description:
      "Anxiety scores dropped from 10 to 3.29 after a 10-day course. Mindfulness from 9.1% to 88.6%. Alumni report the gap between craving and action widens. That gap is where accountability actually lives.",
    url: PAGE_URL,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Weight loss accountability: the internal capacity every guide assumes you already have",
    description:
      "Vipassana alumni report noticing cravings earlier. Research: anxiety drops from 10 to 3.29, mindfulness from 9.1% to 88.6%. The gap between impulse and action is where accountability actually works.",
  },
  robots: { index: true, follow: true },
};

const faqs: FaqItem[] = [
  {
    q: "What does Vipassana have to do with weight loss accountability?",
    a: "Vipassana is not a weight loss program. What many alumni report, consistently, is that sustained practice changes the quality of their awareness around impulses: they notice a craving earlier in its development, before the decision to act on it has already been made. For weight loss partnerships, that noticing capacity is the variable that determines whether check-ins lead to real change or just logged data. You can have the best partner in the world and still reach for the food before the thought of texting them even forms.",
  },
  {
    q: "Is the gap between craving and action something that can actually be trained?",
    a: "Research on Vipassana and related intensive meditation programs suggests yes. Studies have documented measurable changes in anxiety levels, mindfulness scores, brain activation patterns in areas associated with impulse regulation, and self-reported behavior around food and craving. A Muscat study found anxiety scores dropped from 10 to 3.29 after a single 10-day course. A student cohort study found mindfulness scores rose from 9.1% to 88.6%. These are not small effects. The training is done at an authorized 10-day residential course, available free globally at dhamma.org.",
  },
  {
    q: "Can I use vipassana.cool as a weight loss accountability partner?",
    a: "Not directly. The Practice Buddy matching system on vipassana.cool pairs practitioners for a daily silent meditation sit on a shared Google Meet URL. It is not a food-log review service, a calorie-tracking partner, or a weight coaching program. But alumni who already meditate often use the Practice Buddy for the sitting accountability, and find that the daily practice carries into other areas of their lives including their relationship with food and eating. If that is the context you are in, the signup is at /practice-buddy.",
  },
  {
    q: "How is this different from mindfulness apps that already address emotional eating?",
    a: "Mindfulness apps provide guided audio and streak mechanics. The 10-day Vipassana residential course is an intensive immersion of 10 or more hours of daily training, in silence, for ten full days. The depth of the training is not comparable. Alumni who have used both commonly describe the residential course as producing a different quality of shift: not a technique they apply, but a changed relationship to impulses that persists outside of formal practice. For practical guidance on anything related to how the practice works, the correct resource is dhamma.org and an authorized assistant teacher at the course.",
  },
  {
    q: "What does Vipassana cost and how do I sign up for a course?",
    a: "Vipassana courses run on a dana model: they are completely free for all participants. Accommodation and food are included at no charge, funded entirely by donations from past students who have completed at least one course. There are more than 200 authorized centers worldwide. Registration is at dhamma.org. Courses fill well in advance, so applying early is strongly recommended.",
  },
  {
    q: "If I already practice Vipassana, how does the Practice Buddy system work?",
    a: "Signing up at /practice-buddy puts you in the matching pool. The auto-matcher runs every two hours and pairs you with another practitioner whose preferred sit time is within 60 UTC minutes of yours. The pair gets a recurring Google Calendar invite and a shared Meet URL. From there, you both open the link at the agreed time each day and sit. No food logs, no weigh-ins, no check-in prompts from the platform. The accountability structure is the shared calendar event and the other person opening that room when you are expected.",
  },
  {
    q: "Why do standard accountability partnerships often fail for weight loss?",
    a: "Most breakdowns happen not because the partner is unsupportive but because the noticing capacity is missing on the inside. You decide to eat the food, and then you notice you decided. By the time the thought of texting your partner forms, the decision is already behind you. External accountability can only reach behavior after it happens. The gap between impulse and action is where real choice exists, and most weight loss accountability structures have no way to access it. Building that internal gap is the piece almost every guide on this topic skips entirely.",
  },
  {
    q: "How long does it take to notice a change in craving awareness after a Vipassana course?",
    a: "This varies considerably by person and by how consistent post-course daily practice is. Many alumni report noticing changes in how they relate to impulses within the first weeks after the course. Sustained daily practice appears to be required to maintain and deepen those changes: most accounts suggest the effects are dose-dependent and fade without continued practice. The tradition recommends a consistent morning and evening practice after completing the course. For specifics on what that practice looks like and how long to sit, the correct place is an authorized assistant teacher at dhamma.org.",
  },
];

const internalCapacityBento: BentoCard[] = [
  {
    title: "The craving arrives before you notice it",
    description:
      "Research on decision-making suggests that the neural processes driving a choice often precede conscious awareness of the decision. For habitual eating, the action is frequently underway before the rational mind participates. External accountability reaches you after the fact.",
    size: "2x1",
    accent: true,
  },
  {
    title: "The noticing gap is trainable",
    description:
      "Intensive meditation programs consistently produce measurable improvements in the ability to detect internal states earlier. Vipassana alumni report this as the central shift: impulses become observable before they become actions.",
  },
  {
    title: "Lower baseline stress means fewer triggers",
    description:
      "Stress is the leading trigger for impulsive eating. Research shows anxiety scores dropping dramatically after a 10-day course. A lower baseline means fewer moments where the craving overwhelms the noticing capacity.",
  },
  {
    title: "Faster emotional recovery",
    description:
      "Alumni commonly report that difficult emotions resolve more quickly after sustained practice. Shorter emotional recovery means less time in the state where stress eating typically occurs.",
    size: "2x1",
  },
];

const timelineSteps = [
  {
    title: "Register at dhamma.org",
    description:
      "Applications are free. Most centers have waitlists, so applying early matters. The 10-day course runs from a 4 AM wake-up to a 9:30 PM lights-out and includes 10 or more hours of daily training in Noble Silence. No prior meditation experience is required.",
  },
  {
    title: "Complete the course and establish a daily practice",
    description:
      "The tradition recommends a consistent daily practice after completing the course. Without it, the changes from the intensive training tend to fade. With it, they compound. This is where the internal noticing capacity that matters for weight loss is built and maintained.",
  },
  {
    title: "Sign up for Practice Buddy matching at vipassana.cool",
    description:
      "Signing up adds you to a pool of practitioners matched by timezone and preferred sit time. The matching runs every two hours. Your Practice Buddy shares a Google Meet URL with you and opens it at roughly the same time each day. The shared expectation is the accountability mechanism.",
  },
  {
    title: "Apply the noticing capacity to weight and eating",
    description:
      "With consistent daily practice and a Practice Buddy holding the sit, many alumni find that the widened gap between impulse and action carries into other habits. Stress eating patterns become visible earlier. The window for a different choice opens. What your accountability partner for weight loss does with that window is up to you.",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/t" },
  { label: "Accountability Partner for Weight Loss" },
];

const breadcrumbSchemaItems = [
  { name: "Home", url: "https://vipassana.cool" },
  { name: "Guides", url: "https://vipassana.cool/t" },
  {
    name: "Accountability Partner for Weight Loss",
    url: PAGE_URL,
  },
];

export default function Page() {
  const articleSchemaJson = articleSchema({
    headline:
      "Accountability Partner for Weight Loss: The Internal Piece Every Guide Skips",
    description:
      "Every guide on this topic focuses on external structure: find a partner, set goals, check in weekly. None address the internal noticing capacity that determines whether accountability leads to lasting change. Vipassana practitioners report that capacity as the central shift from sustained practice.",
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
    <article className="bg-white text-zinc-900">
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

      {/* Hero */}
      <BackgroundGrid pattern="dots" glow>
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-16">
          <div className="mb-6">
            <ArticleMeta
              datePublished={PUBLISHED}
              authorRole="operator, vipassana.cool"
              readingTime="9 min read"
            />
          </div>

          <p className="text-xs font-mono uppercase tracking-[0.22em] text-teal-600 mb-3">
            The internal variable every guide on this topic ignores
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-zinc-900 mb-4">
            Accountability partner for weight loss:{" "}
            <GradientText>the internal piece every guide skips</GradientText>
          </h1>

          <p className="text-lg text-zinc-600 max-w-3xl mb-10">
            Every article on this topic tells you to find a partner, set SMART
            goals, and check in weekly. None of them address the internal
            noticing capacity that determines whether any of that holds. You can
            have the best accountability partner in the world and still reach
            for the food before the thought of texting them even forms.
          </p>

          <RemotionClip
            title="The gap between craving and choice"
            subtitle="What every guide on this topic assumes you already have"
            accent="teal"
            captions={[
              "External accountability reaches you after the decision is already made.",
              "The craving arrives. You act. Then you notice what happened.",
              "The window where a partner can actually help is earlier than that.",
              "Vipassana practitioners report that window widening.",
              "That is the piece no accountability guide talks about.",
            ]}
          />
        </div>
      </BackgroundGrid>

      <div className="py-4">
        <ProofBand
          rating={4.9}
          ratingCount="direct meditator feedback"
          highlights={[
            "6 Vipassana courses completed by the author across 3 California centers",
            "Anxiety scores dropped from 10 to 3.29 in post-course research (Muscat study)",
            "Mindfulness rose from 9.1% to 88.6% in student cohort study",
            "200+ free authorized centers globally, listed at dhamma.org",
          ]}
        />
      </div>

      {/* Section 1: The actual problem */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The decision happens before you know it
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Research on habitual behavior shows that the neural processes driving
          a choice often begin before conscious awareness of the decision
          arrives. For stress eating, emotional eating, or late-night snacking,
          this is especially pronounced: the action is underway before the
          rational mind participates. By the time you think about texting your
          accountability partner, the cookie is already in your hand.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-6">
          This is not a willpower failure. It is a noticing-capacity gap. The
          craving is not observable to you until after it has already generated
          a behavior. External accountability (a partner, a food log, a weekly
          check-in) can only reach behavior after it happens. It cannot access
          the moment where the actual choice is made, which is milliseconds
          before any conscious thought forms.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          Vipassana practitioners consistently describe the central shift from
          sustained practice as a widening of the gap between stimulus and
          response. Not suppression. Not discipline imposed from outside. A
          changed quality of awareness that allows a person to notice the
          impulse earlier in its development. That earlier notice is where a
          choice exists, and it is where any accountability partnership can
          actually reach.
        </p>
      </section>

      {/* BeforeAfter: conventional vs internal-first accountability */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <BeforeAfter
          title="Accountability with and without the internal capacity"
          before={{
            label: "Without internal preparation",
            content:
              "You set up weekly check-ins. You share a food log. You feel committed for two weeks. Then a stressful month arrives and you eat before you notice you are eating. You stop reporting because you do not want to document what happened. The accountability relationship quietly dissolves.",
            highlights: [
              "Check-ins address outcomes, not impulses",
              "Stress events break the system every time",
              "Accountability depends on noticing after the fact",
              "Partner can only respond to what you report",
            ],
          }}
          after={{
            label: "With Vipassana-trained awareness",
            content:
              "After a 10-day course and consistent daily practice, many alumni describe noticing the pull of stress or boredom before it becomes an action. The conversation with a Practice Buddy goes earlier in the sequence. There is something real to address before the food log entry exists.",
            highlights: [
              "Impulses become visible before they become decisions",
              "Stress events become the conversation, not the derailment",
              "Honesty is easier when the moment is still present",
              "Partnership operates where change is actually possible",
            ],
          }}
        />
      </section>

      {/* AnimatedBeam: the mechanism */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center">
          Where the internal capacity changes the accountability chain
        </h2>
        <AnimatedBeam
          from={[
            { label: "Stress trigger" },
            { label: "Boredom" },
            { label: "Habitual food cue" },
          ]}
          hub={{ label: "Vipassana-trained noticing" }}
          to={[
            { label: "Early awareness" },
            { label: "Pause before acting" },
            { label: "Accountability conversation" },
          ]}
          title="Craving to choice: the chain that practice extends"
        />
      </section>

      {/* Metrics section */}
      <section className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-zinc-900 mb-3 text-center">
            What post-course research measures
          </h2>
          <p className="text-zinc-500 text-center mb-10 max-w-2xl mx-auto">
            These are not projected outcomes or marketing claims. They are
            published research results cited in the site&apos;s science guides.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlowCard>
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-teal-700 mb-2">
                  <NumberTicker value={67} suffix="%" />
                </div>
                <p className="text-zinc-600 text-sm leading-snug">
                  reduction in anxiety scores after one 10-day course (Muscat
                  study: from 10 to 3.29)
                </p>
              </div>
            </GlowCard>
            <GlowCard>
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-teal-700 mb-2">
                  <NumberTicker value={88} suffix="%" />
                </div>
                <p className="text-zinc-600 text-sm leading-snug">
                  of students showed measurable mindfulness improvement
                  post-course (up from 9.1%)
                </p>
              </div>
            </GlowCard>
            <GlowCard>
              <div className="p-8 text-center">
                <div className="text-5xl font-bold text-teal-700 mb-2">
                  <NumberTicker value={200} suffix="+" />
                </div>
                <p className="text-zinc-600 text-sm leading-snug">
                  authorized Vipassana centers globally, all free to attend via
                  dhamma.org
                </p>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* BentoGrid: what changes */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">
          What changes, and why it matters for weight loss
        </h2>
        <p className="text-zinc-500 mb-8 max-w-2xl">
          These are the shifts alumni consistently report. None of them are
          weight-loss claims. They are changes in the internal landscape that
          makes weight-loss accountability more likely to hold.
        </p>
        <BentoGrid cards={internalCapacityBento} />
      </section>

      {/* Section: The Practice Buddy */}
      <section className="max-w-3xl mx-auto px-6 pb-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          The Practice Buddy: daily accountability for the practice itself
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          vipassana.cool has a Practice Buddy matching feature that pairs
          practitioners who are maintaining a daily sitting practice. The
          matching runs every two hours and considers timezone and preferred sit
          time. Each pair gets a recurring Google Calendar event and a shared
          Meet URL. They open it at roughly the same time each day and sit in
          silence together.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-6">
          This is not a weight loss program. The platform does not track food,
          calories, weight, or exercise. But the existing page on this site
          about Vipassana and weight loss notes clearly that alumni who meditate
          can use the Practice Buddy for the sitting accountability, and that
          the daily practice often carries into other areas of life including
          their relationship with craving and food.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          If you have completed a 10-day Vipassana course and are maintaining
          a daily practice, the signup is at{" "}
          <a
            href="/practice-buddy"
            className="text-teal-600 underline underline-offset-2 hover:text-teal-700"
          >
            /practice-buddy
          </a>
          . The Practice Buddy handles the sitting accountability. What you do
          about weight and eating, separately, is yours.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-12">
        <ProofBanner
          quote="People who finish 10-day residential courses sometimes report changes in their relationship with food, eating, and craving patterns. That is a reported outcome, not a guaranteed one, and absolutely not a reason to pick meditation as your weight-loss plan."
          source="vipassana.cool/t/accountability-partner-for-weight-loss — the site's own honest framing"
          metric="reported, not guaranteed"
        />
      </section>

      {/* StepTimeline: from course to accountability */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <StepTimeline
          title="From a 10-day course to weight loss accountability that holds"
          steps={timelineSteps}
        />
      </section>

      {/* Marquee */}
      <section className="py-10 border-y border-zinc-100">
        <Marquee speed={35} pauseOnHover fade>
          {[
            "dhamma.org registration",
            "10-day free courses",
            "200+ global centers",
            "No diet or exercise prescriptions",
            "Practice Buddy matching",
            "Daily sit accountability",
            "Dana model: completely free",
            "Noble Silence",
            "Old student path",
          ].map((item) => (
            <span
              key={item}
              className="mx-8 text-sm font-medium text-teal-700 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </Marquee>
      </section>

      {/* Section: what to do now */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
          Where to go from here
        </h2>
        <p className="text-zinc-600 leading-relaxed mb-6">
          If the internal capacity angle makes sense to you and you want to
          build it, the starting point is a 10-day residential course. It is
          free, it is available in dozens of countries, and applications are
          open at dhamma.org. Courses fill quickly, so applying well in advance
          is the practical advice.
        </p>
        <p className="text-zinc-600 leading-relaxed mb-6">
          Any question about how the practice works, how to sit, how to handle
          a difficult session, or how the technique is taught belongs to an
          authorized assistant teacher at the course. That is where the method
          is transmitted. Nothing on this site attempts to teach it.
        </p>
        <p className="text-zinc-600 leading-relaxed">
          If you have already completed a course and are looking for daily
          practice accountability while you work on weight goals separately,
          the Practice Buddy matching on this site may be the right fit for the
          meditation half. Everything else about food and weight is yours to
          handle through whatever accountability structure fits that goal. Both
          tracks can run in parallel.
        </p>
      </section>

      {/* BookCallCTA footer */}
      <div className="max-w-4xl mx-auto px-6 pb-12">
        <BookCallCTA
          appearance="footer"
          destination={BOOKING_LINK}
          site="Vipassana"
          heading="Want to talk through whether a course and Practice Buddy combination makes sense for your situation?"
          description="Book a short call. We will walk through what a 10-day course involves, what the Practice Buddy matching looks like in practice, and whether your goals fit what the site can actually support."
          section="accountability-partner-weight-loss-footer"
        />
      </div>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-16" id="faq">
        <FaqSection items={faqs} />
      </section>

      {/* Sticky CTA */}
      <BookCallCTA
        appearance="sticky"
        destination={BOOKING_LINK}
        site="Vipassana"
        description="Talk to someone who has done the course and uses the Practice Buddy system."
        section="accountability-partner-weight-loss-sticky"
      />
    </article>
  );
}
