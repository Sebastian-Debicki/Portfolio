import React from 'react';
import { shallow } from 'enzyme';
import TechnologiesList from './TechnologiesList';
import { skills } from '../../data/testsDummyData';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<TechnologiesList technologies={skills} />);
});

describe('<TechnologiesList/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one ul', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('render a correct number of technologies', () => {
    expect(wrapper.find('.technologies__item').length).toBe(skills.length);
  });
});
