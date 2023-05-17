import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('CourseList tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  })

  it('Test that CourseList renders without crashing', () => {
    expect(wrapper.exists());
  });

  it('Test CourseListRow renders 5 different rows', () => {
    const CourseListRowT = wrapper.find(CourseListRow);
    expect(CourseListRowT).toHaveLength(5);
  });
});
