import { Education } from "../components/education/education";
import { ExperienceSection } from "../components/experience/experience-section";
import { Hero } from "../components/hero/hero";
import { SiteHeader } from "../components/navigation/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home" tabIndex={-1}>
        <Hero />
        <Education />
        <ExperienceSection />
      </main>
    </>
  );
}
