import React from 'react';

const ProjectCard = ({ title, description, buttonLabel }) => {
  return (
    <div className="card">
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{description}</p>
        <button className="btn">{buttonLabel}</button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <main className="page-content">
        <ProjectCard
          title="Mountain View"
          description="Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains"
          buttonLabel="View Trips"
        />
        <ProjectCard
          title="To The Beach"
          description="Plan your next beach trip with these fabulous destinations"
          buttonLabel="View Trips"
        />
        <ProjectCard
          title="Desert Destinations"
          description="It's the desert you've always dreamed of"
          buttonLabel="Book Now"
        />
        <ProjectCard
          title="Explore The Galaxy"
          description="Seriously, straight up, just blast off into outer space today"
          buttonLabel="Book Now"
        />
      </main>
    </div>
  );
};

export default ProjectsSection;
