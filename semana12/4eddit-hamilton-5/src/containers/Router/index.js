import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Signup from "../Signup";
import Posts from "../Posts";
import PostDetails from "../PostDetails";
import ErrorPage from "../ErrorPage"
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from "react-redux"

export const routes = {
  login: "/",
  signup: "/signup",
  posts: "/posts",
  details: "/post/details/:id",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      {props.loading && <LinearProgress/>}
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={Signup} />
        <Route exact path={routes.posts} component={Posts} />
        <Route exact path={routes.details} component={PostDetails} />
        <Route component={ErrorPage} />
      </Switch>
    </ConnectedRouter>
  );
}

const mapStateToProps = (state) => ({
  loading: state.posts.isLoading
})

export default connect(mapStateToProps)(Router);
