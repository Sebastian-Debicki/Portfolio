import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';
import Heading from '../../components/UIElements/Heading/Heading';
import Input from '../../components/FormElements/Input/Input';
import Button from '../../components/FormElements/Button/Button';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Contact />);
});

describe('<Contact/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one Heading component', () => {
    expect(wrapper.find(Heading).length).toBe(1);
  });

  it('has one form', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('render four Input components', () => {
    expect(wrapper.find(Input).length).toBe(4);
  });

  it('render one Button component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });
});
