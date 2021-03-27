import React from 'react';
import { shallow } from 'enzyme';

import { HamburgerButton } from '../components/HamburgerButton';

let wrapper: any, toggleMenuHandlerMock: any;
beforeEach(() => {
  toggleMenuHandlerMock = jest.fn();
  wrapper = shallow(
    <HamburgerButton toggleMenuHandler={toggleMenuHandlerMock} open={false} />
  );
});

describe('<HamburgerButton/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('has a correct className by default', () => {
    expect(wrapper.find('button').prop('className')).toEqual('hamburger');
  });

  it('has a correct className when user opened navigation', () => {
    wrapper.setProps({ open: true });
    expect(wrapper.find('button').prop('className')).toEqual(
      'hamburger hamburger--active'
    );
  });

  it('toggleMenuHandler runs when user clicked hamburgerButton', () => {
    wrapper.find('button').simulate('click');
    expect(toggleMenuHandlerMock).toHaveBeenCalled();
  });
});
