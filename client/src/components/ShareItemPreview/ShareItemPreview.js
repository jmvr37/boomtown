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
          return (
            <div>
              <ItemCard
                item={state.item}
                titleItem={state.item.title}
                describe={state.item.description}
                imageUrl={state.item.imgUrl}
              />
            </div>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
