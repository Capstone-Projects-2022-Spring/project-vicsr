import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import { Modal, Form } from "react-bootstrap";
import { render } from "react-dom";
//import OptionButton from "./OptionButton";
import {API_URL} from '../../../config'
import PropTypes from "prop-types";


function WordInfoModal(props) {

  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  return (
    <>
      <Modal show={props.show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.wordData.word
                ? <p>"{props.wordData.word}"</p>
                : <p>No word selected</p>
            }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.wordData.trans
              ? <p>Translation: {props.wordData.trans}</p>
              : <p>No translation</p>
          }
          <br/>
          {props.wordData.def
              ? <p>Definition: {props.wordData.def}</p>
              : <p>No definition</p>

          }
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WordInfoModal
