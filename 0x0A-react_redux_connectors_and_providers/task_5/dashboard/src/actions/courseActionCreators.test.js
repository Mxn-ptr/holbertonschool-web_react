import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";
import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('courseActionCreators test', () => { 
  it('Test selectCourse with correct output', () => {
    const action = selectCourse(1);
    const expected_action = {
      type: SELECT_COURSE, 
      index: 1
    };
    expect(action).toEqual(expected_action);
  });

  it('Test unselectCourse with correct output', () => {
    const action = unSelectCourse(1);
    const expected_action = {
      type: UNSELECT_COURSE, 
      index: 1
    };
    expect(action).toEqual(expected_action);
  });
 });
