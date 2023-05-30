import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

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
});
