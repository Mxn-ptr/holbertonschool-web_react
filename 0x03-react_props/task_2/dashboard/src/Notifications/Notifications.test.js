import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';


describe('Notification tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
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
  expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
 });
})
