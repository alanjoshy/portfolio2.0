import React from 'react';
import './Projects.css';

const Projects = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 4, // Scroll to next section
      behavior: 'smooth'
    });
  };

  const projects = [
    {
      title: 'Vulnerability Scanner',
      description: 'FastAPI-based web vulnerability scanner with PostgreSQL, automated scans, PDF reporting, and AI-powered analysis',
      github: 'https://github.com/alanjoshy/vulnerability-scanner',
      liveDemo: null,
      icon: 'security'
    },
    {
      title: 'API Testing Tool',
      description: 'Comprehensive API testing automation tool with FastAPI backend and React frontend for efficient endpoint testing',
      github: 'https://github.com/alanjoshy/API-testing-tool',
      liveDemo: null,
      icon: 'api'
    },
    {
      title: 'LinkedIn Automation',
      description: 'Automated LinkedIn activity tracker that fetches user interactions every two weeks with data export capabilities',
      github: 'https://github.com/alanjoshy/LinkedIn-automation',
      liveDemo: null,
      icon: 'linkedin'
    },
    {
      title: 'SchoolGiene',
      description: 'Comprehensive school management system for managing students, teachers, and educational activities',
      github: 'https://github.com/alanjoshy/SchoolGiene',
      liveDemo: null,
      icon: 'school'
    }
  ];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'security':
        return (
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            {/* Shield */}
            <path d="M50 10 L80 25 L80 50 Q80 70 50 90 Q20 70 20 50 L20 25 Z" fill="#4086f7" opacity="0.2"/>
            <path d="M50 15 L75 27 L75 50 Q75 67 50 85 Q25 67 25 50 L25 27 Z" fill="#4086f7"/>
            {/* Lock */}
            <rect x="42" y="45" width="16" height="18" fill="white" rx="2"/>
            <path d="M45 45 L45 38 Q45 32 50 32 Q55 32 55 38 L55 45" stroke="white" strokeWidth="3" fill="none"/>
            {/* Keyhole */}
            <circle cx="50" cy="52" r="3" fill="#4086f7"/>
            <rect x="49" y="52" width="2" height="6" fill="#4086f7"/>
            {/* Scan lines */}
            <line x1="30" y1="40" x2="38" y2="40" stroke="#ff6b6b" strokeWidth="2"/>
            <line x1="62" y1="40" x2="70" y2="40" stroke="#ff6b6b" strokeWidth="2"/>
            <line x1="30" y1="55" x2="38" y2="55" stroke="#4ecdc4" strokeWidth="2"/>
            <line x1="62" y1="55" x2="70" y2="55" stroke="#4ecdc4" strokeWidth="2"/>
          </svg>
        );
      case 'api':
        return (
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            {/* API Text Background */}
            <rect x="20" y="35" width="60" height="30" fill="#4086f7" rx="4"/>
            {/* Network Nodes */}
            <circle cx="25" cy="20" r="5" fill="#ff6b6b"/>
            <circle cx="50" cy="15" r="5" fill="#4ecdc4"/>
            <circle cx="75" cy="20" r="5" fill="#ffd93d"/>
            <circle cx="25" cy="80" r="5" fill="#45b7d1"/>
            <circle cx="50" cy="85" r="5" fill="#ff6b6b"/>
            <circle cx="75" cy="80" r="5" fill="#4ecdc4"/>
            {/* Connection Lines */}
            <line x1="25" y1="25" x2="25" y2="35" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="20" x2="50" y2="35" stroke="#333" strokeWidth="2"/>
            <line x1="75" y1="25" x2="75" y2="35" stroke="#333" strokeWidth="2"/>
            <line x1="25" y1="65" x2="25" y2="75" stroke="#333" strokeWidth="2"/>
            <line x1="50" y1="65" x2="50" y2="80" stroke="#333" strokeWidth="2"/>
            <line x1="75" y1="65" x2="75" y2="75" stroke="#333" strokeWidth="2"/>
            {/* Brackets */}
            <text x="30" y="55" fill="white" fontSize="20" fontWeight="bold">API</text>
          </svg>
        );
      case 'linkedin':
        return (
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            {/* LinkedIn Logo Background */}
            <rect x="15" y="15" width="70" height="70" fill="#0077b5" rx="8"/>
            {/* LinkedIn "in" */}
            <rect x="25" y="40" width="8" height="30" fill="white" rx="1"/>
            <circle cx="29" cy="30" r="5" fill="white"/>
            {/* "n" part */}
            <rect x="42" y="40" width="8" height="30" fill="white" rx="1"/>
            <rect x="50" y="40" width="8" height="20" fill="white" rx="1"/>
            <path d="M50 45 Q55 35 65 40 L65 70 L58 70 L58 45 Q58 40 54 42" fill="white"/>
            {/* Automation Gears */}
            <circle cx="72" cy="25" r="8" fill="#ffd93d" opacity="0.9"/>
            <circle cx="72" cy="25" r="5" fill="white"/>
            <circle cx="82" cy="32" r="6" fill="#ff6b6b" opacity="0.9"/>
            <circle cx="82" cy="32" r="4" fill="white"/>
            {/* Clock/Schedule */}
            <circle cx="25" cy="78" r="6" fill="white" opacity="0.8"/>
            <line x1="25" y1="78" x2="25" y2="74" stroke="#0077b5" strokeWidth="1.5"/>
            <line x1="25" y1="78" x2="28" y2="78" stroke="#0077b5" strokeWidth="1.5"/>
          </svg>
        );
      case 'school':
        return (
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
        );
      default:
        return null;
    }
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
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">
                    {renderIcon(project.icon)}
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-buttons">
                  {project.liveDemo && (
                    <button 
                      className="btn-outline" 
                      onClick={() => window.open(project.liveDemo, '_blank')}
                    >
                      Live Demo
                    </button>
                  )}
                  <button 
                    className="btn-primary" 
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '6px'}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            ))}
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
