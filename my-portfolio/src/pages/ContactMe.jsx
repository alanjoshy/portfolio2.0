import React, { useState } from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6e525846-fc57-4e36-8c43-7dd4e90dd12f',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission from Portfolio',
          to: 'a1anjshy@gmail.com',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again or email directly.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please email me directly at a1anjshy@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact-page">
      <div className="contact-section">
        <div className="contact-content">
          {/* Heading */}
          <div className="contact-heading">
            <h2 className="heading-line-1">Feel Free to</h2>
            <h1 className="heading-line-2">contact Me</h1>
          </div>

          {/* Main Content */}
          <div className="contact-main">
            {/* Left Side - Contact Form */}
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Status Message */}
                {submitStatus.message && (
                  <div className={`status-message ${submitStatus.type}`}>
                    {submitStatus.type === 'success' ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                    )}
                    {submitStatus.message}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">name :</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">email :</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">phone :</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">message :</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows="5"
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginRight: '8px'}}>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Right Side - Address Info */}
            <div className="address-container">
              <div className="address-info">
                <h3 className="address-title">#address</h3>
                <div className="address-details">
                  <p>Akshayanagar</p>
        
                  <p>Bengaluru</p>
                  <p>Karnataka 560068</p>
                  <p>India</p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4086f7">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span>a1anjshy@gmail.com</span>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#4086f7">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <span>+91 97442 05472</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-media">
            <a 
              href="https://github.com/alanjoshy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/alan--joshy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Footer */}
          <div className="contact-footer">
            <p>Made with ❤️ All rights reserved to Alan Joshy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
