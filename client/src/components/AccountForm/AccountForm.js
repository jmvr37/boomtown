import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { Form, Field } from "react-final-form";
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  VIEWER_QUERY
} from "../../apollo/queries";
import { graphql, compose } from "react-apollo";
import validate from "./helpers/validation";
// import PropTypes from "prop-types";
import styles from "./styles";
import { TextField } from "@material-ui/core/";

const required = value => (value ? undefined : "Required");

// const onFormSubmitFunc = values => {
//   console.log(values);
// };

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null
    };
  }

  render() {
    const { classes, loginMutation, signupMutation } = this.props;
    console.log(this.props);
    return (
      <Form
        onSubmit={values => {
          const user = { variables: { user: values } };
          console.log(user, this.state);
          if (this.state.formToggle) {
            loginMutation(user).catch(error =>
              this.setState({ error, problem: "Wrong password" })
            );
          } else {
            signupMutation(user).catch(error =>
              this.setState({
                error,
                problem: "please verify your info"
              })
            );
          }
        }}
        validate={validate}
        render={({ handleSubmit, form, pristine, validate, invalid }) => (
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
                </Field>
              </FormControl>
            )}
            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="email">Email</InputLabel>

              <Field
                name="email"
                component="input"
                type="text"
                validate={validate}
              >
                {({ input, meta }) => (
                  <Input
                    id="email"
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

            <FormControl fullWidth className={classes.formControl}>
              <InputLabel htmlFor="password">Password</InputLabel>

              <Field
                name="password"
                component="Input"
                type="password"
                validate={validate}
              >
                {({ input, meta }) => (
                  <Input
                    id="password"
                    type="password"
                    inputProps={{
                      ...input,
                      autoComplete: "off"
                    }}
                    value={input.value}
                  />
                )}
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
                    pristine || invalid // @TODO: This prop should depend on pristine or valid state of form
                  }
                >
                  {this.state.formToggle ? "Enter" : "Create Account"}
                </Button>
                <Typography>
                  <button
                    className={classes.formToggle}
                    type="button"
                    onClick={() => {
                      form.reset();
                      this.setState({
                        error: null,
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
              {(this.state.error &&
                this.state.formToggle &&
                this.state.error.graphQLErrors.message) ||
                (this.state.error &&
                  !this.state.formToggle &&
                  this.state.error.graphQLErrors.message)}
            </Typography>
          </form>
        )}
      />
    );
  }
}

// const refetchQueries = [
//   {
//     query: VIEWER_QUERY
//   }
// ];

// export default compose(
//   graphql(SIGNUP_MUTATION, {
//     options: {
//       refetchQueries
//     },
//     name: "signupMutation"
//   }),
//   graphql(LOGIN_MUTATION, {
//     options: {
//       refetchQueries
//     },
//     name: "loginMutation"
//   }),

export default compose(
  graphql(SIGNUP_MUTATION, {
    options: {
      query: {
        VIEWER_QUERY
      }
    },
    name: "signupMutation"
  }),
  graphql(LOGIN_MUTATION, {
    options: {
      query: {
        VIEWER_QUERY
      }
    },
    name: "loginMutation"
  }),
  withStyles(styles)
)(AccountForm);

// values => {
//   const user = { variables: { user: values } };
//   this.state.formToggle
//     ? loginMutation(user).catch(error => this.setState({ error }))
//     : signupMutation(user).catch(error => this.setState({ error }));
// }

// values => {
//   const user = { variables: { user: values } };
//   if (this.state.formToggle) {
//     loginMutation(user).catch(error =>
//       this.setState({ error, problem: "Wrong password" })
//     );
//   } else {
//     signupMutation(user).catch(error =>
//       this.setState({
//         error,
//         problem: "please verify your info"
//       })
//     );
//   }
//   console.log(values);
// }

//
