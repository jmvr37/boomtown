const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  AppBar: {
    height: 64
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -20,
    marginRight: 20
  },
  link_to: {
    textDecoration: "none",
    color: "black"
  },
  link_button_menu: {
    marginRight: 20,
    borderRadius: 25,
    padding: 15
  },
  button_menu: {
    marginRight: 10,
    height: 20,
    width: 20,
    background: "black"
  },
  button_menu_icon: {
    fontSize: 15
  },
  link: {
    margin: 10,
    textDecoration: "none",
    color: "black"
  },
  shareSmth: {
    marginTop: "30px"
  },
  shareMenu: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  navB: {
    display: "flex",
    justifyContent: "space-between"
  },
  cardContent: {
    width: "100%"
  }
});

export default styles;
