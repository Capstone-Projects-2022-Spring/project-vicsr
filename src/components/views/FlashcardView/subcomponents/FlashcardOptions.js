import {Badge, ButtonGroup, Dropdown, FloatingLabel, ListGroup, ListGroupItem, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";
import Form from 'react-bootstrap/Form';


function FlashcardOptions(props){


  const [show, setShow] = useState(false);
  const [ShowModal2, setShowModal2] = useState(false);
  const [validated, setValidated] = useState(false);
  const [file, setFile] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModalTwo = () => setShowModal2(false);
  const handleShowModalTwo = () => setShowModal2(true);

  return(
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          ☰
        </Dropdown.Toggle>

        <Dropdown.Menu>

            {/*Add card Function*/}
            <Dropdown.Item onClick={handleShowModalTwo}>Add Card</Dropdown.Item>

            <Modal show={ShowModal2} onHide={handleCloseModalTwo} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Card</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                {/*/!*Card Name*!/*/}
                {/*<Form.Group className="mb-0" controlId="formCardName">*/}
                {/*    <Form.Label>Front</Form.Label>*/}
                {/*    <Form.Control type="text" placeholder="Enter a Front word" inputRef={(ref) => {this.filename = ref}} required/>*/}
                {/*    <Form.Control.Feedback type="invalid">*/}
                {/*        Please provide a file name.*/}
                {/*    </Form.Control.Feedback>*/}
                {/*</Form.Group>*/}

                {/*<Form.Group className="mb-3" controlId="formFileName">*/}
                {/*    <Form.Label>Back</Form.Label>*/}
                {/*    <Form.Control type="text" placeholder="Enter a Back word" inputRef={(ref) => {this.filename = ref}} required/>*/}
                {/*    <Form.Control.Feedback type="invalid">*/}
                {/*        Please provide a file name.*/}
                {/*    </Form.Control.Feedback>*/}
                {/*</Form.Group>*/}

                    <ListGroup>
                        <ListGroupItem as="li" className="d-flex justify-content-between align-items-start">
                            <div>Bye</div>
                            <div>Wiedersehen</div>
                            <Badge type="button"> + </Badge>
                        </ListGroupItem>

                        <ListGroupItem as="li" className="d-flex justify-content-between align-items-start">
                            <div>Hello</div>
                            <div>你好</div>
                            <Badge type="button"> + </Badge>
                        </ListGroupItem>


                    </ListGroup>



                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit"> Submit </Button>
                </Modal.Footer>
            </Modal>


            {/*Remove Function*/}
            <Dropdown.Item >Remove</Dropdown.Item>


            {/*Rename Function*/}
            <Dropdown.Item onClick={handleShow}>Rename</Dropdown.Item>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rename</Modal.Title>
                </Modal.Header>

                {/*Form For Rename File Name*/}
                <Form.Group className="mb-3" controlId="formDeskNameRename">
                    <Form.Control type="text" placeholder="Please enter new desk name" inputRef={(ref) => {this.filename = ref}} required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a file name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                        OK
                    </Button>
                </Modal.Footer>

            </Modal>

        </Dropdown.Menu>
      </Dropdown>
  );
}

export default FlashcardOptions
