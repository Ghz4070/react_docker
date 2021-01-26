import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./config/storage";
import thunk from "redux-thunk";

import auth from "./reducers/auth";
import projects from "./reducers/projects";

const mainReducers = combineReducers({
  auth,
  projects,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "projects"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, mainReducers);

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
