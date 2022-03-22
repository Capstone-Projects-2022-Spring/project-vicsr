/*
export default function DocumentUpload(){

    return(
        <div>
            <div>
                <h1>Document Upload!</h1>
            </div>
            <div className="option">
                <p>Upload here</p>
            </div>
        </div>

    )

}
*/

import React, { Component } from "react";

class InputPage extends Component {

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupFileAddon01">
            Upload
          </span>
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



