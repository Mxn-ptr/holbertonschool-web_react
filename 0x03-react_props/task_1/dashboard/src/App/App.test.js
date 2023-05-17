import React from 'react';
import { shallow } from "enzyme";
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';


describe('React tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

 it('test that App renders without crashing', () => {
  expect(wrapper.exists()).toBe(true);
 });

 it('test that App contain the Notifications component', () => {
  expect(wrapper.contains(<Notifications />)).toBe(true);
 });

 it('test that App contain the Header component', () => {
  expect(wrapper.contains(<Header />)).toBe(true);
 });

 it('test that App contain the Login component', () => {
  expect(wrapper.contains(<Login />)).toBe(true);
 });

 it('test that App contain the Footer component', () => {
  expect(wrapper.contains(<Footer />)).toBe(true);
 });
});

