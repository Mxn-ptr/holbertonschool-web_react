import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map } from 'immutable';
import { notificationsNormalizer } from "../schema/notifications";

export const notifications = Map({
  notifications: [],
  filter: 'DEFAULT',
});

export const notificationReducer = (state = notifications, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const data = notificationsNormalizer(action.data);
      Object.keys(data.entities.notifications).forEach((notif) => {
        data.entities.notifications[notif].isRead = false
      });
      return state.merge(data.entities);
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index.toString(), 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}

