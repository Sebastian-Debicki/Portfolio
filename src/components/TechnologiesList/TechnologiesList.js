import React from 'react';
import SvgIcon from '../UIElements/SvgIcon/SvgIcon';

const TechnologiesList = ({ technologies }) => {
  const technologiesList = technologies.map((tech) => (
    <li className="technologies__item" key={tech.id}>
      <SvgIcon iconName={tech.icon} className="technologies__icon" />
      <span className="technologies__icon-name">{tech.name}</span>
    </li>
  ));
  return <ul className="technologies__list">{technologiesList}</ul>;
};

export default TechnologiesList;
