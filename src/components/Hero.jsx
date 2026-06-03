import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  const typingRef = useRef(null);
  const words = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);

      if (typingRef.current) {
        typingRef.current.textContent = currentChar;
      }

      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          charIndex++;
        } else {
          isDeleting = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        if (charIndex > 0) {
          charIndex--;
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      setTimeout(type, isDeleting ? 50 : 100);
    };

    type();
  }, []);

  const downloadResume = () => {
    // Replace with actual resume URL
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Prerna_Wagh_Resume.pdf";
    link.click();
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Prerna Wagh</span>
          </h1>

          <div className={styles.roleContainer}>
            <p className={styles.role}>
              I'm a{" "}
              <span className={styles.typing} ref={typingRef}>
                Frontend Developer
              </span>
              <span className={styles.cursor}></span>
            </p>
          </div>

          <p className={styles.description}>
            Passionate about creating beautiful, responsive, and user-friendly
            web applications. Specialized in React.js and modern web
            technologies.
          </p>

          <div className={styles.buttons}>
            <button className={styles.btnPrimary} onClick={downloadResume}>
              Download Resume
            </button>
            <a href="#contact" className={styles.btnSecondary}>
              Hire Me
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/waghprerna2002-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:prerna@email.com"
              className={styles.social}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default Hero;
