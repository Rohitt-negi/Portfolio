import ScrollReveal from "./ScrollReveal";
import styles from "./Skills.module.css";

const SKILLS = [
  {
    icon: "💻",
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript"],
  },
  {
    icon: "🧠",
    category: "AI/ML Frameworks",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Transformers",
      "spaCy",
    ],
  },
  {
    icon: "🛠️",
    category: "Tools & Databases",
    items: ["Git", "GitHub", "Docker", "Kubernetes", "MySQL", "MongoDB"],
  },
  {
    icon: "🤝",
    category: "Soft Skills",
    items: [
      "Problem-Solving",
      "Analytical Thinking",
      "Team Collaboration",
      "Communication",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Skills</p>
            <h2 className="section-title">My Tech Stack</h2>
            <p className="section-subtitle">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.skillsGrid}>
          {SKILLS.map((skill, i) => (
            <ScrollReveal key={skill.category} delay={i * 100}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h3 className={styles.skillCategory}>{skill.category}</h3>
                <div className={styles.skillList}>
                  {skill.items.map((item) => (
                    <span key={item} className={styles.skillTag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
