import React, { useState } from 'react';
import { FaUserShield, FaLock, FaKey, FaChartLine, FaDesktop, FaShieldAlt, FaExclamationTriangle, FaNetworkWired, FaUserSecret, FaFileAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../../../pages/styles/AssessmentForm.css';


emailjs.init("07rAnrVT0eXRN2yYl");

const questions = [
  {
    id: 1,
    text: "Do you have access management processes?",
    icon: FaUserShield
  },
  {
    id: 2,
    text: "Do you use AD Authentication?",
    icon: FaLock
  },
  {
    id: 3,
    text: "Do you have MFA enabled?",
    icon: FaKey
  },
  {
    id: 4,
    text: "Do you monitor bandwidth?",
    icon: FaChartLine
  },
  {
    id: 5,
    text: "Do you monitor your sites?",
    icon: FaDesktop
  },
  {
    id: 6,
    text: "Do you have endpoint security?",
    icon: FaShieldAlt
  },
  {
    id: 7,
    text: "Do you have incident management?",
    icon: FaExclamationTriangle
  },
  {
    id: 8,
    text: "Do you monitor network traffic?",
    icon: FaNetworkWired
  },
  {
    id: 9,
    text: "Do you know your attackers?",
    icon: FaUserSecret
  },
  {
    id: 10,
    text: "Is confidential info restricted?",
    icon: FaFileAlt
  }
];

const AssessmentForm = ({ userData, onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    setError('');
  };

  
  const sendUserEmail = async (score) => {
    const serviceId = 'service_u71sf6u';
    const userTemplateId = 'template_zqcmrnf';
    
    const scorePercentage = Math.round((score / questions.length) * 100);
    
    const userTemplateParams = {
      to_name: userData.name,
      to_email: userData.email,
      user_score: score,
      questions_total: questions.length,
      percentage: scorePercentage,
      message: `You scored ${score} out of ${questions.length} (${scorePercentage}%) on your security assessment.`
    };
    
    console.log("Sending email to user:", userData.email);
    
    try {
      const response = await emailjs.send(serviceId, userTemplateId, userTemplateParams);
      console.log("User email sent successfully:", response.status, response.text);
      return true;
    } catch (error) {
      console.error('Error sending user email:', error);
      return false;
    }
  };

  
  const sendAdminEmail = async (score) => {
    const serviceId = 'service_u71sf6u';
    const adminTemplateId = 'template_8ba70pd';
    const adminEmail = 'nikhil.kamble@ftbcolab.com';
    
    const scorePercentage = Math.round((score / questions.length) * 100);
    
    const adminTemplateParams = {
      to_name: "Admin",
      to_email: adminEmail,
      user_name: userData.name,
      user_email: userData.email,
      user_score: score,
      questions_total: questions.length,
      percentage: scorePercentage,
      message: `${userData.name} (${userData.email}) scored ${score} out of ${questions.length} (${scorePercentage}%) on their security assessment.`
    };
    
    console.log("Sending email to admin:", adminEmail);
    
    try {
      const response = await emailjs.send(serviceId, adminTemplateId, adminTemplateParams);
      console.log("Admin email sent successfully:", response.status, response.text);
      return true;
    } catch (error) {
      console.error('Error sending admin email:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.keys(answers).length !== questions.length) {
      setError('Please answer all questions before submitting.');
      return;
    }

    setIsSubmitting(true);
    const score = Object.values(answers).filter(answer => answer === 'yes').length;
    
    try {
      
      const [userEmailSent, adminEmailSent] = await Promise.all([
        sendUserEmail(score),
        sendAdminEmail(score)
      ]);
      
      console.log('Email status - User:', userEmailSent, 'Admin:', adminEmailSent);
      
      
      onSubmit(score);
    } catch (error) {
      console.error('Error in assessment submission process:', error);
      
      onSubmit(score);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="assessment-form-container">
      <h2>Security Assessment Questions</h2>
      <p>Please answer all questions to the best of your knowledge.</p>

      <form onSubmit={handleSubmit} className="assessment-form">
        {questions.map(question => {
          const Icon = question.icon;
          return (
            <div key={question.id} className="question-group">
              <div className="question-header">
                <Icon className="question-icon" />
                <span className="question-text">{question.text}</span>
              </div>
              <div className="answer-options">
                <label className="radio-label">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="yes"
                    checked={answers[question.id] === 'yes'}
                    onChange={() => handleAnswerChange(question.id, 'yes')}
                    required
                  />
                  Yes
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value="no"
                    checked={answers[question.id] === 'no'}
                    onChange={() => handleAnswerChange(question.id, 'no')}
                    required
                  />
                  No
                </label>
              </div>
            </div>
          );
        })}

        {error && <div className="error-message">{error}</div>}

        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
          style={{ backgroundColor: '#404ad8' }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
        </button>
      </form>
    </div>
  );
};

export default AssessmentForm;