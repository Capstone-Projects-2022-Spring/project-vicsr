import {ButtonGroup, Dropdown, FloatingLabel, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";
import Form from 'react-bootstrap/Form';
import {API_URL} from '../../../config'


function OptionButton(props){

  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [file, setFile] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${sessionStorage.getItem('token')}`);
    myHeaders.append("Cookie", "csrftoken=afXBilocRuFLnYhMQA7k60LRU9WX5ulNNzbahvbzIevwWZxAmnOWPC8yyoM1TsEC; messages=.eJxtzMEKgzAMgOFXCTlnIoJ3YY-wo0gpNXaRNgFTD3v7uZ29fvD_84wh7G4aKrvHzEg9DT3h03STo8YmpsCPGqWAszZoBru9dco_6pLVDhe6vYyErzOlS7azlA-4ZOUVRCH6_3GVyxdMZixk:1nX2r9:xSWaIiqs4LUJIrfBmjb9cAJ2mSusq5Sevrs0xEzEHDY");

  var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
  };

    //add useEffect to wait for new status det to false, true change
    /*
   const [isDeleted,setDeletedValue] = React.useState(false);
      the function that would trigger the change >>>> .then(result => console.log(result) setDeleteValue(true)
     */

    /*Get Remove Api*/
    let removeDocumentString = API_URL + '/api/docs/delete/'+props.documentid;
    function deleteDocument(){
        fetch(removeDocumentString,requestOptions)
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
        const filename = e.target.elements.formFileNameRename.value;

        const formdata = new FormData();
            formdata.append('filename', filename);

        var requestOptions2 = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        let RenameDocumentString = API_URL + '/api/docs/update/'+props.documentid;
        fetch(RenameDocumentString, requestOptions2)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        setValidated(true);
        handleClose();
    }


  return(
      <Dropdown>
        <Dropdown.Toggle className="w-100" variant="outline-success" id="dropdown-basic">
          ☰
        </Dropdown.Toggle>

        <Dropdown.Menu>

            {/*Rename Function*/}
            <Dropdown.Item href="#/action-1" onClick={handleShow}>Rename</Dropdown.Item>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Rename</Modal.Title>
                </Modal.Header>

            <Form noValidate validated={validated} onSubmit={handleSubmit.bind(this)}>
                {/*Form For Rename File Name*/}
                <Form.Group className="mb-3" controlId="formFileNameRename">
                    <Form.Control type="text" placeholder="Please enter new file name" inputRef={(ref) => {this.filename = ref}} required/>
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
            <Dropdown.Item onClick={()=>deleteDocument(props.documentid)} >Remove</Dropdown.Item>

            {/*Some Function*/}
          <Dropdown.Item href="#/action-3">Open in new tab</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default OptionButton
