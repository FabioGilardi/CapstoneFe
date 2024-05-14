import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import reservationReducer from "../reducers/reservationReducer";
import reviewReducer from "../reducers/reviewReducer";
import carReducer from "../reducers/carReducer";

const globalReducer = combineReducers({
  authReducer: authReducer,
  userReducer: userReducer,
  reservationReducer: reservationReducer,
  reviewReducer: reviewReducer,
  carReducer: carReducer,
});

const store = configureStore({
  reducer: globalReducer,
});

export default store;
