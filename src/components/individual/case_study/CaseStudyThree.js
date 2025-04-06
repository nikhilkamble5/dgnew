import React from 'react';
import caseOne from '../../../assets/images/casestudy/case01_02.jpg';
import caseTwo from '../../../assets/images/casestudy/img_case1.webp';
import backdrop from "../../../assets/images/casestudy/dggarage.png";
import CaseStudy from './CaseStudy';

const CaseStudyThree = () => {
  const caseStudyData = {
    title: "CASE STUDY",
    backdrop: backdrop,
    heading: "Infrastructure Monitoring and Management for Financial Institution",
    clientInfo: "Business summary: Our client is a well-established financial institution with multiple data centers and complex infrastructure requirements.",
    establishmentDetails: [
      "Established: 1985",
      "Location: Singapore",
      "Industry: Banking and Financial Services"
    ],
    challenges: [
      "Legacy monitoring systems with limited capabilities",
      "Frequent undetected system outages causing business disruption",
      "Manual and time-consuming incident response processes",
      "Lack of comprehensive visibility across diverse infrastructure",
      "Compliance issues with industry regulations"
    ],
    solutions: [
      "Implemented comprehensive 24/7 infrastructure monitoring system",
      "Designed automated alert routing and escalation procedures",
      "Created customized dashboards for different stakeholders",
      "Established regular health check reports with actionable insights",
      "Achieved 99.99% uptime with predictive maintenance approach"
    ],
    images: {
      clientImage: caseTwo,
      challengeImage: caseOne
    }
  };

  return <CaseStudy {...caseStudyData} />;
};

export default CaseStudyThree; 