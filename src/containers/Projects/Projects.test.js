import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import Heading from '../../components/UIElements/Heading/Heading';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Projects />);
});

describe('<Projects/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one ProjectsList component', () => {
    expect(wrapper.find(ProjectsList).length).toBe(1);
  });

  it('render one Heading component', () => {
    expect(wrapper.find(Heading).length).toBe(1);
  });
});
