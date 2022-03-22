
/*
export default function DocumentOption(){
    return(
        <div>
            <div>
                <h1>Document Options!</h1>
            </div>
            <div className="option">
                <p>Translate/Definition Mode</p>
            </div>
            <div className="option">
                <p>Choose language</p>
            </div>
            <div className="option">
                <p>Rename Document</p>
            </div>
            <div className="option">
                <p>Delete Document</p>
            </div>
        </div>
    )
}*/

//collect user input to api

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

export default function App() {
  return (
    <div style={{ display: 'block',
                  width: 700,
                  padding: 30 }}>
      <h4>React-Bootstrap Dropdown Component</h4>
      <Dropdown>
        <Dropdown.Toggle variant="success">
          Open Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Translate/Definition Mode
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Choose language
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Rename Document
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Delete Document
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
