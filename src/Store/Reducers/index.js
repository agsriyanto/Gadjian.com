import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
