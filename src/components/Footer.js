import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>&lt;RSN /&gt;</div>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Rohit Singh Negi. Built with ❤️ and
          Next.js
        </p>
        <div className={styles.footerSocials}>
          <a
            href="https://linkedin.com/in/rohit-negii07"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            💼
          </a>
          <a
            href="https://github.com/Rohitt-negi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            🐙
          </a>
          <a
            href="mailto:Rohitsingh19061@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            ✉️
          </a>
        </div>
      </div>
    </footer>
  );
}
