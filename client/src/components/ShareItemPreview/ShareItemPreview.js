import React, { component } from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";

export class ShareItemPreview extends Component {
  render() {
    return (
      <ItemPreviewContext.Consumer>
        {({ state }) => {
          <div>
            <img src={state.imgUrl} />
            <h1>{state.title}</h1>
            <h1>{state.description}</h1>
          </div>;
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareItemPreview);
