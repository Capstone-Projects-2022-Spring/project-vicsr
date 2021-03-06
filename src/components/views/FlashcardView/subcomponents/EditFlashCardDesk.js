import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";
import { render } from "react-dom";
import {API_URL} from "../../../../config";


function EditFlashCardDesk(props){
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file, setFile] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    // get user input
    const title = e.target.elements.formTitleName.value;
    //file gotten via state on change in form below

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

    let addFlashCardString = API_URL + '/api/vocab/sets/add';
    fetch(addFlashCardString, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    setValidated(true);
    handleClose();
  }

  return (
    <>
      <Button
          className="btn-block w-100 my-2"
          variant="warning"
          onClick={handleShow}
      >Add Deck</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Deck</Modal.Title>
          <Modal.Title>New Deck</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit.bind(this)}>

                {/*File Name*/}
                <Form.Group className="mb-3" controlId="formTitleName">
                    <Form.Label>Deck Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter card name" inputRef={(ref) => {this.title = ref}} required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a card name.
                    </Form.Control.Feedback>
                </Form.Group>


              <Button type="submit"> Create </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditFlashCardDesk