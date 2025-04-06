import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../../pages/styles/AssessmentForm.css';

const ThankYou = ({ userData, score }) => {
  const percentage = (score / 10) * 100;

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <FaCheckCircle className="success-icon" />
        <h2>Thank You, {userData.name}!</h2>
        <p>Your security assessment has been completed successfully.</p>

        <div className="score-container">
          <div className="score-circle">
            <div className="score-value">{score}/10</div>
            <div className="score-label">Security Score</div>
          </div>
          <div className="score-details">
            <p>You answered {score} out of 10 security questions correctly.</p>
            <p>This represents a {percentage}% security compliance rate.</p>
          </div>
        </div>

        <div className="next-steps">
          <h3>Next Steps</h3>
          <ul>
            <li>Check your email for a detailed report of your assessment</li>
            <li>Review areas where you answered "No" to identify potential security improvements</li>
            <li>Consider scheduling a consultation with our security experts</li>
          </ul>
        </div>

        <div className="contact-info">
          <p>If you have any questions about your assessment, please contact us at:</p>
          <p className="contact-email">security@dgfuturetech.com</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 