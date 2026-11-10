"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";

const tones = [
  { color: "#f5e5bb", opacity: .19, radius: .65 },
  { color: "#f5e5bb", opacity: .31, radius: .9 },
  { color: "#e8c98b", opacity: .46, radius: 1.15 },
  { color: "#8ed3b9", opacity: .28, radius: .85 },
];

function seededRandom(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

export function Starfield() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current!;
    const host = svg.parentElement!;
    const exclusions = [...host.querySelectorAll("[data-star-clear]")];
    const sections = [...host.querySelectorAll("[data-star-density]")];
    const paths = [...svg.querySelectorAll("path")];
    let frame = 0;

    function draw() {
      const bounds = host.getBoundingClientRect();
      const width = bounds.width;
      const mobile = width < 640;
      const clear = exclusions.flatMap((element) =>
        [...element.getClientRects()].map((rect) => ({
          left: rect.left - bounds.left,
          right: rect.right - bounds.left,
          top: rect.top - bounds.top,
          bottom: rect.bottom - bounds.top,
        })),
      );
      const commands = tones.map(() => [] as string[]);
      const densityScale = mobile ? .65 : 1;

      sections.forEach((section, sectionIndex) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top - bounds.top;
        const density = Number(section.getAttribute("data-star-density"));
        const random = seededRandom(7319 + sectionIndex * 1709);
        const meanSpacing = 2500 / (width * density * densityScale);

        let localY = 0;
        while (true) {
          localY -= Math.log(1 - random()) * meanSpacing;
          if (localY >= rect.height) break;

          const x = random() * width;
          const y = top + localY;
          const toneRoll = random();
          const visibilityRoll = random();
          const drift = .66 + .18 * Math.sin(x / 149 + y / 237) + .12 * Math.cos(x / 81 - y / 127);
          const edge = Math.min(1, y / 90, (bounds.height - y) / 75);
          const distance = clear.reduce((nearest, box) => Math.min(nearest, Math.hypot(
            Math.max(box.left - x, x - box.right, 0),
            Math.max(box.top - y, y - box.bottom, 0),
          )), 28);

          if (visibilityRoll > drift * edge * Math.max(0, (distance - 5) / 23)) continue;

          const tone = toneRoll < .57 ? 0 : toneRoll < .89 ? 1 : toneRoll < .97 ? 2 : 3;
          const { radius } = tones[tone];
          commands[tone].push(
            `M${(x - radius).toFixed(1)} ${y.toFixed(1)}a${radius} ${radius} 0 1 0 ${2 * radius} 0a${radius} ${radius} 0 1 0 ${-2 * radius} 0z`,
          );
        }
      });

      paths.forEach((path, index) => path.setAttribute("d", commands[index].join("")));
    }

    function scheduleDraw() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    }

    const observer = new ResizeObserver(scheduleDraw);
    [host, ...sections, ...exclusions].forEach((element) => observer.observe(element));
    scheduleDraw();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <svg ref={svgRef} className={styles.stars} aria-hidden="true" focusable="false">
      {tones.map(({ color, opacity }, index) => (
        <path key={index} fill={color} opacity={opacity} />
      ))}
    </svg>
  );
}
