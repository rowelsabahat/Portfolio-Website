import { credentials } from "../../data/education";
import styles from "./education.module.css";

export function Education() {
  return (
    <section
      className={styles.section} data-star-density=".60"
      id="education"
      aria-labelledby="education-title"
      tabIndex={-1}
    >
      <div className={styles.inner}>
        <header className={styles.heading} data-star-clear>
          <h2 id="education-title">My education</h2>
          <p className={styles.intro}>An overview of the degrees and certificates that have equipped me with the knowledge to excel as a professional.</p>
        </header>
        <ol className={styles.credentials} data-star-clear>
          {credentials.map(({ title, institution, field, start, end, website }) => (
            <li className={styles.credential} key={title}>
              <div>
                <p className={styles.label}>
                  {website ? <a href={website}>{institution}</a> : institution}
                </p>
                <h3>{title}</h3>
                {field && <p className={styles.field}>{field}</p>}
              </div>
              <div className={styles.detail}>
                <p>
                  <time dateTime={start.dateTime}>{start.label}</time>
                  {" – "}
                  <time dateTime={end.dateTime}>{end.label}</time>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
