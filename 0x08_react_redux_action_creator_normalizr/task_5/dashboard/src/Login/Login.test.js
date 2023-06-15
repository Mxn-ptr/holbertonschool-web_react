import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('Test that Login renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Verify that Login render 2 label tags and 3 input tags', () => {
    expect(wrapper.find('label')).toHaveLength(2);
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('Verify that button is disabled by default', () => {
    expect(wrapper.find('input').at(2).props().disabled).toBe(true);
  });

  it('Verify that the button is enabled when the two inputs change', () => {
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@gmail.com' }});
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'test' }});
    expect(wrapper.state().enableSubmit).toBe(false);
  })
});
