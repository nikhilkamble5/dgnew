
import React from 'react';
import JobListings from './jobdetail/JobListings';
import './styles/Career.css';
import PerksBenefits from './jobdetail/PerksBenefits';
import heroImage from "../assets/images/hero.png";
import ServicesBanner from '../components/ServicesBanner';
const Career = () => {
  return (

    <>
    <ServicesBanner
    title="Work With Us"
    heroImage={heroImage}
    compactMode={true}
    />
    <div className="career-page">
      <JobListings />
      <PerksBenefits/>
    </div>
    </>
  );
};

export default Career;
