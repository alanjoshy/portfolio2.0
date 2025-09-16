import React from 'react';
import './Experience.css';

const Experience = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight * 3, // Scroll to next section
      behavior: 'smooth'
    });
  };

  // Define skill categories with their skills and icons
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Flutter", icon: "📱" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML", icon: "🌐" },
        { name: "JavaScript", icon: "⚡" },
        { name: "Figma", icon: "🎨" },
        { name: "Canva", icon: "🖼️" },
        { name: "Adobe Lightroom", icon: "📸" }
      ]
    },
    {
      title: "Back-End",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Django", icon: "🔧" },
        { name: "Flask", icon: "⚗️" },
        { name: "FastAPI", icon: "🚀" },
        { name: "PHP", icon: "🐘" },
        { name: "Node.js", icon: "🟢" },
        { name: "REST API", icon: "🔗" },
        { name: "Socket", icon: "🔌" },
        { name: "Gunicorn", icon: "🦄" },
        { name: "Apache", icon: "🪶" },
        { name: "Nginx", icon: "🟢" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: "🗄️" },
        { name: "MongoDB", icon: "🍃" },
        { name: "SQLite", icon: "💎" }
      ]
    },
    {
      title: "Cloud & Deployment",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "DigitalOcean", icon: "🌊" },
        { name: "Google Cloud", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚙️" },
        { name: "GitHub", icon: "🐙" },
        { name: "Git", icon: "📝" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Jira", icon: "🎯" },
        { name: "Notion", icon: "📋" },
        { name: "C", icon: "🔧" },
        { name: "C++", icon: "⚙️" },
        { name: "Java", icon: "☕" },
        { name: "Dart", icon: "🎯" },
        { name: "OpenCV", icon: "👁️" },
        { name: "Pygame", icon: "🎮" }
      ]
    }
  ];

  return (
    <div id="experience" className="experience-page">
      <div className="experience-section">
        <div className="experience-content">
          {/* Heading */}
          <div className="experience-heading">
            <h2 className="heading-line-1">Explore My</h2>
            <h1 className="heading-line-2">Experience</h1>
          </div>

          {/* Experience Cards */}
          <div className="experience-cards">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="experience-card">
                <h3 className="card-title">{category.title}</h3>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-icon">
                        <span className="skill-emoji">{skill.icon}</span>
                      </div>
                      <span className="skill-text">{skill.name}</span>
                    </div>
                  ))}
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

export default Experience;
