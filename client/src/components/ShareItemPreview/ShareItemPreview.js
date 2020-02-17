import React, { Component } from "react";
import { withStyles, mergeClasses } from "@material-ui/styles";
import styles from "./styles";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../Card/ItemCard";

export class ShareItemPreview extends Component {
  render() {
    return (
      <ItemPreviewContext.Consumer>
        {({ state }) => {
          const item = {
            title: state.item.titleItem,
            description: state.item.describe,
            tags: state.item.tags,
            imageUrl: state.item.imgUrl
          };
          return (
            <div>
              <ItemCard
                item={item}
                // titleItem={state.item.title}
                // describe={state.item.description}
                // imageUrl={state.item.imgUrl}
              />
            </div>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
