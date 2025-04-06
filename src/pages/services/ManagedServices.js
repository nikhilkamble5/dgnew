import React, { useEffect } from "react";
import { getServiceById } from "../../data/services";
import { Link } from "react-router-dom";

import FeatureCard from "../../components/ui/FeatureCard";
import Button from "../../components/ui/Button";
import "../styles/ManagedServices.css";
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from "../../components/ServicesBanner";
import UseCasesSection from "../../components/individual/UseCasesSection";

const ManagedITServices = () => {
  const service = getServiceById("managed-it");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data for the use cases
  const useCasesData = [
    {
      challenge: "A growing law firm with 20 employees struggles with frequent IT downtime, slow computers, and lack of cybersecurity measures. They have no dedicated IT team, and handling technical issues disrupts productivity.",
      solutions: [
        "Implemented 24/7 IT support to resolve technical issues quickly",
        "Deployed cybersecurity solutions to protect against data breaches",
        "Setup routine system maintenance to prevent slowdowns and crashes"
      ]
    },
    {
      challenge: "A business using outdated on-premise servers for inventory management, leading to slow data processing and frequent crashes during peak sales periods.",
      solutions: [
        "Migrated the inventory system to a Azure cloud platform",
        "Implemented real-time data syncing for better stock management",
        "Set up automated backups to prevent data loss"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ServicesBanner
        title="Managed IT Services"
        heroImage={heroImage}
        compactMode={true}
        caseStudyDescription="24x7 Network Operations Center for Monitoring & Support To Ensure Maximum Network Uptime"
      />

      {/* Overview Section */}
      <section id="overview" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block text-primary text-sm font-semibold bg-primary-50 px-3 py-1 rounded-full mb-3">
              Focus on Your Business
            </div>
            <h2 className="text-secondary-900 mb-4">We'll Handle Your IT!</h2>
            <p className="text-neutral-600 text-lg">
              At DG FutureTech, we provide comprehensive Managed IT solutions in
              Thunder Bay so you can forget about IT headaches and focus on what
              truly matters—growing your business.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-subtle p-8 mb-12 animate-slideUp">
            {/* First section - Using table layout */}
            <table style={{width: "100%", marginBottom: "30px", borderCollapse: "separate", borderSpacing: "20px 0"}}>
              <tbody>
                <tr>
                  <td style={{width: "50%", verticalAlign: "top"}}>
                    <p style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#333",
                      margin: "0 0 16px 0"
                    }}>
                      As a <span style={{fontWeight: 600, color: "#0056b3"}}>proactive IT outsourcing partner</span>, we don't just
                      manage your technology—we help optimize it. Our team
                      suggests meaningful process improvements, shares
                      industry best practices, and helps you align IT with your
                      business goals to drive <span style={{fontWeight: 600, color: "#0056b3"}}>better efficiency, security, and
                      value</span>.
                    </p>
                  </td>
                  <td style={{width: "50%"}}>
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="IT Support Team" 
                      style={{
                        width: "100%",
                        height: "350px", 
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                      }} 
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <p style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#333",
              margin: "0 0 20px 0"
            }}>
              With our <span style={{fontWeight: 600, color: "#0056b3"}}>flexible Managed Services model</span>,
              you get IT support tailored to your needs:
            </p>
            
            <div style={{margin: "30px 0"}}>
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    marginBottom: "16px",
                    padding: "12px",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px"
                  }}
                >
                  <div style={{color: "#0056b3", flexShrink: 0, marginTop: "4px"}}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontWeight: 600,
                      fontSize: "18px",
                      marginTop: 0,
                      marginBottom: "8px",
                      color: "#333"
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      margin: 0,
                      color: "#555",
                      lineHeight: "1.5"
                    }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second section - Using table layout */}
            <table style={{width: "100%", marginBottom: "30px", borderCollapse: "separate", borderSpacing: "20px 0"}}>
              <tbody>
                <tr>
                  <td style={{width: "50%", verticalAlign: "top"}}>
                    <p style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#333",
                      margin: "0 0 16px 0"
                    }}>
                      From <span style={{fontWeight: 600, color: "#0056b3"}}>
                      proactive monitoring and network support</span> to on-demand
                      IT assistance, DG FutureTech ensures your systems run
                      smoothly—so you can focus on <span style={{fontWeight: 600, color: "#0056b3"}}>business growth with total peace of mind</span>.
                    </p>
                  </td>
                  <td style={{width: "50%"}}>
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Business Success" 
                      style={{
                        width: "100%",
                        height: "350px", 
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                      }} 
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "24px",
              padding: "16px", 
              backgroundColor: "#f0f7ff",
              borderRadius: "8px"
            }}>
              <div style={{color: "#0056b3", marginRight: "12px"}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p style={{
                fontWeight: 600,
                fontSize: "18px",
                margin: 0,
                color: "#333"
              }}>
                Ready for stress-free IT? Contact us today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container-custom">
          <div className="benefits-header">
            <div className="benefits-label">Key Advantages</div>
            <h2 className="benefits-title">
              What Are the Benefits of a Managed Service Provider?
            </h2>
            <p className="benefits-description">
              Partnering with a managed service provider delivers significant
              advantages for your business.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card animate-slideUp">
              <div className="benefit-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-dollar"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                  <line x1="12" y1="6" x2="12" y2="8"></line>
                  <line x1="12" y1="16" x2="12" y2="18"></line>
                </svg>
              </div>
              <h3 className="benefit-card-title">Lower IT Costs</h3>
              <p className="benefit-card-description">
                With today's global shortage of skilled IT workers, hiring and
                retaining in-house talent can be expensive. Switching to managed
                IT services is often easier and can dramatically reduce IT
                expenses.
              </p>
            </div>

            <div className="benefit-card animate-slideUp animate-delay-100">
              <div className="benefit-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-efficiency"
                >
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="benefit-card-title">Operational Efficiency</h3>
              <p className="benefit-card-description">
                As your organization grows, in-house IT teams can quickly become
                overwhelmed. Outsourcing IT services ensures your business
                maximizes performance, efficiency, and reliability from your
                technology infrastructure.
              </p>
            </div>

            <div className="benefit-card animate-slideUp animate-delay-100">
              <div className="benefit-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-resource"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="benefit-card-title">Better Resource Allocation</h3>
              <p className="benefit-card-description">
                A managed service provider gives you access to advanced IT
                expertise, allowing you to optimize your in-house resources and
                drive greater value across your organization.
              </p>
            </div>

            <div className="benefit-card animate-slideUp animate-delay-200">
              <div className="benefit-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-technology"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <line x1="8" y1="10" x2="16" y2="10"></line>
                  <line x1="8" y1="14" x2="16" y2="14"></line>
                </svg>
              </div>
              <h3 className="benefit-card-title">Up-to-date Technology</h3>
              <p className="benefit-card-description">
                System failures can cost small businesses anywhere from $82K to
                $256K per incident. A managed IT service provider helps keep
                your technology secure, reliable, and operating at peak
                efficiency.
              </p>
            </div>

            <div className="benefit-card animate-slideUp animate-delay-200">
              <div className="benefit-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-growth"
                >
                  <path d="M21 7v13H3V4h13"></path>
                  <path d="M16 2h6v6"></path>
                  <path d="M22 2L12 12"></path>
                </svg>
              </div>
              <h3 className="benefit-card-title">Growth Opportunities</h3>
              <p className="benefit-card-description">
                Delegating complex technology decisions to a trusted IT services
                provider enables you to concentrate on core competencies and
                seize growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section - Now using the reusable component */}
      <UseCasesSection 
        title="Use Cases"
        description="See how our managed IT services have helped businesses overcome their challenges."
        useCases={useCasesData}
      />

      {/* FAQ Boxes Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block text-primary text-sm font-semibold bg-white px-3 py-1 rounded-full mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-secondary-900 mb-4">
              Understanding Managed IT Services
            </h2>
            <p className="text-neutral-600 text-lg">
              Get answers to common questions about managed IT services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg-grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-subtle animate-slideUp">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                What Are Managed IT Services?
              </h3>
              <p className="text-neutral-600 mb-4">
                Managed IT services involve outsourcing IT tasks and management
                to expert third-party providers, helping businesses streamline
                operations and reduce costs. This model ensures efficient,
                secure, and proactive IT support without the burden of in-house
                management.
              </p>
              <p className="text-neutral-600">
                At DG FutureTech, we offer a comprehensive range of managed
                services, including IT support, cybersecurity, cloud migration,
                hosting, application development, unified communications, and
                more tailored to meet your business needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-subtle animate-slideUp animate-delay-100">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                What Is a Managed IT Service Provider?
              </h3>
              <p className="text-neutral-600 mb-4">
                A Managed Service Provider (MSP) is an IT company that oversees
                and manages an organization's technology, systems, and overall
                IT needs.
              </p>
              <p className="text-neutral-600 mb-4">
                Managed IT solutions can be tailored to fit your
                business—whether it's fully outsourcing your IT, engaging in a
                one-time consulting project, or opting for a co-managed IT
                agreement that supports your in-house team.
              </p>
              <p className="text-neutral-600">
                At DG FutureTech, we offer competitive, flat-rate pricing with a
                monthly subscription model, including unlimited remote support
                from our U.S.-based help desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles-section">
        <div className="container-custom">
          <h2 className="principles-section-title">
            What sets DG FutureTech apart?
          </h2>

          <div className="principles-grid">
            <div className="principle-item animate-fadeIn">
              <h3>Strategic Vision</h3>
              <p>
                We provide more than just IT – we offer a strategic partnership,
                leveraging technology to drive your business forward with a
                focus on user-centric solutions.
              </p>
            </div>
            <div className="principle-item animate-fadeIn animate-delay-100">
              <h3>Talented Team</h3>
              <p>
                Our world-class team, fueled by a passion for growth and
                continuous learning, delivers exceptional results.
              </p>
            </div>
            <div className="principle-item animate-fadeIn animate-delay-200">
              <h3>Social Impact</h3>
              <p>
                We are dedicated to creating positive change through community
                investment, career development, and support for global
                organizations.
              </p>
            </div>
            <div className="principle-item animate-fadeIn animate-delay-200">
              <h3>People-Centric Approach</h3>
              <p>
                At our core, we grow people and their businesses, focusing on
                long-term success and partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Services Section */}
      <section className="comit-more-services-section">
        <div className="comit-container-inner">
          <h2 className="comit-section-title comit-text-center">
            More IT Services offered by DG FutureTech
          </h2>

          <div className="comit-services-grid">
            <div className="comit-service-card animate-slideUp">
              <div className="comit-service-icon comit-network-icon"></div>
              <h3 className="comit-service-title">Network Assessments</h3>
              <p className="comit-service-text">
                We evaluate your current state environment and determine if
                there are any vulnerabilities or ways we can save you money
              </p>
            </div>

            <div className="comit-service-card animate-slideUp animate-delay-100">
              <div className="comit-service-icon comit-server-icon"></div>
              <h3 className="comit-service-title">Network Services</h3>
              <p className="comit-service-text">
                We offer a full Managed Services model which allows you to
                bundle specific services for a low fixed monthly cost
              </p>
            </div>

            <div className="comit-service-card animate-slideUp animate-delay-200">
              <div className="comit-service-icon comit-cloud-icon"></div>
              <h3 className="comit-service-title">Cloud Solutions</h3>
              <p className="comit-service-text">
                Finding the right solutions for you. We utilize the cloud to
                help your organization to achieve the best solutions
              </p>
            </div>

            <div className="comit-service-card animate-slideUp">
              <div className="comit-service-icon comit-device-icon"></div>
              <h3 className="comit-service-title">
                Desktop and Server Support
              </h3>
              <p className="comit-service-text">
                We take care of the day to day, week to week, and month to month
                of your systems, which provides you more time to help your
                customers
              </p>
            </div>

            <div className="comit-service-card animate-slideUp animate-delay-100">
              <div className="comit-service-icon comit-database-icon"></div>
              <h3 className="comit-service-title">Business Continuity</h3>
              <p className="comit-service-text">
                Online Backup and restoration. We believe in having your data
                saved in case something unspeakable happens.
              </p>
            </div>

            <div className="comit-service-card animate-slideUp animate-delay-200">
              <div className="comit-service-icon comit-security-icon"></div>
              <h3 className="comit-service-title">Cyber Security</h3>
              <p className="comit-service-text">
                From Anti-virus software to firewalls. We utilize a variety of
                software and hardware to keep your business safe and running
                smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagedITServices;
