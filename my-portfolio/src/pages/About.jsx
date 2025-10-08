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
              <p className="card-subtext">1+ years</p>
              <p className="card-subtext">back-end developer @codeteak</p>
            </div>

            <div className="experience-card">
              <div className="card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#4086f7">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="card-title">Experience</h3>
              <p className="card-subtext">1.5+ years</p>
              <p className="card-subtext">django developer @Tharakans group</p>
            </div>
          </div>

          {/* Description Paragraph */}
         <div className="about-description">
  <p>
    <span className="text-blue">Backend Developer & Tech Lead:</span> Architect of 
    <span className="text-blue"> scalable, cloud-native systems</span> with 
    <span className="text-blue"> FastAPI, Django, and PostgreSQL</span>. I specialize in 
    <span className="text-blue"> microservices, real-time communication</span> using 
    <span className="text-blue"> WebSockets and Redis</span>, and 
    <span className="text-blue"> enterprise-grade APIs</span>. With hands-on expertise in 
    <span className="text-blue"> AWS, CI/CD automation, and team leadership</span>, I transform 
    complex business needs into 
    <span className="text-blue"> high-performance, secure solutions</span>.
  </p>
</div>

          {/* Resume Download Button */}
          <div className="resume-download">
            <a 
              href="/assets/Resume.pdf" 
              download="Alan_Joshy_Resume.pdf"
              className="download-resume-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '8px'}}>
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download Resume
            </a>
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
