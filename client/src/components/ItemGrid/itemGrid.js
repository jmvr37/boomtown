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

const itemGrid = ({ classes }) => {
  function Igrid() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <ShareItemPreview />
        </Grid>

        <Grid item xs={4}>
          <ShareItemPreview />
        </Grid>

        <Grid item xs={4}>
          <ShareItemPreview />
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <div className={classes.gridcontainer}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <Igrid />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Igrid />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Igrid />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(itemGrid);

{
  /* <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                // value={spacing.toString()}
                // onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid> */
}
