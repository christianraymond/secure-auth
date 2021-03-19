import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Todo, NavBar, Register, Landing, FlashMessagesList, Login, ProtecRoute } from "./components";
import protectRoute from "./utils/protectRoute";

function App() {
  return (
    <Router>
        <NavBar/>
        <FlashMessagesList/>
      <div>
        <Switch>
        <Route exact path="/" component={Landing}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/todo" component={protectRoute(Todo)}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
