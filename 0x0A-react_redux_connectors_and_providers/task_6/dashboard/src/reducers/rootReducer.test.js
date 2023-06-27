import { rootReducer } from './rootReducer';
import { Map } from 'immutable';

describe('rootReducer tests', () => { 
  it('Tests initial state of RootReducer', () => {
    const expected = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };
    const state = rootReducer(undefined, {});
    expect(typeof state).toEqual(typeof expected)
  })
 })
