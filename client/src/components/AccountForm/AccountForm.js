import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
// import {
//   LOGIN_MUTATION,
//   SIGNUP_MUTATION,
//   VIEWER_QUERY
// } from "../../apollo/queries";
// import { graphql, compose } from "react-apollo";
import validate from "./helpers/validation";

import styles from "./styles";
import { TextField } from "@material-ui/core";

// const required = value => (value ? undefined : "Required");

const onFormSubmitFunc = values => {
  console.log(values);
};

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Form
        onSubmit={onFormSubmitFunc}
        validate={validate}
        render={({ handleSubmit, form, pristine, validate }) => (
          <form onSubmit={handleSubmit} className={classes.accountForm}>
            {!this.state.formToggle && (
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="fullname">Username</InputLabel>
                <Field name="fullmane" component="input" type="text">
                  {props => (
                    <Input
                      id="fullname"
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
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>

              <Field
                name="email"
                component="Input"
                type="text"
                validate={validate}
              >
                {({ props, meta }) => (
                  <TextField
                    id="email"
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
              <InputLabel htmlFor="password">Password</InputLabel>

              <Field
                name="password"
                component="Input"
                type="password"
                validate={validate}
              >
                {props => (
                  <Input
                    id="password"
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
            <FormControl className={classes.formControl}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Button
                  type="submit"
                  className={classes.formButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  disabled={
                    pristine || false // @TODO: This prop should depend on pristine or valid state of form
                  }
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      // @TODO: Reset the form on submit
                      form.reset();
                      this.setState({
                        formToggle: !this.state.formToggle
                      });
                    }}
                  >
                    {this.state.formToggle
                      ? "Create an account."
                      : "Login to existing account."}
                  </button>
                </Typography>
              </Grid>
            </FormControl>
            <Typography className={classes.errorMessage}>
              {/* @TODO: Display sign-up and login errors */}
            </Typography>
          </form>
        )}
      />
    );
  }
}

// @TODO: Use compose to add the login and signup mutations to this components props.
// @TODO: Refetch the VIEWER_QUERY to reload the app and access authenticated routes.
export default withStyles(styles)(AccountForm);
