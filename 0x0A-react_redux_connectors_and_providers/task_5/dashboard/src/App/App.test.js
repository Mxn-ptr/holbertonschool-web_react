import React from 'react';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('Redux tests', () => {
  it('test the mapStateToProps function', () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true
      })
    };
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true});
  });

  it('verify that return the right object if only isNotificationDrawerVisible is passed', () => {
    let state = { ui: fromJS({ isNotificationDrawerVisible: true }) };
    const result = mapStateToProps(state);
    const expectedResult = { isLoggedIn: undefined, displayDrawer: true };
    expect(result).toEqual(expectedResult);
  });

  it('verify that return the right object if isUserLoggedIn and isNotificationDrawerVisible are passed', () => {
    let state = { ui: fromJS({ isUserLoggedIn: false, isNotificationDrawerVisible: true }) };
    const result = mapStateToProps(state);
    const expectedResult = { isLoggedIn: false, displayDrawer: true };
    expect(result).toEqual(expectedResult);
  });
})
