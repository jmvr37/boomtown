import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import styles from "./styles";

const ItemCard = ({ classes, state }) => {
  return (
    <div className={classes.Icard}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            // image={state.item.imageUrl}
          ></CardMedia>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                Jv
              </Avatar>
            }
            title="jmvr"
            date="last minute"
          />
        </CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            title="{state.item.title}"
          ></Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            // description={state.item.description}
          ></Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            BORROW
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(ItemCard);
