import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Row, Button, Col } from 'reactstrap';

class ItemsList extends Component {
  state = {
    items: [{
      title: "Casio Watch",
      price: 67.60
    }],
    query: "",
  };

  handleAddItem = (item) => {
    this.setState(({items, ...prev}) => ({ ...prev, items: [...items, item] }));
  };

  deleteItem = (index) => {
    const {items} = this.state;
    
    items.splice(index, 1);
    this.setState({items});
  };

  render() {
    const {items} = this.state;
    return (
      <ListGroup>
      {items.map(({title, price}, index) => 
<ListGroupItem tag="div" key={index}>
<Row className="item-container">
<Col className="item-title-container" xs={10}>
<p className="item-title">{title}<br/>$ {price}</p>
</Col>
<Col className="item-button-container" xs={2}>
<Button onClick={() => this.deleteItem(index)} color="link">
Remove
</Button>
</Col>
</Row>
</ListGroupItem>)}
</ListGroup>
    );
  }
}

export default ItemsList;
