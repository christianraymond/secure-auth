import * as actions from "./actionTypes";
import axios from "axios";
import { isAuthenticated, isRegistered, userMemberAuth } from "../../IsAuth/isAuthenticated";

const ENPOINT_URL = "http://localhost:5000";
const REG_USER_API = `${ENPOINT_URL}/api/auth/register`;

// Sign up action creator
export const signUp = (userData) => async (dispatch) => {
  dispatch({ type: actions.AUTH_START });
  try {
    const res = await axios.post(REG_USER_API, userData);
    console.log(res);
    dispatch(isRegistered(res));
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

const END_POINT_URL = "http://localhost:5000";
const AUTH_API = `${END_POINT_URL}/api/auth`;
const USER_MEMBER = `${AUTH_API}/me`;

export const userMember = async (dispatch, token) => {
  dispatch({ type: actions.AUTH_START });
  try {
    const header = {
      headers: {
        'Authorization': `bearer ${token}`
      }
    };
    const response = await axios.get(USER_MEMBER, header);
    dispatch(userMemberAuth(response.data));
    dispatch();
  } catch (error) {
    dispatch({ type: actions.AUTH_FAIL });
  } finally {
    dispatch({ type: actions.AUTH_END });
  }
};
