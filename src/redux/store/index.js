import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";

const globalReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
