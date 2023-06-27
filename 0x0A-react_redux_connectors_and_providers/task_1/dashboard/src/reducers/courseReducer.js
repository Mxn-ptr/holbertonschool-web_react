import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map } from 'immutable';

export const courseReducer = (state = Map([]), action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const data = coursesNormalizer(action.data);
      Object.keys(data.entities.courses).forEach((course) => {
        data.entities.courses[course].isSelected = false;
      });
      return state.merge(data.entities.courses);
    case SELECT_COURSE:
      return state.setIn([action.index.toString(), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index.toString(), 'isSelected'], false);
    default:
      return state;
    }
}
