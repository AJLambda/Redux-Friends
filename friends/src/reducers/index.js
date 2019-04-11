import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FETCH_FRIENDS,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../actions";

const initialState = {
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...state,
        error: "",
        loggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false
      };

    case FETCH_FRIENDS:
      return {
        ...state,
        error: "",
        fetchingFriends: true
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        fetchingFriends: false,
        friends: action.payload
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingFriends: false
      };

    default:
      return state;
  }
};

export default rootReducer;
