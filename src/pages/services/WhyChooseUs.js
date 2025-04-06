import React from 'react'
import heroImage from "../../assets/images/hero.png";
import ServicesBanner from '../../components/ServicesBanner';
import "../../pages/styles/WhyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <div>
      <ServicesBanner
        title="Why Choose Us"
        subtitle="Accelerate your technology with our managed services for your Business Growth!"
        heroImage={heroImage}
        compactMode={true}
      />
      <div className="dgft-why-choose-us">
        <section className="dgft-security">
          <div className="dgft-container">
            <div className="dgft-security__content">
              <h2 className="dgft-security__title">Our Security Commitment</h2>
              <p className="dgft-security__text">
                At DG FutureTech, safeguarding your data is our highest priority. We implement 
                robust security measures across organizational, operational, and policy levels 
                to ensure the protection of your data, applications, and infrastructure—keeping 
                your business secure and resilient.
              </p>
            </div>
            <div className="dgft-security__content">
              <h2 className="dgft-security__title">DG FutureTech</h2>
              <p className="dgft-security__text">
              In today’s digital world, your IT infrastructure is the backbone of your business. A reliable, scalable, and flexible IT environment directly impacts your ability to achieve business goals and exceed customer expectations.              At DG FutureTech, we specialize in ensuring your technology works for you, not against you. As a trusted managed services provider, we help businesses optimize their IT infrastructure for maximum efficiency, security, and growth. Take control of your success—partner with DG FutureTech today. Contact us to discover how our expert IT solutions can drive your business forward. 

              </p>
            </div>
          </div>
        </section>
      </div>

      
    </div>
  )
}

export default WhyChooseUs
