import React, { Component } from "react";
import Share from "./Share";
import { ALL_TAGS_QUERY } from "../../apollo/queries";
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from "react-apollo";
// import { } from '../../apollo/queries';
// Hint: query tags

class ShareContainer extends Component {
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ data }) => {
          return <Share classes={this.props.classes} tags={data.tags} />;

          // <ViewerContext.Provider value={{ viewer, loading }}>
          //   {children}
          // </ViewerContext.Provider>
        }}
      </Query>
    );
  }
}

export default ShareContainer;
