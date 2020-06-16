import React from 'react';
import Heading from '../UIElements/Heading/Heading';
import Button from '../FormElements/Button/Button';

const ProjectsList = ({ projects, openModalHandler }) => {
  const projectsList = projects.map((project) => (
    <li className="projects__item" key={project.id}>
      <img className="projects__img" src={project.image} alt="" />
      <div className="projects__img-backdrop">
        <Heading type="tertiary">{project.title}</Heading>
        <div className="projects__img-backdrop__wrapper">
          <Button type="special--dots" onClick={() => openModalHandler(project)}>
            <span className="btn__special--dots__dot">.</span>
            <span className="btn__special--dots__dot">.</span>
            <span className="btn__special--dots__dot">.</span>
          </Button>
          <a href={project.githubLink} className="projects__link">
            Github
          </a>
          <a href={project.demoLink} className="projects__link">
            Demo
          </a>
        </div>
      </div>
    </li>
  ));

  return <ul className="projects__list">{projectsList.reverse()}</ul>;
};

export default ProjectsList;
