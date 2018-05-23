import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Root from "../components/Root";
import Homepage from "../components/homepage/Homepage";

const Routes = () => {
  return (
    <Router history={hashHistory}>
        <Route path="/" component={Root}> 
            <IndexRoute component={Homepage} />
        </Route>
    </Router>
    );
};

export default Routes;
