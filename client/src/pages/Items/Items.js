import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ItemGrid from "../../components/ItemGrid/itemGrid";

const Items = ({ classes }) => {
  return (
    <div>
      <ItemGrid />
    </div>
  );
};

export default withStyles(styles)(Items);
