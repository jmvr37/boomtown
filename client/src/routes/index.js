import React, { Fragment } from "react";
import { Redirect, Route, Switch, NavBar } from "react-router";
import Home from "../pages/Home/Home.js";
import Items from "../pages/Items";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import { ViewerContext } from "../context/ViewerProvider";
import Menu from "../components/Menu/NavBar";
export default () => (
  <ViewerContext.Consumer>
    {({ loading, viewer }) => {
      if (loading) return null;
      if (!viewer) {
        return (
          <Switch>
            {/* <Redirect from="/home" to="/items" /> */}
            <Route exact path="/welcome" component={Home} />
            <Redirect from="*" to="/welcome" />
          </Switch>
        );
      } else {
        console.log("viewer here", viewer);

        return (
          <Fragment>
            <Menu />
            <Switch>
              <Route path="/items" component={Items} />
              <Route path="/profile/" component={Profile} />
              <Redirect from="/home" to="/items" />
              <Route exact path="/home" component={Home} />
              <Route path="/share" component={Share} />
              <Redirect from="*" to="/items" />
            </Switch>
          </Fragment>
        );
      }
    }}
  </ViewerContext.Consumer>
);
