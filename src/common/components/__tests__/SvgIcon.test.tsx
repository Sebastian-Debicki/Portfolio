import React from 'react';

import { shallow } from 'enzyme';
import { SvgIcon } from '../SvgIcon';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<SvgIcon className="icon" iconName="some-icon" />);
});

describe('<SvgIcon/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one svg', () => {
    expect(wrapper.find('svg').length).toBe(1);
  });

  it('has a correct className from props', () => {
    expect(wrapper.find('svg').prop('className')).toEqual('icon');
  });
});
