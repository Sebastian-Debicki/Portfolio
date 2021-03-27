import React from 'react';
import { shallow } from 'enzyme';

import { Spinner } from '../Spinner';

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Spinner loadingTimer={1000} />);
});

describe('<Spinner/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });
});
