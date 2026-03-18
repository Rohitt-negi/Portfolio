import ScrollReveal from "./ScrollReveal";
import styles from "./Experience.module.css";

const EXPERIENCES = [
  {
    title: "AI Intern",
    company: "InternsElite",
    date: "Dec 2023 — Mar 2024",
    type: "Internship",
    points: [
      "Enhanced AI-driven automation and improved internal prediction workflows",
      "Developed ML workflows involving feature engineering, preprocessing, and model tuning",
      "Improved prediction accuracy and stability for internal business workflows",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "C#", ".NET", "React.js", "Redux"],
  },
  {
    title: "ML Training — Basic to Advanced",
    company: "Certification Program",
    date: "Jun 2025 — Jul 2025",
    type: "Training",
    points: [
      "Gained understanding of core ML algorithms — supervised & unsupervised learning, classification, regression",
      "Built end-to-end ML pipelines including data cleaning, feature engineering, model building, and evaluation",
      "Proficient in Python ML libraries and data handling for real-world tasks",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ position: "relative" }}>
      <div className="bg-orb bg-orb-1" />
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Work & Training</h2>
            <p className="section-subtitle">
              Professional experience and specialized training
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.timeline}>
          {EXPERIENCES.map((exp, i) => (
            <ScrollReveal key={exp.title} delay={i * 150}>
              <div className={styles.timelineItem}>
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.timelineTitle}>{exp.title}</h3>
                    <span className={styles.timelineDate}>
                      📅 {exp.date}
                    </span>
                  </div>
                  <p className={styles.timelineCompany}>
                    {exp.company} · {exp.type}
                  </p>
                  <ul className={styles.timelinePoints}>
                    {exp.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  <div className={styles.techStack}>
                    {exp.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
