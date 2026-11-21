import { useId, type ReactNode } from "react";
import { CityIdentity, type CityIdentityDetails } from "./city-identity";

function SkylineIdentity({ details, ink, shade, children }: {
  details: CityIdentityDetails;
  ink: string;
  shade: string;
  children: ReactNode;
}) {
  const texture = useId();

  return (
    <CityIdentity details={details}>
      <svg aria-hidden="true" viewBox="0 0 269 78">
        <defs>
          <pattern id={texture} width="7" height="4" patternUnits="userSpaceOnUse">
            <path fill="white" d="M0 0h7v4H0z" />
            <path stroke="#a6a6a6" strokeWidth=".65" d="M0 1.25h7m-7 2h7" />
            <path stroke="#e0e0e0" strokeWidth=".4" d="M2 0v4m3 0V0" />
          </pattern>
          <mask id={texture + "-mask"} maskUnits="userSpaceOnUse" x="0" y="0" width="269" height="78">
            <path fill={"url(#" + texture + ")"} d="M0 0h269v78H0z" />
          </mask>
        </defs>
        <g mask={"url(#" + texture + "-mask)"} fill={shade} stroke={ink} strokeWidth=".7" strokeLinejoin="round">
          {children}
        </g>
      </svg>
    </CityIdentity>
  );
}

function GothicWindow({ x, y, height = 7 }: { x: number; y: number; height?: number }) {
  return (
    <g fill="#0b202b" stroke="#f0c568" strokeWidth=".35">
      <path d={"M" + x + " " + (y + height) + "V" + (y + 2) + "q1.2-3.8 2.4 0v" + (height - 2) + "Z"} />
      <path d={"M" + (x + 1.2) + " " + (y + 2) + "v" + (height - 2)} stroke="#7a6b40" strokeWidth=".25" />
    </g>
  );
}

function ParliamentWing() {
  return (
    <g>
      {/* Roof planes sit behind the illuminated stone facades. */}
      <path fill="#0b2636" stroke="#587a83" d="M21 52V45l5-9 6 9h30l7-12 8 12h39l6 7Z" />
      <path fill="#176078" stroke="none" d="m23 45 3-9 3 9Zm39 0 7-12-2 12Zm14 0h40l6 7H77Z" />
      <path fill="#ba8e39" stroke="#edc35d" d="M23 52h98v22H23Z" />
      <path fill="#dfb950" stroke="none" d="M24 53h95v3H24Zm0 18h95v2H24Z" />
      <path fill="#6a5631" stroke="none" d="M25 57h94v2H25Zm7 0h2v15h-2Zm41 0h2v15h-2Zm39 0h3v15h-3Z" />
      <path d="M24 60h94m-94 9h94" stroke="#f5d476" strokeWidth=".35" fill="none" />
      <path fill="#e6bc56" d="M21 74V47h11v27Zm43 0V44h13v30Z" />
      <path fill="#8c6b31" stroke="none" d="M29 48h3v25h-3Zm44-3h4v28h-4Z" />
      <path fill="#112e3c" d="m20 47 6-13 7 13Zm43-3 7-14 8 14Z" />
      <path fill="#26657a" stroke="none" d="m21 46 5-11v11Zm43-3 6-12v12Z" />
      <path d="M26 34v-3m44-1v-4M21 50h11m32-3h13" fill="none" stroke="#ffe08a" strokeWidth=".55" />
      {[37, 43, 49, 55, 81, 87, 93, 99, 105, 111].map((x) => (
        <g key={x}>
          <GothicWindow x={x} y={61} height={10} />
          <GothicWindow x={x} y={55} height={4} />
        </g>
      ))}
      <GothicWindow x={24} y={53} height={15} />
      <GothicWindow x={67} y={50} height={18} />
      {[38, 47, 56, 83, 92, 101, 110].map((x) => (
        <g key={x} fill="#113b4e" stroke="#e3bd58" strokeWidth=".45">
          <path d={"M" + x + " 51v-4l2-4 2 4v4Z"} />
          <path d={"M" + (x + 1.4) + " 50v-3h1.2v3Z"} fill="#10212a" />
        </g>
      ))}
      <path d="M33 53h29m16 0h41M33 74V58m28-5v21m17-21v21m40-21v21" fill="none" stroke="#f6d77e" strokeWidth=".5" />
      <path fill="#827038" stroke="none" d="M33 72h29v2H33Zm45 0h41v2H78Z" />
    </g>
  );
}

