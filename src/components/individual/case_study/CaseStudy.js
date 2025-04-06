import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ShowCase from '../../common/ShowCase';
import "./CaseStudy.css";

const CaseStudy = ({ 
  title,
  backdrop,
  heading,
  clientInfo,
  establishmentDetails,
  challenges,
  solutions,
  images
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShowCase backimage={backdrop} title={title} />
      <div className="caseStudyOne-container">
        <div className="caseStudyOne-section">
          <h2>{heading}</h2>
        </div>
        <div className="caseStudyOne-section">
          <h2>Client information</h2>
          <p>{clientInfo}</p>
        </div>
        <div className="caseStudyOne-section">
          <ul>
            {establishmentDetails.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <img className="caseStudyOne-image" src={images.clientImage} alt='Client' />
        </div>
        <div className="caseStudyOne-section">
          <h2>Challenges faced by client companies :</h2>
          <ul>
            {challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
          <img src={images.challengeImage} className="caseStudyOne-image" alt='Challenges' />
        </div>
        <div className="caseStudyOne-section">
          <h2>Solutions Offered by DG FutureTech :</h2>
          <ul>
            {solutions.map((solution, index) => (
              <li key={index}>{solution}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CaseStudy; 