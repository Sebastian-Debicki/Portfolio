import React from 'react';

import { Heading } from './Heading';
import { SvgIcon } from './SvgIcon';
import { Slider } from './Slider';
import { Project } from '../models/Project';

interface Props {
  project: Project | null;
}

export const ProjectView: React.FC<Props> = ({ project }) => {
  const technologiesList = project!.technologies.map((tech) => (
    <li className='project-view__technologies__item' key={tech.name}>
      <SvgIcon
        iconName={tech.icon}
        className='project-view__technologies__icon'
      />
      <span className='project-view__technologies__icon-name'>{tech.name}</span>
    </li>
  ));

  return (
    <div className='project-view'>
      <div className='u-center'>
        <Heading type='secondary'>
          {project!.title}
          <span className='color'>.</span>
        </Heading>
      </div>
      <p className='project-view__description'>{project!.description}</p>
      <ul className='project-view__technologies'>{technologiesList}</ul>
      <Slider images={project!.images} />
    </div>
  );
};
