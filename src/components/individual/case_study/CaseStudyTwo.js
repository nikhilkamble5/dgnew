import React from "react";
import caseOne from "../../../assets/images/casestudy/case01_02.jpg";
import caseThree from "../../../assets/images/casestudy/img_case1.webp";
import backdrop from "../../../assets/images/casestudy/casestudyKipp.webp";
import CaseStudy from "./CaseStudy";

const CaseStudyTwo = () => {
  const caseStudyData = {
    title: "CASE STUDYT",
    backdrop: backdrop,

    clientInfo:
      "Business summary: Our client offers BaaS (Banking as a Service) business, which provides system infrastructure in the form of SaaS to businesses wishing to provide financial services.",
    establishmentDetails: [
      "Established: 2018",
      "Location: Chiyoda-ku, Tokyo",
      "Capital: 49.01 million yen",
    ],
    challenges: [
      "Internal technical resources were spending more time on maintenance and operation work.",
      "Troubleshooting the existing problems took more time than improving the service.",
      "The workload on individual employees was increased.",
      "Service levels were declining due to inefficient operations.",
    ],
    solutions: [
      "Time optimization for Expert Technical Resources: Client team can now spend more time improving product and service features.",
      "Faster troubleshooting: We've made troubleshooting and communication with clients faster.",
      "Full support: We provide a high level of support for all products and services.",
      "Contributing to business expansion: We help our clients expand their business by improving efficiency.",
    ],
    images: {
      clientImage: caseThree,
      challengeImage: caseOne,
    },
  };

  return <CaseStudy {...caseStudyData} />;
};

export default CaseStudyTwo;
