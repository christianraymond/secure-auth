import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Router, Route, Link } from 'react-router-dom';
import history from './history';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer'


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router >
  </Provider>,
  document.getElementById("root")
);
