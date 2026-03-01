"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { type ComponentProps } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  event: string;
  properties?: Record<string, string | number>;
};

export function TrackedLink({
  event,
  properties,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        posthog.capture(event, { ...properties, href: props.href.toString() });
        onClick?.(e);
      }}
    />
  );
}

type TrackedCTAProps = ComponentProps<"a"> & {
  event: string;
  properties?: Record<string, string | number>;
};

export function TrackedCTA({
  event,
  properties,
  onClick,
  ...props
}: TrackedCTAProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        posthog.capture(event, { ...properties, href: props.href });
        onClick?.(e);
      }}
    />
  );
}
