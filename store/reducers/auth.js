import produce from 'immer';
import {
  ACTION_SET_USER_INFO_TO_STORE,
  ACTION_RESET_USER,
} from '../actions/auth';

const initialState = {
  profile: {},
  checked: { checked: false, email: '', password: '' },
};

const auth = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_SET_USER_INFO_TO_STORE:
        draft.profile = action.payload;
        break;
      case ACTION_RESET_USER:
        draft.profile = {};
        break;
      default:
        return state;
    }
  });
};

export default auth;
