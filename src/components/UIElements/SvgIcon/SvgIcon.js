import React from 'react';
import icons from '../../../assets/icons/sprite.svg';

const SvgIcon = ({ iconName, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <use xlinkHref={`${icons}#icon-${iconName}`} />
    </svg>
  );
};

export default SvgIcon;
