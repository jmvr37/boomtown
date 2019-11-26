import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import ItemCard from "../Card/ItemCard";

export class ShareItemPreview extends Component {
  render() {
    return (
      <ItemPreviewContext.Consumer>
        {({ state }) => {
          console.log(state.item.ItemName);
          return (
            <div>
              <ItemCard />
              {state && state.item && state.item.ItemName}
              {/* <img src={state.imgUrl} />
            <h1>{state.title}</h1>
            <h1>{state.description}</h1> */}
            </div>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
