import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { Redirect } from "react-router";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import styles from "./styles";
import { TextField } from "@material-ui/core/";
import { Form, Field } from "react-final-form";
import ItemPreviewProvider, {
  ItemPreviewContext
} from "../../context/ItemPreviewProvider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const onSubmitFunc = values => {
  console.log(values);
};

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Form
            onSubmit={onSubmitFunc}
            validate={updatePreview} // CHANGE THIS
            render={({ handleSubmit, form, pristine, validate, invalid }) => (
              <form className={classes.container}>
                <h1 className={classes.title}>Share. Borrow. Prosper</h1>

                <FormControl fullWidth>
                  <Button
                    component="file"
                    type="file"
                    placeholder="SELECT AN IMAGE "
                    validate={validate}
                    className={classes.button_large}
                    color="primary"
                  >
                    Upload an image
                    {({ input, meta }) => (
                      <Input
                        id="imgUrl"
                        type="file"
                        inputProps={{
                          ...input,
                          autoComplete: "off"
                        }}
                        value={input.value}
                      />
                    )}
                  </Button>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel htmlFor="titleItem">Name your Item</InputLabel>

                  <Field
                    name="titleItem"
                    component="input"
                    type="text"
                    placeholder={state.item.titleItem}
                    validate={validate}
                    className={classes.textField}
                  >
                    {({ input, meta }) => (
                      <Input
                        id="titleItem"
                        type="text"
                        inputProps={{
                          ...input,
                          autoComplete: "off"
                        }}
                        value={input.value}
                      />
                    )}
                  </Field>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel htmlFor="describe">Describe Your Item</InputLabel>

                  <Field
                    name="describe"
                    component="Input"
                    type="text box"
                    placeholder={state.item.Describe}
                    validate={validate}
                  >
                    {({ input, meta }) => (
                      <Input
                        id="describe"
                        type="text"
                        className={classes.field_large}
                        multiline
                        inputProps={{
                          ...input,
                          autoComplete: "off"
                        }}
                        value={input.value}
                      />
                    )}
                  </Field>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="tags">Add some tags</InputLabel>

                  <Field
                    name="tags"
                    component="select"
                    type="checkbox"
                    placeholder={state.item.tags}
                    validate={validate}
                  >
                    <option />
                    <option type="checkbox">fun</option>
                    <option>sunny</option>
                  </Field>
                </FormControl>
                <FormControl>
                  <Button
                    component="submit"
                    type="submit"
                    placeholder="Share"
                    validate={validate}
                    className={classes.button_small}
                    color="primary"
                  >
                    share
                    {({ input, meta }) => (
                      <Input
                        id="ShareBtn"
                        type="submit"
                        inputProps={{
                          ...input,
                          autoComplete: "off"
                        }}
                        value={input.value}
                      />
                    )}
                  </Button>
                </FormControl>
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareForm);
