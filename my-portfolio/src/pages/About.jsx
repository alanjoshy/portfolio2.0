import React from 'react';
import './About.css';

const About = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 2, // Scroll to next section
      behavior: 'smooth'
    });
  };

  return (
    <div id="about" className="about-page">
      <div className="about-section">
        <div className="about-content">
          {/* Heading */}
          <div className="about-heading">
            <h2 className="heading-line-1">Get to Know More</h2>
            <h1 className="heading-line-2">About ME</h1>
          </div>

          {/* Experience Cards */}
          <div className="experience-cards">
            <div className="experience-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4086f7">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="card-title">Experience</h3>
              <p className="card-subtext">3+ years</p>
              <p className="card-subtext">Freelancing</p>
            </div>

            <div className="experience-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4086f7">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="card-title">Experience</h3>
              <p className="card-subtext">3+ years</p>
              <p className="card-subtext">Freelancing</p>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="about-description">
            <p>
              <span className="text-blue">Entrepreneur & MERN Stack Developer:</span> Innovator at heart, I craft cutting-edge web solutions with <span className="text-blue">MongoDB, Express, React, and Node.js</span>. My entrepreneurial drive shapes the future of web tech, creating impactful user experiences.
            </p>
          </div>

          {/* Down Arrow */}
          <button className="scroll-indicator" onClick={scrollToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#4086f7">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
