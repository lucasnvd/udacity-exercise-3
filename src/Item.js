import React, {PureComponent} from "react";
import {Button, Row, Col} from "reactstrap";
import PropTypes from "prop-types";

class Item extends PureComponent {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.shape({
      reference: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };
  render() {
    const {onDelete, item} = this.props;
    return (
      <Row className="item-container">
        <Col className="item-title-container" xs={10}>
          <p className="item-title">{item.title}<br/>$ {item.price}</p>
        </Col>
        <Col className="item-button-container" xs={2}>
          <Button onClick={() => onDelete(item)} color="link">Remove</Button>
        </Col>
      </Row>
    );
  }
}

export default Item;
