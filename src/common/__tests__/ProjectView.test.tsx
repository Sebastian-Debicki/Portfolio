import React from 'react';
import { shallow } from 'enzyme';

import { projects } from '../mocks/projects';
import { ProjectView } from '../components/ProjectView';
import { Heading } from '../components/Heading';
import { Slider } from '../components/Slider';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<ProjectView project={projects[0]} />);
});

describe('<ProjectView/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one Heading component', () => {
    expect(wrapper.find(Heading).length).toBe(1);
  });

  it('render one Slider component', () => {
    expect(wrapper.find(Slider).length).toBe(1);
  });

  it('render correct number of project technologies', () => {
    expect(wrapper.find('.project-view__technologies__item').length).toBe(
      projects[0].technologies.length
    );
  });
});
