import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { notifications, notificationReducer } from "./notificationReducer";
import { Map } from 'immutable';

describe('notificationReducer tests', () => {
  const state = {
    filter: "DEFAULT",
    notifications: {
      '1': { id: 1, isRead: false, type: "default", value: "New course available" },
      '2': { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      '3': { id: 3, isRead: false, type: "urgent", value: "New data available" }
    }
  };
  it('Test notificationReducer without actions', () => {
    expect(notificationReducer(undefined, '')).toEqual(Map(notifications));
  });

  it('Test notificationReducer with FETCH_NOTIFICATION_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" }
      ]
    };
    expect(notificationReducer(undefined, action).toJS()).toEqual(state);
  });

  it('Test notificationReducer with MARK_AS_READ action', () => {
    const action = {
      type: MARK_AS_READ,
      index: 2
    };
    const expected_result = {
      filter: "DEFAULT",
      notifications: {
        '1': { id: 1, isRead: false, type: "default", value: "New course available" },
        '2': { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        '3': { id: 3, isRead: false, type: "urgent", value: "New data available" }
      }
    };
    expect(notificationReducer(Map(state), action).toJS()).toEqual(expected_result);
  });

  it('Test notificationReducer with SET_TYPE_FILTER', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    };
    const expected_result = {
      filter: "URGENT",
      notifications: {
        '1': { id: 1, isRead: false, type: "default", value: "New course available" },
        '2': { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        '3': { id: 3, isRead: false, type: "urgent", value: "New data available" }
      }
    };
    expect(notificationReducer(Map(state), action).toJS()).toEqual(expected_result);
  })
})
