import React, { useEffect } from 'react';
import { getServiceById } from '../../data/services';

import FeatureCard from '../../components/ui/FeatureCard.jsx';
import Button from '../../components/ui/Button';
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from '../../components/ServicesBanner.js';
import styles from './ApplicationDevelopment.module.css';

const ApplicationDevelopment = () => {
  
  const service = getServiceById('app-development');
  
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  const getAnimationDelayClass = (index) => {
    const delays = [styles.animateDelay0, styles.animateDelay100, styles.animateDelay200, styles.animateDelay300, styles.animateDelay400, styles.animateDelay500];
    return delays[index % delays.length] || styles.animateDelay0;
  };

  
  const developmentServices = [
   {
      title: 'Web & Intranet Portal Development',
      description: 'Secure, scalable platforms for business operations and internal communication.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      title: 'SaaS-Based Product Development',
      description: 'Scalable, cloud-native solutions tailored to your specific business needs and requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        </svg>
      )
    },
    {
      title: 'Software Product Modernization',
      description: 'Upgrade legacy systems for improved performance, usability, and modern functionality.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2v6h-6"></path>
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
          <path d="M3 22v-6h6"></path>
          <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
        </svg>
      )
    },
    {
      title: 'MVP Development',
      description: 'Rapid prototyping to validate and launch your ideas efficiently in the market.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      )
    },
   
    {
      title: 'CMS Development',
      description: 'Custom content management systems for seamless digital experiences.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
        </svg>
      )
    },
    {
      title: 'eCommerce Portal Development',
      description: 'Feature-rich, high-converting online storefronts for your business.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      )
    }
  ];

  
  const developmentProcess = [
    {
      title: 'In-depth System Requirement Analysis',
      description: 'We thoroughly analyze your business needs and requirements to ensure the solution meets your objectives.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      )
    },
    {
      title: 'Architecture Design & Planning',
      description: 'Our team creates detailed technical architecture and project plans for successful implementation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
        </svg>
      )
    },
    {
      title: 'Application Development & Coding',
      description: 'We develop your application using modern technologies and best practices.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      title: 'Component Integration',
      description: 'Seamlessly integrate various components and third-party services into your application.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      )
    },
    {
      title: 'Seamless Market Rollout',
      description: 'We handle the deployment process and ensure a smooth transition to production.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
    

      <ServicesBanner 
        title="Application Development"
        caseStudyDescription="From simple content management systems to complex enterprise applications."
        heroImage={heroImage}
        compactMode={true}
      />

      {/* Overview Section */}
      <section className={`section`}>
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeIn">
            <h3 className={styles.sectionTitle}>
              Services <span className={styles.highlightText}>We Offer</span>
            </h3>
            <p className={styles.fullWidthText}>
              At DG FutureTech, we specialize in custom web software development, delivering solutions that range from simple content management systems to complex enterprise applications, workflow interfaces, and e-commerce platforms. From architecture and functionality design to security and ongoing support, our comprehensive services ensure a seamless web development experience tailored to your business needs.
            </p>
          </div>

          <div className="bg-white tex rounded-xl shadow-subtle p-8 mb-12 animate-slideUp">
            {/* Product Development Section */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-6">Product Development</h3>
              <p className="text-lg mb-6">
                At DG FutureTech, we craft powerful, enterprise-grade custom web applications that drive long-term value for your customers. Our expert team collaborates with you to turn ideas into innovative, high-impact digital products that give your business a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className={`section`}>
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className={styles.sectionTitle}>
              Our comprehensive development <span className={styles.highlightText}>process includes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className={`bg-white tex p-6 rounded-xl shadow-subtle animate-slideUp ${getAnimationDelayClass(index)}`}>
                <div className="flex items-start gap-4">
                  <div className="text-primary flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High Performance Enterprise Web Applications Section */}
      <section className={`section`}>
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className={styles.sectionTitle}>
              High-Performance <span className={styles.highlightText}>Enterprise Web Applications</span>
            </h2>
          </div>

          <div className="bg-white tex rounded-xl shadow-subtle p-8 mb-12 animate-slideUp">
            <div>
              <p className="text-lg mb-6">
                At DG FutureTech, we specialize in developing agile and advanced web portals tailored for customers, businesses, and self-service solutions. Our portals are designed with a strong focus on usability, ensuring seamless navigation, fast response times, reliability, credibility, and high-quality content for both B2B and B2C applications.
              </p>
              <p className="text-lg mb-6">
                We recently helped a UK-based retail enterprise modernize its web application, enhancing efficiency and user experience. Let us do the same for you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className={`section ${styles.sectionPadding}`}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-8 animate-fadeIn">
            <h2 className={styles.sectionTitle}>
              How We Can <span className={styles.highlightText}>Help</span>
            </h2>
          </div>

          <div className="bg-white tex rounded-xl shadow-subtle p-6 mb-8 animate-slideUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-4">Our Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">🔹</span>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900">SaaS-Based Product Development</h4>
                      <p className="text-neutral-600">Scalable, cloud-native solutions tailored to your needs.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">🔹</span>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900">Software Product Modernization</h4>
                      <p className="text-neutral-600">Upgrade legacy systems for improved performance and usability.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">🔹</span>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900">MVP Development</h4>
                      <p className="text-neutral-600">Rapid prototyping to validate and launch your idea efficiently.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services Section */}
      <section id="development" className={`section ${styles.sectionPadding}`}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-8 animate-fadeIn">
            <h2 className={styles.sectionTitle}>
              Our <span className={styles.highlightText}>Expertise</span> 
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {developmentServices.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                bgColor="bg-white"
                className={`animate-slideUp ${getAnimationDelayClass(index)}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`section ${styles.sectionPadding}`}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-8 animate-fadeIn">
            <h2 className={styles.sectionTitle}>
              Our <span className={styles.highlightText}>Key</span> Differentiators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Design With an Eye to The Future */}
            <div className="group bg-white tex p-8 rounded-2xl shadow-subtle hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50">
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Design With an Eye to The Future</h3>
              <p className="text-neutral-600 leading-relaxed">Our design is made with an eye toward integration with various interfaces in the future. This enables applications with the flexibility to respond to changing technologies.</p>
            </div>

            {/* Customer-First Approach */}
            <div className="group bg-white tex p-8 rounded-2xl shadow-subtle hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50">
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 1 0 7.75"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Customer-First Approach</h3>
              <p className="text-neutral-600 leading-relaxed">We deeply understand your needs and accurately reflect them in your applications. Your satisfaction is our TOP priority.</p>
            </div>

            {/* Value with Cost-Effective Solutions */}
            <div className="group bg-white tex p-8 rounded-2xl shadow-subtle hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50">
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20V10"></path>
                  <path d="M18 20V4"></path>
                  <path d="M6 20v-6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Value with Cost-Effective Solutions</h3>
              <p className="text-neutral-600 leading-relaxed">Optimal pricing to maximize ROI. We increase your business value with our cost-effective services.</p>
            </div>

            {/* Modern Design and Technology */}
            <div className="group bg-white tex p-8 rounded-2xl shadow-subtle hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-50">
              <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Modern Design and Technology</h3>
              <p className="text-neutral-600 leading-relaxed">It uses the latest development platforms and programming languages, and provides a sleek, modern interface. We create products that exceed customer expectations with designs that incorporate advances in technology.</p>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default ApplicationDevelopment;
