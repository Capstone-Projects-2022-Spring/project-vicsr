import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {API_URL, REACT_URL} from '../../../config'
import DocumentListLoader from "../../sidebars/DocumentList/DocumentListLoader.js";
import DocumentPage from "../../DocumentPage";
import {Button} from "react-bootstrap"
import CustomNavbar from "./CustomNavbar";
import "./DocumentView.css";
import VocabularyListLoader from "../VocabularyView/VocabularyListLoader"
import CustomHeader from "./CustomHeader";


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
    <div id="documentViewContainer" className="container-fluid w-100">
        <CustomHeader/>
        <div id="documentDashboardRow" className="row">
            <div id="documentListSidebar" className="col-2 h-100">
                <DocumentListLoader chooseDoc = {chooseDocument} needHighlight = {needHighlight} setNeedHighlight={setNeedHighlight}/>
            </div>
            <div id="documentCanvasContainer" className="col contentBorder">
                <DocumentPage URL = {shownPage} highlighting = {pageHighlightData} currentPageID={currentPageID}/>
                <div
                    id="documentCanvasButtons"
                    className="container-fluid centerChildrenHorizontal w-100"
                    style={{padding: "0px 100px 0px 100px"}}
                >
                    <Button
                        onClick = { () => previousPage()}
                        className="col-5"
                        variant="outline-primary"
                        style={{marginRight: "2px"}}
                    >Previous page</Button>
                    <Button
                        onClick = { () => nextPage()}
                        className="col-5"
                        variant="outline-primary"
                        style={{marginLeft: "2px"}}
                    >Next page</Button>
                </div>

            </div>
            <div className="col-2">
                <VocabularyListLoader currentDoc = {data.currentDocID}/>
            </div>
        </div>
        <div id="footerNavigationRow" className="row">
            <div className="col-12 p-0">
                <CustomNavbar/>
            </div>
        </div>

    </div>
    );
}