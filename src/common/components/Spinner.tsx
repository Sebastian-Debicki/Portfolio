import React, { useRef, useEffect } from 'react';
import { TimelineMax, Linear, Power3, gsap } from 'gsap';

import * as config from '../../core/config';

gsap.registerPlugin(TimelineMax, Linear);

export const Spinner: React.FC = () => {
  let progressBar = useRef<HTMLSpanElement | null>(null).current;
  let spinner = useRef<HTMLDivElement | null>(null).current;

  useEffect(() => {
    const tl = new TimelineMax();
    tl.to(progressBar, config.LOADING_TIME / 1000, {
      transform: 'translateY(0)',
      ease: Linear.easeNone,
    }).to(spinner, 0.7, {
      opacity: 0,
      delay: 0.1,
      ease: Power3.easeInOut,
    });
  }, [progressBar, spinner]);

  return (
    <div className='spinner' ref={(el) => (spinner = el)}>
      <div className='spinner__box'>
        <p className='spinner__text-main'>Loading...</p>
        <p className='spinner__text-sub'>Dębicki Portfolio</p>
        <div className='spinner__progress-bar'>
          <span
            className='spinner__progress-bar__bar'
            ref={(el) => (progressBar = el)}
          ></span>
        </div>
      </div>
    </div>
  );
};
