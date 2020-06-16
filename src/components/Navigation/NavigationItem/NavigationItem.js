import React from 'react';
import SvgIcon from '../../UIElements/SvgIcon/SvgIcon';
import { Link } from 'react-scroll';

const NavigationItem = ({ name, iconName, onClick }) => {
  return (
    <li className="navigation__menu-item">
      <Link className="navigation__menu-link" to={name} smooth duration={1200} onClick={onClick}>
        <SvgIcon iconName={iconName} className="navigation__menu-link__icon" />
        <span className="navigation__menu-link__name">{name}</span>
      </Link>
    </li>
  );
};

export default NavigationItem;
