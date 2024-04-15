import React from 'react';
import ProjectCard from '../assets/ProjectCard';

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h3>Projects</h3>
      <h5>Recent Projects With Live Demo Link</h5>
      <hr className="hr_styled"/>
      <div className="project-cards">
        <ProjectCard
          title="React Weather App"
          image={require('../images/project_screenshot/weather.jpg')}
          liveDemoLink="https://raki893.github.io/weather-react-app/"
          githubLink="https://github.com/raki893/weather-react-app"
        />
        <ProjectCard
          title="Lorem Website"
          image={require('../images/project_screenshot/lorem.png')}
          liveDemoLink="https://raki893.github.io/lorem/"
          githubLink="https://github.com/raki893/lorem"
        />
        <ProjectCard
          title="Old Portfolio"
          image={require('../images/project_screenshot/old.png')}
          liveDemoLink="https://raki893.github.io/weather-react-app/"
          githubLink="https://github.com/raki893/weather-react-app"
        />
        <ProjectCard
          title="Sample Folio"
          image={require('../images/project_screenshot/sample-folio.png')}
          liveDemoLink="https://raki893.github.io/i-n-c-i-d-i-d-u-n-t-b-o-r-e/"
          githubLink="https://github.com/raki893/i-n-c-i-d-i-d-u-n-t-b-o-r-e"
        />
        <ProjectCard
          title="Charitable Organization"
          image={require('../images/project_screenshot/Charity.png')}
          liveDemoLink="https://raki893.github.io/charitable-organization/"
          githubLink="https://github.com/raki893/charitable-organization/"
        />
        <ProjectCard
          title="Fashion Hut"
          image={require('../images/project_screenshot/fashion.png')}
          liveDemoLink="https://raki893.github.io/fashion-hut/"
          githubLink="https://github.com/raki893/fashion-hut/"
        />
        
      </div>
    </div>
  );
};

export default ProjectsSection;
