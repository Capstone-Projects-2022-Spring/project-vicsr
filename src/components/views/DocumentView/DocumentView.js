import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {REACT_URL } from '../../../config'
import DocumentListLoader from "../../sidebars/DocumentList/DocumentListLoader.js";
import DocumentPage from "../../DocumentPage";
import {Button} from "react-bootstrap"
import CustomNavbar from "./CustomNavbar";


export default function DocumentView() {

    let[data, setData] = useState({currentDocID: "", pages: null})
    let[shownPage, setShowPage] = useState("")
    let[currentPageNumber, setCurrentPageNumber] = useState(0)
    let[pageHighlightData, setPageHighlightData] = useState(null)

    useEffect(() => {
        if(data.pages){
            let currentPageRef = data.pages[currentPageNumber]
            setShowPage(currentPageRef.file)
            setPageHighlightData(fetchPageHighlight(currentPageRef.id))
        }
        //console.log("document: " + shownPage + " chosen");
        //console.log("current page number is: " + currentPageNumber)
        }, [data.currentDocID, shownPage, currentPageNumber]);

    function fetchPageHighlight(subPageID) {
        //LOGIC FOR TALKING TO SERVER HERE, GETTING HIGHLIGHT DATA, AND FORMATTING
        //RETURN SO WE CAN SET WITH USESTATE

        //return string of save data if availible

        //return null if no entry
        return null

    }

    function chooseDocument(topLevelID, urls) {
        setData({currentDocID: topLevelID, pages: urls});
        setCurrentPageNumber(0)
        setShowPage(urls[currentPageNumber].file)
        let subPageID = urls[currentPageNumber].id
        setPageHighlightData(fetchPageHighlight(subPageID))
    }

    function previousPage() {
        if(currentPageNumber > 0){
            setCurrentPageNumber(currentPageNumber - 1)
        }
        else{
            console.log("error, page previous clicked while on first page")
        }
    }

    function nextPage() {
        if(currentPageNumber != data.pages.length -1){
            setCurrentPageNumber(currentPageNumber + 1)
        }
        else{
            console.log("error, page next clicked while on last page")
        }
    }

    return(
    <div className="container-fluid w-100 h-100 bg-white border-danger border-5 border">
        <div className="row bg-dark">
        </div>


        <header className="row2">
            <div className="documentList" >
                <DocumentListLoader chooseDoc = {chooseDocument}/>

            </div>
            <div className="canvas">
                <DocumentPage URL = {shownPage} highlighting = {pageHighlightData} />
                <div>
                    <Button onClick = { () => previousPage()}>Previous page</Button>
                    <Button onClick = { () => nextPage()}>Next page</Button>
                </div>
            </div>
            <div className="col-md bg-dark h-100">

            </div>
        </header>
        <div className="row bg-dark border-top">
            <CustomNavbar/>
        </div>

    </div>
    );
}