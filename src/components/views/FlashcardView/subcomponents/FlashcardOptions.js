import {ButtonGroup, Dropdown, FloatingLabel, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";
import Form from 'react-bootstrap/Form';

/*
export default function FlashCardView(){
    return(
        <div>
            <div>
                <h1>Flashcard Options!</h1>
            </div>
            <div className="option">
                <p>Study style</p>
            </div>
            <div className="option">
                <p>Theme</p>
            </div>
            <div className="option">
                <p>Delete flashcard set</p>
            </div>
        </div>
    )
}
*/

function FlashcardOptions(props){

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [file, setFile] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          ☰
        </Dropdown.Toggle>

        <Dropdown.Menu>

            {/*Rename Function*/}
            <Dropdown.Item href="#/action-1" onClick={handleShow}>Rename</Dropdown.Item>

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

            {/*Remove Function*/}
            <Dropdown.Item >Remove</Dropdown.Item>

            {/*Some Function*/}
          <Dropdown.Item href="#/action-3">Open in new tab</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default FlashcardOptions
