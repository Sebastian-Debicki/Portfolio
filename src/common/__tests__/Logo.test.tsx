import React from 'react';
import { shallow } from 'enzyme';

import { Logo } from '../components/Logo';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Logo />);
});

describe('<Logo/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });
});
