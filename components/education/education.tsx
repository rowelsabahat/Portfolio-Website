import { credentials } from "../../data/education";
import styles from "./education.module.css";

export function Education() {
  return (
    <section
      className={styles.section}
      id="education"
      aria-labelledby="education-title"
      tabIndex={-1}
    >
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.label}>02 / Education</p>
          <h2 id="education-title">The foundation behind the builder.</h2>
        </header>
        <ol className={styles.credentials}>
          {credentials.map(({ title, institution, field, completed, website }, index) => (
            <li className={styles.credential} key={title}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")} —
              </span>
              <div>
                <p className={styles.label}>{institution}</p>
                <h3>{title}</h3>
                {field && <p className={styles.field}>{field}</p>}
              </div>
              <div className={styles.detail}>
                <p>Completed <time dateTime={completed.dateTime}>{completed.label}</time></p>
                {website && (
                  <a href={website}>
                    {institution} website <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
