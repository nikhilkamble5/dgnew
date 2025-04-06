import React from "react";
import ServicesBanner from "../../components/ServicesBanner";
import heroImage from "../../assets/images/hero.png";
import "../../pages/styles/CoManagedITServices.css";
import { getServiceById } from '../../data/services.jsx';
import UseCasesComponent from "../../components/UseCasesComponent";

const CoManagedITServices = () => {
  
  const service = getServiceById('co-managed-it');

  const useCasesData = [
    {
      challenge: "Your internal team can no longer handle the growing IT infrastructure, but hiring and training more employees would take a while and incur high costs.",
      solution: "We take over the infrastructure management of new components added and your team looks after the existing IT resources."
    },
    {
      challenge: "Business is experiencing a high workload round the clock and it is not possible to provide 24/7 support.",
      solution: "DG FutureTech offers the support during the extended hours like weekends or national holidays to keep the support operations running smoothly."
    },
    {
      challenge: "A business needs to install and configure firewall as a part of compliance procedure but they lack expertise.",
      solution: "DG FutureTech can offer support for installation and configuration of the firewall, then give the proper training to inhouse IT team to handle the routine firewall tasks."
    }
  ];

  return (
    <>
     <ServicesBanner
        title="Co-Managed IT Services"
        subtitle="Prevent Disruptions Before They Happen"
        caseStudyDescription="With 12 years of experience IT service management, DG FutureTech works together with your businesses' in-house IT teams to enhance infrastructure performance, handle the extra workload to improve user satisfaction"
        heroImage={heroImage}
        compactMode={true}
      />
    <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
     

      {
}
      <section id="overview" className="section bg-white">
        <div className="container-custom">
          {
}

          <div className="bg-white rounded-xl shadow-subtle p-8 mb-12 animate-slideUp">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-6">What is Co-Managed IT?</h3>
            
            {/* Main content container with responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Text content - full width on mobile, half width on desktop */}
              <div>
                <p className="text-lg mb-6">
                  Co-managed IT blends the familiarity of an internal IT department with the specialized
                  expertise of a managed service provider (MSP). This customized model allows for
                  flexible role division between in-house technicians and MSP professionals, based on
                  specific technologies, identified skill gaps, or areas of specialized expertise. It's
                  designed as an ongoing partnership, supplementing existing IT teams rather than
                  requiring a complete infrastructure overhaul.
                </p>
                
                <p className="text-lg">
                  Crucially, co-managed IT enables businesses to leverage the advantages of
                  comprehensive managed IT services while effectively managing limited resources and
                  budgetary constraints.
                </p>
              </div>
              
              {/* Image - full width on mobile, half width on desktop */}
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000" 
                  alt="Co-Managed IT Services Team" 
                  className="rounded-lg w-full h-auto shadow-md max-w-xl"
                />
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-secondary-900 mb-3">Key Benefits of Co-Managed IT:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Supplement your in-house team with specialized expertise</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Flexible support that scales with your business needs</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Cost-effective solution that enhances your existing IT capabilities</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-primary flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p>Extended support hours to ensure business continuity</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-secondary-900 mb-6 text-center">Services Offered Under Co-Managed Model</h3>
            
            <div className="flex justify-center mb-8">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000" 
                alt="Co-Managed IT Services" 
                className="rounded-lg w-full max-w-3xl h-auto shadow-md"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* IT Infrastructure Services Card */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-4">IT Infrastructure Services</h4>
                <ul className="space-y-3">
                  {service.services && service.services[0].items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* IT Help Desk Card */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-4">IT Help Desk</h4>
                <ul className="space-y-3">
                  {service.services && service.services[1].items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="text-primary flex-shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Related Services Card */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-semibold text-primary mb-4">Related Services</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="text-primary flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Security services: vulnerability assessment, security monitoring, patch management</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-primary flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Cloud services: migration planning, implementation, and ongoing management</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="text-primary flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p>Consulting: IT strategy, technology roadmapping, and business process optimization</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Use Cases Section */}
          <UseCasesComponent 
            title="Use Cases for Co-Managed IT Services" 
            useCases={useCasesData}
          />
        </div>
      </section>
    </div>
    </>
  );
};

export default CoManagedITServices;
