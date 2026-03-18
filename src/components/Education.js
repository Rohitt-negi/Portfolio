import ScrollReveal from "./ScrollReveal";
import styles from "./Education.module.css";

const EDUCATION = [
  {
    icon: "🎓",
    degree: "B.Tech — Computer Science & Engineering",
    school: "Lovely Professional University",
    location: "Punjab, India",
    date: "Aug 2023 — Present",
    score: "CGPA: 7.5",
  },
  {
    icon: "🏫",
    degree: "Intermediate (12th)",
    school: "Army Public School No.2",
    location: "Roorkee, Haridwar",
    date: "Apr 2022 — Mar 2023",
    score: "70%",
  },
  {
    icon: "📚",
    degree: "Matriculation (10th)",
    school: "Army Public School No.2",
    location: "Roorkee, Haridwar",
    date: "Apr 2020 — Mar 2021",
    score: "80%",
  },
];

const CERTIFICATES = [
  {
    icon: "🧑‍💻",
    name: "Introduction to Software Engineering",
    date: "March 2026",
  },
  {
    icon: "🤖",
    name: "ChatGPT-4 Prompt Engineering & Generative AI",
    date: "Sep 2025",
  },
  {
    icon: "🧠",
    name: "Artificial Intelligence Course — MyCaptain",
    date: "Dec 2024",
  },
];

export default function Education() {
  return (
    <>
      <section className="section" id="education">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Education</p>
              <h2 className="section-title">Academic Background</h2>
              <p className="section-subtitle">
                My educational journey and qualifications
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.educationGrid}>
            {EDUCATION.map((edu, i) => (
              <ScrollReveal key={edu.degree} delay={i * 100}>
                <div className={styles.eduCard}>
                  <div className={styles.eduIcon}>{edu.icon}</div>
                  <h3 className={styles.eduDegree}>{edu.degree}</h3>
                  <p className={styles.eduSchool}>{edu.school}</p>
                  <p className={styles.eduLocation}>📍 {edu.location}</p>
                  <div className={styles.eduMeta}>
                    <span className={styles.eduDate}>📅 {edu.date}</span>
                    <span className={styles.eduScore}>{edu.score}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="certificates">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <p className="section-label">Certifications</p>
              <h2 className="section-title">Certificates & Achievements</h2>
              <p className="section-subtitle">
                Recognized learning milestones and accomplishments
              </p>
            </div>
          </ScrollReveal>

          <div className={styles.certGrid}>
            {CERTIFICATES.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={i * 100}>
                <div className={styles.certCard}>
                  <div className={styles.certIcon}>{cert.icon}</div>
                  <div>
                    <p className={styles.certName}>{cert.name}</p>
                    <p className={styles.certDate}>{cert.date}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
