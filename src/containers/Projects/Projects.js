import React from 'react';
import Heading from '../../components/UIElements/Heading/Heading';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

const Projects = ({ projects, openModalHandler }) => {
  return (
    <section className="projects" id="projects">
      <div className="u-center u-margin-bottom-small">
        <Heading type="secondary">
          Projects<span className="color">.</span>
        </Heading>
      </div>
      <ProjectsList projects={projects} openModalHandler={openModalHandler} />
    </section>
  );
};

export default Projects;
