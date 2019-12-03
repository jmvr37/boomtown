import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
import Typography from "@material-ui/core/Typography";
import ItemGrid from "../../components/ItemGrid/itemGrid";
const Profile = ({ props, classes }) => {
  return (
    <div className={classes.profilePage}>
      <ProfileCard />
      <Typography className={classes.title}></Typography>
      <div className={classes.userItems}></div>
      <div>
        <ItemGrid />
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
