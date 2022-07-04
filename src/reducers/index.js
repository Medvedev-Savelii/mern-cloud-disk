import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";
import uploadReducer from "./uploadReducer";
import appReducer from "./appReducer";

const rootStore = combineReducers({
  user: userReducer,
  files: fileReducer,
  upload: uploadReducer,
  app: appReducer,
});

export const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk))
);
