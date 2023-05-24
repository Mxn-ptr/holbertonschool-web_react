import React from 'react';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { shallow } from 'enzyme';

describe('WithLogging tests', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  })

  it('Test that console.log is called on mount and on unmount', () => {
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
  });

  it('Test that console.log is called on mount and on unmount with Login component', () => {
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});
