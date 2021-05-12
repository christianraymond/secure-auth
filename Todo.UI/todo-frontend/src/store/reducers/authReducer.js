import * as actions from '../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
};

// HELPER FUNCTIONS

const authStart = state => {
  return { ...state, loading: true };
};

const authEnd = state => {
  return { ...state, loading: false };
};

const authFail = (state, payload) => {
  return { ...state, error: payload };
};

const authSuccess = state => {
  return { ...state, error: false };
};

const cleanUp = state => {
  return {
    ...state,
    error: null,
    loading: false,
  };
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.CLEAN_UP:
      return cleanUp(state);

    case actions.AUTH_START:
      return authStart(state);

    case actions.AUTH_END:
      return authEnd(state);

    case actions.AUTH_FAIL:
      return authFail(state, payload);

    case actions.AUTH_SUCCESS:
      return authSuccess(state);

    default:
      return state;
  }
};
