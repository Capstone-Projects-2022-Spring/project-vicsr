import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";
import { render } from "react-dom";
//import OptionButton from "./OptionButton";
import {API_URL} from '../../../config'



function PopUp() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function addDocument(document) {

    let addDocumentString = API_URL + '/api/docs/add/'
    return fetch(addDocumentString, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`

        },
        body: JSON.stringify(document)
    })
        .then(data => data.json())
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("filename: " + e.target.elements.formFileName.value )
    // console.log("file: " + e.target.elements.formFile.value )
    console.log("file: " + e.target.formFile.files[0])
    console.log("mode: " + e.target.elements.formMode.value )
    console.log("language: " + e.target.elements.formLanguage.value )
    console.log("trans language: " + e.target.elements.formTransLanguage.value )

    const filename = e.target.elements.formFileName.value;
    // const file = e.target.elements.formFile.value;
    const file = e.target.formFile.files[0];
    const mode = e.target.elements.formMode.value;
    const language = e.target.elements.formLanguage.value;
    const trans_language = e.target.elements.formTransLanguage.value;

    const form = e.target;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    addDocument({filename, file, mode, language, trans_language})

    setValidated(true);
    handleClose();
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add Document
      </Button>

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
                    <Form.Control type="file" placeholder="Browse computer" inputRef={(ref) => {this.file = ref}} required/>
                </Form.Group>

                {/*Mode Selection*/}
                <Form.Group className="mb-3" controlId="formMode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Control as="select" inputRef={(ref) => {this.mode = ref}} required>
                        <option value="">Choose study mode</option>
                        <option value="TLR">Translation</option>
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
