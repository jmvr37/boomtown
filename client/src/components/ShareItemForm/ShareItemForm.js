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
            // validate={validate}

            render={({ handleSubmit, form, pristine, validate, invalid }) => (
              <form className={classes.rightContainer}>
                <h1 className={classes.title}>Share. Borrow. Prosper</h1>

                <FormControl fullWidth className={classes.rightContainer}>
                  <div>
                    <Button
                      component="file"
                      type="file"
                      placeholder="SELECT AN IMAGE "
                      validate={validate}
                      className={classes.button_large}
                      color="primary"
                    >
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
                  </div>
                </FormControl>

                <FormControl fullWidth className={classes.container}>
                  <InputLabel htmlFor="ItemName">Name your Item</InputLabel>

                  <Field
                    name="ItemName"
                    component="input"
                    type="text"
                    placeholder={state.item.title}
                    validate={validate}
                  >
                    {({ input, meta }) => (
                      <Input
                        id="ItemName"
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

                <FormControl fullWidth className={classes.container}>
                  <InputLabel htmlFor="Describe">Describe Your Item</InputLabel>

                  <Field
                    name="Describe"
                    component="Input"
                    type="text box"
                    placeholder="Describe Your Item"
                    validate={validate}
                  >
                    {({ input, meta }) => (
                      <Input
                        id="Describe"
                        className={classes.TextField}
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
                <FormControl fullWidth className={classes.container}>
                  <InputLabel htmlFor="tags">Add some tags</InputLabel>

                  <Field
                    name="tags"
                    component="select"
                    type="checkbox"
                    placeholder="Add some tags"
                    validate={validate}
                  >
                    <option />
                    <option type="checkbox">fun</option>
                    <option>sunny</option>
                  </Field>
                </FormControl>
                <FormControl fullWidth className={classes.rightContainer}>
                  <div>
                    <Button
                      component="submit"
                      type="submit"
                      placeholder="Share "
                      validate={validate}
                      className={classes.button_large}
                      color="primary"
                    >
                      {({ input, meta }) => (
                        <Input
                          id="ShareBtn"
                          type="file"
                          inputProps={{
                            ...input,
                            autoComplete: "off"
                          }}
                          value={input.value}
                        />
                      )}
                    </Button>
                  </div>
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
