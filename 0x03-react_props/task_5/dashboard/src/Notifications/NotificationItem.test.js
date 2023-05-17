import React from 'react';
import { shallow } from "enzyme";
import NotificationItem from './NotificationItem';


describe('NotificationItem tests', () => {
 it('test that NotificationItem renders without crashing', () => {
  const wrapper = shallow(<NotificationItem />);
  expect(wrapper.exists()).toBe(true);
 });

 it ('verify that NotificationItem renders the correct props', () => {
  const wrapper = shallow(<NotificationItem type="default" value="test"/>);
  const li = wrapper.find('li');
  expect(li).toHaveLength(1);
  expect(li.prop('data-notification-type')).toEqual('default');
  expect(li.text()).toEqual('test');
 });

 it ('verify that NotificationItem renders the correct html', () => {
  const wrapper = shallow(<NotificationItem html={{__html: '<u>test</u>'}} />);
  const li = wrapper.find('li');
  expect(li).toHaveLength(1);
  expect(li.html()).toEqual('<li data-notification-type="default"><u>test</u></li>');
 });
})
