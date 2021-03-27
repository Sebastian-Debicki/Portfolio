import React from 'react';
import { shallow } from 'enzyme';

import { Projects } from '../Projects';
import { Heading } from '../../common/components/Heading';
import { projects } from '../../common/mocks/projects';

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

  it('render one Heading component', () => {
    expect(wrapper.find(Heading).length).toBe(1);
  });
});
