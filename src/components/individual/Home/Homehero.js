import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/hero.png';

const Homehero = () => {
  return (
    <div className="relative w-full min-h-[50vh] md:min-h-screen overflow-hidden bg-black -mt-1">
      {/* Background Image - dark blue tech background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundColor: "#0a1930", /* Dark blue fallback */
          backgroundSize: 'cover'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-12 pt-0 pb-4 md:pb-12 flex flex-col h-full">
        {/* 24/7/365 Support */}
        <div className="flex items-center mb-3 md:mb-6 pt-2">
          <span className="text-white font-bold">24</span>
          <span className="mx-1 text-yellow-400 font-bold">×</span>
          <span className="text-white font-bold">7</span>
          <span className="mx-1 text-yellow-400 font-bold">×</span>
          <span className="text-white font-bold">365</span>
          <span className="ml-3 text-white font-bold">SUPPORT</span>
        </div>
        
        {/* Main Heading - Made responsive with different text sizes */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-semibold text-white leading-tight max-w-4xl mb-3 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Managed IT Services 
          <br className="hidden md:block" />
          <span className="block md:mt-2">for Growth - Minded Businesses<span className="text-gray-300"></span></span>
          <span className="block md:mt-2"></span>
        </motion.h1>
        
        {/* Subheading with Animation */}
        <div className="text-white font-medium text-base md:text-lg max-w-2xl mb-4 md:mb-12">
          {[
            "Accelerate your business with advanced maintenance, operation, and monitoring services",
            "Reliable and cost-effective cloud solution",
            "Transform your business with advanced consulting services",
            "Application development that supports diverse industries"
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              className="mb-2"
            >
              • {text}
            </motion.p>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-auto mb-6 md:mb-0 md:mt-0"
        >
          <a 
            href="https://calendly.com/rachna-kolhapure-dgfuturetech/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1441E3] text-white font-montserrat font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Homehero;