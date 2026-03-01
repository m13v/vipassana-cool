"use client";

import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { search } from "@/lib/fuzzy-search";
import { type SearchEntry, type Section, searchEntries } from "@/lib/search-data";

const SECTION_ORDER: Section[] = [
  "Guide",
  "FAQ",
  "Experience",
  "Prepare",
  "Resources",
  "Practice Buddy",
];

function groupBySection(results: SearchEntry[]) {
  const groups: { section: Section; entries: SearchEntry[] }[] = [];
  const map = new Map<Section, SearchEntry[]>();
  for (const r of results) {
    let arr = map.get(r.section);
    if (!arr) {
      arr = [];
      map.set(r.section, arr);
    }
    arr.push(r);
  }
  for (const section of SECTION_ORDER) {
    const entries = map.get(section);
    if (entries) groups.push({ section, entries });
  }
  return groups;
}

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const results = useMemo(() => search(searchEntries, query), [query]);
  const groups = useMemo(() => groupBySection(results), [results]);

  // Flat list of results for keyboard nav
  const flatResults = useMemo(() => results, [results]);

  // Track search_open
  useEffect(() => {
    if (open) {
      posthog.capture("search_open");
    }
  }, [open]);

  // Debounced search_query tracking
  useEffect(() => {
    if (!open || !query) return;
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      posthog.capture("search_query", { query, result_count: results.length });
    }, 300);
    return () => clearTimeout(debounceRef.current);
  }, [query, open, results.length]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [open]);

  // Focus input on open
  useEffect(() => {
    if (open) {
      // Reset state
      setQuery("");
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  const navigate = useCallback(
    (href: string) => {
      posthog.capture("search_result_click", { href, query });
      onClose();
      router.push(href);
    },
    [onClose, router, query],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % Math.max(flatResults.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + flatResults.length) % Math.max(flatResults.length, 1));
      } else if (e.key === "Enter" && flatResults[activeIndex]) {
        e.preventDefault();
        navigate(flatResults[activeIndex].href);
      } else if (e.key === "Escape") {
        e.preventDefault();
        posthog.capture("search_close");
        onClose();
      }
    },
    [flatResults, activeIndex, navigate, onClose],
  );

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.querySelector('[data-active="true"]');
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  // Build a global index counter to map grouped rendering → flat index
  let globalIdx = 0;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-center"
      style={{ paddingTop: "15vh", animation: "fadeIn 150ms ease-out" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          posthog.capture("search_close");
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm" style={{ animation: "fadeIn 150ms ease-out" }} />

      {/* Panel */}
      <div
        className="relative w-full max-w-lg mx-4"
        style={{ animation: "slideDown 150ms ease-out", height: "fit-content" }}
      >
        <div className="rounded-xl border border-border bg-background shadow-2xl overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-muted"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search pages..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted outline-none text-sm"
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls="search-results"
              aria-activedescendant={flatResults[activeIndex] ? `search-result-${activeIndex}` : undefined}
            />
            <kbd className="hidden sm:inline-flex items-center rounded border border-border px-1.5 py-0.5 text-[10px] text-muted font-mono">
              Esc
            </kbd>
          </div>

          {/* Results */}
          <div
            id="search-results"
            ref={listRef}
            role="listbox"
            className="max-h-[60vh] overflow-y-auto"
          >
            {query === "" && (
              <div className="px-4 py-8 text-center text-sm text-muted">
                Type to search...
              </div>
            )}

            {query !== "" && results.length === 0 && (
              <div className="px-4 py-8 text-center text-sm text-muted">
                No results for &ldquo;{query}&rdquo;
              </div>
            )}

            {groups.map((group) => (
              <div key={group.section}>
                <div className="px-4 pt-3 pb-1 text-xs font-medium uppercase tracking-wider text-accent">
                  {group.section}
                </div>
                {group.entries.map((entry) => {
                  const idx = globalIdx++;
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={entry.href}
                      id={`search-result-${idx}`}
                      role="option"
                      aria-selected={isActive}
                      data-active={isActive}
                      className={`w-full text-left px-4 py-2.5 flex flex-col gap-0.5 transition-colors cursor-pointer ${
                        isActive ? "bg-card-hover" : ""
                      }`}
                      onClick={() => navigate(entry.href)}
                      onMouseEnter={() => setActiveIndex(idx)}
                    >
                      <span className="text-sm font-medium text-foreground">{entry.title}</span>
                      <span className="text-xs text-muted line-clamp-1">{entry.description}</span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
