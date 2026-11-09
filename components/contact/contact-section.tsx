import { site } from "../../data/site";
import { RetroEarth } from "./retro-earth";
import styles from "./contact.module.css";

const links = [
  { label: "Email", href: "mailto:rowelsyedsabahat@gmail.com", path: "M3 5h18v14H3zM3 6l9 7 9-7", external: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rowel-sabahat", path: "M5 9v11m0-16v2m6 14V9m0 4c0-5 8-5 8 0v7", external: true },
  { label: "GitHub", href: "https://github.com/rowelsabahat", path: "M9 21c-4 1-4-2-6-2m15 2v-3c0-1-.4-2-1-2 3-.4 5-1.5 5-5 0-1.5-.5-2.6-1.5-3.6.2-1 .1-2-.4-3-2 0-3 1-3.5 1.4a13 13 0 0 0-7 0C9 5.4 8 4.4 6 4.4c-.5 1-.6 2-.4 3C4.5 8.4 4 9.5 4 11c0 3.5 2 4.6 5 5-.6.5-1 1-1 2v3", external: true },
] as const;

export function ContactSection({ preview = false }: { preview?: boolean }) {
  const headingId = preview ? undefined : "contact-title";

  return (
    <div className={styles.closing}>
      <section id={preview ? undefined : "contact"} className={styles.contact}
        aria-labelledby={headingId} aria-label={preview ? "Contact preview" : undefined}>
        <div className={styles.inner}>
          <div>
            <p className={styles.label}>06 / Contact</p>
            <h2 id={headingId}>Let&apos;s<br />Connect.</h2>
          </div>
          <div className={styles.details}>
            <p>I&apos;m always up for a conversation about innovation, ideas, and what&apos;s next.</p>
            <ul className={styles.links}>
              {links.map(({ label, href, path, external }) => (
                <li key={label}>
                  <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor"
                      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.earth}><RetroEarth /></div>
      </section>
      {!preview && <SiteFooter />}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
