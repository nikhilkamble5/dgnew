import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/common.module.css';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Client = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const sliderRef = useRef(null);
    
    const services = [
        {
            id: 1, 
            description: "Partnering with Vizitech (now DG FutureTech) has been an outstanding experience. Their innovation, technical expertise, and commitment to excellence are truly world-class. They deliver high-quality solutions on time and with great professionalism.",
            name: "Javier Guardo", 
            designation: "Kembol Ventures"
        },
        {
            id: 2, 
            description: "Thanks to DG FutureTech teams' never say no attitude, perseverance and commitment. With them, we were able to build our current operation monitoring center operating 24/7, 365 days. Thank you so much.",
            name: "Mr. Watanuki", 
            designation: "Dept. Head, DG Financial Technology, Japan"
        },
        {
            id: 3, 
            description: "DG FutureTech's team transformed my vision into a stunning, high-performing website. The web-based Audio & Video Platform is amazing and easy to access to all our users.",
            name: "Dr. Sunil Kale", 
            designation: "Motivational Speaker"
        },
        {
            id: 4, 
            description: "Outstanding mobile app development! DG FutureTech team delivered a seamless, user-friendly app tailored to our needs. Professional, reliable, and highly skilled—highly recommended for top-quality work!",
            name: "Hanny Patil", 
            designation: "CEO, Sepia Innovations"
        }
    ];

    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleCards(1);
            } else if (window.innerWidth <= 992) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }
        };

        
        handleResize();
        
        
        window.addEventListener('resize', handleResize);
        
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    useEffect(() => {
        if (sliderRef.current) {
            const cardWidth = 100 / visibleCards;
            sliderRef.current.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
        }
    }, [currentIndex, visibleCards]);

    const nextSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        if (currentIndex < services.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0); 
        }
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(services.length - visibleCards); 
        }
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    const goToSlide = (index) => {
        if (isTransitioning || index === currentIndex) return;
        
        setIsTransitioning(true);
        setCurrentIndex(index);
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 500);
    };

    
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
        height: '100%',
        overflow: 'hidden'
    };

    
    const clientContentStyles = {
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    };

    
    const clientNameStyles = {
        color: 'var(--highlight-title)',
        fontSize: '1.3rem',
        marginBottom: '5px',
        fontWeight: 'bold'
    };

    
    const clientDesignationStyles = {
        color: '#666',
        fontSize: '0.9rem',
        marginBottom: '15px'
    };

    
    const clientDescriptionStyles = {
        color: '#333',
        fontSize: '1rem',
        lineHeight: '1.6',
        marginTop: '15px'
    };

    return (
        <section className={styles.clientSection} style={clientSectionStyles}>
            <h2 className={styles.sectionTitle} style={sectionTitleStyles}>
                What <span style={highlightSpanStyles}>Our Clients</span> Are Saying
            </h2>
            <h3 className={styles.sectionSubtitle} style={sectionSubtitleStyles}>
                Here's why you're going to love working with DG FutureTech
            </h3>
            
            <div className={styles.servicesCarousel1} style={carouselStyles}>
                <div className={styles.carouselWrapper}>
                    <div 
                        className={styles.carouselSlider} 
                        ref={sliderRef}
                        style={{
                            display: 'flex',
                            width: '100%',
                            transition: 'transform 0.5s ease'
                        }}
                    >
                        {services.map((service, index) => (
                            <div key={service.id} className={styles.singleCardContainer}>
                                <div className={styles.clientCardWrapper}>
                                    <div className={styles.clientCard} style={clientCardStyles}>
                                        <div className={styles.clientContent} style={clientContentStyles}>
                                            <div className={styles.clientAdd}>
                                                <h3 style={clientNameStyles}>{service.name}</h3>
                                                <p style={clientDesignationStyles}>{service.designation}</p>
                                            </div>
                                            <p className={styles.clientDescp} style={clientDescriptionStyles}>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {services.length > visibleCards && (
                    <>
                        <button 
                            className={`${styles.navButton1} ${styles.prev}`}
                            onClick={prevSlide}
                            disabled={isTransitioning}
                            aria-label="Previous slide"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '0',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'white',
                                color: '#333',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                zIndex: 2
                            }}
                        >
                            <GrFormPrevious />
                        </button>
                        <button 
                            className={`${styles.navButton1} ${styles.next}`}
                            onClick={nextSlide}
                            disabled={isTransitioning}
                            aria-label="Next slide"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '0',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'white',
                                color: '#333',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                zIndex: 2
                            }}
                        >
                            <GrFormNext />
                        </button>
                    </>
                )}
            </div>

            {services.length > visibleCards && (
                <div className={styles.carouselDots1} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                    marginTop: '20px'
                }}>
                    {[...Array(services.length - visibleCards + 1)].map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot1} ${index === currentIndex ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                            disabled={isTransitioning}
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

export default Client;