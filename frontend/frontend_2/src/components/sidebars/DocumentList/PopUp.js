import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";
import { render } from "react-dom";
//import OptionButton from "./OptionButton";


function PopUp() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
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
            <Form noValidate validated={validated}>
                {/*File Name*/}
                <Form.Group className="mb-3" controlId="formFileName">
                    <Form.Label>File Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter file name" required/>
                    <Form.Control.Feedback type="invalid">
                        Please provide a file name.
                    </Form.Control.Feedback>
                </Form.Group>

                {/*File Upload*/}
                <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>File</Form.Label>
                    <Form.Control type="file" placeholder="Browse computer" required/>
                </Form.Group>


                {/*Mode Selection*/}
                <Form.Group className="mb-3" controlId="formMode">
                    <Form.Label>Mode</Form.Label>
                    <Form.Select required>
                        <option value="">Choose study mode</option>
                        <option value="TLR">Translation</option>
                        <option value="DEF">Definition</option>
                    </Form.Select>
                </Form.Group>

              {/*Language Select*/}
              <Form.Group className="mb-3" controlId="formLanguage">
                  <Form.Label>Language of Original Document</Form.Label>
                  <Form.Select required className="mb-3">
                    <option value="">Choose language </option>
                    <option value="1">Chinese</option>
                    <option value="2">English</option>
                    <option value="3">French</option>
                    <option value="4">German</option>
                    <option value="6">Latin</option>
                    <option value="5">Spanish</option>
                  </Form.Select>
              </Form.Group>

              {/*Translation Language Select*/}
              <Form.Group className="mb-3" controlId="formTransLanguage">
                  <Form.Label>Language to Translate to</Form.Label>
                  <Form.Select required className="mb-3">
                    <option value="">Choose language </option>
                    <option value="1">Chinese</option>
                    <option value="2">English</option>
                    <option value="3">French</option>
                    <option value="4">German</option>
                    <option value="6">Latin</option>
                    <option value="5">Spanish</option>
                  </Form.Select>
              </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp
