import {ButtonGroup, Dropdown, FloatingLabel, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";
import Form from 'react-bootstrap/Form';
import {API_URL} from '../../../config'


{/*VIC-172 UI: Button to trigger Documents option menu*/}

function OptionButton(props){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //test function

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

    let removeDocumentString = API_URL + '/api/docs/delete/'+props.documentid;
    function deleteDocument(){
        fetch(removeDocumentString,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

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

            {/*Remove Function*/}
            {/*<Dropdown.Item href="#/action-2">Remove</Dropdown.Item>*/}

            <Dropdown.Item onClick={()=>deleteDocument(props.documentid)} >Remove</Dropdown.Item>

            {/*Some Function*/}
          <Dropdown.Item href="#/action-3">Open in new tab</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default OptionButton
