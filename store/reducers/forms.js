import { produce } from "immer";
import { ACTION_SET_FORMS } from "../actions/forms";

const initialState = {
  forms: [],
};

const forms = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_SET_FORMS:
        draft.forms.push(action.payload);
        break;
      default:
        return state;
    }
  });
};

export default forms;
