"use client";

import type { ReactNode } from "react";
import { captureFromWindow } from "@m13v/seo-components";

type Props = {
  destination: string;
  targetProduct: string;
  text: string;
  section: string;
  className?: string;
  children: ReactNode;
};

export function CrossProductLink({
  destination,
  targetProduct,
  text,
  section,
  className,
  children,
}: Props) {
  return (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        captureFromWindow("cross_product_click", {
          site: "vipassana",
          target_product: targetProduct,
          destination,
          text,
          component: "CrossRoundupEntry",
          section,
          page:
            typeof window !== "undefined"
              ? window.location.pathname
              : undefined,
        });
      }}
    >
      {children}
    </a>
  );
}
