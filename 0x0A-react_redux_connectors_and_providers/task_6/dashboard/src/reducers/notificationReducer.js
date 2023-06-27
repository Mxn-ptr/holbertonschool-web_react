import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, fromJS } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";
import { SET_LOADING_STATE } from "../actions/courseActionTypes";

export const notifications = Map({
  notifications: {},
  filter: 'DEFAULT',
  loading: false,
});

export const notificationReducer = (state = notifications, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const data = notificationsNormalizer(action.data);
      Object.keys(data.entities.notifications).forEach((notif) => {
        data.entities.notifications[notif].isRead = false;
      });
      return state.mergeDeep(fromJS(data.entities));
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.loading);
    default:
      return state;
  }
}

