import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Page404 from "../components/error/Page404";

const RoutingProvider = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path={["", "/", "/film/:id", "/search/*"]}
            component={App}
          />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
};

export default RoutingProvider;
