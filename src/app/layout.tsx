import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PostHogProvider } from "@/components/posthog-provider";
import { NewsletterSignup, HeadingAnchors } from "@seo/components";
import { SiteSidebar } from "@/components/site-sidebar";
import { GuideChat } from "@/components/guide-chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vipassana.cool"),
  title: {
    default: "Vipassana.cool — Find a Daily Meditation Practice Buddy",
    template: "%s | Vipassana.cool",
  },
  description:
    "Get matched with a fellow Vipassana meditator for daily practice over Google Meet. Plus guides, FAQ, preparation tips, and personal experiences for your 10-day course.",
  keywords: [
    "vipassana",
    "vipassana meditation",
    "practice buddy",
    "meditation accountability",
    "dhamma.org",
    "10-day course",
    "S.N. Goenka",
    "meditation retreat",
    "meditation partner",
    "daily meditation",
    "vipassana packing list",
    "vipassana scientific evidence",
    "is vipassana a cult",
    "vipassana risks",
    "free meditation retreat",
    "vipassana daily practice",
    "vipassana for beginners",
    "vipassana benefits",
    "vipassana at home",
    "silent meditation retreat",
  ],
  openGraph: {
    title: "Vipassana.cool — Find a Daily Meditation Practice Buddy",
    description:
      "Get matched with a fellow Vipassana meditator for daily practice over Google Meet. Free, tradition-respectful accountability.",
    url: "https://vipassana.cool",
    siteName: "Vipassana.cool",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana.cool — Find a Daily Meditation Practice Buddy",
    description:
      "Get matched with a fellow Vipassana meditator for daily practice over Google Meet. Free, tradition-respectful accountability.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://vipassana.cool",
  },
};

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vipassana.cool",
    url: "https://vipassana.cool",
    description:
      "An unofficial guide to Vipassana meditation and dhamma.org. FAQ, preparation tips, personal experiences, and everything you need to know before your first 10-day course.",
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vipassana.cool",
    url: "https://vipassana.cool",
    logo: "https://vipassana.cool/favicon.ico",
    founder: {
      "@type": "Person",
      name: "Matthew Diakonov",
      url: "https://m13v.com",
      sameAs: [
        "https://m13v.com",
        "https://twitter.com/MatthewHeartful",
        "https://www.linkedin.com/in/matthew-diakonov-a84a1911/",
        "https://github.com/matthew-heartful",
        "https://t.me/matthew_ddi",
      ],
    },
    sameAs: [
      "https://twitter.com/MatthewHeartful",
      "https://www.linkedin.com/in/matthew-diakonov-a84a1911/",
      "https://github.com/matthew-heartful",
      "https://t.me/matthew_ddi",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <PostHogProvider>
          <Navigation />
          <HeadingAnchors />
          <SiteSidebar />
          <main className="min-h-screen">{children}</main>
          <GuideChat />
          <Footer />
        </PostHogProvider>
        <NewsletterSignup />
      </body>
    </html>
  );
}
