import { filterTypeSelected, getNotifications, getUnreadNotifications } from "./notificationSelector";
import { Map } from 'immutable';

describe('notificationSelector tests', () => { 
  const state = {
    filter: "DEFAULT",
    notifications: {
      '1': { id: 1, isRead: false, type: "default", value: "New course available" },
      '2': { id: 2, isRead: false, type: "urgent", value: "New resume available" },
      '3': { id: 3, isRead: false, type: "urgent", value: "New data available" }
    }
  };
  it('Test filterTypeSelected function', () => {
    expect(filterTypeSelected(state)).toEqual(state.filter);
  });

  it('Test getNotifications function', () => {
    expect(getNotifications(state).toJS()).toEqual(state.notifications);
  })

  it('Test getUnreadNotifications function', () => {
    const stateUnread = {
      filter: "DEFAULT",
      notifications: {
        '1': { id: 1, isRead: false, type: "default", value: "New course available" },
        '2': { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        '3': { id: 3, isRead: false, type: "urgent", value: "New data available" }
      }
    };
    const expected_result = {
      '1': {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available'
      },
      '3': { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
  }
    expect(getUnreadNotifications(stateUnread).toJS()).toEqual(expected_result);
  })
 })