export function OttawaIdentity() {
  const stone = useId();

  return (
    <SkylineIdentity details={{ name: "Ottawa", country: "Canada" }} ink="#edbd4e" shade="#9c7736">
      <defs>
        <linearGradient id={stone} x1="0" y1="0" x2="1" y2=".6">
          <stop stopColor="#ffe69b" />
          <stop offset=".4" stopColor="#e3b64a" />
          <stop offset="1" stopColor="#946729" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="#3c9fb8" strokeWidth=".7" opacity=".8">
        <path d="M8 33h47m9-13h43M26 26h54M79 35h37m41-15h44m-24 7h56m-29 8h49M91 27h25m40 7h22" />
      </g>
      {/* Recessed rear roofs and foliage establish the distant layer. */}
      <path fill="#0c2931" stroke="#224951" strokeWidth=".45" d="M8 72v-8l7-4 8 4 5-6 7 6h22l9-6 12 5 10-6h25v17Zm148 2V61h15l10-6 11 7 10-3 15 5h12l8-6 7 7 8-3 9 7v5Z" />
      <ParliamentWing />
      <g transform="translate(269 0) scale(-1 1)"><ParliamentWing /></g>
      {/* Buttresses, clock chamber and belfry give the Peace Tower its vertical rhythm. */}
      <path fill="#72532a" stroke="#e2af40" d="M122 75V31l5-4h18l5 4v44Z" />
      <path fill={"url(#" + stone + ")"} d="M125 75V30h20v45Z" />
      <path fill="#815c2b" stroke="none" d="M141 31h4v43h-4Z" />
      <path fill="#0e3246" d="m125 26 10-18 10 18-10-5Z" />
      <path fill="#227084" stroke="none" d="m126 25 9-17-3 14Z" />
      <path fill="#071d2a" stroke="none" d="m136 12 8 13-8-4Z" />
      <path d="M125 27h20m-21 4h22m-23 10h24m-23 2h22m-22 21h22m-24 3h26" fill="none" strokeWidth=".65" />
      <path fill="#ecca70" d="M121 75V30h3v45Zm25 0V30h3v45Z" />
      <path fill="#112e3e" d="m120 31 2.5-9 2.5 9Zm25 0 2.5-9 2.5 9Z" />
      <path d="M122.5 22v-3m25 3v-3M135 8V2" fill="none" stroke="#ffe19a" strokeWidth=".6" />
      <path fill="#fff1d2" stroke="none" d="M136 2h8v4h-8Z" />
      <path fill="#ee392b" stroke="none" d="M136 2h1.8v4H136Zm6.2 0h1.8v4h-1.8Zm-3 .4h1.3v.8h.8l-.8.8v1.4h-.7V4l-.9-.8h.6Z" />
      <circle cx="135" cy="34.5" r="3.9" fill="#143447" stroke="#ffe491" strokeWidth=".7" />
      <circle cx="135" cy="34.5" r="3.1" fill="none" stroke="#ceaa53" strokeWidth=".3" />
      <path d="M135 31.9v2.7l1.9 1M135 31v.7m3 2.8h-.7m-2.3 3.3v-.7m-3.3-2.6h.7" fill="none" stroke="#ffe8a1" strokeWidth=".45" />
      {[127.5, 132.5, 137.5].map((x) => <GothicWindow key={x} x={x} y={46} height={15} />)}
      <path d="M126 45h18m-18 18h18M128 43v2m6-2v2m6-2v2" fill="none" stroke="#fff0b0" strokeWidth=".4" />
      <path fill="#0c1b20" d="M130 75V71q5-9 10 0v4Z" />
      <path d="M132 75V71q3-6 6 0v4" stroke="#ffe197" fill="none" strokeWidth=".4" />
      <path fill="#153f4a" stroke="#348296" strokeWidth=".6" d="M2 76q1-7 7-5 2-8 8-4 3-9 10-4 6-4 12 3 7-7 13 0 10-6 16 2 8-3 15 4h23l7 4Zm154 0q6-7 13-3 6-9 13-4 6-9 14-4 9-8 15-2 8-5 14 2 9-4 15 3 7-5 12 1 10-2 14 7Z" />
      <path fill="#071e26" stroke="none" d="M3 76q6-6 11-2 7-7 13-3 8-5 15 2 6-3 11 0 10-4 17 3Zm178 0q7-7 16-2 8-9 17-3 10-6 18 2 12-4 21 3Z" />
      <path d="M2 77h265m-251-2h31m172 0h29" fill="none" stroke="#f6cb61" strokeWidth=".65" />
    </SkylineIdentity>
  );
}

const torontoBuildings = [
  { x: 18, y: 49, width: 8, depth: 3, tone: "#6d234c" },
  { x: 31, y: 36, width: 12, depth: 4, tone: "#9d2f5d" },
  { x: 49, y: 43, width: 9, depth: 3, tone: "#622441" },
  { x: 62, y: 31, width: 15, depth: 4, tone: "#bd3c68" },
  { x: 84, y: 25, width: 16, depth: 4, tone: "#a13666" },
  { x: 108, y: 36, width: 12, depth: 4, tone: "#d1496e" },
  { x: 129, y: 50, width: 9, depth: 3, tone: "#9d3159" },
  { x: 174, y: 43, width: 10, depth: 3, tone: "#ad3056" },
  { x: 191, y: 34, width: 15, depth: 4, tone: "#c4436c" },
  { x: 211, y: 45, width: 13, depth: 4, tone: "#962b52" },
  { x: 229, y: 51, width: 7, depth: 3, tone: "#64213e" },
  { x: 241, y: 37, width: 12, depth: 4, tone: "#b93f68" },
] as const;

function TorontoBuilding({ x, y, width, depth, tone }: (typeof torontoBuildings)[number]) {
  const frontRight = x + width;
  const rows = Math.floor((73 - y) / 3.6);

  return (
    <g strokeWidth=".55">
      <path fill={tone} d={"M" + x + " 74V" + y + "l" + width + "-1.5 " + depth + " 2v" + (73.5 - y) + "Z"} />
      <path fill="#351b32" stroke="#9a305c" d={"M" + frontRight + " " + (y - 1.5) + "l" + depth + " 2V74h-" + depth + "Z"} />
      <path d={"M" + x + " " + y + "l" + width + "-1.5 " + depth + " 2"} stroke="#ff9a9b" fill="none" />
      <path d={"M" + (x + 1) + " " + (y + 1) + "V73"} stroke="#f7698b" opacity=".8" />
      {Array.from({ length: rows }, (_, row) => (
        <g key={row} stroke={row % 4 === 0 ? "#ffd298" : "#ef8296"} strokeWidth=".65">
          <path d={"M" + (x + 3) + " " + (y + 3 + row * 3.6) + "h2m2.5 0h2"} />
          <path d={"M" + (frontRight + 1.2) + " " + (y + 3.5 + row * 3.6) + "h.7"} opacity=".45" />
        </g>
      ))}
      <path d={"M" + (x + 2) + " 72h" + (width - 4)} stroke="#f29b91" fill="none" />
    </g>
  );
}

