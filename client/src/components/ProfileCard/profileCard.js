import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const ProfileCard = ({ state, classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContainer}>
        <div className={classes.userName}>
          <Avatar className={classes.avatar}>jm</Avatar>
          <Typography className={classes.name}>jm</Typography>
        </div>

        <Typography className={classes.userItems} variant="h5" component="h2">
          0 Items
        </Typography>

        <Typography className={classes.userBio} variant="body2" component="h3">
          "No bio "
        </Typography>
      </CardContent>
    </Card>
  );
};
export default withStyles(styles)(ProfileCard);
