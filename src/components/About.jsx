import React, { useRef } from "react";
import styles from "./About.module.css";

const About = () => {
  const ref = useRef(null);

  const stats = [
    { label: "Years Learning", value: "Fresher" },
    { label: "Projects", value: "5+" },
    
  ];

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imageBox}>
              <div className={styles.imagePlaceholder}>
                <span>Profile Image</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.bio}>
              <h3>Hello! I'm Prerna Wagh</h3>
              <p>
                I'm a passionate Frontend Developer with expertise in
                building modern, responsive, and user-friendly web applications.
                With a strong foundation in React.js and modern JavaScript, I
                specialize in creating beautiful interfaces that combine
                functionality with aesthetics.
              </p>
              <p>
                My journey in web development started with a curiosity to create
                interactive web experiences. Over the years, I've honed my
                skills in frontend technologies and best practices, enabling me
                to deliver production-ready code that stands the test of time.
              </p>
            </div>

            <div className={styles.education}>
              <h3>Education & Certifications</h3>
              <ul>
                <li>Google Cyber Security Certification</li>
                <li>Software Testing QA Certification</li>
                <li>Web Development Internship Certificate</li>
              </ul>
            </div>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
