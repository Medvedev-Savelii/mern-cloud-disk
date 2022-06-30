import { combineReducer, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const rootStore = createStore();

export const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk))
);
