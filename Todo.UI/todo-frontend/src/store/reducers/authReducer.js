import {
  AUTH_START,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  IS_LOADING,
  AUTH_FAIL,
  AUTH_END,
  LOGOUT,
  USER_MEMBER,
  REDIRECT,
} from "../actions/actionTypes";

const initialState = {
  token: "",
  user: {},
  user_member: {},
  isLoggedIn: !!localStorage.getItem("user"),
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        user: action.payload.config.data,
        error: false,
        loading: false,
        isLoggedIn: true,
      };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        token: action.payload.data.token,
        user: action.payload.config.data,
        error: false,
        loading: false,
        isLoggedIn: true,
      };
    case USER_MEMBER:
      return {
        ...state,
        error: false,
        user_member: { ...action.payload },
      };
    case IS_LOADING:
      return { ...state, loading: true };
    case AUTH_FAIL:
      return { ...state, error: action.payload };
    case AUTH_END:
      return { ...state, loading: false };
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, isLoggedIn: false, user: {} };
    default:
      return state;
  }
};
