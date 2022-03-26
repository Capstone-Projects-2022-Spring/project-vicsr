import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import {render} from "react-dom";
import OptionButton from "./OptionButton";

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  {/*File Upload Button*/}
          <div className="input-group">
            <div className="input-group-prepend">
          {/*<Button className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </Button>
          */}
            </div>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
          {/*<label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>*/}
            </div>
          </div>


  {/*Mode Selection*/}
          <br></br>
          <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation2"
            name="radio-stacked"
            required
          />

          {/*Doc upload*/}
          <label
            className="custom-control-label"
            htmlFor="customControlValidation2"
          >
            Translate Mode
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation3"
            name="radio-stacked"
            required
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation3"
          >
            Definition Mode
          </label>
          <div className="invalid-feedback">
            Choose one of the Mode
          </div>
        </div>

  {/*Language Select*/}
          <select className="browser-default custom-select2">
            <option>Choose a Language of the Original Document </option>
            <option value="1">Chinese</option>
            <option value="2">English</option>
            <option value="3">French</option>
            <option value="4">German</option>
            <option value="6">Latin</option>
            <option value="5">Spanish</option>
          </select>

          <select className="browser-default custom-select2">
            <option>Choose a Language to Translate</option>
            <option value="1">Chinese</option>
            <option value="2">English</option>
            <option value="3">French</option>
            <option value="4">German</option>
            <option value="6">Latin</option>
            <option value="5">Spanish</option>
          </select>


        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopUp
