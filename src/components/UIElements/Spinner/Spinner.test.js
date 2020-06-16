import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Spinner />);
});

describe('<Spinner/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });
});
