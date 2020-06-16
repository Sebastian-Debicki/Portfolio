import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
import { skills } from '../../data/testsDummyData';
import TechnologiesList from '../../components/TechnologiesList/TechnologiesList';
import Heading from '../../components/UIElements/Heading/Heading';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<About technologies={skills} />);
});

describe('<About/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one section', () => {
    expect(wrapper.find('section').length).toBe(1);
  });

  it('render one TechnologiesList component', () => {
    expect(wrapper.find(TechnologiesList).length).toBe(1);
  });

  it('render two Heading components', () => {
    expect(wrapper.find(Heading).length).toBe(2);
  });
});
