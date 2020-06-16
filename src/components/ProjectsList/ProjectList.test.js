import React from 'react';
import { shallow } from 'enzyme';
import ProjectsList from './ProjectsList';
import { projects } from '../../data/testsDummyData';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<ProjectsList projects={projects} />);
});

describe('<ProjectsList/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one ul', () => {
    expect(wrapper.find('ul').length).toBe(1);
  });

  it('has a correct number of projects', () => {
    expect(wrapper.find('.projects__item').length).toBe(projects.length);
  });
});
