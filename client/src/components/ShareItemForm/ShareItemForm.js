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

            render={({ handleSubmit, form, pristine, validate }) => (
              <form className={classes.ShareForm}>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="ItemName"> </InputLabel>

                  <Field
                    name="ItemName"
                    component="Input"
                    type="file"
                    placeholder="Name your Item"
                    validate={validate}
                  >
                    {({ props, meta }) => (
                      <TextField
                        id="ItemName"
                        type="file"
                        inputProps={{
                          autoComplete: "off"
                        }}
                        value={props.input.value}
                      />
                    )}
                    ;
                  </Field>
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="ItemName"> </InputLabel>

                  <Field
                    name="ItemName"
                    component="Input"
                    type="text"
                    placeholder={state.item.title}
                    validate={validate}
                  >
                    {({ props, meta }) => (
                      <TextField
                        id="ItemName"
                        type="text"
                        inputProps={{
                          autoComplete: "off"
                        }}
                        value={props.input.value}
                      />
                    )}
                    ;
                  </Field>
                </FormControl>

                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel htmlFor="Describe">Describe Your Item</InputLabel>

                  <Field
                    name="Describe"
                    component="Input"
                    type="text box"
                    placeholder="Describe Your Item"
                    validate={validate}
                  >
                    {props => (
                      <Input
                        id="Describe"
                        className={classes.TextField}
                        multiline
                        inputProps={{
                          autoComplete: "off"
                        }}
                        value={props.input.value}
                      />
                    )}
                    ;
                  </Field>
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
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
              </form>
            )}
          />
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

export default withStyles(styles)(ShareForm);
