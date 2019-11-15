import React, { Component } from "react";
import Profile from "./Profile";
// import FullScreenLoader from '../../components/FullScreenLoader';
// import { Query } from 'react-apollo';
// import {  } from '../../apollo/queries';

class ProfileContainer extends Component {
  render() {
    return <Profile id={this.props.match.params.id} />; //not sure about this code
  }
}

export default ProfileContainer;
