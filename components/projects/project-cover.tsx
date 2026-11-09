import type { CSSProperties, ReactNode } from "react";
import styles from "./project-cover.module.css";

type ProjectCoverProps = {
  title: ReactNode;
  subtitle: ReactNode;
  mark?: ReactNode;
  artwork: ReactNode;
  palette: CSSProperties;
};

export function ProjectCover({ title, subtitle, mark, artwork, palette }: ProjectCoverProps) {
  return (
    <figure className={styles.cover} style={palette}>
      <div className={styles.artwork}>{artwork}</div>
      <figcaption className={styles.caption}>
        <h3 className={styles.title}>
          {mark && <span className={styles.mark} aria-hidden="true">{mark}</span>}
          <span>{title}</span>
        </h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </figcaption>
      <svg className={styles.frame} viewBox="0 0 1000 393" preserveAspectRatio="none" aria-hidden="true">
        <path d="M57 31H943L973 61V326L943 357H57L28 326V61Z" />
      </svg>
    </figure>
  );
}
