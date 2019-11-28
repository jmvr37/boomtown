import React, { component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "./avatar";
import { Link, withRouter } from "react-router-dom";
import Menu from "../Menu/Menu";
import LongMenu from "../Menu/Menu";

export default function ProminentAppBar() {
  const classes = styles();

  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar className={classes.navB}>
        <Link to="/items" className={classes.link}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <Avatar />
          </IconButton>
        </Link>
        <div className={classes.shareMenu}>
          {/* <Typography color="inherit" className={classes.grow} /> */}
          <div>
            <Link to="/share" className={classes.link_to}>
              <IconButton aria-label="add share item" color="inherit">
                <AddIcon />
              </IconButton>
              Share something
            </Link>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
