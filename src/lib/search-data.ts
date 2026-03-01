// When adding a new page, add an entry here. Also update sitemap.ts and navigation.tsx.

export type Section =
  | "Guide"
  | "FAQ"
  | "Experience"
  | "Prepare"
  | "Resources"
  | "Practice Buddy";

export type SearchEntry = {
  href: string;
  title: string;
  description: string;
  section: Section;
  keywords: string[];
};

export const searchEntries: SearchEntry[] = [
  // --- Top-level pages ---
  {
    href: "/",
    title: "Home",
    description: "Vipassana meditation guide, FAQ, and personal experience",
    section: "Guide",
    keywords: ["home", "main", "landing", "vipassana.cool"],
  },
  {
    href: "/guide",
    title: "Guide",
    description: "Complete guide to Vipassana meditation retreats",
    section: "Guide",
    keywords: ["overview", "introduction", "start", "beginner"],
  },
  {
    href: "/faq",
    title: "FAQ",
    description: "Frequently asked questions about Vipassana meditation",
    section: "FAQ",
    keywords: ["questions", "answers", "help", "common"],
  },
  {
    href: "/prepare",
    title: "Preparation",
    description: "How to prepare for your Vipassana retreat",
    section: "Prepare",
    keywords: ["prepare", "ready", "before", "tips", "getting ready"],
  },
  {
    href: "/resources",
    title: "Resources",
    description: "Books, talks, and resources for Vipassana meditators",
    section: "Resources",
    keywords: ["books", "talks", "links", "reading", "materials", "tools"],
  },
  {
    href: "/experience",
    title: "Personal Experience",
    description: "Day-by-day account of a 10-day Vipassana retreat",
    section: "Experience",
    keywords: ["diary", "journal", "story", "personal", "account", "blog"],
  },
  {
    href: "/practice-buddy",
    title: "Practice Buddy",
    description: "AI-powered meditation practice companion",
    section: "Practice Buddy",
    keywords: ["ai", "chat", "buddy", "companion", "assistant", "help"],
  },

  // --- Prepare ---
  {
    href: "/prepare/packing-list",
    title: "Packing List",
    description: "What to bring to a Vipassana retreat",
    section: "Prepare",
    keywords: ["pack", "bring", "clothes", "items", "luggage", "essentials", "what to bring"],
  },

  // --- Guide pages ---
  {
    href: "/guide/course-application-tips",
    title: "Application Tips",
    description: "Tips for applying to a Vipassana course",
    section: "Guide",
    keywords: ["apply", "application", "register", "sign up", "enroll", "form"],
  },
  {
    href: "/guide/after-retreat",
    title: "After Your Retreat",
    description: "What to expect and how to transition after completing a course",
    section: "Guide",
    keywords: ["after", "post", "return", "home", "transition", "integration", "coming back"],
  },
  {
    href: "/guide/daily-practice",
    title: "Daily Practice",
    description: "Maintaining a daily Vipassana meditation practice",
    section: "Guide",
    keywords: ["daily", "routine", "habit", "practice", "sitting", "schedule", "consistency"],
  },
  {
    href: "/guide/course-progression",
    title: "Course Progression",
    description: "Types of Vipassana courses: 10-day, Satipatthana, 20-day, 30-day, and more",
    section: "Guide",
    keywords: ["courses", "progression", "levels", "advanced", "satipatthana", "20-day", "30-day", "long course"],
  },
  {
    href: "/guide/dhamma-service",
    title: "Dhamma Service",
    description: "Volunteering at a Vipassana center as a Dhamma server",
    section: "Guide",
    keywords: ["service", "volunteer", "seva", "dhamma worker", "server", "helping", "karma yoga"],
  },
  {
    href: "/guide/vipassana-vs-other-meditation",
    title: "Vipassana vs Others",
    description: "How Vipassana compares to mindfulness, Zen, TM, and other meditation techniques",
    section: "Guide",
    keywords: ["comparison", "mindfulness", "zen", "transcendental", "TM", "difference", "vs", "compare", "other techniques"],
  },
  {
    href: "/guide/scientific-evidence",
    title: "Scientific Evidence",
    description: "Research and studies on the effects of Vipassana meditation",
    section: "Guide",
    keywords: ["science", "research", "studies", "evidence", "brain", "neuroscience", "proof", "benefits"],
  },
  {
    href: "/guide/risks-and-safety",
    title: "Risks & Safety",
    description: "Potential risks, challenges, and safety considerations for Vipassana retreats",
    section: "Guide",
    keywords: ["risk", "danger", "safe", "safety", "warning", "concern", "mental health", "adverse"],
  },
  {
    href: "/guide/first-course-tips",
    title: "First Course Tips",
    description: "Practical tips for your first 10-day Vipassana course",
    section: "Guide",
    keywords: ["first", "beginner", "tips", "advice", "new student", "first time", "newbie"],
  },
  {
    href: "/guide/anapana-and-vipassana-explained",
    title: "Anapana & Vipassana",
    description: "Understanding the two core meditation techniques taught in Goenka courses",
    section: "Guide",
    keywords: ["anapana", "technique", "breath", "breathing", "method", "body scan", "sensation"],
  },
  {
    href: "/guide/sensations-and-experiences",
    title: "Sensations Explained",
    description: "Understanding bodily sensations, pain, and experiences during meditation",
    section: "Guide",
    keywords: ["sensation", "feeling", "pain", "tingling", "vibration", "heat", "cold", "gross", "subtle", "body"],
  },
  {
    href: "/guide/how-vipassana-changes-you",
    title: "How It Changes You",
    description: "Long-term personal changes and transformation from Vipassana practice",
    section: "Guide",
    keywords: ["change", "transform", "growth", "benefit", "life", "impact", "effect", "improvement"],
  },
  {
    href: "/guide/vipassana-and-relationships",
    title: "Relationships",
    description: "How Vipassana affects your relationships with partners, family, and friends",
    section: "Guide",
    keywords: ["relationship", "partner", "family", "friends", "marriage", "love", "social", "spouse"],
  },
  {
    href: "/guide/restarting-your-practice",
    title: "Restart Your Practice",
    description: "How to get back to meditating after a break or lapse",
    section: "Guide",
    keywords: ["restart", "resume", "break", "lapsed", "quit", "stopped", "motivation", "getting back"],
  },
  {
    href: "/guide/vipassana-for-addiction",
    title: "Vipassana for Addiction",
    description: "How Vipassana meditation can help with addiction and recovery",
    section: "Guide",
    keywords: ["addiction", "recovery", "substance", "alcohol", "drugs", "smoking", "craving", "sobriety"],
  },
  {
    href: "/guide/vipassana-and-sleep",
    title: "Vipassana and Sleep",
    description: "How Vipassana affects sleep, insomnia, and rest",
    section: "Guide",
    keywords: ["sleep", "insomnia", "rest", "tired", "fatigue", "nap", "drowsy", "waking up"],
  },
  {
    href: "/guide/vipassana-for-pain",
    title: "Vipassana for Pain",
    description: "Using Vipassana meditation to work with chronic pain",
    section: "Guide",
    keywords: ["pain", "chronic", "back", "knee", "sitting", "discomfort", "injury", "physical"],
  },

  // --- FAQ pages ---
  {
    href: "/faq/is-vipassana-safe",
    title: "Is Vipassana Safe?",
    description: "Safety considerations and who should be cautious about attending",
    section: "FAQ",
    keywords: ["safe", "safety", "danger", "risk", "mental health", "psychosis", "warning"],
  },
  {
    href: "/faq/why-is-vipassana-free",
    title: "Why Is It Free?",
    description: "How Vipassana courses are funded by donations and why there is no charge",
    section: "FAQ",
    keywords: ["free", "cost", "price", "money", "donation", "dana", "pay", "fee", "expensive"],
  },
  {
    href: "/faq/can-i-leave-early",
    title: "Can I Leave Early?",
    description: "What happens if you want to leave a Vipassana course before it ends",
    section: "FAQ",
    keywords: ["leave", "quit", "early", "stop", "walk out", "go home", "drop out", "exit"],
  },
  {
    href: "/faq/is-vipassana-a-cult",
    title: "Is It a Cult?",
    description: "Addressing concerns about whether Vipassana is a cult or religion",
    section: "FAQ",
    keywords: ["cult", "religion", "sect", "brainwash", "religious", "goenka", "buddhism", "secular"],
  },
  {
    href: "/faq/vipassana-vs-therapy",
    title: "Vipassana vs Therapy",
    description: "How Vipassana meditation compares to psychotherapy and counseling",
    section: "FAQ",
    keywords: ["therapy", "therapist", "counseling", "psychotherapy", "mental health", "treatment", "psychology"],
  },
  {
    href: "/faq/vipassana-with-adhd-anxiety",
    title: "ADHD, Anxiety & Meds",
    description: "Attending Vipassana with ADHD, anxiety, depression, or while taking medication",
    section: "FAQ",
    keywords: ["adhd", "anxiety", "medication", "meds", "antidepressant", "ssri", "mental health", "disorder", "prescription"],
  },
  {
    href: "/faq/is-vipassana-right-for-me",
    title: "Right for Me?",
    description: "Help deciding if a Vipassana retreat is the right choice for you",
    section: "FAQ",
    keywords: ["right", "suitable", "fit", "should i", "ready", "appropriate", "good fit", "decision"],
  },
  {
    href: "/faq/what-to-expect",
    title: "What to Expect",
    description: "What a typical day looks like at a 10-day Vipassana course",
    section: "FAQ",
    keywords: ["expect", "schedule", "day", "timetable", "routine", "typical", "daily", "wake up"],
  },
  {
    href: "/faq/vipassana-and-depression",
    title: "Vipassana and Depression",
    description: "How Vipassana meditation relates to depression and emotional challenges",
    section: "FAQ",
    keywords: ["depression", "depressed", "sad", "emotional", "crying", "mood", "low", "dark night"],
  },
  {
    href: "/faq/can-i-do-shorter-sessions",
    title: "Shorter Sessions?",
    description: "Whether you can meditate for less than an hour and still benefit",
    section: "FAQ",
    keywords: ["short", "shorter", "less", "minutes", "time", "duration", "quick", "15 minutes", "30 minutes"],
  },

  // --- Experience day pages ---
  {
    href: "/experience/day-1",
    title: "Day 1",
    description: "First day of the retreat: arrival, orientation, and first meditation",
    section: "Experience",
    keywords: ["day 1", "first", "arrival", "beginning", "start", "orientation"],
  },
  {
    href: "/experience/day-2",
    title: "Day 2",
    description: "Second day: settling into the routine and practicing Anapana",
    section: "Experience",
    keywords: ["day 2", "second", "anapana", "routine"],
  },
  {
    href: "/experience/day-3",
    title: "Day 3",
    description: "Third day: deepening concentration and facing restlessness",
    section: "Experience",
    keywords: ["day 3", "third", "concentration", "restless"],
  },
  {
    href: "/experience/day-4",
    title: "Day 4",
    description: "Fourth day: learning Vipassana technique for the first time",
    section: "Experience",
    keywords: ["day 4", "fourth", "vipassana technique", "body scan", "first time"],
  },
  {
    href: "/experience/day-5",
    title: "Day 5",
    description: "Fifth day: halfway point and strong determination sittings",
    section: "Experience",
    keywords: ["day 5", "fifth", "halfway", "adhitthana", "strong determination"],
  },
  {
    href: "/experience/day-6",
    title: "Day 6",
    description: "Sixth day: dealing with pain and subtle sensations",
    section: "Experience",
    keywords: ["day 6", "sixth", "pain", "sensations"],
  },
  {
    href: "/experience/day-7",
    title: "Day 7",
    description: "Seventh day: equanimity practice and deeper observation",
    section: "Experience",
    keywords: ["day 7", "seventh", "equanimity", "observation"],
  },
  {
    href: "/experience/day-8",
    title: "Day 8",
    description: "Eighth day: free-flow sensations and breakthroughs",
    section: "Experience",
    keywords: ["day 8", "eighth", "free flow", "breakthrough"],
  },
  {
    href: "/experience/day-9",
    title: "Day 9",
    description: "Ninth day: final full day of intensive meditation",
    section: "Experience",
    keywords: ["day 9", "ninth", "intensive", "final"],
  },
  {
    href: "/experience/day-10",
    title: "Day 10",
    description: "Tenth day: Metta meditation, noble silence ends, and reflections",
    section: "Experience",
    keywords: ["day 10", "tenth", "metta", "noble silence", "end", "last", "talking", "reflection"],
  },
];
