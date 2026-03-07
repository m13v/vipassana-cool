"use client";

import { useEffect, useState, createContext, useContext } from "react";
import type { PostHog } from "posthog-js";

const POSTHOG_KEY = "phc_68Zsbot2eLcQQgtNZTXlHrl7SEFwW1lwbzrYxsUuo1P";
const POSTHOG_HOST = "https://us.i.posthog.com";

let posthogInstance: PostHog | null = null;

const PostHogContext = createContext<PostHog | null>(null);

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [ph, setPh] = useState<PostHog | null>(null);

  useEffect(() => {
    const ric = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1));
    const cic = window.cancelIdleCallback ?? clearTimeout;
    const id = ric(
      () => {
        import("posthog-js").then((mod) => {
          const posthogLib = mod.default;
          posthogLib.init(POSTHOG_KEY, {
            api_host: POSTHOG_HOST,
            capture_pageview: true,
            capture_pageleave: true,
          });
          posthogInstance = posthogLib;
          setPh(posthogLib);
        });
      },
      { timeout: 3000 }
    );
    return () => cic(id);
  }, []);

  return (
    <PostHogContext.Provider value={ph}>
      {children}
    </PostHogContext.Provider>
  );
}

export const posthog = {
  capture: (...args: [string, Record<string, unknown>?]) => {
    posthogInstance?.capture(args[0], args[1]);
  },
};
