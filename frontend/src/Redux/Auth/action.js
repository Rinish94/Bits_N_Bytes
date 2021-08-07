import {
  AUTH_USER_FAILURE,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  USER_LOGOUT,
} from "./actionType";

import axios from "axios";

const authUserRequest = () => {
  return {
    type: AUTH_USER_REQUEST,
  };
};

const authUserSuccess = (payload) => {
  return {
    type: AUTH_USER_SUCCESS,
    payload,
  };
};

const authUserFailure = () => {
  return {
    type: AUTH_USER_FAILURE,
  };
};

const createUserRequest = () => {
  return {
    type: CREATE_USER_REQUEST,
  };
};

const createUserSuccess = (payload) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload,
  };
};

const createUserFailure = () => {
  return {
    type: CREATE_USER_FAILURE,
  };
};

const logoutUser = () => {
  return {
    type: USER_LOGOUT,
  };
};

const authUser = (payload) => (dispatch) => {
  dispatch(authUserRequest());
  axios
    .get(`http://localhost:8811/user/signin`)
    .then((res) => {
        dispatch(authUserSuccess(res.data))
    })
    .catch((err) => {
      dispatch(authUserFailure(err));
    });
};

// const getUser = (payload) => (dispatch) => {
//   dispatch(authUserRequest);
//   axios
//     .get(`http://localhost:5000/users`)
//     .then((res) => {
//       const users = res.data;
//       for (let i = 0; i < users.length; i++) {
//         if (users[i]._id === payload) {
//           dispatch(authUserSuccess(users[i]));
//         }
//       }
//     })
//     .catch((err) => {
//       dispatch(authUserFailure(err));
//     });
// };

const createUser = (payload) => (dispatch) => {
  dispatch(createUserRequest);
  axios
    .post(`http://localhost:8811/user/register`, payload)
    .then((res) => {
      dispatch(createUserSuccess());
      dispatch(authUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(createUserFailure(err));
    });
};

export { authUser, logoutUser, createUser };
