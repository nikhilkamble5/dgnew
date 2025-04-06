import React from "react";
import styles from "./styles/servicesbanner.module.css";

const ServicesBanner = ({
  title,
  subtitle,
  caseStudyTitle,
  caseStudyDescription,
  caseStudyLink,
  heroImage,
  compactMode = false,
}) => {
  return (
    <div
      className={`${styles["services-banner-container"]} ${compactMode ? styles["compact-mode"] : ""}`}
    >
      {/* Hero Section */}
      <div
        className={styles["hero-section"]}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles["hero-overlay"]}></div>

        {/* Main Banner */}
        <div className={styles["main-banner"]}>
          <div className={styles["banner-content"]}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>
      </div>

      {(caseStudyTitle || caseStudyDescription) && (
        <div
          className={`${styles["case-study-container"]} ${compactMode ? styles["compact-case-study"] : ""}`}
        >
          <div className={styles["case-study-content"]}>
            <h2>{caseStudyTitle}</h2>
            <p>{caseStudyDescription}</p>
            {caseStudyLink && (
              <a href={caseStudyLink.url} className={styles["case-study-link"]}>
                {caseStudyLink.text || "Read the case study."}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesBanner;
