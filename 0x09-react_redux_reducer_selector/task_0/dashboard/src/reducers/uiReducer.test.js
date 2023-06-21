import { initialState, uiReducer } from "./uiReducer";

describe('uiReducer tests', () => { 
  it('Test uiReducer function with no actions', () => {
    expect(uiReducer(initialState, '')).toEqual(initialState);
  });

  it('Test uiReducer function with the action SELECT_COURSE', () => {
    expect(uiReducer(initialState, 'SELECT_COURSE')).toEqual(initialState);
  });

  it('Test UiReducer function with the action DISPLAY_NOTIFICATION_DRAWER', () => {
    const result = uiReducer(initialState, { type: 'DISPLAY_NOTIFICATION_DRAWER' });
    expect(result.isNotificationDrawerVisible).toEqual(true);
  })
 })
