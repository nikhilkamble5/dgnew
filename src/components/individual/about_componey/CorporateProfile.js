import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import corporateProfileImg from '../../../assets/images/corporat_profile.png';
// import Navbar from '../../nav/Navbar';

const CorporateProfile = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      <div className="relative max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 md:px-8">
        {/* Use shared Navbar component */}
        {/* <Navbar /> */}

        {/* Content with margin-top to account for fixed header */}
        <div className="pt-16 sm:pt-20 md:pt-24">
          {/* Mobile: Stack (default) | Desktop: Side by side (md:flex-row) */}
          <div className="block md:flex md:flex-row md:justify-center md:items-start md:gap-8">
            <div className="w-full md:w-[400px] lg:w-[450px] mb-6 md:mb-0 flex-shrink-0">
              <div className="relative bg-[rgba(14,102,143,0.42)] p-3 md:p-4 h-auto md:h-[700px]">
                {/* Corporate Profile title */}
                <h1 className="text-center mt-4 font-['Inter'] font-bold text-[16px] sm:text-[24px] md:text-[35px] lg:text-[45px] leading-[1.2] text-black">
                  Corporate Profile
                </h1>

                {/* Image - Responsive height */}
                <div className="relative mt-3 md:mt-4 w-full aspect-[4/3] md:h-[50%]">
                  <img 
                    src={corporateProfileImg} 
                    alt="Corporate Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Contact us section */}
                <div className="mt-4 w-full py-3 bg-[rgba(14,102,143,0.75)]">
                  {/* Contact section content here if needed */}
                </div>
              </div>
            </div>
            
            {/* Right section - Content */}
            <div className="w-full md:w-[400px] lg:w-[450px] h-auto md:h-[700px] overflow-y-auto pb-6 flex-shrink-0">
              <div className="flex flex-col space-y-3 md:space-y-4">
                {/* Section 01 - Company Name */}
                <div className="relative h-[70px] md:h-[100px]">
                  {/* Number */}
                  <h2 className="absolute left-[8px] md:left-[10px] top-[1px] font-['Inter'] font-bold text-[12px] sm:text-[16px] md:text-[22px] lg:text-[24px] leading-[1.2] text-black">
                    01
                  </h2>
                  
                  {/* Blue lines */}
                  <div className="absolute left-[0] top-[0] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  <div className="absolute left-[0] top-[25px] md:top-[35px] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  
                  {/* Title */}
                  <h3 className="absolute left-[45px] md:left-[70px] top-[1px] font-['Inter'] font-bold text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    COMPANY NAME
                  </h3>
                  
                  {/* Description */}
                  <p className="absolute left-[45px] md:left-[70px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[10px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    DG FutureTech India Private Limited 
                    <br />
                    (Formerly: Vizitech Solutions Private Limited)
                  </p>
                </div>
                
                {/* Section 02 - Establishment */}
                <div className="relative h-[55px] md:h-[70px]">
                  {/* Number */}
                  <h2 className="absolute left-[8px] md:left-[10px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] leading-[1.2] text-black">
                    02
                  </h2>
                  
                  {/* Blue lines */}
                  <div className="absolute left-[0] top-[0] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  <div className="absolute left-[0] top-[25px] md:top-[35px] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  
                  {/* Title */}
                  <h3 className="absolute left-[45px] md:left-[70px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    ESTABLISHMENT
                  </h3>
                  
                  {/* Description */}
                  <p className="absolute left-[45px] md:left-[70px] top-[28px] md:top-[35px] font-['Inter'] font-bold text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    Year 2012
                  </p>
                </div>
                
                {/* Section 03 - Capital */}
                <div className="relative h-[55px] md:h-[70px]">
                  {/* Number */}
                  <h2 className="absolute left-[8px] md:left-[10px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] leading-[1.2] text-black">
                    03
                  </h2>
                  
                  {/* Blue lines */}
                  <div className="absolute left-[0] top-[0] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  <div className="absolute left-[0] top-[25px] md:top-[35px] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  
                  {/* Title */}
                  <h3 className="absolute left-[45px] md:left-[70px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    CAPITAL:
                  </h3>
                  
                  {/* Description */}
                  <p className="absolute left-[45px] md:left-[70px] top-[28px] md:top-[35px] font-['Inter'] font-bold text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    2 million Indian rupees
                  </p>
                </div>
                
                {/* Section 04 - Shareholder */}
                <div className="relative h-[65px] md:h-[80px]">
                  {/* Number */}
                  <h2 className="absolute left-[8px] md:left-[10px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] leading-[1.2] text-black">
                    04
                  </h2>
                  
                  {/* Blue lines */}
                  <div className="absolute left-[0] top-[0] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  <div className="absolute left-[0] top-[25px] md:top-[35px] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  
                  {/* Title */}
                  <h3 className="absolute left-[45px] md:left-[70px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    SHAREHOLDER:
                  </h3>
                  
                  {/* Description */}
                  <p className="absolute left-[45px] md:left-[70px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    DG Financial Technology, Inc. 
                    <br />
                    (60%*) *Voting rights ratio
                  </p>
                </div>
                
                {/* Section 05 - Business Details */}
                <div className="relative h-[85px] md:h-[100px]">
                  {/* Number */}
                  <h2 className="absolute left-[8px] md:left-[10px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] leading-[1.2] text-black">
                    05
                  </h2>
                  
                  {/* Blue lines */}
                  <div className="absolute left-[0] top-[0] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  <div className="absolute left-[0] top-[25px] md:top-[35px] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  
                  {/* Title */}
                  <h3 className="absolute left-[45px] md:left-[70px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    BUSINESS DETAILS:
                  </h3>
                  
                  {/* Description */}
                  <div className="absolute left-[45px] md:left-[70px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] leading-[1.3] text-black">
                    <ul className="list-disc pl-4">
                      <li>Managed services (system operation support, system maintenance)</li>
                      <li className="mt-1">Providing system solution services</li>
                    </ul>
                  </div>
                </div>
                
                {/* Section 06 - Employee */}
                <div className="relative h-[55px] md:h-[70px]">
                  <h2 className="absolute left-[8px] md:left-[10px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] leading-[1.2] text-black">
                    06
                  </h2>
                  
                  <div className="absolute left-[0] top-[0] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  <div className="absolute left-[0] top-[25px] md:top-[35px] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  
                  <h3 className="absolute left-[45px] md:left-[70px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    EMPLOYEE
                  </h3>
                  
                  <p className="absolute left-[45px] md:left-[70px] top-[28px] md:top-[35px] font-['Inter'] font-bold text-[11px] sm:text-[12px] md:text-[14px] leading-[1.4] text-black">
                    64 Employees
                  </p>
                </div>
                
                {/* Section 07 - Base */}
                <div className="relative h-[65px] md:h-[80px] mb-4">
                  <h2 className="absolute left-[8px] md:left-[10px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[22px] lg:text-[24px] leading-[1.2] text-black">
                    07
                  </h2>
                  
                  <div className="absolute left-[0] top-[0] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  <div className="absolute left-[0] top-[25px] md:top-[35px] w-[40px] md:w-[60px] h-[2px] bg-[#1450AA]"></div>
                  
                  <h3 className="absolute left-[45px] md:left-[70px] top-[1px] font-['Inter'] font-bold text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] leading-[1.2] text-[#0E668F]">
                    BASE
                  </h3>
                  
                  <p className="absolute left-[45px] md:left-[70px] top-[28px] md:top-[35px] font-['Inter'] font-light text-[11px] sm:text-[12px] md:text-[14px] lg:text-[15px] leading-[1.3] text-black">
                    Inside DG Financial Technology, 
                    <br />
                    Digital Gate Building, 3-5-7 Ebisu 
                    <br />
                    Minami, Shibuya-ku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateProfile;