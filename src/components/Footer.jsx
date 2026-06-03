import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/waghprerna2002-dev",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: FaEnvelope,
      url: "mailto:prerna@email.com",
      label: "Email",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Prerna Wagh</h3>
            <p>Senior Frontend Developer | React Specialist</p>
          </div>

          <div className={styles.section}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Connect</h4>
            <div className={styles.socials}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; 2026 Prerna Wagh. All rights reserved.</p>
          <button
            className={styles.topBtn}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
