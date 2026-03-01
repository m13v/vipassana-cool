import type { Metadata } from "next";
import { FaqDetailPage } from "@/components/faq-detail-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vipassana & Depression — What You Need to Know Before Attending",
  description:
    "Can you do Vipassana with depression? When it helps, when to wait, what happens during the course, and why it's not a replacement for professional treatment.",
};

export default function VipassanaAndDepressionPage() {
  return (
    <FaqDetailPage
      pageId="faq-vipassana-and-depression"
      title="Vipassana & Depression"
      description="Honest guidance on attending a Vipassana course when you have depression — when it helps, when to wait, and what to expect."
      schemaFaqs={[
        {
          question: "Can I do Vipassana if I have depression?",
          answer:
            "It depends on severity and current stability. People with mild-to-moderate, managed depression often benefit from Vipassana. Those with severe, unmanaged, or treatment-resistant depression should consult their mental health provider first and be honest on the application form.",
        },
        {
          question: "Does Vipassana cure depression?",
          answer:
            "No. Vipassana is not a treatment for depression and should not be used as a replacement for professional mental health care. However, many practitioners report that the technique — particularly developing equanimity toward difficult mind states — helps them relate to depressive episodes differently over time.",
        },
        {
          question: "Is Vipassana dangerous for people with depression?",
          answer:
            "It can be for those in acute crisis. The intense introspection and isolation of a 10-day course can amplify depressive symptoms. If you're currently in a depressive episode, it's better to wait until you're more stable. The course will always be available.",
        },
      ]}
      relatedLinks={[
        { href: "/faq/is-vipassana-safe", label: "Is Vipassana Safe?" },
        { href: "/faq/vipassana-with-adhd-anxiety", label: "ADHD, Anxiety & Meds" },
        { href: "/faq/vipassana-vs-therapy", label: "Vipassana vs Therapy" },
        { href: "/faq/is-vipassana-right-for-me", label: "Is It Right for Me?" },
        { href: "/guide/how-vipassana-changes-you", label: "How Vipassana Changes You" },
      ]}
    >
      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Important Caveat</h2>
        <p>
          I&apos;m a meditator, not a mental health professional. Nothing on this page is medical advice. If you have clinical depression, your psychiatrist or therapist should be part of your decision-making process. What I can offer is an honest perspective from someone who has seen many people navigate this question.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Vipassana Is Not a Cure</h2>
        <p>
          Let&apos;s get this out of the way first: Vipassana does not cure depression. It is not a treatment. If you&apos;re attending a course hoping it will fix your depression, you&apos;re setting yourself up for disappointment — and potentially making things worse.
        </p>
        <p>
          What Vipassana <em>can</em> do is change your relationship with depressive states. The technique teaches you to observe mental and physical phenomena with equanimity — without craving pleasant experiences or pushing away unpleasant ones. Over time, this can shift how you experience depression: from something that overwhelms and defines you to something you can observe, understand, and endure with less suffering.
        </p>
        <p>
          But this takes sustained practice. A single 10-day course won&apos;t do it. Daily practice over months and years, possibly supplemented by additional courses, is what creates lasting change.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">When Attending Is Generally Fine</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Mild-to-moderate depression that is currently managed</strong> — whether through medication, therapy, lifestyle, or a combination. You&apos;re functional, stable, and not in crisis.</li>
          <li><strong>History of depression that isn&apos;t currently active.</strong> Past episodes don&apos;t disqualify you. Many meditators have histories of depression and find Vipassana deeply valuable.</li>
          <li><strong>You&apos;re on antidepressants and stable.</strong> You can continue medication during the course. The application asks about medication, and the center will work with you. Do not stop medication to attend.</li>
          <li><strong>You have therapeutic support in place.</strong> Having a therapist or psychiatrist you can return to after the course provides a safety net.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">When You Should Wait</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>You&apos;re currently in a depressive episode.</strong> The 10 days of silence, isolation, and introspection can amplify what you&apos;re already feeling. This is not the time.</li>
          <li><strong>You&apos;ve recently been hospitalized</strong> for mental health reasons. Give yourself time to stabilize — at least several months — before considering a course.</li>
          <li><strong>You&apos;re experiencing suicidal ideation.</strong> Full stop. Get professional help now. Vipassana will still be available when you&apos;re in a better place.</li>
          <li><strong>You&apos;re attending as a last resort.</strong> If Vipassana feels like &quot;the only thing left to try,&quot; the pressure you&apos;re placing on the experience can be harmful. It works best as one tool among many, not as a Hail Mary.</li>
          <li><strong>You recently changed or stopped medication.</strong> Wait until you&apos;ve been stable on your current regimen for several months.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">What Happens During the Course</h2>
        <p>
          If you do attend with a history of depression, here&apos;s what to expect:
        </p>
        <p>
          <strong>Days 1-3</strong> can be emotionally intense for everyone, but especially so if you&apos;re prone to depression. The silence, the lack of distraction, and the constant focus inward can bring difficult feelings to the surface. This is partly the point — but it&apos;s not comfortable.
        </p>
        <p>
          <strong>Days 4-6</strong> introduce the body scanning technique. This shifts attention from the narrative mind (&quot;why am I sad, what&apos;s wrong with me&quot;) to direct physical observation. Many people with depression find this shift helpful — it breaks the rumination loop.
        </p>
        <p>
          <strong>Days 7-10</strong> typically bring more stability. You&apos;ve built enough concentration to observe difficult states without being overwhelmed by them. The equanimity you&apos;ve been developing starts to feel real, not theoretical.
        </p>
        <p>
          Throughout, you can speak with the assistant teacher during designated question times. They&apos;ve guided thousands of students through difficult experiences and can offer practical guidance. If things become genuinely unmanageable, the course management can help.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Post-Course Period</h2>
        <p>
          The weeks after a course can be a vulnerable time. You&apos;ve just spent 10 days in a controlled, supportive environment. Returning to normal life — with its noise, responsibilities, and relationships — can feel jarring.
        </p>
        <p>
          Some people experience a &quot;post-retreat high&quot; that fades, leading to a dip. Others feel raw and emotionally exposed for a while. These are normal responses, not signs that something went wrong.
        </p>
        <p>
          Having a therapist to debrief with after the course is valuable. Daily practice helps maintain equilibrium. Be gentle with yourself during the transition.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Long-Term Benefits for Depression</h2>
        <p>
          People who develop a consistent Vipassana practice often report these changes in how they relate to depression:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Earlier awareness.</strong> You notice the onset of a depressive episode sooner because you&apos;re more attuned to your mental and physical states.</li>
          <li><strong>Less identification.</strong> Instead of &quot;I am depressed,&quot; the experience becomes &quot;depression is present.&quot; This subtle shift creates space between you and the experience.</li>
          <li><strong>Reduced rumination.</strong> The body-scanning technique gives you something to do besides think in circles. When you notice rumination, you have a concrete alternative: observe sensations.</li>
          <li><strong>Greater tolerance for discomfort.</strong> Equanimity doesn&apos;t mean you enjoy depression. It means you can sit with it without adding layers of anxiety, guilt, and resistance on top of it.</li>
        </ul>
        <p>
          These benefits develop gradually through consistent practice. They&apos;re not dramatic or sudden. But over months and years, they can meaningfully change your relationship with depression.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Vipassana Alongside Professional Treatment</h2>
        <p>
          The ideal approach is <em>both</em>, not <em>either/or</em>. Vipassana and professional mental health care address different layers of the same problem:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Therapy</strong> helps you understand your patterns, process trauma, and develop coping strategies at a cognitive level.</li>
          <li><strong>Medication</strong> addresses neurochemical imbalances that create the biological substrate of depression.</li>
          <li><strong>Vipassana</strong> trains your capacity to observe mental states without reactivity, building equanimity at the experiential level.</li>
        </ul>
        <p>
          These are complementary, not competing approaches. A meditator on antidepressants who sees a therapist is not &quot;doing it wrong.&quot; They&apos;re addressing the problem from multiple angles — which is often the most effective strategy.
        </p>
        <p>
          Read more in our <Link href="/faq/vipassana-vs-therapy" className="text-accent underline hover:text-foreground">Vipassana vs Therapy</Link> page.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Practical Steps</h2>
        <p>
          If you have depression and want to attend a Vipassana course:
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-6">
          <li>Talk to your mental health provider. Tell them what the course involves (10 days, silence, 10+ hours of meditation daily, no phone). Get their honest assessment.</li>
          <li>Be completely honest on the application. The health questions exist to protect you. Withholding information helps no one.</li>
          <li>Make sure you&apos;re stable <em>before</em> attending. Don&apos;t go during a low point hoping the course will pull you out.</li>
          <li>Continue medication. Do not stop or reduce medication to attend. Inform the course management about what you&apos;re taking.</li>
          <li>Have a plan for after. Schedule a therapy session within the first week after returning. Tell someone close to you about the experience so they can support you.</li>
        </ol>
      </section>
    </FaqDetailPage>
  );
}
