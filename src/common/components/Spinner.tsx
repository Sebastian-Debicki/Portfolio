import React, { useRef, useEffect } from 'react';
import { TimelineMax, Linear, Power3, gsap } from 'gsap';

gsap.registerPlugin(TimelineMax, Linear);

interface Props {
  loadingTime: number;
}

export const Spinner: React.FC<Props> = ({ loadingTime }) => {
  let progressBar = useRef<HTMLSpanElement | null>(null).current;
  let spinner = useRef<HTMLDivElement | null>(null).current;

  useEffect(() => {
    const tl = new TimelineMax();
    tl.to(progressBar, loadingTime / 1000, {
      transform: 'translateY(0)',
      ease: Linear.easeNone,
    }).to(spinner, 0.7, {
      opacity: 0,
      delay: 0.1,
      ease: Power3.easeInOut,
    });
  }, [loadingTime, progressBar, spinner]);

  return (
    <div className="spinner" ref={(el) => (spinner = el)}>
      <div className="spinner__box">
        <p className="spinner__text-main">Loading...</p>
        <p className="spinner__text-sub">Dębicki Portfolio</p>
        <div className="spinner__progress-bar">
          <span
            className="spinner__progress-bar__bar"
            ref={(el) => (progressBar = el)}
          ></span>
        </div>
      </div>
    </div>
  );
};
