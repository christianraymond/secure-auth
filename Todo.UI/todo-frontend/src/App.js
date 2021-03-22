import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Todo,
  NavBar,
  Register,
  Landing,
  FlashMessagesList,
  Login,
  ProtecRoute,
} from "./components";
import "./App.css";

import protectRoute from "./utils/protectRoute";

const App = () => {
  return (
    <Router>
      <NavBar />
      <FlashMessagesList />
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/todo" component={Todo} />
          {/* <Route path="/todo" component={protectRoute(Todo)}/> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
