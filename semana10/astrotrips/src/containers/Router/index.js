import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import TripsApplication from "../TripsApplication"
import FormApplication from "../FormApplication"
import Login from "../Login" 
import User from "../User" 
import TripsCreate from "../TripsCreate" 
import TripsDetails from "../TripsDetails" 


export const routes = {
  root: "/",
  tripsApplication: "/trips/list",
  login: "/login",
  user: "/user",
  tripsCreate: "/trips/create",
  tripsDetails: "/trips/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={Home} />
        <Route exact path={routes.tripsApplication} component={TripsApplication} />
        <Route exact path={routes.login} component={Login} />
        <Route exact path={routes.user} component={User} />
        <Route exact path={routes.tripsCreate} component={TripsCreate} />
        <Route exact path={routes.tripsDetails} component={TripsDetails} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
