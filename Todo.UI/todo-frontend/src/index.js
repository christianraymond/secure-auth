import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import styled from "styled-components";

import theme from "./utils/theme";
import GlobalStyles from "./utils/global";
import store from "./store";
import  isAuthenticated from './IsAuth/isAuthenticated';
import jwt from "json-schema";
import setCurrentUser  from './store/reducers/authReducer';

import App from "./App";
import Loader from "./components/UI/Loader/Loader";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const root = document.getElementById("root");

if (localStorage.jwtToken) {
  isAuthenticated(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Wrapper>
        <Loader />
      </Wrapper>
      <GlobalStyles />
    </>
  </ThemeProvider>,
  root
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <>
          <App />
          <GlobalStyles />
        </>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  root
);
