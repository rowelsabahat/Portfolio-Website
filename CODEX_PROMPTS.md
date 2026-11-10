# Codex Prompts — Run one at a time

## Prompt A: Bootstrap, do not implement the whole site

Read `docs/DESIGN_BRIEF.md`, `docs/IMPLEMENTATION_PLAN.md`, and `AGENTS.md`. Treat the latest approved vertical mockup and the reference images as visual direction. We are at **Phase 0 only**.

1. Inspect the current directory and report whether it is empty or already contains a project.
2. If empty, initialize a Next.js App Router project with TypeScript and Tailwind CSS. If it already contains a project, adapt it rather than overwriting it.
3. Set up semantic component/data folder conventions, design colour variables, baseline fonts, a minimal placeholder page, metadata, and a working development environment.
4. Do not generate the hero/experience/map yet. Do not fabricate content.
5. Run available lint/build checks, fix errors, and report how to start the local server.
6. Show a concise list of changed files and any decisions needing my approval.

Stop after Phase 0 and wait for my review.

## Prompt B: Hero implementation

Read the project brief and plan. Implement **Phase 1 only**, specifically the hero and navigation to match the approved screenshot's composition: oversized ROWEL SABAHAT left, an independent right portrait placement (placeholder until I provide a photograph), bold geometric typography, horizontal striped sunset, fine scanline texture, minimal technical accents, dark background, clear scroll CTA. No Japanese text, no portrait covering type, no overgrown dashboard UI.

Make it responsive and keyboard accessible. If a local browser/screenshot tool exists, capture desktop and mobile results and compare against the approved reference. Run checks; explain the mismatches and decisions. Stop before Education.

## Prompt C: Education implementation

Read the brief. Implement **Phase 2 only** with deliberately quiet typography and generous spacing. Content: UBC Master of Engineering (Biomedical Engineering), UBC Bachelor of Science, Co.Lab Certificate in AI Product Management. Confirmed master's completion: 2026. Do not infer other dates or degree specializations. No logo-heavy archive cards. Preserve retro system through fonts and thin dividers. Verify responsive design, report checks, and stop.

## Prompt D: Experience, first two logos only

Read the brief. Before building the whole carousel, develop two contrasting retro logo concepts for RBC and BlackBerry QNX using editable SVG-based shapes and legible company names. Capture visual previews. They're creative reinterpretations, not official marks. Use our 1980s Japanese electronics branding references for geometry, typography, and analog screen textures, without Japanese lettering. Do not implement remaining logos until I approve the visual language.

## Prompt E: Experience carousel

Read the brief and approved logo concepts. Implement Phase 3: all seven organizations, accessible carousel controls, touch swipe and keyboard support, distinct logo assets, clickable/tappable details, restrained hover/reveal animation with reduced-motion fallback. Do not invent job dates or descriptions. Validate in browser and stop after review.

## Prompt F: Projects

Read the brief and implement Phase 4 only: large visual project cases, starting with confirmed projects BundleLab and OrthoVISTA, with placeholders for imagery and missing factual copy. Avoid small generic SaaS cards; use bespoke artwork, generous spacing, and responsive layout. Run checks, report, stop.

## Prompt G: Geography

Read the brief and implement Phase 5: two side-by-side regional country-outline maps (North America and South Asia), correctly projected cities Vancouver, Ottawa, Toronto, Karachi. Remove all default geographic labels; choose region framing deliberately. Selecting a marker by click/tap/focus reveals a large, prominent retro city-logo panel and a placeholder for personal story/duration. The Vancouver, Ottawa and Toronto logos reference the approved landmark motifs; design a Karachi motif for approval. Ensure Toronto and Ottawa can be selected separately. Include an accessible list fallback and reduced-motion support. Verify geographical accuracy and screenshot result. Stop after review.

## Prompt H: Final polish

Read the plan and review the site end-to-end. Complete Contact section with user-verified URLs only, improve mobile spacing, accessibility, metadata, loading, performance, and reduced-motion, and run checks/build. Provide a validation checklist, known issues, and deployment proposal. Do not publish until approved.
