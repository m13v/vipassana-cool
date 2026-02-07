import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Prepare for a Vipassana Course",
  description:
    "Practical preparation guide for your first Vipassana retreat: what to pack, physical preparation, mental readiness, and tips from an experienced practitioner.",
};

export default function PreparePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-4 text-sm font-medium tracking-widest uppercase text-accent">
        Preparation
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        How to Prepare for Your Course
      </h1>
      <p className="mb-12 text-lg text-muted">
        You don&apos;t need much to prepare — but a little preparation goes a long way
        in making the experience smoother.
      </p>

      <div className="space-y-12">
        {/* Packing list */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">What to Pack</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <PackingCategory
              title="Clothing"
              items={[
                "Comfortable, loose-fitting clothes for meditation",
                "Modest clothing (shoulders and knees covered)",
                "Layers — meditation halls can be cold",
                "Warm socks (for meditating)",
                "Walking shoes for outdoor breaks",
                "Rain jacket",
                "Sleepwear",
                "Enough clothing for 5 days (some centers have laundry)",
              ]}
            />
            <PackingCategory
              title="Toiletries"
              items={[
                "Unscented soap and shampoo (fragrances distract others)",
                "Toothbrush and toothpaste",
                "Towel",
                "Sunscreen",
                "Insect repellent (for outdoor walking areas)",
                "Any prescription medications",
                "Earplugs (for sleeping — highly recommended)",
              ]}
            />
            <PackingCategory
              title="Meditation Supplies"
              items={[
                "Your own meditation cushion or bench (optional — centers provide them)",
                "A shawl or light blanket for meditation",
                "Alarm clock (not your phone — phones are stored away)",
              ]}
            />
            <PackingCategory
              title="Don't Bring"
              items={[
                "Books, journals, or writing materials",
                "Electronics beyond a basic phone (which will be stored)",
                "Jewelry or valuables",
                "Revealing or tight clothing",
                "Scented products",
                "Snacks or food",
              ]}
            />
          </div>
        </section>

        {/* Physical Preparation */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Physical Preparation</h2>
          <div className="space-y-4 text-muted">
            <p>
              You&apos;ll be sitting for many hours each day. While you don&apos;t need to
              be an athlete, a little preparation helps:
            </p>
            <div className="space-y-6">
              <PrepTip title="Practice sitting on the floor">
                Start sitting cross-legged for 15–30 minutes at a time, a few weeks before
                the course. This will help your body adjust. If you can&apos;t sit on the
                floor, don&apos;t worry — chairs are available.
              </PrepTip>
              <PrepTip title="Stretch your hips and back">
                Hip openers and gentle back stretches will help enormously. Focus on
                pigeon pose, butterfly stretch, and gentle spinal twists.
              </PrepTip>
              <PrepTip title="Adjust to early mornings">
                Start waking up earlier a week or two before the course. Going from
                a 7 AM wake-up to a 4 AM one is jarring.
              </PrepTip>
              <PrepTip title="Reduce caffeine gradually">
                Coffee and tea are available at some centers, but not always strong
                coffee. Caffeine withdrawal headaches on Day 1 are no fun. Taper down
                before you arrive.
              </PrepTip>
              <PrepTip title="Eat lighter meals">
                The course diet is vegetarian with no dinner. Start eating lighter and
                earlier in the evenings a week before.
              </PrepTip>
            </div>
          </div>
        </section>

        {/* Mental Preparation */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Mental Preparation</h2>
          <div className="space-y-4 text-muted">
            <p>
              Honestly, no amount of mental preparation fully prepares you. But these
              mindset shifts help:
            </p>
            <div className="space-y-6">
              <PrepTip title="Commit fully before you arrive">
                Decide that you WILL stay all 10 days, no matter what. This removes
                the option of quitting from your mind and makes difficult moments
                easier to navigate.
              </PrepTip>
              <PrepTip title="Let go of expectations">
                Don&apos;t go in expecting enlightenment, dramatic visions, or a
                specific outcome. Just commit to following the instructions and doing
                the work. Results come in their own time.
              </PrepTip>
              <PrepTip title="Accept that it will be hard">
                Days 2–4 are typically the hardest. Physical pain, boredom, restlessness,
                and emotional turbulence are all normal. Knowing this in advance helps
                you push through.
              </PrepTip>
              <PrepTip title="Finish your obligations">
                Clear your work inbox, pay your bills, resolve any pending conflicts.
                Unfinished business will occupy your mind during the course. The cleaner
                your mental slate, the deeper you can go.
              </PrepTip>
              <PrepTip title="Tell people you'll be unreachable">
                Let family, friends, and your employer know you&apos;ll have zero phone
                access for 10 days. Set up an emergency contact through the center.
                This prevents worry on both sides.
              </PrepTip>
            </div>
          </div>
        </section>

        {/* Logistics */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Logistics</h2>
          <div className="space-y-4 text-muted">
            <div className="space-y-6">
              <PrepTip title="Arrival and departure">
                You typically arrive between 2–5 PM on Day 0 (the day before the
                course starts). You leave after breakfast on Day 11. Plan your travel
                accordingly — don&apos;t schedule anything demanding right after the course.
              </PrepTip>
              <PrepTip title="Transportation">
                Some centers are in remote areas. Check the center&apos;s website for
                directions. Some organize ride-sharing for students.
              </PrepTip>
              <PrepTip title="After the course">
                Plan a buffer day before returning to normal life. The transition from
                10 days of silence to regular life can be jarring. A quiet day to
                decompress is invaluable.
              </PrepTip>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
        <h2 className="mb-3 text-xl font-bold">Ready?</h2>
        <p className="mb-6 text-muted">
          Find a center and check available course dates.
        </p>
        <a
          href="https://www.dhamma.org/en/locations/directory"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Find a Center
        </a>
      </div>
    </article>
  );
}

function PackingCategory({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="mb-3 font-semibold">{title}</h3>
      <ul className="space-y-1.5 text-sm text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PrepTip({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-2 border-accent/30 pl-4">
      <h3 className="mb-1 font-semibold text-foreground">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
