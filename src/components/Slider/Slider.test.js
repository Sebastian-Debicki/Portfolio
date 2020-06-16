import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';
import { Carousel } from 'react-responsive-carousel';
import { projects } from '../../data/testsDummyData';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Slider images={projects[0].images} />);
});

describe('<Slider/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one Carousel component', () => {
    expect(wrapper.find(Carousel).length).toBe(1);
  });

  it('render a correct number of images', () => {
    expect(wrapper.find('.slider__image-box').length).toBe(projects[0].images.length);
  });
});
