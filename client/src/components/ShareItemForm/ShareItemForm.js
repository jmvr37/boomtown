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
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";

const onSubmitFunc = values => {
  console.log(values);
};

// const handleChange = event => {
//   selectTag(event.tags.value);
// };

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      selectTags: []
    };
  }

  render() {
    const { classes, tags } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ state, updatePreview, resetPreview, selectTag }) => (
          <Form
            onSubmit={onSubmitFunc}
            validate={updatePreview} // CHANGE THIS
            render={({ handleSubmit, form, pristine, validate, invalid }) => (
              <form className={classes.container}>
                <h1 className={classes.title}>Share. Borrow. Prosper</h1>

                <FormControl fullWidth>
                  <Field
                    id="imgUrl"
                    render={({ input, meta }) => (
                      <Button
                        component="file"
                        placeholder="SELECT AN IMAGE "
                        // validate={validate}
                        className={classes.button_large}
                        color="primary"
                        value={input.value}
                        accept="image/*"
                        type="file"
                      >
                        Upload an image
                      </Button>
                    )}
                  />
                </FormControl>

                <FormControl fullWidth className={classes.textField}>
                  <InputLabel htmlFor="titleItem">Name your Item</InputLabel>

                  <Field
                    name="titleItem"
                    component="input"
                    type="text"
                    placeholder={state.item.titleItem}
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
                    placeholder={state.item.Describe}
                    validate={validate}
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
                    // onChange={handleChange}
                    input={<Input />}
                    renderValue={selected => selected.join(", ")}
                    // MenuProps={MenuProps}
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
                    onClick={() => form.reset()}
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

export default withStyles(styles)(ShareForm);
