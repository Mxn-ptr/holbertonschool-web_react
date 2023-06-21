import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";

export const notifications = {
  notifications: [],
  filter: 'DEFAULT',
};

export const notificationReducer = (state = notifications, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notification) => {
          return {
            ...notification,
            isRead: false
          }
        })
      }
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          if (notification.id == action.index)
          {
            return {
              ...notification,
              isRead: true
            }
          }
          return notification;
        })
      }
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      };
    default:
      return state;
  }
}

