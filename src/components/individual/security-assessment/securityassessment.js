import React, { useState } from 'react';
import IntroForm from './IntroForm';
import AssessmentForm from './AssessmentForm';
import ThankYou from './ThankYou';
import heroImage from "../../../assets/images/hero.png";
import ServicesBanner from '../../ServicesBanner';

const SecurityAssessmentApp = () => {
  const [step, setStep] = useState('intro');
  const [userData, setUserData] = useState(null);
  const [score, setScore] = useState(null);

  const handleIntroSubmit = (data) => {
    setUserData(data);
    setStep('assessment');
  };

  const handleAssessmentSubmit = (assessmentScore) => {
    setScore(assessmentScore);
    setStep('thankyou');
  };

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return <IntroForm onSubmit={handleIntroSubmit} />;
      case 'assessment':
        return <AssessmentForm userData={userData} onSubmit={handleAssessmentSubmit} />;
      case 'thankyou':
        return <ThankYou userData={userData} score={score} />;
      default:
        return <IntroForm onSubmit={handleIntroSubmit} />;
    }
  };

  return (
    <>

    <ServicesBanner
    title="Security Assessment"
      heroImage={heroImage}
      compactMode={true}
    />
    <div className="security-assessment-container">
      {renderStep()}
    </div>
    </>
  );
};

export default SecurityAssessmentApp; 