import { useId, type ReactNode } from "react";
import { CityIdentity, type CityIdentityDetails } from "./city-identity";

function SkylineIdentity({ details, backdrop, ink, shade, children }: { details: CityIdentityDetails; backdrop: ReactNode; ink: string; shade: string; children: ReactNode }) {
  const id = useId();
  const texture = `${id}-texture`;

  return (
    <CityIdentity details={details}>
      <svg aria-hidden="true" viewBox="0 0 269 78">
        <defs>
          <pattern id={texture} width="7" height="4" patternUnits="userSpaceOnUse">
            <path fill="white" d="M0 0h7v4H0z" />
            <path stroke="#a6a6a6" strokeWidth=".65" d="M0 1.25h7m-7 2h7" />
            <path stroke="#e0e0e0" strokeWidth=".4" d="M2 0v4m3 0V0" />
          </pattern>
          <mask id={`${texture}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width="269" height="78">
            <path fill={`url(#${texture})`} d="M0 0h269v78H0z" />
          </mask>
        </defs>
        <g mask={`url(#${texture}-mask)`}>
          {backdrop}
          <g fill={shade} stroke={ink} strokeWidth="1.15" strokeLinejoin="round">
            {children}
          </g>
          <path d="M2 77h23m6 0h9m207-1h20" stroke={ink} fill="none" />
        </g>
      </svg>
    </CityIdentity>
  );
}

export function OttawaIdentity() {
  return (
    <SkylineIdentity details={{ name: "Ottawa", country: "Canada" }} ink="#efb749" shade="#29465e"
      backdrop={
        <g fill="none" stroke="#4ea8c8">
          <path d="M14 59V23l9-9h86m49 0h88l9 9v36" strokeWidth="1.1" />
          <path d="M28 24h76m61 0h76M28 33h63m87 0h63M28 42h48m117 0h48" strokeWidth="2.5" opacity=".66" />
          <path d="M20 23v12m229-12v12M111 14h8m31 0h7" stroke="#f5a623" />
        </g>
      }>
      <path d="M3 73h15v-6h11l7-6 8 6h12v-9l5-5 5 5h12v15h18V60l7-5 8 5v13h15l10-5h15l9 5h19l7-10 8 10h15V62h10v11h10V59l7-6 8 6v14h13v-7h7v7h8Z" />
      <path d="M32 74V52l6-7 6 7v5h7l7-9 8 9h11v-8l6-7 6 7v8h14l10-9 9 9h8V33l5-8 5 8 5-8 5 8v24h10l11-9 10 9h14v-8l6-7 6 7v8h10l7-9 7 9h7v-5l6-7 6 7v22Z" />
      <path fill="#c98d2a" stroke="#ffd45a" d="M125 74V39h3V27l5-5 7-16 7 16 5 5v12h3v35Z" />
      <path fill="#9e7840" stroke="none" d="M34 57h20l4 4h20v12H34Zm56 3h32v13H89Zm38-21h11v34h-11Zm30 20h28v14h-28Zm46-1h18v15h-18Z" />
      <path fill="#23364b" stroke="none" d="M145 39h8v34h-8Zm-11-13 6-8 7 8v13h-13Zm-44 35h10v12H90Zm98-2h10v14h-10Zm48-2h12v16h-12Z" />
      <path fill="#d39e45" stroke="none" d="M35 55h14v3H35zm67 4h18v2h-18zm27-19h21v3h-21zm32 18h14v2h-14zm54 0h11v2h-11z" />
      <path fill="#ffc542" stroke="none" d="M127 43h5v30h-5zm3-15 5-6 3-2-4 9v10h-4zm-1 12h21v2h-21z" />
      <path fill="#654523" stroke="none" d="M147 29h4v10h-4zm0 15h6v29h-6z" />
      <path fill="none" stroke="#ffd45a" strokeWidth=".8" d="m34 51 4-6 5 6m37-4 3-5 5 7m111-1 4-6 4 5M140 6V2" />
      <path fill="#ffe383" stroke="none" d="m133 22 7-16 7 16-7-5zM34 51l4-6 5 6zm164-3 5-6 4 6z" />
      <g fill="none" strokeWidth=".75">
        <circle cx="140" cy="31" r="4.8" fill="#151f25" stroke="#ffe383" />
        <path d="M140 28v3l2 1m-13 7h22m-24 6h26m-21 2v14m5-14v14m6-14v14m6-14v14m-21 3h24M40 60v9m9-8v8m11-9v9m8-9v9m10-9v9m10-9v9m9-8v8m12-9v9m8-9v9m46-9v9m9-9v9m9-9v9m11-9v9m11-9v9m9-9v9m12-9v9m11-10v10m9-9v9" />
      </g>
      {/* Slate roof planes, lit masonry and recessed Gothic openings. */}
      <path fill="#17272e" stroke="none" d="m33 53 5-7 6 7v4h7l7-8 7 8h13l5-13 6 7v8h14l10-10 8 10v5H33Zm125 10v-7h10l11-9 10 9h10v-8l4-5 6 7v7h12l7-8 7 9h8l6-9 6 8v6Z" />
      <path fill="#3b748d" stroke="none" d="M126 46h4v27h-4zm24 0h4v27h-4zm-19-19 3-4h3l-2 5v10h-4zm-95 37h83v2H36zm123 0h95v2h-95z" />
      <path d="M140 6V2m-3 2h3M38 45v-4m45 1v-4m120 4v-4m25 9v-4m21 2v-4" fill="none" strokeWidth=".75" />
      <path d="M130 42h20m-13-10h6m-3-3v6m-7 31v7m5-7v7m5-7v7m5-7v7M45 72h67m51 0h76" fill="none" stroke="#ffd45a" strokeWidth=".65" />
      <path d="M53 60q2-4 4 0v3h-4zm26-2q2-5 4 0v4h-4zm32 1q2-4 4 0v4h-4zm66-1q2-4 4 0v4h-4zm24 1q2-4 4 0v4h-4zm26 0q2-4 4 0v4h-4z" fill="#121f25" strokeWidth=".55" />
    </SkylineIdentity>
  );
}

export function TorontoIdentity() {
  return (
    <SkylineIdentity details={{ name: "Toronto", country: "Canada" }} ink="#ff5964" shade="#752440"
      backdrop={
        <g fill="none">
          <path d="M31 58V33h15v25Zm24 0V21h19v37Zm28 0V29h15v29Zm83 0V16h18v42Zm27 0V26h20v32Zm29 0V38h15v20Z" fill="#42203b" stroke="#73334e" strokeWidth="1.2" />
          <path d="M36 38v14m27-24v24m27-17v17m83-30v30m28-20v20m28-9v9" stroke="#db4160" strokeWidth="1.3" strokeDasharray="2 3" />
        </g>
      }>
      <path d="M4 74v-7h12v7h8V56h10v-7h13v7h5v18h7V48h8v-6h11v32h6V57h10v17h7V39h13v-4h12v39h7V52h13v22h8V45h10v29h9V36h7v-5h14v43h7V49h14v25h6V56h16v18h8V61h12v13h14Z" />
      <path fill="#c23552" stroke="none" d="M60 49h10v24H60Zm42-9h13v33h-13Zm30 13h9v20h-9Zm48-17h11v37h-11Zm22 14h8v23h-8Zm20 8h8v15h-8Z" />
      <path fill="#37212e" stroke="none" d="M72 43h5v30h-5Zm45-7h8v37h-8Zm72-4h5v41h-5Zm20 18h6v23h-6Zm21 7h6v16h-6Z" />
      <path fill="#f55e6a" stroke="none" d="M61 49h12v2H61Zm43-9h13v2h-13Zm76-4h12v2h-12Zm23 14h10v2h-10Z" />
      <path fill="#4e2632" d="M16 74c6-9 13-13 25-13s20 4 26 13Z" />
      <path fill="#ff6269" stroke="#ff9073" d="M145 74l3-35h4l3 35Zm2-38v-7l2-5 1-18 1 18 2 5v7Z" />
      <path fill="#682e3b" stroke="none" d="M151 40h2l2 33h-4Z" />
      <path fill="#ff9073" stroke="none" d="M149 40h2l-2 33h-2zm0-11 1-18 1 18v4h-2z" />
      <path fill="none" stroke="#ff7880" strokeWidth=".85" d="M102 40h12m-12 0v17m78-21h11m-11 0v15" />
      <path fill="#f5e5bb" stroke="#ff9073" d="M143 38h14l-2-3-3-2h-4l-3 2z" />
      <g fill="none" strokeWidth=".72">
        <path d="M29 58h18m-17 4h12m22-10h9m-9 4h9m-9 4h9m-9 4h9m14-3h6m-6 4h6m12-23h16m-16 4h16m-16 4h16m-16 4h16m-16 4h16m-16 4h16m-16 4h16m41-16h6m-6 5h6m-6 5h6m14-21h10m-10 4h10m-10 4h10m-10 4h10m-10 4h10m-10 4h10m-10 4h10m14-10h8m-8 5h8m-8 5h8m12-3h10m-10 4h10M26 70q14-8 29 0" />
      </g>
      {/* Setback towers, reflected light and the deck's separate bands. */}
      <path fill="#63313e" stroke="none" d="M60 49h3v24h-3zm42-9h3v33h-3zm79-4h3v37h-3zm21 15h3v22h-3zm16 7h3v15h-3z" />
      <path fill="#1e1821" stroke="none" d="M71 43h6v30h-6zm46-7h8v37h-8zm72-4h5v41h-5z" />
      <path d="M73 43v-5m45-3v-6m71 2v-6m-4 0h8m-76 10h8m50 39V61h8v-5h9v18M94 74v-8h13v8m116 0v-8h12v8" strokeWidth=".75" />
      <path d="M145 40h10m-11-3h12m-6 4-1 30m-36-30v24m-3-19v14m77-20v13m-4-14v10M33 55h13m-8 11v4m7-3v4m153-14v10m-17-5v7m7-8v8m-85 0h3m122 0h4" fill="none" stroke="#ff7b86" strokeWidth=".65" />
      <path d="M7 76h14m46 0h15m77 0h21m55 0h19" fill="none" stroke="#ca3759" strokeWidth=".8" />
    </SkylineIdentity>
  );
}

export function KarachiIdentity() {
  return (
    <SkylineIdentity details={{ name: "Karachi", country: "Pakistan" }} ink="#32d9b0" shade="#246e73"
      backdrop={
        <g fill="none" strokeLinecap="round">
          <path d="M14 43h39q13 0 22-8m71-13h35q21 0 33 10t40 10M7 52h41q13 0 25-7m77-12h32q19 0 31 9t39 10M17 60h35m114-17h17q14 0 24 8t32 8" stroke="#d69b43" strokeWidth="1.6" />
          <path d="M28 33h28m137-15h27m11 4h12" stroke="#f9c76b" strokeWidth=".8" />
        </g>
      }>
      <path d="M3 74h13v-8h9v-9h9v17h10V55h6v-5h10v24h8V60h8v-5h10v19h12v-9h13v9h15v-9h19v9h10V49h8v-8h12v33h6V55h14v19h10v-9h17l7 5h18l8-5h12l-6 9Z" />
      <path fill="#c9a16a" stroke="#ffdb85" d="M67 72h87v-4H67Zm7-5h73v-5H74Zm5-5 5-26h54l5 26Z" />
      <path fill="#dca74d" stroke="#f9c76b" d="M87 36v-4h4c1-9 7-16 18-19l2-3 2 3c11 3 17 10 18 19h4v4Z" />
      <path fill="#ffd272" stroke="none" d="M92 32c2-8 8-14 17-17-4 5-6 10-6 17z" />
      <path fill="#f9c76b" stroke="none" d="M87 38h24v24H82Zm9-7q4-12 15-16-6 7-7 16Z" />
      <path fill="#795938" stroke="none" d="M118 38h19l5 23h-13Zm-7-23q15 4 19 17h-8q-3-11-11-17Z" />
      <path fill="#125a60" stroke="none" d="M27 57h6v16h-6Zm26-7h6v23h-6Zm116-9h5v32h-5Zm20 14h5v18h-5Z" />
      <path fill="#00bfa6" stroke="none" d="M45 55h7v18h-7Zm111-6h8v24h-8Zm23 7h6v17h-6Z" />
      <path fill="#4ea98d" stroke="none" d="M198 66h17l8 5h17l9-5h10l-4 3h-6l-8 4h-18l-9-4h-16Z" />
      <path fill="#ffe7a1" stroke="none" d="M94 31q5-11 15-15-6 7-8 15zM88 37h46v2H88zm-8 25h26v1.5H80z" />
      <path fill="#554836" stroke="none" d="M102 62V49q0-7 9-11 9 4 9 11v13z" />
      <path d="M104 62V49q0-6 7-9 7 3 7 9v13m-28-4v-9h5v9zm37 0v-9h5v9z" fill="#0b0d0f" />
      <path stroke="#d69b43" d="M206 73V47h6l13-12 12 7v10m-31-5 19-12m17 38V53l13-13 10 5v12m-23-4 13-13" fill="none" />
      <path strokeWidth=".7" fill="none" d="M46 57h10m-10 4h10m-10 4h10m-29-4h5m-5 4h5m129-19h11m-11 4h11m-11 4h11m-11 4h11m-11 4h11m-11 4h11m14-7h10m-10 4h10m-10 4h10m21 3h11m20 0h10" />
      {/* Dome ribs and stone courses, with gantries above the waterfront. */}
      <path fill="#75674d" stroke="none" d="M112 14q14 5 18 18h-7q-3-12-11-18Zm-26 24h8l-3 24H80Zm45 0h7l4 24h-8Z" />
      <path d="M111 16q-6 8-6 16m9-15q7 7 8 15M88 35h46m-49 5h51m-53 20h58m-43 0V49q0-8 13-13 13 5 13 13v11m-17 1V50q0-4 4-6 4 2 4 6v11m-27-4h8m31 0h8m-50 8h57m-63 5h69" fill="none" stroke="#f9c76b" strokeWidth=".6" />
      <path d="M22 64h12m-13 3h13m16-12v16m6-14v14m4-9h7v10m94-21v21m8-20v20m13-12v11m6-11v11" fill="none" stroke="#32d9b0" strokeWidth=".65" />
      <path d="M206 72h28m-24-25 11 8 8-13m-21 11h25m2-9v15m-2 0h4m7-5 9 8 7-15m-14 13h18m-3-12v13m-2 0h4m-66 15h17m9 0h11" fill="none" stroke="#dca753" strokeWidth=".68" />
    </SkylineIdentity>
  );
}
