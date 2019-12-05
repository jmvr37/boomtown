import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { AppBar } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import styles from "./styles";
import { Link, withRouter } from "react-router-dom";
import { LOGOUT_MUTATION } from "../../apollo/queries";
import { Mutation } from "react-apollo";
import client from "../../apollo";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewSharpIcon from "@material-ui/icons/PowerSettingsNewSharp";

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = styles();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
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
        >
          <Link to={"/profile/"} className={classes.link}>
            <MenuItem onClick={handleClose}>
              <FingerprintIcon />
              Your Profile
            </MenuItem>
          </Link>

          <Mutation
            mutation={LOGOUT_MUTATION}
            onCompleted={() => client.resetStore()}
          >
            {LogoutMutation => (
              <MenuItem onClick={LogoutMutation}>
                <PowerSettingsNewSharpIcon className={classes.svgIcon} />
                Log Out
              </MenuItem>
            )}
          </Mutation>
        </Menu>
      </div>
    </div>
  );
}