export function TorontoIdentity() {
  const tower = useId();
  const roof = useId();

  return (
    <SkylineIdentity details={{ name: "Toronto", country: "Canada" }} ink="#ef4e7c" shade="#4c213d">
      <defs>
        <linearGradient id={tower} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#f8847c" />
          <stop offset=".38" stopColor="#ffe0b5" />
          <stop offset=".57" stopColor="#f77c7c" />
          <stop offset="1" stopColor="#a72e55" />
        </linearGradient>
        <linearGradient id={roof} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#ed7f8f" />
          <stop offset=".5" stopColor="#e84d73" />
          <stop offset="1" stopColor="#6d234c" />
        </linearGradient>
      </defs>
      {/* Low contrast rear towers leave separate gaps around the landmark. */}
      <g fill="#291a30" stroke="#6b294e" strokeWidth=".5">
        <path d="M9 73V56h8v17m26 0V38h6v35m29 0V35h6v38m36 0V42h7v31m14 0V52h10v21m25 0V44h8v29m10 0V35h9v38m27 0V47h7v26m14 0V58h7v15m20 0V49h10v24" />
        <path d="M13 59v11m33-29v27m35-29v29m43-21v22m18-12v13m28-22v21m11-30v30m31-18v17m17-6v8m24-25v24" stroke="#ab3f68" strokeDasharray="1 2" />
      </g>
      {torontoBuildings.map((building) => <TorontoBuilding key={building.x} {...building} />)}
      <path d="M91 24v-3m-4 3h12m99 9v-4m-4 4h11m-137 2v-4m-5 4h14m175 7v-3" stroke="#f07693" fill="none" strokeWidth=".5" />
      {/* Rogers Centre has separate shell, roof ribs, recessed glazing and a podium. */}
      <path fill="#391a34" stroke="#f36f81" d="M29 74V65q4-4 7-5h69l7 5v9Z" />
      <path fill={"url(#" + roof + ")"} stroke="#eab391" d="M31 62Q69 29 109 62l-4 2H35Z" />
      <path fill="#692340" stroke="#f98f94" strokeWidth=".5" d="M37 61Q69 36 103 61Z" />
      <path d="M33 62Q69 32 107 62M42 60Q69 39 98 60M50 58Q69 44 90 58" fill="none" stroke="#df9398" strokeWidth=".45" />
      <path d="M34 64h73m-75 3h77m-70 3h63" stroke="#df5579" fill="none" strokeWidth=".6" />
      {[39, 47, 55, 63, 71, 79, 87, 95, 103].map((x) => (
        <path key={x} d={"M" + x + " 73v-6h3v6"} fill="#191a29" stroke="#9f3a60" strokeWidth=".45" />
      ))}
      {/* The SkyPod and main observation ring remain separate along the slender upper mast. */}
      <g strokeLinejoin="round">
        <path d="M155 1.5v4.7m-.2 0v4.2h.4V6.2Zm-.3 4.2v3.4h1v-3.4Z"
          fill="#ec8d87" stroke="#ffc5a6" strokeWidth=".35" />
        <path d="M154.1 14h1.8v1.7h-1.8Zm.25 1.7h1.3V24h-1.3Z"
          fill={"url(#" + tower + ")"} stroke="#f4ad97" strokeWidth=".35" />
        <ellipse cx="155" cy="14.7" rx="1.7" ry=".65" fill="#f7b19a" stroke="#ffd7b1" strokeWidth=".3" />
        <path d="M153.4 15.1q1.6.7 3.2 0" fill="none" stroke="#a34965" strokeWidth=".35" />
        {/* A narrow shaft with a slight flare at ground level preserves the concrete silhouette. */}
        <path fill={"url(#" + tower + ")"} stroke="#f4ad97" strokeWidth=".45"
          d="M151.8 75Q153.5 55 154.2 30h1.6q.7 25 2.4 45Z" />
        <path d="M154.9 31v42m.8-39 1.1 39" fill="none" stroke="#ffe5bd" strokeWidth=".3" />
        <path d="M151.3 75h7.4" stroke="#f8ba9e" strokeWidth=".55" />
        {/* Tapered underside, recessed glazing and two clean rim lines define the main pod. */}
        <path fill="#9b3c59" stroke="#f2a28f" strokeWidth=".4"
          d="M150.3 28h9.4l-2.4 2.5h-4.6Z" />
        <path fill={"url(#" + tower + ")"} stroke="#ffd3a9" strokeWidth=".45"
          d="M149.7 25.2Q155 21.9 160.3 25.2l.4 2.1q-5.7 2.7-11.4 0Z" />
        <path fill="#46233b" stroke="#f7aa96" strokeWidth=".3"
          d="M149.7 25.6q5.3 1 10.6 0v1.35q-5.3 1.2-10.6 0Z" />
        <path d="M149.3 27.1q5.7 1.5 11.4 0m-10.5-2.1q4.8-1.2 9.6 0"
          fill="none" stroke="#ffe2b3" strokeWidth=".4" />
        <path d="M151.1 25.9v1.1m1.9-.9v1.2m2-1.1v1.2m2-1.3v1.2m1.9-1.5v1.1"
          stroke="#d98685" strokeWidth=".25" />
      </g>
      <path fill="#51213a" stroke="#e95876" strokeWidth=".55" d="M115 75V64h8v-4h10v15m31 0V63h8v-7h7v19m43 0V66h10v9" />
      <path d="M117 66h4m-4 3h4m5-7h5m-5 4h5m-5 4h5m36-5h4m5-6h2m-2 4h2" stroke="#fa8f98" strokeWidth=".5" />
      <path fill="#622039" stroke="#d67d59" strokeWidth=".65" d="M174 76q-1-7 5-7 2-8 9-5 5-10 12-5 7-7 14-1 9-6 14 2 9-2 13 5 9-4 13 3 10-2 13 8Z" />
      <path fill="#241b2b" stroke="none" d="M177 76q4-7 10-4 3-6 10-3 5-8 12-4 9-5 16 2 10-3 16 4 8-2 14 5Z" />
      <path fill="#50213d" stroke="#e8647e" d="M2 76q1-6 7-5 0-7 7-5 5-7 11-2 8-1 11 6l7 6Z" />
      <path d="M1 77h267m-158-2h18m22 0h12m90 0h9" fill="none" stroke="#ff7d87" strokeWidth=".65" />
    </SkylineIdentity>
  );
}

