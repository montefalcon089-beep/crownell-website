"use client";

import { useEffect } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) el.classList.add("reveal-show");
          else el.classList.remove("reveal-show");
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return <>{children}</>;
}