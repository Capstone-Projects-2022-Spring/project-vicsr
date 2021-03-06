import {Badge, ButtonGroup, Dropdown, FloatingLabel, ListGroup, ListGroupItem, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";
import Form from 'react-bootstrap/Form';
import {API_URL} from "../../../../config";
import FlashCard from "./FlashCard";


function FlashcardOptions(props){


  const [show, setShow] = useState(false);
  const [ShowModal2, setShowModal2] = useState(false);
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseModalTwo = () => setShowModal2(false);
  const handleShowModalTwo = () => setShowModal2(true);

  const [addCards, setAddCards] = useState();


  /* VIC-240 */

  let[shownWord, setShowWord] = useState("")

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${sessionStorage.getItem('token')}`);
    myHeaders.append("Cookie", "csrftoken=afXBilocRuFLnYhMQA7k60LRU9WX5ulNNzbahvbzIevwWZxAmnOWPC8yyoM1TsEC; messages=.eJxtzMEKgzAMgOFXCTlnIoJ3YY-wo0gpNXaRNgFTD3v7uZ29fvD_84wh7G4aKrvHzEg9DT3h03STo8YmpsCPGqWAszZoBru9dco_6pLVDhe6vYyErzOlS7azlA-4ZOUVRCH6_3GVyxdMZixk:1nX2r9:xSWaIiqs4LUJIrfBmjb9cAJ2mSusq5Sevrs0xEzEHDY");

    const formdata = new FormData();
        formdata.append('title', title);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
   //Why is this here
     {/*
     let addWordString = API_URL + '/api/vocab/sets/addWord';
     fetch(addWordString, requestOptions)
         .then(response => response.text())
         .then(result => console.log(result))
         .catch(error => console.log('error', error));
     */}

  //Body: {set_id, word_id}
    const handleE = (e) => {
        e.preventDefault();


    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    const set_id = e.target.elements.formSet.value;
    const word_id = e.target.elements.formWord.value;
    }

  /*Get Remove Api*/
    var requestOptionsRemove = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
    };

  let removeDeckString = API_URL + '/api/vocab/delete/'+props.studysetsid;
    function deleteDeck(){
        fetch(removeDeckString,requestOptionsRemove)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }


    /*Get Rename Api*/
    const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    // get user input
    const title = e.target.elements.formTitleName.value;

    const formdata = new FormData();
        formdata.append('title', title);

    var requestOptions2 = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    let RenameDeckString = API_URL + '/api/vocab/sets/update/'+props.studysetsid;
    fetch(RenameDeckString, requestOptions2)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setValidated(true);
    handleClose();
  }
  return(
      <Dropdown className="w-100">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="w-100">
          ???
        </Dropdown.Toggle>

        <Dropdown.Menu>

            {/*Add cards Function*/}
            <Dropdown.Item onClick={handleShowModalTwo}>Add Cards</Dropdown.Item>

            <Modal show={ShowModal2} onHide={handleCloseModalTwo} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>New Card</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ListGroup>

                    </ListGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit"> Submit </Button>
                </Modal.Footer>
            </Modal>


            {/*Remove Function*/}
            <Dropdown.Item onClick={()=>deleteDeck(props.studysetsid)} >Remove</Dropdown.Item>
            {/*<Dropdown.Item>Remove</Dropdown.Item>*/}


            {/*Rename Function*/}
            <Dropdown.Item href="#/action-1" onClick={handleShow}>Rename</Dropdown.Item>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rename</Modal.Title>
                </Modal.Header>

            <Form noValidate validated={validated} onSubmit={handleSubmit.bind(this)}>
                {/*Form For Rename File Name*/}
                <Form.Group className="mb-3" controlId="formTitleName">
                    <Form.Control type="text" placeholder="Please enter new file name" inputRef={(ref) => {this.title = ref}} required/>
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
            </Form>

            </Modal>

            {/*Remove Function*/}
            <Dropdown.Item >Remove</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
  );
}

export default FlashcardOptions
