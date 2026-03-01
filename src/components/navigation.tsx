"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { useState } from "react";

type NavLink = {
  href: string;
  label: string;
  bold?: boolean;
  children?: { href: string; label: string }[];
};

const links: NavLink[] = [
  { href: "/guide", label: "Guide to dhamma.org" },
  {
    href: "/faq",
    label: "FAQ",
    children: [
      { href: "/faq/is-vipassana-safe", label: "Is Vipassana Safe?" },
      { href: "/faq/why-is-vipassana-free", label: "Why Is It Free?" },
      { href: "/faq/can-i-leave-early", label: "Can I Leave Early?" },
      { href: "/faq/is-vipassana-a-cult", label: "Is It a Cult?" },
      { href: "/faq/vipassana-vs-therapy", label: "Vipassana vs Therapy" },
    ],
  },
  { href: "/prepare", label: "Preparation" },
  { href: "/resources", label: "Resources" },
  {
    href: "/experience",
    label: "Personal Experience",
    bold: true,
    children: [
      { href: "/experience/day-1", label: "Day 1" },
      { href: "/experience/day-2", label: "Day 2" },
      { href: "/experience/day-3", label: "Day 3" },
      { href: "/experience/day-4", label: "Day 4" },
      { href: "/experience/day-5", label: "Day 5" },
      { href: "/experience/day-6", label: "Day 6" },
      { href: "/experience/day-7", label: "Day 7" },
      { href: "/experience/day-8", label: "Day 8" },
      { href: "/experience/day-9", label: "Day 9" },
      { href: "/experience/day-10", label: "Day 10" },
    ],
  },
];

function DesktopDropdown({ link }: { link: NavLink }) {
  return (
    <div className="group relative">
      <Link
        href={link.href}
        onClick={() => posthog.capture("nav_click", { label: link.label, href: link.href })}
        className={`text-sm transition-colors hover:text-foreground ${link.bold ? "font-bold text-foreground" : "text-muted"}`}
        onMouseEnter={() => posthog.capture("nav_dropdown_open", { section: link.label })}
      >
        {link.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="ml-1 inline-block"
        >
          <path d="M2.5 4 5 6.5 7.5 4" />
        </svg>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 -translate-x-1/2">
        <div className="min-w-[180px] rounded-lg border border-border bg-background/95 py-2 shadow-lg backdrop-blur-sm">
          {link.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => posthog.capture("nav_click", { label: child.label, href: child.href })}
              className="block px-4 py-1.5 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const toggleMobileSubmenu = (href: string) => {
    setExpandedMobile(expandedMobile === href ? null : href);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => posthog.capture("nav_click", { label: "vipassana.cool", href: "/" })} className="text-lg font-semibold tracking-tight text-accent">
          vipassana.cool
        </Link>

        {/* Desktop */}
        <div className="hidden gap-6 md:flex">
          {links.map((link) =>
            link.children ? (
              <DesktopDropdown key={link.href} link={link} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => posthog.capture("nav_click", { label: link.label, href: link.href })}
                className={`text-sm transition-colors hover:text-foreground ${link.bold ? "font-bold text-foreground" : "text-muted"}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-muted md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <div key={link.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={link.href}
                  onClick={() => { posthog.capture("nav_click", { label: link.label, href: link.href }); setOpen(false); }}
                  className={`block py-2 text-sm transition-colors hover:text-foreground ${link.bold ? "font-bold text-foreground" : "text-muted"}`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <button
                    onClick={() => { posthog.capture("nav_dropdown_open", { section: link.label }); toggleMobileSubmenu(link.href); }}
                    className="p-2 text-muted"
                    aria-label={`Expand ${link.label} submenu`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={`transition-transform ${expandedMobile === link.href ? "rotate-180" : ""}`}
                    >
                      <path d="M3.5 5.5 7 9 10.5 5.5" />
                    </svg>
                  </button>
                )}
              </div>
              {link.children && expandedMobile === link.href && (
                <div className="mb-2 ml-4 border-l border-border pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => { posthog.capture("nav_click", { label: child.label, href: child.href }); setOpen(false); }}
                      className="block py-1.5 text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
