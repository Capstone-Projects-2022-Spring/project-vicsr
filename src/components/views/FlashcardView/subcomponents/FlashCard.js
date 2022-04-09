import React, {useEffect, useState} from "react";
import {API_URL} from "../../../../config";
import {ButtonGroup, Dropdown, FloatingLabel, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {render} from "react-dom";


export default function FlashCardView(){
    const [flip, setFlip] = useState(false)

    //let front_content = "FRONT CONTENT (Question)"
    //let back_content = "BACK CONTENT (Answer)"

    {/*Test Here*/}
/*
    const frontEl = useRef()
    const backEl = useRef()

    let front_content = API_URL + '/api/vocab/sets/' + '/words/';
        function frontContent(){
        fetch(front_content,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    let back_content = API_URL + '/api/vocab/sets/' + '/words/';
        function backContent(){
        fetch(back_content,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
*/

    useEffect(() => {
        //console.log("VocabPage displaying: " + props.URL);
    }, []);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${sessionStorage.getItem('token')}`);
    myHeaders.append("Cookie", "csrftoken=afXBilocRuFLnYhMQA7k60LRU9WX5ulNNzbahvbzIevwWZxAmnOWPC8yyoM1TsEC; messages=.eJxtzMEKgzAMgOFXCTlnIoJ3YY-wo0gpNXaRNgFTD3v7uZ29fvD_84wh7G4aKrvHzEg9DT3h03STo8YmpsCPGqWAszZoBru9dco_6pLVDhe6vYyErzOlS7azlA-4ZOUVRCH6_3GVyxdMZixk:1nX2r9:xSWaIiqs4LUJIrfBmjb9cAJ2mSusq5Sevrs0xEzEHDY");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let getWordsString = API_URL + '/api/vocab/sets/fromDoc/';
    function deleteDocument(){
        fetch(getWordsString,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    {/*Test End Here*/}

    return(


        <div className={`flashcard ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            {/*
            <div className="front">FRONT CONTENT HERE</div>
            <div className="back">{back_content}</div>
            */}

            <FrontSide className="front" style={{textAlign:'center', padding: '30%'}}>
                {front_content}
            </FrontSide>

            <BackSide className="back" style={{textAlign:'center', padding: '30%'}}>
                {back_content}
            </BackSide>
        </div>

    )

}