import {ButtonGroup, Dropdown, FloatingLabel, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";
import Form from 'react-bootstrap/Form';


//function OptionButton(props) {
    {/*VIC-172 UI: Button to trigger Documents option menu*/}
/*

    <Dropdown as={ButtonGroup}>
        <Button variant="success">Document 2</Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic"/>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Remove</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Open in new tab</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

    <br></br>

    return(
    )
}

export default OptionButton */


function OptionButton(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          ☰
        </Dropdown.Toggle>

        <Dropdown.Menu>

            {/*Rename Function*/}
          <Dropdown.Item href="#/action-1" onClick={handleShow}>Rename</Dropdown.Item>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rename</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                      <FloatingLabel label="Please enter a new name for the item:">
                          <Form.Control type="text" placeholder="Default input" />
                      </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

          <Dropdown.Item href="#/action-2">Remove</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Open in new tab</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default OptionButton
