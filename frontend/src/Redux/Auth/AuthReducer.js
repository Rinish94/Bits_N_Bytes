import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  USER_LOGOUT,
  // CREATE_USER_REQUEST,
  // CREATE_USER_SUCCESS,
  // CREATE_USER_FAILURE,
} from "./actionType";

const initState = {
  isAuth: false,
  currentUser: [],
  isError: false,
  isLoading: false,
};

const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_USER_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case AUTH_USER_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        currentUser: payload,
        isLoading: false,
        isError: false,
      };
    }
    case AUTH_USER_FAILURE: {
      return {
        ...state,
        isAuth: false,
        isError: true,
        isLoading: false,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }
    //
    // case CREATE_USER_REQUEST: {
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //   };
    // }
    // case CREATE_USER_SUCCESS: {
    //   return {
    //     ...state,
    //     isAuth: true,
    //     currentUser: payload,
    //     isLoading: false,
    //     isError: false,
    //   };
    // }
    // case CREATE_USER_FAILURE: {
    //   return {
    //     ...state,
    //     isAuth: false,
    //     isError: true,
    //     isLoading: false,
    //   };
    // }
    


    default:
      return state;
  }
};

export { AuthReducer };
