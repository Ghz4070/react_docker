import { produce } from 'immer';
import {
  ACTION_GET_PROJECT_INFO,
  ACTION_RESET_PROJECT,
} from '../actions/projects';

const initialState = {
  projects: [],
};

const project = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ACTION_GET_PROJECT_INFO:
        draft.projects = [...draft.projects, action.payload];
        break;
      case ACTION_RESET_PROJECT:
        draft.projects = [];
        break;
      default:
        return state;
    }
  });
};

export default project;
