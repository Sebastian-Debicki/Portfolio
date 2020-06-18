import React, { useRef, useEffect } from 'react';
import Heading from '../../components/UIElements/Heading/Heading';
import { TimelineMax, Power3, gsap } from 'gsap';
gsap.registerPlugin(TimelineMax, Power3);

const Header = ({ loadingTimer }) => {
  let imageBox = useRef(null);
  let headingBox = useRef(null);

  useEffect(() => {
    const tl = new TimelineMax();
    tl.set(imageBox, { visibility: 'visible' });
    tl.to(imageBox, 1, {
      opacity: 1,
      delay: (loadingTimer + 800) / 1000,
      ease: Power3.easeOut,
    }).to(headingBox, 2, {
      opacity: 1,
      ease: Power3.easeOut,
      x: 0,
    });
  }, [loadingTimer]);

  return (
    <header className="header" id="home">
      <div ref={(el) => (headingBox = el)} className="header__heading-box">
        <Heading type="primary">Primary</Heading>
      </div>
      <div className="header__img-box" ref={(el) => (imageBox = el)}></div>
    </header>
  );
};

export default Header;
