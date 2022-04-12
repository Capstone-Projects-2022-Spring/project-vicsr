import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {API_URL, REACT_URL} from '../../../config'
import DocumentListLoader from "../../sidebars/DocumentList/DocumentListLoader.js";
import DocumentPage from "../../DocumentPage";
import {Button} from "react-bootstrap"
import CustomNavbar from "./CustomNavbar";


export default function DocumentView() {

    //state variables
    let[data, setData] = useState({currentDocID: "", pages: null})
    let[shownPage, setShowPage] = useState("")
    let[currentPageNumber, setCurrentPageNumber] = useState(0)
    let[currentPageID, setCurrentPageID] = useState(null)
    let[pageHighlightData, setPageHighlightData] = useState(null)
    let[needHighlight, setNeedHighlight] = useState(true)

    useEffect(() => {
        if(data.pages){
            let currentPageRef = data.pages[currentPageNumber]
            setShowPage(currentPageRef.file)
            setCurrentPageID(currentPageRef.id)
            setPageHighlightData(currentPageRef.highlight)
        }
        //console.log("document: " + shownPage + " chosen");
        //console.log("current page number is: " + currentPageNumber)
        }, [data.currentDocID, shownPage, currentPageNumber]);


    function chooseDocument(topLevelID, urls) {
        setData({currentDocID: topLevelID, pages: urls});
        setCurrentPageNumber(0)
        let currentPageRef = urls[currentPageNumber]
        setCurrentPageID(currentPageRef.id)
        setShowPage(currentPageRef.file)
        setPageHighlightData(currentPageRef.highlight)
        setNeedHighlight(true)
    }

    function previousPage() {
        if(currentPageNumber > 0){
            setNeedHighlight(true)
            setCurrentPageNumber(currentPageNumber - 1)
        }
        else{
            console.log("error, page previous clicked while on first page")
        }
    }

    function nextPage() {
        if(currentPageNumber !== data.pages.length -1){
            setNeedHighlight(true)
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
                <DocumentListLoader chooseDoc = {chooseDocument} needHighlight = {needHighlight} setNeedHighlight={setNeedHighlight}/>

            </div>
            <div className="canvas">
                <DocumentPage URL = {shownPage} highlighting = {pageHighlightData} currentPageID={currentPageID} callNewHighlight = {setNeedHighlight}/>
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