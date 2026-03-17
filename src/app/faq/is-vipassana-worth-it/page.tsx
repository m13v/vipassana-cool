import type { Metadata } from "next";
import { FaqDetailPage } from "@/components/faq-detail-page";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is a 10-Day Vipassana Course Worth It? Honest Answer from 6 Courses",
  description:
    "Is Vipassana worth it? After six 10-day courses, here's what you actually get, what makes it not worth it, and why the time objection doesn't hold up.",
  alternates: { canonical: "https://vipassana.cool/faq/is-vipassana-worth-it" },
};

export default function IsVipassanaWorthItPage() {
  return (
    <FaqDetailPage
      pageId="faq-is-vipassana-worth-it"
      title="Is a 10-Day Vipassana Course Worth It?"
      description="After six courses and years of daily practice — an honest breakdown of what you get, what you don't, and who it's not for."
      schemaFaqs={[
        {
          question: "Is a 10-day Vipassana course worth it?",
          answer:
            "Yes, for most people who complete the full 10 days and follow the instructions. You gain a meditation technique you can use for life, direct insight into how your mind works, and reduced reactivity to stress. However, it requires genuine effort — it is not a vacation or a quick fix.",
        },
        {
          question: "Is Vipassana worth the time commitment?",
          answer:
            "The course is free, so the only cost is 10 days. The technique, if practiced daily afterward, benefits you for the rest of your life. Few investments offer that kind of return. Even people who never take vacations find the time worthwhile once they experience the results.",
        },
        {
          question: "When is Vipassana not worth it?",
          answer:
            "Vipassana may not be worth it if you leave before Day 10, don't follow the instructions, are in acute mental health crisis (seek professional help first), or never practice afterward. The course plants the seed — daily practice grows it.",
        },
      ]}
      relatedLinks={[
        { href: "/experience", label: "The 10-Day Experience" },
        { href: "/guide/first-course-tips", label: "First Course Tips" },
        { href: "/guide/risks-and-safety", label: "Risks and Safety" },
        { href: "/faq/can-i-leave-early", label: "Can I Leave Early?" },
      ]}
    >
      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Short Answer</h2>
        <p>
          Yes — but not in the way you might expect. It&apos;s not a vacation, not a spa retreat, and not a quick fix. It&apos;s the hardest thing most people voluntarily choose to do. And for most who complete it, it&apos;s also one of the most valuable.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The &quot;I Can&apos;t Take 10 Days Off&quot; Objection</h2>
        <p>
          I literally didn&apos;t take a single vacation in eight years. Not a single day. I worked seven days a week. I told myself I couldn&apos;t afford to step away — that things would fall apart without me.
        </p>
        <p>
          After my first course I said to myself, &quot;I cannot go back and live a normal life.&quot; In my first twelve months, I went to four courses. Four. The person who never took a day off was suddenly prioritizing 40 days of silent meditation per year.
        </p>
        <p>
          If someone who never took a day off in eight years can prioritize this, the time objection dissolves. The question isn&apos;t whether you have 10 days — it&apos;s whether you&apos;re willing to invest them in something that might fundamentally change how you relate to your own mind.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">What You Actually Get</h2>
        <p>
          Not enlightenment. Not permanent calm. Not a personality transplant. Here&apos;s what you actually walk away with:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>A technique you can use for the rest of your life.</strong> Not a concept, not a philosophy — a practical tool you sit down and use every day.</li>
          <li><strong>Direct experience of how your mind works.</strong> Not someone else&apos;s description of the mind. Your own observation of your own mental patterns, reactions, and habits.</li>
          <li><strong>Reduced reactivity to stress, conflict, and uncertainty.</strong> You don&apos;t become numb — you become less automatic. The gap between stimulus and response widens.</li>
          <li><strong>Better sleep, better focus, deeper relationships.</strong> These develop over months of daily practice, not overnight. The course gives you the technique; consistent practice delivers the results.</li>
          <li><strong>A reset that no vacation, retreat, or workshop can match.</strong> Ten days without your phone, without conversation, without distraction — facing nothing but your own mind. Nothing else comes close.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">What Makes It NOT Worth It</h2>
        <p>
          I want to be honest about this. Vipassana is not universally worth it. It&apos;s not worth it if:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>You leave before Day 10.</strong> You receive the actual Vipassana technique on <Link href="/experience/day-4" className="text-accent underline hover:text-foreground">Day 4</Link>, but you need the full 10 days to learn how to apply it properly. Leaving early is like walking out of surgery mid-operation — you&apos;ve done the hard part without getting the benefit. (More on this in <Link href="/faq/can-i-leave-early" className="text-accent underline hover:text-foreground">Can I Leave Early?</Link>)</li>
          <li><strong>You don&apos;t follow the instructions.</strong> Treating it as relaxation time, skipping sessions, or mixing in your own meditation techniques defeats the purpose. It&apos;s training, not a retreat.</li>
          <li><strong>You&apos;re in acute mental health crisis.</strong> This is not the right setting for someone experiencing severe depression, psychosis, or active suicidal ideation. Seek professional help first. The course can be valuable later, when you&apos;re stable. (See <Link href="/guide/risks-and-safety" className="text-accent underline hover:text-foreground">Risks and Safety</Link>.)</li>
          <li><strong>You never practice afterward.</strong> The course plants the seed. Daily practice — morning and evening, one hour each — grows it. Without continued practice, the benefits fade within weeks. The course alone is not enough.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Even the Worst Conditions Are Worth It</h2>
        <p>
          My CYO (Choose Your Own) course experience: bunk beds with 12 people in the room, snow and rain outside, an uphill walk to the meditation hall. A pretty nasty experience by any comfort standard.
        </p>
        <p>
          Still worth it.
        </p>
        <p>
          The conditions don&apos;t determine the value — your effort does. I&apos;ve sat courses in beautiful purpose-built centers and in makeshift facilities. The quality of the <Link href="/experience" className="text-accent underline hover:text-foreground">experience</Link> depends on how seriously you work, not on whether your bed is comfortable or the food is good.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Math</h2>
        <p>
          It&apos;s free. There is zero financial risk. You can&apos;t even donate until after you&apos;ve completed a course.
        </p>
        <p>
          The only cost is 10 days of your time. The technique, if practiced daily, benefits you for the rest of your life. Every morning, every evening, for decades. Few investments have that kind of return. Compare it to a $5,000 wellness retreat, a $200/hour therapist, or a $2,000 workshop — and Vipassana costs nothing except your willingness to work.
        </p>
        <p>
          If you want to prepare well, check the <Link href="/guide/first-course-tips" className="text-accent underline hover:text-foreground">first course tips</Link> to make the most of your 10 days.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Would I Do It Again?</h2>
        <p>
          I&apos;ve done it six times. I plan my year around how many courses I can attend. That should tell you everything.
        </p>
        <p>
          Each course has been difficult. Each one has surfaced things I didn&apos;t want to look at. Each one has left me more equanimous, more aware, and more capable of navigating life without being tossed around by every reaction. The value compounds — and it started with deciding that 10 days was worth the investment.
        </p>
      </section>
    </FaqDetailPage>
  );
}
