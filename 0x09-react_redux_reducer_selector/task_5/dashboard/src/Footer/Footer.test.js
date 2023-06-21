import React from 'react';
import Footer from './Footer';
import { shallow, mount } from 'enzyme';
import { AppContext } from '../App/AppContext';

describe('Footer tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('Test that Footer renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Verify that Login render 2 label tags and 2 input tags', () => {
    const text = wrapper.find('p');
    expect(text.text()).toContain('Copyright');
  });

  it('Verify that Login doesn\'t render the paragraph "Contact Us" when isLoggedIn is false', () => {
    const unconnectedUser = {
      email : '',
      password: '',
      isLoggedIn: false,
    }
    const context = {user: unconnectedUser, logOut: () => {}}
    const wrapper = mount(<AppContext.Provider value={context}><Footer /></AppContext.Provider>);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('Verify that Login  render the paragraph "Contact Us" when isLoggedIn is true', () => {
    const connectedUser = {
      email : 'test@gmail.com',
      password: 'test',
      isLoggedIn: true,
    }
    const context = {user: connectedUser, logOut: () => {}}
    const wrapper = mount(<AppContext.Provider value={context}><Footer /></AppContext.Provider>);
    expect(wrapper.find('a')).toHaveLength(1);
  })
});
