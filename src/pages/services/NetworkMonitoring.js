// import React from "react";
// import ServicesBanner from "../../components/ServicesBanner";
// import heroImage from "../../assets/images/hero.png";
// import "../../pages/styles/NetworkMonitoring.css";

// const NetworkMonitoring = () => {
//   return (
//     <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
//       <ServicesBanner
//         title="Network Monitoring and Management"
//         heroImage={heroImage}
//         compactMode={true}
//       />

//       <section className="comit-network-section">
//         <div className="comit-container-inner">
//           <div className="comit-network-content">
//             <h4 className="comit-content-title">
//               Do these network challenges sound familiar?
//             </h4>
//             <ul className="comit-challenges-list">
//               <li className="comit-challenge-item">
//                 Monitoring network traffic origin, destination & bandwidth
//               </li>
//               <li className="comit-challenge-item">
//                 Lack of in-depth analysis across networks
//               </li>
//               <li className="comit-challenge-item">
//                 Quickly detecting intrusions & compromises
//               </li>
//               <li className="comit-challenge-item">
//                 Maintaining high levels of network availability
//               </li>
//             </ul>

//             <h4 className="comit-content-title">
//               {/* Prevent Disruptions Before They Happen */}
//             </h4>
//             <ul className="comit-challenges-list">
//               <li className="comit-challenge-item">
//                 Digital transformation has increased network complexity and
//                 management costs.
//               </li>
//               <li className="comit-challenge-item">
//                 Expanding technologies and devices across multiple locations
//                 add to the challenge.
//               </li>
//             </ul>

//             <h4 className="comit-content-title">
//               DG FutureTech's 24x7 NOC offers:
//             </h4>
//             <ul className="comit-challenges-list">
//               <li className="comit-challenge-item">
//                 Comprehensive monitoring for IT networks of any size and
//                 complexity.
//               </li>
//               <li className="comit-challenge-item">
//                 Cutting-edge tools to ensure maximum uptime and minimize
//                 downtime risks.
//               </li>
//               <li className="comit-challenge-item">
//                 Proactive monitoring and real-time alert response.
//               </li>
//               <li className="comit-challenge-item">
//                 Rapid identification of issues for efficient resolution.
//               </li>
//               <li className="comit-challenge-item">
//                 Enhanced control over network infrastructure to maintain
//                 business continuity.
//               </li>
//             </ul>
//           </div>

//           <div className="comit-services-overview">
//             <h3 className="comit-section-subtitle">
//               DG FutureTech: Complete Suite of Services for Optimal Network
//               Performance
//             </h3>
//             <p className="comit-text">
//               DG FutureTech provides comprehensive 24/7 network monitoring to
//               ensure your business runs seamlessly. Our expert team delivers
//               reliable solutions, proactively addressing potential issues and
//               optimizing your network for peak performance.
//             </p>

//             <h4 className="comit-content-title">Our Services Include:</h4>
//             <div className="comit-services-grid">
//               <div className="comit-service-card">
//                 <div className="comit-service-icon comit-network-icon"></div>
//                 <h5 className="comit-service-title">
//                   Network Traffic Analysis
//                 </h5>
//                 <p className="comit-service-text">
//                   Gain actionable insights into your network traffic to optimize
//                   bandwidth and performance.
//                 </p>
//               </div>

//               <div className="comit-service-card">
//                 <div className="comit-service-icon comit-security-icon"></div>
//                 <h5 className="comit-service-title">
//                   Network Security Monitoring
//                 </h5>
//                 <p className="comit-service-text">
//                   Protect your business with proactive threat detection and
//                   prevention.
//                 </p>
//               </div>

//               <div className="comit-service-card">
//                 <div className="comit-service-icon comit-server-icon"></div>
//                 <h5 className="comit-service-title">Server Monitoring</h5>
//                 <p className="comit-service-text">
//                   Ensure continuous server uptime and efficiency for
//                   uninterrupted business operations.
//                 </p>
//               </div>

//               <div className="comit-service-card">
//                 <div className="comit-service-icon comit-app-icon"></div>
//                 <h5 className="comit-service-title">
//                   Application Performance Monitoring
//                 </h5>
//                 <p className="comit-service-text">
//                   Identify and resolve application bottlenecks to maximize user
//                   experience.
//                 </p>
//               </div>

//               <div className="comit-service-card">
//                 <div className="comit-service-icon comit-cloud-icon"></div>
//                 <h5 className="comit-service-title">
//                   Cloud Infrastructure Monitoring
//                 </h5>
//                 <p className="comit-service-text">
//                   Maintain optimal performance and prevent downtime in your
//                   cloud environment.
//                 </p>
//               </div>

