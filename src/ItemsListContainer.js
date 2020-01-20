import React, {Component} from "react";
import {Container} from "reactstrap";

import ItemsList from "./ItemsList";
import ItemForm from "./ItemForm";

class ItemsListContainer extends Component {
  state = {
    items: [],
    query: "",
  };

  addItem = (item) => {
    this.setState(({items, ...prev}) => {
      const reference = Math.floor(Math.random() * 1e3);
      return {
        ...prev,
        items: [
          ...items, {...item, reference},
        ],
      };
    });
  };

  deleteItem = (item) => {
    let items   = Array.from(this.state.items);
    const index = items.findIndex(({reference}) => reference === item.reference);
    
    items.splice(index, 1);
    this.setState({items});
  };

  render() {
    const {items} = this.state;
    return (
      <Container>
        <h2>Items List</h2>
        <hr/>
        <ItemForm onSubmit={this.addItem}/>
        <ItemsList onDelete={this.deleteItem}{...{items}}/>
      </Container>
    );
  }
}

export default ItemsListContainer;