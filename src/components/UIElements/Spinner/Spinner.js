import React, { useRef, useEffect } from 'react';
import { TimelineMax, Linear, Power3, gsap } from 'gsap';
gsap.registerPlugin(TimelineMax, Linear);

const Spinner = ({ loadingTimer }) => {
  let progressBar = useRef(null);
  let spinner = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();
    tl.to(progressBar, loadingTimer / 1000, {
      transform: 'translateY(0)',
      ease: Linear.easeNone,
    }).to(spinner, 0.7, {
      opacity: 0,
      delay: 0.1,
      ease: Power3.easeInOut,
    });
  }, [loadingTimer]);

  return (
    <div className="spinner" ref={(el) => (spinner = el)}>
      <div className="spinner__box">
        <p className="spinner__text-main">Loading...</p>
        <p className="spinner__text-sub">Dębicki Portfolio</p>
        <div className="spinner__progress-bar">
          <span className="spinner__progress-bar__bar" ref={(el) => (progressBar = el)}></span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
