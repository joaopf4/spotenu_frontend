import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import SignUpPage from "../SignUpPage";
import SplashScreen from "../SplashScreen";
import { BodyComp } from "../../components/Body/styled";
import { Header } from "../../components/Header/index"
import HomeFreeUser from "../HomeFreeUser";

export const routes = {
  root: "/",
  login: "/login",
  signup: "/signup",
  homefree: "/homefree"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
          <Route exact path={routes.root} component={SplashScreen} />
          <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.signup} component={SignUpPage} />
          <Route exact path={routes.homefree} component={HomeFreeUser} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
