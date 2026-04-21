import { walkPages } from "@seo/components/server";
import { SitemapSidebarWrapper } from "./site-sidebar-client";

export function SiteSidebar() {
  const pages = walkPages({
    appDir: process.cwd() + "/src/app",
    excludePaths: ["api", "admin"],
  });

  return <SitemapSidebarWrapper pages={pages} />;
}
