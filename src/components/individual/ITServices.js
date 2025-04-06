import React, { useState, useEffect, useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../styles/itservice.module.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const ITServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [expandedCard, setExpandedCard] = useState(null);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Managed IT Service and Solution",
      description: "24x7 Network Operations Center for Monitoring & Support To Ensure Maximum Network Uptime",
      iconClass: styles.securityIcon,
      path: "/managed-services"
    },
    {
      id: 2,
      title: "Co-Managed IT Services",
      description: "With 12 years of experience IT service management, DG FutureTech works together with your businesses' in-house IT teams to enhance infrastructure performance, handle the extra workload to improve user satisfaction.",
      iconClass: styles.consultingIcon,
      path: "/co-managed-it-services"
    },
    {
      id: 3,
      title: "Server Administration and Management",
      description: "DG FutureTech's server management services ensure your servers are always online, secure, and up-to-date. We provide 24/7 monitoring and expert support, minimizing downtime and protecting your business.",
      iconClass: styles.digitalIcon,
      path: "/serveradministration"
    },
    {
      id: 4,
      title: "Network Monitoring and Management",
      description: "DG FutureTech provides comprehensive 24/7 network monitoring to ensure your business runs seamlessly. Our expert team delivers reliable solutions, proactively addressing potential issues and optimizing your network for peak performance.",
      iconClass: styles.cloudIcon,
      path: "/networkmonitoring"
    },
    {
      id: 5,
      title: "Application Development",
      description: "Custom web & product development tailored to your needs — from CMS to enterprise solutions..",
      iconClass: styles.cloudIcon,
      path: "/application-development"
    },
    {
      id: 6,
      title: "VAPT Assessment",
      description: "We offer end-to-end Vulnerability Assessment & Penetration Testing (VAPT) for web, mobile, and cloud systems to identify and fix security risks. Our process ensures improved security posture, reduced cyber threats, and actionable remediation",
      iconClass: styles.cloudIcon,
      path: "/vapt-assessment"
    }
  ];

  const clientSectionStyles = {
    padding: '4rem 2rem',
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#f8f9fa'
  };

  const sectionTitleStyles = {
    textAlign: 'center',
    fontSize: 'clamp(2rem, 4vw, 4rem)',
    margin: 'auto',
    maxWidth: '900px',
    width: '100%',
    fontWeight: 'bold'
  };

  const highlightSpanStyles = {
    color: 'var(--highlight-title)'
  };

  const sectionSubtitleStyles = {
    textAlign: 'center',
    padding: '15px',
    color: '#666',
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto 2rem auto',
    fontSize: 'clamp(0.9rem, 2vw, 1.5rem)',
    lineHeight: '1.4'
  };

  const carouselStyles = {
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 50px'
  };

  const clientCardStyles = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    overflow: 'hidden'
  };

  const clientContentStyles = {
    padding: '30px 20px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between'
  };

  const titleStyles = {
    color: 'white',
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    marginBottom: '15px',
    textShadow: '0px 1px 3px rgba(0,0,0,0.2)',
    wordBreak: 'break-word',
    textAlign: 'center',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const descriptionStyles = {
    color: 'white',
    lineHeight: '1.6',
    marginBottom: '15px',
    flex: '1 1 auto',
    overflow: 'hidden',
    textShadow: '0px 1px 3px rgba(0,0,0,0.2)',
    fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '6'
  };

  const buttonContainerStyles = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto'
  };

  const buttonStyles = {
    backgroundColor: 'var(--highlight-title, #0066cc)',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.3s',
    fontSize: 'clamp(12px, 1vw, 14px)'
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else if (window.innerWidth <= 992) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, services.length - cardsPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, services.length, currentIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      const singleCardWidth = 100 / services.length;
      const translateX = currentIndex * singleCardWidth;
      carouselRef.current.style.transform = `translateX(-${translateX}%)`;
    }
  }, [currentIndex, services.length]);

  const nextSlide = () => {
    setExpandedCard(null);
    const maxIndex = Math.max(0, services.length - cardsPerView);
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setExpandedCard(null);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setExpandedCard(null);
    setCurrentIndex(index);
  };

  const toggleCardExpansion = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const truncateText = (text, limit = 150) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  const totalDots = Math.max(1, services.length - cardsPerView + 1);

  const handleLearnMoreClick = (service) => {
    navigate(service.path);
  };

  return (
    <section className={styles.clientSection} style={clientSectionStyles}>
      <h2 className={styles.sectionTitle} style={sectionTitleStyles}>
        India-Based <span style={highlightSpanStyles}>IT Services</span> and Technology Solutions
      </h2>
      <h3 className={styles.sectionSubtitle} style={sectionSubtitleStyles}>
        Our proactive approach to IT services keeps your systems and your people protected.
      </h3>

      <div className={styles.servicesCarousel1} style={carouselStyles}>
        <div className={styles.carouselViewport}>
          <div 
            className={styles.clientCardsContainer} 
            ref={carouselRef}
            style={{ width: `${(services.length / cardsPerView) * 100}%` }}
          >
            {services.map((service) => (
              <div 
                key={service.id} 
                className={styles.clientCardWrapper}
                style={{ width: `${100 / services.length}%` }}
                data-aos="fade-up"
              >
                <div 
                  className={`${styles.clientCard} ${styles[`card${service.id}`]}`}
                  style={clientCardStyles}
                >
                  <div className={styles.clientContent} style={clientContentStyles}>
                    <h3 style={titleStyles}>{service.title}</h3>
                    <p style={descriptionStyles}>
                      {expandedCard === service.id ? service.description : truncateText(service.description)}
                    </p>
                    <div style={buttonContainerStyles}>
                      <button 
                        className={styles.learnMore1}
                        style={buttonStyles}
                        onClick={() => handleLearnMoreClick(service)}
                      >
                        Learn More!
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {services.length > cardsPerView && (
          <>
            <button 
              className={`${styles.navButton1} ${styles.prev}`}
              onClick={prevSlide}
              aria-label="Previous slide"
              disabled={currentIndex === 0}
            >
              <GrFormPrevious />
            </button>
            <button 
              className={`${styles.navButton1} ${styles.next}`}
              onClick={nextSlide}
              aria-label="Next slide"
              disabled={currentIndex >= services.length - cardsPerView}
            >
              <GrFormNext />
            </button>
          </>
        )}
      </div>

      {services.length > cardsPerView && (
        <div className={styles.carouselDots1}>
          {[...Array(totalDots)].map((_, index) => (
            <button
              key={index}
              className={`${styles.dot1} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? 'var(--highlight-title)' : '#ccc',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ITServices;