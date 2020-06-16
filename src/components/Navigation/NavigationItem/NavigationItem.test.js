import React from 'react';
import { shallow } from 'enzyme';
import NavigationItem from './NavigationItem';
import SvgIcon from '../../UIElements/SvgIcon/SvgIcon';
import { Link } from 'react-scroll';

// name, iconName, scrollDuration, onClick

let wrapper, onClickMock;
beforeEach(() => {
  onClickMock = jest.fn();
  wrapper = shallow(
    <NavigationItem name="About" iconName="icon-name" scrollDuration={700} onClick={onClickMock} />
  );
});

describe('<NavigationItem/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one li', () => {
    expect(wrapper.find('li').length).toBe(1);
  });

  it('has one SvgIcon', () => {
    expect(wrapper.find(SvgIcon).length).toBe(1);
  });

  it('has one Link', () => {
    expect(wrapper.find(Link).length).toBe(1);
  });

  it('has a correct props values', () => {
    expect(wrapper.find(Link).prop('to')).toEqual('About');
    expect(wrapper.find(Link).prop('duration')).toEqual(700);
    expect(wrapper.find(SvgIcon).prop('iconName')).toEqual('icon-name');
  });

  it('onClick is running when user clicked a Link', () => {
    wrapper.find(Link).simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
