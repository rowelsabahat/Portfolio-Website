import { useId } from "react";
import { earthLandforms } from "./earth-landforms";

function starPosition(index: number, seed: number) {
  const noise = Math.sin(index * 127.1 + seed) * 43758.5453;
  return noise - Math.floor(noise);
}

const stars = Array.from({ length: 76 }, (_, index) => ({
  x: starPosition(index, 31) * 420,
  y: starPosition(index, 12) * 216,
  radius: index % 11 === 0 ? 1 : index % 3 === 0 ? .65 : .35,
  opacity: index % 5 === 0 ? .85 : .46,
}));

export function RetroEarth() {
  const id = useId();
  const land = `${id}-land`;
  const ocean = `${id}-ocean`;
  const light = `${id}-light`;

  return (
    <svg viewBox="0 0 420 216" aria-hidden="true">
      <defs>
        <pattern id={land} width="3.2" height="2.4" patternUnits="userSpaceOnUse">
          <path d="M0 0h2v1.1H0zM1.65 1.2h1.35v.85H1.65z" fill="#f5e5bb" />
        </pattern>
        <pattern id={ocean} width="5.1" height="4.1" patternUnits="userSpaceOnUse">
          <path d="M0 0h.7v.7H0zm3 2h.55v.55H3z" fill="#c9b994" opacity=".46" />
        </pattern>
        <radialGradient id={light} cx=".46" cy="-.06" r=".8">
          <stop stopColor="#071113" stopOpacity="0" />
          <stop offset=".46" stopColor="#071113" stopOpacity=".28" />
          <stop offset=".83" stopColor="#071113" stopOpacity=".97" />
        </radialGradient>
      </defs>
      <g fill="#f5e5bb">
        {stars.map(({ x, y, radius, opacity }) => (
          <circle key={x} cx={x} cy={y} r={radius} opacity={opacity} />
        ))}
        <path d="m132 22 1.6 20 17.4 1.6-17.4 1.4-1.6 20-1.6-20-17.4-1.4 17.4-1.6Z" />
        <path d="m126 38 6 4 6-4-4 6 4 6-6-4-6 4 4-6Z" />
      </g>
      <circle cx="372" cy="340" r="300" fill="#071113" />
      <circle cx="372" cy="340" r="300" fill={`url(#${ocean})`} />
      <g fill={`url(#${land})`} fillRule="evenodd">
        {earthLandforms.map((path, index) => <path key={index} d={path} />)}
      </g>
      <circle cx="372" cy="340" r="300" fill={`url(#${light})`} />
      <circle cx="372" cy="340" r="299" fill="none" stroke="#f5e5bb" strokeWidth="3.2" />
      <circle cx="372" cy="340" r="295" fill="none" stroke={`url(#${land})`} strokeWidth="5" />
    </svg>
  );
}
