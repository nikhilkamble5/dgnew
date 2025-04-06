import React from 'react';
import '../styles/servicesbanner.module.css';

const ServicesBanner = ({ 
  title,
  subtitle,
  caseStudyTitle,
  caseStudyDescription,
  caseStudyLink,
  heroImage,
  compactMode = false
}) => {
  return (
    <div className={`services-banner-container ${compactMode ? 'compact-mode' : ''}`}>
      {/* Hero Section */}
      <div className="hero-section" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="hero-overlay"></div>
        
        {/* Main Banner */}
        <div className="main-banner">
          <div className="banner-content">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
        </div>
      </div>
      
      {/* Case Study Container */}
      {(caseStudyTitle || caseStudyDescription) && (
        <div className={`case-study-container ${compactMode ? 'compact-case-study' : ''}`}>
          <div className="case-study-content">
            <h2>{caseStudyTitle}</h2>
            <p>{caseStudyDescription}</p>
            {caseStudyLink && (
              <a href={caseStudyLink.url} className="case-study-link">
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