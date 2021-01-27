import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "./config/storage";
import thunk from "redux-thunk";

import auth from "./reducers/auth";
import forms from "./reducers/forms";

const mainReducers = combineReducers({
  auth,
  forms,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "forms"],
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
