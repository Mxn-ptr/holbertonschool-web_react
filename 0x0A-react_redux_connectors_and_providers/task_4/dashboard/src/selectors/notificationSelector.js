import { Map } from 'immutable';

export const filterTypeSelected = (state) => {
  return state.filter;
}

export const getNotifications = (state) => {
  return Map(state.notifications);
}

export const getUnreadNotifications = (state) => {
  const unreadNotifs = Object.values(state.notifications).filter(notif => !notif.isRead);
  return Map(unreadNotifs.map((notif) => [notif.id, notif]));
}
