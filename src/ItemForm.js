import React, {Component} from "react";
import {Row, Col, Button, FormGroup, Card, CardBody, CardHeader, Label, Input} from "reactstrap";
import PropTypes from "prop-types";

const initialAttributes = {
  price: 0.0,
  title: "",
};

class ItemForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    attributes: initialAttributes,
  };
  updateAttribute = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    let value  = e.target.value;
    
    if (type === "number") {
      value = parseFloat(value); 
    }
    
    this.setState(({attributes}) => ({
      attributes: {
        ...attributes,
        [name]: value,
      },
    }));
  };
  submitForm = () => {
    const {attributes} = this.state;
    const {onSubmit}   = this.props;
    
    onSubmit(attributes);
    this.setState(() => ({attributes: initialAttributes}));
  };
  render() {
    const {attributes} = this.state;
    return (
      <Card>
        <CardHeader>Add new item</CardHeader>
        <CardBody>
          <Row>
            <Col xs={12}>
              <FormGroup>
                <Label>Item's Name</Label>
                <Input name="title" onChange={this.updateAttribute} value={attributes.title} type="text"/>
              </FormGroup>
            </Col>
            <Col xs={12}>
              <FormGroup>
                <Label>Item's Price</Label>
                <Input name="price" onChange={this.updateAttribute} value={attributes.price} type="number"/>
              </FormGroup>
            </Col>
            <Col xs={12}>
              <Button onClick={this.submitForm} color="primary">Add</Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default ItemForm;
