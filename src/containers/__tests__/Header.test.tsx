import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../Header';
import { Heading } from '../../common/components/Heading';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Header loadingTimer={1000} />);
});

describe('<Header/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('render one heading component', () => {
    expect(wrapper.find(Heading).length).toBe(1);
  });

  it('has one header', () => {
    expect(wrapper.find('header').length).toBe(1);
  });
});
