import {ButtonGroup, Dropdown, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect} from "react";
import Card from "react-bootstrap/Card";
import {FixedSizeList as List} from "react-window";


//function OptionButton(props) {
    {/*VIC-172 UI: Button to trigger Documents option menu*/}
/*

    <Dropdown as={ButtonGroup}>
        <Button variant="success">Document 2</Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic"/>
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Remove</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Open in new tab</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

    <br></br>

    return(
    )
}

export default OptionButton */


function OptionButton(props){
  return(
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          ☰
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Rename</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Remove</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Open in new tab</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default OptionButton
