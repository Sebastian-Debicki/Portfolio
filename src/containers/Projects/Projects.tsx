import React from 'react';

import { Heading } from '../../common/components/Heading';
import { Button } from '../../common/components/Button';
import { Project } from '../../common/models/Project';

interface Props {
  projects: Project[];
  openModalHandler: (project: Project) => void;
}

export const Projects: React.FC<Props> = ({ projects, openModalHandler }) => {
  const projectsList = projects.map((project) => (
    <li className="projects__item" key={project.id}>
      <img className="projects__img" src={project.image} alt="" />
      <div className="projects__img-backdrop">
        <Heading type="tertiary">{project.title}</Heading>
        <div className="projects__img-backdrop__wrapper">
          <Button
            type="special--dots"
            onClick={() => openModalHandler(project)}
          >
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

  return (
    <section className="projects" id="projects">
      <div className="u-center u-margin-bottom-small">
        <Heading type="secondary">
          Projects<span className="color">.</span>
        </Heading>
      </div>
      <ul className="projects__list">{projectsList.reverse()}</ul>
    </section>
  );
};
