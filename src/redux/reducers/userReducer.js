import {
  CURRENT_USER_IS_LOADING,
  DELETE_USER_ROLE,
  PASSWORD_HAS_ERRORS,
  PASSWORD_IS_OK,
  SAVE_CURRENT_USER,
  SAVE_SELLERS,
  USER_PUT_HAS_ERRORS,
  USER_PUT_IS_OK,
} from "../actions";

const initialState = {
  currentUser: {},
  userRole: "",
  isLoadingCurrentUser: false,
  userPutHasErrors: null,
  userPutIsOk: false,
  passwordHasErrors: null,
  passwordIsOK: null,
  sellers: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userRole: action.payload.role,
      };

    case DELETE_USER_ROLE:
      return {
        ...state,
        userRole: "",
      };

    case CURRENT_USER_IS_LOADING:
      return {
        ...state,
        isLoadingCurrentUser: action.payload,
      };

    case USER_PUT_IS_OK:
      return {
        ...state,
        userPutIsOk: action.payload,
      };

    case USER_PUT_HAS_ERRORS:
      return {
        ...state,
        userPutHasErrors: action.payload,
      };

    case PASSWORD_HAS_ERRORS:
      return {
        ...state,
        passwordHasErrors: action.payload,
      };

    case PASSWORD_IS_OK:
      return {
        ...state,
        passwordIsOK: action.payload,
      };

    case SAVE_SELLERS:
      return {
        ...state,
        sellers: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
