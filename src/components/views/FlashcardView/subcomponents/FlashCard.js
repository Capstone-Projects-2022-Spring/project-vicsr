import React, {useEffect, useRef, useState} from "react";
import {API_URL} from "../../../../config";
import {ButtonGroup, Card, Dropdown, FloatingLabel, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {render} from "react-dom";


export default function FlashCardView(props) {
    const [flip, setFlip] = useState(false)

    const [deskscontent, setDeskscontent] = React.useState(null);

    useEffect(() => {
        if(setFlip === false){
            getDesksContent()
            .then(response => response.text())
            .then(result => console.log(result))
            console.log("deskscontent", deskscontent);
        }

    }, []);

    const getDesksContent = async () => {
        let contents = API_URL + '/api/vocab/sets/' + props.studysetid + '/words/';
        const response_contents = await fetch(contents, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + sessionStorage.getItem('token')
            },
        });
        const front = await response_contents.json();
    }


    return(

        //Click to flip flashcard
        <div className={`flashcard ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>

            {/*Get word api to the front side of the flashcard*/}
            <FrontSide className="front" style={{textAlign:'center', padding: '30%'}}>
                {props.DATA.word}
            </FrontSide>

            {/*Get translation/definition api to the back side of the flashcard*/}
            <BackSide className="back" style={{textAlign:'center', padding: '30%'}}>
                {props.DATA.translation}
                {props.DATA.definition}
            </BackSide>
        </div>

    )

}
