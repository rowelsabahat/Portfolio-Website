import { site } from "../../data/site";
import { HeroArt } from "./hero-art";

export function Hero() {
  const { nameLines, focus, introduction } = site.hero;

  return (
    <section className="portfolio-hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <ellipse cx="12" cy="12" rx="4.5" ry="10" />
              <path d="M2.5 9h19m-19 6h19" />
            </svg>
            Portfolio <span aria-hidden="true">/</span> 01
          </p>
          <h1 id="hero-title" className="hero-title">
            {nameLines.map((line) => <span key={line}>{line} </span>)}
          </h1>
          <p className="hero-focus">{focus}</p>
          <p className="hero-intro">{introduction}</p>
        </div>
        <HeroArt />
      </div>
    </section>
  );
}
