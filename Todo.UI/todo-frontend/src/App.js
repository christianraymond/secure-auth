import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Todo, NavBar, Register } from "./components";

function App() {
  return (
    <Router>
      <div>
         <NavBar/>
        <Switch>
          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
