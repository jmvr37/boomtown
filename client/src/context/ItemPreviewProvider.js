import React, { createContext, Component } from "react";

export const ItemPreviewContext = createContext();
const InitialState = {
  title: "Name your Item",
  description: "Describe your item",
  tags: [],
  imgUrl: "https://via.placeholder.com/300",
  itemowner: {},
  create: new Date()
};

class ItemPreviewProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { item: InitialState };
  }
  updatePreview = item => {
    const updatedItem = { ...this.state.item, ...item };
    console.log(updatedItem);
    this.setState({ item: updatedItem });
  };

  resetPreview = () => {
    this.setState({ item: InitialState });
  };

  render() {
    return (
      <ItemPreviewContext.Provider
        value={{
          state: this.state,
          updatePreview: this.updatePreview,
          resetPreview: this.resetPreview
        }}
      >
        {this.props.children}
      </ItemPreviewContext.Provider>
    );
  }
}

export default ItemPreviewProvider;
