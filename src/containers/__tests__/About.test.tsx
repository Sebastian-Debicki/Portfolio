import React from 'react';
import { shallow } from 'enzyme';

import { About } from '../About';
import { technologies } from '../../common/mocks/technologies';
import { Heading } from '../../common/components/Heading';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<About technologies={technologies} loading={false} />);
});

describe('<About/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one section', () => {
    expect(wrapper.find('section').length).toBe(1);
  });

  it('render two Heading components', () => {
    expect(wrapper.find(Heading).length).toBe(2);
  });
});