const karachiBuildings = [
  { x: 12, y: 61, width: 8, height: 13 },
  { x: 26, y: 49, width: 12, height: 25 },
  { x: 44, y: 37, width: 13, height: 37 },
  { x: 63, y: 47, width: 8, height: 27 },
  { x: 167, y: 43, width: 10, height: 31 },
  { x: 182, y: 33, width: 14, height: 41 },
  { x: 202, y: 51, width: 9, height: 23 },
] as const;

function HarbourBuilding({ x, y, width, height }: (typeof karachiBuildings)[number]) {
  return (
    <g strokeWidth=".5">
      <path fill="#1a9e95" d={"M" + x + " 74V" + y + "l" + width + "-1 3 2V74Z"} />
      <path fill="#0d494c" stroke="#258d88" d={"M" + (x + width) + " " + (y - 1) + "l3 2V74h-3Z"} />
      <path d={"M" + x + " " + y + "l" + width + "-1"} fill="none" stroke="#88efd4" />
      <path d={"M" + (x + 1) + " " + (y + 2) + "v" + (height - 3)} stroke="#52dfc4" fill="none" />
      {Array.from({ length: Math.floor((height - 3) / 4) }, (_, row) => (
        <path key={row} d={"M" + (x + 3) + " " + (y + 3 + row * 4) + "h1.5m2.5 0h1.5"}
          stroke={row % 3 === 0 ? "#bcf1cb" : "#54bbae"} strokeWidth=".55" />
      ))}
    </g>
  );
}

