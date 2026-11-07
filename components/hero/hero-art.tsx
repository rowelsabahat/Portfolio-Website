import Image from "next/image";
import { site } from "../../data/site";

export function HeroArt() {
  const { portrait } = site.hero;

  return (
    <div className="hero-art">
      <div className="hero-sunset" aria-hidden="true" />
      <svg className="hero-ridge" viewBox="0 0 660 210" aria-hidden="true">
        <path d="M0 207 60 165 94 152 156 101 180 112 221 136 264 111 311 155 342 162 385 128 421 141 487 86 514 105 539 119 574 104 620 143 660 155V210H0Z" fill="#101c1e" />
        <path d="M0 207 60 165 94 152 156 101 180 112 221 136 264 111 311 155 342 162 385 128 421 141 487 86 514 105 539 119 574 104 620 143 660 155" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="m78 165 78-64-19 29 19-7 14 12 10-23 41 24m8 6 35-31-14 25 19-7 42 26m120-13 56-56-17 26 18-4 19 11 7-14 25 14m6 4 29-19-10 15 20-5 36 29" fill="none" stroke="var(--color-cream)" strokeOpacity=".75" strokeWidth="2" />
        <path d="m53 195 63-27 40-39 38 39 38-9 42 26m-142 7 24-36 16 23 26 12m196-9 36-26 57-31 29 28 53-15 39 32m-173 9 52-33 37 31 40-18 49 20" fill="none" stroke="currentColor" strokeOpacity=".28" />
        <path d="m16 202 60-25 29-5 51-42 23 20 45 11m86 33 37-18 47-17 27 7 66-53 27 27 34-1 26-16 64 41m-212 29 42-22 45 11 36-18 35 15" fill="none" stroke="currentColor" strokeOpacity=".42" />
      </svg>
      <figure className="hero-portrait">
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(min-width: 840px) 32vw, (min-width: 600px) 55vw, 68vw"
            style={{ objectFit: "contain", objectPosition: portrait.position ?? "center bottom" }}
            preload
          />
        ) : (
          <>
            <svg className="portrait-guide" viewBox="0 0 400 410" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
              <path d="M12 410C26 354 73 324 134 301L149 259C117 229 105 185 108 140C111 74 145 31 197 28C257 24 292 75 294 139C297 187 282 228 254 259L268 302C329 324 376 355 390 410Z" fill="#132327" fillOpacity=".92" stroke="currentColor" strokeOpacity=".75" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <path d="M166 147v-14h14m43 0h14v14m0 43v14h-14m-43 0h-14v-14m29-22h13m-6-6v12" fill="none" stroke="currentColor" strokeOpacity=".6" strokeWidth="1.5" />
              <path d="M44 391c28-40 66-54 105-71m105 0c41 18 77 36 105 71" fill="none" stroke="currentColor" strokeOpacity=".24" />
            </svg>
            <figcaption>Portrait placement guide</figcaption>
          </>
        )}
      </figure>
      <svg className="hero-registration" viewBox="0 0 46 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M6 0v12M0 6h12m8 0h26M30 13h16M38 20h8" />
      </svg>
      <span className="hero-art-index" aria-hidden="true">FIG. 01</span>
    </div>
  );
}
