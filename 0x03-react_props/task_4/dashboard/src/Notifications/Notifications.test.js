import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('Notification tests', () => {
  
  describe('When displayerDrawer is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true}/>);
    });

    it('test that Notifications renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('verify that Notifications renders NotificationItem', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('verify that the first li is correct', () => {
      const list = wrapper.find(NotificationItem);
      expect(list.first().html()).toEqual('<li data-notification-type="default">New course available</li>');
    })

    it ('verify that Notifications renders the text', () => {
      expect(wrapper.find('p').at(1).text()).toEqual('Here is the list of notifications');
    });
  });

  describe('When displayerDrawer is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications />);
    });

    it('test that Notifications renders div menuItem', () => {
      const div = wrapper.find('div.menuItem');
      expect(div.exists());
    });

    it('test that Notifications not renders div Notifications', () => {
      const div = wrapper.find('div.Notifications');
      expect(!div.exists());
    });
  })
})
