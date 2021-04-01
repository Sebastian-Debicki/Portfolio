import React from 'react';
import { shallow } from 'enzyme';

import { Backdrop } from '../components/Backdrop';

let wrapper: any, onCloseMock: any;
beforeEach(() => {
  onCloseMock = jest.fn();
  wrapper = shallow(<Backdrop backdropName='' onClose={onCloseMock} />);
});

describe('<Backdrop/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one div', () => {
    expect(wrapper.find('div').length).toBe(1);
  });

  it('has a correct className by default', () => {
    expect(wrapper.find('div').prop('className')).toEqual('backdrop ');
  });

  it('has a correct className when we have backdropName from props', () => {
    wrapper.setProps({ backdropName: 'navigation' });
    expect(wrapper.find('div').prop('className')).toEqual(
      'backdrop backdrop__navigation'
    );
  });

  it('onClose fn is running when backdrop was clicked', () => {
    wrapper.find('div').simulate('click');
    expect(onCloseMock).toHaveBeenCalled();
  });
});
