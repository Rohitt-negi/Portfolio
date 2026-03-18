import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Who I Am</h2>
            <p className="section-subtitle">
              A passionate developer turning ideas into intelligent solutions
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.aboutGrid}>
          <ScrollReveal delay={100}>
            <div className={styles.aboutImageWrapper}>
              <div className={styles.aboutImage}>
                <Image
                  src="/profile.jpg"
                  alt="Rohit Singh Negi"
                  width={420}
                  height={420}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>
              <div className={styles.decorSquare} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.aboutContent}>
              <h3>
                Crafting <span className="gradient-text">Intelligent</span>{" "}
                Solutions
              </h3>
              <div className={styles.aboutText}>
                <p>
                  I&apos;m Rohit Singh Negi, a B.Tech Computer Science student at
                  Lovely Professional University with a deep passion for
                  Artificial Intelligence and Machine Learning. I thrive on
                  solving complex problems and building systems that make a
                  difference.
                </p>
                <p>
                  With 500+ DSA problems solved across LeetCode, Neocolab, and
                  Codeforces, I&apos;ve built a strong algorithmic foundation. My
                  experience spans from AI-driven automation during my
                  internship to building real-world tools like language
                  translators and system monitoring dashboards.
                </p>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🎓</div>
                  <div>
                    <div className={styles.infoLabel}>Degree</div>
                    <div className={styles.infoValue}>B.Tech CSE</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <div className={styles.infoLabel}>Location</div>
                    <div className={styles.infoValue}>Punjab, India</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>💼</div>
                  <div>
                    <div className={styles.infoLabel}>Focus</div>
                    <div className={styles.infoValue}>AI / ML</div>
                  </div>
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🏆</div>
                  <div>
                    <div className={styles.infoLabel}>DSA Solved</div>
                    <div className={styles.infoValue}>500+</div>
                  </div>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary">
                Let&apos;s Connect
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
