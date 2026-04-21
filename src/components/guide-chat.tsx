"use client";

import { usePathname } from "next/navigation";
import { GuideChatPanel } from "@seo/components";

export function GuideChat() {
  const pathname = usePathname();
  // Only render on /t/ guide pages so the floating chat panel doesn't appear
  // on the marketing pages, the practice-buddy waitlist, etc.
  if (!pathname?.startsWith("/t/")) return null;

  return <GuideChatPanel app="vipassana" label="page assistant" />;
}
