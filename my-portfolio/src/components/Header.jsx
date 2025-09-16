import React from 'react';
import './Header.css';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <h1 onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Alan Joshy</h1>
          </div>
        </div>
      </header>
      
      {/* Apple-like Dock */}
      <div className="dock">
        <div className="dock-container">
          <button 
            onClick={() => scrollToSection('home')} 
            className="dock-item"
            title="Home"
          >
            <span className="dock-text">Home</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('about')} 
            className="dock-item"
            title="About"
          >
            <span className="dock-text">About</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('experience')} 
            className="dock-item"
            title="Experience"
          >
            <span className="dock-text">Experience</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('project')} 
            className="dock-item"
            title="Projects"
          >
            <span className="dock-text">Projects</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')} 
            className="dock-item"
            title="Contact"
          >
            <span className="dock-text">Contact</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
