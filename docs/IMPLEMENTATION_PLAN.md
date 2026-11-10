# Codex Implementation Plan — Rowel Portfolio

## Recommended baseline
Next.js App Router + TypeScript + Tailwind CSS. GSAP only where meaningful motion needs timelines; prefer CSS for simple transitions. SVG logo components, with static fallbacks. For maps, use a verified GeoJSON/TopoJSON country-boundary dataset and SVG projections (e.g. d3-geo). Avoid adding an interactive map provider unnecessarily. Use next/image for real imagery and avoid external API secrets. Deploy to Vercel or another Next.js host when approved.

## Milestones (independent checkpoints)

### Phase 0 — Bootstrap and repository policy
- Initialize Next.js TypeScript Tailwind app in fresh directory; create git repository.
- Copy DESIGN_BRIEF.md into `docs/` and AGENTS.md into the project root; create `assets/reference/` or `public/references/` for user-provided inspiration images, with descriptive filenames.
- Add content data placeholders in typed modules, component directories, `.gitignore`, README with run steps.
- Do not build the full page yet. Run lint and build. Commit a clean baseline.
- Deliverable: site runs locally with placeholder index and tokens; repository directions persistent.

### Phase 1 — Design system and hero
- Fonts, CSS variables, background scanline effect, navigation, hero layout, sunset motif, readable technical details.
- Build portrait integration with placeholder asset and configurable cropping; user photograph comes later.
- Desktop and mobile screenshot review at representative viewport sizes.
- Acceptance: hero echoes approved mockup; no obscured text; keyboard/mobile navigable.

### Phase 2 — Education
- Three restrained editorial entries with thin rules and whitespace.
- No animated giant logos, cards, or verbose archive UI.
- Acceptance: visibly calmer than hero and experience, correct credentials.

### Phase 3 — Experience
- First approve logo art direction for two very different organizations, before making seven.
- Implement scalable SVG identities; no need to mimic official logos exactly.
- Typed experience data: organization, role, timeframe (optional), bullets (optional), logo, verified link (optional).
- Accessible carousel: next/prev, keyboard, touch swipe, focus states, indicators; hover/tap detail reveal; CRT motion on interaction only.
- Acceptance: all seven represented, details remain accessible without hover, animations smooth.

### Phase 4 — Projects
- Art-directed large project panels with relevant images and text; project detail expansion or link decided at implementation review.
- Acceptance: expressive but readable with accurate project descriptions.

### Phase 5 — Geography
- Two responsive regional outline maps using real geographic border data with no default labels.
- Accurate markers for Vancouver, Ottawa, Toronto, Karachi; sufficiently large tap targets; map accessible through a synchronized list of city buttons.
- One large logo/story reveal panel controlled by active city, using retro custom SVG/logo artwork.
- For Karachi, explore skyline/harbour/landmark motifs and seek user review before final asset.
- No invented residence durations or emotional narratives.
- Acceptance: markers positioned correctly, focus/click/tap work, readable in mobile stacked layout.

### Phase 6 — Contact / polish / release
- Verified links only; mobile spacing; performance improvements; reduced-motion and accessibility validation; semantic tags and metadata; screenshots.
- Run lint, typecheck, production build, tests, and cross-width visual inspection.
- Provide deploy instructions; request approval before public deploy or connecting production domain.

## Recommended project layout
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  navigation/
  hero/
  education/
  experience/
  projects/
  places/
  contact/
  ui/
data/
  education.ts
  experience.ts
  projects.ts
  cities.ts
lib/
  maps/
public/
  portraits/
  logos/
  project-images/
  geo/
  references/
AGENTS.md
docs/
  DESIGN_BRIEF.md
  IMPLEMENTATION_PLAN.md
```
Use this as a target architecture, not a mandate to create empty files upfront.

## Content to collect before final release
Real portrait; final short biography and title; BSc field and degree dates as desired; certificate date if desired; employer roles, dates and blurbs for seven organizations; project screenshots/case studies; city dates/durations and reflections; contact/social URLs; logo approval and usage decisions.

## Definition of done per milestone
The UI renders, checks pass, screenshots are provided or a browser preview is verified, a summary of what changed is given, and the next phase is **not** started without approval.
