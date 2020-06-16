import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Contact from './containers/Contact/Contact';
import Spinner from './components/UIElements/Spinner/Spinner';
import Logo from './components/UIElements/Logo/Logo';
import HamburgerButton from './components/UIElements/HamburgerButton/HamburgerButton';
import Navigation from './components/Navigation/Navigation';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('<App/>', () => {
  it('renders correctly', () => {
    expect(wrapper.length).toBe(1);
  });

  it('has one main', () => {
    expect(wrapper.find('main').length).toBe(1);
  });

  it('render Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('render About component', () => {
    expect(wrapper.find(About).length).toBe(1);
  });

  it('render Projects component', () => {
    expect(wrapper.find(Projects).length).toBe(1);
  });

  it('render Contact component', () => {
    expect(wrapper.find(Contact).length).toBe(1);
  });

  it('render Spinner component', () => {
    expect(wrapper.find(Spinner).length).toBe(1);
  });

  it('render Logo component', () => {
    expect(wrapper.find(Logo).length).toBe(1);
  });

  it('render HamburgerButton component', () => {
    expect(wrapper.find(HamburgerButton).length).toBe(1);
  });

  it('render Navigation component', () => {
    expect(wrapper.find(Navigation).length).toBe(1);
  });
});
