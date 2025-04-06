import React from "react";
import "./styles/ContactUs.css";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";

import contactImage from "../../src/assets/images/contact-right-iamge.png";
import ContactForm from "../components/individual/ContactForm";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="heading">Contact Us About DG FutureTech</h1>

        <p className="description">
          Co-managed IT provides the ability to outsource IT tasks that your
          internal IT team doesn't have time for. Contact us to learn how we can
          help.
        </p>

        <div className="contact-rectangles-container">
          <div className="rectangle rectangle-1">
            <div className="rectangle-content">
              <Phone className="contact-icon" />
              <h3 className="contact-title">Call Us</h3>
              <p className="contact-text">
                Available 24/7 for your support needs
              </p>
            </div>
            <button className="contact-button">Call Now</button>
          </div>

          <div className="rectangle rectangle-2">
            <div className="rectangle-content">
              <MessageCircle className="contact-icon" />
              <h3 className="contact-title">Chat with Sales</h3>
              <p className="contact-text">Speak with our sales team</p>
            </div>
            <button className="contact-button">Start Chat</button>
          </div>

          <div className="rectangle rectangle-3">
            <div className="rectangle-content">
              <Calendar className="contact-icon" />
              <h3 className="contact-title">Schedule Meeting</h3>
              <p className="contact-text">Book a meeting with our team</p>
            </div>
            <button className="contact-button">Schedule</button>
          </div>
        </div>

        <img
          src={contactImage}
          alt="Customer Support"
          className="person-image"
        />
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default Contact;
