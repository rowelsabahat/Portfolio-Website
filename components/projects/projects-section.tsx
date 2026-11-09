"use client";

import { useState } from "react";
import { projects, type PortfolioProject } from "../../data/projects";
import { OrthoVistaCover } from "./orthovista-cover";
import {
  BundleLabCover,
  InspireCover,
  ReadingCover,
  SepsiskillCover,
  SkeleTrackCover,
  SurgiCover,
} from "./reconstructed-covers";
import styles from "./projects-section.module.css";

const covers = {
  bundlelab: BundleLabCover,
  orthovista: OrthoVistaCover,
  reading: ReadingCover,
  surgicover: SurgiCover,
  inspireai: InspireCover,
  skeletrack: SkeleTrackCover,
  sepsiskill: SepsiskillCover,
} satisfies Record<PortfolioProject["id"], () => React.JSX.Element>;

function ProjectCard({
  project, expanded, onToggle,
}: {
  project: PortfolioProject;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { id, name, summary, category, dates, technologies, resources } = project;
  const Cover = covers[id];
  const panelId = `project-details-${id}`;

  return (
    <article className={id === "reading" ? styles.wide : undefined}>
      <div className={styles.coverControl}>
        <Cover />
        <button
          type="button"
          className={styles.toggle}
          aria-label={`${expanded ? "Hide" : "Show"} details for ${name}`}
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
      </div>
      <div id={panelId} className={styles.details} hidden={!expanded}>
        <h4>{name}</h4>
        <p className={styles.metadata}>
          {category}
          <span className={styles.dates}>{dates}</span>
        </p>
        <p>{summary}</p>
        <ul className={styles.technologies} aria-label="Technologies and disciplines">
          {technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <ul className={styles.resources} aria-label={`Resources for ${name}`}>
          {resources.map(({ label, url }) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label} <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const [openProject, setOpenProject] = useState<PortfolioProject["id"] | null>(null);

  function renderCard(project: PortfolioProject) {
    return (
      <ProjectCard
        key={project.id}
        project={project}
        expanded={openProject === project.id}
        onToggle={() => setOpenProject((current) => current === project.id ? null : project.id)}
      />
    );
  }

  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.label}>04 / Projects</p>
          <h2 id="projects-title">Selected projects.</h2>
          <p className={styles.intro}>A collection of ideas I&apos;ve built, tested, and explored.</p>
        </header>
        <div className={styles.gallery}>
          <div className={styles.grid}>{projects.slice(0, 3).map(renderCard)}</div>
          <div className={styles.supporting} role="group" aria-label="Supporting projects">
            <div className={styles.grid}>{projects.slice(3).map(renderCard)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
