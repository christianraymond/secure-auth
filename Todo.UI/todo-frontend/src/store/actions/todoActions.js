import axios from "axios";
import { todoAdded, todoDelete, todoList } from "../../IsAuth/isAuthenticated";
import * as actions from "./actionTypes";

const TODO_API = "http://localhost:5000";
const APIKEY = `${TODO_API}/api/todos`;

const userTokenId = (token) => {
  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};

// Add a todo
export const createTodo =(dataObject, token) => async (dispatch) => {
    dispatch({ type: actions.ADD_TODO_START });
    try {
      const res = await axios.post(`${APIKEY}`,{ ...dataObject }, userTokenId(token));
      dispatch(todoAdded(res.config.data))
    } catch (err) {
      dispatch({ type: actions.TODO_FAIL, payload: err.message });
    }
  };

//List Added Todos
export const getTodos = (token) => async (dispatch) => {
  dispatch({ type: actions.GETTING_TODOS });
  try {
    const res = await axios.get(APIKEY, userTokenId(token));
    dispatch(todoList(res.config.data));
  } catch (error) {
    dispatch({ type: actions.TODO_FAIL });
  }
};

//Get Added todo by Id
export const getTodoById = (token, id) => async (dispatch) => {
  dispatch({ type: actions.GETTING_TODOS });
  try {
    const res = await axios.get(`${APIKEY}/${id}`, userTokenId(token));
    dispatch({ type: actions.TODO_LIST, payload: res.data });
  } catch (error) {
    dispatch({ type: actions.TODO_FAIL });
  }
};

// Delete todo
export const deleteTodo = (id, token) => async (dispatch) => {
  dispatch({ type: actions.DELETE_TODO_START})
  try {
    const response = await axios.delete(`${APIKEY}/${id}`, userTokenId(token));
    const deleted = response.data;

    deleted.id = id;
    dispatch({ type: actions.DELETE_TODO_SUCCESS, payload: deleted });
  } catch (err) {
    dispatch({ type: actions.DELETE_TODO_FAIL});
  }
}

// edit todo
export const editTodo = (dataObject, token) => async (dispatch) => {
  try {
    await axios.put(`${APIKEY}/${dataObject.id}`, { ...dataObject }, userTokenId(token));
    dispatch({ type: actions.EDIT_TODO, payload: null });
  } catch(err) {
    dispatch({ type: actions.TODO_FAIL });
  }
}
