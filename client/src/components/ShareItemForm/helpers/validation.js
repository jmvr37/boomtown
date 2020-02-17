export default function validate(values) {
  const errors = {};
  if (!values.ItemName) {
    errors.ItemName = "Required";
  }
  if (!values.Describe) {
    errors.Describe = "Required";
  }
  if (!values.tags) {
    errors.tags = "Required";
  }
  if (!values.imageurl) {
    errors.imageurl = "Required";
  }
  /**
   * @TODO: Write the validation rules for the share form.
   *
   * An item title, description, and at least one tag is required for all items.
   */

  return errors;
}
