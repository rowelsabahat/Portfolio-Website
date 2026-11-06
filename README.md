# Portfolio Codex Kickoff Pack

Start by copying `DESIGN_BRIEF.md`, `IMPLEMENTATION_PLAN.md`, `AGENTS.md`, and `CODEX_PROMPTS.md` into your Codex project's folder. Keep the latest approved vertical mockup and inspiration files in the local `design references/` directory. Then send **Prompt A** from `CODEX_PROMPTS.md`.

Do not run all prompts at once. Review each milestone's visual output and ask Codex for tweaks before advancing.

The provided pack documents the approved creative vision and staged implementation workflow; it is not the implementation itself.

## Local development

Phase 0 provides a placeholder homepage and the design foundation. Use Node.js
20.9 or later and npm.

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The App Router, site metadata, and global styles live in `app/`. Reusable
components live in `components/`, and typed site content lives in `data/`.
The original inspiration files live in `design references/`, outside the public
asset directory. Git ignores the entire directory, including all still images
and recordings.
