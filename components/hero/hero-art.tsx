import Image from "next/image";
import { useId, type ReactNode } from "react";
import { site } from "../../data/site";

export function HeroArt({ lighting }: { lighting?: ReactNode }) {
  const { portrait } = site.hero;

  return (
    <div className="hero-art">
      {lighting ?? <HeroSunset />}
      <figure className="hero-portrait">
        <Image
          src={portrait.src}
          alt={portrait.alt}
          fill
          sizes="(min-width: 840px) 32vw, (min-width: 600px) 50vw, 55vw"
          preload
        />
      </figure>
    </div>
  );
}

function HeroSunset() {
  const id = useId();

  return (
    <svg className="hero-sunset" viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <pattern id={`${id}-pixels`} width="4" height="4" patternUnits="userSpaceOnUse">
          <path d="M0 0h2.5v1.75H0zM2 2h2v1.5H2z" fill="#111112" />
        </pattern>
        <radialGradient id={`${id}-light`} cx="62%" cy="18%" r="82%">
          <stop stopColor="#c9b994" />
          <stop offset=".46" stopColor="#8c7b5f" />
          <stop offset="1" stopColor="var(--color-charcoal)" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="198" fill={`url(#${id}-light)`} />
      <circle cx="200" cy="200" r="198" fill={`url(#${id}-pixels)`} opacity=".88" />
      <circle cx="200" cy="200" r="198" fill="none" stroke="#9b8e72" strokeWidth="2" />
    </svg>
  );
}

export function HeroRidge() {
  const id = useId();

  return (
    <svg className="hero-ridge" viewBox="0 0 660 210" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id={`${id}-lit`} width="3.2" height="2.4" patternUnits="userSpaceOnUse">
          <path d="M0 0h2v1.1H0zM1.65 1.2H3v.85H1.65z" fill="currentColor" />
        </pattern>
        <pattern id={`${id}-shadow`} width="5.1" height="4.1" patternUnits="userSpaceOnUse">
          <path d="M0 0h.7v.7H0zm3 2h.55v.55H3z" fill="currentColor" />
        </pattern>
      </defs>

      <path d="M0 207 60 165l34-13 62-51 24 11 41 24 43-25 47 44 31 7 43-34 36 13 66-55 27 19 25 14 35-15 46 39 40 12v55H0Z" fill="#161918" />
      <path d="m156 101-17 31-28 19-13 19-36 15-23 17 82-20 43-40 16-30-24-11Zm108 10-13 25-26 22-11 24 55-32 28 17-10-23Zm223-25-23 35-37 25-24 31 38-12 34-28 19-14 20-18Zm87 18-21 25-21 12-14 23 38-19 30-17 34 15Z" fill={`url(#${id}-lit)`} opacity=".57" />
      <path d="m156 101 24 11 41 24-22 28-28 18 7-27-16-19 7-15Zm108 10 47 44 31 7-27 28-38-21 14-18Zm223-25 27 19 25 14-28 36-36 28 11-29-4-22 14-16Zm87 18 46 39 40 12v43l-46-23-31-29 8-15Z" fill="#0d1112" />
      <path d="m180 112 41 24-22 28-28 18 7-27-16-19Zm307-26 27 19 25 14-28 36-36 28 11-29-4-22 14-16Zm87 18 46 39 40 12v43l-46-23-31-29 8-15Z" fill={`url(#${id}-shadow)`} opacity=".55" />
      <path d="m60 165 34-13 62-51 24 11m41 24 43-25 21 19m136 11 66-55 27 19 25 14 35-15 24 20" fill="none" stroke="currentColor" strokeOpacity=".9" strokeWidth="2" strokeLinejoin="round" />
      <path d="m77 185 36-27 29-20 14-20m264 52 32-26 23-25 12-23m61 60 27-20 17-4m-405 30 19-15 16-9m287 16 18-11 11-16" fill="none" stroke="currentColor" strokeOpacity=".34" />
      <path d="m0 210 66-23 38 5 54-29 48 21 33 7 42-16 51 24 44-12 48 9 43-31 32-8 30 26 36-9 41 12 30-18 24 3v39Z" fill="#0d1112" />
      <path d="m0 210 66-23 38 5 54-29 48 21-47-9-53 24-33-4Zm376-23 48 9 43-31 32-8 30 26-36-16-21 9-46 28Zm189-13 41 12 30-18 24 3v7l-21-3-33 19Z" fill={`url(#${id}-shadow)`} opacity=".5" />
      <path d="m104 192 54-29 48 21m218 12 43-31 32-8 30 26m77 3 30-18 24 3" fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.2" />
    </svg>
  );
}
