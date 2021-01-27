export const ACTION_SET_FORMS = "ACTION_SET_FORMS";
export const ACTION_RESET_FORMS = "ACTION_RESET_FORMS";

export const actionSetForms = (payload) => ({
  type: ACTION_SET_FORMS,
  payload,
});

export const actionResetForms = () => ({
  type: ACTION_RESET_FORMS,
});
