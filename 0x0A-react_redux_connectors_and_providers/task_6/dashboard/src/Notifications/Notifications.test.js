import React from 'react';
import { shallow } from "enzyme";
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

describe('Notification tests', () => {
  
  describe('When displayerDrawer is true', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
    ];

    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
      <Provider store={store}>
        <Notifications/>
      </Provider>)
    });

    it('test that Notifications renders without crashing', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('verify that Notifications renders NotificationItem with listNotifications', () => {
      expect(wrapper.find(Notifications).find(NotificationItem)).toHaveLength(3);
    });

    it('verify that Notifications renders NotificationItem without listNotifications', () => {
      wrapper = shallow(<Notifications displayDrawer={true} />)
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
    });

    it('verify that Notifications renders the right paragraph without listNotifications', () => {
      wrapper = shallow(<Notifications displayDrawer={true} />)
      const p = wrapper.find('p');
      expect(p.at(1).text()).toEqual('No new notification for now');
    });

    it('verify that the first li is correct', () => {
      const list = wrapper.find(NotificationItem);
      expect(list.first().html()).toMatch(/<li class="default_*/);
    })

    it ('verify that Notifications renders the text', () => {
      expect(wrapper.find('p').at(1).text()).toEqual('Here is the list of notifications');
    });

    it('verify that when updating the props with the same props, the component doesn\'t rerender', () => {
      const renderSpy = jest.spyOn(Notifications.prototype, 'render');
      wrapper.setProps({listNotifications: listNotifications});
      expect(renderSpy).toHaveBeenCalledTimes(1);
      jest.restoreAllMocks();
    });

    it('verify that when updating the props with the other props, the component does rerender', () => {
      const newProps = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() }},
        { id: 4, type: 'urgent', value: 'New resume available' },
      ];
      const renderSpy = jest.spyOn(Notifications.prototype, 'render');
      wrapper.setProps({listNotifications: newProps});
      expect(renderSpy).toHaveBeenCalledTimes(2);
      jest.restoreAllMocks();
    });

    it('verify that clicking on the close button calls handleHideDrawer', () => {
      const handleDisplayDrawer = jest.fn();
      const handleHideDrawer = jest.fn();
      wrapper.find('button').simulate("click");
      expect(handleHideDrawer).toHaveBeenCalled();

      jest.restoreAllMocks();
    });
  });

  describe('When displayerDrawer is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
      <Provider store={store}>
        <Notifications />
      </Provider>
      );
    });

    it('test that Notifications renders div menuItem', () => {
      const div = wrapper.find('div.menuItem');
      expect(div.exists());
    });

    it('test that Notifications not renders div Notifications', () => {
      const div = wrapper.find('div.Notifications');
      expect(!div.exists());
    });

    it('verify that clicking on the button calls handleDisplayDrawer', () => {
      const handleDisplayDrawer = jest.fn();
      wrapper.find('div.menuItem').simulate("click");
      expect(handleDisplayDrawer).toHaveBeenCalled();

      jest.restoreAllMocks();
    });
  })
})
