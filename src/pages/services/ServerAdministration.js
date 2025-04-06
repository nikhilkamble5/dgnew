// import React from 'react';
// import ServicesBanner from '../../components/ServicesBanner';
// import heroImage from "../../assets/images/hero.png";
// import '../styles/ServerAdministration.css';

// const ServerAdministration = () => {
//   return (
//     <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
//           <ServicesBanner
//         title="Server Administration and Management"
      
//         caseStudyDescription="DG FutureTech: Comprehensive Server Management"
//         heroImage={heroImage}
//         compactMode={true}
//       />
     
//      <section className="comit-server-section server-mobile-adjustment">
//             <div className="comit-container-inner">
//               <h2 className="comit-section-title">
//                 Server Administration and Management
//               </h2>
//               <h3 className="comit-section-subtitle">
//                 DG FutureTech: Comprehensive Server Management
//               </h3>

//               <div className="comit-server-content">
//                 <h4 className="comit-content-title">
//                   What are Server Management Services?
//                 </h4>
//                 <p className="comit-text">
//                   DG FutureTech's server management services ensure your servers
//                   are always online, secure, and up-to-date. We provide 24/7
//                   monitoring and expert support, minimizing downtime and
//                   protecting your business.
//                 </p>

//                 <h4 className="comit-content-title">Key Benefits:</h4>
//                 <ul className="comit-benefits-list">
//                   <li className="comit-benefit-item">
//                     <div className="comit-benefit-icon">
//                       <span className="comit-check-icon"></span>
//                     </div>
//                     <div className="comit-benefit-content">
//                       <p className="comit-benefit-title">
//                         Proactive Troubleshooting:
//                       </p>
//                       <p className="comit-benefit-text">
//                         We identify and resolve server issues quickly,
//                         minimizing costly downtime. Our 24/7 monitoring ensures
//                         rapid response.
//                       </p>
//                     </div>
//                   </li>
//                   <li className="comit-benefit-item">
//                     <div className="comit-benefit-icon">
//                       <span className="comit-check-icon"></span>
//                     </div>
//                     <div className="comit-benefit-content">
//                       <p className="comit-benefit-title">
//                         Seamless Maintenance:
//                       </p>
//                       <p className="comit-benefit-text">
//                         We handle all server updates and maintenance, ensuring
//                         optimal performance and security, so you don't have to.
//                       </p>
//                     </div>
//                   </li>
//                   <li className="comit-benefit-item">
//                     <div className="comit-benefit-icon">
//                       <span className="comit-check-icon"></span>
//                     </div>
//                     <div className="comit-benefit-content">
//                       <p className="comit-benefit-title">
//                         Efficient Software Installations:
//                       </p>
//                       <p className="comit-benefit-text">
//                         Our experts manage software installations, preventing
//                         errors and ensuring smooth operation.
//                       </p>
//                     </div>
//                   </li>
//                   <li className="comit-benefit-item">
//                     <div className="comit-benefit-icon">
//                       <span className="comit-check-icon"></span>
//                     </div>
//                     <div className="comit-benefit-content">
//                       <p className="comit-benefit-title">
//                         Performance Optimization:
//                       </p>
//                       <p className="comit-benefit-text">
//                         We optimize your server for peak efficiency, eliminating
//                         bottlenecks and improving overall performance.
//                       </p>
//                     </div>
//                   </li>
//                   <li className="comit-benefit-item">
//                     <div className="comit-benefit-icon">
//                       <span className="comit-check-icon"></span>
//                     </div>
//                     <div className="comit-benefit-content">
//                       <p className="comit-benefit-title">
//                         Zero-Downtime OS Updates:
//                       </p>
//                       <p className="comit-benefit-text">
//                         We deliver critical OS updates without disrupting your
//                         business operations, ensuring security and stability.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </section>
//     </div>
//   );
// };

// export default ServerAdministration; 


import React, { useEffect } from 'react';
import { getServiceById } from '../../data/services';
// import HeroBanner from '../components/HeroBanner';
import FeatureCard from '../../components/ui/FeatureCard';
import Button from '../../components/ui/Button';
import '../styles/ServerAdministration.css';
import ServicesBanner from '../../components/ServicesBanner';
import heroImage from "../../assets/images/hero.png";

const ServerAdministration = () => {
  // Get service data
  const service = getServiceById('server-admin');
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      {/* <HeroBanner
        title="Server Administration & Management"
        subtitle="Comprehensive 24/7 server management to ensure your business runs smoothly"
        buttonText="Explore Solutions"
        buttonLink="#benefits"
        backgroundImage={service.imageUrl}
        height="lg"
      /> */}

<ServicesBanner
        title="Server Administration and Management"
      
        caseStudyDescription="DG FutureTech: Comprehensive Server Management"
        heroImage={heroImage}
        compactMode={true}
      />

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block text-primary text-sm font-semibold bg-primary-50 px-3 py-1 rounded-full mb-3">Expert Server Management</div>
            <h2 className="text-secondary-900 mb-4">Comprehensive Server Management</h2>
            <p className="text-neutral-600 text-lg">
              DG FutureTech's server management services ensure your servers are always online,
              secure, and up-to-date. We provide 24/7 monitoring and expert support, minimizing
              downtime and protecting your business.
            </p>
          </div> */}

          <div className="bg-white rounded-xl shadow-subtle p-8 mb-12 animate-slideUp">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-6">What are Server Management Services?</h3>
            
            <p className="text-lg mb-6">
              DG FutureTech's server management services ensure your servers are always online,
              secure, and up-to-date. We provide 24/7 monitoring and expert support, minimizing
              downtime and protecting your business.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-secondary-900 mb-4">Typical Scenarios for Co-managed services</h4>
              <p className="mb-4">Our server management services are perfect for businesses that:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Need 24/7 server monitoring and support</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Lack in-house expertise for complex server administration</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Want to minimize downtime and ensure business continuity</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Need to ensure servers are secure and compliant with industry standards</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Want to optimize server performance for business-critical applications</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block text-primary text-sm font-semibold bg-white px-3 py-1 rounded-full mb-3">Key Benefits</div>
            <h2 className="text-secondary-900 mb-4">Why Choose Our Server Management</h2>
            <p className="text-neutral-600 text-lg">
              Our comprehensive server management services provide numerous advantages for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                className={`animate-slideUp animate-delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
    
      {/* CTA Section */}
 
    </div>
  );
};

export default ServerAdministration;
