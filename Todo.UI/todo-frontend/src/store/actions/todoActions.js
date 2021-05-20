import axios from "axios";
import * as actions from "./actionTypes";

const TODO_API = "http://localhost:5000";
const API = `${TODO_API}/api/todos`;

const userTokenId = (token) => {
  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};

// Add a todo
export const createTodo =
  (formProps, token, onComplete) => async (dispatch) => {
    dispatch({ type: actions.ADD_TODO_START });
    try {
      const res = await axios.post(
        `${API}`,
        { ...formProps },
        userTokenId(token)
      );
      console.log(res);
      dispatch({ type: actions.ADD_TODO_SUCCESS, payload: res.data });
      onComplete();
    } catch (err) {
      dispatch({ type: actions.TODO_FAIL, payload: err.message });
    }
  };

//List Added Todos
export const getTodo = (token) => async (dispatch) => {
  dispatch({ type: actions.GETTING_TODOS });
  try {
    const res = await axios.get(API, userTokenId(token));
    dispatch({ type: actions.TODO_LIST, payload: res.data });
  } catch (error) {
    dispatch({ type: actions.TODO_FAIL });
  }
};

// Delete todo
export const deleteTodo = (id) => async (dispatch) => {};

// edit todo
export const editTodo = (id, data) => async (dispatch, getState) => {};
