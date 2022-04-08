import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {REACT_URL } from '../../../config'
import DocumentListLoader from "../../sidebars/DocumentList/DocumentListLoader.js";
import DocumentPage from "../../DocumentPage";
import {Button} from "react-bootstrap"
import CustomNavbar from "./CustomNavbar";
import "./DocumentView.css";


export default function DocumentView() {

    let[data, setData] = useState({currentDocID: "", pages: null})
    let[shownPage, setShowPage] = useState("")
    let[currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        if(data.pages){setShowPage(data.pages[currentPage].file)}
        //console.log("document: " + shownPage + " chosen");
        //console.log("current page number is: " + currentPage)
        }, [data.currentDocID, shownPage, currentPage]);

    function chooseDocument(topLevelID, urls) {
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
    <div id="documentViewContainer" className="container-fluid w-100">
        <div id="documentDashboardRow" className="row row2">
            <div className="col-3 h-100 border border-primary border-3">
                <DocumentListLoader chooseDoc = {chooseDocument}/>
            </div>
            <div id="documentCanvasContainer" className="col-6 border border-warning border-3">
                <DocumentPage URL = {shownPage}/>
                <div>
                    <Button onClick = { () => previousPage()}>Previous page</Button>
                    <Button onClick = { () => nextPage()}>Next page</Button>
                </div>
            </div>
            <div className="col-3 border border-danger border-3">
                <p>Vocabulary List</p>
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