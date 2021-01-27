import produce from "immer";
import {
  ACTION_SET_USER,
  ACTION_SET_USER_TEMPORARY,
  ACTION_RESET_USER_TEMPORARY,
  ACTION_RESET_USER,
} from "../actions/auth";

const initialState = {
  profile: {},
  nameTemporary: "",
};

const auth = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_SET_USER:
        draft.profile = action.payload;
        break;
      case ACTION_RESET_USER:
        draft.profile = {};
        break;
      case ACTION_SET_USER_TEMPORARY:
        draft.nameTemporary = action.payload;
        break;
      case ACTION_RESET_USER_TEMPORARY:
        draft.nameTemporary = "";
        break;
      default:
        return state;
    }
  });
};

export default auth;
