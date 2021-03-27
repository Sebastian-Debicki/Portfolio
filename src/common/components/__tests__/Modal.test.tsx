import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from '../Modal';
import { Backdrop } from '../Backdrop';
import { Button } from '../Button';

let wrapper: any, onCloseMock: any;
beforeEach(() => {
  onCloseMock = jest.fn();
  wrapper = shallow(<Modal onClose={onCloseMock}>modal-content</Modal>);
});

describe('<Modal/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one Backdrop component', () => {
    expect(wrapper.find(Backdrop).length).toBe(1);
  });

  it('render one Button component', () => {
    expect(wrapper.find(Button).length).toBe(1);
  });

  it('has a correct children content from props', () => {
    expect(wrapper.find('div').text()).toEqual('<Button />modal-content');
  });

  it('onClose fn runs when Button was clicked', () => {
    wrapper.find(Button).simulate('click');
    expect(onCloseMock).toHaveBeenCalled();
  });
});
