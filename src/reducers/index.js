import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./userReducer";
const rootStore = combineReducers({
  user: userReducer,
});

export const store = createStore(
  rootStore,
  composeWithDevTools(applyMiddleware(thunk))
);
