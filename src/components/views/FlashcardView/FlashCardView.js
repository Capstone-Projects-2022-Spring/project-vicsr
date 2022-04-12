import './FlashCardView.css'
import FlashCard from "./subcomponents/FlashCard.js"
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import FlashcardListLoader from "./subcomponents/FlashcardListLoader";
import CustomNavbar from "../DocumentView/CustomNavbar";
import {Button} from "react-bootstrap";

export default function FlashCardView(){

    let[data, setData] = useState({currentDeskID: "", cards: null})
    let[shownCard, setShowCard] = useState("")
    let[currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        if(data.cards){setShowCard(data.cards[currentPage].file)}
        //console.log("document: " + shownCard + " chosen");
        //console.log("current page number is: " + currentPage)
        }, [data.currentDeskID, shownCard, currentPage]);

    function chooseStudySet(topLevelID, urls) {
        setData({currentDeskID: topLevelID, cards: urls});
        setCurrentPage(0)
        setShowCard(urls[currentPage].file)
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
                <FlashCard URL = {shownCard}/>

                {/*page nav button*/}
                <div>
                    <Button variant="warning" onClick = { () => previousPage()}>Previous card</Button>
                    <Button variant="warning" onClick = { () => nextPage()}>Next card</Button>
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