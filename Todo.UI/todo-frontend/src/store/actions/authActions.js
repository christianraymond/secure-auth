import * as actions from "./actionTypes";
import axios from "axios";
import { isAuthenticated } from "../../IsAuth/isAuthenticated";

const ENPOINT_URL = "http://localhost:5000";
const REG_USER_API = `${ENPOINT_URL}/api/auth/register`;

// Sign up action creator
export const signUp = (userData) => async (dispatch) => {
  dispatch({ type: actions.AUTH_START });
  try {
    // debugger;
    const res = await axios.post(REG_USER_API, userData);
    console.log(res);
    dispatch({ type: actions.REGISTER_USER_SUCCESS });
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  } finally {
    console.log("Action dispatched");
    dispatch({ type: actions.AUTH_END });
  }
};

const LOGIN_ENPOINT_URL = "http://localhost:5000";
const LOGIN_USER_API = `${LOGIN_ENPOINT_URL}/api/auth`;
// Login action creator
export const signIn = (user) => async (dispatch) => {
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await axios.post(LOGIN_USER_API, user);
    dispatch(isAuthenticated(res));
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.message });
  } finally {
    console.log("Action dispatched");
    dispatch({ type: actions.AUTH_END });
  }
};

// Logout action creator
export const signOut = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    isAuthenticated(false);
    dispatch({ type: actions.AUTH_END({}) });
  };
};
