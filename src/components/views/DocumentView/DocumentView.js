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
    let[currentPage, setCurrentPage] = useState(0)
    let[pageHighlightData, setPageHighlightData] = useState(null)

    useEffect(() => {
        if(data.pages){
            setShowPage(data.pages[currentPage].file)}

            //console.log("document: " + shownPage + " chosen");
            //console.log("current page number is: " + currentPage)
        }, [data.currentDocID, shownPage, currentPage]);

    function chooseDocument(topLevelID, urls) {
        setData({currentDocID: topLevelID, pages: urls});
        setCurrentPage(0)
        setShowPage(urls[currentPage].file)
        let subPageID = urls[currentPage].id
        fetchPageHighlight(subPageID)
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
    <div className="container-fluid w-100 h-100 bg-white border-danger border-5 border">
        <div className="row bg-dark">
        </div>


        <header className="row2">
            <div className="documentList" >
                <DocumentListLoader chooseDoc = {chooseDocument}/>

            </div>
            <div className="canvas">
                <DocumentPage URL = {shownPage}/>
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