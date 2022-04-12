import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";
import { render } from "react-dom";
//import OptionButton from "./OptionButton";
import {API_URL} from '../../../config'


function PopUp(){
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
    const filename = e.target.elements.formFileName.value;
    //file gotten via state on change in form below
    const mode = e.target.elements.formMode.value;
    const language = e.target.elements.formLanguage.value;
    const trans_language = e.target.elements.formTransLanguage.value;


    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${sessionStorage.getItem('token')}`);
    myHeaders.append("Cookie", "csrftoken=afXBilocRuFLnYhMQA7k60LRU9WX5ulNNzbahvbzIevwWZxAmnOWPC8yyoM1TsEC; messages=.eJxtzMEKgzAMgOFXCTlnIoJ3YY-wo0gpNXaRNgFTD3v7uZ29fvD_84wh7G4aKrvHzEg9DT3h03STo8YmpsCPGqWAszZoBru9dco_6pLVDhe6vYyErzOlS7azlA-4ZOUVRCH6_3GVyxdMZixk:1nX2r9:xSWaIiqs4LUJIrfBmjb9cAJ2mSusq5Sevrs0xEzEHDY");

    const formdata = new FormData();
        formdata.append('filename', filename);
        formdata.append('file', file, file.name);
        formdata.append('mode', mode);
        formdata.append('language', language);
        formdata.append('trans_language', trans_language);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    let addDocumentString = API_URL + '/api/docs/add/';
    fetch(addDocumentString, requestOptions)
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
          variant="success"
          onClick={handleShow}
      >Add Document</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit.bind(this)}>

                {/*File Name*/}
                <Form.Group className="mb-3" controlId="formFileName">
                    <Form.Label>File Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter file name" inputRef={(ref) => {this.filename = ref}} required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a file name.
                    </Form.Control.Feedback>
                </Form.Group>

                {/*File Upload*/}
                <Form.Group className="mb-3" controlId="formFile" >
                    <Form.Label>File</Form.Label>
                    {/*<Form.Control type="file" placeholder="Browse computer" inputRef={(ref) => {this.file = ref}} required/>*/}
                    <Form.Control type="file" placeholder="Browse computer" onChange={(e) => setFile(e.target.files[0])} required/>
                </Form.Group>

                {/*Mode Selection*/}
                <Form.Group className="mb-3" controlId="formMode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Control as="select" inputRef={(ref) => {this.mode = ref}} required>
                        <option value="">Choose study mode</option>
                        <option value="TRL">Translation</option>    {/*fix VIC-195*/}
                        <option value="DEF">Definition</option>
                    </Form.Control>
                </Form.Group>

              {/*Language Select*/}
              <Form.Group className="mb-3" controlId="formLanguage">
                  <Form.Label>Language of Original Document</Form.Label>
                  <Form.Control as="select" className="mb-3" inputRef={(ref) => {this.language = ref}} required>
                    <option value="">Choose a language </option>
                    <option value="chi-sim">Chinese</option>
                    <option value="eng">English</option>
                    <option value="fra">French</option>
                    <option value="deu">German</option>
                    <option value="lat">Latin</option>
                    <option value="spa">Spanish</option>
                  </Form.Control>
              </Form.Group>

              {/*Translation Language Select*/}
              <Form.Group className="mb-3" controlId="formTransLanguage">
                  <Form.Label>Language to Translate to</Form.Label>
                  <Form.Control as="select" className="mb-3" inputRef={(ref) => {this.transLanguage = ref}} required>
                    <option value="">Choose a language </option>
                    <option value="chi-sim">Chinese</option>
                    <option value="eng">English</option>
                    <option value="fra">French</option>
                    <option value="deu">German</option>
                    <option value="lat">Latin</option>
                    <option value="spa">Spanish</option>
                  </Form.Control>
              </Form.Group>
              <Button type="submit"> Upload </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp
