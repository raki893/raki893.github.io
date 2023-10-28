import React from 'react';
import ProjectCard from '../assets/ProjectCard';

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h3>Projects</h3>
      <h5>Recent Projects With Live Demo Link</h5>
      <div className="project-cards">
        <ProjectCard
          title="React Weather App"
          image={require('../images/project_screenshot/weather.jpg')}
          liveDemoLink="https://raki893.github.io/weather-react-app/"
          githubLink="https://github.com/raki893/weather-react-app"
        />
        <ProjectCard
          title="Old Portfolio"
          image={require('../images/project_screenshot/old.png')}
          liveDemoLink="https://raki893.github.io/weather-react-app/"
          githubLink="https://github.com/raki893/weather-react-app"
        />
        {/* Add more ProjectCard components here for other projects */}
      </div>
    </div>
  );
};

export default ProjectsSection;
