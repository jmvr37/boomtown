import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import styles from "./styles";
import { TextField } from "@material-ui/core/";
import { Form, Field } from "react-final-form";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import { graphql, compose } from "react-apollo";
import { ADD_ITEM_MUTATION, ALL_ITEMS_QUERY } from "../../apollo/queries";
//import validate from "./helpers/validation";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectTags: []
    };
  }

  tagCheck = selectTags => {
    const { tags } = this.props;
    let out = [];

    tags.map(tag => {
      if (selectTags.indexOf(tag.title) !== -1) {
        let { id, title } = tag;
        out.push({ id, title });
      }
    });
    return out;
  };

  render() {
    const { classes, tags, itemMutation } = this.props;
    console.log("tags", tags);

    // if (this.state.redirect) {
    //   return <Redirect to="/items" />;
    // }

    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview }) => (
          <Form
            onSubmit={values => {
              this.tagCheck(this.state.selectTags);
              const addMutation = {
                variables: {
                  item: {
                    title: values.titleItem, // old code values.title
                    description: values.describe, // old code line values.description
                    tags: this.tagCheck(this.state.selectTags),
                    imageUrl: values.imgUrl
                  }
                }
              };
              itemMutation(addMutation).then(() => {
                resetPreview();
                this.setState({
                  redirect: true
                });
              });
              console.log("------>", values);
            }}
            validate={updatePreview} // CHANGE THIS
            render={({
              handleSubmit,
              form,
              pristine,
              validate,
              submitting,
              invalid
            }) => (
              <form className={classes.container} onSubmit={handleSubmit}>
                <h1 className={classes.title}>Share. Borrow. Prosper</h1>

                <FormControl fullWidth>
                  <Field
                    name="imgUrl"
                    component="input"
                    type="text"
                    validate={validate}
                  >
                    {({ input, meta }) => (
                      <TextField
                        id="imgUrl"
                        type="text"
                        label="select image"
                        inputProps={{
                          ...input,
                          autoComplete: "off"
                        }}
                        value={input.value}
                      />
                    )}
                  </Field>
                </FormControl>

                <FormControl fullWidth className={classes.textField}>
                  <InputLabel htmlFor="titleItem">Name your Item</InputLabel>

                  <Field
                    name="titleItem"
                    component="input"
                    type="text"
                    placeholder={state.item.title}
                    validate={validate}
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

                <FormControl fullWidth className={classes.field_large}>
                  <InputLabel htmlFor="describe">Describe Your Item</InputLabel>

                  <Field
                    name="describe"
                    component="Input"
                    type="text box"
                    placeholder={state.item.describe}
                    // validate={validate}
                  >
                    {({ input, meta }) => (
                      <Input
                        id="describe"
                        type="text"
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
                <FormControl fullWidth className={classes.Tags}>
                  <InputLabel htmlFor="tags">Add some tags</InputLabel>

                  <Select
                    labelId="tags"
                    id="tags"
                    multiple
                    value={this.state.selectTags}
                    onChange={event => {
                      this.setState({
                        selectTags: event.target.value
                      });
                      updatePreview({
                        tags: this.tagCheck(event.target.value)
                      });
                    }}
                    input={<Input />}
                    renderValue={selected => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {tags &&
                      tags.map(tag => (
                        <MenuItem key={tag.title} value={tag.title}>
                          <Checkbox
                            checked={this.state.selectTags.indexOf(tag) > -1}
                          />
                          <ListItemText primary={tag.title} />
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <Button
                    type="submit"
                    placeholder="Share"
                    validate={validate}
                    className={classes.button_small}
                    color="primary"
                    // onSubmit={handleSubmit}
                    // onClick={onSubmitFunc => form.reset()}
                    disabled={pristine || invalid || submitting}
                  >
                    share
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
const refetchQueries = [
  {
    query: ALL_ITEMS_QUERY
  }
];
export default compose(
  graphql(ADD_ITEM_MUTATION, {
    options: {
      refetchQueries
    },
    name: "itemMutation"
  }),

  withStyles(styles)
)(ShareForm);
