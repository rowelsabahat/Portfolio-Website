import { readFile } from "node:fs/promises";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactSection } from "../../../components/contact/contact-section";
import { RetroEarth } from "../../../components/contact/retro-earth";
import styles from "./review.module.css";

export const dynamic = "force-dynamic";

export default async function ContactDesignReview() {
  if (process.env.NODE_ENV !== "development") notFound();

  const mockup = await readFile(join(process.cwd(), "design references", "approved design", "Full portfolio mock up.png"));

  return (
    <main className={styles.review}>
      <h1>Contact design review</h1>
      <p><Link href="/#contact">View Contact on the homepage ↗</Link></p>
      <div className={styles.comparison}>
        <section>
          <h2>Approved reference</h2>
          <div className={styles.crop}>
            <Image src={`data:image/png;base64,${mockup.toString("base64")}`}
              alt="Approved Contact mockup with cream typography and a cropped halftone Earth"
              width={1024} height={1536} unoptimized />
          </div>
        </section>
        <section>
          <h2>Native reconstruction</h2>
          <div className={styles.reconstruction}><ContactSection preview /></div>
        </section>
      </div>
      <section><h2>Desktop preview</h2><ContactSection preview /></section>
      <section className={styles.tablet}><h2>Tablet preview</h2><ContactSection preview /></section>
      <section className={styles.mobile}><h2>Mobile preview</h2><ContactSection preview /></section>
      <section className={styles.earth}><h2>Earth close-up</h2><RetroEarth /></section>
    </main>
  );
}
