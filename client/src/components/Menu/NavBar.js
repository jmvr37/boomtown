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
import MenuItem from "@material-ui/core/MenuItem";

const NavBar = ({ classes }) => {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

          <Link to="/share" className={classes.link_to}>
            <IconButton aria-label="add share item" color="inherit">
              <AddIcon />
            </IconButton>
            Share something
          </Link>

          <div>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            ></Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(NavBar);
