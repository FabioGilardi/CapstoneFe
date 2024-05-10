import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import reservationReducer from "../reducers/reservationReducer";

const globalReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  reservationReducer: reservationReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
