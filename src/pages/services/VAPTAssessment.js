import React from 'react';
import ServicesBanner from '../../components/ServicesBanner';
import heroImage from "../../assets/images/hero.png";

const PhaseCard = ({ title, activities, deliverables }) => (
  <div className="bg-white rounded-xl shadow-card p-6 mb-6 hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-security-blue mb-4 bg-security-blue text-white p-3 rounded-lg">
      {title}
    </h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-medium mb-3">Activities:</h4>
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{activity}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-medium mb-3">Deliverables:</h4>
        <ul className="space-y-2">
          {deliverables.map((deliverable, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const VAPTAssessment = () => {
  return (
    <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">

    <div className="bg-gradient-to-b from-white to-security-blue-light min-h-screen">
      <ServicesBanner
        title="VAPT Assessment"
        heroImage={heroImage}
        compactMode={true}
      />
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
         

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-security-blue mb-4">Web Applications</h2>
              <p className="text-gray-600">
                Testing the security of websites and web applications for vulnerabilities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-security-blue mb-4">Mobile Applications</h2>
              <p className="text-gray-600">
                Assessing the security of mobile apps and their APIs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-security-blue mb-4">Cloud Infrastructure</h2>
              <p className="text-gray-600">
                Evaluating the security of cloud services and applications.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 mb-16 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-security-blue mb-6">Benefits of VAPT:</h2>
            <ul className="space-y-4">
              {[
                'Thorough Security Analysis: VAPT provides a comprehensive view of an organization\'s security posture.',
                'Improved Security Posture: By addressing identified vulnerabilities, VAPT helps organizations improve their overall security.',
                'Reduced Risk: VAPT helps organizations reduce their risk of data breaches and other security incidents.'
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-white mr-3 flex-shrink-0">•</span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-security-blue text-center mb-8">VAPT Process</h2>
            
            <PhaseCard
              title="Phase 1: Planning and Scope Definition"
              activities={[
                'Determine the scope of the VAPT engagement',
                'Identify systems, applications, and networks to be tested'
              ]}
              deliverables={[
                'Detailed project scope document',
                'Testing objectives and requirements'
              ]}
            />

            <PhaseCard
              title="Phase 2: Vulnerability Assessment"
              activities={[
                'Identify potential vulnerabilities using automated tools and techniques'
              ]}
              deliverables={[
                'Comprehensive vulnerability report',
                'Categorized findings by severity'
              ]}
            />

            <PhaseCard
              title="Phase 3: Penetration Testing"
              activities={[
                'Simulate real-world attacks to exploit identified vulnerabilities'
              ]}
              deliverables={[
                'Detailed penetration testing report',
                'Attack path documentation'
              ]}
            />

            <PhaseCard
              title="Phase 4: Reporting and Remediation"
              activities={[
                'Document findings, prioritize vulnerabilities, and provide recommendations for remediation'
              ]}
              deliverables={[
                'Executive summary',
                'Technical report with findings',
                'Prioritized remediation plan'
              ]}
            />
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-card">
            <h2 className="text-2xl font-semibold text-security-blue mb-6">Use Case Scenarios for VAPT</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-security-blue mb-4">Financial Institution Security Enhancement</h3>
                <p className="text-gray-700 mb-4">
                  A leading financial institution faced security risks in its online banking platform, exposing sensitive financial data to potential cyber threats.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-security-blue mb-2">Solution:</h4>
                    <p className="text-gray-700">A comprehensive Vulnerability Assessment and Penetration Testing (VAPT) was conducted:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                      <li><span className="font-bold">Scope Defined:</span> Online banking platform, network, and internal systems</li>
                      <li><span className="font-bold">Assessment:</span> Identified vulnerabilities using automated tools and manual testing</li>
                      <li><span className="font-bold">Penetration Testing:</span> Simulated attacks to expose security gaps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-security-blue mb-2">Results:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><span className="font-bold">Issues Found:</span> SQL injection flaws, insecure API endpoints</li>
                      <li><span className="font-bold">Fixes Implemented:</span> Strengthened input validation, secured APIs</li>
                      <li><span className="font-bold">Outcome:</span> Enhanced platform security, mitigating cyber risks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default VAPTAssessment;
