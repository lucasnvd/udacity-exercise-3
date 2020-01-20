import React, {PureComponent} from "react";
import {ListGroup, ListGroupItem, Button, Alert, Row, Col} from "reactstrap";
import PropTypes from "prop-types";

class NoItemsAlert extends PureComponent {
  render () {
    return (
      <Alert color="danger">
        Ops, items not found.<br/>
        <small>You probably didn't add any item, use the form above to insert some items.</small>
      </Alert>
    );
  }
}

class ItemsList extends PureComponent {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    items: (
      PropTypes.arrayOf(
        PropTypes.shape({
          reference: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ).isRequired
    ),
  };
  render() {
    const {onDelete, items} = this.props;
    return (
      <div className="list-container">
        {items.length === 0 
          ? <NoItemsAlert/>
          :
          <ListGroup>
            {items.map((item, index) => 
              <ListGroupItem tag="div" key={index}>
                <Row className="item-container">
                  <Col className="item-title-container" xs={10}>
                    <p className="item-title">{item.title}<br/>$ {item.price}</p>
                  </Col>
                  <Col className="item-button-container" xs={2}>
                    <Button onClick={() => onDelete(item)} color="link">Remove</Button>
                  </Col>
                </Row>
              </ListGroupItem>)}
          </ListGroup>}
      </div>
    );
  }
}

export default ItemsList;
