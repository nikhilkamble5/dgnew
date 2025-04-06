

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ServicesBanner from '../components/ServicesBanner';
//

const SuccessStory1 = () => {
    const successStories = [
        {
          id: 1,
          industry: "FinTech",
          title: "Digital Payment Solutions Provider",
          clientBackground: "Our client is part of Japan's leading publicly listed company, pioneering in digital payment solutions. The company develops and provides user-friendly system tools and services for both online merchants and end customers, allowing e-commerce businesses to focus on their core operations.",
          opportunity: "Our customer expected services beyond simple monitoring. They were looking for a partner (and not vendor) who can run a dedicated offshore center with a dedicated team. One of their earlier vendor provided them a shared monitoring support, with shared resources. They wanted a partner who can support them in application release activities too.",
          challenges: "Keeping the infra up and running 24×7 was crucial being one of the leading payment gateway solutions providers in Japan. Senior Management was on constant standby during critical times.",
          solution: "Started with a phased approach. Within 4 months, we scaled up to 24 × 7 monitoring support. Within 6 months we could handle in application release activities also. Resources planning and capacity expansion rollouts.",
          results: "Customer could focus more on infrastructure and/or application improvements. They could onboard several new merchants that resulted in the increase of revenue by 21%."
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

export default SuccessStory1; 