export function KarachiIdentity() {
  const dome = useId();
  const stone = useId();

  return (
    <SkylineIdentity details={{ name: "Karachi", country: "Pakistan" }} ink="#35d4b5" shade="#12575a">
      <defs>
        <linearGradient id={dome} x1="0" y1="0" x2="1" y2=".4">
          <stop stopColor="#fff0b1" />
          <stop offset=".32" stopColor="#e9bd60" />
          <stop offset=".7" stopColor="#bc8b35" />
          <stop offset="1" stopColor="#795c2d" />
        </linearGradient>
        <linearGradient id={stone} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#ffe4a0" />
          <stop offset=".5" stopColor="#d6ad5b" />
          <stop offset="1" stopColor="#a67e3a" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round" strokeWidth=".65">
        <path d="M10 36h35q3 0 5-1m-17-6h27m-17 0q-1-3 4-3h26m89-5h46q10 0 11 3m-25-7h18q7 0 7 2m-45 12h59m-15 4h-40" stroke="#efbc57" />
        <path d="M25 40h14m136-13h29m-4 10h15" stroke="#9e7936" opacity=".7" />
      </g>
      <g fill="#0b373d" stroke="#1b746e" strokeWidth=".4">
        <path d="M2 73v-5h8v5m9 0V59h5v14m12 0V52h7v21m15 0V48h5v25m96 0V54h7v19m12 0V43h5v30m16 0V50h7v23m10 0V58h8v15m45 0V62h6v11m5 0V68h7v5" />
      </g>
      {karachiBuildings.map((building) => <HarbourBuilding key={building.x} {...building} />)}
      {/* Marble planes and recessed entrance sit in front of the surrounding city. */}
      <g stroke="#f7d586" strokeWidth=".65">
        <path fill="#85652e" d="M81 44h72l9 29H72Z" />
        <path fill={"url(#" + stone + ")"} d="M84 43h64l6 29H78Z" />
        <path fill="#a27b38" stroke="none" d="M142 44h6l6 28h-10Z" />
        <path fill="#f3d48e" stroke="none" d="M84 44h6l-5 26h-6Z" />
        <path fill={"url(#" + dome + ")"} d="M91 43v-2q1-22 25-24 25 2 26 24v2Z" />
        <path fill="#b48734" stroke="none" d="M117 18q20 5 23 22h-7q-3-16-16-22Z" />
        <path fill="#ffebb1" stroke="none" d="M94 39q3-14 18-20-9 8-12 20Z" opacity=".7" />
        <path d="M116 17v-4m-1 2h2" stroke="#ffe6a0" fill="none" />
        <path d="M93 40h47m-46-3h45m-43-3h42m-40-3h37m-34-3h31m-28-3h24m-19-3h14" stroke="#f5d88c" strokeWidth=".38" fill="none" />
        <path d="M116 19q-10 10-10 22m10-22q1 9 0 22m2-22q10 10 10 22" stroke="#8a7136" strokeWidth=".4" fill="none" opacity=".7" />
        <path fill="#f3d289" d="M89 42h54v2H89Z" />
        <path d="M84 48h64m-64 4h64m-66 4h68m-68 4h69m-70 4h71m-72 4h73" fill="none" stroke="#a47b36" strokeWidth=".4" />
        <path d="M91 48v4m7 0v4m-8 4v4m49-16v4m-6 0v4m8 4v4" fill="none" stroke="#f6db99" strokeWidth=".4" />
        <path fill="#805a25" d="M104 72V57q0-10 12-16 12 6 12 16v15Z" />
        <path fill="#091b20" stroke="#ffe2a0" d="M107 72V57q0-8 9-13 9 5 9 13v15Z" />
        <path d="M110 71V57q0-6 6-10 6 4 6 10v14" fill="none" stroke="#b08b42" strokeWidth=".55" />
        <path fill="#d9b366" d="M111 44v-3q5-6 10 0v3Z" />
        <path fill="#173239" d="M114.3 43v-2q1.7-3 3.4 0v2Z" />
        <path fill="#1e2c29" stroke="none" d="M91 56v-3q1.5-3 3 0v3Zm-1 8v-3q1.5-3 3 0v3Zm46-8v-3q1.5-3 3 0v3Zm1 8v-3q1.5-3 3 0v3Z" />
        <path fill="#dfc07b" d="M73 72h86v2H73Zm-5 2h96v2H68Z" />
      </g>
      {/* Crane trusses, cargo and a low quay make the harbour a distinct foreground. */}
      <g stroke="#eeb94d" fill="none" strokeWidth=".6">
        <path d="M234 70V41m-3 29V41m-22 8 24-13 32 14h-56Zm0 0 24 3 32-2m-32-14-7 14m7-14 7 15m-7-15v16m-24-3h56m-12 2v13m2-13v9q0 3-2 3t-2-3m-18-8v12m-7 8h15" />
        <path d="m232 53-1 8 3 7m-3-7 3-8" stroke="#a0752f" />
        <path fill="#18a69b" stroke="#71d6b8" d="M242 68h18l-2 4h-19Z" />
        <path fill="#b18b3f" d="M247 65h8v3h-8Z" />
        <path d="M248 65v-3m-1 0h5m-10 8h15" stroke="#f2c968" />
      </g>
      <path fill="#0d5757" stroke="#2ca18d" strokeWidth=".4" d="M214 72v-6h8v6m-7-3h6m-3-3v6m42 0v-4h5v4M3 73h65m96 0h103" />
      <path fill="#17534c" stroke="#5b9770" strokeWidth=".5" d="M27 75q2-6 7-4 5-7 11-3 6-7 12-3 8-3 13 4 8-5 14 0 8-3 11 6Zm125 0q4-7 10-4 6-9 13-5 8-5 15 1 8-4 13 2 7-2 11 6Z" />
      <path fill="#071f24" stroke="none" d="M29 75q8-6 16-3 7-7 13-3 7-3 13 2 10-4 17 4Zm128 0q8-6 14-3 9-7 17-2 7-2 15 5Z" />
      <path d="M1 76h267m-253 1h237m-233-3h24m122 0h22m35 0h25" stroke="#48e4bd" fill="none" strokeWidth=".65" />
      <path d="M79 76h80m47-1h15" stroke="#e1b75a" fill="none" strokeWidth=".5" />
    </SkylineIdentity>
  );
}
