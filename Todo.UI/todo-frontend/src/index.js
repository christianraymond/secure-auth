import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Router, Route, Link } from 'react-router-dom';
import history from './history';
import jwt from 'json-schema'

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'
import isAuthenticated from "./utils/isAuthenticated";
import { setCurrentUser } from "./actions/loginActions";


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.jwtToken) {
  isAuthenticated(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router >
  </Provider>,
  document.getElementById("root")
);
