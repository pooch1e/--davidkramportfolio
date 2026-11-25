/**
 * Reveal — clip-path wipe for images entering the viewport. Server output
 * stays fully visible; on mount, only elements still below the fold are
 * hidden and then revealed once by an IntersectionObserver.
 */
"use client";

import { useEffect, useRef } from "react";

export function Reveal({ className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.dataset.state = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // A frame between hidden and shown guarantees the browser commits the start state.
        requestAnimationFrame(() => {
          el.dataset.state = "shown";
        });
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
