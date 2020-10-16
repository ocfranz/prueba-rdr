import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/global.scss";
import pageHome from "./pages/Home";
import pagePlan from "./pages/Plan";

const App = (props) => {
  return (
    <Router basename="">
      <Switch>
        <Route exact path="/" component={pageHome} />
        <Route exact path="/plan" component={pagePlan} />
      </Switch>
    </Router>
  );
};
export default App;
