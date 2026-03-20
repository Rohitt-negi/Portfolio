"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const ROLES = [
  "AI/ML Developer",
  "Software Engineer",
  "Competitive Programmer",
  "Full Stack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentRole.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  // Generate particles only on client to avoid hydration mismatch
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${10 + Math.random() * 20}s`,
        size: `${1 + Math.random() * 3}px`,
      }))
    );
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />

      <div className={styles.particles}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: p.left,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>👋 Hello, I&apos;m</p>
          <h1 className={styles.name}>
            Rohit Singh <span className="gradient-text">Negi</span>
          </h1>
          <div className={styles.roleWrapper}>
            <span>I&apos;m a </span>
            <span className={styles.typedRole}>
              {displayText}
              <span className={styles.cursor} />
            </span>
          </div>
          <p className={styles.heroDescription}>
            Passionate about building intelligent systems and solving complex
            problems. B.Tech CSE student with expertise in AI/ML, competitive
            programming, and full-stack development.
          </p>
          <div className={styles.heroButtons}>
            <a href="#contact" className="btn btn-primary">
              <span>✉</span> Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              <span>⚡</span> View Projects
            </a>
            <a href="/Rohit_CV.pdf" download className="btn btn-outline">
              <span>📄</span> Download CV
            </a>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>DSA Problems</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>5+</div>
              <div className={styles.statLabel}>Projects</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>7.5</div>
              <div className={styles.statLabel}>CGPA</div>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatarInner}>
              <Image
                src="/profile.jpg"
                alt="Rohit Singh Negi"
                width={320}
                height={320}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
              />
            </div>
            <div className={styles.orbitRing}>
              <div className={styles.orbitDot} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot} />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
