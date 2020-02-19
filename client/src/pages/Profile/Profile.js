import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ProfileCard from "../../components/ProfileCard";
import Typography from "@material-ui/core/Typography";
import ItemGrid from "../../components/ItemGrid";

// id":"21","title":"erer","imageurl":null,"description":"ererer","created":null,"tags":
const Profile = ({ props, classes, viewer, items }) => {
  console.log("profile items------>", items);
  return (
    <div className={classes.profilePage}>
      <ProfileCard itemCounter={items.length} />
      <Typography className={classes.title}></Typography>
      <div className={classes.userItems}></div>
      <div>
        <ItemGrid items={items} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Profile);
