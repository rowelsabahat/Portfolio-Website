# Rowel Sabahat — Portfolio Design Brief

Status: approved direction, implementation specification v1 (November 2026)

## Goal
Create an expressive, single-page, vertically scrolling personal portfolio: a distinctive 1980s retro-tech visual identity combined with the editorial story flow of a contemporary creative portfolio. The design must feel curated and personal, not like a typical SaaS dashboard or minimalist product manager portfolio.

## Source of truth
The **latest approved vertical mockup** is the primary visual target. The earliest Elian Ross reference informs long-scroll layout, prominent integrated portrait, and varied section compositions; do NOT cover hero text with the portrait. The logo references inform 1980s Japanese electronics-inspired geometric brand design and analog display textures, **not** Japanese script. The city references inform retro landmark-based identities. If a reference conflicts with this brief, prioritize the explicit decisions here.

## Visual rules
- Background: near-black charcoal (#0B0D0F), not pure flat black everywhere.
- Primary accent: luminous mint/green (#37EBA5); cyan accent (#3AE0DF), cream for large text (#F5E5BB); selective warm coral/red (#F25B57) and yellow (#F1C94E).
- Bold geometric display type for headlines, restrained readable type for paragraphs, subtle monospace for technical labels. Pick licensed/web-available fonts that capture the feeling, but never sacrifice readability.
- Large typography, considered whitespace, asymmetrical editorial compositions, sections differentiated by scale and layout.
- CRT/analog design cues: fine scanlines, occasional grain, slight chromatic separation, stepped bands; subtle application for paragraphs and interactive controls.
- No Japanese lettering. No synthwave purple clichés, overwhelming neon glows, generic UI cards, fake console commands, fake claims, or every-section boxed dashboard framing.
- On small screens maintain hierarchy and meaningful interactions; never hide important content behind hover-only controls.
- Provide reduced-motion styles, accessible focus states, contrast checks, and keyboard navigation.

## Global page structure
1. Hero / personal introduction: oversized ROWEL SABAHAT, role/title, intro, main portrait integrated with striped sunset motif, retro technical accents, prominent scroll action. Photo must never obscure text. User-supplied portrait required for final implementation; use clearly marked placeholder until provided. Avoid assuming gender or using an AI-generated person as user identity.
2. Education: **calm, typographic, editorial** — three entries, generous whitespace, thin dividers, restrained accents, no big institution logos or card-heavy graphic effects. Credentials: Master of Engineering in Biomedical Engineering — University of British Columbia; Bachelor of Science — University of British Columbia; Certificate in AI Product Management — Co.Lab (https://www.joincolab.io/). Completion date for master's: 2026. Other dates unconfirmed; do not fabricate.
3. Experience: large carousel that users can navigate by arrow buttons, swipe, keyboard; seven organizations: Royal Bank of Canada (RBC); BlackBerry QNX; UBC Medicine; AMS UBC; Herbaland Naturals Inc.; UBC Department of Biochemistry and Molecular Biology; Richmond Public Library. Each should have a bespoke, retro-inspired identity, recognizable name, role and factual description. Hover may trigger CRT glitch/reveal or SVG shape assembly; click/tap opens or expands details. Animation is triggered and measured, not incessant. Separate creative reinterpretations from official company marks.
4. Projects: spacious, visually expressive cards/art direction and deeper content when opened. Potential user-confirmed projects include BundleLab and OrthoVISTA. Content and imagery need final review. No fabricated performance metrics or timelines.
5. Places I've lived: North America panel and South Asia panel with *only country borders*, no default city/country names and no conventional map labels. Mark Vancouver, Ottawa, Toronto, Karachi with correct geographic coordinates. Focus the panels so marks are actually distinguishable (Toronto/Ottawa are close; provide accessible alternative labels or zoom/inset as needed). Hover/focus/click on a marker reveals a **large prominent retro city logo + short personal story**, not a narrow strip of static city cards. Vancouver logo: mountains, skyline, sun; Ottawa: Parliament clock tower; Toronto: CN Tower/cityscape/maple-leaf motif; Karachi: ideate a landmark/harbour identity in same family, culturally informed and not a generic copy. User to provide durations and personal blurbs; don't invent.
6. Contact: uncluttered closing with verified user-provided email, LinkedIn, GitHub; no fake addresses or profile links.

## Layout rhythm
Expressive hero → restful education → immersive experience → expressive projects → interactive geography → quiet contact. Each section has unique composition, no uniform alternating rows of cards. Favor long vertical story flow over fitting everything above the fold.

## Motion guidelines
- UI reveal at key interactions; modest scroll-triggered movement and few well-timed transitions.
- SVG marks are favored for scalable, controllable animations.
- If hover-dependent on desktop, provide tap/click and focus equivalents.
- `prefers-reduced-motion` must disable decorative movement.
- CRT noise/scanlines should not reduce paragraph legibility or cause flashing risks.

## Content verification policy
Treat all images, citations, school/company logos, durations, education years, jobs, claims and project metrics as user-provided or explicitly verified content. Use placeholders when unconfirmed. The visual mockup contains illustrative text, an illustrative portrait, and example locations/labels; it is not evidence for biographies or dates. The mockup contains '2025' in the interface, but the actual portfolio year must not be frozen as 2025; use a dynamic year or approved text.

## First review acceptance criteria
- Header and hero match the approved mockup's *composition* on desktop, with text never covered by the portrait.
- The Education section visibly decreases density and decoration.
- The carousel is a **dedicated experience module**, not a small homepage summary.
- The geography section is based on geographic outlines and correct city positions; large logo reveal on marker interaction.
- Responsive and accessible baseline established before animation polish.
