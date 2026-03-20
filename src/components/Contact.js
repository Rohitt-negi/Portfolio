"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";
import styles from "./Contact.module.css";

const EMAILJS_SERVICE_ID = "service_z0larpn";
const EMAILJS_TEMPLATE_ID = "template_37ijf0c";
const EMAILJS_PUBLIC_KEY = "7kO65wrN9A6BzTc2n";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "No Subject",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className={`section ${styles.contactSection}`} id="contact">
      <div className="bg-orb bg-orb-1" />
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Contact</p>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have a project in mind or want to collaborate? Let&apos;s connect!
            </p>
          </div>
        </ScrollReveal>

        <div className={styles.contactGrid}>
          <ScrollReveal delay={100}>
            <div className={styles.contactInfo}>
              <h3>
                Let&apos;s build something{" "}
                <span className="gradient-text">amazing</span> together
              </h3>
              <p>
                I&apos;m always open to discussing new opportunities, creative ideas, or
                chances to be a part of your vision. Feel free to reach out
                through any of the channels below.
              </p>

              <div className={styles.contactLinks}>
                <a
                  href="mailto:Rohitsingh19061@gmail.com"
                  className={styles.contactItem}
                >
                  <div className={styles.contactIcon}>✉️</div>
                  <div>
                    <div className={styles.contactLabel}>Email</div>
                    <div className={styles.contactValue}>
                      Rohitsingh19061@gmail.com
                    </div>
                  </div>
                </a>

                <a href="tel:+919528847191" className={styles.contactItem}>
                  <div className={styles.contactIcon}>📱</div>
                  <div>
                    <div className={styles.contactLabel}>Phone</div>
                    <div className={styles.contactValue}>+91-9528847191</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/rohit-negii07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <div className={styles.contactIcon}>💼</div>
                  <div>
                    <div className={styles.contactLabel}>LinkedIn</div>
                    <div className={styles.contactValue}>rohit-negii07</div>
                  </div>
                </a>

                <a
                  href="https://github.com/Rohitt-negi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <div className={styles.contactIcon}>🐙</div>
                  <div>
                    <div className={styles.contactLabel}>GitHub</div>
                    <div className={styles.contactValue}>Rohitt-negi</div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === "success" && (
                <div className={styles.statusMsg} style={{ color: "#00d4ff", marginBottom: 16 }}>
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className={styles.statusMsg} style={{ color: "#ff6b6b", marginBottom: 16 }}>
                  ❌ Failed to send. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
                style={status === "sending" ? { opacity: 0.7, cursor: "not-allowed" } : {}}
              >
                {status === "sending" ? "Sending..." : "Send Message ✨"}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
