import {Badge, ButtonGroup, Dropdown, FloatingLabel, ListGroup, ListGroupItem, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";
import Form from 'react-bootstrap/Form';
import {API_URL} from "../../../../config";


function FlashcardOptions(props){


  const [show, setShow] = useState(false);
  const [ShowModal2, setShowModal2] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModalTwo = () => setShowModal2(false);
  const handleShowModalTwo = () => setShowModal2(true);


  /* VIC-240 */

  let[shownWord, setShowWord] = useState("")

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${sessionStorage.getItem('token')}`);
    myHeaders.append("Cookie", "csrftoken=afXBilocRuFLnYhMQA7k60LRU9WX5ulNNzbahvbzIevwWZxAmnOWPC8yyoM1TsEC; messages=.eJxtzMEKgzAMgOFXCTlnIoJ3YY-wo0gpNXaRNgFTD3v7uZ29fvD_84wh7G4aKrvHzEg9DT3h03STo8YmpsCPGqWAszZoBru9dco_6pLVDhe6vYyErzOlS7azlA-4ZOUVRCH6_3GVyxdMZixk:1nX2r9:xSWaIiqs4LUJIrfBmjb9cAJ2mSusq5Sevrs0xEzEHDY");

    const formdata = new FormData();
        formdata.append('title', title);
        //formdata.append('file', file, file.name);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    let addWordString = API_URL + '/api/vocab/sets/addWord';
    fetch(addWordString, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

  return(
      <Dropdown>
        <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
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
                        <Badge onClick={()=>console.log('You clicked submit.')} type="button"> + </Badge>
                        </ListGroupItem>

                    <ListGroupItem as="li" className="d-flex justify-content-between align-items-start">
                        <div>Hello</div>
                        <div>你好</div>
                        <Badge onClick={()=>console.log('You clicked submit.')} type="button"> + </Badge>

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
