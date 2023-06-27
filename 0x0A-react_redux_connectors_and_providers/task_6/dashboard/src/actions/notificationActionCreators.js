import { SET_LOADING_STATE } from "./courseActionTypes";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsAread = (index) => {
  return {
    type: MARK_AS_READ,
    index: index,
  };
};

export const setNotificationFilter = (filter) => {
  return {
    type: SET_TYPE_FILTER,
    filter: filter,
  };
};

export const setLoadingState = (loading) => {
  return {
    type: SET_LOADING_STATE,
    loading: loading,
  }
};

export const setNotifications = (data) => {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: data,
  }
};

export const fetchNotifications = () => {
  return function(dispatch) {
    dispatch(setLoadingState(true));
    return fetch('http://localhost:8081/notifications.json')
      .then((res) => res.json())
      .then((res) => dispatch(setNotifications(res)))
      .catch((err) => console.log(err))
      .finally(() => dispatch(setLoadingState(false)));
  };
};
