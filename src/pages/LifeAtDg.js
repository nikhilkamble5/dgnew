import React, { useEffect } from 'react';
import Button from '../components/ui/Button';
import { ArrowRight, ArrowDown, ChevronDown, Star, Heart, Calendar, Award } from 'lucide-react';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import BenefitCard from '../components/ui/BenefitCard';
import TestimonialCarousel from '../components/ui/TestimonialCarousel';
import PhotoGallery from '../components/ui/PhotoGallery';
import LocationCard from '../components/ui/LocationCard';
import { benefits, testimonials, locations, galleryImages } from '../data/companyData';
import { useIsMobile } from '../hooks/use-mobile';

const LifeAtDg = () => {
  const isMobile = useIsMobile();

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    
    document.body.classList.add('font-montserrat');
    
    
    return () => {
      document.body.classList.remove('font-montserrat');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with enhanced styling */}
      {
}

      {/* About Section with glass card effect */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeader 
              title="Deciding. Experiencing. Thriving. Together." 
              subtitle="At DG FutureTech, we're building more than just products – we're creating a community where innovation thrives and every voice matters."
            />
            <div className="section-divider"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card p-8">
                <p className="text-lg mb-6">
                  Our culture is built on collaboration, continuous learning, and celebrating diverse perspectives. We believe that the best ideas come from environments where people feel valued, supported, and empowered.
                </p>
                <p className="text-lg mb-6">
                  Whether you're brainstorming with teammates, participating in hackathons, or enjoying company events, you'll find a place where your passion for technology meets purpose.
                </p>
                <p className="text-lg">
                  We're committed to creating technology that makes a positive impact, and we know that starts with creating a workplace where people can do their best work.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500" alt="Team meeting" className="rounded-lg w-full h-auto object-cover shadow-lg" />
                <img src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=500" alt="Office space" className="rounded-lg w-full h-auto object-cover mt-8 shadow-lg" />
                <img src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=500" alt="Team building" className="rounded-lg w-full h-auto object-cover mt-4 shadow-lg" />
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500" alt="Work session" className="rounded-lg w-full h-auto object-cover shadow-lg" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Facility Showcase with parallax effect */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeader 
              title="Our Stunning Facility" 
              subtitle="Our modern workspace is designed to inspire creativity, foster collaboration, and make work enjoyable."
            />
            <div className="section-divider"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-700">
              <img 
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200" 
                alt="DG FutureTech Headquarters" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="mt-8 max-w-4xl mx-auto text-center glass-card p-8 -mt-20 relative z-10">
              <p className="text-lg text-gray-700 break-words whitespace-normal overflow-hidden">
                From flexible work areas and cutting-edge meeting rooms to relaxation zones and game spaces, 
                our facilities are built to support both productivity and wellbeing. We believe that 
                great environments lead to great work.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section with improved cards */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeader 
              title="Why Work at DG FutureTech?" 
              subtitle="We offer a comprehensive benefits package designed to support your professional growth, personal wellbeing, and work-life balance."
            />
            <div className="section-divider"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials with enhanced styling */}
      <section className="py-20 px-4 md:px-8 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <SectionHeader 
              title="What Our Team Says" 
              subtitle="Hear directly from our team members about their experiences at DG FutureTech."
            />
            <div className="section-divider"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-6 md:p-10">
              <TestimonialCarousel testimonials={testimonials} />
            </div>
          </AnimatedSection>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-10 right-10 text-primary/10">
          <Star size={100} />
        </div>
        <div className="absolute top-20 left-10 text-primary/10">
          <Heart size={80} />
        </div>
      </section>

      {/* Photo Gallery with improved layout */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeader 
              title="Moments at DG FutureTech" 
              subtitle="Glimpses of our daily life, celebrations, and team building events."
            />
            <div className="section-divider"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <PhotoGallery images={galleryImages} />
          </AnimatedSection>
        </div>
      </section>

      {/* Locations Section with improved cards */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-t from-white to-gray-50">
        <div className="container mx-auto">
          <AnimatedSection>
            <SectionHeader 
              title="Where We Work" 
              subtitle="With offices in Japan and India, we're building the future from some amazing locations."
            />
            <div className="section-divider"></div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid sm:grid-cols-2 gap-8">
              {locations.map((location, index) => (
                <LocationCard key={index} location={location} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

     
    </div>
  );
};

export default LifeAtDg;
