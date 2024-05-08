import { CURRENT_USER_IS_LOADING, SAVE_CURRENT_USER } from "../actions";

const initialState = {
  currentUser: {},
  isLoadingCurrentUser: false,
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

    default:
      return state;
  }
};

export default userReducer;
