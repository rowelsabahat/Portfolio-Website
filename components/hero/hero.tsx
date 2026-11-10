import { useId } from "react";
import type { ReactNode } from "react";
import { site } from "../../data/site";
import { HeroArt, HeroRidge } from "./hero-art";
import { HeroRoles } from "./hero-roles";

export function Hero({ lighting }: { lighting?: ReactNode } = {}) {
  const titleId = useId();
  const { nameLines, focus } = site.hero;

  return (
    <section className="portfolio-hero" aria-labelledby={titleId}>
      <HeroRidge />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 id={titleId} className="hero-title">
            {nameLines.map((line) => <span key={line}>{line} </span>)}
          </h1>
          <HeroRoles phrases={focus} />
          <a className="hero-cta" href="#education">
            Explore my portfolio below <span aria-hidden="true">↓</span>
          </a>
        </div>
        <HeroArt lighting={lighting} />
      </div>
    </section>
  );
}
