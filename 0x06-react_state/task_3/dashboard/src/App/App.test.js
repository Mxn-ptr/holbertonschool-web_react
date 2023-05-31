import React from 'react';
import { shallow, mount } from "enzyme";
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

describe('React tests', () => {

  describe('isLoggedIn is false', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
    ];

    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('test that App renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('test that App contain the Notifications component', () => {
      expect(wrapper.find('Notifications')).toHaveLength(1);
    });

    it('test that App contain the Header component', () => {
      expect(wrapper.contains(<Header />)).toBe(true);
    });

    it('test that App contain the Login component', () => {
      expect(wrapper.find('Login')).toHaveLength(1);
    });

    it('test that App contain the Footer component', () => {
      expect(wrapper.contains(<Footer />)).toBe(true);
    });

    it('test to verify logIn function updates the state correctly', () => {
      const instance = wrapper.instance();
      instance.logIn();
      expect(wrapper.state().user.isLoggedIn).toBe(true);
    })
  });

  describe('isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);

    it('Verify that Login component is not included', () => {
      expect(wrapper.contains(<Login />)).toBe(false);
    });

    it('Verify that CourseList component is included', () => {
      expect(wrapper.contains(<CourseList />));
    });
  });

  describe('calls logOut function with correct string', () => {
    const wrapper = mount(<App/>)
    window.alert = jest.fn();
    wrapper.setState({user: {isLoggedIn: true }});
    const event = new KeyboardEvent('keydown',{
      key: 'h',
      ctrlKey: true,
    });
    document.dispatchEvent(event);
    expect(wrapper.state().user.isLoggedIn).toBe(false)
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
  });

  describe('test the state of displayDrawer', () => {
    let wrapper;
    
    beforeEach(() => {
      wrapper = shallow(<App />);
    });

    it('test the default state of displayDrawer to be false', () => {
      expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('verify that after calling handleDisplayDrawer the state is now true', () => {
      const instance = wrapper.instance();
      instance.handleDisplayDrawer();
      expect(wrapper.state().displayDrawer).toBe(true);
    });

    it('verify that after calling handleHideDrawer the state is now false', () => {
      const instance = wrapper.instance();
      instance.handleHideDrawer();
      expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('test that logOut function updates the state', () => {
      const instance = wrapper.instance();
      instance.logOut();
      expect(wrapper.state().user.isLoggedIn).toBe(false);
    })
  });

  describe('Test for state', () => {
    it('Verify that calling the markNotificationAsRead delete one notifications', () => {
      const wrapper = mount(<App/>);
      expect(wrapper.state().listNotifications.length).toEqual(3);
      const instance = wrapper.instance();
      instance.markNotificationAsRead(1);
      expect(wrapper.state().listNotifications.length).toEqual(2);
    })
  })
});
