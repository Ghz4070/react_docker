export const ACTION_SET_USER_INFO_TO_STORE = 'SET_USER_INFO_TO_STORE';
export const ACTION_RESET_USER = 'ACTION_RESET_USER';

export const actionSetUserInfoToStore = (payload) => ({
  type: ACTION_SET_USER_INFO_TO_STORE,
  payload,
});

export const actionResetUser = () => ({
  type: ACTION_RESET_USER,
});
