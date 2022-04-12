import React, {useEffect, useRef, useState} from "react";
import {API_URL} from "../../../../config";
import {ButtonGroup, Card, Dropdown, FloatingLabel, Modal, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import {render} from "react-dom";
import CanvasDraw from "react-canvas-draw";


export default function FlashCardView(props) {
    const [flip, setFlip] = useState(false)

    const [deskscontent, setDeskscontent] = React.useState(null);

    //let front_content = "FRONT CONTENT (Question)"
    //let back_content = "BACK CONTENT (Answer)"


    {/*Test Here*/}

        let front_content = API_URL + '/api/vocab/sets/' + props.studysetid + '/words/';
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

    //testing data set
    const cardsData = [
        {id: 10, word: "School", translate: "School1", definition: "" },
        {id: 20, word: "Purpose", translate: "", definition: "Purpose2" },
        {id: 30, word: "Estimated", translate: "Estimated1", definition: "" },
        {id: 40, word: "Describing", translate: "", definition: "Describing2" },
        {id: 50, word: "Architecture", translate: "", definition: "Architecture2" }
    ];

/*    const [cardsData, setCardsData] = useState([]);
      const [cardComponents, updateCardComponents] = useState([]);

      const piecedata = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        };

    useEffect(() => {
    fetch("http://localhost:3000/api/vocab/sets/", piecedata)
      .then((res) => res.json())
      .then((res) => setCardsData(res));
  }, []);

  useEffect(() => {
    updateCardComponents(
      cardsData.map((card) => (
        <Card
          id={card.id}
          word={card.word}
          translate={card.translate}
          definition={card.definition}
          parent_set={(card.parent_set)}
        />
      ))
    );
  }, [cardsData]);
  */



    async function fetchWordsBySetID(){
        let getword = API_URL + "/api/vocab/sets/" + props.studysetid+ '/words/';
        const cardsData = await fetch(fetchWordsBySetID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        });

        const studySet = await cardsData.json();
        console.log("Returning: " + studySet[0].id);

        return studySet[0].id;
    }

    async function fetchVocab_front() {
        let front_content = API_URL + '/api/vocab/sets/' + props.studysetid + '/words/';
        const response_front = await fetch(front_content, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + sessionStorage.getItem('token')
            },
        });
        const front = await response_front.json();
        }

        async function fetchVocab_back() {
        let back_content = API_URL + '/api/vocab/sets/' + props.studysets.id + '/words/';
        const response_back = await fetch(back_content, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + sessionStorage.getItem('token')
            },
        });
        const back = await response_back.json();
    }

        useEffect(() => {
        //console.log("DocumentPage displaying: " + props.URL);
        }, [props.URL]);


    useEffect(() => {
        //console.log("VocabPage displaying: " + props.URL);
        //frontContent()

        if(setFlip === false){
            getDesksContent()
            .then(response => response.text())
            .then(result => console.log(result))
            console.log("deskscontent", deskscontent);
        }

    }, []);

    const getDesksContent = async () => {
        let contents = API_URL + '/api/vocab/sets/' + props.studysetid + '/words/';
        //let contents = API_URL + '/api/vocab/allWords';
        const response_contents = await fetch(contents, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token " + sessionStorage.getItem('token')
            },
        });
        const front = await response_contents.json();
    }

    {/*******************************************/}

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${sessionStorage.getItem('token')}`);
    myHeaders.append("Cookie", "csrftoken=afXBilocRuFLnYhMQA7k60LRU9WX5ulNNzbahvbzIevwWZxAmnOWPC8yyoM1TsEC; messages=.eJxtzMEKgzAMgOFXCTlnIoJ3YY-wo0gpNXaRNgFTD3v7uZ29fvD_84wh7G4aKrvHzEg9DT3h03STo8YmpsCPGqWAszZoBru9dco_6pLVDhe6vYyErzOlS7azlA-4ZOUVRCH6_3GVyxdMZixk:1nX2r9:xSWaIiqs4LUJIrfBmjb9cAJ2mSusq5Sevrs0xEzEHDY");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    {/*Test End Here*/}

    return(

        <div className={`flashcard ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            {/*
            <div className="front">FRONT CONTENT HERE</div>
            <div className="back">{back_content}</div>
            */}

            <FrontSide className="front" style={{textAlign:'center', padding: '30%'}}>
                {/*front_content*/}
                {/*front= {frontEl}*/}

                {cardsData.map(cardsData => {
                    return(
                <div key={cardsData.id}>
                    {cardsData.word}
                </div>
                    )
                })}


                {/*<div>{cardComponents}</div>;*/}
{/*             <div>{cardComponents.map(cardsData => {
                    return(
                <div key={cardsData.id}>
                    {cardsData.translate} {cardsData.definition}
                </div>
                    )
                })}</div>;
*/}

            </FrontSide>

            <BackSide className="back" style={{textAlign:'center', padding: '30%'}}>
                {/*back_content*/}
                {/*back= {backEl}*/}

                {cardsData.map(cardsData => {
                    return(
                <div key={cardsData.id}>
                    {cardsData.translate} {cardsData.definition}
                </div>
                    )
                })}

            </BackSide>
        </div>

    )

}