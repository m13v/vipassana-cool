import type { Metadata } from "next";
import { FaqDetailPage } from "@/components/faq-detail-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can I Leave a Vipassana Course Early? What Happens If You Quit",
  description:
    "What happens if you want to leave a Vipassana course early, why it's discouraged, and how to push through the hardest days. Honest advice from experience.",
};

export default function CanILeaveEarlyPage() {
  return (
    <FaqDetailPage
      pageId="faq-can-i-leave-early"
      title="Can I Leave a Vipassana Course Early?"
      description="What really happens if you want to quit, why the urge peaks on Day 3, and how to push through."
      schemaFaqs={[
        {
          question: "Can I leave a Vipassana course early?",
          answer:
            "Technically yes — you are not physically detained. However, it is strongly discouraged because the technique unfolds in stages. Leaving partway means you've done the difficult preparatory work without receiving the full technique and its benefits.",
        },
        {
          question: "What happens if I quit Vipassana?",
          answer:
            "If you decide to leave, you speak with the course manager and assistant teacher. They will ask you to reconsider but will not force you to stay. You collect your belongings and phone, and depart. You can apply to take a future course.",
        },
        {
          question: "When do most people want to leave Vipassana?",
          answer:
            "The urge to leave peaks on Days 2-4. This is when physical discomfort, mental restlessness, and emotional difficulty are highest but before the benefits of the practice become apparent. Most people who make it past Day 4 complete the course.",
        },
      ]}
      relatedLinks={[
        { href: "/experience/day-3", label: "Day 3: The Urge to Leave" },
        { href: "/experience/day-4", label: "Day 4: The Technique Changes" },
        { href: "/faq/is-vipassana-safe", label: "Is Vipassana Safe?" },
        { href: "/prepare", label: "How to Prepare" },
      ]}
    >
      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Quick Answer</h2>
        <p>
          Yes, you can leave. You&apos;re not locked in, you&apos;re not a prisoner, and no one will physically prevent you from walking out. But you&apos;re strongly encouraged to stay the full 10 days — and there are very good reasons for this.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Why Leaving Early Is Discouraged</h2>
        <p>
          The technique unfolds in a deliberate sequence. Days 1-3 are Anapana — a preparatory practice that sharpens your concentration. On <Link href="/experience/day-4" className="text-accent underline hover:text-foreground">Day 4</Link>, the actual Vipassana technique is introduced. Days 5-9 are deepening. Day 10 introduces metta (loving-kindness) and the silence breaks.
        </p>
        <p>
          Goenka uses a vivid analogy: imagine a surgeon who makes an incision, starts an operation, and then the patient decides to leave halfway through. The incision has been made — the difficult, preparatory work is done — but the healing part hasn&apos;t happened yet. You leave with an open wound.
        </p>
        <p>
          In practical terms: Days 1-3 break open habitual patterns and surface buried material. Days 4-10 give you the tools to work with what&apos;s been uncovered. Leaving in the middle means you&apos;ve stirred everything up without learning how to settle it.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">When the Urge Peaks</h2>
        <p>
          Almost everyone wants to leave at some point. The urge typically peaks on <Link href="/experience/day-3" className="text-accent underline hover:text-foreground">Days 2-3</Link>. This is when:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li>Physical pain from prolonged sitting is at its worst (your body hasn&apos;t adapted yet)</li>
          <li>Mental restlessness is intense (your mind is desperate for stimulation)</li>
          <li>The novelty of the experience has worn off</li>
          <li>The benefits haven&apos;t appeared yet</li>
          <li>You&apos;re getting no external validation or encouragement (Noble Silence)</li>
        </ul>
        <p>
          Your mind generates incredibly persuasive arguments: &quot;I&apos;ve gotten the idea, I can practice at home.&quot; &quot;This isn&apos;t for me.&quot; &quot;I have important things to do.&quot; These arguments feel completely rational. They&apos;re not — they&apos;re the mind&apos;s resistance to observation.
        </p>
        <p>
          Here&apos;s what I wish someone had told me: <strong>if you make it through Day 3, you&apos;ll make it through the course.</strong> The technique change on Day 4 brings renewed energy and purpose. The second half of the course is fundamentally different from the first.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">What Actually Happens If You Want to Leave</h2>
        <p>
          If you decide you want to go, here&apos;s the process:
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-6">
          <li>You speak with the course manager (the one person you can talk to anytime).</li>
          <li>The manager will ask you to consider staying and may connect you with the assistant teacher.</li>
          <li>The assistant teacher will listen to your concerns and offer guidance. They&apos;ve seen thousands of students go through exactly what you&apos;re experiencing.</li>
          <li>If you still want to leave after this conversation, you sign out, collect your phone and belongings, and depart.</li>
          <li>You can apply for a future course — leaving early doesn&apos;t blacklist you.</li>
        </ol>
        <p>
          No one will shame you, lecture you, or make you feel guilty. But they will genuinely try to help you stay, because they know — from their own experience — that the difficulty passes.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">When It IS Okay to Leave</h2>
        <p>
          There are legitimate reasons to leave early:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Genuine medical emergency</strong> — physical or psychological</li>
          <li><strong>Family emergency</strong> — the center has a phone for emergencies</li>
          <li><strong>Severe psychological distress</strong> — if you&apos;re experiencing symptoms that go beyond normal difficulty (e.g., dissociation, hallucinations, suicidal thoughts), speak to the teacher immediately</li>
        </ul>
        <p>
          The key distinction: wanting to leave because it&apos;s hard is different from needing to leave because something is wrong. The first is normal and expected. The second requires attention.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">How to Push Through</h2>
        <p>
          If you&apos;re in the middle of the urge to leave, here&apos;s what helped me:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Remember your commitment.</strong> Before the course started, you decided to stay 10 days. Trust that version of yourself who made the decision with a clear mind.</li>
          <li><strong>Break it into smaller chunks.</strong> Don&apos;t think about &quot;7 more days.&quot; Think about the next session. Can you sit for one more hour? Yes. Then do that.</li>
          <li><strong>Talk to the teacher.</strong> During the designated question time, tell them what you&apos;re experiencing. They&apos;ve heard it all before and can offer specific, practical guidance.</li>
          <li><strong>Observe the urge itself.</strong> The desire to leave is a sensation, a mental formation, a sankhara. Can you observe it with equanimity? This is literally the practice.</li>
          <li><strong>Tomorrow will be different.</strong> One of the few things I can promise: how you feel on Day 3 is not how you&apos;ll feel on Day 5.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">My Experience</h2>
        <p>
          During my first course, I spent most of Day 3 planning my departure. I calculated bus schedules, rehearsed my exit conversation, and convinced myself I was making a rational decision. I didn&apos;t leave. Day 4, the technique changed, and I understood why the first three days had been necessary.
        </p>
        <p>
          I&apos;m now on my sixth course. Each one has had moments where I wanted to leave. Each one has been worth staying for. The urge to quit is not a sign that something is wrong — it&apos;s a sign that the practice is challenging you at exactly the level it should.
        </p>
      </section>
    </FaqDetailPage>
  );
}
