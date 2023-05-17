import React from 'react';
import { shallow } from "enzyme";
import App from './App';


describe('React tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

 it('test that App renders without crashing', () => {
  expect(wrapper.exists()).toBe(true);
 });
});
