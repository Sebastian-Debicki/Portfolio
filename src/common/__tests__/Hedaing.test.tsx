import React from 'react';
import { shallow } from 'enzyme';
import { Heading } from '../components/Heading';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Heading type="primary">some-heading</Heading>);
});

describe('<Heading/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('returns correct heading by type of heading from props', () => {
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h2').length).toBe(0);
  });

  it('has a correct children prop', () => {
    wrapper.setProps({ type: 'secondary' });
    expect(wrapper.find('h2').prop('children')).toEqual('some-heading');
  });
});
