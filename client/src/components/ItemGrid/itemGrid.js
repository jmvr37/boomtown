import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ItemCard from "../Card/ItemCard";

const ItemGrid = ({ classes, items }) => {
  if (!items) return <p>No items</p>;
  return (
    <div className={classes.gridcontainer}>
      <Grid container className={classes.gridBox}>
        {items.map(item => (
          <Grid key={item.id} item xs={12} className={classes.grid}>
            <ItemCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ItemGrid);
