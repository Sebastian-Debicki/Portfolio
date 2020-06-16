import React from 'react';
import { navigationItemsData, socialMediaItemsData } from '../../data/navigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import SvgIcon from '../UIElements/SvgIcon/SvgIcon';

const Navigation = ({ open, closeMenuHandler }) => {
  const navigationItems = navigationItemsData.map((item) => (
    <NavigationItem
      key={item.id}
      name={item.name}
      iconName={item.icon}
      onClick={closeMenuHandler}
    />
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

export default Navigation;
