import { courseReducer } from "./courseReducer";
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';

describe('courseReducer', () => { 
  const state = {
    '1': { id: 1, name: "ES6", isSelected: false, credit: 60 },
    '2': { id: 2, name: "Webpack", isSelected: false, credit: 20 },
    '3': { id: 3, name: "React", isSelected: false, credit: 40 }
  };

  it('Test courseReducer function that returns an empty array', () => {
    expect(courseReducer(undefined, '')).toEqual(Map([]));
  });

  it('Test courseReducer function with FETCH_COURSE_ACTION action', () => {
    const data = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
      ]
    };
    expect(courseReducer(undefined, data).toJS()).toEqual(state);
  });

  it('Test courseReducer function with SELECT_COURSE action with index = 2', () => {
    const action = {
      type: SELECT_COURSE,
      index: 2
    };
    const expected_result = {
      '1': { id: 1, name: "ES6", isSelected: false, credit: 60 },
      '2': { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      '3': { id: 3, name: "React", isSelected: false, credit: 40 }
    };
    expect(courseReducer(Map(state), action).toJS()).toEqual(expected_result);
  });

  it('Test courseReducer function with UNSELECT_COURSE action with index = 2', () => {
    const action = {
      type: UNSELECT_COURSE,
      index: 2
    };
    const expected_result = {
      '1': { id: 1, name: "ES6", isSelected: false, credit: 60 },
      '2': { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      '3': { id: 3, name: "React", isSelected: false, credit: 40 }
    };
    const state = {
      '1': { id: 1, name: "ES6", isSelected: false, credit: 60 },
      '2': { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      '3': { id: 3, name: "React", isSelected: false, credit: 40 }
    };
    expect(courseReducer(Map(state), action).toJS()).toEqual(expected_result);
  });
 })
