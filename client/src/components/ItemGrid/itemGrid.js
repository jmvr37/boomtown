import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import ShareItemPreview from "../ShareItemPreview/ShareItemPreview";
import { withStyles } from "@material-ui/core/styles";
import ItemCard from "../Card/ItemCard";

const itemGrid = ({ classes, items }) => {
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

export default withStyles(styles)(itemGrid);
