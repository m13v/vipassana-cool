import type { Metadata } from "next";
import { FaqDetailPage } from "@/components/faq-detail-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Vipassana Safe? Risks, Side Effects & Mental Health",
  description:
    "An honest look at Vipassana safety: psychological risks, who should avoid it, how to handle difficult experiences, and what the research says about meditation side effects.",
};

export default function IsVipassanaSafePage() {
  return (
    <FaqDetailPage
      pageId="faq-is-vipassana-safe"
      title="Is Vipassana Safe?"
      description="An honest, balanced look at the risks and safety of intensive Vipassana meditation — from someone who has done six courses."
      schemaFaqs={[
        {
          question: "Is Vipassana meditation dangerous?",
          answer:
            "For most people, Vipassana is safe and beneficial. However, it is an intensive practice that can surface difficult emotions. People with severe psychiatric conditions, active psychosis, or recent trauma should consult a mental health professional before attending.",
        },
        {
          question: "Can Vipassana cause psychosis or anxiety?",
          answer:
            "In rare cases, intensive meditation can trigger anxiety or psychological distress, particularly in people with pre-existing conditions. The application process screens for this, and teachers are available throughout the course for support.",
        },
        {
          question: "What are the side effects of Vipassana?",
          answer:
            "Common temporary effects include emotional release (crying, anger), physical discomfort from prolonged sitting, sleep changes, and heightened sensitivity. These typically resolve within days of completing the course.",
        },
      ]}
      relatedLinks={[
        { href: "/faq/can-i-leave-early", label: "Can I Leave Early?" },
        { href: "/faq/vipassana-vs-therapy", label: "Vipassana vs Therapy" },
        { href: "/experience/day-3", label: "Day 3: The Hardest Day" },
        { href: "/experience/day-6", label: "Day 6: Emotional Waves" },
      ]}
    >
      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Short Answer</h2>
        <p>
          For most people, Vipassana is safe and profoundly beneficial. But &quot;most people&quot; isn&apos;t &quot;everyone,&quot; and pretending otherwise would be dishonest. Vipassana is a powerful technique that accesses deep layers of the mind. Like any powerful tool, it needs to be used appropriately.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">What Makes It Intense</h2>
        <p>
          A 10-day Vipassana course involves 10+ hours of daily meditation, Noble Silence (no talking, reading, writing, or phone), a strict schedule starting at 4 AM, and no dinner. This isn&apos;t a spa retreat. It&apos;s an intensive mental training program that deliberately removes every distraction so you can observe the full spectrum of your mental activity.
        </p>
        <p>
          For most people, this intensity is what makes it effective. You can&apos;t hide from yourself when there&apos;s nothing to hide behind. But this same intensity means that unresolved psychological issues can surface with force.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Common Difficult Experiences (Normal)</h2>
        <p>
          These are things almost everyone experiences and are part of the process:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Physical pain</strong> — knees, back, shoulders from prolonged sitting. Manageable with cushion adjustments and stretching.</li>
          <li><strong>Emotional releases</strong> — crying, waves of sadness or anger that seem to come from nowhere. This is buried material surfacing. It passes.</li>
          <li><strong>The urge to leave</strong> — especially on <Link href="/experience/day-3" className="text-accent underline hover:text-foreground">Days 2-3</Link>. Nearly universal. It passes.</li>
          <li><strong>Sleep disruption</strong> — difficulty falling asleep or vivid dreams, especially in the first few days.</li>
          <li><strong>Heightened sensitivity</strong> — after the course, sounds seem louder, lights brighter, food more flavorful. This normalizes within a few days.</li>
          <li><strong>Temporary mood swings</strong> — irritability or euphoria in the days following the course. These stabilize with continued practice.</li>
        </ul>
        <p className="mt-4">
          None of these are signs that something has gone wrong. They&apos;re signs that the technique is working — you&apos;re becoming more aware of what was always there.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">When It May Not Be Appropriate</h2>
        <p>
          There are situations where a 10-day intensive course may not be the right choice:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Active psychosis or schizophrenia</strong> — the deep introspection can destabilize an already fragile mental state.</li>
          <li><strong>Recent severe trauma</strong> — if you&apos;re still in acute crisis, intensive meditation can overwhelm your coping capacity.</li>
          <li><strong>Severe untreated depression or suicidal ideation</strong> — the isolation and silence can amplify these states.</li>
          <li><strong>Bipolar disorder during a manic phase</strong> — the intensity can exacerbate mania.</li>
          <li><strong>Active substance addiction</strong> — withdrawal in an unsupported environment is dangerous.</li>
        </ul>
        <p className="mt-4">
          The application form asks about psychiatric history for exactly this reason. Be completely honest. The screening isn&apos;t gatekeeping — it&apos;s genuine care for your wellbeing. If you&apos;re unsure, consult both a mental health professional and the center before applying.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Safety Mechanisms Built Into the Course</h2>
        <p>
          Vipassana courses aren&apos;t unstructured. Several safety mechanisms are in place:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Teacher availability</strong> — you can speak with the assistant teacher during designated times about any difficulties.</li>
          <li><strong>Course manager</strong> — available for logistical and personal concerns throughout the course.</li>
          <li><strong>Application screening</strong> — the form asks about physical and mental health conditions.</li>
          <li><strong>Gradual technique introduction</strong> — three days of preparatory Anapana before the full Vipassana technique.</li>
          <li><strong>Evening discourses</strong> — Goenka&apos;s talks address common difficulties each day, normalizing the experience.</li>
          <li><strong>You can leave</strong> — while strongly discouraged, you are not detained. If you truly need to go, you can.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">My Honest Assessment</h2>
        <p>
          After six courses, my honest assessment: Vipassana is one of the most beneficial things I&apos;ve ever done, and I&apos;ve recommended it to dozens of people. But I wouldn&apos;t recommend it to someone in acute psychological crisis without professional guidance.
        </p>
        <p>
          The discomfort is real but temporary. The benefits — reduced reactivity, improved focus, better emotional regulation — are lasting. The key is going in with eyes open: it will be hard, it will surface difficult things, and that&apos;s the point.
        </p>
        <p>
          If you&apos;re mentally healthy and willing to follow the instructions for 10 days, the risk-benefit ratio is overwhelmingly positive. If you have concerns about your mental health, talk to a professional first. There&apos;s no rush — courses are available year-round, and your wellbeing comes first.
        </p>
      </section>
    </FaqDetailPage>
  );
}
