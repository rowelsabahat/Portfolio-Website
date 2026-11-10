"use client";

import { useEffect, useState } from "react";

export function HeroRoles({ phrases }: { phrases: readonly string[] }) {
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function resetForReducedMotion() {
      if (motion.matches) setActiveIndex(0);
    }

    const timer = window.setInterval(() => {
      if (!paused && !motion.matches) {
        setActiveIndex((index) => (index + 1) % phrases.length);
      }
    }, 3000);

    motion.addEventListener("change", resetForReducedMotion);
    return () => {
      window.clearInterval(timer);
      motion.removeEventListener("change", resetForReducedMotion);
    };
  }, [paused, phrases.length]);

  return (
    <div className="hero-roles">
      <p className="hero-focus">
        <span className="sr-only">{phrases.join(" · ")}</span>
        {phrases.map((phrase) => (
          <span
            key={phrase}
            className="hero-role-sizer"
            aria-hidden="true"
          >
            {phrase}
          </span>
        ))}
        <span key={activeIndex} className="hero-role" aria-hidden="true">
          {phrases[activeIndex]}
        </span>
      </p>
      <button
        type="button"
        className="hero-role-toggle"
        aria-label={paused ? "Resume rotating subtitle" : "Pause rotating subtitle"}
        onClick={() => setPaused(!paused)}
      >
        <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
      </button>
    </div>
  );
}
