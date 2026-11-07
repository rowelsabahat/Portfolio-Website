"use client";

import { useRef, useState } from "react";
import { site } from "../../data/site";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen && menuButton.current?.getClientRects().length) {
          setMenuOpen(false);
          menuButton.current.focus();
        }
      }}
    >
      <a className="skip-link" href="#home">Skip to content</a>
      <a className="site-brand" href="#home">
        <span className="site-monogram" aria-hidden="true">RS</span>
        <span>{site.name}</span>
      </a>
      <button
        ref={menuButton}
        type="button"
        className="site-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
          <path d={menuOpen ? "M5 5l10 10M15 5 5 15" : "M2 5h16M2 10h16M2 15h16"} />
        </svg>
        Menu
      </button>
      <nav id="primary-navigation" aria-label="Primary" data-open={menuOpen}>
        <ul className="site-nav">
          {site.navigation.map(({ label, id, available }) => (
            <li key={id}>
              {available ? (
                <a href={`#${id}`} onClick={() => setMenuOpen(false)} aria-current={id === "home" ? "location" : undefined}>
                  {label}
                </a>
              ) : (
                <span className="site-nav-planned">
                  {label}<span className="sr-only"> (planned)</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <span className="signal-bars" aria-hidden="true" />
    </header>
  );
}
