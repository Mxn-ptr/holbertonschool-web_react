import React from 'react';
import { shallow } from "enzyme";
import BodySection from './BodySection';

describe('BodySection tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>)
  })
  it('Test that BodySection renders correctly', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('Check that BodySection renders a h2 element and a p element with correct output', () => {
    const h2 = wrapper.find('h2');
    const p = wrapper.find('p');
    expect(h2.text()).toEqual('test title');
    expect(p.text()).toEqual('test children node');
  })
});
