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
import { ViewerContext } from "../../context/ViewerProvider.js";
import Gravatar from "react-gravatar";
import { TextField } from "@material-ui/core/";

const ItemCard = ({
  classes,

  item,

  timeNow
}) => {
  timeNow = hour => {
    return new Date(hour).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
  };

  return (
    <div className={classes.card}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={item.imgUrl}>
            {/* {item.imgUrl} */}
          </CardMedia>

          <ViewerContext.Consumer>
            {({ viewer }) => (
              <div className={classes.gravatarContainer}>
                <Gravatar
                  email={viewer.email + "/d=retro"}
                  className={classes.gravatar}
                />
                <Typography variant="headline" className={classes.userName}>
                  {viewer.fullname}
                </Typography>

                <Typography>{timeNow} </Typography>
              </div>
            )}
          </ViewerContext.Consumer>
        </CardActionArea>
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {item.description}
          </Typography>

          <Typography
            gutterBottom
            component="span"
            className={classes.spanTags}
            variant="body2"
          >
            {item.tags
              .map(tag => {
                return tag.title;
              })
              .join(",")}
          </Typography>

          <Typography />
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
