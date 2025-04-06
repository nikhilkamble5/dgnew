import React from 'react';


import ServicesBanner from '../components/ServicesBanner';
const SuccessStory2 = () => {
  const successStories = [

    {
      id: 2,
      industry: "Retail Banking",
      title: "Payment Service Provider",
      clientBackground: "A publicly listed Payment Service Provider in Japan, ensures secure and efficient financial transactions for businesses, including 24x7 convenience stores nationwide. Operating two critical verticals—System Operations (SysOpe) and Monitoring—the client supports uninterrupted payment processing while meeting industry standards and compliance requirements.",
      opportunity: "The client sought to enhance operational efficiency in handling scheduled tasks (e.g., IFRS financial reporting) and request-based tasks. Ensure 24x7 monitoring of alerts to maintain high availability of applications and infrastructure, critical for uninterrupted payment services. Streamline infrastructure management, including adapting workflows for a smooth transition from on-premises to the cloud.",
      challenges: "Task Overload: Managing a high volume of scheduled and request-based tasks, often leading to a backlog. Uptime Pressure: Ensuring uninterrupted services for 24x7 convenience stores where even minor downtime could impact operations. Alert Management: Handling over 900+ types of alerts across applications and infrastructure, leading to prioritization challenges.",
      solution: "SysOpe Optimization: Implemented a task management system to streamline scheduled tasks and prioritize backlog tasks effectively. Automated repetitive processes for tasks like IFRS reporting, improving efficiency and accuracy. Monitoring Enhancements: Introduced a priority-based framework to respond to critical alerts to ensure faster resolution. Established centralized workflows via Slack and real-time dashboards to monitor alerts seamlessly.",
      results: "Improved operational efficiency and reduced response times for critical alerts, ensuring uninterrupted service delivery."
    },
 
  ];

  const heroContent = {
    title: "Success Stories",
    subtitle: "Real Results, Real Impact",
    description: "Discover how our services have helped organizations transform their IT infrastructure and achieve their business goals.",
    image: "/lovable-uploads/e6694f95-019b-49d3-b745-6e955541e110.png",
    alt: "Success Stories",
    primaryButtonText: "Contact Us",
    primaryButtonLink: "/contact"
  };

  return (
    <div>
      {/* <HeroBanner {...heroContent} /> */}
      <ServicesBanner 
        title="Success Stories"
//         // subtitle="Transforming Business Through Innovation & Technology"
//         // caseStudyDescription="Discover how we've helped leading Japanese financial institutions revolutionize their digital infrastructure and achieve remarkable success."
        heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-semibold text-secondary-900 mb-4">Client Success Stories</h2>
            <p className="text-neutral-600 text-lg">
              We take pride in the success of our clients. Here are some examples of how our services have made a difference.
            </p>
          </div>
          
          <div className="space-y-12">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden animate-fadeIn">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="inline-flex items-center rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-semibold mb-2">
                        {story.industry}
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-800">{story.title}</h3>
                    </div>
                    <div className="flex items-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span className="font-medium">Success Achieved</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="bg-gray-50 rounded-md p-6">
                      <h4 className="text-blue-700 font-semibold mb-2">Client Background</h4>
                      <p className="text-gray-600">{story.clientBackground}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-md p-6">
                      <h4 className="text-blue-700 font-semibold mb-2">Opportunity</h4>
                      <p className="text-gray-600">{story.opportunity}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-md p-6">
                      <h4 className="text-blue-700 font-semibold mb-2">Challenges</h4>
                      <p className="text-gray-600">{story.challenges}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-md p-6">
                      <h4 className="text-blue-700 font-semibold mb-2">Solution & Success</h4>
                      <p className="text-gray-600 mb-4">{story.solution}</p>
                      <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <p className="text-green-800">{story.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to discuss how we can help your organization overcome challenges and achieve success.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 transition duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SuccessStory2; 