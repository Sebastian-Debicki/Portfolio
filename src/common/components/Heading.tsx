import React from 'react';

interface Props {
  type: 'primary' | 'secondary' | 'tertiary';
}

export const Heading: React.FC<Props> = ({ type, children }) => {
  const heading = {
    primary: (
      <h1 className="heading__primary">
        <div>
          <span className="heading__primary-main">
            Hi<span className="color">,</span>
          </span>
          <span className="heading__primary-main">
            I<span className="color">'</span>m Sebastian
            <span className="color">.</span>
          </span>
          <span className="heading__primary-sub">
            Front-End Developer<span className="color">.</span>
          </span>
        </div>
      </h1>
    ),
    secondary: <h2 className="heading__secondary">{children}</h2>,
    tertiary: <h3 className="heading__tertiary">{children}</h3>,
  }[type];

  return heading;
};
