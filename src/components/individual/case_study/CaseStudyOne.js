import React from 'react';
import caseOne from '../../../assets/images/casestudy/case01_02.jpg';
import caseTwo from '../../../assets/images/casestudy/img_case1.webp';
import backdrop from "../../../assets/images/casestudy/caseStudyDgft1.webp";
import CaseStudy from './CaseStudy';

const CaseStudyOne = () => {
  const caseStudyData = {
    title: "CASE STUDY",
    backdrop: backdrop,
    heading: "Payment platform Offshore Infrastructure/Application Support Operation Centre",
    clientInfo: "Business summary: Our client DG Financial Technology provides a variety of cashless and payment-related services that support diverse industries.",
    establishmentDetails: [
      "Established: 1997",
      "Location: Shibuya-ku, Tokyo",
      "Capital: 1,068,450,000 yen"
    ],
    challenges: [
      "The lack of dedicated staff for operational monitoring increased the burden on technical employees.",
      "Our client wanted to outsource non-core operations and optimize internal resources to concentrate on core business activities.",
      "Dissatisfaction with the service provided by the previous outsourcing company.",
      "High-cost and inefficient outsourcing method.",
      "Weak IT policies."
    ],
    solutions: [
      "Created a Service Level Agreement (SLA): Narrated the quality and scope of responsibility for monitoring operations.",
      "Streamlined operations: Client's team experienced improvement in performance and efficiency after outsourcing work to us.",
      "Consolidation of monitoring operations: A single contact point for all monitoring operations increased the clarity in reporting to our client's team.",
      "Rapid failure detection and notification: Early detection and timely notification of failures have minimized the impact on our client's business."
    ],
    images: {
      clientImage: caseTwo,
      challengeImage: caseOne
    }
  };

  return <CaseStudy {...caseStudyData} />;
};

export default CaseStudyOne;
