import React from 'react';

const ProjectCard = ({ title, image, liveDemoLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="overlay">
        <div className="content">
          <h4>{title}</h4>
          <div className="links">
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
