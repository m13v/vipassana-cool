"use client";

import { usePathname } from "next/navigation";
import { SitemapSidebar } from "@seo/components";
import type { PageEntry } from "@seo/components/server";

interface Props {
  pages: PageEntry[];
}

export function SitemapSidebarWrapper({ pages }: Props) {
  const pathname = usePathname();
  // Only render on /t/ guide pages so it doesn't collide with the existing
  // top Navigation on the marketing pages.
  if (!pathname?.startsWith("/t/")) return null;

  return (
    <SitemapSidebar
      pages={pages}
      brandName="Vipassana.cool"
      homeHref="/"
    />
  );
}
