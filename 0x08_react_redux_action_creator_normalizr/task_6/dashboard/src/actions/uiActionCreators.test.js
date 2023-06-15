import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from "./uiActionCreators";
import createMockStore from "redux-mock-store";

describe('uiActionsCreator test', () => {
  it('Test login function with correct output', () => {
    const result = login('test@gmail.com', 'test');
    const expected_result = {
      type: LOGIN,
      user: {
        email: 'test@gmail.com',
        password: 'test'
      }
    };
    expect(result).toEqual(expected_result);
  });

  it('Test logout function with correct output', () => {
    const result = logout();
    const expected_result = {
      type: LOGOUT,
    };
    expect(result).toEqual(expected_result);
  });

  it('Test displayNotificationDrawer function with correct output', () => {
    const result = displayNotificationDrawer();
    const expected_result = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(result).toEqual(expected_result);
  });

  it('Test hideNotificationDrawer function with correct output', () => {
    const result = hideNotificationDrawer();
    const expected_result = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(result).toEqual(expected_result);
  });
});
