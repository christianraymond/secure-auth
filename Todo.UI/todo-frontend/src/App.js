import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/layout/Layout";
import Login from "./containers/Auth/Login/Login";
import SignUp from "./containers/Auth/SignUp/SignUp";
const Todos = React.lazy(() => import("./containers/Todos/Todos"));

const App = props => {
  const { isLoggedIn } = props.auth;
  let privateLink = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/todos" component={Todos} />
        <Redirect to="/todos" />
      </Switch>
    </Suspense>
  );

  let guestLink = (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Redirect to="/login" />
    </Switch>
  );
 return isLoggedIn ? <Layout>{privateLink}</Layout> : <Layout>{guestLink}</Layout>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isLoggedIn: state.auth
  }
}

export default connect(mapStateToProps)(App);
