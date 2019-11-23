import React, { component } from "react";
import { withStyles } from "@material-ui/styles";
// import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "./avatar";
import { Link, withRouter } from "react-router-dom";
import Menu from "../Menu/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end"
  }
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Link to="/items" className={classes.link}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <Avatar />
            </IconButton>
          </Link>
          <Typography color="inherit" className={classes.grow} />
          <Link to="/share" className={classes.link_to}>
            <IconButton aria-label="add share item" color="inherit">
              <AddIcon color="primary" className={classes.button_menu_icon} />
            </IconButton>
            Share something
          </Link>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
