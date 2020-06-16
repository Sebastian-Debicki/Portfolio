import React from 'react';

const Heading = ({ type, children }) => {
  let heading;
  switch (type) {
    case 'primary':
      heading = (
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
      );
      break;
    case 'secondary':
      heading = <h2 className="heading__secondary">{children}</h2>;
      break;
    case 'tertiary':
      heading = <h3 className="heading__tertiary">{children}</h3>;
      break;
    default:
      heading = <h2 className="heading__secondary">{children}</h2>;
  }

  return <>{heading}</>;
};

export default Heading;
