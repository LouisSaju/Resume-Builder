import CreateResume from "./Pages/createResume";
import ReviewResume from "./Pages/reviewResume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CreateResume />
        </Route>
        <Route path="/reviewResume">
          <ReviewResume />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
