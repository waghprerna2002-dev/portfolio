import React, { useState, useEffect } from "react";
import styles from "./ScrollProgress.module.css";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const percent = (scrolled / totalHeight) * 100;
      setProgress(percent);
      setShowTop(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
      {showTop && (
        <button
          className={styles.topButton}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollProgress;
