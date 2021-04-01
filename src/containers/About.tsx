import React from 'react';

import { Heading } from '../common/components/Heading';
import { SvgIcon } from '../common/components/SvgIcon';
import { textAboutMe } from '../common/data/about';
import { technologies } from '../common/data/technologies';

export const About: React.FC = () => {
  return (
    <section className='about' id='about'>
      <div className='about__technologies'>
        <div className='u-margin-bottom-small u-center'>
          <Heading type='secondary'>
            Technologies<span className='color'>.</span>
          </Heading>
        </div>

        <ul className='technologies__list'>
          {technologies.map((tech) => (
            <li className='technologies__item' key={tech.name}>
              <SvgIcon iconName={tech.icon} className='technologies__icon' />
              <span className='technologies__icon-name'>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='about__text'>
        <div className='u-margin-bottom-small u-center'>
          <Heading type='secondary'>
            About<span className='color'>.</span>
          </Heading>
        </div>
        <p className='about__text__paragraph'>{textAboutMe}</p>
        <div className='about__text__picture'></div>
      </div>
    </section>
  );
};
