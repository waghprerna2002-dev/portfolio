import React, { useRef } from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  const ref = useRef(null);

  const experiences = [
    {
      company: "Sachitech Institute",
      role: "Web Development Intern",
      duration: "Dec 2023 - Feb 2024",
      description: [
        "Developed responsive web applications using React.js",
        "Worked on frontend UI components and design implementation",
        "Integrated backend APIs with frontend interfaces",
        "Improved user experience and application responsiveness",
      ],
    },
  ];

  return (
    <section className={styles.experience} id="experience" ref={ref}>
      <div className={styles.container}>
        <h2 className={styles.title}>Professional Experience</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <p className={styles.duration}>{exp.duration}</p>
                <ul className={styles.description}>
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
