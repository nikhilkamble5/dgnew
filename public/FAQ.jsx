
import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Button from '../components/Button';
import faqData from '../data/faq';

const FAQ = () => {
  
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
      {/* Hero Section */}
      <HeroBanner
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about managed IT services and in-house IT teams"
        buttonText="Explore Questions"
        buttonLink="#faq-section"
        backgroundImage="/lovable-uploads/062749de-e3aa-4f50-b641-680fc44b32c9.png"
        height="md"
      />

      {/* FAQ Section */}
      <section id="faq-section" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <div className="inline-block text-primary text-sm font-semibold bg-primary-50 px-3 py-1 rounded-full mb-3">Your Questions Answered</div>
            <h2 className="text-secondary-900 mb-4">Managed IT vs. In-House IT</h2>
            <p className="text-neutral-600 text-lg">
              Get answers to the most common questions about choosing between managed IT services and in-house IT teams.
            </p>
          </div>

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
                      <svg xmlns="http:
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

      {/* Additional Questions Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fadeIn">
            <h2 className="text-secondary-900 mb-4">Still Have Questions?</h2>
            <p className="text-neutral-600 text-lg">
              We're here to help. Contact us for more information about our services or to discuss your specific IT needs.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-subtle animate-slideUp">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 text-primary">
                <svg xmlns="http:
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-3">Need More Information?</h3>
              <p className="text-neutral-600 mb-6">
                Our team of IT experts is ready to answer any additional questions you may have about our services, pricing, or how we can help your business succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.location.href = '#contact'}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = '/'}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 animate-fadeIn">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-white/90 text-lg mb-8 animate-fadeIn animate-delay-100">
              Contact us today to discover how our expert IT solutions can drive your business forward.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="animate-fadeIn animate-delay-200"
              onClick={() => window.location.href = '#contact'}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
