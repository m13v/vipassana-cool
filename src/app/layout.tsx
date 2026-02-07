import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vipassana.cool"),
  title: {
    default: "Vipassana.cool — Your Guide to Vipassana Meditation & dhamma.org",
    template: "%s | Vipassana.cool",
  },
  description:
    "An unofficial guide to Vipassana meditation and dhamma.org. FAQ, preparation tips, personal experiences, and everything you need to know before your first 10-day course.",
  keywords: [
    "vipassana",
    "vipassana meditation",
    "dhamma.org",
    "10-day course",
    "S.N. Goenka",
    "meditation retreat",
    "silent meditation",
    "mindfulness",
    "meditation guide",
  ],
  openGraph: {
    title: "Vipassana.cool — Your Guide to Vipassana Meditation",
    description:
      "An unofficial guide to Vipassana meditation and dhamma.org. Everything you need to know before your first 10-day course.",
    url: "https://vipassana.cool",
    siteName: "Vipassana.cool",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipassana.cool — Your Guide to Vipassana Meditation",
    description:
      "An unofficial guide to Vipassana meditation and dhamma.org. Everything you need to know before your first 10-day course.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
