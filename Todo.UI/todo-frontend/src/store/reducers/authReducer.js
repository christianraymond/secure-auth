import { isEmpty } from "react-redux-firebase";
import * as actions from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  username: "",
  token: "",
  isAuthenticated: false,
};

// HELPER FUNCTIONS
const authStart = (state) => {
  return {
    ...state,
    loading: true,
  };
};

const authSuccess = (state, username) => {
  return {
    ...state,
    error: false,
    isAuthenticated: true,
    token: username.token,
  };
};
const authEnd = (state) => {
  return {
    ...state,
    loading: false,
  };
};

const authFail = (state, payload) => {
  return {
    ...state,
    error: payload,
  };
};

const cleanUp = (state) => {
  return {
    ...state,
    error: null,
    loading: false,
  };
};

const setCurrentUser = (state, payload) => {
  return {
    ...state,
    isAuthenticated: !isEmpty(payload.username),
    username: payload,
  };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CLEAN_UP:
      return cleanUp(state);

    case actions.AUTH_START:
      return authStart(state);

    case actions.AUTH_SUCCESS:
      return authSuccess(state);

    case actions.AUTH_END:
      return authEnd(state);

    case actions.AUTH_FAIL:
      return authFail(state, payload);

    case actions.SET_CURRENT_USER:
     return setCurrentUser(state, payload)
    default:
      return state;
  }
};
