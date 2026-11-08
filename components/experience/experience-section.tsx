import { readFileSync } from "node:fs";
import { join } from "node:path";
import { experiences } from "../../data/experience";
import { Experience } from "./experience";

export function ExperienceSection() {
  const artwork = experiences.map(({ logoFile }) => {
    const prefix = `experience-${logoFile}`;
    // These checked-in SVGs are trusted. Scope their IDs and typography to each logo.
    return readFileSync(join(process.cwd(), "assets", "experience", `${logoFile}.svg`), "utf8")
      .replace(/<svg /, `<svg data-logo="${logoFile}" `)
      .replace(/(id="|url\(#|aria-labelledby=")([\w-]+)/g, `$1${prefix}-$2`)
      .replace(/<style>([\s\S]*?)<\/style>/, (_, css: string) =>
        `<style>${css.replace(/(^|})(text|\.label)(?=\{)/g, `$1[data-logo="${logoFile}"] $2`)}</style>`,
      );
  });

  return <Experience artwork={artwork} />;
}
