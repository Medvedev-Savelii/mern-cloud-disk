import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./fileReducer";
import fileReducer from "./userReducer";
const rootStore = combineReducers({
  user: userReducer,
  files: fileReducer,
});

export const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk))
);
