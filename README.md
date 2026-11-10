# Rowel Sabahat’s Portfolio

my portfolio website :^)

## Project documentation

- [Design brief](docs/DESIGN_BRIEF.md)
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
- [Project instructions](AGENTS.md)
- [Codex prompts](CODEX_PROMPTS.md)

## Local development

Use Node.js 20.9 or later and npm.

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
