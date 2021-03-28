import React from 'react';
import { Link } from 'react-scroll';

export const Logo = () => {
  const logo = '</>';

  return (
    <Link className="logo" to="header" duration={1200} smooth>
      <span className="logo__main">{logo}</span>
      <span className="logo__sub">Dębicki</span>
    </Link>
  );
};
