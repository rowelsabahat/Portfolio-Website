import { useId } from "react";
import { CityIdentity, type CityIdentityDetails } from "./city-identity";

const vancouver = { name: "Vancouver", country: "Canada" } satisfies CityIdentityDetails;

export function VancouverIdentity({ story, duration }: Pick<CityIdentityDetails, "story" | "duration">) {
  const id = useId();
  const sun = `${id}-sun`;
  const snow = `${id}-snow`;
  const screen = `${id}-screen`;
  const texture = `${id}-texture`;

  return (
    <CityIdentity details={{ ...vancouver, story, duration }}>
      <svg aria-hidden="true" viewBox="0 0 269 78">
        <defs>
          <linearGradient id={sun} x2="0" y2="1">
            <stop stopColor="#ffdf42" />
            <stop offset=".43" stopColor="#ffb329" />
            <stop offset=".69" stopColor="#ff6038" />
            <stop offset="1" stopColor="#ee294a" />
          </linearGradient>
          <linearGradient id={snow} x2="0" y2="1">
            <stop stopColor="#83ffdf" />
            <stop offset="1" stopColor="#05cbb8" />
          </linearGradient>
          <clipPath id={screen}><circle cx="189.5" cy="33.4" r="31.4" /></clipPath>
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
          <g clipPath={`url(#${screen})`}>
            <circle cx="189.5" cy="33.4" r="31.4" fill={`url(#${sun})`} />
            <path d="M156 6.4h67m-67 4.3 67 .2m-67 4.1 67 .2m-67 4.4 67-.2m-67 4.7h67m-67 4.8 67 .1m-67 5.1 67 .2m-67 6.4 67-.2m-67 6.8h67m-67 7.5 67 .3m-67 7h67" stroke="#221721" strokeWidth="1.15" opacity=".9" />
          </g>

          {/* Ridgelines, snow and shadow follow separate shapes so the valleys stay dark. */}
          <path fill="#073137" d="M2 73 15 63 25 55 43 45 49 48 58 40 71 30 79 33 85 35 99 24 114 14 123 19 134 29 142 27 152 34 162 43 175 53 186 59 194 55 200 59 209 66 214 59 220 66 224 64 228 71 229 74H2Z" />
          <path fill="#052126" d="m4 73 25-13 15-9 8 3 16-9 17-3 20-16 8-5 13 15 16-4 20 16 19 11 15 4 13 9 9-6 11 8H4Z" />
          <path fill={`url(#${snow})`} d="M2 73 15 63 25 55 43 45 49 48 58 40 71 30 79 33 85 35 99 24 114 14 123 19 134 29 142 27 152 34 162 43 175 53 186 59 194 55 200 59 209 66 214 59 220 66 224 64 228 71 224 69 223 71 220 68 216 68 214 63 211 69 207 69 206 64 200 63 194 58 189 62 181 59 172 54 160 46 153 42 158 49 148 41 139 36 144 43 134 38 121 29 126 37 121 35 118 31 115 40 113 40 112 45 106 47 110 36 105 38 109 30 100 35 95 40 89 43 97 33 86 39 80 42 75 46 80 39 73 43 69 47 72 41 64 46 59 49 65 42 56 47 47 51 41 55 43 50 32 57 29 59 23 61 15 67Z" />
          <path fill="#036d6d" d="m4 72 21-13 7-2-10 8zm43-17 13-9-5 7-10 6zm34-10 16-8-7 9-11 5zm17 7 11-14-4 12zm24-18 11 11-7-3zm23 6 13 8 10 8-13-5zm-23 9 13 5 14 9-14-5zm48 8 13 5 8 6-10-3z" />
          <path fill="none" stroke="#0eb8ae" strokeWidth=".55" opacity=".65" d="m8 72 20-10m5 3 19-11m11 4 12-8 10-3m7 9 12-9m19-7 10 9m-15 2 19 11m9-16 18 12m28 4 5-3 7 6m7 5 4-6 6 6" />

          {/* Solid buildings and cut-in windows sit directly on the foothills. */}
          <g fill="#16cdb0">
            <path d="M81 74v-7h2v2h5v5h-2v-3h-3v3zm10 0v-15h11v15h-2V66h-7v8zm13 0v-6h3v-3h3v-2h3v11h-2v-8l-5 4v4zm13 0V53h7v21h-2v-5h-3v5zm10 0v-9h4v-2h6v4h-4v7h-2v-7h-2v7zm12 0V54h10v20h-2v-9h-6v9zm12-1v-6h2v6zm4 1v-9h7v9h-2v-4h-3v4zm1-10v-5h2v-3h1v3h3v5zm8 10v-9h2v-3h2v2h5v10h-2v-7h-5v7zm17 0v-7h3v-2h3v2h2v7zm10 0v-4h2v-2h3v2h2v4h-2v-3h-3v3zm9 0v-7h2v-3h2v3h4v4h-2v-2h-3v5zm15 0v-4h2v-3h2v4h3v3zm27 0 1-13h8v10h3v-5h4v5h9v1h-18v-5h-4v7z" />
            <path d="M2 77h20v1H2zm38-5h19v1H40zm27-9h8v1h-8zm8 9h4v2h-4zm100-4h5v2h-5z" />
          </g>
          <path fill="none" stroke="#073238" strokeWidth=".85" d="M94 61h5m-5 2h5m20-8h3m-3 3h3m-3 3h3m-3 3h3m-3 3h3m20-11h5m-5 3h5m-5 3h5m12-.5h2m6 8h3m-3 2h3m13-3h4m-4 2h4m60-8h4m-4 2h4m7 2v3" />

          <g fill="#21ddbd">
            <path d="M231 74 233 38h2l-1.5 36zm7 0-2-36h2l2.5 36z" />
            <path d="M229 34h13c-.8 2.4-2.7 3.6-5 3.6h-3c-2.3 0-4.2-1.2-5-3.6Zm-1.5-2.2h16V33h-16zm1.1-1.1c.8-1.4 2.2-2.2 4.1-2.3l.7-1.7h4.2l.7 1.7c1.8.1 3.3.9 4.1 2.3Z" />
            <path d="M235 26.7v-7.8h1v7.8zm0-8.9v-1.5h1v1.5zm0-2.8v-5h1v5z" />
          </g>
        </g>
      </svg>
    </CityIdentity>
  );
}
