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

const timeNow = new Date().toLocaleTimeString("en-US", {
  hour: "numeric",
  hour12: true,
  minute: "numeric"
});

const ItemCard = ({ classes, state, item, tags, viewer }) => {
  // console.log(state);
  return (
    <div className={classes.card}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={item.imgUrl}>
            {item.imgUrl}
          </CardMedia>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                Jv
              </Avatar>
            }
            // title={viewer.item.fullname}
            // title={item.itemowner.fullname}
            subheader="date"
          />
        </CardActionArea>
        <CardContent className={classes.text}>
          <Typography gutterBottom variant="h5" component="h2">
            {item.titleItem}
          </Typography>

          <Typography variant="body2" color="textSecondary">
            {item.describe}
          </Typography>
          {tags &&
            tags.map(tag => {
              return (
                <Typography
                  key={tag.title}
                  value={tag.title}
                  gutterBottom
                  component="span"
                  className={classes.spanTags}
                >
                  {item.tags}
                </Typography>
              );
            })}
          <Typography
            gutterBottom
            component="span"
            className={classes.spanTags}
          />
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
