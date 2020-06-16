import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Heading from '../../components/UIElements/Heading/Heading';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Header />);
});

describe('<Header/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one heading component', () => {
    expect(wrapper.find(Heading).length).toBe(1);
  });

  it('has one header', () => {
    expect(wrapper.find('header').length).toBe(1);
  });
});
