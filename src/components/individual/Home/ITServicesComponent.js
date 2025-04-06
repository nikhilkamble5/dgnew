import React, { useState } from 'react';
import '../../styles/ITServicesComponent.css';

 
const ITServices = () => {
  const [activeId, setActiveId] = useState(null);
 

  const items = [
    {
      id: 1,
      title: "Comprehensive IT Services",
      content: "We deliver end-to-end IT solutions including development, operations, and monitoring services tailored to your industry needs.",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Strong Security Compliance",
      content: "Our team ensures robust security compliance with global standards like ISO-27001:2022 and PCI-DSS, protecting your business assets.",
      img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Demand for Skilled IT Talent",
      content: "We help bridge the IT talent gap by providing access to highly skilled professionals for your digital transformation needs.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      title: "Leveraging Engineering Talent",
      content: "Our team of expert engineers in India combines technical excellence with bilingual capabilities to deliver superior solutions.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
      id: 5,
      title: "Global & Multilingual Advantage",
      content: "Our diverse team brings global expertise and multilingual capabilities to provide comprehensive IT solutions worldwide.",
      img: "https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];
  
  return (
    <div className="container">
      <div className="layout">
        <div className="content">
          <h1>
            Looking For a <span>Better IT</span><br />
            <span>Services Experience?</span> 
          </h1>
          <p>If you struggle with any of these common challenges, you're not alone!</p>
 
          <div className="accordion">
            {items.map(item => (
              <div key={item.id} className="accordion-item">
                <div
                  className="header"
                  onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                >
                  <h3>Challenge #{item.id} – {item.title}</h3>
                  {/* <span>{activeId === item.id ? '−' : '+'}</span> */}
                  <span>{activeId === item.id ? '▲'  : '▼'}</span>
 
                 
                </div>
                {activeId === item.id && <p>{item.content}</p>}
              </div>
            ))}
          </div>
        </div>
 
        <div className="image-container">
          <img
            src={items.find(i => i.id === (activeId || 1))?.img}
            alt="IT Services"
          />
        </div>
      </div>
    </div>
  );
};
 
export default ITServices;