import { Education } from "../components/education/education";
import { Experience } from "../components/experience/experience";
import { Hero } from "../components/hero/hero";
import { SiteHeader } from "../components/navigation/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home" tabIndex={-1}>
        <Hero />
        <Education />
        <Experience />
      </main>
    </>
  );
}
