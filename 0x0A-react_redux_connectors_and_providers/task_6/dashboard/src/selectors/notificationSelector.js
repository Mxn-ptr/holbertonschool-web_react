import { Map } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.filter;
}

export const getNotifications = (state) => {
  return Map(state.notifications);
}

export const getUnreadNotifications = (state) => {
  const notifs = state.notifications.get('messages');
    if (notifs) {
        const unread = notifs.valueSeq().filter((notif) => notif.get('isRead') === false);
        return unread;
    }
    return notifs;
}