//               <div className="comit-service-card">
//                 <div className="comit-service-icon comit-device-icon"></div>
//                 <h5 className="comit-service-title">
//                   Network Device Monitoring
//                 </h5>
//                 <p className="comit-service-text">
//                   Track and manage all network devices for consistent and
//                   reliable operation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="comit-cta-section">
//         <div className="comit-container-inner">
//           <div className="comit-cta-block">
//             <h3 className="comit-cta-title">
//               Ready to Get Started with Server Management?
//             </h3>
//             <p className="comit-cta-text">
//               DG FutureTech helps you find solutions that work for your business
//               without decreasing efficiency or affecting day-to-day operations.
//               To learn more about how a server management service provider can
//               help your business
//             </p>
//             {/* <a href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" target="_blank" rel="noopener noreferrer" className="comit-btn comit-btn-primary">
//               Book Consultation
//             </a> */}
//           </div>

//           <div className="comit-cta-block">
//             <h3 className="comit-cta-title">
//               Optimize Your Network with DG FutureTech
//             </h3>
//             <p className="comit-cta-text">
//               Is your network keeping pace with your business? In today's
//               digital world, a strong network strategy is essential. DG
//               FutureTech helps you build and optimize secure, high- performance
//               networks, from your data center to the edge.
//             </p>

//             <h4 className="comit-content-title">We offer:</h4>
//             <ul className="comit-offer-list">
//               <li className="comit-offer-item">
//                 <span className="comit-dot"></span>
//                 <div className="comit-offer-content">
//                   <p className="comit-offer-title">Custom Network Solutions:</p>
//                   <p className="comit-offer-text">
//                     Tailored strategies using a wide range of networking and
//                     security products.
//                   </p>
//                 </div>
//               </li>
//               <li className="comit-offer-item">
//                 <span className="comit-dot"></span>
//                 <div className="comit-offer-content">
//                   <p className="comit-offer-title">
//                     Expert Consulting & Support:
//                   </p>
//                   <p className="comit-offer-text">
//                     Navigating the complexities of multi-cloud and evolving
//                     network edges.
//                   </p>
//                 </div>
//               </li>
//               <li className="comit-offer-item">
//                 <span className="comit-dot"></span>
//                 <div className="comit-offer-content">
//                   <p className="comit-offer-title">
//                     Enhanced Performance & Security:
//                   </p>
//                   <p className="comit-offer-text">
//                     Boosting efficiency and safeguarding your critical data.
//                   </p>
//                 </div>
//               </li>
//             </ul>

//             <a href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" target="_blank" rel="noopener noreferrer" className="comit-btn comit-btn-primary">
//               Book Consultation
//             </a>
//           </div>

         
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NetworkMonitoring;



import React, { useEffect } from 'react';
import { getServiceById } from '../../data/services';
// import FeatureCard from '../../components/ui/FeatureCard';
// import Button from '../../components/ui/Button';
import ServicesBanner from '../../components/ServicesBanner';
import heroImage from "../../assets/images/hero.png";

