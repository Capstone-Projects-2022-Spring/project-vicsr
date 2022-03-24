import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/Button";

class FormsPage extends React.Component {
  render() {
    return (
      <form className="was-validated" noValidate>

          {/*Doc rename*/}
      <Form.Group className="mb-3">
      <Form.Label htmlFor="AbleTextInput">Document Name</Form.Label>
      <Form.Control id="AbleTextInput" input name="able input" />
    </Form.Group>

          <Form.Group className="mb-3">

              </Form.Group>

          {/*Doc upload*/}
          <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="validatedCustomFile"
            required
          />
          <label
            className="custom-file-label"
            htmlFor="validatedCustomFile"
          >
            Choose file...
          </label>
          <div className="invalid-feedback">
            No file were selected
          </div>

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

        {/*Doc upload*/}
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

        </div>

          <Button className="input-group-text" id="inputGroupFileAddon01">
            Sumbit
          </Button>


      </form>
    );
  }
}

export default FormsPage;



