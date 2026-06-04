"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      className="fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-[6px] bg-slate-900/90 px-3 py-2 text-xs font-semibold text-slate-50 shadow-lg shadow-slate-900/70 hover:bg-slate-800"
    >
      <span>Top</span>
      <span className="inline-flex h-4 w-4 items-center justify-center text-[11px]">
        ↑
      </span>
    </button>
  );
}
