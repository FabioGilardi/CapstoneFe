import {
  CURRENT_USER_IS_LOADING,
  SAVE_CURRENT_USER,
  USER_PUT_HAS_ERRORS,
  USER_PUT_IS_OK,
} from "../actions";

const initialState = {
  currentUser: {},
  isLoadingCurrentUser: false,
  userPutHasErrors: null,
  userPutIsOk: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
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

    default:
      return state;
  }
};

export default userReducer;
