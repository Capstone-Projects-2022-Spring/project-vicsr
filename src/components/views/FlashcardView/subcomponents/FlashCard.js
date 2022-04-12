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


    {/******************** Testing New API Call Method ****************************/}
/*       let [data, setData] = useState({studySetFromServer:[], numDesks:0, isFetching: false})

        async function fetchWordsBySetID(setID) {
        console.log("setID: " + setID);
        try {
            let vocabByDocIdApiString = API_URL + "/api/vocab/sets/" + setID + "/words";
            console.log("API URL: " + vocabByDocIdApiString);

            const response = await fetch(vocabByDocIdApiString, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + sessionStorage.getItem('token')
                },
            });
            const words = await response.json();
            console.log("Study set words: " + JSON.stringify(words, null, 4));
            setData({studySetFromServer: words, numDesks: words.length, isFetching: false})
        } catch (error){
            console.error(error);
            setData({studySetFromServer: [], numDesks: 0, isFetching: false})
        }
    }

    let [deskscontent, setCurrentWordData] = useState({word: "", trans: "", def: ""})

        function setCurrentWordDataByWordIndex(index) {
        const wordObj = props.words[index];

        setCurrentWordData({
            word: String(wordObj.word),
            trans: String(wordObj.translate),
            def: String(wordObj.definition)
        })
    }
*/

    {/*Test Here*/}

    /*    let front_content = API_URL + '/api/vocab/sets/' + props.studysetid + '/words/';
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




    {/************  Test3 *******************************/}
/*
    const [cardsData, setCardsData] = useState([]);
    const [cardComponents, updateCardComponents] = useState([]);

      const option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
        };

    useEffect(() => {
    fetch("http://localhost:3000/api/vocab/sets/", option)
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
    {/************ End Test3 *******************************/}


    /*
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
    }*/

    /* Maybe remove this cuz it seem useless
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
    */


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

    {/************  Test2 *******************************/}
/*
        this.state = {
            items: [],
            DataisLoaded: false
        };

       // ComponentDidMount is used to
    // execute the code

        fetch("https://jsonplaceholder.typicode.com/users", {
              method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })


        const {items } = this.state;

*/
        {/************  End Test2 *******************************/}



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

                {/************ Call Test2 *******************************/}
                {/*items.map((item) => (
                    <ol key = { item.id } >
                       User_Name: { item.username },
                        Full_Name: { item.name },
                        User_Email: { item.email }
                    </ol>
                ))
            */}

                {props.DATA.word}


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

                {/*   {cardsData.map(cardsData => {
                    return(
                <div key={cardsData.id}>
                    {cardsData.translate} {cardsData.definition}
                </div>
                    )
                })}
*/}
                {props.DATA.translate}
                {props.DATA.definition}

            </BackSide>
        </div>

    )

}


/*
https://www.codingdeft.com/posts/react-fetch-data-api/
https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/
https://jsonplaceholder.typicode.com/guide/
*/
