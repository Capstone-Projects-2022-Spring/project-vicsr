import './FlashCardView.css'
import FlashCard from "./subcomponents/FlashCard.js"
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import FlashcardListLoader from "./subcomponents/FlashcardListLoader";
import CustomNavbar from "../DocumentView/CustomNavbar";
import {Button, ButtonGroup} from "react-bootstrap";
import {API_URL} from "../../../config";
import EditFlashCardDesk from "./subcomponents/EditFlashCardDesk";

async function updateCardDifficulty(flashcardId, difficulty) {
    try {
        let apiString = API_URL + '/api/vocab/sets/words/update/' + flashcardId;

        let requestHeader = new Headers();
        requestHeader.append("Authorization", "Token " + sessionStorage.getItem('token'));

        let requestData = new FormData();
        requestData.append("ranking", difficulty);

        let requestOptions = {
            method: 'POST',
            headers: requestHeader,
            body: requestData,
            redirect: 'follow'
        }

        return fetch(apiString, requestOptions)
            .then(response => response.text)
            .then(result => console.log(result))
            .then(error => console.log('error', error));

    } catch (e) {
        console.error(e);
    }
}

export default function FlashCardView(props){

    let[data, setData] = useState({ currentDeskID: "", cards: [
        {id: 0, word: "School", translation: "Escuella", definition: "" },
        {id: 1, word: "Purpose", translation: "", definition: "Purpose2" },
        {id: 2, word: "Estimated", translation: "Estimated1", definition: "" },
        {id: 3, word: "Describing", translation: "", definition: "Describing2" },
        {id: 4, word: "Architecture", translation: "", definition: "Architecture2" }
    ]})
    let[currentPage, setCurrentPage] = useState(0)


    useEffect(() => {

    }, [data.currentDeskID, currentPage]);

    function chooseStudySet(topLevelID, urls) {
       // alert("HELLO IM CHOSEN DECK "+topLevelID)

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${sessionStorage.getItem('token')}`);
    myHeaders.append("Cookie", "csrftoken=afXBilocRuFLnYhMQA7k60LRU9WX5ulNNzbahvbzIevwWZxAmnOWPC8yyoM1TsEC; messages=.eJxtzMEKgzAMgOFXCTlnIoJ3YY-wo0gpNXaRNgFTD3v7uZ29fvD_84wh7G4aKrvHzEg9DT3h03STo8YmpsCPGqWAszZoBru9dco_6pLVDhe6vYyErzOlS7azlA-4ZOUVRCH6_3GVyxdMZixk:1nX2r9:xSWaIiqs4LUJIrfBmjb9cAJ2mSusq5Sevrs0xEzEHDY");
    myHeaders.append('Content-Type', 'application/json')

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    //Call FlashCard Word API here
        let flashcarddata = API_URL + '/api/vocab/sets/' + topLevelID + '/words';
            fetch(flashcarddata,requestOptions)
            .then(response => response.json())
            .then(result => /*console.log(result)*/ setData({currentDeskID: topLevelID, cards: result}))
            .catch(error => console.log('error', error));
            console.log(data.cards)

        setCurrentPage(0)
    }

    function previousPage() {if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
        else{
            console.log("error, card previous clicked while on first card")
        }
    }

    function nextPage() {
        if(currentPage != data.cards.length -1){
            setCurrentPage(currentPage + 1)
        }
        else{
            console.log("error, card next clicked while on last card")
        }
    }

    async function updateCurrentCardDifficulty(difficulty) {
        console.log(JSON.stringify(data.cards));
        if (difficulty < 1 || difficulty > 3) {
            console.log("Error: Invalid difficulty range. Please pass 0-2");
        } else {
            await updateCardDifficulty(data.cards[currentPage].id, difficulty);
        }
    }

    return(

        <div id="flashcardViewContainer" className="container-fluid">

            <div id="flashcardMainContent" className="row">
                <div id="flashcardStudySetList" className="col-3 studySetList" >

                    <EditFlashCardDesk/>
                    <FlashcardListLoader chooseDesk = {chooseStudySet}/>
                </div>
                <div id="flashcardContainer" className="col-6 canvas greenBorder">
                    <div id="flashcardCardAndButtons" className="">
                        <div id="flashcardCard" className="centerChildrenHorizontal">

                            {/*data Loop*/}
                            {data.cards.map((cardsData,index) => {
                                return(
                                     (currentPage === index) ? <FlashCard DATA = {cardsData}/> : <></>
                                )
                            })}

                        </div>
                        <div className="centerChildrenHorizontal my-2">
                            <button
                                className="btn btn-success btn-circle btn-xl border-white border-2 mx-2"
                                onClick={() => updateCurrentCardDifficulty(1)}
                                >I know it</button>
                            <button
                                className="btn btn-warning btn-circle btn-xl border-white border-2 mx-2"
                                onClick={() => updateCurrentCardDifficulty(2)}
                                >I'm not sure</button>
                            <button
                                className="btn btn-danger btn-circle btn-xl border-white border-2 mx-2"
                                onClick={() => updateCurrentCardDifficulty(3)}
                                >I don't know</button>
                        </div>
                        <div className="centerChildrenHorizontal">
                            <Button variant="outline-warning" onClick = { () => previousPage()}>Previous card</Button>
                            <Button variant="outline-warning" onClick = { () =>nextPage()}>Next card</Button>
                        </div>
                    </div>
                </div>
                <div id="flashcardRightFillerPanel" className="col-3">
                    Chat
                </div>
            </div>
            <div id="flashcardNavbarContainer">
                <CustomNavbar/>
            </div>
        </div>
    )
}