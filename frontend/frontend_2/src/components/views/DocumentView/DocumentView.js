import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {REACT_URL } from './../../../config'
import DocumentListLoader from "../../sidebars/DocumentList/DocumentListLoader.js";
import DocumentPage from "../../DocumentPage";




export default function DocumentView() {

    let[data, setData] = useState({currentDocURL: ""})

    const handleSubmit = e => {
        e.preventDefault();
        let docViewHandleSubmitString = REACT_URL + "/logout"
        window.location.replace(docViewHandleSubmitString);
    }

    useEffect(() => {
        console.log("document: " + data.currentDocURL + " chosen");
        }, [data.currentDocURL]);

    function chooseDocument(URL) {
        setData({currentDocURL: URL});
        //download image here and load in as an object
    }

    return(
    <div className="container-fluid h-100 bg-white border-danger border-5 border">
        <div className="row bg-dark">
            <div className="col-md bg-body border-bottom">
                <p>VICSR Dasboard</p>
            </div>
        </div>


        <header className="row2">
            <div className="documentList" >
                <DocumentListLoader chooseDoc = {chooseDocument}/>

            </div>
            <div className="canvas">
                <DocumentPage URL = {data.currentDocURL}/>
            </div>
            <div className="col-md bg-dark h-100">
                <form onSubmit={handleSubmit}>
                    <button type="submit"> Logout </button>
                </form>

            </div>
        </header>
        <div className="row bg-dark border-top">
            <Link to='/flashcards'>Go to flashcard view</Link>
        </div>

    </div>
    );
}