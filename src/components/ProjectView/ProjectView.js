import React from 'react';
import Heading from '../UIElements/Heading/Heading';
import SvgIcon from '../UIElements/SvgIcon/SvgIcon';
import Slider from '../Slider/Slider';

const ProjectView = ({ project }) => {
  const technologiesList = project.technologies.map((tech) => (
    <li className="project-view__technologies__item" key={tech.name}>
      <SvgIcon iconName={tech.icon} className="project-view__technologies__icon" />
      <span className="project-view__technologies__icon-name">{tech.name}</span>
    </li>
  ));

  return (
    <div className="project-view">
      <div className="u-center">
        <Heading type="secondary">
          {project.title}
          <span className="color">.</span>
        </Heading>
      </div>
      <p className="project-view__description">{project.description}</p>
      <ul className="project-view__technologies">{technologiesList}</ul>
      <Slider images={project.images} />
    </div>
  );
};

export default ProjectView;
