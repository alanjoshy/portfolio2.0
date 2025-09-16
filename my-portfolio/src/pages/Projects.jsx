import React from 'react';
import './Projects.css';

const Projects = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 4, // Scroll to next section
      behavior: 'smooth'
    });
  };

  const handleLiveDemo = () => {
    // Add your live demo URL here
    window.open('#', '_blank');
  };

  const handleGitHub = () => {
    // Add your GitHub URL here
    window.open('#', '_blank');
  };

  return (
    <div id="project" className="projects-page">
      <div className="projects-section">
        <div className="projects-content">
          {/* Heading */}
          <div className="projects-heading">
            <h2 className="heading-line-1">Explore My</h2>
            <h1 className="heading-line-2">Projects</h1>
          </div>

          {/* Project Cards */}
          <div className="project-cards">
            {/* Card 1 */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    {/* School Building */}
                    <rect x="20" y="40" width="60" height="40" fill="#4086f7" rx="2"/>
                    <rect x="25" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="40" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="55" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="25" y="60" width="10" height="10" fill="white" rx="1"/>
                    <rect x="40" y="60" width="10" height="10" fill="white" rx="1"/>
                    <rect x="55" y="60" width="10" height="10" fill="white" rx="1"/>
                    {/* School Bus */}
                    <rect x="10" y="70" width="20" height="8" fill="#ff9500" rx="2"/>
                    <circle cx="15" cy="82" r="3" fill="#333"/>
                    <circle cx="25" cy="82" r="3" fill="#333"/>
                    {/* Graduation Cap */}
                    <path d="M70 30 L75 25 L80 30 L75 35 Z" fill="#333"/>
                    <rect x="72" y="35" width="6" height="8" fill="#333"/>
                    {/* Books */}
                    <rect x="5" y="20" width="8" height="12" fill="#ff6b6b" rx="1"/>
                    <rect x="7" y="18" width="8" height="12" fill="#4ecdc4" rx="1"/>
                    <rect x="9" y="16" width="8" height="12" fill="#45b7d1" rx="1"/>
                    {/* Computer */}
                    <rect x="85" y="50" width="12" height="8" fill="#333" rx="1"/>
                    <rect x="87" y="48" width="8" height="6" fill="#4086f7" rx="1"/>
                    {/* Megaphone */}
                    <path d="M15 15 Q20 10 25 15 L30 20 Q25 25 20 20 Z" fill="#ffd93d"/>
                    <rect x="25" y="18" width="3" height="4" fill="#ffd93d"/>
                  </svg>
                </div>
              </div>
              <h3 className="project-title">School Management System</h3>
              <div className="project-buttons">
                <button className="btn-outline" onClick={handleLiveDemo}>
                  Live Demo
                </button>
                <button className="btn-primary" onClick={handleGitHub}>
                  GitHub
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    {/* School Building */}
                    <rect x="20" y="40" width="60" height="40" fill="#4086f7" rx="2"/>
                    <rect x="25" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="40" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="55" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="25" y="60" width="10" height="10" fill="white" rx="1"/>
                    <rect x="40" y="60" width="10" height="10" fill="white" rx="1"/>
                    <rect x="55" y="60" width="10" height="10" fill="white" rx="1"/>
                    {/* School Bus */}
                    <rect x="10" y="70" width="20" height="8" fill="#ff9500" rx="2"/>
                    <circle cx="15" cy="82" r="3" fill="#333"/>
                    <circle cx="25" cy="82" r="3" fill="#333"/>
                    {/* Graduation Cap */}
                    <path d="M70 30 L75 25 L80 30 L75 35 Z" fill="#333"/>
                    <rect x="72" y="35" width="6" height="8" fill="#333"/>
                    {/* Books */}
                    <rect x="5" y="20" width="8" height="12" fill="#ff6b6b" rx="1"/>
                    <rect x="7" y="18" width="8" height="12" fill="#4ecdc4" rx="1"/>
                    <rect x="9" y="16" width="8" height="12" fill="#45b7d1" rx="1"/>
                    {/* Computer */}
                    <rect x="85" y="50" width="12" height="8" fill="#333" rx="1"/>
                    <rect x="87" y="48" width="8" height="6" fill="#4086f7" rx="1"/>
                    {/* Megaphone */}
                    <path d="M15 15 Q20 10 25 15 L30 20 Q25 25 20 20 Z" fill="#ffd93d"/>
                    <rect x="25" y="18" width="3" height="4" fill="#ffd93d"/>
                  </svg>
                </div>
              </div>
              <h3 className="project-title">School Management System</h3>
              <div className="project-buttons">
                <button className="btn-outline" onClick={handleLiveDemo}>
                  Live Demo
                </button>
                <button className="btn-primary" onClick={handleGitHub}>
                  GitHub
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="project-card">
              <div className="project-image">
                <div className="project-image-placeholder">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    {/* School Building */}
                    <rect x="20" y="40" width="60" height="40" fill="#4086f7" rx="2"/>
                    <rect x="25" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="40" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="55" y="45" width="10" height="10" fill="white" rx="1"/>
                    <rect x="25" y="60" width="10" height="10" fill="white" rx="1"/>
                    <rect x="40" y="60" width="10" height="10" fill="white" rx="1"/>
                    <rect x="55" y="60" width="10" height="10" fill="white" rx="1"/>
                    {/* School Bus */}
                    <rect x="10" y="70" width="20" height="8" fill="#ff9500" rx="2"/>
                    <circle cx="15" cy="82" r="3" fill="#333"/>
                    <circle cx="25" cy="82" r="3" fill="#333"/>
                    {/* Graduation Cap */}
                    <path d="M70 30 L75 25 L80 30 L75 35 Z" fill="#333"/>
                    <rect x="72" y="35" width="6" height="8" fill="#333"/>
                    {/* Books */}
                    <rect x="5" y="20" width="8" height="12" fill="#ff6b6b" rx="1"/>
                    <rect x="7" y="18" width="8" height="12" fill="#4ecdc4" rx="1"/>
                    <rect x="9" y="16" width="8" height="12" fill="#45b7d1" rx="1"/>
                    {/* Computer */}
                    <rect x="85" y="50" width="12" height="8" fill="#333" rx="1"/>
                    <rect x="87" y="48" width="8" height="6" fill="#4086f7" rx="1"/>
                    {/* Megaphone */}
                    <path d="M15 15 Q20 10 25 15 L30 20 Q25 25 20 20 Z" fill="#ffd93d"/>
                    <rect x="25" y="18" width="3" height="4" fill="#ffd93d"/>
                  </svg>
                </div>
              </div>
              <h3 className="project-title">School Management System</h3>
              <div className="project-buttons">
                <button className="btn-outline" onClick={handleLiveDemo}>
                  Live Demo
                </button>
                <button className="btn-primary" onClick={handleGitHub}>
                  GitHub
                </button>
              </div>
            </div>
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

export default Projects;
