import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '../components/Input';

let wrapper: any, onChangeMock: any;
beforeEach(() => {
  onChangeMock = jest.fn();
  wrapper = shallow(
    <Input
      type="input"
      onChange={onChangeMock}
      value="some-value"
      inputType="email"
      required={true}
      name="Email"
      minLength={6}
    />
  );
});

describe('<Input/>', () => {
  it('render correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has a correct type of input', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('has a correct type of input', () => {
    wrapper.setProps({ type: 'textarea' });
    expect(wrapper.find('textarea').length).toBe(1);
  });

  it('has one label', () => {
    expect(wrapper.find('label').length).toBe(1);
  });

  it('onChange fn is running when user typing in input', () => {
    wrapper
      .find('input')
      .simulate('change', { tagret: { value: 'some-value' } });
    expect(onChangeMock).toHaveBeenCalled();
  });

  it('input has a correct type from props', () => {
    expect(wrapper.find('input').prop('type')).toEqual('email');
  });

  it('input has a correct value from props', () => {
    expect(wrapper.find('input').prop('value')).toEqual('some-value');
  });

  it('input has a correct required from props', () => {
    expect(wrapper.find('input').prop('required')).toEqual(true);
  });

  it('input has a correct name from props', () => {
    expect(wrapper.find('input').prop('id')).toEqual('Email');
  });

  it('input has a correct minLength from props', () => {
    expect(wrapper.find('input').prop('minLength')).toEqual(6);
  });

  it('label has a correct value', () => {
    expect(wrapper.find('label').text()).toEqual('Email');
  });

  it('label has a correct htmlFor from props', () => {
    expect(wrapper.find('label').prop('htmlFor')).toEqual('Email');
  });
});
