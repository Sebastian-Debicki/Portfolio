import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  images: string[];
}

export const Slider: React.FC<Props> = ({ images }) => {
  const imagesList = images.map((image) => (
    <div className='slider__image-box' key={image}>
      <img src={image} alt={image} />
    </div>
  ));

  return (
    <div className='slider'>
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
