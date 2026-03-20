"use client";

import { useEffect, useRef, useState } from "react";

const WEBSITE_ID = 14989;

export function PageComments({ pageId }: { pageId: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="mx-auto max-w-3xl px-6 py-12 border-t border-border"
    >
      <h2 className="mb-6 text-xl font-bold">Comments</h2>
      {visible ? (
        <LazyComments pageId={pageId} />
      ) : (
        <div className="py-8 text-center text-sm text-muted">
          Loading comments...
        </div>
      )}
    </section>
  );
}

function LazyComments({ pageId }: { pageId: string }) {
  const [Comments, setComments] =
    useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import("@hyvor/hyvor-talk-react").then((mod) => {
      setComments(() => mod.Comments);
    });
  }, []);

  if (!Comments) {
    return (
      <div className="py-8 text-center text-sm text-muted">
        Loading comments...
      </div>
    );
  }

  return <Comments website-id={WEBSITE_ID} page-id={pageId} />;
}
