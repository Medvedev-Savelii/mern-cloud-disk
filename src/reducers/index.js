import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";

const rootStore = combineReducers({
  user: userReducer,
  files: fileReducer,
});

export const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk))
);
