import React, { Fragment } from "react";
import { Redirect, Route, Switch, NavBar } from "react-router";
import Home from "../pages/Home/Home.js";
import Items from "../pages/Items";
import Profile from "../pages/Profile";
import Share from "../pages/Share/Share";

// const profiles = ({ match }) => (
//   <div>
//     <Route
//       path={`${match.url}/profile/:id`}
//       render={({ match }) => <h2>{match.params.id}</h2>}
//     />
//   </div>
// );

export default () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/items" component={Items} />
      {/* <Route path="/profile" component={Profile} /> */}
      <Route path="/profile/:id" component={Profile} />

      <Route path="/share" component={Share} />

      {/**
       * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
       *
       * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
    </Switch>
  </Fragment>
);
