/*import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class DocumentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Document</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="filename">File Name</Label>
              <Input
                type="text"
                id="file-name"
                name="filename"
                value={this.state.activeItem.filename}
                onChange={this.handleChange}
                placeholder="Enter File Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="file">File</Label>
              <Input
                type="file"
                id="file"
                name="file"
                value={this.state.activeItem.file}
                onChange={this.handleChange}
                placeholder="Choose a file"
              />
            </FormGroup>
            <FormGroup>
              <Label for="mode">Mode</Label>
              <Input
                type="text"
                id="mode"
                name="mode"
                value={this.state.activeItem.mode}
                onChange={this.handleChange}
                placeholder="Enter mode"
              />
            </FormGroup>
            <FormGroup>
              <Label for="language">Language</Label>
              <Input
                type="text"
                id="language"
                name="language"
                value={this.state.activeItem.language}
                onChange={this.handleChange}
                placeholder="Enter Language"
              />
            </FormGroup>
            <FormGroup>
              <Label for="trans-language">Language</Label>
              <Input
                type="text"
                id="trans-language"
                name="trans-language"
                value={this.state.activeItem.trans_language}
                onChange={this.handleChange}
                placeholder="Enter Translation Language"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}*/
