import React from 'react';
import { Link } from 'react-scroll';

const Logo = () => {
  const logo = '</>';

  return (
    <Link className="logo" to="header" duration={1200} smooth>
      <span className="logo__main">{logo}</span>
      <span className="logo__sub">Dębicki</span>
    </Link>
  );
};

export default Logo;
