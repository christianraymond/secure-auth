//use middleware to handle the network requests to send the login details to the server.

import {
  IS_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT,
} from "../store/actions/actionTypes";

export const isAuthenticated = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const isLoading = () => {
  return {
    type: IS_LOADING,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
