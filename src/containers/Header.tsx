import React, { useRef, useEffect } from 'react';
import { TimelineMax, Power3, gsap } from 'gsap';

import { Heading } from '../common/components/Heading';
import * as config from '../core/config';

gsap.registerPlugin(TimelineMax, Power3);

export const Header: React.FC = () => {
  let imageBox = useRef<HTMLDivElement | null>(null).current;
  let headingBox = useRef<HTMLDivElement | null>(null).current;

  useEffect(() => {
    const tl = new TimelineMax();
    tl.set(imageBox, { visibility: 'visible' });
    tl.to(imageBox, 1, {
      opacity: 1,
      delay: (config.LOADING_TIME + 300) / 1000,
      ease: Power3.easeOut,
    }).to(headingBox, 2, {
      opacity: 1,
      ease: Power3.easeOut,
      x: 0,
    });
  }, [imageBox, headingBox]);

  return (
    <header className='header' id='home'>
      <div ref={(el) => (headingBox = el)} className='header__heading-box'>
        <Heading type='primary'>Primary</Heading>
      </div>
      <div className='header__img-box' ref={(el) => (imageBox = el)}></div>
    </header>
  );
};
