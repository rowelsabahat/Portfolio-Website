import { useId, type CSSProperties, type ReactNode } from "react";
import { ProjectCover } from "./project-cover";
import styles from "./project-cover.module.css";

function Stripes({ colors, end = 590, count = 9 }: { colors: string[]; end?: number; count?: number }) {
  const id = useId();
  return (
    <g fill={`url(#${id})`}>
      <defs>
        <linearGradient id={id}>
          {colors.map((color, index) => <stop key={color} offset={index / (colors.length - 1)} stopColor={color} />)}
        </linearGradient>
      </defs>
      {Array.from({ length: count }, (_, index) => {
        const y = 50 + index * 11;
        return <path key={y} d={`M${index === 0 ? 40 : 30} ${y}H${end + index * 8}l5 7H30Z`} />;
      })}
    </g>
  );
}

function PerspectiveFloor({ color }: { color: string }) {
  return (
    <g fill="none" stroke={color} strokeWidth="1.5" opacity=".65">
      {[35, 70, 120, 180, 250, 325, 420, 515, 610, 705, 800, 895, 965].map((x) =>
        <path key={x} d={`M${680 + (x - 680) * .17} 228L${x} 352`} />)}
      {[233, 242, 254, 271, 294, 322, 352].map((y) => <path key={y} d={`M38 ${y}H963`} />)}
    </g>
  );
}

function Artwork({ label, children, preserveAspectRatio }: { label: string; children: ReactNode; preserveAspectRatio?: string }) {
  return <svg viewBox="0 0 1000 393" preserveAspectRatio={preserveAspectRatio} role="img" aria-label={label}>{children}</svg>;
}

function SplitTitle({ children, accent }: { children: ReactNode; accent: string }) {
  return <>{children}<span className={styles.accent}>{accent}</span></>;
}

