import {
  LOGIN_HAS_ERRORS,
  REGISTER_HAS_ERRORS,
  REGISTER_IS_OK,
  SAVE_ACCESS_TOKEN,
} from "../actions";

const initialState = {
  accessToken: "",
  loginErrors: null,
  registerIsOk: false,
  registerErrors: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };

    case REGISTER_IS_OK:
      return {
        ...state,
        registerIsOk: action.payload,
      };

    case REGISTER_HAS_ERRORS:
      return {
        ...state,
        registerErrors: action.payload,
      };

    case LOGIN_HAS_ERRORS:
      return {
        ...state,
        loginErrors: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
