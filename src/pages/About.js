import React from 'react';
import styles from '../components/styles/common.module.css';
import CompanyVision from '../components/individual/about_componey/CompanyVision';
import ImageBoard from '../components/individual/about_componey/ImageBoard';
import BenefitsSection from '../components/individual/about_componey/BenefitsSection';
import CorporateProfile from '../components/individual/about_componey/CorporateProfile';
import Timeline from '../components/individual/about_componey/TimeLine';
const About = () => {
  
  return (
    <div className={styles.AboutSection}>
      <CompanyVision />
      <ImageBoard />
      <Timeline/>
      <BenefitsSection/>
      <CorporateProfile/>
    </div>
  );
};
export default About;