function Box({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`} stroke="#251709" strokeWidth="3" strokeLinejoin="round">
      <path fill="#ffe692" d="M0 24 75 0l76 26-76 26Z" />
      <path fill="#ffae42" d="M0 24v79l75 30V52Z" />
      <path fill="#f56b21" d="m75 52 76-26v78l-76 29Z" />
      <path fill="none" strokeWidth="1.4" d="m10 36 54 21m-54-9 54 21m-54-9 54 21m-54-9 54 21m-54-9 54 21m-54-9 54 21m20-58 57-21m-57 32 57-21m-57 32 57-21m-57 32 57-21m-57 32 57-21m-57 32 57-21M35 13l77 28v25l-17 6V46L20 19m83-10L33 35" />
      <path fill="#ffe9a2" strokeWidth="1.5" d="m11 71 23 10v18L11 89Z" />
    </g>
  );
}

function BundleArtwork() {
  return (
    <Artwork label="Three striped shipping cartons and a cream shopping cart">
      <Stripes colors={["#ffe16d", "#ff6429"]} end={576} />
      <Box x={720} y={151} size={1.15} />
      <Box x={640} y={186} size={.86} />
      <Box x={697} y={55} size={1.11} />
      <g transform="translate(785 222)" fill="none" stroke="#fff0cd" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M0 12h121m-112 0 18 58h78l29-82h20M21 41h92M33 12l12 58m18-58 4 58m24-58-2 58M27 70l-5 12h75" />
        <circle cx="38" cy="96" r="8" /><circle cx="91" cy="96" r="8" />
      </g>
    </Artwork>
  );
}

function ReadingArtwork() {
  return (
    <Artwork label="Vintage computer displaying an open book beside three stacked books" preserveAspectRatio="none">
      <Stripes colors={["#ffff74", "#84ef74", "#08ddd5"]} end={574} />
      <g transform="translate(682 64)" stroke="#fff0cd" strokeWidth="5" strokeLinejoin="round">
        <path d="m181-8 46 31v127l-52 34Z" fill="#086d76" />
        <path d="M19 10 181-8l-6 192H0Z" fill="#13252d" />
        <path d="M30 24 164 9l-7 149H16Z" fill="#09202a" />
        <path d="m1 194 171 1-7 14H-10Zm-6 22h147l-7 30H-44Z" fill="#f8e2b7" />
        <path d="M-18 228h136m-145 9h132" stroke="#152532" strokeDasharray="9 4" />
        <g stroke="#3de4d6" strokeWidth="2.5">
          <path d="m187 4 36 25m-37-16 37 24m-38-15 38 23m-38-13 38 20m-38-11 38 19m-38-10 38 18m-38-9 38 17m-38-8 38 16m-38-8 38 16m-38-8 38 16m-38-8 38 14m-38-6 38 13m-38-5 38 12m-38-4 38 12m-38-4 38 11" />
          <path d="M24 114h15l10-28H31l14-28h39m-62 69h30l9-23m-41 38h122" fill="none" />
        </g>
        <path d="M56 58q27-12 49 4 18-19 45-14l-10 67q-24-3-45 15-25-14-49-8Z" fill="#fff0cd" stroke="#09202a" strokeWidth="3" />
        <path d="M105 62 95 130m-34-55q20-6 34 5m-36 9q18-5 33 5m-36 9q18-4 33 6m21-37q14-12 29-11m-31 25q13-12 29-10m-31 23q14-10 29-10" fill="none" stroke="#09202a" strokeWidth="3" />
        <path d="m137 25 4 10 10 3-11 4-4 10-3-10-10-3 10-4Z" fill="#fff0cd" stroke="none" />
      </g>
      <g transform="translate(803 252)" stroke="#071724" strokeWidth="4" strokeLinejoin="round">
        <path d="m0 55 84-25 66 12-4 21-84 24L0 76Z" fill="#12a978" />
        <path d="m62 66 88-24-4 21-84 24Z" fill="#ffe9b7" />
        <path d="m8 27 82-24 57 11v21L65 62 8 50Z" fill="#ee8336" />
        <path d="m65 41 82-27v21L65 62Z" fill="#fff0cd" />
        <path d="m71 49 70-22M68 75l73-22" fill="none" strokeWidth="2" />
      </g>
    </Artwork>
  );
}

function SurgicalLamp({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} stroke="#fff0cd" strokeWidth="4">
      <ellipse rx="77" ry="38" fill="#101b23" transform="rotate(-12)" />
      <ellipse cy="7" rx="70" ry="29" fill="#113947" transform="rotate(-12)" />
      {[-41, 0, 41].map((cx) => <ellipse key={cx} cx={cx} cy={cx / -9 + 7} rx="16" ry="10" fill="#56dbe0" />)}
      <path d="M-67 16Q0-35 65-8M-54 23Q3-18 54 0" fill="none" strokeWidth="2" />
    </g>
  );
}

function SurgiArtwork() {
  return (
    <Artwork label="Three overhead operating lights and a contoured foam positioning wedge">
      <Stripes colors={["#fff0cd", "#16bed1"]} end={578} />
      <path d="M776 72V48h55l34 54m-29-54h50l29 43" fill="none" stroke="#fff0cd" strokeWidth="9" strokeLinejoin="round" />
      <SurgicalLamp x={761} y={98} scale={.9} />
      <SurgicalLamp x={892} y={112} scale={.66} />
      <SurgicalLamp x={827} y={142} scale={.48} />
      <g stroke="#fff0cd" strokeWidth="4" strokeLinejoin="round">
        <path fill="#2ad6d7" d="M682 268Q712 228 733 237L781 254Q809 254 826 216Q838 187 870 196L942 217Q910 209 898 234Q882 283 849 288Q821 294 799 267Q781 245 752 294Z" />
        <g fill="none" stroke="#072832" strokeWidth="2">
          <path d="m686 265 68 24m-64-29 69 25m-64-31 69 26m-63-31 68 25m-63-30 69 25m-61-30 68 24m-59-28 69 24" />
          <path d="m791 253 65 24m-58-28 69 23m-61-29 69 24m-63-30 68 24m-64-30 69 24m-66-30 69 24m-66-31 69 24m-66-32 69 24m-64-31 69 23m-62-29 70 22m-60-26 69 20" />
        </g>
        <path fill="#092732" d="m682 268 70 26v43l-70-29Z" />
        <path fill="#092732" d="M752 294Q781 245 799 267Q821 294 849 288Q882 283 898 234Q910 209 942 217Q947 219 946 225V285Q946 289 941 290L752 337Z" />
        <g fill="none" stroke="#1bb5bd" strokeWidth="1.25">
          <path d="m687 277 59 23m-59-17 59 23m-59-17 59 24m-59-18 59 24m-59-18 59 24" />
          <path d="m757 300 53-14m-53 20 62-17m-62 23 83-22m-83 28 184-47m-184 54 184-47m-184 53 184-47m-75 0 75-20m-62 11 62-16m-56 8 56-14m-51 7 51-13m-48 6 48-12m-45 5 45-11m-41 3 41-10m-33 0 30-7" />
        </g>
      </g>
    </Artwork>
  );
}

function InspireArtwork() {
  const clip = useId();
  return (
    <Artwork label="Flowing cream contour lines with yellow and red circles, stars, and dots">
      <defs><clipPath id={clip}><path d="M57 33H943L971 61V325L942 355H57L30 325V61Z" /></clipPath></defs>
      <Stripes colors={["#ffe775", "#ff8e21", "#ec162b"]} end={567} />
      <g clipPath={`url(#${clip})`}>
        <circle cx="906" cy="26" r="65" fill="#ffc52b" />
        <circle cx="784" cy="354" r="53" fill="#e31930" />
        <g fill="none" stroke="#efdfb4" strokeWidth="2.8">
          <path d="M639 192c43-25 45-118 103-150 51-29 67 55 107 78 39 23 105 2 136 51M648 202c55-35 62-111 103-139 45-28 59 52 91 72 44 28 110 0 138 51M655 217c53-31 67-104 102-130 31-24 48 47 78 66 42 27 101 4 136 43M663 231c60-39 65-91 98-121 29-24 37 46 68 62 43 23 104 1 143 38" />
          <path d="M544 361c40-105 111-78 164-133 38-39 67-60 101-40 37 22 50 69 89 78 44 10 67-1 89 38M568 362c32-89 104-72 150-124 34-38 65-52 91-30 34 28 52 70 87 76 43 8 60-2 83 35M589 365c29-74 94-64 140-116 31-34 55-39 79-16 24 23 48 62 81 68 42 8 57 0 84 38M613 365c22-57 74-54 127-107 24-24 48-28 68-8 27 28 40 53 73 64 34 11 60 0 83 31M635 365c28-56 63-47 117-99 21-21 43-12 59 4 28 27 36 50 71 62 24 9 52 2 66 17" />
        </g>
        <path fill="#fff0cd" d="m753 113 8 21 21 8-21 8-8 21-8-21-21-8 21-8Zm-62-18 5 12 12 5-12 5-5 12-5-12-12-5 12-5Z" />
        <circle cx="629" cy="64" r="8" fill="#ff3b43" /><circle cx="658" cy="175" r="7" fill="#ffcc39" /><circle cx="935" cy="246" r="12" fill="#fa303d" />
      </g>
    </Artwork>
  );
}

const joints = [[803, 90], [789, 122], [750, 120], [716, 145], [708, 185], [816, 131], [826, 170], [875, 178], [757, 187], [721, 232], [659, 267], [637, 304], [799, 216], [771, 275], [806, 305]];

function RunnerArtwork() {
  return (
    <Artwork label="Neon green running skeleton with joint markers and a wireframe floor">
      <Stripes colors={["#70ff83", "#0cd9a4"]} end={552} count={6} />
      <PerspectiveFloor color="#178b5a" />
      <g fill="none" stroke="#a3ff9b" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M790 89q-6-13 2-23l14-7 13 7 4 16-8 17-14-2Zm-2 30-37 1-36 25-8 42m83-64 26 7 10 40 51 8m-88-55-32 64-36 45-62 35-22 37 10 15m110-132 42 29-28 59 35 30 14 2" />
        <path d="m752 124-7 36 12 27 28 10 16-24 15-43m-66 18 49 12m-51-1 44 13m-38 11 30 9m-60 41-55 42-23 29m148-83-30 59 33 29" stroke="#42d995" strokeWidth="2" />
        {joints.map(([x, y]) => <circle key={x + "," + y} cx={x} cy={y} r="5" fill="#0a2520" />)}
      </g>
    </Artwork>
  );
}

function SepsisArtwork() {
  return (
    <Artwork label="Green ECG monitor, medical cross, and paired lungs over a perspective grid">
      <PerspectiveFloor color="#18964c" />
      <g fill="#081c14" stroke="#94ff99" strokeWidth="5" strokeLinejoin="round">
        <path d="m520 132 294-44-8 176-289 24Z" />
        <path d="m536 146 260-39-8 138-255 28Z" />
        <path d="M630 278v20h75v-27m-110 35h140" fill="none" strokeLinecap="round" />
        <path d="M850 70h82v73h-82Z" />
        <path d="M881 84h19v17h17v16h-17v17h-19v-17h-17v-16h17Z" fill="#83ff90" stroke="none" />
      </g>
      <path d="m544 215 34-4 15-21 13 29 22-65 15 93 20-56 24-3 18-35 16 53 18-27 45-7" fill="none" stroke="#b6ff93" strokeWidth="5" strokeLinejoin="round" />
      <g fill="#13462a" stroke="#9cff9c" strokeWidth="3" strokeLinejoin="round">
        <path d="M882 170c-14-17-41 22-47 50-9 40 9 39 27 27l20-15Zm14 0c14-17 41 22 47 50 9 40-9 39-27 27l-20-15Z" />
        <path d="M889 150v43l-28 29m28-29 29 29m-48-11-14-5m22-7-6-15m37 29 15-5m-22-8 6-16m-42 34-10 17m61-17 10 17" fill="none" />
      </g>
    </Artwork>
  );
}

const basePalette = {
  "--title-scale": "1",
  "--title-size": "8.3cqw",
  "--caption-width": "57%",
  "--divider": "linear-gradient(currentColor, currentColor)",
};

export function BundleLabCover() {
  return <ProjectCover title={<SplitTitle accent="Lab">Bundle</SplitTitle>} subtitle="AI for E-Commerce Bundles" artwork={<BundleArtwork />} palette={{ ...basePalette, "--cover-accent": "#ff772f" } as CSSProperties} />;
}

export function ReadingCover() {
  return <ProjectCover title={<SplitTitle accent=" Me">That&apos;s New to</SplitTitle>} subtitle="Personalized Research Reading" artwork={<ReadingArtwork />} palette={{ ...basePalette, "--title-size": "6.6cqw", "--cover-accent": "#13ddbd", "--subtitle-size": "2.2cqw" } as CSSProperties} />;
}

export function SurgiCover() {
  return <ProjectCover title={<SplitTitle accent="Cover">Surgi</SplitTitle>} subtitle="A Surgical Positioning Solution" artwork={<SurgiArtwork />} palette={{ ...basePalette, "--cover-accent": "#30d4cd", "--subtitle-size": "2.15cqw" } as CSSProperties} />;
}

export function InspireCover() {
  return <ProjectCover title={<SplitTitle accent="AI">Inspire</SplitTitle>} subtitle={<>Pinterest&apos;s Engagement<br />Companion</>} artwork={<InspireArtwork />} palette={{ ...basePalette, "--title-size": "9cqw", "--cover-accent": "#f32e3c" } as CSSProperties} />;
}

export function SkeleTrackCover() {
  return <ProjectCover title="SkeleTrack" subtitle={<>Skeletal Pattern<br />Movement Identification</>} artwork={<RunnerArtwork />} palette={{ ...basePalette, "--caption-top": "37%", "--divider": "linear-gradient(#efcd65, #efcd65)" } as CSSProperties} />;
}

export function SepsiskillCover() {
  return <ProjectCover title="Sepsiskill" subtitle={<>Sepsis<br />Prediction<br />Algorithm</>} artwork={<SepsisArtwork />} palette={{ ...basePalette, "--caption-top": "26%", "--caption-width": "41%", "--divider": "linear-gradient(#f23c42, #f23c42)", "--subtitle-size": "3.2cqw" } as CSSProperties} />;
}
