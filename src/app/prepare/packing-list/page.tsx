import type { Metadata } from "next";
import Link from "next/link";
import { PageComments } from "@/components/comments";

export const metadata: Metadata = {
  title: "Vipassana Packing List — What to Bring to a 10-Day Course",
  description:
    "The complete packing list for a Vipassana retreat: what to bring, what not to bring, and practical tips from someone who has done six courses.",
};

export default function PackingListPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/prepare"
        className="mb-4 inline-block text-sm text-muted hover:text-accent"
      >
        &larr; Back to Preparation
      </Link>
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Preparation
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Vipassana Packing List
      </h1>
      <p className="mb-12 text-lg text-muted">
        Everything you need to bring (and what to leave behind) for a 10-day Vipassana
        course. Refined over six courses.
      </p>

      <div className="space-y-10 text-muted">
        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">Clothing</h2>
          <p>
            The dress code is modest and comfortable. Shoulders and knees should be covered during meditation sessions. You&apos;re not trying to impress anyone — you&apos;re sitting for 10+ hours a day.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li><strong>Loose, comfortable pants or joggers (3-4 pairs)</strong> — you&apos;ll be sitting cross-legged. Anything tight around the hips or knees becomes torture by Day 2. Drawstring waists are better than buttons.</li>
            <li><strong>Loose t-shirts or long-sleeve shirts (4-5)</strong> — layers work best because meditation halls vary in temperature throughout the day.</li>
            <li><strong>A warm fleece or hoodie</strong> — early morning sessions at 4:30 AM can be cold, even in summer. Meditation halls are sometimes under-heated.</li>
            <li><strong>Warm socks (3-4 pairs)</strong> — essential for meditating. Cold feet are distracting. Thick wool or hiking socks work well.</li>
            <li><strong>Underwear (5+ pairs)</strong> — some centers have laundry facilities, but not all. Plan for at least 5 days between washes.</li>
            <li><strong>Sleepwear</strong> — you&apos;ll share a room with 1-3 other people. Comfortable, modest sleepwear.</li>
            <li><strong>Walking shoes</strong> — for outdoor breaks between sessions. Nothing fancy — sneakers or sandals.</li>
            <li><strong>Flip-flops or slippers</strong> — for the bathroom and shower areas.</li>
            <li><strong>Rain jacket</strong> — breaks are spent outdoors. A sudden rain shouldn&apos;t send you back inside.</li>
            <li><strong>Hat and sunglasses</strong> — for walking breaks in sunny weather.</li>
          </ul>
          <p className="mt-4">
            <strong>Pro tip:</strong> Wear your baggiest, most comfortable clothes on Day 1. You want to start the course in maximum comfort, not discover that your &quot;comfortable&quot; pants are actually restrictive when you&apos;re sitting for four hours straight.
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">Meditation Supplies</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li><strong>Meditation shawl or light blanket</strong> — drape over your shoulders during cold sessions. This is the single most useful item I bring.</li>
            <li><strong>Your own meditation cushion (optional)</strong> — centers provide cushions, but if you have a favorite zafu or bench, bring it. Familiar equipment helps.</li>
            <li><strong>A small alarm clock</strong> — not your phone (phones are stored away). You need something to wake you before the 4 AM gong if you want to wash up first. A basic battery-powered travel clock works.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">Toiletries</h2>
          <ul className="mt-2 list-disc space-y-2 pl-6">
            <li><strong>Unscented soap and shampoo</strong> — this matters. Strong fragrances distract other meditators in close quarters. Unscented or very mildly scented products only.</li>
            <li><strong>Toothbrush and toothpaste</strong></li>
            <li><strong>Deodorant (unscented)</strong></li>
            <li><strong>Towel (1-2)</strong> — some centers provide them, many don&apos;t. Check with your center.</li>
            <li><strong>Sunscreen</strong> — for outdoor walking breaks.</li>
            <li><strong>Insect repellent</strong> — centers in rural areas may have mosquitoes, especially near walking paths.</li>
            <li><strong>Lip balm</strong> — meditation halls can be dry.</li>
            <li><strong>Any prescription medications</strong> — bring enough for the full course plus a couple of buffer days. Inform the course manager about all medications.</li>
            <li><strong>Earplugs</strong> — highly recommended. Roommates snore. The 4 AM gong is loud. Earplugs can be the difference between decent sleep and misery.</li>
            <li><strong>Eye mask</strong> — if you&apos;re sensitive to light while sleeping. Some dormitories have limited blackout options.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">What NOT to Bring</h2>
          <p>
            These items will be stored away on arrival:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li><strong>Phone, laptop, tablet</strong> — all electronics except a basic alarm clock are stored. This is non-negotiable.</li>
            <li><strong>Books, journals, writing materials</strong> — no reading, no writing. The mind needs to be focused inward, not on content.</li>
            <li><strong>Musical instruments</strong> — no practicing, no playing.</li>
            <li><strong>Jewelry and valuables</strong> — keep it simple and avoid worry about loss.</li>
            <li><strong>Tight or revealing clothing</strong> — not just for modesty; tight clothes make sitting painful.</li>
            <li><strong>Strongly scented products</strong> — perfume, cologne, scented lotions. In silence, smells become very noticeable.</li>
            <li><strong>Snacks or food</strong> — the center provides all meals. Outside food isn&apos;t allowed.</li>
            <li><strong>Exercise equipment</strong> — gentle stretching is fine, but yoga mats, resistance bands, etc., are not used during the course.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-bold text-foreground">What I Wish I&apos;d Known</h2>
          <p>
            After six courses, here are the things I always bring now that I didn&apos;t on my first:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li><strong>A second pair of comfortable pants</strong> — my first course, I brought one pair of &quot;meditation pants.&quot; By Day 3, I wished I had alternatives.</li>
            <li><strong>Extra cushion support</strong> — a small travel pillow that I place under my ankle during sitting. Centers have cushions, but a purpose-fitted support makes a real difference.</li>
            <li><strong>Tea bags (herbal/caffeine-free)</strong> — some centers have limited tea selection. Having your own herbal tea for the 5 PM break is a small luxury.</li>
            <li><strong>Comfort items for sleep</strong> — earplugs plus eye mask. Non-negotiable for me now.</li>
          </ul>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready to Prepare?</h2>
        <p className="mb-6 text-muted">
          Check out the full preparation guide for physical, mental, and logistical tips.
        </p>
        <Link
          href="/prepare"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Full Preparation Guide
        </Link>
      </div>

      <PageComments pageId="prepare-packing-list" />
    </article>
  );
}
