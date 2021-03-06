import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemForm from "../../components/ShareItemForm";
import ShareItemPreview from "../../components/ShareItemPreview";

/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/
// import ShareItemPreview from "../../components/ShareItemPreview";

const Share = ({ classes, tags }) => {
  return (
    <>
      <div className={classes.sharePage}>
        <ShareItemPreview />
        <ShareItemForm tags={tags} />
      </div>
    </>
  );
};

export default withStyles(styles)(Share);
