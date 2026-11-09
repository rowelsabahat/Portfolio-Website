import type { ReactNode } from "react";
import styles from "./city-identity.module.css";

export type CityIdentityDetails = {
  name: string;
  country: string;
  story?: string;
  duration?: string;
};

export function CityIdentity({ details, children }: {
  details: CityIdentityDetails;
  children: ReactNode;
}) {
  return (
    <figure className={styles.identity}>
      <figcaption className={styles.mark}>
        {children}
        <span className={styles.caption}>
          <span className={styles.name}>{details.name}</span>
          <span className={styles.country}>{details.country}</span>
        </span>
        {details.story && <span>{details.story}</span>}
        {details.duration && <span>{details.duration}</span>}
      </figcaption>
    </figure>
  );
}
