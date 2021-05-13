import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/layout/Layout";
import Login from "./containers/Auth/Login/Login";
import SignUp from "./containers/Auth/SignUp/SignUp";
import Logout from "./containers/Auth/Logout/Logout";
import isAuthenticated from "./IsAuth/isAuthenticated";
const Todos = React.lazy(() => import("./containers/Todos/Todos"));

const App = ({ loggedIn}) => {
  let routes;

  debugger;
  if (loggedIn && isAuthenticated) {
    routes = (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/todos" />
        </Switch>
      </Suspense>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = ({ firebase }) => ({
  // loggedIn: firebase.auth.uid,
});

export default connect(mapStateToProps)(App);
