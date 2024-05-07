import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";

const globalReducer = combineReducers({
  authReducer: authReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
