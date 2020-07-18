import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";

export const routes = {
  root: "/",
  register: "/formRegister"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        {/* <Route exact path={routes.register} component={FormRegister} /> */}
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
