import React, { useEffect, useState } from 'react';

import faqData from '../data/faq';
import heroImage from "../assets/images/hero.png";
import ServicesBanner from '../components/ServicesBanner';
import Button from '../components/ui/Button';

const FAQ = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div>
      <ServicesBanner
        title="FAQ"
        heroImage={heroImage}
        compactMode={true}
      />

      {/* FAQ Section */}
      <section id="faq-section" className="section bg-white">
        <div className="container-custom">
   

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 animate-slideUp">
              {faqData.map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-subtle overflow-hidden transition-all duration-300 ${expandedItems[index] ? 'shadow-medium' : ''}`}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between"
                    onClick={() => toggleItem(index)}
                    aria-expanded={expandedItems[index]}
                  >
                    <h3 className="text-xl font-semibold text-secondary-900">{item.question}</h3>
                    <div className={`text-primary transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${expandedItems[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div 
                      className="p-6 pt-0 text-neutral-600 border-t border-neutral-100"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



    </div>
  );
};

export default FAQ;
