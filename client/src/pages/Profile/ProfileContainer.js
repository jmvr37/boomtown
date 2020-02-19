import React, { Component } from "react";
import Profile from "./Profile";
// import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import { ViewerContext } from "../../context/ViewerProvider.js";

class ProfileContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ viewer }) => {
          return (
            <Query
              query={ALL_USER_ITEMS_QUERY}
              variables={{
                id: this.props.match.params.userid || viewer.id
              }}
            >
              {({ loading, data }) => {
                console.log(
                  "items on profile container",
                  JSON.stringify(data.user)
                );
                if (loading || !data) return <p>loading</p>;
                return <Profile items={data.user.items} />;
              }}
            </Query>
          );
        }}
      </ViewerContext.Consumer>
    );
  }
}

export default ProfileContainer;
