import React from 'react';
import { shallow } from 'enzyme';

import { Projects } from '../Projects';
import { projects } from '../../common/data/projects';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(
    <Projects projects={projects} openModalHandler={jest.fn()} />
  );
});

describe('<Projects/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });
});
