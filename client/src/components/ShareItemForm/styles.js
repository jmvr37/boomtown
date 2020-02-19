// const input_large_field = "70%";
const styles = theme => ({
  container: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "350px"
    },
    fontWeight: 800,
    fontSize: "22px"
  },

  textField: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
    marginTop: "20px"
  },
  menu: {
    width: 200
  },
  button_small: {
    marginTop: "20px",
    marginLeft: theme.spacing.unit
  },
  button_large: {
    marginLeft: theme.spacing.unit,
    width: "100%",
    backgroundColor: "#f9a825 !important",
    color: "black !important"
  },
  button_large_off: {
    marginLeft: theme.spacing.unit,
    width: "100%",
    color: "grey"
  },

  title: {
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(0),
    marginTop: 0,
    fontSize: "40px"
  },
  field_large: {
    width: "100%",
    marginLeft: theme.spacing.unit,
    marginBottom: "20px"
  },
  picker: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0,
    cursor: "pointer"
  },
  Tags: {
    marginTop: "20px",
    width: "100%",
    marginLeft: "8px"
  },

  input: {
    display: "none"
  }
});

export default styles;
