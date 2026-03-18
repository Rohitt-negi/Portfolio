"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        id="navbar"
      >
        <div className={styles.navContent}>
          <div
            className={styles.logo}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            &lt;RSN /&gt;
          </div>

          <div
            className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
