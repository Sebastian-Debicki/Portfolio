import React from 'react';

import { Heading } from '../common/components/Heading';
import { SvgIcon } from '../common/components/SvgIcon';
import { Technology } from '../common/models/Technology';

interface Props {
  technologies: Technology[];
  loading: boolean;
}

export const About: React.FC<Props> = ({ technologies, loading }) => {
  return (
    <section className="about" id="about">
      <div className="about__technologies">
        <div className="u-margin-bottom-small u-center">
          <Heading type="secondary">
            Technologies<span className="color">.</span>
          </Heading>
        </div>
        {!loading && technologies && (
          <ul className="technologies__list">
            {technologies.map((tech) => (
              <li className="technologies__item" key={tech.name}>
                <SvgIcon iconName={tech.icon} className="technologies__icon" />
                <span className="technologies__icon-name">{tech.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="about__text">
        <div className="u-margin-bottom-small u-center">
          <Heading type="secondary">
            About<span className="color">.</span>
          </Heading>
        </div>
        <p className="about__text__paragraph">
          I am a beginner front-end web developer specialized mainly in React. I
          created several of web projects using HTML, CSS and JavaScript. I am
          punctual and organized employee, always striving to achieve my goal. I
          focus mainly on personal development and try to systematically develop
          in various areas of my life. Even if I encounter a problem that is
          beyond me, I don't give up and try to solve it. This is what I wan't
          to do in the future.
        </p>
        <div className="about__text__picture"></div>
      </div>
    </section>
  );
};
