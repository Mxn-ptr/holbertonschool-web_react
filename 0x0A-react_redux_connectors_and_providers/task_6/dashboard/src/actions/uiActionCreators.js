import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from "./uiActionTypes";

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  }
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  }
};

export function loginRequest(email, password) {
  return function(dispatch) {
      dispatch(login(email, password));

      return fetch('http://localhost:8081/login-success.json')
      .then((res) => {
          if (res.status <= 301) {
              dispatch(loginSuccess());
          } else {
              dispatch(loginFailure());
          }
      })  
      .catch((err) => dispatch(loginFailure()))
  };
}
