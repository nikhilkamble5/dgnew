import React from 'react'
import './bottomBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import firstService from "../../assets/images/img_ourservice_01.webp"
import secondService from "../../assets/images/img_ourservice_02.png"
import thirdService from "../../assets/images/img_ourservice_03.webp"
import fourthService from "../../assets/images/img_consulting.webp"

const BottomBar = () => {
    const { scrollY } = useScroll();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // Prevent immediate navigation
        const target = e.currentTarget.getAttribute('href');
        const duration = 1500; // Duration in milliseconds
        const start = window.pageYOffset;
        const startTime = performance.now();

        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth acceleration and deceleration
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            window.scrollTo(0, start * (1 - easeInOutCubic));

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            } else {
                // Navigate using React Router after scroll animation completes
                navigate(target);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className='bottombar'>
            <motion.div>   
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h1>
            </motion.div>
            <motion.div 
                className='services-cards'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div className='service-card' variants={itemVariants}>
                    <img src={firstService} alt='application service' />
                    <Link to="/application-development" className='bottom-text' onClick={handleClick}>Application Development</Link>
                </motion.div>
                <motion.div className='service-card' variants={itemVariants}>
                    <img src={secondService} alt='application service' />
                    <Link to="/infrastructuremanagement" className='bottom-text' onClick={handleClick}>Infrastructure Management</Link>
                </motion.div>
                <motion.div className='service-card' variants={itemVariants}>
                    <img src={thirdService} alt='application service' />
                    <Link to="/managed-services" className='bottom-text' onClick={handleClick}>Managed Services</Link>
                </motion.div>
                <motion.div className='service-card' variants={itemVariants}>
                    <img src={fourthService} alt='application service' className='consultingcard' />
                    <Link to="/consultingservices" className='bottom-text' onClick={handleClick}>Consulting Services</Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default BottomBar;