export const ACTION_SET_USER = "ACTION_SET_USER";
export const ACTION_SET_USER_TEMPORARY = "ACTION_SET_USER_TEMPORARY";
export const ACTION_RESET_USER_TEMPORARY = "ACTION_RESET_USER_TEMPORARY";
export const ACTION_RESET_USER = "ACTION_RESET_USER";

export const actionSetUser = (payload) => ({
  type: ACTION_SET_USER,
  payload,
});

export const actionResetUser = () => ({
  type: ACTION_RESET_USER,
});

export const actionSetUserTemporary = (payload) => ({
  type: ACTION_SET_USER_TEMPORARY,
  payload,
});

export const actionResetUserTemporary = () => ({
  type: ACTION_RESET_USER_TEMPORARY,
});
