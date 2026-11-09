import { notFound } from "next/navigation";
import { KarachiIdentity, OttawaIdentity, TorontoIdentity } from "../../../components/places/regional-identities";
import { VancouverIdentity } from "../../../components/places/vancouver-identity";
import styles from "./review.module.css";

export const dynamic = "force-dynamic";

const cities = [
  { name: "Ottawa", Identity: OttawaIdentity },
  { name: "Toronto", Identity: TorontoIdentity },
  { name: "Karachi", Identity: KarachiIdentity },
];

export default function PlacesDesignReview() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <main className={styles.review}>
      <p>05 / Places · Development review</p>
      <h1>City identities · Electric Retro</h1>
      <div className={styles.overview}>
        <section>
          <h3>Vancouver</h3>
          <VancouverIdentity />
        </section>
        {cities.map(({ name, Identity }) => (
          <section key={name}>
            <h3>{name}</h3>
            <Identity />
          </section>
        ))}
      </div>
      <section className={styles.details} aria-labelledby="palette-closeups">
        <h2 id="palette-closeups">Landmark close-ups</h2>
        <div className={styles.closeups}>
          {cities.map(({ name, Identity }) => (
            <section className={styles.closeup} key={name}>
              <h3>{name}</h3>
              <Identity />
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
