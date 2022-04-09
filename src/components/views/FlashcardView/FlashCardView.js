import './FlashCardView.css'
import FlashCard from "./subcomponents/FlashCard.js"
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import FlashcardListLoader from "./subcomponents/FlashcardListLoader";
import CustomNavbar from "../DocumentView/CustomNavbar";
import {Button} from "react-bootstrap";

export default function FlashCardView(){

    let[data, setData] = useState({currentDocID: "", pages: null})
    let[shownPage, setShowPage] = useState("")
    let[currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        if(data.pages){setShowPage(data.pages[currentPage].file)}
        //console.log("document: " + shownPage + " chosen");
        //console.log("current page number is: " + currentPage)
        }, [data.currentDocID, shownPage, currentPage]);

    function chooseStudySet(topLevelID, urls) {
        setData({currentDocID: topLevelID, pages: urls});
        setCurrentPage(0)
        setShowPage(urls[currentPage].file)
    }

    function previousPage() {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
        else{
            console.log("error, page previous clicked while on first page")
        }
    }

    function nextPage() {
        if(currentPage != data.pages.length -1){
            setCurrentPage(currentPage + 1)
        }
        else{
            console.log("error, page next clicked while on last page")
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
                <FlashCard/>    {/*drawing screen <DocumentPage URL = {shownPage}/> */}

                {/*page nav button*/}
                <div>
                    <Button variant="warning" onClick = { () => previousPage()}>Previous page</Button>
                    <Button variant="warning" onClick = { () => nextPage()}>Next page</Button>
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