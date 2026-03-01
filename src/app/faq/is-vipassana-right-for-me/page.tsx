import type { Metadata } from "next";
import { FaqDetailPage } from "@/components/faq-detail-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Vipassana Right for Me? — Self-Assessment Guide",
  description:
    "Not sure if you should attend a Vipassana course? A practical self-assessment covering fitness, beliefs, time commitment, mental health, and common hesitations.",
};

export default function IsVipassanaRightForMePage() {
  return (
    <FaqDetailPage
      pageId="faq-is-vipassana-right-for-me"
      title="Is Vipassana Right for Me?"
      description="A practical self-assessment to help you decide whether now is the right time for a 10-day course."
      schemaFaqs={[
        {
          question: "Is Vipassana right for me?",
          answer:
            "Vipassana is suitable for most people who can commit 10 days, follow basic instructions, and sit for extended periods. You don't need prior meditation experience, specific beliefs, or exceptional fitness. However, those with severe untreated psychiatric conditions should consult a professional first.",
        },
        {
          question: "Do I need to be Buddhist to do Vipassana?",
          answer:
            "No. Vipassana is a technique, not a religion. People of all faiths and no faith attend courses. You'll hear Pali terms and references to the Buddha's teachings, but the practice is purely experiential — observing sensations in your body.",
        },
        {
          question: "Am I too old or unfit for Vipassana?",
          answer:
            "No. People of all ages and physical conditions attend. Centers provide chairs, back supports, and cushion options. You don't need to sit cross-legged on the floor. If you can sit in a chair for an hour, you can do this.",
        },
      ]}
      relatedLinks={[
        { href: "/faq/what-to-expect", label: "What to Expect" },
        { href: "/faq/is-vipassana-safe", label: "Is Vipassana Safe?" },
        { href: "/faq/vipassana-and-depression", label: "Vipassana & Depression" },
        { href: "/prepare", label: "How to Prepare" },
        { href: "/guide/first-course-tips", label: "First Course Tips" },
      ]}
    >
      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Short Answer</h2>
        <p>
          If you&apos;re curious enough to be reading this page, you&apos;re probably ready. Most hesitations about Vipassana come from overthinking rather than genuine unsuitability. The course is designed for beginners with zero meditation experience.
        </p>
        <p>
          That said, there are real reasons some people should wait. Let&apos;s go through them honestly.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">You&apos;re Probably Ready If...</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>You can commit 10 full days.</strong> Not 8, not &quot;most of it.&quot; The technique unfolds in stages — leaving early means you&apos;ve done the hard part without getting the benefit.</li>
          <li><strong>You can follow instructions.</strong> The course asks you to practice one specific technique. If you can set aside your own preferences for 10 days and do what&apos;s asked, you&apos;ll do fine.</li>
          <li><strong>You&apos;re genuinely curious.</strong> Not pressured by a partner, not going to prove something, not looking for a quick fix. Genuine curiosity about your own mind is the best motivation.</li>
          <li><strong>You can handle discomfort.</strong> Not extreme discomfort — just the ordinary kind. Sitting still, waking early, eating simple food, being alone with your thoughts. If you can tolerate boredom and mild physical pain, you have what it takes.</li>
          <li><strong>You have no active psychiatric crisis.</strong> If you&apos;re currently stable — even if you have a history of anxiety, depression, or other conditions — you&apos;re likely fine. More on this below.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">You Should Probably Wait If...</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>You&apos;re in active mental health crisis.</strong> If you&apos;re currently experiencing severe depression, psychosis, active suicidal ideation, or untreated PTSD, Vipassana can destabilize you further. Get professional support first, then consider a course when you&apos;re more stable.</li>
          <li><strong>You recently experienced major trauma.</strong> Within the past few months of a significant loss, assault, or life upheaval, the raw intensity of Vipassana may be too much. Give yourself time to stabilize.</li>
          <li><strong>You can&apos;t actually take 10 days off.</strong> Stressing about work or family the entire time will undermine the practice. If the timing doesn&apos;t work, wait for when it does. Courses run year-round.</li>
          <li><strong>You&apos;re going to prove someone wrong.</strong> Approaching the course with defiance or a chip on your shoulder creates unnecessary resistance. Come with openness, or come later.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Common Hesitations (That Aren&apos;t Real Obstacles)</h2>

        <div className="mt-4 space-y-6">
          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">&quot;I&apos;m not spiritual or religious&quot;</h3>
            <p>
              Neither am I. Vipassana is a technique for observing your own sensations. You don&apos;t need to believe in anything. The practice is entirely experiential — you observe what&apos;s happening in your body, moment to moment. No faith required.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">&quot;I can&apos;t sit still for 10 minutes, let alone 10 hours&quot;</h3>
            <p>
              Nobody can when they start. The course teaches you gradually. Day 1, your legs hurt after 20 minutes and your mind races. By Day 7, you can sit for an hour without moving. The transformation happens <em>during</em> the course, not before it. You don&apos;t need to arrive pre-trained.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">&quot;I have ADHD / anxiety / depression&quot;</h3>
            <p>
              Many people with these conditions complete courses successfully. The key is whether you&apos;re currently stable and managing your condition. Read our <Link href="/faq/vipassana-with-adhd-anxiety" className="text-accent underline hover:text-foreground">detailed guide on ADHD, anxiety, and medication</Link> for specifics. If you take medication, you can continue it during the course.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">&quot;I&apos;m too old / not fit enough&quot;</h3>
            <p>
              People in their 70s and 80s attend courses. You don&apos;t need to sit cross-legged on the floor — chairs are available. If you can sit upright for an hour, you can do this. Centers accommodate physical limitations. Mention any concerns on your application and they&apos;ll work with you.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">&quot;10 days without my phone sounds impossible&quot;</h3>
            <p>
              It sounds impossible before you do it. Then you do it and realize the phone was the easy part. After the first day, you stop reaching for your pocket. By Day 3, you&apos;ve forgotten the phone exists. Most people cite the digital detox as one of the best parts of the experience.
            </p>
          </div>

          <div className="border-l-2 border-accent/30 pl-4">
            <h3 className="mb-1 font-semibold text-foreground">&quot;I&apos;m not sure I believe in meditation&quot;</h3>
            <p>
              Good. Goenka explicitly tells you not to believe anything blindly. The entire technique is based on direct experience: observe, verify, understand. Skeptics often make the best students because they don&apos;t fill the experience with expectations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Mental Health Question</h2>
        <p>
          This deserves special attention because it&apos;s the most important consideration. Vipassana involves deep introspection. You will sit with difficult emotions, memories, and patterns that you normally avoid. For most people, this is challenging but ultimately beneficial.
        </p>
        <p>
          For people with certain conditions, it can be destabilizing. The application form asks about your mental health history for good reason — not to gatekeep, but to protect you.
        </p>
        <p>
          <strong>Generally safe:</strong> Mild-to-moderate anxiety, managed depression, ADHD with or without medication, past therapy, general life stress.
        </p>
        <p>
          <strong>Needs careful consideration:</strong> Bipolar disorder, PTSD, history of psychosis, active eating disorders, recent hospitalization for mental health. Consult both your mental health provider and the course application team.
        </p>
        <p>
          Read our detailed pages on <Link href="/faq/is-vipassana-safe" className="text-accent underline hover:text-foreground">Vipassana safety</Link> and <Link href="/faq/vipassana-and-depression" className="text-accent underline hover:text-foreground">Vipassana and depression</Link> for more.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">What Vipassana Won&apos;t Do</h2>
        <p>
          Setting realistic expectations helps you decide if this is right for you:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>It won&apos;t fix your life in 10 days. It gives you a tool. You still have to use it.</li>
          <li>It won&apos;t replace therapy or medication. It&apos;s complementary, not a substitute.</li>
          <li>It won&apos;t make you enlightened. It&apos;s a beginning, not an endpoint.</li>
          <li>It won&apos;t be blissful the whole time. Most of it is hard, boring, or uncomfortable. The growth happens in the difficulty.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Real Question</h2>
        <p>
          Most people asking &quot;Is Vipassana right for me?&quot; already know the answer. They&apos;re looking for permission or reassurance. Here it is: if you&apos;re drawn to it, stable enough to handle 10 days of silence and introspection, and willing to follow the instructions — go.
        </p>
        <p>
          You don&apos;t need to be perfect. You don&apos;t need to be spiritual. You don&apos;t need to be a meditator. You just need to be willing to try.
        </p>
        <p>
          The worst that happens is you have 10 very uncomfortable days and learn something about yourself. The best that happens is it fundamentally shifts how you relate to your own mind. For most people, the reality lands somewhere in between — and that somewhere is worth the 10 days.
        </p>
      </section>
    </FaqDetailPage>
  );
}
