import React from 'react';
import { shallow } from 'enzyme';

import { Navigation } from '../components/Navigation';
import { socialMediaItemsData } from '../data/navigationItems';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Navigation open={false} closeMenuHandler={jest.fn()} />);
});

describe('<Navigation/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has a one nav', () => {
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('has a correct number of social media links', () => {
    expect(wrapper.find('.navigation__social-item').length).toBe(
      socialMediaItemsData.length
    );
  });

  it('nav has a correct className by default', () => {
    expect(wrapper.find('nav').prop('className')).toEqual('navigation ');
  });

  it('nav has a correct className when navigation is open', () => {
    wrapper.setProps({ open: true });
    expect(wrapper.find('nav').prop('className')).toEqual(
      'navigation navigation__open'
    );
  });
});