import './FlashCardView.css'
import FlashCard from "./subcomponents/FlashCard.js"
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import FlashcardListLoader from "./subcomponents/FlashcardListLoader";
import CustomNavbar from "../DocumentView/CustomNavbar";
import {Button} from "react-bootstrap";
import {API_URL} from "../../../config";

export default function FlashCardView(){
""
    let[data, setData] = useState({ currentDeskID: "", cards: [
        {id: 0, word: "School", translation: "Escuella", definition: "" },
        {id: 1, word: "Purpose", translation: "", definition: "Purpose2" },
        {id: 2, word: "Estimated", translation: "Estimated1", definition: "" },
        {id: 3, word: "Describing", translation: "", definition: "Describing2" },
        {id: 4, word: "Architecture", translation: "", definition: "Architecture2" }
    ]})
    let[shownCard, setShowCard] = useState("")
    let[currentPage, setCurrentPage] = useState(0)

    //testing data set
    ////const cardsData = ;

    useEffect(() => {
        //if(data.cards){setShowCard(data.cards[currentPage].file)}
        //console.log("document: " + shownCard + " chosen");
        //console.log("current page number is: " + currentPage)
        }, [data.currentDeskID, shownCard, currentPage]);

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

        let flashcarddata = API_URL + '/api/vocab/sets/' + topLevelID + '/words';
            fetch(flashcarddata,requestOptions)
            .then(response => response.json())
            .then(result => /*console.log(result)*/ setData({currentDeskID: topLevelID, cards: result}))
            .catch(error => console.log('error', error));
    console.log(data.cards)
        /*
        API CALL HERE!!!!!
         */
        //setData({currentDeskID: 22, cards:[{id: 42, word: "School", translate: "Escuella", definition: "" },{id: 84, word: "How", translate: "Como", definition: "" },{id: 2, word: "Apple", translate: "Manzana", definition: "" },]})
/*
API call to load flash cards here > setData({topLevelID, cards: [{id:0,word:"bannana",translate:"platino"...etc}]})
 */
       // setData({currentDeskID: topLevelID, cards: urls});
        setCurrentPage(0)
        //setShowCard(urls[currentPage].file)
    }

    function previousPage() {
        if(currentPage > 0){
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


    return(

    /*
        <div className= "container-fluid w-100 h-100 bg-white">
            <div className="row">
                <div className="col">
                    <FlashcardListLoader/>
                </div>
                <div className="col">
                    <FlashCard/>
                </div>
            </div>
            <CustomNavbar/>
        </div>
     */

        <div className="container-fluid w-100 h-100 bg-white border-danger border-5 border">
            <div className="row bg-dark">
        </div>


        <header className="row2">
            <div className="studySetList" >
                <FlashcardListLoader chooseDesk = {chooseStudySet}/>
            </div>

            <div className="canvas">

                {data.cards.map((cardsData,index) => {
                    return(
                         (currentPage === index) ? <FlashCard DATA = {cardsData}/> : <></>
                /*<div key={cardsData.id}>
                    {cardsData.word}
                </div>*/
                    )
                })}

                {/*page nav button*/}
                <div>
                    <Button variant="warning" onClick = { () => previousPage()}>Previous card</Button>
                    <Button variant="warning" onClick = { () =>nextPage()}>Next card</Button>
                </div>

            </div>
            <div className="col-md bg-dark h-100">

            </div>

        </header>

        <div className="row bg-dark border-top">
            <CustomNavbar/>
        </div>

    </div>

    )
}