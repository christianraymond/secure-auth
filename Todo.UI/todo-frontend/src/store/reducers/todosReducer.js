import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_START,
  DELETE_TODO_FAIL,
  GETTING_TODOS,
  TODO_LIST,
  EDIT_TODO,
} from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  todos: [],
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
    case TODO_LIST:
      return {
        ...state,
        error: "",
        todos: [...action.payload],
      };
    case DELETE_TODO_START:
      return { ...state, 
        loading: true,
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.Id !== todo)
        // todos: state.todos.splice(todo.id, 1)
      }
    case DELETE_TODO_FAIL:
      return {
        ...state,
        todos: {
          ...state.todos,
          loading: false,
          error: action.payload,
        },
      };
      case EDIT_TODO:
      return {
        ...state,
        todos: [...state.todos],
        selectedTodo: action.payload
      }

    default:
      return state;
  }
};
