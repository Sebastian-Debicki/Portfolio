import React from 'react';
import { Link } from 'react-scroll';

import {
  navigationItemsData,
  socialMediaItemsData,
} from '../data/navigationItems';
import { SvgIcon } from './SvgIcon';

interface Props {
  open: boolean;
  closeMenuHandler: () => void;
}

export const Navigation: React.FC<Props> = ({ open, closeMenuHandler }) => {
  const navigationItems = navigationItemsData.map((item) => (
    <li className="navigation__menu-item" key={item.name}>
      <Link
        className="navigation__menu-link"
        to={item.name}
        smooth
        duration={1200}
        onClick={closeMenuHandler}
      >
        <SvgIcon iconName={item.icon} className="navigation__menu-link__icon" />
        <span className="navigation__menu-link__name">{item.name}</span>
      </Link>
    </li>
  ));

  const socialMediaItems = socialMediaItemsData.map((item) => (
    <li className="navigation__social-item" key={item.name}>
      <a href={item.link} className="navigation__social-link">
        <SvgIcon iconName={item.icon} className="navigation__social-icon" />
      </a>
    </li>
  ));

  return (
    <nav className={`navigation ${open ? 'navigation__open' : ''}`}>
      <ul className="navigation__menu-list">{navigationItems}</ul>
      <ul className="navigation__social-list">{socialMediaItems}</ul>
    </nav>
  );
};
