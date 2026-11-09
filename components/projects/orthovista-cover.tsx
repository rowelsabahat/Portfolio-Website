import { useId } from "react";
import type { CSSProperties } from "react";
import { ProjectCover } from "./project-cover";
import styles from "./project-cover.module.css";

function OrthoVistaArtwork() {
  const id = useId();
  const stripes = `${id}-stripes`;
  const bone = `${id}-bone`;
  const mask = `${id}-mask`;
  const field = `${id}-field`;

  return (
    <svg viewBox="0 0 1000 393" role="img" aria-label="Striped lavender illustration of a pelvis and femur">
      <defs>
        <linearGradient id={stripes}>
          <stop stopColor="var(--cover-stripe-start)" />
          <stop offset=".58" stopColor="#f138a2" />
          <stop offset="1" stopColor="var(--cover-stripe-end)" />
        </linearGradient>
        <linearGradient id={bone} x1="0" y1="0" x2="1" y2=".7" gradientUnits="objectBoundingBox">
          <stop stopColor="#c43ce8" />
          <stop offset=".38" stopColor="#fa91f6" />
          <stop offset=".7" stopColor="#e76dea" />
          <stop offset="1" stopColor="#bc31e9" />
        </linearGradient>
        <pattern id={field} width="12" height="10.4" patternUnits="userSpaceOnUse">
          <path d="M0 0h12v6.1H0z" fill="white" />
        </pattern>
        <mask id={mask} x="668" y="35" width="297" height="313" maskUnits="userSpaceOnUse">
          <path d="M668 35h297v313H668z" fill={`url(#${field})`} />
        </mask>
      </defs>
      <g fill={`url(#${stripes})`}>
        {Array.from({ length: 10 }, (_, i) => {
          const y = 49 + i * 11.25;
          const left = i === 0 ? 42 : 30;
          const right = 578 + i * 8.1;
          return <path key={i} d={`M${left} ${y}H${right}l5 7H${left}Z`} />;
        })}
      </g>
      <g fill={`url(#${bone})`}>
        <g mask={`url(#${mask})`}>
          <path fillRule="evenodd" d="M754 39h54l-32 41c-13 17-13 36 0 54-12 4-19 14-19 26-9-12-18-16-27-15-20 2-25 25-13 49 8 16 19 34 29 40 14 9 24-15 29-34 2-7 2-10-1-14 10 8 27 12 43 7-13 13-15 30-27 55-13 29-20 46-18 95h-40c-3-37-4-61-14-92-13-37-29-55-41-83-13-30-4-38 17-52 21-14 32-22 41-39 7-13 12-25 19-38Z M770 157c6-12 17-16 29-12 12 3 21 16 23 28 3 16-14 24-31 19-17-4-28-19-21-35Z" />
          <path d="M821 39h66l26 37c11 16 9 32-3 47-16-11-30-10-44 0-11 8-20 19-18 32 1 11 6 21 14 31-13-2-23-9-29-21l-14-22c-9-17-2-38 15-49 24-16 52-11 68 10-12-23-46-32-74-14-13 8-19 23-20 43-15 1-27-5-31-19-5-15 4-29 14-42Z" />
          <path d="M876 128c15-7 29 0 32 13 4 12 14 15 24 11 13-5 24 3 27 17 5 21-10 38-17 57-11 28-19 70-34 117h-44c6-27 13-54 16-81 3-22 1-24-4-35-4-10 10-19 8-29-2-9-10-15-18-23-13-13-11-34 10-47Z" />
        </g>
      </g>
      <g fill="none" stroke="#e970f0" strokeWidth="3.5">
        <path d="M754 39c-14 31-20 54-43 70-15 11-29 17-35 29-13 28 24 62 42 113 10 28 11 61 15 92m39 0c-2-35 0-62 14-89 10-20 15-42 28-58" />
        <path d="M864 343c7-31 16-61 17-92 1-18-8-20-4-30m31 122c14-46 22-86 35-118 10-24 22-36 16-57" />
      </g>
    </svg>
  );
}

export function OrthoVistaCover() {
  return (
    <ProjectCover
      palette={{
        "--cover-stripe-start": "#ff3868",
        "--cover-stripe-end": "#ab16f4",
        "--cover-accent": "#ef44d4",
      } as CSSProperties}
      title={<>Ortho<span className={styles.accent}>VISTA</span></>}
      subtitle="AI-powered fracture analysis"
      mark={<svg viewBox="0 0 74 74"><path fill="currentColor" d="M25 0h25v25h24v25H50v24H25V50H0V25h25Z" /></svg>}
      artwork={<OrthoVistaArtwork />}
    />
  );
}
