"use client";

import { useState } from "react";
import { cities, type PlaceRegion } from "../../data/cities";
import maps from "../../data/place-outlines.json";
import styles from "./places-section.module.css";

const regions: readonly { id: PlaceRegion; name: string }[] = [
  { id: "northAmerica", name: "North America" },
  { id: "southAsia", name: "South Asia" },
];

const mapWidth = 420;
const mapHeight = 270;

// Keep the geographic dots fixed. Move only the nearby eastern controls.
const leaderOffsets: Readonly<Record<string, number>> = { ottawa: -40, toronto: 40 };

export function PlacesSection() {
  const [{ selected, previous, revision }, setSelection] = useState({
    selected: cities[0],
    previous: null as (typeof cities)[number] | null,
    revision: 0,
  });
  const { Identity } = selected;
  const PreviousIdentity = previous?.Identity;

  function selectCity(city: (typeof cities)[number]) {
    setSelection((current) => current.selected.id === city.id ? current : {
      selected: city,
      previous: current.selected,
      revision: current.revision + 1,
    });
  }

  return (
    <section id="places" className={styles.section} aria-labelledby="places-title">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.label}>05 / Places</p>
          <h2 id="places-title">Places I&apos;ve called home.</h2>
          <p className={styles.intro}>Four cities, different chapters, and the experiences that shaped my perspective.</p>
        </header>
        <div className={styles.content}>
          <div>
            <div className={styles.maps}>
              {regions.map(({ id, name }) => {
                // Natural Earth Admin 0 countries, 1:110m, version 5.1.1.
                // Outlines and markers use the same regional lon/lat projection.
                const { bounds, outlines } = maps[id];
                const markers = cities.filter((city) => city.region === id).map((city) => {
                  const { latitude, longitude } = city.coordinates;
                  const x = (longitude - bounds.west) / (bounds.east - bounds.west) * mapWidth;
                  const y = (bounds.north - latitude) / (bounds.north - bounds.south) * mapHeight;
                  return { city, x, y, controlY: y + (leaderOffsets[city.id] ?? 0) };
                });

                return (
                  <section key={id} className={styles.region} aria-labelledby={`places-${id}`}>
                    <h3 id={`places-${id}`}>{name}</h3>
                    <div className={styles.map}>
                      <svg viewBox={`0 0 ${mapWidth} ${mapHeight}`} aria-hidden="true">
                        <g className={styles.outlines}>
                          {outlines.map((path, index) => <path key={index} d={path} />)}
                        </g>
                        {markers.map(({ city, x, y, controlY }) => (
                          <g key={city.id} className={styles.pin} data-selected={selected.id === city.id}>
                            {y !== controlY && <path d={`M${x},${y}V${controlY}`} />}
                            <circle cx={x} cy={y} r="4" />
                          </g>
                        ))}
                      </svg>
                      {markers.map(({ city, x, controlY }) => (
                        <button key={city.id} type="button" className={styles.marker}
                          style={{ left: `${x / mapWidth * 100}%`, top: `${controlY / mapHeight * 100}%` }}
                          aria-label={`${city.name}, ${city.country} map marker`}
                          title={city.name} aria-pressed={selected.id === city.id}
                          aria-controls="places-reveal" onClick={() => selectCity(city)}>
                          <span aria-hidden="true" data-illuminate={revision > 0 && selected.id === city.id} />
                        </button>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
            <div className={styles.selectors} role="group" aria-label="Choose a city">
              {cities.map((city) => (
                <button key={city.id} type="button" aria-pressed={selected.id === city.id}
                  aria-controls="places-reveal" onClick={() => selectCity(city)}>
                  {city.name}
                </button>
              ))}
            </div>
          </div>
          <div id="places-reveal" className={styles.reveal}>
            <p className="sr-only" role="status">{selected.name}, {selected.country} selected</p>
            <div className={styles.artwork} key={revision} data-transition={revision > 0}>
              {PreviousIdentity && (
                <div className={styles.outgoing} aria-hidden="true">
                  <PreviousIdentity />
                  {previous?.description && <p className={styles.description}>{previous.description}</p>}
                </div>
              )}
              <div className={styles.incoming}>
                <Identity />
                <div className={styles.description}>
                  {cities.map((city) => city.description && (
                    <p key={city.id} data-inactive={city.id !== selected.id}>
                      {city.description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {selected.residencePeriod && <p className={styles.description}>{selected.residencePeriod}</p>}
            {selected.highlights && <ul className={styles.description}>
              {selected.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>}
          </div>
        </div>
      </div>
    </section>
  );
}
