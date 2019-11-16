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
                type="text"
                placeholder="Name your Item"
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
                    type="password"
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
                type="text box"
                validate={validate}
              >
                <option />
                <option></option>
              </Field>
            </FormControl>
          </form>
        )}
      />
    );
  }
}

export default withStyles(styles)(ShareForm);
