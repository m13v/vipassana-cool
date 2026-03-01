import type { Metadata } from "next";
import { FaqDetailPage } from "@/components/faq-detail-page";

export const metadata: Metadata = {
  title: "Why Is Vipassana Free? The Donation Model Explained",
  description:
    "How Vipassana courses are completely free — the dana (donation) model, why there are no fees, and how the chain of generosity works.",
};

export default function WhyIsVipassanaFreePage() {
  return (
    <FaqDetailPage
      pageId="faq-why-is-vipassana-free"
      title="Why Is Vipassana Free?"
      description="Understanding the donation-based model that makes Vipassana courses completely free for all students."
      schemaFaqs={[
        {
          question: "Why is Vipassana meditation free?",
          answer:
            "Vipassana courses are free because they are funded entirely by donations from previous students. This dana (generosity) model ensures the teaching remains pure and accessible to everyone regardless of financial situation.",
        },
        {
          question: "How much should I donate after a Vipassana course?",
          answer:
            "There is no suggested or expected amount. Donate whatever you can comfortably afford, or nothing at all. The principle is that your donation helps future students attend, just as a previous student's donation helped you.",
        },
        {
          question: "Is there a catch to free Vipassana courses?",
          answer:
            "There is no catch. No upselling, no mandatory donations, no required memberships. The entire operation runs on voluntary contributions from people who found the courses valuable.",
        },
      ]}
      relatedLinks={[
        { href: "/faq/is-vipassana-a-cult", label: "Is Vipassana a Cult?" },
        { href: "/guide", label: "Guide to dhamma.org" },
        { href: "/faq/can-i-leave-early", label: "Can I Leave Early?" },
      ]}
    >
      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Genuinely, Completely Free</h2>
        <p>
          When people hear that Vipassana courses are free, the immediate reaction is skepticism. Ten days of accommodation, food, and instruction — for free? What&apos;s the catch?
        </p>
        <p>
          There is no catch. No fees, no suggested donations, no upselling, no membership requirements, no mailing list you can&apos;t unsubscribe from. You arrive, you practice, you leave. If you want to donate, you can. If you don&apos;t, that&apos;s fine too.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">The Dana Model</h2>
        <p>
          The funding model is called &quot;dana&quot; — a Pali word meaning generosity. Here&apos;s how it works:
        </p>
        <p>
          Someone who took a Vipassana course before you found it valuable. They donated money so that future students could attend. That donation funded your course. After your course, if you found it valuable, you can donate so that someone else can attend. The chain continues.
        </p>
        <p>
          This model has sustained Vipassana centers worldwide for decades. There are over 200 centers in more than 90 countries, all operating on donations from previous students. No government funding, no corporate sponsors, no grants.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Why Not Just Charge a Fee?</h2>
        <p>
          The reasoning behind the dana model isn&apos;t just practical — it&apos;s philosophical. S.N. Goenka believed that the Dhamma (the teaching) should never be commercialized. Charging fees would:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6">
          <li><strong>Create a barrier to access</strong> — people who can&apos;t afford the fee would be excluded from a practice that could benefit them most.</li>
          <li><strong>Change the relationship</strong> — paying customers have expectations. &quot;I paid $2,000 for this, so it better be good&quot; creates a consumer mindset that undermines the practice.</li>
          <li><strong>Compromise the teaching</strong> — when revenue depends on student satisfaction, there&apos;s pressure to make the experience comfortable rather than transformative. The hard parts of Vipassana are essential, not bugs to be fixed.</li>
          <li><strong>Break the chain of gratitude</strong> — when you sit knowing that a stranger paid for your seat, you experience genuine generosity. When you donate for a future stranger, you practice it. This is itself a form of meditation.</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">How Donations Work in Practice</h2>
        <p>
          At the end of a course, the teacher briefly explains the dana model. There are no envelopes passed around during a talk, no guilt, no pressure. If you want to donate, you can do so at the registration desk or online after you leave. Many people donate months or years later, when they&apos;ve had time to appreciate the impact.
        </p>
        <p>
          First-time students cannot donate before completing a course. This is deliberate — you can&apos;t pay in advance because the donation is meant to come from a place of gratitude for something you&apos;ve experienced, not as a transaction.
        </p>
        <p>
          There&apos;s no suggested amount. Some people donate the equivalent of what a retreat would cost elsewhere. Some donate a small amount. Some donate nothing. All are equally welcome to return for future courses.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Beyond Money: Service (Seva)</h2>
        <p>
          Donations aren&apos;t just financial. After completing a course, you can volunteer to serve at future courses — cooking meals, cleaning, managing logistics. This service (called &quot;seva&quot;) is what keeps centers running. Most of the day-to-day operations at a Vipassana center are handled by volunteer meditators.
        </p>
        <p>
          Serving is itself a form of practice. You&apos;re maintaining your own meditation while supporting others through their course. Many old students say their first service experience was as transformative as their first course.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">Does This Model Actually Work?</h2>
        <p>
          The numbers speak for themselves. The global Vipassana organization operates 200+ centers, runs thousands of courses per year, feeds and houses hundreds of thousands of students annually — all on voluntary donations from satisfied students.
        </p>
        <p>
          Centers own their land and buildings outright. New centers continue to open worldwide. The model doesn&apos;t just work — it thrives. This is perhaps the strongest endorsement of the technique itself: people find it valuable enough to fund its continuation voluntarily.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold text-foreground">My Personal Experience</h2>
        <p>
          The dana model is one of my favorite aspects of Vipassana. Knowing that a stranger funded my first course gave me a tangible experience of generosity before the course even started. And donating after — knowing it would fund someone else&apos;s experience — felt meaningful in a way that paying a fee never would.
        </p>
        <p>
          The absence of financial transaction also changes the dynamic. You&apos;re not a customer. You&apos;re a student. The teachers aren&apos;t service providers. They&apos;re volunteers sharing something they&apos;ve found valuable. This changes the energy of the entire experience.
        </p>
      </section>
    </FaqDetailPage>
  );
}
