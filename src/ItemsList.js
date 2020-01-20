import React, {Fragment, Component} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";

import ItemForm from "./ItemForm";
import Item from "./Item";

class ItemsList extends Component {
  state = {
    items: [{
      reference: 13456,
      title: "Casio Watch",
      price: 67.60
    }],
    query: "",
  };

  addItem = (item) => {
    console.log(item);
    
    this.setState(({items, ...prev}) => {
      const reference = Math.floor(Math.random() * 1e3);
      return {
        items: [
          ...items, {...item, reference},
        ],
      };
    });
  };

  deleteItem = (item) => {
    const {items} = this.state;
    const index   = items.findIndex(({reference}) => reference === item.reference);
    
    items.splice(index, 1);
    this.setState({items});
  };

  render() {
    const {items} = this.state;
    return (
      <Fragment>
        <ItemForm onSubmit={this.addItem}/>
        <ListGroup>
          {items.map((item, index) => 
            <ListGroupItem tag="div" key={index}>
              <Item onDelete={this.deleteItem}{...{item}}/>
            </ListGroupItem>)}
        </ListGroup>
      </Fragment>
    );
  }
}

export default ItemsList;
