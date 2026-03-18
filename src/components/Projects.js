import ScrollReveal from "./ScrollReveal";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    icon: "🌍",
    title: "AI Travel Translator",
    description:
      "A desktop-based language translator application built to aid travelers in language communication. Supports translation of user-input and preset travel phrases into 100+ languages with a custom UI.",
    tech: ["Python", "Tkinter/ttk", "googletrans API", "Scikit-learn", "Pandas"],
    github: "https://github.com/Rohitt-negi",
    date: "Feb 2025 — Apr 2025",
  },
  {
    icon: "📊",
    title: "Real-Time Process Monitoring Dashboard",
    description:
      "A real-time system monitoring tool for tracking CPU usage, active processes, and system performance. Enables users to monitor resource consumption and identify top processes in real time.",
    tech: ["Python", "psutil", "datetime", "os", "time"],
    github: "https://github.com/Rohitt-negi",
    date: "Oct 2024 — Dec 2024",
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ position: "relative" }}>
      <div className="bg-orb bg-orb-2" />
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Projects</p>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              Real-world applications I&apos;ve built from scratch
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 150}>
              <div className={styles.projectCard}>
                <div className={styles.projectImage}>{project.icon}</div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <div className={styles.projectLinks}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      ⭐ GitHub
                    </a>
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
