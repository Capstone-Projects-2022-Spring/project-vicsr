import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class InputPage extends Component {


  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <Button className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </Button>
        </div>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
          />
          <label className="custom-file-label" htmlFor="inputGroupFile01">
            Choose file
          </label>
        </div>
      </div>
    );
  }
}

export default InputPage;





