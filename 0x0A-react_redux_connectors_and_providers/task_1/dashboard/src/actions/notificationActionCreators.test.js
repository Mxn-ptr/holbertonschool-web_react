import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('notificationActionCreators test', () => {
  it('test markAsAread function', () => {
    const result = markAsAread(1);
    const expected_result = {
      type: MARK_AS_READ,
      index: 1
    };
    expect(result).toEqual(expected_result);
  });

  it('test setNotificationFilter function', () => {
    const result = setNotificationFilter('DEFAULT');
    const expected_result = {
      type: SET_TYPE_FILTER,
      filter: "DEFAULT"
    };
    expect(result).toEqual(expected_result);
  });  
})
