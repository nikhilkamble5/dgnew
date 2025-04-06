import React from "react";
import "../../pages/styles/infrastructureManagement.css";
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from "../../components/ServicesBanner";
import infraOne from "../../assets/images/img_infra_structure.png";

const InfrastructureManagement = () => {
  return (
    <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
      <ServicesBanner
        title="Infrastructure Management"
        heroImage={heroImage}
        compactMode={true}
      />
      <div className="infra-manage">
        <p data-aos="fade-up">
          Create an infrastructure that is always ready! Traditional
          infrastructures, however, are incapable of keeping up with faster
          change and compressed transformation. IT infrastructure must be
          updated. We can assist you in transitioning from a capital-intensive,
          hardware-oriented infrastructure to a software-defined and intelligent
          infrastructure that is always ready for any opportunity.
        </p>
        <p data-aos="fade-up">
          In today's digital and cloud-based world, your company is only as good
          as its IT infrastructure. It grants power to operate the applications
          that keep the business running. It also creates a strong foundation
          for creating excellent customer and staff experiences. We offer cloud
          infrastructure management using Microsoft Azure as well as AWS.
        </p>
        <div className="infra-content-container-data">
          <div className="infra-content" data-aos="fade-up">
            <img src={infraOne} alt="Infrastructure" className="infraOne" />
          </div>
          <div className="infra-right-data" data-aos="fade-up">
            <h2 data-aos="fade-up">Cloud services we offer are –</h2>
            <ul>
              <li>
                Application Release – Organizations are increasingly relying on
                the public cloud to address business and IT concerns, resulting
                in increased operational flexibility, agility, and
                cost-efficiency. We help you accelerate your cloud adoption
                journey on Microsoft Azure or AWS.
              </li>
              <li>
                Maintenance – Data deployment in the cloud is unquestionably
                cost effective! However, it is always essential to have a
                dedicated team of professionals for sites that receive a high
                volume of traffic and to regularly maintain the cloud storage.
              </li>
              <li>
                Monitoring – Our specialized Cloud professionals monitor your
                business framework 24 hours a day, 365 days throughout the year
                to ensure that the Cloud technology is working properly and that
                your business works smoothly!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureManagement;
