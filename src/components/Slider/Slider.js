import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = ({ images }) => {
  const imagesList = images.map((image) => (
    <div className="slider__image-box" key={image}>
      <img src={image} alt={image} />
    </div>
  ));

  return (
    <div className="slider">
      <Carousel
        showIndicators={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        transitionTime={600}
        interval={1800}
      >
        {imagesList}
      </Carousel>
    </div>
  );
};

export default Slider;
