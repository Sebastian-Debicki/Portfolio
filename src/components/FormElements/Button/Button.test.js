import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

let wrapper, onClickMock;
beforeEach(() => {
  onClickMock = jest.fn();
  wrapper = shallow(
    <Button type="primary" onClick={onClickMock}>
      button-name
    </Button>
  );
});

describe('<Button/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('has a correct className', () => {
    expect(wrapper.find('button').prop('className')).toEqual('btn btn__primary');
  });

  it('has a correct children props', () => {
    expect(wrapper.find('button').prop('children')).toEqual('button-name');
  });

  it('onClick function is running when user clicked a button', () => {
    wrapper.find('button').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