const NetworkMonitoring = () => {
  // Get service data
  const service = getServiceById('network-monitoring');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>


<ServicesBanner
        title="Network Monitoring and Management"
        heroImage={heroImage}
        compactMode={true}
      />
      {/* Challenges Section */}
      <section id="challenges" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block text-primary text-sm font-semibold bg-primary-50 px-3 py-1 rounded-full mb-3">Common Pain Points</div>
            <h2 className="text-secondary-900 mb-4">Do These Network Challenges Sound Familiar?</h2>
            <p className="text-neutral-600 text-lg">
              Many businesses struggle with these common network monitoring and management issues.
            </p>
          </div>

          {/* Four cards in a 2x2 grid, forcing side-by-side on all screens */}
          <div className="flex flex-col gap-8 mb-12">
            {/* First Row - Two cards side by side */}
            <div className="flex flex-row gap-8">
              {/* First Card */}
              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="text-orange-500 flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <p className="text-neutral-700">Monitoring network traffic origin, destination & bandwidth</p>
              </div>

              {/* Second Card */}
              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="text-orange-500 flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <p className="text-neutral-700">Lack of in-depth analysis across networks</p>
              </div>
            </div>

            {/* Second Row - Two cards side by side */}
            <div className="flex flex-row gap-8">
              {/* Third Card */}
              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="text-orange-500 flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <p className="text-neutral-700">Quickly detecting intrusions & compromises</p>
              </div>

              {/* Fourth Card */}
              <div className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex-1">
                <div className="text-orange-500 flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <p className="text-neutral-700">Maintaining high levels of network availability</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-8 rounded-xl animate-fadeIn">
            <h3 className="text-xl font-semibold text-secondary-900 mb-4 text-center">Prevent Disruptions Before They Happen</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-neutral-700">
                Digital transformation has increased network complexity and management costs.
              </p>
              <p className="text-neutral-700">
                Expanding technologies and devices across multiple locations add to the challenge.
              </p>
              <div className="mt-8">
                <h4 className="font-semibold text-secondary-900 mb-3">DG FutureTech's 24x7 NOC offers:</h4>
                <ul className="space-y-3">
                  {service.customSolutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <p>{solution}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block text-primary text-sm font-semibold bg-white px-3 py-1 rounded-full mb-3">Our Solutions</div>
            <h2 className="text-secondary-900 mb-4">Complete Suite of Services for Optimal Network Performance</h2>
            <p className="text-neutral-600 text-lg">
              DG FutureTech provides comprehensive 24/7 network monitoring to ensure your business runs seamlessly. Our expert team delivers reliable solutions, proactively addressing potential issues and optimizing your network for peak performance.
            </p>
          </div>

          {/* First row - 3 cards */}
          <div className="flex flex-col gap-8 mb-12">
            <div className="flex flex-row gap-6">
              {/* Network Traffic Analysis */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-subtle">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Network Traffic Analysis</h3>
                <p className="text-neutral-600">
                  Gain actionable insights into your network traffic to optimize bandwidth and performance.
                </p>
              </div>

              {/* Network Security Monitoring */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-subtle">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Network Security Monitoring</h3>
                <p className="text-neutral-600">
                  Protect your business with proactive threat detection and prevention.
                </p>
              </div>

              {/* Server Monitoring */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-subtle">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Server Monitoring</h3>
                <p className="text-neutral-600">
                  Ensure continuous server uptime and efficiency for uninterrupted business operations.
                </p>
              </div>
            </div>

            {/* Second row - 3 cards */}
            <div className="flex flex-row gap-6">
              {/* Application Performance Monitoring */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-subtle">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Application Performance Monitoring</h3>
                <p className="text-neutral-600">
                  Identify and resolve application bottlenecks to maximize user experience.
                </p>
              </div>

              {/* Cloud Infrastructure Monitoring */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-subtle">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Cloud Infrastructure Monitoring</h3>
                <p className="text-neutral-600">
                  Maintain optimal performance and prevent downtime in your cloud environment.
                </p>
              </div>

              {/* Network Device Monitoring */}
              <div className="flex-1 bg-white p-6 rounded-xl shadow-subtle">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
                    <line x1="6" y1="12" x2="6.01" y2="12"></line>
                    <line x1="10" y1="12" x2="10.01" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Network Device Monitoring</h3>
                <p className="text-neutral-600">
                  Track and manage all network devices for consistent and reliable operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First CTA Block */}
            <div className="bg-primary-50 p-8 rounded-xl animate-fadeIn">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Ready to Get Started with Server Management?</h3>
              <p className="text-neutral-700 mb-6">
                DG FutureTech helps you find solutions that work for your business without decreasing efficiency or affecting day-to-day operations. To learn more about how a server management service provider can help your business
              </p>
              <a href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                Book Consultation
              </a>
            </div>

            {/* Second CTA Block */}
            <div className="bg-secondary-50 p-8 rounded-xl animate-fadeIn">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Optimize Your Network with DG FutureTech</h3>
              <p className="text-neutral-700 mb-4">
                Is your network keeping pace with your business? In today's digital world, a strong network strategy is essential. DG FutureTech helps you build and optimize secure, high-performance networks, from your data center to the edge.
              </p>

              <h4 className="font-semibold text-secondary-900 mb-3">We offer:</h4>
              <ul className="space-y-3 mb-2">
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Custom Network Solutions:</p>
                    <p className="text-neutral-600">Tailored strategies using a wide range of networking and security products.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Expert Consulting & Support:</p>
                    <p className="text-neutral-600">Navigating the complexities of multi-cloud and evolving network edges.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Enhanced Performance & Security:</p>
                    <p className="text-neutral-600">Boosting efficiency and safeguarding your critical data.</p>
                    
                    <a href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors mt-4">
                      Book Consultation
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation Button Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to strengthen your network infrastructure?</h2>
          <a 
            href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-[var(--nav-active)] text-white px-8 py-4 rounded-md font-medium text-lg shadow-md hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </a>
        </div>
      </section>

    
  
    </div>
  );
};

export default NetworkMonitoring;
