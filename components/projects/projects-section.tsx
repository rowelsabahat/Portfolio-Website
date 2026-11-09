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

export function ProjectsSection() {
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.label}>04 / Projects</p>
          <h2 id="projects-title">Selected projects.</h2>
          <p className={styles.intro}>A collection of ideas I&apos;ve built, tested, and explored.</p>
        </header>
        <div className={styles.gallery}>
          <div className={styles.grid}>
            <article><BundleLabCover /></article>
            <article><OrthoVistaCover /></article>
            <article className={styles.wide}><ReadingCover /></article>
          </div>
          <div className={styles.supporting} role="group" aria-labelledby="supporting-label">
            <p id="supporting-label" className={styles.label}>Supporting projects</p>
            <div className={styles.grid}>
              <article><SurgiCover /></article>
              <article><InspireCover /></article>
              <article><SkeleTrackCover /></article>
              <article><SepsiskillCover /></article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
