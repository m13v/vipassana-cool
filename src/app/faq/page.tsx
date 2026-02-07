import type { Metadata } from "next";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Vipassana FAQ — Honest Answers to Common Questions",
  description:
    "Frequently asked questions about Vipassana meditation: noble silence, daily schedule, physical challenges, food, and what really happens during 10 days.",
};

const faqs: { q: string; a: string[] }[] = [
  {
    q: "Is Vipassana a religion?",
    a: [
      "No. Vipassana is a meditation technique, not a religion. While it was rediscovered by the Buddha, it contains no rites, rituals, or dogma. People of all faiths (and no faith) attend courses.",
      "You will hear references to Pali terms and Buddhist concepts, but the technique itself is purely about observing sensations in your body. You don't need to believe in anything — just practice and observe.",
    ],
  },
  {
    q: "Do I need meditation experience before attending?",
    a: [
      "No prior experience is needed. The 10-day course is specifically designed for beginners. The technique is taught step by step, starting from scratch on Day 1.",
      "If you do have experience with other meditation techniques, you'll be asked to set them aside for the duration of the course and focus exclusively on Vipassana as taught.",
    ],
  },
  {
    q: "What is Noble Silence?",
    a: [
      "Noble Silence means silence of body, speech, and mind. For the first 9 days, you don't talk, make gestures, write notes, or make eye contact with other students.",
      "You can speak to the teacher during designated question periods, and you can speak to the course manager for logistical needs (room issues, health concerns).",
      "On Day 10, Noble Silence is lifted and students can talk to each other. This is actually a beautiful moment — you've been meditating alongside these people for 9 days and finally get to connect.",
      "Most people find silence much easier than expected. After the first day or two, it becomes natural and even liberating.",
    ],
  },
  {
    q: "What does a typical day look like?",
    a: [
      "The schedule is the same every day: wake-up gong at 4:00 AM, meditation from 4:30 to 6:30, breakfast at 6:30, meditation from 8:00 to 11:00, lunch at 11:00, rest until 1:00 PM, meditation from 1:00 to 5:00, tea break at 5:00, meditation from 6:00 to 7:00, teacher's discourse (video) from 7:00 to 8:15, final meditation from 8:15 to 9:00, lights out at 9:30.",
      "It sounds brutal, and the first few days are genuinely hard. But by Day 4 or 5, most people settle into the rhythm. The discourse in the evening is a highlight — S.N. Goenka is surprisingly funny and relatable.",
    ],
  },
  {
    q: "Can I really sit and meditate for 10+ hours a day?",
    a: [
      "Not all meditation time is 'group sitting.' About 3 hours per day are mandatory group sittings in the meditation hall. The rest can be done in the hall or in your room.",
      "You will be sore. Your knees, back, and ankles will hurt, especially in the first few days. This is normal. You can use cushions, benches, and even chairs if needed. The center provides various sitting supports.",
      "The physical discomfort actually becomes part of the practice — you learn to observe sensations without reacting. That's literally the technique.",
    ],
  },
  {
    q: "What's the food like?",
    a: [
      "Vegetarian, usually quite good. Breakfast is typically porridge, toast, and fruit. Lunch is the main meal — rice, vegetables, salad, soup. At 5 PM, new students get fruit and tea; old students get only tea with lemon.",
      "There's no dinner. This is one of the hardest adjustments for most people. The hunger usually subsides after Day 2–3. Having a solid lunch helps.",
    ],
  },
  {
    q: "What if I want to leave early?",
    a: [
      "You make a commitment to stay all 10 days. Leaving early is strongly discouraged because the technique unfolds in stages — leaving partway means you've done the difficult part (breaking old patterns) without the beneficial part (learning the full technique).",
      "That said, you're not physically detained. If you truly need to leave for an emergency or serious medical reason, you can. But mild discomfort or restlessness is expected and passes.",
      "In my experience, Days 2–4 are the hardest. If you make it past Day 4, you'll make it. The urge to leave is itself something to observe.",
    ],
  },
  {
    q: "Is it really free? What's the catch?",
    a: [
      "It is genuinely, completely free. No fees, no hidden costs, no upselling afterward. Food, accommodation, and instruction are all covered.",
      "The model works through a chain of generosity: someone who took a course before you donated so you could attend. After your course, you can donate so someone else can attend. There is zero pressure to donate any specific amount.",
      "This donation model is actually one of the most beautiful aspects of Vipassana. It ensures the teaching stays pure and accessible.",
    ],
  },
  {
    q: "Can I take medication during the course?",
    a: [
      "Essential prescription medication: yes, absolutely. Inform the course management when you apply and when you arrive.",
      "Recreational drugs and alcohol: strictly prohibited, including for a period before the course.",
      "Sleep aids, supplements, etc.: discuss with the course manager. The general principle is to keep the mind as unaltered as possible.",
    ],
  },
  {
    q: "I have anxiety/depression. Should I attend?",
    a: [
      "This depends on severity. Vipassana involves deep introspection and can surface difficult emotions. For people with mild anxiety or depression, it can be very beneficial.",
      "For people with severe psychiatric conditions, active psychosis, or those who are currently in crisis, it may not be appropriate. The application form asks about this for good reason.",
      "Be completely honest on the application. The teachers have decades of experience and will guide you if they have concerns. This isn't gatekeeping — it's genuine care for your wellbeing.",
    ],
  },
  {
    q: "What happens after the course?",
    a: [
      "You're recommended to meditate for one hour in the morning and one hour in the evening. This is the suggested practice to maintain what you've learned.",
      "In reality, many people struggle with consistency. Even 20–30 minutes per day is better than nothing. The key is daily practice, however short.",
      "You can (and should) take more courses. Each one goes deeper. You can also serve at courses, which is a completely different and rewarding experience.",
    ],
  },
  {
    q: "Do I need to be physically fit?",
    a: [
      "No. People of all ages and physical conditions attend. Centers accommodate those who need chairs instead of floor cushions, and some centers have accessibility features.",
      "That said, you'll be sitting a lot. If you have chronic pain conditions, discuss this with the center when you apply. They're experienced with accommodating various needs.",
    ],
  },
  {
    q: "What should I tell my employer/family?",
    a: [
      "You need approximately 12 days total (travel + the course). Simply say you're attending a meditation retreat. You don't need to explain the details unless you want to.",
      "You won't have phone access during the course, so make arrangements in advance. Let people know you'll be unreachable and set up an emergency contact through the center.",
    ],
  },
];

export default function FAQPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        FAQ
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Frequently Asked Questions
      </h1>
      <p className="mb-12 text-lg text-muted">
        Honest answers from someone who has completed six 10-day Vipassana courses and
        maintained a daily practice for over 881 days.
      </p>

      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border pb-8 last:border-b-0">
            <h2 className="mb-3 text-lg font-semibold">{faq.q}</h2>
            <div className="space-y-3 text-muted">
              {faq.a.map((paragraph, j) => (
                <p key={j}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Have More Questions?</h2>
        <p className="mb-6 text-muted">
          The official dhamma.org site has additional information, or you can contact
          your nearest center directly.
        </p>
        <a
          href="https://www.dhamma.org/en/about/vipassana"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Learn More on dhamma.org
        </a>
      </div>

      <PageComments pageId="faq" />
    </article>
  );
}
