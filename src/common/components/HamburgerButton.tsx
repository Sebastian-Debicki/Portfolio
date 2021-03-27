import React from 'react';

interface Props {
  toggleMenuHandler: () => void;
  open: boolean;
}

export const HamburgerButton: React.FC<Props> = ({
  toggleMenuHandler,
  open,
}) => {
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
