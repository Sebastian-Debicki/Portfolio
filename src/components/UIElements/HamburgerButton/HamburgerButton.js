import React from 'react';

const HamburgerButton = ({ toggleMenuHandler, open }) => {
  return (
    <button
      className={`hamburger${open ? ' hamburger--active' : ''}`}
      type="button"
      onClick={toggleMenuHandler}
    >
      <span className="hamburger__box">
        <span className="hamburger__inner"></span>
      </span>
    </button>
  );
};

export default HamburgerButton;
