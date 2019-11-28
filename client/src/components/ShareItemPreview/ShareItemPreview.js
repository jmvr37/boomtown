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
          console.log(state.item);
          return (
            <div>
              <ItemCard item={state.item} />
            </div>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
