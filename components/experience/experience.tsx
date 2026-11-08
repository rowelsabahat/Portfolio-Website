"use client";

import { useRef, useState } from "react";
import { experiences } from "../../data/experience";
import styles from "./experience.module.css";
import motion from "./logo-motion.module.css";

const slideCount = experiences.length;

export function Experience({ artwork }: { artwork: readonly string[] }) {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function step(direction: number) {
    setActive((index) => (index + direction + slideCount) % slideCount);
  }

  return (
    <section id="experience" tabIndex={-1} aria-labelledby="experience-title" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.label}>03 / Experience</p>
          <h2 id="experience-title">Where I&apos;ve built &amp; delivered.</h2>
        </header>
        <div
          className={styles.carousel}
          role="group"
          aria-roledescription="carousel"
          aria-label="Professional experience"
          onKeyDown={(event) => {
            if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              step(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <div className={styles.controls}>
            <p className={styles.label} aria-hidden="true">
              {String(active + 1).padStart(2, "0")} / {String(slideCount).padStart(2, "0")}
            </p>
            <div className={styles.buttons}>
              <button type="button" aria-label="Previous experience" onClick={() => step(-1)}>←</button>
              <button type="button" aria-label="Next experience" onClick={() => step(1)}>→</button>
            </div>
          </div>
          <p className="sr-only" role="status">
            Experience {active + 1} of {slideCount}: {experiences[active].employer}
          </p>
          <div
            className={styles.slides}
            onTouchStart={(event) => {
              const touch = event.touches[0];
              touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
            }}
            onTouchCancel={() => { touchStart.current = null; }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              touchStart.current = null;
              if (!start) return;
              const end = event.changedTouches[0];
              const dx = end.clientX - start.x;
              const dy = end.clientY - start.y;
              if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
            }}
          >
            {experiences.map(({ employer, role, dates, location, highlights }, index) => (
              <article
                key={employer}
                className={styles.slide}
                data-active={index === active}
                aria-hidden={index !== active}
              >
                <figure
                  className={motion.art}
                  data-playing={index === active}
                  dangerouslySetInnerHTML={{ __html: artwork[index] }}
                />
                <div className={styles.copy}>
                  <h3>{employer}</h3>
                  <p className={styles.role}>{role}</p>
                  <p className={styles.meta}>{dates}<br />{location}</p>
                  <ul className={styles.highlights}>
                    {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
