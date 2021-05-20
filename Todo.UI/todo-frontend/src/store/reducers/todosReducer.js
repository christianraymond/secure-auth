import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  TODO_FAIL,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_START,
  DELETE_TODO_FAIL,
  TODO_GET,
  GETTING_TODOS,
  TODO_LIST,
} from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  todos: [],
  deleteTodo: {
    error: null,
    loading: false,
  },
  selectedTodo: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      return { ...state, loading: true };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        todos: [...state.todos, action.payload],
      };
    case GETTING_TODOS:
      return {
        ...state,
        loading: false,
      };
    case TODO_GET:
      return {
        ...state,
        todos: [...state.todos],
        selectedTodo: action.payload,
      };
    case TODO_LIST:
      return {
        ...state,
        error: "",
        todos: [...action.payload],
      };
    case TODO_FAIL:
      return { ...state, loading: false, error: action.payload };

    case DELETE_TODO_START:
      return { ...state, deleteTodo: { ...state.deleteTodo, loading: true } };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        deleteTodo: { ...state.deleteTodo, loading: false, error: false },
      };

    case DELETE_TODO_FAIL:
      return {
        ...state,
        deleteTodo: {
          ...state.deleteTodo,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};
