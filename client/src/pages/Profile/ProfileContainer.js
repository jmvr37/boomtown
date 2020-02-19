import React, { Component } from "react";
import Profile from "./Profile";
// import FullScreenLoader from "../../components/FullScreenLoader";
//import { Query } from "react-apollo";
// import {} from "../../apollo/queries";
//import { ViewerContext } from "../../context/ViewerProvider.js";

class ProfileContainer extends Component {
  render() {
    return <Profile />;
  }
}
export default ProfileContainer;

//    <ViewerContext.Consumer>
// {({ loading, viewer }) => {
//   if (loading) return null;
//   if (!viewer) {
//     return <Profile viewer={viewer} />; //not sure about this code
//   }
// }}
// </ViewerContext.Consumer>
