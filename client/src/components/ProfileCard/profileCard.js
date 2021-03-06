import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ViewerContext } from "../../context/ViewerProvider";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { ALL_USER_ITEMS_QUERY } from "../../apollo/queries";
import ItemGrid from "../../components/ItemGrid";
import Gravatar from "react-gravatar";

class ProfileCard extends React.Component {
  static contextType = ViewerContext;
  render() {
    const { viewer } = this.context;
    const classes = styles();

    return (
      <div>
        <Query query={ALL_USER_ITEMS_QUERY} variables={{ id: viewer.id }}>
          {({ loading, error, data }) => {
            //if (loading) return <FullScreenLoader inverted />;
            if (loading) return <p>Loading...</p>;
            if (error) return <p>{`Error! ${error.message}`}</p>;

            let user = data;

            console.log("user data from profile card", user);
            return (
              <div>
                <Card style={classes.card}>
                  <CardContent style={classes.cardContainer}>
                    <div style={classes.gravatarContainer}>
                      <Gravatar
                        email={viewer.email + "/d=retro"}
                        style={classes.gravatar}
                      />
                      <Typography variant="headline" style={classes.userName}>
                        {viewer.fullname}
                      </Typography>
                    </div>
                    <Typography component="p">
                      {this.props.itemCounter} Items shared 0 Items borrowed
                      <br />
                      {viewer.bio ? viewer.bio : '"No bio provided."'}
                    </Typography>

                    <Typography
                      variant="headline"
                      component="h1"
                      style={classes.sharedTitle}
                    >
                      {/* Shared Items */}
                    </Typography>
                  </CardContent>
                </Card>
                {/* <ItemGrid items={user.ALL_USER_ITEMS_QUERY} /> */}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  classes: PropTypes.object
};
export default withStyles(styles)(ProfileCard);

{
  /* <Card className={classes.card}>
<CardContent className={classes.cardContainer}>
  <div className={classes.userName}>
    <Avatar className={classes.avatar}>jm</Avatar>
    <Typography className={classes.name}>jm </Typography>
  </div>

  <Typography className={classes.userItems} variant="h5" component="h2">
    0 Items
  </Typography>

  <Typography className={classes.userBio} variant="body2" component="h3">
    "No bio "
  </Typography>
</CardContent>
</Card> */
}
