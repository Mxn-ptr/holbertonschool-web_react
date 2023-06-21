import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';
import { AppContext } from '../App/AppContext';

describe('Header tests', () => {
  let unconnectedUser;
  let connectedUser;
  let logOut;
  let defaultContext;
  let connectedContext;

  beforeEach(() => {
    unconnectedUser = {
      email: '',
      password: '',
      isLoggedIn: false
    };
    connectedUser = {
      email: 'test@gmail.com',
      password: 'test',
      isLoggedIn: true
    }
    logOut = jest.fn();
    defaultContext = {user: unconnectedUser, logOut: logOut}
    connectedContext = {user: connectedUser, logOut}
  });

  afterEach(() => {
    jest.restoreAllMocks();
  })

  it('Test that Header renders without crashing', () => {
    const wrapper = mount(<AppContext.Provider value={defaultContext}><Header/></AppContext.Provider>);
    expect(wrapper.exists()).toBe(true);
  });

  it('Verify that Header render img and h1 tags', () => {
    const wrapper = mount(<AppContext.Provider value={defaultContext}><Header/></AppContext.Provider>);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('Verify that Header with default context value not include logoutSection', () => {
    const wrapper = mount(<AppContext.Provider value={defaultContext}><Header/></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('Verify that Header with connected context value include logoutSection', () => {
    const wrapper = mount(<AppContext.Provider value={connectedContext}><Header/></AppContext.Provider>);
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('Verify that clicking on logout calling the spy', () => {
    const wrapper = mount(<AppContext.Provider value={connectedContext}><Header/></AppContext.Provider>);
    wrapper.find('em').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});
