import { Starfield } from "./starfield";
import styles from "./page.module.css";
import { ContactSection } from "../components/contact/contact-section";
import { Education } from "../components/education/education";
import { ExperienceSection } from "../components/experience/experience-section";
import { Hero } from "../components/hero/hero";
import { SiteHeader } from "../components/navigation/site-header";
import { ProjectsSection } from "../components/projects/projects-section";
import { PlacesSection } from "../components/places/places-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home" tabIndex={-1}>
        <Hero />
        <div className={styles.starfield}>
          <Starfield />
          <Education />
          <ExperienceSection />
          <ProjectsSection />
          <PlacesSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
